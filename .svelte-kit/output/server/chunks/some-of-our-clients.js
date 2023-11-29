import { c as create_ssr_component } from "./ssr.js";
const Lets_talk_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a class="text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-40 hover:bg-[#016fce] transition-colors duration-400" href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it" data-svelte-h="svelte-6dtyte">Let&#39;s Talk

	<img src="/icons/arrow.svg" class="w-3 rotate-90" alt="arrow to scroll up"></a>`;
});
const Some_of_our_clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <section id="our-clients" title="Some of our Clients" class="w-full py-[3%] px-[5%]" data-svelte-h="svelte-1uhxbuz"><div class="grid grid-cols-6 gap-2 mx-auto w-full max-w-[1730px]"><h2 class="col-span-6 mb-10 text-3xl font-light md:text-5xl">Trusted by</h2> <picture class="col-span-2 md:col-span-1"><img class="object-contain w-full h-16" src="/images/fuelzee.png" alt="Fuelzee Logo"></picture> <picture class="col-span-2 md:col-span-1"><img class="object-contain w-full h-16" src="/images/boeing.png" alt="Boeing Logo"></picture> <picture class="col-span-2 md:col-span-1"><img class="object-contain w-full h-16" src="/images/toyota.png" alt="Toyota Logo"></picture> <picture class="col-span-2 md:col-span-1"><img class="object-contain w-full h-16" src="/images/buscape.png" alt="Buscape Logo"></picture> <picture class="col-span-2 md:col-span-1"><img class="object-contain w-full h-16" src="/images/siemens.png" alt="Siemens Logo"></picture> <picture class="col-span-2 md:col-span-1"><img class="object-contain w-full h-16" src="/images/bridgepoint.png" alt="Bridgepoint Logo"></picture></div></section>`;
});
export {
  Lets_talk_button as L,
  Some_of_our_clients as S
};
