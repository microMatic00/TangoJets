import { c as createComponent, r as renderTemplate, a as renderSlot, b as renderComponent, d as renderHead, e as addAttribute, f as createAstro } from './astro/server_CeIBEc1y.mjs';
import 'kleur/colors';
import { $ as $$Sidebar } from './Sidebar_B4sm0le5.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head> <body class="flex h-screen m-0 font-sans"> ', ' <div class="flex-1 flex justify-center items-center p-5 bg-gradient-to-r from-gray-800 to-slate-600 text-white"> ', ' </div> <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Sidebar", $$Sidebar, { "class": "w-64 bg-gray-200 p-5" }), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Justo/Desktop/TangoJets/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
