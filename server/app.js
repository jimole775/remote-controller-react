/**
 * Created by Andy on 2017/12/2.
 */
import path from "path";
import Koa from "koa";
import static from "koa-static";
import onerror from "koa-onerror";
import koaBody from "koa-body";
import router from "./src/router/main";
import socketClient from "./src/socket/init/open/open";
import SERVER_ROOT from "SERVER_ROOT";
const app = new Koa();
app.use(koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
        uploadDir:path.join(PUBLIC_ROOT,'upload'), // 设置文件上传目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
        onFileBegin:(name,file) => { // 文件上传前的设置
        // console.log(`name: ${name}`);
        // console.log(file);
        },
    }
}));

onerror(app);
app.use(static(path.join(SERVER_ROOT,"static")));
app.use(router.routes());

app.listening(80);
socketClient(81);