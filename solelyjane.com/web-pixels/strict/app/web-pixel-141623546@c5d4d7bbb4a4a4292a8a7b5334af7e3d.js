(() => {
    var je = Object.defineProperty,
        Ye = Object.defineProperties;
    var $e = Object.getOwnPropertyDescriptors;
    var Ae = Object.getOwnPropertySymbols;
    var ze = Object.prototype.hasOwnProperty,
        qe = Object.prototype.propertyIsEnumerable;
    var se = (i, e, t) => e in i ? je(i, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : i[e] = t,
        _ = (i, e) => {
            for (var t in e || (e = {})) ze.call(e, t) && se(i, t, e[t]);
            if (Ae)
                for (var t of Ae(e)) qe.call(e, t) && se(i, t, e[t]);
            return i
        },
        A = (i, e) => Ye(i, $e(e));
    var s = (i, e, t) => se(i, typeof e != "symbol" ? e + "" : e, t);
    var o = (i, e, t) => new Promise((n, a) => {
        var m = g => {
                try {
                    f(t.next(g))
                } catch (T) {
                    a(T)
                }
            },
            l = g => {
                try {
                    f(t.throw(g))
                } catch (T) {
                    a(T)
                }
            },
            f = g => g.done ? n(g.value) : Promise.resolve(g.value).then(m, l);
        f((t = t.apply(i, e)).next())
    });
    var Te = "WebPixel::Render";
    var ce = i => shopify.extend(Te, i);
    var ke = (t => (t.ShopifyWebPixel = "ShopifyWebPixel", t.UpPixel = "UpPixel", t))(ke || {}),
        P = ke;
    var we = (I => (I.AFFILIATE_ID = "up_uppromote_aid", I.AFFILIATE_HASH_CODE = "up_uppromote_hs", I.SOURCE = "up_uppromote_source", I.LAST_CLICK = "up_uppromote_lc", I.RECEIVED = "up_uppromote_received", I.SUB_ID = "up_uppromote_sub_id", I.CLICK_ID = "_up_cid", I.AFFILIATE_INFO = "_up_a_info", I.OLD_AFFILIATE_ID = "scaaf_aid", I.OLD_SOURCE = "scaaf_sca_source_secomus", I.OLD_LAST_CLICK = "scaaf_c_c", I.SHOPIFY_CLIENT_ID = "_shopify_y", I.SHOPIFY_LANDING_PAGE = "_landing_page", I.SHOPIFY_DISCOUNT_CODE = "discount_code", I.SHOP_CART_ID = "cart", I.PREV_ORDER_TRACKING_ID = "up_uppromote_prev_octkid", I.TRACKING_AGENT = "_up_tra", I.REDIRECT_BACK_URL = "_up_rib", I.UPPROMOTE_PIXEL_CART_TRACKING_FINISHED = "_up_pixel_cart_fi", I.UPPROMOTE_CLIENT_ID = "_up_clid", I))(we || {}),
        r = we;
    var xe = (C => (C.OLD_RECEIVED = "scaaf_received", C.AFFILIATE_ID = "up_uppromote_aid", C.AFFILIATE_HASH_CODE = "up_uppromote_hs", C.SOURCE = "up_uppromote_source", C.LAST_CLICK = "up_uppromote_lc", C.RECEIVED = "up_uppromote_received", C.SUB_ID = "up_uppromote_sub_id", C.EXPIRE_TIME = "up_uppromote_expire_time", C.LINKER_COMPLETED = "_up_lk_cp", C.PREV_CART_TRACKED_ID = "_up_prev_cid", C.AFFILIATE_INFO = "_up_a_info", C.CLICK_ID = "_up_cid", C.TRACKING_AGENT = "_up_tra", C.EXPOSE_ACTION_CONTEXT = "__up_exposeActionContext", C.ESSENTIAL_LAST_VIEWED_PAGE_CONTEXT = "__up_lastViewedPageContext", C.ESSENTIAL_WP_METRICS = "__up_essentialMetrics", C.WAITING_FOR_COOKIE_CONSENT = "_up_wait_consent", C))(xe || {}),
        c = xe;

    function U(i) {
        console.group("%c [\u2191] UpPromote WebPixel", "background-color: #ff4e41; color: #fff; padding: 2px 15px 2px 0"), console.log(i), console.groupEnd()
    }
    var pe = class {
            constructor(e, t) {
                s(this, "search");
                s(this, "extApi");
                this.search = new URLSearchParams(e), this.extApi = t
            }
            getAffiliateId() {
                let e = this.search.get("sca_ref");
                return Number(e.split(".")[0])
            }
            getHashCode() {
                return this.search.get("sca_ref").split(".")[1]
            }
            getMyshopifyDomain() {
                return this.extApi.init.data.shop.myshopifyDomain
            }
            getSource() {
                return this.search.get("sca_source")
            }
            getSubId(e) {
                return this.search.get(`sub_id${e}`)
            }
            parseFromURL() {
                return {
                    affiliate_id: this.getAffiliateId(),
                    hash_code: this.getHashCode(),
                    shopify_domain: this.getMyshopifyDomain(),
                    source: this.getSource(),
                    sub_id1: this.getSubId(1),
                    sub_id2: this.getSubId(2),
                    sub_id3: this.getSubId(3),
                    sub_id4: this.getSubId(4),
                    sub_id5: this.getSubId(5),
                    tracking_agent: P.ShopifyWebPixel
                }
            }
            getTrackedIdentifier() {
                return o(this, null, function*() {
                    let e = yield this.getIdentifierFromCookie();
                    if (!e) return null;
                    let t = {};
                    return Object.keys(e).forEach(n => {
                        let a = e[n];
                        if (a === "") {
                            t[n] = null;
                            return
                        }
                        t[n] = isNaN(a) ? a : Number(a)
                    }), t
                })
            }
            getIdentifierFromCookie(e = !1) {
                return o(this, null, function*() {
                    let t = this.extApi.browser.cookie,
                        n = this.extApi.browser.localStorage;
                    if (yield t.get(r.AFFILIATE_ID)) {
                        if (!e) {
                            let a = yield t.get(r.RECEIVED);
                            if (!a || a === "0") return null
                        }
                        return {
                            cookie_from: "Pixel",
                            cid: yield t.get(r.CLICK_ID), affiliate_id: yield t.get(r.AFFILIATE_ID), hash_code: yield t.get(r.AFFILIATE_HASH_CODE), shopify_domain: this.getMyshopifyDomain(), source: yield t.get(r.SOURCE), pre_order_tracking: yield t.get(r.PREV_ORDER_TRACKING_ID), last_click: yield t.get(r.LAST_CLICK), sub_id1: yield t.get(r.SUB_ID + "1"), sub_id2: yield t.get(r.SUB_ID + "2"), sub_id3: yield t.get(r.SUB_ID + "3"), sub_id4: yield t.get(r.SUB_ID + "4"), sub_id5: yield t.get(r.SUB_ID + "5"), tracking_agent: P.ShopifyWebPixel, received: yield t.get(r.RECEIVED)
                        }
                    }
                    if (yield n.getItem(c.AFFILIATE_ID)) {
                        let a = Number(yield n.getItem(c.EXPIRE_TIME));
                        if (!e) {
                            let m = yield n.getItem(c.RECEIVED);
                            if (!m || m === "0") return null
                        }
                        return new Date().getTime() > a ? (U("Cookie expired!"), null) : {
                            cookie_from: "Pixel",
                            cid: yield n.getItem(c.CLICK_ID), affiliate_id: yield n.getItem(c.AFFILIATE_ID), hash_code: yield n.getItem(c.AFFILIATE_HASH_CODE), shopify_domain: this.getMyshopifyDomain(), source: yield n.getItem(c.SOURCE), last_click: yield n.getItem(c.LAST_CLICK), sub_id1: yield n.getItem(c.SUB_ID + "1"), sub_id2: yield n.getItem(c.SUB_ID + "2"), sub_id3: yield n.getItem(c.SUB_ID + "3"), sub_id4: yield n.getItem(c.SUB_ID + "4"), sub_id5: yield n.getItem(c.SUB_ID + "5"), pre_order_tracking: yield t.get(r.PREV_ORDER_TRACKING_ID), tracking_agent: P.ShopifyWebPixel, received: yield n.getItem(c.RECEIVED)
                        }
                    }
                    if (yield t.get(r.OLD_AFFILIATE_ID)) {
                        if (!e) {
                            let a = yield n.getItem(c.OLD_RECEIVED);
                            if (!a || a === "false") return null
                        }
                        return {
                            cookie_from: "ScriptTag",
                            affiliate_id: yield t.get(r.OLD_AFFILIATE_ID), hash_code: null, shopify_domain: this.getMyshopifyDomain(), source: yield t.get(r.OLD_SOURCE), last_click: yield t.get(r.OLD_LAST_CLICK), tracking_agent: P.ShopifyWebPixel, received: yield n.getItem(c.OLD_RECEIVED)
                        }
                    }
                    return null
                })
            }
        },
        u = pe;

    function h(i, e, t = "GET") {
        return o(this, null, function*() {
            if (["GET", "HEAD"].includes(t)) {
                let a = new URL(i),
                    m = new URLSearchParams(e),
                    l = a.searchParams,
                    f = new URLSearchParams(_(_({}, Object.fromEntries(m)), Object.fromEntries(l))),
                    g = `${a.origin}${a.pathname}?${f.toString()}`;
                return (yield(yield fetch(g, {
                    keepalive: !0
                })).json()) || null
            }
            return (yield(yield fetch(i, {
                method: t,
                headers: {
                    "content-type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify(e),
                keepalive: !0
            })).json()) || null
        })
    }
    var Qe = {
            local: {
                API_ENDPOINT: "https://secomapp-affiliate.test",
                TRACKING_API: "https://uppromote-tracking.test"
            },
            test: {
                API_ENDPOINT: "https://af-test.uppromote.com",
                TRACKING_API: "https://pixel-test.uppromote.com"
            },
            production: {
                API_ENDPOINT: "https://track.uppromote.com",
                TRACKING_API: "https://pixel.uppromote.com"
            }
        },
        Se = Qe;
    var d = {
            disable_logger_message: !1,
            calling_discount_code: !1,
            reconnecting: !1,
            env: "production",
            extensionApi: null
        },
        Pe = i => {
            d = _(_({}, d), i)
        },
        S = () => Se[d.env || "production"];

    function E() {
        return {
            LOGS: S().TRACKING_API + "/api/logs",
            CONTINUE_CART_TRACKING: S().TRACKING_API + "/api/continue-cart-track",
            LINKER_TRACK: S().TRACKING_API + "/api/linker",
            AFFILIATE_PERSONAL_DETAIL: S().TRACKING_API + "/api/apd",
            GET_AFF_DISCOUNT: S().TRACKING_API + "/api/coupon",
            FETCH_AFFILIATE_INFO_BY_CLICK_ID: S().TRACKING_API + "/api/feature/message-bar/fetch-profile",
            COOKIE_CONSENT_CHANGE: S().TRACKING_API + "/api/consent-change"
        }
    }
    var k = {
        REF_CODE: "sca_ref",
        LINKER: "_upl",
        REDIRECT_URL: "redirect_url",
        REDIRECT_BACK_URL: "sca_rib"
    };

    function Ze(i, e, t = 360, n = "") {
        if (!e || e === "null" || e === "undefined") return null;
        if (typeof t == "number") {
            let m = t;
            t = new Date, t.setTime(new Date().getTime() + m * 24 * 60 * 60 * 1e3)
        }
        let a = "expires=" + t.toUTCString();
        return i + "=" + e + ";" + a + ";path=/" + (n ? ";domain=" + n : "")
    }
    var p = Ze;

    function te(i, e) {
        return o(this, null, function*() {
            if (!i.data) return;
            let t = i.data.cookie_serialize,
                n = new Date;
            n.setDate(n.getDate() + t);
            let a = [p(r.CLICK_ID, String(i.cid), t), p(r.AFFILIATE_INFO, JSON.stringify({
                    first_name: i.data.first_name,
                    last_name: i.data.last_name,
                    company: i.data.company,
                    personal_detail: i.data.personal_detail
                }), t), p(r.AFFILIATE_ID, String(i.data.id), t), p(r.AFFILIATE_HASH_CODE, String(i.data.hash_code), t), p(r.LAST_CLICK, String(yield e.browser.cookie.get(r.LAST_CLICK)), t), p(r.RECEIVED, "1", t), p(r.SOURCE, yield e.browser.cookie.get(r.SOURCE), t), p(r.SUB_ID + 1, yield e.browser.cookie.get(r.SUB_ID + 1), t), p(r.SUB_ID + 2, yield e.browser.cookie.get(r.SUB_ID + 2), t), p(r.SUB_ID + 3, yield e.browser.cookie.get(r.SUB_ID + 3), t), p(r.SUB_ID + 4, yield e.browser.cookie.get(r.SUB_ID + 4), t), p(r.SUB_ID + 5, yield e.browser.cookie.get(r.SUB_ID + 5), t), p(r.TRACKING_AGENT, yield e.browser.cookie.get(r.TRACKING_AGENT), t)],
                m = [
                    [c.CLICK_ID, i.cid],
                    [c.AFFILIATE_INFO, JSON.stringify({
                        first_name: i.data.first_name,
                        last_name: i.data.last_name,
                        company: i.data.company,
                        personal_detail: i.data.personal_detail
                    })],
                    [c.AFFILIATE_ID, i.data.id],
                    [c.AFFILIATE_HASH_CODE, i.data.hash_code],
                    [c.LAST_CLICK, yield e.browser.cookie.get(r.LAST_CLICK)],
                    [c.SOURCE, yield e.browser.cookie.get(r.SOURCE)],
                    [c.SUB_ID + 1, yield e.browser.cookie.get(r.SUB_ID + 1)],
                    [c.SUB_ID + 2, yield e.browser.cookie.get(r.SUB_ID + 2)],
                    [c.SUB_ID + 3, yield e.browser.cookie.get(r.SUB_ID + 3)],
                    [c.SUB_ID + 4, yield e.browser.cookie.get(r.SUB_ID + 4)],
                    [c.SUB_ID + 5, yield e.browser.cookie.get(r.SUB_ID + 5)],
                    [c.TRACKING_AGENT, yield e.browser.cookie.get(r.TRACKING_AGENT)],
                    [c.RECEIVED, "1"],
                    [c.EXPIRE_TIME, n.getTime()]
                ];
            yield Promise.all(a.map(l => l && e.browser.cookie.set(l).then())), yield Promise.all(m.map(g => o(null, [g], function*([l, f]) {
                if (!(!f || f === "null" || f === "undefined")) return e.browser.localStorage.setItem(String(l), String(f)).then()
            })))
        })
    }

    function ve(i, e) {
        return o(this, null, function*() {
            let t = String(i.getAffiliateId()),
                n = i.getHashCode(),
                a = String(new Date().getTime()),
                m = i.getSource(),
                l = [p(r.AFFILIATE_ID, t, 1), p(r.AFFILIATE_HASH_CODE, n, 1), p(r.LAST_CLICK, a, 1), p(r.SOURCE, m, 1), p(r.RECEIVED, "0", 1), p(r.SUB_ID + 1, i.getSubId(1), 1), p(r.SUB_ID + 2, i.getSubId(2), 1), p(r.SUB_ID + 3, i.getSubId(3), 1), p(r.SUB_ID + 4, i.getSubId(4), 1), p(r.SUB_ID + 5, i.getSubId(5), 1), p(r.TRACKING_AGENT, P.ShopifyWebPixel, 1)],
                f = [
                    [c.AFFILIATE_ID, t],
                    [c.AFFILIATE_HASH_CODE, n],
                    [c.LAST_CLICK, a],
                    [c.SOURCE, m],
                    [c.RECEIVED, "0"],
                    [c.SUB_ID + 1, i.getSubId(1)],
                    [c.SUB_ID + 2, i.getSubId(2)],
                    [c.SUB_ID + 3, i.getSubId(3)],
                    [c.SUB_ID + 4, i.getSubId(4)],
                    [c.SUB_ID + 5, i.getSubId(5)]
                ];
            yield Promise.all(l.map(g => o(null, null, function*() {
                return g && (yield e.browser.cookie.set(g).then())
            }))), yield Promise.all(f.map(Ie => o(null, [Ie], function*([g, T]) {
                return g && T && (yield e.browser.localStorage.setItem(String(g), String(T)))
            })))
        })
    }
    var w = class {
        constructor(e) {
            this.extensionApi = e;
            s(this, "eventName", "affiliate_tracked")
        }
        getTrackedIdentifier() {
            return o(this, null, function*() {
                return yield new u("", this.extensionApi).getTrackedIdentifier()
            })
        }
    };
    var me = class {
            constructor() {
                s(this, "_event");
                s(this, "_eventContext");
                s(this, "_cookieApi")
            }
            handle(e) {
                return o(this, null, function*() {
                    this._event = e, this._eventContext = e.getEvent().context, this._cookieApi = e.getExtensionApi().browser.cookie;
                    let t = this.getSearchParams().get(k.REDIRECT_BACK_URL);
                    if (!this.isReferralLink()) return;
                    if (!(yield this.mustRePostClickTracking())) {
                        t && (yield this._cookieApi.set(r.REDIRECT_BACK_URL, this.getSearchParams().toString()));
                        return
                    }
                    let a = {
                        identifier: this.getIdentifier().parseFromURL(),
                        shopify_domain: this._event.getExtensionApi().init.data.shop.myshopifyDomain,
                        event: A(_({}, this._event.getEvent()), {
                            clientId: this._event.getEvent().clientId || (yield this._cookieApi.get(r.UPPROMOTE_CLIENT_ID))
                        })
                    };
                    yield this.storeLocalTrackingVars(this.getIdentifier()).then(() => o(this, null, function*() {
                        h(E().LOGS, a, "POST").then(m => o(this, null, function*() {
                            m.status == "SUCCESS" && (yield this.storeServerTrackingVars(m), a.event.clientId || d.extensionApi.browser.localStorage.setItem(c.WAITING_FOR_COOKIE_CONSENT, JSON.stringify(_({
                                cid: m.cid
                            }, this._event.getEvent()))).then()), t && (yield this._cookieApi.set(r.REDIRECT_BACK_URL, this.getSearchParams().toString()))
                        }))
                    }))
                })
            }
            isReferralLink() {
                return !!this.getSearchParams().get("sca_ref")
            }
            getIdentifier() {
                return new u(this._eventContext.document.location.search, this._event.getExtensionApi())
            }
            getSearchParams() {
                return new URLSearchParams(this._eventContext.document.location.search)
            }
            mustRePostClickTracking() {
                return o(this, null, function*() {
                    let e = yield this._cookieApi.get(r.RECEIVED);
                    if (!e || e === "0") return !0;
                    let t = yield this._cookieApi.get(r.LAST_CLICK);
                    if (!t) return !0;
                    let n = new Date().getTime(),
                        a = Number(t);
                    return n - a > 60 * 1e3
                })
            }
            storeLocalTrackingVars(e) {
                return o(this, null, function*() {
                    yield ve(e, this._event.getExtensionApi())
                })
            }
            storeServerTrackingVars(e) {
                return o(this, null, function*() {
                    e.data && (yield te(e, this._event.getExtensionApi()), y(new w(this._event.getExtensionApi())))
                })
            }
        },
        re = me;
    var de = class {
            constructor() {
                s(this, "event");
                s(this, "extensionApi")
            }
            handle(e) {
                this.event = e.getEvent(), this.extensionApi = e.getExtensionApi(), this.postCheckoutToken().then()
            }
            postCheckoutToken() {
                return o(this, null, function*() {
                    if (!(yield this.needPostCheckoutToken())) return;
                    let e = yield this.getTrackingBody(), t = S().API_ENDPOINT;
                    h(`${t}/api/ct_tk`, e, "POST").then().catch()
                })
            }
            getTrackingBody() {
                return o(this, null, function*() {
                    let e = {
                            aid: yield this.getAffiliateId(), ct_tk: this.getCheckoutToken(), hc: yield this.getAffiliateHashCode(), order_id: this.getOrderId(), s: this.getShopName(), shopify_domain: this.getMyShopifyDomain()
                        },
                        t = yield this.getSource();
                    return t && (e.sca_source = t), e
                })
            }
            needPostCheckoutToken() {
                return o(this, null, function*() {
                    let e = yield this.getAffiliateId(), t = yield this.getExpireTime();
                    return !e || !t ? !1 : t > new Date().getTime()
                })
            }
            getLocalStorageData(e) {
                return o(this, null, function*() {
                    let t = yield this.extensionApi.browser.localStorage.getItem(e);
                    return t || null
                })
            }
            getAffiliateId() {
                return o(this, null, function*() {
                    let e = yield this.getLocalStorageData("scaaf_aid");
                    return e ? +e : null
                })
            }
            getExpireTime() {
                return o(this, null, function*() {
                    let e = yield this.getLocalStorageData("scaaf_ep");
                    return e ? +e : null
                })
            }
            getAffiliateHashCode() {
                return o(this, null, function*() {
                    return this.getLocalStorageData("scaaf_hc")
                })
            }
            getSource() {
                return o(this, null, function*() {
                    return this.getLocalStorageData("scaaf_sca_source_secomus")
                })
            }
            getCheckoutToken() {
                return this.event.data.checkout.token
            }
            getOrderId() {
                return +this.event.data.checkout.order.id
            }
            getShopName() {
                return this.getMyShopifyDomain().replace(".myshopify.com", "")
            }
            getMyShopifyDomain() {
                return this.extensionApi.init.data.shop.myshopifyDomain
            }
        },
        ye = de;
    var F = class {
        constructor() {
            s(this, "event");
            s(this, "extensionApi")
        }
        handle(e) {
            this.event = e.getEvent(), this.extensionApi = e.getExtensionApi(), this.postOrderTracking().then()
        }
        postOrderTracking() {
            return o(this, null, function*() {
                let t = yield new u("", this.extensionApi).getTrackedIdentifier();
                if (!t || !t.affiliate_id || !this.event.data.checkout.order || !(yield this.acceptedFromServer())) return;
                let a = {
                    identifier: t,
                    shopify_domain: t.shopify_domain,
                    event: A(_({}, this.event), {
                        clientId: this.event.clientId || (yield this.extensionApi.browser.cookie.get(r.UPPROMOTE_CLIENT_ID))
                    })
                };
                h(E().LOGS, a, "POST").then(() => {
                    this.removePreviousCartOrderTracking()
                })
            })
        }
        acceptedFromServer() {
            return o(this, null, function*() {
                let e = this.extensionApi.browser.cookie,
                    t = this.extensionApi.browser.localStorage;
                return (yield e.get(r.RECEIVED)) === "1" || (yield t.getItem(r.RECEIVED)) === "1" ? !0 : (yield t.getItem(c.OLD_RECEIVED)) === "true"
            })
        }
        removePreviousCartOrderTracking() {
            this.extensionApi.browser.cookie.set(p(r.PREV_ORDER_TRACKING_ID, null, 0)).then()
        }
    };
    var O = "_upl";
    var De = i => o(null, null, function*() {
            return new Promise(e => setTimeout(e, i))
        }),
        B = i => o(null, null, function*() {
            return new Promise((e, t) => o(null, null, function*() {
                let n = setInterval(() => o(null, null, function*() {
                    let a = yield i();
                    a && (e(a), clearInterval(n))
                }), 500);
                setTimeout(() => {
                    clearInterval(n), t("Waiting timeout.")
                }, 1e4)
            }))
        });
    var G = class {
        constructor() {
            s(this, "extensionApi");
            s(this, "urlParams");
            s(this, "cookieApi");
            s(this, "storageApi");
            s(this, "event");
            s(this, "identifier");
            s(this, "isLinkerLink")
        }
        initialEventProperties(e) {
            this.extensionApi = e.getExtensionApi(), this.urlParams = new URLSearchParams(e.getEvent().context.document.location.search), this.cookieApi = e.getExtensionApi().browser.cookie, this.storageApi = e.getExtensionApi().browser.localStorage, this.event = e.getEvent(), this.identifier = new u("", this.extensionApi)
        }
        handle(e) {
            return o(this, null, function*() {
                if (this.initialEventProperties(e), this.isLinkerLink = this.isLinkerTracking(), this.isLinkerLink) {
                    yield this.handleLinkerTracking();
                    return
                }
                let t = yield B(() => o(this, null, function*() {
                    return yield this.cookieApi.get(r.UPPROMOTE_PIXEL_CART_TRACKING_FINISHED)
                }));
                if (this.cookieApi.set(p(r.UPPROMOTE_PIXEL_CART_TRACKING_FINISHED, "", 0)).then(), t == "SUCCESS") return;
                let n = yield this.identifier.getTrackedIdentifier();
                n && (yield this.postCartTracking((yield this.getCartId()) || "", n))
            })
        }
        handleLinkerTracking() {
            return o(this, null, function*() {
                let e = this.urlParams.get(k.LINKER);
                yield B(() => o(this, null, function*() {
                    let l = yield this.storageApi.getItem(c.LINKER_COMPLETED);
                    return l && l === e ? l : null
                }));
                let n = yield new u("", this.extensionApi).getTrackedIdentifier(), a = yield this.getCartId();
                if (!n || !a) return;
                let m = `${n.affiliate_id}:${a}`;
                (yield this.currentCartIsTracked(m)) || (yield this.postCartTracking(a, n))
            })
        }
        postCartTracking(e, t) {
            return o(this, null, function*() {
                let n = A(_({}, this.event), {
                    origin_cart_id: e
                });
                if (this.isLinkerLink) {
                    let l = yield this.cookieApi.get(r.SHOPIFY_CLIENT_ID);
                    l && (n.clientId = l)
                }
                if (!n.clientId) {
                    let l = yield this.cookieApi.get(r.UPPROMOTE_CLIENT_ID);
                    l && (n.clientId = l)
                }
                let a = {
                    event: n,
                    identifier: t,
                    shopify_domain: this.extensionApi.init.data.shop.myshopifyDomain
                };
                (yield h(E().LOGS, a, "POST")).status === "SUCCESS" && (yield this.writeTrackedCardId(t.affiliate_id, e))
            })
        }
        getCartId() {
            return o(this, null, function*() {
                var n;
                let e = ((n = this.extensionApi.init.data.cart) == null ? void 0 : n.id) || null,
                    t = yield this.extensionApi.browser.cookie.get(r.SHOP_CART_ID);
                return !t && !e ? this.event.context.document.location.pathname.split("/").pop() : t && e ? t.split("?key=").shift() === e ? t : e : e || t
            })
        }
        currentCartIsTracked(e) {
            return o(this, null, function*() {
                let t = yield this.storageApi.getItem(c.PREV_CART_TRACKED_ID);
                return t ? e === t : !1
            })
        }
        writeTrackedCardId(e, t) {
            return o(this, null, function*() {
                yield this.storageApi.setItem(c.PREV_CART_TRACKED_ID, `${e}:${t}`)
            })
        }
        isLinkerTracking() {
            return !!this.urlParams.get(O)
        }
    };
    var K = class {
        constructor() {
            s(this, "extensionApi");
            s(this, "urlParams");
            s(this, "cookieApi");
            s(this, "storageApi");
            s(this, "eventData");
            s(this, "trackedIdentifier");
            s(this, "event")
        }
        handle(e) {
            return o(this, null, function*() {
                yield this.initialEventProperties(e), yield this.handleThirdPartyCartTracking()
            })
        }
        handleThirdPartyCartTracking() {
            return o(this, null, function*() {
                let e = this.getCartId(),
                    t = this.getShopDomain(),
                    n = this.isLinkerTracking();
                if (!(!e || !t || n)) try {
                    if (this.trackedIdentifier) {
                        yield this.setUpPromotePixelCartTrackingFinished("REJECTED");
                        return
                    }
                    let a = yield this.getOrderTrackingByCartId(e, t);
                    a.status == "SUCCESS" && (yield this.writeTrackingToStorage(a), y(new w(this.extensionApi))), yield this.setUpPromotePixelCartTrackingFinished(a.status)
                } catch (a) {
                    yield this.setUpPromotePixelCartTrackingFinished("REJECTED")
                }
            })
        }
        getCartId() {
            let e = this.extensionApi.init.data.cart.id;
            return e || this.eventData.context.document.location.pathname.split("/").pop()
        }
        getShopDomain() {
            return this.extensionApi.init.data.shop.myshopifyDomain
        }
        initialEventProperties(e) {
            return o(this, null, function*() {
                this.event = e, this.extensionApi = e.getExtensionApi(), this.urlParams = new URLSearchParams(e.getEvent().context.document.location.search), this.cookieApi = e.getExtensionApi().browser.cookie, this.storageApi = e.getExtensionApi().browser.localStorage, this.eventData = e.getEvent();
                let t = new u("", this.extensionApi);
                this.trackedIdentifier = yield t.getTrackedIdentifier()
            })
        }
        getOrderTrackingByCartId(e, t) {
            return o(this, null, function*() {
                return h(E().CONTINUE_CART_TRACKING, {
                    origin_cart_id: e,
                    shopify_domain: t
                }, "POST")
            })
        }
        writeTrackingToStorage(e) {
            return o(this, null, function*() {
                var f, g, T, Ie, Ee;
                let t = new Date(e.data.expired_at),
                    n = new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                    a = yield this.cookieApi.get(r.CLICK_ID);
                if (e.data.click_id === a) return;
                let m = "." + this.event.getEvent().context.window.location.host;
                [p(r.AFFILIATE_ID, String(e.data.affiliate_id), t), p(r.AFFILIATE_HASH_CODE, e.data.affiliate_hash_code, t), p(r.LAST_CLICK, e.data.last_click, t), p(r.RECEIVED, "1", t), p(r.SHOPIFY_CLIENT_ID, e.data.client_id, n, m), p(r.UPPROMOTE_CLIENT_ID, e.data.client_id, n, m), p(r.SHOPIFY_CLIENT_ID, e.data.client_id, n), p(r.SOURCE, e.data.sca_source, t), p(r.CLICK_ID, e.data.click_id, t), p(r.SUB_ID + "1", ((f = e.data) == null ? void 0 : f.sub_id1) || null, t), p(r.SUB_ID + "2", ((g = e.data) == null ? void 0 : g.sub_id2) || null, t), p(r.SUB_ID + "3", ((T = e.data) == null ? void 0 : T.sub_id3) || null, t), p(r.SUB_ID + "4", ((Ie = e.data) == null ? void 0 : Ie.sub_id4) || null, t), p(r.SUB_ID + "5", ((Ee = e.data) == null ? void 0 : Ee.sub_id5) || null, t), p(r.TRACKING_AGENT, e.data.tracking_agent, t)].forEach(Ce => {
                    Ce && this.cookieApi.set(Ce).then()
                })
            })
        }
        isLinkerTracking() {
            return !!this.urlParams.get(O)
        }
        setUpPromotePixelCartTrackingFinished(e) {
            return o(this, null, function*() {
                yield this.cookieApi.set(p(r.UPPROMOTE_PIXEL_CART_TRACKING_FINISHED, e, new Date(new Date().getTime() + 15e3)))
            })
        }
    };

    function Le(i) {
        let e = 4294967295;
        for (let t = 0; t < i.length; t++) {
            let n = i.charCodeAt(t);
            e ^= n;
            for (let a = 0; a < 8; a++) e = e >>> 1 ^ (e & 1 ? 3988292384 : 0)
        }
        return ((e ^ 4294967295) >>> 0).toString(36)
    }

    function Re(i, e = null) {
        let t = i.navigator,
            n = [...t.languages],
            a = [t.userAgent, new Date().getTimezoneOffset(), t.language, n.reverse().indexOf(t.language)];
        e && a.push(e);
        let m = a.join("*");
        return Le(m)
    }

    function be(i) {
        let e = i.split("*");
        return e.reduce((t, n, a) => (a % 2 === 0 && (t[n] = e[a + 1]), t), {})
    }

    function D(i, e, t = !1) {
        return o(this, null, function*() {
            let n = d.extensionApi,
                a = yield n.browser.localStorage.getItem(c.EXPOSE_ACTION_CONTEXT), m = a ? JSON.parse(a) : [];
            t && (m = m.filter(l => l.n !== i)), m.push({
                n: i,
                d: e
            }), yield n.browser.localStorage.setItem(c.EXPOSE_ACTION_CONTEXT, JSON.stringify(m))
        })
    }
    var v = class {
        constructor(e, t) {
            this.extensionApi = e;
            this.identifier = t
        }
        handle() {
            return o(this, null, function*() {
                if (d.calling_discount_code) return;
                d.calling_discount_code = !0;
                let e = yield this.getDiscountCode();
                yield this.setDiscountCodeCookie(e), d.calling_discount_code = !1
            })
        }
        setDiscountCodeCookie(e) {
            return o(this, null, function*() {
                e.response.coupon && (yield this.extensionApi.browser.cookie.set(p(r.SHOPIFY_DISCOUNT_CODE, e.response.coupon)), yield D("applyDiscountCode", e.response.coupon, !0)), yield D("applyAntiLeak", e.response, !0)
            })
        }
        getDiscountCode() {
            return o(this, null, function*() {
                return yield h(E().GET_AFF_DISCOUNT, {
                    shopify_domain: this.extensionApi.init.data.shop.myshopifyDomain,
                    identifier: this.identifier
                }, "POST")
            })
        }
    };
    var V = class {
        constructor(e, t, n) {
            this.event = e;
            this.urlParams = t;
            this.extensionApi = n;
            s(this, "cookieApi");
            s(this, "storageApi");
            s(this, "parsedLinkerParam");
            this.cookieApi = n.browser.cookie, this.storageApi = n.browser.localStorage
        }
        run() {
            return o(this, null, function*() {
                return this.parseLinkerParam(), this.validLinkParam() ? ((yield this.currentLinkerIsTracked()) || (yield this.trackLinkerAffiliate()), !0) : !1
            })
        }
        validLinkParam() {
            if (!this.parsedLinkerParam) return !1;
            let e = Re(this.event.context),
                t = this.parsedLinkerParam[1] || "";
            return e === t
        }
        parseLinkerParam() {
            let e = this.urlParams.get(O) || "";
            return this.parsedLinkerParam = be(e), this.parsedLinkerParam
        }
        currentLinkerIsTracked() {
            return o(this, null, function*() {
                let e = yield this.cookieApi.get(r.CLICK_ID);
                return e ? this.parsedLinkerParam._ucid === e : !1
            })
        }
        trackLinkerAffiliate() {
            return o(this, null, function*() {
                let e = {
                        identifier: A(_({}, this.parsedLinkerParam), {
                            _utz: new Date().getTimezoneOffset()
                        }),
                        event: this.event,
                        shopify_domain: this.extensionApi.init.data.shop.myshopifyDomain
                    },
                    t = yield h(E().LINKER_TRACK, e, "POST");
                if (t.status !== "SUCCESS" || !t.affiliate || !t.click) return;
                yield this.setTrackingCookie(t);
                let a = yield new u("", this.extensionApi).getTrackedIdentifier();
                yield new v(this.extensionApi, a).handle(), yield De(500), y(new w(this.extensionApi))
            })
        }
        setTrackingCookie(e) {
            return o(this, null, function*() {
                let t = e.click,
                    n = e.affiliate,
                    a = new Date(t.expire);
                if (a.getTime() < Date.now()) return;
                let l = "." + this.event.context.window.location.host,
                    g = [p(r.CLICK_ID, String(t._id), a), p(r.AFFILIATE_ID, String(t.affiliate_id), a), p(r.AFFILIATE_HASH_CODE, n.hash_code, a), p(r.LAST_CLICK, new Date(t.updated_at).getTime().toString(), a), p(r.SOURCE, t.source, a), p(r.SHOPIFY_CLIENT_ID, t.client_id, 360, l), p(r.UPPROMOTE_CLIENT_ID, t.client_id, 360, l), p(r.RECEIVED, "1", a), p(r.SUB_ID + 1, t.sub_id1, a), p(r.SUB_ID + 2, t.sub_id2, a), p(r.SUB_ID + 3, t.sub_id3, a), p(r.SUB_ID + 4, t.sub_id4, a), p(r.SUB_ID + 5, t.sub_id5, a), p(r.TRACKING_AGENT, P.UpPixel, a)].filter(T => !!T);
                yield Promise.all(g.map(T => o(this, null, function*() {
                    return this.cookieApi.set(T)
                })))
            })
        }
    };
    var oe = class {
        constructor() {
            s(this, "searchParams")
        }
        handle(e) {
            return o(this, null, function*() {
                this.searchParams = new URLSearchParams(e.getEvent().context.document.location.search);
                let t = this.searchParams.get(k.LINKER);
                t && new V(e.getEvent(), this.searchParams, e.getExtensionApi()).run().then(() => {
                    e.getExtensionApi().browser.localStorage.setItem(c.LINKER_COMPLETED, t)
                })
            })
        }
    };
    var x = class {
        constructor(e, t) {
            this.event = e;
            this.extensionApi = t;
            s(this, "listenAllEvents", !1)
        }
    };
    var Ne = 30;

    function et() {
        return crypto.randomUUID()
    }

    function le() {
        return o(this, null, function*() {
            let i = yield d.extensionApi.browser.localStorage.getItem(c.ESSENTIAL_WP_METRICS);
            return i ? JSON.parse(i) : []
        })
    }

    function Oe(i) {
        return o(this, null, function*() {
            let e = i.length;
            e > Ne && (i = i.slice(e - Ne)), yield d.extensionApi.browser.localStorage.setItem(c.ESSENTIAL_WP_METRICS, JSON.stringify(i))
        })
    }

    function Ue(i) {
        return o(this, null, function*() {
            return (yield le()).find(t => t.i == i)
        })
    }

    function Fe(i, e) {
        return o(this, null, function*() {
            let t = yield le(), n = t.find(a => a.i == i);
            n && (n.d = e, yield Oe(t))
        })
    }

    function ne(i, e, t = 1) {
        return o(this, null, function*() {
            let n = et(),
                a = yield le(), m = a.filter(f => f.n != i), l = a.filter(f => f.n == i).sort((f, g) => g.t - f.t).filter((f, g) => g + 1 < t);
            return a = [...m, ...l].sort((f, g) => f.t - g.t), a.push({
                i: n,
                n: i,
                d: e,
                t: new Date().getTime()
            }), yield Oe(a), n
        })
    }
    var M = class extends x {
        constructor() {
            super(...arguments);
            s(this, "registerEventName", "uppromote:ping")
        }
        handle() {
            return o(this, null, function*() {
                let t = () => o(this, null, function*() {
                        let a = this.event,
                            m = new Date().getTime(),
                            l = a.customData.id,
                            f = yield Ue(l);
                        f && (f.d.resAt = m, yield Fe(l, A(_({}, f.d), {
                            resAt: m
                        })))
                    }),
                    n = JSON.parse(d.extensionApi.settings.metaData || "{}");
                if (n.simulatorPingLatency) {
                    setTimeout(t, n.simulatorPingLatency);
                    return
                }
                t().then()
            })
        }
    };
    var R = class {};
    var b = class extends R {
        handle() {
            this.prepareCartTracking({
                origin_event: "affiliate_tracked"
            }).then()
        }
        prepareCartTracking(e) {
            return o(this, null, function*() {
                let t = yield this.getCartId();
                if (!t) return;
                let a = yield new u("", d.extensionApi).getTrackedIdentifier();
                if (!a) return;
                let m = this.generatePrevTrackedCartId(a, t);
                (yield this.getPrevTrackedCartId()) !== m && this.postCartTracking(t, a, e).then(() => {
                    d.extensionApi.browser.localStorage.setItem(c.PREV_CART_TRACKED_ID, m).then()
                })
            })
        }
        getCartId() {
            return o(this, null, function*() {
                var n;
                let e = yield d.extensionApi.browser.cookie.get(r.SHOP_CART_ID), t = ((n = d.extensionApi.init.data.cart) == null ? void 0 : n.id) || null;
                return e && t ? e.split("?key=").shift() === t ? e : t : t || e
            })
        }
        generatePrevTrackedCartId(e, t) {
            return `${e.affiliate_id}:${t}`
        }
        getPrevTrackedCartId() {
            return o(this, null, function*() {
                return d.extensionApi.browser.localStorage.getItem(c.PREV_CART_TRACKED_ID)
            })
        }
        postCartTracking(e, t, n) {
            return o(this, null, function*() {
                let a = {
                    event: {
                        origin_event: n,
                        name: "cart_updated",
                        origin_cart_id: e
                    },
                    identifier: t,
                    shopify_domain: d.extensionApi.init.data.shop.myshopifyDomain
                };
                return yield h(E().LOGS, a, "POST")
            })
        }
    };

    function H() {
        return o(this, null, function*() {
            let i = yield new u("", d.extensionApi).getTrackedIdentifier(), e = JSON.parse(d.extensionApi.settings.metaData || "{}").customize_name;
            e && (yield D("pingCustomize", {
                af: {
                    tracked: !!i,
                    id: i ? i.affiliate_id : void 0
                },
                cm_name: e
            }, !0))
        })
    }
    var W = class extends R {
        constructor() {
            super(...arguments);
            s(this, "extensionApi");
            s(this, "identifier")
        }
        handle(t) {
            return o(this, null, function*() {
                this.extensionApi = t.extensionApi, this.identifier = yield t.getTrackedIdentifier(), this.identifier && (yield this.getAffiliateDiscountCode(), this.pushCartTracking().then()), yield H()
            })
        }
        getAffiliateDiscountCode() {
            return o(this, null, function*() {
                yield new v(this.extensionApi, this.identifier).handle()
            })
        }
        pushCartTracking() {
            return o(this, null, function*() {
                new b().handle()
            })
        }
    };

    function L(i) {
        return i.startsWith("http") ? new URL(i).searchParams.has(k.REF_CODE) : new URLSearchParams(i).has(k.REF_CODE)
    }
    var J = class {
        constructor() {
            s(this, "event");
            s(this, "eventContext")
        }
        handle(e) {
            return o(this, null, function*() {
                this.event = e, this.eventContext = e.getEvent().context, (yield this.needToCallApi()) && (yield this.getAffiliateDiscountCode())
            })
        }
        needToCallApi() {
            return o(this, null, function*() {
                let e = L(this.eventContext.window.location.search),
                    t = this.eventContext.window.location.pathname.includes("checkout"),
                    n = this.eventContext.window.location.search.includes(k.LINKER),
                    m = yield new u("", this.event.getExtensionApi()).getTrackedIdentifier();
                return e || t || n ? !1 : !!m
            })
        }
        getAffiliateDiscountCode() {
            return o(this, null, function*() {
                let t = yield new u("", this.event.getExtensionApi()).getTrackedIdentifier();
                if (!t) return;
                yield new v(this.event.getExtensionApi(), t).handle()
            })
        }
    };
    var X = class {
        handle(e) {
            return o(this, null, function*() {
                e.getExtensionApi().browser.cookie.set(p("_up_apd", "removed", 0)).then(), D("cleanOldData", !0, !0).then()
            })
        }
    };
    var N = class {
        constructor(e, t) {
            s(this, "eventName");
            s(this, "_event");
            s(this, "_extensionApi");
            this._event = e, this._extensionApi = t, this.eventName = e.name
        }
        getEventContext() {
            return this._event.context
        }
        getEvent() {
            return this._event
        }
        getExtensionApi() {
            return this._extensionApi
        }
    };
    var fe = class {
            constructor() {
                s(this, "event");
                s(this, "eventContext");
                s(this, "cookieApi")
            }
            handle(e) {
                return o(this, null, function*() {
                    this.event = e, this.eventContext = e.getEvent().context, this.cookieApi = e.getExtensionApi().browser.cookie, this.handleEssentialCoverage().then()
                })
            }
            handleEssentialCoverage() {
                return o(this, null, function*() {
                    if (L(this.event.getEvent().context.document.location.search)) return;
                    let t = yield this.event.getExtensionApi().browser.localStorage.getItem(c.ESSENTIAL_LAST_VIEWED_PAGE_CONTEXT);
                    if (!t) return;
                    this.event.getExtensionApi().browser.localStorage.removeItem(c.ESSENTIAL_LAST_VIEWED_PAGE_CONTEXT).then();
                    let n = JSON.parse(t),
                        a = new Date(n.timestamp),
                        m = Math.floor((new Date().getTime() - a.getTime()) / 6e4),
                        l = new u(n.context.document.location.search, this.event.getExtensionApi()),
                        g = yield new u("", this.event.getExtensionApi()).getTrackedIdentifier();
                    g && g.affiliate_id == l.getAffiliateId() || m >= 1 || new re().handle(new N(A(_({}, this.event.getEvent()), {
                        context: n.context
                    }), this.event.getExtensionApi())).then()
                })
            }
        },
        Be = fe;
    var j = class extends x {
        constructor() {
            super(...arguments);
            s(this, "registerEventName", "");
            s(this, "listenAllEvents", !0);
            s(this, "skipRoutesPatterns", ["/checkout"])
        }
        handle() {
            return o(this, null, function*() {
                let t = this.extensionApi.init.context.document.location.pathname;
                this.skipRoutesPatterns.some(n => t.startsWith(n)) || L(this.extensionApi.init.context.document.location.search) || (clearTimeout(d.cartTrackingTimeoutId), d.cartTrackingTimeoutId = setTimeout(() => {
                    this.prepareCartTracking().then()
                }, 300))
            })
        }
        prepareCartTracking() {
            return o(this, null, function*() {
                new b().prepareCartTracking(this.event).then()
            })
        }
    };
    var Y = class {
        handle(e) {
            return o(this, null, function*() {
                if (L(d.extensionApi.init.context.document.location.href)) return;
                let n = yield new u("", d.extensionApi).getTrackedIdentifier();
                if (!n || (yield d.extensionApi.browser.cookie.get(r.AFFILIATE_INFO))) return;
                let m = yield h(E().FETCH_AFFILIATE_INFO_BY_CLICK_ID, {
                    identifier: n,
                    event: e,
                    shopify_domain: n.shopify_domain
                }, "POST");
                if (m.status !== "SUCCESS") return;
                let l = m.cid,
                    f = yield d.extensionApi.browser.cookie.get(r.CLICK_ID);
                l === f && (yield d.extensionApi.browser.cookie.set(p(r.AFFILIATE_INFO, JSON.stringify({
                    first_name: m.data.first_name,
                    last_name: m.data.last_name,
                    company: m.data.company,
                    personal_detail: m.data.personal_detail
                }), new Date(m.data.expire_at))), yield d.extensionApi.browser.localStorage.setItem(c.AFFILIATE_INFO, JSON.stringify({
                    first_name: m.data.first_name,
                    last_name: m.data.last_name,
                    company: m.data.company,
                    personal_detail: m.data.personal_detail
                })))
            })
        }
        profileIsFetched() {
            return o(this, null, function*() {
                return !!(yield d.extensionApi.browser.cookie.get(r.AFFILIATE_INFO))
            })
        }
    };
    var $ = class {
        handle(e) {
            return o(this, null, function*() {
                new Y().handle(e.getEvent()).then()
            })
        }
    };
    var z = class extends x {
        constructor() {
            super(...arguments);
            s(this, "registerEventName", "uppromote:simulator-error")
        }
        handle() {
            return o(this, null, function*() {
                let n = this.event.customData.message;
                throw new Error(n)
            })
        }
    };
    var ge = class {
            constructor() {
                s(this, "event")
            }
            handle() {
                return o(this, null, function*() {
                    yield H()
                })
            }
        },
        Ge = ge;
    var q = class extends x {
        constructor() {
            super(...arguments);
            s(this, "registerEventName", "");
            s(this, "listenAllEvents", !0)
        }
        handle() {
            return o(this, null, function*() {
                clearTimeout(d.pushClientIdTimeoutId), d.pushClientIdTimeoutId = setTimeout(() => {
                    this.handleClientID().then()
                }, 300)
            })
        }
        handleClientID() {
            return o(this, null, function*() {
                if (!this.event.clientId) return;
                let t = yield d.extensionApi.browser.localStorage.getItem(c.WAITING_FOR_COOKIE_CONSENT);
                if (!t) return;
                let a = yield new u("", d.extensionApi).getTrackedIdentifier();
                if (!a) return;
                let m = JSON.parse(t);
                h(E().COOKIE_CONSENT_CHANGE, {
                    shopify_domain: d.extensionApi.init.data.shop.myshopifyDomain,
                    cid: a.cid,
                    event: A(_({}, m), {
                        clientId: this.event.clientId
                    })
                }, "POST").finally(() => {
                    d.extensionApi.browser.localStorage.removeItem(c.WAITING_FOR_COOKIE_CONSENT)
                })
            })
        }
    };
    var ue = {
            page_viewed: [new re, new oe, new J, new X, new Be, new $, new Ge],
            checkout_completed: [new F, new ye],
            checkout_started: [new G, new K]
        },
        Ke = [M, j, z, q],
        Ve = {
            affiliate_tracked: [new W]
        };
    var Q = class {
        findListeners(e) {
            let t = Object.keys(ue).find(n => n === e);
            return t ? ue[t] : []
        }
    };
    var Me = (e => (e.RECONNECT_STATUS = "_up_reconnect_status", e))(Me || {}),
        _e = Me;
    var he = class {
            constructor(e, t) {
                this.extApi = e;
                this.eventContext = t
            }
            startReconnect() {
                return o(this, null, function*() {
                    if (d.reconnecting) return;
                    if (d.reconnecting = !0, !(yield this.needToReconnect())) {
                        d.reconnecting = !1;
                        return
                    }
                    try {
                        yield this.reconnect()
                    } catch (t) {
                        console.error(t)
                    } finally {
                        d.reconnecting = !1
                    }
                })
            }
            needToReconnect() {
                return o(this, null, function*() {
                    if (this.isAffiliateLink() || (yield this.extApi.browser.sessionStorage.getItem(_e.RECONNECT_STATUS)) === "1") return !1;
                    let t = yield this.extApi.browser.cookie.get(r.AFFILIATE_ID), n = yield this.extApi.browser.cookie.get(r.RECEIVED);
                    return t && n === "1" ? !1 : t && n === "0"
                })
            }
            reconnect() {
                return o(this, null, function*() {
                    let t = yield new u("", this.extApi).getIdentifierFromCookie(!0);
                    if (!t.affiliate_id) return;
                    let n = {
                            identifier: t,
                            event: yield this.generateReconnectEvent(), shopify_domain: this.extApi.init.data.shop.myshopifyDomain
                        },
                        a = yield h(E().LOGS, n, "POST");
                    yield te(a, this.extApi), yield this.extApi.browser.sessionStorage.setItem(_e.RECONNECT_STATUS, "1"), y(new w(this.extApi))
                })
            }
            isAffiliateLink() {
                return new URLSearchParams(this.eventContext.window.location.search).has(k.REF_CODE)
            }
            generateReconnectEvent() {
                return o(this, null, function*() {
                    return {
                        name: "upe_reconnect",
                        clientId: (yield this.extApi.browser.cookie.get(r.SHOPIFY_CLIENT_ID)) || (yield this.extApi.browser.cookie.get(r.UPPROMOTE_CLIENT_ID)),
                        context: this.eventContext,
                        data: {},
                        id: null,
                        timestamp: new Date().toISOString()
                    }
                })
            }
        },
        He = he;
    var tt = i => o(null, null, function*() {
            yield new He(i.getExtensionApi(), i.getEventContext()).startReconnect(), yield B(() => o(null, null, function*() {
                return !d.reconnecting
            }));
            let n = new Q().findListeners(i.eventName);
            for (let a of n) a.handle(i)
        }),
        We = i => {
            for (let e of Ke) {
                let t = new e(i.event, i.extensionApi);
                (t.registerEventName === i.event.name || t.listenAllEvents) && t.handle()
            }
        },
        y = i => {
            for (let e of Ve[i.eventName]) e.handle(i, i.extensionApi)
        },
        ae = tt;
    var Z = class {
        constructor(e, t) {
            s(this, "eventName");
            s(this, "_event");
            s(this, "_extensionApi");
            this._event = e, this._extensionApi = t, this.eventName = e.name
        }
        getEventContext() {
            return this._event.context
        }
        getEvent() {
            return this._event
        }
        getExtensionApi() {
            return this._extensionApi
        }
    };

    function it(i) {
        i.customerPrivacy.analyticsProcessingAllowed || i.customerPrivacy.marketingAllowed
    }
    var Je = it;
    var ee = class {
        constructor(e, t) {
            s(this, "eventName");
            s(this, "_event");
            s(this, "_extensionApi");
            this._event = e, this._extensionApi = t, this.eventName = e.name
        }
        getEventContext() {
            return this._event.context
        }
        getEvent() {
            return this._event
        }
        getExtensionApi() {
            return this._extensionApi
        }
    };

    function Xe() {
        globalThis.onerror = i => {
            ne("wp:error", i, 5)
        }, globalThis.onunhandledrejection = i => {
            ne("wp:error", i.reason.message, 5)
        }, globalThis.onrejectionhandled = i => {
            ne("wp:error", i.reason.message, 5)
        }
    }
    ce(i => {
        Xe(), Pe(A(_({}, i.settings), {
            extensionApi: i
        })), i.settings.disable_logger_message || U("Running..."), i.analytics.subscribe("page_viewed", e => {
            ae(new N(e, i)).then()
        }), i.analytics.subscribe("checkout_completed", e => {
            ae(new Z(e, i)).then()
        }), i.analytics.subscribe("checkout_started", e => {
            ae(new ee(e, i)).then()
        }), i.analytics.subscribe("all_events", e => {
            We({
                type: e.type,
                event: e,
                extensionApi: i
            })
        }), i.customerPrivacy.subscribe("visitorConsentCollected", e => {
            Je(e)
        })
    });
})();