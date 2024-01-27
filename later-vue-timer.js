import { ref as d, computed as E, onUnmounted as O, reactive as R, defineComponent as M, openBlock as N, createElementBlock as A, Fragment as U, createElementVNode as t, createTextVNode as S, toDisplayString as u, unref as s, createApp as F } from "vue";
(function() {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload"))
    return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
    m(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const v of o.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && m(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(n) {
    const o = {};
    return n.integrity && (o.integrity = n.integrity), n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? o.credentials = "include" : n.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function m(n) {
    if (n.ep)
      return;
    n.ep = !0;
    const o = l(n);
    fetch(n.href, o);
  }
})();
const $ = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  "": 1
}, b = (g, a) => {
  const l = d(6e4), m = d(g.interval || 1), n = d(g.immediate), o = d(Date.now()), v = d(/* @__PURE__ */ new Date()), e = d(0), r = d(!1), c = d(0), C = E(() => {
    const i = l.value - c.value;
    return i <= 0 ? 0 : i;
  }), x = d(new Date(Date.now())), f = d(
    "Pending"
    /* PENDING */
  ), p = d(!1), w = {
    warn(...i) {
      g.log && console.warn(...i);
    }
  };
  setInterval(() => {
    x.value = new Date(Date.now());
  }, 1), O(() => {
    clearInterval(e.value);
  });
  const D = () => {
    if (p.value)
      return w.warn("Timer is already running"), !1;
    if (r.value)
      return w.warn("Timer already ended"), !1;
    o.value = Date.now() - c.value, e.value = setInterval(() => {
      c.value >= l.value || l.value === 0 ? (clearInterval(e.value), !r.value && a && a(), f.value = "Ended", r.value = !0, p.value = !1) : c.value = Date.now() - o.value;
    }, m.value), f.value = "Resumed", p.value = !0;
  }, L = () => {
    D(), f.value = "Started";
  }, I = (i, P = null) => {
    if (n.value = P || n.value, typeof i == "string") {
      const k = parseInt(i), y = i.trim().replace(/[\d.]/g, "");
      if (y in $)
        l.value = k * $[y];
      else
        throw new Error(`Invalid time unit: '${y}'`);
    }
    if (i instanceof Date && (l.value = i.getTime() - Date.now()), l.value < 0 && i instanceof Date)
      return w.warn(`TTL: (${i.toLocaleString()}) cannot be in the past`), !1;
    if (v.value = new Date(Date.now() + (isFinite(l.value) ? l.value : 0)), n.value) {
      if (f.value = "Started", p.value || r.value)
        return T(), !1;
      L();
    }
  };
  I(g.ttl);
  const h = () => {
    clearInterval(e.value), f.value = "Paused", p.value = !1;
  }, _ = () => {
    !r.value && a && a(), c.value = 0, f.value = "Stopped", p.value = !1, clearInterval(e.value);
  }, T = () => {
    p.value = !1, r.value = !1, c.value = 0, clearInterval(e.value), D(), f.value = "Restarted";
  };
  return R({
    /** Timer id based on setInterval API. Cancel/Clear timer with clearInterval(timerId) anywhere */
    timerId: e,
    /** — Current system DateTime */
    live: x,
    /** — DateTime instance when the timer ends */
    due: v,
    /** — The current status of the timer. */
    status: f,
    /** — The total ttl in milliseconds */
    duration: l,
    /** — The time elapsed since the timer started/resumed. */
    used: c,
    /** — The time remaining until the timer expires. */
    left: C,
    /** — Indicates whether the timer is running */
    isRunning: p,
    /** — Indicates whether the timer has expired. */
    hasExpired: r,
    // Actions
    pause: h,
    resume: D,
    start: L,
    restart: T,
    stop: _,
    setTtl: I
  });
}, V = /* @__PURE__ */ t("h3", null, [
  /* @__PURE__ */ t("strong", null, "Hello UseTimer")
], -1), B = { style: { margin: "unset" } }, H = /* @__PURE__ */ t("b", null, "Immediate Timer", -1), q = /* @__PURE__ */ t("hr", { style: { "max-width": "400px", margin: "30px 0" } }, null, -1), K = /* @__PURE__ */ t("b", null, "Self Invoked Timer", -1), j = /* @__PURE__ */ t("br", null, null, -1), z = { style: { display: "flex", "flex-wrap": "wrap", gap: "10px" } }, G = /* @__PURE__ */ t("hr", { style: { "max-width": "400px", margin: "30px 0" } }, null, -1), J = /* @__PURE__ */ t("b", null, "Pick A DateTime", -1), Q = /* @__PURE__ */ t("br", null, null, -1), W = { style: { display: "flex", "flex-wrap": "wrap", gap: "10px" } }, X = /* @__PURE__ */ M({
  __name: "App",
  setup(g) {
    const a = () => {
      const v = (/* @__PURE__ */ new Date()).getTime(), e = 1 / 6 * 60 * 1e3, r = 1 * 60 * 1e3, c = v + Math.floor(Math.random() * (r - e + 1) + e);
      return new Date(c);
    }, l = [
      a(),
      a(),
      a(),
      a(),
      a(),
      a()
    ], m = b({ immediate: !0, ttl: l[5] }), n = b({ ttl: "20000", log: !0 }), o = b({ immediate: !0, log: !0 });
    return (v, e) => (N(), A(U, null, [
      V,
      t("div", B, [
        H,
        S(" - " + u(s(m).used) + " - Due: " + u(s(m).due.toLocaleString()) + " ", 1),
        t("code", null, [
          t("pre", null, u(s(m)), 1)
        ])
      ]),
      q,
      t("div", null, [
        K,
        S(" - " + u(s(n).used) + " - Due: " + u(s(n).due.toLocaleString()) + " ", 1),
        t("code", null, [
          t("pre", null, u(s(n)), 1)
        ]),
        j,
        t("div", z, [
          t("button", {
            onClick: e[0] || (e[0] = (r) => s(n).start())
          }, "Start"),
          t("button", {
            onClick: e[1] || (e[1] = (r) => s(n).pause())
          }, "Pause"),
          t("button", {
            onClick: e[2] || (e[2] = (r) => s(n).stop())
          }, "Stop"),
          t("button", {
            onClick: e[3] || (e[3] = (r) => s(n).resume())
          }, "Resume"),
          t("button", {
            onClick: e[4] || (e[4] = (r) => s(n).restart())
          }, "Restart")
        ])
      ]),
      G,
      t("div", null, [
        J,
        S(" - " + u(s(o).used) + " - Due: " + u(s(o).due.toLocaleString()) + " ", 1),
        t("code", null, [
          t("pre", null, u(s(o)), 1)
        ]),
        Q,
        t("div", W, [
          t("button", {
            onClick: e[5] || (e[5] = (r) => s(o).setTtl(l[0]))
          }, u(l[0].toLocaleString()), 1),
          t("button", {
            onClick: e[6] || (e[6] = (r) => s(o).setTtl(l[1]))
          }, u(l[1].toLocaleString()), 1),
          t("button", {
            onClick: e[7] || (e[7] = (r) => s(o).setTtl(l[2]))
          }, u(l[2].toLocaleString()), 1),
          t("button", {
            onClick: e[8] || (e[8] = (r) => s(o).setTtl(l[3]))
          }, u(l[3].toLocaleString()), 1),
          t("button", {
            onClick: e[9] || (e[9] = (r) => s(o).setTtl(l[4]))
          }, u(l[4].toLocaleString()), 1)
        ])
      ])
    ], 64));
  }
});
F(X).mount("#app");
