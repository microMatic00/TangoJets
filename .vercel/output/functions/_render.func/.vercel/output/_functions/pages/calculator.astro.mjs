/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderSlot, b as renderComponent, d as renderHead, e as addAttribute, f as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CeIBEc1y.mjs';
import 'kleur/colors';
import { $ as $$Sidebar } from '../chunks/Sidebar_wdpx2AzF.mjs';
import { ToastContainer } from 'react-toastify';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$LayoutCalculator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutCalculator;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head> <body class="flex h-screen m-0 font-sans"> ', ' <div class="flex-1 flex-col flex justify-center items-center p-5 bg-gradient-to-r from-blue-500 to-indigo-300 text-white"> ', ' </div> <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Sidebar", $$Sidebar, { "class": "w-64 bg-gray-200 p-5" }), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Justo/Desktop/TangoJets/src/layouts/LayoutCalculator.astro", void 0);

// TODO Las opcines de los aeropuertos se deben de obtener de la base de datos o del csv por lo menos, ademas deberian poder selecionarse con varias opciones

const Options = [
    { label: 'SAEZ'},
    { label: 'KJFK'},
    { label: 'OMAL'},
    { label: 'FNNG'},
    { label: 'SAZO'},
];

const $$Calculator = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutCalculator", $$LayoutCalculator, { "title": "Calculator" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ToastContainer", ToastContainer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "react-toastify", "client:component-export": "ToastContainer" })} ${maybeRenderHead()}<div style="margin-bottom: 10px; display: flex; align-items: center;"> <label for="from" style="margin-right: 10px; width: 50px; color: black;">Salida</label> <select id="from" name="from" style="width: 100px; color: black;"> ${Options.map((option) => renderTemplate`<option${addAttribute(option.label, "value")}>${option.label}</option>`)} </select> </div> <div style="margin-bottom: 10px; display: flex; align-items: center;"> <label for="to" style="margin-right: 10px; width: 50px; color: black;">Llegada</label> <select id="to" name="to" style="width: 100px; color: black;"> ${Options.map((option) => renderTemplate`<option${addAttribute(option.label, "value")}>${option.label}</option>`)} </select> </div> <div> <button id="caldis" style="color: black;">Calcular</button> </div> <div> <p id="Respuesta" style="color: black;"></p> </div> ` })} `;
}, "C:/Users/Justo/Desktop/TangoJets/src/pages/Calculator.astro", void 0);

const $$file = "C:/Users/Justo/Desktop/TangoJets/src/pages/Calculator.astro";
const $$url = "/Calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Calculator,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
