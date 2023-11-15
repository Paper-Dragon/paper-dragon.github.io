import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,a as t,e as o}from"./app-32d03bb7.js";const a={},i=t("h1",{id:"bad-substitution",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bad-substitution","aria-hidden":"true"},"#"),o(" bad substitution")],-1),_=t("p",null,"初接触shell脚本，在vim中写代码，出现了好几次 Bad substitution。",-1),l=t("p",null,"我的错误有两种：",-1),c=t("pre",null,[t("code",null,`开始的的指定脚本环境 应该是#!/bin/bash
在编译运行时 也应该用 bash
\${}的使用错误，$() 是引用（）中运行的结果。
\${} 仅仅是用{}中的内容，是参数，不执行
`)],-1),d=[i,_,l,c];function u(r,h){return s(),n("div",null,d)}const m=e(a,[["render",u],["__file","shell脚本bad substitution.html.vue"]]);export{m as default};
