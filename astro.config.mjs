import { defineConfig } from 'astro/config';

const SERVER_PORT = 4321

const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://rodielmj.github.io"

const _npmScript = process.env.npm_lifecycle_script || "";

const isBuild = _npmScript.includes("astro build");
let BASE_URL = LOCALHOST_URL

if (isBuild) {
    BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
    sever: { port: SERVER_PORT },
    site: BASE_URL
});
