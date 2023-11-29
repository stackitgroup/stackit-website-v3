import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full max-w-[1730px] flex flex-col items-center gap-10 mx-auto" data-svelte-h="svelte-80vjkt"><picture class="h-auto w-[40%]"><img alt="Page Not Found" class="h-full w-full" src="images/404.png"></picture> <a href="/" class="text-sm font-semibold text-[--light-blue]">Go home</a></section>`;
});
export {
  Error as default
};
