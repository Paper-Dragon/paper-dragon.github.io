import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as n,b as e,d as o}from"./app-KTtNSx6m.js";const r={},_=e("h1",{id:"powershell-操作系统禁止运行脚本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#powershell-操作系统禁止运行脚本","aria-hidden":"true"},"#"),o(" PowerShell 操作系统禁止运行脚本")],-1),c=e("blockquote",null,[e("p",null,'在使用 VS code 自带终端的时会报出"系统禁止脚本运行的错误"，原因是因为 PowerShell 执行策略的问题。')],-1),s=e("h2",{id:"解决方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决方法","aria-hidden":"true"},"#"),o(" 解决方法：")],-1),a=e("pre",null,[e("code",null,`管理员身份运行 PowerShell
执行：get-ExecutionPolicy，若显示 Restricted 表示状态是禁止的
执行：set-ExecutionPolicy，会提示输入参数
输入 RemoteSigned 会提示进行选择
输入：Y，回车
`)],-1),d=[_,c,s,a];function h(i,u){return l(),n("div",null,d)}const p=t(r,[["render",h],["__file","PowerShell 操作系统禁止运行脚本.html.vue"]]);export{p as default};
