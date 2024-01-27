import { ref as a, computed as L, onUnmounted as P, reactive as T } from "vue";
const h = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  "": 1
}, F = (v, i) => {
  const t = a(6e4), S = a(v.interval || 1), o = a(v.immediate), m = a(Date.now()), D = a(/* @__PURE__ */ new Date()), u = a(0), r = a(!1), s = a(0), y = L(() => {
    const e = t.value - s.value;
    return e <= 0 ? 0 : e;
  }), w = a(new Date(Date.now())), n = a(
    "Pending"
    /* PENDING */
  ), l = a(!1), c = {
    warn(...e) {
      v.log && console.warn(...e);
    }
  };
  setInterval(() => {
    w.value = new Date(Date.now());
  }, 1), P(() => {
    clearInterval(u.value);
  });
  const f = () => {
    if (l.value)
      return c.warn("Timer is already running"), !1;
    if (r.value)
      return c.warn("Timer already ended"), !1;
    m.value = Date.now() - s.value, u.value = setInterval(() => {
      s.value >= t.value || t.value === 0 ? (clearInterval(u.value), !r.value && i && i(), n.value = "Ended", r.value = !0, l.value = !1) : s.value = Date.now() - m.value;
    }, S.value), n.value = "Resumed", l.value = !0;
  }, I = () => {
    f(), n.value = "Started";
  }, g = (e, U = null) => {
    if (o.value = U || o.value, typeof e == "string") {
      const x = parseInt(e), d = e.trim().replace(/[\d.]/g, "");
      if (d in h)
        t.value = x * h[d];
      else
        throw new Error(`Invalid time unit: '${d}'`);
    }
    if (e instanceof Date && (t.value = e.getTime() - Date.now()), t.value < 0 && e instanceof Date)
      return c.warn(`TTL: (${e.toLocaleString()}) cannot be in the past`), !1;
    if (D.value = new Date(Date.now() + (isFinite(t.value) ? t.value : 0)), o.value) {
      if (n.value = "Started", l.value || r.value)
        return p(), !1;
      I();
    }
  };
  g(v.ttl);
  const E = () => {
    clearInterval(u.value), n.value = "Paused", l.value = !1;
  }, R = () => {
    !r.value && i && i(), s.value = 0, n.value = "Stopped", l.value = !1, clearInterval(u.value);
  }, p = () => {
    l.value = !1, r.value = !1, s.value = 0, clearInterval(u.value), f(), n.value = "Restarted";
  };
  return T({
    /** Timer id based on setInterval API. Cancel/Clear timer with clearInterval(timerId) anywhere */
    timerId: u,
    /** — Current system DateTime */
    live: w,
    /** — DateTime instance when the timer ends */
    due: D,
    /** — The current status of the timer. */
    status: n,
    /** — The total ttl in milliseconds */
    duration: t,
    /** — The time elapsed since the timer started/resumed. */
    used: s,
    /** — The time remaining until the timer expires. */
    left: y,
    /** — Indicates whether the timer is running */
    isRunning: l,
    /** — Indicates whether the timer has expired. */
    hasExpired: r,
    // Actions
    pause: E,
    resume: f,
    start: I,
    restart: p,
    stop: R,
    setTtl: g
  });
};
export {
  F as useTimer
};
