(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
    s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function s(r) {
    if (r.ep)
      return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Cn(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const K = {}, Je = [], ue = () => {
}, Ir = () => !1, Ht = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Tn = (e) => e.startsWith("onUpdate:"), Z = Object.assign, In = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sr = Object.prototype.hasOwnProperty, N = (e, t) => Sr.call(e, t), R = Array.isArray, qe = (e) => $t(e) === "[object Map]", Ss = (e) => $t(e) === "[object Set]", O = (e) => typeof e == "function", k = (e) => typeof e == "string", et = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", Os = (e) => (J(e) || O(e)) && O(e.then) && O(e.catch), Rs = Object.prototype.toString, $t = (e) => Rs.call(e), Or = (e) => $t(e).slice(8, -1), As = (e) => $t(e) === "[object Object]", Sn = (e) => k(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, St = /* @__PURE__ */ Cn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Rr = /-(\w)/g, Ye = jt((e) => e.replace(Rr, (t, n) => n ? n.toUpperCase() : "")), Ar = /\B([A-Z])/g, tt = jt(
  (e) => e.replace(Ar, "-$1").toLowerCase()
), Ps = jt((e) => e.charAt(0).toUpperCase() + e.slice(1)), en = jt((e) => e ? `on${Ps(e)}` : ""), Me = (e, t) => !Object.is(e, t), tn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Mt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Pr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Xn;
const Ms = () => Xn || (Xn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function On(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = k(s) ? Fr(s) : On(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (k(e) || J(e))
    return e;
}
const Mr = /;(?![^(]*\))/g, Nr = /:([^]+)/, Lr = /\/\*[^]*?\*\//g;
function Fr(e) {
  const t = {};
  return e.replace(Lr, "").split(Mr).forEach((n) => {
    if (n) {
      const s = n.split(Nr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Rn(e) {
  let t = "";
  if (k(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = Rn(e[n]);
      s && (t += s + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Dr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ur = /* @__PURE__ */ Cn(Dr);
function Ns(e) {
  return !!e || e === "";
}
const re = (e) => k(e) ? e : e == null ? "" : R(e) || J(e) && (e.toString === Rs || !O(e.toString)) ? JSON.stringify(e, Ls, 2) : String(e), Ls = (e, t) => t && t.__v_isRef ? Ls(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[nn(s, o) + " =>"] = r, n),
    {}
  )
} : Ss(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => nn(n))
} : et(t) ? nn(t) : J(t) && !R(t) && !As(t) ? String(t) : t, nn = (e, t = "") => {
  var n;
  return et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
let pe;
class Hr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function $r(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function jr() {
  return pe;
}
let Ve;
class An {
  constructor(t, n, s, r) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, $r(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Ne();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Vr(n.computed), this._dirtyLevel >= 2))
          break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Le();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Pe, n = Ve;
    try {
      return Pe = !0, Ve = this, this._runnings++, Yn(this), this.fn();
    } finally {
      Zn(this), this._runnings--, Ve = n, Pe = t;
    }
  }
  stop() {
    var t;
    this.active && (Yn(this), Zn(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Vr(e) {
  return e.value;
}
function Yn(e) {
  e._trackId++, e._depsLength = 0;
}
function Zn(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Fs(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Fs(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Pe = !0, dn = 0;
const Ds = [];
function Ne() {
  Ds.push(Pe), Pe = !1;
}
function Le() {
  const e = Ds.pop();
  Pe = e === void 0 ? !0 : e;
}
function Pn() {
  dn++;
}
function Mn() {
  for (dn--; !dn && pn.length; )
    pn.shift()();
}
function Us(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Fs(s, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const pn = [];
function Hs(e, t, n) {
  Pn();
  for (const s of e.keys())
    if (s._dirtyLevel < t && e.get(s) === s._trackId) {
      const r = s._dirtyLevel;
      s._dirtyLevel = t, r === 0 && (s._shouldSchedule = !0, s.trigger());
    }
  $s(e), Mn();
}
function $s(e) {
  for (const t of e.keys())
    t.scheduler && t._shouldSchedule && (!t._runnings || t.allowRecurse) && e.get(t) === t._trackId && (t._shouldSchedule = !1, pn.push(t.scheduler));
}
const js = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, hn = /* @__PURE__ */ new WeakMap(), Be = Symbol(""), _n = Symbol("");
function ie(e, t, n) {
  if (Pe && Ve) {
    let s = hn.get(e);
    s || hn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = js(() => s.delete(n))), Us(
      Ve,
      r
    );
  }
}
function Ce(e, t, n, s, r, o) {
  const i = hn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && R(e)) {
    const u = Number(s);
    i.forEach((a, p) => {
      (p === "length" || !et(p) && p >= u) && c.push(a);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        R(e) ? Sn(n) && c.push(i.get("length")) : (c.push(i.get(Be)), qe(e) && c.push(i.get(_n)));
        break;
      case "delete":
        R(e) || (c.push(i.get(Be)), qe(e) && c.push(i.get(_n)));
        break;
      case "set":
        qe(e) && c.push(i.get(Be));
        break;
    }
  Pn();
  for (const u of c)
    u && Hs(
      u,
      2
    );
  Mn();
}
const Br = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
), Qn = /* @__PURE__ */ Kr();
function Kr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = L(this);
      for (let o = 0, i = this.length; o < i; o++)
        ie(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(L)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ne(), Pn();
      const s = L(this)[t].apply(this, n);
      return Mn(), Le(), s;
    };
  }), e;
}
function Gr(e) {
  const t = L(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class Bs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, o = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? so : zs : o ? Ws : Gs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = R(t);
    if (!r) {
      if (i && N(Qn, n))
        return Reflect.get(Qn, n, s);
      if (n === "hasOwnProperty")
        return Gr;
    }
    const c = Reflect.get(t, n, s);
    return (et(n) ? Vs.has(n) : Br(n)) || (r || ie(t, "get", n), o) ? c : se(c) ? i && Sn(n) ? c : c.value : J(c) ? r ? Js(c) : Bt(c) : c;
  }
}
class Ks extends Bs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._shallow) {
      const u = Ze(o);
      if (!Nt(s) && !Ze(s) && (o = L(o), s = L(s)), !R(t) && se(o) && !se(s))
        return u ? !1 : (o.value = s, !0);
    }
    const i = R(t) && Sn(n) ? Number(n) < t.length : N(t, n), c = Reflect.set(t, n, s, r);
    return t === L(r) && (i ? Me(s, o) && Ce(t, "set", n, s) : Ce(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = N(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ce(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!et(n) || !Vs.has(n)) && ie(t, "has", n), s;
  }
  ownKeys(t) {
    return ie(
      t,
      "iterate",
      R(t) ? "length" : Be
    ), Reflect.ownKeys(t);
  }
}
class Wr extends Bs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const zr = /* @__PURE__ */ new Ks(), Jr = /* @__PURE__ */ new Wr(), qr = /* @__PURE__ */ new Ks(
  !0
), Nn = (e) => e, Vt = (e) => Reflect.getPrototypeOf(e);
function xt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = L(e), o = L(t);
  n || (Me(t, o) && ie(r, "get", t), ie(r, "get", o));
  const { has: i } = Vt(r), c = s ? Nn : n ? Dn : at;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function Et(e, t = !1) {
  const n = this.__v_raw, s = L(n), r = L(e);
  return t || (Me(e, r) && ie(s, "has", e), ie(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function wt(e, t = !1) {
  return e = e.__v_raw, !t && ie(L(e), "iterate", Be), Reflect.get(e, "size", e);
}
function es(e) {
  e = L(e);
  const t = L(this);
  return Vt(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function ts(e, t) {
  t = L(t);
  const n = L(this), { has: s, get: r } = Vt(n);
  let o = s.call(n, e);
  o || (e = L(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Me(t, i) && Ce(n, "set", e, t) : Ce(n, "add", e, t), this;
}
function ns(e) {
  const t = L(this), { has: n, get: s } = Vt(t);
  let r = n.call(t, e);
  r || (e = L(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ce(t, "delete", e, void 0), o;
}
function ss() {
  const e = L(this), t = e.size !== 0, n = e.clear();
  return t && Ce(e, "clear", void 0, void 0), n;
}
function Ct(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = L(i), u = t ? Nn : e ? Dn : at;
    return !e && ie(c, "iterate", Be), i.forEach((a, p) => s.call(r, u(a), u(p), o));
  };
}
function Tt(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = L(r), i = qe(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), p = n ? Nn : t ? Dn : at;
    return !t && ie(
      o,
      "iterate",
      u ? _n : Be
    ), {
      // iterator protocol
      next() {
        const { value: y, done: E } = a.next();
        return E ? { value: y, done: E } : {
          value: c ? [p(y[0]), p(y[1])] : p(y),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Se(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function kr() {
  const e = {
    get(o) {
      return xt(this, o);
    },
    get size() {
      return wt(this);
    },
    has: Et,
    add: es,
    set: ts,
    delete: ns,
    clear: ss,
    forEach: Ct(!1, !1)
  }, t = {
    get(o) {
      return xt(this, o, !1, !0);
    },
    get size() {
      return wt(this);
    },
    has: Et,
    add: es,
    set: ts,
    delete: ns,
    clear: ss,
    forEach: Ct(!1, !0)
  }, n = {
    get(o) {
      return xt(this, o, !0);
    },
    get size() {
      return wt(this, !0);
    },
    has(o) {
      return Et.call(this, o, !0);
    },
    add: Se("add"),
    set: Se("set"),
    delete: Se("delete"),
    clear: Se("clear"),
    forEach: Ct(!0, !1)
  }, s = {
    get(o) {
      return xt(this, o, !0, !0);
    },
    get size() {
      return wt(this, !0);
    },
    has(o) {
      return Et.call(this, o, !0);
    },
    add: Se("add"),
    set: Se("set"),
    delete: Se("delete"),
    clear: Se("clear"),
    forEach: Ct(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Tt(
      o,
      !1,
      !1
    ), n[o] = Tt(
      o,
      !0,
      !1
    ), t[o] = Tt(
      o,
      !1,
      !0
    ), s[o] = Tt(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  Xr,
  Yr,
  Zr,
  Qr
] = /* @__PURE__ */ kr();
function Ln(e, t) {
  const n = t ? e ? Qr : Zr : e ? Yr : Xr;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    N(n, r) && r in s ? n : s,
    r,
    o
  );
}
const eo = {
  get: /* @__PURE__ */ Ln(!1, !1)
}, to = {
  get: /* @__PURE__ */ Ln(!1, !0)
}, no = {
  get: /* @__PURE__ */ Ln(!0, !1)
}, Gs = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap();
function ro(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function oo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ro(Or(e));
}
function Bt(e) {
  return Ze(e) ? e : Fn(
    e,
    !1,
    zr,
    eo,
    Gs
  );
}
function io(e) {
  return Fn(
    e,
    !1,
    qr,
    to,
    Ws
  );
}
function Js(e) {
  return Fn(
    e,
    !0,
    Jr,
    no,
    zs
  );
}
function Fn(e, t, n, s, r) {
  if (!J(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = oo(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function ke(e) {
  return Ze(e) ? ke(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function Nt(e) {
  return !!(e && e.__v_isShallow);
}
function qs(e) {
  return ke(e) || Ze(e);
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function ks(e) {
  return Mt(e, "__v_skip", !0), e;
}
const at = (e) => J(e) ? Bt(e) : e, Dn = (e) => J(e) ? Js(e) : e;
class Xs {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new An(
      () => t(this._value),
      () => Ot(this, 1),
      () => this.dep && $s(this.dep)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = L(this);
    return (!t._cacheable || t.effect.dirty) && Me(t._value, t._value = t.effect.run()) && Ot(t, 2), Ys(t), t.effect._dirtyLevel >= 1 && Ot(t, 1), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function lo(e, t, n = !1) {
  let s, r;
  const o = O(e);
  return o ? (s = e, r = ue) : (s = e.get, r = e.set), new Xs(s, r, o || !r, n);
}
function Ys(e) {
  Pe && Ve && (e = L(e), Us(
    Ve,
    e.dep || (e.dep = js(
      () => e.dep = void 0,
      e instanceof Xs ? e : void 0
    ))
  ));
}
function Ot(e, t = 2, n) {
  e = L(e);
  const s = e.dep;
  s && Hs(
    s,
    t
  );
}
function se(e) {
  return !!(e && e.__v_isRef === !0);
}
function de(e) {
  return co(e, !1);
}
function co(e, t) {
  return se(e) ? e : new uo(e, t);
}
class uo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : L(t), this._value = n ? t : at(t);
  }
  get value() {
    return Ys(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Nt(t) || Ze(t);
    t = n ? t : L(t), Me(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : at(t), Ot(this, 2));
  }
}
function q(e) {
  return se(e) ? e.value : e;
}
const fo = {
  get: (e, t, n) => q(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return se(r) && !se(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Zs(e) {
  return ke(e) ? e : new Proxy(e, fo);
}
var it = { FIG_PID: "55145", LC_FIG_SET_PARENT: "aa54a006-3f0e-49a0-98c8-4b0919cbefe3", NVM_INC: "/Users/aeadedoyin/.nvm/versions/node/v20.10.0/include/node", MANPATH: "/Users/aeadedoyin/.nvm/versions/node/v20.10.0/share/man:/opt/homebrew/share/man:", HERD_PHP_81_INI_SCAN_DIR: "/Users/aeadedoyin/Library/Application Support/Herd/config/php/81/", TERM_PROGRAM: "iTerm.app", XDG_DATA_HOME: "/Users/aeadedoyin/.local/share", NODE: "/Users/aeadedoyin/.nvm/versions/node/v20.10.0/bin/node", NVM_CD_FLAGS: "-q", npm_package_homepage: "https://aeadedoyin.github.io/vue-timer", npm_package_devDependencies_typescript: "^5.3.3", INIT_CWD: "/Users/aeadedoyin/Jamboree/@later/vue-timer", SHELL: "/bin/zsh", TERM: "xterm-256color", npm_package_devDependencies_vite: "^5.0.8", FIGTERM_SESSION_ID: "aa54a006-3f0e-49a0-98c8-4b0919cbefe3", TMPDIR: "/var/folders/cc/pb_pl2693g589fw1jbs3wv6c0000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", TERM_PROGRAM_VERSION: "3.4.20", npm_package_exports___style_css: "./dist/style.css", npm_package_scripts_dev: "vite", npm_package_devDependencies__vitejs_plugin_vue: "^4.5.2", MallocNanoZone: "0", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", TERM_SESSION_ID: "w0t1p0:C859379A-3967-42CF-818A-921EABBE762E", npm_package_private: "true", npm_config_registry: "https://registry.npmjs.org/", FIG_SET_PARENT_CHECK: "1", ZSH: "/Users/aeadedoyin/.local/share/fig/plugins/ohmyzsh", HERD_PHP_83_INI_SCAN_DIR: "/Users/aeadedoyin/Library/Application Support/Herd/config/php/83/", USER: "aeadedoyin", NVM_DIR: "/Users/aeadedoyin/.nvm", COMMAND_MODE: "unix2003", npm_package_exports___import: "./dist/later-vue-timer.js", PNPM_SCRIPT_SRC_DIR: "/Users/aeadedoyin/Jamboree/@later/vue-timer", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.NCtu4FxJpz/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", DENO_INSTALL: "/Users/aeadedoyin/.deno", HERD_PHP_82_INI_SCAN_DIR: "/Users/aeadedoyin/Library/Application Support/Herd/config/php/82/", npm_execpath: "/Users/aeadedoyin/.nvm/versions/node/v20.10.0/lib/node_modules/pnpm/bin/pnpm.cjs", PAGER: "less", npm_package_module: "./dist/later-vue-timer.js", LSCOLORS: "Gxfxcxdxbxegedabagacad", npm_config_frozen_lockfile: "", PATH: "/Users/aeadedoyin/Jamboree/@later/vue-timer/node_modules/.bin:/Users/aeadedoyin/.nvm/versions/node/v20.10.0/lib/node_modules/pnpm/dist/node-gyp-bin:/Users/aeadedoyin/.local/share/fig/plugins/git-open:/opt/homebrew/opt/curl/bin:/Users/aeadedoyin/Library/Application Support/Herd/bin/:/Users/aeadedoyin/.deno/bin:/Users/aeadedoyin/.composer/vendor/bin:/Users/aeadedoyin/.bun/bin:/Users/aeadedoyin/.yarn/bin:/Users/aeadedoyin/.config/yarn/global/node_modules/.bin:/Users/aeadedoyin/.nvm/versions/node/v20.10.0/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/usr/local/go/bin:/Users/aeadedoyin/.fig/bin:/Users/aeadedoyin/.local/bin", npm_package_scripts_demo: "gh-pages -d demo", npm_package_dependencies_vue: "^3.3.11", __CFBundleIdentifier: "com.googlecode.iterm2", PWD: "/Users/aeadedoyin/Jamboree/@later/vue-timer", TTY: "/dev/ttys003", npm_command: "run-script", npm_package_scripts_preview: "vite preview --outDir=demo", npm_lifecycle_event: "build", npm_package_name: "@later/vue-timer", npm_package_types: "./dist/index.d.ts", ITERM_PROFILE: "Default", XDG_STATE_HOME: "/Users/aeadedoyin/.local/state", NODE_PATH: "/Users/aeadedoyin/Jamboree/@later/vue-timer/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.8/node_modules/vite/bin/node_modules:/Users/aeadedoyin/Jamboree/@later/vue-timer/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.8/node_modules/vite/node_modules:/Users/aeadedoyin/Jamboree/@later/vue-timer/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.8/node_modules:/Users/aeadedoyin/Jamboree/@later/vue-timer/node_modules/.pnpm/node_modules", npm_package_scripts_build: "vue-tsc && vite build && vite build --config vite.config.site.ts", XPC_FLAGS: "0x0", npm_package_main: "./dist/later-vue-timer.umd.cjs", npm_config_node_gyp: "/Users/aeadedoyin/.nvm/versions/node/v20.10.0/lib/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", XPC_SERVICE_NAME: "0", npm_package_version: "1.0.0", COLORFGBG: "7;0", HOME: "/Users/aeadedoyin", SHLVL: "2", npm_package_type: "module", XDG_CONFIG_HOME: "/Users/aeadedoyin/.config", LC_TERMINAL_VERSION: "3.4.20", HOMEBREW_PREFIX: "/opt/homebrew", ITERM_SESSION_ID: "w0t1p0:C859379A-3967-42CF-818A-921EABBE762E", FIG_SET_PARENT: "aa54a006-3f0e-49a0-98c8-4b0919cbefe3", XDG_CACHE_HOME: "/Users/aeadedoyin/.cache", LOGNAME: "aeadedoyin", LESS: "-R", npm_package_exports___require: "./dist/later-vue-timer.umd.cjs", npm_package_devDependencies_gh_pages: "^6.1.1", npm_lifecycle_script: "vue-tsc && vite build && vite build --config vite.config.site.ts", LC_CTYPE: "UTF-8", NVM_BIN: "/Users/aeadedoyin/.nvm/versions/node/v20.10.0/bin", BUN_INSTALL: "/Users/aeadedoyin/.bun", npm_config_user_agent: "pnpm/8.14.0 npm/? node/v20.10.0 darwin arm64", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:", npm_package_devDependencies__types_node: "^20.11.8", LC_TERMINAL: "iTerm2", NITRO_HTTP_PORT: "4000", npm_package_files_0: "dist", npm_package_devDependencies_process: "^0.11.10", COLORTERM: "truecolor", FIG_TERM: "2.17.0", npm_package_devDependencies_vue_tsc: "^1.8.25", npm_node_execpath: "/Users/aeadedoyin/.nvm/versions/node/v20.10.0/bin/node", NODE_ENV: "production" };
const lt = [];
function ao(e, ...t) {
  Ne();
  const n = lt.length ? lt[lt.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = po();
  if (s)
    Te(
      s,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Er(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...ho(r)), console.warn(...o);
  }
  Le();
}
function po() {
  let e = lt[lt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function ho(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ..._o(n));
  }), t;
}
function _o({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Er(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...go(e.props), o] : [r + o];
}
function go(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Qs(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Qs(e, t, n) {
  return k(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : se(t) ? (t = Qs(e, L(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = L(t), n ? t : [`${e}=`, t]);
}
function Te(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Kt(o, t, n);
  }
  return r;
}
function _e(e, t, n, s) {
  if (O(e)) {
    const o = Te(e, t, n, s);
    return o && Os(o) && o.catch((i) => {
      Kt(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(_e(e[o], t, n, s));
  return r;
}
function Kt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Te(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  mo(e, n, r, s);
}
function mo(e, t, n, s = !0) {
  console.error(e);
}
let dt = !1, gn = !1;
const Q = [];
let xe = 0;
const Xe = [];
let Oe = null, je = 0;
const er = /* @__PURE__ */ Promise.resolve();
let Un = null;
function bo(e) {
  const t = Un || er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vo(e) {
  let t = xe + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Q[s], o = pt(r);
    o < e || o === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function Hn(e) {
  (!Q.length || !Q.includes(
    e,
    dt && e.allowRecurse ? xe + 1 : xe
  )) && (e.id == null ? Q.push(e) : Q.splice(vo(e.id), 0, e), tr());
}
function tr() {
  !dt && !gn && (gn = !0, Un = er.then(sr));
}
function yo(e) {
  const t = Q.indexOf(e);
  t > xe && Q.splice(t, 1);
}
function xo(e) {
  R(e) ? Xe.push(...e) : (!Oe || !Oe.includes(
    e,
    e.allowRecurse ? je + 1 : je
  )) && Xe.push(e), tr();
}
function rs(e, t, n = dt ? xe + 1 : 0) {
  for (; n < Q.length; n++) {
    const s = Q[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      Q.splice(n, 1), n--, s();
    }
  }
}
function nr(e) {
  if (Xe.length) {
    const t = [...new Set(Xe)].sort(
      (n, s) => pt(n) - pt(s)
    );
    if (Xe.length = 0, Oe) {
      Oe.push(...t);
      return;
    }
    for (Oe = t, je = 0; je < Oe.length; je++)
      Oe[je]();
    Oe = null, je = 0;
  }
}
const pt = (e) => e.id == null ? 1 / 0 : e.id, Eo = (e, t) => {
  const n = pt(e) - pt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function sr(e) {
  gn = !1, dt = !0, Q.sort(Eo);
  const t = ue;
  try {
    for (xe = 0; xe < Q.length; xe++) {
      const n = Q[xe];
      n && n.active !== !1 && (it.NODE_ENV !== "production" && t(n), Te(n, null, 14));
    }
  } finally {
    xe = 0, Q.length = 0, nr(), dt = !1, Un = null, (Q.length || Xe.length) && sr();
  }
}
function wo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || K;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: y, trim: E } = s[p] || K;
    E && (r = n.map((T) => k(T) ? T.trim() : T)), y && (r = n.map(Pr));
  }
  let c, u = s[c = en(t)] || // also try camelCase event handler (#2249)
  s[c = en(Ye(t))];
  !u && o && (u = s[c = en(tt(t))]), u && _e(
    u,
    e,
    6,
    r
  );
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, _e(
      a,
      e,
      6,
      r
    );
  }
}
function rr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!O(e)) {
    const u = (a) => {
      const p = rr(a, t, !0);
      p && (c = !0, Z(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (J(e) && s.set(e, null), null) : (R(o) ? o.forEach((u) => i[u] = null) : Z(i, o), J(e) && s.set(e, i), i);
}
function Gt(e, t) {
  return !e || !Ht(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, tt(t)) || N(e, t));
}
let Ee = null, or = null;
function Lt(e) {
  const t = Ee;
  return Ee = e, or = e && e.type.__scopeId || null, t;
}
function Co(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && hs(-1);
    const o = Lt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Lt(o), s._d && hs(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function sn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: a,
    render: p,
    renderCache: y,
    data: E,
    setupState: T,
    ctx: V,
    inheritAttrs: F
  } = e;
  let H, W;
  const fe = Lt(e);
  try {
    if (n.shapeFlag & 4) {
      const z = r || s, j = it.NODE_ENV !== "production" && T.__isScriptSetup ? new Proxy(z, {
        get(P, le, ee) {
          return ao(
            `Property '${String(
              le
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, le, ee);
        }
      }) : z;
      H = ye(
        p.call(
          j,
          z,
          y,
          o,
          T,
          E,
          V
        )
      ), W = u;
    } else {
      const z = t;
      it.NODE_ENV, H = ye(
        z.length > 1 ? z(
          o,
          it.NODE_ENV !== "production" ? {
            get attrs() {
              return u;
            },
            slots: c,
            emit: a
          } : { attrs: u, slots: c, emit: a }
        ) : z(
          o,
          null
          /* we know it doesn't need it */
        )
      ), W = t.props ? u : To(u);
    }
  } catch (z) {
    ut.length = 0, Kt(z, e, 1), H = Ke(ht);
  }
  let D = H;
  if (W && F !== !1) {
    const z = Object.keys(W), { shapeFlag: j } = D;
    z.length && j & 7 && (i && z.some(Tn) && (W = Io(
      W,
      i
    )), D = Qe(D, W));
  }
  return n.dirs && (D = Qe(D), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && (D.transition = n.transition), H = D, Lt(fe), H;
}
const To = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ht(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Io = (e, t) => {
  const n = {};
  for (const s in e)
    (!Tn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function So(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: c, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? os(s, i, a) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let y = 0; y < p.length; y++) {
        const E = p[y];
        if (i[E] !== s[E] && !Gt(a, E))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? os(s, i, a) : !0 : !!i;
  return !1;
}
function os(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Gt(n, o))
      return !0;
  }
  return !1;
}
function Oo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ro = Symbol.for("v-ndc"), Ao = (e) => e.__isSuspense;
function Po(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : xo(e);
}
const Mo = Symbol.for("v-scx"), No = () => At(Mo), It = {};
function rn(e, t, n) {
  return ir(e, t, n);
}
function ir(e, t, {
  immediate: n,
  deep: s,
  flush: r,
  once: o,
  onTrack: i,
  onTrigger: c
} = K) {
  if (t && o) {
    const P = t;
    t = (...le) => {
      P(...le), j();
    };
  }
  const u = Y, a = (P) => s === !0 ? P : (
    // for deep: false, only traverse root-level properties
    ze(P, s === !1 ? 1 : void 0)
  );
  let p, y = !1, E = !1;
  if (se(e) ? (p = () => e.value, y = Nt(e)) : ke(e) ? (p = () => a(e), y = !0) : R(e) ? (E = !0, y = e.some((P) => ke(P) || Nt(P)), p = () => e.map((P) => {
    if (se(P))
      return P.value;
    if (ke(P))
      return a(P);
    if (O(P))
      return Te(P, u, 2);
  })) : O(e) ? t ? p = () => Te(e, u, 2) : p = () => (T && T(), _e(
    e,
    u,
    3,
    [V]
  )) : p = ue, t && s) {
    const P = p;
    p = () => ze(P());
  }
  let T, V = (P) => {
    T = D.onStop = () => {
      Te(P, u, 4), T = D.onStop = void 0;
    };
  }, F;
  if (qt)
    if (V = ue, t ? n && _e(t, u, 3, [
      p(),
      E ? [] : void 0,
      V
    ]) : p(), r === "sync") {
      const P = No();
      F = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return ue;
  let H = E ? new Array(e.length).fill(It) : It;
  const W = () => {
    if (!(!D.active || !D.dirty))
      if (t) {
        const P = D.run();
        (s || y || (E ? P.some((le, ee) => Me(le, H[ee])) : Me(P, H))) && (T && T(), _e(t, u, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          H === It ? void 0 : E && H[0] === It ? [] : H,
          V
        ]), H = P);
      } else
        D.run();
  };
  W.allowRecurse = !!t;
  let fe;
  r === "sync" ? fe = W : r === "post" ? fe = () => oe(W, u && u.suspense) : (W.pre = !0, u && (W.id = u.uid), fe = () => Hn(W));
  const D = new An(p, ue, fe), z = jr(), j = () => {
    D.stop(), z && In(z.effects, D);
  };
  return t ? n ? W() : H = D.run() : r === "post" ? oe(
    D.run.bind(D),
    u && u.suspense
  ) : D.run(), F && F.push(j), j;
}
function Lo(e, t, n) {
  const s = this.proxy, r = k(e) ? e.includes(".") ? lr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  O(t) ? o = t : (o = t.handler, n = t);
  const i = gt(this), c = ir(r, o.bind(s), n);
  return i(), c;
}
function lr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function ze(e, t, n = 0, s) {
  if (!J(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (s = s || /* @__PURE__ */ new Set(), s.has(e))
    return e;
  if (s.add(e), se(e))
    ze(e.value, t, n, s);
  else if (R(e))
    for (let r = 0; r < e.length; r++)
      ze(e[r], t, n, s);
  else if (Ss(e) || qe(e))
    e.forEach((r) => {
      ze(r, t, n, s);
    });
  else if (As(e))
    for (const r in e)
      ze(e[r], t, n, s);
  return e;
}
function He(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[s];
    u && (Ne(), _e(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Le());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fo(e, t) {
  return O(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Z({ name: e.name }, t, { setup: e })
  ) : e;
}
const Rt = (e) => !!e.type.__asyncLoader, cr = (e) => e.type.__isKeepAlive;
function Do(e, t) {
  ur(e, "a", t);
}
function Uo(e, t) {
  ur(e, "da", t);
}
function ur(e, t, n = Y) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Wt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      cr(r.parent.vnode) && Ho(s, t, n, r), r = r.parent;
  }
}
function Ho(e, t, n, s) {
  const r = Wt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  $n(() => {
    In(s[t], r);
  }, n);
}
function Wt(e, t, n = Y, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ne();
      const c = gt(n), u = _e(t, n, e, i);
      return c(), Le(), u;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Ie = (e) => (t, n = Y) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!qt || e === "sp") && Wt(e, (...s) => t(...s), n)
), $o = Ie("bm"), jo = Ie("m"), Vo = Ie("bu"), Bo = Ie("u"), Ko = Ie("bum"), $n = Ie("um"), Go = Ie("sp"), Wo = Ie(
  "rtg"
), zo = Ie(
  "rtc"
);
function Jo(e, t = Y) {
  Wt("ec", e, t);
}
const mn = (e) => e ? yr(e) ? Kn(e) || e.proxy : mn(e.parent) : null, ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mn(e.parent),
    $root: (e) => mn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => jn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Hn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = bo.bind(e.proxy)),
    $watch: (e) => Lo.bind(e)
  })
), on = (e, t) => e !== K && !e.__isScriptSetup && N(e, t), qo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const T = i[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (on(s, t))
          return i[t] = 1, s[t];
        if (r !== K && N(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && N(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== K && N(n, t))
          return i[t] = 4, n[t];
        bn && (i[t] = 0);
      }
    }
    const p = ct[t];
    let y, E;
    if (p)
      return t === "$attrs" && ie(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== K && N(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      E = u.config.globalProperties, N(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return on(r, t) ? (r[t] = n, !0) : s !== K && N(s, t) ? (s[t] = n, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== K && N(e, i) || on(t, i) || (c = o[0]) && N(c, i) || N(s, i) || N(ct, i) || N(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function is(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let bn = !0;
function ko(e) {
  const t = jn(e), n = e.proxy, s = e.ctx;
  bn = !1, t.beforeCreate && ls(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: p,
    beforeMount: y,
    mounted: E,
    beforeUpdate: T,
    updated: V,
    activated: F,
    deactivated: H,
    beforeDestroy: W,
    beforeUnmount: fe,
    destroyed: D,
    unmounted: z,
    render: j,
    renderTracked: P,
    renderTriggered: le,
    errorCaptured: ee,
    serverPrefetch: kt,
    // public API
    expose: Fe,
    inheritAttrs: nt,
    // assets
    components: mt,
    directives: bt,
    filters: Xt
  } = t;
  if (a && Xo(a, s, null), i)
    for (const G in i) {
      const $ = i[G];
      O($) && (s[G] = $.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    J(G) && (e.data = Bt(G));
  }
  if (bn = !0, o)
    for (const G in o) {
      const $ = o[G], De = O($) ? $.bind(n, n) : O($.get) ? $.get.bind(n, n) : ue, vt = !O($) && O($.set) ? $.set.bind(n) : ue, Ue = wr({
        get: De,
        set: vt
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: (ge) => Ue.value = ge
      });
    }
  if (c)
    for (const G in c)
      fr(c[G], s, n, G);
  if (u) {
    const G = O(u) ? u.call(n) : u;
    Reflect.ownKeys(G).forEach(($) => {
      ni($, G[$]);
    });
  }
  p && ls(p, e, "c");
  function te(G, $) {
    R($) ? $.forEach((De) => G(De.bind(n))) : $ && G($.bind(n));
  }
  if (te($o, y), te(jo, E), te(Vo, T), te(Bo, V), te(Do, F), te(Uo, H), te(Jo, ee), te(zo, P), te(Wo, le), te(Ko, fe), te($n, z), te(Go, kt), R(Fe))
    if (Fe.length) {
      const G = e.exposed || (e.exposed = {});
      Fe.forEach(($) => {
        Object.defineProperty(G, $, {
          get: () => n[$],
          set: (De) => n[$] = De
        });
      });
    } else
      e.exposed || (e.exposed = {});
  j && e.render === ue && (e.render = j), nt != null && (e.inheritAttrs = nt), mt && (e.components = mt), bt && (e.directives = bt);
}
function Xo(e, t, n = ue) {
  R(e) && (e = vn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    J(r) ? "default" in r ? o = At(
      r.from || s,
      r.default,
      !0
    ) : o = At(r.from || s) : o = At(r), se(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function ls(e, t, n) {
  _e(
    R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fr(e, t, n, s) {
  const r = s.includes(".") ? lr(n, s) : () => n[s];
  if (k(e)) {
    const o = t[e];
    O(o) && rn(r, o);
  } else if (O(e))
    rn(r, e.bind(n));
  else if (J(e))
    if (R(e))
      e.forEach((o) => fr(o, t, n, s));
    else {
      const o = O(e.handler) ? e.handler.bind(n) : t[e.handler];
      O(o) && rn(r, o, e);
    }
}
function jn(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(
    (a) => Ft(u, a, i, !0)
  ), Ft(u, t, i)), J(t) && o.set(t, u), u;
}
function Ft(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Ft(e, o, n, !0), r && r.forEach(
    (i) => Ft(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = Yo[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Yo = {
  data: cs,
  props: us,
  emits: us,
  // objects
  methods: ot,
  computed: ot,
  // lifecycle
  beforeCreate: ne,
  created: ne,
  beforeMount: ne,
  mounted: ne,
  beforeUpdate: ne,
  updated: ne,
  beforeDestroy: ne,
  beforeUnmount: ne,
  destroyed: ne,
  unmounted: ne,
  activated: ne,
  deactivated: ne,
  errorCaptured: ne,
  serverPrefetch: ne,
  // assets
  components: ot,
  directives: ot,
  // watch
  watch: Qo,
  // provide / inject
  provide: cs,
  inject: Zo
};
function cs(e, t) {
  return t ? e ? function() {
    return Z(
      O(e) ? e.call(this, this) : e,
      O(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zo(e, t) {
  return ot(vn(e), vn(t));
}
function vn(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function us(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(
    /* @__PURE__ */ Object.create(null),
    is(e),
    is(t ?? {})
  ) : t;
}
function Qo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ne(e[s], t[s]);
  return n;
}
function ar() {
  return {
    app: null,
    config: {
      isNativeTag: Ir,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ei = 0;
function ti(e, t) {
  return function(s, r = null) {
    O(s) || (s = Z({}, s)), r != null && !J(r) && (r = null);
    const o = ar(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = o.app = {
      _uid: ei++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Mi,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return i.has(a) || (a && O(a.install) ? (i.add(a), a.install(u, ...p)) : O(a) && (i.add(a), a(u, ...p))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, p) {
        return p ? (o.components[a] = p, u) : o.components[a];
      },
      directive(a, p) {
        return p ? (o.directives[a] = p, u) : o.directives[a];
      },
      mount(a, p, y) {
        if (!c) {
          const E = Ke(s, r);
          return E.appContext = o, y === !0 ? y = "svg" : y === !1 && (y = void 0), p && t ? t(E, a) : e(E, a, y), c = !0, u._container = a, a.__vue_app__ = u, Kn(E.component) || E.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, p) {
        return o.provides[a] = p, u;
      },
      runWithContext(a) {
        Dt = u;
        try {
          return a();
        } finally {
          Dt = null;
        }
      }
    };
    return u;
  };
}
let Dt = null;
function ni(e, t) {
  if (Y) {
    let n = Y.provides;
    const s = Y.parent && Y.parent.provides;
    s === n && (n = Y.provides = Object.create(s)), n[e] = t;
  }
}
function At(e, t, n = !1) {
  const s = Y || Ee;
  if (s || Dt) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Dt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && O(t) ? t.call(s && s.proxy) : t;
  }
}
function si(e, t, n, s = !1) {
  const r = {}, o = {};
  Mt(o, Jt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), dr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : io(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ri(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = L(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let y = 0; y < p.length; y++) {
        let E = p[y];
        if (Gt(e.emitsOptions, E))
          continue;
        const T = t[E];
        if (u)
          if (N(o, E))
            T !== o[E] && (o[E] = T, a = !0);
          else {
            const V = Ye(E);
            r[V] = yn(
              u,
              c,
              V,
              T,
              e,
              !1
            );
          }
        else
          T !== o[E] && (o[E] = T, a = !0);
      }
    }
  } else {
    dr(e, t, r, o) && (a = !0);
    let p;
    for (const y in c)
      (!t || // for camelCase
      !N(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = tt(y)) === y || !N(t, p))) && (u ? n && // for camelCase
      (n[y] !== void 0 || // for kebab-case
      n[p] !== void 0) && (r[y] = yn(
        u,
        c,
        y,
        void 0,
        e,
        !0
      )) : delete r[y]);
    if (o !== c)
      for (const y in o)
        (!t || !N(t, y)) && (delete o[y], a = !0);
  }
  a && Ce(e, "set", "$attrs");
}
function dr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (St(u))
        continue;
      const a = t[u];
      let p;
      r && N(r, p = Ye(u)) ? !o || !o.includes(p) ? n[p] = a : (c || (c = {}))[p] = a : Gt(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = L(n), a = c || K;
    for (let p = 0; p < o.length; p++) {
      const y = o[p];
      n[y] = yn(
        r,
        u,
        y,
        a[y],
        e,
        !N(a, y)
      );
    }
  }
  return i;
}
function yn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = N(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && O(u)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const p = gt(r);
          s = a[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        s = u;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === tt(n)) && (s = !0));
  }
  return s;
}
function pr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!O(e)) {
    const p = (y) => {
      u = !0;
      const [E, T] = pr(y, t, !0);
      Z(i, E), T && c.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!o && !u)
    return J(e) && s.set(e, Je), Je;
  if (R(o))
    for (let p = 0; p < o.length; p++) {
      const y = Ye(o[p]);
      fs(y) && (i[y] = K);
    }
  else if (o)
    for (const p in o) {
      const y = Ye(p);
      if (fs(y)) {
        const E = o[p], T = i[y] = R(E) || O(E) ? { type: E } : Z({}, E);
        if (T) {
          const V = ps(Boolean, T.type), F = ps(String, T.type);
          T[
            0
            /* shouldCast */
          ] = V > -1, T[
            1
            /* shouldCastTrue */
          ] = F < 0 || V < F, (V > -1 || N(T, "default")) && c.push(y);
        }
      }
    }
  const a = [i, c];
  return J(e) && s.set(e, a), a;
}
function fs(e) {
  return e[0] !== "$";
}
function as(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ds(e, t) {
  return as(e) === as(t);
}
function ps(e, t) {
  return R(t) ? t.findIndex((n) => ds(n, e)) : O(t) && ds(t, e) ? 0 : -1;
}
const hr = (e) => e[0] === "_" || e === "$stable", Vn = (e) => R(e) ? e.map(ye) : [ye(e)], oi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Co((...r) => (it.NODE_ENV !== "production" && Y && (!n || (n.root, Y.root)), Vn(t(...r))), n);
  return s._c = !1, s;
}, _r = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (hr(r))
      continue;
    const o = e[r];
    if (O(o))
      t[r] = oi(r, o, s);
    else if (o != null) {
      const i = Vn(o);
      t[r] = () => i;
    }
  }
}, gr = (e, t) => {
  const n = Vn(t);
  e.slots.default = () => n;
}, ii = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = L(t), Mt(t, "_", n)) : _r(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && gr(e, t);
  Mt(e.slots, Jt, 1);
}, li = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = K;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : (Z(r, t), !n && c === 1 && delete r._) : (o = !t.$stable, _r(t, r)), i = t;
  } else
    t && (gr(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !hr(c) && i[c] == null && delete r[c];
};
function xn(e, t, n, s, r = !1) {
  if (R(e)) {
    e.forEach(
      (E, T) => xn(
        E,
        t && (R(t) ? t[T] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Rt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Kn(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: c, r: u } = e, a = t && t.r, p = c.refs === K ? c.refs = {} : c.refs, y = c.setupState;
  if (a != null && a !== u && (k(a) ? (p[a] = null, N(y, a) && (y[a] = null)) : se(a) && (a.value = null)), O(u))
    Te(u, c, 12, [i, p]);
  else {
    const E = k(u), T = se(u), V = e.f;
    if (E || T) {
      const F = () => {
        if (V) {
          const H = E ? N(y, u) ? y[u] : p[u] : u.value;
          r ? R(H) && In(H, o) : R(H) ? H.includes(o) || H.push(o) : E ? (p[u] = [o], N(y, u) && (y[u] = p[u])) : (u.value = [o], e.k && (p[e.k] = u.value));
        } else
          E ? (p[u] = i, N(y, u) && (y[u] = i)) : T && (u.value = i, e.k && (p[e.k] = i));
      };
      r || V ? F() : (F.id = -1, oe(F, n));
    }
  }
}
const oe = Po;
function ci(e) {
  return ui(e);
}
function ui(e, t) {
  const n = Ms();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: p,
    parentNode: y,
    nextSibling: E,
    setScopeId: T = ue,
    insertStaticContent: V
  } = e, F = (l, f, d, h = null, _ = null, b = null, x = void 0, m = null, v = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !rt(l, f) && (h = yt(l), ge(l, _, b, !0), l = null), f.patchFlag === -2 && (v = !1, f.dynamicChildren = null);
    const { type: g, ref: w, shapeFlag: I } = f;
    switch (g) {
      case zt:
        H(l, f, d, h);
        break;
      case ht:
        W(l, f, d, h);
        break;
      case cn:
        l == null && fe(f, d, h, x);
        break;
      case ve:
        mt(
          l,
          f,
          d,
          h,
          _,
          b,
          x,
          m,
          v
        );
        break;
      default:
        I & 1 ? j(
          l,
          f,
          d,
          h,
          _,
          b,
          x,
          m,
          v
        ) : I & 6 ? bt(
          l,
          f,
          d,
          h,
          _,
          b,
          x,
          m,
          v
        ) : (I & 64 || I & 128) && g.process(
          l,
          f,
          d,
          h,
          _,
          b,
          x,
          m,
          v,
          Ge
        );
    }
    w != null && _ && xn(w, l && l.ref, b, f || l, !f);
  }, H = (l, f, d, h) => {
    if (l == null)
      s(
        f.el = c(f.children),
        d,
        h
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && a(_, f.children);
    }
  }, W = (l, f, d, h) => {
    l == null ? s(
      f.el = u(f.children || ""),
      d,
      h
    ) : f.el = l.el;
  }, fe = (l, f, d, h) => {
    [l.el, l.anchor] = V(
      l.children,
      f,
      d,
      h,
      l.el,
      l.anchor
    );
  }, D = ({ el: l, anchor: f }, d, h) => {
    let _;
    for (; l && l !== f; )
      _ = E(l), s(l, d, h), l = _;
    s(f, d, h);
  }, z = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = E(l), r(l), l = d;
    r(f);
  }, j = (l, f, d, h, _, b, x, m, v) => {
    f.type === "svg" ? x = "svg" : f.type === "math" && (x = "mathml"), l == null ? P(
      f,
      d,
      h,
      _,
      b,
      x,
      m,
      v
    ) : kt(
      l,
      f,
      _,
      b,
      x,
      m,
      v
    );
  }, P = (l, f, d, h, _, b, x, m) => {
    let v, g;
    const { props: w, shapeFlag: I, transition: C, dirs: S } = l;
    if (v = l.el = i(
      l.type,
      b,
      w && w.is,
      w
    ), I & 8 ? p(v, l.children) : I & 16 && ee(
      l.children,
      v,
      null,
      h,
      _,
      ln(l, b),
      x,
      m
    ), S && He(l, null, h, "created"), le(v, l, l.scopeId, x, h), w) {
      for (const U in w)
        U !== "value" && !St(U) && o(
          v,
          U,
          null,
          w[U],
          b,
          l.children,
          h,
          _,
          we
        );
      "value" in w && o(v, "value", null, w.value, b), (g = w.onVnodeBeforeMount) && be(g, h, l);
    }
    S && He(l, null, h, "beforeMount");
    const A = fi(_, C);
    A && C.beforeEnter(v), s(v, f, d), ((g = w && w.onVnodeMounted) || A || S) && oe(() => {
      g && be(g, h, l), A && C.enter(v), S && He(l, null, h, "mounted");
    }, _);
  }, le = (l, f, d, h, _) => {
    if (d && T(l, d), h)
      for (let b = 0; b < h.length; b++)
        T(l, h[b]);
    if (_) {
      let b = _.subTree;
      if (f === b) {
        const x = _.vnode;
        le(
          l,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, ee = (l, f, d, h, _, b, x, m, v = 0) => {
    for (let g = v; g < l.length; g++) {
      const w = l[g] = m ? Re(l[g]) : ye(l[g]);
      F(
        null,
        w,
        f,
        d,
        h,
        _,
        b,
        x,
        m
      );
    }
  }, kt = (l, f, d, h, _, b, x) => {
    const m = f.el = l.el;
    let { patchFlag: v, dynamicChildren: g, dirs: w } = f;
    v |= l.patchFlag & 16;
    const I = l.props || K, C = f.props || K;
    let S;
    if (d && $e(d, !1), (S = C.onVnodeBeforeUpdate) && be(S, d, f, l), w && He(f, l, d, "beforeUpdate"), d && $e(d, !0), g ? Fe(
      l.dynamicChildren,
      g,
      m,
      d,
      h,
      ln(f, _),
      b
    ) : x || $(
      l,
      f,
      m,
      null,
      d,
      h,
      ln(f, _),
      b,
      !1
    ), v > 0) {
      if (v & 16)
        nt(
          m,
          f,
          I,
          C,
          d,
          h,
          _
        );
      else if (v & 2 && I.class !== C.class && o(m, "class", null, C.class, _), v & 4 && o(m, "style", I.style, C.style, _), v & 8) {
        const A = f.dynamicProps;
        for (let U = 0; U < A.length; U++) {
          const B = A[U], X = I[B], ae = C[B];
          (ae !== X || B === "value") && o(
            m,
            B,
            X,
            ae,
            _,
            l.children,
            d,
            h,
            we
          );
        }
      }
      v & 1 && l.children !== f.children && p(m, f.children);
    } else
      !x && g == null && nt(
        m,
        f,
        I,
        C,
        d,
        h,
        _
      );
    ((S = C.onVnodeUpdated) || w) && oe(() => {
      S && be(S, d, f, l), w && He(f, l, d, "updated");
    }, h);
  }, Fe = (l, f, d, h, _, b, x) => {
    for (let m = 0; m < f.length; m++) {
      const v = l[m], g = f[m], w = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rt(v, g) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? y(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      F(
        v,
        g,
        w,
        null,
        h,
        _,
        b,
        x,
        !0
      );
    }
  }, nt = (l, f, d, h, _, b, x) => {
    if (d !== h) {
      if (d !== K)
        for (const m in d)
          !St(m) && !(m in h) && o(
            l,
            m,
            d[m],
            null,
            x,
            f.children,
            _,
            b,
            we
          );
      for (const m in h) {
        if (St(m))
          continue;
        const v = h[m], g = d[m];
        v !== g && m !== "value" && o(
          l,
          m,
          g,
          v,
          x,
          f.children,
          _,
          b,
          we
        );
      }
      "value" in h && o(l, "value", d.value, h.value, x);
    }
  }, mt = (l, f, d, h, _, b, x, m, v) => {
    const g = f.el = l ? l.el : c(""), w = f.anchor = l ? l.anchor : c("");
    let { patchFlag: I, dynamicChildren: C, slotScopeIds: S } = f;
    S && (m = m ? m.concat(S) : S), l == null ? (s(g, d, h), s(w, d, h), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      w,
      _,
      b,
      x,
      m,
      v
    )) : I > 0 && I & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Fe(
      l.dynamicChildren,
      C,
      d,
      _,
      b,
      x,
      m
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && mr(
      l,
      f,
      !0
      /* shallow */
    )) : $(
      l,
      f,
      d,
      w,
      _,
      b,
      x,
      m,
      v
    );
  }, bt = (l, f, d, h, _, b, x, m, v) => {
    f.slotScopeIds = m, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      d,
      h,
      x,
      v
    ) : Xt(
      f,
      d,
      h,
      _,
      b,
      x,
      v
    ) : Gn(l, f, v);
  }, Xt = (l, f, d, h, _, b, x) => {
    const m = l.component = wi(
      l,
      h,
      _
    );
    if (cr(l) && (m.ctx.renderer = Ge), Ci(m), m.asyncDep) {
      if (_ && _.registerDep(m, te), !l.el) {
        const v = m.subTree = Ke(ht);
        W(null, v, f, d);
      }
    } else
      te(
        m,
        l,
        f,
        d,
        _,
        b,
        x
      );
  }, Gn = (l, f, d) => {
    const h = f.component = l.component;
    if (So(l, f, d))
      if (h.asyncDep && !h.asyncResolved) {
        G(h, f, d);
        return;
      } else
        h.next = f, yo(h.update), h.effect.dirty = !0, h.update();
    else
      f.el = l.el, h.vnode = f;
  }, te = (l, f, d, h, _, b, x) => {
    const m = () => {
      if (l.isMounted) {
        let { next: w, bu: I, u: C, parent: S, vnode: A } = l;
        {
          const We = br(l);
          if (We) {
            w && (w.el = A.el, G(l, w, x)), We.asyncDep.then(() => {
              l.isUnmounted || m();
            });
            return;
          }
        }
        let U = w, B;
        $e(l, !1), w ? (w.el = A.el, G(l, w, x)) : w = A, I && tn(I), (B = w.props && w.props.onVnodeBeforeUpdate) && be(B, S, w, A), $e(l, !0);
        const X = sn(l), ae = l.subTree;
        l.subTree = X, F(
          ae,
          X,
          // parent may have changed if it's in a teleport
          y(ae.el),
          // anchor may have changed if it's in a fragment
          yt(ae),
          l,
          _,
          b
        ), w.el = X.el, U === null && Oo(l, X.el), C && oe(C, _), (B = w.props && w.props.onVnodeUpdated) && oe(
          () => be(B, S, w, A),
          _
        );
      } else {
        let w;
        const { el: I, props: C } = f, { bm: S, m: A, parent: U } = l, B = Rt(f);
        if ($e(l, !1), S && tn(S), !B && (w = C && C.onVnodeBeforeMount) && be(w, U, f), $e(l, !0), I && Qt) {
          const X = () => {
            l.subTree = sn(l), Qt(
              I,
              l.subTree,
              l,
              _,
              null
            );
          };
          B ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && X()
          ) : X();
        } else {
          const X = l.subTree = sn(l);
          F(
            null,
            X,
            d,
            h,
            l,
            _,
            b
          ), f.el = X.el;
        }
        if (A && oe(A, _), !B && (w = C && C.onVnodeMounted)) {
          const X = f;
          oe(
            () => be(w, U, X),
            _
          );
        }
        (f.shapeFlag & 256 || U && Rt(U.vnode) && U.vnode.shapeFlag & 256) && l.a && oe(l.a, _), l.isMounted = !0, f = d = h = null;
      }
    }, v = l.effect = new An(
      m,
      ue,
      () => Hn(g),
      l.scope
      // track it in component's effect scope
    ), g = l.update = () => {
      v.dirty && v.run();
    };
    g.id = l.uid, $e(l, !0), g();
  }, G = (l, f, d) => {
    f.component = l;
    const h = l.vnode.props;
    l.vnode = f, l.next = null, ri(l, f.props, h, d), li(l, f.children, d), Ne(), rs(l), Le();
  }, $ = (l, f, d, h, _, b, x, m, v = !1) => {
    const g = l && l.children, w = l ? l.shapeFlag : 0, I = f.children, { patchFlag: C, shapeFlag: S } = f;
    if (C > 0) {
      if (C & 128) {
        vt(
          g,
          I,
          d,
          h,
          _,
          b,
          x,
          m,
          v
        );
        return;
      } else if (C & 256) {
        De(
          g,
          I,
          d,
          h,
          _,
          b,
          x,
          m,
          v
        );
        return;
      }
    }
    S & 8 ? (w & 16 && we(g, _, b), I !== g && p(d, I)) : w & 16 ? S & 16 ? vt(
      g,
      I,
      d,
      h,
      _,
      b,
      x,
      m,
      v
    ) : we(g, _, b, !0) : (w & 8 && p(d, ""), S & 16 && ee(
      I,
      d,
      h,
      _,
      b,
      x,
      m,
      v
    ));
  }, De = (l, f, d, h, _, b, x, m, v) => {
    l = l || Je, f = f || Je;
    const g = l.length, w = f.length, I = Math.min(g, w);
    let C;
    for (C = 0; C < I; C++) {
      const S = f[C] = v ? Re(f[C]) : ye(f[C]);
      F(
        l[C],
        S,
        d,
        null,
        _,
        b,
        x,
        m,
        v
      );
    }
    g > w ? we(
      l,
      _,
      b,
      !0,
      !1,
      I
    ) : ee(
      f,
      d,
      h,
      _,
      b,
      x,
      m,
      v,
      I
    );
  }, vt = (l, f, d, h, _, b, x, m, v) => {
    let g = 0;
    const w = f.length;
    let I = l.length - 1, C = w - 1;
    for (; g <= I && g <= C; ) {
      const S = l[g], A = f[g] = v ? Re(f[g]) : ye(f[g]);
      if (rt(S, A))
        F(
          S,
          A,
          d,
          null,
          _,
          b,
          x,
          m,
          v
        );
      else
        break;
      g++;
    }
    for (; g <= I && g <= C; ) {
      const S = l[I], A = f[C] = v ? Re(f[C]) : ye(f[C]);
      if (rt(S, A))
        F(
          S,
          A,
          d,
          null,
          _,
          b,
          x,
          m,
          v
        );
      else
        break;
      I--, C--;
    }
    if (g > I) {
      if (g <= C) {
        const S = C + 1, A = S < w ? f[S].el : h;
        for (; g <= C; )
          F(
            null,
            f[g] = v ? Re(f[g]) : ye(f[g]),
            d,
            A,
            _,
            b,
            x,
            m,
            v
          ), g++;
      }
    } else if (g > C)
      for (; g <= I; )
        ge(l[g], _, b, !0), g++;
    else {
      const S = g, A = g, U = /* @__PURE__ */ new Map();
      for (g = A; g <= C; g++) {
        const ce = f[g] = v ? Re(f[g]) : ye(f[g]);
        ce.key != null && U.set(ce.key, g);
      }
      let B, X = 0;
      const ae = C - A + 1;
      let We = !1, Jn = 0;
      const st = new Array(ae);
      for (g = 0; g < ae; g++)
        st[g] = 0;
      for (g = S; g <= I; g++) {
        const ce = l[g];
        if (X >= ae) {
          ge(ce, _, b, !0);
          continue;
        }
        let me;
        if (ce.key != null)
          me = U.get(ce.key);
        else
          for (B = A; B <= C; B++)
            if (st[B - A] === 0 && rt(ce, f[B])) {
              me = B;
              break;
            }
        me === void 0 ? ge(ce, _, b, !0) : (st[me - A] = g + 1, me >= Jn ? Jn = me : We = !0, F(
          ce,
          f[me],
          d,
          null,
          _,
          b,
          x,
          m,
          v
        ), X++);
      }
      const qn = We ? ai(st) : Je;
      for (B = qn.length - 1, g = ae - 1; g >= 0; g--) {
        const ce = A + g, me = f[ce], kn = ce + 1 < w ? f[ce + 1].el : h;
        st[g] === 0 ? F(
          null,
          me,
          d,
          kn,
          _,
          b,
          x,
          m,
          v
        ) : We && (B < 0 || g !== qn[B] ? Ue(me, d, kn, 2) : B--);
      }
    }
  }, Ue = (l, f, d, h, _ = null) => {
    const { el: b, type: x, transition: m, children: v, shapeFlag: g } = l;
    if (g & 6) {
      Ue(l.component.subTree, f, d, h);
      return;
    }
    if (g & 128) {
      l.suspense.move(f, d, h);
      return;
    }
    if (g & 64) {
      x.move(l, f, d, Ge);
      return;
    }
    if (x === ve) {
      s(b, f, d);
      for (let I = 0; I < v.length; I++)
        Ue(v[I], f, d, h);
      s(l.anchor, f, d);
      return;
    }
    if (x === cn) {
      D(l, f, d);
      return;
    }
    if (h !== 2 && g & 1 && m)
      if (h === 0)
        m.beforeEnter(b), s(b, f, d), oe(() => m.enter(b), _);
      else {
        const { leave: I, delayLeave: C, afterLeave: S } = m, A = () => s(b, f, d), U = () => {
          I(b, () => {
            A(), S && S();
          });
        };
        C ? C(b, A, U) : U();
      }
    else
      s(b, f, d);
  }, ge = (l, f, d, h = !1, _ = !1) => {
    const {
      type: b,
      props: x,
      ref: m,
      children: v,
      dynamicChildren: g,
      shapeFlag: w,
      patchFlag: I,
      dirs: C
    } = l;
    if (m != null && xn(m, null, d, l, !0), w & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const S = w & 1 && C, A = !Rt(l);
    let U;
    if (A && (U = x && x.onVnodeBeforeUnmount) && be(U, f, l), w & 6)
      Tr(l.component, d, h);
    else {
      if (w & 128) {
        l.suspense.unmount(d, h);
        return;
      }
      S && He(l, null, f, "beforeUnmount"), w & 64 ? l.type.remove(
        l,
        f,
        d,
        _,
        Ge,
        h
      ) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ve || I > 0 && I & 64) ? we(
        g,
        f,
        d,
        !1,
        !0
      ) : (b === ve && I & 384 || !_ && w & 16) && we(v, f, d), h && Wn(l);
    }
    (A && (U = x && x.onVnodeUnmounted) || S) && oe(() => {
      U && be(U, f, l), S && He(l, null, f, "unmounted");
    }, d);
  }, Wn = (l) => {
    const { type: f, el: d, anchor: h, transition: _ } = l;
    if (f === ve) {
      Cr(d, h);
      return;
    }
    if (f === cn) {
      z(l);
      return;
    }
    const b = () => {
      r(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: m } = _, v = () => x(d, b);
      m ? m(l.el, b, v) : v();
    } else
      b();
  }, Cr = (l, f) => {
    let d;
    for (; l !== f; )
      d = E(l), r(l), l = d;
    r(f);
  }, Tr = (l, f, d) => {
    const { bum: h, scope: _, update: b, subTree: x, um: m } = l;
    h && tn(h), _.stop(), b && (b.active = !1, ge(x, l, f, d)), m && oe(m, f), oe(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, we = (l, f, d, h = !1, _ = !1, b = 0) => {
    for (let x = b; x < l.length; x++)
      ge(l[x], f, d, h, _);
  }, yt = (l) => l.shapeFlag & 6 ? yt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : E(l.anchor || l.el);
  let Yt = !1;
  const zn = (l, f, d) => {
    l == null ? f._vnode && ge(f._vnode, null, null, !0) : F(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      d
    ), Yt || (Yt = !0, rs(), nr(), Yt = !1), f._vnode = l;
  }, Ge = {
    p: F,
    um: ge,
    m: Ue,
    r: Wn,
    mt: Xt,
    mc: ee,
    pc: $,
    pbc: Fe,
    n: yt,
    o: e
  };
  let Zt, Qt;
  return t && ([Zt, Qt] = t(
    Ge
  )), {
    render: zn,
    hydrate: Zt,
    createApp: ti(zn, Zt)
  };
}
function ln({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $e({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function fi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (R(s) && R(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = Re(r[o]), c.el = i.el), n || mr(i, c)), c.type === zt && (c.el = i.el);
    }
}
function ai(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        c = o + i >> 1, e[n[c]] < a ? o = c + 1 : i = c;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function br(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : br(t);
}
const di = (e) => e.__isTeleport, ve = Symbol.for("v-fgt"), zt = Symbol.for("v-txt"), ht = Symbol.for("v-cmt"), cn = Symbol.for("v-stc"), ut = [];
let he = null;
function pi(e = !1) {
  ut.push(he = e ? null : []);
}
function hi() {
  ut.pop(), he = ut[ut.length - 1] || null;
}
let _t = 1;
function hs(e) {
  _t += e;
}
function _i(e) {
  return e.dynamicChildren = _t > 0 ? he || Je : null, hi(), _t > 0 && he && he.push(e), e;
}
function gi(e, t, n, s, r, o) {
  return _i(
    M(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function mi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jt = "__vInternal", vr = ({ key: e }) => e ?? null, Pt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? k(e) || se(e) || O(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function M(e, t = null, n = null, s = 0, r = null, o = e === ve ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vr(t),
    ref: t && Pt(t),
    scopeId: or,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee
  };
  return c ? (Bn(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= k(n) ? 8 : 16), _t > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && he.push(u), u;
}
const Ke = bi;
function bi(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Ro) && (e = ht), mi(e)) {
    const c = Qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bn(c, n), _t > 0 && !o && he && (c.shapeFlag & 6 ? he[he.indexOf(e)] = c : he.push(c)), c.patchFlag |= -2, c;
  }
  if (Pi(e) && (e = e.__vccOpts), t) {
    t = vi(t);
    let { class: c, style: u } = t;
    c && !k(c) && (t.class = Rn(c)), J(u) && (qs(u) && !R(u) && (u = Z({}, u)), t.style = On(u));
  }
  const i = k(e) ? 1 : Ao(e) ? 128 : di(e) ? 64 : J(e) ? 4 : O(e) ? 2 : 0;
  return M(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function vi(e) {
  return e ? qs(e) || Jt in e ? Z({}, e) : e : null;
}
function Qe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, c = t ? yi(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && vr(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? R(r) ? r.concat(Pt(t)) : [r, Pt(t)] : Pt(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qe(e.ssContent),
    ssFallback: e.ssFallback && Qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ft(e = " ", t = 0) {
  return Ke(zt, null, e, t);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? Ke(ht) : R(e) ? Ke(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Re(e) : Ke(zt, null, String(e));
}
function Re(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qe(e);
}
function Bn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Bn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Jt in t) ? t._ctx = Ee : r === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    O(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ft(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function yi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Rn([t.class, s.class]));
      else if (r === "style")
        t.style = On([t.style, s.style]);
      else if (Ht(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(R(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function be(e, t, n, s = null) {
  _e(e, t, 7, [
    n,
    s
  ]);
}
const xi = ar();
let Ei = 0;
function wi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || xi, o = {
    uid: Ei++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Hr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: pr(s, r),
    emitsOptions: rr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = wo.bind(null, o), e.ce && e.ce(o), o;
}
let Y = null, Ut, En;
{
  const e = Ms(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Ut = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Y = n
  ), En = t(
    "__VUE_SSR_SETTERS__",
    (n) => qt = n
  );
}
const gt = (e) => {
  const t = Y;
  return Ut(e), e.scope.on(), () => {
    e.scope.off(), Ut(t);
  };
}, _s = () => {
  Y && Y.scope.off(), Ut(null);
};
function yr(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function Ci(e, t = !1) {
  t && En(t);
  const { props: n, children: s } = e.vnode, r = yr(e);
  si(e, n, r, t), ii(e, s);
  const o = r ? Ti(e, t) : void 0;
  return t && En(!1), o;
}
function Ti(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ks(new Proxy(e.ctx, qo));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Si(e) : null, o = gt(e);
    Ne();
    const i = Te(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (Le(), o(), Os(i)) {
      if (i.then(_s, _s), t)
        return i.then((c) => {
          gs(e, c, t);
        }).catch((c) => {
          Kt(c, e, 0);
        });
      e.asyncDep = i;
    } else
      gs(e, i, t);
  } else
    xr(e, t);
}
function gs(e, t, n) {
  O(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) && (e.setupState = Zs(t)), xr(e, n);
}
let ms;
function xr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ms && !s.render) {
      const r = s.template || jn(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, a = Z(
          Z(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          u
        );
        s.render = ms(r, a);
      }
    }
    e.render = s.render || ue;
  }
  {
    const r = gt(e);
    Ne();
    try {
      ko(e);
    } finally {
      Le(), r();
    }
  }
}
function Ii(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return ie(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Si(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Ii(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Zs(ks(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ct)
          return ct[n](e);
      },
      has(t, n) {
        return n in t || n in ct;
      }
    }));
}
const Oi = /(?:^|[-_])(\w)/g, Ri = (e) => e.replace(Oi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ai(e, t = !0) {
  return O(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Er(e, t, n = !1) {
  let s = Ai(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Ri(s) : n ? "App" : "Anonymous";
}
function Pi(e) {
  return O(e) && "__vccOpts" in e;
}
const wr = (e, t) => lo(e, t, qt), Mi = "3.4.15", Ni = "http://www.w3.org/2000/svg", Li = "http://www.w3.org/1998/Math/MathML", Ae = typeof document < "u" ? document : null, bs = Ae && /* @__PURE__ */ Ae.createElement("template"), Fi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Ae.createElementNS(Ni, e) : t === "mathml" ? Ae.createElementNS(Li, e) : Ae.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Ae.createTextNode(e),
  createComment: (e) => Ae.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ae.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      bs.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
      const c = bs.content;
      if (s === "svg" || s === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Di = Symbol("_vtc");
function Ui(e, t, n) {
  const s = e[Di];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Hi = Symbol("_vod"), $i = Symbol("");
function ji(e, t, n) {
  const s = e.style, r = s.display, o = k(n);
  if (n && !o) {
    if (t && !k(t))
      for (const i in t)
        n[i] == null && wn(s, i, "");
    for (const i in n)
      wn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[$i];
      i && (n += ";" + i), s.cssText = n;
    }
  } else
    t && e.removeAttribute("style");
  Hi in e && (s.display = r);
}
const vs = /\s*!important$/;
function wn(e, t, n) {
  if (R(n))
    n.forEach((s) => wn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Vi(e, t);
    vs.test(n) ? e.setProperty(
      tt(s),
      n.replace(vs, ""),
      "important"
    ) : e[s] = n;
  }
}
const ys = ["Webkit", "Moz", "ms"], un = {};
function Vi(e, t) {
  const n = un[t];
  if (n)
    return n;
  let s = Ye(t);
  if (s !== "filter" && s in e)
    return un[t] = s;
  s = Ps(s);
  for (let r = 0; r < ys.length; r++) {
    const o = ys[r] + s;
    if (o in e)
      return un[t] = o;
  }
  return t;
}
const xs = "http://www.w3.org/1999/xlink";
function Bi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(xs, t.slice(6, t.length)) : e.setAttributeNS(xs, t, n);
  else {
    const o = Ur(t);
    n == null || o && !Ns(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Ki(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = n;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value, p = n ?? "";
    a !== p && (e.value = p), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Ns(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(t);
}
function Gi(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Wi(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Es = Symbol("_vei");
function zi(e, t, n, s, r = null) {
  const o = e[Es] || (e[Es] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [c, u] = Ji(t);
    if (s) {
      const a = o[t] = Xi(s, r);
      Gi(e, c, a, u);
    } else
      i && (Wi(e, c, i, u), o[t] = void 0);
  }
}
const ws = /(?:Once|Passive|Capture)$/;
function Ji(e) {
  let t;
  if (ws.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ws); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let fn = 0;
const qi = /* @__PURE__ */ Promise.resolve(), ki = () => fn || (qi.then(() => fn = 0), fn = Date.now());
function Xi(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    _e(
      Yi(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ki(), n;
}
function Yi(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const Cs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zi = (e, t, n, s, r, o, i, c, u) => {
  const a = r === "svg";
  t === "class" ? Ui(e, s, a) : t === "style" ? ji(e, n, s) : Ht(t) ? Tn(t) || zi(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qi(e, t, s, a)) ? Ki(
    e,
    t,
    s,
    o,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Bi(e, t, s, a));
};
function Qi(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cs(t) && O(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Cs(t) && k(n) ? !1 : t in e;
}
const el = /* @__PURE__ */ Z({ patchProp: Zi }, Fi);
let Ts;
function tl() {
  return Ts || (Ts = ci(el));
}
const nl = (...e) => {
  const t = tl().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = rl(s);
    if (!r)
      return;
    const o = t._component;
    !O(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, sl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function sl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rl(e) {
  return k(e) ? document.querySelector(e) : e;
}
const Is = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  "": 1
}, an = (e, t) => {
  const n = de(6e4), s = de(e.interval || 1), r = de(e.immediate), o = de(Date.now()), i = de(/* @__PURE__ */ new Date()), c = de(0), u = de(!1), a = de(0), p = wr(() => {
    const j = n.value - a.value;
    return j <= 0 ? 0 : j;
  }), y = de(new Date(Date.now())), E = de(
    "Pending"
    /* PENDING */
  ), T = de(!1), V = {
    warn(...j) {
      e.log && console.warn(...j);
    }
  };
  setInterval(() => {
    y.value = new Date(Date.now());
  }, 1), $n(() => {
    clearInterval(c.value);
  });
  const F = () => {
    if (T.value)
      return V.warn("Timer is already running"), !1;
    if (u.value)
      return V.warn("Timer already ended"), !1;
    o.value = Date.now() - a.value, c.value = setInterval(() => {
      a.value >= n.value || n.value === 0 ? (clearInterval(c.value), !u.value && t && t(), E.value = "Ended", u.value = !0, T.value = !1) : a.value = Date.now() - o.value;
    }, s.value), E.value = "Resumed", T.value = !0;
  }, H = () => {
    F(), E.value = "Started";
  }, W = (j, P = null) => {
    if (r.value = P || r.value, typeof j == "string") {
      const le = parseInt(j), ee = j.trim().replace(/[\d.]/g, "");
      if (ee in Is)
        n.value = le * Is[ee];
      else
        throw new Error(`Invalid time unit: '${ee}'`);
    }
    if (j instanceof Date && (n.value = j.getTime() - Date.now()), n.value < 0 && j instanceof Date)
      return V.warn(`TTL: (${j.toLocaleString()}) cannot be in the past`), !1;
    if (i.value = new Date(Date.now() + (isFinite(n.value) ? n.value : 0)), r.value) {
      if (E.value = "Started", T.value || u.value)
        return z(), !1;
      H();
    }
  };
  W(e.ttl);
  const fe = () => {
    clearInterval(c.value), E.value = "Paused", T.value = !1;
  }, D = () => {
    !u.value && t && t(), a.value = 0, E.value = "Stopped", T.value = !1, clearInterval(c.value);
  }, z = () => {
    T.value = !1, u.value = !1, a.value = 0, clearInterval(c.value), F(), E.value = "Restarted";
  };
  return Bt({
    /** Timer id based on setInterval API. Cancel/Clear timer with clearInterval(timerId) anywhere */
    timerId: c,
    /** — Current system DateTime */
    live: y,
    /** — DateTime instance when the timer ends */
    due: i,
    /** — The current status of the timer. */
    status: E,
    /** — The total ttl in milliseconds */
    duration: n,
    /** — The time elapsed since the timer started/resumed. */
    used: a,
    /** — The time remaining until the timer expires. */
    left: p,
    /** — Indicates whether the timer is running */
    isRunning: T,
    /** — Indicates whether the timer has expired. */
    hasExpired: u,
    // Actions
    pause: fe,
    resume: F,
    start: H,
    restart: z,
    stop: D,
    setTtl: W
  });
}, ol = /* @__PURE__ */ M("h3", null, [
  /* @__PURE__ */ M("strong", null, "Hello UseTimer"),
  /* @__PURE__ */ ft(" : "),
  /* @__PURE__ */ M("span", null, [
    /* @__PURE__ */ M("a", { href: "http://github.com/aeadedoyin/vue-timer" }, "Doc Here")
  ])
], -1), il = { style: { margin: "unset" } }, ll = /* @__PURE__ */ M("b", null, "Immediate Timer", -1), cl = /* @__PURE__ */ M("hr", { style: { "max-width": "400px", margin: "30px 0" } }, null, -1), ul = /* @__PURE__ */ M("b", null, "Self Invoked Timer", -1), fl = /* @__PURE__ */ M("br", null, null, -1), al = { style: { display: "flex", "flex-wrap": "wrap", gap: "10px" } }, dl = /* @__PURE__ */ M("hr", { style: { "max-width": "400px", margin: "30px 0" } }, null, -1), pl = /* @__PURE__ */ M("b", null, "Pick A DateTime", -1), hl = /* @__PURE__ */ M("br", null, null, -1), _l = { style: { display: "flex", "flex-wrap": "wrap", gap: "10px" } }, gl = /* @__PURE__ */ Fo({
  __name: "App",
  setup(e) {
    const t = () => {
      const i = (/* @__PURE__ */ new Date()).getTime(), c = 1 / 6 * 60 * 1e3, u = 1 * 60 * 1e3, a = i + Math.floor(Math.random() * (u - c + 1) + c);
      return new Date(a);
    }, n = [
      t(),
      t(),
      t(),
      t(),
      t(),
      t()
    ], s = an({ immediate: !0, ttl: n[5] }), r = an({ ttl: "20000", log: !0 }), o = an({ immediate: !0, log: !0 });
    return (i, c) => (pi(), gi(ve, null, [
      ol,
      M("div", il, [
        ll,
        ft(" - " + re(q(s).used) + " - Due: " + re(q(s).due.toLocaleString()) + " ", 1),
        M("code", null, [
          M("pre", null, re(q(s)), 1)
        ])
      ]),
      cl,
      M("div", null, [
        ul,
        ft(" - " + re(q(r).used) + " - Due: " + re(q(r).due.toLocaleString()) + " ", 1),
        M("code", null, [
          M("pre", null, re(q(r)), 1)
        ]),
        fl,
        M("div", al, [
          M("button", {
            onClick: c[0] || (c[0] = (u) => q(r).start())
          }, "Start"),
          M("button", {
            onClick: c[1] || (c[1] = (u) => q(r).pause())
          }, "Pause"),
          M("button", {
            onClick: c[2] || (c[2] = (u) => q(r).stop())
          }, "Stop"),
          M("button", {
            onClick: c[3] || (c[3] = (u) => q(r).resume())
          }, "Resume"),
          M("button", {
            onClick: c[4] || (c[4] = (u) => q(r).restart())
          }, "Restart")
        ])
      ]),
      dl,
      M("div", null, [
        pl,
        ft(" - " + re(q(o).used) + " - Due: " + re(q(o).due.toLocaleString()) + " ", 1),
        M("code", null, [
          M("pre", null, re(q(o)), 1)
        ]),
        hl,
        M("div", _l, [
          M("button", {
            onClick: c[5] || (c[5] = (u) => q(o).setTtl(n[0]))
          }, re(n[0].toLocaleString()), 1),
          M("button", {
            onClick: c[6] || (c[6] = (u) => q(o).setTtl(n[1]))
          }, re(n[1].toLocaleString()), 1),
          M("button", {
            onClick: c[7] || (c[7] = (u) => q(o).setTtl(n[2]))
          }, re(n[2].toLocaleString()), 1),
          M("button", {
            onClick: c[8] || (c[8] = (u) => q(o).setTtl(n[3]))
          }, re(n[3].toLocaleString()), 1),
          M("button", {
            onClick: c[9] || (c[9] = (u) => q(o).setTtl(n[4]))
          }, re(n[4].toLocaleString()), 1)
        ])
      ])
    ], 64));
  }
});
nl(gl).mount("#app");
