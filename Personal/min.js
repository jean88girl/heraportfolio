function InfoBubble(opt_options) {
    this.extend(InfoBubble, google.maps.OverlayView), this.tabs_ = [], this.activeTab_ = null, 
    this.baseZIndex_ = 100, this.isOpen_ = !1;
    var options = opt_options || {};
    void 0 == options.backgroundColor && (options.backgroundColor = this.BACKGROUND_COLOR_), 
    void 0 == options.borderColor && (options.borderColor = this.BORDER_COLOR_), void 0 == options.borderRadius && (options.borderRadius = this.BORDER_RADIUS_), 
    void 0 == options.borderWidth && (options.borderWidth = this.BORDER_WIDTH_), void 0 == options.padding && (options.padding = this.PADDING_), 
    void 0 == options.arrowPosition && (options.arrowPosition = this.ARROW_POSITION_), 
    void 0 == options.disableAutoPan && (options.disableAutoPan = !1), void 0 == options.disableAnimation && (options.disableAnimation = !1), 
    void 0 == options.minWidth && (options.minWidth = this.MIN_WIDTH_), void 0 == options.shadowStyle && (options.shadowStyle = this.SHADOW_STYLE_), 
    void 0 == options.arrowSize && (options.arrowSize = this.ARROW_SIZE_), void 0 == options.arrowStyle && (options.arrowStyle = this.ARROW_STYLE_), 
    this.buildDom_(), this.setValues(options);
}

function funcGmapInitialize() {
    document._classGmapCoreObject.LoadMap();
}

!function(e, t) {
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), 
            u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), 
            a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), 
            "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, 
            o;
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [ t ] : (t = x.camelCase(t), 
                    t = t in r ? [ t ] : t.split(" ")), i = t.length;
                    for (;i--; ) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([ e ], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
            }
        }
    }
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r;
                } catch (o) {}
                x.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function I(e) {
        var t;
        for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function it() {
        return !0;
    }
    function ot() {
        return !1;
    }
    function at() {
        try {
            return a.activeElement;
        } catch (e) {}
    }
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e;
    }
    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e);
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n;
        });
    }
    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e;
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function _t(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = x.extend({}, a.data));
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando);
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([ e ], s) : s;
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked);
    }
    function tn(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; i--; ) if (t = en[i] + n, 
        t in e) return t;
        return r;
    }
    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
    }
    function rn(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), 
        (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function an(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), 
        r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), 
        "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a;
    }
    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r;
    }
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
    }
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function qn(e, n, r, i) {
        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), 
                s(c), !1);
            }), u;
        }
        var o = {}, a = e === jn;
        return s(n.dataTypes[0]) || !o["*"] && s("*");
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e;
    }
    function Mn(e, n, r) {
        for (var i, o, a, s, l = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in l) if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break;
        }
        if (u[0] in r) a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break;
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t);
            } catch (p) {
                return {
                    state: "parsererror",
                    error: a ? p : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function In() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function Kn() {
        return setTimeout(function() {
            Xn = t;
        }), Xn = x.now();
    }
    function Zn(e, t, n) {
        for (var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (i) return !1;
            for (var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
            return s.notifyWith(e, [ u, o, n ]), 1 > o && l ? n : (s.resolveWith(e, [ u ]), 
            !1);
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) u.tweens[n].run(1);
                return t ? s.resolveWith(e, [ u, t ]) : s.rejectWith(e, [ u, t ]), this;
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || l();
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (r in t) if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
            c[r] = d && d[r] || x.style(e, r);
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), 
            f ? x(e).show() : u.done(function() {
                x(e).hide();
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t]);
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, 
            a.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
        return new x.fn.init(e, t, r);
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
        return t.toUpperCase();
    }, q = function(e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), 
        x.ready());
    }, _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), 
        e.detachEvent("onload", q));
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : N.exec(e), 
                !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), 
                    k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = a, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), x.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return x.each(this, e, t);
        },
        ready: function(e) {
            return x.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), 
        u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], 
        r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, 
        a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s;
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [ x ]), x.fn.trigger && x(a).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (r) {
                return !1;
            }
            if (x.support.ownLast) for (n in e) return v.call(e, n);
            for (n in e) ;
            return n === t || v.call(e, n);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = x.buildFragment([ e ], t, i), i && x(i).remove(), 
            x.merge([], r.childNodes));
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), 
            n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), 
            t);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), 
                r.async = "false", r.loadXML(n));
            } catch (o) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), 
            r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) for (;o > i && (r = t.apply(e[i], n), r !== !1); i++) ; else for (i in e) if (r = t.apply(e[i], n), 
                r === !1) break;
            } else if (a) for (;o > i && (r = t.call(e[i], i, e[i]), r !== !1); i++) ; else for (i in e) if (r = t.call(e[i], i, e[i]), 
            r === !1) break;
            return e;
        },
        trim: b && !b.call("﻿ ") ? function(e) {
            return null == e ? "" : b.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [ e ] : e) : h.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;r > o; o++) e[i++] = n[o]; else for (;n[o] !== t; ) e[i++] = n[o++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) for (;o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), 
            null != r && (s[s.length] = r);
            return d.apply([], s);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), 
            i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)));
            }, i.guid = e.guid = e.guid || x.guid++, i) : t;
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0, u = e.length, c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s);
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), 
            n = null) : (c = n, n = function(e, t, n) {
                return c.call(x(e), n);
            })), n)) for (;u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        }
    }), x.ready.promise = function(t) {
        if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready); else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), 
        e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement;
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left");
                    } catch (e) {
                        return setTimeout(o, 50);
                    }
                    _(), x.ready();
                }
            }();
        }
        return n.promise(t);
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
    }), r = x(a), function(e, t) {
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (h && !i) {
                if (o = Z.exec(e)) if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode) return n;
                        if (a.id === s) return n.push(a), n;
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), 
                    n;
                } else {
                    if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), 
                    n;
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        for (c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), 
                        m = "[id='" + m + "'] ", u = c.length; u--; ) c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",");
                    }
                    if (x) try {
                        return M.apply(n, y.querySelectorAll(x)), n;
                    } catch (T) {} finally {
                        d || t.removeAttribute("id");
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i);
        }
        function st() {
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r;
            }
            var e = [];
            return t;
        }
        function lt(e) {
            return e[b] = !0, e;
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function ct(e, t) {
            for (var n = e.split("|"), r = e.length; r--; ) o.attrHandle[n[r]] = t;
        }
        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t, lt(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function gt() {}
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = o.preFilter; s; ) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), 
                n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
        }
        function yt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function(t, n, i) {
                for (;t = t[r]; ) if (1 === t.nodeType || o) return e(t, n, i);
            } : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), 
                (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i) return l === !0;
                } else if (u = c[r] = [ p ], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
            };
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function xt(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), 
            u && t.push(s));
            return a;
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [ s ] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) for (u = xt(y, d), r(u, [], s, l), c = u.length; c--; ) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = y.length; c--; ) (p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l);
                        }
                        for (c = y.length; c--; ) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
            });
        }
        function Tt(e) {
            for (var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t;
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1;
            }, s, !0), f = [ function(e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
            } ]; i > l; l++) if (n = o.relative[e[l].type]) f = [ vt(bt(f), n) ]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r && !o.relative[e[r].type]; r++) ;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                        value: " " === e[l - 2].type ? "*" : ""
                    })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
                }
                f.push(n);
            }
            return bt(f);
        }
        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        for (g = 0; m = e[g++]; ) if (m(h, l, c)) {
                            p.push(h);
                            break;
                        }
                        w && (T = k, i = ++n);
                    }
                    r && ((h = !m && h) && v--, s && x.push(h));
                }
                if (v += b, r && b !== v) {
                    for (g = 0; m = t[g++]; ) m(x, y, l, c);
                    if (s) {
                        if (v > 0) for (;b--; ) x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y);
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
                }
                return w && (T = k, u = C), x;
            };
            return r ? lt(s) : s;
        }
        function Nt(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) at(e, t[r], n);
            return n;
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length);
                }
                for (a = Q.needsContext.test(e) ? 0 : s.length; a-- && (u = s[a], !o.relative[c = u.type]); ) if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                    if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                    break;
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n;
        }
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date(), w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0, 0) : 0;
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, r = at.support = {}, p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, 
            h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p();
            }), r.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
                2 === e.getElementsByClassName("i").length;
            }), r.getById = ut(function(e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
            }), r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete o.find.ID, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t;
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), 
                e.querySelectorAll(":checked").length || g.push(":checked");
            }), ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                g.push(",.*:");
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I);
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, A = d.compareDocumentPosition ? function(e, t) {
                if (e === t) return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [ e ], l = [ t ];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a) return pt(e, t);
                for (r = e; r = r.parentNode; ) s.unshift(r);
                for (r = t; r = r.parentNode; ) l.unshift(r);
                for (;s[i] === l[i]; ) i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
            }, n) : f;
        }, at.matches = function(e, t) {
            return at(e, null, null, t);
        }, at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (i) {}
            return at(t, f, null, [ e ]).length > 0;
        }, at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t);
        }, at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
        }, at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                for (;t = e[o++]; ) t === e[o] && (i = n.push(o));
                for (;i--; ) e.splice(n[i], 1);
            }
            return e;
        }, a = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += a(t);
            return n;
        }, o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), 
                    e[2] = r.slice(0, n)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (p = t; p = p[g]; ) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
                                for (c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], 
                                p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop(); ) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [ T, d, f ];
                                    break;
                                }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1]; else for (;(p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[b] || (p[b] = {}))[e] = [ T, f ]), 
                            p !== t)); ) ;
                            return f -= i, f === r || 0 === f % r && f / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [ e, e, "", t ], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--; ) i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = [], n = [], r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0;
                    };
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
                    };
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === d;
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !o.pseudos.empty(e);
                },
                header: function(e) {
                    return tt.test(e.nodeName);
                },
                input: function(e) {
                    return et.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: ht(function() {
                    return [ 0 ];
                }),
                last: ht(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ht(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: ht(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: ht(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: ht(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: ht(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
                    return e;
                })
            }
        }, o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) o.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        }) o.pseudos[n] = dt(n);
        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt(), l = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                for (t || (t = mt(e)), n = t.length; n--; ) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r));
            }
            return o;
        }, r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), 
        r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"));
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
        }), r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue;
        }), ut(function(e) {
            return null == e.getAttribute("disabled");
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, 
        x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
    }(e);
    var O = {};
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break;
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
        }, p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    !function i(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
                        });
                    }(arguments), n ? o = l.length : r && (s = t, c(r));
                }
                return this;
            },
            remove: function() {
                return l && x.each(arguments, function(e, t) {
                    for (var r; (r = x.inArray(t, l, r)) > -1; ) l.splice(r, 1), n && (o >= r && o--, 
                    a >= r && a--);
                }), this;
            },
            has: function(e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
            },
            empty: function() {
                return l = [], o = 0, this;
            },
            disable: function() {
                return l = u = r = t, this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                return u = t, r || p.disable(), this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(e, t) {
                return !l || i && !u || (t = t || [], t = [ e, t.slice ? t.slice() : t ], n ? u.push(t) : c(t)), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return p;
    }, x.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", x.Callbacks("once memory"), "resolved" ], [ "reject", "fail", x.Callbacks("once memory"), "rejected" ], [ "notify", "progress", x.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var a = o[0], s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var s, l, u, t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                };
            };
            if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise();
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, 
        t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, 
        t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), 
        t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), 
        t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, 
        t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, 
        t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, 
        t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, 
        t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test;
        } catch (h) {
            t.deleteExpando = !1;
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), 
        o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, 
        o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), 
        l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", 
            t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, 
            r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", 
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", 
            d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), 
            l.removeChild(n), n = d = o = r = null);
        }), n = s = l = u = r = o = null, t;
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
        },
        data: function(e, t, n) {
            return R(e, t, n);
        },
        removeData: function(e, t) {
            return W(e, t);
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return W(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), 
                    $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e);
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n);
            }) : s ? $(s, e, x.data(s, e)) : null;
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e);
            });
        }
    }), x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), 
            i || []) : t;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function() {
                x.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n);
                })
            });
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) r = x._data(a[s], e + "queueHooks"), 
            r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n);
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className));
            });
            if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                for (o = 0; i = t[o++]; ) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className));
            });
            if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(x.isFunction(e) ? function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t);
            } : function() {
                if ("string" === n) for (var t, r = 0, o = x(this), a = e.match(T) || []; t = a[r++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = x.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
            })) : o ? (r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, 
            "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)) : void 0;
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++) if (n = r[l], 
                    !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = x.makeArray(t), a = i.length; a--; ) r = i[a], 
                    (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), 
            o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), 
            null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), 
            r) : (x.removeAttr(e, n), t)) : void 0;
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), 
            e.removeAttribute(Q ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, 
            o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a;
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null;
        };
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r);
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", 
            "value" === r || n === e.getAttribute(r) ? n : t;
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t;
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n);
        }
    }, x.each([ "width", "height" ], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t;
            }
        };
    })), x.support.hrefNormalized || x.each([ "href", "src" ], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), x.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        x.propFix[this.toLowerCase()] = this;
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each([ "radio", "checkbox" ], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                for (r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), 
                (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
                }, f.elem = e), n = (n || "").match(T) || [ "" ], u = n.length; u--; ) s = rt.exec(n[u]) || [], 
                g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, 
                g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), 
                p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), 
                x.event.global[g] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(T) || [ "" ], u = t.length; u--; ) if (s = rt.exec(t[u]) || [], 
                d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], 
                    s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--; ) a = f[o], 
                    !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), 
                    a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), 
                    delete c[d]);
                } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [ i || a ], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), 
            g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), 
            n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            n.result = t, n.target || (n.target = i), r = null == r ? [ n ] : x.makeArray(r, [ n ]), 
            p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), 
                    f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
                }
                for (d = 0; (u = h[d++]) && !n.isPropagationStopped(); ) n.type = d > 1 ? c : p.bindType || g, 
                s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), 
                s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]();
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = x.event.handlers.call(this, e, u), n = 0; (o = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, 
                a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), 
                r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) for (;u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [ u ]).length), 
                o[r] && o.push(i);
                o.length && s.push({
                    elem: u,
                    handlers: o
                });
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s;
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), 
            r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length; t--; ) n = r[t], 
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, 
                o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), 
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), 
                !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : t;
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, 
        n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, 
        t) : new x.Event(e, n);
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), 
            e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation();
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), x._data(r, "submitBubbles", !0));
            }), t);
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t);
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0);
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0);
                }), x._data(t, "changeBubbles", !0));
            }), t);
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName);
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0);
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0);
            }
        };
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, 
            r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), 
            this.each(function() {
                x.event.remove(this, e, r, n);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t;
        }
    });
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0;
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        has: function(e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1));
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [ e ] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return x.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n);
        },
        next: function(e) {
            return pt(e, "nextSibling");
        },
        prev: function(e) {
            return pt(e, "previousSibling");
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return x.sibling(e.firstChild);
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), 
            this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), 
            this.pushStack(i);
        };
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [ r ] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)); ) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: x.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, 
    At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? x.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), 
            n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && x.cleanData(Ft(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t);
            });
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (;i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), 
                        n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 
            1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), 
                o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], 
                kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null;
            }
            return this;
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = x(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), 
            x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i);
        };
    }), x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, 
            Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), 
            s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]); else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, 
            o;
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0; p > h; h++) if (o = e[h], 
            o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [ o ] : o); else if (wt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || [ "", "" ])[1].toLowerCase(), 
                c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], 
                i = c[0]; i--; ) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), 
                !x.support.tbody) for (o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, 
                i = o && o.childNodes.length; i--; ) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (x.merge(d, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = f.lastChild;
            } else d.push(t.createTextNode(o));
            for (s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), 
            h = 0; o = d[h++]; ) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), 
            s = Ft(f.appendChild(o), "script"), a && _t(s), n)) for (i = 0; o = s[i++]; ) kt.test(o.type || "") && n.push(o);
            return s = null, f;
        },
        cleanData: function(e, t) {
            for (var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special; null != (n = e[s]); s++) if ((t || x.acceptData(n)) && (o = n[l], 
            a = o && u[o])) {
                if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, 
                p.push(o));
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return this.each(x.isFunction(e) ? function(t) {
                x(this).wrapInner(e.call(this, t));
            } : function() {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = [ "Top", "Right", "Bottom", "Left" ], en = [ "Webkit", "O", "Moz", "ms" ];
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return rn(this, !0);
        },
        hide: function() {
            return rn(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide();
            });
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], 
                r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), 
                a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), 
                x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r;
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], 
            s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), 
            "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null);
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), 
        Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, 
        l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle;
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, 
        o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, 
        l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
    }), x.each([ "height", "width" ], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i);
                }) : sn(e, n, i) : t;
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [ e, "marginRight" ]) : t;
            }
        }), !x.support.pixelPosition && x.fn.position && x.each([ "top", "left" ], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t;
                }
            };
        });
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"));
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e);
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on);
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                };
            }).get();
        }
    }), x.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+");
    }, x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href;
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href;
    }
    mn = En.exec(yn.toLowerCase()) || [], x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, 
        n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, o || [ e.responseText, t, e ]);
        }), this;
    }, x.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, 
                c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), 
                c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), 
                T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, 
                y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), 
                C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [ y, N, C ]) : h.rejectWith(f, [ C, N, v ]), 
                C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [ C, p, c ? y : v ]), 
                g.fireWith(f, [ C, N ]), l && (d.trigger("ajaxComplete", [ C, p ]), --x.active || x.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) for (c = {}; t = Tn.exec(a); ) c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e, y[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) m[t] = [ m[t], e[t] ]; else C.always(e[C.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t), k(0, t), this;
                }
            };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [ "" ], 
            null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), 
            qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, 
            delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), 
            p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), 
            x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), 
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [ C, p ]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout");
                }, p.timeout));
                try {
                    b = 1, u.send(y, k);
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N);
                }
            } else k(-1, "No Transport");
            return C;
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json");
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script");
        }
    }), x.each([ "get", "post" ], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            });
        };
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e;
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
                    n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e;
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script") : t;
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn) Pn[e](t, !0);
    };
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn();
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, 
    Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), 
                    n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s]);
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, 
                            $n && delete Pn[a]), i) 4 !== l.readyState && l.abort(); else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText;
                                } catch (f) {
                                    c = "";
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
                            }
                        } catch (d) {
                            i || o(-1, d);
                        }
                        p && o(s, c, p, u);
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, 
                    x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [ nr ], Qn = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l);
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), 
            n;
        } ]
    };
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e);
        }
    }), x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, x.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
        };
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function() {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), 
                t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
        }, r;
    }, x.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t;
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start();
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval));
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null;
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem;
        }).length;
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t);
        });
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        return s ? (n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), 
        r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0;
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var p, f, i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [ a, s ]) > -1, u = {}, c = {};
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), 
            x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), 
            null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u);
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), 
                n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || s; e && !x.nodeName(e, "html") && "static" === x.css(e, "position"); ) e = e.offsetParent;
                return e || s;
            });
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, 
                t);
            }, e, i, arguments.length, null);
        };
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), x.fn.size = function() {
        return this.length;
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, 
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x;
    }));
}(window), eval(function(p, a, c, k, e, r) {
    if (e = function(c) {
        return (a > c ? "" : e(parseInt(c / a))) + ((c %= a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    }, !"".replace(/^/, String)) {
        for (;c--; ) r[e(c)] = k[c] || e(c);
        k = [ function(e) {
            return r[e];
        } ], e = function() {
            return "\\w+";
        }, c = 1;
    }
    for (;c--; ) k[c] && (p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]));
    return p;
}("h.i['1a']=h.i['z'];h.O(h.i,{y:'D',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});", 62, 74, "||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce".split("|"), 0, {})), 
function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|Mobile|arm|lumia|iemobile|iPad|android|Touch|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
}(navigator.userAgent || navigator.vendor || window.opera), function($) {
    var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right, loadingTimer, start_pos, final_pos, selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [], ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i, loadingFrame = 1, titleHeight = 0, titleStr = "", busy = !1, fx = $.extend($("<div/>")[0], {
        prop: 0
    }), isIE6 = $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest, _abort = function() {
        loading.hide(), imgPreloader.onerror = imgPreloader.onload = null, ajaxLoader && ajaxLoader.abort(), 
        tmp.empty();
    }, _error = function() {
        return !1 === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts) ? (loading.hide(), 
        void (busy = !1)) : (selectedOpts.titleShow = !1, selectedOpts.width = "auto", selectedOpts.height = "auto", 
        tmp.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), 
        void _process_inline());
    }, _start = function() {
        var href, type, title, str, emb, ret, obj = selectedArray[selectedIndex];
        if (_abort(), selectedOpts = $.extend({}, $.fn.fancybox.defaults, "undefined" == typeof $(obj).data("fancybox") ? selectedOpts : $(obj).data("fancybox")), 
        ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts), ret === !1) return void (busy = !1);
        if ("object" == typeof ret && (selectedOpts = $.extend(selectedOpts, ret)), title = selectedOpts.title || (obj.nodeName ? $(obj).attr("title") : obj.title) || "", 
        obj.nodeName && !selectedOpts.orig && (selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj)), 
        "" === title && selectedOpts.orig && selectedOpts.titleFromAlt && (title = selectedOpts.orig.attr("alt")), 
        href = selectedOpts.href || (obj.nodeName ? $(obj).attr("href") : obj.href) || null, 
        (/^(?:javascript)/i.test(href) || "#" == href) && (href = null), selectedOpts.type ? (type = selectedOpts.type, 
        href || (href = selectedOpts.content)) : selectedOpts.content ? type = "html" : href && (type = href.match(imgRegExp) ? "image" : href.match(swfRegExp) ? "swf" : $(obj).hasClass("iframe") ? "iframe" : 0 === href.indexOf("#") ? "inline" : "ajax"), 
        !type) return void _error();
        switch ("inline" == type && (obj = href.substr(href.indexOf("#")), type = $(obj).length > 0 ? "inline" : "ajax"), 
        selectedOpts.type = type, selectedOpts.href = href, selectedOpts.title = title, 
        selectedOpts.autoDimensions && ("html" == selectedOpts.type || "inline" == selectedOpts.type || "ajax" == selectedOpts.type ? (selectedOpts.width = "auto", 
        selectedOpts.height = "auto") : selectedOpts.autoDimensions = !1), selectedOpts.modal && (selectedOpts.overlayShow = !0, 
        selectedOpts.hideOnOverlayClick = !1, selectedOpts.hideOnContentClick = !1, selectedOpts.enableEscapeButton = !1, 
        selectedOpts.showCloseButton = !1), selectedOpts.padding = parseInt(selectedOpts.padding, 10), 
        selectedOpts.margin = parseInt(selectedOpts.margin, 10), tmp.css("padding", selectedOpts.padding + selectedOpts.margin), 
        $(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
            $(this).replaceWith(content.children());
        }), type) {
          case "html":
            tmp.html(selectedOpts.content), _process_inline();
            break;

          case "inline":
            if ($(obj).parent().is("#fancybox-content") === !0) return void (busy = !1);
            $('<div class="fancybox-inline-tmp" />').hide().insertBefore($(obj)).bind("fancybox-cleanup", function() {
                $(this).replaceWith(content.children());
            }).bind("fancybox-cancel", function() {
                $(this).replaceWith(tmp.children());
            }), $(obj).appendTo(tmp), _process_inline();
            break;

          case "image":
            busy = !1, $.fancybox.showActivity(), imgPreloader = new Image(), imgPreloader.onerror = function() {
                _error();
            }, imgPreloader.onload = function() {
                busy = !0, imgPreloader.onerror = imgPreloader.onload = null, _process_image();
            }, imgPreloader.src = href;
            break;

          case "swf":
            selectedOpts.scrolling = "no", str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>', 
            emb = "", $.each(selectedOpts.swf, function(name, val) {
                str += '<param name="' + name + '" value="' + val + '"></param>', emb += " " + name + '="' + val + '"';
            }), str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + "></embed></object>", 
            tmp.html(str), _process_inline();
            break;

          case "ajax":
            busy = !1, $.fancybox.showActivity(), selectedOpts.ajax.win = selectedOpts.ajax.success, 
            ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {
                url: href,
                data: selectedOpts.ajax.data || {},
                error: function(XMLHttpRequest) {
                    XMLHttpRequest.status > 0 && _error();
                },
                success: function(data, textStatus, XMLHttpRequest) {
                    var o = "object" == typeof XMLHttpRequest ? XMLHttpRequest : ajaxLoader;
                    if (200 == o.status) {
                        if ("function" == typeof selectedOpts.ajax.win) {
                            if (ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest), ret === !1) return void loading.hide();
                            ("string" == typeof ret || "object" == typeof ret) && (data = ret);
                        }
                        tmp.html(data), _process_inline();
                    }
                }
            }));
            break;

          case "iframe":
            _show();
        }
    }, _process_inline = function() {
        var w = selectedOpts.width, h = selectedOpts.height;
        w = w.toString().indexOf("%") > -1 ? parseInt(($(window).width() - 2 * selectedOpts.margin) * parseFloat(w) / 100, 10) + "px" : "auto" == w ? "auto" : w + "px", 
        h = h.toString().indexOf("%") > -1 ? parseInt(($(window).height() - 2 * selectedOpts.margin) * parseFloat(h) / 100, 10) + "px" : "auto" == h ? "auto" : h + "px", 
        tmp.wrapInner('<div style="width:' + w + ";height:" + h + ";overflow: " + ("auto" == selectedOpts.scrolling ? "auto" : "yes" == selectedOpts.scrolling ? "scroll" : "hidden") + ';position:relative;"></div>'), 
        selectedOpts.width = tmp.width(), selectedOpts.height = tmp.height(), _show();
    }, _process_image = function() {
        selectedOpts.width = imgPreloader.width, selectedOpts.height = imgPreloader.height, 
        $("<img />").attr({
            id: "fancybox-img",
            src: imgPreloader.src,
            alt: selectedOpts.title
        }).appendTo(tmp), _show();
    }, _show = function() {
        var pos, equal;
        return loading.hide(), wrap.is(":visible") && !1 === currentOpts.onCleanup(currentArray, currentIndex, currentOpts) ? ($.event.trigger("fancybox-cancel"), 
        void (busy = !1)) : (busy = !0, $(content.add(overlay)).unbind(), $(window).unbind("resize.fb scroll.fb"), 
        $(document).unbind("keydown.fb"), wrap.is(":visible") && "outside" !== currentOpts.titlePosition && wrap.css("height", wrap.height()), 
        currentArray = selectedArray, currentIndex = selectedIndex, currentOpts = selectedOpts, 
        currentOpts.overlayShow ? (overlay.css({
            "background-color": currentOpts.overlayColor,
            opacity: currentOpts.overlayOpacity,
            cursor: currentOpts.hideOnOverlayClick ? "pointer" : "auto",
            height: $(document).height()
        }), overlay.is(":visible") || (isIE6 && $("select:not(#fancybox-tmp select)").filter(function() {
            return "hidden" !== this.style.visibility;
        }).css({
            visibility: "hidden"
        }).one("fancybox-cleanup", function() {
            this.style.visibility = "inherit";
        }), overlay.show())) : overlay.hide(), final_pos = _get_zoom_to(), _process_title(), 
        wrap.is(":visible") ? ($(close.add(nav_left).add(nav_right)).hide(), pos = wrap.position(), 
        start_pos = {
            top: pos.top,
            left: pos.left,
            width: wrap.width(),
            height: wrap.height()
        }, equal = start_pos.width == final_pos.width && start_pos.height == final_pos.height, 
        void content.fadeTo(currentOpts.changeFade, .3, function() {
            var finish_resizing = function() {
                content.html(tmp.contents()).fadeTo(currentOpts.changeFade, 1, _finish);
            };
            $.event.trigger("fancybox-change"), content.empty().removeAttr("filter").css({
                "border-width": currentOpts.padding,
                width: final_pos.width - 2 * currentOpts.padding,
                height: selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - 2 * currentOpts.padding
            }), equal ? finish_resizing() : (fx.prop = 0, $(fx).animate({
                prop: 1
            }, {
                duration: currentOpts.changeSpeed,
                easing: currentOpts.easingChange,
                step: _draw,
                complete: finish_resizing
            }));
        })) : (wrap.removeAttr("style"), content.css("border-width", currentOpts.padding), 
        "elastic" == currentOpts.transitionIn ? (start_pos = _get_zoom_from(), content.html(tmp.contents()), 
        wrap.show(), currentOpts.opacity && (final_pos.opacity = 0), fx.prop = 0, void $(fx).animate({
            prop: 1
        }, {
            duration: currentOpts.speedIn,
            easing: currentOpts.easingIn,
            step: _draw,
            complete: _finish
        })) : ("inside" == currentOpts.titlePosition && titleHeight > 0 && title.show(), 
        content.css({
            width: final_pos.width - 2 * currentOpts.padding,
            height: selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - 2 * currentOpts.padding
        }).html(tmp.contents()), void wrap.css(final_pos).fadeIn("none" == currentOpts.transitionIn ? 0 : currentOpts.speedIn, _finish))));
    }, _format_title = function(title) {
        return title && title.length ? "float" == currentOpts.titlePosition ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + "</div>" : !1;
    }, _process_title = function() {
        if (titleStr = currentOpts.title || "", titleHeight = 0, title.empty().removeAttr("style").removeClass(), 
        currentOpts.titleShow === !1) return void title.hide();
        if (titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr), 
        !titleStr || "" === titleStr) return void title.hide();
        switch (title.addClass("fancybox-title-" + currentOpts.titlePosition).html(titleStr).appendTo("body").show(), 
        currentOpts.titlePosition) {
          case "inside":
            title.css({
                width: final_pos.width - 2 * currentOpts.padding,
                marginLeft: currentOpts.padding,
                marginRight: currentOpts.padding
            }), titleHeight = title.outerHeight(!0), title.appendTo(outer), final_pos.height += titleHeight;
            break;

          case "over":
            title.css({
                marginLeft: currentOpts.padding,
                width: final_pos.width - 2 * currentOpts.padding,
                bottom: currentOpts.padding
            }).appendTo(outer);
            break;

          case "float":
            title.css("left", -1 * parseInt((title.width() - final_pos.width - 40) / 2, 10)).appendTo(wrap);
            break;

          default:
            title.css({
                width: final_pos.width - 2 * currentOpts.padding,
                paddingLeft: currentOpts.padding,
                paddingRight: currentOpts.padding
            }).appendTo(wrap);
        }
        title.hide();
    }, _set_navigation = function() {
        return (currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) && $(document).bind("keydown.fb", function(e) {
            27 == e.keyCode && currentOpts.enableEscapeButton ? (e.preventDefault(), $.fancybox.close()) : 37 != e.keyCode && 39 != e.keyCode || !currentOpts.enableKeyboardNav || "INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName || "SELECT" === e.target.tagName || (e.preventDefault(), 
            $.fancybox[37 == e.keyCode ? "prev" : "next"]());
        }), currentOpts.showNavArrows ? ((currentOpts.cyclic && currentArray.length > 1 || 0 !== currentIndex) && nav_left.show(), 
        void ((currentOpts.cyclic && currentArray.length > 1 || currentIndex != currentArray.length - 1) && nav_right.show())) : (nav_left.hide(), 
        void nav_right.hide());
    }, _finish = function() {
        $.support.opacity || (content.get(0).style.removeAttribute("filter"), wrap.get(0).style.removeAttribute("filter")), 
        selectedOpts.autoDimensions && content.css("height", "auto"), wrap.css("height", "auto"), 
        titleStr && titleStr.length && title.show(), currentOpts.showCloseButton && close.show(), 
        _set_navigation(), currentOpts.hideOnContentClick && content.bind("click", $.fancybox.close), 
        currentOpts.hideOnOverlayClick && overlay.bind("click", $.fancybox.close), $(window).bind("resize.fb", $.fancybox.resize), 
        currentOpts.centerOnScroll && $(window).bind("scroll.fb", $.fancybox.center), "iframe" == currentOpts.type && $('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + selectedOpts.scrolling + '" src="' + currentOpts.href + '"></iframe>').appendTo(content), 
        wrap.show(), busy = !1, $.fancybox.center(), currentOpts.onComplete(currentArray, currentIndex, currentOpts), 
        _preload_images();
    }, _preload_images = function() {
        var href, objNext;
        currentArray.length - 1 > currentIndex && (href = currentArray[currentIndex + 1].href, 
        "undefined" != typeof href && href.match(imgRegExp) && (objNext = new Image(), objNext.src = href)), 
        currentIndex > 0 && (href = currentArray[currentIndex - 1].href, "undefined" != typeof href && href.match(imgRegExp) && (objNext = new Image(), 
        objNext.src = href));
    }, _draw = function(pos) {
        var dim = {
            width: parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10),
            height: parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10),
            top: parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10),
            left: parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)
        };
        "undefined" != typeof final_pos.opacity && (dim.opacity = .5 > pos ? .5 : pos), 
        wrap.css(dim), content.css({
            width: dim.width - 2 * currentOpts.padding,
            height: dim.height - titleHeight * pos - 2 * currentOpts.padding
        });
    }, _get_viewport = function() {
        return [ $(window).width() - 2 * currentOpts.margin, $(window).height() - 2 * currentOpts.margin, $(document).scrollLeft() + currentOpts.margin, $(document).scrollTop() + currentOpts.margin ];
    }, _get_zoom_to = function() {
        var ratio, view = _get_viewport(), to = {}, resize = currentOpts.autoScale, double_padding = 2 * currentOpts.padding;
        return to.width = currentOpts.width.toString().indexOf("%") > -1 ? parseInt(view[0] * parseFloat(currentOpts.width) / 100, 10) : currentOpts.width + double_padding, 
        to.height = currentOpts.height.toString().indexOf("%") > -1 ? parseInt(view[1] * parseFloat(currentOpts.height) / 100, 10) : currentOpts.height + double_padding, 
        resize && (to.width > view[0] || to.height > view[1]) && ("image" == selectedOpts.type || "swf" == selectedOpts.type ? (ratio = currentOpts.width / currentOpts.height, 
        to.width > view[0] && (to.width = view[0], to.height = parseInt((to.width - double_padding) / ratio + double_padding, 10)), 
        to.height > view[1] && (to.height = view[1], to.width = parseInt((to.height - double_padding) * ratio + double_padding, 10))) : (to.width = Math.min(to.width, view[0]), 
        to.height = Math.min(to.height, view[1]))), to.top = parseInt(Math.max(view[3] - 20, view[3] + .5 * (view[1] - to.height - 40)), 10), 
        to.left = parseInt(Math.max(view[2] - 20, view[2] + .5 * (view[0] - to.width - 40)), 10), 
        to;
    }, _get_obj_pos = function(obj) {
        var pos = obj.offset();
        return pos.top += parseInt(obj.css("paddingTop"), 10) || 0, pos.left += parseInt(obj.css("paddingLeft"), 10) || 0, 
        pos.top += parseInt(obj.css("border-top-width"), 10) || 0, pos.left += parseInt(obj.css("border-left-width"), 10) || 0, 
        pos.width = obj.width(), pos.height = obj.height(), pos;
    }, _get_zoom_from = function() {
        var pos, view, orig = selectedOpts.orig ? $(selectedOpts.orig) : !1, from = {};
        return orig && orig.length ? (pos = _get_obj_pos(orig), from = {
            width: pos.width + 2 * currentOpts.padding,
            height: pos.height + 2 * currentOpts.padding,
            top: pos.top - currentOpts.padding - 20,
            left: pos.left - currentOpts.padding - 20
        }) : (view = _get_viewport(), from = {
            width: 2 * currentOpts.padding,
            height: 2 * currentOpts.padding,
            top: parseInt(view[3] + .5 * view[1], 10),
            left: parseInt(view[2] + .5 * view[0], 10)
        }), from;
    }, _animate_loading = function() {
        return loading.is(":visible") ? ($("div", loading).css("top", -40 * loadingFrame + "px"), 
        void (loadingFrame = (loadingFrame + 1) % 12)) : void clearInterval(loadingTimer);
    };
    $.fn.fancybox = function(options) {
        return $(this).length ? ($(this).data("fancybox", $.extend({}, options, $.metadata ? $(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(e) {
            if (e.preventDefault(), !busy) {
                busy = !0, $(this).blur(), selectedArray = [], selectedIndex = 0;
                var rel = $(this).attr("rel") || "";
                rel && "" != rel && "nofollow" !== rel ? (selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "]"), 
                selectedIndex = selectedArray.index(this)) : selectedArray.push(this), _start();
            }
        }), this) : this;
    }, $.fancybox = function(obj) {
        var opts;
        if (!busy) {
            if (busy = !0, opts = "undefined" != typeof arguments[1] ? arguments[1] : {}, selectedArray = [], 
            selectedIndex = parseInt(opts.index, 10) || 0, $.isArray(obj)) {
                for (var i = 0, j = obj.length; j > i; i++) "object" == typeof obj[i] ? $(obj[i]).data("fancybox", $.extend({}, opts, obj[i])) : obj[i] = $({}).data("fancybox", $.extend({
                    content: obj[i]
                }, opts));
                selectedArray = jQuery.merge(selectedArray, obj);
            } else "object" == typeof obj ? $(obj).data("fancybox", $.extend({}, opts, obj)) : obj = $({}).data("fancybox", $.extend({
                content: obj
            }, opts)), selectedArray.push(obj);
            (selectedIndex > selectedArray.length || 0 > selectedIndex) && (selectedIndex = 0), 
            _start();
        }
    }, $.fancybox.showActivity = function() {
        clearInterval(loadingTimer), loading.show(), loadingTimer = setInterval(_animate_loading, 66);
    }, $.fancybox.hideActivity = function() {
        loading.hide();
    }, $.fancybox.next = function() {
        return $.fancybox.pos(currentIndex + 1);
    }, $.fancybox.prev = function() {
        return $.fancybox.pos(currentIndex - 1);
    }, $.fancybox.pos = function(pos) {
        busy || (pos = parseInt(pos), selectedArray = currentArray, pos > -1 && pos < currentArray.length ? (selectedIndex = pos, 
        _start()) : currentOpts.cyclic && currentArray.length > 1 && (selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1, 
        _start()));
    }, $.fancybox.cancel = function() {
        busy || (busy = !0, $.event.trigger("fancybox-cancel"), _abort(), selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts), 
        busy = !1);
    }, $.fancybox.close = function() {
        function _cleanup() {
            overlay.fadeOut("fast"), title.empty().hide(), wrap.hide(), $.event.trigger("fancybox-cleanup"), 
            content.empty(), currentOpts.onClosed(currentArray, currentIndex, currentOpts), 
            currentArray = selectedOpts = [], currentIndex = selectedIndex = 0, currentOpts = selectedOpts = {}, 
            busy = !1;
        }
        if (!busy && !wrap.is(":hidden")) {
            if (busy = !0, currentOpts && !1 === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) return void (busy = !1);
            if (_abort(), $(close.add(nav_left).add(nav_right)).hide(), $(content.add(overlay)).unbind(), 
            $(window).unbind("resize.fb scroll.fb"), $(document).unbind("keydown.fb"), content.find("iframe").attr("src", isIE6 && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"), 
            "inside" !== currentOpts.titlePosition && title.empty(), wrap.stop(), "elastic" == currentOpts.transitionOut) {
                start_pos = _get_zoom_from();
                var pos = wrap.position();
                final_pos = {
                    top: pos.top,
                    left: pos.left,
                    width: wrap.width(),
                    height: wrap.height()
                }, currentOpts.opacity && (final_pos.opacity = 1), title.empty().hide(), fx.prop = 1, 
                $(fx).animate({
                    prop: 0
                }, {
                    duration: currentOpts.speedOut,
                    easing: currentOpts.easingOut,
                    step: _draw,
                    complete: _cleanup
                });
            } else wrap.fadeOut("none" == currentOpts.transitionOut ? 0 : currentOpts.speedOut, _cleanup);
        }
    }, $.fancybox.resize = function() {
        overlay.is(":visible") && overlay.css("height", $(document).height()), $.fancybox.center(!0);
    }, $.fancybox.center = function() {
        var view, align;
        busy || (align = arguments[0] === !0 ? 1 : 0, view = _get_viewport(), (align || !(wrap.width() > view[0] || wrap.height() > view[1])) && wrap.stop().animate({
            top: parseInt(Math.max(view[3] - 20, view[3] + .5 * (view[1] - content.height() - 40) - currentOpts.padding)),
            left: parseInt(Math.max(view[2] - 20, view[2] + .5 * (view[0] - content.width() - 40) - currentOpts.padding))
        }, "number" == typeof arguments[0] ? arguments[0] : 200));
    }, $.fancybox.init = function() {
        $("#fancybox-wrap").length || ($("body").append(tmp = $('<div id="fancybox-tmp"></div>'), loading = $('<div id="fancybox-loading"><div></div></div>'), overlay = $('<div id="fancybox-overlay"></div>'), wrap = $('<div id="fancybox-wrap"></div>')), 
        outer = $('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(wrap), 
        outer.append(content = $('<div id="fancybox-content"></div>'), close = $('<a id="fancybox-close"></a>'), title = $('<div id="fancybox-title"></div>'), nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), 
        close.click($.fancybox.close), loading.click($.fancybox.cancel), nav_left.click(function(e) {
            e.preventDefault(), $.fancybox.prev();
        }), nav_right.click(function(e) {
            e.preventDefault(), $.fancybox.next();
        }), $.fn.mousewheel && wrap.bind("mousewheel.fb", function(e, delta) {
            busy ? e.preventDefault() : (0 == $(e.target).get(0).clientHeight || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) && (e.preventDefault(), 
            $.fancybox[delta > 0 ? "prev" : "next"]());
        }), $.support.opacity || wrap.addClass("fancybox-ie"), isIE6 && (loading.addClass("fancybox-ie6"), 
        wrap.addClass("fancybox-ie6"), $('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer)));
    }, $.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: !1,
        modal: !1,
        cyclic: !1,
        scrolling: "auto",
        width: 560,
        height: 340,
        autoScale: !0,
        autoDimensions: !0,
        centerOnScroll: !1,
        ajax: {},
        swf: {
            wmode: "transparent"
        },
        hideOnOverlayClick: !0,
        hideOnContentClick: !1,
        overlayShow: !0,
        overlayOpacity: .7,
        overlayColor: "#777",
        titleShow: !0,
        titlePosition: "float",
        titleFormat: null,
        titleFromAlt: !1,
        transitionIn: "fade",
        transitionOut: "fade",
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: "fast",
        easingIn: "swing",
        easingOut: "swing",
        showCloseButton: !0,
        showNavArrows: !0,
        enableEscapeButton: !0,
        enableKeyboardNav: !0,
        onStart: function() {},
        onCancel: function() {},
        onComplete: function() {},
        onCleanup: function() {},
        onClosed: function() {},
        onError: function() {}
    }, $(document).ready(function() {
        $.fancybox.init();
    });
}(jQuery), function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : "object" == typeof exports ? module.exports = factory : factory(jQuery);
}(function($) {
    function handler(event) {
        var orgEvent = event || window.event, args = slice.call(arguments, 1), delta = 0, deltaX = 0, deltaY = 0, absDelta = 0;
        return event = $.event.fix(orgEvent), event.type = "mousewheel", "detail" in orgEvent && (deltaY = -1 * orgEvent.detail), 
        "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), 
        "wheelDeltaX" in orgEvent && (deltaX = -1 * orgEvent.wheelDeltaX), "axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = -1 * deltaY, 
        deltaY = 0), delta = 0 === deltaY ? deltaX : deltaY, "deltaY" in orgEvent && (deltaY = -1 * orgEvent.deltaY, 
        delta = deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX, 0 === deltaY && (delta = -1 * deltaX)), 
        0 !== deltaY || 0 !== deltaX ? (absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)), 
        (!lowestDelta || lowestDelta > absDelta) && (lowestDelta = absDelta), delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), 
        deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), 
        event.deltaX = deltaX, event.deltaY = deltaY, event.deltaFactor = lowestDelta, args.unshift(event, delta, deltaX, deltaY), 
        nullLowestDeltaTimeout && clearTimeout(nullLowestDeltaTimeout), nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200), 
        ($.event.dispatch || $.event.handle).apply(this, args)) : void 0;
    }
    function nullLowestDelta() {
        lowestDelta = null;
    }
    var nullLowestDeltaTimeout, lowestDelta, toFix = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], toBind = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], slice = Array.prototype.slice;
    if ($.event.fixHooks) for (var i = toFix.length; i; ) $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
    $.event.special.mousewheel = {
        version: "3.1.6",
        setup: function() {
            if (this.addEventListener) for (var i = toBind.length; i; ) this.addEventListener(toBind[--i], handler, !1); else this.onmousewheel = handler;
        },
        teardown: function() {
            if (this.removeEventListener) for (var i = toBind.length; i; ) this.removeEventListener(toBind[--i], handler, !1); else this.onmousewheel = null;
        }
    }, $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });
}), function() {
    function getOffsetTop(el) {
        var val = 0;
        if (el.offsetParent) {
            do val += el.offsetTop; while (el = el.offsetParent);
            return val;
        }
    }
    var addEventListener = window.addEventListener || function(n, f) {
        window.attachEvent("on" + n, f);
    }, removeEventListener = window.removeEventListener || function(n, f) {
        window.detachEvent("on" + n, f);
    }, lazyLoader = {
        cache: [],
        mobileScreenSize: 500,
        addObservers: function() {
            addEventListener("scroll", lazyLoader.throttledLoad), addEventListener("resize", lazyLoader.throttledLoad);
        },
        removeObservers: function() {
            removeEventListener("scroll", lazyLoader.throttledLoad, !1), removeEventListener("resize", lazyLoader.throttledLoad, !1);
        },
        throttleTimer: new Date().getTime(),
        throttledLoad: function() {
            var now = new Date().getTime();
            now - lazyLoader.throttleTimer >= 200 && (lazyLoader.throttleTimer = now, lazyLoader.loadVisibleImages());
        },
        _Sleep: function(milliseconds) {
            for (var start = new Date().getTime(), i = 0; 1e7 > i && !(new Date().getTime() - start > milliseconds); i++) ;
        },
        loadVisibleImages: function() {
            for (var scrollY = window.pageYOffset || document.documentElement.scrollTop, pageHeight = window.innerHeight || document.documentElement.clientHeight, range = {
                min: scrollY - 200,
                max: scrollY + pageHeight + 200
            }, i = 0; i < lazyLoader.cache.length; ) {
                var image = lazyLoader.cache[i], imagePosition = getOffsetTop(image), imageHeight = image.height || 0;
                if (imagePosition >= range.min - imageHeight && imagePosition <= range.max) {
                    var mobileSrc = image.getAttribute("data-src-mobile");
                    image.onload = function() {
                        this.className = this.className.replace(/(^|\s+)lazy-load(\s+|$)/, "$1lazy-loaded$2");
                    }, image.src = mobileSrc && jQuery.browser.mobile ? mobileSrc : image.getAttribute("data-src"), 
                    image.removeAttribute("data-src"), image.removeAttribute("data-src-mobile"), lazyLoader.cache.splice(i, 1);
                } else i++;
            }
            0 === lazyLoader.cache.length && lazyLoader.removeObservers();
        },
        init: function() {
            document.querySelectorAll || (document.querySelectorAll = function(selector) {
                var doc = document, head = doc.documentElement.firstChild, styleTag = doc.createElement("STYLE");
                return head.appendChild(styleTag), doc.__qsaels = [], styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsaels.push(this))}", 
                window.scrollBy(0, 0), doc.__qsaels;
            }), addEventListener("load", function _lazyLoaderInit() {
                for (var imageNodes = document.querySelectorAll("img[data-src]"), i = 0; i < imageNodes.length; i++) {
                    var imageNode = imageNodes[i];
                    lazyLoader.cache.push(imageNode);
                }
                lazyLoader.addObservers(), lazyLoader.loadVisibleImages(), removeEventListener("load", _lazyLoaderInit, !1);
            });
        }
    };
    lazyLoader.init();
}(), function() {
    "use strict";
    var hashes = {}, freq = 100, num = 0, pushState = !1, timer = null, currentUrl = null, freeze = function(obj) {
        return Object.freeze ? Object.freeze(obj) : obj;
    }, getHashParts = function() {
        return window.location.href.split("#");
    }, startTimer = function() {
        timer || (timer = setInterval(function() {
            num > 0 && currentUrl != window.location.href && (currentUrl = window.location.href, 
            window.Hash.check());
        }, freq));
    };
    window.Hash = freeze({
        pushState: function(yes) {
            return window.history && window.history.pushState && (pushState = yes), this;
        },
        fragment: function() {
            var hash = getHashParts();
            return pushState ? window.location.pathname + (hash[1] ? "#" + hash[1] : "") : hash[1] || "";
        },
        get: function(path, params) {
            var p, parameters = [];
            for (p in params) Object.prototype.hasOwnProperty(p) && parameters.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
            return parameters.length > 0 && (parameters = "?" + parameters.join("&")), pushState ? path + parameters : getHashParts()[0] + "#" + path + parameters;
        },
        go: function(hash, params) {
            if (this.fragment() != hash) {
                var to = this.get(hash, params);
                pushState ? window.history.pushState(null, document.title, to) : window.location.href = to;
            }
            return this;
        },
        update: function() {
            return currentUrl = window.location.href, this;
        },
        on: function(hash, callback, title) {
            return hashes[hash] || (hashes[hash] = {
                title: title,
                listeners: []
            }), hashes[hash].listeners.push(callback), num++, startTimer(), this;
        },
        check: function() {
            var i, hash, parts, fragment = this.fragment();
            for (hash in hashes) if (Object.prototype.hasOwnProperty.call(hashes, hash)) if (hashes[hash].regexp = hashes[hash].regexp || new RegExp(hash), 
            parts = hashes[hash].regexp.exec(fragment)) for (hashes[hash].title && (document.title = hashes[hash].title), 
            i = 0; i < hashes[hash].listeners.length; i++) hashes[hash].listeners[i].yep && hashes[hash].listeners[i].yep(fragment, parts); else for (i = 0; i < hashes[hash].listeners.length; i++) hashes[hash].listeners[i].nop && hashes[hash].listeners[i].nop(fragment);
            return this;
        }
    });
}(), "undefined" != typeof jQuery && !function($) {
    $.imgpreload = function(imgs, settings) {
        settings = $.extend({}, $.fn.imgpreload.defaults, settings instanceof Function ? {
            all: settings
        } : settings), "string" == typeof imgs && (imgs = new Array(imgs));
        var loaded = new Array();
        $.each(imgs, function(i, elem) {
            var img = new Image(), url = elem, img_obj = img;
            "string" != typeof elem && (url = $(elem).attr("src") || $(elem).css("background-image").replace(/^url\((?:"|')?(.*)(?:'|")?\)$/gm, "$1"), 
            img_obj = elem), $(img).bind("load error", function(e) {
                loaded.push(img_obj), $.data(img_obj, "loaded", "error" == e.type ? !1 : !0), settings.each instanceof Function && settings.each.call(img_obj), 
                loaded.length >= imgs.length && settings.all instanceof Function && settings.all.call(loaded), 
                $(this).unbind("load error");
            }), img.src = url;
        });
    }, $.fn.imgpreload = function(settings) {
        return $.imgpreload(this, settings), this;
    }, $.fn.imgpreload.defaults = {
        each: null,
        all: null
    };
}(jQuery), function($) {
    var methods = {
        init: function(options) {
            var defaults = {
                set_width: !1,
                set_height: !1,
                horizontalScroll: !1,
                scrollInertia: 950,
                mouseWheel: !0,
                mouseWheelPixels: "auto",
                autoDraggerLength: !0,
                autoHideScrollbar: !1,
                alwaysShowScrollbar: !1,
                snapAmount: null,
                snapOffset: 0,
                scrollButtons: {
                    enable: !1,
                    scrollType: "continuous",
                    scrollSpeed: "auto",
                    scrollAmount: 40
                },
                advanced: {
                    updateOnBrowserResize: !0,
                    updateOnContentResize: !1,
                    autoExpandHorizontalScroll: !1,
                    autoScrollOnFocus: !0,
                    normalizeMouseWheelDelta: !1
                },
                contentTouchScroll: !0,
                callbacks: {
                    onScrollStart: function() {},
                    onScroll: function() {},
                    onTotalScroll: function() {},
                    onTotalScrollBack: function() {},
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    whileScrolling: function() {}
                },
                theme: "light"
            }, options = $.extend(!0, defaults, options);
            return this.each(function() {
                var $this = $(this);
                if (options.set_width && $this.css("width", options.set_width), options.set_height && $this.css("height", options.set_height), 
                $(document).data("mCustomScrollbar-index")) {
                    var mCustomScrollbarIndex = parseInt($(document).data("mCustomScrollbar-index"));
                    $(document).data("mCustomScrollbar-index", mCustomScrollbarIndex + 1);
                } else $(document).data("mCustomScrollbar-index", "1");
                $this.wrapInner("<div class='mCustomScrollBox mCS-" + options.theme + "' id='mCSB_" + $(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + $(document).data("mCustomScrollbar-index"));
                var mCustomScrollBox = $this.children(".mCustomScrollBox");
                if (options.horizontalScroll) {
                    mCustomScrollBox.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                    var mCSB_h_wrapper = mCustomScrollBox.children(".mCSB_h_wrapper");
                    mCSB_h_wrapper.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                        width: mCSB_h_wrapper.children().outerWidth(),
                        position: "relative"
                    }).unwrap();
                } else mCustomScrollBox.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
                var mCSB_container = mCustomScrollBox.children(".mCSB_container");
                $.support.touch && mCSB_container.addClass("mCS_touch"), mCSB_container.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                var mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"), mCSB_draggerContainer = mCSB_scrollTools.children(".mCSB_draggerContainer"), mCSB_dragger = mCSB_draggerContainer.children(".mCSB_dragger");
                if (options.horizontalScroll ? mCSB_dragger.data("minDraggerWidth", mCSB_dragger.width()) : mCSB_dragger.data("minDraggerHeight", mCSB_dragger.height()), 
                options.scrollButtons.enable && (options.horizontalScroll ? mCSB_scrollTools.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>") : (mCSB_scrollTools.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>"), 
                mCustomScrollBox.append("<a class='mCSB_wideButtonUp icon-ico-mCSB' oncontextmenu='return false;'></a>").append("<a class='mCSB_wideButtonDown icon-ico-mCSB' oncontextmenu='return false;'></a>"))), 
                mCustomScrollBox.bind("scroll", function() {
                    $this.is(".mCS_disabled") || mCustomScrollBox.scrollTop(0).scrollLeft(0);
                }), $this.data({
                    mCS_Init: !0,
                    mCustomScrollbarIndex: $(document).data("mCustomScrollbar-index"),
                    horizontalScroll: options.horizontalScroll,
                    scrollInertia: options.scrollInertia,
                    scrollEasing: "mcsEaseOut",
                    mouseWheel: options.mouseWheel,
                    mouseWheelPixels: options.mouseWheelPixels,
                    autoDraggerLength: options.autoDraggerLength,
                    autoHideScrollbar: options.autoHideScrollbar,
                    alwaysShowScrollbar: options.alwaysShowScrollbar,
                    snapAmount: options.snapAmount,
                    snapOffset: options.snapOffset,
                    scrollButtons_enable: options.scrollButtons.enable,
                    scrollButtons_scrollType: options.scrollButtons.scrollType,
                    scrollButtons_scrollSpeed: options.scrollButtons.scrollSpeed,
                    scrollButtons_scrollAmount: options.scrollButtons.scrollAmount,
                    autoExpandHorizontalScroll: options.advanced.autoExpandHorizontalScroll,
                    autoScrollOnFocus: options.advanced.autoScrollOnFocus,
                    normalizeMouseWheelDelta: options.advanced.normalizeMouseWheelDelta,
                    contentTouchScroll: options.contentTouchScroll,
                    onScrollStart_Callback: options.callbacks.onScrollStart,
                    onScroll_Callback: options.callbacks.onScroll,
                    onTotalScroll_Callback: options.callbacks.onTotalScroll,
                    onTotalScrollBack_Callback: options.callbacks.onTotalScrollBack,
                    onTotalScroll_Offset: options.callbacks.onTotalScrollOffset,
                    onTotalScrollBack_Offset: options.callbacks.onTotalScrollBackOffset,
                    whileScrolling_Callback: options.callbacks.whileScrolling,
                    bindEvent_scrollbar_drag: !1,
                    bindEvent_content_touch: !1,
                    bindEvent_scrollbar_click: !1,
                    bindEvent_mousewheel: !1,
                    bindEvent_buttonsContinuous_y: !1,
                    bindEvent_buttonsContinuous_x: !1,
                    bindEvent_buttonsPixels_y: !1,
                    bindEvent_buttonsPixels_x: !1,
                    bindEvent_focusin: !1,
                    bindEvent_autoHideScrollbar: !1,
                    mCSB_buttonScrollRight: !1,
                    mCSB_buttonScrollLeft: !1,
                    mCSB_buttonScrollDown: !1,
                    mCSB_buttonScrollUp: !1
                }), options.horizontalScroll) "none" !== $this.css("max-width") && (options.advanced.updateOnContentResize || (options.advanced.updateOnContentResize = !0)); else if ("none" !== $this.css("max-height")) {
                    var percentage = !1, maxHeight = parseInt($this.css("max-height"));
                    $this.css("max-height").indexOf("%") >= 0 && (percentage = maxHeight, maxHeight = $this.parent().height() * percentage / 100), 
                    $this.css("overflow", "hidden"), mCustomScrollBox.css("max-height", maxHeight);
                }
                if ($this.mCustomScrollbar("update"), options.advanced.updateOnBrowserResize) {
                    var mCSB_resizeTimeout, currWinWidth = $(window).width(), currWinHeight = $(window).height();
                    $(window).bind("resize." + $this.data("mCustomScrollbarIndex"), function() {
                        mCSB_resizeTimeout && clearTimeout(mCSB_resizeTimeout), mCSB_resizeTimeout = setTimeout(function() {
                            if (!$this.is(".mCS_disabled") && !$this.is(".mCS_destroyed")) {
                                var winWidth = $(window).width(), winHeight = $(window).height();
                                (currWinWidth !== winWidth || currWinHeight !== winHeight) && ("none" !== $this.css("max-height") && percentage && mCustomScrollBox.css("max-height", $this.parent().height() * percentage / 100), 
                                $this.mCustomScrollbar("update"), currWinWidth = winWidth, currWinHeight = winHeight);
                            }
                        }, 150);
                    });
                }
                if (options.advanced.updateOnContentResize) {
                    var mCSB_onContentResize;
                    if (options.horizontalScroll) var mCSB_containerOldSize = mCSB_container.outerWidth(); else var mCSB_containerOldSize = mCSB_container.outerHeight();
                    mCSB_onContentResize = setInterval(function() {
                        if (options.horizontalScroll) {
                            options.advanced.autoExpandHorizontalScroll && mCSB_container.css({
                                position: "absolute",
                                width: "auto"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: mCSB_container.outerWidth(),
                                position: "relative"
                            }).unwrap();
                            var mCSB_containerNewSize = mCSB_container.outerWidth();
                        } else var mCSB_containerNewSize = mCSB_container.outerHeight();
                        mCSB_containerNewSize != mCSB_containerOldSize && ($this.mCustomScrollbar("update"), 
                        mCSB_containerOldSize = mCSB_containerNewSize);
                    }, 300);
                }
            });
        },
        update: function() {
            var $this = $(this), mCustomScrollBox = $this.children(".mCustomScrollBox"), mCSB_container = mCustomScrollBox.children(".mCSB_container");
            mCSB_container.removeClass("mCS_no_scrollbar"), $this.removeClass("mCS_disabled mCS_destroyed"), 
            mCustomScrollBox.scrollTop(0).scrollLeft(0);
            var mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"), mCSB_draggerContainer = mCSB_scrollTools.children(".mCSB_draggerContainer"), mCSB_dragger = mCSB_draggerContainer.children(".mCSB_dragger");
            if ($this.data("horizontalScroll")) {
                var mCSB_buttonLeft = mCSB_scrollTools.children(".mCSB_buttonLeft"), mCSB_buttonRight = mCSB_scrollTools.children(".mCSB_buttonRight"), mCustomScrollBoxW = mCustomScrollBox.width();
                $this.data("autoExpandHorizontalScroll") && mCSB_container.css({
                    position: "absolute",
                    width: "auto"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: mCSB_container.outerWidth(),
                    position: "relative"
                }).unwrap();
                var mCSB_containerW = mCSB_container.outerWidth();
            } else {
                var mCSB_buttonUp = mCSB_scrollTools.children(".mCSB_buttonUp"), mCSB_buttonDown = mCSB_scrollTools.children(".mCSB_buttonDown"), mCustomScrollBoxH = mCustomScrollBox.height(), mCSB_containerH = mCSB_container.outerHeight(), mCSB_wideButtonUp = mCustomScrollBox.children(".mCSB_wideButtonUp"), mCSB_wideButtonDown = mCustomScrollBox.children(".mCSB_wideButtonDown");
                mCSB_wideButtonUp.addClass("isHidden"), mCSB_wideButtonDown.addClass("isHidden");
            }
            if (mCSB_containerH > mCustomScrollBoxH && !$this.data("horizontalScroll")) {
                mCSB_scrollTools.css("display", "block");
                var mCSB_draggerContainerH = mCSB_draggerContainer.height();
                if ($this.data("autoDraggerLength")) {
                    var draggerH = Math.round(mCustomScrollBoxH / mCSB_containerH * mCSB_draggerContainerH), minDraggerH = mCSB_dragger.data("minDraggerHeight");
                    if (minDraggerH >= draggerH) mCSB_dragger.css({
                        height: minDraggerH
                    }); else if (draggerH >= mCSB_draggerContainerH - 10) {
                        var mCSB_draggerContainerMaxH = mCSB_draggerContainerH - 10;
                        mCSB_dragger.css({
                            height: mCSB_draggerContainerMaxH
                        });
                    } else mCSB_dragger.css({
                        height: draggerH
                    });
                    mCSB_dragger.children(".mCSB_dragger_bar").css({
                        "line-height": mCSB_dragger.height() + "px"
                    });
                }
                var mCSB_draggerH = mCSB_dragger.height(), scrollAmount = (mCSB_containerH - mCustomScrollBoxH) / (mCSB_draggerContainerH - mCSB_draggerH);
                $this.data("scrollAmount", scrollAmount).mCustomScrollbar("scrolling", mCustomScrollBox, mCSB_container, mCSB_draggerContainer, mCSB_dragger, mCSB_buttonUp, mCSB_buttonDown, mCSB_buttonLeft, mCSB_buttonRight, mCSB_wideButtonUp, mCSB_wideButtonDown), 
                mCSB_container.position().top >= 0 && mCSB_wideButtonDown.removeClass("isHidden");
                var mCSB_containerP = Math.abs(mCSB_container.position().top);
                $this.mCustomScrollbar("scrollTo", mCSB_containerP, {
                    scrollInertia: 0,
                    trigger: "internal"
                });
            } else if (mCSB_containerW > mCustomScrollBoxW && $this.data("horizontalScroll")) {
                mCSB_scrollTools.css("display", "block");
                var mCSB_draggerContainerW = mCSB_draggerContainer.width();
                if ($this.data("autoDraggerLength")) {
                    var draggerW = Math.round(mCustomScrollBoxW / mCSB_containerW * mCSB_draggerContainerW), minDraggerW = mCSB_dragger.data("minDraggerWidth");
                    if (minDraggerW >= draggerW) mCSB_dragger.css({
                        width: minDraggerW
                    }); else if (draggerW >= mCSB_draggerContainerW - 10) {
                        var mCSB_draggerContainerMaxW = mCSB_draggerContainerW - 10;
                        mCSB_dragger.css({
                            width: mCSB_draggerContainerMaxW
                        });
                    } else mCSB_dragger.css({
                        width: draggerW
                    });
                }
                var mCSB_draggerW = mCSB_dragger.width(), scrollAmount = (mCSB_containerW - mCustomScrollBoxW) / (mCSB_draggerContainerW - mCSB_draggerW);
                $this.data("scrollAmount", scrollAmount).mCustomScrollbar("scrolling", mCustomScrollBox, mCSB_container, mCSB_draggerContainer, mCSB_dragger, mCSB_buttonUp, mCSB_buttonDown, mCSB_buttonLeft, mCSB_buttonRight, mCSB_wideButtonUp, mCSB_wideButtonDown);
                var mCSB_containerP = Math.abs(mCSB_container.position().left);
                $this.mCustomScrollbar("scrollTo", mCSB_containerP, {
                    scrollInertia: 0,
                    trigger: "internal"
                });
            } else mCustomScrollBox.unbind("mousewheel focusin"), $this.data("horizontalScroll") ? mCSB_dragger.add(mCSB_container).css("left", 0) : mCSB_dragger.add(mCSB_container).css("top", 0), 
            $this.data("alwaysShowScrollbar") ? $this.data("horizontalScroll") ? $this.data("horizontalScroll") && mCSB_dragger.css({
                width: mCSB_draggerContainer.width()
            }) : mCSB_dragger.css({
                height: mCSB_draggerContainer.height()
            }) : (mCSB_scrollTools.css("display", "none"), mCSB_container.addClass("mCS_no_scrollbar")), 
            $this.data({
                bindEvent_mousewheel: !1,
                bindEvent_focusin: !1
            });
        },
        scrolling: function(mCustomScrollBox, mCSB_container, mCSB_draggerContainer, mCSB_dragger, mCSB_buttonUp, mCSB_buttonDown, mCSB_buttonLeft, mCSB_buttonRight, mCSB_wideButtonUp, mCSB_wideButtonDown) {
            function scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x) {
                $this.data("horizontalScroll") ? $this.mCustomScrollbar("scrollTo", mCSB_dragger.position().left - mCSB_draggerDragX + x, {
                    moveDragger: !0,
                    trigger: "internal"
                }) : $this.mCustomScrollbar("scrollTo", mCSB_dragger.position().top - mCSB_draggerDragY + y, {
                    moveDragger: !0,
                    trigger: "internal"
                });
            }
            function PixelsScrollTo(to) {
                mCSB_dragger.data("preventAction") || (mCSB_dragger.data("preventAction", !0), $this.mCustomScrollbar("scrollTo", to, {
                    trigger: "internal"
                }));
            }
            function ScrollButtonsSpeed() {
                var speed = $this.data("scrollButtons_scrollSpeed");
                return "auto" === $this.data("scrollButtons_scrollSpeed") && (speed = Math.round(($this.data("scrollInertia") + 100) / 40)), 
                speed;
            }
            var $this = $(this);
            if (!$this.data("bindEvent_scrollbar_drag")) {
                var mCSB_draggerDragY, mCSB_draggerDragX, mCSB_dragger_downEvent, mCSB_dragger_moveEvent, mCSB_dragger_upEvent;
                $.support.pointer ? (mCSB_dragger_downEvent = "pointerdown", mCSB_dragger_moveEvent = "pointermove", 
                mCSB_dragger_upEvent = "pointerup") : $.support.msPointer && (mCSB_dragger_downEvent = "MSPointerDown", 
                mCSB_dragger_moveEvent = "MSPointerMove", mCSB_dragger_upEvent = "MSPointerUp"), 
                $.support.pointer || $.support.msPointer ? (mCSB_dragger.bind(mCSB_dragger_downEvent, function(e) {
                    e.preventDefault(), $this.data({
                        on_drag: !0
                    }), mCSB_dragger.addClass("mCSB_dragger_onDrag");
                    var elem = $(this), elemOffset = elem.offset(), x = e.originalEvent.pageX - elemOffset.left, y = e.originalEvent.pageY - elemOffset.top;
                    x < elem.width() && x > 0 && y < elem.height() && y > 0 && (mCSB_draggerDragY = y, 
                    mCSB_draggerDragX = x);
                }), $(document).bind(mCSB_dragger_moveEvent + "." + $this.data("mCustomScrollbarIndex"), function(e) {
                    if (e.preventDefault(), $this.data("on_drag")) {
                        var elem = mCSB_dragger, elemOffset = elem.offset(), x = e.originalEvent.pageX - elemOffset.left, y = e.originalEvent.pageY - elemOffset.top;
                        scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x);
                    }
                }).bind(mCSB_dragger_upEvent + "." + $this.data("mCustomScrollbarIndex"), function() {
                    $this.data({
                        on_drag: !1
                    }), mCSB_dragger.removeClass("mCSB_dragger_onDrag");
                })) : (mCSB_dragger.bind("mousedown touchstart", function(e) {
                    e.preventDefault(), e.stopImmediatePropagation();
                    var x, y, elem = $(this), elemOffset = elem.offset();
                    if ("touchstart" === e.type) {
                        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        x = touch.pageX - elemOffset.left, y = touch.pageY - elemOffset.top;
                    } else $this.data({
                        on_drag: !0
                    }), mCSB_dragger.addClass("mCSB_dragger_onDrag"), x = e.pageX - elemOffset.left, 
                    y = e.pageY - elemOffset.top;
                    x < elem.width() && x > 0 && y < elem.height() && y > 0 && (mCSB_draggerDragY = y, 
                    mCSB_draggerDragX = x);
                }).bind("touchmove", function(e) {
                    e.preventDefault(), e.stopImmediatePropagation();
                    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], elem = $(this), elemOffset = elem.offset(), x = touch.pageX - elemOffset.left, y = touch.pageY - elemOffset.top;
                    scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x);
                }), $(document).bind("mousemove." + $this.data("mCustomScrollbarIndex"), function(e) {
                    if ($this.data("on_drag")) {
                        var elem = mCSB_dragger, elemOffset = elem.offset(), x = e.pageX - elemOffset.left, y = e.pageY - elemOffset.top;
                        scrollbarDrag(mCSB_draggerDragY, mCSB_draggerDragX, y, x);
                    }
                }).bind("mouseup." + $this.data("mCustomScrollbarIndex"), function() {
                    $this.data({
                        on_drag: !1
                    }), mCSB_dragger.removeClass("mCSB_dragger_onDrag");
                })), $this.data({
                    bindEvent_scrollbar_drag: !0
                });
            }
            if ($.support.touch && $this.data("contentTouchScroll") && !$this.data("bindEvent_content_touch")) {
                var touch, elem, elemOffset, y, x, mCSB_containerTouchY, mCSB_containerTouchX;
                mCSB_container.bind("touchstart", function(e) {
                    e.stopImmediatePropagation(), touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], 
                    elem = $(this), elemOffset = elem.offset(), x = touch.pageX - elemOffset.left, y = touch.pageY - elemOffset.top, 
                    mCSB_containerTouchY = y, mCSB_containerTouchX = x;
                }), mCSB_container.bind("touchmove", function(e) {
                    e.preventDefault(), e.stopImmediatePropagation(), touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], 
                    elem = $(this).parent(), elemOffset = elem.offset(), x = touch.pageX - elemOffset.left, 
                    y = touch.pageY - elemOffset.top, $this.data("horizontalScroll") ? $this.mCustomScrollbar("scrollTo", mCSB_containerTouchX - x, {
                        trigger: "internal"
                    }) : $this.mCustomScrollbar("scrollTo", mCSB_containerTouchY - y, {
                        trigger: "internal"
                    });
                });
            }
            if ($this.data("bindEvent_scrollbar_click") || (mCSB_draggerContainer.bind("click", function(e) {
                var scrollToPos = (e.pageY - mCSB_draggerContainer.offset().top) * $this.data("scrollAmount"), target = $(e.target);
                $this.data("horizontalScroll") && (scrollToPos = (e.pageX - mCSB_draggerContainer.offset().left) * $this.data("scrollAmount")), 
                (target.hasClass("mCSB_draggerContainer") || target.hasClass("mCSB_draggerRail")) && $this.mCustomScrollbar("scrollTo", scrollToPos, {
                    trigger: "internal",
                    scrollEasing: "draggerRailEase"
                });
            }), $this.data({
                bindEvent_scrollbar_click: !0
            })), $this.data("mouseWheel") && ($this.data("bindEvent_mousewheel") || (mCustomScrollBox.bind("mousewheel", function(e, delta) {
                var scrollTo, mouseWheelPixels = $this.data("mouseWheelPixels"), absPos = Math.abs(mCSB_container.position().top), draggerPos = mCSB_dragger.position().top, limit = mCSB_draggerContainer.height() - mCSB_dragger.height();
                $this.data("normalizeMouseWheelDelta") && (delta = 0 > delta ? -1 : 1), "auto" === mouseWheelPixels && (mouseWheelPixels = 100 + Math.round($this.data("scrollAmount") / 2)), 
                $this.data("horizontalScroll") && (draggerPos = mCSB_dragger.position().left, limit = mCSB_draggerContainer.width() - mCSB_dragger.width(), 
                absPos = Math.abs(mCSB_container.position().left)), (delta > 0 && 0 !== draggerPos || 0 > delta && draggerPos !== limit) && (e.preventDefault(), 
                e.stopImmediatePropagation()), scrollTo = absPos - delta * mouseWheelPixels, $this.mCustomScrollbar("scrollTo", scrollTo, {
                    trigger: "internal"
                });
            }), $this.data({
                bindEvent_mousewheel: !0
            }))), $this.data("scrollButtons_enable")) if ("pixels" === $this.data("scrollButtons_scrollType")) $this.data("horizontalScroll") ? (mCSB_buttonRight.add(mCSB_buttonLeft).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", mCSB_buttonRight_stop, mCSB_buttonLeft_stop), 
            $this.data({
                bindEvent_buttonsContinuous_x: !1
            }), $this.data("bindEvent_buttonsPixels_x") || (mCSB_buttonRight.bind("click", function(e) {
                e.preventDefault(), PixelsScrollTo(Math.abs(mCSB_container.position().left) + $this.data("scrollButtons_scrollAmount"));
            }), mCSB_buttonLeft.bind("click", function(e) {
                e.preventDefault(), PixelsScrollTo(Math.abs(mCSB_container.position().left) - $this.data("scrollButtons_scrollAmount"));
            }), $this.data({
                bindEvent_buttonsPixels_x: !0
            }))) : (mCSB_buttonDown.add(mCSB_buttonUp).add(mCSB_wideButtonDown).add(mCSB_wideButtonUp).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", mCSB_buttonRight_stop, mCSB_buttonLeft_stop), 
            $this.data({
                bindEvent_buttonsContinuous_y: !1
            }), $this.data("bindEvent_buttonsPixels_y") || (mCSB_buttonDown.bind("click", function(e) {
                e.preventDefault(), PixelsScrollTo(Math.abs(mCSB_container.position().top) + $this.data("scrollButtons_scrollAmount"));
            }), mCSB_buttonUp.bind("click", function(e) {
                e.preventDefault(), PixelsScrollTo(Math.abs(mCSB_container.position().top) - $this.data("scrollButtons_scrollAmount"));
            }), mCSB_wideButtonDown.bind("click", function(e) {
                e.preventDefault(), PixelsScrollTo(Math.abs(mCSB_container.position().top) + $this.data("scrollButtons_scrollAmount"));
            }), mCSB_wideButtonUp.bind("click", function(e) {
                e.preventDefault(), PixelsScrollTo(Math.abs(mCSB_container.position().top) - $this.data("scrollButtons_scrollAmount"));
            }), $this.data({
                bindEvent_buttonsPixels_y: !0
            }))); else if ($this.data("horizontalScroll")) {
                if (mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click"), $this.data({
                    bindEvent_buttonsPixels_x: !1
                }), !$this.data("bindEvent_buttonsContinuous_x")) {
                    mCSB_buttonRight.bind("mousedown touchstart MSPointerDown pointerdown", function(e) {
                        e.preventDefault();
                        var scrollButtonsSpeed = ScrollButtonsSpeed();
                        $this.data({
                            mCSB_buttonScrollRight: setInterval(function() {
                                $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().left) + scrollButtonsSpeed, {
                                    trigger: "internal",
                                    scrollEasing: "easeOutCirc"
                                });
                            }, 17)
                        });
                    });
                    var mCSB_buttonRight_stop = function(e) {
                        e.preventDefault(), clearInterval($this.data("mCSB_buttonScrollRight"));
                    };
                    mCSB_buttonRight.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonRight_stop), 
                    mCSB_buttonLeft.bind("mousedown touchstart MSPointerDown pointerdown", function(e) {
                        e.preventDefault();
                        var scrollButtonsSpeed = ScrollButtonsSpeed();
                        $this.data({
                            mCSB_buttonScrollLeft: setInterval(function() {
                                $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().left) - scrollButtonsSpeed, {
                                    trigger: "internal",
                                    scrollEasing: "easeOutCirc"
                                });
                            }, 17)
                        });
                    });
                    var mCSB_buttonLeft_stop = function(e) {
                        e.preventDefault(), clearInterval($this.data("mCSB_buttonScrollLeft"));
                    };
                    mCSB_buttonLeft.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonLeft_stop), 
                    $this.data({
                        bindEvent_buttonsContinuous_x: !0
                    });
                }
            } else if (mCSB_buttonDown.add(mCSB_buttonUp).add(mCSB_wideButtonDown).add(mCSB_wideButtonUp).unbind("click"), 
            $this.data({
                bindEvent_buttonsPixels_y: !1
            }), !$this.data("bindEvent_buttonsContinuous_y")) {
                mCSB_buttonDown.add(mCSB_wideButtonDown).bind("mousedown touchstart MSPointerDown pointerdown", function(e) {
                    e.preventDefault();
                    var scrollButtonsSpeed = ScrollButtonsSpeed();
                    $this.data({
                        mCSB_buttonScrollDown: setInterval(function() {
                            $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().top) + scrollButtonsSpeed, {
                                trigger: "internal",
                                scrollEasing: "easeOutCirc"
                            });
                        }, 17)
                    });
                });
                var mCSB_buttonDown_stop = function(e) {
                    e.preventDefault(), clearInterval($this.data("mCSB_buttonScrollDown"));
                };
                mCSB_buttonDown.add(mCSB_wideButtonDown).bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonDown_stop), 
                mCSB_buttonUp.add(mCSB_wideButtonUp).bind("mousedown touchstart MSPointerDown pointerdown", function(e) {
                    e.preventDefault();
                    var scrollButtonsSpeed = ScrollButtonsSpeed();
                    $this.data({
                        mCSB_buttonScrollUp: setInterval(function() {
                            $this.mCustomScrollbar("scrollTo", Math.abs(mCSB_container.position().top) - scrollButtonsSpeed, {
                                trigger: "internal",
                                scrollEasing: "easeOutCirc"
                            });
                        }, 17)
                    });
                });
                var mCSB_buttonUp_stop = function(e) {
                    e.preventDefault(), clearInterval($this.data("mCSB_buttonScrollUp"));
                };
                mCSB_buttonUp.add(mCSB_wideButtonUp).bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", mCSB_buttonUp_stop), 
                $this.data({
                    bindEvent_buttonsContinuous_y: !0
                });
            }
            $this.data("autoScrollOnFocus") && ($this.data("bindEvent_focusin") || (mCustomScrollBox.bind("focusin", function() {
                mCustomScrollBox.scrollTop(0).scrollLeft(0);
                var focusedElem = $(document.activeElement);
                if (focusedElem.is("input,textarea,select,button,a[tabindex],area,object")) {
                    var mCSB_containerPos = mCSB_container.position().top, focusedElemPos = focusedElem.position().top, visibleLimit = mCustomScrollBox.height() - focusedElem.outerHeight();
                    $this.data("horizontalScroll") && (mCSB_containerPos = mCSB_container.position().left, 
                    focusedElemPos = focusedElem.position().left, visibleLimit = mCustomScrollBox.width() - focusedElem.outerWidth()), 
                    (0 > mCSB_containerPos + focusedElemPos || mCSB_containerPos + focusedElemPos > visibleLimit) && $this.mCustomScrollbar("scrollTo", focusedElemPos, {
                        trigger: "internal"
                    });
                }
            }), $this.data({
                bindEvent_focusin: !0
            }))), $this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar") && ($this.data("bindEvent_autoHideScrollbar") || (mCustomScrollBox.bind("mouseenter", function() {
                mCustomScrollBox.addClass("mCS-mouse-over"), functions.showScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));
            }).bind("mouseleave touchend", function(e) {
                mCustomScrollBox.removeClass("mCS-mouse-over"), "mouseleave" === e.type && functions.hideScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));
            }), $this.data({
                bindEvent_autoHideScrollbar: !0
            })));
        },
        scrollTo: function(scrollTo, options) {
            function callbacks(cb) {
                if ($this.data("mCustomScrollbarIndex")) switch (this.mcs = {
                    top: mCSB_container.position().top,
                    left: mCSB_container.position().left,
                    draggerTop: mCSB_dragger.position().top,
                    draggerLeft: mCSB_dragger.position().left,
                    topPct: Math.round(100 * Math.abs(mCSB_container.position().top) / Math.abs(mCSB_container.outerHeight() - mCustomScrollBox.height())),
                    leftPct: Math.round(100 * Math.abs(mCSB_container.position().left) / Math.abs(mCSB_container.outerWidth() - mCustomScrollBox.width()))
                }, cb) {
                  case "onScrollStart":
                    $this.data("mCS_tweenRunning", !0).data("onScrollStart_Callback").call($this, this.mcs), 
                    mCSB_wideButtonUp.removeClass("isHidden"), mCSB_wideButtonDown.removeClass("isHidden");
                    break;

                  case "whileScrolling":
                    $this.data("whileScrolling_Callback").call($this, this.mcs);
                    break;

                  case "onScroll":
                    $this.data("onScroll_Callback").call($this, this.mcs), this.mcs.top >= 0 && mCSB_wideButtonUp.addClass("isHidden");
                    break;

                  case "onTotalScrollBack":
                    $this.data("onTotalScrollBack_Callback").call($this, this.mcs), mCSB_wideButtonUp.addClass("isHidden");
                    break;

                  case "onTotalScroll":
                    $this.data("onTotalScroll_Callback").call($this, this.mcs), mCSB_wideButtonDown.addClass("isHidden");
                }
            }
            var draggerScrollTo, scrollBeginning, scrollBeginningOffset, totalScroll, totalScrollOffset, $this = $(this), defaults = {
                moveDragger: !1,
                trigger: "external",
                callbacks: !0,
                scrollInertia: $this.data("scrollInertia"),
                scrollEasing: $this.data("scrollEasing")
            }, options = $.extend(defaults, options), mCustomScrollBox = $this.children(".mCustomScrollBox"), mCSB_container = mCustomScrollBox.children(".mCSB_container"), mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"), mCSB_draggerContainer = mCSB_scrollTools.children(".mCSB_draggerContainer"), mCSB_dragger = mCSB_draggerContainer.children(".mCSB_dragger"), contentSpeed = draggerSpeed = options.scrollInertia, mCSB_wideButtonUp = mCustomScrollBox.children(".mCSB_wideButtonUp"), mCSB_wideButtonDown = mCustomScrollBox.children(".mCSB_wideButtonDown");
            if (!mCSB_container.hasClass("mCS_no_scrollbar") && ($this.data({
                mCS_trigger: options.trigger
            }), $this.data("mCS_Init") && (options.callbacks = !1), scrollTo || 0 === scrollTo)) {
                if ("number" == typeof scrollTo) options.moveDragger ? (draggerScrollTo = scrollTo, 
                scrollTo = $this.data("horizontalScroll") ? mCSB_dragger.position().left * $this.data("scrollAmount") : mCSB_dragger.position().top * $this.data("scrollAmount"), 
                draggerSpeed = 0) : draggerScrollTo = scrollTo / $this.data("scrollAmount"); else if ("string" == typeof scrollTo) {
                    var target;
                    target = "top" === scrollTo ? 0 : "bottom" !== scrollTo || $this.data("horizontalScroll") ? "left" === scrollTo ? 0 : "right" === scrollTo && $this.data("horizontalScroll") ? mCSB_container.outerWidth() - mCustomScrollBox.width() : "first" === scrollTo ? $this.find(".mCSB_container").find(":first") : "last" === scrollTo ? $this.find(".mCSB_container").find(":last") : $this.find(scrollTo) : mCSB_container.outerHeight() - mCustomScrollBox.height(), 
                    1 === target.length ? (scrollTo = $this.data("horizontalScroll") ? target.position().left : target.position().top, 
                    draggerScrollTo = scrollTo / $this.data("scrollAmount")) : draggerScrollTo = scrollTo = target;
                }
                if ($this.data("horizontalScroll")) {
                    $this.data("onTotalScrollBack_Offset") && (scrollBeginningOffset = -$this.data("onTotalScrollBack_Offset")), 
                    $this.data("onTotalScroll_Offset") && (totalScrollOffset = mCustomScrollBox.width() - mCSB_container.outerWidth() + $this.data("onTotalScroll_Offset")), 
                    0 > draggerScrollTo ? (draggerScrollTo = scrollTo = 0, clearInterval($this.data("mCSB_buttonScrollLeft")), 
                    scrollBeginningOffset || (scrollBeginning = !0)) : draggerScrollTo >= mCSB_draggerContainer.width() - mCSB_dragger.width() ? (draggerScrollTo = mCSB_draggerContainer.width() - mCSB_dragger.width(), 
                    scrollTo = mCustomScrollBox.width() - mCSB_container.outerWidth(), clearInterval($this.data("mCSB_buttonScrollRight")), 
                    totalScrollOffset || (totalScroll = !0)) : scrollTo = -scrollTo;
                    var snapAmount = $this.data("snapAmount");
                    snapAmount && (scrollTo = Math.round(scrollTo / snapAmount) * snapAmount - $this.data("snapOffset")), 
                    functions.mTweenAxis.call(this, mCSB_dragger[0], "left", Math.round(draggerScrollTo), draggerSpeed, options.scrollEasing), 
                    functions.mTweenAxis.call(this, mCSB_container[0], "left", Math.round(scrollTo), contentSpeed, options.scrollEasing, {
                        onStart: function() {
                            options.callbacks && !$this.data("mCS_tweenRunning") && callbacks("onScrollStart"), 
                            $this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar") && functions.showScrollbar.call(mCSB_scrollTools);
                        },
                        onUpdate: function() {
                            options.callbacks && callbacks("whileScrolling");
                        },
                        onComplete: function() {
                            options.callbacks && (callbacks("onScroll"), (scrollBeginning || scrollBeginningOffset && mCSB_container.position().left >= scrollBeginningOffset) && callbacks("onTotalScrollBack"), 
                            (totalScroll || totalScrollOffset && mCSB_container.position().left <= totalScrollOffset) && callbacks("onTotalScroll")), 
                            mCSB_dragger.data("preventAction", !1), $this.data("mCS_tweenRunning", !1), $this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar") && (mCustomScrollBox.hasClass("mCS-mouse-over") || functions.hideScrollbar.call(mCSB_scrollTools));
                        }
                    });
                } else {
                    $this.data("onTotalScrollBack_Offset") && (scrollBeginningOffset = -$this.data("onTotalScrollBack_Offset")), 
                    $this.data("onTotalScroll_Offset") && (totalScrollOffset = mCustomScrollBox.height() - mCSB_container.outerHeight() + $this.data("onTotalScroll_Offset")), 
                    0 > draggerScrollTo ? (draggerScrollTo = scrollTo = 0, clearInterval($this.data("mCSB_buttonScrollUp")), 
                    scrollBeginningOffset || (scrollBeginning = !0)) : draggerScrollTo >= mCSB_draggerContainer.height() - mCSB_dragger.height() ? (draggerScrollTo = mCSB_draggerContainer.height() - mCSB_dragger.height(), 
                    scrollTo = mCustomScrollBox.height() - mCSB_container.outerHeight(), clearInterval($this.data("mCSB_buttonScrollDown")), 
                    totalScrollOffset || (totalScroll = !0)) : scrollTo = -scrollTo;
                    var snapAmount = $this.data("snapAmount");
                    snapAmount && (scrollTo = Math.round(scrollTo / snapAmount) * snapAmount - $this.data("snapOffset")), 
                    functions.mTweenAxis.call(this, mCSB_dragger[0], "top", Math.round(draggerScrollTo), draggerSpeed, options.scrollEasing), 
                    functions.mTweenAxis.call(this, mCSB_container[0], "top", Math.round(scrollTo), contentSpeed, options.scrollEasing, {
                        onStart: function() {
                            options.callbacks && !$this.data("mCS_tweenRunning") && callbacks("onScrollStart"), 
                            $this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar") && functions.showScrollbar.call(mCSB_scrollTools);
                        },
                        onUpdate: function() {
                            options.callbacks && callbacks("whileScrolling");
                        },
                        onComplete: function() {
                            options.callbacks && (callbacks("onScroll"), (scrollBeginning || scrollBeginningOffset && mCSB_container.position().top >= scrollBeginningOffset) && callbacks("onTotalScrollBack"), 
                            (totalScroll || totalScrollOffset && mCSB_container.position().top <= totalScrollOffset) && callbacks("onTotalScroll")), 
                            mCSB_dragger.data("preventAction", !1), $this.data("mCS_tweenRunning", !1), $this.data("autoHideScrollbar") && !$this.data("alwaysShowScrollbar") && (mCustomScrollBox.hasClass("mCS-mouse-over") || functions.hideScrollbar.call(mCSB_scrollTools));
                        }
                    });
                }
                $this.data("mCS_Init") && $this.data({
                    mCS_Init: !1
                });
            }
        },
        stop: function() {
            var $this = $(this), mCSB_container = $this.children().children(".mCSB_container"), mCSB_dragger = $this.children().children().children().children(".mCSB_dragger");
            functions.mTweenAxisStop.call(this, mCSB_container[0]), functions.mTweenAxisStop.call(this, mCSB_dragger[0]);
        },
        disable: function(resetScroll) {
            var $this = $(this), mCustomScrollBox = $this.children(".mCustomScrollBox"), mCSB_container = mCustomScrollBox.children(".mCSB_container"), mCSB_scrollTools = mCustomScrollBox.children(".mCSB_scrollTools"), mCSB_dragger = mCSB_scrollTools.children().children(".mCSB_dragger");
            mCustomScrollBox.unbind("mousewheel focusin mouseenter mouseleave touchend"), mCSB_container.unbind("touchstart touchmove"), 
            resetScroll && ($this.data("horizontalScroll") ? mCSB_dragger.add(mCSB_container).css("left", 0) : mCSB_dragger.add(mCSB_container).css("top", 0)), 
            mCSB_scrollTools.css("display", "none"), mCSB_container.addClass("mCS_no_scrollbar"), 
            $this.data({
                bindEvent_mousewheel: !1,
                bindEvent_focusin: !1,
                bindEvent_content_touch: !1,
                bindEvent_autoHideScrollbar: !1
            }).addClass("mCS_disabled");
        },
        destroy: function() {
            var $this = $(this);
            $this.removeClass("mCustomScrollbar _mCS_" + $this.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove(), 
            $(document).unbind("mousemove." + $this.data("mCustomScrollbarIndex") + " mouseup." + $this.data("mCustomScrollbarIndex") + " MSPointerMove." + $this.data("mCustomScrollbarIndex") + " MSPointerUp." + $this.data("mCustomScrollbarIndex")), 
            $(window).unbind("resize." + $this.data("mCustomScrollbarIndex"));
        }
    }, functions = {
        showScrollbar: function() {
            this.stop().animate({
                opacity: 1
            }, "fast");
        },
        hideScrollbar: function() {
            this.stop().animate({
                opacity: 0
            }, "fast");
        },
        mTweenAxis: function(el, prop, to, duration, easing, callbacks) {
            function _getTime() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
            }
            function _step() {
                progress || onStart.call(), progress = _getTime() - startTime, _tween(), progress >= el._time && (el._time = progress > el._time ? progress + _delay - (progress - el._time) : progress + _delay - 1, 
                el._time < progress + 1 && (el._time = progress + 1)), el._time < duration ? el._id = _request(_step) : onComplete.call();
            }
            function _tween() {
                duration > 0 ? (el.currVal = _ease(el._time, from, diff, duration, easing), elStyle[prop] = Math.round(el.currVal) + "px") : elStyle[prop] = to + "px", 
                onUpdate.call();
            }
            function _startTween() {
                _delay = 1e3 / 60, el._time = progress + _delay, _request = window.requestAnimationFrame ? window.requestAnimationFrame : function(f) {
                    return _tween(), setTimeout(f, .01);
                }, el._id = _request(_step);
            }
            function _cancelTween() {
                null != el._id && (window.requestAnimationFrame ? window.cancelAnimationFrame(el._id) : clearTimeout(el._id), 
                el._id = null);
            }
            function _ease(t, b, c, d, type) {
                switch (type) {
                  case "linear":
                    return c * t / d + b;

                  case "easeOutQuad":
                    return t /= d, -c * t * (t - 2) + b;

                  case "easeInOutQuad":
                    return t /= d / 2, 1 > t ? c / 2 * t * t + b : (t--, -c / 2 * (t * (t - 2) - 1) + b);

                  case "easeOutCubic":
                    return t /= d, t--, c * (t * t * t + 1) + b;

                  case "easeOutQuart":
                    return t /= d, t--, -c * (t * t * t * t - 1) + b;

                  case "easeOutQuint":
                    return t /= d, t--, c * (t * t * t * t * t + 1) + b;

                  case "easeOutCirc":
                    return t /= d, t--, c * Math.sqrt(1 - t * t) + b;

                  case "easeOutSine":
                    return c * Math.sin(t / d * (Math.PI / 2)) + b;

                  case "easeOutExpo":
                    return c * (-Math.pow(2, -10 * t / d) + 1) + b;

                  case "mcsEaseOut":
                    var ts = (t /= d) * t, tc = ts * t;
                    return b + c * (.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);

                  case "draggerRailEase":
                    return t /= d / 2, 1 > t ? c / 2 * t * t * t + b : (t -= 2, c / 2 * (t * t * t + 2) + b);
                }
            }
            var _delay, callbacks = callbacks || {}, onStart = callbacks.onStart || function() {}, onUpdate = callbacks.onUpdate || function() {}, onComplete = callbacks.onComplete || function() {}, startTime = _getTime(), progress = 0, from = el.offsetTop, elStyle = el.style;
            "left" === prop && (from = el.offsetLeft);
            var diff = to - from;
            _cancelTween(), _startTween();
        },
        mTweenAxisStop: function(el) {
            null != el._id && (window.requestAnimationFrame ? window.cancelAnimationFrame(el._id) : clearTimeout(el._id), 
            el._id = null);
        },
        rafPolyfill: function() {
            for (var pfx = [ "ms", "moz", "webkit", "o" ], i = pfx.length; --i > -1 && !window.requestAnimationFrame; ) window.requestAnimationFrame = window[pfx[i] + "RequestAnimationFrame"], 
            window.cancelAnimationFrame = window[pfx[i] + "CancelAnimationFrame"] || window[pfx[i] + "CancelRequestAnimationFrame"];
        }
    };
    functions.rafPolyfill.call(), $.support.touch = !!("ontouchstart" in window), $.support.pointer = window.navigator.pointerEnabled, 
    $.support.msPointer = window.navigator.msPointerEnabled;
    var _dlp = "https:" == document.location.protocol ? "https:" : "http:";
    $.event.special.mousewheel || document.write('<script src="' + _dlp + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"></script>'), 
    $.fn.mCustomScrollbar = function(method) {
        return methods[method] ? methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof method && method ? void $.error("Method " + method + " does not exist") : methods.init.apply(this, arguments);
    };
}(jQuery), function() {
    var COUNT_FRAMERATE, COUNT_MS_PER_FRAME, DIGIT_FORMAT, DIGIT_HTML, DIGIT_SPEEDBOOST, DURATION, FORMAT_MARK_HTML, FORMAT_PARSER, FRAMERATE, FRAMES_PER_VALUE, MS_PER_FRAME, MutationObserver, Odometer, RIBBON_HTML, TRANSITION_END_EVENTS, TRANSITION_SUPPORT, VALUE_HTML, addClass, createFromHTML, fractionalPart, now, removeClass, requestAnimationFrame, round, transitionCheckStyles, trigger, truncate, wrapJQuery, _jQueryWrapped, _old, _ref, _ref1, __slice = [].slice;
    VALUE_HTML = '<span class="odometer-value"></span>', RIBBON_HTML = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + VALUE_HTML + "</span></span>", 
    DIGIT_HTML = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + RIBBON_HTML + "</span></span>", 
    FORMAT_MARK_HTML = '<span class="odometer-formatting-mark"></span>', DIGIT_FORMAT = "(,ddd).dd", 
    FORMAT_PARSER = /^\(?([^)]*)\)?(?:(.)(d+))?$/, FRAMERATE = 30, DURATION = 2e3, COUNT_FRAMERATE = 20, 
    FRAMES_PER_VALUE = 2, DIGIT_SPEEDBOOST = .5, MS_PER_FRAME = 1e3 / FRAMERATE, COUNT_MS_PER_FRAME = 1e3 / COUNT_FRAMERATE, 
    TRANSITION_END_EVENTS = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", 
    transitionCheckStyles = document.createElement("div").style, TRANSITION_SUPPORT = null != transitionCheckStyles.transition || null != transitionCheckStyles.webkitTransition || null != transitionCheckStyles.mozTransition || null != transitionCheckStyles.oTransition, 
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, 
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, 
    createFromHTML = function(html) {
        var el;
        return el = document.createElement("div"), el.innerHTML = html, el.children[0];
    }, removeClass = function(el, name) {
        return el.className = el.className.replace(new RegExp("(^| )" + name.split(" ").join("|") + "( |$)", "gi"), " ");
    }, addClass = function(el, name) {
        return removeClass(el, name), el.className += " " + name;
    }, trigger = function(el, name) {
        var evt;
        return null != document.createEvent ? (evt = document.createEvent("HTMLEvents"), 
        evt.initEvent(name, !0, !0), el.dispatchEvent(evt)) : void 0;
    }, now = function() {
        var _ref, _ref1;
        return null != (_ref = null != (_ref1 = window.performance) && "function" == typeof _ref1.now ? _ref1.now() : void 0) ? _ref : +new Date();
    }, round = function(val, precision) {
        return null == precision && (precision = 0), precision ? (val *= Math.pow(10, precision), 
        val += .5, val = Math.floor(val), val /= Math.pow(10, precision)) : Math.round(val);
    }, truncate = function(val) {
        return 0 > val ? Math.ceil(val) : Math.floor(val);
    }, fractionalPart = function(val) {
        return val - round(val);
    }, _jQueryWrapped = !1, (wrapJQuery = function() {
        var property, _i, _len, _ref, _results;
        if (!_jQueryWrapped && null != window.jQuery) {
            for (_jQueryWrapped = !0, _ref = [ "html", "text" ], _results = [], _i = 0, _len = _ref.length; _len > _i; _i++) property = _ref[_i], 
            _results.push(function(property) {
                var old;
                return old = window.jQuery.fn[property], window.jQuery.fn[property] = function(val) {
                    var _ref1;
                    return null == val || null == (null != (_ref1 = this[0]) ? _ref1.odometer : void 0) ? old.apply(this, arguments) : this[0].odometer.update(val);
                };
            }(property));
            return _results;
        }
    })(), setTimeout(wrapJQuery, 0), Odometer = function() {
        function Odometer(options) {
            var e, k, property, v, _base, _i, _len, _ref, _ref1, _ref2, _this = this;
            if (this.options = options, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            this.el.odometer = this, _ref = Odometer.options;
            for (k in _ref) v = _ref[k], null == this.options[k] && (this.options[k] = v);
            null == (_base = this.options).duration && (_base.duration = DURATION), this.MAX_VALUES = this.options.duration / MS_PER_FRAME / FRAMES_PER_VALUE | 0, 
            this.resetFormat(), this.value = this.cleanValue(null != (_ref1 = this.options.value) ? _ref1 : ""), 
            this.renderInside(), this.render();
            try {
                for (_ref2 = [ "innerHTML", "innerText", "textContent" ], _i = 0, _len = _ref2.length; _len > _i; _i++) property = _ref2[_i], 
                null != this.el[property] && !function(property) {
                    return Object.defineProperty(_this.el, property, {
                        get: function() {
                            var _ref3;
                            return "innerHTML" === property ? _this.inside.outerHTML : null != (_ref3 = _this.inside.innerText) ? _ref3 : _this.inside.textContent;
                        },
                        set: function(val) {
                            return _this.update(val);
                        }
                    });
                }(property);
            } catch (_error) {
                e = _error, this.watchForMutations();
            }
        }
        return Odometer.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", 
            this.el.innerHTML = "", this.el.appendChild(this.inside);
        }, Odometer.prototype.watchForMutations = function() {
            var e, _this = this;
            if (null != MutationObserver) try {
                return null == this.observer && (this.observer = new MutationObserver(function() {
                    var newVal;
                    return newVal = _this.el.innerText, _this.renderInside(), _this.render(_this.value), 
                    _this.update(newVal);
                })), this.watchMutations = !0, this.startWatchingMutations();
            } catch (_error) {
                e = _error;
            }
        }, Odometer.prototype.startWatchingMutations = function() {
            return this.watchMutations ? this.observer.observe(this.el, {
                childList: !0
            }) : void 0;
        }, Odometer.prototype.stopWatchingMutations = function() {
            var _ref;
            return null != (_ref = this.observer) ? _ref.disconnect() : void 0;
        }, Odometer.prototype.cleanValue = function(val) {
            var _ref;
            return "string" == typeof val && (val = val.replace(null != (_ref = this.format.radix) ? _ref : ".", "<radix>"), 
            val = val.replace(/[.,]/g, ""), val = val.replace("<radix>", "."), val = parseFloat(val, 10) || 0), 
            round(val, this.format.precision);
        }, Odometer.prototype.bindTransitionEnd = function() {
            var event, renderEnqueued, _i, _len, _ref, _results, _this = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0, renderEnqueued = !1, _ref = TRANSITION_END_EVENTS.split(" "), 
                _results = [], _i = 0, _len = _ref.length; _len > _i; _i++) event = _ref[_i], _results.push(this.el.addEventListener(event, function() {
                    return renderEnqueued ? !0 : (renderEnqueued = !0, setTimeout(function() {
                        return _this.render(), renderEnqueued = !1, trigger(_this.el, "odometerdone");
                    }, 0), !0);
                }, !1));
                return _results;
            }
        }, Odometer.prototype.resetFormat = function() {
            var format, fractional, parsed, precision, radix, repeating, _ref, _ref1;
            if (format = null != (_ref = this.options.format) ? _ref : DIGIT_FORMAT, format || (format = "d"), 
            parsed = FORMAT_PARSER.exec(format), !parsed) throw new Error("Odometer: Unparsable digit format");
            return _ref1 = parsed.slice(1, 4), repeating = _ref1[0], radix = _ref1[1], fractional = _ref1[2], 
            precision = (null != fractional ? fractional.length : void 0) || 0, this.format = {
                repeating: repeating,
                radix: radix,
                precision: precision
            };
        }, Odometer.prototype.render = function(value) {
            var classes, cls, digit, match, newClasses, theme, wholePart, _i, _j, _len, _len1, _ref;
            for (null == value && (value = this.value), this.stopWatchingMutations(), this.resetFormat(), 
            this.inside.innerHTML = "", theme = this.options.theme, classes = this.el.className.split(" "), 
            newClasses = [], _i = 0, _len = classes.length; _len > _i; _i++) cls = classes[_i], 
            cls.length && ((match = /^odometer-theme-(.+)$/.exec(cls)) ? theme = match[1] : /^odometer(-|$)/.test(cls) || newClasses.push(cls));
            for (newClasses.push("odometer"), TRANSITION_SUPPORT || newClasses.push("odometer-no-transitions"), 
            newClasses.push(theme ? "odometer-theme-" + theme : "odometer-auto-theme"), this.el.className = newClasses.join(" "), 
            this.ribbons = {}, this.digits = [], wholePart = !this.format.precision || !fractionalPart(value) || !1, 
            _ref = value.toString().split("").reverse(), _j = 0, _len1 = _ref.length; _len1 > _j; _j++) digit = _ref[_j], 
            "." === digit && (wholePart = !0), this.addDigit(digit, wholePart);
            return this.startWatchingMutations();
        }, Odometer.prototype.update = function(newValue) {
            var diff, _this = this;
            return newValue = this.cleanValue(newValue), (diff = newValue - this.value) ? (removeClass(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), 
            diff > 0 ? addClass(this.el, "odometer-animating-up") : addClass(this.el, "odometer-animating-down"), 
            this.stopWatchingMutations(), this.animate(newValue), this.startWatchingMutations(), 
            setTimeout(function() {
                return _this.el.offsetHeight, addClass(_this.el, "odometer-animating");
            }, 0), this.value = newValue) : void 0;
        }, Odometer.prototype.renderDigit = function() {
            return createFromHTML(DIGIT_HTML);
        }, Odometer.prototype.insertDigit = function(digit, before) {
            return null != before ? this.inside.insertBefore(digit, before) : this.inside.children.length ? this.inside.insertBefore(digit, this.inside.children[0]) : this.inside.appendChild(digit);
        }, Odometer.prototype.addSpacer = function(chr, before, extraClasses) {
            var spacer;
            return spacer = createFromHTML(FORMAT_MARK_HTML), spacer.innerHTML = chr, extraClasses && addClass(spacer, extraClasses), 
            this.insertDigit(spacer, before);
        }, Odometer.prototype.addDigit = function(value, repeating) {
            var chr, digit, resetted, _ref;
            if (null == repeating && (repeating = !0), "-" === value) return this.addSpacer(value, null, "odometer-negation-mark");
            if ("." === value) return this.addSpacer(null != (_ref = this.format.radix) ? _ref : ".", null, "odometer-radix-mark");
            if (repeating) for (resetted = !1; ;) {
                if (!this.format.repeating.length) {
                    if (resetted) throw new Error("Bad odometer format without digits");
                    this.resetFormat(), resetted = !0;
                }
                if (chr = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), 
                "d" === chr) break;
                this.addSpacer(chr);
            }
            return digit = this.renderDigit(), digit.querySelector(".odometer-value").innerHTML = value, 
            this.digits.push(digit), this.insertDigit(digit);
        }, Odometer.prototype.animate = function(newValue) {
            return TRANSITION_SUPPORT && "count" !== this.options.animation ? this.animateSlide(newValue) : this.animateCount(newValue);
        }, Odometer.prototype.animateCount = function(newValue) {
            var cur, diff, last, start, tick, _this = this;
            if (diff = +newValue - this.value) return start = last = now(), cur = this.value, 
            (tick = function() {
                var delta, dist, fraction;
                return now() - start > _this.options.duration ? (_this.value = newValue, _this.render(), 
                void trigger(_this.el, "odometerdone")) : (delta = now() - last, delta > COUNT_MS_PER_FRAME && (last = now(), 
                fraction = delta / _this.options.duration, dist = diff * fraction, cur += dist, 
                _this.render(Math.round(cur))), null != requestAnimationFrame ? requestAnimationFrame(tick) : setTimeout(tick, COUNT_MS_PER_FRAME));
            })();
        }, Odometer.prototype.getDigitCount = function() {
            var i, max, value, values, _i, _len;
            for (values = 1 <= arguments.length ? __slice.call(arguments, 0) : [], i = _i = 0, 
            _len = values.length; _len > _i; i = ++_i) value = values[i], values[i] = Math.abs(value);
            return max = Math.max.apply(Math, values), Math.ceil(Math.log(max + 1) / Math.log(10));
        }, Odometer.prototype.getFractionalDigitCount = function() {
            var i, parser, parts, value, values, _i, _len;
            for (values = 1 <= arguments.length ? __slice.call(arguments, 0) : [], parser = /^\-?\d*\.(\d*?)0*$/, 
            i = _i = 0, _len = values.length; _len > _i; i = ++_i) value = values[i], values[i] = value.toString(), 
            parts = parser.exec(values[i]), values[i] = null == parts ? 0 : parts[1].length;
            return Math.max.apply(Math, values);
        }, Odometer.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat();
        }, Odometer.prototype.animateSlide = function(newValue) {
            var boosted, cur, diff, digitCount, digits, dist, end, fractionalCount, frame, frames, i, incr, j, mark, numEl, oldValue, start, _base, _i, _k, _l, _len, _len1, _len2, _m, _ref, _results;
            if (oldValue = this.value, fractionalCount = this.getFractionalDigitCount(oldValue, newValue), 
            fractionalCount && (newValue *= Math.pow(10, fractionalCount), oldValue *= Math.pow(10, fractionalCount)), 
            diff = newValue - oldValue) {
                for (this.bindTransitionEnd(), digitCount = this.getDigitCount(oldValue, newValue), 
                digits = [], boosted = 0, i = _i = 0; digitCount >= 0 ? digitCount > _i : _i > digitCount; i = digitCount >= 0 ? ++_i : --_i) {
                    if (start = truncate(oldValue / Math.pow(10, digitCount - i - 1)), end = truncate(newValue / Math.pow(10, digitCount - i - 1)), 
                    dist = end - start, Math.abs(dist) > this.MAX_VALUES) {
                        for (frames = [], incr = dist / (this.MAX_VALUES + this.MAX_VALUES * boosted * DIGIT_SPEEDBOOST), 
                        cur = start; dist > 0 && end > cur || 0 > dist && cur > end; ) frames.push(Math.round(cur)), 
                        cur += incr;
                        frames[frames.length - 1] !== end && frames.push(end), boosted++;
                    } else frames = function() {
                        _results = [];
                        for (var _j = start; end >= start ? end >= _j : _j >= end; end >= start ? _j++ : _j--) _results.push(_j);
                        return _results;
                    }.apply(this);
                    for (i = _k = 0, _len = frames.length; _len > _k; i = ++_k) frame = frames[i], frames[i] = Math.abs(frame % 10);
                    digits.push(frames);
                }
                for (this.resetDigits(), _ref = digits.reverse(), i = _l = 0, _len1 = _ref.length; _len1 > _l; i = ++_l) for (frames = _ref[i], 
                this.digits[i] || this.addDigit(" ", i >= fractionalCount), null == (_base = this.ribbons)[i] && (_base[i] = this.digits[i].querySelector(".odometer-ribbon-inner")), 
                this.ribbons[i].innerHTML = "", 0 > diff && (frames = frames.reverse()), j = _m = 0, 
                _len2 = frames.length; _len2 > _m; j = ++_m) frame = frames[j], numEl = document.createElement("div"), 
                numEl.className = "odometer-value", numEl.innerHTML = frame, this.ribbons[i].appendChild(numEl), 
                j === frames.length - 1 && addClass(numEl, "odometer-last-value"), 0 === j && addClass(numEl, "odometer-first-value");
                return 0 > start && this.addDigit("-"), mark = this.inside.querySelector(".odometer-radix-mark"), 
                null != mark && mark.parent.removeChild(mark), fractionalCount ? this.addSpacer(this.format.radix, this.digits[fractionalCount - 1], "odometer-radix-mark") : void 0;
            }
        }, Odometer;
    }(), Odometer.options = null != (_ref = window.odometerOptions) ? _ref : {}, setTimeout(function() {
        var k, v, _base, _ref1, _results;
        if (window.odometerOptions) {
            _ref1 = window.odometerOptions, _results = [];
            for (k in _ref1) v = _ref1[k], _results.push(null != (_base = Odometer.options)[k] ? (_base = Odometer.options)[k] : _base[k] = v);
            return _results;
        }
    }, 0), Odometer.init = function() {
        var el, elements, _i, _len, _ref1, _results;
        if (null != document.querySelectorAll) {
            for (elements = document.querySelectorAll(Odometer.options.selector || ".odometer"), 
            _results = [], _i = 0, _len = elements.length; _len > _i; _i++) el = elements[_i], 
            _results.push(el.odometer = new Odometer({
                el: el,
                value: null != (_ref1 = el.innerText) ? _ref1 : el.textContent
            }));
            return _results;
        }
    }, null != (null != (_ref1 = document.documentElement) ? _ref1.doScroll : void 0) && null != document.createEventObject ? (_old = document.onreadystatechange, 
    document.onreadystatechange = function() {
        return "complete" === document.readyState && Odometer.options.auto !== !1 && Odometer.init(), 
        null != _old ? _old.apply(this, arguments) : void 0;
    }) : document.addEventListener("DOMContentLoaded", function() {
        return Odometer.options.auto !== !1 ? Odometer.init() : void 0;
    }, !1), "function" == typeof define && define.amd ? define([ "jquery" ], function() {
        return Odometer;
    }) : typeof exports === !1 ? module.exports = Odometer : window.Odometer = Odometer;
}.call(this), function(factory) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define([ "jquery" ], factory) : factory(jQuery);
}(function($) {
    "use strict";
    function init(options) {
        return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), 
        void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), 
        options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), 
        this.each(function() {
            var $this = $(this), plugin = $this.data(PLUGIN_NS);
            plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin));
        });
    }
    function TouchSwipe(element, options) {
        function touchStart(jqEvent) {
            if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
                var ret, event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent, evt = SUPPORTS_TOUCH ? event.touches[0] : event;
                return phase = PHASE_START, SUPPORTS_TOUCH ? fingerCount = event.touches.length : jqEvent.preventDefault(), 
                distance = 0, direction = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, 
                endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, fingerData = createAllFingerData(), 
                maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), !SUPPORTS_TOUCH || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (createFingerData(0, evt), 
                startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, event.touches[1]), 
                startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), 
                (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, 
                ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (setTouchInProgress(!0), 
                null);
            }
        }
        function touchMove(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
                var ret, evt = SUPPORTS_TOUCH ? event.touches[0] : event, currentFinger = updateFingerData(evt);
                if (endTime = getTimeStamp(), SUPPORTS_TOUCH && (fingerCount = event.touches.length), 
                phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, event.touches[1]), 
                startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(event.touches[1]), 
                endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), 
                pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), 
                pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), 
                fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH || hasPinches()) {
                    if (direction = calculateDirection(currentFinger.start, currentFinger.end), validateDefaultEvent(jqEvent, direction), 
                    distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), 
                    setMaxDistance(direction, distance), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase)), 
                    !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
                        var inBounds = !0;
                        if (options.triggerOnTouchLeave) {
                            var bounds = getbounds(this);
                            inBounds = isInBounds(currentFinger.end, bounds);
                        }
                        !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), 
                        (phase == PHASE_CANCEL || phase == PHASE_END) && triggerHandler(event, phase);
                    }
                } else phase = PHASE_CANCEL, triggerHandler(event, phase);
                ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase));
            }
        }
        function touchEnd(jqEvent) {
            var event = jqEvent.originalEvent;
            return SUPPORTS_TOUCH && event.touches.length > 0 ? (startMultiFingerRelease(), 
            !0) : (inMultiFingerRelease() && (fingerCount = previousTouchFingerCount), jqEvent.preventDefault(), 
            endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() ? (phase = PHASE_CANCEL, 
            triggerHandler(event, phase)) : options.triggerOnTouchEnd || 0 == options.triggerOnTouchEnd && phase === PHASE_MOVE ? (phase = PHASE_END, 
            triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, 
            triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, 
            triggerHandler(event, phase)), setTouchInProgress(!1), null);
        }
        function touchCancel() {
            fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, 
            pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1);
        }
        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent;
            options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase));
        }
        function removeListeners() {
            $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), 
            $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), 
            setTouchInProgress(!1);
        }
        function getNextPhase(currentPhase) {
            var nextPhase = currentPhase, validTime = validateSwipeTime(), validDistance = validateSwipeDistance(), didCancel = didSwipeBackToCancel();
            return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, 
            nextPhase;
        }
        function triggerHandler(event, phase) {
            var ret = void 0;
            return didSwipe() || hasSwipes() ? ret = triggerHandlerForGesture(event, phase, SWIPE) : (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), 
            didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), 
            phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (SUPPORTS_TOUCH ? 0 == event.touches.length && touchCancel(event) : touchCancel(event)), 
            ret;
        }
        function triggerHandlerForGesture(event, phase, gesture) {
            var ret = void 0;
            if (gesture == SWIPE) {
                if ($element.trigger("swipeStatus", [ phase, direction || null, distance || 0, duration || 0, fingerCount ]), 
                options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount), 
                ret === !1)) return !1;
                if (phase == PHASE_END && validateSwipe()) {
                    if ($element.trigger("swipe", [ direction, distance, duration, fingerCount ]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount), 
                    ret === !1)) return !1;
                    switch (direction) {
                      case LEFT:
                        $element.trigger("swipeLeft", [ direction, distance, duration, fingerCount ]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount));
                        break;

                      case RIGHT:
                        $element.trigger("swipeRight", [ direction, distance, duration, fingerCount ]), 
                        options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount));
                        break;

                      case UP:
                        $element.trigger("swipeUp", [ direction, distance, duration, fingerCount ]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount));
                        break;

                      case DOWN:
                        $element.trigger("swipeDown", [ direction, distance, duration, fingerCount ]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount));
                    }
                }
            }
            if (gesture == PINCH) {
                if ($element.trigger("pinchStatus", [ phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom ]), 
                options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom), 
                ret === !1)) return !1;
                if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
                  case IN:
                    $element.trigger("pinchIn", [ pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom ]), 
                    options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom));
                    break;

                  case OUT:
                    $element.trigger("pinchOut", [ pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom ]), 
                    options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom));
                }
            }
            return gesture == TAP ? (phase === PHASE_CANCEL || phase === PHASE_END) && (clearTimeout(singleTapTimeout), 
            hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function() {
                doubleTapStartTime = null, $element.trigger("tap", [ event.target ]), options.tap && (ret = options.tap.call($element, event, event.target));
            }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [ event.target ]), 
            options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? (phase === PHASE_CANCEL || phase === PHASE_END) && (clearTimeout(singleTapTimeout), 
            doubleTapStartTime = null, $element.trigger("doubletap", [ event.target ]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase === PHASE_CANCEL || phase === PHASE_END) && (clearTimeout(singleTapTimeout), 
            doubleTapStartTime = null, $element.trigger("longtap", [ event.target ]), options.longTap && (ret = options.longTap.call($element, event, event.target))), 
            ret;
        }
        function validateSwipeDistance() {
            var valid = !0;
            return null !== options.threshold && (valid = distance >= options.threshold), valid;
        }
        function didSwipeBackToCancel() {
            var cancelled = !1;
            return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), 
            cancelled;
        }
        function validatePinchDistance() {
            return null !== options.pinchThreshold ? pinchDistance >= options.pinchThreshold : !0;
        }
        function validateSwipeTime() {
            var result;
            return result = options.maxTimeThreshold && duration >= options.maxTimeThreshold ? !1 : !0;
        }
        function validateDefaultEvent(jqEvent, direction) {
            if (options.allowPageScroll === NONE || hasPinches()) jqEvent.preventDefault(); else {
                var auto = options.allowPageScroll === AUTO;
                switch (direction) {
                  case LEFT:
                    (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                    break;

                  case RIGHT:
                    (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                    break;

                  case UP:
                    (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                    break;

                  case DOWN:
                    (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                }
            }
        }
        function validatePinch() {
            var hasCorrectFingerCount = validateFingers(), hasEndPoint = validateEndPoint(), hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
        }
        function hasPinches() {
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
        }
        function didPinch() {
            return !(!validatePinch() || !hasPinches());
        }
        function validateSwipe() {
            var hasValidTime = validateSwipeTime(), hasValidDistance = validateSwipeDistance(), hasCorrectFingerCount = validateFingers(), hasEndPoint = validateEndPoint(), didCancel = didSwipeBackToCancel(), valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            return valid;
        }
        function hasSwipes() {
            return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
        }
        function didSwipe() {
            return !(!validateSwipe() || !hasSwipes());
        }
        function validateFingers() {
            return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH;
        }
        function validateEndPoint() {
            return 0 !== fingerData[0].end.x;
        }
        function hasTap() {
            return !!options.tap;
        }
        function hasDoubleTap() {
            return !!options.doubleTap;
        }
        function hasLongTap() {
            return !!options.longTap;
        }
        function validateDoubleTap() {
            if (null == doubleTapStartTime) return !1;
            var now = getTimeStamp();
            return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold;
        }
        function inDoubleTap() {
            return validateDoubleTap();
        }
        function validateTap() {
            return !(1 !== fingerCount && SUPPORTS_TOUCH || !isNaN(distance) && 0 !== distance);
        }
        function validateLongTap() {
            return duration > options.longTapThreshold && DOUBLE_TAP_THRESHOLD > distance;
        }
        function didTap() {
            return !(!validateTap() || !hasTap());
        }
        function didDoubleTap() {
            return !(!validateDoubleTap() || !hasDoubleTap());
        }
        function didLongTap() {
            return !(!validateLongTap() || !hasLongTap());
        }
        function startMultiFingerRelease() {
            previousTouchEndTime = getTimeStamp(), previousTouchFingerCount = event.touches.length + 1;
        }
        function cancelMultiFingerRelease() {
            previousTouchEndTime = 0, previousTouchFingerCount = 0;
        }
        function inMultiFingerRelease() {
            var withinThreshold = !1;
            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime;
                diff <= options.fingerReleaseThreshold && (withinThreshold = !0);
            }
            return withinThreshold;
        }
        function getTouchInProgress() {
            return !($element.data(PLUGIN_NS + "_intouch") !== !0);
        }
        function setTouchInProgress(val) {
            val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), 
            LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), 
            $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), 
            $element.data(PLUGIN_NS + "_intouch", val === !0);
        }
        function createFingerData(index, evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0;
            return fingerData[index].identifier = id, fingerData[index].start.x = fingerData[index].end.x = evt.pageX || evt.clientX, 
            fingerData[index].start.y = fingerData[index].end.y = evt.pageY || evt.clientY, 
            fingerData[index];
        }
        function updateFingerData(evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0, f = getFingerData(id);
            return f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f;
        }
        function getFingerData(id) {
            for (var i = 0; i < fingerData.length; i++) if (fingerData[i].identifier == id) return fingerData[i];
        }
        function createAllFingerData() {
            for (var fingerData = [], i = 0; 5 >= i; i++) fingerData.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return fingerData;
        }
        function setMaxDistance(direction, distance) {
            distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance;
        }
        function getMaxDistance(direction) {
            return maximumsMap[direction] ? maximumsMap[direction].distance : void 0;
        }
        function createMaximumsData() {
            var maxData = {};
            return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), 
            maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData;
        }
        function createMaximumVO(dir) {
            return {
                direction: dir,
                distance: 0
            };
        }
        function calculateDuration() {
            return endTime - startTime;
        }
        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x), diffY = Math.abs(startPoint.y - endPoint.y);
            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
        }
        function calculatePinchZoom(startDistance, endDistance) {
            var percent = endDistance / startDistance * 1;
            return percent.toFixed(2);
        }
        function calculatePinchDirection() {
            return 1 > pinchZoom ? OUT : IN;
        }
        function calculateDistance(startPoint, endPoint) {
            return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
        }
        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x, y = endPoint.y - startPoint.y, r = Math.atan2(y, x), angle = Math.round(180 * r / Math.PI);
            return 0 > angle && (angle = 360 - Math.abs(angle)), angle;
        }
        function calculateDirection(startPoint, endPoint) {
            var angle = calculateAngle(startPoint, endPoint);
            return 45 >= angle && angle >= 0 ? LEFT : 360 >= angle && angle >= 315 ? LEFT : angle >= 135 && 225 >= angle ? RIGHT : angle > 45 && 135 > angle ? DOWN : UP;
        }
        function getTimeStamp() {
            var now = new Date();
            return now.getTime();
        }
        function getbounds(el) {
            el = $(el);
            var offset = el.offset(), bounds = {
                left: offset.left,
                right: offset.left + el.outerWidth(),
                top: offset.top,
                bottom: offset.top + el.outerHeight()
            };
            return bounds;
        }
        function isInBounds(point, bounds) {
            return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom;
        }
        var useTouchEvents = SUPPORTS_TOUCH || !options.fallbackToMouseEvents, START_EV = useTouchEvents ? "touchstart" : "mousedown", MOVE_EV = useTouchEvents ? "touchmove" : "mousemove", END_EV = useTouchEvents ? "touchend" : "mouseup", LEAVE_EV = useTouchEvents ? null : "mouseleave", CANCEL_EV = "touchcancel", distance = 0, direction = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, pinchDirection = 0, maximumsMap = null, $element = $(element), phase = "start", fingerCount = 0, fingerData = null, startTime = 0, endTime = 0, previousTouchEndTime = 0, previousTouchFingerCount = 0, doubleTapStartTime = 0, singleTapTimeout = null;
        try {
            $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel);
        } catch (e) {
            $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe");
        }
        this.enable = function() {
            return $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), 
            $element;
        }, this.disable = function() {
            return removeListeners(), $element;
        }, this.destroy = function() {
            return removeListeners(), $element.data(PLUGIN_NS, null), $element;
        }, this.option = function(property, value) {
            if (void 0 !== options[property]) {
                if (void 0 === value) return options[property];
                options[property] = value;
            } else $.error("Option " + property + " does not exist on jQuery.swipe.options");
            return null;
        };
    }
    var LEFT = "left", RIGHT = "right", UP = "up", DOWN = "down", IN = "in", OUT = "out", NONE = "none", AUTO = "auto", SWIPE = "swipe", PINCH = "pinch", TAP = "tap", DOUBLE_TAP = "doubletap", LONG_TAP = "longtap", HORIZONTAL = "horizontal", VERTICAL = "vertical", ALL_FINGERS = "all", DOUBLE_TAP_THRESHOLD = 10, PHASE_START = "start", PHASE_MOVE = "move", PHASE_END = "end", PHASE_CANCEL = "cancel", SUPPORTS_TOUCH = "ontouchstart" in window, PLUGIN_NS = "TouchSwipe", defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    $.fn.swipe = function(method) {
        var $this = $(this), plugin = $this.data(PLUGIN_NS);
        if (plugin && "string" == typeof method) {
            if (plugin[method]) return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
            $.error("Method " + method + " does not exist on jQuery.swipe");
        } else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);
        return $this;
    }, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    }, $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT
    }, $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    }, $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: ALL_FINGERS
    };
}), function(jQuery) {
    function raf() {
        animating && (requestAnimationFrame(raf), jQuery.fx.tick());
    }
    for (var animating, lastTime = 0, vendors = [ "webkit", "moz" ], requestAnimationFrame = window.requestAnimationFrame, cancelAnimationFrame = window.cancelAnimationFrame; lastTime < vendors.length && !requestAnimationFrame; lastTime++) requestAnimationFrame = window[vendors[lastTime] + "RequestAnimationFrame"], 
    cancelAnimationFrame = cancelAnimationFrame || window[vendors[lastTime] + "CancelAnimationFrame"] || window[vendors[lastTime] + "CancelRequestAnimationFrame"];
    requestAnimationFrame ? (window.requestAnimationFrame = requestAnimationFrame, window.cancelAnimationFrame = cancelAnimationFrame, 
    jQuery.fx.timer = function(timer) {
        timer() && jQuery.timers.push(timer) && !animating && (animating = !0, raf());
    }, jQuery.fx.stop = function() {
        animating = !1;
    }) : (window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime(), timeToCall = Math.max(0, 16 - (currTime - lastTime)), id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        return lastTime = currTime + timeToCall, id;
    }, window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    });
}(jQuery), window.InfoBubble = InfoBubble, InfoBubble.prototype.ARROW_SIZE_ = 15, 
InfoBubble.prototype.ARROW_STYLE_ = 0, InfoBubble.prototype.SHADOW_STYLE_ = 1, InfoBubble.prototype.MIN_WIDTH_ = 50, 
InfoBubble.prototype.ARROW_POSITION_ = 50, InfoBubble.prototype.PADDING_ = 10, InfoBubble.prototype.BORDER_WIDTH_ = 1, 
InfoBubble.prototype.BORDER_COLOR_ = "#ccc", InfoBubble.prototype.BORDER_RADIUS_ = 10, 
InfoBubble.prototype.BACKGROUND_COLOR_ = "#fff", InfoBubble.prototype.extend = function(obj1, obj2) {
    return function(object) {
        for (var property in object.prototype) this.prototype[property] = object.prototype[property];
        return this;
    }.apply(obj1, [ obj2 ]);
}, InfoBubble.prototype.buildDom_ = function() {
    var bubble = this.bubble_ = document.createElement("DIV");
    bubble.style.position = "absolute", bubble.style.zIndex = this.baseZIndex_;
    var tabsContainer = this.tabsContainer_ = document.createElement("DIV");
    tabsContainer.style.position = "relative";
    var close = this.close_ = document.createElement("IMG");
    close.style.position = "absolute", close.style.width = this.px(12), close.style.height = this.px(12), 
    close.style.border = 0, close.style.zIndex = this.baseZIndex_ + 1, close.style.cursor = "pointer", 
    close.src = "http://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif";
    var that = this;
    google.maps.event.addDomListener(close, "click", function() {
        that.close(), google.maps.event.trigger(that, "closeclick");
    });
    var contentContainer = this.contentContainer_ = document.createElement("DIV");
    contentContainer.style.overflowX = "visible", contentContainer.style.overflowY = "visible", 
    contentContainer.style.cursor = "default", contentContainer.style.clear = "both", 
    contentContainer.style.position = "relative";
    var content = this.content_ = document.createElement("DIV");
    contentContainer.appendChild(content);
    var arrow = this.arrow_ = document.createElement("DIV");
    arrow.style.position = "relative";
    var arrowOuter = this.arrowOuter_ = document.createElement("DIV"), arrowInner = this.arrowInner_ = document.createElement("DIV"), arrowSize = this.getArrowSize_();
    arrowOuter.style.position = arrowInner.style.position = "absolute", arrowOuter.style.left = arrowInner.style.left = "50%", 
    arrowOuter.style.height = arrowInner.style.height = "0", arrowOuter.style.width = arrowInner.style.width = "0", 
    arrowOuter.style.marginLeft = this.px(-arrowSize), arrowOuter.style.borderWidth = this.px(arrowSize), 
    arrowOuter.style.borderBottomWidth = 0;
    var bubbleShadow = this.bubbleShadow_ = document.createElement("DIV");
    bubbleShadow.style.position = "absolute", bubble.style.display = bubbleShadow.style.display = "none", 
    bubble.appendChild(this.tabsContainer_), bubble.appendChild(close), bubble.appendChild(contentContainer), 
    arrow.appendChild(arrowOuter), arrow.appendChild(arrowInner), bubble.appendChild(arrow);
    var stylesheet = document.createElement("style");
    stylesheet.setAttribute("type", "text/css"), this.animationName_ = "_ibani_" + Math.round(1e4 * Math.random());
    var css = "." + this.animationName_ + " {-webkit-transform-origin: 0% 50%; -moz-transform-origin: 0% 50%; -o-transform-origin: 0% 50%; -ms-transform-origin: 0% 50%; transform-origin: 0% 50%; -webkit-animation-name:" + this.animationName_ + "; -webkit-animation-duration:0.5s; -webkit-animation-iteration-count:1; -mox-animation-name:" + this.animationName_ + "; -mox-animation-duration:0.5s; -mox-animation-iteration-count:1; -o-animation-name:" + this.animationName_ + "; -o-animation-duration:0.5s; -o-animation-iteration-count:1; -ms-animation-name:" + this.animationName_ + "; -ms-animation-duration:0.5s; -ms-animation-iteration-count:1; animation-name:" + this.animationName_ + "; animation-duration:0.5s; animation-iteration-count:1; } @-webkit-keyframes " + this.animationName_ + " {from {-webkit-transform: scale(0)} 50% {-webkit-transform: scale(1.2)} 90% {-webkit-transform: scale(0.95)} to {-webkit-transform: scale(1)} } @-moz-keyframes " + this.animationName_ + " {from {-moz-transform: scale(0)} 50% {-moz-transform: scale(1.2)} 90% {-moz-transform: scale(0.95)} to {-moz-transform: scale(1)} } @-o-keyframes " + this.animationName_ + " {from {-o-transform: scale(0)} 50% {-o-transform: scale(1.2)} 90% {-o-transform: scale(0.95)} to {-o-transform: scale(1)} } @-ms-keyframes " + this.animationName_ + " {from {-ms-transform: scale(0)} 50% {-ms-transform: scale(1.2)} 90% {-ms-transform: scale(0.95)} to {-ms-transform: scale(1)} } @keyframes " + this.animationName_ + " {from {transform: scale(0)} 50% {transform: scale(1.2)} 90% {transform: scale(0.95)} to {transform: scale(1)} } ";
    stylesheet.textContent = css, document.getElementsByTagName("head")[0].appendChild(stylesheet);
}, InfoBubble.prototype.setBackgroundClassName = function(className) {
    this.set("backgroundClassName", className);
}, InfoBubble.prototype.setBackgroundClassName = InfoBubble.prototype.setBackgroundClassName, 
InfoBubble.prototype.backgroundClassName_changed = function() {
    this.content_.className = this.get("backgroundClassName");
}, InfoBubble.prototype.backgroundClassName_changed = InfoBubble.prototype.backgroundClassName_changed, 
InfoBubble.prototype.setTabClassName = function(className) {
    this.set("tabClassName", className);
}, InfoBubble.prototype.setTabClassName = InfoBubble.prototype.setTabClassName, 
InfoBubble.prototype.tabClassName_changed = function() {
    this.updateTabStyles_();
}, InfoBubble.prototype.tabClassName_changed = InfoBubble.prototype.tabClassName_changed, 
InfoBubble.prototype.getArrowStyle_ = function() {
    return parseInt(this.get("arrowStyle"), 10) || 0;
}, InfoBubble.prototype.setArrowStyle = function(style) {
    this.set("arrowStyle", style);
}, InfoBubble.prototype.setArrowStyle = InfoBubble.prototype.setArrowStyle, InfoBubble.prototype.arrowStyle_changed = function() {
    this.arrowSize_changed();
}, InfoBubble.prototype.arrowStyle_changed = InfoBubble.prototype.arrowStyle_changed, 
InfoBubble.prototype.getArrowSize_ = function() {
    return parseInt(this.get("arrowSize"), 10) || 0;
}, InfoBubble.prototype.setArrowSize = function(size) {
    this.set("arrowSize", size);
}, InfoBubble.prototype.setArrowSize = InfoBubble.prototype.setArrowSize, InfoBubble.prototype.arrowSize_changed = function() {
    this.borderWidth_changed();
}, InfoBubble.prototype.arrowSize_changed = InfoBubble.prototype.arrowSize_changed, 
InfoBubble.prototype.setArrowPosition = function(pos) {
    this.set("arrowPosition", pos);
}, InfoBubble.prototype.setArrowPosition = InfoBubble.prototype.setArrowPosition, 
InfoBubble.prototype.getArrowPosition_ = function() {
    return parseInt(this.get("arrowPosition"), 10) || 0;
}, InfoBubble.prototype.arrowPosition_changed = function() {
    var pos = this.getArrowPosition_();
    this.arrowOuter_.style.left = this.arrowInner_.style.left = pos + "%", this.redraw_();
}, InfoBubble.prototype.arrowPosition_changed = InfoBubble.prototype.arrowPosition_changed, 
InfoBubble.prototype.setZIndex = function(zIndex) {
    this.set("zIndex", zIndex);
}, InfoBubble.prototype.setZIndex = InfoBubble.prototype.setZIndex, InfoBubble.prototype.getZIndex = function() {
    return parseInt(this.get("zIndex"), 10) || this.baseZIndex_;
}, InfoBubble.prototype.zIndex_changed = function() {
    var zIndex = this.getZIndex();
    this.bubble_.style.zIndex = this.baseZIndex_ = zIndex, this.close_.style.zIndex = zIndex + 1;
}, InfoBubble.prototype.zIndex_changed = InfoBubble.prototype.zIndex_changed, InfoBubble.prototype.setShadowStyle = function(shadowStyle) {
    this.set("shadowStyle", shadowStyle);
}, InfoBubble.prototype.setShadowStyle = InfoBubble.prototype.setShadowStyle, InfoBubble.prototype.getShadowStyle_ = function() {
    return parseInt(this.get("shadowStyle"), 10) || 0;
}, InfoBubble.prototype.shadowStyle_changed = function() {
    var shadowStyle = this.getShadowStyle_(), display = "", shadow = "", backgroundColor = "";
    switch (shadowStyle) {
      case 0:
        display = "none";
        break;

      case 1:
        shadow = "40px 15px 10px rgba(33,33,33,0.3)", backgroundColor = "transparent";
        break;

      case 2:
        shadow = "0 0 2px rgba(33,33,33,0.3)", backgroundColor = "rgba(33,33,33,0.35)";
    }
    this.bubbleShadow_.style.boxShadow = this.bubbleShadow_.style.webkitBoxShadow = this.bubbleShadow_.style.MozBoxShadow = shadow, 
    this.bubbleShadow_.style.backgroundColor = backgroundColor, this.isOpen_ && (this.bubbleShadow_.style.display = display, 
    this.draw());
}, InfoBubble.prototype.shadowStyle_changed = InfoBubble.prototype.shadowStyle_changed, 
InfoBubble.prototype.showCloseButton = function() {
    this.set("hideCloseButton", !1);
}, InfoBubble.prototype.showCloseButton = InfoBubble.prototype.showCloseButton, 
InfoBubble.prototype.hideCloseButton = function() {
    this.set("hideCloseButton", !0);
}, InfoBubble.prototype.hideCloseButton = InfoBubble.prototype.hideCloseButton, 
InfoBubble.prototype.hideCloseButton_changed = function() {
    this.close_.style.display = this.get("hideCloseButton") ? "none" : "";
}, InfoBubble.prototype.hideCloseButton_changed = InfoBubble.prototype.hideCloseButton_changed, 
InfoBubble.prototype.setBackgroundColor = function(color) {
    color && this.set("backgroundColor", color);
}, InfoBubble.prototype.setBackgroundColor = InfoBubble.prototype.setBackgroundColor, 
InfoBubble.prototype.backgroundColor_changed = function() {
    var backgroundColor = this.get("backgroundColor");
    this.contentContainer_.style.backgroundColor = backgroundColor, this.arrowInner_.style.borderColor = backgroundColor + " transparent transparent", 
    this.updateTabStyles_();
}, InfoBubble.prototype.backgroundColor_changed = InfoBubble.prototype.backgroundColor_changed, 
InfoBubble.prototype.setBorderColor = function(color) {
    color && this.set("borderColor", color);
}, InfoBubble.prototype.setBorderColor = InfoBubble.prototype.setBorderColor, InfoBubble.prototype.borderColor_changed = function() {
    var borderColor = this.get("borderColor"), contentContainer = this.contentContainer_, arrowOuter = this.arrowOuter_;
    contentContainer.style.borderColor = borderColor, arrowOuter.style.borderColor = borderColor + " transparent transparent", 
    contentContainer.style.borderStyle = arrowOuter.style.borderStyle = this.arrowInner_.style.borderStyle = "solid", 
    this.updateTabStyles_();
}, InfoBubble.prototype.borderColor_changed = InfoBubble.prototype.borderColor_changed, 
InfoBubble.prototype.setBorderRadius = function(radius) {
    this.set("borderRadius", radius);
}, InfoBubble.prototype.setBorderRadius = InfoBubble.prototype.setBorderRadius, 
InfoBubble.prototype.getBorderRadius_ = function() {
    return parseInt(this.get("borderRadius"), 10) || 0;
}, InfoBubble.prototype.borderRadius_changed = function() {
    var borderRadius = this.getBorderRadius_(), borderWidth = this.getBorderWidth_();
    this.contentContainer_.style.borderRadius = this.contentContainer_.style.MozBorderRadius = this.contentContainer_.style.webkitBorderRadius = this.bubbleShadow_.style.borderRadius = this.bubbleShadow_.style.MozBorderRadius = this.bubbleShadow_.style.webkitBorderRadius = this.px(borderRadius), 
    this.tabsContainer_.style.paddingLeft = this.tabsContainer_.style.paddingRight = this.px(borderRadius + borderWidth), 
    this.redraw_();
}, InfoBubble.prototype.borderRadius_changed = InfoBubble.prototype.borderRadius_changed, 
InfoBubble.prototype.getBorderWidth_ = function() {
    return parseInt(this.get("borderWidth"), 10) || 0;
}, InfoBubble.prototype.setBorderWidth = function(width) {
    this.set("borderWidth", width);
}, InfoBubble.prototype.setBorderWidth = InfoBubble.prototype.setBorderWidth, InfoBubble.prototype.borderWidth_changed = function() {
    var borderWidth = this.getBorderWidth_();
    this.contentContainer_.style.borderWidth = this.px(borderWidth), this.tabsContainer_.style.top = this.px(borderWidth), 
    this.updateArrowStyle_(), this.updateTabStyles_(), this.borderRadius_changed(), 
    this.redraw_();
}, InfoBubble.prototype.borderWidth_changed = InfoBubble.prototype.borderWidth_changed, 
InfoBubble.prototype.updateArrowStyle_ = function() {
    var borderWidth = this.getBorderWidth_(), arrowSize = this.getArrowSize_(), arrowStyle = this.getArrowStyle_(), arrowOuterSizePx = this.px(arrowSize), arrowInnerSizePx = this.px(Math.max(0, arrowSize - borderWidth)), outer = this.arrowOuter_, inner = this.arrowInner_;
    this.arrow_.style.marginTop = this.px(-borderWidth), outer.style.borderTopWidth = arrowOuterSizePx, 
    inner.style.borderTopWidth = arrowInnerSizePx, 0 == arrowStyle || 1 == arrowStyle ? (outer.style.borderLeftWidth = arrowOuterSizePx, 
    inner.style.borderLeftWidth = arrowInnerSizePx) : outer.style.borderLeftWidth = inner.style.borderLeftWidth = 0, 
    0 == arrowStyle || 2 == arrowStyle ? (outer.style.borderRightWidth = arrowOuterSizePx, 
    inner.style.borderRightWidth = arrowInnerSizePx) : outer.style.borderRightWidth = inner.style.borderRightWidth = 0, 
    2 > arrowStyle ? (outer.style.marginLeft = this.px(-arrowSize), inner.style.marginLeft = this.px(-(arrowSize - borderWidth))) : outer.style.marginLeft = inner.style.marginLeft = 0, 
    outer.style.display = 0 == borderWidth ? "none" : "";
}, InfoBubble.prototype.setPadding = function(padding) {
    this.set("padding", padding);
}, InfoBubble.prototype.setPadding = InfoBubble.prototype.setPadding, InfoBubble.prototype.getPadding_ = function() {
    return parseInt(this.get("padding"), 10) || 0;
}, InfoBubble.prototype.padding_changed = function() {
    var padding = this.getPadding_();
    this.contentContainer_.style.padding = this.px(padding), this.updateTabStyles_(), 
    this.redraw_();
}, InfoBubble.prototype.padding_changed = InfoBubble.prototype.padding_changed, 
InfoBubble.prototype.px = function(num) {
    return num ? num + "px" : num;
}, InfoBubble.prototype.addEvents_ = function() {
    var events = [ "mousedown", "mousemove", "mouseover", "mouseout", "mouseup", "mousewheel", "DOMMouseScroll", "touchstart", "touchend", "touchmove", "dblclick", "contextmenu", "click" ], bubble = this.bubble_;
    this.listeners_ = [];
    for (var event, i = 0; event = events[i]; i++) this.listeners_.push(google.maps.event.addDomListener(bubble, event, function(e) {
        e.cancelBubble = !0, e.stopPropagation && e.stopPropagation();
    }));
}, InfoBubble.prototype.onAdd = function() {
    this.bubble_ || this.buildDom_(), this.addEvents_();
    var panes = this.getPanes();
    panes && (panes.floatPane.appendChild(this.bubble_), panes.floatShadow.appendChild(this.bubbleShadow_));
}, InfoBubble.prototype.onAdd = InfoBubble.prototype.onAdd, InfoBubble.prototype.draw = function() {
    var projection = this.getProjection();
    if (projection) {
        var latLng = this.get("position");
        if (!latLng) return void this.close();
        var tabHeight = 0;
        this.activeTab_ && (tabHeight = this.activeTab_.offsetHeight);
        var anchorHeight = this.getAnchorHeight_(), arrowSize = this.getArrowSize_(), arrowPosition = this.getArrowPosition_();
        arrowPosition /= 100;
        var pos = projection.fromLatLngToDivPixel(latLng), width = this.contentContainer_.offsetWidth, height = this.bubble_.offsetHeight;
        if (width) {
            var top = pos.y - (height + arrowSize);
            anchorHeight && (top -= anchorHeight);
            var left = pos.x - width * arrowPosition;
            this.bubble_.style.top = this.px(top), this.bubble_.style.left = this.px(left);
            var shadowStyle = parseInt(this.get("shadowStyle"), 10);
            switch (shadowStyle) {
              case 1:
                this.bubbleShadow_.style.top = this.px(top + tabHeight - 1), this.bubbleShadow_.style.left = this.px(left), 
                this.bubbleShadow_.style.width = this.px(width), this.bubbleShadow_.style.height = this.px(this.contentContainer_.offsetHeight - arrowSize);
                break;

              case 2:
                width = .8 * width, this.bubbleShadow_.style.top = this.px(anchorHeight ? pos.y : pos.y + arrowSize), 
                this.bubbleShadow_.style.left = this.px(pos.x - width * arrowPosition), this.bubbleShadow_.style.width = this.px(width), 
                this.bubbleShadow_.style.height = this.px(2);
            }
        }
    }
}, InfoBubble.prototype.draw = InfoBubble.prototype.draw, InfoBubble.prototype.onRemove = function() {
    this.bubble_ && this.bubble_.parentNode && this.bubble_.parentNode.removeChild(this.bubble_), 
    this.bubbleShadow_ && this.bubbleShadow_.parentNode && this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);
    for (var listener, i = 0; listener = this.listeners_[i]; i++) google.maps.event.removeListener(listener);
}, InfoBubble.prototype.onRemove = InfoBubble.prototype.onRemove, InfoBubble.prototype.isOpen = function() {
    return this.isOpen_;
}, InfoBubble.prototype.isOpen = InfoBubble.prototype.isOpen, InfoBubble.prototype.close = function() {
    this.bubble_ && (this.bubble_.style.display = "none", this.bubble_.className = this.bubble_.className.replace(this.animationName_, "")), 
    this.bubbleShadow_ && (this.bubbleShadow_.style.display = "none", this.bubbleShadow_.className = this.bubbleShadow_.className.replace(this.animationName_, "")), 
    this.isOpen_ = !1;
}, InfoBubble.prototype.close = InfoBubble.prototype.close, InfoBubble.prototype.open = function(opt_map, opt_anchor) {
    var that = this;
    window.setTimeout(function() {
        that.open_(opt_map, opt_anchor);
    }, 0);
}, InfoBubble.prototype.open_ = function(opt_map, opt_anchor) {
    this.updateContent_(), opt_map && this.setMap(opt_map), opt_anchor && (this.set("anchor", opt_anchor), 
    this.bindTo("anchorPoint", opt_anchor), this.bindTo("position", opt_anchor)), this.bubble_.style.display = this.bubbleShadow_.style.display = "";
    var animation = !this.get("disableAnimation");
    animation && (this.bubble_.className += " " + this.animationName_, this.bubbleShadow_.className += " " + this.animationName_), 
    this.redraw_(), this.isOpen_ = !0;
    var pan = !this.get("disableAutoPan");
    if (pan) {
        var that = this;
        window.setTimeout(function() {
            that.panToView();
        }, 200);
    }
}, InfoBubble.prototype.open = InfoBubble.prototype.open, InfoBubble.prototype.setPosition = function(position) {
    position && this.set("position", position);
}, InfoBubble.prototype.setPosition = InfoBubble.prototype.setPosition, InfoBubble.prototype.getPosition = function() {
    return this.get("position");
}, InfoBubble.prototype.getPosition = InfoBubble.prototype.getPosition, InfoBubble.prototype.position_changed = function() {
    this.draw();
}, InfoBubble.prototype.position_changed = InfoBubble.prototype.position_changed, 
InfoBubble.prototype.panToView = function() {
    var projection = this.getProjection();
    if (projection && this.bubble_) {
        var anchorHeight = this.getAnchorHeight_(), height = this.bubble_.offsetHeight + anchorHeight, map = this.get("map"), mapDiv = map.getDiv(), mapHeight = mapDiv.offsetHeight, latLng = this.getPosition(), centerPos = projection.fromLatLngToContainerPixel(map.getCenter()), pos = projection.fromLatLngToContainerPixel(latLng), spaceTop = centerPos.y - height, spaceBottom = mapHeight - centerPos.y, needsTop = 0 > spaceTop, deltaY = 0;
        needsTop && (spaceTop *= -1, deltaY = (spaceTop + spaceBottom) / 2), pos.y -= deltaY, 
        latLng = projection.fromContainerPixelToLatLng(pos), map.getCenter() != latLng && map.panTo(latLng);
    }
}, InfoBubble.prototype.panToView = InfoBubble.prototype.panToView, InfoBubble.prototype.htmlToDocumentFragment_ = function(htmlString) {
    htmlString = htmlString.replace(/^\s*([\S\s]*)\b\s*$/, "$1");
    var tempDiv = document.createElement("DIV");
    if (tempDiv.innerHTML = htmlString, 1 == tempDiv.childNodes.length) return tempDiv.removeChild(tempDiv.firstChild);
    for (var fragment = document.createDocumentFragment(); tempDiv.firstChild; ) fragment.appendChild(tempDiv.firstChild);
    return fragment;
}, InfoBubble.prototype.removeChildren_ = function(node) {
    if (node) for (var child; child = node.firstChild; ) node.removeChild(child);
}, InfoBubble.prototype.setContent = function(content) {
    this.set("content", content);
}, InfoBubble.prototype.setContent = InfoBubble.prototype.setContent, InfoBubble.prototype.getContent = function() {
    return this.get("content");
}, InfoBubble.prototype.getContent = InfoBubble.prototype.getContent, InfoBubble.prototype.updateContent_ = function() {
    if (this.content_) {
        this.removeChildren_(this.content_);
        var content = this.getContent();
        if (content) {
            "string" == typeof content && (content = this.htmlToDocumentFragment_(content)), 
            this.content_.appendChild(content);
            for (var image, that = this, images = this.content_.getElementsByTagName("IMG"), i = 0; image = images[i]; i++) google.maps.event.addDomListener(image, "load", function() {
                that.imageLoaded_();
            });
            google.maps.event.trigger(this, "domready");
        }
        this.redraw_();
    }
}, InfoBubble.prototype.imageLoaded_ = function() {
    var pan = !this.get("disableAutoPan");
    this.redraw_(), !pan || 0 != this.tabs_.length && 0 != this.activeTab_.index || this.panToView();
}, InfoBubble.prototype.updateTabStyles_ = function() {
    if (this.tabs_ && this.tabs_.length) {
        for (var tab, i = 0; tab = this.tabs_[i]; i++) this.setTabStyle_(tab.tab);
        this.activeTab_.style.zIndex = this.baseZIndex_;
        var borderWidth = this.getBorderWidth_(), padding = this.getPadding_() / 2;
        this.activeTab_.style.borderBottomWidth = 0, this.activeTab_.style.paddingBottom = this.px(padding + borderWidth);
    }
}, InfoBubble.prototype.setTabStyle_ = function(tab) {
    var backgroundColor = this.get("backgroundColor"), borderColor = this.get("borderColor"), borderRadius = this.getBorderRadius_(), borderWidth = this.getBorderWidth_(), padding = this.getPadding_(), marginRight = this.px(-Math.max(padding, borderRadius)), borderRadiusPx = this.px(borderRadius), index = this.baseZIndex_;
    tab.index && (index -= tab.index);
    var styles = {
        cssFloat: "left",
        position: "relative",
        cursor: "pointer",
        backgroundColor: backgroundColor,
        border: this.px(borderWidth) + " solid " + borderColor,
        padding: this.px(padding / 2) + " " + this.px(padding),
        marginRight: marginRight,
        whiteSpace: "nowrap",
        borderRadiusTopLeft: borderRadiusPx,
        MozBorderRadiusTopleft: borderRadiusPx,
        webkitBorderTopLeftRadius: borderRadiusPx,
        borderRadiusTopRight: borderRadiusPx,
        MozBorderRadiusTopright: borderRadiusPx,
        webkitBorderTopRightRadius: borderRadiusPx,
        zIndex: index,
        display: "inline"
    };
    for (var style in styles) tab.style[style] = styles[style];
    var className = this.get("tabClassName");
    void 0 != className && (tab.className += " " + className);
}, InfoBubble.prototype.addTabActions_ = function(tab) {
    var that = this;
    tab.listener_ = google.maps.event.addDomListener(tab, "click", function() {
        that.setTabActive_(this);
    });
}, InfoBubble.prototype.setTabActive = function(index) {
    var tab = this.tabs_[index - 1];
    tab && this.setTabActive_(tab.tab);
}, InfoBubble.prototype.setTabActive = InfoBubble.prototype.setTabActive, InfoBubble.prototype.setTabActive_ = function(tab) {
    if (!tab) return this.setContent(""), void this.updateContent_();
    var padding = this.getPadding_() / 2, borderWidth = this.getBorderWidth_();
    if (this.activeTab_) {
        var activeTab = this.activeTab_;
        activeTab.style.zIndex = this.baseZIndex_ - activeTab.index, activeTab.style.paddingBottom = this.px(padding), 
        activeTab.style.borderBottomWidth = this.px(borderWidth);
    }
    tab.style.zIndex = this.baseZIndex_, tab.style.borderBottomWidth = 0, tab.style.marginBottomWidth = "-10px", 
    tab.style.paddingBottom = this.px(padding + borderWidth), this.setContent(this.tabs_[tab.index].content), 
    this.updateContent_(), this.activeTab_ = tab, this.redraw_();
}, InfoBubble.prototype.setMaxWidth = function(width) {
    this.set("maxWidth", width);
}, InfoBubble.prototype.setMaxWidth = InfoBubble.prototype.setMaxWidth, InfoBubble.prototype.maxWidth_changed = function() {
    this.redraw_();
}, InfoBubble.prototype.maxWidth_changed = InfoBubble.prototype.maxWidth_changed, 
InfoBubble.prototype.setMaxHeight = function(height) {
    this.set("maxHeight", height);
}, InfoBubble.prototype.setMaxHeight = InfoBubble.prototype.setMaxHeight, InfoBubble.prototype.maxHeight_changed = function() {
    this.redraw_();
}, InfoBubble.prototype.maxHeight_changed = InfoBubble.prototype.maxHeight_changed, 
InfoBubble.prototype.setMinWidth = function(width) {
    this.set("minWidth", width);
}, InfoBubble.prototype.setMinWidth = InfoBubble.prototype.setMinWidth, InfoBubble.prototype.minWidth_changed = function() {
    this.redraw_();
}, InfoBubble.prototype.minWidth_changed = InfoBubble.prototype.minWidth_changed, 
InfoBubble.prototype.setMinHeight = function(height) {
    this.set("minHeight", height);
}, InfoBubble.prototype.setMinHeight = InfoBubble.prototype.setMinHeight, InfoBubble.prototype.minHeight_changed = function() {
    this.redraw_();
}, InfoBubble.prototype.minHeight_changed = InfoBubble.prototype.minHeight_changed, 
InfoBubble.prototype.addTab = function(label, content) {
    var tab = document.createElement("DIV");
    tab.innerHTML = label, this.setTabStyle_(tab), this.addTabActions_(tab), this.tabsContainer_.appendChild(tab), 
    this.tabs_.push({
        label: label,
        content: content,
        tab: tab
    }), tab.index = this.tabs_.length - 1, tab.style.zIndex = this.baseZIndex_ - tab.index, 
    this.activeTab_ || this.setTabActive_(tab), tab.className = tab.className + " " + this.animationName_, 
    this.redraw_();
}, InfoBubble.prototype.addTab = InfoBubble.prototype.addTab, InfoBubble.prototype.updateTab = function(index, opt_label, opt_content) {
    if (!(!this.tabs_.length || 0 > index || index >= this.tabs_.length)) {
        var tab = this.tabs_[index];
        void 0 != opt_label && (tab.tab.innerHTML = tab.label = opt_label), void 0 != opt_content && (tab.content = opt_content), 
        this.activeTab_ == tab.tab && (this.setContent(tab.content), this.updateContent_()), 
        this.redraw_();
    }
}, InfoBubble.prototype.updateTab = InfoBubble.prototype.updateTab, InfoBubble.prototype.removeTab = function(index) {
    if (!(!this.tabs_.length || 0 > index || index >= this.tabs_.length)) {
        var tab = this.tabs_[index];
        tab.tab.parentNode.removeChild(tab.tab), google.maps.event.removeListener(tab.tab.listener_), 
        this.tabs_.splice(index, 1), delete tab;
        for (var t, i = 0; t = this.tabs_[i]; i++) t.tab.index = i;
        tab.tab == this.activeTab_ && (this.activeTab_ = this.tabs_[index] ? this.tabs_[index].tab : this.tabs_[index - 1] ? this.tabs_[index - 1].tab : void 0, 
        this.setTabActive_(this.activeTab_)), this.redraw_();
    }
}, InfoBubble.prototype.removeTab = InfoBubble.prototype.removeTab, InfoBubble.prototype.getElementSize_ = function(element, opt_maxWidth, opt_maxHeight) {
    var sizer = document.createElement("DIV");
    sizer.style.display = "inline", sizer.style.position = "absolute", sizer.style.visibility = "hidden", 
    "string" == typeof element ? sizer.innerHTML = element : sizer.appendChild(element.cloneNode(!0)), 
    document.body.appendChild(sizer);
    var size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
    return opt_maxWidth && size.width > opt_maxWidth && (sizer.style.width = this.px(opt_maxWidth), 
    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight)), opt_maxHeight && size.height > opt_maxHeight && (sizer.style.height = this.px(opt_maxHeight), 
    size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight)), document.body.removeChild(sizer), 
    delete sizer, size;
}, InfoBubble.prototype.redraw_ = function() {
    this.figureOutSize_(), this.positionCloseButton_(), this.draw();
}, InfoBubble.prototype.figureOutSize_ = function() {
    var map = this.get("map");
    if (map) {
        var padding = this.getPadding_(), arrowSize = (this.getBorderWidth_(), this.getBorderRadius_(), 
        this.getArrowSize_()), mapDiv = map.getDiv(), gutter = 2 * arrowSize, mapWidth = mapDiv.offsetWidth - gutter, mapHeight = mapDiv.offsetHeight - gutter - this.getAnchorHeight_(), tabHeight = 0, width = this.get("minWidth") || 0, height = this.get("minHeight") || 0, maxWidth = this.get("maxWidth") || 0, maxHeight = this.get("maxHeight") || 0;
        maxWidth = Math.min(mapWidth, maxWidth), maxHeight = Math.min(mapHeight, maxHeight);
        var tabWidth = 0;
        if (this.tabs_.length) for (var tab, i = 0; tab = this.tabs_[i]; i++) {
            var tabSize = this.getElementSize_(tab.tab, maxWidth, maxHeight), contentSize = this.getElementSize_(tab.content, maxWidth, maxHeight);
            width < tabSize.width && (width = tabSize.width), tabWidth += tabSize.width, height < tabSize.height && (height = tabSize.height), 
            tabSize.height > tabHeight && (tabHeight = tabSize.height), width < contentSize.width && (width = contentSize.width), 
            height < contentSize.height && (height = contentSize.height);
        } else {
            var content = this.get("content");
            if ("string" == typeof content && (content = this.htmlToDocumentFragment_(content)), 
            content) {
                var contentSize = this.getElementSize_(content, maxWidth, maxHeight);
                width < contentSize.width && (width = contentSize.width), height < contentSize.height && (height = contentSize.height);
            }
        }
        maxWidth && (width = Math.min(width, maxWidth)), maxHeight && (height = Math.min(height, maxHeight)), 
        width = Math.max(width, tabWidth), width == tabWidth && (width += 2 * padding), 
        arrowSize = 2 * arrowSize, width = Math.max(width, arrowSize), width > mapWidth && (width = mapWidth), 
        height > mapHeight && (height = mapHeight - tabHeight), this.tabsContainer_ && (this.tabHeight_ = tabHeight, 
        this.tabsContainer_.style.width = this.px(tabWidth)), this.contentContainer_.style.width = this.px(width), 
        this.contentContainer_.style.height = this.px(height);
    }
}, InfoBubble.prototype.getAnchorHeight_ = function() {
    var anchor = this.get("anchor");
    if (anchor) {
        var anchorPoint = this.get("anchorPoint");
        if (anchorPoint) return -1 * anchorPoint.y;
    }
    return 0;
}, InfoBubble.prototype.anchorPoint_changed = function() {
    this.draw();
}, InfoBubble.prototype.anchorPoint_changed = InfoBubble.prototype.anchorPoint_changed, 
InfoBubble.prototype.positionCloseButton_ = function() {
    var bw = (this.getBorderRadius_(), this.getBorderWidth_()), right = 2, top = 2;
    this.tabs_.length && this.tabHeight_ && (top += this.tabHeight_), top += bw, right += bw;
    var c = this.contentContainer_;
    c && c.clientHeight < c.scrollHeight && (right += 15), this.close_.style.right = this.px(right), 
    this.close_.style.top = this.px(top);
};

var classGmapCountriesmapCore = function() {
    this.init();
};

classGmapCountriesmapCore.prototype = {
    _HasBeenInited: !1,
    init: function() {
        this._SetVariables() && (this._TryInit(), this._SetEvent());
    },
    _TryInit: function() {
        var $this = this;
        this._CanInit() && !this._HasBeenInited && (this._HasBeenInited = !0, setTimeout(function() {
            $this._InitializeSubClasses();
        }, 200));
    },
    _SetVariables: function() {
        return this._ContenerObject = $(".jsGmapCountriesmap-Contener"), this._ContenerObject.length ? (this._FilterCountryArray = $(".jsGmapCountriesmap-FilterCountry"), 
        this._FilterContinentArray = $(".jsGmapCountriesmap-FilterContient"), this._MapContenerObject = $(".jsGmapCountriesmap-Map"), 
        this._MapObject = this._MapContenerObject.find(".gmap"), this._MapZoomOutObject = this._MapContenerObject.find(".jsGmapCountriesmap-ZoomOut"), 
        this._MapZoomInObject = this._MapContenerObject.find(".jsGmapCountriesmap-ZoomIn"), 
        this._MapTitle = this._MapContenerObject.find(".header"), !0) : !1;
    },
    _InitializeSubClasses: function() {
        var $this = this;
        this._GoogleMapObject = new classGmapCountriesmapMap(this._MapObject), new classGmapCountriesmapAjax($this._GoogleMapObject), 
        new classGmapCountriesmapFilter(this._GoogleMapObject, this._FilterCountryArray, this._FilterContinentArray), 
        this._MapZoomOutObject.click(function() {
            $this._GoogleMapObject.ZoomOut();
        }), this._MapZoomInObject.click(function() {
            $this._GoogleMapObject.ZoomIn();
        });
    },
    _CanInit: function() {
        return this._ContenerObject.length ? !0 : !1;
    },
    _SetEvent: function() {
        this.AddEvent_Window_OnResize(), this.AddEvent_Window_OnScroll();
    },
    AddEvent_Window_OnResize: function() {
        var $this = this;
        $(window).resize(function() {
            $this._TryInit();
        });
    },
    AddEvent_Window_OnScroll: function() {
        var $this = this;
        this._AfterScrollEvent = !0, $(window).scroll(function() {
            $this._TryInit(), $this._OnScroll();
        });
    },
    _OnScroll: function() {
        if (!(this._MapTitle.length <= 0)) {
            var ScrollTopValue = $(window).scrollTop(), SliderHeight = this._MapContenerObject.height() / 3;
            if (SliderHeight >= ScrollTopValue) {
                var opacity = 1;
                SliderHeight > 0 && (opacity = 1 - ScrollTopValue / SliderHeight), this._MapTitle.css({
                    opacity: opacity
                }), this._AfterScrollEvent = !0;
            } else this._AfterScrollEvent && (this._MapTitle.css({
                opacity: 0
            }), this._AfterScrollEvent = !1);
        }
    }
};

var classGmapCountriesmapAjax = function(GoogleMapObject) {
    this.init(GoogleMapObject);
};

classGmapCountriesmapAjax.prototype = {
    init: function(GoogleMapObject) {
        this._GoogleMapObject = GoogleMapObject, this._SendAjaxRequest();
    },
    _SendAjaxRequest: function() {
        var $this = this;
        $.ajax({
            type: "POST",
            url: hostUrl + "ajax/gmap/",
            data: {},
            dataType: "json",
            success: function(json) {
                $this._SetMarkersOnMap(json);
            }
        });
    },
    _SetMarkersOnMap: function(json) {
        var $this = this;
        this._CurrentPos = 0;
        for (var Key in json) this._MaxPos = parseInt(Key);
        for (var i = 0; i < this._MaxPos + 1; i++) setTimeout(function() {
            var MarkerObject = json[$this._CurrentPos], uniqId = MarkerObject.id, MarkerActiveObj = new google.maps.MarkerImage(imgUrl + "gmap/pin-01.png?" + new Date().getDate(), new google.maps.Size(10, 10, "px", "px")), MarkerHoverObj = new google.maps.MarkerImage(imgUrl + "gmap/pin-02.png?" + new Date().getDate(), new google.maps.Size(10, 10, "px", "px")), OptionsActive = new google.maps.Marker({
                position: new google.maps.LatLng(MarkerObject.lat, MarkerObject.lng),
                icon: MarkerActiveObj,
                visible: !0,
                uniqId: uniqId,
                Href: MarkerObject.href,
                IdCountry: MarkerObject.id_country,
                IdContinent: MarkerObject.id_continent,
                IsSingleInCountry: MarkerObject.IsSingleInCountry,
                html: '<div class="gmap-marker-box"><a href="' + MarkerObject.href + '">' + MarkerObject.title + "</a></div>"
            }), OptionsHover = new google.maps.Marker({
                position: new google.maps.LatLng(MarkerObject.lat, MarkerObject.lng),
                icon: MarkerHoverObj,
                visible: !1,
                uniqId: uniqId,
                IdCountry: MarkerObject.id_country,
                IdContinent: MarkerObject.id_continent,
                IsSingleInCountry: MarkerObject.IsSingleInCountry,
                html: '<div class="gmap-marker-box"><a href="' + MarkerObject.href + '">' + MarkerObject.title + "</a></div>"
            });
            $this._GoogleMapObject.AddMarker(uniqId, OptionsActive, OptionsHover), $this._CurrentPos++;
        }, 25 * i);
    }
};

var classGmapCountriesmapMap = function(MapContenerObject) {
    this.init(MapContenerObject);
};

classGmapCountriesmapMap.prototype = {
    _centerLat: 0,
    _centerLon: 0,
    _zoom: 11,
    _timeInterval: null,
    _markersList: new Array(),
    _markersListInfo: new Array(),
    init: function(MapContenerObject) {
        this._MapContenerObject = MapContenerObject, this._LoadGoogleMap();
    },
    getMarkersList: function() {
        return this._markersList;
    },
    ZoomIn: function() {
        var ZoomValue = this._mapObj.zoom + 1;
        ZoomValue > 10 && (ZoomValue = 10), this._mapObj.setZoom(ZoomValue);
    },
    ZoomOut: function() {
        var ZoomValue = this._mapObj.zoom - 1;
        2 > ZoomValue && (ZoomValue = 2), this._mapObj.setZoom(ZoomValue);
    },
    panTo: function(lat, lon) {
        this._mapObj.panTo(new google.maps.LatLng(lat, lon));
    },
    fitBounds: function(maxZ, minZ) {
        var $this = this, maxZoom = 7, minZoom = 1;
        void 0 != maxZ && (maxZoom = maxZ), void 0 != minZ && (minZoom = minZ), google.maps.event.addListenerOnce(this._mapObj, "zoom_changed", function() {
            var ZoomValue = $this._mapObj.getZoom(), change = !1;
            ZoomValue > maxZoom && (ZoomValue = maxZoom, change = !0), minZoom > ZoomValue && (ZoomValue = minZoom, 
            change = !0), change && $this._mapObj.setZoom(ZoomValue);
        }), this._mapObj.fitBounds(this._mapbounds);
    },
    SetZoom: function(ZoomValue) {
        this._mapObj.setZoom(ZoomValue);
    },
    SetNewBounds: function() {
        this._mapbounds = new google.maps.LatLngBounds();
    },
    AddToBounds: function(position) {
        this._mapbounds.extend(position);
    },
    FilterByIdContinent: function(IdContinent) {
        this._mapbounds = new google.maps.LatLngBounds();
        for (var UniqID in this._markersList) UniqID.match(/_hover$/) ? this._markersList[UniqID].setVisible(!1) : this._markersList[UniqID].IdContinent == IdContinent ? (this._markersList[UniqID].setVisible(!0), 
        this._mapbounds.extend(this._markersList[UniqID].position)) : this._markersList[UniqID].setVisible(!1);
        this.fitBounds();
    },
    FilterByIdCountry: function(IdCountry) {
        this._mapbounds = new google.maps.LatLngBounds();
        for (var UniqID in this._markersList) {
            var MarKerObject = this._markersList[UniqID];
            !UniqID.match(/_hover$/) && !MarKerObject.IsSingleInCountry || UniqID.match(/_hover$/) && MarKerObject.IsSingleInCountry ? this._markersList[UniqID].setVisible(!1) : this._markersList[UniqID].IdCountry == IdCountry ? (this._markersList[UniqID].setVisible(!0), 
            this._mapbounds.extend(this._markersList[UniqID].position), MarKerObject.IsSingleInCountry && this._showMarker(UniqID)) : this._markersList[UniqID].setVisible(!1);
        }
        this.fitBounds();
    },
    ClearMarkers: function() {
        this._markerPos = 0;
        for (key in this._markersList) this._markersList[key].setMap(null), "undefined" != typeof this._markersList[key + "_active"] && this._markersList[key + "_active"].setMap(null), 
        "undefined" != typeof this._markersList[key + "_hover"] && this._markersList[key + "_hover"].setMap(null);
        this._markersList = new Array(), this._marersIndex = [], this._mapbounds = new google.maps.LatLngBounds();
    },
    AddMarker: function(uniqId, OptionsActive, OptionsHover) {
        var $this = this;
        OptionsActive.map = this._mapObj, OptionsHover.map = this._mapObj, this._markersList[uniqId + "_active"] = new google.maps.Marker(OptionsActive), 
        this._markersList[uniqId + "_hover"] = new google.maps.Marker(OptionsHover), google.maps.event.addListener(this._markersList[uniqId + "_active"], "mouseover", function() {
            $this._showMarker(this.uniqId + "_active");
        }), google.maps.event.addListener(this._markersList[uniqId + "_active"], "mouseout", function() {
            $this._hideMarker(this.uniqId + "_active");
        }), google.maps.event.addListener(this._markersList[uniqId + "_hover"], "mouseover", function() {
            $this._showMarker(this.uniqId + "_hover");
        }), google.maps.event.addListener(this._markersList[uniqId + "_hover"], "mouseout", function() {
            $this._hideMarker(this.uniqId + "_hover");
        }), google.maps.event.addListener(this._markersList[uniqId + "_active"], "click", function() {
            window.location.href = $this._markersList[this.uniqId + "_active"].Href;
        }), this._mapbounds.extend(OptionsActive.position);
    },
    ShowBubble: function(uniqId) {
        this._showMarker(uniqId + "_active");
    },
    _openUniqId: null,
    _showMarker: function(uniqId) {
        if (null == this._markersListInfo[uniqId]) {
            var options = this._markersList[uniqId], infoBubble2 = new InfoBubble({
                map: this._mapObj,
                content: options.html,
                position: options.position,
                shadowStyle: 0,
                padding: 0,
                backgroundColor: "none",
                maxWidth: 238,
                minWidth: 238,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "#2c2c2c",
                disableAutoPan: !0,
                hideCloseButton: !0,
                arrowPosition: 1,
                arrowSize: 0,
                arrowStyle: 0
            });
            this._markersListInfo[uniqId] = infoBubble2;
        }
        for (key in this._markersListInfo) {
            var curr = this._markersListInfo[key];
            null != curr && curr.close(this._mapObj, curr);
        }
        this._markersListInfo[uniqId].open(this._mapObj), this._prevMarkerOpened = uniqId;
    },
    _hideMarker: function(uniqId) {
        this._markersListInfo[uniqId].close(this._mapObj, this._markersListInfo[uniqId]);
    },
    _LoadGoogleMap: function() {
        var lat = 52, lng = 23, stylesArray = [ {
            stylers: [ {
                visibility: "off"
            } ]
        }, {
            featureType: "water",
            stylers: [ {
                visibility: "simplified"
            }, {
                saturation: -100
            }, {
                lightness: -74
            } ]
        }, {
            featureType: "landscape.natural",
            stylers: [ {
                visibility: "on"
            }, {
                saturation: -100
            }, {
                lightness: -89
            } ]
        } ], newStyle = new google.maps.StyledMapType(stylesArray, {
            name: "newStyle"
        });
        this._mapObj = new google.maps.Map(this._MapContenerObject[0], {
            zoom: 3,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: !0,
            mapTypeControl: !1,
            draggable: !jQuery.browser.mobile,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            scrollwheel: !1,
            navigationControl: !1,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: !1
        }), this._mapObj.mapTypes.set("newStyle", newStyle), this._mapObj.setMapTypeId("newStyle"), 
        this._mapbounds = new google.maps.LatLngBounds();
    }
};

var classGmapCountriesmapFilter = function(GoogleMapObject, FilterCountryArray, FilterContinentArray) {
    this.init(GoogleMapObject, FilterCountryArray, FilterContinentArray);
};

classGmapCountriesmapFilter.prototype = {
    init: function(GoogleMapObject, FilterCountryArray, FilterContinentArray) {
        this._GoogleMapObject = GoogleMapObject, this._FilterCountryArray = FilterCountryArray, 
        this._FilterContinentArray = FilterContinentArray, this._LastCountry = null, this._LastContinent = null, 
        this._SetEvents();
    },
    _SetEvents: function() {
        this._AddClas_ContinentAnchor_OnClick(), this._AddClas_CountryAnchor_OnClick(), 
        this._AddClas_Window_OnResize();
    },
    _AddClas_ContinentAnchor_OnClick: function() {
        var $this = this;
        this._FilterContinentArray.click(function() {
            var FilterContinentObject = $(this);
            $this._LastContinent = $(this), $this._LastCountry = null, $this._ShowContinentGalleries(FilterContinentObject);
        });
    },
    _ShowContinentGalleries: function(FilterContinentObject) {
        var IdContinent = this._GetIdContinentFromObject(FilterContinentObject);
        this._FilterContinentArray.filter(".IsOpened").removeClass("IsOpened"), FilterContinentObject.addClass("IsOpened"), 
        this._GoogleMapObject.FilterByIdContinent(IdContinent);
    },
    _AddClas_CountryAnchor_OnClick: function() {
        var $this = this;
        this._FilterCountryArray.click(function() {
            var FilterCountryObject = $(this);
            $this._LastCountry = $(this), $this._LastContinent = null, $this._ShowCountryGalleries(FilterCountryObject);
        });
    },
    _ShowCountryGalleries: function(FilterCountryObject) {
        var IdCountry = this._GetIdCountryFromObject(FilterCountryObject);
        this._FilterCountryArray.filter(".IsOpened").removeClass("IsOpened"), FilterCountryObject.addClass("IsOpened"), 
        this._GoogleMapObject.FilterByIdCountry(IdCountry);
    },
    _AddClas_Window_OnResize: function() {
        var $this = this;
        $this._timeoutHandle = null, $(window).resize(function() {
            null != $this._timeoutHandle && (clearTimeout($this._timeoutHandle), $this._timeoutHandle = null), 
            $this._timeoutHandle = setTimeout(function() {
                $this._AfterResize_Refresh();
            }, 200);
        });
    },
    _AfterResize_Refresh: function() {
        var $this = this;
        null != $this._LastContinent ? $this._ShowContinentGalleries($this._LastContinent) : null != $this._LastCountry ? $this._ShowCountryGalleries($this._LastCountry) : this._GoogleMapObject.fitBounds();
    },
    _GetIdCountryFromObject: function(Object) {
        var IdCountry = 0, _ListArray = Object.attr("class").split(" ");
        for (var Key in _ListArray) {
            var ClassName = _ListArray[Key];
            ClassName.match(/jsGmapCountriesmap-Country_/) && (IdCountry = parseInt(ClassName.replace(/jsGmapCountriesmap-Country_/, "")));
        }
        return IdCountry;
    },
    _GetIdContinentFromObject: function(Object) {
        var IdContinent = 0, _ListArray = Object.attr("class").split(" ");
        for (var Key in _ListArray) {
            var ClassName = _ListArray[Key];
            ClassName.match(/jsGmapCountriesmap-Continent_/) && (IdContinent = parseInt(ClassName.replace(/jsGmapCountriesmap-Continent_/, "")));
        }
        return IdContinent;
    }
};

var classGmapGallerylistCore = function() {
    this.init();
};

classGmapGallerylistCore.prototype = {
    init: function() {
        this._SetVariables() && this._AddEvent_Window_OnScroll();
    },
    _SetVariables: function() {
        return this._MapContenerObject = $(".jsGmapGalleryList-Map"), this._MapObject = this._MapContenerObject.find(".gmap"), 
        this._MapTitle = this._MapContenerObject.find(".header"), this._MapObject.length ? (this._InitializeSubClasses(), 
        !0) : !1;
    },
    _InitializeSubClasses: function() {
        var GoogleMapObject = new classGmapConstruct(this._MapObject), uniqId = 1, MarkerObj = new google.maps.MarkerImage(imgUrl + "gmap/pin-02.png?" + new Date().getDate(), new google.maps.Size(10, 10, "px", "px")), LatLngObject = this._GetLatLngFromObject(this._MapContenerObject), Options = new google.maps.Marker({
            position: new google.maps.LatLng(LatLngObject.lat, LatLngObject.lng),
            icon: MarkerObj,
            visible: !0,
            uniqId: uniqId
        }), Marker = GoogleMapObject.AddMarker(1, Options);
        GoogleMapObject.panTo(LatLngObject.lat + 4, LatLngObject.lng);
        var topOfGrid = $("#topOfGrid");
        topOfGrid.length < 1 || google.maps.event.addListener(Marker, "click", function() {
            $("html, body").animate({
                scrollTop: topOfGrid.offset().top
            }, 600);
        });
    },
    _GetLatLngFromObject: function(Object) {
        var LocalizationObject = {};
        LocalizationObject.lat = 0, LocalizationObject.lng = 0;
        var _ListArray = Object.attr("class").split(" ");
        for (var Key in _ListArray) {
            var ClassName = _ListArray[Key];
            ClassName.match(/jsGmapGalleryList-MapLat_/) && (LocalizationObject.lat = parseFloat(ClassName.replace(/jsGmapGalleryList-MapLat_/, ""))), 
            ClassName.match(/jsGmapGalleryList-MapLng_/) && (LocalizationObject.lng = parseFloat(ClassName.replace(/jsGmapGalleryList-MapLng_/, "")));
        }
        return LocalizationObject;
    },
    _AddEvent_Window_OnScroll: function() {
        var $this = this;
        this._MapTitle.length <= 0 || (this._AfterScrollEvent = !0, $(window).scroll(function() {
            $this._OnScroll();
        }));
    },
    _OnScroll: function() {
        var ScrollTopValue = $(window).scrollTop(), SliderHeight = this._MapContenerObject.height() / 3;
        if (SliderHeight >= ScrollTopValue) {
            var opacity = 1;
            SliderHeight > 0 && (opacity = 1 - ScrollTopValue / SliderHeight), this._MapTitle.css({
                opacity: opacity
            }), this._AfterScrollEvent = !0;
        } else this._AfterScrollEvent && (this._MapTitle.css({
            opacity: 0
        }), this._AfterScrollEvent = !1);
    }
};

var classGmapGallerylistFooterCore = function() {
    this.init();
};

classGmapGallerylistFooterCore.prototype = {
    init: function() {
        this._SetVariables();
    },
    _SetVariables: function() {
        var $this = this;
        return this._MapContenerObject = $(".jsGmapGalleryListFooter-Map"), this._MapObject = this._MapContenerObject.find(".gmap"), 
        this._MapObject.length ? ($.ajax({
            type: "POST",
            url: hostUrl + "ajax/gmap/",
            data: {
                currentUri: currentUri
            },
            dataType: "json",
            success: function(json) {
                $this._InitializeSubClasses(json);
            }
        }), !0) : !1;
    },
    _InitializeSubClasses: function(json) {
        var GoogleMapObject = new classGmapCountriesmapMap(this._MapObject), uniqId = 1;
        this._newScope(), GoogleMapObject.SetNewBounds();
        for (var Key in json) {
            var MarkerObject = json[Key];
            if (1 == MarkerObject.IsCurrentGallery) var MarkerObj = new google.maps.MarkerImage(imgUrl + "gmap/pin-02.png?" + new Date().getDate(), new google.maps.Size(10, 10, "px", "px")); else var MarkerObj = new google.maps.MarkerImage(imgUrl + "gmap/pin-01.png?" + new Date().getDate(), new google.maps.Size(10, 10, "px", "px"));
            var Options = new google.maps.Marker({
                position: new google.maps.LatLng(MarkerObject.lat, MarkerObject.lng),
                icon: MarkerObj,
                visible: !0,
                uniqId: uniqId,
                html: '<div class="gmap-marker-box"><a href="' + MarkerObject.href + '">' + MarkerObject.title + "</a></div>"
            });
            GoogleMapObject.AddMarker(uniqId, Options, Options), GoogleMapObject.AddToBounds(Options.position), 
            this._addToScope(Options.position), uniqId++;
        }
        var zoom = this._getZoomFromScope();
        GoogleMapObject.fitBounds(zoom, 2);
    },
    _newScope: function() {
        this._minLat = 90, this._minLng = 180, this._maxLat = -90, this._maxLng = -180;
    },
    _addToScope: function(position) {
        var currLat = position.lat(), currLng = position.lng();
        currLat < this._minLat && (this._minLat = currLat), currLng < this._minLng && (this._minLng = currLng), 
        currLat > this._maxLat && (this._maxLat = currLat), currLng > this._maxLng && (this._maxLng = currLng);
    },
    _getZoomFromScope: function() {
        {
            var latScope = this._maxLat + 90 - (this._minLat + 90);
            this._maxLng + 180 - (this._minLng + 180);
        }
        return 1 > latScope ? 8 : latScope >= 1 && 2 > latScope ? 7 : latScope >= 2 && 4 > latScope ? 6 : latScope >= 4 && 10 > latScope ? 5 : latScope >= 10 && 20 > latScope ? 4 : latScope >= 20 && 40 > latScope ? 3 : latScope >= 40 && 60 > latScope ? 2 : latScope >= 60 && 90 > latScope ? 1 : void 0;
    },
    _GetLatLngFromObject: function(Object) {
        var LocalizationObject = {};
        LocalizationObject.lat = 0, LocalizationObject.lng = 0;
        var _ListArray = Object.attr("class").split(" ");
        for (var Key in _ListArray) {
            var ClassName = _ListArray[Key];
            ClassName.match(/jsGmapGalleryList-MapLat_/) && (LocalizationObject.lat = parseFloat(ClassName.replace(/jsGmapGalleryList-MapLat_/, ""))), 
            ClassName.match(/jsGmapGalleryList-MapLng_/) && (LocalizationObject.lng = parseFloat(ClassName.replace(/jsGmapGalleryList-MapLng_/, "")));
        }
        return LocalizationObject;
    }
};

var classGmapCore = function() {
    this.init();
};

classGmapCore.prototype = {
    init: function() {
        var $this = this;
        $this._LoadScript();
    },
    _LoadScript: function() {
        var script = document.createElement("script");
        script.type = "text/javascript", script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=funcGmapInitialize", 
        document.body.appendChild(script);
    },
    LoadMap: function() {
        this._LoadMaps();
    },
    _LoadMaps: function() {
        new classGmapCountriesmapCore(), new classGalleryHomeCore(), new classGmapGallerylistCore(), 
        new classGmapGallerylistFooterCore();
    }
};

var classGmapConstruct = function(MapContenerObject) {
    this.init(MapContenerObject);
};

classGmapConstruct.prototype = {
    _centerLat: 0,
    _centerLon: 0,
    _zoom: 11,
    _timeInterval: null,
    _markersList: new Array(),
    _markersListInfo: new Array(),
    init: function(MapContenerObject) {
        this._MapContenerObject = MapContenerObject, this._LoadGoogleMap();
    },
    getMarkersList: function() {
        return this._markersList;
    },
    panTo: function(lat, lon) {
        this._mapObj.panTo(new google.maps.LatLng(lat, lon));
    },
    fitBounds: function() {
        this._mapObj.fitBounds(this._mapbounds);
    },
    ClearMarkers: function() {
        this._markerPos = 0;
        for (key in this._markersList) this._markersList[key].setMap(null), "undefined" != typeof this._markersList[key + "_active"] && this._markersList[key + "_active"].setMap(null), 
        "undefined" != typeof this._markersList[key + "_hover"] && this._markersList[key + "_hover"].setMap(null);
        this._markersList = new Array(), this._marersIndex = [], this._mapbounds = new google.maps.LatLngBounds();
    },
    AddMarker: function(uniqId, options) {
        return options.map = this._mapObj, this._markersList[uniqId] = new google.maps.Marker(options), 
        this._mapbounds.extend(options.position), this._markersList[uniqId];
    },
    ShowBubble: function(uniqId) {
        this._showBubble(uniqId);
    },
    _openUniqId: null,
    _showBubble: function(uniqId) {
        if (null == this._markersListInfo[uniqId]) {
            var options = this._markersList[uniqId], infoBubble2 = new InfoBubble({
                map: this._mapObj,
                content: options.html,
                position: options.position,
                shadowStyle: 0,
                padding: 0,
                backgroundColor: "none",
                minWidth: 300,
                maxHeight: 300,
                minHeight: 0,
                maxHeight: 0,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "#fff",
                disableAutoPan: !0,
                hideCloseButton: !0,
                arrowPosition: 0,
                arrowSize: 0,
                arrowStyle: 0
            });
            this._markersListInfo[uniqId] = infoBubble2;
        }
        null == this._openUniqId || this._openUniqId != uniqId ? (null != this._openUniqId && this._markersListInfo[this._openUniqId].close(this._mapObj, this._markersListInfo[this._openUniqId]), 
        this._markersListInfo[uniqId].open(this._mapObj), this._openUniqId = uniqId) : (this._markersListInfo[uniqId].close(this._mapObj, this._markersListInfo[uniqId]), 
        this._openUniqId = null), this._prevMarkerOpened = uniqId;
    },
    _LoadGoogleMap: function() {
        var lat = 52, lng = 23, stylesArray = [ {
            stylers: [ {
                visibility: "off"
            } ]
        }, {
            featureType: "water",
            stylers: [ {
                visibility: "simplified"
            }, {
                saturation: -100
            }, {
                lightness: -74
            } ]
        }, {
            featureType: "landscape.natural",
            stylers: [ {
                visibility: "on"
            }, {
                saturation: -100
            }, {
                lightness: -89
            } ]
        } ], newStyle = new google.maps.StyledMapType(stylesArray, {
            name: "newStyle"
        });
        this._mapObj = new google.maps.Map(this._MapContenerObject[0], {
            zoom: 4,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: !0,
            mapTypeControl: !1,
            draggable: !jQuery.browser.mobile,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            scrollwheel: !1,
            navigationControl: !1,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: !1
        }), this._mapObj.mapTypes.set("newStyle", newStyle), this._mapObj.setMapTypeId("newStyle"), 
        this._mapbounds = new google.maps.LatLngBounds();
    }
};

var classGmapGalleryHoverMap = function() {
    this.init();
};

classGmapGalleryHoverMap.prototype = {
    init: function() {
        this._SetVariables(), this._LoadMap();
    },
    _SetVariables: function() {
        this._MapContenerObject = $(".jsGmap-HomeFullMap");
    },
    _LoadMap: function() {}
};

var classGmapHomeFullMap = function() {
    this.init();
};

classGmapHomeFullMap.prototype = {
    init: function() {
        this._SetVariables();
    },
    _SetVariables: function() {},
    _LoadMap: function() {},
    _LoadMapData: function() {}
};

var classGalleryHomeCore = function() {
    this.init();
};

classGalleryHomeCore.prototype = {
    init: function() {
        this._SetVariables();
    },
    _SetVariables: function() {
        return this._ListObject = $(".jsGalleryHome-List"), this._MapObject = this._ListObject.find(".jsGalleryHome-Map"), 
        this._MapObject.length ? (this._ListItemArray = this._ListObject.find(".jsGalleryHome-ListItem"), 
        this._InitializeActions(), !0) : !1;
    },
    _InitializeActions: function() {
        var Configuration = {};
        Configuration.MapObject = this._MapObject;
        var ClassGalleryHomeMapObject = new classGalleryHomeMap(Configuration);
        this._ListItemArray.each(function() {
            var ListItemObject = $(this), Configuration = {};
            Configuration.ListItemObject = ListItemObject, Configuration.ListItemBackObject = ListItemObject.find(".jsGalleryHome-ListItemFront"), 
            Configuration.ListItemFrontObject = ListItemObject.find(".jsGalleryHome-ListItemBack"), 
            Configuration.ClassGalleryHomeMapObject = ClassGalleryHomeMapObject, new classGalleryHomeListItem(Configuration);
        });
    }
};

var classGalleryHomeList = function() {
    this.init();
};

classGalleryHomeList.prototype = {
    init: function() {
        this._SetVars(), this._SetEvents();
    },
    _SetVars: function() {},
    _SetEvents: function() {}
};

var classGalleryHomeListItem = function(Configuration) {
    this._RewriteConfiguration(Configuration), this.init();
};

classGalleryHomeListItem.prototype = {
    _RewriteConfiguration: function(Configuration) {
        this._ListItemObject = Configuration.ListItemObject, this._ListItemBackObject = Configuration.ListItemBackObject, 
        this._ListItemFrontObject = Configuration.ListItemFrontObject, this._ClassGalleryHomeMapObject = Configuration.ClassGalleryHomeMapObject;
    },
    init: function() {
        this._SetEvents();
    },
    _SetEvents: function() {
        this._AddEvent_ListItem_OnHover(), this._AddEvent_Window_Resize();
    },
    _AddEvent_ListItem_OnHover: function() {
        var $this = this;
        this._ListItemObject.on("mouseover", function() {
            clearTimeout(this._TimeOutHandle), $this._ListItemObject.hasClass("IsMouseOver") || ($this._SetState_BeforeMouseOver(), 
            this._TimeOutHandle = setTimeout(function() {
                $this._SetState_MouseOver();
            }, 100));
        }), this._ListItemObject.on("mouseleave", function() {
            clearTimeout(this._TimeOutHandle), $this._SetState_MouseLeave();
        });
    },
    _AddEvent_Window_Resize: function() {
        var $this = this;
        $this._timeoutHandle = null, $(window).resize(function() {
            null != $this._timeoutHandle && (clearTimeout($this._timeoutHandle), $this._timeoutHandle = null), 
            $this._timeoutHandle = setTimeout(function() {
                $this._ResetMapContainerPosition(0, 0);
            }, 200);
        });
    },
    _ResetMapContainerPosition: function(top, left) {
        var PositionObject = {};
        PositionObject.top = top, PositionObject.left = left, this._ClassGalleryHomeMapObject.SetPosition(PositionObject);
    },
    _SetState_BeforeMouseOver: function() {
        this._ListItemObject.addClass("IsBeforeMouseOver"), this._SetMapOverTheListItem();
    },
    _SetState_MouseOver: function() {
        this._ListItemObject.removeClass("IsBeforeMouseOver"), this._ListItemObject.addClass("IsMouseOver");
    },
    _SetState_MouseLeave: function() {
        this._ClassGalleryHomeMapObject.HideMapContener(), this._ListItemObject.removeClass("IsBeforeMouseOver"), 
        this._ListItemObject.removeClass("IsMouseOver");
    },
    _SetMapOverTheListItem: function() {
        var PositionObject = {};
        PositionObject.top = this._ListItemObject.position().top, PositionObject.left = this._ListItemObject.position().left, 
        this._ClassGalleryHomeMapObject.SetPosition(PositionObject);
        var LocalizationObject = this._GetLatLngFromObject(this._ListItemObject);
        this._ClassGalleryHomeMapObject.SetLocalization(LocalizationObject);
    },
    _GetLatLngFromObject: function(Object) {
        var LocalizationObject = {};
        LocalizationObject.lat = 0, LocalizationObject.lng = 0;
        var _ListArray = Object.attr("class").split(" ");
        for (var Key in _ListArray) {
            var ClassName = _ListArray[Key];
            ClassName.match(/jsGalleryHome-GeoLat_/) && (LocalizationObject.lat = parseFloat(ClassName.replace(/jsGalleryHome-GeoLat_/, ""))), 
            ClassName.match(/jsGalleryHome-GeoLng_/) && (LocalizationObject.lng = parseFloat(ClassName.replace(/jsGalleryHome-GeoLng_/, "")));
        }
        return LocalizationObject;
    }
};

var classGalleryHomeMap = function(Configuration) {
    this._RewriteConfiguration(Configuration), this.init();
};

classGalleryHomeMap.prototype = {
    _RewriteConfiguration: function(Configuration) {
        this._MapObject = Configuration.MapObject;
    },
    init: function() {
        this._MapLoaded = !1, this._LastMarkerObject = null, this._SetEvents();
    },
    SetPosition: function(PositionObject) {
        this._SetCurrentPosition(PositionObject);
    },
    HideMapContener: function() {
        this._HideMapContener();
    },
    SetLocalization: function(LocalizationObject) {
        this._RunMap(LocalizationObject), this._SetCurrentLocalization(LocalizationObject);
    },
    _SetEvents: function() {},
    _HideMapContener: function() {},
    _SetCurrentPosition: function(PositionObject) {
        this._MapObject.css({
            top: PositionObject.top,
            left: PositionObject.left
        });
    },
    _SetCurrentLocalization: function(LocalizationObject) {
        this._GoogleMapObject.panTo(new google.maps.LatLng(LocalizationObject.lat, LocalizationObject.lng)), 
        null !== this._LastMarkerObject && (this._LastMarkerObject.setMap(null), this._LastMarkerObject = null);
        var MarkerObj = new google.maps.MarkerImage(imgUrl + "gmap/pin-02.png?" + new Date().getDate(), new google.maps.Size(10, 10, "px", "px"));
        this._LastMarkerObject = new google.maps.Marker({
            position: new google.maps.LatLng(LocalizationObject.lat, LocalizationObject.lng),
            map: this._GoogleMapObject,
            icon: MarkerObj
        });
    },
    _RunMap: function(LocalizationObject) {
        if (this._MapLoaded) return !1;
        var stylesArray = [ {
            stylers: [ {
                visibility: "off"
            } ]
        }, {
            featureType: "water",
            stylers: [ {
                visibility: "simplified"
            }, {
                saturation: -100
            }, {
                lightness: -74
            } ]
        }, {
            featureType: "landscape.natural",
            stylers: [ {
                visibility: "on"
            }, {
                saturation: -100
            }, {
                lightness: -89
            } ]
        } ], newStyle = new google.maps.StyledMapType(stylesArray, {
            name: "newStyle"
        });
        return this._GoogleMapObject = new google.maps.Map(this._MapObject.find(".gmap")[0], {
            zoom: 4,
            center: new google.maps.LatLng(LocalizationObject.lat, LocalizationObject.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: !0,
            mapTypeControl: !1,
            draggable: !jQuery.browser.mobile,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            scrollwheel: !1,
            navigationControl: !1,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: !1
        }), this._GoogleMapObject.mapTypes.set("newStyle", newStyle), this._GoogleMapObject.setMapTypeId("newStyle"), 
        this._MapLoaded = !0, !0;
    }
};

var homeOdometer = function() {
    this.init();
};

homeOdometer.prototype = {
    init: function() {
        jQuery.browser.mobile || (this._serVars(), this._initOdometer(), this._setEvents());
    },
    _serVars: function() {
        this._odometersArr = $(".jsOdometer");
    },
    _initOdometer: function() {
        var $this = this;
        window.odometerOptions = {
            auto: !1,
            format: "(,ddd)",
            duration: 3e3
        }, this._odometersArr.each(function() {
            var _val = $(this).text();
            $(this).data("dest-val", _val), $(this).text($this._getInitValue(_val)), $(this).addClass("odometer");
        });
    },
    _getInitValue: function(val) {
        var result = "1", l = val.length;
        for (l; l > 1; l--) result += "0";
        return result;
    },
    _setEvents: function() {
        var $this = this;
        $this._timeoutHandle = null, $(window).scroll(function() {
            null != $this._timeoutHandle && (clearTimeout($this._timeoutHandle), $this._timeoutHandle = null), 
            $this._timeoutHandle = setTimeout(function() {
                $this._OnScroll();
            }, 160);
        });
    },
    _OnScroll: function() {
        var $this = this, _scrollValue = $(window).scrollTop() + $(window).height() - 10;
        this._odometersArr.each(function() {
            var _objTop = $(this).offset().top;
            _scrollValue > _objTop && $this._startAnimObj($(this));
        });
    },
    _startAnimObj: function(obj) {
        var _val = obj.data("dest-val");
        obj.text(_val);
    },
    _startAnimAll: function() {
        var $this = this;
        $this._odometersArr.each(function() {
            var _val = $(this).data("dest-val");
            $(this).text(_val);
        });
    }
};

var classGalleryViewCore = function() {
    this.init();
};

classGalleryViewCore.prototype = {
    init: function() {
        this._SetVariables(), this._InitializeActions(), this._SetEvents(), this._SetCloseWindowWithCloseState();
    },
    OpenWindow: function() {
        this._OpenWindow();
    },
    _SetVariables: function() {
        this._ContenerBgObject = $(".jsGalleryView-ContenerBg"), this._ContenerObject = $(".jsGalleryView-Contener"), 
        this._ContenerCenterObject = $(".jsGalleryView-ContenerCenter"), this._PrevAnchorObject = this._ContenerObject.find(".jsGalleryView-PrevAnchor"), 
        this._NextAnchorObject = this._ContenerObject.find(".jsGalleryView-NextAnchor"), 
        this._ImageObject = this._ContenerObject.find(".jsGalleryView-Image"), this._ImageH1Object = this._ContenerObject.find(".jsGalleryView-ImageH1"), 
        this._ImageH2Object = this._ContenerObject.find(".jsGalleryView-ImageH2"), this._ImageNameObject = this._ContenerObject.find(".jsGalleryView-ImageName"), 
        this._ImageResolutionObject = this._ContenerObject.find(".jsGalleryView-ImageResolution"), 
        this._ImageFileSizeObject = this._ContenerObject.find(".jsGalleryView-ImageFileSize"), 
        this._CloseAnchorObject = this._ContenerObject.find(".jsGalleryView-CloseAnchor"), 
        this._CartBoxAnchorObject = this._ContenerObject.find(".jsGalleryView-CartBoxAnchor"), 
        this._CartBoxContenerObject = this._ContenerObject.find(".jsGalleryView-CartBoxContener"), 
        this._InfoBoxAnchorObject = this._ContenerObject.find(".jsGalleryView-InfoBoxAnchor"), 
        this._InfoBoxContenerObject = this._ContenerObject.find(".jsGalleryView-InfoBoxContener"), 
        this._ShareBoxAnchorObject = this._ContenerObject.find(".jsGalleryView-ShareBoxAnchor"), 
        this._ShareBoxContenerObject = this._ContenerObject.find(".jsGalleryView-ShareBoxContener"), 
        this._LicenceAnchorObject = this._CartBoxContenerObject.find(".jsLicenceAnchor"), 
        this._LicenceTextObject = this._CartBoxContenerObject.find(".jsLicenceText"), this._BuyNowButtonObj = this._CartBoxContenerObject.find(".jsBuyNowButton"), 
        this._AskForQuoteButtonObj = this._CartBoxContenerObject.find(".jsAskForQuoteButton"), 
        this._PreviousBoxOpenedAnchorState = null, this._PreviousBoxOpenedContenerState = null, 
        this._WindowIsOpen = !1;
    },
    _updateScrolls: function() {
        this._CartBoxContenerObject.mCustomScrollbar("destroy"), this._CartBoxContenerObject.mCustomScrollbar({
            advanced: {
                updateOnContentResize: !0
            },
            mouseWheel: !0,
            mouseWheelPixels: 120,
            scrollButtons: {
                enable: !0,
                scrollSpeed: 60
            },
            scrollInertia: 300,
            theme: "wiml"
        }), this._ShareBoxContenerObject.mCustomScrollbar("destroy"), this._ShareBoxContenerObject.mCustomScrollbar({
            advanced: {
                updateOnContentResize: !0
            },
            mouseWheel: !0,
            mouseWheelPixels: 120,
            scrollButtons: {
                enable: !0,
                scrollSpeed: 60
            },
            scrollInertia: 300,
            theme: "wiml"
        });
    },
    _destroyScrolls: function() {
        this._CartBoxContenerObject.mCustomScrollbar("destroy"), this._ShareBoxContenerObject.mCustomScrollbar("destroy");
    },
    _InitializeActions: function() {
        this._classGalleryViewLightboxObject = new classGalleryViewLightbox(this._ContenerObject, this._ContenerBgObject), 
        this._classGalleryViewAjaxObject = new classGalleryViewAjax(this._classGalleryViewLightboxObject, this._ContenerObject, this._ImageObject, this._ImageH1Object, this._ImageH2Object, this._ImageNameObject, this._ImageResolutionObject, this._ImageFileSizeObject, this._BuyNowButtonObj, this._AskForQuoteButtonObj), 
        this._classGalleryViewResizeObject = new classGalleryViewResize(this._classGalleryViewAjaxObject, this._ContenerObject, this._ImageObject);
    },
    _SetEvents: function() {
        this._AddEvent_NextAnchor_OnClick(), this._AddEvent_PrevAnchor_OnClick(), this._AddEvent_CloseAnchor_OnClick(), 
        this._AddEvent_BoxAnchors_OnClick(), this._AddEvent_LicenceAnchor_OnClick(), this._AddEvent_Arrow_KeyPress(), 
        this._AddEvent_Hash_OnChange();
    },
    _AddEvent_Hash_OnChange: function() {
        var $this = this;
        Hash.on("^!picture-([0-9]*)$", {
            yep: function(path, parts) {
                $this._PrepareToOpenWindow(), $this._classGalleryViewAjaxObject.LoadPicture(parts[1]);
            },
            nop: function() {}
        });
    },
    _AddEvent_BoxAnchors_OnClick: function() {
        var $this = this;
        this._CartBoxAnchorObject.click(function() {
            $this._ShowHideBoxes($(this), $this._CartBoxContenerObject);
        }), this._InfoBoxAnchorObject.click(function() {
            $this._ShowHideBoxes($(this), $this._InfoBoxContenerObject);
        }), this._ShareBoxAnchorObject.click(function() {
            $this._ShowHideBoxes($(this), $this._ShareBoxContenerObject);
        });
    },
    _ShowHideBoxes: function(AnchorObject, ContenerObject) {
        null !== this._PreviousBoxOpenedAnchorState && this._PreviousBoxOpenedAnchorState.attr("class") !== AnchorObject.attr("class") && (this._PreviousBoxOpenedAnchorState.removeClass("IsActive"), 
        this._PreviousBoxOpenedContenerState.addClass("IsHidden")), this._PreviousBoxOpenedAnchorState = AnchorObject, 
        this._PreviousBoxOpenedContenerState = ContenerObject, AnchorObject.hasClass("IsActive") ? (AnchorObject.removeClass("IsActive"), 
        ContenerObject.addClass("IsHidden")) : (AnchorObject.addClass("IsActive"), ContenerObject.removeClass("IsHidden"), 
        this._updateScrolls());
    },
    _HideAllBoxes: function() {
        this._CartBoxAnchorObject.removeClass("IsActive"), this._CartBoxContenerObject.addClass("IsHidden"), 
        this._InfoBoxAnchorObject.removeClass("IsActive"), this._InfoBoxContenerObject.addClass("IsHidden"), 
        this._ShareBoxAnchorObject.removeClass("IsActive"), this._ShareBoxContenerObject.addClass("IsHidden"), 
        this._HideLicence(), this._destroyScrolls();
    },
    _ShowHideLicence: function() {
        this._LicenceTextObject.hasClass("IsHidden") ? this._LicenceTextObject.removeClass("IsHidden") : this._HideLicence();
    },
    _HideLicence: function() {
        this._LicenceTextObject.addClass("IsHidden");
    },
    _AddEvent_NextAnchor_OnClick: function() {
        var $this = this;
        this._NextAnchorObject.click(function() {
            $this._HideAllBoxes(), $this._classGalleryViewAjaxObject.LoadNextPicture();
        });
    },
    _AddEvent_PrevAnchor_OnClick: function() {
        var $this = this;
        this._PrevAnchorObject.click(function() {
            $this._HideAllBoxes(), $this._classGalleryViewAjaxObject.LoadPreviousPicture();
        });
    },
    _AddEvent_CloseAnchor_OnClick: function() {
        var $this = this;
        this._CloseAnchorObject.click(function() {
            $this._CloseWindow();
        });
    },
    _AddEvent_LicenceAnchor_OnClick: function() {
        var $this = this;
        this._LicenceAnchorObject.click(function(e) {
            e.preventDefault(), $this._ShowHideLicence();
        });
    },
    _AddEvent_Arrow_KeyPress: function() {
        var $this = this;
        $(document).keyup(function(event) {
            if ($this._WindowIsOpen) {
                var key = event.keyCode;
                switch (key) {
                  case 37:
                    $this._PrevAnchorObject.trigger("click");
                    break;

                  case 39:
                    $this._NextAnchorObject.trigger("click");
                    break;

                  case 27:
                    $this._CloseAnchorObject.trigger("click");
                }
            }
        });
    },
    _CloseWindow: function() {
        Hash.go("!"), this._SetCloseWindowWithCloseState(), this._classGalleryViewAjaxObject.SetStateOnClose();
    },
    _SetCloseWindowWithCloseState: function() {
        this._WindowIsOpen = !1, this._classGalleryViewAjaxObject.ClearStateOnClose(), this._classGalleryViewLightboxObject.Close(), 
        this._HideAllBoxes(), this._classGalleryViewResizeObject.Stop();
    },
    _OpenWindow: function() {
        this._WindowIsOpen || (this._WindowIsOpen = !0, this._classGalleryViewAjaxObject.SetStateOnOpen(), 
        this._classGalleryViewLightboxObject.Open());
    },
    _PrepareToOpenWindow: function() {
        this._WindowIsOpen || (this._WindowIsOpen = !0, this._classGalleryViewAjaxObject.SetStateOnOpen(), 
        this._classGalleryViewLightboxObject.FirstOpenPrepare());
    }
};

var classGalleryViewAjax = function(classGalleryViewAjaxObject, ContenerObject, ImageObject, ImageH1Object, ImageH2Object, ImageNameObject, ImageResolutionObject, ImageFileSizeObject, BuyNowButtonObj, AskForQuoteButtonObj) {
    this.init(classGalleryViewAjaxObject, ContenerObject, ImageObject, ImageH1Object, ImageH2Object, ImageNameObject, ImageResolutionObject, ImageFileSizeObject, BuyNowButtonObj, AskForQuoteButtonObj);
};

classGalleryViewAjax.prototype = {
    init: function(classGalleryViewAjaxObject, ContenerObject, ImageObject, ImageH1Object, ImageH2Object, ImageNameObject, ImageResolutionObject, ImageFileSizeObject, BuyNowButtonObj, AskForQuoteButtonObj) {
        this._classGalleryViewAjaxObject = classGalleryViewAjaxObject, this._ContenerObject = ContenerObject, 
        this._ImageObject = ImageObject, this._ImageH1Object = ImageH1Object, this._ImageH2Object = ImageH2Object, 
        this._ImageNameObject = ImageNameObject, this._ImageResolutionObject = ImageResolutionObject, 
        this._ImageFileSizeObject = ImageFileSizeObject, this._BuyNowButtonObj = BuyNowButtonObj, 
        this._AskForQuoteButtonObj = AskForQuoteButtonObj, this._ImagePreloader = this._ContenerObject.find(".picture-preloader"), 
        this._FirstPictureLoaded = !1, this._SetVariables(), this._WinIsOpened = !1;
    },
    SetStateOnOpen: function() {
        this._WinIsOpened = !0, this._FirstPictureLoaded = !1;
    },
    ClearStateOnClose: function() {
        this._WinIsOpened = !1;
    },
    _SetVariables: function() {
        this._PreviousPictureObject = {}, this._CurrentPictureObject = {}, this._NextPictureObject = {};
    },
    LoadFirstPicture: function() {
        this._SendRequest(0, "next");
    },
    LoadPicture: function(PictureNumber) {
        this._SendRequest(PictureNumber - 1, "next");
    },
    LoadNextPicture: function() {
        this._LoadImage(this._NextPictureObject), this._SendRequest(this._CurrentPictureObject.PictureId, "next");
    },
    LoadPreviousPicture: function() {
        this._LoadImage(this._PreviousPictureObject), this._SendRequest(this._CurrentPictureObject.PictureId, "prev");
    },
    _SendRequest: function(PictureId, Direction) {
        var $this = this, _DataObject = {};
        _DataObject.SiteUri = currentUri, _DataObject.Direction = Direction, _DataObject.PictureId = PictureId, 
        $.ajax({
            type: "POST",
            url: hostUrl + "ajax/galerypicture/",
            data: _DataObject,
            dataType: "json",
            success: function(json) {
                $this._ResponseRequest(json);
            }
        });
    },
    _ResponseRequest: function(json) {
        return this._WinIsOpened ? (this._PreviousPictureObject = json.PreviousPictureObject, 
        this._CurrentPictureObject = json.CurrentPictureObject, this._NextPictureObject = json.NextPictureObject, 
        void (this._FirstPictureLoaded || (this._classGalleryViewAjaxObject.FirstOpenPrepare(), 
        this._LoadImage(this._CurrentPictureObject)))) : !1;
    },
    _SetPicture: function(PictureObject) {
        this._ImageObject.attr("picture-ratio", PictureObject.PictureRatio), this._ImageObject.attr("src", PictureObject.src), 
        this._ImageH1Object.html(PictureObject.h1), this._ImageH2Object.html(PictureObject.h2), 
        this._ImageNameObject.html(PictureObject.FileName), this._ImageResolutionObject.html(PictureObject.FileResolution), 
        this._ImageFileSizeObject.html(PictureObject.FileSize), this._ContenerObject.find("a.jsBuyNowButton").attr("href", PictureObject.BuyNowUrl + "&picNum=" + this._CurrentPictureObject.PictureId), 
        this._AskForQuoteButtonObj.attr("href", "mailto:contact@worldinmylens.com?subject=Ask for quote: " + PictureObject.h1 + " - " + PictureObject.FileName), 
        this._ImageObject.trigger("DoResize"), Hash.go("!picture-" + PictureObject.PictureId);
    },
    _GetPictureSrc: function(PictureObject) {
        return PictureObject.src;
    },
    _LoadImage: function(PictureObject) {
        var $this = this;
        $this._ShowPreloader();
        var _TmpList = new Array();
        _TmpList.push(this._GetPictureSrc(PictureObject)), jQuery.imgpreload(_TmpList, {
            all: function() {
                $this._WinIsOpened && ($this._FirstPictureLoaded || (document._classGalleryViewCoreObject.OpenWindow(), 
                $this._SetPicture(PictureObject), $this._classGalleryViewAjaxObject.Open(), $this._FirstPictureLoaded = !0), 
                $this._SetPicture(PictureObject), $this._HidePreloader());
            }
        });
    },
    _ShowPreloader: function() {
        var $this = this;
        $this._ImagePreloader.hasClass("isInvisibleBlock") || $this._ImagePreloader.addClass("isInvisibleBlock"), 
        $this._ImagePreloader.hasClass("isVisible") || $this._ImagePreloader.addClass("isVisible");
    },
    _HidePreloader: function() {
        var $this = this;
        $this._ImagePreloader.removeClass("isVisible"), clearTimeout(this._AnimTimeout), 
        this._AnimTimeout = setTimeout(function() {
            $this._ImagePreloader.removeClass("isInvisibleBlock");
        }, 200);
    }
};

var classGalleryViewLightbox = function(ContenerObject, ContenerBgObject) {
    this.init(ContenerObject, ContenerBgObject);
};

classGalleryViewLightbox.prototype = {
    init: function(ContenerObject, ContenerBgObject) {
        this._ContenerObject = ContenerObject, this._ContenerBgObject = ContenerBgObject, 
        this._ContenerCenterObject = this._ContenerObject.parent(), this._HeaderBg = $(".jsHeaderFixedBg");
    },
    FirstOpenPrepare: function() {
        this._ContenerBgObject.removeClass("hide"), this._ContenerBgObject.removeClass("isHidden");
    },
    Open: function() {
        var $this = this;
        clearTimeout(this._Timeout), this._HeaderBg.css({
            visibility: "hidden"
        }), this._ContenerObject.removeClass("hide"), this._ContenerCenterObject.removeClass("hide"), 
        this._Timeout = setTimeout(function() {
            $this._ContenerCenterObject.removeClass("isHidden");
        }, 50);
    },
    Close: function() {
        var $this = this;
        this._ContenerCenterObject.hasClass("isHidden") || this._ContenerCenterObject.addClass("isHidden"), 
        this._ContenerBgObject.hasClass("isHidden") || this._ContenerBgObject.addClass("isHidden"), 
        clearTimeout(this._Timeout), this._Timeout = setTimeout(function() {
            $this._ContenerBgObject.hasClass("hide") || $this._ContenerBgObject.addClass("hide"), 
            $this._ContenerCenterObject.hasClass("hide") || $this._ContenerCenterObject.addClass("hide"), 
            $this._HeaderBg.css({
                visibility: ""
            });
        }, 600);
    }
};

var classGalleryViewResize = function(classGalleryViewLightboxObject, ContenerObject, ImageObject) {
    this.init(classGalleryViewLightboxObject, ContenerObject, ImageObject);
};

classGalleryViewResize.prototype = {
    _maxSize: 900,
    _noTitle: 400,
    init: function(classGalleryViewLightboxObject, ContenerObject, ImageObject) {
        this._classGalleryViewLightboxObject = classGalleryViewLightboxObject, this._ContenerObject = ContenerObject, 
        this._ImageObject = ImageObject, this._SetVariables(), this._SetEvents();
    },
    _SetVariables: function() {
        this._IsEnabled = !1;
    },
    _SetEvents: function() {
        this._AddEvent_Window_OnResize(), this._AddEvent_Image_DoResize();
    },
    Start: function() {
        this._IsEnabled = !0;
    },
    Stop: function() {
        this._IsEnabled = !1;
    },
    _AddEvent_Image_DoResize: function() {
        var $this = this;
        this._ImageObject.bind("DoResize", function() {
            $this._IsEnabled = !0, $this._DoResize();
        });
    },
    _AddEvent_Window_OnResize: function() {
        var $this = this;
        $(window).resize(function() {
            $this._DoResize();
        });
    },
    _DoResize: function() {
        if (!this._IsEnabled) return !1;
        var Offset = this._GetContenersWH(), _wWidth = $(window).width(), _wHeight = $(window).height(), _Width = _wWidth - Offset.width, _Height = _wHeight - Offset.height, PictureRatio = this._GetPictureRatio(), WindowRatio = this._GetWindowRatio();
        this._ImageObject.removeClass("ToHeight ToWidth").removeAttr("style"), _wHeight < this._noTitle ? this._ContenerObject.hasClass("NoTitle") || this._ContenerObject.addClass("NoTitle") : this._ContenerObject.removeClass("NoTitle");
        var _rWidth = _Width, _rHeight = _Height;
        return 1 > PictureRatio ? _rHeight > this._maxSize && (_rHeight = this._maxSize) : _rWidth > this._maxSize && (_rWidth = this._maxSize), 
        PictureRatio > WindowRatio ? _rWidth = Math.ceil(_rHeight * PictureRatio) : _rHeight = Math.ceil(_rWidth / PictureRatio), 
        _rWidth > _Width && (_rWidth = _Width), _rHeight > _Height && (_rHeight = _Height), 
        _rHeight > this._maxSize && (_rHeight = this._maxSize), _rWidth > this._maxSize && (_rWidth = this._maxSize), 
        PictureRatio > WindowRatio ? (this._ImageObject.addClass("ToWidth"), this._ImageObject.css({
            width: _rWidth + "px"
        })) : (this._ImageObject.addClass("ToHeight"), this._ImageObject.css({
            height: _rHeight + "px"
        })), this._SetHeaderClass(), !0;
    },
    _GetPictureRatio: function() {
        var Ratio = parseFloat(this._ImageObject.attr("picture-ratio"));
        return Ratio;
    },
    _GetWindowRatio: function() {
        var Width = $(window).width(), Height = $(window).height(), Offset = this._GetContenersWH();
        return Width -= Offset.width, Height -= Offset.height, Width / Height;
    },
    _GetContenersWH: function() {
        var Offset = {
            width: 0,
            height: 0
        };
        return this._ContenerObject.find(".jsGalleryView-ResizeContenerArea").each(function() {
            var Object = $(this);
            Offset.width += parseInt(Object.css("padding-left")) + parseInt(Object.css("margin-left")) + parseInt(Object.css("padding-right")) + parseInt(Object.css("margin-right")), 
            Offset.height += parseInt(Object.css("padding-top")) + parseInt(Object.css("margin-top")) + parseInt(Object.css("padding-bottom")) + parseInt(Object.css("margin-bottom"));
        }), Offset;
    },
    _SetHeaderClass: function() {
        var header = this._ContenerObject.find(".picture").find(".header"), headerWidth = header.width();
        header.removeClass("size-1 size-2 size-3 size-4 size-5"), 1e3 > headerWidth && headerWidth >= 720 ? header.hasClass("size-1") || header.addClass("size-1") : 720 > headerWidth && headerWidth >= 480 ? header.hasClass("size-2") || header.addClass("size-2") : 480 > headerWidth && headerWidth >= 360 ? header.hasClass("size-3") || header.addClass("size-3") : 360 > headerWidth && headerWidth >= 240 ? header.hasClass("size-4") || header.addClass("size-4") : 240 > headerWidth && (header.hasClass("size-5") || header.addClass("size-5"));
    }
};

var classNewsCore = function() {
    this.init();
};

classNewsCore.prototype = {
    init: function() {
        this._SetVariables() && this._SetEvents();
    },
    _SetVariables: function() {
        return this._NewsContenerArray = $(".jsSliderNews-NewsContener"), this._NewsContenerArray.length ? (this._EntryContenerArray = this._NewsContenerArray.find(".jsSliderNews-EntryContener"), 
        this._IntroContenerArray = this._EntryContenerArray.find(".jsSliderNews-IntroContener"), 
        !0) : !1;
    },
    _SetEvents: function() {
        this._NewsContenerArray.each(function() {
            var _EntryContenerObject = $(this), _EntryContenerArray = _EntryContenerObject.find(".jsSliderNews-EntryContener");
            new classNewsNavigation(_EntryContenerObject, _EntryContenerArray), _EntryContenerArray.each(function() {
                new classNewsEntry($(this));
            });
        }), this._AddEvent_Window_OnScroll();
    },
    _AddEvent_Window_OnScroll: function() {
        var $this = this;
        this._AfterScrollEvent = !0, jQuery.browser.mobile || $(window).scroll(function() {
            $this._OnScroll();
        });
    },
    _OnScroll: function() {
        var ScrollTopValue = $(window).scrollTop(), SliderHeight = this._NewsContenerArray.height() / 3;
        if (SliderHeight >= ScrollTopValue) {
            var opacity = 1 - ScrollTopValue / SliderHeight;
            this._IntroContenerArray.css({
                opacity: opacity
            }), this._AfterScrollEvent = !0;
        } else this._AfterScrollEvent && (this._IntroContenerArray.css({
            opacity: 0
        }), this._AfterScrollEvent = !1);
    }
};

var classNewsEntry = function(EntryContenerObject) {
    this.init(EntryContenerObject);
};

classNewsEntry.prototype = {
    init: function(EntryContenerObject) {
        this._EntryContenerObject = EntryContenerObject, this._SetVariables(), this._SetEvents(), 
        this._ShowIntroContener();
    },
    _SetVariables: function() {
        this._ShowMoreAnchorObject = this._EntryContenerObject.find(".jsSliderNews-ShowMoreAnchor"), 
        this._IntroContenerObject = this._EntryContenerObject.find(".jsSliderNews-IntroContener"), 
        this._MoreContenerObject = this._EntryContenerObject.find(".jsSliderNews-MoreContener"), 
        this._HideMoreAnchorObject = this._EntryContenerObject.find(".jsSliderNews-HideMoreAnchor");
    },
    _SetEvents: function() {
        this._AddEvent_ShowMoreAnchor_OnClick(), this._AddEvent_HideMoreAnchor_OnClick(), 
        this._AddEvent_OnReset();
    },
    _AddEvent_OnReset: function() {
        var $this = this;
        this._EntryContenerObject.bind("reset", function() {
            $this._ResetStates();
        });
    },
    _AddEvent_ShowMoreAnchor_OnClick: function() {
        var $this = this;
        this._ShowMoreAnchorObject.click(function(event) {
            event.stopPropagation(), $this._ShowMoreContener();
        });
    },
    _AddEvent_HideMoreAnchor_OnClick: function() {
        var $this = this;
        this._HideMoreAnchorObject.click(function() {
            $this._ResetStates();
        });
    },
    _ShowIntroContener: function() {
        this._IntroContenerObject.removeClass("IsHidden");
    },
    _ShowMoreContener: function() {
        this._IntroContenerObject.addClass("IsHidden"), this._MoreContenerObject.removeClass("IsHidden");
    },
    _ResetStates: function() {
        this._IntroContenerObject.removeClass("IsHidden"), this._MoreContenerObject.addClass("IsHidden");
    }
};

var classNewsNavigation = function(NewsContenerObject, EntryContenerArray) {
    this.init(NewsContenerObject, EntryContenerArray);
};

classNewsNavigation.prototype = {
    init: function(NewsContenerObject, EntryContenerArray) {
        this._NewsContenerObject = NewsContenerObject, this._EntryContenerArray = EntryContenerArray, 
        this._SetVariables(), this._SetEvents(), this._RepositionLayers();
    },
    _SetVariables: function() {
        this._PrevAnchorObject = this._NewsContenerObject.find(".jsSliderNews-PrevAnchor"), 
        this._NextAnchorObject = this._NewsContenerObject.find(".jsSliderNews-NextAnchor"), 
        this._OverlayContenerObject = this._NewsContenerObject.find(".jsSliderNews-OverlayContener"), 
        this._MaxPosition = this._EntryContenerArray.length - 1, this._CurrentPosition = 0, 
        this._PreviousPosition = this._GetPreviousPosition(), this._NextPosition = this._GetNextPosition(), 
        $(this._EntryContenerArray[this._CurrentPosition]).addClass("IsCurrent"), this._PreloadImage(this._CurrentPosition), 
        this._AnimationStart = !1;
    },
    _PreloadImage: function(Index) {
        var ImgObject = $(this._EntryContenerArray[Index]).find("img[data-image]");
        ImgObject.length && (ImgObject.attr("src", ImgObject.attr("data-image")), ImgObject.removeAttr("data-image"));
    },
    _SetEvents: function() {
        this._AddEvent_PrevAnchor_OnHover(), this._AddEvent_PrevAnchor_OnClick(), this._AddEvent_NextAnchor_OnHover(), 
        this._AddEvent_NextAnchor_OnClick(), this._AddEvent_DragAndDrop();
    },
    _AddEvent_PrevAnchor_OnHover: function() {
        var $this = this;
        this._PrevAnchorObject.bind("mouseover", function() {
            $this._HoverLowerLayer("prev", "over");
        }), this._PrevAnchorObject.bind("mouseleave", function() {
            $this._HoverLowerLayer("prev", "leave");
        });
    },
    _AddEvent_NextAnchor_OnHover: function() {
        var $this = this;
        this._NextAnchorObject.bind("mouseover", function() {
            $this._HoverLowerLayer("next", "over");
        }), this._NextAnchorObject.bind("mouseleave", function() {
            $this._HoverLowerLayer("next", "leave");
        });
    },
    _AddEvent_PrevAnchor_OnClick: function() {
        var $this = this;
        this._PrevAnchorObject.bind("click", function() {
            $this._GotoLayer("prev");
        });
    },
    _AddEvent_NextAnchor_OnClick: function() {
        var $this = this;
        this._NextAnchorObject.bind("click", function() {
            $this._GotoLayer("next");
        });
    },
    _AddEvent_DragAndDrop: function() {
        var $this = this, slidesArr = this._EntryContenerArray, threshold = 60;
        slidesArr.swipe({
            swipeStatus: function(event, phase, direction, distance) {
                "cancel" != phase && "end" != phase && ("right" == direction && ($this._ZindexingLowerLayer("prev"), 
                $(this).css({
                    left: distance + "px"
                })), "left" == direction && ($this._ZindexingLowerLayer("next"), $(this).css({
                    left: -distance + "px"
                }))), "end" == phase && (distance > threshold ? ("right" == direction && $this._GotoLayer("prev"), 
                "left" == direction && $this._GotoLayer("next")) : $this._TheSameLayer());
            }
        });
    },
    _GotoLayer: function(Direction) {
        var $this = this;
        if (this._AnimationStart) return !1;
        "next" == Direction && $this._CurrentPosition++, "prev" == Direction && $this._CurrentPosition--, 
        this._AnimationStart = !0, this._CurrentPosition = this._GetCurrentPosition(), this._PreviousPosition = this._GetPreviousPosition(), 
        this._NextPosition = this._GetNextPosition();
        var _PreviousLayerObject = $(this._EntryContenerArray[this._PreviousPosition]), _CurrentLayerObject = $(this._EntryContenerArray[this._CurrentPosition]), _IsCurrentObject = ($(this._EntryContenerArray[this._NextPosition]), 
        this._EntryContenerArray.filter(".IsCurrent"));
        this._EntryContenerArray.css({
            "z-index": 0
        }), "next" == Direction && (_CurrentLayerObject.removeClass("IsHidden").css({
            "z-index": 11
        }), _IsCurrentObject.css({
            "z-index": 12
        }), clearTimeout(this._TimeOutHandle), this._TimeOutHandle1 = setTimeout(function() {
            _CurrentLayerObject.addClass("IsCurrent");
        }, 200), _IsCurrentObject.stop().animate({
            left: "-100%"
        }, 600, function() {
            $this._RepositionLayers(), $this._AnimationStart = !1, _PreviousLayerObject.trigger("reset");
        }), this._PreloadImage(this._NextPosition)), "prev" == Direction && (_CurrentLayerObject.removeClass("IsHidden").css({
            "z-index": 11
        }), _IsCurrentObject.css({
            "z-index": 12
        }), clearTimeout(this._TimeOutHandle), this._TimeOutHandle1 = setTimeout(function() {
            _CurrentLayerObject.addClass("IsCurrent");
        }, 200), _IsCurrentObject.stop().animate({
            left: "100%"
        }, 600, function() {
            $this._RepositionLayers(), $this._AnimationStart = !1;
        }), this._PreloadImage(this._PreviousPosition)), _IsCurrentObject.removeClass("IsCurrent");
    },
    _ZindexingLowerLayer: function(Direction) {
        if (this._AnimationStart) return !1;
        var _PreviousLayerObject = $(this._EntryContenerArray[this._PreviousPosition]), _NextLayerObject = ($(this._EntryContenerArray[this._CurrentPosition]), 
        $(this._EntryContenerArray[this._NextPosition]));
        return "next" == Direction && (_PreviousLayerObject.addClass("IsHidden").css({
            "z-index": 0
        }), _NextLayerObject.removeClass("IsHidden").css({
            "z-index": 9
        }), this._PreloadImage(this._NextPosition)), "prev" == Direction && (_PreviousLayerObject.removeClass("IsHidden").css({
            "z-index": 9
        }), _NextLayerObject.addClass("IsHidden").css({
            "z-index": 0
        }), this._PreloadImage(this._PreviousPosition)), _PreviousLayerObject.trigger("reset"), 
        _NextLayerObject.trigger("reset"), !0;
    },
    _TheSameLayer: function() {
        if (this._AnimationStart) return !1;
        {
            var _CurrentLayerObject = ($(this._EntryContenerArray[this._PreviousPosition]), 
            $(this._EntryContenerArray[this._CurrentPosition]));
            $(this._EntryContenerArray[this._NextPosition]);
        }
        return $("body").is("#IsMobile") || _CurrentLayerObject.stop().animate({
            left: "0px"
        }, 300), !0;
    },
    _HoverLowerLayer: function(Direction, EventType) {
        if (this._AnimationStart) return !1;
        var _PreviousLayerObject = $(this._EntryContenerArray[this._PreviousPosition]), _CurrentLayerObject = $(this._EntryContenerArray[this._CurrentPosition]), _NextLayerObject = $(this._EntryContenerArray[this._NextPosition]);
        return "next" == Direction && (this._PreloadImage(this._NextPosition), "over" == EventType ? (_PreviousLayerObject.addClass("IsHidden").css({
            "z-index": 0
        }), _NextLayerObject.removeClass("IsHidden").css({
            "z-index": 9
        }), $("body").is("#IsMobile") || _CurrentLayerObject.stop().animate({
            left: "-60px"
        }, 300)) : $("body").is("#IsMobile") || _CurrentLayerObject.stop().animate({
            left: "0px"
        }, 300)), "prev" == Direction && (this._PreloadImage(this._PreviousPosition), "over" == EventType ? (_PreviousLayerObject.removeClass("IsHidden").css({
            "z-index": 9
        }), _NextLayerObject.addClass("IsHidden").css({
            "z-index": 0
        }), $("body").is("#IsMobile") || _CurrentLayerObject.stop().animate({
            left: "60px"
        }, 300)) : $("body").is("#IsMobile") || _CurrentLayerObject.stop().animate({
            left: "0px"
        }, 300)), _PreviousLayerObject.trigger("reset"), _NextLayerObject.trigger("reset"), 
        !0;
    },
    _RepositionLayers: function() {
        this._PreviousPosition = this._GetPreviousPosition(), this._NextPosition = this._GetNextPosition(), 
        this._EntryContenerArray.addClass("IsHidden").removeAttr("style").css({
            "z-index": 0
        });
        {
            var _CurrentLayerObject = ($(this._EntryContenerArray[this._PreviousPosition]), 
            $(this._EntryContenerArray[this._CurrentPosition]));
            $(this._EntryContenerArray[this._NextPosition]);
        }
        _CurrentLayerObject.removeClass("IsHidden").css({
            "z-index": 10
        });
    },
    _GetCurrentPosition: function() {
        var _Position = this._CurrentPosition;
        return 0 > _Position && (_Position = this._MaxPosition), _Position > this._MaxPosition && (_Position = 0), 
        _Position;
    },
    _GetPreviousPosition: function() {
        var _Position = this._CurrentPosition - 1;
        return 0 > _Position && (_Position = this._MaxPosition), _Position;
    },
    _GetNextPosition: function() {
        var _Position = this._CurrentPosition + 1;
        return _Position > this._MaxPosition && (_Position = 0), _Position;
    }
};

var classNavigationCore = function() {
    this.init();
};

classNavigationCore.prototype = {
    init: function() {
        this._SetVars(), this._SetEvents(), this._RunSubModules();
    },
    _RunSubModules: function() {
        new classNavigationMenu();
    },
    _SetVars: function() {},
    _SetEvents: function() {}
};

var classNavigationMenu = function() {
    this.init();
};

classNavigationMenu.prototype = {
    init: function() {
        this._SetVars(), this._SetEvents();
    },
    _SetVars: function() {
        this._MainOpenAnchorObj = $(".jsAsideMenu-MainOpenAnchor"), this._MainContenerObj = $(".jsAsideMenu-MainContener");
    },
    _SetEvents: function() {
        this._AddEvent_MainAnchor_OnClick();
    },
    _AddEvent_MainAnchor_OnClick: function() {
        var $this = this;
        this._MainOpenAnchorObj.click(function() {
            $this._OpenCloseMenu();
        });
    },
    _OpenCloseMenu: function() {
        this._OpenMenu();
    },
    _IsMenuClosed: function() {
        return this._MainContenerObj.hasClass("closed");
    },
    _OpenMenu: function() {
        this._MainOpenAnchorObj.addClass("closed"), this._MainContenerObj.removeClass("closed"), 
        this._MainContenerObj.addClass("OpenedLevel-1");
    }
};

var classNavigationUri = function() {
    this.init();
};

classNavigationUri.prototype = {
    init: function() {
        this._SetVars(), this._SetEvents();
    },
    _SetVars: function() {},
    _SetEvents: function() {}
};

var classSliderCore = function() {
    this.init();
};

classSliderCore.prototype = {
    init: function() {
        this._SetVars(), this._SetEvents();
    },
    _SetVars: function() {
        this._SliderContenerArray = $(".jsSlider-Contener");
    },
    _SetEvents: function() {
        this._SliderContenerArray.each(function() {
            var SliderContenerObject = $(this);
            new classSliderContener(SliderContenerObject);
        });
    }
};

var classSliderContener = function(SliderContenerObject) {
    this.init(SliderContenerObject);
};

classSliderContener.prototype = {
    _goStep: 2,
    init: function(SliderContenerObject) {
        this._SliderContenerObject = SliderContenerObject, this._SetVariables(), this._OnResize(), 
        this._SetEvents(), this._CheckExtreme();
    },
    _SetVariables: function() {
        this._GoUpAnchorObject = this._SliderContenerObject.find(".jsSlider-GoUp"), this._GoDownAnchorObject = this._SliderContenerObject.find(".jsSlider-GoDown"), 
        this._OverlayContenerrObject = this._SliderContenerObject.find(".jsSlider-OverlayContener"), 
        this._MoverContenerObject = this._SliderContenerObject.find(".jsSlider-MoverContener"), 
        this._SimpleInnerItemObject = this._MoverContenerObject.find(" > *:first");
    },
    _RecalculateVariables: function() {
        this._OverlayHeight = this._OverlayContenerrObject.height(), this._TotalHeight = this._MoverContenerObject.height(), 
        this._MoveStepLength = this._SimpleInnerItemObject.outerHeight(), this._TopPosition = 0, 
        this._MaxTopPosition = this._TotalHeight - this._OverlayHeight, this._CurrentStep = 0, 
        this._MaxStep = Math.ceil(this._MaxTopPosition / this._MoveStepLength);
    },
    _SetEvents: function() {
        this._AddEvent_GoUpAnchor_OnClick(), this._AddEvent_GoDownAnchor_OnClick(), this._AddEvent_MouseWheel_Scroll(), 
        this._AddEvent_Window_OnResize();
    },
    _AddEvent_Window_OnResize: function() {
        var $this = this;
        $(window).resize(function() {
            $this._OnResize();
        });
    },
    _OnResize: function() {
        this._RecalculateVariables(), this._ShowHideNavigationAnchors();
    },
    _AddEvent_GoUpAnchor_OnClick: function() {
        var $this = this;
        this._GoUpAnchorObject.click(function() {
            $this._GotoNthPreviousStep($this._goStep);
        });
    },
    _AddEvent_GoDownAnchor_OnClick: function() {
        var $this = this;
        this._GoDownAnchorObject.click(function() {
            $this._GotoNthNextStep($this._goStep);
        });
    },
    _AddEvent_MouseWheel_Scroll: function() {
        var $this = this;
        this._OverlayContenerrObject.on("DOMMouseScroll", function(e) {
            e.originalEvent.detail > 0 ? $this._GotoNextStep() : $this._GotoPreviousStep(), 
            e.preventDefault();
        }), this._OverlayContenerrObject.on("wheel", function(e) {
            event.deltaY > 0 ? $this._GotoNextStep() : $this._GotoPreviousStep(), e.preventDefault();
        });
    },
    _GotoNextStep: function() {
        this._CurrentStep++, this._MoveTo();
    },
    _GotoNthNextStep: function(n) {
        this._CurrentStep += n, this._MoveTo();
    },
    _GotoPreviousStep: function() {
        this._CurrentStep--, this._MoveTo();
    },
    _GotoNthPreviousStep: function(n) {
        this._CurrentStep -= n, this._MoveTo();
    },
    _MoveTo: function() {
        this._CurrentStep > this._MaxStep && (this._CurrentStep = this._MaxStep), this._CurrentStep < 0 && (this._CurrentStep = 0), 
        this._CheckExtreme(), this._MoverContenerObject.stop().animate({
            top: -1 * this._CurrentStep * this._MoveStepLength + "px"
        }, 900);
    },
    _ShowHideNavigationAnchors: function() {
        this._OverlayHeight > this._TotalHeight ? (this._OverlayContenerrObject.removeClass("WithNavigation"), 
        this._GoUpAnchorObject.addClass("hide"), this._GoDownAnchorObject.addClass("hide")) : (this._OverlayContenerrObject.addClass("WithNavigation"), 
        this._GoUpAnchorObject.removeClass("hide"), this._GoDownAnchorObject.removeClass("hide"));
    },
    _CheckExtreme: function() {
        this._SliderContenerObject.removeClass("onTop"), this._SliderContenerObject.removeClass("onBot"), 
        0 == this._CurrentStep ? this._SliderContenerObject.addClass("onTop") : this._CurrentStep == this._MaxStep && this._SliderContenerObject.addClass("onBot");
    }
};

var classSliderNavigation = function() {
    this.init();
};

classSliderNavigation.prototype = {
    init: function() {
        this._SetVars(), this._SetEvents();
    },
    _SetVars: function() {},
    _SetEvents: function() {}
};

var classMenuCore = function() {
    this.init();
};

classMenuCore.prototype = {
    init: function() {
        this._SetVars() && (this._SetEvents(), this._OnScroll(), this._InitAsideMenus(), 
        this._InitContentScrolls());
    },
    _SetVars: function() {
        return this._AsideMenusList = $(".jsAsideMenu-MainContener"), this._AsideMenusList.length < 1 ? !1 : !0;
    },
    _SetEvents: function() {
        jQuery.browser.mobile || this._AddEvent_Window_OnScroll();
    },
    _InitAsideMenus: function() {
        this._AsideMenusList.each(function() {
            new classMenuAside($(this));
        });
    },
    _InitContentScrolls: function() {
        this._AsideMenusList.each(function() {
            this._classMenuContentScrollsObject = new classMenuContentScrolls($(this));
        });
    },
    _AddEvent_Window_OnScroll: function() {
        var $this = this;
        $this._timeoutHandle = null, $(window).scroll(function() {
            document.isScrolling = !0, null !== $this._timeoutHandle && (clearTimeout($this._timeoutHandle), 
            $this._timeoutHandle = null), $this._timeoutHandle = setTimeout(function() {
                document.isScrolling = !1;
            }, 100), $this._OnScroll();
        });
    },
    _OnScroll: function() {
        var ScrollTopValue = $(window).scrollTop();
        if ($(".wiml-gallerieslist").length && !jQuery.browser.mobile && (ScrollTopValue >= $(".wiml-gallerieslist").offset().top ? $(".jsHeaderFixedBg").hasClass("isOpened") || $(".jsHeaderFixedBg").addClass("isOpened") : ($(".jsHeaderFixedBg").removeClass("isOpened"), 
        $(".jsAsideMenu-MainContener").css({
            visibility: ""
        }), $(".jsSliderNews-NewsContener").css({
            visibility: ""
        }))), !jQuery.browser.mobile) {
            var MapSection = $(".jsHomeGmapFixed"), MapPusherSection = $(".jsHomeGmapPusherFixed");
            if (MapPusherSection.length < 1) return;
            ScrollTopValue >= MapPusherSection.offset().top ? (MapSection.hasClass("fixedMap") || MapSection.addClass("fixedMap"), 
            MapPusherSection.hasClass("fixedMap") || MapPusherSection.addClass("fixedMap")) : (MapSection.removeClass("fixedMap"), 
            MapPusherSection.removeClass("fixedMap"));
        }
    }
};

var classMenuAside = function(MainContener) {
    this.init(MainContener);
};

classMenuAside.prototype = {
    _PreviusOpenedAnchorRevValue: null,
    _PreviusOpenedMenuArr: new Array(),
    _OpenCloseAnimationTime: 500,
    init: function(MainContener) {
        this._MainContenerObj = MainContener, this._SetVars(), this._SetEvents();
    },
    _SetVars: function() {
        this._ManinCloseAnchorObj = this._MainContenerObj.find(".jsAsideMenu-ManinCloseAnchor"), 
        this._ManinBackAnchorObj = this._MainContenerObj.find(".jsAsideMenu-ManinBackAnchor"), 
        this._PreviusOpenedAnchorRevValue = null, this._PreviusOpenedMenuArr = new Array(), 
        this._AnchorsList = this._MainContenerObj.find(".jsAsideMenu-Anchor");
    },
    _SetEvents: function() {
        this._AddEvent_Anchor_OnClick(), this._AddEvent_Close_OnClick(), this._AddEvent_Back_OnClick();
    },
    _AddEvent_Anchor_OnClick: function() {
        var $this = this;
        this._AnchorsList.click(function(event) {
            event.preventDefault();
            var _AnchorObject = $(this);
            $this._OpenMenu(_AnchorObject);
        });
    },
    _SetAnchorAsOpened: function(AnchorObject) {
        AnchorObject.closest(".jsAsideMenu-contener").find(".jsAsideMenu-Anchor.IsOpened").removeClass("IsOpened"), 
        AnchorObject.closest(".jsSlider-MoverContener").find(".jsAsideMenu-Anchor.IsOpened").removeClass("IsOpened"), 
        AnchorObject.addClass("IsOpened");
    },
    _SetAnchorAsClosed: function(AnchorObject) {
        AnchorObject.removeClass("IsOpened");
    },
    _AddEvent_Close_OnClick: function() {
        var $this = this;
        this._ManinCloseAnchorObj.click(function(event) {
            event.preventDefault(), $this._CloseMainContener();
        });
    },
    _AddEvent_Back_OnClick: function() {
        var $this = this;
        this._ManinBackAnchorObj.click(function(event) {
            event.preventDefault(), $this._CloseCurrentLevel();
        });
    },
    _CloseMainContener: function() {
        var $this = this;
        this._CloseAllMenusByLevel(2), this._MainContenerObj[0]._classMenuContentScrollsObject.Destroy(), 
        this._ItemsToClose ? setTimeout(function() {
            $this._SetCloseMainContener();
        }, this._ItemsToClose * this._OpenCloseAnimationTime + 200) : this._SetCloseMainContener();
    },
    _CloseCurrentLevel: function() {
        var _MenuLevel = 1;
        for (_MenuLevel = 4; _MenuLevel > 1 && !this._MainContenerObj.hasClass("OpenedLevel-" + _MenuLevel); _MenuLevel--) ;
        this._MainContenerObj.find(".nav-url.jsAsideMenu-Anchor.IsOpened").removeClass("IsOpened"), 
        this._PreviusOpenedAnchorRevValue = null, this._CloseAllMenusByLevel(_MenuLevel);
    },
    _SetCloseMainContener: function() {
        this._MainContenerObj.addClass("closed"), this._ManinCloseAnchorObj.addClass("closed"), 
        this._MainContenerObj.removeClass("OpenedLevel-0 OpenedLevel-1 OpenedLevel-2 OpenedLevel-3 OpenedLevel-4"), 
        this._MainContenerObj.find(".nav-url.jsAsideMenu-Anchor.IsOpened").removeClass("IsOpened"), 
        this._PreviusOpenedAnchorRevValue = null;
    },
    _SetMainContenerCloseLevel: function(MenuLevel) {
        this._MainContenerObj.removeClass("OpenedLevel-0 OpenedLevel-1 OpenedLevel-2 OpenedLevel-3 OpenedLevel-4"), 
        this._MainContenerObj.addClass("OpenedLevel-" + MenuLevel);
    },
    _OpenMenu: function(AnchorObject) {
        var $this = this;
        this._SetAnchorAsOpened(AnchorObject);
        var _AnchorRevValue = AnchorObject.attr("rev"), _MenuObject = this._MainContenerObj.find("." + _AnchorRevValue), _MenuLevel = this._GetMenuLevel(_MenuObject);
        return this._CloseAllMenusByLevel(_MenuLevel), this._ItemsToClose ? setTimeout(function() {
            $this._SetMenuAsOpened(_MenuLevel, _MenuObject, AnchorObject, _AnchorRevValue);
        }, this._ItemsToClose * this._OpenCloseAnimationTime + 200) : this._SetMenuAsOpened(_MenuLevel, _MenuObject, AnchorObject, _AnchorRevValue), 
        !0;
    },
    _SetMenuAsOpened: function(MenuLevel, MenuObject, AnchorObject, AnchorRevValue) {
        if (this._PreviusOpenedAnchorRevValue == AnchorRevValue) return this._PreviusOpenedAnchorRevValue = null, 
        !1;
        this._PreviusOpenedMenuArr[MenuLevel] = MenuObject, MenuObject.removeClass("closed"), 
        this._SetMainContenerCloseLevel(MenuLevel), this._SetWidthClassForCurrentMenu(MenuObject), 
        this._PreviusOpenedAnchorRevValue = AnchorRevValue;
        var $this = this;
        return $this._MainContenerObj[0]._classMenuContentScrollsObject.Update(), !0;
    },
    _SetWidthClassForCurrentMenu: function(MenuObject) {
        var menuContainer = $(".jsAsideMenu-MainContener");
        menuContainer.removeClass("w540 w360"), MenuObject.hasClass("w540") && menuContainer.addClass("w540"), 
        MenuObject.hasClass("w360") && menuContainer.addClass("w360");
    },
    _ItemsToClose: 0,
    _CloseAllMenusByLevel: function(MenuLevel) {
        var $this = this;
        if ("undefined" != typeof this._PreviusOpenedMenuArr[MenuLevel]) {
            var _List = this._GetReverseOpenedIdsList();
            this._ItemsToClose = _List[0] - MenuLevel + 1;
            for (var _Key in _List) {
                var _TmpLevel = _List[_Key];
                if (_TmpLevel >= MenuLevel) {
                    $this._SetMenuAsClosed(_TmpLevel, $this._PreviusOpenedMenuArr[_TmpLevel]), setTimeout(function() {
                        $this._CloseAllMenusByLevel(MenuLevel);
                    }, this._OpenCloseAnimationTime);
                    break;
                }
            }
        } else this._ItemsToClose = 0;
    },
    _SetMenuAsClosed: function(MenuLevel, MenuObject) {
        MenuObject.addClass("closed");
        var _AnchorObject = MenuObject.find(".jsAsideMenu-Anchor").filter(".IsOpened");
        delete this._PreviusOpenedMenuArr[MenuLevel], this._SetMainContenerCloseLevel(MenuLevel - 1), 
        this._SetAnchorAsClosed(_AnchorObject);
    },
    _GetReverseOpenedIdsList: function() {
        var _List = new Array();
        for (var _Key in this._PreviusOpenedMenuArr) _List.push(_Key);
        return _List.reverse(), _List;
    },
    _GetMenuLevel: function(MenuObject) {
        var _MenuLevel = null, classList = MenuObject.attr("class").split(/\s+/);
        return $.each(classList, function(index, item) {
            item.match(/menu-col-/) && (_MenuLevel = parseInt(item.replace(/menu-col-/, "")));
        }), _MenuLevel;
    }
};

var classMenuItem = function() {
    this.init();
};

classMenuItem.prototype = {
    init: function() {
        this._SetVars(), this._SetEvents();
    },
    _SetVars: function() {},
    _SetEvents: function() {}
};

var classMenuContentScrolls = function(MainContener) {
    this.init(MainContener);
};

classMenuContentScrolls.prototype = {
    init: function(MainContener) {
        this._MainContenerObj = MainContener, this._SetVars() && this._initScrolls();
    },
    _SetVars: function() {
        return this._MainContenerObj.length < 1 ? !1 : (this._ItemsWithScrollArray = this._MainContenerObj.find(".jsMcScrollbar"), 
        !0);
    },
    Update: function() {},
    Destroy: function() {},
    _initScrolls: function() {
        this._ItemsWithScrollArray.mCustomScrollbar({
            advanced: {
                updateOnContentResize: !0
            },
            mouseWheel: !0,
            mouseWheelPixels: 120,
            scrollButtons: {
                enable: !0,
                scrollSpeed: 60
            },
            scrollInertia: 300,
            theme: "wiml"
        });
    }
};

var classCore = function() {
    this.init();
};

classCore.prototype = {
    init: function() {
        jQuery.fx.interval = 25, jQuery.browser.mobile && ($("body").attr("id", "IsMobile"), 
        $.fx.off = !0), document._classNavigationCoreObject = new classNavigationCore(), 
        document._classSliderCoreObject = new classSliderCore(), document._classMenuCoreObject = new classMenuCore(), 
        document._classNewsCoreObject = new classNewsCore(), document._classGmapCoreObject = new classGmapCore(), 
        new homeOdometer(), document._classGalleryViewCoreObject = new classGalleryViewCore();
    }
}, $(document).ready(function() {
    new classCore();
});