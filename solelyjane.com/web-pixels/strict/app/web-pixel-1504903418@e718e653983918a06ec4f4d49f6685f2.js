(() => {
    var le = Object.create;
    var ot = Object.defineProperty,
        de = Object.defineProperties,
        pe = Object.getOwnPropertyDescriptor,
        _e = Object.getOwnPropertyDescriptors,
        fe = Object.getOwnPropertyNames,
        Ot = Object.getOwnPropertySymbols,
        he = Object.getPrototypeOf,
        $t = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable;
    var St = (t, e, a) => e in t ? ot(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : t[e] = a,
        w = (t, e) => {
            for (var a in e || (e = {})) $t.call(e, a) && St(t, a, e[a]);
            if (Ot)
                for (var a of Ot(e)) me.call(e, a) && St(t, a, e[a]);
            return t
        },
        b = (t, e) => de(t, _e(e));
    var ve = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var Ce = (t, e, a, r) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let i of fe(e)) !$t.call(t, i) && i !== a && ot(t, i, {
                get: () => e[i],
                enumerable: !(r = pe(e, i)) || r.enumerable
            });
        return t
    };
    var ye = (t, e, a) => (a = t != null ? le(he(t)) : {}, Ce(e || !t || !t.__esModule ? ot(a, "default", {
        value: t,
        enumerable: !0
    }) : a, t));
    var u = (t, e, a) => new Promise((r, i) => {
        var o = c => {
                try {
                    n(a.next(c))
                } catch (l) {
                    i(l)
                }
            },
            s = c => {
                try {
                    n(a.throw(c))
                } catch (l) {
                    i(l)
                }
            },
            n = c => c.done ? r(c.value) : Promise.resolve(c.value).then(o, s);
        n((a = a.apply(t, e)).next())
    });
    var re = ve(Z => {
        var yt = (t, e, a, r) => {
                let i = 36e5 * a,
                    s = {
                        value: e,
                        expiry: new Date().getTime() + i
                    };
                r.setItem(t, JSON.stringify(s))
            },
            T = (t, e) => u(null, null, function*() {
                let a = yield e.getItem(t);
                if (!a) return null;
                let r = JSON.parse(a);
                return new Date().getTime() > r.expiry ? null : r.value
            }),
            W = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

        function ge(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
        }

        function Ee() {
            this.__data__ = [], this.size = 0
        }
        var Te = Ee;

        function we(t, e) {
            return t === e || t !== t && e !== e
        }
        var be = we,
            Oe = be;

        function Se(t, e) {
            for (var a = t.length; a--;)
                if (Oe(t[a][0], e)) return a;
            return -1
        }
        var Q = Se,
            $e = Q,
            Ie = Array.prototype,
            ke = Ie.splice;

        function De(t) {
            var e = this.__data__,
                a = $e(e, t);
            if (a < 0) return !1;
            var r = e.length - 1;
            return a == r ? e.pop() : ke.call(e, a, 1), --this.size, !0
        }
        var Pe = De,
            Ae = Q;

        function Me(t) {
            var e = this.__data__,
                a = Ae(e, t);
            return a < 0 ? void 0 : e[a][1]
        }
        var je = Me,
            Re = Q;

        function Ne(t) {
            return Re(this.__data__, t) > -1
        }
        var Ue = Ne,
            He = Q;

        function Ge(t, e) {
            var a = this.__data__,
                r = He(a, t);
            return r < 0 ? (++this.size, a.push([t, e])) : a[r][1] = e, this
        }
        var xe = Ge,
            Le = Te,
            Fe = Pe,
            Ve = je,
            Ke = Ue,
            We = xe;

        function R(t) {
            var e = -1,
                a = t == null ? 0 : t.length;
            for (this.clear(); ++e < a;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        R.prototype.clear = Le;
        R.prototype.delete = Fe;
        R.prototype.get = Ve;
        R.prototype.has = Ke;
        R.prototype.set = We;
        var tt = R,
            ze = tt;

        function Be() {
            this.__data__ = new ze, this.size = 0
        }
        var Ye = Be;

        function qe(t) {
            var e = this.__data__,
                a = e.delete(t);
            return this.size = e.size, a
        }
        var Xe = qe;

        function Je(t) {
            return this.__data__.get(t)
        }
        var Ze = Je;

        function Qe(t) {
            return this.__data__.has(t)
        }
        var ta = Qe,
            ea = typeof W == "object" && W && W.Object === Object && W,
            Bt = ea,
            aa = Bt,
            ra = typeof self == "object" && self && self.Object === Object && self,
            na = aa || ra || Function("return this")(),
            O = na,
            oa = O,
            ia = oa.Symbol,
            gt = ia,
            It = gt,
            Yt = Object.prototype,
            sa = Yt.hasOwnProperty,
            ca = Yt.toString,
            x = It ? It.toStringTag : void 0;

        function ua(t) {
            var e = sa.call(t, x),
                a = t[x];
            try {
                t[x] = void 0;
                var r = !0
            } catch (o) {}
            var i = ca.call(t);
            return r && (e ? t[x] = a : delete t[x]), i
        }
        var la = ua,
            da = Object.prototype,
            pa = da.toString;

        function _a(t) {
            return pa.call(t)
        }
        var fa = _a,
            kt = gt,
            ha = la,
            ma = fa,
            va = "[object Null]",
            Ca = "[object Undefined]",
            Dt = kt ? kt.toStringTag : void 0;

        function ya(t) {
            return t == null ? t === void 0 ? Ca : va : Dt && Dt in Object(t) ? ha(t) : ma(t)
        }
        var Et = ya;

        function ga(t) {
            var e = typeof t;
            return t != null && (e == "object" || e == "function")
        }
        var qt = ga,
            Ea = Et,
            Ta = qt,
            wa = "[object AsyncFunction]",
            ba = "[object Function]",
            Oa = "[object GeneratorFunction]",
            Sa = "[object Proxy]";

        function $a(t) {
            if (!Ta(t)) return !1;
            var e = Ea(t);
            return e == ba || e == Oa || e == wa || e == Sa
        }
        var Ia = $a,
            ka = O,
            Da = ka["__core-js_shared__"],
            Pa = Da,
            it = Pa,
            Pt = function() {
                var t = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }();

        function Aa(t) {
            return !!Pt && Pt in t
        }
        var Ma = Aa,
            ja = Function.prototype,
            Ra = ja.toString;

        function Na(t) {
            if (t != null) {
                try {
                    return Ra.call(t)
                } catch (e) {}
                try {
                    return t + ""
                } catch (e) {}
            }
            return ""
        }
        var Xt = Na,
            Ua = Ia,
            Ha = Ma,
            Ga = qt,
            xa = Xt,
            La = /[\\^$.*+?()[\]{}|]/g,
            Fa = /^\[object .+?Constructor\]$/,
            Va = Function.prototype,
            Ka = Object.prototype,
            Wa = Va.toString,
            za = Ka.hasOwnProperty,
            Ba = RegExp("^" + Wa.call(za).replace(La, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Ya(t) {
            if (!Ga(t) || Ha(t)) return !1;
            var e = Ua(t) ? Ba : Fa;
            return e.test(xa(t))
        }
        var qa = Ya;

        function Xa(t, e) {
            return t == null ? void 0 : t[e]
        }
        var Ja = Xa,
            Za = qa,
            Qa = Ja;

        function tr(t, e) {
            var a = Qa(t, e);
            return Za(a) ? a : void 0
        }
        var N = tr,
            er = N,
            ar = O,
            rr = er(ar, "Map"),
            Tt = rr,
            nr = N,
            or = nr(Object, "create"),
            et = or,
            At = et;

        function ir() {
            this.__data__ = At ? At(null) : {}, this.size = 0
        }
        var sr = ir;

        function cr(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }
        var ur = cr,
            lr = et,
            dr = "__lodash_hash_undefined__",
            pr = Object.prototype,
            _r = pr.hasOwnProperty;

        function fr(t) {
            var e = this.__data__;
            if (lr) {
                var a = e[t];
                return a === dr ? void 0 : a
            }
            return _r.call(e, t) ? e[t] : void 0
        }
        var hr = fr,
            mr = et,
            vr = Object.prototype,
            Cr = vr.hasOwnProperty;

        function yr(t) {
            var e = this.__data__;
            return mr ? e[t] !== void 0 : Cr.call(e, t)
        }
        var gr = yr,
            Er = et,
            Tr = "__lodash_hash_undefined__";

        function wr(t, e) {
            var a = this.__data__;
            return this.size += this.has(t) ? 0 : 1, a[t] = Er && e === void 0 ? Tr : e, this
        }
        var br = wr,
            Or = sr,
            Sr = ur,
            $r = hr,
            Ir = gr,
            kr = br;

        function U(t) {
            var e = -1,
                a = t == null ? 0 : t.length;
            for (this.clear(); ++e < a;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        U.prototype.clear = Or;
        U.prototype.delete = Sr;
        U.prototype.get = $r;
        U.prototype.has = Ir;
        U.prototype.set = kr;
        var Dr = U,
            Mt = Dr,
            Pr = tt,
            Ar = Tt;

        function Mr() {
            this.size = 0, this.__data__ = {
                hash: new Mt,
                map: new(Ar || Pr),
                string: new Mt
            }
        }
        var jr = Mr;

        function Rr(t) {
            var e = typeof t;
            return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
        }
        var Nr = Rr,
            Ur = Nr;

        function Hr(t, e) {
            var a = t.__data__;
            return Ur(e) ? a[typeof e == "string" ? "string" : "hash"] : a.map
        }
        var at = Hr,
            Gr = at;

        function xr(t) {
            var e = Gr(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }
        var Lr = xr,
            Fr = at;

        function Vr(t) {
            return Fr(this, t).get(t)
        }
        var Kr = Vr,
            Wr = at;

        function zr(t) {
            return Wr(this, t).has(t)
        }
        var Br = zr,
            Yr = at;

        function qr(t, e) {
            var a = Yr(this, t),
                r = a.size;
            return a.set(t, e), this.size += a.size == r ? 0 : 1, this
        }
        var Xr = qr,
            Jr = jr,
            Zr = Lr,
            Qr = Kr,
            tn = Br,
            en = Xr;

        function H(t) {
            var e = -1,
                a = t == null ? 0 : t.length;
            for (this.clear(); ++e < a;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        H.prototype.clear = Jr;
        H.prototype.delete = Zr;
        H.prototype.get = Qr;
        H.prototype.has = tn;
        H.prototype.set = en;
        var Jt = H,
            an = tt,
            rn = Tt,
            nn = Jt,
            on = 200;

        function sn(t, e) {
            var a = this.__data__;
            if (a instanceof an) {
                var r = a.__data__;
                if (!rn || r.length < on - 1) return r.push([t, e]), this.size = ++a.size, this;
                a = this.__data__ = new nn(r)
            }
            return a.set(t, e), this.size = a.size, this
        }
        var cn = sn,
            un = tt,
            ln = Ye,
            dn = Xe,
            pn = Ze,
            _n = ta,
            fn = cn;

        function V(t) {
            var e = this.__data__ = new un(t);
            this.size = e.size
        }
        V.prototype.clear = ln;
        V.prototype.delete = dn;
        V.prototype.get = pn;
        V.prototype.has = _n;
        V.prototype.set = fn;
        var hn = "__lodash_hash_undefined__";

        function mn(t) {
            return this.__data__.set(t, hn), this
        }
        var vn = mn;

        function Cn(t) {
            return this.__data__.has(t)
        }
        var yn = Cn,
            gn = Jt,
            En = vn,
            Tn = yn;

        function ut(t) {
            var e = -1,
                a = t == null ? 0 : t.length;
            for (this.__data__ = new gn; ++e < a;) this.add(t[e])
        }
        ut.prototype.add = ut.prototype.push = En;
        ut.prototype.has = Tn;
        var wn = O;
        wn.Uint8Array;
        var jt = gt,
            Rt = jt ? jt.prototype : void 0;
        Rt && Rt.valueOf;

        function bn(t) {
            return t != null && typeof t == "object"
        }
        var Zt = bn,
            On = Et,
            Sn = Zt,
            $n = "[object Arguments]";

        function In(t) {
            return Sn(t) && On(t) == $n
        }
        var kn = In,
            Nt = kn,
            Dn = Zt,
            Qt = Object.prototype,
            Pn = Qt.hasOwnProperty,
            An = Qt.propertyIsEnumerable;
        Nt(function() {
            return arguments
        }());
        var z = {
            exports: {}
        };

        function Mn() {
            return !1
        }
        var jn = Mn;
        z.exports;
        (function(t, e) {
            var a = O,
                r = jn,
                i = e && !e.nodeType && e,
                o = i && !0 && t && !t.nodeType && t,
                s = o && o.exports === i,
                n = s ? a.Buffer : void 0,
                c = n ? n.isBuffer : void 0,
                l = c || r;
            t.exports = l
        })(z, z.exports);
        z.exports;
        var B = {
            exports: {}
        };
        B.exports;
        (function(t, e) {
            var a = Bt,
                r = e && !e.nodeType && e,
                i = r && !0 && t && !t.nodeType && t,
                o = i && i.exports === r,
                s = o && a.process,
                n = function() {
                    try {
                        var c = i && i.require && i.require("util").types;
                        return c || s && s.binding && s.binding("util")
                    } catch (l) {}
                }();
            t.exports = n
        })(B, B.exports);
        var Rn = B.exports,
            Ut = Rn;
        Ut && Ut.isTypedArray;
        var Nn = N,
            Un = O,
            Hn = Nn(Un, "DataView"),
            Gn = Hn,
            xn = N,
            Ln = O,
            Fn = xn(Ln, "Promise"),
            Vn = Fn,
            Kn = N,
            Wn = O,
            zn = Kn(Wn, "Set"),
            Bn = zn,
            Yn = N,
            qn = O,
            Xn = Yn(qn, "WeakMap"),
            Jn = Xn,
            lt = Gn,
            dt = Tt,
            pt = Vn,
            _t = Bn,
            ft = Jn,
            te = Et,
            G = Xt,
            Ht = "[object Map]",
            Zn = "[object Object]",
            Gt = "[object Promise]",
            xt = "[object Set]",
            Lt = "[object WeakMap]",
            Ft = "[object DataView]",
            Qn = G(lt),
            to = G(dt),
            eo = G(pt),
            ao = G(_t),
            ro = G(ft),
            A = te;
        (lt && A(new lt(new ArrayBuffer(1))) != Ft || dt && A(new dt) != Ht || pt && A(pt.resolve()) != Gt || _t && A(new _t) != xt || ft && A(new ft) != Lt) && (A = function(t) {
            var e = te(t),
                a = e == Zn ? t.constructor : void 0,
                r = a ? G(a) : "";
            if (r) switch (r) {
                case Qn:
                    return Ft;
                case to:
                    return Ht;
                case eo:
                    return Gt;
                case ao:
                    return xt;
                case ro:
                    return Lt
            }
            return e
        });

        function no(t) {
            let e = Object.entries(t);
            return (a, r) => e.every(([i, o]) => o(a[i], r[i]))
        }
        var oo = (t, e) => !t.localeCompare(e, void 0, {
            sensitivity: "accent"
        });

        function io(t, e) {
            for (var a, r = -1, i = t.length; ++r < i;) {
                var o = e(t[r]);
                o !== void 0 && (a = a === void 0 ? o : a + o)
            }
            return a
        }
        var so = io;

        function co(t) {
            return t
        }
        var uo = co,
            lo = so,
            po = uo;

        function _o(t) {
            return t && t.length ? lo(t, po) : 0
        }
        var fo = _o,
            ho = ge(fo),
            F, M;

        function L(t, e, a) {
            if (t.has(e)) return t.get(e);
            let r = a();
            return t.set(e, r), r
        }
        var Y = class {
            constructor(e) {
                this.map = e
            }
            get(e) {
                var a;
                return (a = this.map.get(e)) != null ? a : 0
            }
            increment(e, a = 1) {
                var i;
                let r = new Map(this.map);
                return a += (i = r.get(e)) != null ? i : 0, a ? r.set(e, a) : r.delete(e), new F(r)
            }
            sum() {
                return ho([...this.map.values()])
            }[Symbol.iterator]() {
                return this.map[Symbol.iterator]()
            }
            static empty() {
                return this.EMPTY
            }
            static fromEntries(e) {
                return new F(new Map(e))
            }
            static fromObject(e) {
                return this.fromEntries(Object.entries(e))
            }
            static of (...e) {
                return new F(new Map(e))
            }
        };
        F = Y;
        Y.EMPTY = new F(new Map);
        var j = class {
            constructor(e) {
                this.map = e
            }
            get size() {
                return this.map.size
            }
            delete(e) {
                let a = new Map(this.map);
                return a.delete(e), new M(a)
            }
            entries() {
                return this.map.entries()
            }
            get(e) {
                return this.map.get(e)
            }
            keys() {
                return this.map.keys()
            }
            set(e, a) {
                let r = new Map(this.map);
                return r.set(e, a), new M(r)
            }
            forEach(e) {
                for (let [a, r] of this.map.entries()) e(r, a, this.map)
            }
            toMap() {
                return new Map(this.map)
            }
            values() {
                return this.map.values()
            }[Symbol.iterator]() {
                return this.map[Symbol.iterator]()
            }
            static empty() {
                return this.EMPTY
            }
            static fromEntries(e) {
                return new M(new Map(e))
            }
            static fromObject(e) {
                return this.fromEntries(Object.entries(e))
            }
            static of (...e) {
                return new M(new Map(e))
            }
        };
        M = j;
        j.EMPTY = new M(new Map);
        var Vt = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
            mo = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,
            ee = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
            vo = /\\([\u000b\u0020-\u00ff])/g,
            Co = /([\\"])/g,
            ae = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
            yo = Eo,
            go = To;

        function Eo(t) {
            if (!t || typeof t != "object") throw new TypeError("argument obj is required");
            var e = t.parameters,
                a = t.type;
            if (!a || !ae.test(a)) throw new TypeError("invalid type");
            var r = a;
            if (e && typeof e == "object")
                for (var i, o = Object.keys(e).sort(), s = 0; s < o.length; s++) {
                    if (i = o[s], !ee.test(i)) throw new TypeError("invalid parameter name");
                    r += "; " + i + "=" + bo(e[i])
                }
            return r
        }

        function To(t) {
            if (!t) throw new TypeError("argument string is required");
            var e = typeof t == "object" ? wo(t) : t;
            if (typeof e != "string") throw new TypeError("argument string is required to be a string");
            var a = e.indexOf(";"),
                r = a !== -1 ? e.slice(0, a).trim() : e.trim();
            if (!ae.test(r)) throw new TypeError("invalid media type");
            var i = new Oo(r.toLowerCase());
            if (a !== -1) {
                var o, s, n;
                for (Vt.lastIndex = a; s = Vt.exec(e);) {
                    if (s.index !== a) throw new TypeError("invalid parameter format");
                    a += s[0].length, o = s[1].toLowerCase(), n = s[2], n.charCodeAt(0) === 34 && (n = n.slice(1, -1), n.indexOf("\\") !== -1 && (n = n.replace(vo, "$1"))), i.parameters[o] = n
                }
                if (a !== e.length) throw new TypeError("invalid parameter format")
            }
            return i
        }

        function wo(t) {
            var e;
            if (typeof t.getHeader == "function" ? e = t.getHeader("content-type") : typeof t.headers == "object" && (e = t.headers && t.headers["content-type"]), typeof e != "string") throw new TypeError("content-type header is missing from object");
            return e
        }

        function bo(t) {
            var e = String(t);
            if (ee.test(e)) return e;
            if (e.length > 0 && !mo.test(e)) throw new TypeError("invalid parameter value");
            return '"' + e.replace(Co, "\\$1") + '"'
        }

        function Oo(t) {
            this.parameters = Object.create(null), this.type = t
        }
        var wt, ht = class {
                constructor(e) {
                    this.value = e
                }
                subtype(e) {
                    return new q(this.value, e)
                }
                toString() {
                    return this.value
                }
            },
            mt = class {
                constructor(e) {
                    this.value = e
                }
                toString() {
                    return this.value
                }
                static fromString(e) {
                    if (/[ \x00-\x0f()<>@,;:\\"/[\]?=]/.test(e)) throw new Error("Invalid character in attribute");
                    return new this(e.toLowerCase())
                }
            },
            P = class {
                constructor(e) {
                    this.values = e
                }* entries() {
                    for (let [e, a] of this.values) yield [new mt(e), a]
                }
                get(e) {
                    return this.values.get(e.value)
                }
                set(e, a) {
                    return new wt(a !== void 0 ? this.values.set(e.value, a) : this.values.delete(e.value))
                }
            };
        wt = P;
        P.EMPTY = new wt(j.empty());
        var q = class t {
                constructor(e, a, r = P.EMPTY) {
                    this.type = e, this.subtype = a, this.parameters = r
                }
                withParameters(e = P.EMPTY) {
                    return new t(this.type, this.subtype, e)
                }
                toString() {
                    return yo({
                        type: `${this.type}/${this.subtype}`,
                        parameters: Object.fromEntries([...this.parameters.entries()].map(([e, a]) => [String(e), a]))
                    })
                }
                static parse(e) {
                    let a = go(e);
                    return new this(...a.type.split("/"), new P(j.fromEntries(Object.entries(a.parameters))))
                }
            },
            vt = class {
                constructor(e) {
                    this.name = e
                }
                toString() {
                    return this.name
                }
            },
            So = new vt("POST"),
            X = class {
                constructor(e) {
                    this.value = e
                }
                normalized() {
                    return this.value.toLowerCase()
                }
                toString() {
                    return this.value
                }
            };
        X.equal = no({
            value: oo
        });
        var Ct = class {
            constructor(e, a) {
                this.name = e, this.format = a
            }
            read(e) {
                return this.format.read(e.getValues(this.name))
            } of (e) {
                return {
                    name: this.name,
                    values: this.format.write(e)
                }
            }
        };

        function $o(t) {
            return {
                read([e]) {
                    return e !== void 0 ? t.read(e) : void 0
                },
                write(e) {
                    return e !== void 0 ? [t.write(e)] : []
                }
            }
        }
        var Io = {
                read(t) {
                    return q.parse(t)
                },
                write(t) {
                    return t.toString()
                }
            },
            ko = new Ct(new X("Content-Type"), $o(Io)),
            rt = new ht("application");
        rt.subtype("octet-stream");
        rt.subtype("postscript");
        var Do = rt.subtype("json");
        rt.subtype("x-www-form-urlencoded");

        function S(t, e) {
            return u(this, null, function*() {
                return yield fetch(t, {
                    method: So.name,
                    body: JSON.stringify(e),
                    headers: {
                        [String(ko.name)]: String(Do)
                    },
                    keepalive: !0
                })
            })
        }
        var J = ["page_viewed", "product_added_to_cart", "cart_viewed", "checkout_started"];

        function Po({
            storage: t,
            baseRequestUrl: e,
            widgetId: a
        }) {
            function r() {
                return u(this, null, function*() {
                    let n = yield T("redo_treatment_id", t);
                    for (; !n;) yield new Promise(c => setTimeout(c, 500)), n = yield T("redo_treatment_id", t);
                    return n
                })
            }

            function i(n) {
                return u(this, null, function*() {
                    if (yield T(`redo_${n.type}`, t)) return;
                    yield yt(`redo_${n.type}`, !0, 2, t);
                    let c = {
                        event_name: n.type,
                        treatment_id: yield r()
                    };
                    yield S(`${e}/${a}/treatment-data/basic-event`, c)
                })
            }

            function o(n) {
                return u(this, null, function*() {
                    var v, f, h;
                    let c = n.data.checkout,
                        l = c.lineItems,
                        _ = "",
                        m = 0;
                    for (let p of l)((v = p.variant) == null ? void 0 : v.product.vendor) === "re:do" ? _ = (f = p.variant) == null ? void 0 : f.product.id : m += p.quantity;
                    let E = {
                        event_name: n.type,
                        treatment_id: yield r(), checkout_details: {
                            total_price: c.totalPrice.amount,
                            subtotal_price: c.subtotalPrice.amount,
                            country: (h = c.shippingAddress) == null ? void 0 : h.country,
                            num_merchant_items_purchased: m,
                            redo_product_id: _
                        }
                    };
                    yield S(`${e}/${a}/treatment-data/completed-checkout`, E), yield Promise.all(J.map(p => t.removeItem(`redo_${p}`)))
                })
            }
            let s = new Map;
            for (let n of J) s.set(n, [i]);
            return s.set("checkout_completed", [o]), s
        }
        var Kt = "redo.concierge_treatment",
            Wt = "redo.expanded_warranty_treatment",
            Ao = "redo.anonymous_shopper_id",
            Mo = "redo.anonymous_shopify_session_id",
            jo = "redo.customer_email",
            Ro = "redo.customer_phone",
            No = "redo.concierge-conversation-id",
            Uo = "redo.pricing_test_treatment_id",
            Ho = "concierge_treatment_id",
            Go = "WebPixel::Render",
            xo = t => shopify.extend(Go, t);

        function Lo({
            browser: t,
            baseRequestUrl: e,
            widgetId: a
        }) {
            function r() {
                return u(this, null, function*() {
                    let n = yield T(Kt, t.localStorage);
                    for (; !n;) yield new Promise(c => setTimeout(c, 500)), n = yield T(Kt, t.localStorage);
                    return n.id
                })
            }

            function i(n) {
                return u(this, null, function*() {
                    if (yield T(`redo_${n.name}_concierge`, t.localStorage)) return;
                    let c = {
                        event_name: n.name,
                        treatment_id: yield r()
                    };
                    yt(`redo_${n.name}_concierge`, !0, 2, t.localStorage), yield S(`${e}/${a}/treatment-data/basic-event`, c)
                })
            }

            function o(n) {
                return u(this, null, function*() {
                    var v, f, h;
                    let c = n.data.checkout,
                        l = c.lineItems,
                        _ = "",
                        m = 0;
                    for (let p of l)((v = p.variant) == null ? void 0 : v.product.vendor) === "re:do" ? _ = (f = p.variant) == null ? void 0 : f.product.id : m += p.quantity;
                    let E = {
                        event_name: n.name,
                        treatment_id: yield r(), checkout_details: {
                            total_price: c.totalPrice.amount,
                            subtotal_price: c.subtotalPrice.amount,
                            country: (h = c.shippingAddress) == null ? void 0 : h.country,
                            num_merchant_items_purchased: m,
                            redo_product_id: _
                        }
                    };
                    yield S(`${e}/${a}/treatment-data/completed-checkout`, E), yield Promise.all(J.map(p => t.localStorage.removeItem(`redo_${p}_concierge`)))
                })
            }
            let s = {};
            for (let n of J) s[n] = i;
            return s.checkout_completed = o, s
        }
        var d;
        (function(t) {
            t.PRODUCT_ADDED_TO_CART = "product_added_to_cart", t.PRODUCT_REMOVED_FROM_CART = "product_removed_from_cart", t.PRODUCT_VIEWED = "product_viewed", t.CHECKOUT_STARTED = "checkout_started", t.CHECKOUT_COMPLETED = "checkout_completed", t.CHECKOUT_CONTACT_INFO_SUBMITTED = "checkout_contact_info_submitted", t.CHECKOUT_ADDRESS_INFO_SUBMITTED = "checkout_address_info_submitted", t.CHECKOUT_SHIPPING_INFO_SUBMITTED = "checkout_shipping_info_submitted", t.PAGE_VIEWED = "page_viewed", t.COLLECTION_VIEWED = "collection_viewed"
        })(d || (d = {}));
        var Fo = [d.PRODUCT_ADDED_TO_CART, d.PRODUCT_REMOVED_FROM_CART, d.PRODUCT_VIEWED, d.CHECKOUT_STARTED, d.CHECKOUT_CONTACT_INFO_SUBMITTED, d.CHECKOUT_ADDRESS_INFO_SUBMITTED, d.CHECKOUT_SHIPPING_INFO_SUBMITTED, d.CHECKOUT_COMPLETED, d.PAGE_VIEWED, d.COLLECTION_VIEWED];

        function Vo({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            let i = {
                    [d.PRODUCT_VIEWED]: qo({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.PRODUCT_ADDED_TO_CART]: Xo({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.CHECKOUT_STARTED]: Bo({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.CHECKOUT_COMPLETED]: Yo({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.PAGE_VIEWED]: Ko({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.COLLECTION_VIEWED]: Wo({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.CHECKOUT_CONTACT_INFO_SUBMITTED]: st({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.CHECKOUT_ADDRESS_INFO_SUBMITTED]: st({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.CHECKOUT_SHIPPING_INFO_SUBMITTED]: st({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    }),
                    [d.PRODUCT_REMOVED_FROM_CART]: zo({
                        init: t,
                        baseRequestUrl: e,
                        widgetId: a,
                        browser: r
                    })
                },
                o = new Map;
            for (let s of Fo) {
                let n = i[s];
                n && o.set(s, n)
            }
            return o
        }

        function $(t, e, a) {
            return u(this, null, function*() {
                yield S(`${e}/${a}/customer-event`, t)
            })
        }

        function Ko({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    var m, E, v;
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c, l;
                    if ((v = (E = (m = o.context) == null ? void 0 : m.document) == null ? void 0 : E.location) != null && v.href) {
                        let f = new URL(o.context.document.location.href);
                        c = `${f.origin}${f.pathname}`, l = f.href
                    }
                    let _ = b(w({}, s), {
                        sessionId: n,
                        eventName: d.PAGE_VIEWED,
                        eventId: o.id,
                        timestamp: o.timestamp,
                        urlWithoutParams: c,
                        urlWithParams: l
                    });
                    yield $(_, e, a)
                })
            }
            return i
        }

        function Wo({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c = b(w({}, s), {
                        sessionId: n,
                        eventName: d.COLLECTION_VIEWED,
                        eventId: o.id,
                        collection: {
                            id: o.data.collection.id,
                            title: o.data.collection.title
                        },
                        timestamp: o.timestamp
                    });
                    yield $(c, e, a)
                })
            }
            return i
        }

        function st({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c = b(w({}, s), {
                        sessionId: n,
                        eventName: d.CHECKOUT_CONTACT_INFO_SUBMITTED,
                        eventId: o.id,
                        checkout: o.data.checkout,
                        timestamp: o.timestamp
                    });
                    yield $(c, e, a)
                })
            }
            return i
        }

        function zo({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c = t.data.cart, l = b(w({}, s), {
                        sessionId: n,
                        eventName: d.PRODUCT_REMOVED_FROM_CART,
                        eventId: o.id,
                        cart: c,
                        cartLine: o.data.cartLine,
                        timestamp: o.timestamp
                    });
                    yield $(l, e, a)
                })
            }
            return i
        }

        function Bo({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c = t.data.cart, l = b(w({}, s), {
                        sessionId: n,
                        eventName: d.CHECKOUT_STARTED,
                        eventId: o.id,
                        checkout: o.data.checkout,
                        timestamp: o.timestamp,
                        cart: c
                    });
                    yield $(l, e, a)
                })
            }
            return i
        }

        function Yo({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c = yield bt(r), l = b(w({}, s), {
                        sessionId: n,
                        pricingTestTreatmentId: c,
                        eventName: d.CHECKOUT_COMPLETED,
                        eventId: o.id,
                        checkout: o.data.checkout,
                        timestamp: o.timestamp
                    });
                    yield $(l, e, a)
                })
            }
            return i
        }

        function qo({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c = yield bt(r), l = t.data.cart ? {
                        id: t.data.cart.id
                    } : null, _ = b(w({}, s), {
                        sessionId: n,
                        pricingTestTreatmentId: c,
                        eventName: d.PRODUCT_VIEWED,
                        eventId: o.id,
                        productVariant: o.data.productVariant,
                        cart: l,
                        timestamp: o.timestamp
                    });
                    yield $(_, e, a)
                })
            }
            return i
        }

        function Xo({
            init: t,
            baseRequestUrl: e,
            widgetId: a,
            browser: r
        }) {
            function i(o) {
                return u(this, null, function*() {
                    let s = yield I({
                        init: t,
                        browser: r
                    });
                    if (!s) return;
                    let n = yield k(r), c = yield bt(r), l = t.data.cart, _ = b(w({}, s), {
                        sessionId: n,
                        pricingTestTreatmentId: c,
                        eventName: d.PRODUCT_ADDED_TO_CART,
                        eventId: o.id,
                        cartLine: o.data.cartLine,
                        cart: l,
                        timestamp: o.timestamp
                    });
                    yield $(_, e, a)
                })
            }
            return i
        }

        function I(a) {
            return u(this, arguments, function*({
                init: t,
                browser: e
            }) {
                var s;
                let r = yield Jo(e), i = yield Zo(e), o = yield Qo(e);
                if (t.data.customer || r || i || o) return {
                    customer: (s = t.data.customer) != null ? s : null,
                    anonymousId: r || void 0,
                    customerEmail: i,
                    customerPhone: o
                }
            })
        }

        function Jo(t) {
            return u(this, null, function*() {
                return K(t, Ao)
            })
        }

        function Zo(t) {
            return u(this, null, function*() {
                return K(t, jo)
            })
        }

        function Qo(t) {
            return u(this, null, function*() {
                return K(t, Ro)
            })
        }

        function k(t) {
            return u(this, null, function*() {
                return K(t, Mo)
            })
        }

        function bt(t) {
            return u(this, null, function*() {
                let e = yield K(t, Uo);
                if (e) try {
                    let a = JSON.parse(e);
                    return a.expiry && a.expiry < Date.now() ? void 0 : a.value
                } catch (a) {
                    return e
                }
            })
        }

        function K(t, e) {
            return u(this, null, function*() {
                let a = 0;
                for (; a < 3;) {
                    let r = yield t.localStorage.getItem(e);
                    if (r) return r;
                    yield new Promise(i => setTimeout(i, 500)), a++
                }
            })
        }
        var zt = ["page_viewed"];

        function ct(t) {
            return `redo_${t}_expanded_warranty`
        }

        function ti({
            browser: t,
            baseRequestUrl: e,
            widgetId: a
        }) {
            function r() {
                return u(this, null, function*() {
                    let n = yield T(Wt, t.localStorage);
                    for (; !n;) yield new Promise(c => setTimeout(c, 500)), n = yield T(Wt, t.localStorage);
                    return n._id
                })
            }

            function i(n) {
                return u(this, null, function*() {
                    if (yield T(ct(n.name), t.localStorage)) return;
                    yt(ct(n.name), !0, 2, t.localStorage);
                    let c = {
                        event_name: n.name,
                        treatment_id: yield r()
                    };
                    yield S(`${e}/${a}/treatment-data/basic-event`, c)
                })
            }

            function o(n) {
                return u(this, null, function*() {
                    var v, f, h;
                    let c = n.data.checkout,
                        l = c.lineItems,
                        _ = "",
                        m = 0;
                    for (let p of l)((v = p.variant) == null ? void 0 : v.product.vendor) === "re:do" ? _ = (f = p.variant) == null ? void 0 : f.product.id : m += p.quantity;
                    let E = {
                        event_name: n.name,
                        treatment_id: yield r(), checkout_details: {
                            total_price: c.totalPrice.amount,
                            subtotal_price: c.subtotalPrice.amount,
                            country: (h = c.shippingAddress) == null ? void 0 : h.country,
                            num_merchant_items_purchased: m,
                            redo_product_id: _
                        }
                    };
                    yield S(`${e}/${a}/treatment-data/completed-checkout`, E), yield Promise.all(zt.map(p => t.localStorage.removeItem(ct(p))))
                })
            }
            let s = {};
            for (let n of zt) s[n] = i;
            return s.checkout_completed = o, s
        }

        function ei({
            browser: t,
            baseRequestUrl: e,
            widgetId: a
        }) {
            function r() {
                return u(this, null, function*() {
                    return yield T(No, t.localStorage)
                })
            }

            function i(o) {
                return u(this, null, function*() {
                    var s;
                    try {
                        let n = o.data.checkout,
                            c = ((s = n.order) == null ? void 0 : s.id) || n.token,
                            l = yield r();
                        if (c && l) {
                            let _ = {
                                orderId: c,
                                conversationId: l,
                                timestamp: new Date().toISOString()
                            };
                            yield S(`${e}/${a}/storefront-sales-ai-attribution`, _)
                        }
                    } catch (n) {
                        console.error("Error processing storefront sales AI attribution:", n)
                    }
                })
            }
            return {
                checkout_completed: i
            }
        }
        xo(i => u(null, [i], function*({
            analytics: t,
            browser: e,
            settings: a,
            init: r
        }) {
            let o = a.base_request_url,
                s = a.widget_id,
                n = a.baseRequestUrl,
                c = a.widgetId,
                l = a.splitEnabled === "true",
                _ = a.customerAccountsEnabled === "true",
                m = a.marketingEnabled === "true",
                E = a.expandedWarrantyEnabled === "true",
                v = a.storefrontSalesAIEnabled === "true",
                f = a.conversionEnabled === "true",
                h = n || o,
                p = c || s,
                ne = new URLSearchParams(r.context.window.location.search).has(Ho),
                oe = a.conciergeSplitEnabled === "true" && !ne,
                ie = l || !!o,
                D = new Map;
            if (ie) {
                let y = Po({
                    storage: e.localStorage,
                    baseRequestUrl: h,
                    widgetId: p
                });
                for (let [C, g] of y.entries()) {
                    let nt = g.map(ce => ue => ce({
                        type: C,
                        data: ue
                    }));
                    L(D, C, () => []).push(...nt)
                }
            }
            if (oe) {
                let y = Lo({
                    browser: e,
                    baseRequestUrl: h,
                    widgetId: p
                });
                for (let [C, g] of Object.entries(y)) L(D, C, () => []).push(g)
            }
            if (_ || m || f) {
                let y = Vo({
                    init: r,
                    baseRequestUrl: h,
                    widgetId: p,
                    browser: e
                });
                for (let [C, g] of Array.from(y)) L(D, C, () => []).push(g)
            }
            if (E) {
                let y = ti({
                    browser: e,
                    baseRequestUrl: h,
                    widgetId: p
                });
                for (let [C, g] of Object.entries(y)) L(D, C, () => []).push(g)
            }
            if (v) {
                let y = ei({
                    browser: e,
                    baseRequestUrl: h,
                    widgetId: p
                });
                for (let [C, g] of Object.entries(y)) L(D, C, () => []).push(g)
            }
            let se = Array.from(D.keys());
            for (let y of se) t.subscribe(y, C => u(null, null, function*() {
                let g = D.get(C.name) || [];
                yield Promise.all(g.map(nt => nt(C)))
            }))
        }))
    });
    var oi = ye(re());
})();