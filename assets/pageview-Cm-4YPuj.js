import{a5 as r}from"./app-Dsdnm6YT.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.geekery.cn/",reaction:!0};const o=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-Dsdnm6YT.js").then(t=>t.af),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
