/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 * 
 * Maintainer Description: 必须添加环境变量 API_TOKEN
 */

const deploymentsEndpoint =
  "https://api.cloudflare.com/client/v4/accounts/5e5ac3054112f395febf4678f54f8278/pages/projects/cloudnative/deployments";
const projectEndpoint =
  "https://api.cloudflare.com/client/v4/accounts/5e5ac3054112f395febf4678f54f8278/pages/projects/cloudnative";


async function fetchAndSaveData(env, token) {
  try {
    // 使用 Token 发起请求并获取响应头
    const dockerResponse = await fetch('https://hub.geekery.cn/v2/ratelimitpreview/test/manifests/latest', {
      method: 'HEAD',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const headers = dockerResponse.headers;

    // 提取所需的数据
    const date = headers.get('date');
    const dockerRatelimitSource = headers.get('docker-ratelimit-source');
    const ratelimitLimit = headers.get('ratelimit-limit');
    const ratelimitRemaining = headers.get('ratelimit-remaining');
    let serverStatus = "new";

    // 查询是否已存在相同的 dockerRatelimitSource 记录
    const existingRecord = await env.d1db.prepare('SELECT * FROM dockerratelimitLimit WHERE docker_ratelimit_source = ?')
      .bind(dockerRatelimitSource)
      .first();

    if (existingRecord) {
      // 更新现有记录
      serverStatus = "update";
      await env.d1db.prepare("UPDATE dockerratelimitLimit SET date = ?, ratelimit_limit = ?, ratelimit_remaining = ?, server_status = ?, update_time = CURRENT_TIMESTAMP WHERE docker_ratelimit_source = ?").bind(date, ratelimitLimit, ratelimitRemaining, serverStatus, dockerRatelimitSource).run();
      console.log("Record updated successfully");
    } else {
      // 插入新记录
      await env.d1db.prepare('INSERT INTO dockerratelimitLimit (date, docker_ratelimit_source, ratelimit_limit, ratelimit_remaining, server_status) VALUES (?, ?, ?, ?, ?)')
        .bind(date, dockerRatelimitSource, ratelimitLimit, ratelimitRemaining, serverStatus)
        .run();
      console.log('Data saved successfully');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function saveTokenJob(env) {
  const tokenResponse = await fetch('https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull');
  const tokenData = await tokenResponse.json();
  const token = tokenData.token;
  for (let i = 0; i < 20; i++) {
    
    await fetchAndSaveData(env, token);
    await sleep(600);
  }
}


export default {
  async fetch(request, env) {
    const init = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        // We recommend you store the API token as a secret using the Workers dashboard or using Wrangler as documented here: https://developers.cloudflare.com/workers/wrangler/commands/#secret
        "Authorization": "Bearer " + env.API_TOKEN,
      },
    };

    const style = `body { padding: 6em; font-family: sans-serif; } h1 { color: #f6821f }
    table,td {
      border: 1px solid #333;
    }
    
    thead,
    tfoot {
      background-color: #333;
      color: #fff;
    }
    `;
    let content = "<h2>Project</h2>";

    let response = await fetch(projectEndpoint, init);
    const projectResponse = await response.json();
    content += `<p>Project Name: ${projectResponse.result.name}</p>`;
    content += `<p>Project ID: ${projectResponse.result.id}</p>`;
    content += `<p>Pages Subdomain: ${projectResponse.result.subdomain}</p>`;
    content += `<p>Domains: ${projectResponse.result.domains}</p>`;
    content += `<a href="${projectResponse.result.canonical_deployment.url}"><p>Latest preview: ${projectResponse.result.canonical_deployment.url}</p></a>`;

    response = await fetch(deploymentsEndpoint, init);
    const deploymentsResponse = await response.json();

    let tb_body = "";
    for (const deployment of deploymentsResponse.result) {
      if ( `${deployment.environment}` === 'production' ) {
        tb_body += `<tr>
        <td>${deployment.project_name}</td>
        <td><a href="${deployment.url}"><p>${deployment.url}</p></a></td>
        <td>${deployment.created_on}</td>
        <td>${deployment.id}</td>
      </tr>`;
      }
      
    }

    let docker_body = "";
    try {
      // 查询数据库中的所有记录
      const queryResult = await env.d1db.prepare('SELECT * FROM dockerratelimitLimit ORDER BY update_time DESC').all();
  
      // 构建表格行的 HTML 代码
      
      for (const record of queryResult.results) {
        docker_body += `<tr>
          <td>${record.docker_ratelimit_source}</td>
          <td>${record.date}</td>
          <td>${record.ratelimit_limit}</td>
          <td>${record.ratelimit_remaining}</td>
          <td>${record.server_status}</td>
          <td>${record.update_time}</td>
        </tr>`;
      }
  
    } catch (error) {
      console.error('Error fetching data from database:', error);
      return "";
    }

    const url = new URL(request.url);
    if (url.pathname === "/docker") {
      let html =  `
      <!DOCTYPE html>
      <head>
        <title>Docker CloudFlare Insight</title>
      </head>
      <body>
        <style>body { padding: 2em; font-family: sans-serif; } h1 { color: #f6821f }
        table,td {
          border: 1px solid #333;
        }
        
        thead,
        tfoot {
          background-color: #333;
          color: #fff;
        }</style>
        <div id="container">

        <div id="container">
        <h2>Docker Rate Limit Insight</h2>
        <table>
          <thead>
            <tr>
              <th colspan="1">Docker Rate Limit Source</th>
              <th colspan="1">Date</th>
              <th colspan="1">Rate Limit</th>
              <th colspan="1">Rate Limit Remaining</th>
              <th colspan="1">Server Status</th>
              <th colspan="1">Update Time</th>
            </tr>
          </thead>
          <tbody>
          ${docker_body}
          </tbody>
        </table>
        </div>
      </body>`;
      return new Response(html, {
        headers: {
          "Content-Type": "text/html;charset=UTF-8",
        },
      });
    }

    let html = `
      <!DOCTYPE html>
      <head>
        <title>CloudNative DevOps Pages Project</title>
      </head>
      <body>
        <style>${style}</style>
        <div id="container">
        ${content}
        <h2>Deployment Server List</h2>
        <table>
          <thead>
            <tr>
              <th colspan="1">Server Address</th>
              <th colspan="1">Update Date</th>
              <th colspan="1">Rate Limit</th>
              <th colspan="1">Rate Limit Remaining</th>
              <th colspan="1">Server Status</th>
              <th colspan="1">Update Time</th>
            </tr>
          </thead>
          <tbody>
          ${docker_body}
          </tbody>
        </table>
        </div>
        <div id="container">
        
        <h2>Deployments</h2>
        <table>
          <thead>
            <tr>
              <th colspan="1">project_name</th>
              <th colspan="1">url</th>
              <th colspan="1">created_on</th>
              <th colspan="1">id</th>
            </tr>
            ${tb_body}
          </thead>
          <tbody>
          </tbody>
        </table>
        </div>
      </body>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
      },
    });
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(saveTokenJob(env));
  }
}