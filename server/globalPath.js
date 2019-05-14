
import path from "path";

const ROOT_PATH = path.resolve(__dirname,"../");

const CLIENT_ROOT_PATH = path.resolve(ROOT_PATH, "../client");

const CLIENT_SOURCES_PATH = path.join(CLIENT_ROOT_PATH,"src");

const CLIENT_DIST_PATH = path.resolve(CLIENT_ROOT_PATH,"dist");

const SERVER_ROOT_PATH = path.resolve(ROOT_PATH);

const SERVER_DB_PATH = path.resolve(SERVER_ROOT_PATH,"database");

export default {
    CLIENT_SOURCES_PATH,
    CLIENT_DIST_PATH,
    SERVER_DB_PATH
};