/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, f as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CeIBEc1y.mjs';
import 'kleur/colors';
import { jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from '../chunks/Layout_pIfsM7JP.mjs';
export { renderers } from '../renderers.mjs';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const WelcomeText = () => {
  const [employeeName, setEmployeeName] = useState("");
  useEffect(() => {
    const name = getCookie("username");
    if (name) {
      setEmployeeName(name);
    }
  }, []);
  return /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold", children: [
    "Welcome, ",
    employeeName
  ] });
};

const $$Astro = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex flex-col items-center justify-center"> <div class="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto"> ${renderComponent($$result2, "WelcomeText", WelcomeText, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Justo/Desktop/TangoJets/src/components/text/WelcomeText", "client:component-export": "WelcomeText" })} </div> </div> ` })}`;
}, "C:/Users/Justo/Desktop/TangoJets/src/pages/Home.astro", void 0);

const $$file = "C:/Users/Justo/Desktop/TangoJets/src/pages/Home.astro";
const $$url = "/Home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Home,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
