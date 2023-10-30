try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const i = (() => {
  "__WB_DISABLE_DEV_LOGS" in globalThis || (self.__WB_DISABLE_DEV_LOGS = !1);
  let r = !1;
  const e = {
    debug: "#7f8c8d",
    log: "#2ecc71",
    warn: "#f39c12",
    error: "#c0392b",
    groupCollapsed: "#3498db",
    groupEnd: null
    // No colored prefix on groupEnd
  }, t = function(a, o) {
    if (self.__WB_DISABLE_DEV_LOGS)
      return;
    if (a === "groupCollapsed" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console[a](...o);
      return;
    }
    const c = [
      `background: ${e[a]}`,
      "border-radius: 0.5em",
      "color: white",
      "font-weight: bold",
      "padding: 2px 0.5em"
    ], l = r ? [] : ["%cworkbox", c.join(";")];
    console[a](...l, ...o), a === "groupCollapsed" && (r = !0), a === "groupEnd" && (r = !1);
  }, s = {}, n = Object.keys(e);
  for (const a of n) {
    const o = a;
    s[o] = (...c) => {
      t(o, c);
    };
  }
  return s;
})(), D = {
  "invalid-value": ({ paramName: r, validValueDescription: e, value: t }) => {
    if (!r || !e)
      throw new Error("Unexpected input to 'invalid-value' error.");
    return `The '${r}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(t)}.`;
  },
  "not-an-array": ({ moduleName: r, className: e, funcName: t, paramName: s }) => {
    if (!r || !e || !t || !s)
      throw new Error("Unexpected input to 'not-an-array' error.");
    return `The parameter '${s}' passed into '${r}.${e}.${t}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType: r, paramName: e, moduleName: t, className: s, funcName: n }) => {
    if (!r || !e || !t || !n)
      throw new Error("Unexpected input to 'incorrect-type' error.");
    const a = s ? `${s}.` : "";
    return `The parameter '${e}' passed into '${t}.${a}${n}()' must be of type ${r}.`;
  },
  "incorrect-class": ({ expectedClassName: r, paramName: e, moduleName: t, className: s, funcName: n, isReturnValueProblem: a }) => {
    if (!r || !t || !n)
      throw new Error("Unexpected input to 'incorrect-class' error.");
    const o = s ? `${s}.` : "";
    return a ? `The return value from '${t}.${o}${n}()' must be an instance of class ${r}.` : `The parameter '${e}' passed into '${t}.${o}${n}()' must be an instance of class ${r}.`;
  },
  "missing-a-method": ({ expectedMethod: r, paramName: e, moduleName: t, className: s, funcName: n }) => {
    if (!r || !e || !t || !s || !n)
      throw new Error("Unexpected input to 'missing-a-method' error.");
    return `${t}.${s}.${n}() expected the '${e}' parameter to expose a '${r}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry: r }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(r)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
  "add-to-cache-list-conflicting-entries": ({ firstEntry: r, secondEntry: e }) => {
    if (!r || !e)
      throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${r}'.`;
  },
  "invalid-cache-name": ({ cacheNameId: r, value: e }) => {
    if (!r)
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    return `You must provide a name containing at least one character for setCacheDetails({${r}: '...'}). Received a value of '${JSON.stringify(e)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
    return `The route you're trying to unregister was not  previously registered for the method type '${r}'.`;
  },
  "unregister-route-route-not-registered": () => "The route you're trying to unregister was not previously registered.",
  "queue-replay-failed": ({ name: r }) => `Replaying the background sync queue '${r}' failed.`,
  "duplicate-queue-name": ({ name: r }) => `The Queue name '${r}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
  "expired-test-without-max-age": ({ methodName: r, paramName: e }) => `The '${r}()' method can only be used when the '${e}' is used in the constructor.`,
  "unsupported-route-type": ({ moduleName: r, className: e, funcName: t, paramName: s }) => `The supplied '${s}' parameter was an unsupported type. Please check the docs for ${r}.${e}.${t} for valid input types.`,
  "not-array-of-class": ({ value: r, expectedClass: e, moduleName: t, className: s, funcName: n, paramName: a }) => `The supplied '${a}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(r)},'. Please check the call to ${t}.${s}.${n}() to fix the issue.`,
  "max-entries-or-age-required": ({ moduleName: r, className: e, funcName: t }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${r}.${e}.${t}`,
  "statuses-or-headers-required": ({ moduleName: r, className: e, funcName: t }) => `You must define either config.statuses or config.headersin ${r}.${e}.${t}`,
  "invalid-string": ({ moduleName: r, funcName: e, paramName: t }) => {
    if (!t || !r || !e)
      throw new Error("Unexpected input to 'invalid-string' error.");
    return `When using strings, the '${t}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${r}.${e}() for more info.`;
  },
  "channel-name-required": () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
  "invalid-responses-are-same-args": () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
  "expire-custom-caches-only": () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
  "unit-must-be-bytes": ({ normalizedRangeHeader: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${r}"`;
  },
  "single-range-only": ({ normalizedRangeHeader: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'single-range-only' error.");
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${r}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader: r }) => {
    if (!r)
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${r}"`;
  },
  "no-range-header": () => "No Range header was found in the Request provided.",
  "range-not-satisfiable": ({ size: r, start: e, end: t }) => `The start (${e}) and end (${t}) values in the Range are not satisfiable by the cached response, which is ${r} bytes.`,
  "attempt-to-cache-non-get-request": ({ url: r, method: e }) => `Unable to cache '${r}' because it is a '${e}' request and only 'GET' requests can be cached.`,
  "cache-put-with-no-response": ({ url: r }) => `There was an attempt to cache '${r}' but the response was not defined.`,
  "no-response": ({ url: r, error: e }) => {
    let t = `The strategy could not generate a response for '${r}'.`;
    return e && (t += ` The underlying error is ${e}.`), t;
  },
  "bad-precaching-response": ({ url: r, status: e }) => `The precaching request for '${r}' failed` + (e ? ` with an HTTP status of ${e}.` : "."),
  "non-precached-url": ({ url: r }) => `createHandlerBoundToURL('${r}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
  "add-to-cache-list-conflicting-integrities": ({ url: r }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} with different integrity values. Please remove one of them.`,
  "missing-precache-entry": ({ cacheName: r, url: e }) => `Unable to find a precached response in ${r} for ${e}.`,
  "cross-origin-copy-response": ({ origin: r }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${r}.`,
  "opaque-streams-source": ({ type: r }) => {
    const e = `One of the workbox-streams sources resulted in an '${r}' response.`;
    return r === "opaqueredirect" ? `${e} Please do not use a navigation request that results in a redirect as a source.` : `${e} Please ensure your sources are CORS-enabled.`;
  }
}, W = (r, e = {}) => {
  const t = D[r];
  if (!t)
    throw new Error(`Unable to find message for code '${r}'.`);
  return t(e);
}, M = W;
class h extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const s = M(e, t);
    super(s), this.name = e, this.details = t;
  }
}
const F = (r, e) => {
  if (!Array.isArray(r))
    throw new h("not-an-array", e);
}, j = (r, e, t) => {
  if (typeof r[e] !== "function")
    throw t.expectedMethod = e, new h("missing-a-method", t);
}, H = (r, e, t) => {
  if (typeof r !== e)
    throw t.expectedType = e, new h("incorrect-type", t);
}, B = (r, e, t) => {
  if (!(r instanceof e))
    throw t.expectedClassName = e.name, new h("incorrect-class", t);
}, V = (r, e, t) => {
  if (!e.includes(r))
    throw t.validValueDescription = `Valid values are ${JSON.stringify(e)}.`, new h("invalid-value", t);
}, G = (r, e, t) => {
  const s = new h("not-array-of-class", t);
  if (!Array.isArray(r))
    throw s;
  for (const n of r)
    if (!(n instanceof e))
      throw s;
}, d = {
  hasMethod: j,
  isArray: F,
  isInstance: B,
  isOneOf: V,
  isType: H,
  isArrayOfClass: G
}, E = /* @__PURE__ */ new Set(), g = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, T = (r) => [g.prefix, r, g.suffix].filter((e) => e && e.length > 0).join("-"), Y = (r) => {
  for (const e of Object.keys(g))
    r(e);
}, v = {
  updateDetails: (r) => {
    Y((e) => {
      typeof r[e] == "string" && (g[e] = r[e]);
    });
  },
  getGoogleAnalyticsName: (r) => r || T(g.googleAnalytics),
  getPrecacheName: (r) => r || T(g.precache),
  getPrefix: () => g.prefix,
  getRuntimeName: (r) => r || T(g.runtime),
  getSuffix: () => g.suffix
};
function N(r, e) {
  const t = new URL(r);
  for (const s of e)
    t.searchParams.delete(s);
  return t.href;
}
async function J(r, e, t, s) {
  const n = N(e.url, t);
  if (e.url === n)
    return r.match(e, s);
  const a = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }), o = await r.keys(e, a);
  for (const c of o) {
    const l = N(c.url, t);
    if (n === l)
      return r.match(c, s);
  }
}
let b;
function Q() {
  if (b === void 0) {
    const r = new Response("");
    if ("body" in r)
      try {
        new Response(r.body), b = !0;
      } catch {
        b = !1;
      }
    b = !1;
  }
  return b;
}
class X {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
async function Z() {
  i.log(`About to run ${E.size} callbacks to clean up caches.`);
  for (const r of E)
    await r(), i.log(r, "is complete.");
  i.log("Finished running callbacks.");
}
const u = (r) => new URL(String(r), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function S(r) {
  return new Promise((e) => setTimeout(e, r));
}
function L(r, e) {
  const t = e();
  return r.waitUntil(t), t;
}
async function z(r, e) {
  let t = null;
  if (r.url && (t = new URL(r.url).origin), t !== self.location.origin)
    throw new h("cross-origin-copy-response", { origin: t });
  const s = r.clone(), n = {
    headers: new Headers(s.headers),
    status: s.status,
    statusText: s.statusText
  }, a = e ? e(n) : n, o = Q() ? s.body : await s.blob();
  return new Response(o, a);
}
function ee() {
  self.addEventListener("activate", () => self.clients.claim());
}
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const q = "GET", te = [
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT"
], k = (r) => r && typeof r == "object" ? (d.hasMethod(r, "handle", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), r) : (d.isType(r, "function", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), { handle: r });
class C {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, s = q) {
    d.isType(e, "function", {
      moduleName: "workbox-routing",
      className: "Route",
      funcName: "constructor",
      paramName: "match"
    }), s && d.isOneOf(s, te, { paramName: "method" }), this.handler = k(t), this.match = e, this.method = s;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = k(e);
  }
}
class re extends C {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, s) {
    d.isInstance(e, RegExp, {
      moduleName: "workbox-routing",
      className: "RegExpRoute",
      funcName: "constructor",
      paramName: "pattern"
    });
    const n = ({ url: a }) => {
      const o = e.exec(a.href);
      if (o) {
        if (a.origin !== location.origin && o.index !== 0) {
          i.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${a.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          return;
        }
        return o.slice(1);
      }
    };
    super(n, t, s);
  }
}
class se {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data;
        i.debug("Caching URLs from the window", t.urlsToCache);
        const s = Promise.all(t.urlsToCache.map((n) => {
          typeof n == "string" && (n = [n]);
          const a = new Request(...n);
          return this.handleRequest({ request: a, event: e });
        }));
        e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: t }) {
    d.isInstance(e, Request, {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "handleRequest",
      paramName: "options.request"
    });
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http")) {
      i.debug("Workbox Router only supports URLs that start with 'http'.");
      return;
    }
    const n = s.origin === location.origin, { params: a, route: o } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: n,
      url: s
    });
    let c = o && o.handler;
    const l = [];
    c && (l.push(["Found a route to handle this request:", o]), a && l.push([
      "Passing the following params to the route's handler:",
      a
    ]));
    const w = e.method;
    if (!c && this._defaultHandlerMap.has(w) && (l.push(`Failed to find a matching route. Falling back to the default handler for ${w}.`), c = this._defaultHandlerMap.get(w)), !c) {
      i.debug(`No route found for: ${u(s)}`);
      return;
    }
    i.groupCollapsed(`Router is responding to: ${u(s)}`), l.forEach((p) => {
      Array.isArray(p) ? i.log(...p) : i.log(p);
    }), i.groupEnd();
    let m;
    try {
      m = c.handle({ url: s, request: e, event: t, params: a });
    } catch (p) {
      m = Promise.reject(p);
    }
    const f = o && o.catchHandler;
    return m instanceof Promise && (this._catchHandler || f) && (m = m.catch(async (p) => {
      if (f) {
        i.groupCollapsed(`Error thrown when responding to:  ${u(s)}. Falling back to route's Catch Handler.`), i.error("Error thrown by:", o), i.error(p), i.groupEnd();
        try {
          return await f.handle({ url: s, request: e, event: t, params: a });
        } catch (x) {
          x instanceof Error && (p = x);
        }
      }
      if (this._catchHandler)
        return i.groupCollapsed(`Error thrown when responding to:  ${u(s)}. Falling back to globalThis Catch Handler.`), i.error("Error thrown by:", o), i.error(p), i.groupEnd(), this._catchHandler.handle({ url: s, request: e, event: t });
      throw p;
    })), m;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: s, event: n }) {
    const a = this._routes.get(s.method) || [];
    for (const o of a) {
      let c;
      const l = o.match({ url: e, sameOrigin: t, request: s, event: n });
      if (l)
        return l instanceof Promise && i.warn(`While routing ${u(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, o), c = l, (Array.isArray(c) && c.length === 0 || l.constructor === Object && // eslint-disable-line
        Object.keys(l).length === 0 || typeof l == "boolean") && (c = void 0), { route: o, params: c };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = q) {
    this._defaultHandlerMap.set(t, k(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = k(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    d.isType(e, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), d.hasMethod(e, "match", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), d.isType(e.handler, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), d.hasMethod(e.handler, "handle", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.handler"
    }), d.isType(e.method, "string", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.method"
    }), this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new h("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new h("unregister-route-route-not-registered");
  }
}
let R;
const O = () => (R || (R = new se(), R.addFetchListener(), R.addCacheListener()), R);
function ne(r, e, t) {
  let s;
  if (typeof r == "string") {
    const a = new URL(r, location.href);
    {
      if (!(r.startsWith("/") || r.startsWith("http")))
        throw new h("invalid-string", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      const c = r.startsWith("http") ? a.pathname : r, l = "[*:?+]";
      new RegExp(`${l}`).exec(c) && i.debug(`The '$capture' parameter contains an Express-style wildcard character (${l}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
    }
    const o = ({ url: c }) => (c.pathname === a.pathname && c.origin !== a.origin && i.debug(`${r} only partially matches the cross-origin URL ${c.toString()}. This route will only handle cross-origin requests if they match the entire URL.`), c.href === a.href);
    s = new C(o, e, t);
  } else if (r instanceof RegExp)
    s = new re(r, e, t);
  else if (typeof r == "function")
    s = new C(r, e, t);
  else if (r instanceof C)
    s = r;
  else
    throw new h("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return O().registerRoute(s), s;
}
function ae(r) {
  O().setDefaultHandler(r);
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function $(r) {
  return typeof r == "string" ? new Request(r) : r;
}
class oe {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, d.isInstance(t.event, ExtendableEvent, {
      moduleName: "workbox-strategies",
      className: "StrategyHandler",
      funcName: "constructor",
      paramName: "options.event"
    }), Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new X(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const s of this._plugins)
      this._pluginStateMap.set(s, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let s = $(e);
    if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const o = await t.preloadResponse;
      if (o)
        return i.log(`Using a preloaded navigation response for '${u(s.url)}'`), o;
    }
    const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
    try {
      for (const o of this.iterateCallbacks("requestWillFetch"))
        s = await o({ request: s.clone(), event: t });
    } catch (o) {
      if (o instanceof Error)
        throw new h("plugin-error-request-will-fetch", {
          thrownErrorMessage: o.message
        });
    }
    const a = s.clone();
    try {
      let o;
      o = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions), i.debug(`Network request for '${u(s.url)}' returned a response with status '${o.status}'.`);
      for (const c of this.iterateCallbacks("fetchDidSucceed"))
        o = await c({
          event: t,
          request: a,
          response: o
        });
      return o;
    } catch (o) {
      throw i.log(`Network request for '${u(s.url)}' threw an error.`, o), n && await this.runCallbacks("fetchDidFail", {
        error: o,
        event: t,
        originalRequest: n.clone(),
        request: a.clone()
      }), o;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), s = t.clone();
    return this.waitUntil(this.cachePut(e, s)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = $(e);
    let s;
    const { cacheName: n, matchOptions: a } = this._strategy, o = await this.getCacheKey(t, "read"), c = Object.assign(Object.assign({}, a), { cacheName: n });
    s = await caches.match(o, c), s ? i.debug(`Found a cached response in '${n}'.`) : i.debug(`No cached response found in '${n}'.`);
    for (const l of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s = await l({
        cacheName: n,
        matchOptions: a,
        cachedResponse: s,
        request: o,
        event: this.event
      }) || void 0;
    return s;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const s = $(e);
    await S(0);
    const n = await this.getCacheKey(s, "write");
    {
      if (n.method && n.method !== "GET")
        throw new h("attempt-to-cache-non-get-request", {
          url: u(n.url),
          method: n.method
        });
      const f = t.headers.get("Vary");
      f && i.debug(`The response for ${u(n.url)} has a 'Vary: ${f}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
    }
    if (!t)
      throw i.error(`Cannot cache non-existent response for '${u(n.url)}'.`), new h("cache-put-with-no-response", {
        url: u(n.url)
      });
    const a = await this._ensureResponseSafeToCache(t);
    if (!a)
      return i.debug(`Response '${u(n.url)}' will not be cached.`, a), !1;
    const { cacheName: o, matchOptions: c } = this._strategy, l = await self.caches.open(o), w = this.hasCallback("cacheDidUpdate"), m = w ? await J(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      l,
      n.clone(),
      ["__WB_REVISION__"],
      c
    ) : null;
    i.debug(`Updating the '${o}' cache with a new Response for ${u(n.url)}.`);
    try {
      await l.put(n, w ? a.clone() : a);
    } catch (f) {
      if (f instanceof Error)
        throw f.name === "QuotaExceededError" && await Z(), f;
    }
    for (const f of this.iterateCallbacks("cacheDidUpdate"))
      await f({
        cacheName: o,
        oldResponse: m,
        newResponse: a.clone(),
        request: n,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const s = `${e.url} | ${t}`;
    if (!this._cacheKeys[s]) {
      let n = e;
      for (const a of this.iterateCallbacks("cacheKeyWillBeUsed"))
        n = $(await a({
          mode: t,
          request: n,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[s] = n;
    }
    return this._cacheKeys[s];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const s of this.iterateCallbacks(e))
      await s(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const s = this._pluginStateMap.get(t);
        yield (a) => {
          const o = Object.assign(Object.assign({}, a), { state: s });
          return t[e](o);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let t = e, s = !1;
    for (const n of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await n({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, s = !0, !t)
        break;
    return s || (t && t.status !== 200 && (t = void 0), t && t.status !== 200 && (t.status === 0 ? i.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`) : i.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))), t;
  }
}
class A {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = v.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, s = typeof e.request == "string" ? new Request(e.request) : e.request, n = "params" in e ? e.params : void 0, a = new oe(this, { event: t, request: s, params: n }), o = this._getResponse(a, s, t), c = this._awaitComplete(o, a, s, t);
    return [o, c];
  }
  async _getResponse(e, t, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: t });
    let n;
    try {
      if (n = await this._handle(t, e), !n || n.type === "error")
        throw new h("no-response", { url: t.url });
    } catch (a) {
      if (a instanceof Error) {
        for (const o of e.iterateCallbacks("handlerDidError"))
          if (n = await o({ error: a, event: s, request: t }), n)
            break;
      }
      if (n)
        i.log(`While responding to '${u(t.url)}', an ${a instanceof Error ? a.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
      else
        throw a;
    }
    for (const a of e.iterateCallbacks("handlerWillRespond"))
      n = await a({ event: s, request: t, response: n });
    return n;
  }
  async _awaitComplete(e, t, s, n) {
    let a, o;
    try {
      a = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: n,
        request: s,
        response: a
      }), await t.doneWaiting();
    } catch (c) {
      c instanceof Error && (o = c);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: n,
      request: s,
      response: a,
      error: o
    }), t.destroy(), o)
      throw o;
  }
}
const P = {
  strategyStart: (r, e) => `Using ${r} to respond to '${u(e.url)}'`,
  printFinalResponse: (r) => {
    r && (i.groupCollapsed("View the final response here."), i.log(r || "[No response returned]"), i.groupEnd());
  }
};
class ie extends A {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(e = {}) {
    super(e), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    d.isInstance(e, Request, {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "_handle",
      paramName: "request"
    });
    let s, n;
    try {
      const a = [
        t.fetch(e)
      ];
      if (this._networkTimeoutSeconds) {
        const o = S(this._networkTimeoutSeconds * 1e3);
        a.push(o);
      }
      if (n = await Promise.race(a), !n)
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
    } catch (a) {
      a instanceof Error && (s = a);
    }
    if (i.groupCollapsed(P.strategyStart(this.constructor.name, e)), n ? i.log("Got response from network.") : i.log("Unable to get a response from the network."), P.printFinalResponse(n), i.groupEnd(), !n)
      throw new h("no-response", { url: e.url, error: s });
    return n;
  }
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch {
}
const ce = "__WB_REVISION__";
function le(r) {
  if (!r)
    throw new h("add-to-cache-list-unexpected-type", { entry: r });
  if (typeof r == "string") {
    const a = new URL(r, location.href);
    return {
      cacheKey: a.href,
      url: a.href
    };
  }
  const { revision: e, url: t } = r;
  if (!t)
    throw new h("add-to-cache-list-unexpected-type", { entry: r });
  if (!e) {
    const a = new URL(t, location.href);
    return {
      cacheKey: a.href,
      url: a.href
    };
  }
  const s = new URL(t, location.href), n = new URL(t, location.href);
  return s.searchParams.set(ce, e), {
    cacheKey: s.href,
    url: n.href
  };
}
class he {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: s }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const n = t.originalRequest.url;
        s ? this.notUpdatedURLs.push(n) : this.updatedURLs.push(n);
      }
      return s;
    };
  }
}
class ue {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: s }) => {
      const n = (s == null ? void 0 : s.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return n ? new Request(n, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
const de = (r, e) => {
  i.groupCollapsed(r);
  for (const t of e)
    i.log(t);
  i.groupEnd();
};
function fe(r) {
  const e = r.length;
  e > 0 && (i.groupCollapsed(`During precaching cleanup, ${e} cached request${e === 1 ? " was" : "s were"} deleted.`), de("Deleted Cache Requests", r), i.groupEnd());
}
function K(r, e) {
  if (e.length !== 0) {
    i.groupCollapsed(r);
    for (const t of e)
      i.log(t);
    i.groupEnd();
  }
}
function pe(r, e) {
  const t = r.length, s = e.length;
  if (t || s) {
    let n = `Precaching ${t} file${t === 1 ? "" : "s"}.`;
    s > 0 && (n += ` ${s} file${s === 1 ? " is" : "s are"} already cached.`), i.groupCollapsed(n), K("View newly precached URLs.", r), K("View previously precached URLs.", e), i.groupEnd();
  }
}
class y extends A {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = v.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(y.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const s = await t.cacheMatch(e);
    return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let s;
    const n = t.params || {};
    if (this._fallbackToNetwork) {
      i.warn(`The precached response for ${u(e.url)} in ${this.cacheName} was not found. Falling back to the network.`);
      const a = n.integrity, o = e.integrity, c = !o || o === a;
      s = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? o || a : void 0
      })), a && c && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()) && i.log(`A response for ${u(e.url)} was used to "repair" the precache.`));
    } else
      throw new h("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    {
      const a = n.cacheKey || await t.getCacheKey(e, "read");
      i.groupCollapsed("Precaching is responding to: " + u(e.url)), i.log(`Serving the precached url: ${u(a instanceof Request ? a.url : a)}`), i.groupCollapsed("View request details here."), i.log(e), i.groupEnd(), i.groupCollapsed("View response details here."), i.log(s), i.groupEnd(), i.groupEnd();
    }
    return s;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const s = await t.fetch(e);
    if (!await t.cachePut(e, s.clone()))
      throw new h("bad-precaching-response", {
        url: e.url,
        status: s.status
      });
    return s;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [s, n] of this.plugins.entries())
      n !== y.copyRedirectedCacheableResponsesPlugin && (n === y.defaultPrecacheCacheabilityPlugin && (e = s), n.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(y.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
y.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: r }) {
    return !r || r.status >= 400 ? null : r;
  }
};
y.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: r }) {
    return r.redirected ? await z(r) : r;
  }
};
class ge {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: s = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new y({
      cacheName: v.getPrecacheName(e),
      plugins: [
        ...t,
        new ue({ precacheController: this })
      ],
      fallbackToNetwork: s
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    d.isArray(e, {
      moduleName: "workbox-precaching",
      className: "PrecacheController",
      funcName: "addToCacheList",
      paramName: "entries"
    });
    const t = [];
    for (const s of e) {
      typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
      const { cacheKey: n, url: a } = le(s), o = typeof s != "string" && s.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(a) && this._urlsToCacheKeys.get(a) !== n)
        throw new h("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(a),
          secondEntry: n
        });
      if (typeof s != "string" && s.integrity) {
        if (this._cacheKeysToIntegrities.has(n) && this._cacheKeysToIntegrities.get(n) !== s.integrity)
          throw new h("add-to-cache-list-conflicting-integrities", {
            url: a
          });
        this._cacheKeysToIntegrities.set(n, s.integrity);
      }
      if (this._urlsToCacheKeys.set(a, n), this._urlsToCacheModes.set(a, o), t.length > 0) {
        const c = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        i.warn(c);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return L(e, async () => {
      const t = new he();
      this.strategy.plugins.push(t);
      for (const [a, o] of this._urlsToCacheKeys) {
        const c = this._cacheKeysToIntegrities.get(o), l = this._urlsToCacheModes.get(a), w = new Request(a, {
          integrity: c,
          cache: l,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: o },
          request: w,
          event: e
        }));
      }
      const { updatedURLs: s, notUpdatedURLs: n } = t;
      return pe(s, n), { updatedURLs: s, notUpdatedURLs: n };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return L(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), s = await t.keys(), n = new Set(this._urlsToCacheKeys.values()), a = [];
      for (const o of s)
        n.has(o.url) || (await t.delete(o), a.push(o.url));
      return fe(a), { deletedURLs: a };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, s = this.getCacheKeyForURL(t);
    if (s)
      return (await self.caches.open(this.strategy.cacheName)).match(s);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new h("non-precached-url", { url: e });
    return (s) => (s.request = new Request(e), s.params = Object.assign({ cacheKey: t }, s.params), this.strategy.handle(s));
  }
}
let U;
const I = () => (U || (U = new ge()), U);
function we(r, e = []) {
  for (const t of [...r.searchParams.keys()])
    e.some((s) => s.test(t)) && r.searchParams.delete(t);
  return r;
}
function* me(r, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: s = !0, urlManipulation: n } = {}) {
  const a = new URL(r, location.href);
  a.hash = "", yield a.href;
  const o = we(a, e);
  if (yield o.href, t && o.pathname.endsWith("/")) {
    const c = new URL(o.href);
    c.pathname += t, yield c.href;
  }
  if (s) {
    const c = new URL(o.href);
    c.pathname += ".html", yield c.href;
  }
  if (n) {
    const c = n({ url: a });
    for (const l of c)
      yield l.href;
  }
}
class ye extends C {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, t) {
    const s = ({ request: n }) => {
      const a = e.getURLsToCacheKeys();
      for (const o of me(n.url, t)) {
        const c = a.get(o);
        if (c) {
          const l = e.getIntegrityForCacheKey(c);
          return { cacheKey: c, integrity: l };
        }
      }
      i.debug("Precaching did not find a match for " + u(n.url));
    };
    super(s, e.strategy);
  }
}
function be(r) {
  const e = I(), t = new ye(e, r);
  ne(t);
}
function Re(r) {
  I().precache(r);
}
function Ce(r, e) {
  Re(r), be(e);
}
Ce([{"revision":null,"url":"assets/_commonjs-dynamic-modules-1464901e.js"},{"revision":null,"url":"assets/_plugin-vue_export-helper-c27b6911.js"},{"revision":null,"url":"assets/baseSolanaAdapter.esm-d5253add.js"},{"revision":null,"url":"assets/camera-f6629625.js"},{"revision":null,"url":"assets/dutch-9a1ae5c2-a16720c5.js"},{"revision":null,"url":"assets/ethereumProvider.esm-86f73598.js"},{"revision":null,"url":"assets/french-3d857bc5-8d49f87c.js"},{"revision":null,"url":"assets/german-4ae2ee33-5dea2eb8.js"},{"revision":null,"url":"assets/home-9751da3a.js"},{"revision":null,"url":"assets/home-bb96d77b.css"},{"revision":null,"url":"assets/index-78058d01.css"},{"revision":null,"url":"assets/index-d98cf7c7.js"},{"revision":null,"url":"assets/index-ecb1d4fb.js"},{"revision":null,"url":"assets/index-f6213722.js"},{"revision":null,"url":"assets/inherits_browser-2c87d58f.js"},{"revision":null,"url":"assets/japanese-e1a7a06c-4e9481e4.js"},{"revision":null,"url":"assets/korean-95658e12-2c71056a.js"},{"revision":null,"url":"assets/mandarin-1e325876-bb618afe.js"},{"revision":null,"url":"assets/map-0e4edc49.js"},{"revision":null,"url":"assets/openloginAdapter.esm-520913a5.js"},{"revision":null,"url":"assets/phantomAdapter.esm-97856153.js"},{"revision":null,"url":"assets/portuguese-c1293d6a-397537de.js"},{"revision":null,"url":"assets/solanaProvider.esm-ab840c2f.js"},{"revision":null,"url":"assets/spanish-54ba83ea-0b7cdddb.js"},{"revision":null,"url":"assets/torusEvmAdapter.esm-35a8516e.js"},{"revision":null,"url":"assets/torusSolanaAdapter.esm-ff31fc06.js"},{"revision":null,"url":"assets/walletConnectV2Adapter.esm-5a7946af.js"},{"revision":"783e4afc627c08bde6be2ce1eec36067","url":"index.html"},{"revision":"1872c500de691dce40960bb85481de07","url":"registerSW.js"},{"revision":"71dcfd191507c31dc79efe3341dfa3b9","url":"favicon.svg"},{"revision":"8e3a10e157f75ada21ab742c022d5430","url":"vite.svg"},{"revision":"f24c9384006bbc8de95ed69990459dca","url":"pwa-192x192.png"},{"revision":"fec3d5de970445c0dec54e8fc9d02c16","url":"192.png"},{"revision":"e76b48b22ff1f7d2123b81d22fe25792","url":"512.png"},{"revision":"0c62637d293076ac8c886e769a3e911c","url":"manifest.webmanifest"}]);
self.addEventListener("install", (r) => {
  r.waitUntil(
    new Promise((e) => {
      console.log("installed"), e(!0);
    })
  );
});
self.addEventListener("activate", async (r) => {
  r.waitUntil(
    new Promise((e) => {
      e(!0);
    })
  );
});
self.addEventListener("push", (r) => {
  r.waitUntil(
    new Promise((e) => {
      const t = {
        body: "hello world.",
        icon: "/favicon.svg"
      };
      setTimeout(() => {
        self.registration.showNotification("Push Notification", t);
      }, 3e3), e(!0);
    })
  );
});
ae(new ie());
self.skipWaiting();
ee();
