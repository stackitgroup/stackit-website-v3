import { c as create_ssr_component, l as createEventDispatcher, o as onDestroy, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import require$$1 from "tty";
import require$$1$1 from "util";
import require$$0 from "os";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const Calendly_widget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="calendly-inline-widget h-[600px] md:w-[500px] md:h-[600px]" data-url="https://calendly.com/testingalphablock/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=510621&text_color=ffffff&primary_color=ed3688"></div>`;
});
const defer = () => {
  var res, rej;
  var promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const browser$1 = (() => {
  return typeof window === "object" && typeof window.document === "object";
})();
var src = { exports: {} };
var browser = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs)
    return ms;
  hasRequiredMs = 1;
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  ms = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms2 / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms2 / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms2 / s) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return plural(ms2, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms2, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms2, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms2, msAbs, s, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
  }
  return ms;
}
var common;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon)
    return common;
  hasRequiredCommon = 1;
  function setup(env) {
    createDebug2.debug = createDebug2;
    createDebug2.default = createDebug2;
    createDebug2.coerce = coerce;
    createDebug2.disable = disable;
    createDebug2.enable = enable;
    createDebug2.enabled = enabled;
    createDebug2.humanize = requireMs();
    createDebug2.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug2[key] = env[key];
    });
    createDebug2.names = [];
    createDebug2.skips = [];
    createDebug2.formatters = {};
    function selectColor(namespace) {
      let hash = 0;
      for (let i = 0; i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return createDebug2.colors[Math.abs(hash) % createDebug2.colors.length];
    }
    createDebug2.selectColor = selectColor;
    function createDebug2(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self = debug;
        const curr = Number(new Date());
        const ms2 = curr - (prevTime || curr);
        self.diff = ms2;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug2.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug2.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug2.formatArgs.call(self, args);
        const logFn = self.log || createDebug2.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug2.useColors();
      debug.color = createDebug2.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug2.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug2.namespaces) {
            namespacesCache = createDebug2.namespaces;
            enabledCache = createDebug2.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v) => {
          enableOverride = v;
        }
      });
      if (typeof createDebug2.init === "function") {
        createDebug2.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug2(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug2.save(namespaces);
      createDebug2.namespaces = namespaces;
      createDebug2.names = [];
      createDebug2.skips = [];
      let i;
      const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      const len = split.length;
      for (i = 0; i < len; i++) {
        if (!split[i]) {
          continue;
        }
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          createDebug2.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
        } else {
          createDebug2.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      const namespaces = [
        ...createDebug2.names.map(toNamespace),
        ...createDebug2.skips.map(toNamespace).map((namespace) => "-" + namespace)
      ].join(",");
      createDebug2.enable("");
      return namespaces;
    }
    function enabled(name) {
      if (name[name.length - 1] === "*") {
        return true;
      }
      let i;
      let len;
      for (i = 0, len = createDebug2.skips.length; i < len; i++) {
        if (createDebug2.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = createDebug2.names.length; i < len; i++) {
        if (createDebug2.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function toNamespace(regexp) {
      return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug2.enable(createDebug2.load());
    return createDebug2;
  }
  common = setup;
  return common;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser)
    return browser.exports;
  hasRequiredBrowser = 1;
  (function(module, exports) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = requireCommon()(exports);
    const { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser, browser.exports);
  return browser.exports;
}
var node = { exports: {} };
var hasFlag;
var hasRequiredHasFlag;
function requireHasFlag() {
  if (hasRequiredHasFlag)
    return hasFlag;
  hasRequiredHasFlag = 1;
  hasFlag = (flag, argv = process.argv) => {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  };
  return hasFlag;
}
var supportsColor_1;
var hasRequiredSupportsColor;
function requireSupportsColor() {
  if (hasRequiredSupportsColor)
    return supportsColor_1;
  hasRequiredSupportsColor = 1;
  const os = require$$0;
  const tty = require$$1;
  const hasFlag2 = requireHasFlag();
  const { env } = process;
  let forceColor;
  if (hasFlag2("no-color") || hasFlag2("no-colors") || hasFlag2("color=false") || hasFlag2("color=never")) {
    forceColor = 0;
  } else if (hasFlag2("color") || hasFlag2("colors") || hasFlag2("color=true") || hasFlag2("color=always")) {
    forceColor = 1;
  }
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
      forceColor = 0;
    } else {
      forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (hasFlag2("color=16m") || hasFlag2("color=full") || hasFlag2("color=truecolor")) {
      return 3;
    }
    if (hasFlag2("color=256")) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
  }
  supportsColor_1 = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
  };
  return supportsColor_1;
}
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode)
    return node.exports;
  hasRequiredNode = 1;
  (function(module, exports) {
    const tty = require$$1;
    const util = require$$1$1;
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = requireSupportsColor();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = requireCommon()(exports);
    const { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  })(node, node.exports);
  return node.exports;
}
(function(module) {
  if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
    module.exports = requireBrowser();
  } else {
    module.exports = requireNode();
  }
})(src);
const createDebug = /* @__PURE__ */ getDefaultExportFromCjs(src.exports);
let recaptcha;
defer();
let iframeSrc = "google.com/recaptcha/api2/bframe";
const Recaptcha = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dbg = createDebug("{Recaptcha}");
  const debug = dbg;
  const dispatch = createEventDispatcher();
  let { sitekey } = $$props;
  let { badge = "top" } = $$props;
  let { size = "invisible" } = $$props;
  let { sleepTime = 0 } = $$props;
  let instanceId = null;
  let recaptchaModal = null;
  let openObserver = null;
  let closeObserver = null;
  const eventEmitters = {
    onExpired: async () => {
      debug("expired?");
      recaptcha.reset(instanceId);
    },
    onError: async (err) => {
      const debug2 = dbg.extend("onError");
      debug2("an error occured during initialization");
      dispatch("error", { msg: "please check your site key" });
      captcha.errors.push("empty");
      recaptcha.reset(instanceId);
    },
    onSuccess: async (token) => {
      const debug2 = dbg.extend("onSuccess");
      debug2("dispatching success, we have a token");
      dispatch("success", { msg: "ok", token });
      setTimeout(() => recaptcha.reset(instanceId), 1e3);
      debug2("resetting, google needs allowed time if visible recaptcha..");
      defer();
      debug2("resetting observer");
    },
    onReady: () => {
      const debug2 = dbg.extend("onReady");
      dispatch("ready");
      debug2("captcha is ready and available in DOM");
    },
    onOpen: (mutations) => {
      const debug2 = dbg.extend("onOpen");
      dispatch("open");
      debug2("captcha decided to ask a challange");
    },
    onClose: (mutations) => {
      const debug2 = dbg.extend("onClose");
      if (browser$1 && mutations.length === 1 && !window.grecaptcha.getResponse()) {
        debug2("captcha window was closed");
        dispatch("close");
      }
    }
  };
  const captcha = {
    ready: false,
    /*captcha loading state*/
    errors: [],
    retryTimer: false,
    /*setInterval timer to update state*/
    isLoaded: () => {
      const debug2 = dbg.extend("isLoaded");
      captcha.ready = browser$1 && window && window.grecaptcha && window.grecaptcha.ready && document.getElementsByTagName("iframe").find((x) => {
        return x.src.includes(iframeSrc);
      }) ? true : false;
      debug2("captcha.isLoaded(): " + captcha.ready);
      return captcha.ready;
    },
    stopTimer: () => {
      const debug2 = dbg.extend("stopTimer");
      debug2("stopping timer");
      clearInterval(captcha.retryTimer);
    },
    startTimer: () => {
      const debug2 = dbg.extend("startTimer");
      debug2("check in 1s intervals");
      captcha.retryTimer = setInterval(
        () => {
          debug2("checking every second");
          if (captcha.isLoaded()) {
            captcha.stopTimer();
            captcha.modal();
            captcha.openHandle();
            captcha.closeHandle();
            eventEmitters.onReady();
          }
          if (captcha.errors.length > 3) {
            captcha.wipe();
            debug2("too many errors, no recaptcha for you at this  time");
          }
        },
        1e3
      );
    },
    modal: () => {
      const debug2 = dbg.extend("modal");
      debug2("finding recaptcha iframe");
      const iframe = document.getElementsByTagName("iframe");
      recaptchaModal = iframe.find((x) => {
        return x.src.includes(iframeSrc);
      }).parentNode.parentNode;
    },
    openHandle: () => {
      const debug2 = dbg.extend("openHandler");
      debug2("adding observer");
      openObserver = new MutationObserver((x) => {
        return recaptchaModal.style.opacity == 1 && eventEmitters.onOpen(x);
      });
      openObserver.observe(recaptchaModal, {
        attributes: true,
        attributeFilter: ["style"]
      });
    },
    closeHandle: () => {
      const debug2 = dbg.extend("closeHandle");
      debug2("adding observer");
      closeObserver = new MutationObserver((x) => {
        return recaptchaModal.style.opacity == 0 && eventEmitters.onClose(x);
      });
      closeObserver.observe(recaptchaModal, {
        attributes: true,
        attributeFilter: ["style"]
      });
    },
    inject: () => {
      const debug2 = dbg.extend("inject");
      debug2("initializing API, merging google API to svelte recaptcha");
      recaptcha = window.grecaptcha;
      window.grecaptcha.ready(() => {
        instanceId = grecaptcha.render("googleRecaptchaDiv", {
          badge,
          sitekey,
          "callback": eventEmitters.onSuccess,
          "expired-callback": eventEmitters.onExpired,
          "error-callback": eventEmitters.onError,
          size
        });
      });
    },
    wipe: () => {
      const debug2 = dbg.extend("onDestroy");
      try {
        if (browser$1) {
          clearInterval(captcha.retryTimer);
          debug2("cleaning up clearInterval");
          if (recaptcha) {
            recaptcha.reset(instanceId);
            debug2("resetting captcha api");
            delete window.grecaptcha;
            delete window.apiLoaded;
            delete window.recaptchaCloseListener;
            debug2("deleting window.grecaptcha");
            if (openObserver)
              openObserver.disconnect();
            if (closeObserver)
              closeObserver.disconnect();
            document.querySelectorAll("script[src*=recaptcha]").forEach((script) => {
              script.remove();
              debug2("deleting google script tag");
            });
            document.querySelectorAll("iframe[src*=recaptcha]").forEach((iframe) => {
              iframe.remove();
              debug2("deleting google iframe");
            });
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  onDestroy(async () => {
    dbg.extend("onDestroy");
    captcha.wipe();
  });
  if ($$props.sitekey === void 0 && $$bindings.sitekey && sitekey !== void 0)
    $$bindings.sitekey(sitekey);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0)
    $$bindings.badge(badge);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.sleepTime === void 0 && $$bindings.sleepTime && sleepTime !== void 0)
    $$bindings.sleepTime(sleepTime);
  return `     <div id="googleRecaptchaDiv" class="g-recaptcha"></div> `;
});
const Contact_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const VITE_GOOGLE_RECAPTCHA_PUBLIC_KEY = "6LdeLRIpAAAAAArIoyirsr2LclWS7oWS7_PH2brH";
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${$$result.head += `<!-- HEAD_svelte-1sjlqlq_START -->${$$result.title = `<title>Contact Us | Stackit Group</title>`, ""}<!-- HEAD_svelte-1sjlqlq_END -->`, ""} ${form?.success ? `<p data-svelte-h="svelte-1r4drrk">Email Sent Successfully! You will be answered soon.</p>` : ``} <form method="POST" class="flex flex-col w-full gap-5 p-5 border"><span class="text-2xl text-center" data-svelte-h="svelte-1fump2y">Consult with our specialists.</span> <input type="text" placeholder="Full name" name="fullName" class="${[
    "w-full input input-bordered input-primary",
    form?.errors?.fullName?.at(0) ? "input-error" : ""
  ].join(" ").trim()}"> ${form?.errors ? `<h2 class="text-center text-red-600">${escape(form?.errors.fullName?.at(0))}</h2>` : ``} <input type="email" placeholder="Full name" name="email" class="${[
    "w-full input input-bordered input-primary",
    form?.errors?.email?.at(0) ? "input-error" : ""
  ].join(" ").trim()}"> ${form?.errors ? `<h2 class="text-center text-red-600">${escape(form?.errors.email?.at(0))}</h2>` : ``} <textarea class="${[
    "textarea textarea-primary",
    form?.errors?.message?.at(0) ? "textarea-error" : ""
  ].join(" ").trim()}" name="message" placeholder="What can we do for you?"></textarea> ${form?.errors ? `<h2 class="text-center text-red-600">${escape(form?.errors.message?.at(0))}</h2>` : ``} ${`<div class="mx-auto">${validate_component(Recaptcha, "Recaptcha").$$render(
    $$result,
    {
      sitekey: VITE_GOOGLE_RECAPTCHA_PUBLIC_KEY,
      badge: "bottomleft",
      size: "normal"
    },
    {},
    {}
  )}</div>`} <button class="mx-auto text-base flex items-center justify-center gap-2 rounded-full text-gray-200 border-[1.5px] border-[#016fce] h-11 w-40 bg-[#016fce] transition-colors duration-400" ${"disabled"}>${`Send Email`}</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<section title="Contact us" class="grid gap-10 gird-cols-1 md:grid-cols-2">${validate_component(Calendly_widget, "CalendlyWidget").$$render($$result, {}, {}, {})} ${validate_component(Contact_form, "ContactForm").$$render($$result, { form }, {}, {})}</section>`;
});
export {
  Page as default
};
