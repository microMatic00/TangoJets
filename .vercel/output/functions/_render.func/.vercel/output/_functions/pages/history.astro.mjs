/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CeIBEc1y.mjs';
import 'kleur/colors';
import { g as getFlights } from '../chunks/actions_Cb2xeMsr.mjs';
import { T as TableModal } from '../chunks/TableModal_C7VjmBnp.mjs';
import { $ as $$Layout } from '../chunks/Layout_pIfsM7JP.mjs';
export { renderers } from '../renderers.mjs';

const $$History = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getFlights();
  const filteredData = data.filter((flight) => {
    const arrivalTime = new Date(flight.arrivaltime);
    const currentTime = /* @__PURE__ */ new Date();
    return currentTime > arrivalTime;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "History" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex"> ${renderComponent($$result2, "TableModal", TableModal, { "info": filteredData, "caseType": "flight", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Justo/Desktop/TangoJets/src/components/table/TableModal", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/Justo/Desktop/TangoJets/src/pages/History.astro", void 0);

const $$file = "C:/Users/Justo/Desktop/TangoJets/src/pages/History.astro";
const $$url = "/History";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$History,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
