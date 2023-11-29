export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","fonts/sui_generis_regular.ttf","icons/arrow.svg","images/404.png","images/about.png","images/boeing.png","images/bridgepoint.png","images/buscape.png","images/ceo.jpg","images/custom_consulting.png","images/custom_software_development.png","images/fuelzee.png","images/hero.jpeg","images/hero_2.jpeg","images/how-to-work-together-discovery.png","images/how-to-work-together-integration.jpeg","images/how-to-work-together-selection.png","images/listen.png","images/maintenance.png","images/manuel_miranda.jpeg","images/plan.png","images/pompilio_fiore.jpeg","images/Raketech_Senior_Developer_Interview_Questions_and_Tasks.pdf","images/rene_reyes.jpeg","images/siemens.png","images/software_development.jpeg","images/software_development.jpg","images/software_development.webp","images/stackit_isotipo.png","images/stackit_logo.png","images/stackit_logo_dark.png","images/staffing.png","images/staffing_innovation.png","images/step1.png","images/step2.png","images/step3.png","images/succeed.png","images/success_coded.jpeg","images/the_result.jpeg","images/toyota.png","images/who_we_are.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".jpg":"image/jpeg",".jpeg":"image/jpeg",".pdf":"application/pdf",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.fd429b77.js","app":"_app/immutable/entry/app.8e5ba179.js","imports":["_app/immutable/entry/start.fd429b77.js","_app/immutable/chunks/scheduler.989202e2.js","_app/immutable/chunks/singletons.6154490c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.8e5ba179.js","_app/immutable/chunks/scheduler.989202e2.js","_app/immutable/chunks/index.36ce3e1c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/custom-software",
				pattern: /^\/custom-software\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/staffing",
				pattern: /^\/staffing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
