

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/custom-software/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.4fed6b23.js","_app/immutable/chunks/scheduler.989202e2.js","_app/immutable/chunks/index.36ce3e1c.js","_app/immutable/chunks/some-of-our-clients.9b09284d.js"];
export const stylesheets = ["_app/immutable/assets/5.3133da72.css"];
export const fonts = [];
