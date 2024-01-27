(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
    o(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function o(r) {
    if (r.ep)
      return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Me(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, Er = () => !1, Rt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), on = (e) => e.startsWith("onUpdate:"), J = Object.assign, io = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vs = Object.prototype.hasOwnProperty, M = (e, t) => Vs.call(e, t), C = Array.isArray, tt = (e) => pn(e) === "[object Map]", Nr = (e) => pn(e) === "[object Set]", S = (e) => typeof e == "function", Y = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", lo = (e) => (K(e) || S(e)) && S(e.then) && S(e.catch), br = Object.prototype.toString, pn = (e) => br.call(e), co = (e) => pn(e).slice(8, -1), yr = (e) => pn(e) === "[object Object]", uo = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = /* @__PURE__ */ Me(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cs = /* @__PURE__ */ Me(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ss = /-(\w)/g, Et = hn((e) => e.replace(Ss, (t, n) => n ? n.toUpperCase() : "")), Ts = /\B([A-Z])/g, Ge = hn(
  (e) => e.replace(Ts, "-$1").toLowerCase()
), mn = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), et = hn((e) => e ? `on${mn(e)}` : ""), qe = (e, t) => !Object.is(e, t), Ot = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, rn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, $s = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let jo;
const fo = () => jo || (jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ao(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Y(o) ? Ms(o) : ao(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Y(e) || K(e))
    return e;
}
const Is = /;(?![^(]*\))/g, Ps = /:([^]+)/, Rs = /\/\*[^]*?\*\//g;
function Ms(e) {
  const t = {};
  return e.replace(Rs, "").split(Is).forEach((n) => {
    if (n) {
      const o = n.split(Ps);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function po(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = po(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const As = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Fs = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", js = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ls = /* @__PURE__ */ Me(As), Hs = /* @__PURE__ */ Me(Fs), Us = /* @__PURE__ */ Me(js), Bs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ks = /* @__PURE__ */ Me(Bs);
function Or(e) {
  return !!e || e === "";
}
const fe = (e) => Y(e) ? e : e == null ? "" : C(e) || K(e) && (e.toString === br || !S(e.toString)) ? JSON.stringify(e, wr, 2) : String(e), wr = (e, t) => t && t.__v_isRef ? wr(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[$n(o, s) + " =>"] = r, n),
    {}
  )
} : Nr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => $n(n))
} : Nt(t) ? $n(t) : K(t) && !C(t) && !yr(t) ? String(t) : t, $n = (e, t = "") => {
  var n;
  return Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Un(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let _e;
class ks {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = _e, !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = _e;
      try {
        return _e = this, t();
      } finally {
        _e = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Un("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    _e = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    _e = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ws(e, t = _e) {
  t && t.active && t.effects.push(e);
}
function Gs() {
  return _e;
}
let nt;
class ho {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ws(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Ye();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (qs(n.computed), this._dirtyLevel >= 2))
          break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Xe();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = We, n = nt;
    try {
      return We = !0, nt = this, this._runnings++, Lo(this), this.fn();
    } finally {
      Ho(this), this._runnings--, nt = n, We = t;
    }
  }
  stop() {
    var t;
    this.active && (Lo(this), Ho(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function qs(e) {
  return e.value;
}
function Lo(e) {
  e._trackId++, e._depsLength = 0;
}
function Ho(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Dr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Dr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let We = !0, Bn = 0;
const xr = [];
function Ye() {
  xr.push(We), We = !1;
}
function Xe() {
  const e = xr.pop();
  We = e === void 0 ? !0 : e;
}
function mo() {
  Bn++;
}
function go() {
  for (Bn--; !Bn && Kn.length; )
    Kn.shift()();
}
function Vr(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Dr(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, J({ effect: e }, n)));
  }
}
const Kn = [];
function Cr(e, t, n) {
  var o;
  mo();
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel;
      r._dirtyLevel = t, s === 0 && (r._shouldSchedule = !0, process.env.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, J({ effect: r }, n))), r.trigger());
    }
  Sr(e), go();
}
function Sr(e) {
  for (const t of e.keys())
    t.scheduler && t._shouldSchedule && (!t._runnings || t.allowRecurse) && e.get(t) === t._trackId && (t._shouldSchedule = !1, Kn.push(t.scheduler));
}
const Tr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, kn = /* @__PURE__ */ new WeakMap(), ot = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Wn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function ne(e, t, n) {
  if (We && nt) {
    let o = kn.get(e);
    o || kn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Tr(() => o.delete(n))), Vr(
      nt,
      r,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Ce(e, t, n, o, r, s) {
  const l = kn.get(e);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (n === "length" && C(e)) {
    const u = Number(o);
    l.forEach((a, h) => {
      (h === "length" || !Nt(h) && h >= u) && c.push(a);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        C(e) ? uo(n) && c.push(l.get("length")) : (c.push(l.get(ot)), tt(e) && c.push(l.get(Wn)));
        break;
      case "delete":
        C(e) || (c.push(l.get(ot)), tt(e) && c.push(l.get(Wn)));
        break;
      case "set":
        tt(e) && c.push(l.get(ot));
        break;
    }
  mo();
  for (const u of c)
    u && Cr(
      u,
      2,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: s
      } : void 0
    );
  go();
}
const zs = /* @__PURE__ */ Me("__proto__,__v_isRef,__isVue"), $r = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
), Uo = /* @__PURE__ */ Js();
function Js() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = $(this);
      for (let s = 0, l = this.length; s < l; s++)
        ne(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map($)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ye(), mo();
      const o = $(this)[t].apply(this, n);
      return go(), Xe(), o;
    };
  }), e;
}
function Ys(e) {
  const t = $(this);
  return ne(t, "has", e), t.hasOwnProperty(e);
}
class Ir {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? Lr : jr : s ? Fr : Ar).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = C(t);
    if (!r) {
      if (l && M(Uo, n))
        return Reflect.get(Uo, n, o);
      if (n === "hasOwnProperty")
        return Ys;
    }
    const c = Reflect.get(t, n, o);
    return (Nt(n) ? $r.has(n) : zs(n)) || (r || ne(t, "get", n), s) ? c : oe(c) ? l && uo(n) ? c : c.value : K(c) ? r ? Hr(c) : vn(c) : c;
  }
}
class Pr extends Ir {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._shallow) {
      const u = ze(s);
      if (!sn(o) && !ze(o) && (s = $(s), o = $(o)), !C(t) && oe(s) && !oe(o))
        return u ? !1 : (s.value = o, !0);
    }
    const l = C(t) && uo(n) ? Number(n) < t.length : M(t, n), c = Reflect.set(t, n, o, r);
    return t === $(r) && (l ? qe(o, s) && Ce(t, "set", n, o, s) : Ce(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = M(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Ce(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Nt(n) || !$r.has(n)) && ne(t, "has", n), o;
  }
  ownKeys(t) {
    return ne(
      t,
      "iterate",
      C(t) ? "length" : ot
    ), Reflect.ownKeys(t);
  }
}
class Rr extends Ir {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Un(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Un(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Xs = /* @__PURE__ */ new Pr(), Zs = /* @__PURE__ */ new Rr(), Qs = /* @__PURE__ */ new Pr(
  !0
), ei = /* @__PURE__ */ new Rr(!0), _o = (e) => e, gn = (e) => Reflect.getPrototypeOf(e);
function Ut(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = $(e), s = $(t);
  n || (qe(t, s) && ne(r, "get", t), ne(r, "get", s));
  const { has: l } = gn(r), c = o ? _o : n ? vo : Tt;
  if (l.call(r, t))
    return c(e.get(t));
  if (l.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Bt(e, t = !1) {
  const n = this.__v_raw, o = $(n), r = $(e);
  return t || (qe(e, r) && ne(o, "has", e), ne(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Kt(e, t = !1) {
  return e = e.__v_raw, !t && ne($(e), "iterate", ot), Reflect.get(e, "size", e);
}
function Bo(e) {
  e = $(e);
  const t = $(this);
  return gn(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function Ko(e, t) {
  t = $(t);
  const n = $(this), { has: o, get: r } = gn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Mr(n, o, e) : (e = $(e), s = o.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), s ? qe(t, l) && Ce(n, "set", e, t, l) : Ce(n, "add", e, t), this;
}
function ko(e) {
  const t = $(this), { has: n, get: o } = gn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Mr(t, n, e) : (e = $(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, l = t.delete(e);
  return r && Ce(t, "delete", e, void 0, s), l;
}
function Wo() {
  const e = $(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? tt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ce(e, "clear", void 0, void 0, n), o;
}
function kt(e, t) {
  return function(o, r) {
    const s = this, l = s.__v_raw, c = $(l), u = t ? _o : e ? vo : Tt;
    return !e && ne(c, "iterate", ot), l.forEach((a, h) => o.call(r, u(a), u(h), s));
  };
}
function Wt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = $(r), l = tt(s), c = e === "entries" || e === Symbol.iterator && l, u = e === "keys" && l, a = r[e](...o), h = n ? _o : t ? vo : Tt;
    return !t && ne(
      s,
      "iterate",
      u ? Wn : ot
    ), {
      // iterator protocol
      next() {
        const { value: d, done: _ } = a.next();
        return _ ? { value: d, done: _ } : {
          value: c ? [h(d[0]), h(d[1])] : h(d),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function He(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${mn(e)} operation ${n}failed: target is readonly.`,
        $(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ti() {
  const e = {
    get(s) {
      return Ut(this, s);
    },
    get size() {
      return Kt(this);
    },
    has: Bt,
    add: Bo,
    set: Ko,
    delete: ko,
    clear: Wo,
    forEach: kt(!1, !1)
  }, t = {
    get(s) {
      return Ut(this, s, !1, !0);
    },
    get size() {
      return Kt(this);
    },
    has: Bt,
    add: Bo,
    set: Ko,
    delete: ko,
    clear: Wo,
    forEach: kt(!1, !0)
  }, n = {
    get(s) {
      return Ut(this, s, !0);
    },
    get size() {
      return Kt(this, !0);
    },
    has(s) {
      return Bt.call(this, s, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: kt(!0, !1)
  }, o = {
    get(s) {
      return Ut(this, s, !0, !0);
    },
    get size() {
      return Kt(this, !0);
    },
    has(s) {
      return Bt.call(this, s, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: kt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Wt(
      s,
      !1,
      !1
    ), n[s] = Wt(
      s,
      !0,
      !1
    ), t[s] = Wt(
      s,
      !1,
      !0
    ), o[s] = Wt(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  ni,
  oi,
  ri,
  si
] = /* @__PURE__ */ ti();
function _n(e, t) {
  const n = t ? e ? si : ri : e ? oi : ni;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    M(n, r) && r in o ? n : o,
    r,
    s
  );
}
const ii = {
  get: /* @__PURE__ */ _n(!1, !1)
}, li = {
  get: /* @__PURE__ */ _n(!1, !0)
}, ci = {
  get: /* @__PURE__ */ _n(!0, !1)
}, ui = {
  get: /* @__PURE__ */ _n(!0, !0)
};
function Mr(e, t, n) {
  const o = $(n);
  if (o !== n && t.call(e, o)) {
    const r = co(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ar = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap();
function fi(e) {
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
function ai(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fi(co(e));
}
function vn(e) {
  return ze(e) ? e : En(
    e,
    !1,
    Xs,
    ii,
    Ar
  );
}
function di(e) {
  return En(
    e,
    !1,
    Qs,
    li,
    Fr
  );
}
function Hr(e) {
  return En(
    e,
    !0,
    Zs,
    ci,
    jr
  );
}
function mt(e) {
  return En(
    e,
    !0,
    ei,
    ui,
    Lr
  );
}
function En(e, t, n, o, r) {
  if (!K(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const l = ai(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return r.set(e, c), c;
}
function rt(e) {
  return ze(e) ? rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ze(e) {
  return !!(e && e.__v_isReadonly);
}
function sn(e) {
  return !!(e && e.__v_isShallow);
}
function Gn(e) {
  return rt(e) || ze(e);
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function Ur(e) {
  return rn(e, "__v_skip", !0), e;
}
const Tt = (e) => K(e) ? vn(e) : e, vo = (e) => K(e) ? Hr(e) : e;
class Br {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ho(
      () => t(this._value),
      () => zt(this, 1),
      () => this.dep && Sr(this.dep)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = $(this);
    return (!t._cacheable || t.effect.dirty) && qe(t._value, t._value = t.effect.run()) && zt(t, 2), Kr(t), t.effect._dirtyLevel >= 1 && zt(t, 1), t._value;
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
function pi(e, t, n = !1) {
  let o, r;
  const s = S(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Z) : (o = e.get, r = e.set);
  const l = new Br(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
function Kr(e) {
  We && nt && (e = $(e), Vr(
    nt,
    e.dep || (e.dep = Tr(
      () => e.dep = void 0,
      e instanceof Br ? e : void 0
    )),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function zt(e, t = 2, n) {
  e = $(e);
  const o = e.dep;
  o && Cr(
    o,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function ge(e) {
  return hi(e, !1);
}
function hi(e, t) {
  return oe(e) ? e : new mi(e, t);
}
class mi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : $(t), this._value = n ? t : Tt(t);
  }
  get value() {
    return Kr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || sn(t) || ze(t);
    t = n ? t : $(t), qe(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Tt(t), zt(this, 2, t));
  }
}
function X(e) {
  return oe(e) ? e.value : e;
}
const gi = {
  get: (e, t, n) => X(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return oe(r) && !oe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function kr(e) {
  return rt(e) ? e : new Proxy(e, gi);
}
/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const st = [];
function Jt(e) {
  st.push(e);
}
function Yt() {
  st.pop();
}
function y(e, ...t) {
  Ye();
  const n = st.length ? st[st.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = _i();
  if (o)
    Re(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${Dn(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...vi(r)), console.warn(...s);
  }
  Xe();
}
function _i() {
  let e = st[st.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function vi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ei(n));
  }), t;
}
function Ei({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Dn(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Ni(e.props), s] : [r + s];
}
function Ni(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Wr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Wr(e, t, n) {
  return Y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : oe(t) ? (t = Wr(e, $(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : S(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = $(t), n ? t : [`${e}=`, t]);
}
const Eo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Re(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Mt(s, t, n);
  }
  return r;
}
function ye(e, t, n, o) {
  if (S(e)) {
    const s = Re(e, t, n, o);
    return s && lo(s) && s.catch((l) => {
      Mt(l, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(ye(e[s], t, n, o));
  return r;
}
function Mt(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const l = t.proxy, c = process.env.NODE_ENV !== "production" ? Eo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, l, c) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Re(
        u,
        null,
        10,
        [e, l, c]
      );
      return;
    }
  }
  bi(e, n, r, o);
}
function bi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Eo[t];
    if (n && Jt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Yt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let $t = !1, qn = !1;
const re = [];
let Ve = 0;
const vt = [];
let Pe = null, Ue = 0;
const Gr = /* @__PURE__ */ Promise.resolve();
let No = null;
const yi = 100;
function Oi(e) {
  const t = No || Gr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wi(e) {
  let t = Ve + 1, n = re.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = re[o], s = It(r);
    s < e || s === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Nn(e) {
  (!re.length || !re.includes(
    e,
    $t && e.allowRecurse ? Ve + 1 : Ve
  )) && (e.id == null ? re.push(e) : re.splice(wi(e.id), 0, e), qr());
}
function qr() {
  !$t && !qn && (qn = !0, No = Gr.then(Yr));
}
function Di(e) {
  const t = re.indexOf(e);
  t > Ve && re.splice(t, 1);
}
function zr(e) {
  C(e) ? vt.push(...e) : (!Pe || !Pe.includes(
    e,
    e.allowRecurse ? Ue + 1 : Ue
  )) && vt.push(e), qr();
}
function Go(e, t, n = $t ? Ve + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < re.length; n++) {
    const o = re[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && bo(t, o))
        continue;
      re.splice(n, 1), n--, o();
    }
  }
}
function Jr(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort(
      (n, o) => It(n) - It(o)
    );
    if (vt.length = 0, Pe) {
      Pe.push(...t);
      return;
    }
    for (Pe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ue = 0; Ue < Pe.length; Ue++)
      process.env.NODE_ENV !== "production" && bo(e, Pe[Ue]) || Pe[Ue]();
    Pe = null, Ue = 0;
  }
}
const It = (e) => e.id == null ? 1 / 0 : e.id, xi = (e, t) => {
  const n = It(e) - It(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Yr(e) {
  qn = !1, $t = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), re.sort(xi);
  const t = process.env.NODE_ENV !== "production" ? (n) => bo(e, n) : Z;
  try {
    for (Ve = 0; Ve < re.length; Ve++) {
      const n = re[Ve];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Re(n, null, 14);
      }
    }
  } finally {
    Ve = 0, re.length = 0, Jr(e), $t = !1, No = null, (re.length || vt.length) && Yr(e);
  }
}
function bo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > yi) {
      const o = t.ownerInstance, r = o && ys(o.type);
      return Mt(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let it = !1;
const ht = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (fo().__VUE_HMR_RUNTIME__ = {
  createRecord: In(Xr),
  rerender: In(Si),
  reload: In(Ti)
});
const ft = /* @__PURE__ */ new Map();
function Vi(e) {
  const t = e.type.__hmrId;
  let n = ft.get(t);
  n || (Xr(t, e.type), n = ft.get(t)), n.instances.add(e);
}
function Ci(e) {
  ft.get(e.type.__hmrId).instances.delete(e);
}
function Xr(e, t) {
  return ft.has(e) ? !1 : (ft.set(e, {
    initialDef: Ct(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ct(e) {
  return Os(e) ? e.__vccOpts : e;
}
function Si(e, t) {
  const n = ft.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ct(o.type).render = t), o.renderCache = [], it = !0, o.effect.dirty = !0, o.update(), it = !1;
  }));
}
function Ti(e, t) {
  const n = ft.get(e);
  if (!n)
    return;
  t = Ct(t), qo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Ct(r.type);
    ht.has(s) || (s !== n.initialDef && qo(s, t), ht.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (ht.add(s), r.ceReload(t.styles), ht.delete(s)) : r.parent ? (r.parent.effect.dirty = !0, Nn(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  zr(() => {
    for (const r of o)
      ht.delete(
        Ct(r.type)
      );
  });
}
function qo(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function In(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ne, xt = [], zn = !1;
function At(e, ...t) {
  Ne ? Ne.emit(e, ...t) : zn || xt.push({ event: e, args: t });
}
function yo(e, t) {
  var n, o;
  Ne = e, Ne ? (Ne.enabled = !0, xt.forEach(({ event: r, args: s }) => Ne.emit(r, ...s)), xt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    yo(s, t);
  }), setTimeout(() => {
    Ne || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, zn = !0, xt = []);
  }, 3e3)) : (zn = !0, xt = []);
}
function $i(e, t) {
  At("app:init", e, t, {
    Fragment: ve,
    Text: Ft,
    Comment: Oe,
    Static: en
  });
}
function Ii(e) {
  At("app:unmount", e);
}
const Pi = /* @__PURE__ */ Oo(
  "component:added"
  /* COMPONENT_ADDED */
), Zr = /* @__PURE__ */ Oo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ri = /* @__PURE__ */ Oo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Mi = (e) => {
  Ne && typeof Ne.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ne.cleanupBuffer(e) && Ri(e);
};
function Oo(e) {
  return (t) => {
    At(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ai = /* @__PURE__ */ Qr(
  "perf:start"
  /* PERFORMANCE_START */
), Fi = /* @__PURE__ */ Qr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Qr(e) {
  return (t, n, o) => {
    At(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ji(e, t, n) {
  At(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Li(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [d]
    } = e;
    if (h)
      if (!(t in h))
        (!d || !(et(t) in d)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${et(t)}" prop.`
        );
      else {
        const _ = h[t];
        S(_) && (_(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), l = s && t.slice(7);
  if (l && l in o) {
    const h = `${l === "modelValue" ? "model" : l}Modifiers`, { number: d, trim: _ } = o[h] || B;
    _ && (r = n.map((D) => Y(D) ? D.trim() : D)), d && (r = n.map($s));
  }
  if (process.env.NODE_ENV !== "production" && ji(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[et(h)] && y(
      `Event "${h}" is emitted in component ${Dn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ge(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = et(t)] || // also try camelCase event handler (#2249)
  o[c = et(Et(t))];
  !u && s && (u = o[c = et(Ge(t))]), u && ye(
    u,
    e,
    6,
    r
  );
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ye(
      a,
      e,
      6,
      r
    );
  }
}
function es(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let l = {}, c = !1;
  if (!S(e)) {
    const u = (a) => {
      const h = es(a, t, !0);
      h && (c = !0, J(l, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !c ? (K(e) && o.set(e, null), null) : (C(s) ? s.forEach((u) => l[u] = null) : J(l, s), K(e) && o.set(e, l), l);
}
function bn(e, t) {
  return !e || !Rt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, Ge(t)) || M(e, t));
}
let pe = null, ts = null;
function ln(e) {
  const t = pe;
  return pe = e, ts = e && e.type.__scopeId || null, t;
}
function Hi(e, t = pe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && sr(-1);
    const s = ln(t);
    let l;
    try {
      l = e(...r);
    } finally {
      ln(s), o._d && sr(1);
    }
    return process.env.NODE_ENV !== "production" && Zr(t), l;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Jn = !1;
function cn() {
  Jn = !0;
}
function Pn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: s,
    propsOptions: [l],
    slots: c,
    attrs: u,
    emit: a,
    render: h,
    renderCache: d,
    data: _,
    setupState: D,
    ctx: I,
    inheritAttrs: R
  } = e;
  let k, z;
  const se = ln(e);
  process.env.NODE_ENV !== "production" && (Jn = !1);
  try {
    if (n.shapeFlag & 4) {
      const j = r || o, de = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(j, {
        get(P, Q, ie) {
          return y(
            `Property '${String(
              Q
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, Q, ie);
        }
      }) : j;
      k = Ee(
        h.call(
          de,
          j,
          d,
          s,
          D,
          _,
          I
        )
      ), z = u;
    } else {
      const j = t;
      process.env.NODE_ENV !== "production" && u === s && cn(), k = Ee(
        j.length > 1 ? j(
          s,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return cn(), u;
            },
            slots: c,
            emit: a
          } : { attrs: u, slots: c, emit: a }
        ) : j(
          s,
          null
          /* we know it doesn't need it */
        )
      ), z = t.props ? u : Ui(u);
    }
  } catch (j) {
    St.length = 0, Mt(j, e, 1), k = ct(Oe);
  }
  let W = k, G;
  if (process.env.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([W, G] = ns(k)), z && R !== !1) {
    const j = Object.keys(z), { shapeFlag: de } = W;
    if (j.length) {
      if (de & 7)
        l && j.some(on) && (z = Bi(
          z,
          l
        )), W = Je(W, z);
      else if (process.env.NODE_ENV !== "production" && !Jn && W.type !== Oe) {
        const P = Object.keys(u), Q = [], ie = [];
        for (let Se = 0, Fe = P.length; Se < Fe; Se++) {
          const he = P[Se];
          Rt(he) ? on(he) || Q.push(he[2].toLowerCase() + he.slice(3)) : ie.push(he);
        }
        ie.length && y(
          `Extraneous non-props attributes (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Q.length && y(
          `Extraneous non-emits event listeners (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !zo(W) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), W = Je(W), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !zo(W) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), W.transition = n.transition), process.env.NODE_ENV !== "production" && G ? G(W) : k = W, ln(se), k;
}
const ns = (e) => {
  const t = e.children, n = e.dynamicChildren, o = wo(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return ns(o);
  } else
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, l = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), l];
};
function wo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (To(r)) {
      if (r.type !== Oe || r.children === "v-if") {
        if (n)
          return;
        if (n = r, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return wo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ui = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Rt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Bi = (e, t) => {
  const n = {};
  for (const o in e)
    (!on(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, zo = (e) => e.shapeFlag & 7 || e.type === Oe;
function Ki(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: l, children: c, patchFlag: u } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && it || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Jo(o, l, a) : !!l;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const _ = h[d];
        if (l[_] !== o[_] && !bn(a, _))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === l ? !1 : o ? l ? Jo(o, l, a) : !0 : !!l;
  return !1;
}
function Jo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !bn(n, s))
      return !0;
  }
  return !1;
}
function ki({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Wi = Symbol.for("v-ndc"), Gi = (e) => e.__isSuspense;
function qi(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : zr(e);
}
const zi = Symbol.for("v-scx"), Ji = () => {
  {
    const e = Zt(zi);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Gt = {};
function Rn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !S(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), os(e, t, n);
}
function os(e, t, {
  immediate: n,
  deep: o,
  flush: r,
  once: s,
  onTrack: l,
  onTrigger: c
} = B) {
  if (t && s) {
    const P = t;
    t = (...Q) => {
      P(...Q), de();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && y(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (P) => {
    y(
      "Invalid watch source: ",
      P,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = te, h = (P) => o === !0 ? P : (
    // for deep: false, only traverse root-level properties
    gt(P, o === !1 ? 1 : void 0)
  );
  let d, _ = !1, D = !1;
  if (oe(e) ? (d = () => e.value, _ = sn(e)) : rt(e) ? (d = () => h(e), _ = !0) : C(e) ? (D = !0, _ = e.some((P) => rt(P) || sn(P)), d = () => e.map((P) => {
    if (oe(P))
      return P.value;
    if (rt(P))
      return h(P);
    if (S(P))
      return Re(P, a, 2);
    process.env.NODE_ENV !== "production" && u(P);
  })) : S(e) ? t ? d = () => Re(e, a, 2) : d = () => (I && I(), ye(
    e,
    a,
    3,
    [R]
  )) : (d = Z, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const P = d;
    d = () => gt(P());
  }
  let I, R = (P) => {
    I = G.onStop = () => {
      Re(P, a, 4), I = G.onStop = void 0;
    };
  }, k;
  if (wn)
    if (R = Z, t ? n && ye(t, a, 3, [
      d(),
      D ? [] : void 0,
      R
    ]) : d(), r === "sync") {
      const P = Ji();
      k = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return Z;
  let z = D ? new Array(e.length).fill(Gt) : Gt;
  const se = () => {
    if (!(!G.active || !G.dirty))
      if (t) {
        const P = G.run();
        (o || _ || (D ? P.some((Q, ie) => qe(Q, z[ie])) : qe(P, z))) && (I && I(), ye(t, a, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          z === Gt ? void 0 : D && z[0] === Gt ? [] : z,
          R
        ]), z = P);
      } else
        G.run();
  };
  se.allowRecurse = !!t;
  let W;
  r === "sync" ? W = se : r === "post" ? W = () => ae(se, a && a.suspense) : (se.pre = !0, a && (se.id = a.uid), W = () => Nn(se));
  const G = new ho(d, Z, W), j = Gs(), de = () => {
    G.stop(), j && io(j.effects, G);
  };
  return process.env.NODE_ENV !== "production" && (G.onTrack = l, G.onTrigger = c), t ? n ? se() : z = G.run() : r === "post" ? ae(
    G.run.bind(G),
    a && a.suspense
  ) : G.run(), k && k.push(de), de;
}
function Yi(e, t, n) {
  const o = this.proxy, r = Y(e) ? e.includes(".") ? rs(o, e) : () => o[e] : e.bind(o, o);
  let s;
  S(t) ? s = t : (s = t.handler, n = t);
  const l = jt(this), c = os(r, s.bind(o), n);
  return l(), c;
}
function rs(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function gt(e, t, n = 0, o) {
  if (!K(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), oe(e))
    gt(e.value, t, n, o);
  else if (C(e))
    for (let r = 0; r < e.length; r++)
      gt(e[r], t, n, o);
  else if (Nr(e) || tt(e))
    e.forEach((r) => {
      gt(r, t, n, o);
    });
  else if (yr(e))
    for (const r in e)
      gt(e[r], t, n, o);
  return e;
}
function ss(e) {
  Cs(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Ze(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    s && (c.oldValue = s[l].value);
    let u = c.dir[o];
    u && (Ye(), ye(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Xe());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
  return S(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    J({ name: e.name }, t, { setup: e })
  ) : e;
}
const Xt = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Zi(e, t) {
  is(e, "a", t);
}
function Qi(e, t) {
  is(e, "da", t);
}
function is(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (yn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Do(r.parent.vnode) && el(o, t, n, r), r = r.parent;
  }
}
function el(e, t, n, o) {
  const r = yn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  xo(() => {
    io(o[t], r);
  }, n);
}
function yn(e, t, n = te, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Ye();
      const c = jt(n), u = ye(t, n, e, l);
      return c(), Xe(), u;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = et(Eo[e].replace(/ hook$/, ""));
    y(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ae = (e) => (t, n = te) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!wn || e === "sp") && yn(e, (...o) => t(...o), n)
), tl = Ae("bm"), nl = Ae("m"), ol = Ae("bu"), rl = Ae("u"), sl = Ae("bum"), xo = Ae("um"), il = Ae("sp"), ll = Ae(
  "rtg"
), cl = Ae(
  "rtc"
);
function ul(e, t = te) {
  yn("ec", e, t);
}
const Yn = (e) => e ? Ns(e) ? Io(e) || e.proxy : Yn(e.parent) : null, lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? mt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? mt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? mt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? mt(e.refs) : e.refs,
    $parent: (e) => Yn(e.parent),
    $root: (e) => Yn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Co(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Nn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Oi.bind(e.proxy)),
    $watch: (e) => Yi.bind(e)
  })
), Vo = (e) => e === "_" || e === "$", Mn = (e, t) => e !== B && !e.__isScriptSetup && M(e, t), ls = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: l, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const D = l[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Mn(o, t))
          return l[t] = 1, o[t];
        if (r !== B && M(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && M(a, t)
        )
          return l[t] = 3, s[t];
        if (n !== B && M(n, t))
          return l[t] = 4, n[t];
        Xn && (l[t] = 0);
      }
    }
    const h = lt[t];
    let d, _;
    if (h)
      return t === "$attrs" ? (ne(e, "get", t), process.env.NODE_ENV !== "production" && cn()) : process.env.NODE_ENV !== "production" && t === "$slots" && ne(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== B && M(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      _ = u.config.globalProperties, M(_, t)
    )
      return _[t];
    process.env.NODE_ENV !== "production" && pe && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== B && Vo(t[0]) && M(r, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === pe && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Mn(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && M(r, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && M(o, t) ? (o[t] = n, !0) : M(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, l) {
    let c;
    return !!n[l] || e !== B && M(e, l) || Mn(t, l) || (c = s[0]) && M(c, l) || M(o, l) || M(lt, l) || M(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ls.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function fl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(lt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => lt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function al(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Z
    });
  });
}
function dl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys($(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Vo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Z
      });
    }
  });
}
function Yo(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function pl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Xn = !0;
function hl(e) {
  const t = Co(e), n = e.proxy, o = e.ctx;
  Xn = !1, t.beforeCreate && Xo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: l,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: d,
    mounted: _,
    beforeUpdate: D,
    updated: I,
    activated: R,
    deactivated: k,
    beforeDestroy: z,
    beforeUnmount: se,
    destroyed: W,
    unmounted: G,
    render: j,
    renderTracked: de,
    renderTriggered: P,
    errorCaptured: Q,
    serverPrefetch: ie,
    // public API
    expose: Se,
    inheritAttrs: Fe,
    // assets
    components: he,
    directives: Lt,
    filters: Po
  } = t, je = process.env.NODE_ENV !== "production" ? pl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const F in L)
        je("Props", F);
  }
  if (a && ml(a, o, je), l)
    for (const L in l) {
      const F = l[L];
      S(F) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = F.bind(n), process.env.NODE_ENV !== "production" && je("Methods", L)) : process.env.NODE_ENV !== "production" && y(
        `Method "${L}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !S(r) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && lo(L) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(L))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = vn(L), process.env.NODE_ENV !== "production")
      for (const F in L)
        je("Data", F), Vo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => L[F],
          set: Z
        });
  }
  if (Xn = !0, s)
    for (const L in s) {
      const F = s[L], we = S(F) ? F.bind(n, n) : S(F.get) ? F.get.bind(n, n) : Z;
      process.env.NODE_ENV !== "production" && we === Z && y(`Computed property "${L}" has no getter.`);
      const xn = !S(F) && S(F.set) ? F.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : Z, bt = ws({
        get: we,
        set: xn
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (at) => bt.value = at
      }), process.env.NODE_ENV !== "production" && je("Computed", L);
    }
  if (c)
    for (const L in c)
      cs(c[L], o, n, L);
  if (u) {
    const L = S(u) ? u.call(n) : u;
    Reflect.ownKeys(L).forEach((F) => {
      bl(F, L[F]);
    });
  }
  h && Xo(h, e, "c");
  function ue(L, F) {
    C(F) ? F.forEach((we) => L(we.bind(n))) : F && L(F.bind(n));
  }
  if (ue(tl, d), ue(nl, _), ue(ol, D), ue(rl, I), ue(Zi, R), ue(Qi, k), ue(ul, Q), ue(cl, de), ue(ll, P), ue(sl, se), ue(xo, G), ue(il, ie), C(Se))
    if (Se.length) {
      const L = e.exposed || (e.exposed = {});
      Se.forEach((F) => {
        Object.defineProperty(L, F, {
          get: () => n[F],
          set: (we) => n[F] = we
        });
      });
    } else
      e.exposed || (e.exposed = {});
  j && e.render === Z && (e.render = j), Fe != null && (e.inheritAttrs = Fe), he && (e.components = he), Lt && (e.directives = Lt);
}
function ml(e, t, n = Z) {
  C(e) && (e = Zn(e));
  for (const o in e) {
    const r = e[o];
    let s;
    K(r) ? "default" in r ? s = Zt(
      r.from || o,
      r.default,
      !0
    ) : s = Zt(r.from || o) : s = Zt(r), oe(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (l) => s.value = l
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Xo(e, t, n) {
  ye(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function cs(e, t, n, o) {
  const r = o.includes(".") ? rs(n, o) : () => n[o];
  if (Y(e)) {
    const s = t[e];
    S(s) ? Rn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if (S(e))
    Rn(r, e.bind(n));
  else if (K(e))
    if (C(e))
      e.forEach((s) => cs(s, t, n, o));
    else {
      const s = S(e.handler) ? e.handler.bind(n) : t[e.handler];
      S(s) ? Rn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Co(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (a) => un(u, a, l, !0)
  ), un(u, t, l)), K(t) && s.set(t, u), u;
}
function un(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && un(e, s, n, !0), r && r.forEach(
    (l) => un(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = gl[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const gl = {
  data: Zo,
  props: Qo,
  emits: Qo,
  // objects
  methods: Vt,
  computed: Vt,
  // lifecycle
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  // assets
  components: Vt,
  directives: Vt,
  // watch
  watch: vl,
  // provide / inject
  provide: Zo,
  inject: _l
};
function Zo(e, t) {
  return t ? e ? function() {
    return J(
      S(e) ? e.call(this, this) : e,
      S(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _l(e, t) {
  return Vt(Zn(e), Zn(t));
}
function Zn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vt(e, t) {
  return e ? J(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qo(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : J(
    /* @__PURE__ */ Object.create(null),
    Yo(e),
    Yo(t ?? {})
  ) : t;
}
function vl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ce(e[o], t[o]);
  return n;
}
function us() {
  return {
    app: null,
    config: {
      isNativeTag: Er,
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
let El = 0;
function Nl(e, t) {
  return function(o, r = null) {
    S(o) || (o = J({}, o)), r != null && !K(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = us(), l = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = s.app = {
      _uid: El++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ur,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...h) {
        return l.has(a) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && S(a.install) ? (l.add(a), a.install(u, ...h)) : S(a) ? (l.add(a), a(u, ...h)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : s.mixins.push(a), u;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && oo(a, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[a] && y(`Component "${a}" has already been registered in target app.`), s.components[a] = h, u) : s.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && ss(a), h ? (process.env.NODE_ENV !== "production" && s.directives[a] && y(`Directive "${a}" has already been registered in target app.`), s.directives[a] = h, u) : s.directives[a];
      },
      mount(a, h, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = ct(o, r);
          return _.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(
              Je(_),
              a,
              d
            );
          }), h && t ? t(_, a) : e(_, a, d), c = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = _.component, $i(u, ur)), Io(_.component) || _.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, Ii(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in s.provides && y(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), s.provides[a] = h, u;
      },
      runWithContext(a) {
        fn = u;
        try {
          return a();
        } finally {
          fn = null;
        }
      }
    };
    return u;
  };
}
let fn = null;
function bl(e, t) {
  if (!te)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function Zt(e, t, n = !1) {
  const o = te || pe;
  if (o || fn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : fn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && S(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
function yl(e, t, n, o = !1) {
  const r = {}, s = {};
  rn(s, On, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), fs(e, t, r, s);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  process.env.NODE_ENV !== "production" && ds(t || {}, r, e), n ? e.props = o ? r : di(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Ol(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function wl(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: l }
  } = e, c = $(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Ol(e)) && (o || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let _ = h[d];
        if (bn(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (u)
          if (M(s, _))
            D !== s[_] && (s[_] = D, a = !0);
          else {
            const I = Et(_);
            r[I] = Qn(
              u,
              c,
              I,
              D,
              e,
              !1
            );
          }
        else
          D !== s[_] && (s[_] = D, a = !0);
      }
    }
  } else {
    fs(e, t, r, s) && (a = !0);
    let h;
    for (const d in c)
      (!t || // for camelCase
      !M(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Ge(d)) === d || !M(t, h))) && (u ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[d] = Qn(
        u,
        c,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !M(t, d)) && (delete s[d], a = !0);
  }
  a && Ce(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && ds(t || {}, r, e);
}
function fs(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let u in t) {
      if (qt(u))
        continue;
      const a = t[u];
      let h;
      r && M(r, h = Et(u)) ? !s || !s.includes(h) ? n[h] = a : (c || (c = {}))[h] = a : bn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, l = !0);
    }
  if (s) {
    const u = $(n), a = c || B;
    for (let h = 0; h < s.length; h++) {
      const d = s[h];
      n[d] = Qn(
        r,
        u,
        d,
        a[d],
        e,
        !M(a, d)
      );
    }
  }
  return l;
}
function Qn(e, t, n, o, r, s) {
  const l = e[n];
  if (l != null) {
    const c = M(l, "default");
    if (c && o === void 0) {
      const u = l.default;
      if (l.type !== Function && !l.skipFactory && S(u)) {
        const { propsDefaults: a } = r;
        if (n in a)
          o = a[n];
        else {
          const h = jt(r);
          o = a[n] = u.call(
            null,
            t
          ), h();
        }
      } else
        o = u;
    }
    l[
      0
      /* shouldCast */
    ] && (s && !c ? o = !1 : l[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ge(n)) && (o = !0));
  }
  return o;
}
function as(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, l = {}, c = [];
  let u = !1;
  if (!S(e)) {
    const h = (d) => {
      u = !0;
      const [_, D] = as(d, t, !0);
      J(l, _), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !u)
    return K(e) && o.set(e, _t), _t;
  if (C(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !Y(s[h]) && y("props must be strings when using array syntax.", s[h]);
      const d = Et(s[h]);
      er(d) && (l[d] = B);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !K(s) && y("invalid props options", s);
    for (const h in s) {
      const d = Et(h);
      if (er(d)) {
        const _ = s[h], D = l[d] = C(_) || S(_) ? { type: _ } : J({}, _);
        if (D) {
          const I = nr(Boolean, D.type), R = nr(String, D.type);
          D[
            0
            /* shouldCast */
          ] = I > -1, D[
            1
            /* shouldCastTrue */
          ] = R < 0 || I < R, (I > -1 || M(D, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [l, c];
  return K(e) && o.set(e, a), a;
}
function er(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function eo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function tr(e, t) {
  return eo(e) === eo(t);
}
function nr(e, t) {
  return C(t) ? t.findIndex((n) => tr(n, e)) : S(t) && tr(t, e) ? 0 : -1;
}
function ds(e, t, n) {
  const o = $(t), r = n.propsOptions[0];
  for (const s in r) {
    let l = r[s];
    l != null && Dl(
      s,
      o[s],
      l,
      process.env.NODE_ENV !== "production" ? mt(o) : o,
      !M(e, s) && !M(e, Ge(s))
    );
  }
}
function Dl(e, t, n, o, r) {
  const { type: s, required: l, validator: c, skipCheck: u } = n;
  if (l && r) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !l)) {
    if (s != null && s !== !0 && !u) {
      let a = !1;
      const h = C(s) ? s : [s], d = [];
      for (let _ = 0; _ < h.length && !a; _++) {
        const { valid: D, expectedType: I } = Vl(t, h[_]);
        d.push(I || ""), a = D;
      }
      if (!a) {
        y(Cl(e, t, d));
        return;
      }
    }
    c && !c(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xl = /* @__PURE__ */ Me(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Vl(e, t) {
  let n;
  const o = eo(t);
  if (xl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Cl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(mn).join(" | ")}`;
  const r = n[0], s = co(t), l = or(t, r), c = or(t, s);
  return n.length === 1 && rr(r) && !Sl(r, s) && (o += ` with value ${l}`), o += `, got ${s} `, rr(s) && (o += `with value ${c}.`), o;
}
function or(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function rr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Sl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ps = (e) => e[0] === "_" || e === "$stable", So = (e) => C(e) ? e.map(Ee) : [Ee(e)], Tl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Hi((...r) => (process.env.NODE_ENV !== "production" && te && (!n || n.root === te.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), So(t(...r))), n);
  return o._c = !1, o;
}, hs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ps(r))
      continue;
    const s = e[r];
    if (S(s))
      t[r] = Tl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const l = So(s);
      t[r] = () => l;
    }
  }
}, ms = (e, t) => {
  process.env.NODE_ENV !== "production" && !Do(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = So(t);
  e.slots.default = () => n;
}, $l = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = $(t), rn(t, "_", n)) : hs(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && ms(e, t);
  rn(e.slots, On, 1);
}, Il = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, l = B;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && it ? (J(r, t), Ce(e, "set", "$slots")) : n && c === 1 ? s = !1 : (J(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, hs(t, r)), l = t;
  } else
    t && (ms(e, t), l = { default: 1 });
  if (s)
    for (const c in r)
      !ps(c) && l[c] == null && delete r[c];
};
function to(e, t, n, o, r = !1) {
  if (C(e)) {
    e.forEach(
      (_, D) => to(
        _,
        t && (C(t) ? t[D] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Xt(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Io(o.component) || o.component.proxy : o.el, l = r ? null : s, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, h = c.refs === B ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== u && (Y(a) ? (h[a] = null, M(d, a) && (d[a] = null)) : oe(a) && (a.value = null)), S(u))
    Re(u, c, 12, [l, h]);
  else {
    const _ = Y(u), D = oe(u), I = e.f;
    if (_ || D) {
      const R = () => {
        if (I) {
          const k = _ ? M(d, u) ? d[u] : h[u] : u.value;
          r ? C(k) && io(k, s) : C(k) ? k.includes(s) || k.push(s) : _ ? (h[u] = [s], M(d, u) && (d[u] = h[u])) : (u.value = [s], e.k && (h[e.k] = u.value));
        } else
          _ ? (h[u] = l, M(d, u) && (d[u] = l)) : D ? (u.value = l, e.k && (h[e.k] = l)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      r || I ? R() : (R.id = -1, ae(R, n));
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let wt, ke;
function $e(e, t) {
  e.appContext.config.performance && an() && ke.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Ai(e, t, an() ? ke.now() : Date.now());
}
function Ie(e, t) {
  if (e.appContext.config.performance && an()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ke.mark(o), ke.measure(
      `<${Dn(e, e.type)}> ${t}`,
      n,
      o
    ), ke.clearMarks(n), ke.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Fi(e, t, an() ? ke.now() : Date.now());
}
function an() {
  return wt !== void 0 || (typeof window < "u" && window.performance ? (wt = !0, ke = window.performance) : wt = !1), wt;
}
function Pl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ae = qi;
function Rl(e) {
  return Ml(e);
}
function Ml(e, t) {
  Pl();
  const n = fo();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && yo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: l,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: h,
    parentNode: d,
    nextSibling: _,
    setScopeId: D = Z,
    insertStaticContent: I
  } = e, R = (i, f, p, m = null, g = null, N = null, O = void 0, E = null, b = process.env.NODE_ENV !== "production" && it ? !1 : !!f.dynamicChildren) => {
    if (i === f)
      return;
    i && !Dt(i, f) && (m = Ht(i), Le(i, g, N, !0), i = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: v, ref: w, shapeFlag: V } = f;
    switch (v) {
      case Ft:
        k(i, f, p, m);
        break;
      case Oe:
        z(i, f, p, m);
        break;
      case en:
        i == null ? se(f, p, m, O) : process.env.NODE_ENV !== "production" && W(i, f, p, O);
        break;
      case ve:
        Lt(
          i,
          f,
          p,
          m,
          g,
          N,
          O,
          E,
          b
        );
        break;
      default:
        V & 1 ? de(
          i,
          f,
          p,
          m,
          g,
          N,
          O,
          E,
          b
        ) : V & 6 ? Po(
          i,
          f,
          p,
          m,
          g,
          N,
          O,
          E,
          b
        ) : V & 64 || V & 128 ? v.process(
          i,
          f,
          p,
          m,
          g,
          N,
          O,
          E,
          b,
          dt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    w != null && g && to(w, i && i.ref, N, f || i, !f);
  }, k = (i, f, p, m) => {
    if (i == null)
      o(
        f.el = c(f.children),
        p,
        m
      );
    else {
      const g = f.el = i.el;
      f.children !== i.children && a(g, f.children);
    }
  }, z = (i, f, p, m) => {
    i == null ? o(
      f.el = u(f.children || ""),
      p,
      m
    ) : f.el = i.el;
  }, se = (i, f, p, m) => {
    [i.el, i.anchor] = I(
      i.children,
      f,
      p,
      m,
      i.el,
      i.anchor
    );
  }, W = (i, f, p, m) => {
    if (f.children !== i.children) {
      const g = _(i.anchor);
      j(i), [f.el, f.anchor] = I(
        f.children,
        p,
        g,
        m
      );
    } else
      f.el = i.el, f.anchor = i.anchor;
  }, G = ({ el: i, anchor: f }, p, m) => {
    let g;
    for (; i && i !== f; )
      g = _(i), o(i, p, m), i = g;
    o(f, p, m);
  }, j = ({ el: i, anchor: f }) => {
    let p;
    for (; i && i !== f; )
      p = _(i), r(i), i = p;
    r(f);
  }, de = (i, f, p, m, g, N, O, E, b) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), i == null ? P(
      f,
      p,
      m,
      g,
      N,
      O,
      E,
      b
    ) : Se(
      i,
      f,
      g,
      N,
      O,
      E,
      b
    );
  }, P = (i, f, p, m, g, N, O, E) => {
    let b, v;
    const { props: w, shapeFlag: V, transition: x, dirs: T } = i;
    if (b = i.el = l(
      i.type,
      N,
      w && w.is,
      w
    ), V & 8 ? h(b, i.children) : V & 16 && ie(
      i.children,
      b,
      null,
      m,
      g,
      An(i, N),
      O,
      E
    ), T && Ze(i, null, m, "created"), Q(b, i, i.scopeId, O, m), w) {
      for (const U in w)
        U !== "value" && !qt(U) && s(
          b,
          U,
          null,
          w[U],
          N,
          i.children,
          m,
          g,
          Te
        );
      "value" in w && s(b, "value", null, w.value, N), (v = w.onVnodeBeforeMount) && xe(v, m, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: m,
      enumerable: !1
    })), T && Ze(i, null, m, "beforeMount");
    const A = Al(g, x);
    A && x.beforeEnter(b), o(b, f, p), ((v = w && w.onVnodeMounted) || A || T) && ae(() => {
      v && xe(v, m, i), A && x.enter(b), T && Ze(i, null, m, "mounted");
    }, g);
  }, Q = (i, f, p, m, g) => {
    if (p && D(i, p), m)
      for (let N = 0; N < m.length; N++)
        D(i, m[N]);
    if (g) {
      let N = g.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = wo(N.children) || N), f === N) {
        const O = g.vnode;
        Q(
          i,
          O,
          O.scopeId,
          O.slotScopeIds,
          g.parent
        );
      }
    }
  }, ie = (i, f, p, m, g, N, O, E, b = 0) => {
    for (let v = b; v < i.length; v++) {
      const w = i[v] = E ? Be(i[v]) : Ee(i[v]);
      R(
        null,
        w,
        f,
        p,
        m,
        g,
        N,
        O,
        E
      );
    }
  }, Se = (i, f, p, m, g, N, O) => {
    const E = f.el = i.el;
    let { patchFlag: b, dynamicChildren: v, dirs: w } = f;
    b |= i.patchFlag & 16;
    const V = i.props || B, x = f.props || B;
    let T;
    if (p && Qe(p, !1), (T = x.onVnodeBeforeUpdate) && xe(T, p, f, i), w && Ze(f, i, p, "beforeUpdate"), p && Qe(p, !0), process.env.NODE_ENV !== "production" && it && (b = 0, O = !1, v = null), v ? (Fe(
      i.dynamicChildren,
      v,
      E,
      p,
      m,
      An(f, g),
      N
    ), process.env.NODE_ENV !== "production" && Qt(i, f)) : O || we(
      i,
      f,
      E,
      null,
      p,
      m,
      An(f, g),
      N,
      !1
    ), b > 0) {
      if (b & 16)
        he(
          E,
          f,
          V,
          x,
          p,
          m,
          g
        );
      else if (b & 2 && V.class !== x.class && s(E, "class", null, x.class, g), b & 4 && s(E, "style", V.style, x.style, g), b & 8) {
        const A = f.dynamicProps;
        for (let U = 0; U < A.length; U++) {
          const q = A[U], ee = V[q], me = x[q];
          (me !== ee || q === "value") && s(
            E,
            q,
            ee,
            me,
            g,
            i.children,
            p,
            m,
            Te
          );
        }
      }
      b & 1 && i.children !== f.children && h(E, f.children);
    } else
      !O && v == null && he(
        E,
        f,
        V,
        x,
        p,
        m,
        g
      );
    ((T = x.onVnodeUpdated) || w) && ae(() => {
      T && xe(T, p, f, i), w && Ze(f, i, p, "updated");
    }, m);
  }, Fe = (i, f, p, m, g, N, O) => {
    for (let E = 0; E < f.length; E++) {
      const b = i[E], v = f[E], w = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(b, v) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? d(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      R(
        b,
        v,
        w,
        null,
        m,
        g,
        N,
        O,
        !0
      );
    }
  }, he = (i, f, p, m, g, N, O) => {
    if (p !== m) {
      if (p !== B)
        for (const E in p)
          !qt(E) && !(E in m) && s(
            i,
            E,
            p[E],
            null,
            O,
            f.children,
            g,
            N,
            Te
          );
      for (const E in m) {
        if (qt(E))
          continue;
        const b = m[E], v = p[E];
        b !== v && E !== "value" && s(
          i,
          E,
          v,
          b,
          O,
          f.children,
          g,
          N,
          Te
        );
      }
      "value" in m && s(i, "value", p.value, m.value, O);
    }
  }, Lt = (i, f, p, m, g, N, O, E, b) => {
    const v = f.el = i ? i.el : c(""), w = f.anchor = i ? i.anchor : c("");
    let { patchFlag: V, dynamicChildren: x, slotScopeIds: T } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (it || V & 2048) && (V = 0, b = !1, x = null), T && (E = E ? E.concat(T) : T), i == null ? (o(v, p, m), o(w, p, m), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      w,
      g,
      N,
      O,
      E,
      b
    )) : V > 0 && V & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (Fe(
      i.dynamicChildren,
      x,
      p,
      g,
      N,
      O,
      E
    ), process.env.NODE_ENV !== "production" ? Qt(i, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || g && f === g.subTree) && Qt(
        i,
        f,
        !0
        /* shallow */
      )
    )) : we(
      i,
      f,
      p,
      w,
      g,
      N,
      O,
      E,
      b
    );
  }, Po = (i, f, p, m, g, N, O, E, b) => {
    f.slotScopeIds = E, i == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      p,
      m,
      O,
      b
    ) : je(
      f,
      p,
      m,
      g,
      N,
      O,
      b
    ) : ue(i, f, b);
  }, je = (i, f, p, m, g, N, O) => {
    const E = i.component = zl(
      i,
      m,
      g
    );
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Vi(E), process.env.NODE_ENV !== "production" && (Jt(i), $e(E, "mount")), Do(i) && (E.ctx.renderer = dt), process.env.NODE_ENV !== "production" && $e(E, "init"), Yl(E), process.env.NODE_ENV !== "production" && Ie(E, "init"), E.asyncDep) {
      if (g && g.registerDep(E, L), !i.el) {
        const b = E.subTree = ct(Oe);
        z(null, b, f, p);
      }
    } else
      L(
        E,
        i,
        f,
        p,
        g,
        N,
        O
      );
    process.env.NODE_ENV !== "production" && (Yt(), Ie(E, "mount"));
  }, ue = (i, f, p) => {
    const m = f.component = i.component;
    if (Ki(i, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        process.env.NODE_ENV !== "production" && Jt(f), F(m, f, p), process.env.NODE_ENV !== "production" && Yt();
        return;
      } else
        m.next = f, Di(m.update), m.effect.dirty = !0, m.update();
    else
      f.el = i.el, m.vnode = f;
  }, L = (i, f, p, m, g, N, O) => {
    const E = () => {
      if (i.isMounted) {
        let { next: w, bu: V, u: x, parent: T, vnode: A } = i;
        {
          const pt = gs(i);
          if (pt) {
            w && (w.el = A.el, F(i, w, O)), pt.asyncDep.then(() => {
              i.isUnmounted || E();
            });
            return;
          }
        }
        let U = w, q;
        process.env.NODE_ENV !== "production" && Jt(w || i.vnode), Qe(i, !1), w ? (w.el = A.el, F(i, w, O)) : w = A, V && Ot(V), (q = w.props && w.props.onVnodeBeforeUpdate) && xe(q, T, w, A), Qe(i, !0), process.env.NODE_ENV !== "production" && $e(i, "render");
        const ee = Pn(i);
        process.env.NODE_ENV !== "production" && Ie(i, "render");
        const me = i.subTree;
        i.subTree = ee, process.env.NODE_ENV !== "production" && $e(i, "patch"), R(
          me,
          ee,
          // parent may have changed if it's in a teleport
          d(me.el),
          // anchor may have changed if it's in a fragment
          Ht(me),
          i,
          g,
          N
        ), process.env.NODE_ENV !== "production" && Ie(i, "patch"), w.el = ee.el, U === null && ki(i, ee.el), x && ae(x, g), (q = w.props && w.props.onVnodeUpdated) && ae(
          () => xe(q, T, w, A),
          g
        ), process.env.NODE_ENV !== "production" && Zr(i), process.env.NODE_ENV !== "production" && Yt();
      } else {
        let w;
        const { el: V, props: x } = f, { bm: T, m: A, parent: U } = i, q = Xt(f);
        if (Qe(i, !1), T && Ot(T), !q && (w = x && x.onVnodeBeforeMount) && xe(w, U, f), Qe(i, !0), V && Tn) {
          const ee = () => {
            process.env.NODE_ENV !== "production" && $e(i, "render"), i.subTree = Pn(i), process.env.NODE_ENV !== "production" && Ie(i, "render"), process.env.NODE_ENV !== "production" && $e(i, "hydrate"), Tn(
              V,
              i.subTree,
              i,
              g,
              null
            ), process.env.NODE_ENV !== "production" && Ie(i, "hydrate");
          };
          q ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && ee()
          ) : ee();
        } else {
          process.env.NODE_ENV !== "production" && $e(i, "render");
          const ee = i.subTree = Pn(i);
          process.env.NODE_ENV !== "production" && Ie(i, "render"), process.env.NODE_ENV !== "production" && $e(i, "patch"), R(
            null,
            ee,
            p,
            m,
            i,
            g,
            N
          ), process.env.NODE_ENV !== "production" && Ie(i, "patch"), f.el = ee.el;
        }
        if (A && ae(A, g), !q && (w = x && x.onVnodeMounted)) {
          const ee = f;
          ae(
            () => xe(w, U, ee),
            g
          );
        }
        (f.shapeFlag & 256 || U && Xt(U.vnode) && U.vnode.shapeFlag & 256) && i.a && ae(i.a, g), i.isMounted = !0, process.env.NODE_ENV !== "production" && Pi(i), f = p = m = null;
      }
    }, b = i.effect = new ho(
      E,
      Z,
      () => Nn(v),
      i.scope
      // track it in component's effect scope
    ), v = i.update = () => {
      b.dirty && b.run();
    };
    v.id = i.uid, Qe(i, !0), process.env.NODE_ENV !== "production" && (b.onTrack = i.rtc ? (w) => Ot(i.rtc, w) : void 0, b.onTrigger = i.rtg ? (w) => Ot(i.rtg, w) : void 0, v.ownerInstance = i), v();
  }, F = (i, f, p) => {
    f.component = i;
    const m = i.vnode.props;
    i.vnode = f, i.next = null, wl(i, f.props, m, p), Il(i, f.children, p), Ye(), Go(i), Xe();
  }, we = (i, f, p, m, g, N, O, E, b = !1) => {
    const v = i && i.children, w = i ? i.shapeFlag : 0, V = f.children, { patchFlag: x, shapeFlag: T } = f;
    if (x > 0) {
      if (x & 128) {
        bt(
          v,
          V,
          p,
          m,
          g,
          N,
          O,
          E,
          b
        );
        return;
      } else if (x & 256) {
        xn(
          v,
          V,
          p,
          m,
          g,
          N,
          O,
          E,
          b
        );
        return;
      }
    }
    T & 8 ? (w & 16 && Te(v, g, N), V !== v && h(p, V)) : w & 16 ? T & 16 ? bt(
      v,
      V,
      p,
      m,
      g,
      N,
      O,
      E,
      b
    ) : Te(v, g, N, !0) : (w & 8 && h(p, ""), T & 16 && ie(
      V,
      p,
      m,
      g,
      N,
      O,
      E,
      b
    ));
  }, xn = (i, f, p, m, g, N, O, E, b) => {
    i = i || _t, f = f || _t;
    const v = i.length, w = f.length, V = Math.min(v, w);
    let x;
    for (x = 0; x < V; x++) {
      const T = f[x] = b ? Be(f[x]) : Ee(f[x]);
      R(
        i[x],
        T,
        p,
        null,
        g,
        N,
        O,
        E,
        b
      );
    }
    v > w ? Te(
      i,
      g,
      N,
      !0,
      !1,
      V
    ) : ie(
      f,
      p,
      m,
      g,
      N,
      O,
      E,
      b,
      V
    );
  }, bt = (i, f, p, m, g, N, O, E, b) => {
    let v = 0;
    const w = f.length;
    let V = i.length - 1, x = w - 1;
    for (; v <= V && v <= x; ) {
      const T = i[v], A = f[v] = b ? Be(f[v]) : Ee(f[v]);
      if (Dt(T, A))
        R(
          T,
          A,
          p,
          null,
          g,
          N,
          O,
          E,
          b
        );
      else
        break;
      v++;
    }
    for (; v <= V && v <= x; ) {
      const T = i[V], A = f[x] = b ? Be(f[x]) : Ee(f[x]);
      if (Dt(T, A))
        R(
          T,
          A,
          p,
          null,
          g,
          N,
          O,
          E,
          b
        );
      else
        break;
      V--, x--;
    }
    if (v > V) {
      if (v <= x) {
        const T = x + 1, A = T < w ? f[T].el : m;
        for (; v <= x; )
          R(
            null,
            f[v] = b ? Be(f[v]) : Ee(f[v]),
            p,
            A,
            g,
            N,
            O,
            E,
            b
          ), v++;
      }
    } else if (v > x)
      for (; v <= V; )
        Le(i[v], g, N, !0), v++;
    else {
      const T = v, A = v, U = /* @__PURE__ */ new Map();
      for (v = A; v <= x; v++) {
        const le = f[v] = b ? Be(f[v]) : Ee(f[v]);
        le.key != null && (process.env.NODE_ENV !== "production" && U.has(le.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(le.key),
          "Make sure keys are unique."
        ), U.set(le.key, v));
      }
      let q, ee = 0;
      const me = x - A + 1;
      let pt = !1, Mo = 0;
      const yt = new Array(me);
      for (v = 0; v < me; v++)
        yt[v] = 0;
      for (v = T; v <= V; v++) {
        const le = i[v];
        if (ee >= me) {
          Le(le, g, N, !0);
          continue;
        }
        let De;
        if (le.key != null)
          De = U.get(le.key);
        else
          for (q = A; q <= x; q++)
            if (yt[q - A] === 0 && Dt(le, f[q])) {
              De = q;
              break;
            }
        De === void 0 ? Le(le, g, N, !0) : (yt[De - A] = v + 1, De >= Mo ? Mo = De : pt = !0, R(
          le,
          f[De],
          p,
          null,
          g,
          N,
          O,
          E,
          b
        ), ee++);
      }
      const Ao = pt ? Fl(yt) : _t;
      for (q = Ao.length - 1, v = me - 1; v >= 0; v--) {
        const le = A + v, De = f[le], Fo = le + 1 < w ? f[le + 1].el : m;
        yt[v] === 0 ? R(
          null,
          De,
          p,
          Fo,
          g,
          N,
          O,
          E,
          b
        ) : pt && (q < 0 || v !== Ao[q] ? at(De, p, Fo, 2) : q--);
      }
    }
  }, at = (i, f, p, m, g = null) => {
    const { el: N, type: O, transition: E, children: b, shapeFlag: v } = i;
    if (v & 6) {
      at(i.component.subTree, f, p, m);
      return;
    }
    if (v & 128) {
      i.suspense.move(f, p, m);
      return;
    }
    if (v & 64) {
      O.move(i, f, p, dt);
      return;
    }
    if (O === ve) {
      o(N, f, p);
      for (let V = 0; V < b.length; V++)
        at(b[V], f, p, m);
      o(i.anchor, f, p);
      return;
    }
    if (O === en) {
      G(i, f, p);
      return;
    }
    if (m !== 2 && v & 1 && E)
      if (m === 0)
        E.beforeEnter(N), o(N, f, p), ae(() => E.enter(N), g);
      else {
        const { leave: V, delayLeave: x, afterLeave: T } = E, A = () => o(N, f, p), U = () => {
          V(N, () => {
            A(), T && T();
          });
        };
        x ? x(N, A, U) : U();
      }
    else
      o(N, f, p);
  }, Le = (i, f, p, m = !1, g = !1) => {
    const {
      type: N,
      props: O,
      ref: E,
      children: b,
      dynamicChildren: v,
      shapeFlag: w,
      patchFlag: V,
      dirs: x
    } = i;
    if (E != null && to(E, null, p, i, !0), w & 256) {
      f.ctx.deactivate(i);
      return;
    }
    const T = w & 1 && x, A = !Xt(i);
    let U;
    if (A && (U = O && O.onVnodeBeforeUnmount) && xe(U, f, i), w & 6)
      xs(i.component, p, m);
    else {
      if (w & 128) {
        i.suspense.unmount(p, m);
        return;
      }
      T && Ze(i, null, f, "beforeUnmount"), w & 64 ? i.type.remove(
        i,
        f,
        p,
        g,
        dt,
        m
      ) : v && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== ve || V > 0 && V & 64) ? Te(
        v,
        f,
        p,
        !1,
        !0
      ) : (N === ve && V & 384 || !g && w & 16) && Te(b, f, p), m && Vn(i);
    }
    (A && (U = O && O.onVnodeUnmounted) || T) && ae(() => {
      U && xe(U, f, i), T && Ze(i, null, f, "unmounted");
    }, p);
  }, Vn = (i) => {
    const { type: f, el: p, anchor: m, transition: g } = i;
    if (f === ve) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && g && !g.persisted ? i.children.forEach((O) => {
        O.type === Oe ? r(O.el) : Vn(O);
      }) : Ds(p, m);
      return;
    }
    if (f === en) {
      j(i);
      return;
    }
    const N = () => {
      r(p), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (i.shapeFlag & 1 && g && !g.persisted) {
      const { leave: O, delayLeave: E } = g, b = () => O(p, N);
      E ? E(i.el, N, b) : b();
    } else
      N();
  }, Ds = (i, f) => {
    let p;
    for (; i !== f; )
      p = _(i), r(i), i = p;
    r(f);
  }, xs = (i, f, p) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && Ci(i);
    const { bum: m, scope: g, update: N, subTree: O, um: E } = i;
    m && Ot(m), g.stop(), N && (N.active = !1, Le(O, i, f, p)), E && ae(E, f), ae(() => {
      i.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Mi(i);
  }, Te = (i, f, p, m = !1, g = !1, N = 0) => {
    for (let O = N; O < i.length; O++)
      Le(i[O], f, p, m, g);
  }, Ht = (i) => i.shapeFlag & 6 ? Ht(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : _(i.anchor || i.el);
  let Cn = !1;
  const Ro = (i, f, p) => {
    i == null ? f._vnode && Le(f._vnode, null, null, !0) : R(
      f._vnode || null,
      i,
      f,
      null,
      null,
      null,
      p
    ), Cn || (Cn = !0, Go(), Jr(), Cn = !1), f._vnode = i;
  }, dt = {
    p: R,
    um: Le,
    m: at,
    r: Vn,
    mt: je,
    mc: ie,
    pc: we,
    pbc: Fe,
    n: Ht,
    o: e
  };
  let Sn, Tn;
  return t && ([Sn, Tn] = t(
    dt
  )), {
    render: Ro,
    hydrate: Sn,
    createApp: Nl(Ro, Sn)
  };
}
function An({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Al(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qt(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (C(o) && C(r))
    for (let s = 0; s < o.length; s++) {
      const l = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Be(r[s]), c.el = l.el), n || Qt(l, c)), c.type === Ft && (c.el = l.el), process.env.NODE_ENV !== "production" && c.type === Oe && !c.el && (c.el = l.el);
    }
}
function Fl(e) {
  const t = e.slice(), n = [0];
  let o, r, s, l, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, l = n.length - 1; s < l; )
        c = s + l >> 1, e[n[c]] < a ? s = c + 1 : l = c;
      a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, l = n[s - 1]; s-- > 0; )
    n[s] = l, l = t[l];
  return n;
}
function gs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gs(t);
}
const jl = (e) => e.__isTeleport, ve = Symbol.for("v-fgt"), Ft = Symbol.for("v-txt"), Oe = Symbol.for("v-cmt"), en = Symbol.for("v-stc"), St = [];
let be = null;
function Ll(e = !1) {
  St.push(be = e ? null : []);
}
function Hl() {
  St.pop(), be = St[St.length - 1] || null;
}
let Pt = 1;
function sr(e) {
  Pt += e;
}
function Ul(e) {
  return e.dynamicChildren = Pt > 0 ? be || _t : null, Hl(), Pt > 0 && be && be.push(e), e;
}
function Bl(e, t, n, o, r, s) {
  return Ul(
    H(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function To(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ht.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Kl = (...e) => vs(
  ...e
), On = "__vInternal", _s = ({ key: e }) => e ?? null, tn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || oe(e) || S(e) ? { i: pe, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, o = 0, r = null, s = e === ve ? 0 : 1, l = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _s(t),
    ref: t && tn(t),
    scopeId: ts,
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return c ? ($o(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= Y(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Pt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  be && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && be.push(u), u;
}
const ct = process.env.NODE_ENV !== "production" ? Kl : vs;
function vs(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Wi) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Oe), To(e)) {
    const c = Je(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $o(c, n), Pt > 0 && !s && be && (c.shapeFlag & 6 ? be[be.indexOf(e)] = c : be.push(c)), c.patchFlag |= -2, c;
  }
  if (Os(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: c, style: u } = t;
    c && !Y(c) && (t.class = po(c)), K(u) && (Gn(u) && !C(u) && (u = J({}, u)), t.style = ao(u));
  }
  const l = Y(e) ? 1 : Gi(e) ? 128 : jl(e) ? 64 : K(e) ? 4 : S(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && Gn(e) && (e = $(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), H(
    e,
    t,
    n,
    o,
    r,
    l,
    s,
    !0
  );
}
function kl(e) {
  return e ? Gn(e) || On in e ? J({}, e) : e : null;
}
function Je(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: l } = e, c = t ? Wl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && _s(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(tn(t)) : [r, tn(t)] : tn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && C(l) ? l.map(Es) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Je(e.ssContent),
    ssFallback: e.ssFallback && Je(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Es(e) {
  const t = Je(e);
  return C(e.children) && (t.children = e.children.map(Es)), t;
}
function nn(e = " ", t = 0) {
  return ct(Ft, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? ct(Oe) : C(e) ? ct(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Be(e) : ct(Ft, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Je(e);
}
function $o(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $o(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(On in t) ? t._ctx = pe : r === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    S(t) ? (t = { default: t, _ctx: pe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [nn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Wl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = po([t.class, o.class]));
      else if (r === "style")
        t.style = ao([t.style, o.style]);
      else if (Rt(r)) {
        const s = t[r], l = o[r];
        l && s !== l && !(C(s) && s.includes(l)) && (t[r] = s ? [].concat(s, l) : l);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function xe(e, t, n, o = null) {
  ye(e, t, 7, [
    n,
    o
  ]);
}
const Gl = us();
let ql = 0;
function zl(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Gl, s = {
    uid: ql++,
    vnode: e,
    type: o,
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
    scope: new ks(
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
    propsOptions: as(o, r),
    emitsOptions: es(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = fl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Li.bind(null, s), e.ce && e.ce(s), s;
}
let te = null, dn, no;
{
  const e = fo(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((l) => l(s)) : r[0](s);
    };
  };
  dn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), no = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const jt = (e) => {
  const t = te;
  return dn(e), e.scope.on(), () => {
    e.scope.off(), dn(t);
  };
}, ir = () => {
  te && te.scope.off(), dn(null);
}, Jl = /* @__PURE__ */ Me("slot,component");
function oo(e, t) {
  const n = t.isNativeTag || Er;
  (Jl(e) || n(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ns(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function Yl(e, t = !1) {
  t && no(t);
  const { props: n, children: o } = e.vnode, r = Ns(e);
  yl(e, n, r, t), $l(e, o);
  const s = r ? Xl(e, t) : void 0;
  return t && no(!1), s;
}
function Xl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && oo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let l = 0; l < s.length; l++)
        oo(s[l], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let l = 0; l < s.length; l++)
        ss(s[l]);
    }
    o.compilerOptions && Zl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ur(new Proxy(e.ctx, ls)), process.env.NODE_ENV !== "production" && al(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? ec(e) : null, l = jt(e);
    Ye();
    const c = Re(
      r,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? mt(e.props) : e.props,
        s
      ]
    );
    if (Xe(), l(), lo(c)) {
      if (c.then(ir, ir), t)
        return c.then((u) => {
          lr(e, u, t);
        }).catch((u) => {
          Mt(u, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      lr(e, c, t);
  } else
    bs(e, t);
}
function lr(e, t, n) {
  S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (process.env.NODE_ENV !== "production" && To(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = kr(t), process.env.NODE_ENV !== "production" && dl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), bs(e, n);
}
let ro;
const Zl = () => !ro;
function bs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ro && !o.render) {
      const r = o.template || Co(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && $e(e, "compile");
        const { isCustomElement: s, compilerOptions: l } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, a = J(
          J(
            {
              isCustomElement: s,
              delimiters: c
            },
            l
          ),
          u
        );
        o.render = ro(r, a), process.env.NODE_ENV !== "production" && Ie(e, "compile");
      }
    }
    e.render = o.render || Z;
  }
  {
    const r = jt(e);
    Ye();
    try {
      hl(e);
    } finally {
      Xe(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function."));
}
function cr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return cn(), ne(e, "get", "$attrs"), t[n];
      },
      set() {
        return y("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return y("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return ne(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Ql(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return ne(e, "get", "$slots"), t[n];
    }
  }));
}
function ec(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : oe(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return cr(e);
    },
    get slots() {
      return Ql(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return cr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Io(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(kr(Ur(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in lt)
          return lt[n](e);
      },
      has(t, n) {
        return n in t || n in lt;
      }
    }));
}
const tc = /(?:^|[-_])(\w)/g, nc = (e) => e.replace(tc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ys(e, t = !0) {
  return S(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dn(e, t, n = !1) {
  let o = ys(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const l in s)
        if (s[l] === t)
          return l;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? nc(o) : n ? "App" : "Anonymous";
}
function Os(e) {
  return S(e) && "__vccOpts" in e;
}
const ws = (e, t) => pi(e, t, wn);
function Fn(e) {
  return !!(e && e.__v_isShallow);
}
function oc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(d) {
      return K(d) ? d.__isVue ? ["div", e, "VueInstance"] : oe(d) ? [
        "div",
        {},
        ["span", e, h(d)],
        "<",
        c(d.value),
        ">"
      ] : rt(d) ? [
        "div",
        {},
        ["span", e, Fn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${ze(d) ? " (readonly)" : ""}`
      ] : ze(d) ? [
        "div",
        {},
        ["span", e, Fn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const _ = [];
    d.type.props && d.props && _.push(l("props", $(d.props))), d.setupState !== B && _.push(l("setup", d.setupState)), d.data !== B && _.push(l("data", $(d.data)));
    const D = u(d, "computed");
    D && _.push(l("computed", D));
    const I = u(d, "inject");
    return I && _.push(l("injected", I)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), _;
  }
  function l(d, _) {
    return _ = J({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, _ = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : K(d) ? ["object", { object: _ ? $(d) : d }] : ["span", n, String(d)];
  }
  function u(d, _) {
    const D = d.type;
    if (S(D))
      return;
    const I = {};
    for (const R in d.ctx)
      a(D, R, _) && (I[R] = d.ctx[R]);
    return I;
  }
  function a(d, _, D) {
    const I = d[D];
    if (C(I) && I.includes(_) || K(I) && _ in I || d.extends && a(d.extends, _, D) || d.mixins && d.mixins.some((R) => a(R, _, D)))
      return !0;
  }
  function h(d) {
    return Fn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ur = "3.4.15", ut = process.env.NODE_ENV !== "production" ? y : Z;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const rc = "http://www.w3.org/2000/svg", sc = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, fr = Ke && /* @__PURE__ */ Ke.createElement("template"), ic = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Ke.createElementNS(rc, e) : t === "mathml" ? Ke.createElementNS(sc, e) : Ke.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ke.createTextNode(e),
  createComment: (e) => Ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ke.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      fr.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const c = fr.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, lc = Symbol("_vtc");
function cc(e, t, n) {
  const o = e[lc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const uc = Symbol("_vod");
process.env.NODE_ENV;
const fc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function ac(e, t, n) {
  const o = e.style, r = o.display, s = Y(n);
  if (n && !s) {
    if (t && !Y(t))
      for (const l in t)
        n[l] == null && so(o, l, "");
    for (const l in n)
      so(o, l, n[l]);
  } else if (s) {
    if (t !== n) {
      const l = o[fc];
      l && (n += ";" + l), o.cssText = n;
    }
  } else
    t && e.removeAttribute("style");
  uc in e && (o.display = r);
}
const dc = /[^\\];\s*$/, ar = /\s*!important$/;
function so(e, t, n) {
  if (C(n))
    n.forEach((o) => so(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && dc.test(n) && ut(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = pc(e, t);
    ar.test(n) ? e.setProperty(
      Ge(o),
      n.replace(ar, ""),
      "important"
    ) : e[o] = n;
  }
}
const dr = ["Webkit", "Moz", "ms"], jn = {};
function pc(e, t) {
  const n = jn[t];
  if (n)
    return n;
  let o = Et(t);
  if (o !== "filter" && o in e)
    return jn[t] = o;
  o = mn(o);
  for (let r = 0; r < dr.length; r++) {
    const s = dr[r] + o;
    if (s in e)
      return jn[t] = s;
  }
  return t;
}
const pr = "http://www.w3.org/1999/xlink";
function hc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(pr, t.slice(6, t.length)) : e.setAttributeNS(pr, t, n);
  else {
    const s = Ks(t);
    n == null || s && !Or(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function mc(e, t, n, o, r, s, l) {
  if (t === "innerHTML" || t === "textContent") {
    o && l(o, r, s), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = n;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value, h = n ?? "";
    a !== h && (e.value = h), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Or(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !u && ut(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  u && e.removeAttribute(t);
}
function gc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function _c(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const hr = Symbol("_vei");
function vc(e, t, n, o, r = null) {
  const s = e[hr] || (e[hr] = {}), l = s[t];
  if (o && l)
    l.value = o;
  else {
    const [c, u] = Ec(t);
    if (o) {
      const a = s[t] = yc(o, r);
      gc(e, c, a, u);
    } else
      l && (_c(e, c, l, u), s[t] = void 0);
  }
}
const mr = /(?:Once|Passive|Capture)$/;
function Ec(e) {
  let t;
  if (mr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(mr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ge(e.slice(2)), t];
}
let Ln = 0;
const Nc = /* @__PURE__ */ Promise.resolve(), bc = () => Ln || (Nc.then(() => Ln = 0), Ln = Date.now());
function yc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ye(
      Oc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = bc(), n;
}
function Oc(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const gr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wc = (e, t, n, o, r, s, l, c, u) => {
  const a = r === "svg";
  t === "class" ? cc(e, o, a) : t === "style" ? ac(e, n, o) : Rt(t) ? on(t) || vc(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dc(e, t, o, a)) ? mc(
    e,
    t,
    o,
    s,
    l,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), hc(e, t, o, a));
};
function Dc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gr(t) && S(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return gr(t) && Y(n) ? !1 : t in e;
}
const xc = /* @__PURE__ */ J({ patchProp: wc }, ic);
let _r;
function Vc() {
  return _r || (_r = Rl(xc));
}
const Cc = (...e) => {
  const t = Vc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Tc(t), $c(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Ic(o);
    if (!r)
      return;
    const s = t._component;
    !S(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, Sc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function Sc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ls(t) || Hs(t) || Us(t),
    writable: !1
  });
}
function $c(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ut(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ut(o), n;
      },
      set() {
        ut(o);
      }
    });
  }
}
function Ic(e) {
  if (Y(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ut(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ut(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Pc() {
  oc();
}
process.env.NODE_ENV !== "production" && Pc();
const vr = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  "": 1
}, Hn = (e, t) => {
  const n = ge(6e4), o = ge(e.interval || 1), r = ge(e.immediate), s = ge(Date.now()), l = ge(/* @__PURE__ */ new Date()), c = ge(0), u = ge(!1), a = ge(0), h = ws(() => {
    const j = n.value - a.value;
    return j <= 0 ? 0 : j;
  }), d = ge(new Date(Date.now())), _ = ge(
    "Pending"
    /* PENDING */
  ), D = ge(!1), I = {
    warn(...j) {
      e.log && console.warn(...j);
    }
  };
  setInterval(() => {
    d.value = new Date(Date.now());
  }, 1), xo(() => {
    clearInterval(c.value);
  });
  const R = () => {
    if (D.value)
      return I.warn("Timer is already running"), !1;
    if (u.value)
      return I.warn("Timer already ended"), !1;
    s.value = Date.now() - a.value, c.value = setInterval(() => {
      a.value >= n.value || n.value === 0 ? (clearInterval(c.value), !u.value && t && t(), _.value = "Ended", u.value = !0, D.value = !1) : a.value = Date.now() - s.value;
    }, o.value), _.value = "Resumed", D.value = !0;
  }, k = () => {
    R(), _.value = "Started";
  }, z = (j, de = null) => {
    if (r.value = de || r.value, typeof j == "string") {
      const P = parseInt(j), Q = j.trim().replace(/[\d.]/g, "");
      if (Q in vr)
        n.value = P * vr[Q];
      else
        throw new Error(`Invalid time unit: '${Q}'`);
    }
    if (j instanceof Date && (n.value = j.getTime() - Date.now()), n.value < 0 && j instanceof Date)
      return I.warn(`TTL: (${j.toLocaleString()}) cannot be in the past`), !1;
    if (l.value = new Date(Date.now() + (isFinite(n.value) ? n.value : 0)), r.value) {
      if (_.value = "Started", D.value || u.value)
        return G(), !1;
      k();
    }
  };
  z(e.ttl);
  const se = () => {
    clearInterval(c.value), _.value = "Paused", D.value = !1;
  }, W = () => {
    !u.value && t && t(), a.value = 0, _.value = "Stopped", D.value = !1, clearInterval(c.value);
  }, G = () => {
    D.value = !1, u.value = !1, a.value = 0, clearInterval(c.value), R(), _.value = "Restarted";
  };
  return vn({
    /** Timer id based on setInterval API. Cancel/Clear timer with clearInterval(timerId) anywhere */
    timerId: c,
    /** — Current system DateTime */
    live: d,
    /** — DateTime instance when the timer ends */
    due: l,
    /** — The current status of the timer. */
    status: _,
    /** — The total ttl in milliseconds */
    duration: n,
    /** — The time elapsed since the timer started/resumed. */
    used: a,
    /** — The time remaining until the timer expires. */
    left: h,
    /** — Indicates whether the timer is running */
    isRunning: D,
    /** — Indicates whether the timer has expired. */
    hasExpired: u,
    // Actions
    pause: se,
    resume: R,
    start: k,
    restart: G,
    stop: W,
    setTtl: z
  });
}, Rc = /* @__PURE__ */ H("h3", null, [
  /* @__PURE__ */ H("strong", null, "Hello UseTimer")
], -1), Mc = { style: { margin: "unset" } }, Ac = /* @__PURE__ */ H("b", null, "Immediate Timer", -1), Fc = /* @__PURE__ */ H("hr", { style: { "max-width": "400px", margin: "30px 0" } }, null, -1), jc = /* @__PURE__ */ H("b", null, "Self Invoked Timer", -1), Lc = /* @__PURE__ */ H("br", null, null, -1), Hc = { style: { display: "flex", "flex-wrap": "wrap", gap: "10px" } }, Uc = /* @__PURE__ */ H("hr", { style: { "max-width": "400px", margin: "30px 0" } }, null, -1), Bc = /* @__PURE__ */ H("b", null, "Pick A DateTime", -1), Kc = /* @__PURE__ */ H("br", null, null, -1), kc = { style: { display: "flex", "flex-wrap": "wrap", gap: "10px" } }, Wc = /* @__PURE__ */ Xi({
  __name: "App",
  setup(e) {
    const t = () => {
      const l = (/* @__PURE__ */ new Date()).getTime(), c = 1 / 6 * 60 * 1e3, u = 1 * 60 * 1e3, a = l + Math.floor(Math.random() * (u - c + 1) + c);
      return new Date(a);
    }, n = [
      t(),
      t(),
      t(),
      t(),
      t(),
      t()
    ], o = Hn({ immediate: !0, ttl: n[5] }), r = Hn({ ttl: "20000", log: !0 }), s = Hn({ immediate: !0, log: !0 });
    return (l, c) => (Ll(), Bl(ve, null, [
      Rc,
      H("div", Mc, [
        Ac,
        nn(" - " + fe(X(o).used) + " - Due: " + fe(X(o).due.toLocaleString()) + " ", 1),
        H("code", null, [
          H("pre", null, fe(X(o)), 1)
        ])
      ]),
      Fc,
      H("div", null, [
        jc,
        nn(" - " + fe(X(r).used) + " - Due: " + fe(X(r).due.toLocaleString()) + " ", 1),
        H("code", null, [
          H("pre", null, fe(X(r)), 1)
        ]),
        Lc,
        H("div", Hc, [
          H("button", {
            onClick: c[0] || (c[0] = (u) => X(r).start())
          }, "Start"),
          H("button", {
            onClick: c[1] || (c[1] = (u) => X(r).pause())
          }, "Pause"),
          H("button", {
            onClick: c[2] || (c[2] = (u) => X(r).stop())
          }, "Stop"),
          H("button", {
            onClick: c[3] || (c[3] = (u) => X(r).resume())
          }, "Resume"),
          H("button", {
            onClick: c[4] || (c[4] = (u) => X(r).restart())
          }, "Restart")
        ])
      ]),
      Uc,
      H("div", null, [
        Bc,
        nn(" - " + fe(X(s).used) + " - Due: " + fe(X(s).due.toLocaleString()) + " ", 1),
        H("code", null, [
          H("pre", null, fe(X(s)), 1)
        ]),
        Kc,
        H("div", kc, [
          H("button", {
            onClick: c[5] || (c[5] = (u) => X(s).setTtl(n[0]))
          }, fe(n[0].toLocaleString()), 1),
          H("button", {
            onClick: c[6] || (c[6] = (u) => X(s).setTtl(n[1]))
          }, fe(n[1].toLocaleString()), 1),
          H("button", {
            onClick: c[7] || (c[7] = (u) => X(s).setTtl(n[2]))
          }, fe(n[2].toLocaleString()), 1),
          H("button", {
            onClick: c[8] || (c[8] = (u) => X(s).setTtl(n[3]))
          }, fe(n[3].toLocaleString()), 1),
          H("button", {
            onClick: c[9] || (c[9] = (u) => X(s).setTtl(n[4]))
          }, fe(n[4].toLocaleString()), 1)
        ])
      ])
    ], 64));
  }
});
Cc(Wc).mount("#app");
