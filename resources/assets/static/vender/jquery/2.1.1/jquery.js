define("jq/jquery/2.1.1/jquery", [], function (require) {
    (function (e, t) {
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = e.document ? t(e, true) : function (e) {
                if (!e.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return t(e)
            }
        } else {
            t(e)
        }
    })(typeof window !== "undefined" ? window : this, function (e, t) {
        var n = [];
        var i = n.slice;
        var r = n.concat;
        var o = n.push;
        var s = n.indexOf;
        var a = {};
        var u = a.toString;
        var f = a.hasOwnProperty;
        var l = {};
        var c = e.document, p = "2.1.4", d = function (e, t) {
            return new d.fn.init(e, t)
        }, h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, g = /^-ms-/, m = /-([\da-z])/gi, y = function (e, t) {
            return t.toUpperCase()
        };
        d.fn = d.prototype = {
            jquery: p, constructor: d, selector: "", length: 0, toArray: function () {
                return i.call(this)
            }, get: function (e) {
                return e != null ? e < 0 ? this[e + this.length] : this[e] : i.call(this)
            }, pushStack: function (e) {
                var t = d.merge(this.constructor(), e);
                t.prevObject = this;
                t.context = this.context;
                return t
            }, each: function (e, t) {
                return d.each(this, e, t)
            }, map: function (e) {
                return this.pushStack(d.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(i.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: o, sort: n.sort, splice: n.splice
        };
        d.extend = d.fn.extend = function () {
            var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, f = false;
            if (typeof s === "boolean") {
                f = s;
                s = arguments[a] || {};
                a++
            }
            if (typeof s !== "object" && !d.isFunction(s)) {
                s = {}
            }
            if (a === u) {
                s = this;
                a--
            }
            for (; a < u; a++) {
                if ((e = arguments[a]) != null) {
                    for (t in e) {
                        n = s[t];
                        i = e[t];
                        if (s === i) {
                            continue
                        }
                        if (f && i && (d.isPlainObject(i) || (r = d.isArray(i)))) {
                            if (r) {
                                r = false;
                                o = n && d.isArray(n) ? n : []
                            } else {
                                o = n && d.isPlainObject(n) ? n : {}
                            }
                            s[t] = d.extend(f, o, i)
                        } else if (i !== undefined) {
                            s[t] = i
                        }
                    }
                }
            }
            return s
        };
        d.extend({
            expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), isReady: true, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return d.type(e) === "function"
            }, isArray: Array.isArray, isWindow: function (e) {
                return e != null && e === e.window
            }, isNumeric: function (e) {
                return !d.isArray(e) && e - parseFloat(e) + 1 >= 0
            }, isPlainObject: function (e) {
                if (d.type(e) !== "object" || e.nodeType || d.isWindow(e)) {
                    return false
                }
                if (e.constructor && !f.call(e.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
                return true
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) {
                    return false
                }
                return true
            }, type: function (e) {
                if (e == null) {
                    return e + ""
                }
                return typeof e === "object" || typeof e === "function" ? a[u.call(e)] || "object" : typeof e
            }, globalEval: function (e) {
                var t, n = eval;
                e = d.trim(e);
                if (e) {
                    if (e.indexOf("use strict") === 1) {
                        t = c.createElement("script");
                        t.text = e;
                        c.head.appendChild(t).parentNode.removeChild(t)
                    } else {
                        n(e)
                    }
                }
            }, camelCase: function (e) {
                return e.replace(g, "ms-").replace(m, y)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, n) {
                var i, r = 0, o = e.length, s = v(e);
                if (n) {
                    if (s) {
                        for (; r < o; r++) {
                            i = t.apply(e[r], n);
                            if (i === false) {
                                break
                            }
                        }
                    } else {
                        for (r in e) {
                            i = t.apply(e[r], n);
                            if (i === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (s) {
                        for (; r < o; r++) {
                            i = t.call(e[r], r, e[r]);
                            if (i === false) {
                                break
                            }
                        }
                    } else {
                        for (r in e) {
                            i = t.call(e[r], r, e[r]);
                            if (i === false) {
                                break
                            }
                        }
                    }
                }
                return e
            }, trim: function (e) {
                return e == null ? "" : (e + "").replace(h, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                if (e != null) {
                    if (v(Object(e))) {
                        d.merge(n, typeof e === "string" ? [e] : e)
                    } else {
                        o.call(n, e)
                    }
                }
                return n
            }, inArray: function (e, t, n) {
                return t == null ? -1 : s.call(t, e, n)
            }, merge: function (e, t) {
                var n = +t.length, i = 0, r = e.length;
                for (; i < n; i++) {
                    e[r++] = t[i]
                }
                e.length = r;
                return e
            }, grep: function (e, t, n) {
                var i, r = [], o = 0, s = e.length, a = !n;
                for (; o < s; o++) {
                    i = !t(e[o], o);
                    if (i !== a) {
                        r.push(e[o])
                    }
                }
                return r
            }, map: function (e, t, n) {
                var i, o = 0, s = e.length, a = v(e), u = [];
                if (a) {
                    for (; o < s; o++) {
                        i = t(e[o], o, n);
                        if (i != null) {
                            u.push(i)
                        }
                    }
                } else {
                    for (o in e) {
                        i = t(e[o], o, n);
                        if (i != null) {
                            u.push(i)
                        }
                    }
                }
                return r.apply([], u)
            }, guid: 1, proxy: function (e, t) {
                var n, r, o;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n
                }
                if (!d.isFunction(e)) {
                    return undefined
                }
                r = i.call(arguments, 2);
                o = function () {
                    return e.apply(t || this, r.concat(i.call(arguments)))
                };
                o.guid = e.guid = e.guid || d.guid++;
                return o
            }, now: Date.now, support: l
        });
        d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            a["[object " + t + "]"] = t.toLowerCase()
        });
        function v(e) {
            var t = "length" in e && e.length, n = d.type(e);
            if (n === "function" || d.isWindow(e)) {
                return false
            }
            if (e.nodeType === 1 && t) {
                return true
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }

        var x = function (e) {
            var t, n, i, r, o, s, a, u, f, l, c, p, d, h, g, m, y, v, x, w = "sizzle" + 1 * new Date, b = e.document, T = 0, C = 0, k = se(), N = se(), E = se(), S = function (e, t) {
                if (e === t) {
                    c = true
                }
                return 0
            }, j = 1 << 31, D = {}.hasOwnProperty, A = [], q = A.pop, L = A.push, H = A.push, O = A.slice, F = function (e, t) {
                var n = 0, i = e.length;
                for (; n < i; n++) {
                    if (e[n] === t) {
                        return n
                    }
                }
                return -1
            }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = M.replace("w", "w#"), $ = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]", I = ":(" + M + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|" + ".*" + ")\\)|)", B = new RegExp(R + "+", "g"), _ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"), z = new RegExp("^" + R + "*," + R + "*"), X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"), V = new RegExp(I), Y = new RegExp("^" + W + "$"), G = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            }, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = /'|\\/g, ne = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), ie = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320)
            }, re = function () {
                p()
            };
            try {
                H.apply(A = O.call(b.childNodes), b.childNodes);
                A[b.childNodes.length].nodeType
            } catch (e) {
                H = {
                    apply: A.length ? function (e, t) {
                        L.apply(e, O.call(t))
                    } : function (e, t) {
                        var n = e.length, i = 0;
                        while (e[n++] = t[i++]) {
                        }
                        e.length = n - 1
                    }
                }
            }
            function oe(e, t, i, r) {
                var o, a, f, l, c, h, y, v, T, C;
                if ((t ? t.ownerDocument || t : b) !== d) {
                    p(t)
                }
                t = t || d;
                i = i || [];
                l = t.nodeType;
                if (typeof e !== "string" || !e || l !== 1 && l !== 9 && l !== 11) {
                    return i
                }
                if (!r && g) {
                    if (l !== 11 && (o = Z.exec(e))) {
                        if (f = o[1]) {
                            if (l === 9) {
                                a = t.getElementById(f);
                                if (a && a.parentNode) {
                                    if (a.id === f) {
                                        i.push(a);
                                        return i
                                    }
                                } else {
                                    return i
                                }
                            } else {
                                if (t.ownerDocument && (a = t.ownerDocument.getElementById(f)) && x(t, a) && a.id === f) {
                                    i.push(a);
                                    return i
                                }
                            }
                        } else if (o[2]) {
                            H.apply(i, t.getElementsByTagName(e));
                            return i
                        } else if ((f = o[3]) && n.getElementsByClassName) {
                            H.apply(i, t.getElementsByClassName(f));
                            return i
                        }
                    }
                    if (n.qsa && (!m || !m.test(e))) {
                        v = y = w;
                        T = t;
                        C = l !== 1 && e;
                        if (l === 1 && t.nodeName.toLowerCase() !== "object") {
                            h = s(e);
                            if (y = t.getAttribute("id")) {
                                v = y.replace(te, "\\$&")
                            } else {
                                t.setAttribute("id", v)
                            }
                            v = "[id='" + v + "'] ";
                            c = h.length;
                            while (c--) {
                                h[c] = v + me(h[c])
                            }
                            T = ee.test(e) && he(t.parentNode) || t;
                            C = h.join(",")
                        }
                        if (C) {
                            try {
                                H.apply(i, T.querySelectorAll(C));
                                return i
                            } catch (e) {
                            } finally {
                                if (!y) {
                                    t.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return u(e.replace(_, "$1"), t, i, r)
            }

            function se() {
                var e = [];

                function t(n, r) {
                    if (e.push(n + " ") > i.cacheLength) {
                        delete t[e.shift()]
                    }
                    return t[n + " "] = r
                }

                return t
            }

            function ae(e) {
                e[w] = true;
                return e
            }

            function ue(e) {
                var t = d.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return false
                } finally {
                    if (t.parentNode) {
                        t.parentNode.removeChild(t)
                    }
                    t = null
                }
            }

            function fe(e, t) {
                var n = e.split("|"), r = e.length;
                while (r--) {
                    i.attrHandle[n[r]] = t
                }
            }

            function le(e, t) {
                var n = t && e, i = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || j) - (~e.sourceIndex || j);
                if (i) {
                    return i
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function ce(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function pe(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function de(e) {
                return ae(function (t) {
                    t = +t;
                    return ae(function (n, i) {
                        var r, o = e([], n.length, t), s = o.length;
                        while (s--) {
                            if (n[r = o[s]]) {
                                n[r] = !(i[r] = n[r])
                            }
                        }
                    })
                })
            }

            function he(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            }

            n = oe.support = {};
            o = oe.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            p = oe.setDocument = function (e) {
                var t, r, s = e ? e.ownerDocument || e : b;
                if (s === d || s.nodeType !== 9 || !s.documentElement) {
                    return d
                }
                d = s;
                h = s.documentElement;
                r = s.defaultView;
                if (r && r !== r.top) {
                    if (r.addEventListener) {
                        r.addEventListener("unload", re, false)
                    } else if (r.attachEvent) {
                        r.attachEvent("onunload", re)
                    }
                }
                g = !o(s);
                n.attributes = ue(function (e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                n.getElementsByTagName = ue(function (e) {
                    e.appendChild(s.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                n.getElementsByClassName = K.test(s.getElementsByClassName);
                n.getById = ue(function (e) {
                    h.appendChild(e).id = w;
                    return !s.getElementsByName || !s.getElementsByName(w).length
                });
                if (n.getById) {
                    i.find["ID"] = function (e, t) {
                        if (typeof t.getElementById !== "undefined" && g) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    };
                    i.filter["ID"] = function (e) {
                        var t = e.replace(ne, ie);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }
                } else {
                    delete i.find["ID"];
                    i.filter["ID"] = function (e) {
                        var t = e.replace(ne, ie);
                        return function (e) {
                            var n = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                }
                i.find["TAG"] = n.getElementsByTagName ? function (e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (n.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function (e, t) {
                    var n, i = [], r = 0, o = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = o[r++]) {
                            if (n.nodeType === 1) {
                                i.push(n)
                            }
                        }
                        return i
                    }
                    return o
                };
                i.find["CLASS"] = n.getElementsByClassName && function (e, t) {
                        if (g) {
                            return t.getElementsByClassName(e)
                        }
                    };
                y = [];
                m = [];
                if (n.qsa = K.test(s.querySelectorAll)) {
                    ue(function (e) {
                        h.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            m.push("[*^$]=" + R + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            m.push("\\[" + R + "*(?:value|" + P + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + w + "-]").length) {
                            m.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            m.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + w + "+*").length) {
                            m.push(".#.+[+~]")
                        }
                    });
                    ue(function (e) {
                        var t = s.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            m.push("name" + R + "*[*^$|!~]?=")
                        }
                        if (!e.querySelectorAll(":enabled").length) {
                            m.push(":enabled", ":disabled")
                        }
                        e.querySelectorAll("*,:x");
                        m.push(",.*:")
                    })
                }
                if (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) {
                    ue(function (e) {
                        n.disconnectedMatch = v.call(e, "div");
                        v.call(e, "[s!='']:x");
                        y.push("!=", I)
                    })
                }
                m = m.length && new RegExp(m.join("|"));
                y = y.length && new RegExp(y.join("|"));
                t = K.test(h.compareDocumentPosition);
                x = t || K.test(h.contains) ? function (e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !!(i && i.nodeType === 1 && (n.contains ? n.contains(i) : e.compareDocumentPosition && e.compareDocumentPosition(i) & 16))
                } : function (e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return true
                            }
                        }
                    }
                    return false
                };
                S = t ? function (e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (i) {
                        return i
                    }
                    i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (i & 1 || !n.sortDetached && t.compareDocumentPosition(e) === i) {
                        if (e === s || e.ownerDocument === b && x(b, e)) {
                            return -1
                        }
                        if (t === s || t.ownerDocument === b && x(b, t)) {
                            return 1
                        }
                        return l ? F(l, e) - F(l, t) : 0
                    }
                    return i & 4 ? -1 : 1
                } : function (e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], u = [t];
                    if (!r || !o) {
                        return e === s ? -1 : t === s ? 1 : r ? -1 : o ? 1 : l ? F(l, e) - F(l, t) : 0
                    } else if (r === o) {
                        return le(e, t)
                    }
                    n = e;
                    while (n = n.parentNode) {
                        a.unshift(n)
                    }
                    n = t;
                    while (n = n.parentNode) {
                        u.unshift(n)
                    }
                    while (a[i] === u[i]) {
                        i++
                    }
                    return i ? le(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
                };
                return s
            };
            oe.matches = function (e, t) {
                return oe(e, null, null, t)
            };
            oe.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== d) {
                    p(e)
                }
                t = t.replace(U, "='$1']");
                if (n.matchesSelector && g && (!y || !y.test(t)) && (!m || !m.test(t))) {
                    try {
                        var i = v.call(e, t);
                        if (i || n.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return i
                        }
                    } catch (e) {
                    }
                }
                return oe(t, d, null, [e]).length > 0
            };
            oe.contains = function (e, t) {
                if ((e.ownerDocument || e) !== d) {
                    p(e)
                }
                return x(e, t)
            };
            oe.attr = function (e, t) {
                if ((e.ownerDocument || e) !== d) {
                    p(e)
                }
                var r = i.attrHandle[t.toLowerCase()], o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : undefined;
                return o !== undefined ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            };
            oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            oe.uniqueSort = function (e) {
                var t, i = [], r = 0, o = 0;
                c = !n.detectDuplicates;
                l = !n.sortStable && e.slice(0);
                e.sort(S);
                if (c) {
                    while (t = e[o++]) {
                        if (t === e[o]) {
                            r = i.push(o)
                        }
                    }
                    while (r--) {
                        e.splice(i[r], 1)
                    }
                }
                l = null;
                return e
            };
            r = oe.getText = function (e) {
                var t, n = "", i = 0, o = e.nodeType;
                if (!o) {
                    while (t = e[i++]) {
                        n += r(t)
                    }
                } else if (o === 1 || o === 9 || o === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += r(e)
                        }
                    }
                } else if (o === 3 || o === 4) {
                    return e.nodeValue
                }
                return n
            };
            i = oe.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: true},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: true},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        e[1] = e[1].replace(ne, ie);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    }, CHILD: function (e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                oe.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd")
                        } else if (e[3]) {
                            oe.error(e[0])
                        }
                        return e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        if (G["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (n && V.test(n) && (t = s(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = n.slice(0, t)
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ne, ie).toLowerCase();
                        return e === "*" ? function () {
                            return true
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, function (e) {
                                return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, t, n) {
                        return function (i) {
                            var r = oe.attr(i, e);
                            if (r == null) {
                                return t === "!="
                            }
                            if (!t) {
                                return true
                            }
                            r += "";
                            return t === "=" ? r === n : t === "!=" ? r !== n : t === "^=" ? n && r.indexOf(n) === 0 : t === "*=" ? n && r.indexOf(n) > -1 : t === "$=" ? n && r.slice(-n.length) === n : t === "~=" ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : t === "|=" ? r === n || r.slice(0, n.length + 1) === n + "-" : false
                        }
                    }, CHILD: function (e, t, n, i, r) {
                        var o = e.slice(0, 3) !== "nth", s = e.slice(-4) !== "last", a = t === "of-type";
                        return i === 1 && r === 0 ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var f, l, c, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !u && !a;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        c = t;
                                        while (c = c[g]) {
                                            if (a ? c.nodeName.toLowerCase() === y : c.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        h = g = e === "only" && !h && "nextSibling"
                                    }
                                    return true
                                }
                                h = [s ? m.firstChild : m.lastChild];
                                if (s && v) {
                                    l = m[w] || (m[w] = {});
                                    f = l[e] || [];
                                    d = f[0] === T && f[1];
                                    p = f[0] === T && f[2];
                                    c = d && m.childNodes[d];
                                    while (c = ++d && c && c[g] || (p = d = 0) || h.pop()) {
                                        if (c.nodeType === 1 && ++p && c === t) {
                                            l[e] = [T, d, p];
                                            break
                                        }
                                    }
                                } else if (v && (f = (t[w] || (t[w] = {}))[e]) && f[0] === T) {
                                    p = f[1]
                                } else {
                                    while (c = ++d && c && c[g] || (p = d = 0) || h.pop()) {
                                        if ((a ? c.nodeName.toLowerCase() === y : c.nodeType === 1) && ++p) {
                                            if (v) {
                                                (c[w] || (c[w] = {}))[e] = [T, p]
                                            }
                                            if (c === t) {
                                                break
                                            }
                                        }
                                    }
                                }
                                p -= r;
                                return p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        if (r[w]) {
                            return r(t)
                        }
                        if (r.length > 1) {
                            n = [e, e, "", t];
                            return i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
                                var i, o = r(e, t), s = o.length;
                                while (s--) {
                                    i = F(e, o[s]);
                                    e[i] = !(n[i] = o[s])
                                }
                            }) : function (e) {
                                return r(e, 0, n)
                            }
                        }
                        return r
                    }
                },
                pseudos: {
                    not: ae(function (e) {
                        var t = [], n = [], i = a(e.replace(_, "$1"));
                        return i[w] ? ae(function (e, t, n, r) {
                            var o, s = i(e, null, r, []), a = e.length;
                            while (a--) {
                                if (o = s[a]) {
                                    e[a] = !(t[a] = o)
                                }
                            }
                        }) : function (e, r, o) {
                            t[0] = e;
                            i(t, null, o, n);
                            t[0] = null;
                            return !n.pop()
                        }
                    }), has: ae(function (e) {
                        return function (t) {
                            return oe(e, t).length > 0
                        }
                    }), contains: ae(function (e) {
                        e = e.replace(ne, ie);
                        return function (t) {
                            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                        }
                    }), lang: ae(function (e) {
                        if (!Y.test(e || "")) {
                            oe.error("unsupported lang: " + e)
                        }
                        e = e.replace(ne, ie).toLowerCase();
                        return function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                    n = n.toLowerCase();
                                    return n === e || n.indexOf(e + "-") === 0
                                }
                            } while ((t = t.parentNode) && t.nodeType === 1);
                            return false
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === h
                    }, focus: function (e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === false
                    }, disabled: function (e) {
                        return e.disabled === true
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    }, selected: function (e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    }, parent: function (e) {
                        return !i.pseudos["empty"](e)
                    }, header: function (e) {
                        return J.test(e.nodeName)
                    }, input: function (e) {
                        return Q.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    }, text: function (e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    }, first: de(function () {
                        return [0]
                    }), last: de(function (e, t) {
                        return [t - 1]
                    }), eq: de(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }), even: de(function (e, t) {
                        var n = 0;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }), odd: de(function (e, t) {
                        var n = 1;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }), lt: de(function (e, t, n) {
                        var i = n < 0 ? n + t : n;
                        for (; --i >= 0;) {
                            e.push(i)
                        }
                        return e
                    }), gt: de(function (e, t, n) {
                        var i = n < 0 ? n + t : n;
                        for (; ++i < t;) {
                            e.push(i)
                        }
                        return e
                    })
                }
            };
            i.pseudos["nth"] = i.pseudos["eq"];
            for (t in{radio: true, checkbox: true, file: true, password: true, image: true}) {
                i.pseudos[t] = ce(t)
            }
            for (t in{submit: true, reset: true}) {
                i.pseudos[t] = pe(t)
            }
            function ge() {
            }

            ge.prototype = i.filters = i.pseudos;
            i.setFilters = new ge;
            s = oe.tokenize = function (e, t) {
                var n, r, o, s, a, u, f, l = N[e + " "];
                if (l) {
                    return t ? 0 : l.slice(0)
                }
                a = e;
                u = [];
                f = i.preFilter;
                while (a) {
                    if (!n || (r = z.exec(a))) {
                        if (r) {
                            a = a.slice(r[0].length) || a
                        }
                        u.push(o = [])
                    }
                    n = false;
                    if (r = X.exec(a)) {
                        n = r.shift();
                        o.push({value: n, type: r[0].replace(_, " ")});
                        a = a.slice(n.length)
                    }
                    for (s in i.filter) {
                        if ((r = G[s].exec(a)) && (!f[s] || (r = f[s](r)))) {
                            n = r.shift();
                            o.push({value: n, type: s, matches: r});
                            a = a.slice(n.length)
                        }
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? a.length : a ? oe.error(e) : N(e, u).slice(0)
            };
            function me(e) {
                var t = 0, n = e.length, i = "";
                for (; t < n; t++) {
                    i += e[t].value
                }
                return i
            }

            function ye(e, t, n) {
                var i = t.dir, r = n && i === "parentNode", o = C++;
                return t.first ? function (t, n, o) {
                    while (t = t[i]) {
                        if (t.nodeType === 1 || r) {
                            return e(t, n, o)
                        }
                    }
                } : function (t, n, s) {
                    var a, u, f = [T, o];
                    if (s) {
                        while (t = t[i]) {
                            if (t.nodeType === 1 || r) {
                                if (e(t, n, s)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (t = t[i]) {
                            if (t.nodeType === 1 || r) {
                                u = t[w] || (t[w] = {});
                                if ((a = u[i]) && a[0] === T && a[1] === o) {
                                    return f[2] = a[2]
                                } else {
                                    u[i] = f;
                                    if (f[2] = e(t, n, s)) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function ve(e) {
                return e.length > 1 ? function (t, n, i) {
                    var r = e.length;
                    while (r--) {
                        if (!e[r](t, n, i)) {
                            return false
                        }
                    }
                    return true
                } : e[0]
            }

            function xe(e, t, n) {
                var i = 0, r = t.length;
                for (; i < r; i++) {
                    oe(e, t[i], n)
                }
                return n
            }

            function we(e, t, n, i, r) {
                var o, s = [], a = 0, u = e.length, f = t != null;
                for (; a < u; a++) {
                    if (o = e[a]) {
                        if (!n || n(o, i, r)) {
                            s.push(o);
                            if (f) {
                                t.push(a)
                            }
                        }
                    }
                }
                return s
            }

            function be(e, t, n, i, r, o) {
                if (i && !i[w]) {
                    i = be(i)
                }
                if (r && !r[w]) {
                    r = be(r, o)
                }
                return ae(function (o, s, a, u) {
                    var f, l, c, p = [], d = [], h = s.length, g = o || xe(t || "*", a.nodeType ? [a] : a, []), m = e && (o || !t) ? we(g, p, e, a, u) : g, y = n ? r || (o ? e : h || i) ? [] : s : m;
                    if (n) {
                        n(m, y, a, u)
                    }
                    if (i) {
                        f = we(y, d);
                        i(f, [], a, u);
                        l = f.length;
                        while (l--) {
                            if (c = f[l]) {
                                y[d[l]] = !(m[d[l]] = c)
                            }
                        }
                    }
                    if (o) {
                        if (r || e) {
                            if (r) {
                                f = [];
                                l = y.length;
                                while (l--) {
                                    if (c = y[l]) {
                                        f.push(m[l] = c)
                                    }
                                }
                                r(null, y = [], f, u)
                            }
                            l = y.length;
                            while (l--) {
                                if ((c = y[l]) && (f = r ? F(o, c) : p[l]) > -1) {
                                    o[f] = !(s[f] = c)
                                }
                            }
                        }
                    } else {
                        y = we(y === s ? y.splice(h, y.length) : y);
                        if (r) {
                            r(null, s, y, u)
                        } else {
                            H.apply(s, y)
                        }
                    }
                })
            }

            function Te(e) {
                var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], u = s ? 1 : 0, l = ye(function (e) {
                    return e === t
                }, a, true), c = ye(function (e) {
                    return F(t, e) > -1
                }, a, true), p = [function (e, n, i) {
                    var r = !s && (i || n !== f) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    t = null;
                    return r
                }];
                for (; u < o; u++) {
                    if (n = i.relative[e[u].type]) {
                        p = [ye(ve(p), n)]
                    } else {
                        n = i.filter[e[u].type].apply(null, e[u].matches);
                        if (n[w]) {
                            r = ++u;
                            for (; r < o; r++) {
                                if (i.relative[e[r].type]) {
                                    break
                                }
                            }
                            return be(u > 1 && ve(p), u > 1 && me(e.slice(0, u - 1).concat({value: e[u - 2].type === " " ? "*" : ""})).replace(_, "$1"), n, u < r && Te(e.slice(u, r)), r < o && Te(e = e.slice(r)), r < o && me(e))
                        }
                        p.push(n)
                    }
                }
                return ve(p)
            }

            function Ce(e, t) {
                var n = t.length > 0, r = e.length > 0, o = function (o, s, a, u, l) {
                    var c, p, h, g = 0, m = "0", y = o && [], v = [], x = f, w = o || r && i.find["TAG"]("*", l), b = T += x == null ? 1 : Math.random() || .1, C = w.length;
                    if (l) {
                        f = s !== d && s
                    }
                    for (; m !== C && (c = w[m]) != null; m++) {
                        if (r && c) {
                            p = 0;
                            while (h = e[p++]) {
                                if (h(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            }
                            if (l) {
                                T = b
                            }
                        }
                        if (n) {
                            if (c = !h && c) {
                                g--
                            }
                            if (o) {
                                y.push(c)
                            }
                        }
                    }
                    g += m;
                    if (n && m !== g) {
                        p = 0;
                        while (h = t[p++]) {
                            h(y, v, s, a)
                        }
                        if (o) {
                            if (g > 0) {
                                while (m--) {
                                    if (!(y[m] || v[m])) {
                                        v[m] = q.call(u)
                                    }
                                }
                            }
                            v = we(v)
                        }
                        H.apply(u, v);
                        if (l && !o && v.length > 0 && g + t.length > 1) {
                            oe.uniqueSort(u)
                        }
                    }
                    if (l) {
                        T = b;
                        f = x
                    }
                    return y
                };
                return n ? ae(o) : o
            }

            a = oe.compile = function (e, t) {
                var n, i = [], r = [], o = E[e + " "];
                if (!o) {
                    if (!t) {
                        t = s(e)
                    }
                    n = t.length;
                    while (n--) {
                        o = Te(t[n]);
                        if (o[w]) {
                            i.push(o)
                        } else {
                            r.push(o)
                        }
                    }
                    o = E(e, Ce(r, i));
                    o.selector = e
                }
                return o
            };
            u = oe.select = function (e, t, r, o) {
                var u, f, l, c, p, d = typeof e === "function" && e, h = !o && s(e = d.selector || e);
                r = r || [];
                if (h.length === 1) {
                    f = h[0] = h[0].slice(0);
                    if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && g && i.relative[f[1].type]) {
                        t = (i.find["ID"](l.matches[0].replace(ne, ie), t) || [])[0];
                        if (!t) {
                            return r
                        } else if (d) {
                            t = t.parentNode
                        }
                        e = e.slice(f.shift().value.length)
                    }
                    u = G["needsContext"].test(e) ? 0 : f.length;
                    while (u--) {
                        l = f[u];
                        if (i.relative[c = l.type]) {
                            break
                        }
                        if (p = i.find[c]) {
                            if (o = p(l.matches[0].replace(ne, ie), ee.test(f[0].type) && he(t.parentNode) || t)) {
                                f.splice(u, 1);
                                e = o.length && me(f);
                                if (!e) {
                                    H.apply(r, o);
                                    return r
                                }
                                break
                            }
                        }
                    }
                }
                (d || a(e, h))(o, t, !g, r, ee.test(e) && he(t.parentNode) || t);
                return r
            };
            n.sortStable = w.split("").sort(S).join("") === w;
            n.detectDuplicates = !!c;
            p();
            n.sortDetached = ue(function (e) {
                return e.compareDocumentPosition(d.createElement("div")) & 1
            });
            if (!ue(function (e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                fe("type|href|height|width", function (e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!n.attributes || !ue(function (e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                fe("value", function (e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!ue(function (e) {
                    return e.getAttribute("disabled") == null
                })) {
                fe(P, function (e, t, n) {
                    var i;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }
                })
            }
            return oe
        }(e);
        d.find = x;
        d.expr = x.selectors;
        d.expr[":"] = d.expr.pseudos;
        d.unique = x.uniqueSort;
        d.text = x.getText;
        d.isXMLDoc = x.isXML;
        d.contains = x.contains;
        var w = d.expr.match.needsContext;
        var b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
        var T = /^.[^:#\[\.,]*$/;

        function C(e, t, n) {
            if (d.isFunction(t)) {
                return d.grep(e, function (e, i) {
                    return !!t.call(e, i, e) !== n
                })
            }
            if (t.nodeType) {
                return d.grep(e, function (e) {
                    return e === t !== n
                })
            }
            if (typeof t === "string") {
                if (T.test(t)) {
                    return d.filter(t, e, n)
                }
                t = d.filter(t, e)
            }
            return d.grep(e, function (e) {
                return s.call(t, e) >= 0 !== n
            })
        }

        d.filter = function (e, t, n) {
            var i = t[0];
            if (n) {
                e = ":not(" + e + ")"
            }
            return t.length === 1 && i.nodeType === 1 ? d.find.matchesSelector(i, e) ? [i] : [] : d.find.matches(e, d.grep(t, function (e) {
                return e.nodeType === 1
            }))
        };
        d.fn.extend({
            find: function (e) {
                var t, n = this.length, i = [], r = this;
                if (typeof e !== "string") {
                    return this.pushStack(d(e).filter(function () {
                        for (t = 0; t < n; t++) {
                            if (d.contains(r[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                for (t = 0; t < n; t++) {
                    d.find(e, r[t], i)
                }
                i = this.pushStack(n > 1 ? d.unique(i) : i);
                i.selector = this.selector ? this.selector + " " + e : e;
                return i
            }, filter: function (e) {
                return this.pushStack(C(this, e || [], false))
            }, not: function (e) {
                return this.pushStack(C(this, e || [], true))
            }, is: function (e) {
                return !!C(this, typeof e === "string" && w.test(e) ? d(e) : e || [], false).length
            }
        });
        var k, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, E = d.fn.init = function (e, t) {
            var n, i;
            if (!e) {
                return this
            }
            if (typeof e === "string") {
                if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                    n = [null, e, null]
                } else {
                    n = N.exec(e)
                }
                if (n && (n[1] || !t)) {
                    if (n[1]) {
                        t = t instanceof d ? t[0] : t;
                        d.merge(this, d.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : c, true));
                        if (b.test(n[1]) && d.isPlainObject(t)) {
                            for (n in t) {
                                if (d.isFunction(this[n])) {
                                    this[n](t[n])
                                } else {
                                    this.attr(n, t[n])
                                }
                            }
                        }
                        return this
                    } else {
                        i = c.getElementById(n[2]);
                        if (i && i.parentNode) {
                            this.length = 1;
                            this[0] = i
                        }
                        this.context = c;
                        this.selector = e;
                        return this
                    }
                } else if (!t || t.jquery) {
                    return (t || k).find(e)
                } else {
                    return this.constructor(t).find(e)
                }
            } else if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this
            } else if (d.isFunction(e)) {
                return typeof k.ready !== "undefined" ? k.ready(e) : e(d)
            }
            if (e.selector !== undefined) {
                this.selector = e.selector;
                this.context = e.context
            }
            return d.makeArray(e, this)
        };
        E.prototype = d.fn;
        k = d(c);
        var S = /^(?:parents|prev(?:Until|All))/, j = {children: true, contents: true, next: true, prev: true};
        d.extend({
            dir: function (e, t, n) {
                var i = [], r = n !== undefined;
                while ((e = e[t]) && e.nodeType !== 9) {
                    if (e.nodeType === 1) {
                        if (r && d(e).is(n)) {
                            break
                        }
                        i.push(e)
                    }
                }
                return i
            }, sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling) {
                    if (e.nodeType === 1 && e !== t) {
                        n.push(e)
                    }
                }
                return n
            }
        });
        d.fn.extend({
            has: function (e) {
                var t = d(e, this), n = t.length;
                return this.filter(function () {
                    var e = 0;
                    for (; e < n; e++) {
                        if (d.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            }, closest: function (e, t) {
                var n, i = 0, r = this.length, o = [], s = w.test(e) || typeof e !== "string" ? d(e, t || this.context) : 0;
                for (; i < r; i++) {
                    for (n = this[i]; n && n !== t; n = n.parentNode) {
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && d.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                    }
                }
                return this.pushStack(o.length > 1 ? d.unique(o) : o)
            }, index: function (e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return s.call(d(e), this[0])
                }
                return s.call(this, e.jquery ? e[0] : e)
            }, add: function (e, t) {
                return this.pushStack(d.unique(d.merge(this.get(), d(e, t))))
            }, addBack: function (e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });
        function D(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {
            }
            return e
        }

        d.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            }, parents: function (e) {
                return d.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return d.dir(e, "parentNode", n)
            }, next: function (e) {
                return D(e, "nextSibling")
            }, prev: function (e) {
                return D(e, "previousSibling")
            }, nextAll: function (e) {
                return d.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return d.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return d.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return d.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return d.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return d.sibling(e.firstChild)
            }, contents: function (e) {
                return e.contentDocument || d.merge([], e.childNodes)
            }
        }, function (e, t) {
            d.fn[e] = function (n, i) {
                var r = d.map(this, t, n);
                if (e.slice(-5) !== "Until") {
                    i = n
                }
                if (i && typeof i === "string") {
                    r = d.filter(i, r)
                }
                if (this.length > 1) {
                    if (!j[e]) {
                        d.unique(r)
                    }
                    if (S.test(e)) {
                        r.reverse()
                    }
                }
                return this.pushStack(r)
            }
        });
        var A = /\S+/g;
        var q = {};

        function L(e) {
            var t = q[e] = {};
            d.each(e.match(A) || [], function (e, n) {
                t[n] = true
            });
            return t
        }

        d.Callbacks = function (e) {
            e = typeof e === "string" ? q[e] || L(e) : d.extend({}, e);
            var t, n, i, r, o, s, a = [], u = !e.once && [], f = function (c) {
                t = e.memory && c;
                n = true;
                s = r || 0;
                r = 0;
                o = a.length;
                i = true;
                for (; a && s < o; s++) {
                    if (a[s].apply(c[0], c[1]) === false && e.stopOnFalse) {
                        t = false;
                        break
                    }
                }
                i = false;
                if (a) {
                    if (u) {
                        if (u.length) {
                            f(u.shift())
                        }
                    } else if (t) {
                        a = []
                    } else {
                        l.disable()
                    }
                }
            }, l = {
                add: function () {
                    if (a) {
                        var n = a.length;
                        (function t(n) {
                            d.each(n, function (n, i) {
                                var r = d.type(i);
                                if (r === "function") {
                                    if (!e.unique || !l.has(i)) {
                                        a.push(i)
                                    }
                                } else if (i && i.length && r !== "string") {
                                    t(i)
                                }
                            })
                        })(arguments);
                        if (i) {
                            o = a.length
                        } else if (t) {
                            r = n;
                            f(t)
                        }
                    }
                    return this
                }, remove: function () {
                    if (a) {
                        d.each(arguments, function (e, t) {
                            var n;
                            while ((n = d.inArray(t, a, n)) > -1) {
                                a.splice(n, 1);
                                if (i) {
                                    if (n <= o) {
                                        o--
                                    }
                                    if (n <= s) {
                                        s--
                                    }
                                }
                            }
                        })
                    }
                    return this
                }, has: function (e) {
                    return e ? d.inArray(e, a) > -1 : !!(a && a.length)
                }, empty: function () {
                    a = [];
                    o = 0;
                    return this
                }, disable: function () {
                    a = u = t = undefined;
                    return this
                }, disabled: function () {
                    return !a
                }, lock: function () {
                    u = undefined;
                    if (!t) {
                        l.disable()
                    }
                    return this
                }, locked: function () {
                    return !u
                }, fireWith: function (e, t) {
                    if (a && (!n || u)) {
                        t = t || [];
                        t = [e, t.slice ? t.slice() : t];
                        if (i) {
                            u.push(t)
                        } else {
                            f(t)
                        }
                    }
                    return this
                }, fire: function () {
                    l.fireWith(this, arguments);
                    return this
                }, fired: function () {
                    return !!n
                }
            };
            return l
        };
        d.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        r.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var e = arguments;
                        return d.Deferred(function (n) {
                            d.each(t, function (t, o) {
                                var s = d.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    if (e && d.isFunction(e.promise)) {
                                        e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                                    } else {
                                        n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    }
                                })
                            });
                            e = null
                        }).promise()
                    }, promise: function (e) {
                        return e != null ? d.extend(e, i) : i
                    }
                }, r = {};
                i.pipe = i.then;
                d.each(t, function (e, o) {
                    var s = o[2], a = o[3];
                    i[o[1]] = s.add;
                    if (a) {
                        s.add(function () {
                            n = a
                        }, t[e ^ 1][2].disable, t[2][2].lock)
                    }
                    r[o[0]] = function () {
                        r[o[0] + "With"](this === r ? i : this, arguments);
                        return this
                    };
                    r[o[0] + "With"] = s.fireWith
                });
                i.promise(r);
                if (e) {
                    e.call(r, r)
                }
                return r
            }, when: function (e) {
                var t = 0, n = i.call(arguments), r = n.length, o = r !== 1 || e && d.isFunction(e.promise) ? r : 0, s = o === 1 ? e : d.Deferred(), a = function (e, t, n) {
                    return function (r) {
                        t[e] = this;
                        n[e] = arguments.length > 1 ? i.call(arguments) : r;
                        if (n === u) {
                            s.notifyWith(t, n)
                        } else if (!--o) {
                            s.resolveWith(t, n)
                        }
                    }
                }, u, f, l;
                if (r > 1) {
                    u = new Array(r);
                    f = new Array(r);
                    l = new Array(r);
                    for (; t < r; t++) {
                        if (n[t] && d.isFunction(n[t].promise)) {
                            n[t].promise().done(a(t, l, n)).fail(s.reject).progress(a(t, f, u))
                        } else {
                            --o
                        }
                    }
                }
                if (!o) {
                    s.resolveWith(l, n)
                }
                return s.promise()
            }
        });
        var H;
        d.fn.ready = function (e) {
            d.ready.promise().done(e);
            return this
        };
        d.extend({
            isReady: false, readyWait: 1, holdReady: function (e) {
                if (e) {
                    d.readyWait++
                } else {
                    d.ready(true)
                }
            }, ready: function (e) {
                if (e === true ? --d.readyWait : d.isReady) {
                    return
                }
                d.isReady = true;
                if (e !== true && --d.readyWait > 0) {
                    return
                }
                H.resolveWith(c, [d]);
                if (d.fn.triggerHandler) {
                    d(c).triggerHandler("ready");
                    d(c).off("ready")
                }
            }
        });
        function O() {
            c.removeEventListener("DOMContentLoaded", O, false);
            e.removeEventListener("load", O, false);
            d.ready()
        }

        d.ready.promise = function (t) {
            if (!H) {
                H = d.Deferred();
                if (c.readyState === "complete") {
                    setTimeout(d.ready)
                } else {
                    c.addEventListener("DOMContentLoaded", O, false);
                    e.addEventListener("load", O, false)
                }
            }
            return H.promise(t)
        };
        d.ready.promise();
        var F = d.access = function (e, t, n, i, r, o, s) {
            var a = 0, u = e.length, f = n == null;
            if (d.type(n) === "object") {
                r = true;
                for (a in n) {
                    d.access(e, t, a, n[a], true, o, s)
                }
            } else if (i !== undefined) {
                r = true;
                if (!d.isFunction(i)) {
                    s = true
                }
                if (f) {
                    if (s) {
                        t.call(e, i);
                        t = null
                    } else {
                        f = t;
                        t = function (e, t, n) {
                            return f.call(d(e), n)
                        }
                    }
                }
                if (t) {
                    for (; a < u; a++) {
                        t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)))
                    }
                }
            }
            return r ? e : f ? t.call(e) : u ? t(e[0], n) : o
        };
        d.acceptData = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };
        function P() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            });
            this.expando = d.expando + P.uid++
        }

        P.uid = 1;
        P.accepts = d.acceptData;
        P.prototype = {
            key: function (e) {
                if (!P.accepts(e)) {
                    return 0
                }
                var t = {}, n = e[this.expando];
                if (!n) {
                    n = P.uid++;
                    try {
                        t[this.expando] = {value: n};
                        Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n;
                        d.extend(e, t)
                    }
                }
                if (!this.cache[n]) {
                    this.cache[n] = {}
                }
                return n
            }, set: function (e, t, n) {
                var i, r = this.key(e), o = this.cache[r];
                if (typeof t === "string") {
                    o[t] = n
                } else {
                    if (d.isEmptyObject(o)) {
                        d.extend(this.cache[r], t)
                    } else {
                        for (i in t) {
                            o[i] = t[i]
                        }
                    }
                }
                return o
            }, get: function (e, t) {
                var n = this.cache[this.key(e)];
                return t === undefined ? n : n[t]
            }, access: function (e, t, n) {
                var i;
                if (t === undefined || t && typeof t === "string" && n === undefined) {
                    i = this.get(e, t);
                    return i !== undefined ? i : this.get(e, d.camelCase(t))
                }
                this.set(e, t, n);
                return n !== undefined ? n : t
            }, remove: function (e, t) {
                var n, i, r, o = this.key(e), s = this.cache[o];
                if (t === undefined) {
                    this.cache[o] = {}
                } else {
                    if (d.isArray(t)) {
                        i = t.concat(t.map(d.camelCase))
                    } else {
                        r = d.camelCase(t);
                        if (t in s) {
                            i = [t, r]
                        } else {
                            i = r;
                            i = i in s ? [i] : i.match(A) || []
                        }
                    }
                    n = i.length;
                    while (n--) {
                        delete s[i[n]]
                    }
                }
            }, hasData: function (e) {
                return !d.isEmptyObject(this.cache[e[this.expando]] || {})
            }, discard: function (e) {
                if (e[this.expando]) {
                    delete this.cache[e[this.expando]]
                }
            }
        };
        var R = new P;
        var M = new P;
        var W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, $ = /([A-Z])/g;

        function I(e, t, n) {
            var i;
            if (n === undefined && e.nodeType === 1) {
                i = "data-" + t.replace($, "-$1").toLowerCase();
                n = e.getAttribute(i);
                if (typeof n === "string") {
                    try {
                        n = n === "true" ? true : n === "false" ? false : n === "null" ? null : +n + "" === n ? +n : W.test(n) ? d.parseJSON(n) : n
                    } catch (e) {
                    }
                    M.set(e, t, n)
                } else {
                    n = undefined
                }
            }
            return n
        }

        d.extend({
            hasData: function (e) {
                return M.hasData(e) || R.hasData(e)
            }, data: function (e, t, n) {
                return M.access(e, t, n)
            }, removeData: function (e, t) {
                M.remove(e, t)
            }, _data: function (e, t, n) {
                return R.access(e, t, n)
            }, _removeData: function (e, t) {
                R.remove(e, t)
            }
        });
        d.fn.extend({
            data: function (e, t) {
                var n, i, r, o = this[0], s = o && o.attributes;
                if (e === undefined) {
                    if (this.length) {
                        r = M.get(o);
                        if (o.nodeType === 1 && !R.get(o, "hasDataAttrs")) {
                            n = s.length;
                            while (n--) {
                                if (s[n]) {
                                    i = s[n].name;
                                    if (i.indexOf("data-") === 0) {
                                        i = d.camelCase(i.slice(5));
                                        I(o, i, r[i])
                                    }
                                }
                            }
                            R.set(o, "hasDataAttrs", true)
                        }
                    }
                    return r
                }
                if (typeof e === "object") {
                    return this.each(function () {
                        M.set(this, e)
                    })
                }
                return F(this, function (t) {
                    var n, i = d.camelCase(e);
                    if (o && t === undefined) {
                        n = M.get(o, e);
                        if (n !== undefined) {
                            return n
                        }
                        n = M.get(o, i);
                        if (n !== undefined) {
                            return n
                        }
                        n = I(o, i, undefined);
                        if (n !== undefined) {
                            return n
                        }
                        return
                    }
                    this.each(function () {
                        var n = M.get(this, i);
                        M.set(this, i, t);
                        if (e.indexOf("-") !== -1 && n !== undefined) {
                            M.set(this, e, t)
                        }
                    })
                }, null, t, arguments.length > 1, null, true)
            }, removeData: function (e) {
                return this.each(function () {
                    M.remove(this, e)
                })
            }
        });
        d.extend({
            queue: function (e, t, n) {
                var i;
                if (e) {
                    t = (t || "fx") + "queue";
                    i = R.get(e, t);
                    if (n) {
                        if (!i || d.isArray(n)) {
                            i = R.access(e, t, d.makeArray(n))
                        } else {
                            i.push(n)
                        }
                    }
                    return i || []
                }
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = d.queue(e, t), i = n.length, r = n.shift(), o = d._queueHooks(e, t), s = function () {
                    d.dequeue(e, t)
                };
                if (r === "inprogress") {
                    r = n.shift();
                    i--
                }
                if (r) {
                    if (t === "fx") {
                        n.unshift("inprogress")
                    }
                    delete o.stop;
                    r.call(e, s, o)
                }
                if (!i && o) {
                    o.empty.fire()
                }
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return R.get(e, n) || R.access(e, n, {
                        empty: d.Callbacks("once memory").add(function () {
                            R.remove(e, [t + "queue", n])
                        })
                    })
            }
        });
        d.fn.extend({
            queue: function (e, t) {
                var n = 2;
                if (typeof e !== "string") {
                    t = e;
                    e = "fx";
                    n--
                }
                if (arguments.length < n) {
                    return d.queue(this[0], e)
                }
                return t === undefined ? this : this.each(function () {
                    var n = d.queue(this, e, t);
                    d._queueHooks(this, e);
                    if (e === "fx" && n[0] !== "inprogress") {
                        d.dequeue(this, e)
                    }
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    d.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, r = d.Deferred(), o = this, s = this.length, a = function () {
                    if (!--i) {
                        r.resolveWith(o, [o])
                    }
                };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined
                }
                e = e || "fx";
                while (s--) {
                    n = R.get(o[s], e + "queueHooks");
                    if (n && n.empty) {
                        i++;
                        n.empty.add(a)
                    }
                }
                a();
                return r.promise(t)
            }
        });
        var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var _ = ["Top", "Right", "Bottom", "Left"];
        var z = function (e, t) {
            e = t || e;
            return d.css(e, "display") === "none" || !d.contains(e.ownerDocument, e)
        };
        var X = /^(?:checkbox|radio)$/i;
        (function () {
            var e = c.createDocumentFragment(), t = e.appendChild(c.createElement("div")), n = c.createElement("input");
            n.setAttribute("type", "radio");
            n.setAttribute("checked", "checked");
            n.setAttribute("name", "t");
            t.appendChild(n);
            l.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            l.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
        })();
        var U = typeof undefined;
        l.focusinBubbles = "onfocusin" in e;
        var V = /^key/, Y = /^(?:mouse|pointer|contextmenu)|click/, G = /^(?:focusinfocus|focusoutblur)$/, Q = /^([^.]*)(?:\.(.+)|)$/;

        function J() {
            return true
        }

        function K() {
            return false
        }

        function Z() {
            try {
                return c.activeElement
            } catch (e) {
            }
        }

        d.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var o, s, a, u, f, l, c, p, h, g, m, y = R.get(e);
                if (!y) {
                    return
                }
                if (n.handler) {
                    o = n;
                    n = o.handler;
                    r = o.selector
                }
                if (!n.guid) {
                    n.guid = d.guid++
                }
                if (!(u = y.events)) {
                    u = y.events = {}
                }
                if (!(s = y.handle)) {
                    s = y.handle = function (t) {
                        return typeof d !== U && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : undefined
                    }
                }
                t = (t || "").match(A) || [""];
                f = t.length;
                while (f--) {
                    a = Q.exec(t[f]) || [];
                    h = m = a[1];
                    g = (a[2] || "").split(".").sort();
                    if (!h) {
                        continue
                    }
                    c = d.event.special[h] || {};
                    h = (r ? c.delegateType : c.bindType) || h;
                    c = d.event.special[h] || {};
                    l = d.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && d.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, o);
                    if (!(p = u[h])) {
                        p = u[h] = [];
                        p.delegateCount = 0;
                        if (!c.setup || c.setup.call(e, i, g, s) === false) {
                            if (e.addEventListener) {
                                e.addEventListener(h, s, false)
                            }
                        }
                    }
                    if (c.add) {
                        c.add.call(e, l);
                        if (!l.handler.guid) {
                            l.handler.guid = n.guid
                        }
                    }
                    if (r) {
                        p.splice(p.delegateCount++, 0, l)
                    } else {
                        p.push(l)
                    }
                    d.event.global[h] = true
                }
            },
            remove: function (e, t, n, i, r) {
                var o, s, a, u, f, l, c, p, h, g, m, y = R.hasData(e) && R.get(e);
                if (!y || !(u = y.events)) {
                    return
                }
                t = (t || "").match(A) || [""];
                f = t.length;
                while (f--) {
                    a = Q.exec(t[f]) || [];
                    h = m = a[1];
                    g = (a[2] || "").split(".").sort();
                    if (!h) {
                        for (h in u) {
                            d.event.remove(e, h + t[f], n, i, true)
                        }
                        continue
                    }
                    c = d.event.special[h] || {};
                    h = (i ? c.delegateType : c.bindType) || h;
                    p = u[h] || [];
                    a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    s = o = p.length;
                    while (o--) {
                        l = p[o];
                        if ((r || m === l.origType) && (!n || n.guid === l.guid) && (!a || a.test(l.namespace)) && (!i || i === l.selector || i === "**" && l.selector)) {
                            p.splice(o, 1);
                            if (l.selector) {
                                p.delegateCount--
                            }
                            if (c.remove) {
                                c.remove.call(e, l)
                            }
                        }
                    }
                    if (s && !p.length) {
                        if (!c.teardown || c.teardown.call(e, g, y.handle) === false) {
                            d.removeEvent(e, h, y.handle)
                        }
                        delete u[h]
                    }
                }
                if (d.isEmptyObject(u)) {
                    delete y.handle;
                    R.remove(e, "events")
                }
            },
            trigger: function (t, n, i, r) {
                var o, s, a, u, l, p, h, g = [i || c], m = f.call(t, "type") ? t.type : t, y = f.call(t, "namespace") ? t.namespace.split(".") : [];
                s = a = i = i || c;
                if (i.nodeType === 3 || i.nodeType === 8) {
                    return
                }
                if (G.test(m + d.event.triggered)) {
                    return
                }
                if (m.indexOf(".") >= 0) {
                    y = m.split(".");
                    m = y.shift();
                    y.sort()
                }
                l = m.indexOf(":") < 0 && "on" + m;
                t = t[d.expando] ? t : new d.Event(m, typeof t === "object" && t);
                t.isTrigger = r ? 2 : 3;
                t.namespace = y.join(".");
                t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                t.result = undefined;
                if (!t.target) {
                    t.target = i
                }
                n = n == null ? [t] : d.makeArray(n, [t]);
                h = d.event.special[m] || {};
                if (!r && h.trigger && h.trigger.apply(i, n) === false) {
                    return
                }
                if (!r && !h.noBubble && !d.isWindow(i)) {
                    u = h.delegateType || m;
                    if (!G.test(u + m)) {
                        s = s.parentNode
                    }
                    for (; s; s = s.parentNode) {
                        g.push(s);
                        a = s
                    }
                    if (a === (i.ownerDocument || c)) {
                        g.push(a.defaultView || a.parentWindow || e)
                    }
                }
                o = 0;
                while ((s = g[o++]) && !t.isPropagationStopped()) {
                    t.type = o > 1 ? u : h.bindType || m;
                    p = (R.get(s, "events") || {})[t.type] && R.get(s, "handle");
                    if (p) {
                        p.apply(s, n)
                    }
                    p = l && s[l];
                    if (p && p.apply && d.acceptData(s)) {
                        t.result = p.apply(s, n);
                        if (t.result === false) {
                            t.preventDefault()
                        }
                    }
                }
                t.type = m;
                if (!r && !t.isDefaultPrevented()) {
                    if ((!h._default || h._default.apply(g.pop(), n) === false) && d.acceptData(i)) {
                        if (l && d.isFunction(i[m]) && !d.isWindow(i)) {
                            a = i[l];
                            if (a) {
                                i[l] = null
                            }
                            d.event.triggered = m;
                            i[m]();
                            d.event.triggered = undefined;
                            if (a) {
                                i[l] = a
                            }
                        }
                    }
                }
                return t.result
            },
            dispatch: function (e) {
                e = d.event.fix(e);
                var t, n, r, o, s, a = [], u = i.call(arguments), f = (R.get(this, "events") || {})[e.type] || [], l = d.event.special[e.type] || {};
                u[0] = e;
                e.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, e) === false) {
                    return
                }
                a = d.event.handlers.call(this, e, f);
                t = 0;
                while ((o = a[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem;
                    n = 0;
                    while ((s = o.handlers[n++]) && !e.isImmediatePropagationStopped()) {
                        if (!e.namespace_re || e.namespace_re.test(s.namespace)) {
                            e.handleObj = s;
                            e.data = s.data;
                            r = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u);
                            if (r !== undefined) {
                                if ((e.result = r) === false) {
                                    e.preventDefault();
                                    e.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (l.postDispatch) {
                    l.postDispatch.call(this, e)
                }
                return e.result
            },
            handlers: function (e, t) {
                var n, i, r, o, s = [], a = t.delegateCount, u = e.target;
                if (a && u.nodeType && (!e.button || e.type !== "click")) {
                    for (; u !== this; u = u.parentNode || this) {
                        if (u.disabled !== true || e.type !== "click") {
                            i = [];
                            for (n = 0; n < a; n++) {
                                o = t[n];
                                r = o.selector + " ";
                                if (i[r] === undefined) {
                                    i[r] = o.needsContext ? d(r, this).index(u) >= 0 : d.find(r, this, null, [u]).length
                                }
                                if (i[r]) {
                                    i.push(o)
                                }
                            }
                            if (i.length) {
                                s.push({elem: u, handlers: i})
                            }
                        }
                    }
                }
                if (a < t.length) {
                    s.push({elem: this, handlers: t.slice(a)})
                }
                return s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    if (e.which == null) {
                        e.which = t.charCode != null ? t.charCode : t.keyCode
                    }
                    return e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, r, o = t.button;
                    if (e.pageX == null && t.clientX != null) {
                        n = e.target.ownerDocument || c;
                        i = n.documentElement;
                        r = n.body;
                        e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0);
                        e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)
                    }
                    if (!e.which && o !== undefined) {
                        e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0
                    }
                    return e
                }
            },
            fix: function (e) {
                if (e[d.expando]) {
                    return e
                }
                var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
                if (!s) {
                    this.fixHooks[r] = s = Y.test(r) ? this.mouseHooks : V.test(r) ? this.keyHooks : {}
                }
                i = s.props ? this.props.concat(s.props) : this.props;
                e = new d.Event(o);
                t = i.length;
                while (t--) {
                    n = i[t];
                    e[n] = o[n]
                }
                if (!e.target) {
                    e.target = c
                }
                if (e.target.nodeType === 3) {
                    e.target = e.target.parentNode
                }
                return s.filter ? s.filter(e, o) : e
            },
            special: {
                load: {noBubble: true}, focus: {
                    trigger: function () {
                        if (this !== Z() && this.focus) {
                            this.focus();
                            return false
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === Z() && this.blur) {
                            this.blur();
                            return false
                        }
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (this.type === "checkbox" && this.click && d.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    }, _default: function (e) {
                        return d.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        if (e.result !== undefined && e.originalEvent) {
                            e.originalEvent.returnValue = e.result
                        }
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var r = d.extend(new d.Event, n, {type: e, isSimulated: true, originalEvent: {}});
                if (i) {
                    d.event.trigger(r, null, t)
                } else {
                    d.event.dispatch.call(t, r)
                }
                if (r.isDefaultPrevented()) {
                    n.preventDefault()
                }
            }
        };
        d.removeEvent = function (e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n, false)
            }
        };
        d.Event = function (e, t) {
            if (!(this instanceof d.Event)) {
                return new d.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? J : K
            } else {
                this.type = e
            }
            if (t) {
                d.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || d.now();
            this[d.expando] = true
        };
        d.Event.prototype = {
            isDefaultPrevented: K,
            isPropagationStopped: K,
            isImmediatePropagationStopped: K,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = J;
                if (e && e.preventDefault) {
                    e.preventDefault()
                }
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = J;
                if (e && e.stopPropagation) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = J;
                if (e && e.stopImmediatePropagation) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            d.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    if (!r || r !== i && !d.contains(i, r)) {
                        e.type = o.origType;
                        n = o.handler.apply(this, arguments);
                        e.type = t
                    }
                    return n
                }
            }
        });
        if (!l.focusinBubbles) {
            d.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                var n = function (e) {
                    d.event.simulate(t, e.target, d.event.fix(e), true)
                };
                d.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this, r = R.access(i, t);
                        if (!r) {
                            i.addEventListener(e, n, true)
                        }
                        R.access(i, t, (r || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this, r = R.access(i, t) - 1;
                        if (!r) {
                            i.removeEventListener(e, n, true);
                            R.remove(i, t)
                        } else {
                            R.access(i, t, r)
                        }
                    }
                }
            })
        }
        d.fn.extend({
            on: function (e, t, n, i, r) {
                var o, s;
                if (typeof e === "object") {
                    if (typeof t !== "string") {
                        n = n || t;
                        t = undefined
                    }
                    for (s in e) {
                        this.on(s, t, n, e[s], r)
                    }
                    return this
                }
                if (n == null && i == null) {
                    i = t;
                    n = t = undefined
                } else if (i == null) {
                    if (typeof t === "string") {
                        i = n;
                        n = undefined
                    } else {
                        i = n;
                        n = t;
                        t = undefined
                    }
                }
                if (i === false) {
                    i = K
                } else if (!i) {
                    return this
                }
                if (r === 1) {
                    o = i;
                    i = function (e) {
                        d().off(e);
                        return o.apply(this, arguments)
                    };
                    i.guid = o.guid || (o.guid = d.guid++)
                }
                return this.each(function () {
                    d.event.add(this, e, i, n, t)
                })
            }, one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) {
                    i = e.handleObj;
                    d(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                    return this
                }
                if (typeof e === "object") {
                    for (r in e) {
                        this.off(r, t, e[r])
                    }
                    return this
                }
                if (t === false || typeof t === "function") {
                    n = t;
                    t = undefined
                }
                if (n === false) {
                    n = K
                }
                return this.each(function () {
                    d.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    d.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) {
                    return d.event.trigger(e, t, n, true)
                }
            }
        });
        var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, te = /<([\w:]+)/, ne = /<|&#?\w+;/, ie = /<(?:script|style|link)/i, re = /checked\s*(?:[^=]|=\s*.checked.)/i, oe = /^$|\/(?:java|ecma)script/i, se = /^true\/(.*)/, ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ue.optgroup = ue.option;
        ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead;
        ue.th = ue.td;
        function fe(e, t) {
            return d.nodeName(e, "table") && d.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function le(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function ce(e) {
            var t = se.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function pe(e, t) {
            var n = 0, i = e.length;
            for (; n < i; n++) {
                R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
            }
        }

        function de(e, t) {
            var n, i, r, o, s, a, u, f;
            if (t.nodeType !== 1) {
                return
            }
            if (R.hasData(e)) {
                o = R.access(e);
                s = R.set(t, o);
                f = o.events;
                if (f) {
                    delete s.handle;
                    s.events = {};
                    for (r in f) {
                        for (n = 0, i = f[r].length; n < i; n++) {
                            d.event.add(t, r, f[r][n])
                        }
                    }
                }
            }
            if (M.hasData(e)) {
                a = M.access(e);
                u = d.extend({}, a);
                M.set(t, u)
            }
        }

        function he(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return t === undefined || t && d.nodeName(e, t) ? d.merge([e], n) : n
        }

        function ge(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && X.test(e.type)) {
                t.checked = e.checked
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue
            }
        }

        d.extend({
            clone: function (e, t, n) {
                var i, r, o, s, a = e.cloneNode(true), u = d.contains(e.ownerDocument, e);
                if (!l.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !d.isXMLDoc(e)) {
                    s = he(a);
                    o = he(e);
                    for (i = 0, r = o.length; i < r; i++) {
                        ge(o[i], s[i])
                    }
                }
                if (t) {
                    if (n) {
                        o = o || he(e);
                        s = s || he(a);
                        for (i = 0, r = o.length; i < r; i++) {
                            de(o[i], s[i])
                        }
                    } else {
                        de(e, a)
                    }
                }
                s = he(a, "script");
                if (s.length > 0) {
                    pe(s, !u && he(e, "script"))
                }
                return a
            }, buildFragment: function (e, t, n, i) {
                var r, o, s, a, u, f, l = t.createDocumentFragment(), c = [], p = 0, h = e.length;
                for (; p < h; p++) {
                    r = e[p];
                    if (r || r === 0) {
                        if (d.type(r) === "object") {
                            d.merge(c, r.nodeType ? [r] : r)
                        } else if (!ne.test(r)) {
                            c.push(t.createTextNode(r))
                        } else {
                            o = o || l.appendChild(t.createElement("div"));
                            s = (te.exec(r) || ["", ""])[1].toLowerCase();
                            a = ue[s] || ue._default;
                            o.innerHTML = a[1] + r.replace(ee, "<$1></$2>") + a[2];
                            f = a[0];
                            while (f--) {
                                o = o.lastChild
                            }
                            d.merge(c, o.childNodes);
                            o = l.firstChild;
                            o.textContent = ""
                        }
                    }
                }
                l.textContent = "";
                p = 0;
                while (r = c[p++]) {
                    if (i && d.inArray(r, i) !== -1) {
                        continue
                    }
                    u = d.contains(r.ownerDocument, r);
                    o = he(l.appendChild(r), "script");
                    if (u) {
                        pe(o)
                    }
                    if (n) {
                        f = 0;
                        while (r = o[f++]) {
                            if (oe.test(r.type || "")) {
                                n.push(r)
                            }
                        }
                    }
                }
                return l
            }, cleanData: function (e) {
                var t, n, i, r, o = d.event.special, s = 0;
                for (; (n = e[s]) !== undefined; s++) {
                    if (d.acceptData(n)) {
                        r = n[R.expando];
                        if (r && (t = R.cache[r])) {
                            if (t.events) {
                                for (i in t.events) {
                                    if (o[i]) {
                                        d.event.remove(n, i)
                                    } else {
                                        d.removeEvent(n, i, t.handle)
                                    }
                                }
                            }
                            if (R.cache[r]) {
                                delete R.cache[r]
                            }
                        }
                    }
                    delete M.cache[n[M.expando]]
                }
            }
        });
        d.fn.extend({
            text: function (e) {
                return F(this, function (e) {
                    return e === undefined ? d.text(this) : this.empty().each(function () {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = fe(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = fe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }
                })
            }, remove: function (e, t) {
                var n, i = e ? d.filter(e, this) : this, r = 0;
                for (; (n = i[r]) != null; r++) {
                    if (!t && n.nodeType === 1) {
                        d.cleanData(he(n))
                    }
                    if (n.parentNode) {
                        if (t && d.contains(n.ownerDocument, n)) {
                            pe(he(n, "script"))
                        }
                        n.parentNode.removeChild(n)
                    }
                }
                return this
            }, empty: function () {
                var e, t = 0;
                for (; (e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        d.cleanData(he(e, false));
                        e.textContent = ""
                    }
                }
                return this
            }, clone: function (e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function () {
                    return d.clone(this, e, t)
                })
            }, html: function (e) {
                return F(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !ie.test(e) && !ue[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(ee, "<$1></$2>");
                        try {
                            for (; n < i; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    d.cleanData(he(t, false));
                                    t.innerHTML = e
                                }
                            }
                            t = 0
                        } catch (e) {
                        }
                    }
                    if (t) {
                        this.empty().append(e)
                    }
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = arguments[0];
                this.domManip(arguments, function (t) {
                    e = this.parentNode;
                    d.cleanData(he(this));
                    if (e) {
                        e.replaceChild(t, this)
                    }
                });
                return e && (e.length || e.nodeType) ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, true)
            }, domManip: function (e, t) {
                e = r.apply([], e);
                var n, i, o, s, a, u, f = 0, c = this.length, p = this, h = c - 1, g = e[0], m = d.isFunction(g);
                if (m || c > 1 && typeof g === "string" && !l.checkClone && re.test(g)) {
                    return this.each(function (n) {
                        var i = p.eq(n);
                        if (m) {
                            e[0] = g.call(this, n, i.html())
                        }
                        i.domManip(e, t)
                    })
                }
                if (c) {
                    n = d.buildFragment(e, this[0].ownerDocument, false, this);
                    i = n.firstChild;
                    if (n.childNodes.length === 1) {
                        n = i
                    }
                    if (i) {
                        o = d.map(he(n, "script"), le);
                        s = o.length;
                        for (; f < c; f++) {
                            a = n;
                            if (f !== h) {
                                a = d.clone(a, true, true);
                                if (s) {
                                    d.merge(o, he(a, "script"))
                                }
                            }
                            t.call(this[f], a, f)
                        }
                        if (s) {
                            u = o[o.length - 1].ownerDocument;
                            d.map(o, ce);
                            for (f = 0; f < s; f++) {
                                a = o[f];
                                if (oe.test(a.type || "") && !R.access(a, "globalEval") && d.contains(u, a)) {
                                    if (a.src) {
                                        if (d._evalUrl) {
                                            d._evalUrl(a.src)
                                        }
                                    } else {
                                        d.globalEval(a.textContent.replace(ae, ""))
                                    }
                                }
                            }
                        }
                    }
                }
                return this
            }
        });
        d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            d.fn[e] = function (e) {
                var n, i = [], r = d(e), s = r.length - 1, a = 0;
                for (; a <= s; a++) {
                    n = a === s ? this : this.clone(true);
                    d(r[a])[t](n);
                    o.apply(i, n.get())
                }
                return this.pushStack(i)
            }
        });
        var me, ye = {};

        function ve(t, n) {
            var i, r = d(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : d.css(r[0], "display");
            r.detach();
            return o
        }

        function xe(e) {
            var t = c, n = ye[e];
            if (!n) {
                n = ve(e, t);
                if (n === "none" || !n) {
                    me = (me || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
                    t = me[0].contentDocument;
                    t.write();
                    t.close();
                    n = ve(e, t);
                    me.detach()
                }
                ye[e] = n
            }
            return n
        }

        var we = /^margin/;
        var be = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i");
        var Te = function (t) {
            if (t.ownerDocument.defaultView.opener) {
                return t.ownerDocument.defaultView.getComputedStyle(t, null)
            }
            return e.getComputedStyle(t, null)
        };

        function Ce(e, t, n) {
            var i, r, o, s, a = e.style;
            n = n || Te(e);
            if (n) {
                s = n.getPropertyValue(t) || n[t]
            }
            if (n) {
                if (s === "" && !d.contains(e.ownerDocument, e)) {
                    s = d.style(e, t)
                }
                if (be.test(s) && we.test(t)) {
                    i = a.width;
                    r = a.minWidth;
                    o = a.maxWidth;
                    a.minWidth = a.maxWidth = a.width = s;
                    s = n.width;
                    a.width = i;
                    a.minWidth = r;
                    a.maxWidth = o
                }
            }
            return s !== undefined ? s + "" : s
        }

        function ke(e, t) {
            return {
                get: function () {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }

        (function () {
            var t, n, i = c.documentElement, r = c.createElement("div"), o = c.createElement("div");
            if (!o.style) {
                return
            }
            o.style.backgroundClip = "content-box";
            o.cloneNode(true).style.backgroundClip = "";
            l.clearCloneStyle = o.style.backgroundClip === "content-box";
            r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
            r.appendChild(o);
            function s() {
                o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
                o.innerHTML = "";
                i.appendChild(r);
                var s = e.getComputedStyle(o, null);
                t = s.top !== "1%";
                n = s.width === "4px";
                i.removeChild(r)
            }

            if (e.getComputedStyle) {
                d.extend(l, {
                    pixelPosition: function () {
                        s();
                        return t
                    }, boxSizingReliable: function () {
                        if (n == null) {
                            s()
                        }
                        return n
                    }, reliableMarginRight: function () {
                        var t, n = o.appendChild(c.createElement("div"));
                        n.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                        n.style.marginRight = n.style.width = "0";
                        o.style.width = "1px";
                        i.appendChild(r);
                        t = !parseFloat(e.getComputedStyle(n, null).marginRight);
                        i.removeChild(r);
                        o.removeChild(n);
                        return t
                    }
                })
            }
        })();
        d.swap = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) {
                s[o] = e.style[o];
                e.style[o] = t[o]
            }
            r = n.apply(e, i || []);
            for (o in t) {
                e.style[o] = s[o]
            }
            return r
        };
        var Ne = /^(none|table(?!-c[ea]).+)/, Ee = new RegExp("^(" + B + ")(.*)$", "i"), Se = new RegExp("^([+-])=(" + B + ")", "i"), je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, De = {letterSpacing: "0", fontWeight: "400"}, Ae = ["Webkit", "O", "Moz", "ms"];

        function qe(e, t) {
            if (t in e) {
                return t
            }
            var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ae.length;
            while (r--) {
                t = Ae[r] + n;
                if (t in e) {
                    return t
                }
            }
            return i
        }

        function Le(e, t, n) {
            var i = Ee.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function He(e, t, n, i, r) {
            var o = n === (i ? "border" : "content") ? 4 : t === "width" ? 1 : 0, s = 0;
            for (; o < 4; o += 2) {
                if (n === "margin") {
                    s += d.css(e, n + _[o], true, r)
                }
                if (i) {
                    if (n === "content") {
                        s -= d.css(e, "padding" + _[o], true, r)
                    }
                    if (n !== "margin") {
                        s -= d.css(e, "border" + _[o] + "Width", true, r)
                    }
                } else {
                    s += d.css(e, "padding" + _[o], true, r);
                    if (n !== "padding") {
                        s += d.css(e, "border" + _[o] + "Width", true, r)
                    }
                }
            }
            return s
        }

        function Oe(e, t, n) {
            var i = true, r = t === "width" ? e.offsetWidth : e.offsetHeight, o = Te(e), s = d.css(e, "boxSizing", false, o) === "border-box";
            if (r <= 0 || r == null) {
                r = Ce(e, t, o);
                if (r < 0 || r == null) {
                    r = e.style[t]
                }
                if (be.test(r)) {
                    return r
                }
                i = s && (l.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0
            }
            return r + He(e, t, n || (s ? "border" : "content"), i, o) + "px"
        }

        function Fe(e, t) {
            var n, i, r, o = [], s = 0, a = e.length;
            for (; s < a; s++) {
                i = e[s];
                if (!i.style) {
                    continue
                }
                o[s] = R.get(i, "olddisplay");
                n = i.style.display;
                if (t) {
                    if (!o[s] && n === "none") {
                        i.style.display = ""
                    }
                    if (i.style.display === "" && z(i)) {
                        o[s] = R.access(i, "olddisplay", xe(i.nodeName))
                    }
                } else {
                    r = z(i);
                    if (n !== "none" || !r) {
                        R.set(i, "olddisplay", r ? n : d.css(i, "display"))
                    }
                }
            }
            for (s = 0; s < a; s++) {
                i = e[s];
                if (!i.style) {
                    continue
                }
                if (!t || i.style.display === "none" || i.style.display === "") {
                    i.style.display = t ? o[s] || "" : "none"
                }
            }
            return e
        }

        d.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ce(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {float: "cssFloat"},
            style: function (e, t, n, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return
                }
                var r, o, s, a = d.camelCase(t), u = e.style;
                t = d.cssProps[a] || (d.cssProps[a] = qe(u, a));
                s = d.cssHooks[t] || d.cssHooks[a];
                if (n !== undefined) {
                    o = typeof n;
                    if (o === "string" && (r = Se.exec(n))) {
                        n = (r[1] + 1) * r[2] + parseFloat(d.css(e, t));
                        o = "number"
                    }
                    if (n == null || n !== n) {
                        return
                    }
                    if (o === "number" && !d.cssNumber[a]) {
                        n += "px"
                    }
                    if (!l.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        u[t] = "inherit"
                    }
                    if (!s || !("set" in s) || (n = s.set(e, n, i)) !== undefined) {
                        u[t] = n
                    }
                } else {
                    if (s && "get" in s && (r = s.get(e, false, i)) !== undefined) {
                        return r
                    }
                    return u[t]
                }
            },
            css: function (e, t, n, i) {
                var r, o, s, a = d.camelCase(t);
                t = d.cssProps[a] || (d.cssProps[a] = qe(e.style, a));
                s = d.cssHooks[t] || d.cssHooks[a];
                if (s && "get" in s) {
                    r = s.get(e, true, n)
                }
                if (r === undefined) {
                    r = Ce(e, t, i)
                }
                if (r === "normal" && t in De) {
                    r = De[t]
                }
                if (n === "" || n) {
                    o = parseFloat(r);
                    return n === true || d.isNumeric(o) ? o || 0 : r
                }
                return r
            }
        });
        d.each(["height", "width"], function (e, t) {
            d.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) {
                        return Ne.test(d.css(e, "display")) && e.offsetWidth === 0 ? d.swap(e, je, function () {
                            return Oe(e, t, i)
                        }) : Oe(e, t, i)
                    }
                }, set: function (e, n, i) {
                    var r = i && Te(e);
                    return Le(e, n, i ? He(e, t, i, d.css(e, "boxSizing", false, r) === "border-box", r) : 0)
                }
            }
        });
        d.cssHooks.marginRight = ke(l.reliableMarginRight, function (e, t) {
            if (t) {
                return d.swap(e, {display: "inline-block"}, Ce, [e, "marginRight"])
            }
        });
        d.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            d.cssHooks[e + t] = {
                expand: function (n) {
                    var i = 0, r = {}, o = typeof n === "string" ? n.split(" ") : [n];
                    for (; i < 4; i++) {
                        r[e + _[i] + t] = o[i] || o[i - 2] || o[0]
                    }
                    return r
                }
            };
            if (!we.test(e)) {
                d.cssHooks[e + t].set = Le
            }
        });
        d.fn.extend({
            css: function (e, t) {
                return F(this, function (e, t, n) {
                    var i, r, o = {}, s = 0;
                    if (d.isArray(t)) {
                        i = Te(e);
                        r = t.length;
                        for (; s < r; s++) {
                            o[t[s]] = d.css(e, t[s], false, i)
                        }
                        return o
                    }
                    return n !== undefined ? d.style(e, t, n) : d.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return Fe(this, true)
            }, hide: function () {
                return Fe(this)
            }, toggle: function (e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide()
                }
                return this.each(function () {
                    if (z(this)) {
                        d(this).show()
                    } else {
                        d(this).hide()
                    }
                })
            }
        });
        function Pe(e, t, n, i, r) {
            return new Pe.prototype.init(e, t, n, i, r)
        }

        d.Tween = Pe;
        Pe.prototype = {
            constructor: Pe, init: function (e, t, n, i, r, o) {
                this.elem = e;
                this.prop = n;
                this.easing = r || "swing";
                this.options = t;
                this.start = this.now = this.cur();
                this.end = i;
                this.unit = o || (d.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = Pe.propHooks[this.prop];
                return e && e.get ? e.get(this) : Pe.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = Pe.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                } else {
                    this.pos = t = e
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (n && n.set) {
                    n.set(this)
                } else {
                    Pe.propHooks._default.set(this)
                }
                return this
            }
        };
        Pe.prototype.init.prototype = Pe.prototype;
        Pe.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
                        return e.elem[e.prop]
                    }
                    t = d.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                }, set: function (e) {
                    if (d.fx.step[e.prop]) {
                        d.fx.step[e.prop](e)
                    } else if (e.elem.style && (e.elem.style[d.cssProps[e.prop]] != null || d.cssHooks[e.prop])) {
                        d.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        };
        Pe.propHooks.scrollTop = Pe.propHooks.scrollLeft = {
            set: function (e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        d.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        };
        d.fx = Pe.prototype.init;
        d.fx.step = {};
        var Re, Me, We = /^(?:toggle|show|hide)$/, $e = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"), Ie = /queueHooks$/, Be = [Ve], _e = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), i = n.cur(), r = $e.exec(t), o = r && r[3] || (d.cssNumber[e] ? "" : "px"), s = (d.cssNumber[e] || o !== "px" && +i) && $e.exec(d.css(n.elem, e)), a = 1, u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3];
                    r = r || [];
                    s = +i || 1;
                    do {
                        a = a || ".5";
                        s = s / a;
                        d.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / i) && a !== 1 && --u)
                }
                if (r) {
                    s = n.start = +s || +i || 0;
                    n.unit = o;
                    n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]
                }
                return n
            }]
        };

        function ze() {
            setTimeout(function () {
                Re = undefined
            });
            return Re = d.now()
        }

        function Xe(e, t) {
            var n, i = 0, r = {height: e};
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t) {
                n = _[i];
                r["margin" + n] = r["padding" + n] = e
            }
            if (t) {
                r.opacity = r.width = e
            }
            return r
        }

        function Ue(e, t, n) {
            var i, r = (_e[t] || []).concat(_e["*"]), o = 0, s = r.length;
            for (; o < s; o++) {
                if (i = r[o].call(n, t, e)) {
                    return i
                }
            }
        }

        function Ve(e, t, n) {
            var i, r, o, s, a, u, f, l, c = this, p = {}, h = e.style, g = e.nodeType && z(e), m = R.get(e, "fxshow");
            if (!n.queue) {
                a = d._queueHooks(e, "fx");
                if (a.unqueued == null) {
                    a.unqueued = 0;
                    u = a.empty.fire;
                    a.empty.fire = function () {
                        if (!a.unqueued) {
                            u()
                        }
                    }
                }
                a.unqueued++;
                c.always(function () {
                    c.always(function () {
                        a.unqueued--;
                        if (!d.queue(e, "fx").length) {
                            a.empty.fire()
                        }
                    })
                })
            }
            if (e.nodeType === 1 && ("height" in t || "width" in t)) {
                n.overflow = [h.overflow, h.overflowX, h.overflowY];
                f = d.css(e, "display");
                l = f === "none" ? R.get(e, "olddisplay") || xe(e.nodeName) : f;
                if (l === "inline" && d.css(e, "float") === "none") {
                    h.display = "inline-block"
                }
            }
            if (n.overflow) {
                h.overflow = "hidden";
                c.always(function () {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2]
                })
            }
            for (i in t) {
                r = t[i];
                if (We.exec(r)) {
                    delete t[i];
                    o = o || r === "toggle";
                    if (r === (g ? "hide" : "show")) {
                        if (r === "show" && m && m[i] !== undefined) {
                            g = true
                        } else {
                            continue
                        }
                    }
                    p[i] = m && m[i] || d.style(e, i)
                } else {
                    f = undefined
                }
            }
            if (!d.isEmptyObject(p)) {
                if (m) {
                    if ("hidden" in m) {
                        g = m.hidden
                    }
                } else {
                    m = R.access(e, "fxshow", {})
                }
                if (o) {
                    m.hidden = !g
                }
                if (g) {
                    d(e).show()
                } else {
                    c.done(function () {
                        d(e).hide()
                    })
                }
                c.done(function () {
                    var t;
                    R.remove(e, "fxshow");
                    for (t in p) {
                        d.style(e, t, p[t])
                    }
                });
                for (i in p) {
                    s = Ue(g ? m[i] : 0, i, c);
                    if (!(i in m)) {
                        m[i] = s.start;
                        if (g) {
                            s.end = s.start;
                            s.start = i === "width" || i === "height" ? 1 : 0
                        }
                    }
                }
            } else if ((f === "none" ? xe(e.nodeName) : f) === "inline") {
                h.display = f
            }
        }

        function Ye(e, t) {
            var n, i, r, o, s;
            for (n in e) {
                i = d.camelCase(n);
                r = t[i];
                o = e[n];
                if (d.isArray(o)) {
                    r = o[1];
                    o = e[n] = o[0]
                }
                if (n !== i) {
                    e[i] = o;
                    delete e[n]
                }
                s = d.cssHooks[i];
                if (s && "expand" in s) {
                    o = s.expand(o);
                    delete e[i];
                    for (n in o) {
                        if (!(n in e)) {
                            e[n] = o[n];
                            t[n] = r
                        }
                    }
                } else {
                    t[i] = r
                }
            }
        }

        function Ge(e, t, n) {
            var i, r, o = 0, s = Be.length, a = d.Deferred().always(function () {
                delete u.elem
            }), u = function () {
                if (r) {
                    return false
                }
                var t = Re || ze(), n = Math.max(0, f.startTime + f.duration - t), i = n / f.duration || 0, o = 1 - i, s = 0, u = f.tweens.length;
                for (; s < u; s++) {
                    f.tweens[s].run(o)
                }
                a.notifyWith(e, [f, o, n]);
                if (o < 1 && u) {
                    return n
                } else {
                    a.resolveWith(e, [f]);
                    return false
                }
            }, f = a.promise({
                elem: e,
                props: d.extend({}, t),
                opts: d.extend(true, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Re || ze(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = d.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    f.tweens.push(i);
                    return i
                },
                stop: function (t) {
                    var n = 0, i = t ? f.tweens.length : 0;
                    if (r) {
                        return this
                    }
                    r = true;
                    for (; n < i; n++) {
                        f.tweens[n].run(1)
                    }
                    if (t) {
                        a.resolveWith(e, [f, t])
                    } else {
                        a.rejectWith(e, [f, t])
                    }
                    return this
                }
            }), l = f.props;
            Ye(l, f.opts.specialEasing);
            for (; o < s; o++) {
                i = Be[o].call(f, e, l, f.opts);
                if (i) {
                    return i
                }
            }
            d.map(l, Ue, f);
            if (d.isFunction(f.opts.start)) {
                f.opts.start.call(e, f)
            }
            d.fx.timer(d.extend(u, {elem: e, anim: f, queue: f.opts.queue}));
            return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }

        d.Animation = d.extend(Ge, {
            tweener: function (e, t) {
                if (d.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.split(" ")
                }
                var n, i = 0, r = e.length;
                for (; i < r; i++) {
                    n = e[i];
                    _e[n] = _e[n] || [];
                    _e[n].unshift(t)
                }
            }, prefilter: function (e, t) {
                if (t) {
                    Be.unshift(e)
                } else {
                    Be.push(e)
                }
            }
        });
        d.speed = function (e, t, n) {
            var i = e && typeof e === "object" ? d.extend({}, e) : {
                complete: n || !n && t || d.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !d.isFunction(t) && t
            };
            i.duration = d.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default;
            if (i.queue == null || i.queue === true) {
                i.queue = "fx"
            }
            i.old = i.complete;
            i.complete = function () {
                if (d.isFunction(i.old)) {
                    i.old.call(this)
                }
                if (i.queue) {
                    d.dequeue(this, i.queue)
                }
            };
            return i
        };
        d.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(z).css("opacity", 0).show().end().animate({opacity: t}, e, n, i);
            }, animate: function (e, t, n, i) {
                var r = d.isEmptyObject(e), o = d.speed(t, n, i), s = function () {
                    var t = Ge(this, d.extend({}, e), o);
                    if (r || R.get(this, "finish")) {
                        t.stop(true)
                    }
                };
                s.finish = s;
                return r || o.queue === false ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop;
                    t(n)
                };
                if (typeof e !== "string") {
                    n = t;
                    t = e;
                    e = undefined
                }
                if (t && e !== false) {
                    this.queue(e || "fx", [])
                }
                return this.each(function () {
                    var t = true, r = e != null && e + "queueHooks", o = d.timers, s = R.get(this);
                    if (r) {
                        if (s[r] && s[r].stop) {
                            i(s[r])
                        }
                    } else {
                        for (r in s) {
                            if (s[r] && s[r].stop && Ie.test(r)) {
                                i(s[r])
                            }
                        }
                    }
                    for (r = o.length; r--;) {
                        if (o[r].elem === this && (e == null || o[r].queue === e)) {
                            o[r].anim.stop(n);
                            t = false;
                            o.splice(r, 1)
                        }
                    }
                    if (t || !n) {
                        d.dequeue(this, e)
                    }
                })
            }, finish: function (e) {
                if (e !== false) {
                    e = e || "fx"
                }
                return this.each(function () {
                    var t, n = R.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = d.timers, s = i ? i.length : 0;
                    n.finish = true;
                    d.queue(this, e, []);
                    if (r && r.stop) {
                        r.stop.call(this, true)
                    }
                    for (t = o.length; t--;) {
                        if (o[t].elem === this && o[t].queue === e) {
                            o[t].anim.stop(true);
                            o.splice(t, 1)
                        }
                    }
                    for (t = 0; t < s; t++) {
                        if (i[t] && i[t].finish) {
                            i[t].finish.call(this)
                        }
                    }
                    delete n.finish
                })
            }
        });
        d.each(["toggle", "show", "hide"], function (e, t) {
            var n = d.fn[t];
            d.fn[t] = function (e, i, r) {
                return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(Xe(t, true), e, i, r)
            }
        });
        d.each({
            slideDown: Xe("show"),
            slideUp: Xe("hide"),
            slideToggle: Xe("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            d.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        });
        d.timers = [];
        d.fx.tick = function () {
            var e, t = 0, n = d.timers;
            Re = d.now();
            for (; t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1)
                }
            }
            if (!n.length) {
                d.fx.stop()
            }
            Re = undefined
        };
        d.fx.timer = function (e) {
            d.timers.push(e);
            if (e()) {
                d.fx.start()
            } else {
                d.timers.pop()
            }
        };
        d.fx.interval = 13;
        d.fx.start = function () {
            if (!Me) {
                Me = setInterval(d.fx.tick, d.fx.interval)
            }
        };
        d.fx.stop = function () {
            clearInterval(Me);
            Me = null
        };
        d.fx.speeds = {slow: 600, fast: 200, _default: 400};
        d.fn.delay = function (e, t) {
            e = d.fx ? d.fx.speeds[e] || e : e;
            t = t || "fx";
            return this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        };
        (function () {
            var e = c.createElement("input"), t = c.createElement("select"), n = t.appendChild(c.createElement("option"));
            e.type = "checkbox";
            l.checkOn = e.value !== "";
            l.optSelected = n.selected;
            t.disabled = true;
            l.optDisabled = !n.disabled;
            e = c.createElement("input");
            e.value = "t";
            e.type = "radio";
            l.radioValue = e.value === "t"
        })();
        var Qe, Je, Ke = d.expr.attrHandle;
        d.fn.extend({
            attr: function (e, t) {
                return F(this, d.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    d.removeAttr(this, e)
                })
            }
        });
        d.extend({
            attr: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (!e || o === 3 || o === 8 || o === 2) {
                    return
                }
                if (typeof e.getAttribute === U) {
                    return d.prop(e, t, n)
                }
                if (o !== 1 || !d.isXMLDoc(e)) {
                    t = t.toLowerCase();
                    i = d.attrHooks[t] || (d.expr.match.bool.test(t) ? Je : Qe)
                }
                if (n !== undefined) {
                    if (n === null) {
                        d.removeAttr(e, t)
                    } else if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r
                    } else {
                        e.setAttribute(t, n + "");
                        return n
                    }
                } else if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r
                } else {
                    r = d.find.attr(e, t);
                    return r == null ? undefined : r
                }
            }, removeAttr: function (e, t) {
                var n, i, r = 0, o = t && t.match(A);
                if (o && e.nodeType === 1) {
                    while (n = o[r++]) {
                        i = d.propFix[n] || n;
                        if (d.expr.match.bool.test(n)) {
                            e[i] = false
                        }
                        e.removeAttribute(n)
                    }
                }
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!l.radioValue && t === "radio" && d.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n
                            }
                            return t
                        }
                    }
                }
            }
        });
        Je = {
            set: function (e, t, n) {
                if (t === false) {
                    d.removeAttr(e, n)
                } else {
                    e.setAttribute(n, n)
                }
                return n
            }
        };
        d.each(d.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Ke[t] || d.find.attr;
            Ke[t] = function (e, t, i) {
                var r, o;
                if (!i) {
                    o = Ke[t];
                    Ke[t] = r;
                    r = n(e, t, i) != null ? t.toLowerCase() : null;
                    Ke[t] = o
                }
                return r
            }
        });
        var Ze = /^(?:input|select|textarea|button)$/i;
        d.fn.extend({
            prop: function (e, t) {
                return F(this, d.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[d.propFix[e] || e]
                })
            }
        });
        d.extend({
            propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
                var i, r, o, s = e.nodeType;
                if (!e || s === 3 || s === 8 || s === 2) {
                    return
                }
                o = s !== 1 || !d.isXMLDoc(e);
                if (o) {
                    t = d.propFix[t] || t;
                    r = d.propHooks[t]
                }
                if (n !== undefined) {
                    return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n
                } else {
                    return r && "get" in r && (i = r.get(e, t)) !== null ? i : e[t]
                }
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        return e.hasAttribute("tabindex") || Ze.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        });
        if (!l.optSelected) {
            d.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    if (t && t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                    return null
                }
            }
        }
        d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            d.propFix[this.toLowerCase()] = this
        });
        var et = /[\t\r\n\f]/g;
        d.fn.extend({
            addClass: function (e) {
                var t, n, i, r, o, s, a = typeof e === "string" && e, u = 0, f = this.length;
                if (d.isFunction(e)) {
                    return this.each(function (t) {
                        d(this).addClass(e.call(this, t, this.className))
                    })
                }
                if (a) {
                    t = (e || "").match(A) || [];
                    for (; u < f; u++) {
                        n = this[u];
                        i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(et, " ") : " ");
                        if (i) {
                            o = 0;
                            while (r = t[o++]) {
                                if (i.indexOf(" " + r + " ") < 0) {
                                    i += r + " "
                                }
                            }
                            s = d.trim(i);
                            if (n.className !== s) {
                                n.className = s
                            }
                        }
                    }
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, r, o, s, a = arguments.length === 0 || typeof e === "string" && e, u = 0, f = this.length;
                if (d.isFunction(e)) {
                    return this.each(function (t) {
                        d(this).removeClass(e.call(this, t, this.className))
                    })
                }
                if (a) {
                    t = (e || "").match(A) || [];
                    for (; u < f; u++) {
                        n = this[u];
                        i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(et, " ") : "");
                        if (i) {
                            o = 0;
                            while (r = t[o++]) {
                                while (i.indexOf(" " + r + " ") >= 0) {
                                    i = i.replace(" " + r + " ", " ")
                                }
                            }
                            s = e ? d.trim(i) : "";
                            if (n.className !== s) {
                                n.className = s
                            }
                        }
                    }
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                if (typeof t === "boolean" && n === "string") {
                    return t ? this.addClass(e) : this.removeClass(e)
                }
                if (d.isFunction(e)) {
                    return this.each(function (n) {
                        d(this).toggleClass(e.call(this, n, this.className, t), t)
                    })
                }
                return this.each(function () {
                    if (n === "string") {
                        var t, i = 0, r = d(this), o = e.match(A) || [];
                        while (t = o[i++]) {
                            if (r.hasClass(t)) {
                                r.removeClass(t)
                            } else {
                                r.addClass(t)
                            }
                        }
                    } else if (n === U || n === "boolean") {
                        if (this.className) {
                            R.set(this, "__className__", this.className)
                        }
                        this.className = this.className || e === false ? "" : R.get(this, "__className__") || ""
                    }
                })
            }, hasClass: function (e) {
                var t = " " + e + " ", n = 0, i = this.length;
                for (; n < i; n++) {
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(et, " ").indexOf(t) >= 0) {
                        return true
                    }
                }
                return false
            }
        });
        var tt = /\r/g;
        d.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0];
                if (!arguments.length) {
                    if (r) {
                        t = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()];
                        if (t && "get" in t && (n = t.get(r, "value")) !== undefined) {
                            return n
                        }
                        n = r.value;
                        return typeof n === "string" ? n.replace(tt, "") : n == null ? "" : n
                    }
                    return
                }
                i = d.isFunction(e);
                return this.each(function (n) {
                    var r;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (i) {
                        r = e.call(this, n, d(this).val())
                    } else {
                        r = e
                    }
                    if (r == null) {
                        r = ""
                    } else if (typeof r === "number") {
                        r += ""
                    } else if (d.isArray(r)) {
                        r = d.map(r, function (e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()];
                    if (!t || !("set" in t) || t.set(this, r, "value") === undefined) {
                        this.value = r
                    }
                })
            }
        });
        d.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = d.find.attr(e, "value");
                        return t != null ? t : d.trim(d.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, i = e.options, r = e.selectedIndex, o = e.type === "select-one" || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, u = r < 0 ? a : o ? r : 0;
                        for (; u < a; u++) {
                            n = i[u];
                            if ((n.selected || u === r) && (l.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                                t = d(n).val();
                                if (o) {
                                    return t
                                }
                                s.push(t)
                            }
                        }
                        return s
                    }, set: function (e, t) {
                        var n, i, r = e.options, o = d.makeArray(t), s = r.length;
                        while (s--) {
                            i = r[s];
                            if (i.selected = d.inArray(i.value, o) >= 0) {
                                n = true
                            }
                        }
                        if (!n) {
                            e.selectedIndex = -1
                        }
                        return o
                    }
                }
            }
        });
        d.each(["radio", "checkbox"], function () {
            d.valHooks[this] = {
                set: function (e, t) {
                    if (d.isArray(t)) {
                        return e.checked = d.inArray(d(e).val(), t) >= 0
                    }
                }
            };
            if (!l.checkOn) {
                d.valHooks[this].get = function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        d.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (e, t) {
            d.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        });
        d.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var nt = d.now();
        var it = /\?/;
        d.parseJSON = function (e) {
            return JSON.parse(e + "")
        };
        d.parseXML = function (e) {
            var t, n;
            if (!e || typeof e !== "string") {
                return null
            }
            try {
                n = new DOMParser;
                t = n.parseFromString(e, "text/xml")
            } catch (e) {
                t = undefined
            }
            if (!t || t.getElementsByTagName("parsererror").length) {
                d.error("Invalid XML: " + e)
            }
            return t
        };
        var rt = /#.*$/, ot = /([?&])_=[^&]*/, st = /^(.*?):[ \t]*([^\r\n]*)$/gm, at = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ut = /^(?:GET|HEAD)$/, ft = /^\/\//, lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ct = {}, pt = {}, dt = "*/".concat("*"), ht = e.location.href, gt = lt.exec(ht.toLowerCase()) || [];

        function mt(e) {
            return function (t, n) {
                if (typeof t !== "string") {
                    n = t;
                    t = "*"
                }
                var i, r = 0, o = t.toLowerCase().match(A) || [];
                if (d.isFunction(n)) {
                    while (i = o[r++]) {
                        if (i[0] === "+") {
                            i = i.slice(1) || "*";
                            (e[i] = e[i] || []).unshift(n)
                        } else {
                            (e[i] = e[i] || []).push(n)
                        }
                    }
                }
            }
        }

        function yt(e, t, n, i) {
            var r = {}, o = e === pt;

            function s(a) {
                var u;
                r[a] = true;
                d.each(e[a] || [], function (e, a) {
                    var f = a(t, n, i);
                    if (typeof f === "string" && !o && !r[f]) {
                        t.dataTypes.unshift(f);
                        s(f);
                        return false
                    } else if (o) {
                        return !(u = f)
                    }
                });
                return u
            }

            return s(t.dataTypes[0]) || !r["*"] && s("*")
        }

        function vt(e, t) {
            var n, i, r = d.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (r[n] ? e : i || (i = {}))[n] = t[n]
                }
            }
            if (i) {
                d.extend(true, e, i)
            }
            return e
        }

        function xt(e, t, n) {
            var i, r, o, s, a = e.contents, u = e.dataTypes;
            while (u[0] === "*") {
                u.shift();
                if (i === undefined) {
                    i = e.mimeType || t.getResponseHeader("Content-Type")
                }
            }
            if (i) {
                for (r in a) {
                    if (a[r] && a[r].test(i)) {
                        u.unshift(r);
                        break
                    }
                }
            }
            if (u[0] in n) {
                o = u[0]
            } else {
                for (r in n) {
                    if (!u[0] || e.converters[r + " " + u[0]]) {
                        o = r;
                        break
                    }
                    if (!s) {
                        s = r
                    }
                }
                o = o || s
            }
            if (o) {
                if (o !== u[0]) {
                    u.unshift(o)
                }
                return n[o]
            }
        }

        function wt(e, t, n, i) {
            var r, o, s, a, u, f = {}, l = e.dataTypes.slice();
            if (l[1]) {
                for (s in e.converters) {
                    f[s.toLowerCase()] = e.converters[s]
                }
            }
            o = l.shift();
            while (o) {
                if (e.responseFields[o]) {
                    n[e.responseFields[o]] = t
                }
                if (!u && i && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                u = o;
                o = l.shift();
                if (o) {
                    if (o === "*") {
                        o = u
                    } else if (u !== "*" && u !== o) {
                        s = f[u + " " + o] || f["* " + o];
                        if (!s) {
                            for (r in f) {
                                a = r.split(" ");
                                if (a[1] === o) {
                                    s = f[u + " " + a[0]] || f["* " + a[0]];
                                    if (s) {
                                        if (s === true) {
                                            s = f[r]
                                        } else if (f[r] !== true) {
                                            o = a[0];
                                            l.unshift(a[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (s !== true) {
                            if (s && e["throws"]) {
                                t = s(t)
                            } else {
                                try {
                                    t = s(t)
                                } catch (e) {
                                    return {state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o}
                                }
                            }
                        }
                    }
                }
            }
            return {state: "success", data: t}
        }

        d.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ht,
                type: "GET",
                isLocal: at.test(gt[1]),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-Www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": dt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": true, "text json": d.parseJSON, "text xml": d.parseXML},
                flatOptions: {url: true, context: true}
            },
            ajaxSetup: function (e, t) {
                return t ? vt(vt(e, d.ajaxSettings), t) : vt(d.ajaxSettings, e)
            },
            ajaxPrefilter: mt(ct),
            ajaxTransport: mt(pt),
            ajax: function (e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var n, i, r, o, s, a, u, f, l = d.ajaxSetup({}, t), c = l.context || l, p = l.context && (c.nodeType || c.jquery) ? d(c) : d.event, h = d.Deferred(), g = d.Callbacks("once memory"), m = l.statusCode || {}, y = {}, v = {}, x = 0, w = "canceled", b = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (x === 2) {
                            if (!o) {
                                o = {};
                                while (t = st.exec(r)) {
                                    o[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = o[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return x === 2 ? r : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        if (!x) {
                            e = v[n] = v[n] || e;
                            y[e] = t
                        }
                        return this
                    },
                    overrideMimeType: function (e) {
                        if (!x) {
                            l.mimeType = e
                        }
                        return this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e) {
                            if (x < 2) {
                                for (t in e) {
                                    m[t] = [m[t], e[t]]
                                }
                            } else {
                                b.always(e[b.status])
                            }
                        }
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        if (n) {
                            n.abort(t)
                        }
                        T(0, t);
                        return this
                    }
                };
                h.promise(b).complete = g.add;
                b.success = b.done;
                b.error = b.fail;
                l.url = ((e || l.url || ht) + "").replace(rt, "").replace(ft, gt[1] + "//");
                l.type = t.method || t.type || l.method || l.type;
                l.dataTypes = d.trim(l.dataType || "*").toLowerCase().match(A) || [""];
                if (l.crossDomain == null) {
                    a = lt.exec(l.url.toLowerCase());
                    l.crossDomain = !!(a && (a[1] !== gt[1] || a[2] !== gt[2] || (a[3] || (a[1] === "http:" ? "80" : "443")) !== (gt[3] || (gt[1] === "http:" ? "80" : "443"))))
                }
                if (l.data && l.processData && typeof l.data !== "string") {
                    l.data = d.param(l.data, l.traditional)
                }
                yt(ct, l, t, b);
                if (x === 2) {
                    return b
                }
                u = d.event && l.global;
                if (u && d.active++ === 0) {
                    d.event.trigger("ajaxStart")
                }
                l.type = l.type.toUpperCase();
                l.hasContent = !ut.test(l.type);
                i = l.url;
                if (!l.hasContent) {
                    if (l.data) {
                        i = l.url += (it.test(i) ? "&" : "?") + l.data;
                        delete l.data
                    }
                    if (l.cache === false) {
                        l.url = ot.test(i) ? i.replace(ot, "$1_=" + nt++) : i + (it.test(i) ? "&" : "?") + "_=" + nt++
                    }
                }
                if (l.ifModified) {
                    if (d.lastModified[i]) {
                        b.setRequestHeader("If-Modified-Since", d.lastModified[i])
                    }
                    if (d.etag[i]) {
                        b.setRequestHeader("If-None-Match", d.etag[i])
                    }
                }
                if (l.data && l.hasContent && l.contentType !== false || t.contentType) {
                    b.setRequestHeader("Content-Type", l.contentType)
                }
                b.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + dt + "; q=0.01" : "") : l.accepts["*"]);
                for (f in l.headers) {
                    b.setRequestHeader(f, l.headers[f])
                }
                if (l.beforeSend && (l.beforeSend.call(c, b, l) === false || x === 2)) {
                    return b.abort()
                }
                w = "abort";
                for (f in{success: 1, error: 1, complete: 1}) {
                    b[f](l[f])
                }
                n = yt(pt, l, t, b);
                if (!n) {
                    T(-1, "No Transport")
                } else {
                    b.readyState = 1;
                    if (u) {
                        p.trigger("ajaxSend", [b, l])
                    }
                    if (l.async && l.timeout > 0) {
                        s = setTimeout(function () {
                            b.abort("timeout")
                        }, l.timeout)
                    }
                    try {
                        x = 1;
                        n.send(y, T)
                    } catch (e) {
                        if (x < 2) {
                            T(-1, e)
                        } else {
                            throw e
                        }
                    }
                }
                function T(e, t, o, a) {
                    var f, y, v, w, T, C = t;
                    if (x === 2) {
                        return
                    }
                    x = 2;
                    if (s) {
                        clearTimeout(s)
                    }
                    n = undefined;
                    r = a || "";
                    b.readyState = e > 0 ? 4 : 0;
                    f = e >= 200 && e < 300 || e === 304;
                    if (o) {
                        w = xt(l, b, o)
                    }
                    w = wt(l, w, b, f);
                    if (f) {
                        if (l.ifModified) {
                            T = b.getResponseHeader("Last-Modified");
                            if (T) {
                                d.lastModified[i] = T
                            }
                            T = b.getResponseHeader("etag");
                            if (T) {
                                d.etag[i] = T
                            }
                        }
                        if (e === 204 || l.type === "HEAD") {
                            C = "nocontent"
                        } else if (e === 304) {
                            C = "notmodified"
                        } else {
                            C = w.state;
                            y = w.data;
                            v = w.error;
                            f = !v
                        }
                    } else {
                        v = C;
                        if (e || !C) {
                            C = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    b.status = e;
                    b.statusText = (t || C) + "";
                    if (f) {
                        h.resolveWith(c, [y, C, b])
                    } else {
                        h.rejectWith(c, [b, C, v])
                    }
                    b.statusCode(m);
                    m = undefined;
                    if (u) {
                        p.trigger(f ? "ajaxSuccess" : "ajaxError", [b, l, f ? y : v])
                    }
                    g.fireWith(c, [b, C]);
                    if (u) {
                        p.trigger("ajaxComplete", [b, l]);
                        if (!--d.active) {
                            d.event.trigger("ajaxStop")
                        }
                    }
                }

                return b
            },
            getJSON: function (e, t, n) {
                return d.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return d.get(e, undefined, t, "script")
            }
        });
        d.each(["get", "post"], function (e, t) {
            d[t] = function (e, n, i, r) {
                if (d.isFunction(n)) {
                    r = r || i;
                    i = n;
                    n = undefined
                }
                return d.ajax({url: e, type: t, dataType: r, data: n, success: i})
            }
        });
        d._evalUrl = function (e) {
            return d.ajax({url: e, type: "GET", dataType: "script", async: false, global: false, throws: true})
        };
        d.fn.extend({
            wrapAll: function (e) {
                var t;
                if (d.isFunction(e)) {
                    return this.each(function (t) {
                        d(this).wrapAll(e.call(this, t))
                    })
                }
                if (this[0]) {
                    t = d(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0])
                    }
                    t.map(function () {
                        var e = this;
                        while (e.firstElementChild) {
                            e = e.firstElementChild
                        }
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                if (d.isFunction(e)) {
                    return this.each(function (t) {
                        d(this).wrapInner(e.call(this, t))
                    })
                }
                return this.each(function () {
                    var t = d(this), n = t.contents();
                    if (n.length) {
                        n.wrapAll(e)
                    } else {
                        t.append(e)
                    }
                })
            }, wrap: function (e) {
                var t = d.isFunction(e);
                return this.each(function (n) {
                    d(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    if (!d.nodeName(this, "body")) {
                        d(this).replaceWith(this.childNodes)
                    }
                }).end()
            }
        });
        d.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        };
        d.expr.filters.visible = function (e) {
            return !d.expr.filters.hidden(e)
        };
        var bt = /%20/g, Tt = /\[\]$/, Ct = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;

        function Et(e, t, n, i) {
            var r;
            if (d.isArray(t)) {
                d.each(t, function (t, r) {
                    if (n || Tt.test(e)) {
                        i(e, r)
                    } else {
                        Et(e + "[" + (typeof r === "object" ? t : "") + "]", r, n, i)
                    }
                })
            } else if (!n && d.type(t) === "object") {
                for (r in t) {
                    Et(e + "[" + r + "]", t[r], n, i)
                }
            } else {
                i(e, t)
            }
        }

        d.param = function (e, t) {
            var n, i = [], r = function (e, t) {
                t = d.isFunction(t) ? t() : t == null ? "" : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (t === undefined) {
                t = d.ajaxSettings && d.ajaxSettings.traditional
            }
            if (d.isArray(e) || e.jquery && !d.isPlainObject(e)) {
                d.each(e, function () {
                    r(this.name, this.value)
                })
            } else {
                for (n in e) {
                    Et(n, e[n], t, r)
                }
            }
            return i.join("&").replace(bt, "+")
        };
        d.fn.extend({
            serialize: function () {
                return d.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = d.prop(this, "elements");
                    return e ? d.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !d(this).is(":disabled") && Nt.test(this.nodeName) && !kt.test(e) && (this.checked || !X.test(e))
                }).map(function (e, t) {
                    var n = d(this).val();
                    return n == null ? null : d.isArray(n) ? d.map(n, function (e) {
                        return {name: t.name, value: e.replace(Ct, "\r\n")}
                    }) : {name: t.name, value: n.replace(Ct, "\r\n")}
                }).get()
            }
        });
        d.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (e) {
            }
        };
        var St = 0, jt = {}, Dt = {0: 200, 1223: 204}, At = d.ajaxSettings.xhr();
        if (e.attachEvent) {
            e.attachEvent("onunload", function () {
                for (var e in jt) {
                    jt[e]()
                }
            })
        }
        l.cors = !!At && "withCredentials" in At;
        l.ajax = At = !!At;
        d.ajaxTransport(function (e) {
            var t;
            if (l.cors || At && !e.crossDomain) {
                return {
                    send: function (n, i) {
                        var r, o = e.xhr(), s = ++St;
                        o.open(e.type, e.url, e.async, e.username, e.password);
                        if (e.xhrFields) {
                            for (r in e.xhrFields) {
                                o[r] = e.xhrFields[r]
                            }
                        }
                        if (e.mimeType && o.overrideMimeType) {
                            o.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !n["X-Requested-With"]) {
                            n["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (r in n) {
                            o.setRequestHeader(r, n[r])
                        }
                        t = function (e) {
                            return function () {
                                if (t) {
                                    delete jt[s];
                                    t = o.onload = o.onerror = null;
                                    if (e === "abort") {
                                        o.abort()
                                    } else if (e === "error") {
                                        i(o.status, o.statusText)
                                    } else {
                                        i(Dt[o.status] || o.status, o.statusText, typeof o.responseText === "string" ? {text: o.responseText} : undefined, o.getAllResponseHeaders())
                                    }
                                }
                            }
                        };
                        o.onload = t();
                        o.onerror = t("error");
                        t = jt[s] = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) {
                                throw e
                            }
                        }
                    }, abort: function () {
                        if (t) {
                            t()
                        }
                    }
                }
            }
        });
        d.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    d.globalEval(e);
                    return e
                }
            }
        });
        d.ajaxPrefilter("script", function (e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        d.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, r) {
                        t = d("<script>").prop({
                            async: true,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove();
                            n = null;
                            if (e) {
                                r(e.type === "error" ? 404 : 200, e.type)
                            }
                        });
                        c.head.appendChild(t[0])
                    }, abort: function () {
                        if (n) {
                            n()
                        }
                    }
                }
            }
        });
        var qt = [], Lt = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = qt.pop() || d.expando + "_" + nt++;
                this[e] = true;
                return e
            }
        });
        d.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r, o, s, a = t.jsonp !== false && (Lt.test(t.url) ? "url" : typeof t.data === "string" && !(t.contentType || "").indexOf("application/x-Www-form-urlencoded") && Lt.test(t.data) && "data");
            if (a || t.dataTypes[0] === "jsonp") {
                r = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
                if (a) {
                    t[a] = t[a].replace(Lt, "$1" + r)
                } else if (t.jsonp !== false) {
                    t.url += (it.test(t.url) ? "&" : "?") + t.jsonp + "=" + r
                }
                t.converters["script json"] = function () {
                    if (!s) {
                        d.error(r + " was not called")
                    }
                    return s[0]
                };
                t.dataTypes[0] = "json";
                o = e[r];
                e[r] = function () {
                    s = arguments
                };
                i.always(function () {
                    e[r] = o;
                    if (t[r]) {
                        t.jsonpCallback = n.jsonpCallback;
                        qt.push(r)
                    }
                    if (s && d.isFunction(o)) {
                        o(s[0])
                    }
                    s = o = undefined
                });
                return "script"
            }
        });
        d.parseHTML = function (e, t, n) {
            if (!e || typeof e !== "string") {
                return null
            }
            if (typeof t === "boolean") {
                n = t;
                t = false
            }
            t = t || c;
            var i = b.exec(e), r = !n && [];
            if (i) {
                return [t.createElement(i[1])]
            }
            i = d.buildFragment([e], t, r);
            if (r && r.length) {
                d(r).remove()
            }
            return d.merge([], i.childNodes)
        };
        var Ht = d.fn.load;
        d.fn.load = function (e, t, n) {
            if (typeof e !== "string" && Ht) {
                return Ht.apply(this, arguments)
            }
            var i, r, o, s = this, a = e.indexOf(" ");
            if (a >= 0) {
                i = d.trim(e.slice(a));
                e = e.slice(0, a)
            }
            if (d.isFunction(t)) {
                n = t;
                t = undefined
            } else if (t && typeof t === "object") {
                r = "POST"
            }
            if (s.length > 0) {
                d.ajax({url: e, type: r, dataType: "html", data: t}).done(function (e) {
                    o = arguments;
                    s.html(i ? d("<div>").append(d.parseHTML(e)).find(i) : e)
                }).complete(n && function (e, t) {
                        s.each(n, o || [e.responseText, t, e])
                    })
            }
            return this
        };
        d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            d.fn[t] = function (e) {
                return this.on(t, e)
            }
        });
        d.expr.filters.animated = function (e) {
            return d.grep(d.timers, function (t) {
                return e === t.elem
            }).length
        };
        var Ot = e.document.documentElement;

        function Ft(e) {
            return d.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }

        d.offset = {
            setOffset: function (e, t, n) {
                var i, r, o, s, a, u, f, l = d.css(e, "position"), c = d(e), p = {};
                if (l === "static") {
                    e.style.position = "relative"
                }
                a = c.offset();
                o = d.css(e, "top");
                u = d.css(e, "left");
                f = (l === "absolute" || l === "fixed") && (o + u).indexOf("auto") > -1;
                if (f) {
                    i = c.position();
                    s = i.top;
                    r = i.left
                } else {
                    s = parseFloat(o) || 0;
                    r = parseFloat(u) || 0
                }
                if (d.isFunction(t)) {
                    t = t.call(e, n, a)
                }
                if (t.top != null) {
                    p.top = t.top - a.top + s
                }
                if (t.left != null) {
                    p.left = t.left - a.left + r
                }
                if ("using" in t) {
                    t.using.call(e, p)
                } else {
                    c.css(p)
                }
            }
        };
        d.fn.extend({
            offset: function (e) {
                if (arguments.length) {
                    return e === undefined ? this : this.each(function (t) {
                        d.offset.setOffset(this, e, t)
                    })
                }
                var t, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
                if (!o) {
                    return
                }
                t = o.documentElement;
                if (!d.contains(t, i)) {
                    return r
                }
                if (typeof i.getBoundingClientRect !== U) {
                    r = i.getBoundingClientRect()
                }
                n = Ft(o);
                return {top: r.top + n.pageYOffset - t.clientTop, left: r.left + n.pageXOffset - t.clientLeft}
            }, position: function () {
                if (!this[0]) {
                    return
                }
                var e, t, n = this[0], i = {top: 0, left: 0};
                if (d.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!d.nodeName(e[0], "html")) {
                        i = e.offset()
                    }
                    i.top += d.css(e[0], "borderTopWidth", true);
                    i.left += d.css(e[0], "borderLeftWidth", true)
                }
                return {
                    top: t.top - i.top - d.css(n, "marginTop", true),
                    left: t.left - i.left - d.css(n, "marginLeft", true)
                }
            }, offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent || Ot;
                    while (e && (!d.nodeName(e, "html") && d.css(e, "position") === "static")) {
                        e = e.offsetParent
                    }
                    return e || Ot
                })
            }
        });
        d.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
            var i = "pageYOffset" === n;
            d.fn[t] = function (r) {
                return F(this, function (t, r, o) {
                    var s = Ft(t);
                    if (o === undefined) {
                        return s ? s[n] : t[r]
                    }
                    if (s) {
                        s.scrollTo(!i ? o : e.pageXOffset, i ? o : e.pageYOffset)
                    } else {
                        t[r] = o
                    }
                }, t, r, arguments.length, null)
            }
        });
        d.each(["top", "left"], function (e, t) {
            d.cssHooks[t] = ke(l.pixelPosition, function (e, n) {
                if (n) {
                    n = Ce(e, t);
                    return be.test(n) ? d(e).position()[t] + "px" : n
                }
            })
        });
        d.each({Height: "height", Width: "width"}, function (e, t) {
            d.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                d.fn[i] = function (i, r) {
                    var o = arguments.length && (n || typeof i !== "boolean"), s = n || (i === true || r === true ? "margin" : "border");
                    return F(this, function (t, n, i) {
                        var r;
                        if (d.isWindow(t)) {
                            return t.document.documentElement["client" + e]
                        }
                        if (t.nodeType === 9) {
                            r = t.documentElement;
                            return Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])
                        }
                        return i === undefined ? d.css(t, n, s) : d.style(t, n, i, s)
                    }, t, o ? i : undefined, o, null)
                }
            })
        });
        d.fn.size = function () {
            return this.length
        };
        d.fn.andSelf = d.fn.addBack;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function () {
                return d
            })
        }
        var Pt = e.jQuery, Rt = e.$;
        d.noConflict = function (t) {
            if (e.$ === d) {
                e.$ = Rt
            }
            if (t && e.jQuery === d) {
                e.jQuery = Pt
            }
            return d
        };
        if (typeof t === U) {
            e.jQuery = e.$ = d
        }
        return d
    });
    return $.noConflict(true)
});