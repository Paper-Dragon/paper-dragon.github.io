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

    content += `<h2>Deployments</h2>`;
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



    let html = `
      <!DOCTYPE html>
      <head>
        <title>CloudNative DevOps Pages Project</title>
      </head>
      <body>
        <style>${style}</style>
        <div id="container">
        ${content}
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
  }
}