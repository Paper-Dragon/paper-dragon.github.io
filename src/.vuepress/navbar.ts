import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "使用指南",
        icon: "book",
        link: "/note-book"
    },
    {
        text: "时间线",
        icon: "history",
        link: "/timeline"
    },
    {
        text: "友链",
        icon: "link",
        link: "/友链/友链.md",
        ariaLabel: "友链"
    },
    {
        text: "关于我",
        icon: "address-card",
        link: "/me/about.md",
        ariaLabel: "关于我"
    },
    {
        text: "实时访客",
        icon: "chart-simple",
        link: "https://analytics.umami.is/share/pvHcnC9eaFEzXn99/DevOps-Book",
    },
]);
