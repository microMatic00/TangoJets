import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_Chc8T12m.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_CR1ForcN.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BmZsI-nm.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///T:/tango/TangoJets/TangoJets/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BY2q_bZh.js"}],"styles":[{"type":"external","src":"/_astro/Airships.BRg9kDXS.css"}],"routeData":{"route":"/airships","isIndex":false,"type":"page","pattern":"^\\/Airships\\/?$","segments":[[{"content":"Airships","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Airships.astro","pathname":"/Airships","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Szx3u1UE.js"}],"styles":[{"type":"external","src":"/_astro/Airships.BRg9kDXS.css"},{"type":"external","src":"/_astro/Calculator.BE4BdE5o.css"},{"type":"external","src":"/_astro/Calculator.BE4BdE5o.css"}],"routeData":{"route":"/calculator","isIndex":false,"type":"page","pattern":"^\\/Calculator\\/?$","segments":[[{"content":"Calculator","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Calculator.astro","pathname":"/Calculator","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BY2q_bZh.js"}],"styles":[{"type":"external","src":"/_astro/Airships.BRg9kDXS.css"},{"type":"external","src":"/_astro/Client.Bbgo5x5y.css"}],"routeData":{"route":"/client","isIndex":false,"type":"page","pattern":"^\\/Client\\/?$","segments":[[{"content":"Client","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Client.astro","pathname":"/Client","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BY2q_bZh.js"}],"styles":[{"type":"external","src":"/_astro/Airships.BRg9kDXS.css"},{"type":"external","src":"/_astro/Client.Bbgo5x5y.css"}],"routeData":{"route":"/flights","isIndex":false,"type":"page","pattern":"^\\/Flights\\/?$","segments":[[{"content":"Flights","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Flights.astro","pathname":"/Flights","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BY2q_bZh.js"}],"styles":[{"type":"external","src":"/_astro/Airships.BRg9kDXS.css"}],"routeData":{"route":"/history","isIndex":false,"type":"page","pattern":"^\\/History\\/?$","segments":[[{"content":"History","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/History.astro","pathname":"/History","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BY2q_bZh.js"}],"styles":[{"type":"external","src":"/_astro/Airships.BRg9kDXS.css"}],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/Home\\/?$","segments":[[{"content":"Home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Home.astro","pathname":"/Home","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Airships.BRg9kDXS.css"},{"type":"external","src":"/_astro/Calculator.BE4BdE5o.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["T:/tango/TangoJets/TangoJets/src/pages/Calculator.astro",{"propagation":"none","containsHead":true}],["T:/tango/TangoJets/TangoJets/src/pages/index.astro",{"propagation":"none","containsHead":true}],["T:/tango/TangoJets/TangoJets/src/pages/Airships.astro",{"propagation":"none","containsHead":true}],["T:/tango/TangoJets/TangoJets/src/pages/Client.astro",{"propagation":"none","containsHead":true}],["T:/tango/TangoJets/TangoJets/src/pages/Flights.astro",{"propagation":"none","containsHead":true}],["T:/tango/TangoJets/TangoJets/src/pages/History.astro",{"propagation":"none","containsHead":true}],["T:/tango/TangoJets/TangoJets/src/pages/Home.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/History@_@astro":"pages/history.astro.mjs","\u0000@astro-page:src/pages/Flights@_@astro":"pages/flights.astro.mjs","\u0000@astro-page:src/pages/Airships@_@astro":"pages/airships.astro.mjs","\u0000@astro-page:src/pages/Calculator@_@astro":"pages/calculator.astro.mjs","\u0000@astro-page:src/pages/Client@_@astro":"pages/client.astro.mjs","\u0000@astro-page:src/pages/Home@_@astro":"pages/home.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","T:/tango/TangoJets/TangoJets/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","T:/tango/TangoJets/TangoJets/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_CC6w_N5Q.mjs","T:/tango/TangoJets/TangoJets/src/components/modals/ModalFlightAdd":"_astro/ModalFlightAdd.DftI1IBk.js","T:/tango/TangoJets/TangoJets/src/components/modals/ModalJetAdd":"_astro/ModalJetAdd.CMXLbLpF.js","T:/tango/TangoJets/TangoJets/src/components/modals/ModalAdd":"_astro/ModalAdd.BdcHITKN.js","T:/tango/TangoJets/TangoJets/src/components/text/WelcomeText":"_astro/WelcomeText.BDbqbGaN.js","T:/tango/TangoJets/TangoJets/src/components/buttons/LogOutButton":"_astro/LogOutButton.vh8IWzYL.js","/astro/hoisted.js?q=0":"_astro/hoisted.Szx3u1UE.js","T:/tango/TangoJets/TangoJets/src/components/cards/LoginCard":"_astro/LoginCard.B2MV7fF4.js","@astrojs/react/client.js":"_astro/client.D0e-mrfl.js","T:/tango/TangoJets/TangoJets/src/components/table/TableModal":"_astro/TableModal.KtO9kelQ.js","/astro/hoisted.js?q=1":"_astro/hoisted.BY2q_bZh.js","react-toastify":"_astro/_astro-entry_react-toastify.CuSQkRrX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Airships.BRg9kDXS.css","/_astro/Calculator.BE4BdE5o.css","/_astro/Client.Bbgo5x5y.css","/favicon.svg","/_astro/client.D0e-mrfl.js","/_astro/hoisted.BY2q_bZh.js","/_astro/hoisted.Szx3u1UE.js","/_astro/index.CMQ3OGCn.js","/_astro/index.DqBOCEu-.js","/_astro/jsx-runtime.SN7vRHW2.js","/_astro/LoginCard.B2MV7fF4.js","/_astro/LogOutButton.vh8IWzYL.js","/_astro/ModalAdd.BdcHITKN.js","/_astro/ModalFlightAdd.DftI1IBk.js","/_astro/ModalJetAdd.CMXLbLpF.js","/_astro/TableModal.KtO9kelQ.js","/_astro/ToggleSwitch.DhlsXv_P.js","/_astro/WelcomeText.BDbqbGaN.js","/_astro/_astro-entry_react-toastify.C78vIBsG.js","/_astro/_astro-entry_react-toastify.CuSQkRrX.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"EHQL6GHvUNh3E7yiRWgB5hWr1J1294W7WbMHODXISVY=","experimentalEnvGetSecretEnabled":false});

export { manifest };
