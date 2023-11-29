import { g as getContext, c as create_ssr_component, b as compute_rest_props, d as spread, e as escape, f as escape_attribute_value, h as escape_object, v as validate_component, i as each, j as subscribe } from "../../chunks/ssr.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const linkedin = {
  linkedin: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M349 625v991h-330v-991h330zM370 319q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zM1536 1048v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"
      }
    ]
  }
};
const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw = "";
  let { data } = $$props;
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return "";
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  raw = getRaw(data);
  return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const Svg_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".fa-icon.svelte-1mc5hvj{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1mc5hvj{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1mc5hvj{transform:scale(1, -1)}.fa-spin.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1mc5hvj{color:#fff}.fa-pulse.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s infinite steps(8)}@keyframes svelte-1mc5hvj-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "width", "height", "box", "spin", "inverse", "pulse", "flip", "style", "label"]);
  let { class: className = "" } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { box = "0 0 0 0" } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = "none" } = $$props;
  let { style = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.box === void 0 && $$bindings.box && box !== void 0)
    $$bindings.box(box);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$1);
  return `<svg${spread(
    [
      { version: "1.1" },
      {
        class: "fa-icon " + escape(className, true)
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      {
        "aria-label": escape_attribute_value(label)
      },
      {
        role: escape_attribute_value(label ? "img" : "presentation")
      },
      { viewBox: escape_attribute_value(box) },
      { style: escape_attribute_value(style) },
      escape_object($$restProps)
    ],
    {
      classes: (spin ? "fa-spin" : "") + " " + (pulse ? "fa-pulse" : "") + " " + (inverse ? "fa-inverse" : "") + " " + (flip === "horizontal" ? "fa-flip-horizontal" : "") + " " + (flip === "vertical" ? "fa-flip-vertical" : "") + " svelte-1mc5hvj"
    }
  )}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
let outerScale = 1;
function normaliseData(data) {
  let name;
  let iconData;
  if (!data) {
    return void 0;
  } else if ("definition" in data) {
    console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
    return void 0;
  } else if ("iconName" in data && "icon" in data) {
    name = data.iconName;
    let paths = [];
    const [width, height, , , path] = data.icon;
    if (Array.isArray(path)) {
      paths = path;
    } else {
      paths = [path];
    }
    iconData = {
      width,
      height,
      paths: paths.map((path2) => {
        return { d: path2 };
      })
    };
  } else {
    name = Object.keys(data)[0];
    iconData = data[name];
  }
  return iconData;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "data", "scale", "spin", "inverse", "pulse", "flip", "label", "style"]);
  let { class: className = "" } = $$props;
  let { data } = $$props;
  let iconData;
  let { scale = 1 } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = void 0 } = $$props;
  let { label = "" } = $$props;
  let { style = "" } = $$props;
  let width = 10;
  let height = 10;
  let combinedStyle;
  let box;
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }
  function calculateWidth() {
    if (iconData) {
      return iconData.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (iconData) {
      return iconData.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return "";
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        iconData = normaliseData(data);
        width = calculateWidth();
        height = calculateHeight();
        combinedStyle = calculateStyle();
        box = calculateBox();
      }
    }
    $$rendered = `${validate_component(Svg, "Svg").$$render($$result, Object_1.assign({}, { label }, { width }, { height }, { box }, { style: combinedStyle }, { spin }, { flip }, { inverse }, { pulse }, { class: className }, $$restProps), {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ` ${iconData ? `${iconData.paths ? `${each(iconData.paths, (path) => {
          return `<path${spread([escape_object(path)], {})}></path>`;
        })}` : ``} ${iconData.polygons ? `${each(iconData.polygons, (polygon) => {
          return `<polygon${spread([escape_object(polygon)], {})}></polygon>`;
        })}` : ``} ${iconData.raw ? `${validate_component(Raw, "Raw").$$render(
          $$result,
          { data: iconData },
          {
            data: ($$value) => {
              iconData = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}` : ``} `}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<footer title="Layout Footer" class="w-full py-[2%] px-[5%]"><div class="grid grid-cols-4 gap-2 mx-auto md:grid-cols-5 max-w-[1730px]"><section class="flex flex-col col-span-4 gap-2 md:col-span-1" data-svelte-h="svelte-dqlcsq"><figure class="flex items-center w-full gap-2"><img class="h-12 w-44 object-fit" src="/images/stackit_logo_dark.png" alt="Stakit Logotipo"></figure> <div class="flex-col hidden w-1/2 text-xl md:flex"><span>Success.</span> <span class="font-medium text-blue-500">Coded.</span></div></section>  <section class="flex flex-col col-span-2 gap-2 md:col-span-1" data-svelte-h="svelte-6kh0fu"><h3 class="text-xl font-semibold">Quick links</h3> <ul class="flex flex-col gap-2 pl-1 text-sm"><li><a href="/staffing">Staffing</a></li> <li><a href="/custom-software">Custom Software</a></li></ul></section>  <section class="col-span-2 gap-2 flex flex-col md:[grid-column:5/6] md:[grid-row:1/2]"><h3 class="text-xl font-semibold" data-svelte-h="svelte-eob6mq">Contact</h3> <ul class="flex flex-col gap-2 pl-1 text-sm"><li data-svelte-h="svelte-lynvfj">Phone: +1 (619) 917 5387</li> <li data-svelte-h="svelte-quvbgi"><a class="text-base" href="mailto:hello@stackitgroup.com">hello@stackitgroup.com</a></li> <li><a href="https://www.linkedin.com/company/stackit">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-white bg-gray-700 rounded-sm p-[1px] w-7 h-7",
      data: linkedin,
      scale: 2
    },
    {},
    {}
  )}</a></li></ul></section>  ${["/", "/staffing"].includes($page.url.pathname) ? `<section class="flex flex-col col-span-2 gap-2 md:col-span-1" data-svelte-h="svelte-pe4ezq"><h3 class="text-xl font-semibold">Revisit</h3> <ul class="flex flex-col gap-2 pl-1 text-sm"><li><a href="#who-we-are">Who we are</a></li> <li><a href="#staffing-innovation" class="text-clip">Staffing Innovation</a></li> <li><a href="#why-we-excel">Why we excel</a></li> <li><a href="#how-to-work-together">How to work together</a></li> <li><a href="#our-clients">Our clients</a></li></ul></section>` : ``} ${$page.url.pathname === "/custom-software" ? `<section class="flex flex-col col-span-2 gap-2 md:col-span-1" data-svelte-h="svelte-mw2s38"><h3 class="text-xl font-semibold">Revisit</h3> <ul class="flex flex-col gap-2 pl-1 text-sm"><li><a href="#software-development">Software Development</a></li> <li><a href="#maintenance-support" class="text-clip">Maintenance &amp; Support</a></li> <li><a href="#why-choose-us">Why choose us</a></li> <li><a href="#how-we-collaborate">How We Collaborate</a></li> <li><a href="#our-clients">Our clients</a></li></ul></section>` : ``}  <section class="flex flex-col col-span-2 gap-2 md:col-span-1" data-svelte-h="svelte-mpq5r2"><h3 class="text-xl font-semibold">Product Sites</h3> <ul class="flex flex-col gap-2 pl-1 text-sm"><li>LEDA</li> <li>Metis</li> <li>Interview Buddy</li></ul></section> <div class="col-span-4 md:col-span-5" data-svelte-h="svelte-1mqo56g"><div class="bg-gray-300 h-[2px] divider"></div> <div class="py-3 text-gray-400">Copyright © Stack IT | 4955 Wightman St. San Diego, California, 92105 United States | VAT,
				tax code, and number of registration with the US Equivalent</div></div></div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<nav class="hidden w-1/2 gap-4 text-lg md:justify-end md:flex" title="Navigation Menu"><a class="relative group" href="/">Staffing
		<hr class="${[
    "absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full svelte-1595z8d",
    ($page.url.pathname === "/" ? "w-full" : "") + " " + ($page.url.pathname !== "/" ? "w-0" : "")
  ].join(" ").trim()}"></a> <a class="relative group" href="/custom-software">Custom Software
		<hr class="${[
    "absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full svelte-1595z8d",
    ($page.url.pathname === "/custom-software" ? "w-full" : "") + " " + ($page.url.pathname !== "/custom-software" ? "w-0" : "")
  ].join(" ").trim()}"></a> <a class="relative group" href="/about">About
		<hr class="${[
    "absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full svelte-1595z8d",
    ($page.url.pathname === "/about" ? "w-full" : "") + " " + ($page.url.pathname !== "/about" ? "w-0" : "")
  ].join(" ").trim()}"></a> <a class="relative group" href="/contact">Contact
		<hr class="${[
    "absolute h-1 duration-700 transform -translate-x-1/2 bg-blue-500 left-1/2 group-hover:w-full svelte-1595z8d",
    ($page.url.pathname === "/contact" ? "w-full" : "") + " " + ($page.url.pathname !== "/contact" ? "w-0" : "")
  ].join(" ").trim()}"></a> </nav>`;
});
const bars = {
  bars: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 832v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 320v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
      }
    ]
  }
};
const remove = {
  remove: {
    width: 1408,
    height: 1792,
    paths: [
      {
        d: "M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
      }
    ]
  }
};
const Side_menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<aside class="w-1/2 drawer drawer-end md:hidden" title="Aside Menu"><div class="drawer-content"> <label for="my-drawer-4">${validate_component(Icon, "Icon").$$render($$result, { data: bars, scale: 1.5 }, {}, {})}</label></div> <input id="my-drawer-4" type="checkbox" class="drawer-toggle"> <div class="drawer-side"><label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="min-h-full p-4 text-xl bg-white menu w-80 text-base-content"> <li><label class="absolute top-0 right-0" for="my-drawer-4">${validate_component(Icon, "Icon").$$render($$result, { data: remove, scale: 1.5 }, {}, {})}</label></li> <br> <li><a class="${"focus:bg-none text-black hover:underline decoration-blue-500 decoration-2 " + escape($page.url.pathname === "/" && "underline font-semibold", true)}" href="/">Staffing</a></li> <li><a class="${"text-black hover:underline decoration-blue-500 decoration-2 " + escape($page.url.pathname === "/custom-software" && "underline font-semibold", true)}" href="/custom-software">Custom Software</a></li>  </ul></div></aside>`;
});
const header_svelte_svelte_type_style_lang = "";
const css = {
  code: "#progress.svelte-1odmurn{animation:svelte-1odmurn-animation-grow auto linear;animation-timeline:scroll(root block)}@keyframes svelte-1odmurn-animation-grow{0%{width:0%}50%{width:50%}100%{width:100%}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="progress" class="fixed z-40 w-screen h-1 bg-[--light-blue] svelte-1odmurn"></div> <header class="sticky top-0 z-30 w-full bg-white py-[1%] px-[5%]"><div class="flex justify-between items-center lg:max-h-[70px] max-w-[1730px] mx-auto"><a href="/" class="flex items-center w-1/2 gap-2" title="Stackit Logo" data-svelte-h="svelte-1m5w6xl"><img class="h-12 w-44 object-fit" src="/images/stackit_logo_dark.png" alt="Stakit Logotipo"></a> ${validate_component(Side_menu, "SideMenu").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div> </header>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="top"></div> ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  ${slots.default ? slots.default({}) : ``}  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} <div id="back-to-top" class="opacity-0 transition-all flex duration-200 fixed z-50 bg-[#259aff] border border-none rounded-full w-14 h-14 items-center justify-center right-3 bottom-6"><a href="#top" data-svelte-h="svelte-1adp2xr"><img src="/icons/arrow.svg" alt="arrow to scroll up"></a></div>`;
});
export {
  Layout as default
};
