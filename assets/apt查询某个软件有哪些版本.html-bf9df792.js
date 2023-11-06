import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c,a as t,e,d as o}from"./app-a795284b.js";const i={},d=t("h1",{id:"apt查询某个软件有哪些版本",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#apt查询某个软件有哪些版本","aria-hidden":"true"},"#"),e(" apt查询某个软件有哪些版本")],-1),u={href:"https://blog.csdn.net/quantum7/article/details/103417643",target:"_blank",rel:"noopener noreferrer"},m=t("p",null,"安装默认，有时候会出问题。怎么办？查询一下版本：",-1),l=t("pre",null,[t("code",null,`sudo apt update
sudo apt-cache madison g++
 
       g++ |  4:8.3.0-1 | http://deb.debian.org/debian buster/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirrors.ustc.edu.cn/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirrors.tuna.tsinghua.edu.cn/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirror.sjtu.edu.cn/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | http://mirrors.aliyun.com/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | https://mirrors.huaweicloud.com/debian stretch/main amd64 Packages
       g++ |  4:6.3.0-4 | http://mirrors.163.com/debian stretch/main amd64 Packages
gcc-defaults |      1.168 | https://mirrors.ustc.edu.cn/debian stretch/main Sources
gcc-defaults |      1.168 | https://mirrors.tuna.tsinghua.edu.cn/debian stretch/main Sources
gcc-defaults |      1.168 | https://mirror.sjtu.edu.cn/debian stretch/main Sources
gcc-defaults |      1.168 | http://mirrors.aliyun.com/debian stretch/main Sources
gcc-defaults |      1.168 | https://mirrors.huaweicloud.com/debian stretch/main Sources
gcc-defaults |      1.168 | http://mirrors.163.com/debian stretch/main Sources
gcc-defaults |      1.181 | http://deb.debian.org/debian buster/main Sources
`)],-1),h=t("p",null,"安装低版本：",-1),p=t("p",null,"apt install g++=4:6.3.0-4",-1);function _(g,b){const a=s("ExternalLinkIcon");return r(),c("div",null,[d,t("blockquote",null,[t("p",null,[t("a",u,[e("https://blog.csdn.net/quantum7/article/details/103417643"),o(a)])])]),m,l,h,p])}const x=n(i,[["render",_],["__file","apt查询某个软件有哪些版本.html.vue"]]);export{x as default};
