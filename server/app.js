/**
 * Created by Andy on 2017/12/2.
 */
import "./globalPath.js";
import path from "path";
import Koa from "koa";
import static from "koa-static";
import onerror from "koa-onerror";
import koaBody from "koa-body";
import router from "./router/main";
const app = new Koa();
app.use(koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
        uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
        onFileBegin:(name,file) => { // 文件上传前的设置
        // console.log(`name: ${name}`);
        // console.log(file);
        },
    }
}));

onerror(app);
app.use(static(path.join(global.SRC,"static")));
app.use(router.routes());


app.listening(80);
import createSocket from "./socket/init/open/open.js";
createSocket(81);