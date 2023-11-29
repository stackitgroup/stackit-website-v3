import { c as create_ssr_component, k as add_attribute, e as escape, i as each, v as validate_component } from "../../../chunks/ssr.js";
const About_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section title="About Stack IT" class="w-full p-[5%] bg-[--light-gray]" data-svelte-h="svelte-pddc40"><div class="grid grid-cols-2 mx-auto max-w-[1730px]"><article class="col-span-2 px-5 py-5 2xl:pl-0 text-md md:col-span-1" title="Who we are"><header><h2 class="text-3xl md:text-4xl md:col-span-1">Who we are</h2></header> <br> <p>Stack IT, based in San Diego, CA, is your gateway to success. Since 2017, we&#39;ve linked
				companies with top
				<span class="font-semibold text-[var(--blue)]">tech professionals</span>
				from Latin America, providing
				<span class="font-semibold text-[var(--blue)]">cost-effective remote staffing solutions.</span> Our motto, &quot;Success. Coded.&quot; underscores our commitment to delivering the ideal technical
				talent for your needs. We&#39;re shaping the future of work with a diverse tech workforce.</p> <br> <p>Discover innovative staffing services and stay updated with the latest
				<span class="font-semibold text-[var(--blue)]">talent acquisition trends.</span></p> <br> <p>Explore our
				<span class="font-semibold text-[var(--blue)]">Stack It staffing services, remote talent,</span>
				and insightful
				<span class="font-semibold text-[var(--blue)]">tech recruitment best practices</span> in our
				blog. When you&#39;re ready, contact Stack It to unlock success.</p></article> <picture class="grid col-span-2 md:col-span-1 rounded-xl" title="Development Team"><div class="[grid-row:1/2] z-10 [grid-column:1/2] overlay"></div> <div class="[grid-row:1/2] z-20 [grid-column:1/2] grid w-full h-full gap-1 text-3xl font-light text-white md:text-4xl place-content-center"><span>Success.</span> <span class="text-[var(--blue)]">Coded.</span></div> <source class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full max-h-[400px] rounded-xl" media="(min-width: 768px)" srcset="/images/about.png"> <img class="[grid-row:1/2] [grid-column:1/2] object-cover w-full h-full max-h-[400px] rounded-xl" alt="Software Development" src="/images/about.png"></picture></div></section>`;
});
const Team_member_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { teamMember } = $$props;
  if ($$props.teamMember === void 0 && $$bindings.teamMember && teamMember !== void 0)
    $$bindings.teamMember(teamMember);
  return `<article class="flex flex-col gap-5 w-full h-full items-center border-t-xl"><picture class="border-t-xl"><img${add_attribute("alt", `${teamMember.name} | Stack IT`, 0)} class="h-[380px] border-t-xl"${add_attribute("src", teamMember.img, 0)}></picture> <div class="flex flex-col gap-2 p-[5%]"><h3 class="text-xl text-[--brand-blue] font-semibold">${escape(teamMember.name)}</h3> <h4 class="text-[--light-blue] font-semibold">${escape(teamMember.role)}</h4> <p class="opacity-80">${escape(teamMember.bio)}</p></div></article>`;
});
const teamMembers = [
  {
    id: 1,
    img: "/images/rene_reyes.jpeg",
    name: "René Reyes",
    role: "CEO",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryapos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    img: "/images/pompilio_fiore.jpeg",
    name: "Pompilio Fiore",
    role: "ROLE",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryapos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    img: "/images/manuel_miranda.jpeg",
    name: "Manuel Miranda",
    role: "Director of Engineering",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryapos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full p-[5%]"><div class="flex flex-col gap-20 w-full max-w-[1730px] mx-auto"><h1 class="text-5xl" data-svelte-h="svelte-tf303w">Meet Stack <span class="text-[--blue]">IT</span></h1> <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full pb-20">${each(teamMembers, (teamMember) => {
    return `${validate_component(Team_member_card, "TeamMemberCard").$$render($$result, { teamMember }, {}, {})}`;
  })}</section></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-nd2rgx_START -->${$$result.title = `<title>About Us | Stackit Group</title>`, ""}<!-- HEAD_svelte-nd2rgx_END -->`, ""} ${validate_component(About_section, "AboutSection").$$render($$result, {}, {}, {})} ${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
