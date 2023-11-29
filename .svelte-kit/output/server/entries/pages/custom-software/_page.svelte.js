import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { L as Lets_talk_button, S as Some_of_our_clients } from "../../../chunks/some-of-our-clients.js";
const hero_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".overlay.svelte-133mfv{background:linear-gradient(104deg, rgba(3, 21, 35, 0.8) 56.7%, rgba(1, 111, 206, 0.2) 101.36%)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="hero" title="Hero Section" class="w-full mx-auto border-b-2 border-blue-400 h-96 max-w-[1730px]"><picture class="grid h-96"><div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay svelte-133mfv"></div> <div class="[grid-row:1/2] z-20 [grid-column:1/2] grid justify-start px-5 text-2xl font-light text-white duration-500 md:text-5xl md:pl-20 py-10 md:py-0 place-content-center"><h1 data-svelte-h="svelte-1ef9vo8">Custom-built software to</h1> <h2 data-svelte-h="svelte-yyw11j">&lt;<span class="font-normal text-blue-500">Empower your Success.</span>/&gt;</h2> <br> ${validate_component(Lets_talk_button, "LetsTalkButton").$$render($$result, {}, {}, {})}</div> <img class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-96" alt="Staffing Innovation Hero" src="/images/hero_2.jpeg" style="aspect-ratio: 75/34;"></picture> </section>`;
});
const howWeCollaborate_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".overlay.svelte-1n443c7{background:linear-gradient(\r\n			137deg,\r\n			rgba(3, 21, 35, 0.76) 54.87%,\r\n			rgba(1, 111, 206, 0.2) 101.73%\r\n		)}picture.svelte-1n443c7:nth-of-type(1){animation:svelte-1n443c7-slideInFromLeft linear both;animation-timeline:view();animation-range:0% 15%}picture.svelte-1n443c7:nth-of-type(2){animation:svelte-1n443c7-slideInFromLeft linear both;animation-timeline:view();animation-range:0% 25%}picture.svelte-1n443c7:nth-of-type(3){animation:svelte-1n443c7-slideInFromLeft linear both;animation-timeline:view();animation-range:0% 35%}@keyframes svelte-1n443c7-slideInFromLeft{0%{transform:translateY(100%);scale:0.5;opacity:0}100%{transform:translateY(0);scale:1;opacity:1}}",
  map: null
};
const How_we_collaborate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section id="how-we-collaborate" class="grid w-full grid-cols-3 pt-16 mx-auto max-w-[1730px]" title="How we collaborate Section" data-svelte-h="svelte-qs828s"><h2 class="col-span-3 px-5 mb-10 text-3xl font-light 2xl:px-0 md:text-5xl">How We Collaborate</h2>  <picture title="Discovery Stage" class="grid col-span-3 md:col-span-1 svelte-1n443c7"><div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay svelte-1n443c7"></div> <article class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-start font-normal text-gray-200"><h3 class="text-3xl text-[var(--blue)] relative"><span class="absolute z-10 flex flex-col items-center gap-2 -left-5 top-3 md:-rotate-90 md:left-20 md:-top-24"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6"></circle><circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6"></circle></svg> <svg xmlns="http://www.w3.org/2000/svg" width="1" height="150"><path d="M0.499998 0.5L0.499994 150" stroke="#F2F2F2" stroke-opacity="0.4" stroke-linecap="round"></path></svg></span>
				Listen</h3> <p>Our collaboration starts with listening. We pay careful attention to your business goals,
				using this understanding to gauge project complexity and size accurately. This listening
				phase is fundamental to establishing a strong foundation for our partnership.</p></article> <source class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]" media="(min-width: 768px)" srcset="/images/how-to-work-together-discovery.png"> <img class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]" alt="who_we_are" src="/images/how-to-work-together-discovery.png"></picture>  <picture title="Selection Stage" class="grid col-span-3 md:col-span-1 svelte-1n443c7"><div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay svelte-1n443c7"></div> <article class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-start font-normal text-gray-200"><h3 class="text-3xl text-[var(--blue)] relative"><span class="absolute z-10 flex flex-col items-center gap-2 -left-5 top-3 md:-rotate-90 md:left-20 md:-top-24"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6"></circle><circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6"></circle></svg> <svg xmlns="http://www.w3.org/2000/svg" width="1" height="150"><path d="M0.499998 0.5L0.499994 150" stroke="#F2F2F2" stroke-opacity="0.4" stroke-linecap="round"></path></svg></span>
				Plan</h3> <p>Next, we plan. Armed with your vision and our expertise, we craft a comprehensive plan of
				action. This includes projected timelines for feature and functionality delivery, fostering
				an environment of agile teams, and functional results. This planning stage ensures
				transparency and efficiency.</p></article> <source class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]" media="(min-width: 768px)" srcset="/images/how-to-work-together-selection.png"> <img class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]" alt="who_we_are" src="/images/how-to-work-together-selection.png"></picture>  <picture title="Integration Stage" class="grid col-span-3 md:col-span-1 svelte-1n443c7"><div class="z-10 [grid-row:1/2] [grid-column:1/2] overlay svelte-1n443c7"></div> <article class="[grid-row:1/2] py-10 [grid-column:1/2] z-20 grid place-content-center gap-4 px-10 md:place-content-start font-normal text-gray-200"><h3 class="text-3xl text-[var(--blue)] relative"><span class="absolute text-2xl font-semibold text-gray-400 -left-5 top-3 md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6"></circle><circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6"></circle></svg></span> <span class="absolute z-10 flex-col items-center hidden gap-2 md:flex -left-5 top-3 md:-rotate-90 md:left-20 md:-top-24"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="5" stroke="#F2F2F2" stroke-opacity="0.6"></circle><circle cx="5.5" cy="5.5" r="3.5" fill="#F2F2F2" fill-opacity="0.6"></circle></svg> <svg xmlns="http://www.w3.org/2000/svg" width="1" height="150"><path d="M0.499998 0.5L0.499994 150" stroke="#F2F2F2" stroke-opacity="0.4" stroke-linecap="round"></path></svg></span>
				Succeed</h3> <p>Our ultimate goal is your success. We don&#39;t just deliver code; we deliver success, neatly
				packaged and ready to integrate seamlessly into your business. Let&#39;s talk! Discover how
				Stack IT can drive your digital transformation and help you reach new heights.</p></article> <source class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]" media="(min-width: 768px)" srcset="/images/how-to-work-together-integration.jpeg"> <img class="object-cover w-full h-full [grid-row:1/2] [grid-column:1/2]" alt="who_we_are" src="/images/how-to-work-together-integration.jpeg"></picture> </section>`;
});
const maintenanceSupport_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".overlay.svelte-17305vl{background:linear-gradient(137deg, rgba(3, 21, 35, 0.76) 53.14%, rgba(1, 111, 206, 0.2) 100%);box-shadow:inset 0 0 10px rgba(1, 111, 206, 0.2)}",
  map: null
};
const Maintenance_support = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="maintenance-support" title="Maintenance & Support Section" class="grid w-full grid-cols-2 mx-auto max-w-[1730px]" data-svelte-h="svelte-1gqzgq5"><article class="col-span-2 px-5 py-5 2xl:pr-0 2xl:pl-5 text-md md:col-span-1" title="Maintenance & Support Article"><header><h2 class="text-3xl md:col-span-1 md:text-4xl">Maintenance &amp; Support</h2></header> <br> <p>At Stack IT, we don&#39;t stop at creation; we <span class="text-[var(--blue)] font-semibold">care.</span>
			Our commitment extends to providing comprehensive
			<span class="text-[var(--blue)] font-semibold">maintenance and support</span> that covers
			everything from enhancements to bug fixes and vigilant
			<span class="text-[var(--blue)] font-semibold">system monitoring.</span></p> <br> <p>We continually assess your software&#39;s <span class="text-[var(--blue)] font-semibold">usability
			</span>, conduct <span class="text-[var(--blue)] font-semibold">code audits</span>, and
			rigorously test your
			<span class="text-[var(--blue)] font-semibold">cloud infrastructure.</span> This approach
			ensures your software remains in peak condition, allowing us to provide
			<span class="text-[var(--blue)] font-semibold">insightful advice</span> that informs your critical
			business decisions. Choose Stack IT for ongoing care that ensures the longevity and performance
			of your software solutions.</p></article> <picture class="grid col-span-2 md:[grid-column:1/2] md:[grid-row:1/2]"><div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay svelte-17305vl"></div> <div class="[grid-row:1/2] z-20 [grid-column:1/2] grid gap-1 text-2xl font-light text-white place-content-center"><span><span class="font-semibold text-[var(--blue)]">20+</span>
				Countries</span> <span><span class="font-semibold text-[var(--blue)]">7+</span>
				World Cups</span> <span><span class="font-semibold text-[var(--blue)]">1M+</span>
				Clients</span></div> <source class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full" media="(min-width: 768px)" srcset="/images/staffing_innovation.png"> <img class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full" alt="who_we_are" src="/images/staffing_innovation.png"></picture> </section>`;
});
const softwareDevelopment_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".overlay.svelte-1oxehp4{background:linear-gradient(\r\n			166deg,\r\n			rgba(3, 21, 35, 0.76) 54.75%,\r\n			rgba(1, 111, 206, 0.2) 117.24%\r\n		);box-shadow:inset 0 0 10px rgba(1, 111, 206, 0.2)}",
  map: null
};
const Software_development = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="software-development" title="Software Development Section" class="grid w-full grid-cols-2 mx-auto max-w-[1730px]" data-svelte-h="svelte-1710j2k"><article class="col-span-2 px-5 py-5 2xl:pl-0 text-md md:col-span-1" title="Software Development Article"><header><h2 class="text-3xl md:col-span-1 md:text-4xl">Software Development</h2></header> <br> <p>At Stack IT, we&#39;re your trusted partner in <span class="font-semibold text-[var(--blue)]">software development</span>
			and digital transformation. With our extensive experience in cutting-edge technologies, including
			<span class="font-semibold text-[var(--blue)]">blockchain</span> and
			<span class="font-semibold text-[var(--blue)]">AI </span>, we specialize in crafting
			innovative
			<span class="font-semibold text-[var(--blue)]">mobile and web applications.</span></p> <br> <p>Our expertise and agile approach empower us to deliver transformative solutions that elevate
			your operations. If you can envision it, we have the expertise to <span class="font-semibold text-[var(--blue)]">build it.</span> Whether you&#39;re in need of blockchain-powered solutions or AI-driven applications, Stack IT is
			your go-to destination for forward-looking software development.</p></article> <picture class="grid col-span-2 md:col-span-1" title="Image to describe Software Development"><div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay svelte-1oxehp4"></div> <div class="[grid-row:1/2] z-20 [grid-column:1/2] px-5 grid w-full h-full gap-1 text-3xl font-light text-white md:text-4xl place-content-center"><span>Bespoke software designed</span> <span class="text-[#259AFF] font-normal">Amplify your Path to Success</span></div> <source class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full" media="(min-width: 768px)" srcset="/images/software_development.jpg"> <img class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full" alt="Software Development" src="/images/software_development.jpg"></picture> </section>`;
});
const theResult_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".overlay.svelte-1l0jntu{background:linear-gradient(113deg, rgba(3, 21, 35, 0.8) 55.9%, rgba(1, 111, 206, 0.2) 87.95%)}",
  map: null
};
const The_result = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="pt-16 mx-auto max-w-[1730px]" title="The result Section"><picture class="grid"><div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay svelte-1l0jntu"></div> <div class="[grid-row:1/2] z-20 [grid-column:1/2] grid justify-start gap-5 px-5 font-light md:w-4/5 md:py-5 md:pl-20 place-content-center"><h2 class="text-3xl font-medium text-blue-500 md:text-5xl" data-svelte-h="svelte-m8g15">The result</h2> <h3 class="text-xl text-gray-200 md:text-2xl" data-svelte-h="svelte-4zvwh0">A solid custom software solution for your business.

				<br>
				Let&#39;s talk! Discover how Stack IT can drive your digital transformation and help you reach new
				heights. digital transformation and help you reach new heights.</h3> ${validate_component(Lets_talk_button, "LetsTalkButton").$$render($$result, {}, {}, {})}</div> <img class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-80" alt="who_we_are" src="/images/the_result.jpeg"></picture> </section>`;
});
const whyChooseUs_svelte_svelte_type_style_lang = "";
const css = {
  code: ".overlay.svelte-uopps7{background:linear-gradient(106deg, #293c4d -8.12%, #026ecb 125.69%)}.consistency-gradient.svelte-uopps7{background:linear-gradient(103deg, #031523 -21.75%, #016fce 77.71%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}article.svelte-uopps7:nth-of-type(1){animation:svelte-uopps7-slideInFromLeft linear both;animation-timeline:view();animation-range:0% 15%}article.svelte-uopps7:nth-of-type(2){animation:svelte-uopps7-slideInFromLeft linear both;animation-timeline:view();animation-range:0% 25%}article.svelte-uopps7:nth-of-type(3){animation:svelte-uopps7-slideInFromLeft linear both;animation-timeline:view();animation-range:0% 35%}@keyframes svelte-uopps7-slideInFromLeft{0%{transform:translateY(100%);scale:0.5;opacity:0}100%{transform:translateY(0);scale:1;opacity:1}}",
  map: null
};
const Why_choose_us = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="why-choose-us" title="Why choose us Section" class="grid w-full grid-cols-3 pt-16 mx-auto max-w-[1730px]" data-svelte-h="svelte-1ehj8we"><h2 class="col-span-3 px-5 mb-10 text-3xl font-light 2xl:px-0 md:text-5xl">Why Choose Us</h2> <article class="flex items-center col-span-3 py-2 md:ml-7 2xl:ml-0 md:px-5 md:items-start md:flex-col md:col-span-1 svelte-uopps7" title="Expertise Principle"><span class="md:text-[6rem] md:justify-start flex items-center justify-center w-1/3 h-48 md:h-24 font-light text-[12rem]">1</span> <div class="flex flex-col w-2/3 gap-4 px-2 py-5 md:w-full"><h3 class="text-2xl md:text-5xl md:font-light">Partnership</h3> <p class="font-light md:text-lg">We believe in building <span class="font-medium text-[var(--blue)]">partnerships</span>for
				success. Our primary aim is to maximize the
				<span class="font-medium text-[var(--blue)]">value we bring to our clients.</span> We take
				pride in creating, managing, and delivering products that are not only
				<span class="font-medium text-[var(--blue)]">high-quality</span> but also truly
				<span class="font-medium text-[var(--blue)]">impactful.</span></p></div></article> <article class="flex items-center col-span-3 py-2 text-white md:col-span-1 overlay md:px-5 md:items-start md:flex-col svelte-uopps7" title="Quality Principle"><span class="md:text-[6rem] md:justify-start flex items-center justify-center w-1/3 h-48 md:h-24 font-light text-[12rem]">2</span> <div class="flex flex-col w-2/3 gap-4 px-2 py-5 md:w-full"><h3 class="text-2xl md:text-5xl md:font-light">Quality</h3> <p class="font-light md:text-lg">We uphold a commitment to <span class="font-medium">individual excellence, team synergy,</span>
				and structured processes. We invest in
				<span class="font-medium">meticulous hiring practices,</span> proactive team coaching, and
				cultivate an environment that values
				<span class="font-medium">creativity, teamwork, </span>and
				<span class="font-medium">accountability.</span></p></div></article> <article class="flex items-center col-span-3 py-2 bg-gray-200 md:mr-7 2xl:mr-0 md:col-span-1 md:items-start md:flex-col md:px-5 svelte-uopps7" title="Consistency Principle"><span class="md:text-[6rem] md:justify-start flex items-center justify-center w-1/3 md:h-24 h-48 font-light text-[12rem] text-[var(--blue)]">3</span> <div class="flex flex-col w-2/3 gap-4 px-2 py-5 md:w-full"><h3 class="text-2xl md:text-5xl text-[var(--blue)] md:font-light consistency-gradient svelte-uopps7">Expertise</h3> <p class="font-light md:text-lg">Inevitably, project roadblocks occur. Regardless of the issue, it takes an
				<span class="font-medium text-[var(--blue)]">expert team </span>to keep things on track.
				With <span class="font-medium text-[var(--blue)]">years of industry</span> wisdom and unwavering
				determination, we are the team to call when the going gets tough.</p></div></article> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1nx4hxp_START -->${$$result.title = `<title>Stack IT</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1nx4hxp_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Software_development, "SoftwareDevelopment").$$render($$result, {}, {}, {})} ${validate_component(Maintenance_support, "MaintenanceSupport").$$render($$result, {}, {}, {})} ${validate_component(Why_choose_us, "WhyChooseUs").$$render($$result, {}, {}, {})} ${validate_component(How_we_collaborate, "HowWeCollaborate").$$render($$result, {}, {}, {})} ${validate_component(Some_of_our_clients, "SomeOfOurClients").$$render($$result, {}, {}, {})} ${validate_component(The_result, "TheResult").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
