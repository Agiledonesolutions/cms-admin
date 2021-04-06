! function(e) {
    var t = {};

    function a(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, a), i.l = !0, i.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) a.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/", a(a.s = 184)
}([function(e, t, a) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, n;

            function i() {
                return t.apply(null, arguments)
            }

            function r(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function o(e) {
                return void 0 === e
            }

            function d(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function l(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function u(e, t) {
                var a, n = [];
                for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                return n
            }

            function _(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function m(e, t) {
                for (var a in t) _(t, a) && (e[a] = t[a]);
                return _(t, "toString") && (e.toString = t.toString), _(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function c(e, t, a, n) {
                return kt(e, t, a, n, !0).utc()
            }

            function h(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function f(e) {
                if (null == e._isValid) {
                    var t = h(e),
                        a = n.call(t.parsedDateParts, (function(e) {
                            return null != e
                        })),
                        i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                    if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
                    e._isValid = i
                }
                return e._isValid
            }

            function M(e) {
                var t = c(NaN);
                return null != e ? m(h(t), e) : h(t).userInvalidated = !0, t
            }
            n = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                    if (n in t && e.call(this, t[n], n, t)) return !0;
                return !1
            };
            var p = i.momentProperties = [];

            function y(e, t) {
                var a, n, i;
                if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), p.length > 0)
                    for (a = 0; a < p.length; a++) o(i = t[n = p[a]]) || (e[n] = i);
                return e
            }
            var g = !1;

            function L(e) {
                y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, i.updateOffset(this), g = !1)
            }

            function Y(e) {
                return e instanceof L || null != e && null != e._isAMomentObject
            }

            function v(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function k(e) {
                var t = +e,
                    a = 0;
                return 0 !== t && isFinite(t) && (a = v(t)), a
            }

            function b(e, t, a) {
                var n, i = Math.min(e.length, t.length),
                    r = Math.abs(e.length - t.length),
                    s = 0;
                for (n = 0; n < i; n++)(a && e[n] !== t[n] || !a && k(e[n]) !== k(t[n])) && s++;
                return s + r
            }

            function D(e) {
                !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function w(e, t) {
                var a = !0;
                return m((function() {
                    if (null != i.deprecationHandler && i.deprecationHandler(null, e), a) {
                        for (var n, r = [], s = 0; s < arguments.length; s++) {
                            if (n = "", "object" == typeof arguments[s]) {
                                for (var o in n += "\n[" + s + "] ", arguments[0]) n += o + ": " + arguments[0][o] + ", ";
                                n = n.slice(0, -2)
                            } else n = arguments[s];
                            r.push(n)
                        }
                        D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), a = !1
                    }
                    return t.apply(this, arguments)
                }), t)
            }
            var x, T = {};

            function S(e, t) {
                null != i.deprecationHandler && i.deprecationHandler(e, t), T[e] || (D(t), T[e] = !0)
            }

            function H(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function j(e, t) {
                var a, n = m({}, e);
                for (a in t) _(t, a) && (s(e[a]) && s(t[a]) ? (n[a] = {}, m(n[a], e[a]), m(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                for (a in e) _(e, a) && !_(t, a) && s(e[a]) && (n[a] = m({}, n[a]));
                return n
            }

            function P(e) {
                null != e && this.set(e)
            }
            i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, x = Object.keys ? Object.keys : function(e) {
                var t, a = [];
                for (t in e) _(e, t) && a.push(t);
                return a
            };
            var O = {};

            function A(e, t) {
                var a = e.toLowerCase();
                O[a] = O[a + "s"] = O[t] = e
            }

            function F(e) {
                return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0
            }

            function W(e) {
                var t, a, n = {};
                for (a in e) _(e, a) && (t = F(a)) && (n[t] = e[a]);
                return n
            }
            var C = {};

            function I(e, t) {
                C[e] = t
            }

            function z(e, t, a) {
                var n = "" + Math.abs(e),
                    i = t - n.length;
                return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n
            }
            var E = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                N = {},
                V = {};

            function B(e, t, a, n) {
                var i = n;
                "string" == typeof n && (i = function() {
                    return this[n]()
                }), e && (V[e] = i), t && (V[t[0]] = function() {
                    return z(i.apply(this, arguments), t[1], t[2])
                }), a && (V[a] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), e)
                })
            }

            function J(e, t) {
                return e.isValid() ? (t = U(t, e.localeData()), N[t] = N[t] || function(e) {
                    var t, a, n, i = e.match(E);
                    for (t = 0, a = i.length; t < a; t++) V[i[t]] ? i[t] = V[i[t]] : i[t] = (n = i[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                    return function(t) {
                        var n, r = "";
                        for (n = 0; n < a; n++) r += H(i[n]) ? i[n].call(t, e) : i[n];
                        return r
                    }
                }(t), N[t](e)) : e.localeData().invalidDate()
            }

            function U(e, t) {
                var a = 5;

                function n(e) {
                    return t.longDateFormat(e) || e
                }
                for (R.lastIndex = 0; a >= 0 && R.test(e);) e = e.replace(R, n), R.lastIndex = 0, a -= 1;
                return e
            }
            var G = /\d/,
                q = /\d\d/,
                $ = /\d{3}/,
                K = /\d{4}/,
                Z = /[+-]?\d{6}/,
                Q = /\d\d?/,
                X = /\d\d\d\d?/,
                ee = /\d\d\d\d\d\d?/,
                te = /\d{1,3}/,
                ae = /\d{1,4}/,
                ne = /[+-]?\d{1,6}/,
                ie = /\d+/,
                re = /[+-]?\d+/,
                se = /Z|[+-]\d\d:?\d\d/gi,
                oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                le = {};

            function ue(e, t, a) {
                le[e] = H(t) ? t : function(e, n) {
                    return e && a ? a : t
                }
            }

            function _e(e, t) {
                return _(le, e) ? le[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, a, n, i) {
                    return t || a || n || i
                }))))
            }

            function me(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var ce = {};

            function he(e, t) {
                var a, n = t;
                for ("string" == typeof e && (e = [e]), d(t) && (n = function(e, a) {
                        a[t] = k(e)
                    }), a = 0; a < e.length; a++) ce[e[a]] = n
            }

            function fe(e, t) {
                he(e, (function(e, a, n, i) {
                    n._w = n._w || {}, t(e, n._w, n, i)
                }))
            }

            function Me(e, t, a) {
                null != t && _(ce, e) && ce[e](t, a._a, a, e)
            }

            function pe(e) {
                return ye(e) ? 366 : 365
            }

            function ye(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            B("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            })), B(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            })), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), I("year", 1), ue("Y", re), ue("YY", Q, q), ue("YYYY", ae, K), ue("YYYYY", ne, Z), ue("YYYYYY", ne, Z), he(["YYYYY", "YYYYYY"], 0), he("YYYY", (function(e, t) {
                t[0] = 2 === e.length ? i.parseTwoDigitYear(e) : k(e)
            })), he("YY", (function(e, t) {
                t[0] = i.parseTwoDigitYear(e)
            })), he("Y", (function(e, t) {
                t[0] = parseInt(e, 10)
            })), i.parseTwoDigitYear = function(e) {
                return k(e) + (k(e) > 68 ? 1900 : 2e3)
            };
            var ge, Le = Ye("FullYear", !0);

            function Ye(e, t) {
                return function(a) {
                    return null != a ? (ke(this, e, a), i.updateOffset(this, t), this) : ve(this, e)
                }
            }

            function ve(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function ke(e, t, a) {
                e.isValid() && !isNaN(a) && ("FullYear" === t && ye(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), be(a, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
            }

            function be(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var a, n = (t % (a = 12) + a) % a;
                return e += (t - n) / 12, 1 === n ? ye(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            ge = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, B("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            })), B("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            })), B("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            })), A("month", "M"), I("month", 8), ue("M", Q), ue("MM", Q, q), ue("MMM", (function(e, t) {
                return t.monthsShortRegex(e)
            })), ue("MMMM", (function(e, t) {
                return t.monthsRegex(e)
            })), he(["M", "MM"], (function(e, t) {
                t[1] = k(e) - 1
            })), he(["MMM", "MMMM"], (function(e, t, a, n) {
                var i = a._locale.monthsParse(e, n, a._strict);
                null != i ? t[1] = i : h(a).invalidMonth = e
            }));
            var De = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                we = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                xe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Te(e, t, a) {
                var n, i, r, s = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = c([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                return a ? "MMM" === t ? -1 !== (i = ge.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = ge.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = ge.call(this._shortMonthsParse, s)) ? i : -1 !== (i = ge.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = ge.call(this._longMonthsParse, s)) ? i : -1 !== (i = ge.call(this._shortMonthsParse, s)) ? i : null
            }

            function Se(e, t) {
                var a;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = k(t);
                    else if (!d(t = e.localeData().monthsParse(t))) return e;
                return a = Math.min(e.date(), be(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
            }

            function He(e) {
                return null != e ? (Se(this, e), i.updateOffset(this, !0), this) : ve(this, "Month")
            }
            var je = de,
                Pe = de;

            function Oe() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, a, n = [],
                    i = [],
                    r = [];
                for (t = 0; t < 12; t++) a = c([2e3, t]), n.push(this.monthsShort(a, "")), i.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
                for (n.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) n[t] = me(n[t]), i[t] = me(i[t]);
                for (t = 0; t < 24; t++) r[t] = me(r[t]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function Ae(e, t, a, n, i, r, s) {
                var o = new Date(e, t, a, n, i, r, s);
                return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
            }

            function Fe(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
            }

            function We(e, t, a) {
                var n = 7 + t - a;
                return -(7 + Fe(e, 0, n).getUTCDay() - t) % 7 + n - 1
            }

            function Ce(e, t, a, n, i) {
                var r, s, o = 1 + 7 * (t - 1) + (7 + a - n) % 7 + We(e, n, i);
                return o <= 0 ? s = pe(r = e - 1) + o : o > pe(e) ? (r = e + 1, s = o - pe(e)) : (r = e, s = o), {
                    year: r,
                    dayOfYear: s
                }
            }

            function Ie(e, t, a) {
                var n, i, r = We(e.year(), t, a),
                    s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                return s < 1 ? n = s + ze(i = e.year() - 1, t, a) : s > ze(e.year(), t, a) ? (n = s - ze(e.year(), t, a), i = e.year() + 1) : (i = e.year(), n = s), {
                    week: n,
                    year: i
                }
            }

            function ze(e, t, a) {
                var n = We(e, t, a),
                    i = We(e + 1, t, a);
                return (pe(e) - n + i) / 7
            }
            B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), I("week", 5), I("isoWeek", 5), ue("w", Q), ue("ww", Q, q), ue("W", Q), ue("WW", Q, q), fe(["w", "ww", "W", "WW"], (function(e, t, a, n) {
                t[n.substr(0, 1)] = k(e)
            })), B("d", 0, "do", "day"), B("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            })), B("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            })), B("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            })), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), ue("d", Q), ue("e", Q), ue("E", Q), ue("dd", (function(e, t) {
                return t.weekdaysMinRegex(e)
            })), ue("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e)
            })), ue("dddd", (function(e, t) {
                return t.weekdaysRegex(e)
            })), fe(["dd", "ddd", "dddd"], (function(e, t, a, n) {
                var i = a._locale.weekdaysParse(e, n, a._strict);
                null != i ? t.d = i : h(a).invalidWeekday = e
            })), fe(["d", "e", "E"], (function(e, t, a, n) {
                t[n] = k(e)
            }));
            var Ee = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Re = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ne = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

            function Ve(e, t, a) {
                var n, i, r, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = c([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                return a ? "dddd" === t ? -1 !== (i = ge.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = ge.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = ge.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = ge.call(this._weekdaysParse, s)) ? i : -1 !== (i = ge.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = ge.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = ge.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = ge.call(this._weekdaysParse, s)) ? i : -1 !== (i = ge.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = ge.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = ge.call(this._weekdaysParse, s)) ? i : -1 !== (i = ge.call(this._shortWeekdaysParse, s)) ? i : null
            }
            var Be = de,
                Je = de,
                Ue = de;

            function Ge() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, a, n, i, r, s = [],
                    o = [],
                    d = [],
                    l = [];
                for (t = 0; t < 7; t++) a = c([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), i = this.weekdaysShort(a, ""), r = this.weekdays(a, ""), s.push(n), o.push(i), d.push(r), l.push(n), l.push(i), l.push(r);
                for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = me(o[t]), d[t] = me(d[t]), l[t] = me(l[t]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function qe() {
                return this.hours() % 12 || 12
            }

            function $e(e, t) {
                B(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }))
            }

            function Ke(e, t) {
                return t._meridiemParse
            }
            B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, qe), B("k", ["kk", 2], 0, (function() {
                return this.hours() || 24
            })), B("hmm", 0, 0, (function() {
                return "" + qe.apply(this) + z(this.minutes(), 2)
            })), B("hmmss", 0, 0, (function() {
                return "" + qe.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
            })), B("Hmm", 0, 0, (function() {
                return "" + this.hours() + z(this.minutes(), 2)
            })), B("Hmmss", 0, 0, (function() {
                return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
            })), $e("a", !0), $e("A", !1), A("hour", "h"), I("hour", 13), ue("a", Ke), ue("A", Ke), ue("H", Q), ue("h", Q), ue("k", Q), ue("HH", Q, q), ue("hh", Q, q), ue("kk", Q, q), ue("hmm", X), ue("hmmss", ee), ue("Hmm", X), ue("Hmmss", ee), he(["H", "HH"], 3), he(["k", "kk"], (function(e, t, a) {
                var n = k(e);
                t[3] = 24 === n ? 0 : n
            })), he(["a", "A"], (function(e, t, a) {
                a._isPm = a._locale.isPM(e), a._meridiem = e
            })), he(["h", "hh"], (function(e, t, a) {
                t[3] = k(e), h(a).bigHour = !0
            })), he("hmm", (function(e, t, a) {
                var n = e.length - 2;
                t[3] = k(e.substr(0, n)), t[4] = k(e.substr(n)), h(a).bigHour = !0
            })), he("hmmss", (function(e, t, a) {
                var n = e.length - 4,
                    i = e.length - 2;
                t[3] = k(e.substr(0, n)), t[4] = k(e.substr(n, 2)), t[5] = k(e.substr(i)), h(a).bigHour = !0
            })), he("Hmm", (function(e, t, a) {
                var n = e.length - 2;
                t[3] = k(e.substr(0, n)), t[4] = k(e.substr(n))
            })), he("Hmmss", (function(e, t, a) {
                var n = e.length - 4,
                    i = e.length - 2;
                t[3] = k(e.substr(0, n)), t[4] = k(e.substr(n, 2)), t[5] = k(e.substr(i))
            }));
            var Ze, Qe = Ye("Hours", !0),
                Xe = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: we,
                    monthsShort: xe,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Ee,
                    weekdaysMin: Ne,
                    weekdaysShort: Re,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                et = {},
                tt = {};

            function at(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function nt(t) {
                var n = null;
                if (!et[t] && void 0 !== e && e && e.exports) try {
                    n = Ze._abbr, a(209)("./" + t), it(n)
                } catch (e) {}
                return et[t]
            }

            function it(e, t) {
                var a;
                return e && ((a = o(t) ? st(e) : rt(e, t)) ? Ze = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ze._abbr
            }

            function rt(e, t) {
                if (null !== t) {
                    var a, n = Xe;
                    if (t.abbr = e, null != et[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = et[e]._config;
                    else if (null != t.parentLocale)
                        if (null != et[t.parentLocale]) n = et[t.parentLocale]._config;
                        else {
                            if (null == (a = nt(t.parentLocale))) return tt[t.parentLocale] || (tt[t.parentLocale] = []), tt[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            n = a._config
                        }
                    return et[e] = new P(j(n, t)), tt[e] && tt[e].forEach((function(e) {
                        rt(e.name, e.config)
                    })), it(e), et[e]
                }
                return delete et[e], null
            }

            function st(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ze;
                if (!r(e)) {
                    if (t = nt(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, a, n, i, r = 0; r < e.length;) {
                        for (t = (i = at(e[r]).split("-")).length, a = (a = at(e[r + 1])) ? a.split("-") : null; t > 0;) {
                            if (n = nt(i.slice(0, t).join("-"))) return n;
                            if (a && a.length >= t && b(i, a, !0) >= t - 1) break;
                            t--
                        }
                        r++
                    }
                    return Ze
                }(e)
            }

            function ot(e) {
                var t, a = e._a;
                return a && -2 === h(e).overflow && (t = a[1] < 0 || a[1] > 11 ? 1 : a[2] < 1 || a[2] > be(a[0], a[1]) ? 2 : a[3] < 0 || a[3] > 24 || 24 === a[3] && (0 !== a[4] || 0 !== a[5] || 0 !== a[6]) ? 3 : a[4] < 0 || a[4] > 59 ? 4 : a[5] < 0 || a[5] > 59 ? 5 : a[6] < 0 || a[6] > 999 ? 6 : -1, h(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), h(e)._overflowWeeks && -1 === t && (t = 7), h(e)._overflowWeekday && -1 === t && (t = 8), h(e).overflow = t), e
            }

            function dt(e, t, a) {
                return null != e ? e : null != t ? t : a
            }

            function lt(e) {
                var t, a, n, r, s, o = [];
                if (!e._d) {
                    for (n = function(e) {
                            var t = new Date(i.now());
                            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                        }(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
                            var t, a, n, i, r, s, o, d;
                            if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, s = 4, a = dt(t.GG, e._a[0], Ie(bt(), 1, 4).year), n = dt(t.W, 1), ((i = dt(t.E, 1)) < 1 || i > 7) && (d = !0);
                            else {
                                r = e._locale._week.dow, s = e._locale._week.doy;
                                var l = Ie(bt(), r, s);
                                a = dt(t.gg, e._a[0], l.year), n = dt(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (d = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (d = !0)) : i = r
                            }
                            n < 1 || n > ze(a, r, s) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = Ce(a, n, i, r, s), e._a[0] = o.year, e._dayOfYear = o.dayOfYear)
                        }(e), null != e._dayOfYear && (s = dt(e._a[0], n[0]), (e._dayOfYear > pe(s) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), a = Fe(s, 0, e._dayOfYear), e._a[1] = a.getUTCMonth(), e._a[2] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = n[t];
                    for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Fe : Ae).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (h(e).weekdayMismatch = !0)
                }
            }
            var ut = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                _t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                mt = /Z|[+-]\d\d(?::?\d\d)?/,
                ct = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                ht = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                ft = /^\/?Date\((\-?\d+)/i;

            function Mt(e) {
                var t, a, n, i, r, s, o = e._i,
                    d = ut.exec(o) || _t.exec(o);
                if (d) {
                    for (h(e).iso = !0, t = 0, a = ct.length; t < a; t++)
                        if (ct[t][1].exec(d[1])) {
                            i = ct[t][0], n = !1 !== ct[t][2];
                            break
                        }
                    if (null == i) return void(e._isValid = !1);
                    if (d[3]) {
                        for (t = 0, a = ht.length; t < a; t++)
                            if (ht[t][1].exec(d[3])) {
                                r = (d[2] || " ") + ht[t][0];
                                break
                            }
                        if (null == r) return void(e._isValid = !1)
                    }
                    if (!n && null != r) return void(e._isValid = !1);
                    if (d[4]) {
                        if (!mt.exec(d[4])) return void(e._isValid = !1);
                        s = "Z"
                    }
                    e._f = i + (r || "") + (s || ""), Yt(e)
                } else e._isValid = !1
            }
            var pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function yt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            var gt = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function Lt(e) {
                var t, a, n, i, r, s, o, d = pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (d) {
                    var l = (t = d[4], a = d[3], n = d[2], i = d[5], r = d[6], s = d[7], o = [yt(t), xe.indexOf(a), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)], s && o.push(parseInt(s, 10)), o);
                    if (! function(e, t, a) {
                            return !e || Re.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (h(a).weekdayMismatch = !0, a._isValid = !1, !1)
                        }(d[1], l, e)) return;
                    e._a = l, e._tzm = function(e, t, a) {
                        if (e) return gt[e];
                        if (t) return 0;
                        var n = parseInt(a, 10),
                            i = n % 100;
                        return (n - i) / 100 * 60 + i
                    }(d[8], d[9], d[10]), e._d = Fe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function Yt(e) {
                if (e._f !== i.ISO_8601)
                    if (e._f !== i.RFC_2822) {
                        e._a = [], h(e).empty = !0;
                        var t, a, n, r, s, o = "" + e._i,
                            d = o.length,
                            l = 0;
                        for (n = U(e._f, e._locale).match(E) || [], t = 0; t < n.length; t++) r = n[t], (a = (o.match(_e(r, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(a))).length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), l += a.length), V[r] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(r), Me(r, a, e)) : e._strict && !a && h(e).unusedTokens.push(r);
                        h(e).charsLeftOver = d - l, o.length > 0 && h(e).unusedInput.push(o), e._a[3] <= 12 && !0 === h(e).bigHour && e._a[3] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[3] = function(e, t, a) {
                            var n;
                            return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                        }(e._locale, e._a[3], e._meridiem), lt(e), ot(e)
                    } else Lt(e);
                else Mt(e)
            }

            function vt(e) {
                var t = e._i,
                    a = e._f;
                return e._locale = e._locale || st(e._l), null === t || void 0 === a && "" === t ? M({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), Y(t) ? new L(ot(t)) : (l(t) ? e._d = t : r(a) ? function(e) {
                    var t, a, n, i, r;
                    if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (i = 0; i < e._f.length; i++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Yt(t), f(t) && (r += h(t).charsLeftOver, r += 10 * h(t).unusedTokens.length, h(t).score = r, (null == n || r < n) && (n = r, a = t));
                    m(e, a || t)
                }(e) : a ? Yt(e) : function(e) {
                    var t = e._i;
                    o(t) ? e._d = new Date(i.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = ft.exec(e._i);
                        null === t ? (Mt(e), !1 === e._isValid && (delete e._isValid, Lt(e), !1 === e._isValid && (delete e._isValid, i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : r(t) ? (e._a = u(t.slice(0), (function(e) {
                        return parseInt(e, 10)
                    })), lt(e)) : s(t) ? function(e) {
                        if (!e._d) {
                            var t = W(e._i);
                            e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                                return e && parseInt(e, 10)
                            })), lt(e)
                        }
                    }(e) : d(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
                }(e), f(e) || (e._d = null), e))
            }

            function kt(e, t, a, n, i) {
                var o, d = {};
                return !0 !== a && !1 !== a || (n = a, a = void 0), (s(e) && function(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }(e) || r(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = i, d._l = a, d._i = e, d._f = t, d._strict = n, (o = new L(ot(vt(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function bt(e, t, a, n) {
                return kt(e, t, a, n, !1)
            }
            i.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
            var Dt = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = bt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : M()
                })),
                wt = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = bt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : M()
                }));

            function xt(e, t) {
                var a, n;
                if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return bt();
                for (a = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](a) || (a = t[n]);
                return a
            }
            var Tt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function St(e) {
                var t = W(e),
                    a = t.year || 0,
                    n = t.quarter || 0,
                    i = t.month || 0,
                    r = t.week || 0,
                    s = t.day || 0,
                    o = t.hour || 0,
                    d = t.minute || 0,
                    l = t.second || 0,
                    u = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e)
                        if (-1 === ge.call(Tt, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var a = !1, n = 0; n < Tt.length; ++n)
                        if (e[Tt[n]]) {
                            if (a) return !1;
                            parseFloat(e[Tt[n]]) !== k(e[Tt[n]]) && (a = !0)
                        }
                    return !0
                }(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * r, this._months = +i + 3 * n + 12 * a, this._data = {}, this._locale = st(), this._bubble()
            }

            function Ht(e) {
                return e instanceof St
            }

            function jt(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function Pt(e, t) {
                B(e, 0, 0, (function() {
                    var e = this.utcOffset(),
                        a = "+";
                    return e < 0 && (e = -e, a = "-"), a + z(~~(e / 60), 2) + t + z(~~e % 60, 2)
                }))
            }
            Pt("Z", ":"), Pt("ZZ", ""), ue("Z", oe), ue("ZZ", oe), he(["Z", "ZZ"], (function(e, t, a) {
                a._useUTC = !0, a._tzm = At(oe, e)
            }));
            var Ot = /([\+\-]|\d\d)/gi;

            function At(e, t) {
                var a = (t || "").match(e);
                if (null === a) return null;
                var n = ((a[a.length - 1] || []) + "").match(Ot) || ["-", 0, 0],
                    i = 60 * n[1] + k(n[2]);
                return 0 === i ? 0 : "+" === n[0] ? i : -i
            }

            function Ft(e, t) {
                var a, n;
                return t._isUTC ? (a = t.clone(), n = (Y(e) || l(e) ? e.valueOf() : bt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), i.updateOffset(a, !1), a) : bt(e).local()
            }

            function Wt(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function Ct() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            i.updateOffset = function() {};
            var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Et(e, t) {
                var a, n, i, r, s, o, l = e,
                    u = null;
                return Ht(e) ? l = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : d(e) ? (l = {}, t ? l[t] = e : l.milliseconds = e) : (u = It.exec(e)) ? (a = "-" === u[1] ? -1 : 1, l = {
                    y: 0,
                    d: k(u[2]) * a,
                    h: k(u[3]) * a,
                    m: k(u[4]) * a,
                    s: k(u[5]) * a,
                    ms: k(jt(1e3 * u[6])) * a
                }) : (u = zt.exec(e)) ? (a = "-" === u[1] ? -1 : (u[1], 1), l = {
                    y: Rt(u[2], a),
                    M: Rt(u[3], a),
                    w: Rt(u[4], a),
                    d: Rt(u[5], a),
                    h: Rt(u[6], a),
                    m: Rt(u[7], a),
                    s: Rt(u[8], a)
                }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (r = bt(l.from), s = bt(l.to), i = r.isValid() && s.isValid() ? (s = Ft(s, r), r.isBefore(s) ? o = Nt(r, s) : ((o = Nt(s, r)).milliseconds = -o.milliseconds, o.months = -o.months), o) : {
                    milliseconds: 0,
                    months: 0
                }, (l = {}).ms = i.milliseconds, l.M = i.months), n = new St(l), Ht(e) && _(e, "_locale") && (n._locale = e._locale), n
            }

            function Rt(e, t) {
                var a = e && parseFloat(e.replace(",", "."));
                return (isNaN(a) ? 0 : a) * t
            }

            function Nt(e, t) {
                var a = {
                    milliseconds: 0,
                    months: 0
                };
                return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
            }

            function Vt(e, t) {
                return function(a, n) {
                    var i;
                    return null === n || isNaN(+n) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = n, n = i), Bt(this, Et(a = "string" == typeof a ? +a : a, n), e), this
                }
            }

            function Bt(e, t, a, n) {
                var r = t._milliseconds,
                    s = jt(t._days),
                    o = jt(t._months);
                e.isValid() && (n = null == n || n, o && Se(e, ve(e, "Month") + o * a), s && ke(e, "Date", ve(e, "Date") + s * a), r && e._d.setTime(e._d.valueOf() + r * a), n && i.updateOffset(e, s || o))
            }
            Et.fn = St.prototype, Et.invalid = function() {
                return Et(NaN)
            };
            var Jt = Vt(1, "add"),
                Ut = Vt(-1, "subtract");

            function Gt(e, t) {
                var a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    n = e.clone().add(a, "months");
                return -(a + (t - n < 0 ? (t - n) / (n - e.clone().add(a - 1, "months")) : (t - n) / (e.clone().add(a + 1, "months") - n))) || 0
            }

            function qt(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = st(e)) && (this._locale = t), this)
            }
            i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var $t = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }));

            function Kt() {
                return this._locale
            }

            function Zt(e, t) {
                B(0, [e, e.length], 0, t)
            }

            function Qt(e, t, a, n, i) {
                var r;
                return null == e ? Ie(this, n, i).year : (t > (r = ze(e, n, i)) && (t = r), Xt.call(this, e, t, a, n, i))
            }

            function Xt(e, t, a, n, i) {
                var r = Ce(e, t, a, n, i),
                    s = Fe(r.year, 0, r.dayOfYear);
                return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
            }
            B(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            })), B(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            })), Zt("gggg", "weekYear"), Zt("ggggg", "weekYear"), Zt("GGGG", "isoWeekYear"), Zt("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), ue("G", re), ue("g", re), ue("GG", Q, q), ue("gg", Q, q), ue("GGGG", ae, K), ue("gggg", ae, K), ue("GGGGG", ne, Z), ue("ggggg", ne, Z), fe(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, a, n) {
                t[n.substr(0, 2)] = k(e)
            })), fe(["gg", "GG"], (function(e, t, a, n) {
                t[n] = i.parseTwoDigitYear(e)
            })), B("Q", 0, "Qo", "quarter"), A("quarter", "Q"), I("quarter", 7), ue("Q", G), he("Q", (function(e, t) {
                t[1] = 3 * (k(e) - 1)
            })), B("D", ["DD", 2], "Do", "date"), A("date", "D"), I("date", 9), ue("D", Q), ue("DD", Q, q), ue("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            })), he(["D", "DD"], 2), he("Do", (function(e, t) {
                t[2] = k(e.match(Q)[0])
            }));
            var ea = Ye("Date", !0);
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), I("dayOfYear", 4), ue("DDD", te), ue("DDDD", $), he(["DDD", "DDDD"], (function(e, t, a) {
                a._dayOfYear = k(e)
            })), B("m", ["mm", 2], 0, "minute"), A("minute", "m"), I("minute", 14), ue("m", Q), ue("mm", Q, q), he(["m", "mm"], 4);
            var ta = Ye("Minutes", !1);
            B("s", ["ss", 2], 0, "second"), A("second", "s"), I("second", 15), ue("s", Q), ue("ss", Q, q), he(["s", "ss"], 5);
            var aa, na = Ye("Seconds", !1);
            for (B("S", 0, 0, (function() {
                    return ~~(this.millisecond() / 100)
                })), B(0, ["SS", 2], 0, (function() {
                    return ~~(this.millisecond() / 10)
                })), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, (function() {
                    return 10 * this.millisecond()
                })), B(0, ["SSSSS", 5], 0, (function() {
                    return 100 * this.millisecond()
                })), B(0, ["SSSSSS", 6], 0, (function() {
                    return 1e3 * this.millisecond()
                })), B(0, ["SSSSSSS", 7], 0, (function() {
                    return 1e4 * this.millisecond()
                })), B(0, ["SSSSSSSS", 8], 0, (function() {
                    return 1e5 * this.millisecond()
                })), B(0, ["SSSSSSSSS", 9], 0, (function() {
                    return 1e6 * this.millisecond()
                })), A("millisecond", "ms"), I("millisecond", 16), ue("S", te, G), ue("SS", te, q), ue("SSS", te, $), aa = "SSSS"; aa.length <= 9; aa += "S") ue(aa, ie);

            function ia(e, t) {
                t[6] = k(1e3 * ("0." + e))
            }
            for (aa = "S"; aa.length <= 9; aa += "S") he(aa, ia);
            var ra = Ye("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
            var sa = L.prototype;

            function oa(e) {
                return e
            }
            sa.add = Jt, sa.calendar = function(e, t) {
                var a = e || bt(),
                    n = Ft(a, this).startOf("day"),
                    r = i.calendarFormat(this, n) || "sameElse",
                    s = t && (H(t[r]) ? t[r].call(this, a) : t[r]);
                return this.format(s || this.localeData().calendar(r, this, bt(a)))
            }, sa.clone = function() {
                return new L(this)
            }, sa.diff = function(e, t, a) {
                var n, i, r;
                if (!this.isValid()) return NaN;
                if (!(n = Ft(e, this)).isValid()) return NaN;
                switch (i = 6e4 * (n.utcOffset() - this.utcOffset()), t = F(t)) {
                    case "year":
                        r = Gt(this, n) / 12;
                        break;
                    case "month":
                        r = Gt(this, n);
                        break;
                    case "quarter":
                        r = Gt(this, n) / 3;
                        break;
                    case "second":
                        r = (this - n) / 1e3;
                        break;
                    case "minute":
                        r = (this - n) / 6e4;
                        break;
                    case "hour":
                        r = (this - n) / 36e5;
                        break;
                    case "day":
                        r = (this - n - i) / 864e5;
                        break;
                    case "week":
                        r = (this - n - i) / 6048e5;
                        break;
                    default:
                        r = this - n
                }
                return a ? r : v(r)
            }, sa.endOf = function(e) {
                return void 0 === (e = F(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }, sa.format = function(e) {
                e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
                var t = J(this, e);
                return this.localeData().postformat(t)
            }, sa.from = function(e, t) {
                return this.isValid() && (Y(e) && e.isValid() || bt(e).isValid()) ? Et({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, sa.fromNow = function(e) {
                return this.from(bt(), e)
            }, sa.to = function(e, t) {
                return this.isValid() && (Y(e) && e.isValid() || bt(e).isValid()) ? Et({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, sa.toNow = function(e) {
                return this.to(bt(), e)
            }, sa.get = function(e) {
                return H(this[e = F(e)]) ? this[e]() : this
            }, sa.invalidAt = function() {
                return h(this).overflow
            }, sa.isAfter = function(e, t) {
                var a = Y(e) ? e : bt(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = F(o(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
            }, sa.isBefore = function(e, t) {
                var a = Y(e) ? e : bt(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = F(o(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
            }, sa.isBetween = function(e, t, a, n) {
                return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
            }, sa.isSame = function(e, t) {
                var a, n = Y(e) ? e : bt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = F(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
            }, sa.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, sa.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, sa.isValid = function() {
                return f(this)
            }, sa.lang = $t, sa.locale = qt, sa.localeData = Kt, sa.max = wt, sa.min = Dt, sa.parsingFlags = function() {
                return m({}, h(this))
            }, sa.set = function(e, t) {
                if ("object" == typeof e)
                    for (var a = function(e) {
                            var t = [];
                            for (var a in e) t.push({
                                unit: a,
                                priority: C[a]
                            });
                            return t.sort((function(e, t) {
                                return e.priority - t.priority
                            })), t
                        }(e = W(e)), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
                else if (H(this[e = F(e)])) return this[e](t);
                return this
            }, sa.startOf = function(e) {
                switch (e = F(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }, sa.subtract = Ut, sa.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, sa.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, sa.toDate = function() {
                return new Date(this.valueOf())
            }, sa.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    a = t ? this.clone().utc() : this;
                return a.year() < 0 || a.year() > 9999 ? J(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", J(a, "Z")) : J(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, sa.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var a = "[" + e + '("]',
                    n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    i = t + '[")]';
                return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + i)
            }, sa.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, sa.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, sa.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, sa.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, sa.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, sa.year = Le, sa.isLeapYear = function() {
                return ye(this.year())
            }, sa.weekYear = function(e) {
                return Qt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, sa.isoWeekYear = function(e) {
                return Qt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, sa.quarter = sa.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, sa.month = He, sa.daysInMonth = function() {
                return be(this.year(), this.month())
            }, sa.week = sa.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, sa.isoWeek = sa.isoWeeks = function(e) {
                var t = Ie(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, sa.weeksInYear = function() {
                var e = this.localeData()._week;
                return ze(this.year(), e.dow, e.doy)
            }, sa.isoWeeksInYear = function() {
                return ze(this.year(), 1, 4)
            }, sa.date = ea, sa.day = sa.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, sa.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, sa.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, sa.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, sa.hour = sa.hours = Qe, sa.minute = sa.minutes = ta, sa.second = sa.seconds = na, sa.millisecond = sa.milliseconds = ra, sa.utcOffset = function(e, t, a) {
                var n, r = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = At(oe, e))) return this
                    } else Math.abs(e) < 16 && !a && (e *= 60);
                    return !this._isUTC && t && (n = Wt(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), r !== e && (!t || this._changeInProgress ? Bt(this, Et(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? r : Wt(this)
            }, sa.utc = function(e) {
                return this.utcOffset(0, e)
            }, sa.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Wt(this), "m")), this
            }, sa.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = At(se, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, sa.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, sa.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, sa.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, sa.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, sa.isUtc = Ct, sa.isUTC = Ct, sa.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, sa.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, sa.dates = w("dates accessor is deprecated. Use date instead.", ea), sa.months = w("months accessor is deprecated. Use month instead", He), sa.years = w("years accessor is deprecated. Use year instead", Le), sa.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            })), sa.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (y(e, this), (e = vt(e))._a) {
                    var t = e._isUTC ? c(e._a) : bt(e._a);
                    this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }));
            var da = P.prototype;

            function la(e, t, a, n) {
                var i = st(),
                    r = c().set(n, t);
                return i[a](r, e)
            }

            function ua(e, t, a) {
                if (d(e) && (t = e, e = void 0), e = e || "", null != t) return la(e, t, a, "month");
                var n, i = [];
                for (n = 0; n < 12; n++) i[n] = la(e, n, a, "month");
                return i
            }

            function _a(e, t, a, n) {
                "boolean" == typeof e ? (d(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, d(t) && (a = t, t = void 0), t = t || "");
                var i, r = st(),
                    s = e ? r._week.dow : 0;
                if (null != a) return la(t, (a + s) % 7, n, "day");
                var o = [];
                for (i = 0; i < 7; i++) o[i] = la(t, (i + s) % 7, n, "day");
                return o
            }
            da.calendar = function(e, t, a) {
                var n = this._calendar[e] || this._calendar.sameElse;
                return H(n) ? n.call(t, a) : n
            }, da.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    a = this._longDateFormat[e.toUpperCase()];
                return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, (function(e) {
                    return e.slice(1)
                })), this._longDateFormat[e])
            }, da.invalidDate = function() {
                return this._invalidDate
            }, da.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }, da.preparse = oa, da.postformat = oa, da.relativeTime = function(e, t, a, n) {
                var i = this._relativeTime[a];
                return H(i) ? i(e, t, a, n) : i.replace(/%d/i, e)
            }, da.pastFuture = function(e, t) {
                var a = this._relativeTime[e > 0 ? "future" : "past"];
                return H(a) ? a(t) : a.replace(/%s/i, t)
            }, da.set = function(e) {
                var t, a;
                for (a in e) H(t = e[a]) ? this[a] = t : this["_" + a] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, da.months = function(e, t) {
                return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || De).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
            }, da.monthsShort = function(e, t) {
                return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[De.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, da.monthsParse = function(e, t, a) {
                var n, i, r;
                if (this._monthsParseExact) return Te.call(this, e, t, a);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                    if (i = c([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                    if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                    if (!a && this._monthsParse[n].test(e)) return n
                }
            }, da.monthsRegex = function(e) {
                return this._monthsParseExact ? (_(this, "_monthsRegex") || Oe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (_(this, "_monthsRegex") || (this._monthsRegex = Pe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, da.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (_(this, "_monthsRegex") || Oe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (_(this, "_monthsShortRegex") || (this._monthsShortRegex = je), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, da.week = function(e) {
                return Ie(e, this._week.dow, this._week.doy).week
            }, da.firstDayOfYear = function() {
                return this._week.doy
            }, da.firstDayOfWeek = function() {
                return this._week.dow
            }, da.weekdays = function(e, t) {
                return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }, da.weekdaysMin = function(e) {
                return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, da.weekdaysShort = function(e) {
                return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, da.weekdaysParse = function(e, t, a) {
                var n, i, r;
                if (this._weekdaysParseExact) return Ve.call(this, e, t, a);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                    if (i = c([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                    if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                    if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                    if (!a && this._weekdaysParse[n].test(e)) return n
                }
            }, da.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (_(this, "_weekdaysRegex") || (this._weekdaysRegex = Be), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, da.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (_(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Je), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, da.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (_(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ue), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, da.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, da.meridiem = function(e, t, a) {
                return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
            }, it("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), i.lang = w("moment.lang is deprecated. Use moment.locale instead.", it), i.langData = w("moment.langData is deprecated. Use moment.localeData instead.", st);
            var ma = Math.abs;

            function ca(e, t, a, n) {
                var i = Et(t, a);
                return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble()
            }

            function ha(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function fa(e) {
                return 4800 * e / 146097
            }

            function Ma(e) {
                return 146097 * e / 4800
            }

            function pa(e) {
                return function() {
                    return this.as(e)
                }
            }
            var ya = pa("ms"),
                ga = pa("s"),
                La = pa("m"),
                Ya = pa("h"),
                va = pa("d"),
                ka = pa("w"),
                ba = pa("M"),
                Da = pa("y");

            function wa(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var xa = wa("milliseconds"),
                Ta = wa("seconds"),
                Sa = wa("minutes"),
                Ha = wa("hours"),
                ja = wa("days"),
                Pa = wa("months"),
                Oa = wa("years"),
                Aa = Math.round,
                Fa = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                };

            function Wa(e, t, a, n, i) {
                return i.relativeTime(t || 1, !!a, e, n)
            }
            var Ca = Math.abs;

            function Ia(e) {
                return (e > 0) - (e < 0) || +e
            }

            function za() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, a = Ca(this._milliseconds) / 1e3,
                    n = Ca(this._days),
                    i = Ca(this._months);
                e = v(a / 60), t = v(e / 60), a %= 60, e %= 60;
                var r = v(i / 12),
                    s = i %= 12,
                    o = n,
                    d = t,
                    l = e,
                    u = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
                    _ = this.asSeconds();
                if (!_) return "P0D";
                var m = _ < 0 ? "-" : "",
                    c = Ia(this._months) !== Ia(_) ? "-" : "",
                    h = Ia(this._days) !== Ia(_) ? "-" : "",
                    f = Ia(this._milliseconds) !== Ia(_) ? "-" : "";
                return m + "P" + (r ? c + r + "Y" : "") + (s ? c + s + "M" : "") + (o ? h + o + "D" : "") + (d || l || u ? "T" : "") + (d ? f + d + "H" : "") + (l ? f + l + "M" : "") + (u ? f + u + "S" : "")
            }
            var Ea = St.prototype;
            return Ea.isValid = function() {
                return this._isValid
            }, Ea.abs = function() {
                var e = this._data;
                return this._milliseconds = ma(this._milliseconds), this._days = ma(this._days), this._months = ma(this._months), e.milliseconds = ma(e.milliseconds), e.seconds = ma(e.seconds), e.minutes = ma(e.minutes), e.hours = ma(e.hours), e.months = ma(e.months), e.years = ma(e.years), this
            }, Ea.add = function(e, t) {
                return ca(this, e, t, 1)
            }, Ea.subtract = function(e, t) {
                return ca(this, e, t, -1)
            }, Ea.as = function(e) {
                if (!this.isValid()) return NaN;
                var t, a, n = this._milliseconds;
                if ("month" === (e = F(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + fa(t), "month" === e ? a : a / 12;
                switch (t = this._days + Math.round(Ma(this._months)), e) {
                    case "week":
                        return t / 7 + n / 6048e5;
                    case "day":
                        return t + n / 864e5;
                    case "hour":
                        return 24 * t + n / 36e5;
                    case "minute":
                        return 1440 * t + n / 6e4;
                    case "second":
                        return 86400 * t + n / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + n;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, Ea.asMilliseconds = ya, Ea.asSeconds = ga, Ea.asMinutes = La, Ea.asHours = Ya, Ea.asDays = va, Ea.asWeeks = ka, Ea.asMonths = ba, Ea.asYears = Da, Ea.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
            }, Ea._bubble = function() {
                var e, t, a, n, i, r = this._milliseconds,
                    s = this._days,
                    o = this._months,
                    d = this._data;
                return r >= 0 && s >= 0 && o >= 0 || r <= 0 && s <= 0 && o <= 0 || (r += 864e5 * ha(Ma(o) + s), s = 0, o = 0), d.milliseconds = r % 1e3, e = v(r / 1e3), d.seconds = e % 60, t = v(e / 60), d.minutes = t % 60, a = v(t / 60), d.hours = a % 24, s += v(a / 24), i = v(fa(s)), o += i, s -= ha(Ma(i)), n = v(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this
            }, Ea.clone = function() {
                return Et(this)
            }, Ea.get = function(e) {
                return e = F(e), this.isValid() ? this[e + "s"]() : NaN
            }, Ea.milliseconds = xa, Ea.seconds = Ta, Ea.minutes = Sa, Ea.hours = Ha, Ea.days = ja, Ea.weeks = function() {
                return v(this.days() / 7)
            }, Ea.months = Pa, Ea.years = Oa, Ea.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    a = function(e, t, a) {
                        var n = Et(e).abs(),
                            i = Aa(n.as("s")),
                            r = Aa(n.as("m")),
                            s = Aa(n.as("h")),
                            o = Aa(n.as("d")),
                            d = Aa(n.as("M")),
                            l = Aa(n.as("y")),
                            u = i <= Fa.ss && ["s", i] || i < Fa.s && ["ss", i] || r <= 1 && ["m"] || r < Fa.m && ["mm", r] || s <= 1 && ["h"] || s < Fa.h && ["hh", s] || o <= 1 && ["d"] || o < Fa.d && ["dd", o] || d <= 1 && ["M"] || d < Fa.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
                        return u[2] = t, u[3] = +e > 0, u[4] = a, Wa.apply(null, u)
                    }(this, !e, t);
                return e && (a = t.pastFuture(+this, a)), t.postformat(a)
            }, Ea.toISOString = za, Ea.toString = za, Ea.toJSON = za, Ea.locale = qt, Ea.localeData = Kt, Ea.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", za), Ea.lang = $t, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), ue("x", re), ue("X", /[+-]?\d+(\.\d{1,3})?/), he("X", (function(e, t, a) {
                a._d = new Date(1e3 * parseFloat(e, 10))
            })), he("x", (function(e, t, a) {
                a._d = new Date(k(e))
            })), i.version = "2.22.2", t = bt, i.fn = sa, i.min = function() {
                var e = [].slice.call(arguments, 0);
                return xt("isBefore", e)
            }, i.max = function() {
                var e = [].slice.call(arguments, 0);
                return xt("isAfter", e)
            }, i.now = function() {
                return Date.now ? Date.now() : +new Date
            }, i.utc = c, i.unix = function(e) {
                return bt(1e3 * e)
            }, i.months = function(e, t) {
                return ua(e, t, "months")
            }, i.isDate = l, i.locale = it, i.invalid = M, i.duration = Et, i.isMoment = Y, i.weekdays = function(e, t, a) {
                return _a(e, t, a, "weekdays")
            }, i.parseZone = function() {
                return bt.apply(null, arguments).parseZone()
            }, i.localeData = st, i.isDuration = Ht, i.monthsShort = function(e, t) {
                return ua(e, t, "monthsShort")
            }, i.weekdaysMin = function(e, t, a) {
                return _a(e, t, a, "weekdaysMin")
            }, i.defineLocale = rt, i.updateLocale = function(e, t) {
                if (null != t) {
                    var a, n, i = Xe;
                    null != (n = nt(e)) && (i = n._config), t = j(i, t), (a = new P(t)).parentLocale = et[e], et[e] = a, it(e)
                } else null != et[e] && (null != et[e].parentLocale ? et[e] = et[e].parentLocale : null != et[e] && delete et[e]);
                return et[e]
            }, i.locales = function() {
                return x(et)
            }, i.weekdaysShort = function(e, t, a) {
                return _a(e, t, a, "weekdaysShort")
            }, i.normalizeUnits = F, i.relativeTimeRounding = function(e) {
                return void 0 === e ? Aa : "function" == typeof e && (Aa = e, !0)
            }, i.relativeTimeThreshold = function(e, t) {
                return void 0 !== Fa[e] && (void 0 === t ? Fa[e] : (Fa[e] = t, "s" === e && (Fa.ss = t - 1), !0))
            }, i.calendarFormat = function(e, t) {
                var a = e.diff(t, "days", !0);
                return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
            }, i.prototype = sa, i.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            }, i
        }()
    }).call(this, a(8)(e))
}, , function(e, t, a) {
    "use strict";
    e.exports = a(14), e.exports.easing = a(187), e.exports.canvas = a(188), e.exports.options = a(189)
}, function(e, t, a) {
    "use strict";
    var n = a(2);
    e.exports = {
        _set: function(e, t) {
            return n.merge(this[e] || (this[e] = {}), t)
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(20),
        i = a(2);
    var r = function(e) {
        i.extend(this, e), this.initialize.apply(this, arguments)
    };
    i.extend(r.prototype, {
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var e = this;
            return e._view || (e._view = i.clone(e._model)), e._start = {}, e
        },
        transition: function(e) {
            var t = this,
                a = t._model,
                i = t._start,
                r = t._view;
            return a && 1 !== e ? (r || (r = t._view = {}), i || (i = t._start = {}), function(e, t, a, i) {
                var r, s, o, d, l, u, _, m, c, h = Object.keys(a);
                for (r = 0, s = h.length; r < s; ++r)
                    if (u = a[o = h[r]], t.hasOwnProperty(o) || (t[o] = u), (d = t[o]) !== u && "_" !== o[0]) {
                        if (e.hasOwnProperty(o) || (e[o] = d), (_ = typeof u) === typeof(l = e[o]))
                            if ("string" === _) {
                                if ((m = n(l)).valid && (c = n(u)).valid) {
                                    t[o] = c.mix(m, i).rgbString();
                                    continue
                                }
                            } else if ("number" === _ && isFinite(l) && isFinite(u)) {
                            t[o] = l + (u - l) * i;
                            continue
                        }
                        t[o] = u
                    }
            }(i, r, a, e), t) : (t._view = a, t._start = null, t)
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return i.isNumber(this._model.x) && i.isNumber(this._model.y)
        }
    }), r.extend = i.inherits, e.exports = r
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(2),
        r = a(9);
    e.exports = {
        constructors: {},
        defaults: {},
        registerScaleType: function(e, t, a) {
            this.constructors[e] = t, this.defaults[e] = i.clone(a)
        },
        getScaleConstructor: function(e) {
            return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
        },
        getScaleDefaults: function(e) {
            return this.defaults.hasOwnProperty(e) ? i.merge({}, [n.scale, this.defaults[e]]) : {}
        },
        updateScaleDefaults: function(e, t) {
            this.defaults.hasOwnProperty(e) && (this.defaults[e] = i.extend(this.defaults[e], t))
        },
        addScalesToLayout: function(e) {
            i.each(e.scales, (function(t) {
                t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, r.addBox(e, t)
            }))
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = {}, e.exports.Arc = a(195), e.exports.Line = a(196), e.exports.Point = a(197), e.exports.Rectangle = a(198)
}, , function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, a) {
    "use strict";
    var n = a(2);

    function i(e, t) {
        return n.where(e, (function(e) {
            return e.position === t
        }))
    }

    function r(e, t) {
        e.forEach((function(e, t) {
            return e._tmpIndex_ = t, e
        })), e.sort((function(e, a) {
            var n = t ? a : e,
                i = t ? e : a;
            return n.weight === i.weight ? n._tmpIndex_ - i._tmpIndex_ : n.weight - i.weight
        })), e.forEach((function(e) {
            delete e._tmpIndex_
        }))
    }
    e.exports = {
        defaults: {},
        addBox: function(e, t) {
            e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
        },
        removeBox: function(e, t) {
            var a = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== a && e.boxes.splice(a, 1)
        },
        configure: function(e, t, a) {
            for (var n, i = ["fullWidth", "position", "weight"], r = i.length, s = 0; s < r; ++s) n = i[s], a.hasOwnProperty(n) && (t[n] = a[n])
        },
        update: function(e, t, a) {
            if (e) {
                var s = e.options.layout || {},
                    o = n.options.toPadding(s.padding),
                    d = o.left,
                    l = o.right,
                    u = o.top,
                    _ = o.bottom,
                    m = i(e.boxes, "left"),
                    c = i(e.boxes, "right"),
                    h = i(e.boxes, "top"),
                    f = i(e.boxes, "bottom"),
                    M = i(e.boxes, "chartArea");
                r(m, !0), r(c, !1), r(h, !0), r(f, !1);
                var p = t - d - l,
                    y = a - u - _,
                    g = y / 2,
                    L = (t - p / 2) / (m.length + c.length),
                    Y = (a - g) / (h.length + f.length),
                    v = p,
                    k = y,
                    b = [];
                n.each(m.concat(c, h, f), (function(e) {
                    var t, a = e.isHorizontal();
                    a ? (t = e.update(e.fullWidth ? p : v, Y), k -= t.height) : (t = e.update(L, k), v -= t.width), b.push({
                        horizontal: a,
                        minSize: t,
                        box: e
                    })
                }));
                var D = 0,
                    w = 0,
                    x = 0,
                    T = 0;
                n.each(h.concat(f), (function(e) {
                    if (e.getPadding) {
                        var t = e.getPadding();
                        D = Math.max(D, t.left), w = Math.max(w, t.right)
                    }
                })), n.each(m.concat(c), (function(e) {
                    if (e.getPadding) {
                        var t = e.getPadding();
                        x = Math.max(x, t.top), T = Math.max(T, t.bottom)
                    }
                }));
                var S = d,
                    H = l,
                    j = u,
                    P = _;
                n.each(m.concat(c), z), n.each(m, (function(e) {
                    S += e.width
                })), n.each(c, (function(e) {
                    H += e.width
                })), n.each(h.concat(f), z), n.each(h, (function(e) {
                    j += e.height
                })), n.each(f, (function(e) {
                    P += e.height
                })), n.each(m.concat(c), (function(e) {
                    var t = n.findNextWhere(b, (function(t) {
                            return t.box === e
                        })),
                        a = {
                            left: 0,
                            right: 0,
                            top: j,
                            bottom: P
                        };
                    t && e.update(t.minSize.width, k, a)
                })), S = d, H = l, j = u, P = _, n.each(m, (function(e) {
                    S += e.width
                })), n.each(c, (function(e) {
                    H += e.width
                })), n.each(h, (function(e) {
                    j += e.height
                })), n.each(f, (function(e) {
                    P += e.height
                }));
                var O = Math.max(D - S, 0);
                S += O, H += Math.max(w - H, 0);
                var A = Math.max(x - j, 0);
                j += A, P += Math.max(T - P, 0);
                var F = a - j - P,
                    W = t - S - H;
                W === v && F === k || (n.each(m, (function(e) {
                    e.height = F
                })), n.each(c, (function(e) {
                    e.height = F
                })), n.each(h, (function(e) {
                    e.fullWidth || (e.width = W)
                })), n.each(f, (function(e) {
                    e.fullWidth || (e.width = W)
                })), k = F, v = W);
                var C = d + O,
                    I = u + A;
                n.each(m.concat(h), E), C += v, I += k, n.each(c, E), n.each(f, E), e.chartArea = {
                    left: S,
                    top: j,
                    right: S + v,
                    bottom: j + k
                }, n.each(M, (function(t) {
                    t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(v, k)
                }))
            }

            function z(e) {
                var t = n.findNextWhere(b, (function(t) {
                    return t.box === e
                }));
                if (t)
                    if (e.isHorizontal()) {
                        var a = {
                            left: Math.max(S, D),
                            right: Math.max(H, w),
                            top: 0,
                            bottom: 0
                        };
                        e.update(e.fullWidth ? p : v, y / 2, a)
                    } else e.update(t.minSize.width, k)
            }

            function E(e) {
                e.isHorizontal() ? (e.left = e.fullWidth ? d : S, e.right = e.fullWidth ? t - l : S + v, e.top = I, e.bottom = I + e.height, I = e.bottom) : (e.left = C, e.right = C + e.width, e.top = j, e.bottom = j + k, C = e.right)
            }
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4),
        r = a(2),
        s = a(11);

    function o(e) {
        var t, a, n = [];
        for (t = 0, a = e.length; t < a; ++t) n.push(e[t].label);
        return n
    }

    function d(e, t, a) {
        var n = e.getPixelForTick(t);
        return a && (n -= 0 === t ? (e.getPixelForTick(1) - n) / 2 : (n - e.getPixelForTick(t - 1)) / 2), n
    }

    function l(e, t, a) {
        return r.isArray(t) ? r.longestText(e, a, t) : e.measureText(t).width
    }

    function u(e) {
        var t = r.valueOrDefault,
            a = n.global,
            i = t(e.fontSize, a.defaultFontSize),
            s = t(e.fontStyle, a.defaultFontStyle),
            o = t(e.fontFamily, a.defaultFontFamily);
        return {
            size: i,
            style: s,
            family: o,
            font: r.fontString(i, s, o)
        }
    }

    function _(e) {
        return r.options.toLineHeight(r.valueOrDefault(e.lineHeight, 1.2), r.valueOrDefault(e.fontSize, n.global.defaultFontSize))
    }
    n._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            lineHeight: 1.2,
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: s.formatters.values,
            minor: {},
            major: {}
        }
    }), e.exports = i.extend({
        getPadding: function() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        },
        getTicks: function() {
            return this._ticks
        },
        mergeTicksOptions: function() {
            var e = this.options.ticks;
            for (var t in !1 === e.minor && (e.minor = {
                    display: !1
                }), !1 === e.major && (e.major = {
                    display: !1
                }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
        },
        beforeUpdate: function() {
            r.callback(this.options.beforeUpdate, [this])
        },
        update: function(e, t, a) {
            var n, i, s, o, d, l, u = this;
            for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = r.extend({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, a), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), d = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), s = u.convertTicksToLabels(d) || u.ticks, u.afterTickToLabelConversion(), u.ticks = s, n = 0, i = s.length; n < i; ++n) o = s[n], (l = d[n]) ? l.label = o : d.push(l = {
                label: o,
                major: !1
            });
            return u._ticks = d, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
        },
        afterUpdate: function() {
            r.callback(this.options.afterUpdate, [this])
        },
        beforeSetDimensions: function() {
            r.callback(this.options.beforeSetDimensions, [this])
        },
        setDimensions: function() {
            var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
        },
        afterSetDimensions: function() {
            r.callback(this.options.afterSetDimensions, [this])
        },
        beforeDataLimits: function() {
            r.callback(this.options.beforeDataLimits, [this])
        },
        determineDataLimits: r.noop,
        afterDataLimits: function() {
            r.callback(this.options.afterDataLimits, [this])
        },
        beforeBuildTicks: function() {
            r.callback(this.options.beforeBuildTicks, [this])
        },
        buildTicks: r.noop,
        afterBuildTicks: function() {
            r.callback(this.options.afterBuildTicks, [this])
        },
        beforeTickToLabelConversion: function() {
            r.callback(this.options.beforeTickToLabelConversion, [this])
        },
        convertTicksToLabels: function() {
            var e = this.options.ticks;
            this.ticks = this.ticks.map(e.userCallback || e.callback, this)
        },
        afterTickToLabelConversion: function() {
            r.callback(this.options.afterTickToLabelConversion, [this])
        },
        beforeCalculateTickRotation: function() {
            r.callback(this.options.beforeCalculateTickRotation, [this])
        },
        calculateTickRotation: function() {
            var e = this,
                t = e.ctx,
                a = e.options.ticks,
                n = o(e._ticks),
                i = u(a);
            t.font = i.font;
            var s = a.minRotation || 0;
            if (n.length && e.options.display && e.isHorizontal())
                for (var d, l = r.longestText(t, i.font, n, e.longestTextCache), _ = l, m = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; _ > m && s < a.maxRotation;) {
                    var c = r.toRadians(s);
                    if (d = Math.cos(c), Math.sin(c) * l > e.maxHeight) {
                        s--;
                        break
                    }
                    s++, _ = d * l
                }
            e.labelRotation = s
        },
        afterCalculateTickRotation: function() {
            r.callback(this.options.afterCalculateTickRotation, [this])
        },
        beforeFit: function() {
            r.callback(this.options.beforeFit, [this])
        },
        fit: function() {
            var e = this,
                t = e.minSize = {
                    width: 0,
                    height: 0
                },
                a = o(e._ticks),
                n = e.options,
                i = n.ticks,
                s = n.scaleLabel,
                d = n.gridLines,
                m = n.display,
                c = e.isHorizontal(),
                h = u(i),
                f = n.gridLines.tickMarkLength;
            if (t.width = c ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && d.drawTicks ? f : 0, t.height = c ? m && d.drawTicks ? f : 0 : e.maxHeight, s.display && m) {
                var M = _(s) + r.options.toPadding(s.padding).height;
                c ? t.height += M : t.width += M
            }
            if (i.display && m) {
                var p = r.longestText(e.ctx, h.font, a, e.longestTextCache),
                    y = r.numberOfLabelLines(a),
                    g = .5 * h.size,
                    L = e.options.ticks.padding;
                if (c) {
                    e.longestLabelWidth = p;
                    var Y = r.toRadians(e.labelRotation),
                        v = Math.cos(Y),
                        k = Math.sin(Y) * p + h.size * y + g * (y - 1) + g;
                    t.height = Math.min(e.maxHeight, t.height + k + L), e.ctx.font = h.font;
                    var b = l(e.ctx, a[0], h.font),
                        D = l(e.ctx, a[a.length - 1], h.font);
                    0 !== e.labelRotation ? (e.paddingLeft = "bottom" === n.position ? v * b + 3 : v * g + 3, e.paddingRight = "bottom" === n.position ? v * g + 3 : v * D + 3) : (e.paddingLeft = b / 2 + 3, e.paddingRight = D / 2 + 3)
                } else i.mirror ? p = 0 : p += L + g, t.width = Math.min(e.maxWidth, t.width + p), e.paddingTop = h.size / 2, e.paddingBottom = h.size / 2
            }
            e.handleMargins(), e.width = t.width, e.height = t.height
        },
        handleMargins: function() {
            var e = this;
            e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
        },
        afterFit: function() {
            r.callback(this.options.afterFit, [this])
        },
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        isFullWidth: function() {
            return this.options.fullWidth
        },
        getRightValue: function(e) {
            if (r.isNullOrUndef(e)) return NaN;
            if ("number" == typeof e && !isFinite(e)) return NaN;
            if (e)
                if (this.isHorizontal()) {
                    if (void 0 !== e.x) return this.getRightValue(e.x)
                } else if (void 0 !== e.y) return this.getRightValue(e.y);
            return e
        },
        getLabelForIndex: r.noop,
        getPixelForValue: r.noop,
        getValueForPixel: r.noop,
        getPixelForTick: function(e) {
            var t = this,
                a = t.options.offset;
            if (t.isHorizontal()) {
                var n = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (a ? 0 : 1), 1),
                    i = n * e + t.paddingLeft;
                a && (i += n / 2);
                var r = t.left + Math.round(i);
                return r += t.isFullWidth() ? t.margins.left : 0
            }
            var s = t.height - (t.paddingTop + t.paddingBottom);
            return t.top + e * (s / (t._ticks.length - 1))
        },
        getPixelForDecimal: function(e) {
            var t = this;
            if (t.isHorizontal()) {
                var a = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
                    n = t.left + Math.round(a);
                return n += t.isFullWidth() ? t.margins.left : 0
            }
            return t.top + e * t.height
        },
        getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue())
        },
        getBaseValue: function() {
            var e = this.min,
                t = this.max;
            return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
        },
        _autoSkip: function(e) {
            var t, a, n, i, s = this,
                o = s.isHorizontal(),
                d = s.options.ticks.minor,
                l = e.length,
                u = r.toRadians(s.labelRotation),
                _ = Math.cos(u),
                m = s.longestLabelWidth * _,
                c = [];
            for (d.maxTicksLimit && (i = d.maxTicksLimit), o && (t = !1, (m + d.autoSkipPadding) * l > s.width - (s.paddingLeft + s.paddingRight) && (t = 1 + Math.floor((m + d.autoSkipPadding) * l / (s.width - (s.paddingLeft + s.paddingRight)))), i && l > i && (t = Math.max(t, Math.floor(l / i)))), a = 0; a < l; a++) n = e[a], (t > 1 && a % t > 0 || a % t == 0 && a + t >= l) && a !== l - 1 && delete n.label, c.push(n);
            return c
        },
        draw: function(e) {
            var t = this,
                a = t.options;
            if (a.display) {
                var i = t.ctx,
                    s = n.global,
                    o = a.ticks.minor,
                    l = a.ticks.major || o,
                    m = a.gridLines,
                    c = a.scaleLabel,
                    h = 0 !== t.labelRotation,
                    f = t.isHorizontal(),
                    M = o.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                    p = r.valueOrDefault(o.fontColor, s.defaultFontColor),
                    y = u(o),
                    g = r.valueOrDefault(l.fontColor, s.defaultFontColor),
                    L = u(l),
                    Y = m.drawTicks ? m.tickMarkLength : 0,
                    v = r.valueOrDefault(c.fontColor, s.defaultFontColor),
                    k = u(c),
                    b = r.options.toPadding(c.padding),
                    D = r.toRadians(t.labelRotation),
                    w = [],
                    x = t.options.gridLines.lineWidth,
                    T = "right" === a.position ? t.left : t.right - x - Y,
                    S = "right" === a.position ? t.left + Y : t.right,
                    H = "bottom" === a.position ? t.top + x : t.bottom - Y - x,
                    j = "bottom" === a.position ? t.top + x + Y : t.bottom + x;
                if (r.each(M, (function(n, i) {
                        if (!r.isNullOrUndef(n.label)) {
                            var l, u, _, c, p, y, g, L, v, k, b, P, O, A, F = n.label;
                            i === t.zeroLineIndex && a.offset === m.offsetGridLines ? (l = m.zeroLineWidth, u = m.zeroLineColor, _ = m.zeroLineBorderDash, c = m.zeroLineBorderDashOffset) : (l = r.valueAtIndexOrDefault(m.lineWidth, i), u = r.valueAtIndexOrDefault(m.color, i), _ = r.valueOrDefault(m.borderDash, s.borderDash), c = r.valueOrDefault(m.borderDashOffset, s.borderDashOffset));
                            var W = "middle",
                                C = "middle",
                                I = o.padding;
                            if (f) {
                                var z = Y + I;
                                "bottom" === a.position ? (C = h ? "middle" : "top", W = h ? "right" : "center", A = t.top + z) : (C = h ? "middle" : "bottom", W = h ? "left" : "center", A = t.bottom - z);
                                var E = d(t, i, m.offsetGridLines && M.length > 1);
                                E < t.left && (u = "rgba(0,0,0,0)"), E += r.aliasPixel(l), O = t.getPixelForTick(i) + o.labelOffset, p = g = v = b = E, y = H, L = j, k = e.top, P = e.bottom + x
                            } else {
                                var R, N = "left" === a.position;
                                o.mirror ? (W = N ? "left" : "right", R = I) : (W = N ? "right" : "left", R = Y + I), O = N ? t.right - R : t.left + R;
                                var V = d(t, i, m.offsetGridLines && M.length > 1);
                                V < t.top && (u = "rgba(0,0,0,0)"), V += r.aliasPixel(l), A = t.getPixelForTick(i) + o.labelOffset, p = T, g = S, v = e.left, b = e.right + x, y = L = k = P = V
                            }
                            w.push({
                                tx1: p,
                                ty1: y,
                                tx2: g,
                                ty2: L,
                                x1: v,
                                y1: k,
                                x2: b,
                                y2: P,
                                labelX: O,
                                labelY: A,
                                glWidth: l,
                                glColor: u,
                                glBorderDash: _,
                                glBorderDashOffset: c,
                                rotation: -1 * D,
                                label: F,
                                major: n.major,
                                textBaseline: C,
                                textAlign: W
                            })
                        }
                    })), r.each(w, (function(e) {
                        if (m.display && (i.save(), i.lineWidth = e.glWidth, i.strokeStyle = e.glColor, i.setLineDash && (i.setLineDash(e.glBorderDash), i.lineDashOffset = e.glBorderDashOffset), i.beginPath(), m.drawTicks && (i.moveTo(e.tx1, e.ty1), i.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (i.moveTo(e.x1, e.y1), i.lineTo(e.x2, e.y2)), i.stroke(), i.restore()), o.display) {
                            i.save(), i.translate(e.labelX, e.labelY), i.rotate(e.rotation), i.font = e.major ? L.font : y.font, i.fillStyle = e.major ? g : p, i.textBaseline = e.textBaseline, i.textAlign = e.textAlign;
                            var a = e.label;
                            if (r.isArray(a))
                                for (var n = a.length, s = 1.5 * y.size, d = t.isHorizontal() ? 0 : -s * (n - 1) / 2, l = 0; l < n; ++l) i.fillText("" + a[l], 0, d), d += s;
                            else i.fillText(a, 0, 0);
                            i.restore()
                        }
                    })), c.display) {
                    var P, O, A = 0,
                        F = _(c) / 2;
                    if (f) P = t.left + (t.right - t.left) / 2, O = "bottom" === a.position ? t.bottom - F - b.bottom : t.top + F + b.top;
                    else {
                        var W = "left" === a.position;
                        P = W ? t.left + F + b.top : t.right - F - b.top, O = t.top + (t.bottom - t.top) / 2, A = W ? -.5 * Math.PI : .5 * Math.PI
                    }
                    i.save(), i.translate(P, O), i.rotate(A), i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = v, i.font = k.font, i.fillText(c.labelString, 0, 0), i.restore()
                }
                if (m.drawBorder) {
                    i.lineWidth = r.valueAtIndexOrDefault(m.lineWidth, 0), i.strokeStyle = r.valueAtIndexOrDefault(m.color, 0);
                    var C = t.left,
                        I = t.right + x,
                        z = t.top,
                        E = t.bottom + x,
                        R = r.aliasPixel(i.lineWidth);
                    f ? (z = E = "top" === a.position ? t.bottom : t.top, z += R, E += R) : (C = I = "left" === a.position ? t.right : t.left, C += R, I += R), i.beginPath(), i.moveTo(C, z), i.lineTo(I, E), i.stroke()
                }
            }
        }
    })
}, function(e, t, a) {
    "use strict";
    var n = a(2);
    e.exports = {
        formatters: {
            values: function(e) {
                return n.isArray(e) ? e : "" + e
            },
            linear: function(e, t, a) {
                var i = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                Math.abs(i) > 1 && e !== Math.floor(e) && (i = e - Math.floor(e));
                var r = n.log10(Math.abs(i)),
                    s = "";
                if (0 !== e)
                    if (Math.max(Math.abs(a[0]), Math.abs(a[a.length - 1])) < 1e-4) {
                        var o = n.log10(Math.abs(e));
                        s = e.toExponential(Math.floor(o) - Math.floor(r))
                    } else {
                        var d = -1 * Math.floor(r);
                        d = Math.max(Math.min(d, 20), 0), s = e.toFixed(d)
                    }
                else s = "0";
                return s
            },
            logarithmic: function(e, t, a) {
                var i = e / Math.pow(10, Math.floor(n.log10(e)));
                return 0 === e ? "0" : 1 === i || 2 === i || 5 === i || 0 === t || t === a.length - 1 ? e.toExponential() : ""
            }
        }
    }
}, , , function(e, t, a) {
    "use strict";
    var n, i = {
        noop: function() {},
        uid: (n = 0, function() {
            return n++
        }),
        isNullOrUndef: function(e) {
            return null == e
        },
        isArray: Array.isArray ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        isObject: function(e) {
            return null !== e && "[object Object]" === Object.prototype.toString.call(e)
        },
        valueOrDefault: function(e, t) {
            return void 0 === e ? t : e
        },
        valueAtIndexOrDefault: function(e, t, a) {
            return i.valueOrDefault(i.isArray(e) ? e[t] : e, a)
        },
        callback: function(e, t, a) {
            if (e && "function" == typeof e.call) return e.apply(a, t)
        },
        each: function(e, t, a, n) {
            var r, s, o;
            if (i.isArray(e))
                if (s = e.length, n)
                    for (r = s - 1; r >= 0; r--) t.call(a, e[r], r);
                else
                    for (r = 0; r < s; r++) t.call(a, e[r], r);
            else if (i.isObject(e))
                for (s = (o = Object.keys(e)).length, r = 0; r < s; r++) t.call(a, e[o[r]], o[r])
        },
        arrayEquals: function(e, t) {
            var a, n, r, s;
            if (!e || !t || e.length !== t.length) return !1;
            for (a = 0, n = e.length; a < n; ++a)
                if (r = e[a], s = t[a], r instanceof Array && s instanceof Array) {
                    if (!i.arrayEquals(r, s)) return !1
                } else if (r !== s) return !1;
            return !0
        },
        clone: function(e) {
            if (i.isArray(e)) return e.map(i.clone);
            if (i.isObject(e)) {
                for (var t = {}, a = Object.keys(e), n = a.length, r = 0; r < n; ++r) t[a[r]] = i.clone(e[a[r]]);
                return t
            }
            return e
        },
        _merger: function(e, t, a, n) {
            var r = t[e],
                s = a[e];
            i.isObject(r) && i.isObject(s) ? i.merge(r, s, n) : t[e] = i.clone(s)
        },
        _mergerIf: function(e, t, a) {
            var n = t[e],
                r = a[e];
            i.isObject(n) && i.isObject(r) ? i.mergeIf(n, r) : t.hasOwnProperty(e) || (t[e] = i.clone(r))
        },
        merge: function(e, t, a) {
            var n, r, s, o, d, l = i.isArray(t) ? t : [t],
                u = l.length;
            if (!i.isObject(e)) return e;
            for (n = (a = a || {}).merger || i._merger, r = 0; r < u; ++r)
                if (t = l[r], i.isObject(t))
                    for (d = 0, o = (s = Object.keys(t)).length; d < o; ++d) n(s[d], e, t, a);
            return e
        },
        mergeIf: function(e, t) {
            return i.merge(e, t, {
                merger: i._mergerIf
            })
        },
        extend: function(e) {
            for (var t = function(t, a) {
                    e[a] = t
                }, a = 1, n = arguments.length; a < n; ++a) i.each(arguments[a], t);
            return e
        },
        inherits: function(e) {
            var t = this,
                a = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                    return t.apply(this, arguments)
                },
                n = function() {
                    this.constructor = a
                };
            return n.prototype = t.prototype, a.prototype = new n, a.extend = i.inherits, e && i.extend(a.prototype, e), a.__super__ = t.prototype, a
        }
    };
    e.exports = i, i.callCallback = i.callback, i.indexOf = function(e, t, a) {
        return Array.prototype.indexOf.call(e, t, a)
    }, i.getValueOrDefault = i.valueOrDefault, i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault
}, , , , , , function(e, t, a) {
    var n = a(191),
        i = a(193),
        r = function(e) {
            return e instanceof r ? e : this instanceof r ? (this.valid = !1, this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1
            }, void("string" == typeof e ? (t = i.getRgba(e)) ? this.setValues("rgb", t) : (t = i.getHsla(e)) ? this.setValues("hsl", t) : (t = i.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new r(e);
            var t
        };
    r.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var e = this.values;
            return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var e = this.values;
            return e.rgb.concat([e.alpha])
        },
        hslaArray: function() {
            var e = this.values;
            return e.hsl.concat([e.alpha])
        },
        alpha: function(e) {
            return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
        },
        red: function(e) {
            return this.setChannel("rgb", 0, e)
        },
        green: function(e) {
            return this.setChannel("rgb", 1, e)
        },
        blue: function(e) {
            return this.setChannel("rgb", 2, e)
        },
        hue: function(e) {
            return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
        },
        saturation: function(e) {
            return this.setChannel("hsl", 1, e)
        },
        lightness: function(e) {
            return this.setChannel("hsl", 2, e)
        },
        saturationv: function(e) {
            return this.setChannel("hsv", 1, e)
        },
        whiteness: function(e) {
            return this.setChannel("hwb", 1, e)
        },
        blackness: function(e) {
            return this.setChannel("hwb", 2, e)
        },
        value: function(e) {
            return this.setChannel("hsv", 2, e)
        },
        cyan: function(e) {
            return this.setChannel("cmyk", 0, e)
        },
        magenta: function(e) {
            return this.setChannel("cmyk", 1, e)
        },
        yellow: function(e) {
            return this.setChannel("cmyk", 2, e)
        },
        black: function(e) {
            return this.setChannel("cmyk", 3, e)
        },
        hexString: function() {
            return i.hexString(this.values.rgb)
        },
        rgbString: function() {
            return i.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return i.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return i.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return i.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return i.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return i.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return i.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var e = this.values.rgb;
            return e[0] << 16 | e[1] << 8 | e[2]
        },
        luminosity: function() {
            for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) {
                var n = e[a] / 255;
                t[a] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
            }
            return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
        },
        contrast: function(e) {
            var t = this.luminosity(),
                a = e.luminosity();
            return t > a ? (t + .05) / (a + .05) : (a + .05) / (t + .05)
        },
        level: function(e) {
            var t = this.contrast(e);
            return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
        },
        dark: function() {
            var e = this.values.rgb;
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
            return this.setValues("rgb", e), this
        },
        lighten: function(e) {
            var t = this.values.hsl;
            return t[2] += t[2] * e, this.setValues("hsl", t), this
        },
        darken: function(e) {
            var t = this.values.hsl;
            return t[2] -= t[2] * e, this.setValues("hsl", t), this
        },
        saturate: function(e) {
            var t = this.values.hsl;
            return t[1] += t[1] * e, this.setValues("hsl", t), this
        },
        desaturate: function(e) {
            var t = this.values.hsl;
            return t[1] -= t[1] * e, this.setValues("hsl", t), this
        },
        whiten: function(e) {
            var t = this.values.hwb;
            return t[1] += t[1] * e, this.setValues("hwb", t), this
        },
        blacken: function(e) {
            var t = this.values.hwb;
            return t[2] += t[2] * e, this.setValues("hwb", t), this
        },
        greyscale: function() {
            var e = this.values.rgb,
                t = .3 * e[0] + .59 * e[1] + .11 * e[2];
            return this.setValues("rgb", [t, t, t]), this
        },
        clearer: function(e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t - t * e), this
        },
        opaquer: function(e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t + t * e), this
        },
        rotate: function(e) {
            var t = this.values.hsl,
                a = (t[0] + e) % 360;
            return t[0] = a < 0 ? 360 + a : a, this.setValues("hsl", t), this
        },
        mix: function(e, t) {
            var a = e,
                n = void 0 === t ? .5 : t,
                i = 2 * n - 1,
                r = this.alpha() - a.alpha(),
                s = ((i * r == -1 ? i : (i + r) / (1 + i * r)) + 1) / 2,
                o = 1 - s;
            return this.rgb(s * this.red() + o * a.red(), s * this.green() + o * a.green(), s * this.blue() + o * a.blue()).alpha(this.alpha() * n + a.alpha() * (1 - n))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var e, t, a = new r,
                n = this.values,
                i = a.values;
            for (var s in n) n.hasOwnProperty(s) && (e = n[s], "[object Array]" === (t = {}.toString.call(e)) ? i[s] = e.slice(0) : "[object Number]" === t ? i[s] = e : console.error("unexpected color value:", e));
            return a
        }
    }, r.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, r.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, r.prototype.getValues = function(e) {
        for (var t = this.values, a = {}, n = 0; n < e.length; n++) a[e.charAt(n)] = t[e][n];
        return 1 !== t.alpha && (a.a = t.alpha), a
    }, r.prototype.setValues = function(e, t) {
        var a, i, r = this.values,
            s = this.spaces,
            o = this.maxes,
            d = 1;
        if (this.valid = !0, "alpha" === e) d = t;
        else if (t.length) r[e] = t.slice(0, e.length), d = t[e.length];
        else if (void 0 !== t[e.charAt(0)]) {
            for (a = 0; a < e.length; a++) r[e][a] = t[e.charAt(a)];
            d = t.a
        } else if (void 0 !== t[s[e][0]]) {
            var l = s[e];
            for (a = 0; a < e.length; a++) r[e][a] = t[l[a]];
            d = t.alpha
        }
        if (r.alpha = Math.max(0, Math.min(1, void 0 === d ? r.alpha : d)), "alpha" === e) return !1;
        for (a = 0; a < e.length; a++) i = Math.max(0, Math.min(o[e][a], r[e][a])), r[e][a] = Math.round(i);
        for (var u in s) u !== e && (r[u] = n[e][u](r[e]));
        return !0
    }, r.prototype.setSpace = function(e, t) {
        var a = t[0];
        return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a), this)
    }, r.prototype.setChannel = function(e, t, a) {
        var n = this.values[e];
        return void 0 === a ? n[t] : a === n[t] ? this : (n[t] = a, this.setValues(e, n), this)
    }, "undefined" != typeof window && (window.Color = r), e.exports = r
}, function(e, t, a) {
    "use strict";
    var n = a(4);
    t = e.exports = n.extend({
        chart: null,
        currentStep: 0,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
    });
    Object.defineProperty(t.prototype, "animationObject", {
        get: function() {
            return this
        }
    }), Object.defineProperty(t.prototype, "chartInstance", {
        get: function() {
            return this.chart
        },
        set: function(e) {
            this.chart = e
        }
    })
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(2);
    n._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: i.noop,
            onComplete: i.noop
        }
    }), e.exports = {
        frameDuration: 17,
        animations: [],
        dropFrames: 0,
        request: null,
        addAnimation: function(e, t, a, n) {
            var i, r, s = this.animations;
            for (t.chart = e, n || (e.animating = !0), i = 0, r = s.length; i < r; ++i)
                if (s[i].chart === e) return void(s[i] = t);
            s.push(t), 1 === s.length && this.requestAnimationFrame()
        },
        cancelAnimation: function(e) {
            var t = i.findIndex(this.animations, (function(t) {
                return t.chart === e
            })); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
        },
        requestAnimationFrame: function() {
            var e = this;
            null === e.request && (e.request = i.requestAnimFrame.call(window, (function() {
                e.request = null, e.startDigest()
            })))
        },
        startDigest: function() {
            var e = this,
                t = Date.now(),
                a = 0;
            e.dropFrames > 1 && (a = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + a);
            var n = Date.now();
            e.dropFrames += (n - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
        },
        advance: function(e) {
            for (var t, a, n = this.animations, r = 0; r < n.length;) a = (t = n[r]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), i.callback(t.render, [a, t], a), i.callback(t.onAnimationProgress, [t], a), t.currentStep >= t.numSteps ? (i.callback(t.onAnimationComplete, [t], a), a.animating = !1, n.splice(r, 1)) : ++r
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(2);

    function i(e, t) {
        return e.native ? {
            x: e.x,
            y: e.y
        } : n.getRelativePosition(e, t)
    }

    function r(e, t) {
        var a, n, i, r, s;
        for (n = 0, r = e.data.datasets.length; n < r; ++n)
            if (e.isDatasetVisible(n))
                for (i = 0, s = (a = e.getDatasetMeta(n)).data.length; i < s; ++i) {
                    var o = a.data[i];
                    o._view.skip || t(o)
                }
    }

    function s(e, t) {
        var a = [];
        return r(e, (function(e) {
            e.inRange(t.x, t.y) && a.push(e)
        })), a
    }

    function o(e, t, a, n) {
        var i = Number.POSITIVE_INFINITY,
            s = [];
        return r(e, (function(e) {
            if (!a || e.inRange(t.x, t.y)) {
                var r = e.getCenterPoint(),
                    o = n(t, r);
                o < i ? (s = [e], i = o) : o === i && s.push(e)
            }
        })), s
    }

    function d(e) {
        var t = -1 !== e.indexOf("x"),
            a = -1 !== e.indexOf("y");
        return function(e, n) {
            var i = t ? Math.abs(e.x - n.x) : 0,
                r = a ? Math.abs(e.y - n.y) : 0;
            return Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
        }
    }

    function l(e, t, a) {
        var n = i(t, e);
        a.axis = a.axis || "x";
        var r = d(a.axis),
            l = a.intersect ? s(e, n) : o(e, n, !1, r),
            u = [];
        return l.length ? (e.data.datasets.forEach((function(t, a) {
            if (e.isDatasetVisible(a)) {
                var n = e.getDatasetMeta(a).data[l[0]._index];
                n && !n._view.skip && u.push(n)
            }
        })), u) : []
    }
    e.exports = {
        modes: {
            single: function(e, t) {
                var a = i(t, e),
                    n = [];
                return r(e, (function(e) {
                    if (e.inRange(a.x, a.y)) return n.push(e), n
                })), n.slice(0, 1)
            },
            label: l,
            index: l,
            dataset: function(e, t, a) {
                var n = i(t, e);
                a.axis = a.axis || "xy";
                var r = d(a.axis),
                    l = a.intersect ? s(e, n) : o(e, n, !1, r);
                return l.length > 0 && (l = e.getDatasetMeta(l[0]._datasetIndex).data), l
            },
            "x-axis": function(e, t) {
                return l(e, t, {
                    intersect: !1
                })
            },
            point: function(e, t) {
                return s(e, i(t, e))
            },
            nearest: function(e, t, a) {
                var n = i(t, e);
                a.axis = a.axis || "xy";
                var r = d(a.axis),
                    s = o(e, n, a.intersect, r);
                return s.length > 1 && s.sort((function(e, t) {
                    var a = e.getArea() - t.getArea();
                    return 0 === a && (a = e._datasetIndex - t._datasetIndex), a
                })), s.slice(0, 1)
            },
            x: function(e, t, a) {
                var n = i(t, e),
                    s = [],
                    o = !1;
                return r(e, (function(e) {
                    e.inXRange(n.x) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                })), a.intersect && !o && (s = []), s
            },
            y: function(e, t, a) {
                var n = i(t, e),
                    s = [],
                    o = !1;
                return r(e, (function(e) {
                    e.inYRange(n.y) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                })), a.intersect && !o && (s = []), s
            }
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(2),
        i = a(199),
        r = a(200),
        s = r._enabled ? r : i;
    e.exports = n.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
    }, s)
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(2);
    n._set("global", {
        plugins: {}
    }), e.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function(e) {
            var t = this._plugins;
            [].concat(e).forEach((function(e) {
                -1 === t.indexOf(e) && t.push(e)
            })), this._cacheId++
        },
        unregister: function(e) {
            var t = this._plugins;
            [].concat(e).forEach((function(e) {
                var a = t.indexOf(e); - 1 !== a && t.splice(a, 1)
            })), this._cacheId++
        },
        clear: function() {
            this._plugins = [], this._cacheId++
        },
        count: function() {
            return this._plugins.length
        },
        getAll: function() {
            return this._plugins
        },
        notify: function(e, t, a) {
            var n, i, r, s, o, d = this.descriptors(e),
                l = d.length;
            for (n = 0; n < l; ++n)
                if ("function" == typeof(o = (r = (i = d[n]).plugin)[t]) && ((s = [e].concat(a || [])).push(i.options), !1 === o.apply(r, s))) return !1;
            return !0
        },
        descriptors: function(e) {
            var t = e.$plugins || (e.$plugins = {});
            if (t.id === this._cacheId) return t.descriptors;
            var a = [],
                r = [],
                s = e && e.config || {},
                o = s.options && s.options.plugins || {};
            return this._plugins.concat(s.plugins || []).forEach((function(e) {
                if (-1 === a.indexOf(e)) {
                    var t = e.id,
                        s = o[t];
                    !1 !== s && (!0 === s && (s = i.clone(n.global.plugins[t])), a.push(e), r.push({
                        plugin: e,
                        options: s || {}
                    }))
                }
            })), t.descriptors = r, t.id = this._cacheId, r
        },
        _invalidate: function(e) {
            delete e.$plugins
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4),
        r = a(2);
    n._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: r.noop,
                title: function(e, t) {
                    var a = "",
                        n = t.labels,
                        i = n ? n.length : 0;
                    if (e.length > 0) {
                        var r = e[0];
                        r.xLabel ? a = r.xLabel : i > 0 && r.index < i && (a = n[r.index])
                    }
                    return a
                },
                afterTitle: r.noop,
                beforeBody: r.noop,
                beforeLabel: r.noop,
                label: function(e, t) {
                    var a = t.datasets[e.datasetIndex].label || "";
                    return a && (a += ": "), a += e.yLabel
                },
                labelColor: function(e, t) {
                    var a = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                    return {
                        borderColor: a.borderColor,
                        backgroundColor: a.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: r.noop,
                afterBody: r.noop,
                beforeFooter: r.noop,
                footer: r.noop,
                afterFooter: r.noop
            }
        }
    });
    var s = {
        average: function(e) {
            if (!e.length) return !1;
            var t, a, n = 0,
                i = 0,
                r = 0;
            for (t = 0, a = e.length; t < a; ++t) {
                var s = e[t];
                if (s && s.hasValue()) {
                    var o = s.tooltipPosition();
                    n += o.x, i += o.y, ++r
                }
            }
            return {
                x: Math.round(n / r),
                y: Math.round(i / r)
            }
        },
        nearest: function(e, t) {
            var a, n, i, s = t.x,
                o = t.y,
                d = Number.POSITIVE_INFINITY;
            for (a = 0, n = e.length; a < n; ++a) {
                var l = e[a];
                if (l && l.hasValue()) {
                    var u = l.getCenterPoint(),
                        _ = r.distanceBetweenPoints(t, u);
                    _ < d && (d = _, i = l)
                }
            }
            if (i) {
                var m = i.tooltipPosition();
                s = m.x, o = m.y
            }
            return {
                x: s,
                y: o
            }
        }
    };

    function o(e, t) {
        var a = r.color(e);
        return a.alpha(t * a.alpha()).rgbaString()
    }

    function d(e, t) {
        return t && (r.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
    }

    function l(e) {
        return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
    }

    function u(e) {
        var t = n.global,
            a = r.valueOrDefault;
        return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: a(e.bodyFontFamily, t.defaultFontFamily),
            _bodyFontStyle: a(e.bodyFontStyle, t.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: a(e.bodyFontSize, t.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: a(e.titleFontFamily, t.defaultFontFamily),
            _titleFontStyle: a(e.titleFontStyle, t.defaultFontStyle),
            titleFontSize: a(e.titleFontSize, t.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: a(e.footerFontFamily, t.defaultFontFamily),
            _footerFontStyle: a(e.footerFontStyle, t.defaultFontStyle),
            footerFontSize: a(e.footerFontSize, t.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth
        }
    }

    function _(e) {
        return d([], l(e))
    }(e.exports = i.extend({
        initialize: function() {
            this._model = u(this._options), this._lastActive = []
        },
        getTitle: function() {
            var e = this,
                t = e._options,
                a = t.callbacks,
                n = a.beforeTitle.apply(e, arguments),
                i = a.title.apply(e, arguments),
                r = a.afterTitle.apply(e, arguments),
                s = [];
            return s = d(s, l(n)), s = d(s, l(i)), s = d(s, l(r))
        },
        getBeforeBody: function() {
            return _(this._options.callbacks.beforeBody.apply(this, arguments))
        },
        getBody: function(e, t) {
            var a = this,
                n = a._options.callbacks,
                i = [];
            return r.each(e, (function(e) {
                var r = {
                    before: [],
                    lines: [],
                    after: []
                };
                d(r.before, l(n.beforeLabel.call(a, e, t))), d(r.lines, n.label.call(a, e, t)), d(r.after, l(n.afterLabel.call(a, e, t))), i.push(r)
            })), i
        },
        getAfterBody: function() {
            return _(this._options.callbacks.afterBody.apply(this, arguments))
        },
        getFooter: function() {
            var e = this,
                t = e._options.callbacks,
                a = t.beforeFooter.apply(e, arguments),
                n = t.footer.apply(e, arguments),
                i = t.afterFooter.apply(e, arguments),
                r = [];
            return r = d(r, l(a)), r = d(r, l(n)), r = d(r, l(i))
        },
        update: function(e) {
            var t, a, n, i, o, d, l, _ = this,
                m = _._options,
                c = _._model,
                h = _._model = u(m),
                f = _._active,
                M = _._data,
                p = {
                    xAlign: c.xAlign,
                    yAlign: c.yAlign
                },
                y = {
                    x: c.x,
                    y: c.y
                },
                g = {
                    width: c.width,
                    height: c.height
                },
                L = {
                    x: c.caretX,
                    y: c.caretY
                };
            if (f.length) {
                h.opacity = 1;
                var Y = [],
                    v = [];
                L = s[m.position].call(_, f, _._eventPosition);
                var k = [];
                for (t = 0, a = f.length; t < a; ++t) k.push((n = f[t], i = void 0, o = void 0, d = void 0, l = void 0, i = n._xScale, o = n._yScale || n._scale, d = n._index, l = n._datasetIndex, {
                    xLabel: i ? i.getLabelForIndex(d, l) : "",
                    yLabel: o ? o.getLabelForIndex(d, l) : "",
                    index: d,
                    datasetIndex: l,
                    x: n._model.x,
                    y: n._model.y
                }));
                m.filter && (k = k.filter((function(e) {
                    return m.filter(e, M)
                }))), m.itemSort && (k = k.sort((function(e, t) {
                    return m.itemSort(e, t, M)
                }))), r.each(k, (function(e) {
                    Y.push(m.callbacks.labelColor.call(_, e, _._chart)), v.push(m.callbacks.labelTextColor.call(_, e, _._chart))
                })), h.title = _.getTitle(k, M), h.beforeBody = _.getBeforeBody(k, M), h.body = _.getBody(k, M), h.afterBody = _.getAfterBody(k, M), h.footer = _.getFooter(k, M), h.x = Math.round(L.x), h.y = Math.round(L.y), h.caretPadding = m.caretPadding, h.labelColors = Y, h.labelTextColors = v, h.dataPoints = k, g = function(e, t) {
                    var a = e._chart.ctx,
                        n = 2 * t.yPadding,
                        i = 0,
                        s = t.body,
                        o = s.reduce((function(e, t) {
                            return e + t.before.length + t.lines.length + t.after.length
                        }), 0);
                    o += t.beforeBody.length + t.afterBody.length;
                    var d = t.title.length,
                        l = t.footer.length,
                        u = t.titleFontSize,
                        _ = t.bodyFontSize,
                        m = t.footerFontSize;
                    n += d * u, n += d ? (d - 1) * t.titleSpacing : 0, n += d ? t.titleMarginBottom : 0, n += o * _, n += o ? (o - 1) * t.bodySpacing : 0, n += l ? t.footerMarginTop : 0, n += l * m, n += l ? (l - 1) * t.footerSpacing : 0;
                    var c = 0,
                        h = function(e) {
                            i = Math.max(i, a.measureText(e).width + c)
                        };
                    return a.font = r.fontString(u, t._titleFontStyle, t._titleFontFamily), r.each(t.title, h), a.font = r.fontString(_, t._bodyFontStyle, t._bodyFontFamily), r.each(t.beforeBody.concat(t.afterBody), h), c = t.displayColors ? _ + 2 : 0, r.each(s, (function(e) {
                        r.each(e.before, h), r.each(e.lines, h), r.each(e.after, h)
                    })), c = 0, a.font = r.fontString(m, t._footerFontStyle, t._footerFontFamily), r.each(t.footer, h), {
                        width: i += 2 * t.xPadding,
                        height: n
                    }
                }(this, h), y = function(e, t, a, n) {
                    var i = e.x,
                        r = e.y,
                        s = e.caretSize,
                        o = e.caretPadding,
                        d = e.cornerRadius,
                        l = a.xAlign,
                        u = a.yAlign,
                        _ = s + o,
                        m = d + o;
                    return "right" === l ? i -= t.width : "center" === l && ((i -= t.width / 2) + t.width > n.width && (i = n.width - t.width), i < 0 && (i = 0)), "top" === u ? r += _ : r -= "bottom" === u ? t.height + _ : t.height / 2, "center" === u ? "left" === l ? i += _ : "right" === l && (i -= _) : "left" === l ? i -= m : "right" === l && (i += m), {
                        x: i,
                        y: r
                    }
                }(h, g, p = function(e, t) {
                    var a, n, i, r, s, o = e._model,
                        d = e._chart,
                        l = e._chart.chartArea,
                        u = "center",
                        _ = "center";
                    o.y < t.height ? _ = "top" : o.y > d.height - t.height && (_ = "bottom");
                    var m = (l.left + l.right) / 2,
                        c = (l.top + l.bottom) / 2;
                    "center" === _ ? (a = function(e) {
                        return e <= m
                    }, n = function(e) {
                        return e > m
                    }) : (a = function(e) {
                        return e <= t.width / 2
                    }, n = function(e) {
                        return e >= d.width - t.width / 2
                    }), i = function(e) {
                        return e + t.width + o.caretSize + o.caretPadding > d.width
                    }, r = function(e) {
                        return e - t.width - o.caretSize - o.caretPadding < 0
                    }, s = function(e) {
                        return e <= c ? "top" : "bottom"
                    }, a(o.x) ? (u = "left", i(o.x) && (u = "center", _ = s(o.y))) : n(o.x) && (u = "right", r(o.x) && (u = "center", _ = s(o.y)));
                    var h = e._options;
                    return {
                        xAlign: h.xAlign ? h.xAlign : u,
                        yAlign: h.yAlign ? h.yAlign : _
                    }
                }(this, g), _._chart)
            } else h.opacity = 0;
            return h.xAlign = p.xAlign, h.yAlign = p.yAlign, h.x = y.x, h.y = y.y, h.width = g.width, h.height = g.height, h.caretX = L.x, h.caretY = L.y, _._model = h, e && m.custom && m.custom.call(_, h), _
        },
        drawCaret: function(e, t) {
            var a = this._chart.ctx,
                n = this._view,
                i = this.getCaretPosition(e, t, n);
            a.lineTo(i.x1, i.y1), a.lineTo(i.x2, i.y2), a.lineTo(i.x3, i.y3)
        },
        getCaretPosition: function(e, t, a) {
            var n, i, r, s, o, d, l = a.caretSize,
                u = a.cornerRadius,
                _ = a.xAlign,
                m = a.yAlign,
                c = e.x,
                h = e.y,
                f = t.width,
                M = t.height;
            if ("center" === m) o = h + M / 2, "left" === _ ? (i = (n = c) - l, r = n, s = o + l, d = o - l) : (i = (n = c + f) + l, r = n, s = o - l, d = o + l);
            else if ("left" === _ ? (n = (i = c + u + l) - l, r = i + l) : "right" === _ ? (n = (i = c + f - u - l) - l, r = i + l) : (n = (i = a.caretX) - l, r = i + l), "top" === m) o = (s = h) - l, d = s;
            else {
                o = (s = h + M) + l, d = s;
                var p = r;
                r = n, n = p
            }
            return {
                x1: n,
                x2: i,
                x3: r,
                y1: s,
                y2: o,
                y3: d
            }
        },
        drawTitle: function(e, t, a, n) {
            var i = t.title;
            if (i.length) {
                a.textAlign = t._titleAlign, a.textBaseline = "top";
                var s, d, l = t.titleFontSize,
                    u = t.titleSpacing;
                for (a.fillStyle = o(t.titleFontColor, n), a.font = r.fontString(l, t._titleFontStyle, t._titleFontFamily), s = 0, d = i.length; s < d; ++s) a.fillText(i[s], e.x, e.y), e.y += l + u, s + 1 === i.length && (e.y += t.titleMarginBottom - u)
            }
        },
        drawBody: function(e, t, a, n) {
            var i = t.bodyFontSize,
                s = t.bodySpacing,
                d = t.body;
            a.textAlign = t._bodyAlign, a.textBaseline = "top", a.font = r.fontString(i, t._bodyFontStyle, t._bodyFontFamily);
            var l = 0,
                u = function(t) {
                    a.fillText(t, e.x + l, e.y), e.y += i + s
                };
            a.fillStyle = o(t.bodyFontColor, n), r.each(t.beforeBody, u);
            var _ = t.displayColors;
            l = _ ? i + 2 : 0, r.each(d, (function(s, d) {
                var l = o(t.labelTextColors[d], n);
                a.fillStyle = l, r.each(s.before, u), r.each(s.lines, (function(r) {
                    _ && (a.fillStyle = o(t.legendColorBackground, n), a.fillRect(e.x, e.y, i, i), a.lineWidth = 1, a.strokeStyle = o(t.labelColors[d].borderColor, n), a.strokeRect(e.x, e.y, i, i), a.fillStyle = o(t.labelColors[d].backgroundColor, n), a.fillRect(e.x + 1, e.y + 1, i - 2, i - 2), a.fillStyle = l), u(r)
                })), r.each(s.after, u)
            })), l = 0, r.each(t.afterBody, u), e.y -= s
        },
        drawFooter: function(e, t, a, n) {
            var i = t.footer;
            i.length && (e.y += t.footerMarginTop, a.textAlign = t._footerAlign, a.textBaseline = "top", a.fillStyle = o(t.footerFontColor, n), a.font = r.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), r.each(i, (function(n) {
                a.fillText(n, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing
            })))
        },
        drawBackground: function(e, t, a, n, i) {
            a.fillStyle = o(t.backgroundColor, i), a.strokeStyle = o(t.borderColor, i), a.lineWidth = t.borderWidth;
            var r = t.xAlign,
                s = t.yAlign,
                d = e.x,
                l = e.y,
                u = n.width,
                _ = n.height,
                m = t.cornerRadius;
            a.beginPath(), a.moveTo(d + m, l), "top" === s && this.drawCaret(e, n), a.lineTo(d + u - m, l), a.quadraticCurveTo(d + u, l, d + u, l + m), "center" === s && "right" === r && this.drawCaret(e, n), a.lineTo(d + u, l + _ - m), a.quadraticCurveTo(d + u, l + _, d + u - m, l + _), "bottom" === s && this.drawCaret(e, n), a.lineTo(d + m, l + _), a.quadraticCurveTo(d, l + _, d, l + _ - m), "center" === s && "left" === r && this.drawCaret(e, n), a.lineTo(d, l + m), a.quadraticCurveTo(d, l, d + m, l), a.closePath(), a.fill(), t.borderWidth > 0 && a.stroke()
        },
        draw: function() {
            var e = this._chart.ctx,
                t = this._view;
            if (0 !== t.opacity) {
                var a = {
                        width: t.width,
                        height: t.height
                    },
                    n = {
                        x: t.x,
                        y: t.y
                    },
                    i = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                    r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                this._options.enabled && r && (this.drawBackground(n, t, e, a, i), n.x += t.xPadding, n.y += t.yPadding, this.drawTitle(n, t, e, i), this.drawBody(n, t, e, i), this.drawFooter(n, t, e, i))
            }
        },
        handleEvent: function(e) {
            var t, a = this,
                n = a._options;
            return a._lastActive = a._lastActive || [], "mouseout" === e.type ? a._active = [] : a._active = a._chart.getElementsAtEventForMode(e, n.mode, n), (t = !r.arrayEquals(a._active, a._lastActive)) && (a._lastActive = a._active, (n.enabled || n.custom) && (a._eventPosition = {
                x: e.x,
                y: e.y
            }, a.update(!0), a.pivot())), t
        }
    })).positioners = s
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            a = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            i = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            r = function(e) {
                return function(t, a, r, s) {
                    var o = n(t),
                        d = i[e][n(t)];
                    return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return a[e]
                })).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            },
            a = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            n = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            i = function(e) {
                return function(t, i, r, s) {
                    var o = a(t),
                        d = n[e][a(t)];
                    return 2 === o && (d = d[i ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: i("s"),
                ss: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            a = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return a[e]
                })).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-ıncı";
                var a = e % 10;
                return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a) {
            var n, i;
            return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = +e, i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
        }
        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            },
            a = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
        e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            },
            a = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[a], e)
        }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a) {
            var n = e + " ";
            switch (a) {
                case "ss":
                    return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return n += 1 === e ? "dan" : "dana";
                case "MM":
                    return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (a = "a"), e + a
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");

        function n(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function i(e, t, a, i) {
            var r = e + " ";
            switch (a) {
                case "s":
                    return t || i ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || i ? r + (n(e) ? "sekundy" : "sekund") : r + "sekundami";
                case "m":
                    return t ? "minuta" : i ? "minutu" : "minutou";
                case "mm":
                    return t || i ? r + (n(e) ? "minuty" : "minut") : r + "minutami";
                case "h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case "hh":
                    return t || i ? r + (n(e) ? "hodiny" : "hodin") : r + "hodinami";
                case "d":
                    return t || i ? "den" : "dnem";
                case "dd":
                    return t || i ? r + (n(e) ? "dny" : "dní") : r + "dny";
                case "M":
                    return t || i ? "měsíc" : "měsícem";
                case "MM":
                    return t || i ? r + (n(e) ? "měsíce" : "měsíců") : r + "měsíci";
                case "y":
                    return t || i ? "rok" : "rokem";
                case "yy":
                    return t || i ? r + (n(e) ? "roky" : "let") : r + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: a,
            monthsParse: function(e, t) {
                var a, n = [];
                for (a = 0; a < 12; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
                return n
            }(t, a),
            shortMonthsParse: function(e) {
                var t, a = [];
                for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                return a
            }(a),
            longMonthsParse: function(e) {
                var t, a = [];
                for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                return a
            }(t),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(e) {
                return "މފ" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var a, n = this._calendarEl[e],
                    i = t && t.hours();
                return ((a = n) instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)), n.replace("{}", i % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "MMMM [de] D [de] YYYY",
                LLL: "MMMM [de] D [de] YYYY h:mm A",
                LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? i[a][2] ? i[a][2] : i[a][1] : n ? i[a][0] : i[a][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            a = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, (function(e) {
                    return a[e]
                })).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

        function n(e, n, i, r) {
            var s = "";
            switch (i) {
                case "s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return r ? "sekunnin" : "sekuntia";
                case "m":
                    return r ? "minuutin" : "minuutti";
                case "mm":
                    s = r ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return r ? "tunnin" : "tunti";
                case "hh":
                    s = r ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return r ? "päivän" : "päivä";
                case "dd":
                    s = r ? "päivän" : "päivää";
                    break;
                case "M":
                    return r ? "kuukauden" : "kuukausi";
                case "MM":
                    s = r ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return r ? "vuoden" : "vuosi";
                case "yy":
                    s = r ? "vuoden" : "vuotta"
            }
            return s = function(e, n) {
                return e < 10 ? n ? a[e] : t[e] : e
            }(e, r) + " " + s
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka horan", "ek hor"],
                hh: [e + " horanim", e + " horam"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            },
            a = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function(e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            a = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a) {
            var n = e + " ";
            switch (a) {
                case "ss":
                    return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return n += 1 === e ? "dan" : "dana";
                case "MM":
                    return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

        function a(e, t, a, n) {
            var i = e;
            switch (a) {
                case "s":
                    return n || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return i + (n || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (n || t ? " perc" : " perce");
                case "mm":
                    return i + (n || t ? " perc" : " perce");
                case "h":
                    return "egy" + (n || t ? " óra" : " órája");
                case "hh":
                    return i + (n || t ? " óra" : " órája");
                case "d":
                    return "egy" + (n || t ? " nap" : " napja");
                case "dd":
                    return i + (n || t ? " nap" : " napja");
                case "M":
                    return "egy" + (n || t ? " hónap" : " hónapja");
                case "MM":
                    return i + (n || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (n || t ? " év" : " éve");
                case "yy":
                    return i + (n || t ? " év" : " éve")
            }
            return ""
        }

        function n(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, a) {
                return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return n.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return n.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function a(e, a, n, i) {
            var r = e + " ";
            switch (n) {
                case "s":
                    return a || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return t(e) ? r + (a || i ? "sekúndur" : "sekúndum") : r + "sekúnda";
                case "m":
                    return a ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? r + (a || i ? "mínútur" : "mínútum") : a ? r + "mínúta" : r + "mínútu";
                case "hh":
                    return t(e) ? r + (a || i ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                case "d":
                    return a ? "dagur" : i ? "dag" : "degi";
                case "dd":
                    return t(e) ? a ? r + "dagar" : r + (i ? "daga" : "dögum") : a ? r + "dagur" : r + (i ? "dag" : "degi");
                case "M":
                    return a ? "mánuður" : i ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? a ? r + "mánuðir" : r + (i ? "mánuði" : "mánuðum") : a ? r + "mánuður" : r + (i ? "mánuð" : "mánuði");
                case "y":
                    return a || i ? "ár" : "ári";
                case "yy":
                    return t(e) ? r + (a || i ? "ár" : "árum") : r + (a || i ? "ár" : "ári")
            }
        }
        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: "klukkustund",
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: function(e) {
                    return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
                },
                lastDay: "[昨日] LT",
                lastWeek: function(e) {
                    return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩",
                0: "០"
            },
            a = {
                "១": "1",
                "២": "2",
                "៣": "3",
                "៤": "4",
                "៥": "5",
                "៦": "6",
                "៧": "7",
                "៨": "8",
                "៩": "9",
                "០": "0"
            };
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function(e) {
                return "ល្ងាច" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function(e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            },
            a = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function(e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function(e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? i[a][0] : i[a][1]
        }

        function a(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return a(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return a(e)
            }
            return a(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };

        function a(e, t, a, n) {
            return t ? i(a)[0] : n ? i(a)[1] : i(a)[2]
        }

        function n(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function i(e) {
            return t[e].split("_")
        }

        function r(e, t, r, s) {
            var o = e + " ";
            return 1 === e ? o + a(0, t, r[0], s) : t ? o + (n(e) ? i(r)[1] : i(r)[0]) : s ? o + i(r)[1] : o + (n(e) ? i(r)[1] : i(r)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: function(e, t, a, n) {
                    return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
                },
                ss: r,
                m: a,
                mm: r,
                h: a,
                hh: r,
                d: a,
                dd: r,
                M: a,
                MM: r,
                y: a,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function a(e, t, a) {
            return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function n(e, n, i) {
            return e + " " + a(t[i], e, n)
        }

        function i(e, n, i) {
            return a(t[i], e, n)
        }
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                },
                ss: n,
                m: i,
                mm: n,
                h: i,
                hh: n,
                d: i,
                dd: n,
                M: i,
                MM: n,
                y: i,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, a, n) {
                var i = t.words[n];
                return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            switch (a) {
                case "s":
                    return t ? "хэдхэн секунд" : "хэдхэн секундын";
                case "ss":
                    return e + (t ? " секунд" : " секундын");
                case "m":
                case "mm":
                    return e + (t ? " минут" : " минутын");
                case "h":
                case "hh":
                    return e + (t ? " цаг" : " цагийн");
                case "d":
                case "dd":
                    return e + (t ? " өдөр" : " өдрийн");
                case "M":
                case "MM":
                    return e + (t ? " сар" : " сарын");
                case "y":
                case "yy":
                    return e + (t ? " жил" : " жилийн");
                default:
                    return e
            }
        }
        e.defineLocale("mn", {
            months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
            monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function(e) {
                return "ҮХ" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " өдөр";
                    default:
                        return e
                }
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            a = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };

        function n(e, t, a, n) {
            var i = "";
            if (t) switch (a) {
                case "s":
                    i = "काही सेकंद";
                    break;
                case "ss":
                    i = "%d सेकंद";
                    break;
                case "m":
                    i = "एक मिनिट";
                    break;
                case "mm":
                    i = "%d मिनिटे";
                    break;
                case "h":
                    i = "एक तास";
                    break;
                case "hh":
                    i = "%d तास";
                    break;
                case "d":
                    i = "एक दिवस";
                    break;
                case "dd":
                    i = "%d दिवस";
                    break;
                case "M":
                    i = "एक महिना";
                    break;
                case "MM":
                    i = "%d महिने";
                    break;
                case "y":
                    i = "एक वर्ष";
                    break;
                case "yy":
                    i = "%d वर्षे"
            } else switch (a) {
                case "s":
                    i = "काही सेकंदां";
                    break;
                case "ss":
                    i = "%d सेकंदां";
                    break;
                case "m":
                    i = "एका मिनिटा";
                    break;
                case "mm":
                    i = "%d मिनिटां";
                    break;
                case "h":
                    i = "एका तासा";
                    break;
                case "hh":
                    i = "%d तासां";
                    break;
                case "d":
                    i = "एका दिवसा";
                    break;
                case "dd":
                    i = "%d दिवसां";
                    break;
                case "M":
                    i = "एका महिन्या";
                    break;
                case "MM":
                    i = "%d महिन्यां";
                    break;
                case "y":
                    i = "एका वर्षा";
                    break;
                case "yy":
                    i = "%d वर्षां"
            }
            return i.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            },
            a = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            a = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            },
            a = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function n(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function i(e, t, a) {
            var i = e + " ";
            switch (a) {
                case "ss":
                    return i + (n(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return i + (n(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return i + (n(e) ? "godziny" : "godzin");
                case "MM":
                    return i + (n(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return i + (n(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, n) {
                return e ? "" === n ? "(" + a[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: i,
                y: "rok",
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a) {
            var n = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "), e + n + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[a]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a) {
            var n, i;
            return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = +e, i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
        }
        var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: t,
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

        function n(e) {
            return e > 1 && e < 5
        }

        function i(e, t, a, i) {
            var r = e + " ";
            switch (a) {
                case "s":
                    return t || i ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || i ? r + (n(e) ? "sekundy" : "sekúnd") : r + "sekundami";
                case "m":
                    return t ? "minúta" : i ? "minútu" : "minútou";
                case "mm":
                    return t || i ? r + (n(e) ? "minúty" : "minút") : r + "minútami";
                case "h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case "hh":
                    return t || i ? r + (n(e) ? "hodiny" : "hodín") : r + "hodinami";
                case "d":
                    return t || i ? "deň" : "dňom";
                case "dd":
                    return t || i ? r + (n(e) ? "dni" : "dní") : r + "dňami";
                case "M":
                    return t || i ? "mesiac" : "mesiacom";
                case "MM":
                    return t || i ? r + (n(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                case "y":
                    return t || i ? "rok" : "rokom";
                case "yy":
                    return t || i ? r + (n(e) ? "roky" : "rokov") : r + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: a,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = e + " ";
            switch (a) {
                case "s":
                    return t || n ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return i += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : e < 5 ? t || n ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return i += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return i += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";
                case "d":
                    return t || n ? "en dan" : "enim dnem";
                case "dd":
                    return i += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";
                case "M":
                    return t || n ? "en mesec" : "enim mesecem";
                case "MM":
                    return i += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";
                case "y":
                    return t || n ? "eno leto" : "enim letom";
                case "yy":
                    return i += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, a, n) {
                var i = t.words[n];
                return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, a, n) {
                var i = t.words[n];
                return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, a) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            },
            a = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) {
                    return a[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, a) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function a(e, a, n, i) {
            var r = function(e) {
                var a = Math.floor(e % 1e3 / 100),
                    n = Math.floor(e % 100 / 10),
                    i = e % 10,
                    r = "";
                return a > 0 && (r += t[a] + "vatlh"), n > 0 && (r += ("" !== r ? " " : "") + t[n] + "maH"), i > 0 && (r += ("" !== r ? " " : "") + t[i]), "" === r ? "pagh" : r
            }(e);
            switch (n) {
                case "ss":
                    return r + " lup";
                case "mm":
                    return r + " tup";
                case "hh":
                    return r + " rep";
                case "dd":
                    return r + " jaj";
                case "MM":
                    return r + " jar";
                case "yy":
                    return r + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: a,
                m: "wa’ tup",
                mm: a,
                h: "wa’ rep",
                hh: a,
                d: "wa’ jaj",
                dd: a,
                M: "wa’ jar",
                MM: a,
                y: "wa’ DIS",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(e, a) {
                switch (a) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'ıncı";
                        var n = e % 10;
                        return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a, n) {
            var i = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return n ? i[a][0] : t ? i[a][0] : i[a][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "يېرىم كېچە" : n < 900 ? "سەھەر" : n < 1130 ? "چۈشتىن بۇرۇن" : n < 1230 ? "چۈش" : n < 1800 ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-كۈنى";
                    case "w":
                    case "W":
                        return e + "-ھەپتە";
                    default:
                        return e
                }
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";

        function t(e, t, a) {
            var n, i;
            return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = +e, i = {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
        }

        function a(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function(e, t) {
                var a = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: a("[Сьогодні "),
                nextDay: a("[Завтра "),
                lastDay: a("[Вчора "),
                nextWeek: a("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return a("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return a("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: t,
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(a(0))
}, function(e, t, a) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(a(0))
}, , function(e, t, a) {
    var n = a(186)();
    n.helpers = a(2), a(190)(n), n.Animation = a(21), n.animationService = a(22), n.defaults = a(3), n.Element = a(4), n.elements = a(6), n.Interaction = a(23), n.layouts = a(9), n.platform = a(24), n.plugins = a(25), n.Scale = a(10), n.scaleService = a(5), n.Ticks = a(11), n.Tooltip = a(26), a(201)(n), a(202)(n), a(203)(n), a(204)(n), a(205)(n), a(206)(n), a(207)(n), a(208)(n), a(210)(n), a(211)(n), a(212)(n), a(213)(n), a(214)(n), a(215)(n), a(216)(n), a(217)(n), a(218)(n), a(219)(n), a(220)(n), a(221)(n), a(222)(n), a(223)(n);
    var i = a(224);
    for (var r in i) i.hasOwnProperty(r) && n.plugins.register(i[r]);
    n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = i.legend._element, n.Title = i.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    e.exports = a(185)
}, function(e, t, a) {
    "use strict";
    a.r(t);
    var n = a(151),
        i = a.n(n);
    $((function() {
        $.ajax({
            type: "GET",
            url: route("admin.sales_analytics.index"),
            success: function(e) {
                var t = {
                        labels: e.labels,
                        sales: [],
                        formatted: [],
                        totalOrders: []
                    },
                    a = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, o = e.data[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                        var d = s.value;
                        t.sales.push(d.total.amount), t.formatted.push(d.total.formatted), t.totalOrders.push(d.total_orders)
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        a || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }! function(e) {
                    new i.a($(".sales-analytics .chart"), {
                        type: "bar",
                        data: {
                            labels: e.labels,
                            datasets: [{
                                data: e.sales,
                                backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 159, 64, 0.5)"]
                            }]
                        },
                        barThickness: 1,
                        options: {
                            maintainAspectRatio: !1,
                            legend: {
                                display: !1
                            },
                            tooltips: {
                                displayColors: !1,
                                callbacks: {
                                    label: function(t) {
                                        return ["".concat(trans("admin::dashboard.sales_analytics.orders"), ": ").concat(e.totalOrders[t.index]), "".concat(trans("admin::dashboard.sales_analytics.sales"), ": ").concat(e.formatted[t.index])]
                                    }
                                }
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: !0
                                    }
                                }]
                            }
                        }
                    })
                }(t)
            }
        })
    }))
}, function(e, t, a) {
    "use strict";
    a(3)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    }), e.exports = function() {
        var e = function(e, t) {
            return this.construct(e, t), this
        };
        return e.Chart = e, e
    }
}, function(e, t, a) {
    "use strict";
    var n = a(14),
        i = {
            linear: function(e) {
                return e
            },
            easeInQuad: function(e) {
                return e * e
            },
            easeOutQuad: function(e) {
                return -e * (e - 2)
            },
            easeInOutQuad: function(e) {
                return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            },
            easeInCubic: function(e) {
                return e * e * e
            },
            easeOutCubic: function(e) {
                return (e -= 1) * e * e + 1
            },
            easeInOutCubic: function(e) {
                return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            },
            easeInQuart: function(e) {
                return e * e * e * e
            },
            easeOutQuart: function(e) {
                return -((e -= 1) * e * e * e - 1)
            },
            easeInOutQuart: function(e) {
                return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            },
            easeInQuint: function(e) {
                return e * e * e * e * e
            },
            easeOutQuint: function(e) {
                return (e -= 1) * e * e * e * e + 1
            },
            easeInOutQuint: function(e) {
                return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            },
            easeInSine: function(e) {
                return 1 - Math.cos(e * (Math.PI / 2))
            },
            easeOutSine: function(e) {
                return Math.sin(e * (Math.PI / 2))
            },
            easeInOutSine: function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            },
            easeInExpo: function(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            },
            easeOutExpo: function(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            },
            easeInOutExpo: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
            },
            easeInCirc: function(e) {
                return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
            },
            easeOutCirc: function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            },
            easeInOutCirc: function(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            },
            easeInElastic: function(e) {
                var t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a))
            },
            easeOutElastic: function(e) {
                var t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1)
            },
            easeInOutElastic: function(e) {
                var t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .45), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * .5 + 1)
            },
            easeInBack: function(e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            },
            easeOutBack: function(e) {
                var t = 1.70158;
                return (e -= 1) * e * ((t + 1) * e + t) + 1
            },
            easeInOutBack: function(e) {
                var t = 1.70158;
                return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
            },
            easeInBounce: function(e) {
                return 1 - i.easeOutBounce(1 - e)
            },
            easeOutBounce: function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            },
            easeInOutBounce: function(e) {
                return e < .5 ? .5 * i.easeInBounce(2 * e) : .5 * i.easeOutBounce(2 * e - 1) + .5
            }
        };
    e.exports = {
        effects: i
    }, n.easingEffects = i
}, function(e, t, a) {
    "use strict";
    var n = a(14);
    t = e.exports = {
        clear: function(e) {
            e.ctx.clearRect(0, 0, e.width, e.height)
        },
        roundedRect: function(e, t, a, n, i, r) {
            if (r) {
                var s = Math.min(r, i / 2 - 1e-7, n / 2 - 1e-7);
                e.moveTo(t + s, a), e.lineTo(t + n - s, a), e.arcTo(t + n, a, t + n, a + s, s), e.lineTo(t + n, a + i - s), e.arcTo(t + n, a + i, t + n - s, a + i, s), e.lineTo(t + s, a + i), e.arcTo(t, a + i, t, a + i - s, s), e.lineTo(t, a + s), e.arcTo(t, a, t + s, a, s), e.closePath(), e.moveTo(t, a)
            } else e.rect(t, a, n, i)
        },
        drawPoint: function(e, t, a, n, i, r) {
            var s, o, d, l, u, _;
            if (r = r || 0, !t || "object" != typeof t || "[object HTMLImageElement]" !== (s = t.toString()) && "[object HTMLCanvasElement]" !== s) {
                if (!(isNaN(a) || a <= 0)) {
                    switch (e.save(), e.translate(n, i), e.rotate(r * Math.PI / 180), e.beginPath(), t) {
                        default: e.arc(0, 0, a, 0, 2 * Math.PI),
                        e.closePath();
                        break;
                        case "triangle":
                                u = (o = 3 * a / Math.sqrt(3)) * Math.sqrt(3) / 2,
                            e.moveTo(-o / 2, u / 3),
                            e.lineTo(o / 2, u / 3),
                            e.lineTo(0, -2 * u / 3),
                            e.closePath();
                            break;
                        case "rect":
                                _ = 1 / Math.SQRT2 * a,
                            e.rect(-_, -_, 2 * _, 2 * _);
                            break;
                        case "rectRounded":
                                var m = a / Math.SQRT2,
                                c = -m,
                                h = -m,
                                f = Math.SQRT2 * a;this.roundedRect(e, c, h, f, f, .425 * a);
                            break;
                        case "rectRot":
                                _ = 1 / Math.SQRT2 * a,
                            e.moveTo(-_, 0),
                            e.lineTo(0, _),
                            e.lineTo(_, 0),
                            e.lineTo(0, -_),
                            e.closePath();
                            break;
                        case "cross":
                                e.moveTo(0, a),
                            e.lineTo(0, -a),
                            e.moveTo(-a, 0),
                            e.lineTo(a, 0);
                            break;
                        case "crossRot":
                                d = Math.cos(Math.PI / 4) * a,
                            l = Math.sin(Math.PI / 4) * a,
                            e.moveTo(-d, -l),
                            e.lineTo(d, l),
                            e.moveTo(-d, l),
                            e.lineTo(d, -l);
                            break;
                        case "star":
                                e.moveTo(0, a),
                            e.lineTo(0, -a),
                            e.moveTo(-a, 0),
                            e.lineTo(a, 0),
                            d = Math.cos(Math.PI / 4) * a,
                            l = Math.sin(Math.PI / 4) * a,
                            e.moveTo(-d, -l),
                            e.lineTo(d, l),
                            e.moveTo(-d, l),
                            e.lineTo(d, -l);
                            break;
                        case "line":
                                e.moveTo(-a, 0),
                            e.lineTo(a, 0);
                            break;
                        case "dash":
                                e.moveTo(0, 0),
                            e.lineTo(a, 0)
                    }
                    e.fill(), e.stroke(), e.restore()
                }
            } else e.drawImage(t, n - t.width / 2, i - t.height / 2, t.width, t.height)
        },
        clipArea: function(e, t) {
            e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
        },
        unclipArea: function(e) {
            e.restore()
        },
        lineTo: function(e, t, a, n) {
            if (a.steppedLine) return "after" === a.steppedLine && !n || "after" !== a.steppedLine && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y), void e.lineTo(a.x, a.y);
            a.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : e.lineTo(a.x, a.y)
        }
    };
    n.clear = t.clear, n.drawRoundedRectangle = function(e) {
        e.beginPath(), t.roundedRect.apply(t, arguments)
    }
}, function(e, t, a) {
    "use strict";
    var n = a(14);
    e.exports = {
        toLineHeight: function(e, t) {
            var a = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!a || "normal" === a[1]) return 1.2 * t;
            switch (e = +a[2], a[3]) {
                case "px":
                    return e;
                case "%":
                    e /= 100
            }
            return t * e
        },
        toPadding: function(e) {
            var t, a, i, r;
            return n.isObject(e) ? (t = +e.top || 0, a = +e.right || 0, i = +e.bottom || 0, r = +e.left || 0) : t = a = i = r = +e || 0, {
                top: t,
                right: a,
                bottom: i,
                left: r,
                height: t + i,
                width: r + a
            }
        },
        resolve: function(e, t, a) {
            var i, r, s;
            for (i = 0, r = e.length; i < r; ++i)
                if (void 0 !== (s = e[i]) && (void 0 !== t && "function" == typeof s && (s = s(t)), void 0 !== a && n.isArray(s) && (s = s[a]), void 0 !== s)) return s
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(20),
        i = a(3),
        r = a(2),
        s = a(5);
    e.exports = function() {
        function e(e, t, a) {
            var n;
            return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e, n
        }

        function t(e) {
            return null != e && "none" !== e
        }

        function a(a, n, i) {
            var s = document.defaultView,
                o = r._getParentNode(a),
                d = s.getComputedStyle(a)[n],
                l = s.getComputedStyle(o)[n],
                u = t(d),
                _ = t(l),
                m = Number.POSITIVE_INFINITY;
            return u || _ ? Math.min(u ? e(d, a, i) : m, _ ? e(l, o, i) : m) : "none"
        }
        r.configMerge = function() {
            return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function(e, t, a, n) {
                    var i = t[e] || {},
                        o = a[e];
                    "scales" === e ? t[e] = r.scaleMerge(i, o) : "scale" === e ? t[e] = r.merge(i, [s.getScaleDefaults(o.type), o]) : r._merger(e, t, a, n)
                }
            })
        }, r.scaleMerge = function() {
            return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function(e, t, a, n) {
                    if ("xAxes" === e || "yAxes" === e) {
                        var i, o, d, l = a[e].length;
                        for (t[e] || (t[e] = []), i = 0; i < l; ++i) d = a[e][i], o = r.valueOrDefault(d.type, "xAxes" === e ? "category" : "linear"), i >= t[e].length && t[e].push({}), !t[e][i].type || d.type && d.type !== t[e][i].type ? r.merge(t[e][i], [s.getScaleDefaults(o), d]) : r.merge(t[e][i], d)
                    } else r._merger(e, t, a, n)
                }
            })
        }, r.where = function(e, t) {
            if (r.isArray(e) && Array.prototype.filter) return e.filter(t);
            var a = [];
            return r.each(e, (function(e) {
                t(e) && a.push(e)
            })), a
        }, r.findIndex = Array.prototype.findIndex ? function(e, t, a) {
            return e.findIndex(t, a)
        } : function(e, t, a) {
            a = void 0 === a ? e : a;
            for (var n = 0, i = e.length; n < i; ++n)
                if (t.call(a, e[n], n, e)) return n;
            return -1
        }, r.findNextWhere = function(e, t, a) {
            r.isNullOrUndef(a) && (a = -1);
            for (var n = a + 1; n < e.length; n++) {
                var i = e[n];
                if (t(i)) return i
            }
        }, r.findPreviousWhere = function(e, t, a) {
            r.isNullOrUndef(a) && (a = e.length);
            for (var n = a - 1; n >= 0; n--) {
                var i = e[n];
                if (t(i)) return i
            }
        }, r.isNumber = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, r.almostEquals = function(e, t, a) {
            return Math.abs(e - t) < a
        }, r.almostWhole = function(e, t) {
            var a = Math.round(e);
            return a - t < e && a + t > e
        }, r.max = function(e) {
            return e.reduce((function(e, t) {
                return isNaN(t) ? e : Math.max(e, t)
            }), Number.NEGATIVE_INFINITY)
        }, r.min = function(e) {
            return e.reduce((function(e, t) {
                return isNaN(t) ? e : Math.min(e, t)
            }), Number.POSITIVE_INFINITY)
        }, r.sign = Math.sign ? function(e) {
            return Math.sign(e)
        } : function(e) {
            return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
        }, r.log10 = Math.log10 ? function(e) {
            return Math.log10(e)
        } : function(e) {
            var t = Math.log(e) * Math.LOG10E,
                a = Math.round(t);
            return e === Math.pow(10, a) ? a : t
        }, r.toRadians = function(e) {
            return e * (Math.PI / 180)
        }, r.toDegrees = function(e) {
            return e * (180 / Math.PI)
        }, r.getAngleFromPoint = function(e, t) {
            var a = t.x - e.x,
                n = t.y - e.y,
                i = Math.sqrt(a * a + n * n),
                r = Math.atan2(n, a);
            return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                angle: r,
                distance: i
            }
        }, r.distanceBetweenPoints = function(e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }, r.aliasPixel = function(e) {
            return e % 2 == 0 ? 0 : .5
        }, r.splineCurve = function(e, t, a, n) {
            var i = e.skip ? t : e,
                r = t,
                s = a.skip ? t : a,
                o = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2)),
                d = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                l = o / (o + d),
                u = d / (o + d),
                _ = n * (l = isNaN(l) ? 0 : l),
                m = n * (u = isNaN(u) ? 0 : u);
            return {
                previous: {
                    x: r.x - _ * (s.x - i.x),
                    y: r.y - _ * (s.y - i.y)
                },
                next: {
                    x: r.x + m * (s.x - i.x),
                    y: r.y + m * (s.y - i.y)
                }
            }
        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(e) {
            var t, a, n, i, s, o, d, l, u, _ = (e || []).map((function(e) {
                    return {
                        model: e._model,
                        deltaK: 0,
                        mK: 0
                    }
                })),
                m = _.length;
            for (t = 0; t < m; ++t)
                if (!(n = _[t]).model.skip) {
                    if (a = t > 0 ? _[t - 1] : null, (i = t < m - 1 ? _[t + 1] : null) && !i.model.skip) {
                        var c = i.model.x - n.model.x;
                        n.deltaK = 0 !== c ? (i.model.y - n.model.y) / c : 0
                    }!a || a.model.skip ? n.mK = n.deltaK : !i || i.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
                }
            for (t = 0; t < m - 1; ++t) n = _[t], i = _[t + 1], n.model.skip || i.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = i.mK = 0 : (s = n.mK / n.deltaK, o = i.mK / n.deltaK, (l = Math.pow(s, 2) + Math.pow(o, 2)) <= 9 || (d = 3 / Math.sqrt(l), n.mK = s * d * n.deltaK, i.mK = o * d * n.deltaK)));
            for (t = 0; t < m; ++t)(n = _[t]).model.skip || (a = t > 0 ? _[t - 1] : null, i = t < m - 1 ? _[t + 1] : null, a && !a.model.skip && (u = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), i && !i.model.skip && (u = (i.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
        }, r.nextItem = function(e, t, a) {
            return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
        }, r.previousItem = function(e, t, a) {
            return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
        }, r.niceNum = function(e, t) {
            var a = Math.floor(r.log10(e)),
                n = e / Math.pow(10, a);
            return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, a)
        }, r.requestAnimFrame = "undefined" == typeof window ? function(e) {
            e()
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            return window.setTimeout(e, 1e3 / 60)
        }, r.getRelativePosition = function(e, t) {
            var a, n, i = e.originalEvent || e,
                s = e.target || e.srcElement,
                o = s.getBoundingClientRect(),
                d = i.touches;
            d && d.length > 0 ? (a = d[0].clientX, n = d[0].clientY) : (a = i.clientX, n = i.clientY);
            var l = parseFloat(r.getStyle(s, "padding-left")),
                u = parseFloat(r.getStyle(s, "padding-top")),
                _ = parseFloat(r.getStyle(s, "padding-right")),
                m = parseFloat(r.getStyle(s, "padding-bottom")),
                c = o.right - o.left - l - _,
                h = o.bottom - o.top - u - m;
            return {
                x: a = Math.round((a - o.left - l) / c * s.width / t.currentDevicePixelRatio),
                y: n = Math.round((n - o.top - u) / h * s.height / t.currentDevicePixelRatio)
            }
        }, r.getConstraintWidth = function(e) {
            return a(e, "max-width", "clientWidth")
        }, r.getConstraintHeight = function(e) {
            return a(e, "max-height", "clientHeight")
        }, r._calculatePadding = function(e, t, a) {
            return (t = r.getStyle(e, t)).indexOf("%") > -1 ? a / parseInt(t, 10) : parseInt(t, 10)
        }, r._getParentNode = function(e) {
            var t = e.parentNode;
            return t && t.host && (t = t.host), t
        }, r.getMaximumWidth = function(e) {
            var t = r._getParentNode(e);
            if (!t) return e.clientWidth;
            var a = t.clientWidth,
                n = a - r._calculatePadding(t, "padding-left", a) - r._calculatePadding(t, "padding-right", a),
                i = r.getConstraintWidth(e);
            return isNaN(i) ? n : Math.min(n, i)
        }, r.getMaximumHeight = function(e) {
            var t = r._getParentNode(e);
            if (!t) return e.clientHeight;
            var a = t.clientHeight,
                n = a - r._calculatePadding(t, "padding-top", a) - r._calculatePadding(t, "padding-bottom", a),
                i = r.getConstraintHeight(e);
            return isNaN(i) ? n : Math.min(n, i)
        }, r.getStyle = function(e, t) {
            return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
        }, r.retinaScale = function(e, t) {
            var a = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
            if (1 !== a) {
                var n = e.canvas,
                    i = e.height,
                    r = e.width;
                n.height = i * a, n.width = r * a, e.ctx.scale(a, a), n.style.height || n.style.width || (n.style.height = i + "px", n.style.width = r + "px")
            }
        }, r.fontString = function(e, t, a) {
            return t + " " + e + "px " + a
        }, r.longestText = function(e, t, a, n) {
            var i = (n = n || {}).data = n.data || {},
                s = n.garbageCollect = n.garbageCollect || [];
            n.font !== t && (i = n.data = {}, s = n.garbageCollect = [], n.font = t), e.font = t;
            var o = 0;
            r.each(a, (function(t) {
                null != t && !0 !== r.isArray(t) ? o = r.measureText(e, i, s, o, t) : r.isArray(t) && r.each(t, (function(t) {
                    null == t || r.isArray(t) || (o = r.measureText(e, i, s, o, t))
                }))
            }));
            var d = s.length / 2;
            if (d > a.length) {
                for (var l = 0; l < d; l++) delete i[s[l]];
                s.splice(0, d)
            }
            return o
        }, r.measureText = function(e, t, a, n, i) {
            var r = t[i];
            return r || (r = t[i] = e.measureText(i).width, a.push(i)), r > n && (n = r), n
        }, r.numberOfLabelLines = function(e) {
            var t = 1;
            return r.each(e, (function(e) {
                r.isArray(e) && e.length > t && (t = e.length)
            })), t
        }, r.color = n ? function(e) {
            return e instanceof CanvasGradient && (e = i.global.defaultColor), n(e)
        } : function(e) {
            return console.error("Color.js not found!"), e
        }, r.getHoverColor = function(e) {
            return e instanceof CanvasPattern ? e : r.color(e).saturate(.5).darken(.1).rgbString()
        }
    }
}, function(e, t, a) {
    var n = a(192),
        i = function() {
            return new l
        };
    for (var r in n) {
        i[r + "Raw"] = function(e) {
            return function(t) {
                return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), n[e](t)
            }
        }(r);
        var s = /(\w+)2(\w+)/.exec(r),
            o = s[1],
            d = s[2];
        (i[o] = i[o] || {})[d] = i[r] = function(e) {
            return function(t) {
                "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                var a = n[e](t);
                if ("string" == typeof a || void 0 === a) return a;
                for (var i = 0; i < a.length; i++) a[i] = Math.round(a[i]);
                return a
            }
        }(r)
    }
    var l = function() {
        this.convs = {}
    };
    l.prototype.routeSpace = function(e, t) {
        var a = t[0];
        return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a))
    }, l.prototype.setValues = function(e, t) {
        return this.space = e, this.convs = {}, this.convs[e] = t, this
    }, l.prototype.getValues = function(e) {
        var t = this.convs[e];
        if (!t) {
            var a = this.space,
                n = this.convs[a];
            t = i[a][e](n), this.convs[e] = t
        }
        return t
    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach((function(e) {
        l.prototype[e] = function(t) {
            return this.routeSpace(e, arguments)
        }
    })), e.exports = i
}, function(e, t) {
    function a(e) {
        var t, a, n = e[0] / 255,
            i = e[1] / 255,
            r = e[2] / 255,
            s = Math.min(n, i, r),
            o = Math.max(n, i, r),
            d = o - s;
        return o == s ? t = 0 : n == o ? t = (i - r) / d : i == o ? t = 2 + (r - n) / d : r == o && (t = 4 + (n - i) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = (s + o) / 2, [t, 100 * (o == s ? 0 : a <= .5 ? d / (o + s) : d / (2 - o - s)), 100 * a]
    }

    function n(e) {
        var t, a, n = e[0],
            i = e[1],
            r = e[2],
            s = Math.min(n, i, r),
            o = Math.max(n, i, r),
            d = o - s;
        return a = 0 == o ? 0 : d / o * 1e3 / 10, o == s ? t = 0 : n == o ? t = (i - r) / d : i == o ? t = 2 + (r - n) / d : r == o && (t = 4 + (n - i) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, a, o / 255 * 1e3 / 10]
    }

    function i(e) {
        var t = e[0],
            n = e[1],
            i = e[2];
        return [a(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(t, Math.max(n, i)))]
    }

    function s(e) {
        var t, a = e[0] / 255,
            n = e[1] / 255,
            i = e[2] / 255;
        return [100 * ((1 - a - (t = Math.min(1 - a, 1 - n, 1 - i))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
    }

    function o(e) {
        return k[JSON.stringify(e)]
    }

    function d(e) {
        var t = e[0] / 255,
            a = e[1] / 255,
            n = e[2] / 255;
        return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
    }

    function l(e) {
        var t = d(e),
            a = t[0],
            n = t[1],
            i = t[2];
        return n /= 100, i /= 108.883, a = (a /= 95.047) > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (a - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
    }

    function u(e) {
        var t, a, n, i, r, s = e[0] / 360,
            o = e[1] / 100,
            d = e[2] / 100;
        if (0 == o) return [r = 255 * d, r, r];
        t = 2 * d - (a = d < .5 ? d * (1 + o) : d + o - d * o), i = [0, 0, 0];
        for (var l = 0; l < 3; l++)(n = s + 1 / 3 * -(l - 1)) < 0 && n++, n > 1 && n--, r = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, i[l] = 255 * r;
        return i
    }

    function _(e) {
        var t = e[0] / 60,
            a = e[1] / 100,
            n = e[2] / 100,
            i = Math.floor(t) % 6,
            r = t - Math.floor(t),
            s = 255 * n * (1 - a),
            o = 255 * n * (1 - a * r),
            d = 255 * n * (1 - a * (1 - r));
        n *= 255;
        switch (i) {
            case 0:
                return [n, d, s];
            case 1:
                return [o, n, s];
            case 2:
                return [s, n, d];
            case 3:
                return [s, o, n];
            case 4:
                return [d, s, n];
            case 5:
                return [n, s, o]
        }
    }

    function m(e) {
        var t, a, n, i, s = e[0] / 360,
            o = e[1] / 100,
            d = e[2] / 100,
            l = o + d;
        switch (l > 1 && (o /= l, d /= l), n = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (n = 1 - n), i = o + n * ((a = 1 - d) - o), t) {
            default:
                case 6:
                case 0:
                r = a,
            g = i,
            b = o;
            break;
            case 1:
                    r = i,
                g = a,
                b = o;
                break;
            case 2:
                    r = o,
                g = a,
                b = i;
                break;
            case 3:
                    r = o,
                g = i,
                b = a;
                break;
            case 4:
                    r = i,
                g = o,
                b = a;
                break;
            case 5:
                    r = a,
                g = o,
                b = i
        }
        return [255 * r, 255 * g, 255 * b]
    }

    function c(e) {
        var t = e[0] / 100,
            a = e[1] / 100,
            n = e[2] / 100,
            i = e[3] / 100;
        return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, a * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))]
    }

    function h(e) {
        var t, a, n, i = e[0] / 100,
            r = e[1] / 100,
            s = e[2] / 100;
        return a = -.9689 * i + 1.8758 * r + .0415 * s, n = .0557 * i + -.204 * r + 1.057 * s, t = (t = 3.2406 * i + -1.5372 * r + -.4986 * s) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (a = Math.min(Math.max(0, a), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
    }

    function f(e) {
        var t = e[0],
            a = e[1],
            n = e[2];
        return a /= 100, n /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (t - a), 200 * (a - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
    }

    function M(e) {
        var t, a, n, i, r = e[0],
            s = e[1],
            o = e[2];
        return r <= 8 ? i = (a = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (a = 100 * Math.pow((r + 16) / 116, 3), i = Math.pow(a / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (s / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(s / 500 + i, 3), a, n = n / 108.883 <= .008859 ? n = 108.883 * (i - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - o / 200, 3)]
    }

    function p(e) {
        var t, a = e[0],
            n = e[1],
            i = e[2];
        return (t = 360 * Math.atan2(i, n) / 2 / Math.PI) < 0 && (t += 360), [a, Math.sqrt(n * n + i * i), t]
    }

    function y(e) {
        return h(M(e))
    }

    function L(e) {
        var t, a = e[0],
            n = e[1];
        return t = e[2] / 360 * 2 * Math.PI, [a, n * Math.cos(t), n * Math.sin(t)]
    }

    function Y(e) {
        return v[e]
    }
    e.exports = {
        rgb2hsl: a,
        rgb2hsv: n,
        rgb2hwb: i,
        rgb2cmyk: s,
        rgb2keyword: o,
        rgb2xyz: d,
        rgb2lab: l,
        rgb2lch: function(e) {
            return p(l(e))
        },
        hsl2rgb: u,
        hsl2hsv: function(e) {
            var t = e[0],
                a = e[1] / 100,
                n = e[2] / 100;
            if (0 === n) return [0, 0, 0];
            return [t, 100 * (2 * (a *= (n *= 2) <= 1 ? n : 2 - n) / (n + a)), 100 * ((n + a) / 2)]
        },
        hsl2hwb: function(e) {
            return i(u(e))
        },
        hsl2cmyk: function(e) {
            return s(u(e))
        },
        hsl2keyword: function(e) {
            return o(u(e))
        },
        hsv2rgb: _,
        hsv2hsl: function(e) {
            var t, a, n = e[0],
                i = e[1] / 100,
                r = e[2] / 100;
            return t = i * r, [n, 100 * (t = (t /= (a = (2 - i) * r) <= 1 ? a : 2 - a) || 0), 100 * (a /= 2)]
        },
        hsv2hwb: function(e) {
            return i(_(e))
        },
        hsv2cmyk: function(e) {
            return s(_(e))
        },
        hsv2keyword: function(e) {
            return o(_(e))
        },
        hwb2rgb: m,
        hwb2hsl: function(e) {
            return a(m(e))
        },
        hwb2hsv: function(e) {
            return n(m(e))
        },
        hwb2cmyk: function(e) {
            return s(m(e))
        },
        hwb2keyword: function(e) {
            return o(m(e))
        },
        cmyk2rgb: c,
        cmyk2hsl: function(e) {
            return a(c(e))
        },
        cmyk2hsv: function(e) {
            return n(c(e))
        },
        cmyk2hwb: function(e) {
            return i(c(e))
        },
        cmyk2keyword: function(e) {
            return o(c(e))
        },
        keyword2rgb: Y,
        keyword2hsl: function(e) {
            return a(Y(e))
        },
        keyword2hsv: function(e) {
            return n(Y(e))
        },
        keyword2hwb: function(e) {
            return i(Y(e))
        },
        keyword2cmyk: function(e) {
            return s(Y(e))
        },
        keyword2lab: function(e) {
            return l(Y(e))
        },
        keyword2xyz: function(e) {
            return d(Y(e))
        },
        xyz2rgb: h,
        xyz2lab: f,
        xyz2lch: function(e) {
            return p(f(e))
        },
        lab2xyz: M,
        lab2rgb: y,
        lab2lch: p,
        lch2lab: L,
        lch2xyz: function(e) {
            return M(L(e))
        },
        lch2rgb: function(e) {
            return y(L(e))
        }
    };
    var v = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        k = {};
    for (var D in v) k[JSON.stringify(v[D])] = D
}, function(e, t, a) {
    var n = a(194);

    function i(e) {
        if (e) {
            var t = [0, 0, 0],
                a = 1,
                i = e.match(/^#([a-fA-F0-9]{3})$/i);
            if (i) {
                i = i[1];
                for (var r = 0; r < t.length; r++) t[r] = parseInt(i[r] + i[r], 16)
            } else if (i = e.match(/^#([a-fA-F0-9]{6})$/i)) {
                i = i[1];
                for (r = 0; r < t.length; r++) t[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16)
            } else if (i = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < t.length; r++) t[r] = parseInt(i[r + 1]);
                a = parseFloat(i[4])
            } else if (i = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                a = parseFloat(i[4])
            } else if (i = e.match(/(\w+)/)) {
                if ("transparent" == i[1]) return [0, 0, 0, 0];
                if (!(t = n[i[1]])) return
            }
            for (r = 0; r < t.length; r++) t[r] = u(t[r], 0, 255);
            return a = a || 0 == a ? u(a, 0, 1) : 1, t[3] = a, t
        }
    }

    function r(e) {
        if (e) {
            var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (t) {
                var a = parseFloat(t[4]);
                return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
            }
        }
    }

    function s(e) {
        if (e) {
            var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (t) {
                var a = parseFloat(t[4]);
                return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
            }
        }
    }

    function o(e, t) {
        return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
    }

    function d(e, t) {
        return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
    }

    function l(e, t) {
        return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
    }

    function u(e, t, a) {
        return Math.min(Math.max(t, e), a)
    }

    function _(e) {
        var t = e.toString(16).toUpperCase();
        return t.length < 2 ? "0" + t : t
    }
    e.exports = {
        getRgba: i,
        getHsla: r,
        getRgb: function(e) {
            var t = i(e);
            return t && t.slice(0, 3)
        },
        getHsl: function(e) {
            var t = r(e);
            return t && t.slice(0, 3)
        },
        getHwb: s,
        getAlpha: function(e) {
            var t = i(e);
            if (t) return t[3];
            if (t = r(e)) return t[3];
            if (t = s(e)) return t[3]
        },
        hexString: function(e) {
            return "#" + _(e[0]) + _(e[1]) + _(e[2])
        },
        rgbString: function(e, t) {
            if (t < 1 || e[3] && e[3] < 1) return o(e, t);
            return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
        },
        rgbaString: o,
        percentString: function(e, t) {
            if (t < 1 || e[3] && e[3] < 1) return d(e, t);
            var a = Math.round(e[0] / 255 * 100),
                n = Math.round(e[1] / 255 * 100),
                i = Math.round(e[2] / 255 * 100);
            return "rgb(" + a + "%, " + n + "%, " + i + "%)"
        },
        percentaString: d,
        hslString: function(e, t) {
            if (t < 1 || e[3] && e[3] < 1) return l(e, t);
            return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
        },
        hslaString: l,
        hwbString: function(e, t) {
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1);
            return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
        },
        keyword: function(e) {
            return m[e.slice(0, 3)]
        }
    };
    var m = {};
    for (var c in n) m[n[c]] = c
}, function(e, t, a) {
    "use strict";
    e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4),
        r = a(2);
    n._set("global", {
        elements: {
            arc: {
                backgroundColor: n.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2
            }
        }
    }), e.exports = i.extend({
        inLabelRange: function(e) {
            var t = this._view;
            return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
        },
        inRange: function(e, t) {
            var a = this._view;
            if (a) {
                for (var n = r.getAngleFromPoint(a, {
                        x: e,
                        y: t
                    }), i = n.angle, s = n.distance, o = a.startAngle, d = a.endAngle; d < o;) d += 2 * Math.PI;
                for (; i > d;) i -= 2 * Math.PI;
                for (; i < o;) i += 2 * Math.PI;
                var l = i >= o && i <= d,
                    u = s >= a.innerRadius && s <= a.outerRadius;
                return l && u
            }
            return !1
        },
        getCenterPoint: function() {
            var e = this._view,
                t = (e.startAngle + e.endAngle) / 2,
                a = (e.innerRadius + e.outerRadius) / 2;
            return {
                x: e.x + Math.cos(t) * a,
                y: e.y + Math.sin(t) * a
            }
        },
        getArea: function() {
            var e = this._view;
            return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
        },
        tooltipPosition: function() {
            var e = this._view,
                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
            return {
                x: e.x + Math.cos(t) * a,
                y: e.y + Math.sin(t) * a
            }
        },
        draw: function() {
            var e = this._chart.ctx,
                t = this._view,
                a = t.startAngle,
                n = t.endAngle;
            e.beginPath(), e.arc(t.x, t.y, t.outerRadius, a, n), e.arc(t.x, t.y, t.innerRadius, n, a, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
        }
    })
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4),
        r = a(2),
        s = n.global;
    n._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: s.defaultColor,
                borderWidth: 3,
                borderColor: s.defaultColor,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    }), e.exports = i.extend({
        draw: function() {
            var e, t, a, n, i = this._view,
                o = this._chart.ctx,
                d = i.spanGaps,
                l = this._children.slice(),
                u = s.elements.line,
                _ = -1;
            for (this._loop && l.length && l.push(l[0]), o.save(), o.lineCap = i.borderCapStyle || u.borderCapStyle, o.setLineDash && o.setLineDash(i.borderDash || u.borderDash), o.lineDashOffset = i.borderDashOffset || u.borderDashOffset, o.lineJoin = i.borderJoinStyle || u.borderJoinStyle, o.lineWidth = i.borderWidth || u.borderWidth, o.strokeStyle = i.borderColor || s.defaultColor, o.beginPath(), _ = -1, e = 0; e < l.length; ++e) t = l[e], a = r.previousItem(l, e), n = t._view, 0 === e ? n.skip || (o.moveTo(n.x, n.y), _ = e) : (a = -1 === _ ? a : l[_], n.skip || (_ !== e - 1 && !d || -1 === _ ? o.moveTo(n.x, n.y) : r.canvas.lineTo(o, a._view, t._view), _ = e));
            o.stroke(), o.restore()
        }
    })
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4),
        r = a(2),
        s = n.global.defaultColor;

    function o(e) {
        var t = this._view;
        return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
    }
    n._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: s,
                borderColor: s,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    }), e.exports = i.extend({
        inRange: function(e, t) {
            var a = this._view;
            return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
        },
        inLabelRange: o,
        inXRange: o,
        inYRange: function(e) {
            var t = this._view;
            return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
        },
        getCenterPoint: function() {
            var e = this._view;
            return {
                x: e.x,
                y: e.y
            }
        },
        getArea: function() {
            return Math.PI * Math.pow(this._view.radius, 2)
        },
        tooltipPosition: function() {
            var e = this._view;
            return {
                x: e.x,
                y: e.y,
                padding: e.radius + e.borderWidth
            }
        },
        draw: function(e) {
            var t = this._view,
                a = this._model,
                i = this._chart.ctx,
                o = t.pointStyle,
                d = t.rotation,
                l = t.radius,
                u = t.x,
                _ = t.y;
            t.skip || (void 0 === e || a.x >= e.left && 1.01 * e.right >= a.x && a.y >= e.top && 1.01 * e.bottom >= a.y) && (i.strokeStyle = t.borderColor || s, i.lineWidth = r.valueOrDefault(t.borderWidth, n.global.elements.point.borderWidth), i.fillStyle = t.backgroundColor || s, r.canvas.drawPoint(i, o, l, u, _, d))
        }
    })
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4);

    function r(e) {
        return void 0 !== e._view.width
    }

    function s(e) {
        var t, a, n, i, s = e._view;
        if (r(e)) {
            var o = s.width / 2;
            t = s.x - o, a = s.x + o, n = Math.min(s.y, s.base), i = Math.max(s.y, s.base)
        } else {
            var d = s.height / 2;
            t = Math.min(s.x, s.base), a = Math.max(s.x, s.base), n = s.y - d, i = s.y + d
        }
        return {
            left: t,
            top: n,
            right: a,
            bottom: i
        }
    }
    n._set("global", {
        elements: {
            rectangle: {
                backgroundColor: n.global.defaultColor,
                borderColor: n.global.defaultColor,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    }), e.exports = i.extend({
        draw: function() {
            var e, t, a, n, i, r, s, o = this._chart.ctx,
                d = this._view,
                l = d.borderWidth;
            if (d.horizontal ? (e = d.base, t = d.x, a = d.y - d.height / 2, n = d.y + d.height / 2, i = t > e ? 1 : -1, r = 1, s = d.borderSkipped || "left") : (e = d.x - d.width / 2, t = d.x + d.width / 2, a = d.y, i = 1, r = (n = d.base) > a ? 1 : -1, s = d.borderSkipped || "bottom"), l) {
                var u = Math.min(Math.abs(e - t), Math.abs(a - n)),
                    _ = (l = l > u ? u : l) / 2,
                    m = e + ("left" !== s ? _ * i : 0),
                    c = t + ("right" !== s ? -_ * i : 0),
                    h = a + ("top" !== s ? _ * r : 0),
                    f = n + ("bottom" !== s ? -_ * r : 0);
                m !== c && (a = h, n = f), h !== f && (e = m, t = c)
            }
            o.beginPath(), o.fillStyle = d.backgroundColor, o.strokeStyle = d.borderColor, o.lineWidth = l;
            var M = [
                    [e, n],
                    [e, a],
                    [t, a],
                    [t, n]
                ],
                p = ["bottom", "left", "top", "right"].indexOf(s, 0);

            function y(e) {
                return M[(p + e) % 4]
            } - 1 === p && (p = 0);
            var g = y(0);
            o.moveTo(g[0], g[1]);
            for (var L = 1; L < 4; L++) g = y(L), o.lineTo(g[0], g[1]);
            o.fill(), l && o.stroke()
        },
        height: function() {
            var e = this._view;
            return e.base - e.y
        },
        inRange: function(e, t) {
            var a = !1;
            if (this._view) {
                var n = s(this);
                a = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
            }
            return a
        },
        inLabelRange: function(e, t) {
            if (!this._view) return !1;
            var a = s(this);
            return r(this) ? e >= a.left && e <= a.right : t >= a.top && t <= a.bottom
        },
        inXRange: function(e) {
            var t = s(this);
            return e >= t.left && e <= t.right
        },
        inYRange: function(e) {
            var t = s(this);
            return e >= t.top && e <= t.bottom
        },
        getCenterPoint: function() {
            var e, t, a = this._view;
            return r(this) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), {
                x: e,
                y: t
            }
        },
        getArea: function() {
            var e = this._view;
            return e.width * Math.abs(e.y - e.base)
        },
        tooltipPosition: function() {
            var e = this._view;
            return {
                x: e.x,
                y: e.y
            }
        }
    })
}, function(e, t) {
    e.exports = {
        acquireContext: function(e) {
            return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(2),
        i = ["animationstart", "webkitAnimationStart"],
        r = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function s(e, t) {
        var a = n.getStyle(e, t),
            i = a && a.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0
    }
    var o = !! function() {
        var e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            });
            window.addEventListener("e", null, t)
        } catch (e) {}
        return e
    }() && {
        passive: !0
    };

    function d(e, t, a) {
        e.addEventListener(t, a, o)
    }

    function l(e, t, a) {
        e.removeEventListener(t, a, o)
    }

    function u(e, t, a, n, i) {
        return {
            type: e,
            chart: t,
            native: i || null,
            x: void 0 !== a ? a : null,
            y: void 0 !== n ? n : null
        }
    }

    function _(e, t, a) {
        var r, s, o, l, _ = e.$chartjs || (e.$chartjs = {}),
            m = _.resizer = function(e) {
                var t = document.createElement("div"),
                    a = "chartjs-size-monitor",
                    n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                t.style.cssText = n, t.className = a, t.innerHTML = '<div class="' + a + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + a + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                var i = t.childNodes[0],
                    r = t.childNodes[1];
                t._reset = function() {
                    i.scrollLeft = 1e6, i.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
                };
                var s = function() {
                    t._reset(), e()
                };
                return d(i, "scroll", s.bind(i, "expand")), d(r, "scroll", s.bind(r, "shrink")), t
            }((r = function() {
                if (_.resizer) return t(u("resize", a))
            }, o = !1, l = [], function() {
                l = Array.prototype.slice.call(arguments), s = s || this, o || (o = !0, n.requestAnimFrame.call(window, (function() {
                    o = !1, r.apply(s, l)
                })))
            }));
        ! function(e, t) {
            var a = e.$chartjs || (e.$chartjs = {}),
                r = a.renderProxy = function(e) {
                    "chartjs-render-animation" === e.animationName && t()
                };
            n.each(i, (function(t) {
                d(e, t, r)
            })), a.reflow = !!e.offsetParent, e.classList.add("chartjs-render-monitor")
        }(e, (function() {
            if (_.resizer) {
                var t = e.parentNode;
                t && t !== m.parentNode && t.insertBefore(m, t.firstChild), m._reset()
            }
        }))
    }

    function m(e) {
        var t = e.$chartjs || {},
            a = t.resizer;
        delete t.resizer,
            function(e) {
                var t = e.$chartjs || {},
                    a = t.renderProxy;
                a && (n.each(i, (function(t) {
                    l(e, t, a)
                })), delete t.renderProxy), e.classList.remove("chartjs-render-monitor")
            }(e), a && a.parentNode && a.parentNode.removeChild(a)
    }
    e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function() {
            var e, t, a, n = "from{opacity:0.99}to{opacity:1}";
            t = "@-webkit-keyframes chartjs-render-animation{" + n + "}@keyframes chartjs-render-animation{" + n + "}.chartjs-render-monitor{-webkit-animation:chartjs-render-animation 0.001s;animation:chartjs-render-animation 0.001s;}", a = (e = this)._style || document.createElement("style"), e._style || (e._style = a, t = "/* Chart.js */\n" + t, a.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(a)), a.appendChild(document.createTextNode(t))
        },
        acquireContext: function(e, t) {
            "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
            var a = e && e.getContext && e.getContext("2d");
            return a && a.canvas === e ? (function(e, t) {
                var a = e.style,
                    n = e.getAttribute("height"),
                    i = e.getAttribute("width");
                if (e.$chartjs = {
                        initial: {
                            height: n,
                            width: i,
                            style: {
                                display: a.display,
                                height: a.height,
                                width: a.width
                            }
                        }
                    }, a.display = a.display || "block", null === i || "" === i) {
                    var r = s(e, "width");
                    void 0 !== r && (e.width = r)
                }
                if (null === n || "" === n)
                    if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                    else {
                        var o = s(e, "height");
                        void 0 !== r && (e.height = o)
                    }
            }(e, t), a) : null
        },
        releaseContext: function(e) {
            var t = e.canvas;
            if (t.$chartjs) {
                var a = t.$chartjs.initial;
                ["height", "width"].forEach((function(e) {
                    var i = a[e];
                    n.isNullOrUndef(i) ? t.removeAttribute(e) : t.setAttribute(e, i)
                })), n.each(a.style || {}, (function(e, a) {
                    t.style[a] = e
                })), t.width = t.width, delete t.$chartjs
            }
        },
        addEventListener: function(e, t, a) {
            var i = e.canvas;
            if ("resize" !== t) {
                var s = a.$chartjs || (a.$chartjs = {});
                d(i, t, (s.proxies || (s.proxies = {}))[e.id + "_" + t] = function(t) {
                    a(function(e, t) {
                        var a = r[e.type] || e.type,
                            i = n.getRelativePosition(e, t);
                        return u(a, t, i.x, i.y, e)
                    }(t, e))
                })
            } else _(i, a, e)
        },
        removeEventListener: function(e, t, a) {
            var n = e.canvas;
            if ("resize" !== t) {
                var i = ((a.$chartjs || {}).proxies || {})[e.id + "_" + t];
                i && l(n, t, i)
            } else m(n)
        }
    }, n.addEvent = d, n.removeEvent = l
}, function(e, t, a) {
    "use strict";
    var n = a(21),
        i = a(22),
        r = a(3),
        s = a(2),
        o = a(23),
        d = a(9),
        l = a(24),
        u = a(25),
        _ = a(5),
        m = a(26);
    e.exports = function(e) {
        function t(t) {
            var a = t.options;
            s.each(t.scales, (function(e) {
                d.removeBox(t, e)
            })), a = s.configMerge(e.defaults.global, e.defaults[t.config.type], a), t.options = t.config.options = a, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = a.tooltips, t.tooltip.initialize()
        }

        function a(e) {
            return "top" === e || "bottom" === e
        }
        e.types = {}, e.instances = {}, e.controllers = {}, s.extend(e.prototype, {
            construct: function(t, a) {
                var n = this;
                a = function(e) {
                    var t = (e = e || {}).data = e.data || {};
                    return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = s.configMerge(r.global, r[e.type], e.options || {}), e
                }(a);
                var i = l.acquireContext(t, a),
                    o = i && i.canvas,
                    d = o && o.height,
                    u = o && o.width;
                n.id = s.uid(), n.ctx = i, n.canvas = o, n.config = a, n.width = u, n.height = d, n.aspectRatio = d ? u / d : null, n.options = a.options, n._bufferedRender = !1, n.chart = n, n.controller = n, e.instances[n.id] = n, Object.defineProperty(n, "data", {
                    get: function() {
                        return n.config.data
                    },
                    set: function(e) {
                        n.config.data = e
                    }
                }), i && o ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
            },
            initialize: function() {
                var e = this;
                return u.notify(e, "beforeInit"), s.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), u.notify(e, "afterInit"), e
            },
            clear: function() {
                return s.canvas.clear(this), this
            },
            stop: function() {
                return i.cancelAnimation(this), this
            },
            resize: function(e) {
                var t = this,
                    a = t.options,
                    n = t.canvas,
                    i = a.maintainAspectRatio && t.aspectRatio || null,
                    r = Math.max(0, Math.floor(s.getMaximumWidth(n))),
                    o = Math.max(0, Math.floor(i ? r / i : s.getMaximumHeight(n)));
                if ((t.width !== r || t.height !== o) && (n.width = t.width = r, n.height = t.height = o, n.style.width = r + "px", n.style.height = o + "px", s.retinaScale(t, a.devicePixelRatio), !e)) {
                    var d = {
                        width: r,
                        height: o
                    };
                    u.notify(t, "resize", [d]), t.options.onResize && t.options.onResize(t, d), t.stop(), t.update({
                        duration: t.options.responsiveAnimationDuration
                    })
                }
            },
            ensureScalesHaveIDs: function() {
                var e = this.options,
                    t = e.scales || {},
                    a = e.scale;
                s.each(t.xAxes, (function(e, t) {
                    e.id = e.id || "x-axis-" + t
                })), s.each(t.yAxes, (function(e, t) {
                    e.id = e.id || "y-axis-" + t
                })), a && (a.id = a.id || "scale")
            },
            buildOrUpdateScales: function() {
                var e = this,
                    t = e.options,
                    n = e.scales || {},
                    i = [],
                    r = Object.keys(n).reduce((function(e, t) {
                        return e[t] = !1, e
                    }), {});
                t.scales && (i = i.concat((t.scales.xAxes || []).map((function(e) {
                    return {
                        options: e,
                        dtype: "category",
                        dposition: "bottom"
                    }
                })), (t.scales.yAxes || []).map((function(e) {
                    return {
                        options: e,
                        dtype: "linear",
                        dposition: "left"
                    }
                })))), t.scale && i.push({
                    options: t.scale,
                    dtype: "radialLinear",
                    isDefault: !0,
                    dposition: "chartArea"
                }), s.each(i, (function(t) {
                    var i = t.options,
                        o = i.id,
                        d = s.valueOrDefault(i.type, t.dtype);
                    a(i.position) !== a(t.dposition) && (i.position = t.dposition), r[o] = !0;
                    var l = null;
                    if (o in n && n[o].type === d)(l = n[o]).options = i, l.ctx = e.ctx, l.chart = e;
                    else {
                        var u = _.getScaleConstructor(d);
                        if (!u) return;
                        l = new u({
                            id: o,
                            type: d,
                            options: i,
                            ctx: e.ctx,
                            chart: e
                        }), n[l.id] = l
                    }
                    l.mergeTicksOptions(), t.isDefault && (e.scale = l)
                })), s.each(r, (function(e, t) {
                    e || delete n[t]
                })), e.scales = n, _.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function() {
                var t = this,
                    a = [],
                    n = [];
                return s.each(t.data.datasets, (function(i, r) {
                    var s = t.getDatasetMeta(r),
                        o = i.type || t.config.type;
                    if (s.type && s.type !== o && (t.destroyDatasetMeta(r), s = t.getDatasetMeta(r)), s.type = o, a.push(s.type), s.controller) s.controller.updateIndex(r), s.controller.linkScales();
                    else {
                        var d = e.controllers[s.type];
                        if (void 0 === d) throw new Error('"' + s.type + '" is not a chart type.');
                        s.controller = new d(t, r), n.push(s.controller)
                    }
                }), t), n
            },
            resetElements: function() {
                var e = this;
                s.each(e.data.datasets, (function(t, a) {
                    e.getDatasetMeta(a).controller.reset()
                }), e)
            },
            reset: function() {
                this.resetElements(), this.tooltip.initialize()
            },
            update: function(e) {
                var a = this;
                if (e && "object" == typeof e || (e = {
                        duration: e,
                        lazy: arguments[1]
                    }), t(a), u._invalidate(a), !1 !== u.notify(a, "beforeUpdate")) {
                    a.tooltip._data = a.data;
                    var n = a.buildOrUpdateControllers();
                    s.each(a.data.datasets, (function(e, t) {
                        a.getDatasetMeta(t).controller.buildOrUpdateElements()
                    }), a), a.updateLayout(), a.options.animation && a.options.animation.duration && s.each(n, (function(e) {
                        e.reset()
                    })), a.updateDatasets(), a.tooltip.initialize(), a.lastActive = [], u.notify(a, "afterUpdate"), a._bufferedRender ? a._bufferedRequest = {
                        duration: e.duration,
                        easing: e.easing,
                        lazy: e.lazy
                    } : a.render(e)
                }
            },
            updateLayout: function() {
                !1 !== u.notify(this, "beforeLayout") && (d.update(this, this.width, this.height), u.notify(this, "afterScaleUpdate"), u.notify(this, "afterLayout"))
            },
            updateDatasets: function() {
                if (!1 !== u.notify(this, "beforeDatasetsUpdate")) {
                    for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                    u.notify(this, "afterDatasetsUpdate")
                }
            },
            updateDataset: function(e) {
                var t = this.getDatasetMeta(e),
                    a = {
                        meta: t,
                        index: e
                    };
                !1 !== u.notify(this, "beforeDatasetUpdate", [a]) && (t.controller.update(), u.notify(this, "afterDatasetUpdate", [a]))
            },
            render: function(e) {
                var t = this;
                e && "object" == typeof e || (e = {
                    duration: e,
                    lazy: arguments[1]
                });
                var a = e.duration,
                    r = e.lazy;
                if (!1 !== u.notify(t, "beforeRender")) {
                    var o = t.options.animation,
                        d = function(e) {
                            u.notify(t, "afterRender"), s.callback(o && o.onComplete, [e], t)
                        };
                    if (o && (void 0 !== a && 0 !== a || void 0 === a && 0 !== o.duration)) {
                        var l = new n({
                            numSteps: (a || o.duration) / 16.66,
                            easing: e.easing || o.easing,
                            render: function(e, t) {
                                var a = s.easing.effects[t.easing],
                                    n = t.currentStep,
                                    i = n / t.numSteps;
                                e.draw(a(i), i, n)
                            },
                            onAnimationProgress: o.onProgress,
                            onAnimationComplete: d
                        });
                        i.addAnimation(t, l, a, r)
                    } else t.draw(), d(new n({
                        numSteps: 0,
                        chart: t
                    }));
                    return t
                }
            },
            draw: function(e) {
                var t = this;
                t.clear(), s.isNullOrUndef(e) && (e = 1), t.transition(e), t.width <= 0 || t.height <= 0 || !1 !== u.notify(t, "beforeDraw", [e]) && (s.each(t.boxes, (function(e) {
                    e.draw(t.chartArea)
                }), t), t.scale && t.scale.draw(), t.drawDatasets(e), t._drawTooltip(e), u.notify(t, "afterDraw", [e]))
            },
            transition: function(e) {
                for (var t = 0, a = (this.data.datasets || []).length; t < a; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                this.tooltip.transition(e)
            },
            drawDatasets: function(e) {
                var t = this;
                if (!1 !== u.notify(t, "beforeDatasetsDraw", [e])) {
                    for (var a = (t.data.datasets || []).length - 1; a >= 0; --a) t.isDatasetVisible(a) && t.drawDataset(a, e);
                    u.notify(t, "afterDatasetsDraw", [e])
                }
            },
            drawDataset: function(e, t) {
                var a = this.getDatasetMeta(e),
                    n = {
                        meta: a,
                        index: e,
                        easingValue: t
                    };
                !1 !== u.notify(this, "beforeDatasetDraw", [n]) && (a.controller.draw(t), u.notify(this, "afterDatasetDraw", [n]))
            },
            _drawTooltip: function(e) {
                var t = this.tooltip,
                    a = {
                        tooltip: t,
                        easingValue: e
                    };
                !1 !== u.notify(this, "beforeTooltipDraw", [a]) && (t.draw(), u.notify(this, "afterTooltipDraw", [a]))
            },
            getElementAtEvent: function(e) {
                return o.modes.single(this, e)
            },
            getElementsAtEvent: function(e) {
                return o.modes.label(this, e, {
                    intersect: !0
                })
            },
            getElementsAtXAxis: function(e) {
                return o.modes["x-axis"](this, e, {
                    intersect: !0
                })
            },
            getElementsAtEventForMode: function(e, t, a) {
                var n = o.modes[t];
                return "function" == typeof n ? n(this, e, a) : []
            },
            getDatasetAtEvent: function(e) {
                return o.modes.dataset(this, e, {
                    intersect: !0
                })
            },
            getDatasetMeta: function(e) {
                var t = this.data.datasets[e];
                t._meta || (t._meta = {});
                var a = t._meta[this.id];
                return a || (a = t._meta[this.id] = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null
                }), a
            },
            getVisibleDatasetCount: function() {
                for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t) this.isDatasetVisible(t) && e++;
                return e
            },
            isDatasetVisible: function(e) {
                var t = this.getDatasetMeta(e);
                return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
            },
            generateLegend: function() {
                return this.options.legendCallback(this)
            },
            destroyDatasetMeta: function(e) {
                var t = this.id,
                    a = this.data.datasets[e],
                    n = a._meta && a._meta[t];
                n && (n.controller.destroy(), delete a._meta[t])
            },
            destroy: function() {
                var t, a, n = this,
                    i = n.canvas;
                for (n.stop(), t = 0, a = n.data.datasets.length; t < a; ++t) n.destroyDatasetMeta(t);
                i && (n.unbindEvents(), s.canvas.clear(n), l.releaseContext(n.ctx), n.canvas = null, n.ctx = null), u.notify(n, "destroy"), delete e.instances[n.id]
            },
            toBase64Image: function() {
                return this.canvas.toDataURL.apply(this.canvas, arguments)
            },
            initToolTip: function() {
                var e = this;
                e.tooltip = new m({
                    _chart: e,
                    _chartInstance: e,
                    _data: e.data,
                    _options: e.options.tooltips
                }, e)
            },
            bindEvents: function() {
                var e = this,
                    t = e._listeners = {},
                    a = function() {
                        e.eventHandler.apply(e, arguments)
                    };
                s.each(e.options.events, (function(n) {
                    l.addEventListener(e, n, a), t[n] = a
                })), e.options.responsive && (a = function() {
                    e.resize()
                }, l.addEventListener(e, "resize", a), t.resize = a)
            },
            unbindEvents: function() {
                var e = this,
                    t = e._listeners;
                t && (delete e._listeners, s.each(t, (function(t, a) {
                    l.removeEventListener(e, a, t)
                })))
            },
            updateHoverStyle: function(e, t, a) {
                var n, i, r, s = a ? "setHoverStyle" : "removeHoverStyle";
                for (i = 0, r = e.length; i < r; ++i)(n = e[i]) && this.getDatasetMeta(n._datasetIndex).controller[s](n)
            },
            eventHandler: function(e) {
                var t = this,
                    a = t.tooltip;
                if (!1 !== u.notify(t, "beforeEvent", [e])) {
                    t._bufferedRender = !0, t._bufferedRequest = null;
                    var n = t.handleEvent(e);
                    a && (n = a._start ? a.handleEvent(e) : n | a.handleEvent(e)), u.notify(t, "afterEvent", [e]);
                    var i = t._bufferedRequest;
                    return i ? t.render(i) : n && !t.animating && (t.stop(), t.render({
                        duration: t.options.hover.animationDuration,
                        lazy: !0
                    })), t._bufferedRender = !1, t._bufferedRequest = null, t
                }
            },
            handleEvent: function(e) {
                var t, a = this,
                    n = a.options || {},
                    i = n.hover;
                return a.lastActive = a.lastActive || [], "mouseout" === e.type ? a.active = [] : a.active = a.getElementsAtEventForMode(e, i.mode, i), s.callback(n.onHover || n.hover.onHover, [e.native, a.active], a), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(a, e.native, a.active), a.lastActive.length && a.updateHoverStyle(a.lastActive, i.mode, !1), a.active.length && i.mode && a.updateHoverStyle(a.active, i.mode, !0), t = !s.arrayEquals(a.active, a.lastActive), a.lastActive = a.active, t
            }
        }), e.Controller = e
    }
}, function(e, t, a) {
    "use strict";
    var n = a(2);
    e.exports = function(e) {
        var t = ["push", "pop", "shift", "splice", "unshift"];

        function a(e, a) {
            var n = e._chartjs;
            if (n) {
                var i = n.listeners,
                    r = i.indexOf(a); - 1 !== r && i.splice(r, 1), i.length > 0 || (t.forEach((function(t) {
                    delete e[t]
                })), delete e._chartjs)
            }
        }
        e.DatasetController = function(e, t) {
            this.initialize(e, t)
        }, n.extend(e.DatasetController.prototype, {
            datasetElementType: null,
            dataElementType: null,
            initialize: function(e, t) {
                this.chart = e, this.index = t, this.linkScales(), this.addElements()
            },
            updateIndex: function(e) {
                this.index = e
            },
            linkScales: function() {
                var e = this,
                    t = e.getMeta(),
                    a = e.getDataset();
                null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = a.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = a.yAxisID || e.chart.options.scales.yAxes[0].id)
            },
            getDataset: function() {
                return this.chart.data.datasets[this.index]
            },
            getMeta: function() {
                return this.chart.getDatasetMeta(this.index)
            },
            getScaleForId: function(e) {
                return this.chart.scales[e]
            },
            reset: function() {
                this.update(!0)
            },
            destroy: function() {
                this._data && a(this._data, this)
            },
            createMetaDataset: function() {
                var e = this.datasetElementType;
                return e && new e({
                    _chart: this.chart,
                    _datasetIndex: this.index
                })
            },
            createMetaData: function(e) {
                var t = this.dataElementType;
                return t && new t({
                    _chart: this.chart,
                    _datasetIndex: this.index,
                    _index: e
                })
            },
            addElements: function() {
                var e, t, a = this.getMeta(),
                    n = this.getDataset().data || [],
                    i = a.data;
                for (e = 0, t = n.length; e < t; ++e) i[e] = i[e] || this.createMetaData(e);
                a.dataset = a.dataset || this.createMetaDataset()
            },
            addElementAndReset: function(e) {
                var t = this.createMetaData(e);
                this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
            },
            buildOrUpdateElements: function() {
                var e, i, r = this,
                    s = r.getDataset(),
                    o = s.data || (s.data = []);
                r._data !== o && (r._data && a(r._data, r), i = r, (e = o)._chartjs ? e._chartjs.listeners.push(i) : (Object.defineProperty(e, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [i]
                    }
                }), t.forEach((function(t) {
                    var a = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                        i = e[t];
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            var t = Array.prototype.slice.call(arguments),
                                r = i.apply(this, t);
                            return n.each(e._chartjs.listeners, (function(e) {
                                "function" == typeof e[a] && e[a].apply(e, t)
                            })), r
                        }
                    })
                }))), r._data = o), r.resyncElements()
            },
            update: n.noop,
            transition: function(e) {
                for (var t = this.getMeta(), a = t.data || [], n = a.length, i = 0; i < n; ++i) a[i].transition(e);
                t.dataset && t.dataset.transition(e)
            },
            draw: function() {
                var e = this.getMeta(),
                    t = e.data || [],
                    a = t.length,
                    n = 0;
                for (e.dataset && e.dataset.draw(); n < a; ++n) t[n].draw()
            },
            removeHoverStyle: function(e) {
                n.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle
            },
            setHoverStyle: function(e) {
                var t = this.chart.data.datasets[e._datasetIndex],
                    a = e._index,
                    i = e.custom || {},
                    r = n.valueAtIndexOrDefault,
                    s = n.getHoverColor,
                    o = e._model;
                e.$previousStyle = {
                    backgroundColor: o.backgroundColor,
                    borderColor: o.borderColor,
                    borderWidth: o.borderWidth
                }, o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r(t.hoverBackgroundColor, a, s(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r(t.hoverBorderColor, a, s(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r(t.hoverBorderWidth, a, o.borderWidth)
            },
            resyncElements: function() {
                var e = this.getMeta(),
                    t = this.getDataset().data,
                    a = e.data.length,
                    n = t.length;
                n < a ? e.data.splice(n, a - n) : n > a && this.insertElements(a, n - a)
            },
            insertElements: function(e, t) {
                for (var a = 0; a < t; ++a) this.addElementAndReset(e + a)
            },
            onDataPush: function() {
                this.insertElements(this.getDataset().data.length - 1, arguments.length)
            },
            onDataPop: function() {
                this.getMeta().data.pop()
            },
            onDataShift: function() {
                this.getMeta().data.shift()
            },
            onDataSplice: function(e, t) {
                this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
            },
            onDataUnshift: function() {
                this.insertElements(0, arguments.length)
            }
        }), e.DatasetController.extend = n.inherits
    }
}, function(e, t, a) {
    "use strict";
    var n = a(2),
        i = a(10);
    e.exports = function(e) {
        var t = n.noop;
        e.LinearScaleBase = i.extend({
            getRightValue: function(e) {
                return "string" == typeof e ? +e : i.prototype.getRightValue.call(this, e)
            },
            handleTickRangeOptions: function() {
                var e = this,
                    t = e.options.ticks;
                if (t.beginAtZero) {
                    var a = n.sign(e.min),
                        i = n.sign(e.max);
                    a < 0 && i < 0 ? e.max = 0 : a > 0 && i > 0 && (e.min = 0)
                }
                var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                    s = void 0 !== t.max || void 0 !== t.suggestedMax;
                void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), r !== s && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
            },
            getTickLimit: t,
            handleDirectionalChanges: t,
            buildTicks: function() {
                var e = this,
                    t = e.options.ticks,
                    a = e.getTickLimit(),
                    i = {
                        maxTicks: a = Math.max(2, a),
                        min: t.min,
                        max: t.max,
                        precision: t.precision,
                        stepSize: n.valueOrDefault(t.fixedStepSize, t.stepSize)
                    },
                    r = e.ticks = function(e, t) {
                        var a, i, r, s = [];
                        if (e.stepSize && e.stepSize > 0) r = e.stepSize;
                        else {
                            var o = n.niceNum(t.max - t.min, !1);
                            r = n.niceNum(o / (e.maxTicks - 1), !0), void 0 !== (i = e.precision) && (a = Math.pow(10, i), r = Math.ceil(r * a) / a)
                        }
                        var d = Math.floor(t.min / r) * r,
                            l = Math.ceil(t.max / r) * r;
                        n.isNullOrUndef(e.min) || n.isNullOrUndef(e.max) || !e.stepSize || n.almostWhole((e.max - e.min) / e.stepSize, r / 1e3) && (d = e.min, l = e.max);
                        var u = (l - d) / r;
                        u = n.almostEquals(u, Math.round(u), r / 1e3) ? Math.round(u) : Math.ceil(u), i = 1, r < 1 && (i = Math.pow(10, 1 - Math.floor(n.log10(r))), d = Math.round(d * i) / i, l = Math.round(l * i) / i), s.push(void 0 !== e.min ? e.min : d);
                        for (var _ = 1; _ < u; ++_) s.push(Math.round((d + _ * r) * i) / i);
                        return s.push(void 0 !== e.max ? e.max : l), s
                    }(i, e);
                e.handleDirectionalChanges(), e.max = n.max(r), e.min = n.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
            },
            convertTicksToLabels: function() {
                var e = this;
                e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), i.prototype.convertTicksToLabels.call(e)
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    var n = a(10),
        i = a(5);
    e.exports = function() {
        var e = n.extend({
            getLabels: function() {
                var e = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
            },
            determineDataLimits: function() {
                var e, t = this,
                    a = t.getLabels();
                t.minIndex = 0, t.maxIndex = a.length - 1, void 0 !== t.options.ticks.min && (e = a.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = a.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = a[t.minIndex], t.max = a[t.maxIndex]
            },
            buildTicks: function() {
                var e = this,
                    t = e.getLabels();
                e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
            },
            getLabelForIndex: function(e, t) {
                var a = this,
                    n = a.chart.data,
                    i = a.isHorizontal();
                return n.yLabels && !i ? a.getRightValue(n.datasets[t].data[e]) : a.ticks[e - a.minIndex]
            },
            getPixelForValue: function(e, t) {
                var a, n = this,
                    i = n.options.offset,
                    r = Math.max(n.maxIndex + 1 - n.minIndex - (i ? 0 : 1), 1);
                if (null != e && (a = n.isHorizontal() ? e.x : e.y), void 0 !== a || void 0 !== e && isNaN(t)) {
                    e = a || e;
                    var s = n.getLabels().indexOf(e);
                    t = -1 !== s ? s : t
                }
                if (n.isHorizontal()) {
                    var o = n.width / r,
                        d = o * (t - n.minIndex);
                    return i && (d += o / 2), n.left + Math.round(d)
                }
                var l = n.height / r,
                    u = l * (t - n.minIndex);
                return i && (u += l / 2), n.top + Math.round(u)
            },
            getPixelForTick: function(e) {
                return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
            },
            getValueForPixel: function(e) {
                var t = this,
                    a = t.options.offset,
                    n = Math.max(t._ticks.length - (a ? 0 : 1), 1),
                    i = t.isHorizontal(),
                    r = (i ? t.width : t.height) / n;
                return e -= i ? t.left : t.top, a && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex
            },
            getBasePixel: function() {
                return this.bottom
            }
        });
        i.registerScaleType("category", e, {
            position: "bottom"
        })
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(2),
        r = a(5),
        s = a(11);
    e.exports = function(e) {
        var t = {
                position: "left",
                ticks: {
                    callback: s.formatters.linear
                }
            },
            a = e.LinearScaleBase.extend({
                determineDataLimits: function() {
                    var e = this,
                        t = e.options,
                        a = e.chart,
                        n = a.data.datasets,
                        r = e.isHorizontal();

                    function s(t) {
                        return r ? t.xAxisID === e.id : t.yAxisID === e.id
                    }
                    e.min = null, e.max = null;
                    var o = t.stacked;
                    if (void 0 === o && i.each(n, (function(e, t) {
                            if (!o) {
                                var n = a.getDatasetMeta(t);
                                a.isDatasetVisible(t) && s(n) && void 0 !== n.stack && (o = !0)
                            }
                        })), t.stacked || o) {
                        var d = {};
                        i.each(n, (function(n, r) {
                            var o = a.getDatasetMeta(r),
                                l = [o.type, void 0 === t.stacked && void 0 === o.stack ? r : "", o.stack].join(".");
                            void 0 === d[l] && (d[l] = {
                                positiveValues: [],
                                negativeValues: []
                            });
                            var u = d[l].positiveValues,
                                _ = d[l].negativeValues;
                            a.isDatasetVisible(r) && s(o) && i.each(n.data, (function(a, n) {
                                var i = +e.getRightValue(a);
                                isNaN(i) || o.data[n].hidden || (u[n] = u[n] || 0, _[n] = _[n] || 0, t.relativePoints ? u[n] = 100 : i < 0 ? _[n] += i : u[n] += i)
                            }))
                        })), i.each(d, (function(t) {
                            var a = t.positiveValues.concat(t.negativeValues),
                                n = i.min(a),
                                r = i.max(a);
                            e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? r : Math.max(e.max, r)
                        }))
                    } else i.each(n, (function(t, n) {
                        var r = a.getDatasetMeta(n);
                        a.isDatasetVisible(n) && s(r) && i.each(t.data, (function(t, a) {
                            var n = +e.getRightValue(t);
                            isNaN(n) || r.data[a].hidden || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n))
                        }))
                    }));
                    e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                },
                getTickLimit: function() {
                    var e, t = this.options.ticks;
                    if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50));
                    else {
                        var a = i.valueOrDefault(t.fontSize, n.global.defaultFontSize);
                        e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * a)))
                    }
                    return e
                },
                handleDirectionalChanges: function() {
                    this.isHorizontal() || this.ticks.reverse()
                },
                getLabelForIndex: function(e, t) {
                    return +this.getRightValue(this.chart.data.datasets[t].data[e])
                },
                getPixelForValue: function(e) {
                    var t = this,
                        a = t.start,
                        n = +t.getRightValue(e),
                        i = t.end - a;
                    return t.isHorizontal() ? t.left + t.width / i * (n - a) : t.bottom - t.height / i * (n - a)
                },
                getValueForPixel: function(e) {
                    var t = this,
                        a = t.isHorizontal(),
                        n = a ? t.width : t.height,
                        i = (a ? e - t.left : t.bottom - e) / n;
                    return t.start + (t.end - t.start) * i
                },
                getPixelForTick: function(e) {
                    return this.getPixelForValue(this.ticksAsNumbers[e])
                }
            });
        r.registerScaleType("linear", a, t)
    }
}, function(e, t, a) {
    "use strict";
    var n = a(2),
        i = a(10),
        r = a(5),
        s = a(11);
    e.exports = function(e) {
        var t = {
                position: "left",
                ticks: {
                    callback: s.formatters.logarithmic
                }
            },
            a = i.extend({
                determineDataLimits: function() {
                    var e = this,
                        t = e.options,
                        a = e.chart,
                        i = a.data.datasets,
                        r = e.isHorizontal();

                    function s(t) {
                        return r ? t.xAxisID === e.id : t.yAxisID === e.id
                    }
                    e.min = null, e.max = null, e.minNotZero = null;
                    var o = t.stacked;
                    if (void 0 === o && n.each(i, (function(e, t) {
                            if (!o) {
                                var n = a.getDatasetMeta(t);
                                a.isDatasetVisible(t) && s(n) && void 0 !== n.stack && (o = !0)
                            }
                        })), t.stacked || o) {
                        var d = {};
                        n.each(i, (function(i, r) {
                            var o = a.getDatasetMeta(r),
                                l = [o.type, void 0 === t.stacked && void 0 === o.stack ? r : "", o.stack].join(".");
                            a.isDatasetVisible(r) && s(o) && (void 0 === d[l] && (d[l] = []), n.each(i.data, (function(t, a) {
                                var n = d[l],
                                    i = +e.getRightValue(t);
                                isNaN(i) || o.data[a].hidden || i < 0 || (n[a] = n[a] || 0, n[a] += i)
                            })))
                        })), n.each(d, (function(t) {
                            if (t.length > 0) {
                                var a = n.min(t),
                                    i = n.max(t);
                                e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? i : Math.max(e.max, i)
                            }
                        }))
                    } else n.each(i, (function(t, i) {
                        var r = a.getDatasetMeta(i);
                        a.isDatasetVisible(i) && s(r) && n.each(t.data, (function(t, a) {
                            var n = +e.getRightValue(t);
                            isNaN(n) || r.data[a].hidden || n < 0 || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n), 0 !== n && (null === e.minNotZero || n < e.minNotZero) && (e.minNotZero = n))
                        }))
                    }));
                    this.handleTickRangeOptions()
                },
                handleTickRangeOptions: function() {
                    var e = this,
                        t = e.options.ticks,
                        a = n.valueOrDefault;
                    e.min = a(t.min, e.min), e.max = a(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(n.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(n.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(n.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(n.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(n.log10(e.max))) : e.minNotZero = 1)
                },
                buildTicks: function() {
                    var e = this,
                        t = e.options.ticks,
                        a = !e.isHorizontal(),
                        i = {
                            min: t.min,
                            max: t.max
                        },
                        r = e.ticks = function(e, t) {
                            var a, i, r = [],
                                s = n.valueOrDefault,
                                o = s(e.min, Math.pow(10, Math.floor(n.log10(t.min)))),
                                d = Math.floor(n.log10(t.max)),
                                l = Math.ceil(t.max / Math.pow(10, d));
                            0 === o ? (a = Math.floor(n.log10(t.minNotZero)), i = Math.floor(t.minNotZero / Math.pow(10, a)), r.push(o), o = i * Math.pow(10, a)) : (a = Math.floor(n.log10(o)), i = Math.floor(o / Math.pow(10, a)));
                            var u = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                            do {
                                r.push(o), 10 === ++i && (i = 1, u = ++a >= 0 ? 1 : u), o = Math.round(i * Math.pow(10, a) * u) / u
                            } while (a < d || a === d && i < l);
                            var _ = s(e.max, o);
                            return r.push(_), r
                        }(i, e);
                    e.max = n.max(r), e.min = n.min(r), t.reverse ? (a = !a, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), a && r.reverse()
                },
                convertTicksToLabels: function() {
                    this.tickValues = this.ticks.slice(), i.prototype.convertTicksToLabels.call(this)
                },
                getLabelForIndex: function(e, t) {
                    return +this.getRightValue(this.chart.data.datasets[t].data[e])
                },
                getPixelForTick: function(e) {
                    return this.getPixelForValue(this.tickValues[e])
                },
                _getFirstTickValue: function(e) {
                    var t = Math.floor(n.log10(e));
                    return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
                },
                getPixelForValue: function(t) {
                    var a, i, r, s, o, d = this,
                        l = d.options.ticks.reverse,
                        u = n.log10,
                        _ = d._getFirstTickValue(d.minNotZero),
                        m = 0;
                    return t = +d.getRightValue(t), l ? (r = d.end, s = d.start, o = -1) : (r = d.start, s = d.end, o = 1), d.isHorizontal() ? (a = d.width, i = l ? d.right : d.left) : (a = d.height, o *= -1, i = l ? d.top : d.bottom), t !== r && (0 === r && (a -= m = n.getValueOrDefault(d.options.ticks.fontSize, e.defaults.global.defaultFontSize), r = _), 0 !== t && (m += a / (u(s) - u(r)) * (u(t) - u(r))), i += o * m), i
                },
                getValueForPixel: function(t) {
                    var a, i, r, s, o = this,
                        d = o.options.ticks.reverse,
                        l = n.log10,
                        u = o._getFirstTickValue(o.minNotZero);
                    if (d ? (i = o.end, r = o.start) : (i = o.start, r = o.end), o.isHorizontal() ? (a = o.width, s = d ? o.right - t : t - o.left) : (a = o.height, s = d ? t - o.top : o.bottom - t), s !== i) {
                        if (0 === i) {
                            var _ = n.getValueOrDefault(o.options.ticks.fontSize, e.defaults.global.defaultFontSize);
                            s -= _, a -= _, i = u
                        }
                        s *= l(r) - l(i), s /= a, s = Math.pow(10, l(i) + s)
                    }
                    return s
                }
            });
        r.registerScaleType("logarithmic", a, t)
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(2),
        r = a(5),
        s = a(11);
    e.exports = function(e) {
        var t = n.global,
            a = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1
                },
                gridLines: {
                    circular: !1
                },
                ticks: {
                    showLabelBackdrop: !0,
                    backdropColor: "rgba(255,255,255,0.75)",
                    backdropPaddingY: 2,
                    backdropPaddingX: 2,
                    callback: s.formatters.linear
                },
                pointLabels: {
                    display: !0,
                    fontSize: 10,
                    callback: function(e) {
                        return e
                    }
                }
            };

        function o(e) {
            var t = e.options;
            return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
        }

        function d(e) {
            var a = e.options.pointLabels,
                n = i.valueOrDefault(a.fontSize, t.defaultFontSize),
                r = i.valueOrDefault(a.fontStyle, t.defaultFontStyle),
                s = i.valueOrDefault(a.fontFamily, t.defaultFontFamily);
            return {
                size: n,
                style: r,
                family: s,
                font: i.fontString(n, r, s)
            }
        }

        function l(e, t, a, n, i) {
            return e === n || e === i ? {
                start: t - a / 2,
                end: t + a / 2
            } : e < n || e > i ? {
                start: t - a - 5,
                end: t
            } : {
                start: t,
                end: t + a + 5
            }
        }

        function u(e) {
            return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
        }

        function _(e, t, a, n) {
            if (i.isArray(t))
                for (var r = a.y, s = 1.5 * n, o = 0; o < t.length; ++o) e.fillText(t[o], a.x, r), r += s;
            else e.fillText(t, a.x, a.y)
        }

        function m(e, t, a) {
            90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
        }

        function c(e) {
            return i.isNumber(e) ? e : 0
        }
        var h = e.LinearScaleBase.extend({
            setDimensions: function() {
                var e = this,
                    a = e.options,
                    n = a.ticks;
                e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                var r = i.min([e.height, e.width]),
                    s = i.valueOrDefault(n.fontSize, t.defaultFontSize);
                e.drawingArea = a.display ? r / 2 - (s / 2 + n.backdropPaddingY) : r / 2
            },
            determineDataLimits: function() {
                var e = this,
                    t = e.chart,
                    a = Number.POSITIVE_INFINITY,
                    n = Number.NEGATIVE_INFINITY;
                i.each(t.data.datasets, (function(r, s) {
                    if (t.isDatasetVisible(s)) {
                        var o = t.getDatasetMeta(s);
                        i.each(r.data, (function(t, i) {
                            var r = +e.getRightValue(t);
                            isNaN(r) || o.data[i].hidden || (a = Math.min(r, a), n = Math.max(r, n))
                        }))
                    }
                })), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
            },
            getTickLimit: function() {
                var e = this.options.ticks,
                    a = i.valueOrDefault(e.fontSize, t.defaultFontSize);
                return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * a)))
            },
            convertTicksToLabels: function() {
                var t = this;
                e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
            },
            getLabelForIndex: function(e, t) {
                return +this.getRightValue(this.chart.data.datasets[t].data[e])
            },
            fit: function() {
                var e, t;
                this.options.pointLabels.display ? function(e) {
                    var t, a, n, r = d(e),
                        s = Math.min(e.height / 2, e.width / 2),
                        u = {
                            r: e.width,
                            l: 0,
                            t: e.height,
                            b: 0
                        },
                        _ = {};
                    e.ctx.font = r.font, e._pointLabelSizes = [];
                    var m, c, h, f = o(e);
                    for (t = 0; t < f; t++) {
                        n = e.getPointPosition(t, s), m = e.ctx, c = r.size, h = e.pointLabels[t] || "", a = i.isArray(h) ? {
                            w: i.longestText(m, m.font, h),
                            h: h.length * c + 1.5 * (h.length - 1) * c
                        } : {
                            w: m.measureText(h).width,
                            h: c
                        }, e._pointLabelSizes[t] = a;
                        var M = e.getIndexAngle(t),
                            p = i.toDegrees(M) % 360,
                            y = l(p, n.x, a.w, 0, 180),
                            g = l(p, n.y, a.h, 90, 270);
                        y.start < u.l && (u.l = y.start, _.l = M), y.end > u.r && (u.r = y.end, _.r = M), g.start < u.t && (u.t = g.start, _.t = M), g.end > u.b && (u.b = g.end, _.b = M)
                    }
                    e.setReductions(s, u, _)
                }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
            },
            setReductions: function(e, t, a) {
                var n = t.l / Math.sin(a.l),
                    i = Math.max(t.r - this.width, 0) / Math.sin(a.r),
                    r = -t.t / Math.cos(a.t),
                    s = -Math.max(t.b - this.height, 0) / Math.cos(a.b);
                n = c(n), i = c(i), r = c(r), s = c(s), this.drawingArea = Math.min(Math.round(e - (n + i) / 2), Math.round(e - (r + s) / 2)), this.setCenterPoint(n, i, r, s)
            },
            setCenterPoint: function(e, t, a, n) {
                var i = this,
                    r = i.width - t - i.drawingArea,
                    s = e + i.drawingArea,
                    o = a + i.drawingArea,
                    d = i.height - n - i.drawingArea;
                i.xCenter = Math.round((s + r) / 2 + i.left), i.yCenter = Math.round((o + d) / 2 + i.top)
            },
            getIndexAngle: function(e) {
                return e * (2 * Math.PI / o(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(e) {
                var t = this;
                if (null === e) return 0;
                var a = t.drawingArea / (t.max - t.min);
                return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a
            },
            getPointPosition: function(e, t) {
                var a = this.getIndexAngle(e) - Math.PI / 2;
                return {
                    x: Math.round(Math.cos(a) * t) + this.xCenter,
                    y: Math.round(Math.sin(a) * t) + this.yCenter
                }
            },
            getPointPositionForValue: function(e, t) {
                return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
            },
            getBasePosition: function() {
                var e = this.min,
                    t = this.max;
                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
            },
            draw: function() {
                var e = this,
                    a = e.options,
                    n = a.gridLines,
                    r = a.ticks,
                    s = i.valueOrDefault;
                if (a.display) {
                    var l = e.ctx,
                        c = this.getIndexAngle(0),
                        h = s(r.fontSize, t.defaultFontSize),
                        f = s(r.fontStyle, t.defaultFontStyle),
                        M = s(r.fontFamily, t.defaultFontFamily),
                        p = i.fontString(h, f, M);
                    i.each(e.ticks, (function(a, d) {
                        if (d > 0 || r.reverse) {
                            var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[d]);
                            if (n.display && 0 !== d && function(e, t, a, n) {
                                    var r = e.ctx;
                                    if (r.strokeStyle = i.valueAtIndexOrDefault(t.color, n - 1), r.lineWidth = i.valueAtIndexOrDefault(t.lineWidth, n - 1), e.options.gridLines.circular) r.beginPath(), r.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), r.closePath(), r.stroke();
                                    else {
                                        var s = o(e);
                                        if (0 === s) return;
                                        r.beginPath();
                                        var d = e.getPointPosition(0, a);
                                        r.moveTo(d.x, d.y);
                                        for (var l = 1; l < s; l++) d = e.getPointPosition(l, a), r.lineTo(d.x, d.y);
                                        r.closePath(), r.stroke()
                                    }
                                }(e, n, u, d), r.display) {
                                var _ = s(r.fontColor, t.defaultFontColor);
                                if (l.font = p, l.save(), l.translate(e.xCenter, e.yCenter), l.rotate(c), r.showLabelBackdrop) {
                                    var m = l.measureText(a).width;
                                    l.fillStyle = r.backdropColor, l.fillRect(-m / 2 - r.backdropPaddingX, -u - h / 2 - r.backdropPaddingY, m + 2 * r.backdropPaddingX, h + 2 * r.backdropPaddingY)
                                }
                                l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = _, l.fillText(a, 0, -u), l.restore()
                            }
                        }
                    })), (a.angleLines.display || a.pointLabels.display) && function(e) {
                        var a = e.ctx,
                            n = e.options,
                            r = n.angleLines,
                            s = n.pointLabels;
                        a.lineWidth = r.lineWidth, a.strokeStyle = r.color;
                        var l = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                            c = d(e);
                        a.textBaseline = "top";
                        for (var h = o(e) - 1; h >= 0; h--) {
                            if (r.display) {
                                var f = e.getPointPosition(h, l);
                                a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(f.x, f.y), a.stroke(), a.closePath()
                            }
                            if (s.display) {
                                var M = e.getPointPosition(h, l + 5),
                                    p = i.valueAtIndexOrDefault(s.fontColor, h, t.defaultFontColor);
                                a.font = c.font, a.fillStyle = p;
                                var y = e.getIndexAngle(h),
                                    g = i.toDegrees(y);
                                a.textAlign = u(g), m(g, e._pointLabelSizes[h], M), _(a, e.pointLabels[h] || "", M, c.size)
                            }
                        }
                    }(e)
                }
            }
        });
        r.registerScaleType("radialLinear", h, a)
    }
}, function(e, t, a) {
    "use strict";
    var n = a(0);
    n = "function" == typeof n ? n : window.moment;
    var i = a(3),
        r = a(2),
        s = a(10),
        o = a(5),
        d = Number.MIN_SAFE_INTEGER || -9007199254740991,
        l = Number.MAX_SAFE_INTEGER || 9007199254740991,
        u = {
            millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            },
            second: {
                common: !0,
                size: 1e3,
                steps: [1, 2, 5, 10, 15, 30]
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: [1, 2, 5, 10, 15, 30]
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
            },
            day: {
                common: !0,
                size: 864e5,
                steps: [1, 2, 5]
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: [1, 2, 3, 4]
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: [1, 2, 3]
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: [1, 2, 3, 4]
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        _ = Object.keys(u);

    function m(e, t) {
        return e - t
    }

    function c(e) {
        var t, a, n, i = {},
            r = [];
        for (t = 0, a = e.length; t < a; ++t) i[n = e[t]] || (i[n] = !0, r.push(n));
        return r
    }

    function h(e, t, a, n) {
        var i = function(e, t, a) {
                for (var n, i, r, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                    if (i = e[(n = s + o >> 1) - 1] || null, r = e[n], !i) return {
                        lo: null,
                        hi: r
                    };
                    if (r[t] < a) s = n + 1;
                    else {
                        if (!(i[t] > a)) return {
                            lo: i,
                            hi: r
                        };
                        o = n - 1
                    }
                }
                return {
                    lo: r,
                    hi: null
                }
            }(e, t, a),
            r = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0],
            s = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1],
            o = s[t] - r[t],
            d = o ? (a - r[t]) / o : 0,
            l = (s[n] - r[n]) * d;
        return r[n] + l
    }

    function f(e, t) {
        var a = t.parser,
            i = t.parser || t.format;
        return "function" == typeof a ? a(e) : "string" == typeof e && "string" == typeof i ? n(e, i) : (e instanceof n || (e = n(e)), e.isValid() ? e : "function" == typeof i ? i(e) : e)
    }

    function M(e, t) {
        if (r.isNullOrUndef(e)) return null;
        var a = t.options.time,
            n = f(t.getRightValue(e), a);
        return n.isValid() ? (a.round && n.startOf(a.round), n.valueOf()) : null
    }

    function p(e) {
        for (var t = _.indexOf(e) + 1, a = _.length; t < a; ++t)
            if (u[_[t]].common) return _[t]
    }

    function y(e, t, a, i) {
        var s, o = i.time,
            d = o.unit || function(e, t, a, n) {
                var i, r, s, o = _.length;
                for (i = _.indexOf(e); i < o - 1; ++i)
                    if (s = (r = u[_[i]]).steps ? r.steps[r.steps.length - 1] : l, r.common && Math.ceil((a - t) / (s * r.size)) <= n) return _[i];
                return _[o - 1]
            }(o.minUnit, e, t, a),
            m = p(d),
            c = r.valueOrDefault(o.stepSize, o.unitStepSize),
            h = "week" === d && o.isoWeekday,
            f = i.ticks.major.enabled,
            M = u[d],
            y = n(e),
            g = n(t),
            L = [];
        for (c || (c = function(e, t, a, n) {
                var i, r, s, o = t - e,
                    d = u[a],
                    l = d.size,
                    _ = d.steps;
                if (!_) return Math.ceil(o / (n * l));
                for (i = 0, r = _.length; i < r && (s = _[i], !(Math.ceil(o / (l * s)) <= n)); ++i);
                return s
            }(e, t, d, a)), h && (y = y.isoWeekday(h), g = g.isoWeekday(h)), y = y.startOf(h ? "day" : d), (g = g.startOf(h ? "day" : d)) < t && g.add(1, d), s = n(y), f && m && !h && !o.round && (s.startOf(m), s.add(~~((y - s) / (M.size * c)) * c, d)); s < g; s.add(c, d)) L.push(+s);
        return L.push(+s), L
    }
    e.exports = function() {
        var e = s.extend({
            initialize: function() {
                if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                this.mergeTicksOptions(), s.prototype.initialize.call(this)
            },
            update: function() {
                var e = this,
                    t = e.options;
                return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), s.prototype.update.apply(e, arguments)
            },
            getRightValue: function(e) {
                return e && void 0 !== e.t && (e = e.t), s.prototype.getRightValue.call(this, e)
            },
            determineDataLimits: function() {
                var e, t, a, i, s, o, u = this,
                    _ = u.chart,
                    h = u.options.time,
                    f = h.unit || "day",
                    p = l,
                    y = d,
                    g = [],
                    L = [],
                    Y = [];
                for (e = 0, a = _.data.labels.length; e < a; ++e) Y.push(M(_.data.labels[e], u));
                for (e = 0, a = (_.data.datasets || []).length; e < a; ++e)
                    if (_.isDatasetVisible(e))
                        if (s = _.data.datasets[e].data, r.isObject(s[0]))
                            for (L[e] = [], t = 0, i = s.length; t < i; ++t) o = M(s[t], u), g.push(o), L[e][t] = o;
                        else g.push.apply(g, Y), L[e] = Y.slice(0);
                else L[e] = [];
                Y.length && (Y = c(Y).sort(m), p = Math.min(p, Y[0]), y = Math.max(y, Y[Y.length - 1])), g.length && (g = c(g).sort(m), p = Math.min(p, g[0]), y = Math.max(y, g[g.length - 1])), p = M(h.min, u) || p, y = M(h.max, u) || y, p = p === l ? +n().startOf(f) : p, y = y === d ? +n().endOf(f) + 1 : y, u.min = Math.min(p, y), u.max = Math.max(p + 1, y), u._horizontal = u.isHorizontal(), u._table = [], u._timestamps = {
                    data: g,
                    datasets: L,
                    labels: Y
                }
            },
            buildTicks: function() {
                var e, t, a, i = this,
                    r = i.min,
                    s = i.max,
                    o = i.options,
                    d = o.time,
                    l = [],
                    m = [];
                switch (o.ticks.source) {
                    case "data":
                        l = i._timestamps.data;
                        break;
                    case "labels":
                        l = i._timestamps.labels;
                        break;
                    case "auto":
                    default:
                        l = y(r, s, i.getLabelCapacity(r), o)
                }
                for ("ticks" === o.bounds && l.length && (r = l[0], s = l[l.length - 1]), r = M(d.min, i) || r, s = M(d.max, i) || s, e = 0, t = l.length; e < t; ++e)(a = l[e]) >= r && a <= s && m.push(a);
                return i.min = r, i.max = s, i._unit = d.unit || function(e, t, a, i) {
                        var r, s, o = n.duration(n(i).diff(n(a)));
                        for (r = _.length - 1; r >= _.indexOf(t); r--)
                            if (s = _[r], u[s].common && o.as(s) >= e.length) return s;
                        return _[t ? _.indexOf(t) : 0]
                    }(m, d.minUnit, i.min, i.max), i._majorUnit = p(i._unit), i._table = function(e, t, a, n) {
                        if ("linear" === n || !e.length) return [{
                            time: t,
                            pos: 0
                        }, {
                            time: a,
                            pos: 1
                        }];
                        var i, r, s, o, d, l = [],
                            u = [t];
                        for (i = 0, r = e.length; i < r; ++i)(o = e[i]) > t && o < a && u.push(o);
                        for (u.push(a), i = 0, r = u.length; i < r; ++i) d = u[i + 1], s = u[i - 1], o = u[i], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({
                            time: o,
                            pos: i / (r - 1)
                        });
                        return l
                    }(i._timestamps.data, r, s, o.distribution), i._offsets = function(e, t, a, n, i) {
                        var r, s, o = 0,
                            d = 0;
                        return i.offset && t.length && (i.time.min || (r = t.length > 1 ? t[1] : n, s = t[0], o = (h(e, "time", r, "pos") - h(e, "time", s, "pos")) / 2), i.time.max || (r = t[t.length - 1], s = t.length > 1 ? t[t.length - 2] : a, d = (h(e, "time", r, "pos") - h(e, "time", s, "pos")) / 2)), {
                            left: o,
                            right: d
                        }
                    }(i._table, m, r, s, o), i._labelFormat = function(e, t) {
                        var a, n, i, r = e.length;
                        for (a = 0; a < r; a++) {
                            if (0 !== (n = f(e[a], t)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                            0 === n.second() && 0 === n.minute() && 0 === n.hour() || (i = !0)
                        }
                        return i ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                    }(i._timestamps.data, d),
                    function(e, t) {
                        var a, i, r, s, o = [];
                        for (a = 0, i = e.length; a < i; ++a) r = e[a], s = !!t && r === +n(r).startOf(t), o.push({
                            value: r,
                            major: s
                        });
                        return o
                    }(m, i._majorUnit)
            },
            getLabelForIndex: function(e, t) {
                var a = this.chart.data,
                    n = this.options.time,
                    i = a.labels && e < a.labels.length ? a.labels[e] : "",
                    s = a.datasets[t].data[e];
                return r.isObject(s) && (i = this.getRightValue(s)), n.tooltipFormat ? f(i, n).format(n.tooltipFormat) : "string" == typeof i ? i : f(i, n).format(this._labelFormat)
            },
            tickFormatFunction: function(e, t, a, n) {
                var i = this.options,
                    s = e.valueOf(),
                    o = i.time.displayFormats,
                    d = o[this._unit],
                    l = this._majorUnit,
                    u = o[l],
                    _ = e.clone().startOf(l).valueOf(),
                    m = i.ticks.major,
                    c = m.enabled && l && u && s === _,
                    h = e.format(n || (c ? u : d)),
                    f = c ? m : i.ticks.minor,
                    M = r.valueOrDefault(f.callback, f.userCallback);
                return M ? M(h, t, a) : h
            },
            convertTicksToLabels: function(e) {
                var t, a, i = [];
                for (t = 0, a = e.length; t < a; ++t) i.push(this.tickFormatFunction(n(e[t].value), t, e));
                return i
            },
            getPixelForOffset: function(e) {
                var t = this,
                    a = t._horizontal ? t.width : t.height,
                    n = t._horizontal ? t.left : t.top,
                    i = h(t._table, "time", e, "pos");
                return n + a * (t._offsets.left + i) / (t._offsets.left + 1 + t._offsets.right)
            },
            getPixelForValue: function(e, t, a) {
                var n = null;
                if (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]), null === n && (n = M(e, this)), null !== n) return this.getPixelForOffset(n)
            },
            getPixelForTick: function(e) {
                var t = this.getTicks();
                return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
            },
            getValueForPixel: function(e) {
                var t = this,
                    a = t._horizontal ? t.width : t.height,
                    i = t._horizontal ? t.left : t.top,
                    r = (a ? (e - i) / a : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                    s = h(t._table, "pos", r, "time");
                return n(s)
            },
            getLabelWidth: function(e) {
                var t = this.options.ticks,
                    a = this.ctx.measureText(e).width,
                    n = r.toRadians(t.maxRotation),
                    s = Math.cos(n),
                    o = Math.sin(n);
                return a * s + r.valueOrDefault(t.fontSize, i.global.defaultFontSize) * o
            },
            getLabelCapacity: function(e) {
                var t = this,
                    a = t.options.time.displayFormats.millisecond,
                    i = t.tickFormatFunction(n(e), 0, [], a),
                    r = t.getLabelWidth(i),
                    s = t.isHorizontal() ? t.width : t.height,
                    o = Math.floor(s / r);
                return o > 0 ? o : 1
            }
        });
        o.registerScaleType("time", e, {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            time: {
                parser: !1,
                format: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {
                    millisecond: "h:mm:ss.SSS a",
                    second: "h:mm:ss a",
                    minute: "h:mm a",
                    hour: "hA",
                    day: "MMM D",
                    week: "ll",
                    month: "MMM YYYY",
                    quarter: "[Q]Q - YYYY",
                    year: "YYYY"
                }
            },
            ticks: {
                autoSkip: !1,
                source: "auto",
                major: {
                    enabled: !1
                }
            }
        })
    }
}, function(e, t, a) {
    var n = {
        "./af": 27,
        "./af.js": 27,
        "./ar": 28,
        "./ar-dz": 29,
        "./ar-dz.js": 29,
        "./ar-kw": 30,
        "./ar-kw.js": 30,
        "./ar-ly": 31,
        "./ar-ly.js": 31,
        "./ar-ma": 32,
        "./ar-ma.js": 32,
        "./ar-sa": 33,
        "./ar-sa.js": 33,
        "./ar-tn": 34,
        "./ar-tn.js": 34,
        "./ar.js": 28,
        "./az": 35,
        "./az.js": 35,
        "./be": 36,
        "./be.js": 36,
        "./bg": 37,
        "./bg.js": 37,
        "./bm": 38,
        "./bm.js": 38,
        "./bn": 39,
        "./bn.js": 39,
        "./bo": 40,
        "./bo.js": 40,
        "./br": 41,
        "./br.js": 41,
        "./bs": 42,
        "./bs.js": 42,
        "./ca": 43,
        "./ca.js": 43,
        "./cs": 44,
        "./cs.js": 44,
        "./cv": 45,
        "./cv.js": 45,
        "./cy": 46,
        "./cy.js": 46,
        "./da": 47,
        "./da.js": 47,
        "./de": 48,
        "./de-at": 49,
        "./de-at.js": 49,
        "./de-ch": 50,
        "./de-ch.js": 50,
        "./de.js": 48,
        "./dv": 51,
        "./dv.js": 51,
        "./el": 52,
        "./el.js": 52,
        "./en-au": 53,
        "./en-au.js": 53,
        "./en-ca": 54,
        "./en-ca.js": 54,
        "./en-gb": 55,
        "./en-gb.js": 55,
        "./en-ie": 56,
        "./en-ie.js": 56,
        "./en-il": 57,
        "./en-il.js": 57,
        "./en-nz": 58,
        "./en-nz.js": 58,
        "./eo": 59,
        "./eo.js": 59,
        "./es": 60,
        "./es-do": 61,
        "./es-do.js": 61,
        "./es-us": 62,
        "./es-us.js": 62,
        "./es.js": 60,
        "./et": 63,
        "./et.js": 63,
        "./eu": 64,
        "./eu.js": 64,
        "./fa": 65,
        "./fa.js": 65,
        "./fi": 66,
        "./fi.js": 66,
        "./fo": 67,
        "./fo.js": 67,
        "./fr": 68,
        "./fr-ca": 69,
        "./fr-ca.js": 69,
        "./fr-ch": 70,
        "./fr-ch.js": 70,
        "./fr.js": 68,
        "./fy": 71,
        "./fy.js": 71,
        "./gd": 72,
        "./gd.js": 72,
        "./gl": 73,
        "./gl.js": 73,
        "./gom-latn": 74,
        "./gom-latn.js": 74,
        "./gu": 75,
        "./gu.js": 75,
        "./he": 76,
        "./he.js": 76,
        "./hi": 77,
        "./hi.js": 77,
        "./hr": 78,
        "./hr.js": 78,
        "./hu": 79,
        "./hu.js": 79,
        "./hy-am": 80,
        "./hy-am.js": 80,
        "./id": 81,
        "./id.js": 81,
        "./is": 82,
        "./is.js": 82,
        "./it": 83,
        "./it.js": 83,
        "./ja": 84,
        "./ja.js": 84,
        "./jv": 85,
        "./jv.js": 85,
        "./ka": 86,
        "./ka.js": 86,
        "./kk": 87,
        "./kk.js": 87,
        "./km": 88,
        "./km.js": 88,
        "./kn": 89,
        "./kn.js": 89,
        "./ko": 90,
        "./ko.js": 90,
        "./ky": 91,
        "./ky.js": 91,
        "./lb": 92,
        "./lb.js": 92,
        "./lo": 93,
        "./lo.js": 93,
        "./lt": 94,
        "./lt.js": 94,
        "./lv": 95,
        "./lv.js": 95,
        "./me": 96,
        "./me.js": 96,
        "./mi": 97,
        "./mi.js": 97,
        "./mk": 98,
        "./mk.js": 98,
        "./ml": 99,
        "./ml.js": 99,
        "./mn": 100,
        "./mn.js": 100,
        "./mr": 101,
        "./mr.js": 101,
        "./ms": 102,
        "./ms-my": 103,
        "./ms-my.js": 103,
        "./ms.js": 102,
        "./mt": 104,
        "./mt.js": 104,
        "./my": 105,
        "./my.js": 105,
        "./nb": 106,
        "./nb.js": 106,
        "./ne": 107,
        "./ne.js": 107,
        "./nl": 108,
        "./nl-be": 109,
        "./nl-be.js": 109,
        "./nl.js": 108,
        "./nn": 110,
        "./nn.js": 110,
        "./pa-in": 111,
        "./pa-in.js": 111,
        "./pl": 112,
        "./pl.js": 112,
        "./pt": 113,
        "./pt-br": 114,
        "./pt-br.js": 114,
        "./pt.js": 113,
        "./ro": 115,
        "./ro.js": 115,
        "./ru": 116,
        "./ru.js": 116,
        "./sd": 117,
        "./sd.js": 117,
        "./se": 118,
        "./se.js": 118,
        "./si": 119,
        "./si.js": 119,
        "./sk": 120,
        "./sk.js": 120,
        "./sl": 121,
        "./sl.js": 121,
        "./sq": 122,
        "./sq.js": 122,
        "./sr": 123,
        "./sr-cyrl": 124,
        "./sr-cyrl.js": 124,
        "./sr.js": 123,
        "./ss": 125,
        "./ss.js": 125,
        "./sv": 126,
        "./sv.js": 126,
        "./sw": 127,
        "./sw.js": 127,
        "./ta": 128,
        "./ta.js": 128,
        "./te": 129,
        "./te.js": 129,
        "./tet": 130,
        "./tet.js": 130,
        "./tg": 131,
        "./tg.js": 131,
        "./th": 132,
        "./th.js": 132,
        "./tl-ph": 133,
        "./tl-ph.js": 133,
        "./tlh": 134,
        "./tlh.js": 134,
        "./tr": 135,
        "./tr.js": 135,
        "./tzl": 136,
        "./tzl.js": 136,
        "./tzm": 137,
        "./tzm-latn": 138,
        "./tzm-latn.js": 138,
        "./tzm.js": 137,
        "./ug-cn": 139,
        "./ug-cn.js": 139,
        "./uk": 140,
        "./uk.js": 140,
        "./ur": 141,
        "./ur.js": 141,
        "./uz": 142,
        "./uz-latn": 143,
        "./uz-latn.js": 143,
        "./uz.js": 142,
        "./vi": 144,
        "./vi.js": 144,
        "./x-pseudo": 145,
        "./x-pseudo.js": 145,
        "./yo": 146,
        "./yo.js": 146,
        "./zh-cn": 147,
        "./zh-cn.js": 147,
        "./zh-hk": 148,
        "./zh-hk.js": 148,
        "./zh-tw": 149,
        "./zh-tw.js": 149
    };

    function i(e) {
        var t = r(e);
        return a(t)
    }

    function r(e) {
        if (!a.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
    }
    i.keys = function() {
        return Object.keys(n)
    }, i.resolve = r, e.exports = i, i.id = 209
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(6),
        r = a(2);
    n._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    }), n._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                position: "left",
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            callbacks: {
                title: function(e, t) {
                    var a = "";
                    return e.length > 0 && (e[0].yLabel ? a = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (a = t.labels[e[0].index])), a
                },
                label: function(e, t) {
                    return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
                }
            },
            mode: "index",
            axis: "y"
        }
    }), e.exports = function(e) {
        e.controllers.bar = e.DatasetController.extend({
            dataElementType: i.Rectangle,
            initialize: function() {
                var t, a = this;
                e.DatasetController.prototype.initialize.apply(a, arguments), (t = a.getMeta()).stack = a.getDataset().stack, t.bar = !0
            },
            update: function(e) {
                var t, a, n = this.getMeta().data;
                for (this._ruler = this.getRuler(), t = 0, a = n.length; t < a; ++t) this.updateElement(n[t], t, e)
            },
            updateElement: function(e, t, a) {
                var n = this,
                    i = n.chart,
                    s = n.getMeta(),
                    o = n.getDataset(),
                    d = e.custom || {},
                    l = i.options.elements.rectangle;
                e._xScale = n.getScaleForId(s.xAxisID), e._yScale = n.getScaleForId(s.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
                    datasetLabel: o.label,
                    label: i.data.labels[t],
                    borderSkipped: d.borderSkipped ? d.borderSkipped : l.borderSkipped,
                    backgroundColor: d.backgroundColor ? d.backgroundColor : r.valueAtIndexOrDefault(o.backgroundColor, t, l.backgroundColor),
                    borderColor: d.borderColor ? d.borderColor : r.valueAtIndexOrDefault(o.borderColor, t, l.borderColor),
                    borderWidth: d.borderWidth ? d.borderWidth : r.valueAtIndexOrDefault(o.borderWidth, t, l.borderWidth)
                }, n.updateElementGeometry(e, t, a), e.pivot()
            },
            updateElementGeometry: function(e, t, a) {
                var n = this,
                    i = e._model,
                    r = n.getValueScale(),
                    s = r.getBasePixel(),
                    o = r.isHorizontal(),
                    d = n._ruler || n.getRuler(),
                    l = n.calculateBarValuePixels(n.index, t),
                    u = n.calculateBarIndexPixels(n.index, t, d);
                i.horizontal = o, i.base = a ? s : l.base, i.x = o ? a ? s : l.head : u.center, i.y = o ? u.center : a ? s : l.head, i.height = o ? u.size : void 0, i.width = o ? void 0 : u.size
            },
            getValueScaleId: function() {
                return this.getMeta().yAxisID
            },
            getIndexScaleId: function() {
                return this.getMeta().xAxisID
            },
            getValueScale: function() {
                return this.getScaleForId(this.getValueScaleId())
            },
            getIndexScale: function() {
                return this.getScaleForId(this.getIndexScaleId())
            },
            _getStacks: function(e) {
                var t, a, n = this.chart,
                    i = this.getIndexScale().options.stacked,
                    r = void 0 === e ? n.data.datasets.length : e + 1,
                    s = [];
                for (t = 0; t < r; ++t)(a = n.getDatasetMeta(t)).bar && n.isDatasetVisible(t) && (!1 === i || !0 === i && -1 === s.indexOf(a.stack) || void 0 === i && (void 0 === a.stack || -1 === s.indexOf(a.stack))) && s.push(a.stack);
                return s
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(e, t) {
                var a = this._getStacks(e),
                    n = void 0 !== t ? a.indexOf(t) : -1;
                return -1 === n ? a.length - 1 : n
            },
            getRuler: function() {
                var e, t, a = this.getIndexScale(),
                    n = this.getStackCount(),
                    i = this.index,
                    s = a.isHorizontal(),
                    o = s ? a.left : a.top,
                    d = o + (s ? a.width : a.height),
                    l = [];
                for (e = 0, t = this.getMeta().data.length; e < t; ++e) l.push(a.getPixelForValue(null, e, i));
                return {
                    min: r.isNullOrUndef(a.options.barThickness) ? function(e, t) {
                        var a, n, i, r, s = e.isHorizontal() ? e.width : e.height,
                            o = e.getTicks();
                        for (i = 1, r = t.length; i < r; ++i) s = Math.min(s, t[i] - t[i - 1]);
                        for (i = 0, r = o.length; i < r; ++i) n = e.getPixelForTick(i), s = i > 0 ? Math.min(s, n - a) : s, a = n;
                        return s
                    }(a, l) : -1,
                    pixels: l,
                    start: o,
                    end: d,
                    stackCount: n,
                    scale: a
                }
            },
            calculateBarValuePixels: function(e, t) {
                var a, n, i, r, s, o, d = this.chart,
                    l = this.getMeta(),
                    u = this.getValueScale(),
                    _ = d.data.datasets,
                    m = u.getRightValue(_[e].data[t]),
                    c = u.options.stacked,
                    h = l.stack,
                    f = 0;
                if (c || void 0 === c && void 0 !== h)
                    for (a = 0; a < e; ++a)(n = d.getDatasetMeta(a)).bar && n.stack === h && n.controller.getValueScaleId() === u.id && d.isDatasetVisible(a) && (i = u.getRightValue(_[a].data[t]), (m < 0 && i < 0 || m >= 0 && i > 0) && (f += i));
                return r = u.getPixelForValue(f), {
                    size: o = ((s = u.getPixelForValue(f + m)) - r) / 2,
                    base: r,
                    head: s,
                    center: s + o / 2
                }
            },
            calculateBarIndexPixels: function(e, t, a) {
                var n = a.scale.options,
                    i = "flex" === n.barThickness ? function(e, t, a) {
                        var n, i = t.pixels,
                            r = i[e],
                            s = e > 0 ? i[e - 1] : null,
                            o = e < i.length - 1 ? i[e + 1] : null,
                            d = a.categoryPercentage;
                        return null === s && (s = r - (null === o ? t.end - r : o - r)), null === o && (o = r + r - s), n = r - (r - s) / 2 * d, {
                            chunk: (o - s) / 2 * d / t.stackCount,
                            ratio: a.barPercentage,
                            start: n
                        }
                    }(t, a, n) : function(e, t, a) {
                        var n, i, s = a.barThickness,
                            o = t.stackCount,
                            d = t.pixels[e];
                        return r.isNullOrUndef(s) ? (n = t.min * a.categoryPercentage, i = a.barPercentage) : (n = s * o, i = 1), {
                            chunk: n / o,
                            ratio: i,
                            start: d - n / 2
                        }
                    }(t, a, n),
                    s = this.getStackIndex(e, this.getMeta().stack),
                    o = i.start + i.chunk * s + i.chunk / 2,
                    d = Math.min(r.valueOrDefault(n.maxBarThickness, 1 / 0), i.chunk * i.ratio);
                return {
                    base: o - d / 2,
                    head: o + d / 2,
                    center: o,
                    size: d
                }
            },
            draw: function() {
                var e = this.chart,
                    t = this.getValueScale(),
                    a = this.getMeta().data,
                    n = this.getDataset(),
                    i = a.length,
                    s = 0;
                for (r.canvas.clipArea(e.ctx, e.chartArea); s < i; ++s) isNaN(t.getRightValue(n.data[s])) || a[s].draw();
                r.canvas.unclipArea(e.ctx)
            }
        }), e.controllers.horizontalBar = e.controllers.bar.extend({
            getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(6),
        r = a(2);
    n._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(e, t) {
                    var a = t.datasets[e.datasetIndex].label || "",
                        n = t.datasets[e.datasetIndex].data[e.index];
                    return a + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")"
                }
            }
        }
    }), e.exports = function(e) {
        e.controllers.bubble = e.DatasetController.extend({
            dataElementType: i.Point,
            update: function(e) {
                var t = this,
                    a = t.getMeta().data;
                r.each(a, (function(a, n) {
                    t.updateElement(a, n, e)
                }))
            },
            updateElement: function(e, t, a) {
                var n = this,
                    i = n.getMeta(),
                    r = e.custom || {},
                    s = n.getScaleForId(i.xAxisID),
                    o = n.getScaleForId(i.yAxisID),
                    d = n._resolveElementOptions(e, t),
                    l = n.getDataset().data[t],
                    u = n.index,
                    _ = a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof l ? l : NaN, t, u),
                    m = a ? o.getBasePixel() : o.getPixelForValue(l, t, u);
                e._xScale = s, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = {
                    backgroundColor: d.backgroundColor,
                    borderColor: d.borderColor,
                    borderWidth: d.borderWidth,
                    hitRadius: d.hitRadius,
                    pointStyle: d.pointStyle,
                    rotation: d.rotation,
                    radius: a ? 0 : d.radius,
                    skip: r.skip || isNaN(_) || isNaN(m),
                    x: _,
                    y: m
                }, e.pivot()
            },
            setHoverStyle: function(e) {
                var t = e._model,
                    a = e._options;
                e.$previousStyle = {
                    backgroundColor: t.backgroundColor,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth,
                    radius: t.radius
                }, t.backgroundColor = r.valueOrDefault(a.hoverBackgroundColor, r.getHoverColor(a.backgroundColor)), t.borderColor = r.valueOrDefault(a.hoverBorderColor, r.getHoverColor(a.borderColor)), t.borderWidth = r.valueOrDefault(a.hoverBorderWidth, a.borderWidth), t.radius = a.radius + a.hoverRadius
            },
            _resolveElementOptions: function(e, t) {
                var a, n, i, s = this.chart,
                    o = s.data.datasets[this.index],
                    d = e.custom || {},
                    l = s.options.elements.point,
                    u = r.options.resolve,
                    _ = o.data[t],
                    m = {},
                    c = {
                        chart: s,
                        dataIndex: t,
                        dataset: o,
                        datasetIndex: this.index
                    },
                    h = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                for (a = 0, n = h.length; a < n; ++a) m[i = h[a]] = u([d[i], o[i], l[i]], c, t);
                return m.radius = u([d.radius, _ ? _.r : void 0, o.radius, l.radius], c, t), m
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(6),
        r = a(2);
    n._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(e) {
            var t = [];
            t.push('<ul class="' + e.id + '-legend">');
            var a = e.data,
                n = a.datasets,
                i = a.labels;
            if (n.length)
                for (var r = 0; r < n[0].data.length; ++r) t.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
            return t.push("</ul>"), t.join("")
        },
        legend: {
            labels: {
                generateLabels: function(e) {
                    var t = e.data;
                    return t.labels.length && t.datasets.length ? t.labels.map((function(a, n) {
                        var i = e.getDatasetMeta(0),
                            s = t.datasets[0],
                            o = i.data[n],
                            d = o && o.custom || {},
                            l = r.valueAtIndexOrDefault,
                            u = e.options.elements.arc;
                        return {
                            text: a,
                            fillStyle: d.backgroundColor ? d.backgroundColor : l(s.backgroundColor, n, u.backgroundColor),
                            strokeStyle: d.borderColor ? d.borderColor : l(s.borderColor, n, u.borderColor),
                            lineWidth: d.borderWidth ? d.borderWidth : l(s.borderWidth, n, u.borderWidth),
                            hidden: isNaN(s.data[n]) || i.data[n].hidden,
                            index: n
                        }
                    })) : []
                }
            },
            onClick: function(e, t) {
                var a, n, i, r = t.index,
                    s = this.chart;
                for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(i = s.getDatasetMeta(a)).data[r] && (i.data[r].hidden = !i.data[r].hidden);
                s.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(e, t) {
                    var a = t.labels[e.index],
                        n = ": " + t.datasets[e.datasetIndex].data[e.index];
                    return r.isArray(a) ? (a = a.slice())[0] += n : a += n, a
                }
            }
        }
    }), n._set("pie", r.clone(n.doughnut)), n._set("pie", {
        cutoutPercentage: 0
    }), e.exports = function(e) {
        e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
            dataElementType: i.Arc,
            linkScales: r.noop,
            getRingIndex: function(e) {
                for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t;
                return t
            },
            update: function(e) {
                var t = this,
                    a = t.chart,
                    n = a.chartArea,
                    i = a.options,
                    s = i.elements.arc,
                    o = n.right - n.left - s.borderWidth,
                    d = n.bottom - n.top - s.borderWidth,
                    l = Math.min(o, d),
                    u = {
                        x: 0,
                        y: 0
                    },
                    _ = t.getMeta(),
                    m = i.cutoutPercentage,
                    c = i.circumference;
                if (c < 2 * Math.PI) {
                    var h = i.rotation % (2 * Math.PI),
                        f = (h += 2 * Math.PI * (h >= Math.PI ? -1 : h < -Math.PI ? 1 : 0)) + c,
                        M = {
                            x: Math.cos(h),
                            y: Math.sin(h)
                        },
                        p = {
                            x: Math.cos(f),
                            y: Math.sin(f)
                        },
                        y = h <= 0 && f >= 0 || h <= 2 * Math.PI && 2 * Math.PI <= f,
                        g = h <= .5 * Math.PI && .5 * Math.PI <= f || h <= 2.5 * Math.PI && 2.5 * Math.PI <= f,
                        L = h <= -Math.PI && -Math.PI <= f || h <= Math.PI && Math.PI <= f,
                        Y = h <= .5 * -Math.PI && .5 * -Math.PI <= f || h <= 1.5 * Math.PI && 1.5 * Math.PI <= f,
                        v = m / 100,
                        k = {
                            x: L ? -1 : Math.min(M.x * (M.x < 0 ? 1 : v), p.x * (p.x < 0 ? 1 : v)),
                            y: Y ? -1 : Math.min(M.y * (M.y < 0 ? 1 : v), p.y * (p.y < 0 ? 1 : v))
                        },
                        b = {
                            x: y ? 1 : Math.max(M.x * (M.x > 0 ? 1 : v), p.x * (p.x > 0 ? 1 : v)),
                            y: g ? 1 : Math.max(M.y * (M.y > 0 ? 1 : v), p.y * (p.y > 0 ? 1 : v))
                        },
                        D = {
                            width: .5 * (b.x - k.x),
                            height: .5 * (b.y - k.y)
                        };
                    l = Math.min(o / D.width, d / D.height), u = {
                        x: -.5 * (b.x + k.x),
                        y: -.5 * (b.y + k.y)
                    }
                }
                a.borderWidth = t.getMaxBorderWidth(_.data), a.outerRadius = Math.max((l - a.borderWidth) / 2, 0), a.innerRadius = Math.max(m ? a.outerRadius / 100 * m : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, _.total = t.calculateTotal(), t.outerRadius = a.outerRadius - a.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - a.radiusLength, 0), r.each(_.data, (function(a, n) {
                    t.updateElement(a, n, e)
                }))
            },
            updateElement: function(e, t, a) {
                var n = this,
                    i = n.chart,
                    s = i.chartArea,
                    o = i.options,
                    d = o.animation,
                    l = (s.left + s.right) / 2,
                    u = (s.top + s.bottom) / 2,
                    _ = o.rotation,
                    m = o.rotation,
                    c = n.getDataset(),
                    h = a && d.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(c.data[t]) * (o.circumference / (2 * Math.PI)),
                    f = a && d.animateScale ? 0 : n.innerRadius,
                    M = a && d.animateScale ? 0 : n.outerRadius,
                    p = r.valueAtIndexOrDefault;
                r.extend(e, {
                    _datasetIndex: n.index,
                    _index: t,
                    _model: {
                        x: l + i.offsetX,
                        y: u + i.offsetY,
                        startAngle: _,
                        endAngle: m,
                        circumference: h,
                        outerRadius: M,
                        innerRadius: f,
                        label: p(c.label, t, i.data.labels[t])
                    }
                });
                var y = e._model,
                    g = e.custom || {},
                    L = r.valueAtIndexOrDefault,
                    Y = this.chart.options.elements.arc;
                y.backgroundColor = g.backgroundColor ? g.backgroundColor : L(c.backgroundColor, t, Y.backgroundColor), y.borderColor = g.borderColor ? g.borderColor : L(c.borderColor, t, Y.borderColor), y.borderWidth = g.borderWidth ? g.borderWidth : L(c.borderWidth, t, Y.borderWidth), a && d.animateRotate || (y.startAngle = 0 === t ? o.rotation : n.getMeta().data[t - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
            },
            calculateTotal: function() {
                var e, t = this.getDataset(),
                    a = this.getMeta(),
                    n = 0;
                return r.each(a.data, (function(a, i) {
                    e = t.data[i], isNaN(e) || a.hidden || (n += Math.abs(e))
                })), n
            },
            calculateCircumference: function(e) {
                var t = this.getMeta().total;
                return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0
            },
            getMaxBorderWidth: function(e) {
                for (var t, a, n = 0, i = this.index, r = e.length, s = 0; s < r; s++) t = e[s]._model ? e[s]._model.borderWidth : 0, n = (a = e[s]._chart ? e[s]._chart.config.data.datasets[i].hoverBorderWidth : 0) > (n = t > n ? t : n) ? a : n;
                return n
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(6),
        r = a(2);
    n._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    }), e.exports = function(e) {
        function t(e, t) {
            return r.valueOrDefault(e.showLine, t.showLines)
        }
        e.controllers.line = e.DatasetController.extend({
            datasetElementType: i.Line,
            dataElementType: i.Point,
            update: function(e) {
                var a, n, i, s = this,
                    o = s.getMeta(),
                    d = o.dataset,
                    l = o.data || [],
                    u = s.chart.options,
                    _ = u.elements.line,
                    m = s.getScaleForId(o.yAxisID),
                    c = s.getDataset(),
                    h = t(c, u);
                for (h && (i = d.custom || {}, void 0 !== c.tension && void 0 === c.lineTension && (c.lineTension = c.tension), d._scale = m, d._datasetIndex = s.index, d._children = l, d._model = {
                        spanGaps: c.spanGaps ? c.spanGaps : u.spanGaps,
                        tension: i.tension ? i.tension : r.valueOrDefault(c.lineTension, _.tension),
                        backgroundColor: i.backgroundColor ? i.backgroundColor : c.backgroundColor || _.backgroundColor,
                        borderWidth: i.borderWidth ? i.borderWidth : c.borderWidth || _.borderWidth,
                        borderColor: i.borderColor ? i.borderColor : c.borderColor || _.borderColor,
                        borderCapStyle: i.borderCapStyle ? i.borderCapStyle : c.borderCapStyle || _.borderCapStyle,
                        borderDash: i.borderDash ? i.borderDash : c.borderDash || _.borderDash,
                        borderDashOffset: i.borderDashOffset ? i.borderDashOffset : c.borderDashOffset || _.borderDashOffset,
                        borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : c.borderJoinStyle || _.borderJoinStyle,
                        fill: i.fill ? i.fill : void 0 !== c.fill ? c.fill : _.fill,
                        steppedLine: i.steppedLine ? i.steppedLine : r.valueOrDefault(c.steppedLine, _.stepped),
                        cubicInterpolationMode: i.cubicInterpolationMode ? i.cubicInterpolationMode : r.valueOrDefault(c.cubicInterpolationMode, _.cubicInterpolationMode)
                    }, d.pivot()), a = 0, n = l.length; a < n; ++a) s.updateElement(l[a], a, e);
                for (h && 0 !== d._model.tension && s.updateBezierControlPoints(), a = 0, n = l.length; a < n; ++a) l[a].pivot()
            },
            getPointBackgroundColor: function(e, t) {
                var a = this.chart.options.elements.point.backgroundColor,
                    n = this.getDataset(),
                    i = e.custom || {};
                return i.backgroundColor ? a = i.backgroundColor : n.pointBackgroundColor ? a = r.valueAtIndexOrDefault(n.pointBackgroundColor, t, a) : n.backgroundColor && (a = n.backgroundColor), a
            },
            getPointBorderColor: function(e, t) {
                var a = this.chart.options.elements.point.borderColor,
                    n = this.getDataset(),
                    i = e.custom || {};
                return i.borderColor ? a = i.borderColor : n.pointBorderColor ? a = r.valueAtIndexOrDefault(n.pointBorderColor, t, a) : n.borderColor && (a = n.borderColor), a
            },
            getPointBorderWidth: function(e, t) {
                var a = this.chart.options.elements.point.borderWidth,
                    n = this.getDataset(),
                    i = e.custom || {};
                return isNaN(i.borderWidth) ? !isNaN(n.pointBorderWidth) || r.isArray(n.pointBorderWidth) ? a = r.valueAtIndexOrDefault(n.pointBorderWidth, t, a) : isNaN(n.borderWidth) || (a = n.borderWidth) : a = i.borderWidth, a
            },
            getPointRotation: function(e, t) {
                var a = this.chart.options.elements.point.rotation,
                    n = this.getDataset(),
                    i = e.custom || {};
                return isNaN(i.rotation) ? isNaN(n.pointRotation) && !r.isArray(n.pointRotation) || (a = r.valueAtIndexOrDefault(n.pointRotation, t, a)) : a = i.rotation, a
            },
            updateElement: function(e, t, a) {
                var n, i, s = this,
                    o = s.getMeta(),
                    d = e.custom || {},
                    l = s.getDataset(),
                    u = s.index,
                    _ = l.data[t],
                    m = s.getScaleForId(o.yAxisID),
                    c = s.getScaleForId(o.xAxisID),
                    h = s.chart.options.elements.point;
                void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), n = c.getPixelForValue("object" == typeof _ ? _ : NaN, t, u), i = a ? m.getBasePixel() : s.calculatePointY(_, t, u), e._xScale = c, e._yScale = m, e._datasetIndex = u, e._index = t, e._model = {
                    x: n,
                    y: i,
                    skip: d.skip || isNaN(n) || isNaN(i),
                    radius: d.radius || r.valueAtIndexOrDefault(l.pointRadius, t, h.radius),
                    pointStyle: d.pointStyle || r.valueAtIndexOrDefault(l.pointStyle, t, h.pointStyle),
                    rotation: s.getPointRotation(e, t),
                    backgroundColor: s.getPointBackgroundColor(e, t),
                    borderColor: s.getPointBorderColor(e, t),
                    borderWidth: s.getPointBorderWidth(e, t),
                    tension: o.dataset._model ? o.dataset._model.tension : 0,
                    steppedLine: !!o.dataset._model && o.dataset._model.steppedLine,
                    hitRadius: d.hitRadius || r.valueAtIndexOrDefault(l.pointHitRadius, t, h.hitRadius)
                }
            },
            calculatePointY: function(e, t, a) {
                var n, i, r, s = this.chart,
                    o = this.getMeta(),
                    d = this.getScaleForId(o.yAxisID),
                    l = 0,
                    u = 0;
                if (d.options.stacked) {
                    for (n = 0; n < a; n++)
                        if (i = s.data.datasets[n], "line" === (r = s.getDatasetMeta(n)).type && r.yAxisID === d.id && s.isDatasetVisible(n)) {
                            var _ = Number(d.getRightValue(i.data[t]));
                            _ < 0 ? u += _ || 0 : l += _ || 0
                        }
                    var m = Number(d.getRightValue(e));
                    return m < 0 ? d.getPixelForValue(u + m) : d.getPixelForValue(l + m)
                }
                return d.getPixelForValue(e)
            },
            updateBezierControlPoints: function() {
                var e, t, a, n, i = this.getMeta(),
                    s = this.chart.chartArea,
                    o = i.data || [];

                function d(e, t, a) {
                    return Math.max(Math.min(e, a), t)
                }
                if (i.dataset._model.spanGaps && (o = o.filter((function(e) {
                        return !e._model.skip
                    }))), "monotone" === i.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(o);
                else
                    for (e = 0, t = o.length; e < t; ++e) a = o[e]._model, n = r.splineCurve(r.previousItem(o, e)._model, a, r.nextItem(o, e)._model, i.dataset._model.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
                if (this.chart.options.elements.line.capBezierPoints)
                    for (e = 0, t = o.length; e < t; ++e)(a = o[e]._model).controlPointPreviousX = d(a.controlPointPreviousX, s.left, s.right), a.controlPointPreviousY = d(a.controlPointPreviousY, s.top, s.bottom), a.controlPointNextX = d(a.controlPointNextX, s.left, s.right), a.controlPointNextY = d(a.controlPointNextY, s.top, s.bottom)
            },
            draw: function() {
                var e, a = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    s = a.chartArea,
                    o = i.length,
                    d = 0;
                for (t(this.getDataset(), a.options) && (e = (n.dataset._model.borderWidth || 0) / 2, r.canvas.clipArea(a.ctx, {
                        left: s.left,
                        right: s.right,
                        top: s.top - e,
                        bottom: s.bottom + e
                    }), n.dataset.draw(), r.canvas.unclipArea(a.ctx)); d < o; ++d) i[d].draw(s)
            },
            setHoverStyle: function(e) {
                var t = this.chart.data.datasets[e._datasetIndex],
                    a = e._index,
                    n = e.custom || {},
                    i = e._model;
                e.$previousStyle = {
                    backgroundColor: i.backgroundColor,
                    borderColor: i.borderColor,
                    borderWidth: i.borderWidth,
                    radius: i.radius
                }, i.backgroundColor = n.hoverBackgroundColor || r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, a, r.getHoverColor(i.backgroundColor)), i.borderColor = n.hoverBorderColor || r.valueAtIndexOrDefault(t.pointHoverBorderColor, a, r.getHoverColor(i.borderColor)), i.borderWidth = n.hoverBorderWidth || r.valueAtIndexOrDefault(t.pointHoverBorderWidth, a, i.borderWidth), i.radius = n.hoverRadius || r.valueAtIndexOrDefault(t.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius)
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(6),
        r = a(2);
    n._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(e) {
            var t = [];
            t.push('<ul class="' + e.id + '-legend">');
            var a = e.data,
                n = a.datasets,
                i = a.labels;
            if (n.length)
                for (var r = 0; r < n[0].data.length; ++r) t.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
            return t.push("</ul>"), t.join("")
        },
        legend: {
            labels: {
                generateLabels: function(e) {
                    var t = e.data;
                    return t.labels.length && t.datasets.length ? t.labels.map((function(a, n) {
                        var i = e.getDatasetMeta(0),
                            s = t.datasets[0],
                            o = i.data[n].custom || {},
                            d = r.valueAtIndexOrDefault,
                            l = e.options.elements.arc;
                        return {
                            text: a,
                            fillStyle: o.backgroundColor ? o.backgroundColor : d(s.backgroundColor, n, l.backgroundColor),
                            strokeStyle: o.borderColor ? o.borderColor : d(s.borderColor, n, l.borderColor),
                            lineWidth: o.borderWidth ? o.borderWidth : d(s.borderWidth, n, l.borderWidth),
                            hidden: isNaN(s.data[n]) || i.data[n].hidden,
                            index: n
                        }
                    })) : []
                }
            },
            onClick: function(e, t) {
                var a, n, i, r = t.index,
                    s = this.chart;
                for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(i = s.getDatasetMeta(a)).data[r].hidden = !i.data[r].hidden;
                s.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(e, t) {
                    return t.labels[e.index] + ": " + e.yLabel
                }
            }
        }
    }), e.exports = function(e) {
        e.controllers.polarArea = e.DatasetController.extend({
            dataElementType: i.Arc,
            linkScales: r.noop,
            update: function(e) {
                var t, a, n, i = this,
                    s = i.getDataset(),
                    o = i.getMeta(),
                    d = i.chart.options.startAngle || 0,
                    l = i._starts = [],
                    u = i._angles = [];
                for (i._updateRadius(), o.count = i.countVisibleElements(), t = 0, a = s.data.length; t < a; t++) l[t] = d, n = i._computeAngle(t), u[t] = n, d += n;
                r.each(o.data, (function(t, a) {
                    i.updateElement(t, a, e)
                }))
            },
            _updateRadius: function() {
                var e = this,
                    t = e.chart,
                    a = t.chartArea,
                    n = t.options,
                    i = n.elements.arc,
                    r = Math.min(a.right - a.left, a.bottom - a.top);
                t.outerRadius = Math.max((r - i.borderWidth / 2) / 2, 0), t.innerRadius = Math.max(n.cutoutPercentage ? t.outerRadius / 100 * n.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
            },
            updateElement: function(e, t, a) {
                var n = this,
                    i = n.chart,
                    s = n.getDataset(),
                    o = i.options,
                    d = o.animation,
                    l = i.scale,
                    u = i.data.labels,
                    _ = l.xCenter,
                    m = l.yCenter,
                    c = o.startAngle,
                    h = e.hidden ? 0 : l.getDistanceFromCenterForValue(s.data[t]),
                    f = n._starts[t],
                    M = f + (e.hidden ? 0 : n._angles[t]),
                    p = d.animateScale ? 0 : l.getDistanceFromCenterForValue(s.data[t]);
                r.extend(e, {
                    _datasetIndex: n.index,
                    _index: t,
                    _scale: l,
                    _model: {
                        x: _,
                        y: m,
                        innerRadius: 0,
                        outerRadius: a ? p : h,
                        startAngle: a && d.animateRotate ? c : f,
                        endAngle: a && d.animateRotate ? c : M,
                        label: r.valueAtIndexOrDefault(u, t, u[t])
                    }
                });
                var y = this.chart.options.elements.arc,
                    g = e.custom || {},
                    L = r.valueAtIndexOrDefault,
                    Y = e._model;
                Y.backgroundColor = g.backgroundColor ? g.backgroundColor : L(s.backgroundColor, t, y.backgroundColor), Y.borderColor = g.borderColor ? g.borderColor : L(s.borderColor, t, y.borderColor), Y.borderWidth = g.borderWidth ? g.borderWidth : L(s.borderWidth, t, y.borderWidth), e.pivot()
            },
            countVisibleElements: function() {
                var e = this.getDataset(),
                    t = this.getMeta(),
                    a = 0;
                return r.each(t.data, (function(t, n) {
                    isNaN(e.data[n]) || t.hidden || a++
                })), a
            },
            _computeAngle: function(e) {
                var t = this,
                    a = this.getMeta().count,
                    n = t.getDataset(),
                    i = t.getMeta();
                if (isNaN(n.data[e]) || i.data[e].hidden) return 0;
                var s = {
                    chart: t.chart,
                    dataIndex: e,
                    dataset: n,
                    datasetIndex: t.index
                };
                return r.options.resolve([t.chart.options.elements.arc.angle, 2 * Math.PI / a], s, e)
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(6),
        r = a(2);
    n._set("radar", {
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                tension: 0
            }
        }
    }), e.exports = function(e) {
        e.controllers.radar = e.DatasetController.extend({
            datasetElementType: i.Line,
            dataElementType: i.Point,
            linkScales: r.noop,
            update: function(e) {
                var t = this,
                    a = t.getMeta(),
                    n = a.dataset,
                    i = a.data,
                    s = n.custom || {},
                    o = t.getDataset(),
                    d = t.chart.options.elements.line,
                    l = t.chart.scale;
                void 0 !== o.tension && void 0 === o.lineTension && (o.lineTension = o.tension), r.extend(a.dataset, {
                    _datasetIndex: t.index,
                    _scale: l,
                    _children: i,
                    _loop: !0,
                    _model: {
                        tension: s.tension ? s.tension : r.valueOrDefault(o.lineTension, d.tension),
                        backgroundColor: s.backgroundColor ? s.backgroundColor : o.backgroundColor || d.backgroundColor,
                        borderWidth: s.borderWidth ? s.borderWidth : o.borderWidth || d.borderWidth,
                        borderColor: s.borderColor ? s.borderColor : o.borderColor || d.borderColor,
                        fill: s.fill ? s.fill : void 0 !== o.fill ? o.fill : d.fill,
                        borderCapStyle: s.borderCapStyle ? s.borderCapStyle : o.borderCapStyle || d.borderCapStyle,
                        borderDash: s.borderDash ? s.borderDash : o.borderDash || d.borderDash,
                        borderDashOffset: s.borderDashOffset ? s.borderDashOffset : o.borderDashOffset || d.borderDashOffset,
                        borderJoinStyle: s.borderJoinStyle ? s.borderJoinStyle : o.borderJoinStyle || d.borderJoinStyle
                    }
                }), a.dataset.pivot(), r.each(i, (function(a, n) {
                    t.updateElement(a, n, e)
                }), t), t.updateBezierControlPoints()
            },
            updateElement: function(e, t, a) {
                var n = this,
                    i = e.custom || {},
                    s = n.getDataset(),
                    o = n.chart.scale,
                    d = n.chart.options.elements.point,
                    l = o.getPointPositionForValue(t, s.data[t]);
                void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), r.extend(e, {
                    _datasetIndex: n.index,
                    _index: t,
                    _scale: o,
                    _model: {
                        x: a ? o.xCenter : l.x,
                        y: a ? o.yCenter : l.y,
                        tension: i.tension ? i.tension : r.valueOrDefault(s.lineTension, n.chart.options.elements.line.tension),
                        radius: i.radius ? i.radius : r.valueAtIndexOrDefault(s.pointRadius, t, d.radius),
                        backgroundColor: i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(s.pointBackgroundColor, t, d.backgroundColor),
                        borderColor: i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(s.pointBorderColor, t, d.borderColor),
                        borderWidth: i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(s.pointBorderWidth, t, d.borderWidth),
                        pointStyle: i.pointStyle ? i.pointStyle : r.valueAtIndexOrDefault(s.pointStyle, t, d.pointStyle),
                        rotation: i.rotation ? i.rotation : r.valueAtIndexOrDefault(s.pointRotation, t, d.rotation),
                        hitRadius: i.hitRadius ? i.hitRadius : r.valueAtIndexOrDefault(s.pointHitRadius, t, d.hitRadius)
                    }
                }), e._model.skip = i.skip ? i.skip : isNaN(e._model.x) || isNaN(e._model.y)
            },
            updateBezierControlPoints: function() {
                var e = this.chart.chartArea,
                    t = this.getMeta();
                r.each(t.data, (function(a, n) {
                    var i = a._model,
                        s = r.splineCurve(r.previousItem(t.data, n, !0)._model, i, r.nextItem(t.data, n, !0)._model, i.tension);
                    i.controlPointPreviousX = Math.max(Math.min(s.previous.x, e.right), e.left), i.controlPointPreviousY = Math.max(Math.min(s.previous.y, e.bottom), e.top), i.controlPointNextX = Math.max(Math.min(s.next.x, e.right), e.left), i.controlPointNextY = Math.max(Math.min(s.next.y, e.bottom), e.top), a.pivot()
                }))
            },
            setHoverStyle: function(e) {
                var t = this.chart.data.datasets[e._datasetIndex],
                    a = e.custom || {},
                    n = e._index,
                    i = e._model;
                e.$previousStyle = {
                    backgroundColor: i.backgroundColor,
                    borderColor: i.borderColor,
                    borderWidth: i.borderWidth,
                    radius: i.radius
                }, i.radius = a.hoverRadius ? a.hoverRadius : r.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), i.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, r.getHoverColor(i.backgroundColor)), i.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r.valueAtIndexOrDefault(t.pointHoverBorderColor, n, r.getHoverColor(i.borderColor)), i.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, i.borderWidth)
            }
        })
    }
}, function(e, t, a) {
    "use strict";
    a(3)._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        showLines: !1,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(e) {
                    return "(" + e.xLabel + ", " + e.yLabel + ")"
                }
            }
        }
    }), e.exports = function(e) {
        e.controllers.scatter = e.controllers.line
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        e.Bar = function(t, a) {
            return a.type = "bar", new e(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        e.Bubble = function(t, a) {
            return a.type = "bubble", new e(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        e.Doughnut = function(t, a) {
            return a.type = "doughnut", new e(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        e.Line = function(t, a) {
            return a.type = "line", new e(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        e.PolarArea = function(t, a) {
            return a.type = "polarArea", new e(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        e.Radar = function(t, a) {
            return a.type = "radar", new e(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = function(e) {
        e.Scatter = function(t, a) {
            return a.type = "scatter", new e(t, a)
        }
    }
}, function(e, t, a) {
    "use strict";
    e.exports = {}, e.exports.filler = a(225), e.exports.legend = a(226), e.exports.title = a(227)
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(6),
        r = a(2);
    n._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var s = {
        dataset: function(e) {
            var t = e.fill,
                a = e.chart,
                n = a.getDatasetMeta(t),
                i = n && a.isDatasetVisible(t) && n.dataset._children || [],
                r = i.length || 0;
            return r ? function(e, t) {
                return t < r && i[t]._view || null
            } : null
        },
        boundary: function(e) {
            var t = e.boundary,
                a = t ? t.x : null,
                n = t ? t.y : null;
            return function(e) {
                return {
                    x: null === a ? e.x : a,
                    y: null === n ? e.y : n
                }
            }
        }
    };

    function o(e, t, a) {
        var n, i = e._model || {},
            r = i.fill;
        if (void 0 === r && (r = !!i.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = t + n), !(n === t || n < 0 || n >= a) && n;
        switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1
        }
    }

    function d(e) {
        var t, a = e.el._model || {},
            n = e.el._scale || {},
            i = e.fill,
            r = null;
        if (isFinite(i)) return null;
        if ("start" === i ? r = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === i ? r = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? r = a.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), null != r) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if ("number" == typeof r && isFinite(r)) return {
                x: (t = n.isHorizontal()) ? r : null,
                y: t ? null : r
            }
        }
        return null
    }

    function l(e, t, a) {
        var n, i = e[t].fill,
            r = [t];
        if (!a) return i;
        for (; !1 !== i && -1 === r.indexOf(i);) {
            if (!isFinite(i)) return i;
            if (!(n = e[i])) return !1;
            if (n.visible) return i;
            r.push(i), i = n.fill
        }
        return !1
    }

    function u(e) {
        var t = e.fill,
            a = "dataset";
        return !1 === t ? null : (isFinite(t) || (a = "boundary"), s[a](e))
    }

    function _(e) {
        return e && !e.skip
    }

    function m(e, t, a, n, i) {
        var s;
        if (n && i) {
            for (e.moveTo(t[0].x, t[0].y), s = 1; s < n; ++s) r.canvas.lineTo(e, t[s - 1], t[s]);
            for (e.lineTo(a[i - 1].x, a[i - 1].y), s = i - 1; s > 0; --s) r.canvas.lineTo(e, a[s], a[s - 1], !0)
        }
    }
    e.exports = {
        id: "filler",
        afterDatasetsUpdate: function(e, t) {
            var a, n, r, s, _ = (e.data.datasets || []).length,
                m = t.propagate,
                c = [];
            for (n = 0; n < _; ++n) s = null, (r = (a = e.getDatasetMeta(n)).dataset) && r._model && r instanceof i.Line && (s = {
                visible: e.isDatasetVisible(n),
                fill: o(r, n, _),
                chart: e,
                el: r
            }), a.$filler = s, c.push(s);
            for (n = 0; n < _; ++n)(s = c[n]) && (s.fill = l(c, n, m), s.boundary = d(s), s.mapper = u(s))
        },
        beforeDatasetDraw: function(e, t) {
            var a = t.meta.$filler;
            if (a) {
                var i = e.ctx,
                    s = a.el,
                    o = s._view,
                    d = s._children || [],
                    l = a.mapper,
                    u = o.backgroundColor || n.global.defaultColor;
                l && u && d.length && (r.canvas.clipArea(i, e.chartArea), function(e, t, a, n, i, r) {
                    var s, o, d, l, u, c, h, f = t.length,
                        M = n.spanGaps,
                        p = [],
                        y = [],
                        g = 0,
                        L = 0;
                    for (e.beginPath(), s = 0, o = f + !!r; s < o; ++s) u = a(l = t[d = s % f]._view, d, n), c = _(l), h = _(u), c && h ? (g = p.push(l), L = y.push(u)) : g && L && (M ? (c && p.push(l), h && y.push(u)) : (m(e, p, y, g, L), g = L = 0, p = [], y = []));
                    m(e, p, y, g, L), e.closePath(), e.fillStyle = i, e.fill()
                }(i, d, l, o, u, s._loop), r.canvas.unclipArea(i))
            }
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4),
        r = a(2),
        s = a(9),
        o = r.noop;

    function d(e, t) {
        return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
    }
    n._set("global", {
        legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(e, t) {
                var a = t.datasetIndex,
                    n = this.chart,
                    i = n.getDatasetMeta(a);
                i.hidden = null === i.hidden ? !n.data.datasets[a].hidden : null, n.update()
            },
            onHover: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(e) {
                    var t = e.data;
                    return r.isArray(t.datasets) ? t.datasets.map((function(t, a) {
                        return {
                            text: t.label,
                            fillStyle: r.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                            hidden: !e.isDatasetVisible(a),
                            lineCap: t.borderCapStyle,
                            lineDash: t.borderDash,
                            lineDashOffset: t.borderDashOffset,
                            lineJoin: t.borderJoinStyle,
                            lineWidth: t.borderWidth,
                            strokeStyle: t.borderColor,
                            pointStyle: t.pointStyle,
                            datasetIndex: a
                        }
                    }), this) : []
                }
            }
        },
        legendCallback: function(e) {
            var t = [];
            t.push('<ul class="' + e.id + '-legend">');
            for (var a = 0; a < e.data.datasets.length; a++) t.push('<li><span style="background-color:' + e.data.datasets[a].backgroundColor + '"></span>'), e.data.datasets[a].label && t.push(e.data.datasets[a].label), t.push("</li>");
            return t.push("</ul>"), t.join("")
        }
    });
    var l = i.extend({
        initialize: function(e) {
            r.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
        },
        beforeUpdate: o,
        update: function(e, t, a) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: o,
        beforeSetDimensions: o,
        setDimensions: function() {
            var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: o,
        beforeBuildLabels: o,
        buildLabels: function() {
            var e = this,
                t = e.options.labels || {},
                a = r.callback(t.generateLabels, [e.chart], e) || [];
            t.filter && (a = a.filter((function(a) {
                return t.filter(a, e.chart.data)
            }))), e.options.reverse && a.reverse(), e.legendItems = a
        },
        afterBuildLabels: o,
        beforeFit: o,
        fit: function() {
            var e = this,
                t = e.options,
                a = t.labels,
                i = t.display,
                s = e.ctx,
                o = n.global,
                l = r.valueOrDefault,
                u = l(a.fontSize, o.defaultFontSize),
                _ = l(a.fontStyle, o.defaultFontStyle),
                m = l(a.fontFamily, o.defaultFontFamily),
                c = r.fontString(u, _, m),
                h = e.legendHitBoxes = [],
                f = e.minSize,
                M = e.isHorizontal();
            if (M ? (f.width = e.maxWidth, f.height = i ? 10 : 0) : (f.width = i ? 10 : 0, f.height = e.maxHeight), i)
                if (s.font = c, M) {
                    var p = e.lineWidths = [0],
                        y = e.legendItems.length ? u + a.padding : 0;
                    s.textAlign = "left", s.textBaseline = "top", r.each(e.legendItems, (function(t, n) {
                        var i = d(a, u) + u / 2 + s.measureText(t.text).width;
                        p[p.length - 1] + i + a.padding >= e.width && (y += u + a.padding, p[p.length] = e.left), h[n] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: u
                        }, p[p.length - 1] += i + a.padding
                    })), f.height += y
                } else {
                    var g = a.padding,
                        L = e.columnWidths = [],
                        Y = a.padding,
                        v = 0,
                        k = 0,
                        b = u + g;
                    r.each(e.legendItems, (function(e, t) {
                        var n = d(a, u) + u / 2 + s.measureText(e.text).width;
                        k + b > f.height && (Y += v + a.padding, L.push(v), v = 0, k = 0), v = Math.max(v, n), k += b, h[t] = {
                            left: 0,
                            top: 0,
                            width: n,
                            height: u
                        }
                    })), Y += v, L.push(v), f.width += Y
                }
            e.width = f.width, e.height = f.height
        },
        afterFit: o,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var e = this,
                t = e.options,
                a = t.labels,
                i = n.global,
                s = i.elements.line,
                o = e.width,
                l = e.lineWidths;
            if (t.display) {
                var u, _ = e.ctx,
                    m = r.valueOrDefault,
                    c = m(a.fontColor, i.defaultFontColor),
                    h = m(a.fontSize, i.defaultFontSize),
                    f = m(a.fontStyle, i.defaultFontStyle),
                    M = m(a.fontFamily, i.defaultFontFamily),
                    p = r.fontString(h, f, M);
                _.textAlign = "left", _.textBaseline = "middle", _.lineWidth = .5, _.strokeStyle = c, _.fillStyle = c, _.font = p;
                var y = d(a, h),
                    g = e.legendHitBoxes,
                    L = e.isHorizontal();
                u = L ? {
                    x: e.left + (o - l[0]) / 2,
                    y: e.top + a.padding,
                    line: 0
                } : {
                    x: e.left + a.padding,
                    y: e.top + a.padding,
                    line: 0
                };
                var Y = h + a.padding;
                r.each(e.legendItems, (function(n, d) {
                    var c = _.measureText(n.text).width,
                        f = y + h / 2 + c,
                        M = u.x,
                        p = u.y;
                    L ? M + f >= o && (p = u.y += Y, u.line++, M = u.x = e.left + (o - l[u.line]) / 2) : p + Y > e.bottom && (M = u.x = M + e.columnWidths[u.line] + a.padding, p = u.y = e.top + a.padding, u.line++),
                        function(e, a, n) {
                            if (!(isNaN(y) || y <= 0)) {
                                _.save(), _.fillStyle = m(n.fillStyle, i.defaultColor), _.lineCap = m(n.lineCap, s.borderCapStyle), _.lineDashOffset = m(n.lineDashOffset, s.borderDashOffset), _.lineJoin = m(n.lineJoin, s.borderJoinStyle), _.lineWidth = m(n.lineWidth, s.borderWidth), _.strokeStyle = m(n.strokeStyle, i.defaultColor);
                                var o = 0 === m(n.lineWidth, s.borderWidth);
                                if (_.setLineDash && _.setLineDash(m(n.lineDash, s.borderDash)), t.labels && t.labels.usePointStyle) {
                                    var d = h * Math.SQRT2 / 2,
                                        l = d / Math.SQRT2,
                                        u = e + l,
                                        c = a + l;
                                    r.canvas.drawPoint(_, n.pointStyle, d, u, c)
                                } else o || _.strokeRect(e, a, y, h), _.fillRect(e, a, y, h);
                                _.restore()
                            }
                        }(M, p, n), g[d].left = M, g[d].top = p,
                        function(e, t, a, n) {
                            var i = h / 2,
                                r = y + i + e,
                                s = t + i;
                            _.fillText(a.text, r, s), a.hidden && (_.beginPath(), _.lineWidth = 2, _.moveTo(r, s), _.lineTo(r + n, s), _.stroke())
                        }(M, p, n, c), L ? u.x += f + a.padding : u.y += Y
                }))
            }
        },
        handleEvent: function(e) {
            var t = this,
                a = t.options,
                n = "mouseup" === e.type ? "click" : e.type,
                i = !1;
            if ("mousemove" === n) {
                if (!a.onHover) return
            } else {
                if ("click" !== n) return;
                if (!a.onClick) return
            }
            var r = e.x,
                s = e.y;
            if (r >= t.left && r <= t.right && s >= t.top && s <= t.bottom)
                for (var o = t.legendHitBoxes, d = 0; d < o.length; ++d) {
                    var l = o[d];
                    if (r >= l.left && r <= l.left + l.width && s >= l.top && s <= l.top + l.height) {
                        if ("click" === n) {
                            a.onClick.call(t, e.native, t.legendItems[d]), i = !0;
                            break
                        }
                        if ("mousemove" === n) {
                            a.onHover.call(t, e.native, t.legendItems[d]), i = !0;
                            break
                        }
                    }
                }
            return i
        }
    });

    function u(e, t) {
        var a = new l({
            ctx: e.ctx,
            options: t,
            chart: e
        });
        s.configure(e, a, t), s.addBox(e, a), e.legend = a
    }
    e.exports = {
        id: "legend",
        _element: l,
        beforeInit: function(e) {
            var t = e.options.legend;
            t && u(e, t)
        },
        beforeUpdate: function(e) {
            var t = e.options.legend,
                a = e.legend;
            t ? (r.mergeIf(t, n.global.legend), a ? (s.configure(e, a, t), a.options = t) : u(e, t)) : a && (s.removeBox(e, a), delete e.legend)
        },
        afterEvent: function(e, t) {
            var a = e.legend;
            a && a.handleEvent(t)
        }
    }
}, function(e, t, a) {
    "use strict";
    var n = a(3),
        i = a(4),
        r = a(2),
        s = a(9),
        o = r.noop;
    n._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            lineHeight: 1.2,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var d = i.extend({
        initialize: function(e) {
            r.extend(this, e), this.legendHitBoxes = []
        },
        beforeUpdate: o,
        update: function(e, t, a) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: o,
        beforeSetDimensions: o,
        setDimensions: function() {
            var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: o,
        beforeBuildLabels: o,
        buildLabels: o,
        afterBuildLabels: o,
        beforeFit: o,
        fit: function() {
            var e = this,
                t = r.valueOrDefault,
                a = e.options,
                i = a.display,
                s = t(a.fontSize, n.global.defaultFontSize),
                o = e.minSize,
                d = r.isArray(a.text) ? a.text.length : 1,
                l = r.options.toLineHeight(a.lineHeight, s),
                u = i ? d * l + 2 * a.padding : 0;
            e.isHorizontal() ? (o.width = e.maxWidth, o.height = u) : (o.width = u, o.height = e.maxHeight), e.width = o.width, e.height = o.height
        },
        afterFit: o,
        isHorizontal: function() {
            var e = this.options.position;
            return "top" === e || "bottom" === e
        },
        draw: function() {
            var e = this,
                t = e.ctx,
                a = r.valueOrDefault,
                i = e.options,
                s = n.global;
            if (i.display) {
                var o, d, l, u = a(i.fontSize, s.defaultFontSize),
                    _ = a(i.fontStyle, s.defaultFontStyle),
                    m = a(i.fontFamily, s.defaultFontFamily),
                    c = r.fontString(u, _, m),
                    h = r.options.toLineHeight(i.lineHeight, u),
                    f = h / 2 + i.padding,
                    M = 0,
                    p = e.top,
                    y = e.left,
                    g = e.bottom,
                    L = e.right;
                t.fillStyle = a(i.fontColor, s.defaultFontColor), t.font = c, e.isHorizontal() ? (d = y + (L - y) / 2, l = p + f, o = L - y) : (d = "left" === i.position ? y + f : L - f, l = p + (g - p) / 2, o = g - p, M = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(d, l), t.rotate(M), t.textAlign = "center", t.textBaseline = "middle";
                var Y = i.text;
                if (r.isArray(Y))
                    for (var v = 0, k = 0; k < Y.length; ++k) t.fillText(Y[k], 0, v, o), v += h;
                else t.fillText(Y, 0, 0, o);
                t.restore()
            }
        }
    });

    function l(e, t) {
        var a = new d({
            ctx: e.ctx,
            options: t,
            chart: e
        });
        s.configure(e, a, t), s.addBox(e, a), e.titleBlock = a
    }
    e.exports = {
        id: "title",
        _element: d,
        beforeInit: function(e) {
            var t = e.options.title;
            t && l(e, t)
        },
        beforeUpdate: function(e) {
            var t = e.options.title,
                a = e.titleBlock;
            t ? (r.mergeIf(t, n.global.title), a ? (s.configure(e, a, t), a.options = t) : l(e, t)) : a && (s.removeBox(e, a), delete e.titleBlock)
        }
    }
}]);