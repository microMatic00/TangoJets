/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CeIBEc1y.mjs';
import 'kleur/colors';
import { g as getFlights } from '../chunks/actions_CQImGA5H.mjs';
import { T as TableModal } from '../chunks/TableModal_DvlJ6c92.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ck8WIY7o.mjs';
export { renderers } from '../renderers.mjs';

const $$History = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getFlights();
  const filteredData = data.filter((flight) => {
    const arrivalTime = new Date(flight.arrivaltime);
    const currentTime = /* @__PURE__ */ new Date();
    return currentTime > arrivalTime;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "History" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex"> ${renderComponent($$result2, "TableModal", TableModal, { "info": filteredData, "caseType": "flight", "client:load": true, "client:component-hydration": "load", "client:component-path": "T:/tango/TangoJets/TangoJets/src/components/table/TableModal", "client:component-export": "default" })} </div> ` })}`;
}, "T:/tango/TangoJets/TangoJets/src/pages/History.astro", void 0);

const $$file = "T:/tango/TangoJets/TangoJets/src/pages/History.astro";
const $$url = "/History";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$History,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
