import { path } from "vuepress/utils";
import { watch, FSWatcher } from "chokidar";
import fs from "fs-extra";
import { App } from "vuepress";

let jsWatcher: FSWatcher;

export default {
  name: "vuepress-plugin-copypdf",
  
  onPrepared: (app: App) => {
    console.log(app.env.isBuild);
    
    jsWatcher = watch(path.join(app.dir.source(), "/**/*.pdf"), {
      ignored: /(^|[\/\\])\../,
    });

    jsWatcher.on("add", (sourceFilePath) => {
      let tempFilePath = path.join(  
      app.env.isDev ? path.join(app.dir.temp(), "pages") : app.dir.dest(),
      path.relative(app.dir.source(), sourceFilePath));
      fs.copySync(sourceFilePath, tempFilePath, { overwrite: true });
    });
  },


  onGenerated: async (app: App) => {
    await jsWatcher.close();
  },
};