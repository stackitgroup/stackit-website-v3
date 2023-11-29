import{s as ee,f as O,g as j,h as R,d as F,j as w,i as M,w as U,o as Se,Q as Oe,R as je,a as N,O as Me,c as D,J as Ie,A as $,K as S,S as Ne,l as Z,m as Q,n as ue}from"../chunks/scheduler.989202e2.js";import{S as te,i as re,a as B,g as De,t as Y,c as Re,b as ae,d as oe,m as se,e as ie}from"../chunks/index.36ce3e1c.js";import{p as Pe}from"../chunks/parse.bee59afc.js";import{j as He,k as ze}from"../chunks/singletons.6154490c.js";function Ue(a){let t;return{c(){t=O("div"),this.h()},l(e){t=j(e,"DIV",{class:!0,"data-url":!0}),R(t).forEach(F),this.h()},h(){w(t,"class","calendly-inline-widget h-[600px] md:w-[500px] md:h-[600px]"),w(t,"data-url","https://calendly.com/testingalphablock/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=510621&text_color=ffffff&primary_color=ed3688")},m(e,r){M(e,t,r)},p:U,i:U,o:U,d(e){e&&F(t)}}}function $e(a){return Se(()=>{const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://assets.calendly.com/assets/external/widget.js",document.head.appendChild(t)}),[]}class qe extends te{constructor(t){super(),re(this,t,$e,Ue,ee,{})}}const Be=He("invalidate_all");function Je(a){return ze.apply_action(a)}function Ge(a){const t=JSON.parse(a);return t.data&&(t.data=Pe(t.data)),t}function Fe(a){return HTMLElement.prototype.cloneNode.call(a)}function Ve(a,t=()=>{}){const e=async({action:s,result:f,reset:i=!0,invalidateAll:c=!0})=>{f.type==="success"&&(i&&HTMLFormElement.prototype.reset.call(a),c&&await Be()),(location.origin+location.pathname===s.origin+s.pathname||f.type==="redirect"||f.type==="error")&&Je(f)};async function r(s){var I,y,p,_;if(((I=s.submitter)!=null&&I.hasAttribute("formmethod")?s.submitter.formMethod:Fe(a).method)!=="post")return;s.preventDefault();const i=new URL((y=s.submitter)!=null&&y.hasAttribute("formaction")?s.submitter.formAction:Fe(a).action),c=new FormData(a),d=(p=s.submitter)==null?void 0:p.getAttribute("name");d&&c.append(d,((_=s.submitter)==null?void 0:_.getAttribute("value"))??"");const g=new AbortController;let n=!1;const l=await t({action:i,cancel:()=>n=!0,controller:g,get data(){return c},formData:c,get form(){return a},formElement:a,submitter:s.submitter})??e;if(n)return;let b;try{const C=await fetch(i,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:c,signal:g.signal});b=Ge(await C.text()),b.type==="error"&&(b.status=C.status)}catch(C){if((C==null?void 0:C.name)==="AbortError")return;b={type:"error",error:C}}l({action:i,get data(){return c},formData:c,get form(){return a},formElement:a,update:C=>e({action:i,result:b,reset:C==null?void 0:C.reset,invalidateAll:C==null?void 0:C.invalidateAll}),result:b})}return HTMLFormElement.prototype.addEventListener.call(a,"submit",r),{destroy(){HTMLFormElement.prototype.removeEventListener.call(a,"submit",r)}}}const ce=()=>{var a,t,e=new Promise((r,s)=>{a=r,t=s});return e.resolve=a,e.reject=t,e},z=(()=>typeof window=="object"&&typeof window.document=="object")();var le={exports:{}},ne,_e;function We(){if(_e)return ne;_e=1;var a=1e3,t=a*60,e=t*60,r=e*24,s=r*7,f=r*365.25;ne=function(n,o){o=o||{};var l=typeof n;if(l==="string"&&n.length>0)return i(n);if(l==="number"&&isFinite(n))return o.long?d(n):c(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))};function i(n){if(n=String(n),!(n.length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(o){var l=parseFloat(o[1]),b=(o[2]||"ms").toLowerCase();switch(b){case"years":case"year":case"yrs":case"yr":case"y":return l*f;case"weeks":case"week":case"w":return l*s;case"days":case"day":case"d":return l*r;case"hours":case"hour":case"hrs":case"hr":case"h":return l*e;case"minutes":case"minute":case"mins":case"min":case"m":return l*t;case"seconds":case"second":case"secs":case"sec":case"s":return l*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}}}function c(n){var o=Math.abs(n);return o>=r?Math.round(n/r)+"d":o>=e?Math.round(n/e)+"h":o>=t?Math.round(n/t)+"m":o>=a?Math.round(n/a)+"s":n+"ms"}function d(n){var o=Math.abs(n);return o>=r?g(n,o,r,"day"):o>=e?g(n,o,e,"hour"):o>=t?g(n,o,t,"minute"):o>=a?g(n,o,a,"second"):n+" ms"}function g(n,o,l,b){var I=o>=l*1.5;return Math.round(n/l)+" "+b+(I?"s":"")}return ne}function Ke(a){e.debug=e,e.default=e,e.coerce=d,e.disable=f,e.enable=s,e.enabled=i,e.humanize=We(),e.destroy=g,Object.keys(a).forEach(n=>{e[n]=a[n]}),e.names=[],e.skips=[],e.formatters={};function t(n){let o=0;for(let l=0;l<n.length;l++)o=(o<<5)-o+n.charCodeAt(l),o|=0;return e.colors[Math.abs(o)%e.colors.length]}e.selectColor=t;function e(n){let o,l=null,b,I;function y(...p){if(!y.enabled)return;const _=y,C=Number(new Date),u=C-(o||C);_.diff=u,_.prev=o,_.curr=C,o=C,p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let h=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(E,L)=>{if(E==="%%")return"%";h++;const x=e.formatters[L];if(typeof x=="function"){const k=p[h];E=x.call(_,k),p.splice(h,1),h--}return E}),e.formatArgs.call(_,p),(_.log||e.log).apply(_,p)}return y.namespace=n,y.useColors=e.useColors(),y.color=e.selectColor(n),y.extend=r,y.destroy=e.destroy,Object.defineProperty(y,"enabled",{enumerable:!0,configurable:!1,get:()=>l!==null?l:(b!==e.namespaces&&(b=e.namespaces,I=e.enabled(n)),I),set:p=>{l=p}}),typeof e.init=="function"&&e.init(y),y}function r(n,o){const l=e(this.namespace+(typeof o>"u"?":":o)+n);return l.log=this.log,l}function s(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];let o;const l=(typeof n=="string"?n:"").split(/[\s,]+/),b=l.length;for(o=0;o<b;o++)l[o]&&(n=l[o].replace(/\*/g,".*?"),n[0]==="-"?e.skips.push(new RegExp("^"+n.slice(1)+"$")):e.names.push(new RegExp("^"+n+"$")))}function f(){const n=[...e.names.map(c),...e.skips.map(c).map(o=>"-"+o)].join(",");return e.enable(""),n}function i(n){if(n[n.length-1]==="*")return!0;let o,l;for(o=0,l=e.skips.length;o<l;o++)if(e.skips[o].test(n))return!1;for(o=0,l=e.names.length;o<l;o++)if(e.names[o].test(n))return!0;return!1}function c(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}function d(n){return n instanceof Error?n.stack||n.message:n}function g(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var Ye=Ke;(function(a,t){t.formatArgs=r,t.save=s,t.load=f,t.useColors=e,t.storage=i(),t.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function e(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function r(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+a.exports.humanize(this.diff),!this.useColors)return;const g="color: "+this.color;d.splice(1,0,g,"color: inherit");let n=0,o=0;d[0].replace(/%[a-zA-Z%]/g,l=>{l!=="%%"&&(n++,l==="%c"&&(o=n))}),d.splice(o,0,g)}t.log=console.debug||console.log||(()=>{});function s(d){try{d?t.storage.setItem("debug",d):t.storage.removeItem("debug")}catch{}}function f(){let d;try{d=t.storage.getItem("debug")}catch{}return!d&&typeof process<"u"&&"env"in process&&(d={}.DEBUG),d}function i(){try{return localStorage}catch{}}a.exports=Ye(t);const{formatters:c}=a.exports;c.j=function(d){try{return JSON.stringify(d)}catch(g){return"[UnexpectedJSONParseError]: "+g.message}}})(le,le.exports);const Ze=le.exports;function Qe(a){let t;return{c(){t=O("div"),this.h()},l(e){t=j(e,"DIV",{id:!0,class:!0}),R(t).forEach(F),this.h()},h(){w(t,"id","googleRecaptchaDiv"),w(t,"class","g-recaptcha")},m(e,r){M(e,t,r)},p:U,i:U,o:U,d(e){e&&F(t)}}}let q;ce();let ke="google.com/recaptcha/api2/bframe";function Xe(a,t,e){const r=Ze("{Recaptcha}"),s=r,f=Oe();let{sitekey:i}=t,{badge:c="top"}=t,{size:d="invisible"}=t,{sleepTime:g=0}=t,n=null,o=null,l=null,b=null,I=null;const y={onExpired:async()=>{s("expired?"),q.reset(n)},onError:async u=>{r.extend("onError")("an error occured during initialization"),f("error",{msg:"please check your site key"}),p.errors.push("empty"),q.reset(n)},onSuccess:async u=>{const h=r.extend("onSuccess");h("dispatching success, we have a token"),f("success",{msg:"ok",token:u}),setTimeout(()=>q.reset(n),1e3),h("resetting, google needs allowed time if visible recaptcha.."),ce(),h("resetting observer")},onReady:()=>{const u=r.extend("onReady");f("ready"),u("captcha is ready and available in DOM")},onOpen:u=>{const h=r.extend("onOpen");f("open"),h("captcha decided to ask a challange")},onClose:u=>{const h=r.extend("onClose");z&&u.length===1&&!window.grecaptcha.getResponse()&&(h("captcha window was closed"),f("close"))}},p={ready:!1,errors:[],retryTimer:!1,isLoaded:()=>{const u=r.extend("isLoaded");return p.ready=!!(z&&window&&window.grecaptcha&&window.grecaptcha.ready&&document.getElementsByTagName("iframe").find(h=>h.src.includes(ke))),u("captcha.isLoaded(): "+p.ready),p.ready},stopTimer:()=>{r.extend("stopTimer")("stopping timer"),clearInterval(p.retryTimer)},startTimer:()=>{const u=r.extend("startTimer");u("check in 1s intervals"),p.retryTimer=setInterval(()=>{u("checking every second"),p.isLoaded()&&(p.stopTimer(),p.modal(),p.openHandle(),p.closeHandle(),y.onReady()),p.errors.length>3&&(p.wipe(),u("too many errors, no recaptcha for you at this  time"))},1e3)},modal:()=>{r.extend("modal")("finding recaptcha iframe"),l=document.getElementsByTagName("iframe").find(T=>T.src.includes(ke)).parentNode.parentNode},openHandle:()=>{r.extend("openHandler")("adding observer"),b=new MutationObserver(h=>l.style.opacity==1&&y.onOpen(h)),b.observe(l,{attributes:!0,attributeFilter:["style"]})},closeHandle:()=>{r.extend("closeHandle")("adding observer"),I=new MutationObserver(h=>l.style.opacity==0&&y.onClose(h)),I.observe(l,{attributes:!0,attributeFilter:["style"]})},inject:()=>{r.extend("inject")("initializing API, merging google API to svelte recaptcha"),q=window.grecaptcha,window.grecaptcha.ready(()=>{n=grecaptcha.render("googleRecaptchaDiv",{badge:c,sitekey:i,callback:y.onSuccess,"expired-callback":y.onExpired,"error-callback":y.onError,size:d})})},wipe:()=>{const u=r.extend("onDestroy");try{z&&(clearInterval(p.retryTimer),u("cleaning up clearInterval"),q&&(q.reset(n),u("resetting captcha api"),delete window.grecaptcha,delete window.apiLoaded,delete window.recaptchaCloseListener,u("deleting window.grecaptcha"),b&&b.disconnect(),I&&I.disconnect(),document.querySelectorAll("script[src*=recaptcha]").forEach(h=>{h.remove(),u("deleting google script tag")}),document.querySelectorAll("iframe[src*=recaptcha]").forEach(h=>{h.remove(),u("deleting google iframe")})))}catch(h){console.log(h.message)}}},_=async()=>{r.extend("apiLoaded")("invoked, resolving deferred promise"),o.resolve(!0)};Se(async()=>{const u=r.extend("onMount");if(z&&(window.apiLoaded=_),u("associate apiLoad to window object"),g&&(u("sleeping for a bit before inserting recaptcha script"),await C(g)),z){const h=document.createElement("script");h.id="googleRecaptchaScript",h.src="https://www.google.com/recaptcha/api.js?render=explicit&sitekey{sitekey}&onload=apiLoaded",h.async=!0,h.defer=!0,document.head.appendChild(h)}o=ce(),u("waiting for google api to finish loading"),await Promise.resolve(o),u("deferred promise was resolved..."),z&&p.inject(),u("injecting captcha code"),z&&(HTMLCollection.prototype.find=Array.prototype.find),p.startTimer(),u("polling for captcha to appear in DOM")}),je(async()=>{r.extend("onDestroy"),p.wipe()});const C=u=>new Promise(h=>setTimeout(h,u*1e3)).catch(h=>console.log("caught"));return a.$$set=u=>{"sitekey"in u&&e(0,i=u.sitekey),"badge"in u&&e(1,c=u.badge),"size"in u&&e(2,d=u.size),"sleepTime"in u&&e(3,g=u.sleepTime)},[i,c,d,g]}class et extends te{constructor(t){super(),re(this,t,Xe,Qe,ee,{sitekey:0,badge:1,size:2,sleepTime:3})}}function Ee(a){let t,e="Email Sent Successfully! You will be answered soon.";return{c(){t=O("p"),t.textContent=e},l(r){t=j(r,"P",{["data-svelte-h"]:!0}),Ie(t)!=="svelte-1r4drrk"&&(t.textContent=e)},m(r,s){M(r,t,s)},d(r){r&&F(t)}}}function xe(a){var s,f;let t,e=((f=(s=a[0])==null?void 0:s.errors.fullName)==null?void 0:f.at(0))+"",r;return{c(){t=O("h2"),r=Z(e),this.h()},l(i){t=j(i,"H2",{class:!0});var c=R(t);r=Q(c,e),c.forEach(F),this.h()},h(){w(t,"class","text-center text-red-600")},m(i,c){M(i,t,c),S(t,r)},p(i,c){var d,g;c&1&&e!==(e=((g=(d=i[0])==null?void 0:d.errors.fullName)==null?void 0:g.at(0))+"")&&ue(r,e)},d(i){i&&F(t)}}}function Ae(a){var s,f;let t,e=((f=(s=a[0])==null?void 0:s.errors.email)==null?void 0:f.at(0))+"",r;return{c(){t=O("h2"),r=Z(e),this.h()},l(i){t=j(i,"H2",{class:!0});var c=R(t);r=Q(c,e),c.forEach(F),this.h()},h(){w(t,"class","text-center text-red-600")},m(i,c){M(i,t,c),S(t,r)},p(i,c){var d,g;c&1&&e!==(e=((g=(d=i[0])==null?void 0:d.errors.email)==null?void 0:g.at(0))+"")&&ue(r,e)},d(i){i&&F(t)}}}function Te(a){var s,f;let t,e=((f=(s=a[0])==null?void 0:s.errors.message)==null?void 0:f.at(0))+"",r;return{c(){t=O("h2"),r=Z(e),this.h()},l(i){t=j(i,"H2",{class:!0});var c=R(t);r=Q(c,e),c.forEach(F),this.h()},h(){w(t,"class","text-center text-red-600")},m(i,c){M(i,t,c),S(t,r)},p(i,c){var d,g;c&1&&e!==(e=((g=(d=i[0])==null?void 0:d.errors.message)==null?void 0:g.at(0))+"")&&ue(r,e)},d(i){i&&F(t)}}}function Le(a){let t,e,r;return e=new et({props:{sitekey:a[3],badge:"bottomleft",size:"normal"}}),e.$on("success",a[5]),e.$on("error",a[6]),e.$on("expired",a[7]),{c(){t=O("div"),ae(e.$$.fragment),this.h()},l(s){t=j(s,"DIV",{class:!0});var f=R(t);oe(e.$$.fragment,f),f.forEach(F),this.h()},h(){w(t,"class","mx-auto")},m(s,f){M(s,t,f),se(e,t,null),r=!0},p:U,i(s){r||(B(e.$$.fragment,s),r=!0)},o(s){Y(e.$$.fragment,s),r=!1},d(s){s&&F(t),ie(e)}}}function tt(a){let t;return{c(){t=Z("Send Email")},l(e){t=Q(e,"Send Email")},m(e,r){M(e,t,r)},d(e){e&&F(t)}}}function rt(a){let t;return{c(){t=Z("Loading...")},l(e){t=Q(e,"Loading...")},m(e,r){M(e,t,r)},d(e){e&&F(t)}}}function nt(a){var fe,me,pe,he;let t,e,r,s,f="Consult with our specialists.",i,c,d,g,n,o,l,b,I,y,p,_,C,u,h,T=((fe=a[0])==null?void 0:fe.success)&&Ee(),E=((me=a[0])==null?void 0:me.errors)&&xe(a),L=((pe=a[0])==null?void 0:pe.errors)&&Ae(a),x=((he=a[0])==null?void 0:he.errors)&&Te(a),k=a[2]&&Le(a);function de(m,A){return m[1]?rt:tt}let X=de(a),P=X(a);return{c(){t=N(),T&&T.c(),e=N(),r=O("form"),s=O("span"),s.textContent=f,i=N(),c=O("input"),d=N(),E&&E.c(),g=N(),n=O("input"),o=N(),L&&L.c(),l=N(),b=O("textarea"),I=N(),x&&x.c(),y=N(),k&&k.c(),p=N(),_=O("button"),P.c(),this.h()},l(m){Me("svelte-1sjlqlq",document.head).forEach(F),t=D(m),T&&T.l(m),e=D(m),r=j(m,"FORM",{method:!0,class:!0});var v=R(r);s=j(v,"SPAN",{class:!0,["data-svelte-h"]:!0}),Ie(s)!=="svelte-1fump2y"&&(s.textContent=f),i=D(v),c=j(v,"INPUT",{type:!0,placeholder:!0,name:!0,class:!0}),d=D(v),E&&E.l(v),g=D(v),n=j(v,"INPUT",{type:!0,placeholder:!0,name:!0,class:!0}),o=D(v),L&&L.l(v),l=D(v),b=j(v,"TEXTAREA",{class:!0,name:!0,placeholder:!0}),R(b).forEach(F),I=D(v),x&&x.l(v),y=D(v),k&&k.l(v),p=D(v),_=j(v,"BUTTON",{class:!0});var H=R(_);P.l(H),H.forEach(F),v.forEach(F),this.h()},h(){var m,A,v,H,J,G,V,W,K;document.title="Contact Us | Stackit Group",w(s,"class","text-2xl text-center"),w(c,"type","text"),w(c,"placeholder","Full name"),w(c,"name","fullName"),w(c,"class","w-full input input-bordered input-primary"),$(c,"input-error",(v=(A=(m=a[0])==null?void 0:m.errors)==null?void 0:A.fullName)==null?void 0:v.at(0)),w(n,"type","email"),w(n,"placeholder","Full name"),w(n,"name","email"),w(n,"class","w-full input input-bordered input-primary"),$(n,"input-error",(G=(J=(H=a[0])==null?void 0:H.errors)==null?void 0:J.email)==null?void 0:G.at(0)),w(b,"class","textarea textarea-primary"),w(b,"name","message"),w(b,"placeholder","What can we do for you?"),$(b,"textarea-error",(K=(W=(V=a[0])==null?void 0:V.errors)==null?void 0:W.message)==null?void 0:K.at(0)),w(_,"class","mx-auto text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-40 bg-[#016fce] transition-colors duration-400"),_.disabled=a[2],w(r,"method","POST"),w(r,"class","flex flex-col w-full gap-5 p-5 border")},m(m,A){M(m,t,A),T&&T.m(m,A),M(m,e,A),M(m,r,A),S(r,s),S(r,i),S(r,c),S(r,d),E&&E.m(r,null),S(r,g),S(r,n),S(r,o),L&&L.m(r,null),S(r,l),S(r,b),S(r,I),x&&x.m(r,null),S(r,y),k&&k.m(r,null),S(r,p),S(r,_),P.m(_,null),C=!0,u||(h=Ne(Ve.call(null,r,a[4])),u=!0)},p(m,[A]){var v,H,J,G,V,W,K,ge,be,Ce,ye,we,ve;(v=m[0])!=null&&v.success?T||(T=Ee(),T.c(),T.m(e.parentNode,e)):T&&(T.d(1),T=null),(!C||A&1)&&$(c,"input-error",(G=(J=(H=m[0])==null?void 0:H.errors)==null?void 0:J.fullName)==null?void 0:G.at(0)),(V=m[0])!=null&&V.errors?E?E.p(m,A):(E=xe(m),E.c(),E.m(r,g)):E&&(E.d(1),E=null),(!C||A&1)&&$(n,"input-error",(ge=(K=(W=m[0])==null?void 0:W.errors)==null?void 0:K.email)==null?void 0:ge.at(0)),(be=m[0])!=null&&be.errors?L?L.p(m,A):(L=Ae(m),L.c(),L.m(r,l)):L&&(L.d(1),L=null),(!C||A&1)&&$(b,"textarea-error",(we=(ye=(Ce=m[0])==null?void 0:Ce.errors)==null?void 0:ye.message)==null?void 0:we.at(0)),(ve=m[0])!=null&&ve.errors?x?x.p(m,A):(x=Te(m),x.c(),x.m(r,y)):x&&(x.d(1),x=null),m[2]?k?(k.p(m,A),A&4&&B(k,1)):(k=Le(m),k.c(),B(k,1),k.m(r,p)):k&&(De(),Y(k,1,1,()=>{k=null}),Re()),X!==(X=de(m))&&(P.d(1),P=X(m),P&&(P.c(),P.m(_,null))),(!C||A&4)&&(_.disabled=m[2])},i(m){C||(B(k),C=!0)},o(m){Y(k),C=!1},d(m){m&&(F(t),F(e),F(r)),T&&T.d(m),E&&E.d(),L&&L.d(),x&&x.d(),k&&k.d(),P.d(),u=!1,h()}}}function at(a,t,e){const r="6LdeLRIpAAAAAArIoyirsr2LclWS7oWS7_PH2brH";let s=!1,f=!0,{form:i}=t;const c=({formElement:o})=>(e(1,s=!0),async({result:l,update:b})=>{e(1,s=!1),l.type==="success"&&o.reset(),await b()}),d=o=>{console.log("token received: "+o.detail.token),o.detail.token&&e(2,f=!1)},g=()=>{console.log("recaptcha init has failed."),e(2,f=!0)},n=()=>{console.log("recaptcha api has expired"),e(2,f=!0)};return a.$$set=o=>{"form"in o&&e(0,i=o.form)},[i,s,f,r,c,d,g,n]}class ot extends te{constructor(t){super(),re(this,t,at,nt,ee,{form:0})}}function st(a){let t,e,r,s,f;return e=new qe({}),s=new ot({props:{form:a[0]}}),{c(){t=O("section"),ae(e.$$.fragment),r=N(),ae(s.$$.fragment),this.h()},l(i){t=j(i,"SECTION",{title:!0,class:!0});var c=R(t);oe(e.$$.fragment,c),r=D(c),oe(s.$$.fragment,c),c.forEach(F),this.h()},h(){w(t,"title","Contact us"),w(t,"class","grid gap-10 gird-cols-1 md:grid-cols-2")},m(i,c){M(i,t,c),se(e,t,null),S(t,r),se(s,t,null),f=!0},p(i,[c]){const d={};c&1&&(d.form=i[0]),s.$set(d)},i(i){f||(B(e.$$.fragment,i),B(s.$$.fragment,i),f=!0)},o(i){Y(e.$$.fragment,i),Y(s.$$.fragment,i),f=!1},d(i){i&&F(t),ie(e),ie(s)}}}function it(a,t,e){let{form:r}=t;return a.$$set=s=>{"form"in s&&e(0,r=s.form)},[r]}class ft extends te{constructor(t){super(),re(this,t,it,st,ee,{form:0})}}export{ft as component};
