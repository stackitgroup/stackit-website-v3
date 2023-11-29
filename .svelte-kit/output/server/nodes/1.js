

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.06862cd2.js","_app/immutable/chunks/scheduler.989202e2.js","_app/immutable/chunks/index.36ce3e1c.js"];
export const stylesheets = [];
export const fonts = [];
