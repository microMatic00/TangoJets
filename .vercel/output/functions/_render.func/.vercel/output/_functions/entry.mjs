import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DIIbR_Bx.mjs';
import { manifest } from './manifest_MuLjdC87.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/airships.astro.mjs');
const _page2 = () => import('./pages/calculator.astro.mjs');
const _page3 = () => import('./pages/client.astro.mjs');
const _page4 = () => import('./pages/flights.astro.mjs');
const _page5 = () => import('./pages/history.astro.mjs');
const _page6 = () => import('./pages/home.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/Airships.astro", _page1],
    ["src/pages/Calculator.astro", _page2],
    ["src/pages/Client.astro", _page3],
    ["src/pages/Flights.astro", _page4],
    ["src/pages/History.astro", _page5],
    ["src/pages/Home.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "a201b037-d8ef-4a37-8654-94a90c5567e9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
