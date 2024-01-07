import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,b as t,d as o}from"./app-K4nl6MGO.js";const i={},a=t("h1",{id:"bad-substitution",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bad-substitution","aria-hidden":"true"},"#"),o(" bad substitution")],-1),_=t("p",null,"初接触shell脚本，在vim中写代码，出现了好几次 Bad substitution。",-1),d=t("p",null,"我的错误有两种：",-1),l=t("pre",null,[t("code",null,`开始的的指定脚本环境 应该是#!/bin/bash
在编译运行时 也应该用 bash
\${}的使用错误，$() 是引用（）中运行的结果。
\${} 仅仅是用{}中的内容，是参数，不执行
`)],-1),c=[a,_,d,l];function u(r,h){return e(),n("div",null,c)}const m=s(i,[["render",u],["__file","shell脚本bad substitution.html.vue"]]);export{m as default};
