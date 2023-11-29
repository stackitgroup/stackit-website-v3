import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.e1e3c3e3.js","_app/immutable/chunks/scheduler.989202e2.js","_app/immutable/chunks/index.36ce3e1c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.6154490c.js"];
export const stylesheets = [];
export const fonts = [];
