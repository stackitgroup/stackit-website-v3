import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Hero_staffing, W as Who_we_are, S as Staffing_innovation, a as Why_we_excel, b as How_to_work_together, T as The_result } from "../../chunks/why-we-excel.js";
import { S as Some_of_our_clients } from "../../chunks/some-of-our-clients.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-16kazfe_START -->${$$result.title = `<title>Stackit</title>`, ""}<meta name="og:description" content="Stackit Website"><!-- HEAD_svelte-16kazfe_END -->`, ""} ${validate_component(Hero_staffing, "HeroStaffing").$$render($$result, {}, {}, {})} ${validate_component(Some_of_our_clients, "SomeOfOurClients").$$render($$result, {}, {}, {})} ${validate_component(Who_we_are, "WhoWeAre").$$render($$result, {}, {}, {})} ${validate_component(Staffing_innovation, "StaffingInnovation").$$render($$result, {}, {}, {})} ${validate_component(Why_we_excel, "WhyWeExcel").$$render($$result, {}, {}, {})} ${validate_component(How_to_work_together, "HowToWorkTogether").$$render($$result, {}, {}, {})} ${validate_component(The_result, "TheResult").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
