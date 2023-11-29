

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/staffing/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.50e3d31e.js","_app/immutable/chunks/scheduler.989202e2.js","_app/immutable/chunks/index.36ce3e1c.js","_app/immutable/chunks/why-we-excel.3a77c2a9.js","_app/immutable/chunks/some-of-our-clients.9b09284d.js"];
export const stylesheets = ["_app/immutable/assets/why-we-excel.4fae6e4d.css"];
export const fonts = [];
