! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("G2", [], e) : "object" == typeof exports ? exports.G2 = e() : t.G2 = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }(function(t) {
        for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) switch (typeof t[e]) {
                case "function":
                    break;
                case "object":
                    t[e] = function(e) {
                        var n = e.slice(1),
                            i = t[e[0]];
                        return function(t, e, r) {
                            i.apply(this, [t, e, r].concat(n))
                        }
                    }(t[e]);
                    break;
                default:
                    t[e] = t[t[e]]
            }
            return t
    }([function(t, e, n) {
            "use strict";
            var i = {};
            i.Chart = n(314), i.Util = n(1), i.Global = n(4), i.Stat = n(19), i.Stat.map = n(263), i.Stat.tree = n(139), i.Stat.treemap = n(145), n(192), i.Scale = n(92), i.Shape = n(110), i.Frame = n(2), i.Theme = n(46), i.Canvas = n(12), i.Coord = n(95), i.Base = n(18), i.ColorCalculate = n(85), i.Layout = n(204), i.Animate = n(105), i.Plugin = {};
            var r = n(65);
            r.tracking = !0, i.track = function(t) {
                r.tracking = t
            }, n(340), t.exports = i
        }, function(t, e, n) {
            var i = n(209);
            t.exports = i
        }, function(t, e, n) {
            var i = n(24);
            n(76), n(183), n(182), t.exports = i
        }, function(t, e, n) {
            var i = {
                Matrix3: n(111),
                Vector2: n(112),
                Vector3: n(113)
            };
            t.exports = i
        }, function(t, e, n) {
            "use strict";

            function i(t) {
                t = t || 0, t = 100 * t;
                var e = 2;
                return t > 0 && t < .01 && (e = (1 / t + "").indexOf(".") + 1), t.toFixed(e) + "%"
            }

            function r(t) {
                for (var e in c) c.hasOwnProperty(e) && delete c[e];
                var n;
                n = s.isObject(t) ? t : s.indexOf(u, t) !== -1 ? o[t] : o["default"], s.mix(!0, c, a, n), c.setTheme = r
            }
            var a, s = n(1),
                o = n(339),
                u = ["default", "dark", "cheery"],
                c = {};
            a = {
                animate: !0,
                percentFormat: i,
                widthRatio: {
                    column: .5,
                    rose: .9999999,
                    multiplePie: 1 / 1.3
                },
                scales: {
                    "..x": {
                        type: "linear",
                        min: 0,
                        max: 1,
                        nice: !1
                    },
                    "..y": {
                        type: "linear",
                        min: 0,
                        max: 1,
                        nice: !1
                    },
                    "..level": {
                        type: "linear",
                        min: 0,
                        nice: !1
                    },
                    "..value": {
                        type: "linear",
                        min: 0
                    },
                    "..count": {
                        type: "linear",
                        min: 0,
                        alias: "count"
                    },
                    "..percent": {
                        type: "linear",
                        min: 0,
                        max: 1,
                        alias: "percent",
                        formatter: i
                    },
                    "..proportion": {
                        type: "linear",
                        min: 0,
                        max: 1,
                        alias: "proportion",
                        formatter: i
                    },
                    "..density": {
                        type: "linear",
                        min: 0,
                        alias: "density"
                    },
                    "..long": {
                        type: "linear",
                        alias: "longitude",
                        nice: !1
                    },
                    "..lant": {
                        type: "linear",
                        alias: "latitude",
                        nice: !1
                    },
                    "..pieX": {
                        type: "cat",
                        values: ["..pieX"],
                        ticks: ["..pieX"]
                    }
                },
                connectNulls: !1,
                heatmapColors: "rgb(125,125,248)-rgb(0,0,255)-rgb(0,255,0)-yellow-rgb(255,0,0)",
                heatmap: {
                    radius: 50
                }
            }, r("default"), t.exports = c
        }, function(t, e, n) {
            "use strict";
            var i = n(1);
            t.exports = i
        }, function(t, e, n) {
            var i = n(203);
            t.exports = i
        }, function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(70),
                a = n(3),
                s = n(8),
                o = a.Vector3,
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            u.ATTRS = {
                fillOpacity: 1,
                strokeOpacity: 1
            }, i.extend(u, r), i.augment(u, {
                isShape: !0,
                createPath: function() {},
                drawInner: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.attr("lineWidth");
                    t.createPath(), t.hasFill() && e.fill(), t.hasStroke() && n > 0 && e.stroke()
                },
                isPointInPath: function() {
                    return !1
                },
                isHit: function(t, e) {
                    var n = this,
                        i = n.get("canvas"),
                        r = new o(t, e, 1);
                    n.invert(r, i);
                    var a = n.getBBox();
                    if (a && s.box(a.minX, a.maxX, a.minY, a.maxY, r.x, r.y)) {
                        var u = n.__attrs.clip;
                        if (!u) return n.isPointInPath(r.x, r.y);
                        if (u.inside(t, e)) return n.isPointInPath(r.x, r.y)
                    }
                    return !1
                },
                getBBox: function() {
                    return this.get("box")
                }
            }), t.exports = u
        }, function(t, e, n) {
            "use strict";
            var i = n(49),
                r = n(50),
                a = n(38),
                s = n(48);
            t.exports = {
                line: function(t, e, n, r, a, s, o) {
                    var u = i.box(t, e, n, r, a);
                    if (!this.box(u.minX, u.maxX, u.minY, u.maxY, s, o)) return !1;
                    var c = i.pointDistance(t, e, n, r, s, o);
                    return !isNaN(c) && c <= a / 2
                },
                polyline: function(t, e, n, i) {
                    var r = this,
                        a = t.length - 1;
                    if (a < 1) return !1;
                    for (var s = 0; s < a; s++) {
                        var o = t[s][0],
                            u = t[s][1],
                            c = t[s + 1][0],
                            l = t[s + 1][1];
                        if (r.line(o, u, c, l, e, n, i)) return !0
                    }
                    return !1
                },
                cubicline: function(t, e, n, i, r, s, o, u, c, l, h) {
                    return a.pointDistance(t, e, n, i, r, s, o, u, l, h) <= c / 2
                },
                quadraticline: function(t, e, n, i, a, s, o, u, c) {
                    return r.pointDistance(t, e, n, i, a, s, u, c) <= o / 2
                },
                arcline: function(t, e, n, i, r, a, o, u, c) {
                    return s.pointDistance(t, e, n, i, r, a, u, c) <= o / 2
                },
                rect: function(t, e, n, i, r, a) {
                    return t <= r && r <= t + n && e <= a && a <= e + i
                },
                circle: function(t, e, n, i, r) {
                    return Math.pow(i - t, 2) + Math.pow(r - e, 2) <= Math.pow(n, 2)
                },
                box: function(t, e, n, i, r, a) {
                    return t <= r && r <= e && n <= a && a <= i
                }
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(32),
                r = n(1),
                a = n(2),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            r.extend(s, i), r.augment(s, {
                type: "summary",
                getStatDims: function() {
                    var t = this,
                        e = t.getDims(),
                        n = e.length,
                        i = [e[n - 1]];
                    return i
                },
                getGroupCondition: function() {
                    var t, e = this,
                        n = e.getDims(),
                        i = n.length,
                        a = [];
                    return i > 1 && (a = n.slice(0, i - 1), t = []), r.each(a, function(e) {
                        0 !== e.indexOf("..") && t.push(e)
                    }), t
                },
                groupFrames: function(t) {
                    var e, n = this,
                        i = n.getGroupCondition();
                    return e = i ? a.group(t, i) : [t]
                },
                transformGroup: function(t, e) {
                    var n = this,
                        i = [];
                    return r.each(t, function(t) {
                        i.push(n.transform(t, e))
                    }), i
                },
                execFrame: function(t) {
                    var e = this,
                        n = e.getStatDims()[0],
                        i = e.groupFrames(t),
                        r = e.transformGroup(i, n),
                        s = a.merge.apply(null, r);
                    return s
                },
                transform: function(t) {
                    return t
                }
            }), t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(299),
                a = {
                    radius: "r",
                    "font-size": "fontSize",
                    "stroke-width": "lineWidth",
                    "text-anchor": "textAlign",
                    "font-weight": "fontWeight",
                    "fill-opacity": "fillOpacity",
                    "stroke-opacity": "strokeOpacity",
                    "stroke-dasharray": "lineDash",
                    horizontalAlign: "textAlign",
                    verticalAlign: "textBaseline"
                };
            i.mix(i, {
                isPositiveNum: function(t) {
                    var e = /^[0-9]*[1-9][0-9]*$/;
                    return e.test(t)
                },
                adapAttrs: function(t) {
                    i.each(t, function(e, n) {
                        var r = i.adapAttr(n, e);
                        t[r.name] = r.value
                    })
                },
                adapAttr: function(t, e) {
                    var n = a[t],
                        i = {
                            name: t,
                            value: e
                        };
                    return n && ("font-size" === t ? e = parseInt(e, 10) : "text-anchor" === t && (e = "start" === e ? "left" : "middle" === e ? "center" : "right"), i.name = n, i.value = e), i
                },
                merge: function(t, e) {
                    if (e) {
                        if (!i.isObject(e)) return e;
                        var n = {};
                        return i.mix(n, t, e), n
                    }
                    return t
                },
                getRatio: function() {
                    return window.devicePixelRatio ? window.devicePixelRatio : 2
                },
                mixXY: function(t, e) {
                    var n = {
                        x: e.get("x"),
                        y: e.get("y")
                    };
                    t.x ? t.x += n.x : t.x = n.x, t.y ? t.y += n.y : t.y = n.y
                },
                getWidth: function(t) {
                    var e = i.getStyle(t, "width");
                    return "auto" === e && (e = t.offsetWidth), parseFloat(e)
                },
                getHeight: function(t) {
                    var e = i.getStyle(t, "height");
                    return "auto" === e && (e = t.offsetHeight), parseFloat(e)
                },
                getOuterHeight: function(t) {
                    var e = i.getHeight(t),
                        n = parseFloat(i.getStyle(t, "borderTopWidth")) || 0,
                        r = parseFloat(i.getStyle(t, "paddingTop")),
                        a = parseFloat(i.getStyle(t, "paddingBottom")),
                        s = parseFloat(i.getStyle(t, "borderBottomWidth")) || 0;
                    return e + n + s + r + a
                },
                parsePathArray: function(t) {
                    return i.path2string(t)
                },
                path2Absolute: function(t) {
                    return i.pathToAbsolute(t)
                },
                parsePathString: function(t) {
                    return i.parsePathString(t)
                },
                addEventListener: function(t, e, n) {
                    return t.addEventListener ? (t.addEventListener(e, n, !1), {
                        remove: function() {
                            t.removeEventListener(e, n, !1)
                        }
                    }) : t.attachEvent ? (t.attachEvent("on" + e, n), {
                        remove: function() {
                            t.detachEvent("on" + e, n)
                        }
                    }) : void 0
                }
            }), i.MatrixUtil = r, t.exports = i
        }, function(t, e, n) {
            t.exports = {
                GMixin: n(296),
                GroupBase: n(103),
                GroupMixin: n(297),
                Marker: n(298)
            }
        }, function(t, e, n) {
            var i = n(280),
                r = n(11),
                a = n(29);
            i.G = a.G, i.Components = n(286), i.Group = r.GroupBase, i.Shape = {}, i.Shape.Marker = r.Marker, i.Util = n(10), i.Matrix = n(3), t.exports = i
        }, function(t, e) {
            "use strict";
            var n = {
                prefix: "g",
                backupContext: document.createElement("canvas").getContext("2d"),
                debug: !1,
                warn: function() {}
            };
            t.exports = n
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = ["min", "max"],
                a = function(t) {
                    i.mix(this, t)
                };
            i.augment(a, {
                xScale: null,
                yScale: null,
                cfg: {},
                parsePoint: function(t, e) {
                    var n = this,
                        a = n.xScale,
                        s = n.yScale;
                    i.isFunction(e) && (e = e(a, s));
                    var o = e[0],
                        u = e[1];
                    return a && (o = i.indexOf(r, o) !== -1 ? a.scale(a[o]) : a.scale(o)), s && (u = i.indexOf(r, u) !== -1 ? s.scale(s[u]) : s.scale(u)), t.convert({
                        x: o,
                        y: u
                    })
                },
                paint: function() {}
            }), t.exports = a
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(54),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                regressionType: "base",
                isRegression: !0,
                getRegressionString: function() {
                    return ""
                },
                execSmooth: function(t) {
                    return t
                }
            }), t.exports = a
        }, function(t, e, n) {
            "use strict";
            var i = n(60),
                r = n(20),
                a = n(1);
            a.mix(i.GeomShape, {
                getMarkerCfg: function(t, e) {
                    var n = this.getShape(t);
                    return n.getMarkerCfg(e)
                },
                drawShape: function(t, e, n) {
                    var i = this.getShape(t),
                        r = i.drawShape(e, n);
                    return r && (r.set("origin", e.origin), r.animateType = r.animateType ? r.animateType : e.geomType, r.id = e.id, e.splitedIndex && (r.id += "splI" + e.splitedIndex)), r
                },
                getActiveCfg: function(t, e) {
                    var n = this.getShape(t);
                    return n.getActiveCfg(e)
                },
                getSelectedCfg: function(t, e) {
                    var n = this.getShape(t);
                    return n.getSelectedCfg(e)
                }
            }), a.mix(i.ShapeBase, {
                getActiveCfg: function() {
                    return {}
                },
                getSelectedCfg: function() {
                    return {}
                },
                setCoord: function(t) {
                    this._coord = t
                },
                parsePath: function(t, e) {
                    var n = this._coord;
                    return t = a.parsePathString(t), t = n.isPolar && e !== !1 ? r.convertPolarPath(t, n) : r.convertNormalPath(t, n)
                },
                parsePoint: function(t) {
                    var e = this._coord;
                    return e.convertPoint(t)
                },
                parsePoints: function(t) {
                    if (!t) return !1;
                    var e = this._coord,
                        n = [];
                    return a.each(t, function(t) {
                        n.push(e.convertPoint(t))
                    }), n
                }
            }), t.exports = i
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(18),
                a = n(75),
                s = n(60),
                o = n(119),
                u = "_origin",
                c = function(t) {
                    c.superclass.constructor.call(this, t)
                };
            c.ATTRS = {
                id: "",
                type: null,
                container: null,
                attrs: null,
                shapeObj: null,
                createTime: null,
                styleCfg: {},
                shapeDatas: []
            }, i.extend(c, r), i.mixin(c, [o]), i.augment(c, {
                _mapping: function(t) {
                    var e = this,
                        n = t.toJSON(),
                        r = e.get("attrs"),
                        s = [];
                    return i.each(n, function(t) {
                        var n = {};
                        n[u] = t[u], n.points = t.points, n.nextPoints = t.nextPoints, i.each(r, function(r) {
                            var a = r.names,
                                s = e._getAttrValues(r, t);
                            i.each(s, function(t, e) {
                                var r = a[e];
                                n[r] = i.isArray(t) && 1 === t.length ? t[0] : t
                            })
                        }), s.push(n)
                    }), new a(s)
                },
                _processShapePoints: function(t) {
                    var e, n, r = this,
                        o = r.get("shapeType") || r.get("type"),
                        u = s.getShape(o),
                        c = [];
                    return u._coord = r.getCoord(), i.each(t, function(t) {
                        var e = [];
                        t.each(function(t) {
                            var n = r.getAttrValue("shape", t),
                                i = r.getShapePointInfo(t),
                                a = u.getShapePoints(n, i);
                            t.points = a, e.push(t)
                        }), e = new a(e), c.push(e)
                    }), i.each(c, function(t, i) {
                        e = c[i + 1], n = e ? e.colArray("points")[0] : null, t.addCol("nextPoints", function() {
                            return n
                        })
                    }), r.set("shapeObj", u), c
                },
                _getAttrValues: function(t, e) {
                    var n = t.scales,
                        r = [];
                    i.each(n, function(t) {
                        var n = t.dim;
                        "identity" === t.type ? r.push(t.value) : r.push(e[n])
                    });
                    var a = t.mappingValues.apply(t, r);
                    return a
                },
                draw: function(t) {
                    var e = this,
                        n = [];
                    return t = e.sortFrames(t), t = e.processFrames(t), t = e._processShapePoints(t), i.each(t, function(t, i) {
                        t = e.beforeMapping(t), t = e._mapping(t), t.rowCount() && e.drawFrame(t, i), n.push(t)
                    }), n
                },
                sortFrames: function(t) {
                    var e = this.getXScale();
                    return i.indexOf(["time", "timeCat"], e.type) > -1 ? this.sort(t) : t
                },
                processFrames: function(t) {
                    return t
                },
                beforeMapping: function(t) {
                    return t
                },
                isInCircle: function() {
                    return this.getCoord().isPolar
                },
                getShapePointInfo: function(t) {
                    var e, n, i = this.getXScale(),
                        r = this.getYScale();
                    return e = i ? this._normalizeValues(t[i.dim], i) : t.x ? t.x : .1, n = r ? this._normalizeValues(t[r.dim], r) : t.y ? t.y : .1, {
                        x: e,
                        y: n,
                        y0: r ? r.scale(this.getYMinValue()) : void 0,
                        size: this.getSize(t)
                    }
                },
                _normalizeValues: function(t, e) {
                    var n = [];
                    return i.isArray(t) ? i.each(t, function(t) {
                        n.push(e.scale(t))
                    }) : n = e.scale(t), n
                },
                getDefalutSize: function() {
                    return .1
                },
                _getSize: function(t) {
                    var e, n = this.getCoord();
                    return e = this.isInCircle() && !n.isTransposed ? (n.get("endAngle") - n.get("startAngle")) * n.get("radius") : this.getDimWidth("x"), t / e
                },
                getDimWidth: function(t) {
                    var e = this,
                        n = e.getCoord(),
                        i = n.convertPoint({
                            x: 0,
                            y: 0
                        }),
                        r = n.convertPoint({
                            x: "x" === t ? 1 : 0,
                            y: "x" === t ? 0 : 1
                        }),
                        a = 0;
                    return i && r && (a = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2))), a
                },
                getSize: function(t) {
                    var e = this.getAttrValue("size", t);
                    return e = i.isNull(e) ? this.getDefalutSize() : this._getSize(e)
                },
                drawFrame: function(t) {
                    var e, n, r, a = this,
                        s = t.toJSON(),
                        o = a.get("container"),
                        u = a.get("shapeObj");
                    i.each(s, function(t, i) {
                        a.get("shapeDatas").push(t), t.index = i, e = a.getDrawCfg(t), n = a.getDrawShape(t.shape), r = u.drawShape(n, e, o), a.afterDraw(r, t)
                    })
                },
                afterDraw: function() {},
                getDrawShape: function(t) {
                    return i.isArray(t) ? t[0] : t
                },
                getDrawCfg: function(t) {
                    var e = this.get("styleCfg"),
                        n = this.isInCircle(),
                        i = t._origin,
                        r = {
                            points: t.points,
                            nextPoints: t.nextPoints,
                            color: t.color,
                            isInCircle: n,
                            style: e,
                            size: t.size,
                            shape: t.shape,
                            opacity: t.opacity,
                            x: t.x,
                            y: t.y,
                            origin: t,
                            id: this._getId(i),
                            geomType: this.get("type")
                        };
                    return n && (r.center = this.getCoord().get("center")), r
                },
                _getId: function(t) {
                    var e = this.get("idDims"),
                        n = this.get("id"),
                        i = n;
                    if (e && e.length > 0) e.forEach(function(e) {
                        i += " " + t[e]
                    });
                    else {
                        var r = this.get("groupScales");
                        r && r.length > 0 && r.forEach(function(e) {
                            var n = e.dim;
                            "identity" !== e.type && ".." !== n.slice(0, 2) && (i += " " + t[n])
                        });
                        var a = this.getAttr("position"),
                            s = a.getDims(),
                            o = s[0],
                            u = s[1],
                            c = this.get("type");
                        i += "interval" === c || "intervalStack" === c || "schemal" === c ? " " + t[o] : "line" === c || "area" === c ? " " + c : " " + t[o] + " " + t[u] + " " + c
                    }
                    return i
                },
                getYMinValue: function() {
                    var t, e = this.getYScale(),
                        n = e.min;
                    return t = n >= 0 ? n : 0
                },
                getAttrValue: function(t, e) {
                    var n = this.getAttr(t),
                        i = null;
                    return n && (i = this._getAttrValues(n, e)[0]), i
                },
                getAttr: function(t) {
                    var e = this.get("attrs"),
                        n = null;
                    return i.each(e, function(e) {
                        e.type === t && (n = e)
                    }), n
                },
                getCoord: function() {
                    return this.getAttr("position").coord
                },
                getXDim: function() {
                    var t = this.getXScale();
                    return t.dim
                },
                getYDim: function() {
                    var t = this.getYScale();
                    return t.dim
                },
                getXScale: function() {
                    return this.getAttr("position").scales[0]
                },
                getYScale: function() {
                    return this.getAttr("position").scales[1]
                }
            }), t.exports = c
        }, function(t, e, n) {
            var i = n(184);
            t.exports = i
        }, function(t, e, n) {
            var i = n(32);
            i.summary = n(251), i.bin = n(227), i.smooth = n(241), i.density = n(231), i.region = n(234);
            var r = n(2);
            r.execStat = function(t, e) {
                e.init();
                var n = e.exec([t]);
                return r.merge.apply(null, n)
            }, t.exports = i
        }, function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                if (!t.length) return "";
                var i = "",
                    r = "";
                t.length <= 2 && (n = !1);
                for (var a = 0, s = t.length; a < s; a++) {
                    var o = t[a];
                    r = 0 === a ? n ? "M{x} {y} R" : "M{x} {y}" : n ? " {x} {y}" : "L{x} {y}", i += u.substitute(r, o)
                }
                return e && (i += "Z"), i
            }

            function r(t, e) {
                var n = t.getCenter(),
                    i = Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
                return i
            }

            function a(t, e) {
                for (var n = t.length, i = [t[0]], r = 1; r < n; r += 2) {
                    var a = e.convertPoint({
                        x: t[r],
                        y: t[r + 1]
                    });
                    i.push(a.x, a.y)
                }
                return i
            }

            function s(t, e, n) {
                var i = n.getRadius(),
                    a = n.get("inner") || 0,
                    s = a * i,
                    o = n.isTransposed,
                    u = n.get("startAngle"),
                    c = n.get("endAngle"),
                    l = {
                        x: t[1],
                        y: t[2]
                    },
                    h = {
                        x: e[1],
                        y: e[2]
                    },
                    f = [];
                s = s || 0;
                var g = o ? "y" : "x",
                    d = Math.abs(h[g] - l[g]) * (c - u),
                    p = h[g] >= l[g] ? 1 : 0,
                    v = d > Math.PI ? 1 : 0,
                    m = n.convertPoint(h),
                    x = r(n, m);
                if (x >= .5)
                    if (d === 2 * Math.PI) {
                        var y = {
                                x: (h.x + l.x) / 2,
                                y: (h.y + l.y) / 2
                            },
                            _ = n.convertPoint(y);
                        f.push(["A", x, x, 0, v, p, _.x, _.y]), f.push(["A", x, x, 0, v, p, m.x, m.y])
                    } else f.push(["A", x, x, 0, v, p, m.x, m.y]);
                return f
            }

            function o(t) {
                u.each(t, function(e, n) {
                    var i = e;
                    if ("a" === i[0].toLowerCase()) {
                        var r = t[n - 1],
                            a = t[n + 1];
                        a && "a" === a[0].toLowerCase() ? r && "l" === r[0].toLowerCase() && (r[0] = "M") : r && "a" === r[0].toLowerCase() && a && "l" === a[0].toLowerCase() && (a[0] = "M")
                    }
                })
            }
            var u = n(1),
                c = n(114),
                l = {
                    getLinePath: function(t, e, n) {
                        return i(t, e, n)
                    },
                    getSplinePath: function(t, e) {
                        var n = [],
                            i = t[0],
                            r = null;
                        u.each(t, function(t) {
                            r && r.x === t.x && r.y === t.y || (n.push(t.x), n.push(t.y), r = t)
                        });
                        var a = [
                                [0, 0],
                                [1, 1]
                            ],
                            s = c.catmullRom2bezier(n, e, a);
                        return "M" + i.x + " " + i.y + u.parsePathArray(s)
                    },
                    getPointRadius: function(t, e) {
                        var n = r(t, e);
                        return n
                    },
                    getPointAngle: function(t, e) {
                        var n = t.getCenter(),
                            i = Math.atan2(e.y - n.y, e.x - n.x);
                        return i
                    },
                    convertNormalPath: function(t, e) {
                        var n = [];
                        return u.each(t, function(t) {
                            var i = t[0];
                            switch (i.toLowerCase()) {
                                case "m":
                                case "l":
                                case "c":
                                    n.push(a(t, e));
                                    break;
                                case "z":
                                default:
                                    n.push(t)
                            }
                        }), n
                    },
                    convertPolarPath: function(t, e) {
                        var n = [];
                        return u.each(t, function(i, r) {
                            var o = i[0];
                            switch (o.toLowerCase()) {
                                case "m":
                                case "c":
                                case "q":
                                    n.push(a(i, e));
                                    break;
                                case "l":
                                    var u = t[r - 1],
                                        c = i,
                                        l = e.isTransposed,
                                        h = l ? u[u.length - 2] === c[1] : u[u.length - 1] === c[2];
                                    h ? n = n.concat(s(u, c, e)) : n.push(a(i, e));
                                    break;
                                case "z":
                                default:
                                    n.push(i)
                            }
                        }), o(n), n
                    }
                };
            t.exports = l
        }, function(t, e, n) {
            var i = {};
            i.Base = n(17), i.Interval = n(117), i.Point = n(120), i.Line = n(118), i.Polygon = n(121), i.Schema = n(122), i.Path = n(63), i.Area = n(116), t.exports = i
        }, function(t, e, n) {
            var i = n(13),
                r = {
                    Canvas: n(154),
                    Group: n(71),
                    Shape: n(7),
                    Rect: n(169),
                    Circle: n(158),
                    Ellipse: n(160),
                    Path: n(165),
                    Text: n(170),
                    Line: n(163),
                    Image: n(162),
                    Polygon: n(166),
                    Polyline: n(167),
                    Arc: n(157),
                    Fan: n(161),
                    Cubic: n(159),
                    Quadratic: n(168),
                    debug: function(t) {
                        i.debug = t
                    }
                };
            t.exports = r
        }, function(t, e, n) {
            function i(t, e, n) {
                var i = new u(1, 0).angleTo(t),
                    r = i - c,
                    a = i + c,
                    s = 6 + 3 * n;
                return [{
                    x: e.x - s * Math.cos(r),
                    y: e.y - s * Math.sin(r)
                }, e, {
                    x: e.x - s * Math.cos(a),
                    y: e.y - s * Math.sin(a)
                }]
            }

            function r(t, e) {
                t.moveTo(e[0].x, e[0].y), t.lineTo(e[1].x, e[1].y), t.lineTo(e[2].x, e[2].y)
            }

            function a(t, e, n, a) {
                r(t, i(e, n, a))
            }

            function s(t, e, n) {
                var i = n / Math.sin(c);
                return t.setLength(i / 2), e.sub(t), e
            }
            var o = n(3),
                u = o.Vector2,
                c = Math.PI / 6;
            t.exports = {
                makeArrow: a,
                getEndPoint: s
            }
        }, function(t, e, n) {
            var i = n(1),
                r = function(t, e) {
                    this.data = t, i.mix(this, e), this.initFrame()
                };
            r.prototype = {
                isFrame: !0,
                initFrame: function() {
                    var t = this,
                        e = t.data,
                        n = t.colNames(),
                        r = t.arr;
                    if (i.isArray(e[0]) && (r = t.arr = e), !r) {
                        r = [];
                        for (var a = 0; a < n.length; a++) {
                            for (var s = [], o = n[a], u = 0; u < e.length; u++) s.push(e[u][o]);
                            r.push(s)
                        }
                        t.arr = r
                    }
                },
                contains: function(t) {
                    var e = this.colNames();
                    return i.indexOf(e, t) !== -1
                },
                colNames: function() {
                    var t = this,
                        e = t.names;
                    if (!e) {
                        var n = this.data,
                            r = n[0];
                        e = [], r && i.each(r, function(t, n) {
                            e.push(n)
                        }), t.names = e
                    }
                    return e
                },
                rowCount: function() {
                    var t = this,
                        e = t.arr;
                    return e && e.length ? e[0].length : 0
                },
                colCount: function() {
                    var t = this,
                        e = t.colNames();
                    return e ? e.length : 0
                },
                colIndex: function(t) {
                    return i.indexOf(this.names, t)
                },
                colArray: function(t) {
                    var e = t;
                    return i.isString(t) && (e = this.colIndex(t)), this.arr[e]
                },
                colReplace: function(t, e) {
                    var n = this.arr,
                        r = this.colNames();
                    if (i.isString(t)) {
                        var a = t;
                        t = i.indexOf(r, a)
                    }
                    return n[t] = e, this
                },
                each: function(t) {
                    for (var e = this, n = e.rowCount(), i = 0; i < n; i++) {
                        var r = e._getObject(i);
                        t(r, i)
                    }
                    return e
                },
                rowObject: function(t) {
                    return this._getObject(t)
                },
                _getObject: function(t, e) {
                    var n = this,
                        i = n.arr,
                        r = {};
                    e = e || n.colNames();
                    for (var a = 0; a < e.length; a++) r[e[a]] = i[a][t];
                    return r
                },
                addCol: function(t, e) {
                    var n = this;
                    if (i.isFunction(e)) {
                        var r = e;
                        e = [], n.each(function(t, n) {
                            var i = r(t, n);
                            e.push(i)
                        })
                    }
                    n.names.push(t), n.arr.push(e)
                },
                toArray: function() {
                    return this.arr
                },
                toJSON: function() {
                    for (var t = this, e = t.rowCount(), n = [], i = 0; i < e; i++) n.push(t._getObject(i));
                    return n
                }
            }, t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(240),
                a = {
                    getRegressionString: function() {
                        return this.regressionStr
                    },
                    getRegression: function() {
                        return {
                            equation: [],
                            string: ""
                        }
                    },
                    execSmooth: function(t, e) {
                        var n = this,
                            a = n.getRegression(t),
                            s = a.equation;
                        this.regressionStr = a.string;
                        var o = [];
                        return i.each(e, function(t) {
                            var e = t,
                                i = r.execFnction(n.regressionType, s, e);
                            o.push([e, i])
                        }), o
                    }
                };
            t.exports = a
        }, function(t, e, n) {
            t.exports = n(262)
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t) {
                    i.mix(this, t)
                };
            r.prototype = {
                type: "base",
                names: null,
                scales: [],
                min: 0,
                max: 10,
                method: function(t) {
                    return t * (this.max - this.min) + this.min
                },
                callback: function() {
                    var t, e, n, r = this,
                        a = r.arr,
                        s = r.scales,
                        o = i.toArray(arguments),
                        u = [];
                    return i.each(s, function(s, c) {
                        t = o[c], n = s.scale(t), e = s.translate(t), "identity" === s.type ? u.push(s.value) : i.isArray(a) ? u.push(r._getArrValue(a, s, n, e)) : r.method ? u.push(r.method(n)) : u.push(null)
                    }), u
                },
                getNames: function() {
                    var t = this.scales,
                        e = this.names,
                        n = [];
                    return i.each(t, function(t, i) {
                        n.push(e[i])
                    }), n
                },
                getDims: function() {
                    var t = this.scales,
                        e = [];
                    return i.each(t, function(t) {
                        e.push(t.dim)
                    }), e
                },
                getScale: function(t) {
                    var e = this.scales,
                        n = this.names,
                        i = n.indexOf(t);
                    return e[i]
                },
                mappingValues: function() {
                    var t = this.scales,
                        e = i.toArray(arguments),
                        n = this.callback,
                        r = e;
                    if (n) {
                        for (var a = 0; a < e.length; a++) e[a] = this.parseParam(e[a], t[a]);
                        r = n.apply(this, e)
                    }
                    return this.names && 1 === this.names.length && (r = [r]), r
                },
                parseParam: function(t, e) {
                    var n = t;
                    return e.isLinear || (n = e.scale(t), n = e.invert(n)), n
                },
                _getArrValue: function(t, e, n, i) {
                    var r = 0;
                    return e.isCategory ? r = i : e.isLinear && (r = parseInt(n * (t.length - 1), 10)), t[r % t.length]
                }
            }, t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t) {
                    i.mix(this, t)
                };
            i.augment(r, {
                xValue: null,
                yValue: null,
                region: null,
                frame: null
            }), t.exports = r
        }, function(t, e, n) {
            var i = n(188),
                r = n(82);
            i.G = n(22), i.Util = n(30), i.Group = r.GroupBase, t.exports = i
        }, function(t, e, n) {
            "use strict";
            var i = n(22),
                r = n(1),
                a = i.Shape.superclass.constructor,
                s = document.createElement("table"),
                o = document.createElement("tr"),
                u = /^\s*<(\w+|!)[^>]*>/,
                c = {
                    tr: document.createElement("tbody"),
                    tbody: s,
                    thead: s,
                    tfoot: s,
                    td: o,
                    th: o,
                    "*": document.createElement("div")
                };
            r.mix(r, {
                getBoundingClientRect: function(t) {
                    var e = t.getBoundingClientRect(),
                        n = document.documentElement.clientTop,
                        i = document.documentElement.clientLeft;
                    return {
                        top: e.top - n,
                        bottom: e.bottom - n,
                        left: e.left - i,
                        right: e.right - i
                    }
                },
                upperFirst: function(t) {
                    return t.replace(/(\w)/, function(t) {
                        return t.toUpperCase()
                    })
                },
                getStyle: function(t, e) {
                    return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
                },
                modiCSS: function(t, e) {
                    var n;
                    for (n in e) t.style[n] = e[n];
                    return t
                },
                getRatio: function() {
                    return window.devicePixelRatio ? window.devicePixelRatio : 1
                },
                initClassCfgs: function(t) {
                    if (!t.__cfg && t !== a) {
                        var e = t.superclass.constructor;
                        e && !e.__cfg && r.initClassCfgs(e), t.__cfg = {}, r.mix(!0, t.__cfg, e.__cfg), r.mix(!0, t.__cfg, t.CFG)
                    }
                },
                mixin: function(t, e) {
                    var n = t.CFG ? "CFG" : "ATTRS";
                    if (t && e) {
                        t._mixins = e, t[n] = t[n] || {};
                        var i = {};
                        r.each(e, function(e) {
                            r.augment(t, e);
                            var a = e[n];
                            a && r.mix(i, a)
                        }), t[n] = r.mix(i, t[n])
                    }
                },
                createDom: function(t) {
                    var e = u.test(t) && RegExp.$1;
                    e in c || (e = "*");
                    var n = c[e];
                    return t = t.replace(/(^\s*)|(\s*$)/g, ""), n.innerHTML = "" + t, n.childNodes[0]
                }
            }), t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = 0,
                s = function(t) {
                    i.mix(this, t)
                };
            i.augment(s, {
                xDim: null,
                yDim: null,
                adjustNames: ["x", "y"],
                groupDims: null,
                isAdjust: function(t) {
                    return i.inArray(this.adjustNames, t)
                },
                processAdjust: function(t) {
                    var e = this,
                        n = r.merge.apply(null, t);
                    return e.adjFrames = t, e.mergeFrame = n, t = e.adjustFrames(t, n), e.adjFrames = null, e.mergeFrame = null, t
                },
                _getDimValues: function(t) {
                    var e = this,
                        n = {},
                        s = [];
                    if (e.xDim && e.isAdjust("x") && s.push(e.xDim), e.yDim && e.isAdjust("y") && s.push(e.yDim), i.each(s, function(e) {
                            var i = r.values(t, e);
                            i.sort(function(t, e) {
                                return t - e
                            }), n[e] = i
                        }), !e.yDim && e.isAdjust("y")) {
                        var o = "y",
                            u = [a, 1];
                        n[o] = u
                    }
                    return n
                },
                adjustFrames: function(t, e) {
                    var n = this,
                        a = [],
                        s = n._getDimValues(e);
                    return i.each(t, function(e, o) {
                        var u = e.toJSON();
                        i.each(s, function(e, i) {
                            n.adjustDim(i, e, u, t.length, o)
                        }), a.push(new r(u))
                    }), a
                },
                adjustDim: function(t, e, n) {
                    return new r(n)
                },
                getAdjustRange: function(t, e, n) {
                    var r, a, s = this,
                        o = i.indexOf(n, e),
                        u = n.length;
                    return !s.yDim && s.isAdjust("y") ? (r = 0, a = 1) : u > 1 ? (r = 0 === o ? n[0] : n[o - 1], a = o === u - 1 ? n[u - 1] : n[o + 1], 0 !== o ? r += (e - r) / 2 : r -= (a - e) / 2, o !== u - 1 ? a -= (a - e) / 2 : a += (e - n[u - 2]) / 2) : (r = 0 === e ? 0 : e - .5, a = 0 === e ? 1 : e + .5), {
                        pre: r,
                        next: a
                    }
                },
                groupData: function(t, e) {
                    var n = {};
                    return i.each(t, function(t) {
                        var i = t[e];
                        void 0 === i && (i = t[e] = a), n[i] || (n[i] = []), n[i].push(t)
                    }), n
                }
            }), t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t) {
                    i.mix(this, t)
                };
            i.augment(r, {
                isStat: !0,
                initDims: function() {},
                getDims: function() {
                    return this.dims
                },
                getStatDims: function() {
                    return this.getDims()
                },
                init: function() {
                    var t = this,
                        e = t.dims;
                    if (i.isString(e) && (e = e.split("*"), t.dims = e), e && e.isStat) {
                        var n = e;
                        n.init(), t.stat = n, e = n.dims, t.dims = e
                    }
                    e || (e = [], t.dims = e), t.initDims(e)
                },
                preExecute: function() {},
                exec: function(t) {
                    var e = this;
                    e.preExecute(t);
                    var n = [];
                    return this.stat && (t = this.stat.exec(t)), i.each(t, function(r) {
                        var a = e.execFrame(r, t);
                        i.isArray(a) ? n = n.concat(a) : n.push(a)
                    }), n
                },
                execFrame: function(t) {
                    return t
                }
            }), t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(19),
                r = n(1),
                a = n(2),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            r.extend(s, i), r.augment(s, {
                type: "map",
                mapData: {},
                initDims: function(t) {
                    var e = t[0],
                        n = t.slice(1);
                    t = n.concat([e]), t.unshift("..lant"), t.unshift("..long"), this.dims = t
                },
                getStatDims: function() {
                    var t = this.getDims(),
                        e = t.filter(function(t) {
                            return t.indexOf("..") > -1
                        });
                    return e
                },
                execFrame: function(t) {
                    var e = this,
                        n = e.getStatDims(),
                        i = [];
                    return t = t.toJSON(), r.each(t, function(t) {
                        i.push(e.addGeoInfo(t, n))
                    }), new a(i)
                },
                addGeoInfo: function(t) {
                    return t
                }
            }), t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(3),
                a = r.Matrix3,
                s = r.Vector3,
                o = function(t) {
                    this._attrs = {}, this._attrs.matrix = new a, i.mix(this._attrs, o.ATTRS, t), this.init()
                };
            i.augment(o, {
                isTransposed: !1,
                set: function(t, e) {
                    return this._attrs[t] = e, this
                },
                get: function(t) {
                    return this._attrs[t]
                },
                getDim: function(t) {
                    switch (t) {
                        case "x":
                            return this.get("x");
                        case "y":
                            return this.get("y");
                        case "z":
                            return this.get("z");
                        default:
                            console.error("\u6ca1\u6709" + t + "\u4ee3\u8868\u7684\u7ef4\u5ea6!")
                    }
                },
                init: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        i = {
                            x: (e.x + n.x) / 2,
                            y: (e.y + n.y) / 2
                        };
                    t.set("center", i), t.set("width", Math.abs(n.x - e.x)), t.set("height", Math.abs(n.y - e.y))
                },
                getWidth: function() {
                    return this.get("width")
                },
                getHeight: function() {
                    return this.get("height")
                },
                convertDim: function(t, e) {
                    var n = this;
                    return e = n.get(e), e.start + t * (e.end - e.start)
                },
                invertDim: function(t, e) {
                    var n = this;
                    return e = n.get(e), (t - e.start) / (e.end - e.start)
                },
                rotate: function(t) {
                    var e = this,
                        n = e.get("matrix"),
                        i = e.get("center");
                    return n.translate(-i.x, -i.y), n.rotate(t), n.translate(i.x, i.y), this
                },
                reflect: function(t) {
                    var e = this;
                    switch (t) {
                        case "x":
                            e._swapDim("x");
                            break;
                        case "y":
                            e._swapDim("y");
                            break;
                        default:
                            e._swapDim("y")
                    }
                    return this
                },
                _swapDim: function(t) {
                    var e = this,
                        n = e.get(t);
                    if (n) {
                        var i = n.start;
                        n.start = n.end, n.end = i
                    }
                },
                scale: function(t, e) {
                    var n = this,
                        i = n.get("matrix"),
                        r = n.get("center");
                    return i.translate(-r.x, -r.y), i.scale(t, e), i.translate(r.x, r.y), this
                },
                translate: function(t, e) {
                    var n = this,
                        i = n.get("matrix");
                    return i.translate(t, e), this
                },
                transpose: function() {
                    this.isTransposed = !this.isTransposed
                },
                convertPoint: function(t) {
                    return t
                },
                invertPoint: function(t) {
                    return t
                },
                convert: function(t) {
                    var e = this;
                    t = this.convertPoint(t);
                    var n = e.trans(t.x, t.y, 1);
                    return {
                        x: n.x,
                        y: n.y
                    }
                },
                invert: function(t) {
                    var e = this,
                        n = e.reverse(t.x, t.y, 1);
                    return this.invertPoint({
                        x: n.x,
                        y: n.y
                    })
                },
                trans: function(t, e, n) {
                    n = n || 0;
                    var i = this,
                        r = i.get("matrix"),
                        a = new s(t, e, n);
                    return a.applyMatrix(r), a
                },
                reverse: function(t, e, n) {
                    n = n || 0;
                    var i = this,
                        r = i.get("matrix"),
                        a = r.getInverse(),
                        o = new s(t, e, n);
                    return o.applyMatrix(a), o
                }
            }), t.exports = o
        }, function(t, e, n) {
            var i = n(123);
            t.exports = i
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (a.isNumeric(t) && a.isNumeric(e)) return s.number(t, e);
                if (a.isString(t) && a.isString(e)) {
                    var n = new u(t),
                        i = new u(e);
                    if (n.getType() && i.getType()) return o.color(n, i)
                }
            }

            function r(t, e) {
                if (a.isNumeric(t) && a.isNumeric(e)) return s.unNumber(t, e);
                if (a.isString(t) && a.isString(e)) {
                    var n = new u(t),
                        i = new u(e);
                    if (n.getType() && i.getType()) return o.unColor(n, i)
                }
            }
            var a = n(1),
                s = n(129),
                o = n(126),
                u = n(37);
            t.exports = {
                singular: i,
                unSingular: r
            }
        }, function(t, e, n) {
            t.exports = n(133)
        }, function(t, e, n) {
            "use strict";

            function i(t, e, n, i, r) {
                var a = 1 - r;
                return a * a * (a * i + 3 * r * n) + r * r * (r * t + 3 * a * e)
            }

            function r(t, e, n, i, r) {
                var a = 1 - r;
                return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
            }

            function a(t, e, n, r, a, s, o, u, c, h, f) {
                var g, d, p, v, m, x, y, _, S = .005,
                    w = 1 / 0,
                    b = 1e-4,
                    M = new l(c, h);
                for (d = 0; d < 1; d += .05) p = new l(i(t, n, a, o, d), i(e, r, s, u, d)), v = p.distanceToSquared(M), v < w && (g = d, w = v);
                w = 1 / 0;
                for (var A = 0; A < 32 && !(S < b); A++) y = g - S, _ = g + S, p = new l(i(t, n, a, o, y), i(e, r, s, u, y)), v = p.distanceToSquared(M), y >= 0 && v < w ? (g = y, w = v) : (x = new l(i(t, n, a, o, _), i(e, r, s, u, _)), m = x.distanceToSquared(M), _ <= 1 && m < w ? (g = _, w = m) : S *= .5);
                return f && (f.x = i(t, n, a, o, g), f.y = i(e, r, s, u, g)), Math.sqrt(w)
            }

            function s(t, e, n, i) {
                var r, a, s, o = 3 * t - 9 * e + 9 * n - 3 * i,
                    u = 6 * e - 12 * n + 6 * i,
                    c = 3 * n - 3 * i,
                    l = [];
                if (h.equal(o, 0)) h.equal(u, 0) || (r = -c / u, r >= 0 && r <= 1 && l.push(r));
                else {
                    var f = u * u - 4 * o * c;
                    h.equal(f, 0) ? l.push(-u / (2 * o)) : f > 0 && (s = Math.sqrt(f), r = (-u + s) / (2 * o), a = (-u - s) / (2 * o), r >= 0 && r <= 1 && l.push(r), a >= 0 && a <= 1 && l.push(a))
                }
                return l
            }

            function o(t, e, n, i, r) {
                var a = -3 * e + 9 * n - 9 * i + 3 * r,
                    s = t * a + 6 * e - 12 * n + 6 * i;
                return t * s - 3 * e + 3 * n
            }

            function u(t, e, n, i, r, a, s, u, c) {
                f.isNull(c) && (c = 1), c = c > 1 ? 1 : c < 0 ? 0 : c;
                for (var l = c / 2, h = 12, g = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, v = 0; v < h; v++) {
                    var m = l * g[v] + l,
                        x = o(m, t, n, r, s),
                        y = o(m, e, i, a, u),
                        _ = x * x + y * y;
                    p += d[v] * Math.sqrt(_)
                }
                return l * p
            }
            var c = n(3),
                l = c.Vector2,
                h = n(6),
                f = n(1);
            t.exports = {
                at: i,
                derivativeAt: r,
                projectPoint: function(t, e, n, i, r, s, o, u, c, l) {
                    var h = {};
                    return a(t, e, n, i, r, s, o, u, c, l, h), h
                },
                pointDistance: a,
                extrema: s,
                len: u
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = function(t) {
                    i.mix(this, t)
                };
            i.augment(a, {
                dims: [],
                margin: 0,
                defs: {},
                facetTitle: {
                    titleOffset: 25,
                    colDimTitle: {
                        title: {
                            "font-size": 16,
                            "text-anchor": "middle",
                            fill: "#444"
                        }
                    },
                    colTitle: {
                        title: {
                            "font-size": 14,
                            "text-anchor": "middle",
                            fill: "#444"
                        }
                    },
                    rowTitle: {
                        title: {
                            "font-size": 14,
                            "text-anchor": "middle",
                            rotate: 90,
                            fill: "#444"
                        }
                    },
                    rowDimTitle: {
                        title: {
                            "font-size": 16,
                            "text-anchor": "middle",
                            rotate: 90,
                            fill: "#444"
                        }
                    }
                },
                plotRange: null,
                getDimValues: function(t, e) {
                    var n = this,
                        i = n.defs[t],
                        a = [];
                    return a = i && i.values ? i.values : r.values(e, t)
                },
                getFilter: function(t) {
                    var e = this.defs,
                        n = function(n) {
                            var r = !0;
                            return i.each(t, function(t) {
                                var a = t.dim,
                                    s = t.value,
                                    o = t.values,
                                    u = !0;
                                !i.isNull(s) && a && (u = e[a] && e[a].group ? e[a].group(n) === i.indexOf(o, s) : n[a] === s || n[a] === i.indexOf(o, s)), r = r && u
                            }), r
                        };
                    return n
                },
                drawTitles: function(t, e) {
                    var n = this,
                        r = n.dims;
                    i.each(t, function(t) {
                        n.drawFacetTitle("col", t, e)
                    }), n.drawDimTitle("col", r[0], e)
                },
                generateFacets: function() {},
                drawFacetTitle: function(t, e, n) {
                    var r = this,
                        a = r.facetTitle,
                        s = a.titleOffset,
                        o = "row" === t ? a.rowTitle : a.colTitle,
                        u = e.region,
                        c = u.start,
                        l = u.end,
                        h = "row" === t ? "y" : "x",
                        f = "row" === t ? "x" : "y",
                        g = {};
                    g[h] = (l[h] - c[h]) / 2 + c[h], g[f] = l[f];
                    var d = "x" === h ? -1 : 1,
                        p = i.mix({
                            text: e[h + "Value"]
                        }, o.title);
                    p[h] = g[h], p[f] = g[f] + s * d, n.addShape("Text", {
                        attrs: p
                    })
                },
                drawDimTitle: function(t, e, n) {
                    if (!i.isNull(e)) {
                        var r = this,
                            a = r.plotRange,
                            s = r.defs,
                            o = "row" === t ? "y" : "x",
                            u = r.facetTitle,
                            c = u.titleOffset,
                            l = "x" === o ? u.colDimTitle : u.rowDimTitle,
                            h = s[e] && s[e].alias || e,
                            f = {};
                        f = "x" === o ? {
                            y: a.tl.y + (c + 40) * -1,
                            x: (a.tr.x - a.tl.x) / 2 + a.tl.x
                        } : {
                            x: a.tr.x + (c + 40),
                            y: (a.br.y - a.tr.y) / 2 + a.tr.y
                        }, h = i.mix({
                            text: h,
                            x: f.x,
                            y: f.y
                        }, l.title), n.addShape("Text", {
                            attrs: h
                        })
                    }
                }
            }), t.exports = a
        }, function(t, e, n) {
            var i = {
                caculate: n(214),
                Time: {
                    caculate: n(215)
                },
                Category: {
                    caculate: n(213)
                }
            };
            t.exports = i
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(32),
                a = n(2),
                s = function(t) {
                    s.superclass.constructor.call(this, t), this.colRange = {}, this.binWidth || (this.binWidth = .03)
                };
            i.extend(s, r), i.augment(s, {
                type: "bin",
                binWidth: .03,
                colRange: {},
                binDims: null,
                setRange: function(t, e) {
                    this.colRange[t] = e
                },
                getStatDims: function() {
                    return this.getDims()
                },
                getBinDims: function() {
                    var t = this.binDims || this.getDims(),
                        e = [];
                    return i.each(t, function(t) {
                        t.indexOf("..") === -1 && e.push(t)
                    }), e
                },
                getBinWidth: function() {
                    return this.binWidth || .03
                },
                getCenterValue: function(t, e, n) {
                    var i, r = this.getBinWidth(),
                        a = (t - n) / (e - n);
                    return 1 === a && (a -= r / 4), i = (e - n) * (Math.floor(a / r) * r + r / 2) + n
                },
                toBin: function(t) {
                    for (var e = this, n = e.getBinDims(), i = 0; i < n.length; i++) {
                        var r = n[i],
                            a = t[r],
                            s = e.getDimRange(r);
                        t[r] = e.getCenterValue(a, s.max, s.min)
                    }
                },
                getDimRange: function(t) {
                    var e = this,
                        n = e.cacheRange;
                    return n[t] || {
                        min: 0,
                        max: 0
                    }
                },
                preExecute: function(t) {
                    var e = this,
                        n = a.merge.apply(null, t),
                        r = e.getStatDims(),
                        s = e.colRange,
                        o = {};
                    i.each(r, function(t) {
                        if (s[t]) o[t] = s[t];
                        else {
                            var e = a.range(n, t);
                            o[t] = {
                                min: e[0],
                                max: e[1]
                            }
                        }
                    }), e.cacheRange = o
                },
                execFrame: function(t) {
                    var e = this,
                        n = t.toJSON();
                    return i.each(n, function(t) {
                        e.toBin(t)
                    }), new a(n)
                },
                getRegion: function() {
                    return [{
                        x: 0,
                        y: 0
                    }]
                }
            }), t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(43),
                r = n(1),
                a = n(40),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            r.extend(s, i), r.augment(s, {
                type: "linear",
                isLinear: !0,
                min: null,
                max: null,
                nice: !1,
                tickCount: null,
                tickInterval: null,
                init: function() {
                    var t = this;
                    if (t.ticks) {
                        var e = t.ticks,
                            n = t.translate(e[0]),
                            i = t.translate(e[e.length - 1]);
                        (r.isNull(t.min) || t.min > n) && (t.min = n), (r.isNull(t.max) || t.max < i) && (t.max = i)
                    } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks()
                },
                calculateTicks: function() {
                    var t = this,
                        e = t.min,
                        n = t.max,
                        i = t.tickCount,
                        r = t.tickInterval,
                        s = a.caculate({
                            min: e,
                            max: n,
                            minCount: i,
                            maxCount: i,
                            interval: r
                        });
                    return s.ticks
                },
                initTicks: function() {
                    var t = this,
                        e = t.calculateTicks();
                    if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];
                    else {
                        var n = [];
                        r.each(e, function(e) {
                            e >= t.min && e <= t.max && n.push(e)
                        }), t.ticks = n
                    }
                },
                scale: function(t) {
                    if (null === t || void 0 === t) return NaN;
                    var e = this.max,
                        n = this.min;
                    if (e === n) return 0;
                    var i = (t - n) / (e - n),
                        r = this.rangeMin(),
                        a = this.rangeMax();
                    return r + i * (a - r)
                },
                invert: function(t) {
                    var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                    return this.min + e * (this.max - this.min)
                }
            }), t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t) {
                    i.mix(this, t), this.init()
                };
            i.augment(r, {
                formatter: null,
                range: [0, 1],
                ticks: null,
                values: [],
                init: function() {},
                getTicks: function() {
                    var t = this,
                        e = t.ticks,
                        n = [];
                    return i.each(e, function(e) {
                        var r;
                        r = i.isObject(e) ? e : {
                            text: t.getText(e),
                            value: t.scale(e)
                        }, n.push(r)
                    }), n
                },
                getText: function(t) {
                    var e = this.formatter;
                    return t = e ? e(t) : t, !i.isNull(t) && t.toString || (t = ""),
                        t.toString()
                },
                rangeMin: function() {
                    return this.range[0]
                },
                rangeMax: function() {
                    var t = this.range;
                    return t[t.length - 1]
                },
                invert: function() {},
                translate: function(t) {
                    return t
                },
                scale: function() {},
                clone: function() {
                    var t = this,
                        e = t.constructor,
                        n = {};
                    return i.each(t, function(e, i) {
                        n[i] = t[i]
                    }), new e(n)
                },
                change: function(t) {
                    return this.ticks = null, i.mix(this, t), this.init(), this
                }
            }), t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(34),
                a = n(3),
                s = n(6),
                o = a.Vector2,
                u = a.Matrix3,
                c = a.Vector3,
                l = function(t) {
                    var e = {};
                    i.mix(e, l.ATTRS, t), l.superclass.constructor.call(this, e), this._init()
                };
            l.ATTRS = {
                startAngle: -Math.PI / 2,
                endAngle: 3 * Math.PI / 2,
                inner: .5
            }, i.extend(l, r), i.augment(l, {
                type: "plus",
                isPolar: !0,
                _init: function() {
                    var t, e, n = this,
                        i = n.get("radius"),
                        r = n.get("inner"),
                        a = n.get("startAngle"),
                        s = n.get("endAngle"),
                        o = n.get("center"),
                        u = n.getOneBox(),
                        c = u.maxX - u.minX,
                        l = u.maxY - u.minY,
                        h = Math.abs(u.minX) / c,
                        f = Math.abs(u.minY) / l,
                        g = n.getWidth(),
                        d = n.getHeight();
                    d / l > g / c ? (t = g / c, e = {
                        x: o.x - (.5 - h) * g,
                        y: o.y - (.5 - f) * t * l
                    }) : (t = d / l, e = {
                        x: o.x - (.5 - h) * t * c,
                        y: o.y - (.5 - f) * d
                    }), i = i ? i > 0 && i <= 1 ? t * i : i > 0 && i <= t ? i : t : t;
                    var p = {
                            start: a,
                            end: s
                        },
                        v = {
                            start: r * i,
                            end: i
                        };
                    n.set("x", p), n.set("y", v), n.set("radius", i), n.set("circleCentre", e), n.set("center", e)
                },
                getCenter: function() {
                    return this.get("circleCentre")
                },
                getOneBox: function() {
                    var t = this,
                        e = t.get("startAngle"),
                        n = t.get("endAngle");
                    if (n - e >= 2 * Math.PI) return {
                        minX: -1,
                        maxX: 1,
                        minY: -1,
                        maxY: 1
                    };
                    for (var i = [0, Math.cos(e), Math.cos(n)], r = [0, Math.sin(e), Math.sin(n)], a = 5 * -Math.PI / 2; a < 3 * Math.PI / 2; a += Math.PI / 2) e <= a && a <= n && (i.push(Math.cos(a)), r.push(Math.sin(a)));
                    return {
                        minX: Math.min.apply(Math, i),
                        maxX: Math.max.apply(Math, i),
                        minY: Math.min.apply(Math, r),
                        maxY: Math.max.apply(Math, r)
                    }
                },
                getRadius: function() {
                    return this.get("radius")
                },
                convertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        i = e.isTransposed ? t.y : t.x,
                        r = e.isTransposed ? t.x : t.y;
                    return i = e.convertDim(i, "x"), r = e.convertDim(r, "y"), {
                        x: n.x + Math.cos(i) * r,
                        y: n.y + Math.sin(i) * r
                    }
                },
                invertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        i = new o(t.x - n.x, t.y - n.y),
                        r = e.get("x"),
                        a = new u;
                    a.rotate(r.start);
                    var l = new c(1, 0, 0);
                    l.applyMatrix(a), l = new o(l.x, l.y);
                    var h = l.angleTo(i, r.end < r.start);
                    s.equal(h, 2 * Math.PI) && (h = 0);
                    var f = i.length(),
                        g = h / (r.end - r.start);
                    g = r.end - r.start > 0 ? g : -g;
                    var d = e.invertDim(f, "y"),
                        p = {};
                    return p.x = e.isTransposed ? d : g, p.y = e.isTransposed ? g : d, p
                }
            }), t.exports = l
        }, function(t, e, n) {
            var i = n(1),
                r = n(11),
                a = n(98),
                s = r.GroupBase,
                o = a.ShowLabels,
                u = "x-chart-axis",
                c = n(282),
                l = function(t) {
                    l.superclass.constructor.call(this, t)
                };
            l.CFG = {
                zIndex: 4,
                ticks: null,
                line: null,
                tickLine: null,
                subTick: null,
                grid: null,
                labels: {
                    label: {},
                    autoRotate: !0
                },
                title: {},
                _title: {
                    textBaseline: "middle"
                },
                autoPaint: !0,
                labelOffset: 10,
                titleOffset: 20,
                formatter: null,
                firstTick: !0
            }, i.mixin(l, [o]), i.extend(l, s), i.augment(l, {
                _initCfg: function() {
                    this.deepSet("title")
                },
                _beforeRenderUI: function() {
                    l.superclass._beforeRenderUI.call(this);
                    var t = this.get("labelOffset");
                    0 === t && this.set("labelOffset", .001)
                },
                _renderUI: function() {
                    l.superclass._renderUI.call(this);
                    var t = this.get("labels");
                    t && this.renderLabels(), this.get("autoPaint") && this.paint(), this.get("title") && this.renderTitle(), this.sort()
                },
                _parseTicks: function(t) {
                    t = t || [];
                    for (var e = t.length, n = 0; n < e; n++) {
                        var r = t[n];
                        i.isObject(r) || (t[n] = this.parseTick(r, n, e))
                    }
                    return this.set("ticks", t), t
                },
                _addTickItem: function(t, e, n) {
                    var i = this.get("tickItems"),
                        r = {
                            x1: e.x,
                            y1: e.y
                        },
                        a = this.getTickEnd(e, n, t);
                    r.x2 = a.x, r.y2 = a.y, i || (i = [], this.set("tickItems", i)), i.push(r)
                },
                _formatPoint: function(t) {
                    var e = this.get("formatter");
                    return e && (t = e.call(this, t)), t
                },
                _renderLines: function() {
                    var t, e = this.get("line"),
                        n = this.get("id");
                    if (e) {
                        t = this.getLinePath(), e = i.mix({
                            path: t
                        }, e);
                        var r = this.addShape("Path", {
                            elCls: u + "-line",
                            attrs: e
                        });
                        r.id = n + "axisLine", r.animateType = "axisLine", this.set("lineShape", r)
                    }
                },
                _processTicks: function() {
                    var t = this,
                        e = t.get("labels"),
                        n = t.get("subTick"),
                        r = t.get("tickLine"),
                        a = t.get("ticks");
                    a = t._parseTicks(a), i.each(a, function(n, i) {
                        var a = t.getTickPoint(n.value, i);
                        r && t._addTickItem(i, a), e && t.addLabel(t._formatPoint(n.text), a, i, n.value)
                    }), n && i.each(a, function(e, i) {
                        var s = i ? e.value - a[i - 1].value : e.value;
                        s /= t.get("subTick");
                        for (var o = 1; o < n; o++) {
                            var u = {
                                text: "",
                                value: i ? a[i - 1].value + o * s : o * s
                            };
                            if (r) {
                                var c = t.getTickPoint(u.value),
                                    l = parseInt(.6 * r.value, 10);
                                t._addTickItem(o - 1, c, l)
                            }
                        }
                    })
                },
                _renderTicks: function() {
                    var t = this,
                        e = t.get("tickItems"),
                        n = t.get("tickLine"),
                        r = t.get("id"),
                        a = "",
                        s = i.mix({}, n);
                    if (e) {
                        i.each(e, function(t) {
                            var e = i.substitute("M{x1} {y1}L{x2} {y2}", t);
                            a += e
                        }), delete s.value, s.path = a;
                        var o = t.addShape("Path", {
                            elCls: u + "-ticks",
                            attrs: s
                        });
                        o.id = r + "axisTick", o.animateType = "axisTick", t.set("tickShape", o)
                    }
                },
                _renderGrid: function() {
                    var t = this.get("grid");
                    if (t) {
                        i.isNull(t.animate) && (t.animate = this.get("animate"));
                        var e = this.addGroup(c, t);
                        this.set("gridGroup", e)
                    }
                },
                paint: function() {
                    this._renderLines(), this._processTicks(), this._renderTicks(), this._renderGrid();
                    var t = this.get("labels");
                    t && t.autoRotate && this.autoRotateLabels()
                },
                parseTick: function(t, e, n) {
                    return {
                        text: t,
                        value: e / (n - 1)
                    }
                },
                getTextAnchor: function(t) {
                    var e, n = Math.abs(t.y / t.x);
                    return e = n >= 1 ? "center" : t.x > 0 ? "left" : "right"
                },
                addLabel: function(t, e, n, i) {
                    var r, a = this.get("id") + "label" + i,
                        s = this.get("labelsGroup"),
                        o = {};
                    if (s) {
                        var u = this.get("labelOffset") || 10,
                            c = this.getSideVector(u, e, n);
                        e = {
                            x: e.x + c.x,
                            y: e.y + c.y
                        }, o.text = t, o.x = e.x, o.y = e.y, o.textAlign = this.getTextAnchor(c), o.id = a ? a : t, r = s.addLabel(o)
                    }
                    return r
                },
                getMaxLabelWidth: function(t) {
                    var e = t.get("children"),
                        n = 0;
                    return i.each(e, function(t) {
                        var e = t.getBBBox(),
                            i = e.width;
                        n < i && (n = i)
                    }), n
                },
                remove: function() {
                    l.superclass.remove.call(this);
                    var t = this.get("gridGroup");
                    t && t.remove(), this.removeLabels()
                },
                autoRotateLabels: function() {},
                renderTitle: function() {},
                getLinePath: function() {},
                getTickPoint: function() {},
                getTickEnd: function() {},
                getSideVector: function() {}
            }), t.exports = l
        }, function(t, e) {
            "use strict";
            var n = "#4E7CCC",
                i = '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimSun, "sans-serif"',
                r = {
                    defaultColor: n,
                    plotCfg: {
                        margin: [20, 80, 60, 80]
                    },
                    facetCfg: {
                        type: "rect",
                        margin: 10,
                        facetTitle: {
                            titleOffset: 16,
                            colDimTitle: {
                                title: {
                                    fontSize: 14,
                                    textAlign: "center",
                                    fill: "#999"
                                }
                            },
                            colTitle: {
                                title: {
                                    fontSize: 12,
                                    textAlign: "center",
                                    fill: "#999"
                                }
                            },
                            rowTitle: {
                                title: {
                                    fontSize: 12,
                                    textAlign: "center",
                                    rotate: 90,
                                    fill: "#999"
                                }
                            },
                            rowDimTitle: {
                                title: {
                                    fontSize: 12,
                                    textAlign: "center",
                                    rotate: 90,
                                    fill: "#999"
                                }
                            }
                        }
                    },
                    binWidth: .03,
                    fontFamily: i,
                    colors: {
                        "default": ["#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"],
                        intervalStack: ["#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"]
                    },
                    shapes: {
                        point: ["hollowCircle", "hollowSquare", "hollowDiamond", "hollowBowtie", "hollowTriangle", "hollowHexagon", "cross", "tick", "plus", "hyphen", "line"],
                        line: ["line", "dash", "dot"],
                        area: ["area"]
                    },
                    hues: ["red", "yellow", "green", "blue", "orange", "purple", "pink", "brown", "white", "gray", "black"],
                    axis: {
                        top: {
                            position: "top",
                            titleOffset: 30,
                            title: {
                                fontSize: 12,
                                fill: "#999"
                            },
                            labels: {
                                label: {
                                    fill: "#404040",
                                    fontSize: 12
                                }
                            },
                            tickLine: {
                                lineWidth: 1,
                                stroke: "#ccc",
                                value: 5
                            }
                        },
                        bottom: {
                            position: "bottom",
                            titleOffset: 45,
                            labelOffset: 20,
                            title: {
                                fontSize: 12,
                                textAlign: "center",
                                fill: "#999"
                            },
                            labels: {
                                label: {
                                    fill: "#404040",
                                    fontSize: 12
                                }
                            },
                            line: {
                                lineWidth: 1,
                                stroke: "#ccc"
                            },
                            tickLine: {
                                lineWidth: 1,
                                stroke: "#ccc",
                                value: 5
                            }
                        },
                        left: {
                            position: "left",
                            titleOffset: 60,
                            labelOffset: 13,
                            title: {
                                fontSize: 12,
                                fill: "#999"
                            },
                            labels: {
                                label: {
                                    fill: "#404040"
                                }
                            },
                            line: {
                                lineWidth: 1,
                                stroke: "#ccc"
                            },
                            tickLine: {
                                lineWidth: 1,
                                stroke: "#ccc",
                                value: 5
                            },
                            grid: {
                                line: {
                                    stroke: "#d9d9d9",
                                    lineWidth: 1,
                                    lineDash: [2, 2]
                                }
                            }
                        },
                        right: {
                            position: "right",
                            titleOffset: 60,
                            labelOffset: 13,
                            title: {
                                fontSize: 12,
                                fill: "#999"
                            },
                            labels: {
                                label: {
                                    fill: "#404040"
                                }
                            },
                            line: {
                                lineWidth: 1,
                                stroke: "#ccc"
                            },
                            tickLine: {
                                lineWidth: 1,
                                stroke: "#ccc",
                                value: 5
                            }
                        },
                        circle: {
                            labelOffset: 5,
                            line: {
                                lineWidth: 1,
                                stroke: "#ccc"
                            },
                            grid: {
                                line: {
                                    stroke: "#d9d9d9",
                                    lineWidth: 1,
                                    lineDash: [1, 3]
                                }
                            },
                            labels: {
                                label: {
                                    fill: "#404040"
                                }
                            }
                        },
                        gauge: {
                            grid: null,
                            labelOffset: 5,
                            tickLine: {
                                lineWidth: 1,
                                value: -20,
                                stroke: "#ccc"
                            },
                            subTick: 5,
                            labels: {
                                label: {
                                    fill: "#404040"
                                }
                            }
                        },
                        clock: {
                            grid: null,
                            labelOffset: 5,
                            tickLine: {
                                lineWidth: 1,
                                value: -20,
                                stroke: "#C0D0E0"
                            },
                            subTick: 5,
                            labels: {
                                label: {
                                    fill: "#404040"
                                }
                            }
                        },
                        radius: {
                            titleOffset: 45,
                            labels: {
                                label: {
                                    fill: "#404040"
                                }
                            },
                            line: {
                                lineWidth: 1,
                                stroke: "#ccc"
                            },
                            grid: {
                                line: {
                                    stroke: "#d9d9d9",
                                    lineWidth: 1,
                                    lineDash: [2, 2]
                                },
                                type: "circle"
                            }
                        },
                        helix: {
                            grid: null,
                            labels: {
                                label: null
                            },
                            line: {
                                lineWidth: 1,
                                stroke: "#ccc"
                            },
                            tickLine: {
                                lineWidth: 1,
                                value: 5,
                                stroke: "#ccc"
                            }
                        }
                    },
                    labels: {
                        offset: 14,
                        label: {
                            fill: "#666",
                            fontSize: 12
                        }
                    },
                    treemapLabels: {
                        offset: 10,
                        label: {
                            fill: "#fff",
                            fontSize: 14,
                            textBaseline: "top",
                            fontStyle: "bold"
                        }
                    },
                    innerLabels: {
                        label: {
                            fill: "#fff",
                            fontSize: 12
                        }
                    },
                    thetaLabels: {
                        labelLine: {
                            lineWidth: 1
                        },
                        labelHeight: 14,
                        offset: 30
                    },
                    legend: {
                        right: {
                            position: "right",
                            back: null,
                            spacingX: 10,
                            spacingY: 12,
                            markerAlign: "center",
                            wordSpaceing: 12,
                            width: 20,
                            height: 156
                        },
                        left: {
                            position: "left",
                            back: null,
                            spacingX: 10,
                            spacingY: 12,
                            markerAlign: "center",
                            wordSpaceing: 12,
                            width: 20,
                            height: 156
                        },
                        top: {
                            position: "top",
                            title: null,
                            back: null,
                            spacingX: 16,
                            spacingY: 10,
                            markerAlign: "center",
                            wordSpaceing: 12,
                            width: 156,
                            height: 20
                        },
                        bottom: {
                            position: "bottom",
                            title: null,
                            back: null,
                            spacingX: 16,
                            spacingY: 10,
                            markerAlign: "center",
                            wordSpaceing: 12,
                            width: 156,
                            height: 20
                        }
                    },
                    tooltip: {
                        crosshairs: !1,
                        offset: 15,
                        crossLine: {
                            stroke: "#666"
                        },
                        wordSpaceing: 6,
                        markerCfg: {
                            symbol: "circle",
                            radius: 3
                        }
                    },
                    activeShape: {
                        point: {
                            radius: 5,
                            fillOpacity: .7
                        },
                        hollowPoint: {
                            lineWidth: 2,
                            radius: 4
                        },
                        interval: {
                            fillOpacity: .7
                        },
                        hollowInterval: {
                            lineWidth: 2
                        },
                        area: {
                            fillOpacity: .85
                        },
                        hollowArea: {
                            lineWidth: 2
                        },
                        line: {
                            lineWidth: 2
                        },
                        polygon: {
                            fillOpacity: .75
                        }
                    },
                    shape: {
                        point: {
                            lineWidth: 1,
                            fill: n,
                            radius: 4
                        },
                        hollowPoint: {
                            fill: "#fff",
                            lineWidth: 1,
                            stroke: n,
                            radius: 3
                        },
                        interval: {
                            lineWidth: 0,
                            fill: n,
                            fillOpacity: .85
                        },
                        pie: {
                            lineWidth: 1,
                            stroke: "#fff"
                        },
                        hollowInterval: {
                            fill: "#fff",
                            stroke: n,
                            fillOpacity: 0,
                            lineWidth: 1
                        },
                        area: {
                            lineWidth: 0,
                            fill: n,
                            fillOpacity: .6
                        },
                        polygon: {
                            lineWidth: 0,
                            fill: n,
                            fillOpacity: 1
                        },
                        hollowPolygon: {
                            fill: "#fff",
                            stroke: n,
                            fillOpacity: 0,
                            lineWidth: 1
                        },
                        hollowArea: {
                            fill: "#fff",
                            stroke: n,
                            fillOpacity: 0,
                            lineWidth: 1
                        },
                        line: {
                            stroke: n,
                            lineWidth: 1,
                            fill: null
                        }
                    },
                    guide: {
                        text: {
                            fill: "#666",
                            fontSize: 12
                        },
                        line: {
                            stroke: n,
                            lineDash: [0, 2, 2]
                        },
                        rect: {
                            lineWidth: 0,
                            fill: n,
                            fillOpacity: .1
                        },
                        tag: {
                            line: {
                                stroke: n,
                                lineDash: [0, 2, 2]
                            },
                            text: {
                                fill: "#666",
                                fontSize: 12,
                                textAlign: "center"
                            },
                            rect: {
                                lineWidth: 0,
                                fill: n,
                                fillOpacity: .1
                            }
                        },
                        html: {
                            align: "cc"
                        }
                    },
                    tooltipMarker: {
                        fill: "#fff",
                        symbol: "circle",
                        lineWidth: 2,
                        stroke: n,
                        radius: 4
                    }
                };
            t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(79);
            i.mix(i, {
                parsePathString: r.toArray,
                path2string: r.toString,
                path2curve: r.toCurve,
                pathToAbsolute: r.toAbsolute,
                catmullRom2bezier: r.catmullRomToBezier
            }), t.exports = i
        }, function(t, e, n) {
            "use strict";

            function i(t, e, n, i) {
                return {
                    x: Math.cos(i) * n + t,
                    y: Math.sin(i) * n + e
                }
            }

            function r(t, e, n, i) {
                var r, a;
                return i ? t < e ? (r = e - t, a = 2 * Math.PI - n + t) : t > n && (r = 2 * Math.PI - t + e, a = t - n) : (r = t - e, a = n - t), r > a ? n : e
            }

            function a(t, e, n, i) {
                var a = 0;
                return n - e >= 2 * Math.PI && (a = 2 * Math.PI), e = l.mod(e, 2 * Math.PI), n = l.mod(n, 2 * Math.PI) + a, t = l.mod(t, 2 * Math.PI), i ? e >= n ? t > n && t < e ? t : r(t, n, e, !0) : t < e || t > n ? t : r(t, e, n) : e <= n ? e < t && t < n ? t : r(t, e, n, !0) : t > e || t < n ? t : r(t, n, e)
            }

            function s(t, e, n, i, r, s, o, u, l) {
                var h = new c(o, u),
                    f = new c(t, e),
                    g = new c(1, 0),
                    d = c.sub(h, f),
                    p = g.angleTo(d);
                p = a(p, i, r, s);
                var v = new c(n * Math.cos(p) + t, n * Math.sin(p) + e);
                l && (l.x = v.x, l.y = v.y);
                var m = h.distanceTo(v);
                return m
            }

            function o(t, e, n, r, s, o) {
                var u = 0,
                    c = Math.PI / 2,
                    l = Math.PI,
                    f = 3 * Math.PI / 2,
                    g = [],
                    d = a(u, r, s, o);
                d === u && g.push(i(t, e, n, u)), d = a(c, r, s, o), d === c && g.push(i(t, e, n, c)), d = a(l, r, s, o), d === l && g.push(i(t, e, n, l)), d = a(f, r, s, o), d === f && g.push(i(t, e, n, f)), g.push(i(t, e, n, r)), g.push(i(t, e, n, s));
                var p = 1 / 0,
                    v = -(1 / 0),
                    m = 1 / 0,
                    x = -(1 / 0);
                return h.each(g, function(t) {
                    p > t.x && (p = t.x), v < t.x && (v = t.x), m > t.y && (m = t.y), x < t.y && (x = t.y)
                }), {
                    minX: p,
                    minY: m,
                    maxX: v,
                    maxY: x
                }
            }
            var u = n(3),
                c = u.Vector2,
                l = n(6),
                h = n(1);
            t.exports = {
                nearAngle: a,
                projectPoint: function(t, e, n, i, r, a, o, u) {
                    var c = {};
                    return s(t, e, n, i, r, a, o, u, c), c
                },
                pointDistance: s,
                box: o
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(3),
                r = i.Vector2;
            t.exports = {
                at: function(t, e, n) {
                    return (e - t) * n + t
                },
                pointDistance: function(t, e, n, i, a, s) {
                    var o = new r(n - t, i - e);
                    if (o.isZero()) return NaN;
                    var u = o.vertical();
                    u.normalize();
                    var c = new r(a - t, s - e);
                    return Math.abs(c.dot(u))
                },
                box: function(t, e, n, i, r) {
                    var a = r / 2,
                        s = Math.min(t, n),
                        o = Math.max(t, n),
                        u = Math.min(e, i),
                        c = Math.max(e, i);
                    return {
                        minX: s - a,
                        minY: u - a,
                        maxX: o + a,
                        maxY: c + a
                    }
                },
                len: function(t, e, n, i) {
                    return Math.sqrt((n - t) * (n - t) + (i - e) * (i - e))
                }
            }
        }, function(t, e, n) {
            "use strict";

            function i(t, e, n, i) {
                var r = 1 - i;
                return r * (r * t + 2 * i * e) + i * i * n
            }

            function r(t, e, n, r, a, s, o, c, l) {
                var h, f, g, d, p, v, m, x = .005,
                    y = 1 / 0,
                    _ = 1e-4,
                    S = new u(o, c);
                for (p = 0; p < 1; p += .05) g = new u(i(t, n, a, p), i(e, r, s, p)), f = g.distanceToSquared(S), f < y && (h = p, y = f);
                for (y = 1 / 0, m = 0; m < 32 && !(x < _); m++) {
                    var w = h - x,
                        b = h + x;
                    g = new u(i(t, n, a, w), i(e, r, s, w)), f = g.distanceToSquared(S), w >= 0 && f < y ? (h = w, y = f) : (d = new u(i(t, n, a, b), i(e, r, s, b)), v = d.distanceToSquared(S), b <= 1 && v < y ? (h = b, y = v) : x *= .5)
                }
                return l && (l.x = i(t, n, a, h), l.y = i(e, r, s, h)), Math.sqrt(y)
            }

            function a(t, e, n) {
                var i = t + n - 2 * e;
                if (o.equal(i, 0)) return [.5];
                var r = (t - e) / i;
                return r <= 1 && r >= 0 ? [r] : []
            }
            var s = n(3),
                o = n(6),
                u = s.Vector2;
            t.exports = {
                at: i,
                projectPoint: function(t, e, n, i, a, s, o, u) {
                    var c = {};
                    return r(t, e, n, i, a, s, o, u, c), c
                },
                pointDistance: r,
                extrema: a
            }
        }, function(t, e, n) {
            var i = n(173);
            t.exports = i
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = Math.PI / 180,
                a = 180 / Math.PI,
                s = function(t) {
                    i.mix(this, t)
                };
            i.augment(s, {
                basic: null,
                toRadians: function(t) {
                    return r * t
                },
                toDegrees: function(t) {
                    return t * a
                },
                project: function(t, e) {
                    return {
                        x: t,
                        y: e
                    }
                },
                invert: function(t) {
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            }), t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(9),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "region"
            }), t.exports = a
        }, function(t, e, n) {
            "use strict";
            var i = n(32),
                r = n(1),
                a = n(2),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            r.extend(s, i), r.augment(s, {
                type: "smooth",
                bandWidth: .01,
                colRange: {},
                setRange: function(t, e) {
                    this.colRange[t] = e
                },
                getStatDims: function() {
                    var t = this,
                        e = t.getDims(),
                        n = e.length,
                        i = [e[n - 1]];
                    return i
                },
                execSmooth: function(t) {
                    return t
                },
                getXDim: function() {
                    var t = this,
                        e = t.getDims();
                    if (e.length < 2) throw "you must support the x,y dimension!!!";
                    return e[0]
                },
                getYDim: function() {
                    var t = this,
                        e = t.getDims();
                    if (e.length < 2) throw "you must support the x,y dimension!!!";
                    return e[1]
                },
                getZDim: function() {
                    var t = this,
                        e = t.getDims();
                    if (e.length < 3) throw "you must support the x,y,z dimension!!!";
                    return e[2]
                },
                getData: function(t) {
                    var e = [],
                        n = this.dims;
                    return t.each(function(t) {
                        var i = [];
                        r.each(n, function(e) {
                            i.push(t[e])
                        }), e.push(i)
                    }), e
                },
                getDimRange: function(t, e) {
                    var n = this,
                        i = n.colRange[e];
                    if (!i) {
                        var r = a.range(t, e);
                        i = {
                            min: r[0],
                            max: r[1]
                        }
                    }
                    return i
                },
                gatStep: function(t, e) {
                    var n = this,
                        i = n.getDimRange(t, e),
                        r = i.min,
                        a = i.max,
                        s = n.bandWidth,
                        o = (a - r) * s;
                    return o
                },
                getInterArray: function(t, e) {
                    for (var n = this, i = n.gatStep(t, e), r = n.getDimRange(t, e), a = r.min, s = r.max, o = [], u = a; u <= s; u += i) o.push(u);
                    return o
                },
                execFrame: function(t) {
                    var e = this,
                        n = e.getXDim(),
                        i = e.getYDim();
                    t = a.sort(t, n);
                    var s = e.getData(t),
                        o = e.getInterArray(t, n),
                        u = e.execSmooth(s, o, t),
                        c = t.rowObject(0),
                        l = [];
                    return r.each(u, function(t) {
                        var e = r.mix({}, c);
                        e[n] = t[0], e[i] = t[1], l.push(e)
                    }), new a(l)
                }
            }), t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(44),
                a = function(t) {
                    t.inner = t.inner || 0, a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "polar"
            }), t.exports = a
        }, function(t, e, n) {
            "use strict";
            var i = n(10),
                r = n(11),
                a = r.GroupBase,
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            s.CFG = {
                title: {},
                titleText: null,
                _title: {
                    text: " ",
                    fill: "#333",
                    textBaseline: "middle"
                },
                dx: 0,
                dy: 0,
                position: !0,
                animate: !1
            }, i.extend(s, a), i.augment(s, {
                _initCfg: function() {
                    s.superclass._initCfg.call(this), this.deepSet("word"), i.isNull(this.get("title")) && this.set("titleText", null), this.deepSet("title")
                },
                _beforeRenderUI: function() {
                    s.superclass._beforeRenderUI.call(this);
                    var t = this.get("title");
                    this.set("itemsGroup", this.addGroup()), this.set("titleShape", this.addShape("Text", {
                        attrs: t
                    }))
                },
                _renderUI: function() {
                    s.superclass._renderUI.call(this), this._renderTitle()
                },
                _renderTitle: function() {
                    var t = this.get("titleShape"),
                        e = this.get("titleText");
                    t.attr({
                        x: 0,
                        text: e
                    })
                },
                setPosition: function(t) {
                    t = t ? t : this.get("position");
                    var e = this.get("plotRange");
                    if (e) {
                        var n = e.tl,
                            i = e.br,
                            r = this.get("dx"),
                            a = this.get("dy"),
                            s = this.getBBBox().width,
                            o = 0,
                            u = 0;
                        switch (t) {
                            case "top":
                                o = n.x, u = n.y;
                                break;
                            case "left":
                                o = n.x, u = (n.y + i.y) / 2;
                                break;
                            case "right":
                                o = i.x - s, u = (n.y + i.y) / 2;
                                break;
                            case "bottom":
                                o = (n.x + i.x) / 2 - s / 2, u = i.y
                        }
                        this.move(o + r, u + a), this.set("position", t)
                    }
                },
                getCount: function() {
                    return this.get("itemsGroup").get("children").length
                },
                getLeaveCount: function() {
                    var t = this.get("itemsGroup"),
                        e = t.get("children"),
                        n = [];
                    return n = i.filter(e, function(t) {
                        return t.get("checked")
                    }), n.length
                },
                setItems: function(t) {
                    this.set("items", t), this.clearItems(), this._renderUI()
                },
                addItem: function(t) {
                    var e = this.get("items");
                    e.push(t), this.clearItems(), this._renderUI()
                },
                clearItems: function() {
                    var t = this.get("itemsGroup");
                    t.clear()
                }
            }), t.exports = s
        }, function(t, e, n) {
            var i = n(291);
            t.exports = i
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                return t > e ? e : t
            }

            function r(t, e) {
                return t > e ? t : e
            }

            function a(t, e) {
                this.start = t, this.end = e, this.init()
            }
            var s = n(1);
            a.CFG = {
                start: null,
                end: null,
                background: null
            }, s.augment(a, {
                init: function() {
                    var t = this,
                        e = t.start,
                        n = t.end,
                        a = t.tl = {};
                    a.x = i(e.x, n.x), a.y = i(e.y, n.y);
                    var s = t.tr = {};
                    s.x = r(e.x, n.x), s.y = i(e.y, n.y);
                    var o = t.bl = {};
                    o.x = i(e.x, n.x), o.y = r(e.y, n.y);
                    var u = t.br = {};
                    u.x = r(e.x, n.x), u.y = r(e.y, n.y);
                    var c = t.cc = {};
                    c.x = (u.x - a.x) / 2 + a.x, c.y = (u.y - a.y) / 2 + a.y
                },
                reset: function(t, e) {
                    this.start = t, this.end = e, this.init()
                },
                isInRange: function(t, e) {
                    s.isObject(t) && (e = t.y, t = t.x);
                    var n = this,
                        i = n.tl,
                        r = n.br;
                    return t >= i.x && t <= r.x && e >= i.y && e <= r.y
                },
                isInVertical: function(t) {
                    s.isObject(t) && (t = t.y);
                    var e = this,
                        n = e.tl,
                        i = e.br;
                    return t >= n.y && t <= i.y
                },
                isInHorizontal: function(t) {
                    s.isObject(t) && (t = t.x);
                    var e = this,
                        n = e.tl,
                        i = e.br;
                    return t >= n.x && t <= i.x
                },
                getWidth: function() {
                    var t = this.tl,
                        e = this.br;
                    return e.x - t.x
                },
                getHeight: function() {
                    var t = this.tl,
                        e = this.br;
                    return e.y - t.y
                }
            }), t.exports = a
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = {
                    splitPoints: function(t) {
                        var e = [],
                            n = t.x,
                            r = t.y;
                        return r = i.isArray(r) ? r : [r], i.each(r, function(t, r) {
                            var a = {
                                x: i.isArray(n) ? n[r] : n,
                                y: t
                            };
                            e.push(a)
                        }), e
                    }
                };
            t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = {},
                a = {
                    defaultShapeType: null,
                    getShape: function(t) {
                        var e = this,
                            n = e[t] || e[e.defaultShapeType] || r.ShapeBase;
                        return n._coord = e._coord, n
                    },
                    getShapePoints: function(t, e) {
                        var n = this.getShape(t);
                        return n.getShapePoints(e)
                    },
                    drawShape: function(t, e, n) {
                        var i = this.getShape(t);
                        return i.drawShape(e, n)
                    }
                },
                s = {
                    _coord: null,
                    drawShape: function() {},
                    getShapePoints: function() {}
                };
            r.registGeom = function(t, e) {
                var n = i.ucfirst(t),
                    s = i.mix({}, a, e);
                return r[n] = s, s.className = n, s
            }, r.registShape = function(t, e, n) {
                var a = i.ucfirst(t),
                    s = r[a],
                    o = s.getShape(),
                    u = i.mix({}, o, n);
                return s[e] = u, u
            }, r.getShape = function(t) {
                var e = this;
                return t = t || "point", t = i.ucfirst(t), e[t] || r.ShapeBase
            }, r.GeomShape = a, r.ShapeBase = s, t.exports = r
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = ["color", "shape", "size", "opacity"],
                a = "_origin";
            t.exports = {
                getShapeData: function(t) {
                    var e = {},
                        n = t.toJSON(),
                        s = n[0],
                        o = t.colArray("_origin");
                    return i.each(r, function(t) {
                        s.hasOwnProperty(t) && (e[t] = s[t])
                    }), e[a] = o, e
                }
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(1);
            t.exports = {
                splitData: function(t) {
                    if (!t.length) return [];
                    var e, n = [],
                        r = [],
                        a = this.getYDim();
                    return i.each(t, function(t) {
                        e = t._origin ? t._origin[a] : t[a], i.isArray(e) && i.isNull(e[0]) || i.isNull(e) ? (n.push(r), r = []) : r.push(t)
                    }), n.push(r), n
                }
            }
        }, function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(17),
                s = n(62),
                o = n(61);
            r.extend(i, a), r.mixin(i, [s, o]), i.ATTRS = {
                type: "path",
                shapeType: "line"
            }, r.augment(i, {
                drawFrame: function(t, e) {
                    var n, i, a, s = this,
                        o = t.toJSON(),
                        u = this.splitData(o),
                        c = this.get("container"),
                        l = this.get("shapeObj"),
                        h = o[0],
                        f = this.getDrawCfg(h),
                        g = h.points.length;
                    h.index = e, f = this.getDrawCfg(h);
                    var d = s.get("adjusts"),
                        p = d && r.indexOf(d, "Stack") !== -1,
                        v = s.getShapeData(t);
                    s.get("shapeDatas").push(v), r.each(u, function(t, e) {
                        f.splitedIndex = e;
                        for (var r = 0; r < g; r++)
                            if (n = [], !p || 0 !== r) {
                                for (var o = 0; o < t.length; o++) a = t[o], n.push(a.points[r]);
                                if (0 === n.length) return;
                                f.points = n, f.index = r, i = s.getDrawShape(f.shape), l.drawShape(i, f, c)
                            }
                    })
                },
                _getJoinIdAttr: function() {
                    var t = this.get("attrs"),
                        e = [];
                    return r.each(t, function(t) {
                        "position" !== t.type && e.push(t)
                    }), e
                }
            }), t.exports = i
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                t.sort(function(t, n) {
                    return t[e] - n[e]
                })
            }

            function r(t, e) {
                var n = 0;
                return a.each(t, function(t) {
                    n += t[e]
                }), n
            }
            var a = n(1),
                s = function(t) {
                    return t
                },
                o = function(t) {
                    a.mix(this, t), this.rect = this.rect || {
                        x: 0,
                        y: 0,
                        dx: 1,
                        dy: 1
                    }, this.init()
                };
            a.augment(o, {
                nodes: null,
                rect: null,
                valueField: "value",
                childrenField: "children",
                init: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.rect,
                        s = t.valueField;
                    i(e, s), a.each(e, function(e) {
                        t._traverse(e)
                    });
                    var o = r(e, s);
                    t.processNodes(e, n, o)
                },
                _traverse: function(t, e) {
                    var n = this;
                    e = e || 0, t.depth = e;
                    var r = n.childrenField;
                    t.parent || (t.parent = null);
                    var s = t[r];
                    a.isArray(s) && (i(s, n.valueField), a.each(s, function(i) {
                        i.parent = t, n._traverse(i, e + 1)
                    }))
                },
                getNodes: function() {
                    return this.nodes
                },
                changeNodes: function(t) {
                    return this.nodes = t, this.init(), this
                },
                processNodes: function() {},
                pad: function(t) {
                    var e = {
                        x: t.x,
                        y: t.y,
                        dx: t.dx,
                        dy: t.dy
                    };
                    return e
                },
                position: function(t, e, n, i) {
                    var r, a = -1,
                        o = t.length,
                        u = n.x,
                        c = n.y,
                        l = e ? s(t.area / e) : 0;
                    if (e === n.dx) {
                        for ((i || l > n.dy) && (l = n.dy); ++a < o;) r = t[a], r.x = u, r.y = c, r.dy = l, u += r.dx = Math.min(n.x + n.dx - u, l ? s(r.area / l) : 0);
                        r.z = !0, r.dx += n.x + n.dx - u, n.y += l, n.dy -= l
                    } else {
                        for ((i || l > n.dx) && (l = n.dx); ++a < o;) r = t[a], r.x = u, r.y = c, r.dx = l, c += r.dy = Math.min(n.y + n.dy - c, l ? s(r.area / l) : 0);
                        r.z = !1, r.dy += n.y + n.dy - c, n.x += l, n.dx -= l
                    }
                },
                scale: function(t, e) {
                    for (var n, i, r = -1, a = t.length, s = this.valueField; ++r < a;) i = (n = t[r])[s] * (e < 0 ? 0 : e), n.area = isNaN(i) || i <= 0 ? 0 : i
                }
            }), t.exports = o
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                a = "https://kcart.alipay.com/web/bi.do",
                s = n(1),
                o = function() {
                    function t(e) {
                        i(this, t);
                        var n = this,
                            r = e || {},
                            o = new Image;
                        s.mix(n, {
                            image: o,
                            server: a
                        }, r)
                    }
                    return r(t, [{
                        key: "log",
                        value: function(t) {
                            var e = this,
                                n = t || {},
                                i = s.mix({
                                    pg: document.URL,
                                    r: (new Date).getTime()
                                }, n),
                                r = encodeURIComponent(JSON.stringify([i]));
                            e.image.src = e.server + "?BIProfile=merge&d=" + r
                        }
                    }]), t
                }();
            e["default"] = o, t.exports = e["default"]
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(19),
                a = n(2),
                s = "..x",
                o = "..y",
                u = "_value",
                c = "_level",
                l = function(t) {
                    l.superclass.constructor.call(this, t)
                };
            i.extend(l, r), i.augment(l, {
                type: "tree",
                levels: 0,
                totalValue: 0,
                initDims: function(t) {
                    t.unshift(o), t.unshift(s)
                },
                getValueField: function() {
                    var t = this.getDims();
                    return t[3] || u
                },
                getChildrenField: function() {
                    var t = this.getDims();
                    return t[2]
                },
                exec: function(t) {
                    var e = this,
                        n = [],
                        i = a.merge.apply(null, t);
                    return n.push(e.execFrame(i)), n
                },
                _traverseNodes: function(t, e) {
                    var n, r = this;
                    n = e ? e[c] + 1 : 0;
                    var a = r.getChildrenField(),
                        s = r.getValueField();
                    i.each(t, function(t) {
                        t[c] = n, t.parent = e;
                        var i = t[a];
                        i ? (r._traverseNodes(t[a], t), s === u && (t[s] = r.getTotalValue(i))) : (s === u && (t[s] = 1), n + 1 > r.levels && (r.levels = n + 1))
                    })
                },
                getNodeValue: function(t) {
                    var e = this,
                        n = e.getValueField();
                    return t[n]
                },
                getNodeRange: function(t, e, n) {
                    var i, r = this,
                        a = t[c],
                        s = r.levels,
                        o = e.indexOf(t),
                        u = t.parent,
                        l = 0,
                        h = 1,
                        f = 0;
                    if (u ? (i = r.getNodeValue(u), h = n.end.x - n.start.x, f = n.start.x) : i = r.getTotalValue(e), o > 0) {
                        var g = e.slice(0, o);
                        l = r.getTotalValue(g)
                    }
                    var d = r.getNodeValue(t),
                        p = {
                            start: {
                                x: l / i * h + f,
                                y: a / s
                            },
                            end: {
                                x: (l + d) / i * h + f,
                                y: (a + 1) / s
                            }
                        };
                    return p
                },
                getTotalValue: function(t) {
                    var e = this,
                        n = e.getValueField(),
                        r = 0;
                    return i.each(t, function(t) {
                        r += t[n]
                    }), r
                },
                getStatObject: function(t, e) {
                    var n = i.mix({}, t);
                    return n[s] = (e.end.x + e.start.x) / 2, n[o] = (e.end.y + e.start.y) / 2, n
                },
                _extractData: function(t, e, n) {
                    var r = this,
                        a = r.getChildrenField();
                    i.each(t, function(i) {
                        var s = r.getNodeRange(i, t, n),
                            o = r.getStatObject(i, s);
                        e.push(o), i[a] && r._extractData(i[a], e, s)
                    })
                },
                execFrame: function(t) {
                    var e = this,
                        n = t.toJSON(),
                        i = [];
                    e._traverseNodes(n), e._extractData(n, i, 0);
                    var t = new a(i);
                    return t
                }
            }), t.exports = l
        }, function(t, e) {
            var n = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        i = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        i = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        i = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - n.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return t < .5 ? .5 * n.easeInBounce(2 * t) : .5 * n.easeOutBounce(2 * t - 1) + .5
                }
            };
            t.exports = n
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(124),
                a = {
                    duration: "duration",
                    destroy: "destroy",
                    delay: "delay",
                    repeat: "repeat",
                    onUpdate: "onUpdate"
                },
                s = {
                    interpolation: r.interpolation,
                    getFrame: function(t, e, n, r) {
                        var a, o, u, c = {
                                attrs: {},
                                matrix: e.matrix.clone()
                            },
                            l = n.onUpdate;
                        for (u in n.attrs)
                            if (e.attrs[u] != n.attrs[u])
                                if ("path" === u) t >= 1 ? c.attrs[u] = n.attrs[u] : e.pathStash && n.pathStash ? c.attrs[u] = s.pathInterpolation(t, e.pathStash, n.pathStash) : (o = i.path2curve(e.attrs[u], n.attrs[u]), e.pathStash = o[0], n.pathStash = o[1]);
                                else {
                                    if (a = s.interpolation(e.attrs[u], n.attrs[u]), !i.isFunction(a)) return c;
                                    c.attrs[u] = a(t)
                                }
                        if (n.matrix && e.matrix)
                            if ("matrix3" === n.matrix.type) {
                                if (a = s.interpolation(e.matrix, n.matrix), !i.isFunction(a)) return c;
                                c.matrix = a(t)
                            } else i.isFunction(n.matrix) && (c.matrix = n.matrix.call(r, c.matrix, t));
                        return i.isFunction(l) && l(c, t), c
                    },
                    pathInterpolation: function(t, e, n) {
                        for (var r, a, o, u, c = [], l = 0; l < e.length; l++) {
                            a = e[l], o = n[l], r = [];
                            for (var h = 0; h < a.length; h++)
                                if (i.isNumeric(a[h])) {
                                    if (u = s.interpolation(a[h], o[h]), !i.isFunction(u)) return a[h];
                                    r.push(u(t))
                                } else r.push(a[h]);
                            c.push(r)
                        }
                        return c
                    },
                    getKeyFrameByProps: function(t, e) {
                        var n = [],
                            r = s.props2frame(t, e),
                            a = {
                                attrs: s.getTargetAttrs(t, r.attrs),
                                matrix: t.getMatrix().clone()
                            };
                        return i.isFunction(e.onUpdate) && (r.onUpdate = e.onUpdate), n[0] = a, n[1] = r, n
                    },
                    props2frame: function(t, e) {
                        var n = {
                            matrix: null,
                            attrs: {}
                        };
                        return i.each(e, function(i, r) {
                            "transform" !== r || e.k ? "matrix" === r ? n.matrix = i : a[r] || (n.attrs[r] = i) : n.matrix = s.transform(t.getMatrix(), i)
                        }), n
                    },
                    transform: function(t, e) {
                        return t = t.clone(), i.each(e, function(e) {
                            switch (e[0]) {
                                case "t":
                                    t.translate(e[1], e[2]);
                                    break;
                                case "s":
                                    t.scale(e[1], e[2]);
                                    break;
                                case "r":
                                    t.rotate(e[1]);
                                    break;
                                case "m":
                                    t.multiply(e[1]);
                                    break;
                                default:
                                    return !1
                            }
                        }), t
                    },
                    getTargetAttrs: function(t, e) {
                        var n, i = {};
                        for (n in e) i[n] = t.attr(n);
                        return i
                    }
                };
            t.exports = s
        }, function(t, e, n) {
            "use strict";
            var i = n(18),
                r = n(68),
                a = n(47),
                s = n(67),
                o = function(t) {
                    o.superclass.constructor.call(this, t), this._init()
                };
            a.extend(o, i), o.ATTRS = {
                type: "tween",
                canvas: null,
                target: null,
                startTime: null,
                endTime: null,
                duration: null,
                ratio: 0,
                destroyTarget: !1,
                needsDestroy: !1,
                available: !0,
                repeat: !1,
                callBack: null,
                currentFrame: null,
                startKeyFrame: {
                    attrs: null,
                    matrix: null
                },
                endKeyFrame: {
                    attrs: null,
                    matrix: null
                }
            }, a.augment(o, {
                _init: function() {
                    var t = this.get("startTime"),
                        e = this.get("duration");
                    this.set("endTime", t + e)
                },
                _autoSetStartKeyFrame: function() {
                    var t = this.get("target"),
                        e = this.get("endKeyFrame"),
                        n = a.mix({}, r.getTargetAttrs(t, e.attrs)),
                        i = t.getMatrix().clone();
                    this.set("startKeyFrame", {
                        attrs: n,
                        matrix: i
                    })
                },
                tryStep: function(t) {
                    var e = this.get("startTime"),
                        n = (this.get("duration"), this.get("startKeyFrame")),
                        i = this.get("target"),
                        r = e;
                    return t >= r && i && !i.get("destroyed") ? (n.attrs || n.matrix || this._autoSetStartKeyFrame(), this.step(t)) : !(i && !i.get("destroyed")) && (this.set("needsDestroy", !0), !1)
                },
                step: function(t) {
                    var e, n, i, o = this.get("target"),
                        u = this.get("startTime"),
                        c = t - u,
                        l = this.get("duration"),
                        h = this.get("startKeyFrame"),
                        f = this.get("endKeyFrame"),
                        g = this.get("easing");
                    return a.isFunction(g) || (g = s[g] ? s[g] : s.linear), n = c / l, n = n <= 0 ? 0 : n >= 1 ? 1 : n, i = g(n), e = r.getFrame(i, h, f, o), e.attrs && o.attr(e.attrs), e.matrix && o.setMatrix(e.matrix), this.set("ratio", n), this.set("currentFrame", e), this.updateStatus(), o
                },
                updateStatus: function() {
                    var t = this.get("ratio"),
                        e = this.get("callBack"),
                        n = this.get("destroyTarget"),
                        i = this.get("target"),
                        r = this.get("repeat");
                    if (t >= 1)
                        if (r) {
                            var a = this.get("startTime"),
                                s = this.get("endTime"),
                                o = this.get("duration");
                            this.set("startTime", a + o), this.set("endTime", s + o), this.reset()
                        } else this.set("needsDestroy", !0), e && e.call(i), n && !i.get("destroyed") && i.remove(!0)
                },
                reset: function() {
                    var t = this.get("target"),
                        e = this.get("startKeyFrame");
                    e.attrs && t.attr(e.attrs), e.matrix && t.setMatrix(e.matrix), this.set("ratio", 0), this.set("needsDestroy", !1)
                },
                play: function() {
                    var t = this,
                        e = (t.get("target"), t.get("canvas")),
                        n = t.get("available"),
                        i = t.get("ratio"),
                        r = t.get("callBack"),
                        s = +new Date;
                    return n ? (t.step(s), e && e.get("destroyed") !== !0 && e.draw(), void a.requestAnimationFrame(function() {
                        return i >= 1 ? (r && r(), void t.destroy()) : void(i >= 0 && t.play())
                    })) : void t.destroy()
                }
            }), t.exports = o
        }, function(t, e, n) {
            "use strict";

            function i(t) {
                if (!t.__attrs && t !== c) {
                    var e = t.superclass.constructor;
                    e && !e.__attrs && i(e), t.__attrs = {}, r.mix(!0, t.__attrs, e.__attrs), r.mix(!0, t.__attrs, t.ATTRS)
                }
            }
            var r = n(5),
                a = n(13),
                s = n(150),
                o = n(156),
                u = n(155),
                c = function(t) {
                    this.__cfg = {};
                    var e = this.getDefaultCfg();
                    r.mix(this.__cfg, c.CFG, e, t), this.__cfg.uuid = r.guid(a.prefix), i(this.constructor), this.initAttrs(this.__cfg.attrs), this.initTransform(), this.initEventDispatcher(), this.init()
                };
            c.CFG = {
                id: null,
                zIndex: 0,
                canvas: null,
                parent: null,
                capture: !0,
                context: null,
                visible: !0,
                destroyed: !1
            }, r.augment(c, s, o, u, {
                init: function() {},
                getDefaultCfg: function() {
                    return {}
                },
                set: function(t, e) {
                    var n = this,
                        i = "__set" + r.ucfirst(t);
                    return n[i] && (e = n[i](e)), n.__cfg[t] = e, this
                },
                get: function(t) {
                    return this.__cfg[t]
                },
                beforeDraw: function() {},
                draw: function() {
                    if (this && !this.get("destroyed")) {
                        var t = this,
                            e = t.get("context"),
                            n = t.__attrs.clip;
                        t.beforeDraw(), t.get("visible") && (e.save(), n && (e.save(), n.resetTransform(), n.createPath(), e.restore(), e.clip()), t.resetAttrs(), t.resetTransform(), t.drawInner(), e.restore())
                    }
                },
                drawInner: function() {},
                show: function() {
                    return this.set("visible", !0), this
                },
                hide: function() {
                    return this.set("visible", !1), this
                },
                remove: function(t) {
                    var e = this;
                    if (void 0 === t && (t = !0), e.get("parent")) {
                        var n = e.get("parent"),
                            i = n.get("children");
                        r.remove(i, e), e.set("parent", null)
                    }
                    return t && e.destroy(), e
                },
                destroy: function() {
                    var t = this,
                        e = t.get("destroyed");
                    if (!e) return t.__cfg = {}, t.__attrs = null, t.__listeners = null, t.__m = null,
                        t.set("destroyed", !0), t
                },
                __setZIndex: function(t) {
                    var e = this;
                    return this.__cfg.zIndex = t, r.notNull(e.get("parent")) && e.get("parent").sort(), t
                },
                __setAttrs: function(t) {
                    var e = this;
                    return e.attr(t), t
                },
                clone: function() {
                    return r.clone(this)
                },
                getBBox: function() {
                    return {
                        minX: 0,
                        maxX: 0,
                        minY: 0,
                        maxY: 0
                    }
                }
            }), t.exports = c
        }, function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t), this.set("children", [])
            }
            var r = n(5),
                a = n(70),
                s = n(3),
                o = s.Vector3;
            r.extend(i, a), r.augment(i, {
                isGroup: !0,
                canFill: !0,
                canStroke: !0,
                remove: function(t, e) {
                    if (arguments.length >= 2) this.contain(t) && t.remove(e);
                    else {
                        if (1 === arguments.length) {
                            if (!r.isBoolean(t)) return this.contain(t) && t.remove(!0), this;
                            e = t
                        }
                        0 === arguments.length && (e = !0), i.superclass.remove.call(this, e)
                    }
                    return this
                },
                add: function(t) {
                    var e = this,
                        n = e.get("children");
                    if (r.isArray(t)) r.each(t, function(t) {
                        t.get("parent") && t.get("parent").remove(t, !1), e.__setEvn(t)
                    }), n.push.apply(n, t);
                    else {
                        var i = t;
                        i.get("parent") && i.get("parent").remove(i, !1), e.__setEvn(i), n.push(i)
                    }
                    return e
                },
                contain: function(t) {
                    for (var e = this, n = e.get("children"), i = 0, r = n.length; i < r; i++)
                        if (n[i] === t) return !0;
                    return !1
                },
                __setEvn: function(t) {
                    var e = this;
                    t.set("parent", e), t.set("context", e.get("context"));
                    var n = t.__attrs.clip;
                    n && (n.set("parent", e), n.set("context", e.get("context"))), t.set("canvas", e.get("canvas")), r.each(t.get("children"), function(e) {
                        t.__setEvn(e)
                    })
                },
                getBBox: function() {
                    var t = this,
                        e = 1 / 0,
                        n = -(1 / 0),
                        i = 1 / 0,
                        a = -(1 / 0),
                        s = t.get("children");
                    return r.each(s, function(t) {
                        if (t.get("visible")) {
                            var r = t.getBBox("box");
                            if (!r) return !0;
                            var s = new o(r.minX, r.minY, 1),
                                u = new o(r.minX, r.maxY, 1),
                                c = new o(r.maxX, r.minY, 1),
                                l = new o(r.maxX, r.maxY, 1);
                            t.apply(s), t.apply(u), t.apply(c), t.apply(l);
                            var h = Math.min(s.x, u.x, c.x, l.x),
                                f = Math.max(s.x, u.x, c.x, l.x),
                                g = Math.min(s.y, u.y, c.y, l.y),
                                d = Math.max(s.y, u.y, c.y, l.y);
                            h < e && (e = h), f > n && (n = f), g < i && (i = g), d > a && (a = d)
                        }
                    }), {
                        minX: e,
                        minY: i,
                        maxX: n,
                        maxY: a
                    }
                },
                drawInner: function() {
                    var t = this,
                        e = t.get("children");
                    return r.each(e, function(t) {
                        t.draw()
                    }), t
                },
                getCount: function() {
                    var t = this;
                    return t.get("children").length
                },
                sort: function() {
                    var t = this,
                        e = t.get("children");
                    return e.sort(function(t, e) {
                        return t.get("zIndex") - e.get("zIndex")
                    }), t
                },
                find: function(t) {
                    var e = this;
                    return e.findBy(function(e) {
                        return e.get("id") === t
                    })
                },
                findBy: function(t) {
                    var e = this,
                        n = e.get("children"),
                        i = null;
                    return r.each(n, function(e) {
                        if (t(e) ? i = e : e.findBy && (i = e.findBy(t)), i) return !1
                    }), i
                },
                getShape: function(t, e) {
                    function n() {
                        for (var n = s.length - 1; n >= 0; n--) {
                            var r = s[n];
                            if (r.get("visible") && r.get("capture") && (r.isGroup ? i = r.getShape(t, e) : r.isHit(t, e) && (i = r)), i) break
                        }
                    }
                    var i, r = this,
                        a = r.__attrs.clip,
                        s = r.get("children");
                    return a ? a.inside(t, e) && n() : n(), i
                },
                clear: function() {
                    for (var t = this, e = t.get("children"); 0 !== e.length;) e[e.length - 1].remove();
                    return t
                },
                destroy: function() {
                    var t = this;
                    t.get("destroyed") || (t.clear(), i.superclass.destroy.call(t))
                }
            }), t.exports = i
        }, function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                var i, r, a = g.exec(t),
                    o = c.mod(c.degreeToRad(parseFloat(a[1])), 2 * Math.PI),
                    u = a[2],
                    l = e.getBBox();
                o >= 0 && o < .5 * Math.PI ? (i = {
                    x: l.minX,
                    y: l.minY
                }, r = {
                    x: l.maxX,
                    y: l.maxY
                }) : .5 * Math.PI <= o && o < Math.PI ? (i = {
                    x: l.maxX,
                    y: l.minY
                }, r = {
                    x: l.minX,
                    y: l.maxY
                }) : Math.PI <= o && o < 1.5 * Math.PI ? (i = {
                    x: l.maxX,
                    y: l.maxY
                }, r = {
                    x: l.minX,
                    y: l.minY
                }) : (i = {
                    x: l.minX,
                    y: l.maxY
                }, r = {
                    x: l.maxX,
                    y: l.minY
                });
                var h = Math.tan(o),
                    f = h * h,
                    d = (r.x - i.x + h * (r.y - i.y)) / (f + 1) + i.x,
                    p = h * (r.x - i.x + h * (r.y - i.y)) / (f + 1) + i.y,
                    v = e.get("context"),
                    m = v.createLinearGradient(i.x, i.y, d, p);
                return s(u, m, n), m
            }

            function r(t, e, n) {
                var i = d.exec(t),
                    r = parseFloat(i[1]),
                    a = parseFloat(i[2]),
                    o = parseFloat(i[3]),
                    u = i[4],
                    c = e.getBBox(),
                    l = e.get("context"),
                    h = c.maxX - c.minX,
                    f = c.maxY - c.minY,
                    g = Math.sqrt(h * h + f * f) / 2,
                    p = l.createRadialGradient(c.minX + h * r, c.minY + f * a, o, c.minX + h / 2, c.minY + f / 2, g);
                return s(u, p, n), p
            }

            function a(t, e) {
                var n = p.exec(t),
                    i = n[1],
                    r = n[2];
                switch (i) {
                    case "a":
                        i = "repeat";
                        break;
                    case "x":
                        i = "repeat-x";
                        break;
                    case "y":
                        i = "repeat-y";
                        break;
                    case "n":
                        i = "no-repeat";
                        break;
                    default:
                        i = "no-repeat"
                }
                var a = document.getElementById(r),
                    s = e.get("context"),
                    o = s.createPattern(a, i);
                return o
            }

            function s(t, e, n) {
                var i = t.match(v);
                u.each(i, function(t) {
                    t = t.split(":");
                    var i = o(t[1], n);
                    e.addColorStop(t[0], i)
                })
            }

            function o(t, e) {
                if (void 0 === e) return t;
                t = new l(t), t.multiplyA(e);
                var n = t.getType();
                return "hsl" === n ? t.getHSLStyle() : "rgb" === n ? t.getRGBStyle() : void 0
            }
            var u = n(5),
                c = n(6),
                l = n(37),
                h = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
                f = /[^\s\,]+/gi,
                g = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
                d = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
                p = /^p\s*([axyn])\s+(.*)/i,
                v = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
                m = {
                    parsePath: function(t) {
                        return t = t || [], u.isArray(t) ? t : u.isString(t) ? (t = t.match(h), u.each(t, function(e, n) {
                            if (e = e.match(f), e[0].length > 1) {
                                var i = e[0].charAt(0);
                                e.splice(1, 0, e[0].substr(1)), e[0] = i
                            }
                            u.each(e, function(t, n) {
                                isNaN(t) || (e[n] = +t)
                            }), t[n] = e
                        }), t) : void 0
                    },
                    parseStyle: function(t, e, n) {
                        if (u.isString(t)) return g.test(t) ? i(t, e, n) : d.test(t) ? r(t, e, n) : p.test(t) ? a(t, e) : o(t, n)
                    }
                };
            t.exports = m
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(74),
                a = n(2),
                s = n(28),
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(o, r), i.augment(o, {
                dims: [],
                cols: 5,
                rows: null,
                drawTitles: function(t, e) {
                    var n = this,
                        r = n.dims;
                    i.each(t, function(t) {
                        n.drawFacetTitle("col", t, e)
                    }), n.drawDimTitle("col", r[0], e)
                },
                getRegion: function(t, e, n, i) {
                    var r = this,
                        a = r.plotRange,
                        s = r.margin,
                        o = a.tl,
                        u = a.br,
                        c = (u.x - o.x) / e,
                        l = (u.y - o.y) / t,
                        h = {
                            x: o.x + c * n,
                            y: o.y + l * (i + 1) - s
                        },
                        f = {
                            x: h.x + c - s,
                            y: h.y - l + s
                        };
                    return {
                        start: h,
                        end: f
                    }
                },
                generateFacets: function(t) {
                    var e = this,
                        n = e.dims,
                        r = n[0];
                    if (!r) throw new Error("Please specify for the field for facet!");
                    var o = e.getDimValues(r, t),
                        u = o.length,
                        c = e.cols,
                        l = parseInt((u + c - 1) / c, 10),
                        h = [],
                        f = 0;
                    return i.each(o, function(n, i) {
                        var g = parseInt(i / c, 10),
                            d = i % c,
                            p = [{
                                dim: r,
                                value: n,
                                values: o
                            }],
                            v = e.getFilter(p),
                            m = a.filter(t, v),
                            x = new s({
                                type: e.type,
                                count: u,
                                xValue: n,
                                xDim: r,
                                yValue: n,
                                yDim: r,
                                colIndex: d,
                                rowIndex: g,
                                cols: c,
                                rows: l,
                                frame: m,
                                region: e.getRegion(l, c, d, g),
                                index: f++
                            });
                        h.push(x)
                    }), h
                }
            }), t.exports = o
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = n(39),
                s = n(28),
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(o, a), i.augment(o, {
                dims: [],
                defs: {},
                type: "rect",
                plotRange: null,
                drawTitles: function(t, e) {
                    if (!(t.length <= 1)) {
                        var n = this,
                            r = t[0];
                        i.each(t, function(t) {
                            t.cols > 0 && t.rowIndex === t.rows - 1 && n.drawFacetTitle("col", t, e), t.rows > 0 && t.colIndex === t.cols - 1 && n.drawFacetTitle("row", t, e)
                        }), r && (r.cols > 1 && n.drawDimTitle("col", r.xDim, e), r.rows > 1 && n.drawDimTitle("row", r.yDim, e))
                    }
                },
                getRegion: function(t, e, n, i) {
                    var r = this,
                        a = r.plotRange,
                        s = 1 === t && 1 === e ? 0 : r.margin,
                        o = a.bl,
                        u = a.tr,
                        c = (u.x - o.x) / e,
                        l = (u.y - o.y) / t,
                        h = {
                            x: o.x + c * n,
                            y: o.y + l * i - s
                        },
                        f = {
                            x: h.x + c - s,
                            y: h.y + l + s
                        };
                    return {
                        start: h,
                        end: f
                    }
                },
                generateFacets: function(t) {
                    var e = this,
                        n = e.dims,
                        a = [],
                        o = 1,
                        u = 1,
                        c = n[0],
                        l = n[1],
                        h = [""],
                        f = [""];
                    c && (h = e.getDimValues(c, t), u = h.length), l && (f = e.getDimValues(l, t), o = f.length);
                    var g = 0;
                    return i.each(h, function(n, d) {
                        i.each(f, function(i, p) {
                            var v = [{
                                    dim: c,
                                    value: n,
                                    values: h
                                }, {
                                    dim: l,
                                    value: i,
                                    values: f
                                }],
                                m = e.getFilter(v),
                                x = r.filter(t, m),
                                y = new s({
                                    type: e.type,
                                    xValue: n,
                                    yValue: i,
                                    xDim: c,
                                    yDim: l,
                                    colIndex: d,
                                    rowIndex: p,
                                    cols: u,
                                    rows: o,
                                    frame: x,
                                    region: e.getRegion(o, u, d, p),
                                    index: g++
                                });
                            a.push(y)
                        })
                    }), a
                }
            }), t.exports = o
        }, function(t, e, n) {
            var i = n(24);
            n(76), t.exports = i
        }, function(t, e, n) {
            var i = n(1),
                r = n(77),
                a = n(24);
            i.mix(a, {
                values: function(t, e) {
                    var n = [],
                        i = {},
                        a = t.colArray(e);
                    a = r.formatArray(a);
                    for (var s = 0, o = a.length; s < o; s++) {
                        var u = a[s];
                        i[u] || void 0 === u || (i[u] = !0, n.push(u))
                    }
                    return n
                },
                group: function(t, e) {
                    if (!e) return [t];
                    var n = a.groupToMap(t, e),
                        i = [];
                    for (var r in n) n.hasOwnProperty(r) && i.push(n[r]);
                    return i
                },
                groupToMap: function(t, e) {
                    var n = t.colNames(),
                        r = {};
                    if (!e) return {
                        0: t
                    };
                    if (!i.isFunction(e)) {
                        var s = i.isArray(e) ? e : e.replace(/\s+/g, "").split("*");
                        e = function(t) {
                            for (var e = "", n = 0, i = s.length; n < i; n++) e += t[s[n]].toString();
                            return e
                        }
                    }
                    t.each(function(t) {
                        var n = e(t);
                        r[n] ? r[n].push(t) : r[n] = [t]
                    });
                    for (var o in r) r.hasOwnProperty(o) && (r[o] = new a(r[o], {
                        names: n.slice(0)
                    }));
                    return r
                },
                merge: function() {
                    for (var t = i.toArray(arguments), e = t[0], n = e.colNames(), r = e.colCount(), s = [], o = 0; o < r; o++) {
                        s[o] = [];
                        for (var u = 0; u < t.length; u++) {
                            var c = t[u].colArray(o);
                            s[o] = s[o].concat(c)
                        }
                    }
                    return new a(s, {
                        names: n
                    })
                },
                sort: function(t, e) {
                    var n = function(t, n) {
                        return t[e] - n[e]
                    };
                    return r.sort(t, n)
                }
            }), t.exports = a
        }, function(t, e, n) {
            function i(t) {
                return function(e, n) {
                    var i = t(e, n);
                    return 0 === i ? e[s] - n[s] : i
                }
            }
            var r = n(1),
                a = n(24),
                s = "_INDEX";
            t.exports = {
                filterNull: function(t) {
                    var e = [];
                    return r.each(t, function(t) {
                        r.isNull(t) || e.push(t)
                    }), e
                },
                mixIf: function(t, e, n) {
                    r.each(n, function(n) {
                        t[n] = e[n]
                    })
                },
                formatArray: function(t) {
                    var e = [];
                    return r.each(t, function(t) {
                        r.isArray(t) ? e = e.concat(t) : e.push(t)
                    }), e
                },
                sort: function(t, e) {
                    var n = t.toJSON();
                    return r.each(n, function(t, e) {
                        return t[s] = e, t
                    }), n.sort(i(e)), new a(n, {
                        names: t.colNames()
                    })
                }
            }
        }, function(t, e) {
            var n = {
                uniform: function(t) {
                    return Math.abs(t) < 1 ? .5 : 0
                },
                triangular: function(t) {
                    return Math.abs(t) < 1 ? 1 - Math.abs(t) : 0
                },
                epanechnikov: function(t) {
                    return Math.abs(t) < 1 ? .75 * (1 - t * t) : 0
                },
                quartic: function(t) {
                    return Math.abs(t) < 1 ? .9375 * Math.pow(1 - t * t, 2) : 0
                },
                triweight: function(t) {
                    return Math.abs(t) < 1 ? 35 / 32 * Math.pow(1 - t * t, 3) : 0
                },
                tricube: function(t) {
                    return Math.abs(t) < 1 ? 70 / 81 * Math.pow(1 - Math.pow(Math.abs(t), 3), 3) : 0
                },
                gaussian: function(t) {
                    return Math.abs(t) < 3 ? 1 / Math.sqrt(2 * Math.PI) * Math.exp(-.5 * t * t) : 0
                },
                cosine: function(t) {
                    return Math.abs(t) < 1 ? Math.PI / 4 * Math.cos(Math.PI / 2 * t) : 0
                }
            };
            t.exports = n
        }, function(t, e, n) {
            "use strict";
            var i = (n(1), "\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029"),
                r = new RegExp("([a-z])[" + i + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + i + "]*,?[" + i + "]*)+)", "ig"),
                a = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + i + "]*,?[" + i + "]*", "ig"),
                s = function(t) {
                    if (!t) return null;
                    if (typeof t == typeof []) return t;
                    var e = {
                            a: 7,
                            c: 6,
                            o: 2,
                            h: 1,
                            l: 2,
                            m: 2,
                            r: 4,
                            q: 4,
                            s: 4,
                            t: 2,
                            v: 1,
                            u: 3,
                            z: 0
                        },
                        n = [];
                    return String(t).replace(r, function(t, i, r) {
                        var s = [],
                            o = i.toLowerCase();
                        if (r.replace(a, function(t, e) {
                                e && s.push(+e)
                            }), "m" == o && s.length > 2 && (n.push([i].concat(s.splice(0, 2))), o = "l", i = "m" == i ? "l" : "L"), "o" == o && 1 == s.length && n.push([i, s[0]]), "r" == o) n.push([i].concat(s));
                        else
                            for (; s.length >= e[o] && (n.push([i].concat(s.splice(0, e[o]))), e[o]););
                    }), n
                },
                o = function(t, e) {
                    for (var n = [], i = 0, r = t.length; r - 2 * !e > i; i += 2) {
                        var a = [{
                            x: +t[i - 2],
                            y: +t[i - 1]
                        }, {
                            x: +t[i],
                            y: +t[i + 1]
                        }, {
                            x: +t[i + 2],
                            y: +t[i + 3]
                        }, {
                            x: +t[i + 4],
                            y: +t[i + 5]
                        }];
                        e ? i ? r - 4 == i ? a[3] = {
                            x: +t[0],
                            y: +t[1]
                        } : r - 2 == i && (a[2] = {
                            x: +t[0],
                            y: +t[1]
                        }, a[3] = {
                            x: +t[2],
                            y: +t[3]
                        }) : a[0] = {
                            x: +t[r - 2],
                            y: +t[r - 1]
                        } : r - 4 == i ? a[3] = a[2] : i || (a[0] = {
                            x: +t[i],
                            y: +t[i + 1]
                        }), n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
                    }
                    return n
                },
                u = function(t, e, n, i, r) {
                    if (null == r && null == i && (i = n), t = +t, e = +e, n = +n, i = +i, null != r) var a = Math.PI / 180,
                        s = t + n * Math.cos(-i * a),
                        o = t + n * Math.cos(-r * a),
                        u = e + n * Math.sin(-i * a),
                        c = e + n * Math.sin(-r * a),
                        l = [
                            ["M", s, u],
                            ["A", n, n, 0, +(r - i > 180), 0, o, c]
                        ];
                    else l = [
                        ["M", t, e],
                        ["m", 0, -i],
                        ["a", n, i, 0, 1, 1, 0, 2 * i],
                        ["a", n, i, 0, 1, 1, 0, -2 * i],
                        ["z"]
                    ];
                    return l
                },
                c = function(t) {
                    if (t = s(t), !t || !t.length) return [
                        ["M", 0, 0]
                    ];
                    var e, n = [],
                        i = 0,
                        r = 0,
                        a = 0,
                        c = 0,
                        l = 0;
                    "M" == t[0][0] && (i = +t[0][1], r = +t[0][2], a = i, c = r, l++, n[0] = ["M", i, r]);
                    for (var h, f, g = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), d = l, p = t.length; d < p; d++) {
                        if (n.push(h = []), f = t[d], e = f[0], e != e.toUpperCase()) switch (h[0] = e.toUpperCase(), h[0]) {
                                case "A":
                                    h[1] = f[1], h[2] = f[2], h[3] = f[3], h[4] = f[4], h[5] = f[5], h[6] = +f[6] + i, h[7] = +f[7] + r;
                                    break;
                                case "V":
                                    h[1] = +f[1] + r;
                                    break;
                                case "H":
                                    h[1] = +f[1] + i;
                                    break;
                                case "R":
                                    for (var v = [i, r].concat(f.slice(1)), m = 2, x = v.length; m < x; m++) v[m] = +v[m] + i, v[++m] = +v[m] + r;
                                    n.pop(), n = n.concat(o(v, g));
                                    break;
                                case "O":
                                    n.pop(), v = u(i, r, f[1], f[2]), v.push(v[0]), n = n.concat(v);
                                    break;
                                case "U":
                                    n.pop(), n = n.concat(u(i, r, f[1], f[2], f[3])), h = ["U"].concat(n[n.length - 1].slice(-2));
                                    break;
                                case "M":
                                    a = +f[1] + i, c = +f[2] + r;
                                default:
                                    for (m = 1, x = f.length; m < x; m++) h[m] = +f[m] + (m % 2 ? i : r)
                            } else if ("R" == e) v = [i, r].concat(f.slice(1)), n.pop(), n = n.concat(o(v, g)), h = ["R"].concat(f.slice(-2));
                            else if ("O" == e) n.pop(), v = u(i, r, f[1], f[2]), v.push(v[0]), n = n.concat(v);
                        else if ("U" == e) n.pop(), n = n.concat(u(i, r, f[1], f[2], f[3])), h = ["U"].concat(n[n.length - 1].slice(-2));
                        else
                            for (var y = 0, _ = f.length; y < _; y++) h[y] = f[y];
                        if (e = e.toUpperCase(), "O" != e) switch (h[0]) {
                            case "Z":
                                i = +a, r = +c;
                                break;
                            case "H":
                                i = h[1];
                                break;
                            case "V":
                                r = h[1];
                                break;
                            case "M":
                                a = h[h.length - 2], c = h[h.length - 1];
                            default:
                                i = h[h.length - 2], r = h[h.length - 1]
                        }
                    }
                    return n
                },
                l = function(t, e, n, i) {
                    return [t, e, n, i, n, i]
                },
                h = function(t, e, n, i, r, a) {
                    var s = 1 / 3,
                        o = 2 / 3;
                    return [s * t + o * n, s * e + o * i, s * r + o * n, s * a + o * i, r, a]
                },
                f = function(t, e, n, i, r, a, s, o, u, c) {
                    n === i && (n += 1);
                    var l, h = 120 * Math.PI / 180,
                        g = Math.PI / 180 * (+r || 0),
                        d = [],
                        p = function(t, e, n) {
                            var i = t * Math.cos(n) - e * Math.sin(n),
                                r = t * Math.sin(n) + e * Math.cos(n);
                            return {
                                x: i,
                                y: r
                            }
                        };
                    if (c) M = c[0], A = c[1], w = c[2], b = c[3];
                    else {
                        l = p(t, e, -g), t = l.x, e = l.y, l = p(o, u, -g), o = l.x, u = l.y, t === o && e === u && (o += 1, u += 1);
                        var v = (Math.cos(Math.PI / 180 * r), Math.sin(Math.PI / 180 * r), (t - o) / 2),
                            m = (e - u) / 2,
                            x = v * v / (n * n) + m * m / (i * i);
                        x > 1 && (x = Math.sqrt(x), n = x * n, i = x * i);
                        var y = n * n,
                            _ = i * i,
                            S = (a == s ? -1 : 1) * Math.sqrt(Math.abs((y * _ - y * m * m - _ * v * v) / (y * m * m + _ * v * v))),
                            w = S * n * m / i + (t + o) / 2,
                            b = S * -i * v / n + (e + u) / 2,
                            M = Math.asin(((e - b) / i).toFixed(9)),
                            A = Math.asin(((u - b) / i).toFixed(9));
                        M = t < w ? Math.PI - M : M, A = o < w ? Math.PI - A : A, M < 0 && (M = 2 * Math.PI + M), A < 0 && (A = 2 * Math.PI + A), s && M > A && (M -= 2 * Math.PI), !s && A > M && (A -= 2 * Math.PI)
                    }
                    var C = A - M;
                    if (Math.abs(C) > h) {
                        var T = A,
                            k = o,
                            P = u;
                        A = M + h * (s && A > M ? 1 : -1), o = w + n * Math.cos(A), u = b + i * Math.sin(A), d = f(o, u, n, i, r, 0, s, k, P, [A, T, w, b])
                    }
                    C = A - M;
                    var I = Math.cos(M),
                        D = Math.sin(M),
                        L = Math.cos(A),
                        F = Math.sin(A),
                        B = Math.tan(C / 4),
                        R = 4 / 3 * n * B,
                        O = 4 / 3 * i * B,
                        N = [t, e],
                        E = [t + R * D, e - O * I],
                        G = [o + R * F, u - O * L],
                        z = [o, u];
                    if (E[0] = 2 * N[0] - E[0], E[1] = 2 * N[1] - E[1], c) return [E, G, z].concat(d);
                    d = [E, G, z].concat(d).join().split(",");
                    for (var X = [], W = 0, Y = d.length; W < Y; W++) X[W] = W % 2 ? p(d[W - 1], d[W], g).y : p(d[W], d[W + 1], g).x;
                    return X
                },
                g = function(t, e) {
                    for (var n = c(t), i = e && c(e), r = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, a = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, s = (function(t, e, n) {
                            var i, r;
                            if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                            switch (!(t[0] in {
                                T: 1,
                                Q: 1
                            }) && (e.qx = e.qy = null), t[0]) {
                                case "M":
                                    e.X = t[1], e.Y = t[2];
                                    break;
                                case "A":
                                    t = ["C"].concat(f.apply(0, [e.x, e.y].concat(t.slice(1))));
                                    break;
                                case "S":
                                    "C" == n || "S" == n ? (i = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (i = e.x, r = e.y), t = ["C", i, r].concat(t.slice(1));
                                    break;
                                case "T":
                                    "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(h(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                    break;
                                case "Q":
                                    e.qx = t[1], e.qy = t[2], t = ["C"].concat(h(e.x, e.y, t[1], t[2], t[3], t[4]));
                                    break;
                                case "L":
                                    t = ["C"].concat(l(e.x, e.y, t[1], t[2]));
                                    break;
                                case "H":
                                    t = ["C"].concat(l(e.x, e.y, t[1], e.y));
                                    break;
                                case "V":
                                    t = ["C"].concat(l(e.x, e.y, e.x, t[1]));
                                    break;
                                case "Z":
                                    t = ["C"].concat(l(e.x, e.y, e.X, e.Y))
                            }
                            return t
                        }), o = function(t, e) {
                            if (t[e].length > 7) {
                                t[e].shift();
                                for (var r = t[e]; r.length;) g[e] = "A", i && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(r.splice(0, 6)));
                                t.splice(e, 1), x = Math.max(n.length, i && i.length || 0)
                            }
                        }, u = function(t, e, r, a, s) {
                            t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], x = Math.max(n.length, i && i.length || 0))
                        }, g = [], d = [], p = "", v = "", m = 0, x = Math.max(n.length, i && i.length || 0); m < x; m++) {
                        n[m] && (p = n[m][0]), "C" != p && (g[m] = p, m && (v = g[m - 1])), n[m] = s(n[m], r, v), "A" != g[m] && "C" == p && (g[m] = "C"), o(n, m), i && (i[m] && (p = i[m][0]), "C" != p && (d[m] = p, m && (v = d[m - 1])), i[m] = s(i[m], a, v), "A" != d[m] && "C" == p && (d[m] = "C"), o(i, m)), u(n, i, r, a, m), u(i, n, a, r, m);
                        var y = n[m],
                            _ = i && i[m],
                            S = y.length,
                            w = i && _.length;
                        r.x = y[S - 2], r.y = y[S - 1], r.bx = parseFloat(y[S - 4]) || r.x, r.by = parseFloat(y[S - 3]) || r.y, a.bx = i && (parseFloat(_[w - 4]) || a.x), a.by = i && (parseFloat(_[w - 3]) || a.y), a.x = i && _[w - 2], a.y = i && _[w - 1]
                    }
                    return i ? [n, i] : n
                },
                d = /,?([a-z]),?/gi,
                p = function(t) {
                    return t.join(",").replace(d, "$1")
                },
                v = {
                    toArray: s,
                    toString: p,
                    toCurve: g,
                    toAbsolute: c,
                    catmullRomToBezier: o
                };
            t.exports = v
        }, function(t, e) {
            "use strict";

            function n() {
                var t = document.createElement("i");
                return t.title = "Web Colour Picker", t.style.display = "none", document.body.appendChild(t), t
            }
            var i = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
            t.exports = {
                toRGB: function() {
                    var t;
                    return document.body && (t = n()),
                        function(e) {
                            t || (t = n()), t.style.color = e;
                            var r = document.defaultView.getComputedStyle(t, "").getPropertyValue("color"),
                                a = i.exec(r);
                            return a.shift(), this.arr2rgb(a)
                        }
                }(),
                toHex: function(t) {
                    return t = Math.round(t), t = t.toString(16), 1 === t.length && (t = "0" + t), t
                },
                hsl2Rgb: function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = {};
                    if (0 === n) r.r = r.g = r.b = i;
                    else {
                        var a = function(t, e, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
                            },
                            s = i <= .5 ? i * (1 + n) : i + n - i * n,
                            o = 2 * i - s;
                        r.r = a(o, s, e + 1 / 3), r.g = a(o, s, e), r.b = a(o, s, e - 1 / 3)
                    }
                    return r.r = Math.min(Math.round(255 * r.r), 255), r.g = Math.min(Math.round(255 * r.g), 255), r.b = Math.min(Math.round(255 * r.b), 255), "#" + this.toHex(r.r) + this.toHex(r.g) + this.toHex(r.b)
                },
                rgb2hsl: function(t) {
                    var e, n, i, r = this.rgb2arr(t),
                        a = r[0] / 255,
                        s = r[1] / 255,
                        o = r[2] / 255,
                        u = Math.min(a, s, o),
                        c = Math.max(a, s, o),
                        l = c - u;
                    return c == u ? e = 0 : a == c ? e = (s - o) / l : s == c ? e = 2 + (o - a) / l : o == c && (e = 4 + (a - s) / l), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = (u + c) / 2, n = c == u ? 0 : i <= .5 ? l / (c + u) : l / (2 - c - u), [e / 360, n, i]
                },
                arr2rgb: function(t) {
                    return "#" + this.toHex(t[0]) + this.toHex(t[1]) + this.toHex(t[2])
                },
                rgb2arr: function(t) {
                    var e = [];
                    return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e
                }
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(30),
                r = n(22),
                a = r.Group,
                s = function(t) {
                    s.superclass.constructor.call(this, t), this._beforeRenderUI(), this._renderUI(), this._bindUI()
                };
            s.CFG = {}, i.extend(s, a), i.augment(s, {
                _beforeRenderUI: function() {
                    this._initCfg(), this._multiRatioCfg()
                },
                _renderUI: function() {},
                _multiRatioCfg: function() {},
                _initCfg: function() {},
                _bindUI: function() {}
            }), t.exports = s
        }, function(t, e, n) {
            t.exports = {
                GMixin: n(189),
                GroupBase: n(81),
                GroupMixin: n(190)
            }
        }, function(t, e, n) {
            var i = n(1),
                r = n(2),
                a = n(84),
                s = "..x",
                o = "..y",
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            i.extend(u, a), i.augment(u, {
                type: "weight",
                detachment: !1,
                PRECISION: .001,
                _getFromWeightField: function() {
                    var t = this.getDims();
                    return t[4]
                },
                _getToWeightField: function() {
                    var t = this.getDims();
                    return t[5]
                },
                initDims: function(t) {
                    t.unshift(o), t.unshift(s), this.fromWeightField = this._getFromWeightField(), this.toWeightField = this._getToWeightField() ? this._getToWeightField() : this.fromWeightField
                },
                execFrame: function(t) {
                    var e, n, a = this,
                        u = a._getFromField(),
                        c = a._getToField(),
                        l = a.detachment,
                        h = l ? "inputStart" : "start",
                        f = l ? "outputStart" : "start",
                        g = [];
                    return t.each(function(t) {
                        var r = t[u],
                            l = t[c];
                        if (i.isArray(r) && i.isArray(l)) e = t[a.fromWeightField], n = t[a.toWeightField], t[s] = [r[0], r[0] + e, l[0], l[0] + n], t[o] = [r[1], r[1], l[1], l[1]], g.push(t);
                        else {
                            var d = a._findObj(r),
                                p = a._findObj(l);
                            if (d && p) {
                                var v = d[h] ? d[h] : d.x - .5 * d.width,
                                    m = p[f] ? p[f] : p.x - .5 * p.width;
                                e = t[a.fromWeightField] * d.width / d.value, n = t[a.toWeightField] * p.width / p.value;
                                var x = v + e,
                                    y = m + n;
                                x - (d.x + .5 * d.width) < a.PRECISION && y - (p.x + .5 * p.width) < a.PRECISION && (t[s] = [v, x, m, y], t[o] = [d.y, d.y, p.y, p.y], g.push(t)), d[h] = x, p[f] = y
                            }
                        }
                    }), a.resetNodes(), new r(g)
                },
                resetNodes: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.detachment,
                        i = n ? "inputStart" : "start",
                        r = n ? "outputStart" : "start";
                    e.map(function(t) {
                        delete t[i], delete t[r]
                    })
                }
            }), t.exports = u
        }, function(t, e, n) {
            var i = n(1),
                r = n(19),
                a = n(2),
                s = "..x",
                o = "..y",
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            i.extend(u, r), i.augment(u, {
                type: "link",
                nodes: null,
                _getFromField: function() {
                    var t = this.getDims();
                    return t[2]
                },
                _getToField: function() {
                    var t = this.getDims();
                    return t[3]
                },
                initDims: function(t) {
                    t.unshift(o), t.unshift(s)
                },
                execFrame: function(t) {
                    var e = this,
                        n = e._getFromField(),
                        r = e._getToField(),
                        u = [];
                    return t.each(function(t) {
                        var a = t[n],
                            c = t[r];
                        if (i.isArray(a) && i.isArray(c)) t[s] = [a[0], c[0]], t[o] = [a[1], c[1]], u.push(t);
                        else {
                            var l = e._findObj(a),
                                h = e._findObj(c);
                            l && h && (t[s] = [l.x, h.x], t[o] = [l.y, h.y], u.push(t))
                        }
                    }), new a(u)
                },
                _initNodeMap: function(t) {
                    var e = this;
                    if (i.isObject(t)) return t;
                    var n = {};
                    return i.each(t, function(t) {
                        n[t.id] = t
                    }), e.nodesMap = n, n
                },
                _findObj: function(t) {
                    var e = this,
                        n = e.nodes,
                        i = e.nodesMap;
                    return i || (i = e._initNodeMap(n)), i[t]
                }
            }), t.exports = u
        },
        [342, 201, 86],
        function(t, e) {
            "use strict";

            function n() {
                var t = document.createElement("i");
                return t.title = "Web Colour Picker", t.style.display = "none", document.body.appendChild(t), t
            }
            var i = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
                r = {},
                a = null;
            t.exports = {
                toRGB: function(t) {
                    a || (a = n());
                    var e;
                    if (r[t]) e = r[t];
                    else {
                        a.style.color = t, e = document.defaultView.getComputedStyle(a, "").getPropertyValue("color");
                        var s = i.exec(e);
                        s.shift(), e = this.arr2rgb(s), r[t] = e
                    }
                    return e
                },
                toHex: function(t) {
                    return t = Math.round(t), t = t.toString(16), 1 === t.length && (t = "0" + t), t
                },
                hsl2Rgb: function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = {};
                    if (0 === n) r.r = r.g = r.b = i;
                    else {
                        var a = function(t, e, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
                            },
                            s = i <= .5 ? i * (1 + n) : i + n - i * n,
                            o = 2 * i - s;
                        r.r = a(o, s, e + 1 / 3), r.g = a(o, s, e), r.b = a(o, s, e - 1 / 3)
                    }
                    return r.r = Math.min(Math.round(255 * r.r), 255), r.g = Math.min(Math.round(255 * r.g), 255), r.b = Math.min(Math.round(255 * r.b), 255), "#" + this.toHex(r.r) + this.toHex(r.g) + this.toHex(r.b)
                },
                rgb2hsl: function(t) {
                    var e, n, i, r = this.rgb2arr(t),
                        a = r[0] / 255,
                        s = r[1] / 255,
                        o = r[2] / 255,
                        u = Math.min(a, s, o),
                        c = Math.max(a, s, o),
                        l = c - u;
                    return c === u ? e = 0 : a === c ? e = (s - o) / l : s === c ? e = 2 + (o - a) / l : o === c && (e = 4 + (a - s) / l), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = (u + c) / 2, n = c === u ? 0 : i <= .5 ? l / (c + u) : l / (2 - c - u), [e / 360, n, i]
                },
                arr2rgb: function(t) {
                    return "#" + this.toHex(t[0]) + this.toHex(t[1]) + this.toHex(t[2])
                },
                rgb2arr: function(t) {
                    var e = [];
                    return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t) {
                    i.mix(this, t), this._init()
                };
            i.augment(r, {
                nodes: null,
                edges: null,
                y: 0,
                hasWeight: !1,
                idField: "name",
                valueField: "value",
                sourceField: "source",
                targetField: "target",
                sourceWeightField: "sourceWeight",
                targetWeightField: "targetWeight",
                maxValue: null,
                thickness: .05,
                margin: .01,
                detachment: !1,
                _init: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.valueField,
                        r = t.targetWeightField;
                    if (i.isNull(e)) {
                        var a = t.edges.slice(0);
                        t.edges = a, i.isNull(a[0][r]) && (t.targetWeightField = t.sourceWeightField), e = t._createNodes()
                    } else e = e.slice(0), t.nodes = e;
                    t.hasWeight && i.isNull(e[0][n]) && (t._initNodeMap(), t._calculateValue()), t._setMarginWidth(e)
                },
                _createNodes: function() {
                    var t = this,
                        e = t.edges,
                        n = t.sourceField,
                        i = t.targetField,
                        r = [],
                        a = {};
                    return e.forEach(function(e) {
                        var s = e[n],
                            o = e[i];
                        t._creatNode(s, a, r), t._creatNode(o, a, r)
                    }), t.nodes = r, r
                },
                _creatNode: function(t, e, n) {
                    if (i.isNull(e[t])) {
                        var r = {
                            id: t
                        };
                        n.push(r), e[t] = r
                    }
                },
                _initNodeMap: function() {
                    var t = this,
                        e = t.idField,
                        n = t.targetField,
                        r = t.sourceField,
                        a = t.nodes;
                    if (i.isObject(a)) return a;
                    var s = {};
                    return i.each(a, function(a) {
                        i.isNull(a.id) && (a.id = a[e]), i.isNull(a.y) || delete a.y, a.inEdges = t._getEdgeOfCurNode(a, n), a.outEdges = t._getEdgeOfCurNode(a, r), s[a.id] = a
                    }), t.nodesMap = s, t.nodes = a, s
                },
                _getEdgeOfCurNode: function(t, e) {
                    var n = this.edges,
                        i = n.filter(function(n) {
                            return n[e] === t.id
                        });
                    return i
                },
                _calculateValue: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.valueField;
                    e.forEach(function(e) {
                        i.isNull(e[n]) && t._getValueFromEdges(e)
                    })
                },
                _getValueFromEdges: function(t) {
                    var e = this.valueField,
                        n = this.sourceField,
                        i = this.targetField,
                        r = this.sourceWeightField,
                        a = this.targetWeightField,
                        s = 0,
                        o = this.detachment;
                    if (o) {
                        var u = 0,
                            c = 0;
                        t.outEdges.forEach(function(t) {
                            c += t[r]
                        }), t.inEdges.forEach(function(t) {
                            u += t[a]
                        }), s = Math.max(u, c)
                    } else t.outEdges.forEach(function(t) {
                        s += t[r]
                    }), t.inEdges.forEach(function(t) {
                        t[n] !== t[i] && (s += t[a])
                    });
                    return t[e] = s, s
                },
                _setMarginWidth: function(t) {
                    var e = this.margin,
                        n = t.length,
                        i = 2 * n * e;
                    this.marginWidth = i
                },
                getNodes: function() {
                    var t = this,
                        e = t.nodes;
                    return t.hasWeight ? t._layoutByWeight(e) : t._layout(e), e
                },
                _layout: function(t) {
                    var e = t.length,
                        n = 1 / e,
                        i = this.y;
                    t.map(function(t, e) {
                        t.x = (e + .5) * n, t.y = i
                    })
                },
                _layoutByWeight: function(t) {
                    var e = this.y,
                        n = this.marginWidth,
                        i = this.thickness,
                        r = this.valueField,
                        a = 0;
                    t.forEach(function(t) {
                        a += t[r]
                    });
                    var s = this.maxValue || a;
                    t.map(function(t) {
                        t.weight = t[r] / s, t.width = t.weight * (1 - n), t.height = i, t.y = e
                    }), this._layoutX(t)
                },
                _layoutX: function(t) {
                    var e = this.margin;
                    t.map(function(n, i) {
                        for (var r = 0, a = i - 1; a >= 0; a--) r += t[a].width + 2 * e;
                        n.x = e + .5 * n.width + r
                    })
                },
                reset: function() {
                    this._init()
                }
            }), t.exports = r
        },
        function(t, e) {
            function n(t) {
                for (var e = 1; t > 10;) e = 10 * e, t /= 10;
                for (; t < 1;) e /= 10, t = 10 * t;
                return e
            }

            function i(t, e) {
                var n = t.length;
                if (0 === n) return NaN;
                var i = t[0];
                if (e < t[0]) return NaN;
                if (e >= t[n - 1]) return t[n - 1];
                for (var r = 1; r < t.length && !(e < t[r]); r++) i = t[r];
                return i
            }

            function r(t, e) {
                var n = t.length;
                if (0 === n) return NaN;
                var i;
                if (e > t[n - 1]) return NaN;
                if (e < t[0]) return t[0];
                for (var r = 1; r < t.length; r++)
                    if (e <= t[r]) {
                        i = t[r];
                        break
                    }
                return i
            }
            var a = {
                snapFactorTo: function(t, e, i) {
                    if (isNaN(t)) return NaN;
                    var r = 1;
                    if (0 !== t) {
                        t < 0 && (r = -1), t *= r;
                        var s = n(t);
                        r *= s, t /= s
                    }
                    return t = "floor" === i ? a.snapFloor(e, t) : "ceil" === i ? a.snapCeiling(e, t) : a.snapTo(e, t), t * r
                },
                snapMultiple: function(t, e, n) {
                    var i;
                    return i = "ceil" === n ? Math.ceil(t / e) : "floor" === n ? Math.floor(t / e) : Math.round(t / e), i * e
                },
                snapTo: function(t, e) {
                    var n = i(t, e),
                        a = r(t, e);
                    if (isNaN(n) || isNaN(a)) {
                        if (t[0] >= e) return t[0];
                        var s = t[t.length - 1];
                        if (s <= e) return s
                    }
                    return Math.abs(e - n) < Math.abs(a - e) ? n : a
                },
                snapFloor: function(t, e) {
                    return i(t, e)
                },
                snapCeiling: function(t, e) {
                    return r(t, e)
                }
            };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(41),
                a = n(2),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            i.extend(s, r), i.augment(s, {
                fractions: 10,
                execFrame: function(t) {
                    var e = this,
                        n = t.toJSON();
                    i.each(n, function(t) {
                        e.toBin(t)
                    });
                    var r = new a(n);
                    return e.execQuantile(r)
                },
                getSplitArray: function() {
                    for (var t = this, e = t.fractions, n = [], i = 1 / e, r = 0; r <= 1; r += i) n.push(r);
                    return n
                },
                execQuantile: function(t) {
                    var e = this,
                        n = [],
                        r = e.getDims(),
                        s = r[r.length - 1],
                        o = r.slice(0, r.length - 1),
                        u = a.group(t, o),
                        c = e.getSplitArray();
                    return i.each(u, function(t) {
                        var e = t.rowObject(0);
                        e[s] = a.quantile(t, s, c), n.push(e)
                    }), new a(n)
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(32),
                r = n(1),
                a = n(2),
                s = "..density",
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            r.extend(o, i), r.augment(o, {
                type: "density",
                bandWidth: .01,
                colRange: {},
                initDims: function(t) {
                    t.push(s)
                },
                execFrame: function(t) {
                    return t
                },
                getWindowWidth: function(t, e) {
                    var n = a.max(t, e),
                        i = a.min(t, e),
                        r = (n - i) * this.bandWidth;
                    return r
                },
                getCoordinate: function(t, e, n) {
                    for (var i = this, r = i.getDimRange(t, e), a = r.max, s = r.min, o = [], u = s; u <= a; u += n) o.push(u);
                    return o
                },
                getDimRange: function(t, e) {
                    var n = this,
                        i = n.colRange[e];
                    if (!i) {
                        var r = a.range(t, e);
                        i = {
                            min: r[0],
                            max: r[1]
                        }
                    }
                    return i
                },
                setRange: function(t, e) {
                    this.colRange[t] = e
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2);
            t.exports = {
                exec: function(t) {
                    var e = this;
                    e.preExecute(t), this.stat && (t = this.stat.exec(t));
                    var n = [],
                        a = r.merge.apply(null, t),
                        s = e.getGroupCondition(),
                        o = r.groupToMap(a, s);
                    if (t.length > 1) i.each(t, function(t) {
                        var i = e.execFrame(t, o);
                        n.push(i)
                    });
                    else {
                        var u = e.execFrame(t[0]);
                        n.push(u)
                    }
                    return n
                },
                execFrame: function(t, e) {
                    var n = this,
                        a = n.getGroupCondition(),
                        s = r.groupToMap(t, a),
                        o = [],
                        u = n.getStatDims()[0];
                    return i.each(s, function(i, r) {
                        var a = e ? e[r] : t,
                            s = n.transform(i, u, a);
                        o.push(s)
                    }), r.merge.apply(null, o)
                }
            }
        },
        function(t, e, n) {
            var i = n(1),
                r = n(43);
            r.Linear = n(42), r.linear = function(t) {
                return new r.Linear(t)
            }, r.Cat = n(93), r.cat = function(t) {
                return new r.Cat(t)
            }, r.Pow = n(270), r.pow = function(t) {
                return new r.Pow(t)
            }, r.Log = n(269), r.log = function(t) {
                return new r.Log(t)
            }, r.Identity = n(268), r.I = function(t) {
                return new r.Identity(t)
            }, r.Time = n(272), r.time = function(t) {
                return new r.Time(t)
            }, r.TimeCat = n(271), r.timeCat = function(t) {
                return new r.TimeCat(t)
            }, r.I_TYPE = "identity", r.isCategory = function(t) {
                if ("cat" === t) return !0;
                var e = i.ucfirst(t);
                return !(!r[e] || !r[e].superclass || "cat" !== r[e].superclass.type)
            }, t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(43),
                r = n(1),
                a = n(40),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            r.extend(s, i), r.augment(s, {
                type: "cat",
                tickCount: null,
                isCategory: !0,
                init: function() {
                    var t = this,
                        e = t.values,
                        n = t.tickCount;
                    if (r.each(e, function(t, n) {
                            e[n] = t.toString()
                        }), !t.ticks) {
                        var i = e;
                        if (n) {
                            var s = a.Category.caculate({
                                maxCount: n,
                                data: e
                            });
                            i = s.ticks
                        }
                        this.ticks = i
                    }
                },
                getText: function(t) {
                    return this.values.indexOf(t) > -1 ? t = t : r.isNumber(t) && (t = this.values[Math.round(t)]), s.superclass.getText.call(this, t)
                },
                translate: function(t) {
                    var e = this.values.indexOf(t);
                    return e === -1 && r.isNumber(t) ? e = t : e === -1 && (e = NaN), e
                },
                scale: function(t) {
                    var e, n = this.rangeMin(),
                        i = this.rangeMax();
                    return (r.isString(t) || this.values.indexOf(t) !== -1) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, n + e * (i - n)
                },
                invert: function(t) {
                    if (r.isString(t)) return t;
                    var e = this.rangeMin(),
                        n = this.rangeMax();
                    t < e && (t = e), t > n && (t = n);
                    var i = (t - e) / (n - e),
                        a = Math.round(i * (this.values.length - 1)) % this.values.length;
                    return a = a || 0, this.values[a]
                }
            }), t.exports = s
        },
        function(t, e, n) {
            var i = n(1);
            t.exports = {
                toTimeStamp: function(t) {
                    return i.isString(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), i.isDate(t) && (t = t.getTime()), t
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var i = n(34),
                r = n(96),
                a = n(55),
                s = n(278),
                o = n(277),
                u = n(44),
                c = n(279),
                l = n(273),
                h = n(274),
                f = n(275),
                g = n(276);
            i.Cartesian = r, i.Rect = r, i.Polar = a, i.Theta = s, i.Rho = o, i.Plus = u, i.TriAngle = c, i.Clock = l, i.Gauge = h, i.Helix = f, i.Map = g, t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(34),
                a = function(t) {
                    var e = {};
                    i.mix(e, a.ATTRS, t), a.superclass.constructor.call(this, e), this._init()
                };
            a.ATTRS = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            }, i.extend(a, r), i.augment(a, {
                type: "cartesian",
                isRect: !0,
                _init: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        i = {
                            start: e.x,
                            end: n.x
                        },
                        r = {
                            start: e.y,
                            end: n.y
                        };
                    t.set("x", i), t.set("y", r)
                },
                convertPoint: function(t) {
                    var e = this,
                        n = e.isTransposed ? t.y : t.x,
                        i = e.isTransposed ? t.x : t.y;
                    return {
                        x: this.convertDim(n, "x"),
                        y: this.convertDim(i, "y")
                    }
                },
                invertPoint: function(t) {
                    var e = this,
                        n = this.invertDim(t.x, "x"),
                        i = this.invertDim(t.y, "y"),
                        r = {};
                    return r.x = e.isTransposed ? i : n, r.y = e.isTransposed ? n : i, r
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(45),
                a = n(10),
                s = "x-chart-axis",
                o = n(3),
                u = o.Vector2,
                c = n(6);
            i.CFG = {
                zIndex: 4,
                x: null,
                y: null,
                elCls: s,
                line: {
                    lineWidth: 1,
                    stroke: "#C0D0E0"
                },
                tickLine: {
                    lineWidth: 1,
                    stroke: "#C0D0E0",
                    value: 5
                },
                isVertical: !1,
                start: null,
                end: null
            }, a.extend(i, r), a.augment(i, {
                _beforeRenderUI: function() {
                    i.superclass._beforeRenderUI.call(this)
                },
                _getAvgLabelLength: function(t) {
                    var e = t.get("children");
                    return e[1].attr("x") - e[0].attr("x")
                },
                getSideVector: function(t) {
                    var e = this,
                        n = e.get("factor"),
                        i = e.get("isVertical"),
                        r = e.get("start"),
                        a = e.get("end"),
                        s = e.getAxisVector(),
                        o = s.normalize(),
                        u = !1;
                    (i && r.y < a.y || !i && r.x > a.x) && (u = !0);
                    var c = o.vertical(u);
                    return c.multiplyScaler(t * n)
                },
                getAxisVector: function() {
                    var t = this.get("start"),
                        e = this.get("end");
                    return new u(e.x - t.x, e.y - t.y)
                },
                getLinePath: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        i = [];
                    return i.push(["M", e.x, e.y]), i.push(["L", n.x, n.y]), i
                },
                getTickEnd: function(t, e) {
                    var n, i = this,
                        r = i.get("tickLine");
                    return e = e ? e : r.value, n = i.getSideVector(e), {
                        x: t.x + n.x,
                        y: t.y + n.y
                    }
                },
                getTickPoint: function(t) {
                    var e = this,
                        n = e.get("start"),
                        i = e.get("end"),
                        r = i.x - n.x,
                        a = i.y - n.y;
                    return {
                        x: n.x + r * t,
                        y: n.y + a * t
                    }
                },
                renderTitle: function() {
                    var t = this,
                        e = t.get("title"),
                        n = t.getTickPoint(.5),
                        i = t.get("titleOffset"),
                        r = t.get("labelsGroup");
                    if (r) {
                        var o = t.getMaxLabelWidth(r),
                            l = t.get("labelOffset") || 10;
                        o + l + 20 < i && (i = o + l + 20)
                    }
                    var h = a.mix({}, e);
                    if (e.text) {
                        var f = t.getSideVector(i),
                            g = {
                                x: n.x + f.x,
                                y: n.y + f.y
                            },
                            d = t.getAxisVector(),
                            p = 0;
                        if (!c.equal(d.y, 0)) {
                            var v = new u(1, 0),
                                m = new u(d.x, d.y);
                            p = m.angleTo(v, !0)
                        }
                        h.rotate = p * (180 / Math.PI), h.x = g.x, h.y = g.y, t.addShape("Text", {
                            elCls: s + "-title",
                            attrs: h
                        })
                    }
                },
                autoRotateLabels: function() {
                    var t = this,
                        e = t.get("labelsGroup"),
                        n = t.get("title");
                    if (e) {
                        var i, r, s = t.get("labelOffset") || 10,
                            o = s,
                            u = t.get("titleOffset"),
                            l = t.getAxisVector();
                        if (c.equal(l.x, 0) && n.text) r = t.getMaxLabelWidth(e), r + s > u - o && (i = Math.acos((u - o) / (r + s)) * -1);
                        else if (c.equal(l.y, 0) && e.getCount() > 1) {
                            var h = Math.abs(t._getAvgLabelLength(e));
                            r = t.getMaxLabelWidth(e), r > h && (i = Math.atan2(1.5 * s, h))
                        }
                        if (i) {
                            var f = t.get("factor");
                            a.each(e.get("children"), function(t) {
                                t.rotateAtStart(180 * i / Math.PI), c.equal(l.y, 0) && (f > 0 ? t.attr("textAlign", "left") : t.attr("textAlign", "right"))
                            })
                        }
                    }
                }
            }), t.exports = i
        },
        function(t, e, n) {
            var i = n(99);
            i.ShowLabels = n(287), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(11),
                r = i.GroupBase,
                a = n(1),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            s.CFG = {
                zIndex: 6,
                items: null,
                label: null,
                _label: {
                    fontSize: 12,
                    textBaseline: "middle"
                },
                renderer: null,
                custom: !1,
                animate: !1,
                html: '<div class="g-labels" style="position:absolute;top:0;left:0;"></div>',
                itemTpl: '<div class="g-label" style="position:absolute;">{text}</div>',
                duration: 400
            }, a.extend(s, r), a.augment(s, {
                _initCfg: function() {
                    s.superclass._initCfg.call(this), this.deepSet("label")
                },
                _renderUI: function() {
                    s.superclass._renderUI.call(this), this._drawLabels()
                },
                _drawLabels: function() {
                    var t = this,
                        e = t.get("items");
                    a.each(e, function(e, n) {
                        t._addLabel(e, n)
                    })
                },
                _addLabel: function(t, e) {
                    var n = this._getLabelCfg(t, e);
                    return this._createText(n)
                },
                _getLabelCfg: function(t, e) {
                    var n = this.get("label") || {},
                        i = this.get("renderer");
                    if (!a.isObject(t)) {
                        var r = t;
                        t = {}, t.text = r
                    }
                    i && (t.text = i(t.text, t, e)), a.isNull(t.text) && (t.text = ""), t.text = t.text.toString();
                    var s = a.mix({}, t, n, {
                        x: (t.x || 0) + (n.x || 0),
                        y: (t.y || 0) + (n.y || 0)
                    });
                    return s
                },
                _createText: function(t) {
                    var e, n = this,
                        i = n.get("custom"),
                        r = n.get("customDiv");
                    if (!i) return e = this.addShape("Text", {
                        attrs: t
                    }), e.id = t.id, e.animateType = "label", e;
                    if (!r) {
                        var s = n.get("html"),
                            o = n.get("canvas").get("el").parentNode;
                        r = a.createDom(s), o.style.position = "relative", o.appendChild(r), n.set("customDiv", r)
                    }
                    var u = n._createDom(t);
                    r.appendChild(u), n._setCustomPosition(t, u)
                },
                _setCustomPosition: function(t, e) {
                    var n = t.textAlign || "left",
                        i = t.y,
                        r = t.x,
                        s = a.getWidth(e),
                        o = a.getHeight(e);
                    i -= o / 2, "center" === n ? r -= s / 2 : "right" === n && (r -= s), e.style.top = parseInt(i, 10) + "px", e.style.left = parseInt(r, 10) + "px"
                },
                _createDom: function(t) {
                    var e = this,
                        n = e.get("itemTpl"),
                        i = a.substitute(n, t),
                        r = a.createDom(i);
                    return r
                },
                getLabels: function() {
                    var t = this,
                        e = t.get("customDiv");
                    return e ? a.toArray(e.childNodes) : t.get("children")
                },
                addLabel: function(t) {
                    var e = this.get("items"),
                        n = e.length;
                    return e.push(t), this._addLabel(t, n)
                },
                changeLabel: function(t, e) {
                    var n, i, r = this,
                        s = r.get("custom");
                    if (n = a.indexOf(r.get("children"), t), i = r._getLabelCfg(e, n), t)
                        if (s) {
                            var o = r._createDom(i);
                            t.innerHTML = o.innerHTML, r._setCustomPosition(i, t)
                        } else if (t.attr("text", i.text), t.attr("x") !== i.x || t.attr("y") !== i.y) {
                        var u = t.get("attrs").rotate;
                        u && t.rotateAtStart(-u), t.attr(i), u && t.rotateAtStart(u)
                    }
                },
                clear: function() {
                    var t = this,
                        e = t.get("customDiv");
                    e && (e.innerHTML = ""), s.superclass.clear.call(t)
                },
                setItems: function(t) {
                    var e = this;
                    e.clear(), e.set("items", t), e._drawLabels()
                },
                remove: function() {
                    var t = this.get("customDiv");
                    t && t.parentNode.removeChild(t), s.superclass.remove.call(this)
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(11),
                a = n(58),
                s = r.GroupBase,
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            o.CFG = {
                type: "plotBack",
                margin: null,
                border: null,
                plotRange: null,
                background: null
            }, i.extend(o, s), i.augment(o, {
                _beforeRenderUI: function() {
                    this._calculateRange()
                },
                _renderUI: function() {
                    this._renderBorder(), this._renderBackground()
                },
                _renderBorder: function() {
                    var t, e = this,
                        n = e.get("border"),
                        r = e.get("canvas"),
                        a = e.get("borderShape");
                    if (n) {
                        var s = e.get("width") || r.get("width"),
                            o = e.get("height") || r.get("height");
                        a ? a.attr({
                            x: 0,
                            y: 0,
                            width: s,
                            height: o
                        }) : (t = i.mix({
                            x: 0,
                            y: 0,
                            width: s,
                            height: o
                        }, n), a = this.addShape("Rect", {
                            attrs: t
                        }), this.set("borderShape", a))
                    }
                },
                _renderBackground: function() {
                    var t, e, n, r, a = this,
                        s = a.get("background"),
                        o = a.get("plotRange"),
                        u = a.get("backShape");
                    s && (t = o.getWidth(), e = o.getHeight(), n = o.tl, r = {
                        x: n.x,
                        y: n.y,
                        width: t,
                        height: e
                    }, u ? u.attr(r) : (s.image ? (r.img = s.image, u = a.addShape("Image", {
                        attrs: r
                    })) : (i.mix(r, s), u = a.addShape("Rect", {
                        attrs: r
                    })), a.set("backShape", u)))
                },
                _calculateRange: function() {
                    var t, e, n = this,
                        r = n.get("margin"),
                        s = n.get("canvas"),
                        o = n.get("width") || s.get("width"),
                        u = n.get("height") || s.get("height"),
                        c = n.get("plotRange"),
                        l = 0,
                        h = 0,
                        f = 0,
                        g = 0;
                    i.isNumber(r) && (l = h = f = g = r), i.isArray(r) && (l = r[0], f = i.isNull(r[1]) ? r[0] : r[1], g = i.isNull(r[2]) ? r[0] : r[2], h = i.isNull(r[3]) ? f : r[3]), t = {
                        x: h,
                        y: u - g
                    }, e = {
                        x: o - f,
                        y: l
                    }, c ? c.reset(t, e) : (c = new a(t, e), n.set("plotRange", c))
                },
                repaint: function() {
                    return this._calculateRange(), this._renderBorder(), this._renderBackground(), this
                }
            }), t.exports = o
        },
        function(t, e, n) {
            var i = n(292);
            t.exports = i
        },
        function(t, e, n) {
            var i = n(295);
            t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(10),
                r = n(29),
                a = r.G,
                s = a.Group,
                o = function(t) {
                    o.superclass.constructor.call(this, t), this._beforeRenderUI(), this._renderUI(), this._bindUI()
                };
            o.CFG = {}, i.extend(o, s), i.augment(o, {
                _beforeRenderUI: function() {
                    this._initCfg()
                },
                _renderUI: function() {},
                _initCfg: function() {},
                _bindUI: function() {}
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(307),
                r = n(306),
                a = n(312),
                s = n(313),
                o = n(311),
                u = n(310),
                c = n(308),
                l = n(309),
                h = {
                    initEvent: function(t) {
                        var e = new c({
                            chart: t
                        });
                        e.bindEvents(), t.set("eventAssist", e)
                    },
                    initScale: function(t) {
                        var e = new a;
                        t.set("scaleAssist", e)
                    },
                    initCoord: function(t) {
                        var e = new i;
                        t.set("coordAssist", e)
                    },
                    initAxis: function(t) {
                        var e = new r({
                            chart: t
                        });
                        t.set("axisAssist", e)
                    },
                    initLegend: function(t) {
                        var e = new o({
                            chart: t
                        });
                        t.set("legendAssist", e)
                    },
                    initTooltip: function(t) {
                        var e = new s({
                            chart: t
                        });
                        t.set("tooltipAssist", e)
                    },
                    initGuide: function(t) {
                        var e = new u;
                        t.set("guideAssist", e)
                    },
                    initFacet: function(t) {
                        var e = new l({
                            chart: t
                        });
                        t.set("facetAssist", e)
                    }
                };
            t.exports = h
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n, i, r, a, s, o = t.get("start"),
                    u = t.get("end"),
                    c = t.getWidth(),
                    l = t.getHeight(),
                    h = 200;
                return t.isPolar ? (a = t.getRadius(), r = t.getCenter(), n = t.get("startAngle") / Math.PI * 180, i = t.get("endAngle") / Math.PI * 180, s = new x.Fan({
                    attrs: {
                        x: r.x,
                        y: r.y,
                        rs: 0,
                        re: a + h,
                        startAngle: n,
                        endAngle: e ? n : i
                    }
                }), s.endCfg = {
                    endAngle: e ? i : n
                }) : (s = new x.Rect({
                    attrs: {
                        x: o.x - h,
                        y: u.y - h,
                        width: e ? 0 : c + 2 * h,
                        height: l + 2 * h
                    }
                }), s.endCfg = {
                    width: e ? c + 2 * h : 0
                }), s.isClip = !0, s
            }

            function r(t) {
                var e, n, i = t.getBBBox(),
                    r = t.get("origin").points,
                    a = i.centerX;
                e = r[0].y - r[1].y <= 0 ? i.maxY : i.minY, n = new m(a, e, 1), t.apply(n), t.transform([
                    ["t", -n.x, -n.y],
                    ["s", 1, .1],
                    ["t", n.x, n.y]
                ]), t.animate({
                    transform: [
                        ["t", -n.x, -n.y],
                        ["s", 1, 10],
                        ["t", n.x, n.y]
                    ]
                }, _, w)
            }

            function a(t) {
                t.animate({
                    lineWidth: 0,
                    destroy: !0
                }, S, b)
            }

            function s(t) {
                var e = t.getBBBox(),
                    n = e.centerX,
                    i = e.centerY,
                    r = new m(n, i, 1);
                t.apply(r), t.transform([
                    ["t", -r.x, -r.y],
                    ["s", .01, .01],
                    ["t", r.x, r.y]
                ]), t.animate({
                    transform: [
                        ["t", -r.x, -r.y],
                        ["s", 100, 100],
                        ["t", r.x, r.y]
                    ]
                }, _, w)
            }

            function o(t) {
                var e = t.getBBBox(),
                    n = e.centerX,
                    i = e.centerY,
                    r = new m(n, i, 1);
                t.apply(r), t.animate({
                    transform: [
                        ["t", -r.x, -r.y],
                        ["s", .1, .1],
                        ["t", r.x, r.y]
                    ],
                    destroy: !0
                }, S, b)
            }

            function u(t) {
                if ("path" === t.get("type")) {
                    var e = p.pathToAbsolute(t.attr("path"));
                    t.attr("path", [e[0]]), t.animate({
                        path: e
                    }, _, w)
                }
            }

            function c(t) {
                if ("path" === t.get("type")) {
                    var e = p.pathToAbsolute(t.attr("path"));
                    t.animate({
                        path: [e[0]],
                        destroy: !0
                    }, S, b)
                }
            }

            function l(t, e, n, r) {
                var a, s = i(e, !0),
                    o = t.get("canvas");
                n ? (s.attr("startAngle", n), s.attr("endAngle", n), a = {
                    endAngle: r
                }) : a = s.endCfg, s.set("canvas", o), t.attr("clip", s), s.animate(a, y, "easeInOutQuart", function() {
                    t && !t.get("destroyed") && t.attr("clip", null) && s.destroy()
                })
            }

            function h(t) {
                var e = t.__attrs.fillOpacity || 0,
                    n = t.__attrs.strokeOpacity || 0;
                t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0), t.animate({
                    fillOpacity: e,
                    strokeOpacity: n
                }, y, w)
            }

            function f(t) {
                t.animate({
                    strokeOpacity: 0,
                    fillOpacity: 0
                }, S, b, function() {
                    t.remove(!0)
                })
            }

            function g(t) {
                if (!t || !t.length) return null;
                var e = t[0],
                    n = e.x,
                    i = e.x,
                    r = e.y,
                    a = e.y;
                return p.each(t, function(t) {
                    n = n > t.x ? t.x : n, i = i < t.x ? t.x : i, r = r > t.y ? t.y : r, a = a < t.y ? t.y : a
                }), {
                    minX: n,
                    maxX: i,
                    minY: r,
                    maxY: a,
                    centerX: (n + i) / 2,
                    centerY: (r + a) / 2
                }
            }

            function d(t, e) {
                var n, i, r = t.get("origin").points,
                    a = g(r),
                    s = e.get("startAngle"),
                    o = e.get("endAngle"),
                    u = (o - s) / (2 * Math.PI) * 360;
                e.isTransposed ? (n = a.maxY * u, i = a.minY * u) : (n = a.maxX * u, i = a.minX * u), n += s / (2 * Math.PI) * 360, i += s / (2 * Math.PI) * 360, l(t, e, i, n)
            }
            var p = n(1),
                v = n(12),
                m = v.Matrix.Vector3,
                x = v.G,
                y = 900,
                _ = 450,
                S = 300,
                w = "easeOutQuart",
                b = "easeInQuart",
                M = {
                    line: {
                        appear: function() {
                            return l
                        },
                        out: function() {
                            return a
                        }
                    },
                    path: {
                        appear: function() {
                            return l
                        },
                        out: function() {
                            return a
                        }
                    },
                    area: {
                        appear: function() {
                            return l
                        },
                        out: null
                    },
                    polygon: {
                        appear: function() {
                            return s
                        },
                        out: function() {
                            return o
                        }
                    },
                    edge: {
                        appear: function() {
                            return u
                        },
                        out: function() {
                            return c
                        }
                    },
                    interval: {
                        appear: function(t) {
                            return t.isRect ? r : t.isTransposed && t.isPolar || "theta" === t.type ? d : u
                        },
                        out: function(t) {
                            return t.isRect || t.isTransposed || "theta" === t.type ? f : c
                        }
                    },
                    point: {
                        appear: function() {
                            return s
                        },
                        out: function() {
                            return o
                        }
                    },
                    schema: null,
                    contour: null,
                    heatmap: null,
                    label: {
                        appear: function() {
                            return h
                        },
                        out: function() {
                            return f
                        }
                    },
                    axisLine: {},
                    gridLine: {},
                    labelLine: {
                        appear: function() {
                            return u
                        },
                        out: function() {
                            return c
                        }
                    },
                    getAnimate: function(t, e, n) {
                        var i = M[t];
                        if (i) {
                            var r = i[n];
                            return p.isFunction(r) ? i = r(e) : r
                        }
                        return !1
                    }
                };
            t.exports = M
        },
        function(t, e, n) {
            "use strict";
            var i = n(21);
            i.Interval = n(322), i.Schema = n(323), i.Heatmap = n(321), i.Contour = n(319), i.Edge = n(320), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(4),
                r = {
                    getDefalutSize: function() {
                        var t, e = this.getCoord(),
                            n = this.getXScale(),
                            r = n.values;
                        if (n.isLinear && r.length > 1) {
                            var a = Math.abs(r[1] - r[0]);
                            t = (n.max - n.min) / a, r.length > t && (t = r.length)
                        } else t = r.length;
                        var s = 1 / t,
                            o = 1;
                        this.isInCircle() && "schema" !== this.get("type") ? e.isTransposed && t > 1 && (o = i.widthRatio.multiplePie) : o = i.widthRatio.column, s *= o;
                        var u = this.get("adjusts");
                        if (u && u.indexOf("Dodge") !== -1) {
                            var c = this.get("frames");
                            s /= c.length
                        }
                        return s
                    }
                };
            t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(109),
                a = n(20),
                s = function o(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(s, r), i.augment(s, {
                getPointRauis: function(t, e) {
                    return a.getPointRadius(t, e)
                },
                getCirclePoint: function(t, e, n) {
                    var i = this,
                        r = i.get("coord"),
                        a = r.getCenter(),
                        s = i._isEmitLabels(),
                        o = i.getPointRauis(r, n);
                    if (r.isTransposed && o > e && !s) {
                        var u = Math.asin(e / (2 * o));
                        t += 2 * u
                    } else o += e;
                    return {
                        x: a.x + o * Math.cos(t),
                        y: a.y + o * Math.sin(t),
                        angle: t,
                        r: o
                    }
                },
                getArcPoint: function(t, e) {
                    var n, r = this;
                    return e = e || 0, n = i.isArray(t.x) || i.isArray(t.y) ? {
                        x: i.isArray(t.x) ? t.x[e] : t.x,
                        y: i.isArray(t.y) ? t.y[e] : t.y
                    } : t, r.transLabelPoint(n), n
                },
                getPointAngle: function(t) {
                    var e = this,
                        n = e.get("coord");
                    return a.getPointAngle(n, t)
                },
                getMiddlePoint: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        r = t.length,
                        a = {
                            x: 0,
                            y: 0
                        };
                    return i.each(t, function(t) {
                        a.x += t.x, a.y += t.y
                    }), a.x /= r, a.y /= r, a = n.convert(a)
                },
                _isToMiddle: function(t) {
                    return t.x.length > 2
                },
                getLabelPoint: function(t, e, n) {
                    var i, r = this,
                        a = t[n],
                        s = 1;
                    r._isToMiddle(e) ? i = r.getMiddlePoint(e.points) : (1 === t.length && 0 === n ? n = 1 : 0 === n && (s = -1), i = r.getArcPoint(e, n));
                    var o = r.getDefaultOffset();
                    o *= s;
                    var u = r.getPointAngle(i),
                        c = r.getCirclePoint(u, o, i);
                    return c.text = a, c.angle = u, c.color = e.color, c.rotate = r.getLabelRotate(u, o, e), c
                },
                _isEmitLabels: function() {
                    var t = this.get("labels");
                    return t.labelEmit
                },
                getLabelRotate: function(t) {
                    var e, n = this;
                    return e = 180 * t / Math.PI, e += 90, n._isEmitLabels() && (e -= 90), e && (e > 90 ? e -= 180 : e < -90 && (e += 180)), e
                },
                getLabelAlign: function(t) {
                    var e, n = this,
                        i = n.get("coord");
                    if (n._isEmitLabels()) e = t.angle <= Math.PI / 2 && t.angle > -Math.PI / 2 ? "left" : "right";
                    else if (i.isTransposed) {
                        var r = i.getCenter(),
                            a = n.getDefaultOffset();
                        e = Math.abs(t.x - r.x) < 1 ? "center" : t.angle > Math.PI || t.angle <= 0 ? a > 0 ? "left" : "right" : a > 0 ? "right" : "left"
                    } else e = "center";
                    return e
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = 0;
                return u.each(t, function(t) {
                    e += t
                }), e / t.length
            }
            var r = n(12),
                a = r.Components,
                s = a.Labels,
                o = r.Group,
                u = n(1),
                c = n(4),
                l = ["line", "point", "path"],
                h = "_origin",
                f = function g(t) {
                    g.superclass.constructor.call(this, t)
                };
            f.CFG = {
                labels: c.labels,
                labelsCfg: null,
                coord: null,
                geomType: null,
                zIndex: 6
            }, u.extend(f, o), u.mixin(f, [s.ShowLabels]), u.augment(f, {
                _renderUI: function() {
                    f.superclass._renderUI.call(this), this.initLabelsCfg(), this.renderLabels()
                },
                _getLabelValue: function(t) {
                    var e, n = this,
                        i = t[h],
                        r = n.get("labelsCfg"),
                        a = r.scales,
                        s = r.callback;
                    if (s) {
                        var o = [];
                        u.each(a, function(t) {
                            o.push(i[t.dim])
                        }), e = s.apply(null, o)
                    } else {
                        var c = a[0];
                        if (e = i[c.dim], u.isArray(e)) {
                            var l = [];
                            u.each(e, function(t) {
                                l.push(c.getText(t))
                            }), e = l
                        } else e = c.getText(e)
                    }
                    return e
                },
                initLabelsCfg: function() {
                    var t = this,
                        e = t.getDefaultLabelCfg(),
                        n = t.get("labelsCfg");
                    u.mix(!0, e, n.cfg), t.set("labels", e)
                },
                getDefaultLabelCfg: function() {
                    var t = this,
                        e = t.get("labelsCfg").cfg,
                        n = t.get("geomType");
                    return "polygon" === n || e && e.offset < 0 && u.indexOf(l, n) === -1 ? u.mix(!0, {}, c.innerLabels) : this.get("labels")
                },
                getLabelsItems: function(t) {
                    var e, n = this,
                        i = [],
                        r = n.get("labels"),
                        a = n.get("geom"),
                        s = a ? a.getXDim() : "x",
                        o = a ? a.getYDim() : "y";
                    return u.each(t, function(t) {
                        e = t._origin;
                        var a = n._getLabelValue(t);
                        u.isArray(a) || (a = [a]);
                        var c = a.length;
                        u.each(a, function(l, h) {
                            var f = n.getLabelPoint(a, t, h);
                            if (f) {
                                f = u.mix({}, e, f);
                                var g;
                                g = r && r.label && r.label.textAlign ? r.label.textAlign : n.getLabelAlign(f, h, c), f.textAlign = g, f.id = n.get("id") + "LabelText" + e[s] + " " + e[o] + f.text, i.push(f)
                            }
                        })
                    }), i
                },
                adjustItems: function(t) {
                    return t
                },
                drawLines: function() {},
                getLabelPoint: function(t, e, n) {
                    function r(e, n) {
                        return u.isArray(e) && (e = 1 === t.length ? e.length <= 2 ? e[e.length - 1] : i(e) : e[n]), e
                    }
                    var a = this,
                        s = {
                            x: r(e.x, n),
                            y: r(e.y, n),
                            text: t[n]
                        },
                        o = a.getLabelOffset(s, n, t.length);
                    return a.transLabelPoint(s), s.x += o.x, s.y += o.y, s
                },
                transLabelPoint: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        i = n.trans(t.x, t.y, 1);
                    t.x = i.x, t.y = i.y
                },
                getOffsetVector: function() {
                    var t, e = this,
                        n = e.get("labels"),
                        i = n.offset || 0,
                        r = e.get("coord");
                    return t = r.isTransposed ? r.trans(i, 0) : r.trans(0, i)
                },
                getDefaultOffset: function() {
                    var t = this,
                        e = 0,
                        n = t.get("coord"),
                        i = t.getOffsetVector();
                    return e = n.isTransposed ? i.x : i.y
                },
                getLabelOffset: function(t, e, n) {
                    var i = this,
                        r = i.getDefaultOffset(),
                        a = i.get("coord"),
                        s = a.isTransposed,
                        o = s ? "x" : "y",
                        u = s ? 1 : -1,
                        c = {
                            x: 0,
                            y: 0
                        };
                    return e > 0 || 1 === n ? c[o] = r * u : c[o] = r * u * -1, c
                },
                getLabelAlign: function(t, e, n) {
                    var i = this,
                        r = "center",
                        a = i.get("coord");
                    if (a.isTransposed) {
                        var s = i.getDefaultOffset();
                        r = s < 0 ? "right" : 0 === s ? "center" : "left", n > 1 && 0 === e && ("right" === r ? r = "left" : "left" === r && (r = "right"))
                    }
                    return r
                },
                showLabels: function(t) {
                    var e = this,
                        n = e.getLabelsItems(t),
                        i = e.get("labels");
                    n = e.adjustItems(n), e.resetLabels(n), i.labelLine && e.drawLines(n, i.labelLine)
                },
                destroy: function() {
                    this.removeLabels(), f.superclass.destroy.call(this)
                }
            }), t.exports = f
        },
        function(t, e, n) {
            "use strict";
            var i = n(16);
            n(332), n(333), n(334), n(335), n(330), n(336), n(331), i.Path = i.Line, t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i() {
                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
            }
            var r = n(1),
                a = n(6);
            i.multiply = function(t, e) {
                var n = t.elements,
                    r = e.elements,
                    a = new i;
                return a.set(n[0] * r[0] + n[3] * r[1] + n[6] * r[2], n[0] * r[3] + n[3] * r[4] + n[6] * r[5], n[0] * r[6] + n[3] * r[7] + n[6] * r[8], n[1] * r[0] + n[4] * r[1] + n[7] * r[2], n[1] * r[3] + n[4] * r[4] + n[7] * r[5], n[1] * r[6] + n[4] * r[7] + n[7] * r[8], n[2] * r[0] + n[5] * r[1] + n[8] * r[2], n[2] * r[3] + n[5] * r[4] + n[8] * r[5], n[2] * r[6] + n[5] * r[7] + n[8] * r[8])
            }, i.equal = function(t, e) {
                for (var n = t.elements, i = e.elements, r = !0, s = 0, o = n.length; s < o; s++)
                    if (!a.equal(n[s], i[s])) {
                        r = !1;
                        break
                    }
                return r
            }, r.augment(i, {
                type: "matrix3",
                set: function(t, e, n, i, r, a, s, o, u) {
                    var c = this.elements;
                    return c[0] = t, c[3] = e, c[6] = n, c[1] = i, c[4] = r, c[7] = a, c[2] = s, c[5] = o, c[8] = u, this
                },
                get: function(t, e) {
                    return t--, e--, this.elements[3 * e + t]
                },
                identity: function() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1)
                },
                multiplyScalar: function(t) {
                    var e = this.elements;
                    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
                },
                det: function() {
                    var t = this.elements,
                        e = t[0],
                        n = t[1],
                        i = t[2],
                        r = t[3],
                        a = t[4],
                        s = t[5],
                        o = t[6],
                        u = t[7],
                        c = t[8];
                    return e * a * c - e * s * u - n * r * c + n * s * o + i * r * u - i * a * o
                },
                inverse: function(t) {
                    return this.copy(this.getInverse(t))
                },
                getInverse: function(t) {
                    var e = this.det();
                    if (0 === e) {
                        if (t) throw "matrix exception: get inverse matrix with 0 det";
                        return console.warn("matrix cannot inverse"), new i
                    }
                    var n = this.elements,
                        r = (n[0], n[3], n[6], n[1], n[4], n[7], n[2], n[5], n[8], new i);
                    return r.set(n[4] * n[8] - n[7] * n[5], -(n[3] * n[8] - n[6] * n[5]), n[3] * n[7] - n[6] * n[4], -(n[1] * n[8] - n[7] * n[2]), n[0] * n[8] - n[6] * n[2], -(n[0] * n[7] - n[6] * n[1]), n[1] * n[5] - n[4] * n[2], -(n[0] * n[5] - n[3] * n[2]), n[0] * n[4] - n[3] * n[1]), r.multiplyScalar(1 / e), r
                },
                transpose: function() {
                    var t, e = this.elements;
                    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
                },
                multiply: function(t) {
                    return this.copy(i.multiply(this, t))
                },
                translate: function(t, e) {
                    var n = new i;
                    return n.set(1, 0, t, 0, 1, e, 0, 0, 1), this.copy(i.multiply(n, this))
                },
                rotate: function(t) {
                    var e = new i;
                    return e.set(Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1), this.copy(i.multiply(e, this))
                },
                scale: function(t, e) {
                    var n = new i;
                    return n.set(t, 0, 0, 0, e, 0, 0, 0, 1), this.copy(i.multiply(n, this))
                },
                equal: function(t) {
                    return i.equal(this, t)
                },
                copy: function(t) {
                    for (var e = t.elements, n = this.elements, i = 0, r = e.length; i < r; i++) n[i] = e[i];
                    return this
                },
                clone: function() {
                    for (var t = new i, e = t.elements, n = this.elements, r = 0, a = n.length; r < a; r++) e[r] = n[r];
                    return t
                },
                to2DObject: function() {
                    var t = this.elements;
                    return {
                        a: t[0],
                        b: t[1],
                        c: t[3],
                        d: t[4],
                        e: t[6],
                        f: t[7]
                    }
                },
                from2DObject: function(t) {
                    var e = this.elements;
                    return e[0] = t.a, e[1] = t.b, e[3] = t.c, e[4] = t.d, e[6] = t.e, e[7] = t.f, this
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (1 === arguments.length) {
                    var n = t;
                    t = n[0], e = n[1]
                }
                this.x = t || 0, this.y = e || 0
            }
            var r = n(1),
                a = n(6);
            i.add = function(t, e) {
                return new i(t.x + e.x, t.y + e.y)
            }, i.sub = function(t, e) {
                return new i(t.x - e.x, t.y - e.y)
            }, i.lerp = function(t, e, n) {
                return new i(t.x + (e.x - t.x) * n, t.y + (e.y - t.y) * n)
            }, i.angle = function(t, e) {
                var n = t.dot(e) / (t.length() * e.length());
                return Math.acos(a.clamp(n, -1, 1))
            }, i.direction = function(t, e) {
                return t.x * e.y - e.x * t.y
            }, r.augment(i, {
                type: "vector2",
                set: function(t, e) {
                    return this.x = t, this.y = e, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            return this.x = e, this;
                        case 1:
                            return this.y = e, this;
                        default:
                            throw new Error("the index out of range:" + t)
                    }
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw new Error("the index out of range:" + t)
                    }
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this
                },
                add: function(t) {
                    return this.copy(i.add(this, t))
                },
                sub: function(t) {
                    return this.copy(i.sub(this, t))
                },
                subBy: function(t) {
                    return this.copy(i.sub(t, this))
                },
                multiplyScaler: function(t) {
                    return this.x *= t, this.y *= t, this
                },
                divideScaler: function(t) {
                    if (0 !== t) {
                        var e = 1 / t;
                        this.x *= e, this.y *= e
                    } else this.x = 0, this.y = 0;
                    return this
                },
                min: function(t) {
                    return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this
                },
                max: function(t) {
                    return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this
                },
                clamp: function(t, e) {
                    return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this
                },
                clampScale: function() {
                    var t, e;
                    return function(n, r) {
                        return void 0 === t && (t = new i, e = new i), t.set(n, n), e.set(r, r), this.clamp(t, e)
                    }
                }(),
                floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                },
                ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                },
                round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                },
                roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y
                },
                length: function() {
                    return Math.sqrt(this.lengthSq())
                },
                normalize: function() {
                    return this.divideScaler(this.length())
                },
                distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        n = this.y - t.y;
                    return e * e + n * n
                },
                distanceTo: function(t) {
                    return Math.sqrt(this.distanceToSquared(t))
                },
                angleTo: function(t, e) {
                    var n = this.angle(t),
                        r = i.direction(this, t) >= 0;
                    return e ? r ? 2 * Math.PI - n : n : r ? n : 2 * Math.PI - n
                },
                vertical: function(t) {
                    return t ? new i(this.y, (-this.x)) : new i((-this.y), this.x)
                },
                angle: function(t) {
                    return i.angle(this, t)
                },
                setLength: function(t) {
                    var e = this.length();
                    return 0 !== e && t !== e && this.multiplyScaler(t / e), this
                },
                isZero: function() {
                    return 0 === this.x && 0 === this.y
                },
                lerp: function(t, e) {
                    return this.copy(i.lerp(this, t, e))
                },
                equal: function(t) {
                    return a.equal(this.x, t.x) && a.equal(this.y, t.y)
                },
                clone: function() {
                    return new i(this.x, this.y)
                },
                rotate: function(t) {
                    var e = this.x * Math.cos(t) - this.y * Math.sin(t),
                        n = this.x * Math.sin(t) + this.y * Math.cos(t);
                    return this.x = e, this.y = n, this
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                if (1 === arguments.length)
                    if (r.isArray(t)) {
                        var i = t;
                        t = i[0], e = i[1], n = i[2]
                    } else if ("vector2" === t.type) {
                    var a = t;
                    t = a.x, e = a.y, n = 1
                }
                this.x = t || 0, this.y = e || 0, this.z = n || 0
            }
            var r = n(1),
                a = n(6);
            i.add = function(t, e) {
                return new i(t.x + e.x, t.y + e.y, t.z + e.z)
            }, i.sub = function(t, e) {
                return new i(t.x - e.x, t.y - e.y, t.z - e.z)
            }, i.lerp = function(t, e, n) {
                return new i(t.x + (e.x - t.x) * n, t.y + (e.y - t.y) * n, t.z + (e.z - t.z) * n)
            }, i.cross = function(t, e) {
                var n = t.x,
                    r = t.y,
                    a = t.z,
                    s = e.x,
                    o = e.y,
                    u = e.z;
                return new i(r * u - a * o, a * s - n * u, n * o - r * s)
            }, i.angle = function(t, e) {
                var n = t.dot(e) / (t.length() * e.length());
                return Math.acos(a.clamp(n, -1, 1))
            }, r.augment(i, {
                type: "vector3",
                set: function(t, e, n) {
                    return this.x = t, this.y = e, this.z = n, this
                },
                setComponent: function(t, e) {
                    switch (t) {
                        case 0:
                            return this.x = e, this;
                        case 1:
                            return this.y = e, this;
                        case 2:
                            return this.z = e, this;
                        default:
                            throw new Error("index is out of range:" + t)
                    }
                },
                getComponent: function(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw new Error("index is out of range:" + t)
                    }
                },
                add: function(t) {
                    return this.copy(i.add(this, t))
                },
                sub: function(t) {
                    return this.copy(i.sub(this, t))
                },
                subBy: function(t) {
                    return this.copy(i.sub(t, this))
                },
                multiplyScaler: function(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this
                },
                divideScaler: function(t) {
                    if (0 !== t) {
                        var e = 1 / t;
                        this.x *= e, this.y *= e, this.z *= e
                    } else this.x = 0, this.y = 0, this.z = 0;
                    return this
                },
                min: function(t) {
                    return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this.z > t.z && (this.z = t.z), this
                },
                max: function(t) {
                    return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this.z < t.z && (this.z = t.z), this
                },
                clamp: function(t, e) {
                    return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this.z < t.z ? this.z = t.z : this.z > e.z && (this.z = e.z), this
                },
                clampScale: function() {
                    var t, e;
                    return function(n, r) {
                        return void 0 === t && (t = new i, e = new i), t.set(n, n, n), e.set(r, r, r), this.clamp(t, e)
                    }
                }(),
                floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
                },
                ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
                },
                round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
                },
                roundToZero: function() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
                },
                negate: function() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z
                },
                lengthSq: function() {
                    return this.x * this.x + this.y * this.y + this.z * this.z
                },
                length: function() {
                    return Math.sqrt(this.lengthSq())
                },
                lengthManhattan: function() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                },
                normalize: function() {
                    return this.divideScaler(this.length())
                },
                setLength: function(t) {
                    var e = this.length();
                    return 0 !== e && t !== e && this.multiplyScaler(t / e), this
                },
                lerp: function(t, e) {
                    return this.copy(i.lerp(this, t, e))
                },
                cross: function(t) {
                    return this.copy(i.cross(this, t))
                },
                angle: function(t) {
                    return i.angle(this, t)
                },
                distanceToSquared: function(t) {
                    var e = this.x - t.x,
                        n = this.y - t.y,
                        i = this.z - t.z;
                    return e * e + n * n + i * i
                },
                distanceTo: function(t) {
                    return Math.sqrt(this.distanceToSquared(t))
                },
                applyMatrix: function(t) {
                    var e = t.elements,
                        n = e[0] * this.x + e[3] * this.y + e[6] * this.z,
                        i = e[1] * this.x + e[4] * this.y + e[7] * this.z,
                        r = e[2] * this.x + e[5] * this.y + e[8] * this.z;
                    return this.x = n, this.y = i, this.z = r, this
                },
                copy: function(t) {
                    return this.x = t.x, this.y = t.y, this.z = void 0 !== t.z ? t.z : 1, this
                },
                equal: function(t) {
                    return a.equal(this.x, t.x) && a.equal(this.y, t.y) && a.equal(this.z, t.z)
                },
                clone: function() {
                    return new i(this.x, this.y, this.z)
                }
            }), t.exports = i
        },
        function(t, e, n) {
            var i = n(115);
            t.exports = i
        },
        function(t, e, n) {
            function i(t, e, n, i) {
                var r, o, c, l, h = [],
                    f = !!i;
                if (f) {
                    c = new u(1 / 0, 1 / 0), l = new u((-(1 / 0)), (-(1 / 0)));
                    for (var g = 0, d = t.length; g < d; g++) {
                        var p = a(t[g]);
                        c.min(p), l.max(p)
                    }
                    c.min(a(i[0])), l.max(a(i[1]))
                }
                for (var g = 0, v = t.length; g < v; g++) {
                    var p = a(t[g]);
                    if (n) r = a(t[g ? g - 1 : v - 1]), o = a(t[(g + 1) % v]);
                    else {
                        if (0 === g || g === v - 1) {
                            h.push([p.x, p.y]);
                            continue
                        }
                        r = a(t[g - 1]), o = a(t[g + 1])
                    }
                    var m = u.sub(o, r);
                    s(m, e);
                    var x = p.distanceTo(r),
                        y = p.distanceTo(o),
                        _ = x + y;
                    0 !== _ && (x /= _, y /= _);
                    var S = s(m.clone(), -x),
                        w = s(m.clone(), y),
                        b = u.add(p, S),
                        M = u.add(p, w);
                    f && (b.max(c), b.min(l), M.max(c), M.min(l)), h.push([b.x, b.y]), h.push([M.x, M.y])
                }
                return n && h.push(h.shift()), h
            }

            function r(t, e, n) {
                for (var r = !!e, a = [], s = 0, o = t.length; s < o; s += 2) a.push([t[s], t[s + 1]]);
                for (var u, c, l, h = i(a, .4, r, n), f = a.length, g = [], s = 0; s < f - 1; s++) u = h[2 * s], c = h[2 * s + 1], l = a[s + 1], g.push(["C", u[0], u[1], c[0], c[1], l[0], l[1]]);
                return r && (u = h[f], c = h[f + 1], l = a[0], g.push(["C", u[0], u[1], c[0], c[1], l[0], l[1]])), g
            }

            function a(t) {
                return new u(t[0], t[1])
            }

            function s(t, e) {
                return t.x *= e, t.y *= e, t
            }
            var o = n(3),
                u = o.Vector2;
            t.exports = {
                catmullRom2bezier: r
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(17),
                s = n(62),
                o = n(61);
            r.extend(i, a), r.mixin(i, [s, o]), i.ATTRS = {
                type: "area"
            }, r.augment(i, {
                sortFrames: function(t) {
                    return this.sort(t)
                },
                drawFrame: function(t, e) {
                    var n, i, a, s, o = this,
                        u = t.toJSON(),
                        c = this.splitData(u),
                        l = this.get("container"),
                        h = this.get("shapeObj"),
                        f = u[0];
                    f.index = e, n = this.getDrawCfg(f);
                    var g = o.getShapeData(t);
                    o.get("shapeDatas").push(g), r.each(c, function(t, e) {
                        n.splitedIndex = e, a = [];
                        for (var r = 0; r < t.length; r++) s = t[r], a.push(s.points);
                        0 !== a.length && (n.points = a, i = o.getDrawShape(n.shape), h.drawShape(i, n, l))
                    })
                },
                _getJoinIdAttr: function() {
                    var t = this.get("attrs"),
                        e = [];
                    return r.each(t, function(t) {
                        "position" !== t.type && e.push(t)
                    }), e
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(17);
            i.ATTRS = {
                type: "interval"
            }, r.extend(i, a), r.mixin(i), r.augment(i, {
                getDrawCfg: function(t) {
                    var e = this,
                        n = i.superclass.getDrawCfg.call(e, t),
                        r = e.getCoord();
                    return r.isPolar && (n.z = !0, n.center = r.get("center")), n
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(63);
            r.extend(i, a), i.ATTRS = {
                type: "line"
            }, r.augment(i, {
                sortFrames: function(t) {
                    return this.sort(t)
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(75);
            t.exports = {
                sort: function(t) {
                    var e = this.getXDim(),
                        n = [];
                    return i.each(t, function(t) {
                        n.push(r.sort(t, e))
                    }), n
                }
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(17);
            r.extend(i, a), i.ATTRS = {
                type: "point"
            }, t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(17);
            r.extend(i, a), i.ATTRS = {
                type: "polygon"
            }, r.augment(i, {
                getShapePointInfo: function(t) {
                    var e, n = a.prototype.getShapePointInfo.call(this, t),
                        i = this,
                        s = n.x,
                        o = n.y;
                    if (!r.isArray(s) || !r.isArray(o)) {
                        var u = i.getXScale(),
                            c = i.getYScale(),
                            l = u.values ? u.values.length : u.ticks.length,
                            h = c.values ? c.values.length : c.ticks.length,
                            f = .5 / l,
                            g = .5 / h;
                        u.isCategory && c.isCategory ? (s = [s - f, s - f, s + f, s + f], o = [o - g, o + g, o + g, o - g]) : r.isArray(s) ? (e = s, s = [e[0], e[0], e[1], e[1]], o = [o - g / 2, o + g / 2, o + g / 2, o - g / 2]) : r.isArray(o) && (e = o, o = [e[0], e[1], e[1], e[0]], s = [s - f / 2, s - f / 2, s + f / 2, s + f / 2])
                    }
                    var d = r.mix({}, t, {
                        x: s,
                        y: o
                    });
                    return d
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(17);
            r.extend(i, a), i.ATTRS = {
                type: "schema"
            }, t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t, e, n, i) {
                    this.type = t, this.target = null, this.currentTarget = null, this.bubbles = n, this.cancelable = i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.removed = !1, this.event = e
                };
            i.augment(r, {
                preventDefault: function() {
                    this.defaultPrevented = this.cancelable && !0
                },
                stopPropagation: function() {
                    this.propagationStopped = !0
                },
                remove: function() {
                    this.remove = !0
                },
                clone: function() {
                    return i.clone(this)
                },
                toString: function() {
                    return "[Event (type=" + this.type + ")]"
                }
            }), t.exports = r
        },
        function(t, e, n) {
            var i = n(127);
            t.exports = {
                interpolation: i.interpolation,
                unInterpolation: i.unInterpolation
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = [], i = Math.min(t.length, e.length), r = 0; r < i; r++) n[r] = a.singular(t[r], e[r]);
                return function(t) {
                    for (var e = [], r = 0; r < i; r++) e[r] = n[r](t);
                    return e
                }
            }

            function r(t, e) {
                for (var n = [], i = Math.min(t.length, e.length), r = 0; r < i; r++) n[r] = a.unSingular(t[r], e[r]);
                return function(t) {
                    for (var e = Math.min(n.length, t.length), i = 0, r = 0, a = 0; a < e; a++) i += n[a](t[a]), r++;
                    return 0 === r ? 0 : i / r
                }
            }
            var a = n(36);
            t.exports = {
                array: i,
                unArray: r
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                switch (e.getType()) {
                    case "rgb":
                        return a(t, e);
                    case "hsl":
                        return o(t, e)
                }
            }

            function r(t, e) {
                switch (e.getType()) {
                    case "rgb":
                        return s(t, e);
                    case "hsl":
                        return u(t, e)
                }
            }

            function a(t, e) {
                var n = t.getR(),
                    i = t.getG(),
                    r = t.getB(),
                    a = t.getA(),
                    s = e.getR() - n,
                    o = e.getG() - i,
                    u = e.getB() - r,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        var e = new c;
                        return e.setRGB(n + s * t, i + o * t, r + u * t, void 0 !== a && void 0 !== l ? a + l * t : void 0), e.getRGBStyle()
                    }
            }

            function s(t, e) {
                var n = t.getR(),
                    i = t.getG(),
                    r = t.getB(),
                    a = t.getA(),
                    s = e.getR() - n,
                    o = e.getG() - i,
                    u = e.getB() - r,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        if (t = new c(t), !t.getType()) return 0;
                        var e = t.getR(),
                            h = t.getG(),
                            f = t.getB(),
                            g = t.getA();
                        g = g || 1;
                        var d = 0,
                            p = 0;
                        return 0 !== s && (d += (e - n) / s, p++), 0 !== o && (d += (h - i) / o, p++), 0 !== u && (d += (f - r) / u, p++), 0 !== l && l && (d += (g - a) / l, p++), 0 === p ? 0 : d / p
                    }
            }

            function o(t, e) {
                var n = t.getH(),
                    i = t.getS(),
                    r = t.getL(),
                    a = t.getA(),
                    s = e.getH() - n,
                    o = e.getS() - i,
                    u = e.getL() - r,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        var e = new c;
                        return e.setHSL(n + s * t, i + o * t, r + u * t, void 0 !== a && void 0 !== l ? a + l * t : void 0), e.getHSLStyle()
                    }
            }

            function u(t, e) {
                var n = t.getH(),
                    i = t.getS(),
                    r = t.getL(),
                    a = t.getA(),
                    s = e.getH() - n,
                    o = e.getS() - i,
                    u = e.getL() - r,
                    l = e.getA();
                return void 0 === a && void 0 === l || (a = a || 1, l = (void 0 === l ? 1 : l) - a),
                    function(t) {
                        if (t = new c(t), !t.getType()) return 0;
                        var e = t.getH(),
                            h = t.getS(),
                            f = t.getL(),
                            g = t.getA();
                        g = g || 1;
                        var d = 0,
                            p = 0;
                        return 0 !== s && (d += (e - n) / s, p++), 0 !== o && (d += (h - i) / o, p++), 0 !== u && (d += (f - r) / u, p++), 0 !== l && l && (d += (g - a) / l, p++), 0 === p ? 0 : d / p
                    }
            }
            var c = n(37);
            t.exports = {
                color: i,
                unColor: r
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                return t instanceof h && e instanceof h ? c.matrix(t, e) : a.isArray(t) && a.isArray(e) ? s.array(t, e) : a.isObject(t) && a.isObject(e) ? o.object(t, e) : u.singular(t, e)
            }

            function r(t, e) {
                return t instanceof h && e instanceof h ? c.unMatrix(t, e) : a.isArray(t) && a.isArray(e) ? s.unArray(t, e) : a.isObject(t) && a.isObject(e) ? o.unObject(t, e) : u.unSingular(t, e)
            }
            var a = n(1),
                s = n(125),
                o = n(130),
                u = n(36),
                c = n(128),
                l = n(3),
                h = l.Matrix3;
            t.exports = {
                interpolation: i,
                unInterpolation: r
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = [], i = t.elements, r = e.elements, s = 0; s < u; s++) n[s] = a.singular(i[s], r[s]);
                return function(t) {
                    for (var e = new o, i = e.elements, r = 0; r < u; r++) i[r] = n[r](t);
                    return e
                }
            }

            function r(t, e) {
                for (var n = [], i = t.elements, r = e.elements, s = 0; s < u; s++) n[s] = a.unSingular(i[s], r[s]);
                return function(t) {
                    for (var e = t.elements, i = 0, r = 0, a = 0; a < u; a++) {
                        var s = n[a](e[a]);
                        0 !== s && (i += s, r++)
                    }
                    return i / r
                }
            }
            var a = n(36),
                s = n(3),
                o = s.Matrix3,
                u = 9;
            t.exports = {
                matrix: i,
                unMatrix: r
            }
        },
        function(t, e) {
            "use strict";

            function n(t, e) {
                return t = +t, e = +e,
                    function(n) {
                        return t * (1 - n) + e * n
                    }
            }

            function i(t, e) {
                return e -= t,
                    function(n) {
                        return 0 === e ? 0 : (n - t) / e
                    }
            }
            t.exports = {
                number: n,
                unNumber: i
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = {};
                for (var i in t) i in e && (n[i] = a.singular(t[i], e[i]));
                return function(t) {
                    var e = {};
                    for (var i in n) e[i] = n[i](t);
                    return e
                }
            }

            function r(t, e) {
                var n = {};
                for (var i in t) i in e && (n[i] = a.unSingular(t[i], e[i]));
                return function(t) {
                    var e = 0,
                        i = 0;
                    for (var r in n) r in t && (e += n[r](t[r]), i++);
                    return 0 === i ? 0 : e / i
                }
            }
            var a = n(36);
            t.exports = {
                object: i,
                unObject: r
            }
        },
        function(t, e, n) {
            var i = n(64);
            i.Squarify = n(132), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(64),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                mode: "squarify",
                ratio: .5 * (1 + Math.sqrt(5)),
                processNodes: function(t, e, n) {
                    var r = this;
                    if (i.isArray(t) && t.length) {
                        var a, s, o, u = [],
                            c = t[0],
                            l = r.mode,
                            h = r.valueField,
                            f = r.childrenField,
                            g = t.slice(),
                            d = 1 / 0,
                            p = "slice" === l ? e.dx : "dice" === l ? e.dy : "slice-dice" === l ? c.depth % 2 ? e.dy : e.dx : Math.min(e.dx, e.dy);
                        for (r.scale(g, e.dx * e.dy / n), u.area = 0;
                            (o = g.length) > 0;) u.push(a = g[o - 1]), u.area += a.area, "squarify" !== l || (s = r.worst(u, p)) <= d ? (g.pop(), d = s) : (u.area -= u.pop().area, r.position(u, p, e, !1), p = Math.min(e.dx, e.dy), u.length = u.area = 0, d = 1 / 0);
                        u.length && (r.position(u, p, e, !0), u.length = u.area = 0), t.forEach(function(t) {
                            r.processNodes(t[f], r.pad(t), t[h])
                        })
                    }
                },
                worst: function(t, e) {
                    for (var n, i = this, r = t.area, a = 0, s = 1 / 0, o = -1, u = t.length; ++o < u;)(n = t[o].area) && (n < s && (s = n), n > a && (a = n));
                    return r *= r, e *= e, r ? Math.max(e * a * i.ratio / r, r / (e * s * i.ratio)) : 1 / 0
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                this.space = {}, r.isString(t) ? this.setStyle(t) : t instanceof i && this.copy(t)
            }
            var r = n(1),
                a = (n(6), n(135)),
                s = n(136),
                o = n(134),
                u = {
                    hex: /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/,
                    space: /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)$/,
                    rgbNum: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/,
                    rgbaNum: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/,
                    rgbPre: /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,
                    rgbaPre: /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/,
                    hsl: /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,
                    hsla: /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/
                };
            r.augment(i, {
                getType: function() {
                    return this.space.type
                },
                toRGB: function() {
                    var t = this.space;
                    if ("rgb" !== t.type) {
                        var e = t.toRGB();
                        this.setRGB(e.r, e.g, e.b, e.a);
                    }
                },
                toHSL: function() {
                    var t = this.space;
                    if ("hsl" !== t.type) {
                        var e = t.toHSL();
                        this.setHSL(e.h, e.s, e.l, e.a)
                    }
                },
                getR: function() {
                    return this.toRGB(), this.space.r
                },
                getG: function() {
                    return this.toRGB(), this.space.g
                },
                getB: function() {
                    return this.toRGB(), this.space.b
                },
                getH: function() {
                    return this.toHSL(), this.space.h
                },
                getS: function() {
                    return this.toHSL(), this.space.s
                },
                getL: function() {
                    return this.toHSL(), this.space.l
                },
                getA: function() {
                    return this.space.a
                },
                multiplyA: function(t) {
                    return void 0 === t ? this : (void 0 === this.space.a && (this.space.a = 1), this.space.a *= t, this)
                },
                getRGBStyle: function() {
                    return this.toRGB(), this.space.getStyle()
                },
                getRGBPreStyle: function() {
                    return this.toRGB(), this.space.getPreStyle()
                },
                getHSLStyle: function() {
                    return this.toHSL(), this.space.getStyle()
                },
                getHex: function() {
                    return this.toRGB(), this.space.getHex()
                },
                setRGB: function(t, e, n, i) {
                    return this.space = new s, this.space.setRGB(t, e, n, i), this
                },
                setHSL: function(t, e, n, i) {
                    return this.space = new a, this.space.setHSL(t, e, n, i), this
                },
                setHex: function(t) {
                    return this.space = new s, t = Math.floor(t), this.space.r = (t >> 16 & 255) / 255, this.space.g = (t >> 8 & 255) / 255, this.space.b = (255 & t) / 255, this
                },
                setStyle: function(t) {
                    var e;
                    if (e = u.hex.exec(t)) {
                        var n = e[1],
                            i = n.length;
                        if (3 === i) return this.setRGB(parseInt(n.charAt(0) + n.charAt(0), 16) / 255, parseInt(n.charAt(1) + n.charAt(1), 16) / 255, parseInt(n.charAt(2) + n.charAt(2), 16) / 255), this;
                        if (6 === i) return this.setRGB(parseInt(n.charAt(0) + n.charAt(1), 16) / 255, parseInt(n.charAt(2) + n.charAt(3), 16) / 255, parseInt(n.charAt(4) + n.charAt(5), 16) / 255), this
                    } else if (e = u.space.exec(t)) {
                        var r, a = e[1],
                            s = e[2];
                        switch (a) {
                            case "rgb":
                                if (r = u.rgbNum.exec(s)) return this.setRGB(parseInt(r[1], 10) / 255, parseInt(r[2], 10) / 255, parseInt(r[3], 10) / 255), this;
                                if (r = u.rgbPre.exec(s)) return this.setRGB(parseInt(r[1], 10) / 100, parseInt(r[2], 10) / 100, parseInt(r[3], 10) / 100), this;
                                break;
                            case "rgba":
                                if (r = u.rgbaNum.exec(s)) return this.setRGB(parseInt(r[1], 10) / 255, parseInt(r[2], 10) / 255, parseInt(r[3], 10) / 255, parseFloat(r[4])), this;
                                if (r = u.rgbaPre.exec(s)) return this.setRGB(parseInt(r[1], 10) / 100, parseInt(r[2], 10) / 100, parseInt(r[3], 10) / 100, parseFloat(r[4])), this;
                                break;
                            case "hsl":
                                if (r = u.hsl.exec(s)) return this.setHSL(parseInt(r[1], 10) / 360, parseInt(r[2], 10) / 100, parseInt(r[3], 10) / 100), this;
                                break;
                            case "hsla":
                                if (r = u.hsla.exec(s)) return this.setHSL(parseInt(r[1], 10) / 360, parseInt(r[2], 10) / 100, parseInt(r[3], 10) / 100, parseFloat(r[4])), this
                        }
                    } else t = t.toLowerCase(), void 0 !== o[t] ? this.setHex(o[t]) : this.setHex(o.black)
                },
                copy: function(t) {
                    this.space = t.space.clone()
                },
                clone: function() {
                    return new i(this)
                }
            }), t.exports = i
        },
        function(t, e) {
            t.exports = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            }
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(6),
                a = function() {
                    this.h = 0, this.s = 0, this.l = 0
                };
            i.augment(a, {
                type: "hsl",
                setHSL: function(t, e, n, i) {
                    this.h = r.mod(t, 1), this.s = r.clamp(e, 0, 1), this.l = r.clamp(n, 0, 1), void 0 !== i ? this.a = r.clamp(i, 0, 1) : this.a = void 0
                },
                toRGB: function() {
                    function t(t, e, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
                    }
                    return function() {
                        var e = this,
                            n = e.h,
                            i = e.s,
                            r = e.l;
                        if (0 === i) return {
                            r: r,
                            g: r,
                            b: r,
                            a: e.a
                        };
                        var a = r <= .5 ? r * (1 + i) : r + i - r * i,
                            s = 2 * r - a;
                        return {
                            r: t(s, a, n + 1 / 3),
                            g: t(s, a, n),
                            b: t(s, a, n - 1 / 3),
                            a: e.a
                        }
                    }
                }(),
                clone: function() {
                    var t = new a;
                    return t.h = this.h, t.s = this.s, t.l = this.l, t.a = this.a, t
                },
                copy: function(t) {
                    return this.h = t.h, this.s = t.s, this.l = t.l, this.a = t.a, this
                },
                getStyle: function() {
                    var t = this;
                    return void 0 === t.a ? "hsl(" + Math.round(360 * t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%)" : "hsla(" + Math.round(360 * t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%, " + t.a + ")"
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(6),
                a = function() {
                    this.r = 0, this.g = 0, this.b = 0, this.type = "rgb"
                };
            i.augment(a, {
                type: "rgb",
                setRGB: function(t, e, n, i) {
                    this.r = r.clamp(t, 0, 1), this.g = r.clamp(e, 0, 1), this.b = r.clamp(n, 0, 1), void 0 !== i ? this.a = r.clamp(i, 0, 1) : this.a = void 0
                },
                toHSL: function() {
                    var t, e, n = this.r,
                        i = this.g,
                        r = this.b,
                        a = Math.max(n, i, r),
                        s = Math.min(n, i, r),
                        o = (s + a) / 2;
                    if (s === a) t = 0, e = 0;
                    else {
                        var u = a - s;
                        switch (e = o <= .5 ? u / (a + s) : u / (2 - a - s), a) {
                            case n:
                                t = (i - r) / u + (i < r ? 6 : 0);
                                break;
                            case i:
                                t = (r - n) / u + 2;
                                break;
                            case r:
                                t = (n - i) / u + 4
                        }
                        t /= 6
                    }
                    return {
                        h: t,
                        s: e,
                        l: o,
                        a: this.a
                    }
                },
                getHex: function() {
                    var t = 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
                    return "#" + ("000000" + t.toString(16)).slice(-6)
                },
                getStyle: function() {
                    return void 0 === this.a ? "rgb(" + Math.round(255 * this.r).toString() + ", " + Math.round(255 * this.g).toString() + ", " + Math.round(255 * this.b).toString() + ")" : "rgba(" + Math.round(255 * this.r).toString() + ", " + Math.round(255 * this.g).toString() + ", " + Math.round(255 * this.b).toString() + ", " + this.a + ")"
                },
                getPreStyle: function() {
                    return void 0 === this.a ? "rgb(" + Math.round(100 * this.r).toString() + "%, " + Math.round(100 * this.g).toString() + "%, " + Math.round(100 * this.b).toString() + "%)" : "rgba(" + Math.round(100 * this.r).toString() + "%, " + Math.round(100 * this.g).toString() + "%, " + Math.round(100 * this.b).toString() + "%, " + this.a + ")"
                },
                clone: function() {
                    var t = new a;
                    return t.r = this.r, t.g = this.g, t.b = this.b, t.a = this.a, t
                },
                copy: function(t) {
                    return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this
                }
            }), t.exports = a
        },
        function(t, e, n) {
            var i = n(138);
            t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                this.register(t)
            }
            var r = n(1);
            r.augment(i, {
                register: function(t) {
                    var e = this;
                    if (t.plugins || (t.plugins = {}), !t.plugins[e.name]) switch (t.plugins[e.name] = e, e.type) {
                        case "event":
                            e.__registerEvent(t)
                    }
                },
                __registerEvent: function(t) {
                    var e = this;
                    if (e.__events) {
                        var n = t.Canvas.prototype.__events;
                        r.augment(t.Canvas, {
                            __events: function() {
                                n && n.call(this), e.__events.call(this)
                            }
                        })
                    }
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(19),
                r = {
                    dot: n(140),
                    rect: n(141)
                };
            i.tree = r, t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(66),
                r = function(t) {
                    return new i({
                        dims: t
                    })
                };
            t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(66),
                a = "..x",
                s = "..y",
                o = function(t) {
                    return new r({
                        dims: t,
                        getStatObject: function(t, e) {
                            var n = i.mix({}, t);
                            return n[a] = [e.start.x, e.start.x, e.end.x, e.end.x], n[s] = [e.start.y, e.end.y, e.end.y, e.start.y], n
                        }
                    })
                };
            t.exports = o
        },
        function(t, e, n) {
            var i = n(144);
            if (window.G) {
                new i(window.G)
            } else t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(35),
                a = function(t) {
                    this.canvas = t, this.el = t.get("el"), this.current = null, this.pre = null
                };
            i.augment(a, {
                tryTrigger: function(t, e) {
                    t.__listeners && t.trigger(e)
                },
                getCurrent: function(t) {
                    var e = this.canvas,
                        n = e.getPointByClient(t.clientX, t.clientY);
                    this.point = n, this.pre = this.current, this.current = e.getShape(n.x, n.y)
                },
                mousemove: function(t) {
                    this.getCurrent(t);
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-mousemove")) {
                        var i = new r("canvas-mousemove", t, (!0), (!0));
                        i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = n, this.tryTrigger(n, i)
                    }
                    if (this.pre && this.pre !== this.current) {
                        var a = new r("mouseleave", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.pre, a.target = this.pre, this.tryTrigger(this.pre, a)
                    }
                    if (this.current) {
                        var s = new r("mousemove", t, (!0), (!0));
                        if (s.x = e.x, s.y = e.y, s.clientX = t.clientX, s.clientY = t.clientY, s.currentTarget = this.current, s.target = this.current, this.tryTrigger(this.current, s), this.pre !== this.current) {
                            var o = new r("mouseenter", t, (!0), (!0));
                            o.x = e.x, o.y = e.y, o.clientX = t.clientX, o.clientY = t.clientY, o.currentTarget = this.current, o.target = this.current, this.tryTrigger(this.current, o)
                        }
                    }
                },
                mousedown: function(t) {
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-mousedown")) {
                        var i = new r("canvas-mousedown", t, (!0), (!0));
                        i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = n, this.tryTrigger(n, i)
                    }
                    if (this.current) {
                        var a = new r("mousedown", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
                    }
                },
                mouseup: function(t) {
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-mouseup")) {
                        var i = new r("canvas-mouseup", t, (!0), (!0));
                        i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = n, this.tryTrigger(n, i)
                    }
                    if (this.current) {
                        var a = new r("mouseup", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
                    }
                },
                click: function(t) {
                    this.getCurrent(t);
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-click")) {
                        var i = new r("canvas-click", t, (!0), (!0));
                        i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = n, this.tryTrigger(n, i)
                    }
                    if (this.current) {
                        var a = new r("click", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
                    }
                },
                dblclick: function(t) {
                    var e = this.point,
                        n = this.canvas;
                    if (n.has("canvas-dblclick")) {
                        var i = new r("canvas-dblclick", t, (!0), (!0));
                        i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = n, this.tryTrigger(n, i)
                    }
                    if (this.current) {
                        var a = new r("dblclick", t, (!0), (!0));
                        a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
                    }
                },
                mouseout: function(t) {
                    var e = this.point,
                        n = this.canvas,
                        i = new r("canvas-mouseleave", t, (!0), (!0));
                    i.x = e.x, i.y = e.y, i.currentTarget = n, this.tryTrigger(n, i)
                },
                mouseover: function(t) {
                    var e = (this.point, this.canvas),
                        n = new r("canvas-mouseenter", t, (!0), (!0));
                    n.currentTarget = e, this.tryTrigger(e, n)
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                this.name = "mouseEvent", this.type = "event", i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(143),
                s = n(137);
            r.extend(i, s), r.augment(i, {
                __events: function() {
                    var t = this,
                        e = t.get("el"),
                        n = new a(this);
                    e.addEventListener("mouseout", function(t) {
                        n.mouseout(t)
                    }, !1), e.addEventListener("mouseover", function(t) {
                        n.mouseover(t)
                    }, !1), e.addEventListener("mousemove", function(t) {
                        n.mousemove(t)
                    }, !1), e.addEventListener("mousedown", function(t) {
                        n.mousedown(t)
                    }, !1), e.addEventListener("mouseup", function(t) {
                        n.mouseup(t)
                    }, !1), e.addEventListener("click", function(t) {
                        n.click(t)
                    }, !1), e.addEventListener("dblclick", function(t) {
                        n.dblclick(t)
                    }, !1)
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                return e = e || 1, new r({
                    dims: t,
                    ratio: e,
                    mode: n
                })
            }
            var r = n(146),
                a = function(t, e) {
                    return i(t, e, "squarify")
                };
            a.squarify = function(t, e) {
                return i(t, e, "squarify")
            }, a.sliceDice = function(t, e) {
                return i(t, e, "slice-dice")
            }, t.exports = a
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                return 1 - t
            }
            var r = n(1),
                a = n(19),
                s = n(131),
                o = n(2),
                u = "..x",
                c = "..y",
                l = "_value",
                h = function(t) {
                    h.superclass.constructor.call(this, t)
                };
            r.extend(h, a), r.augment(h, {
                type: "treemap",
                mode: "squarify",
                ratio: 1,
                getValueField: function() {
                    var t = this.getDims();
                    return t[3] || l
                },
                getChildrenField: function() {
                    var t = this.getDims();
                    return t[2]
                },
                initDims: function(t) {
                    t.unshift(c), t.unshift(u)
                },
                _copyObject: function(t) {
                    var e = r.mix({}, t);
                    return e
                },
                _extractData: function(t, e) {
                    for (var n = this, a = t.length - 1; a >= 0; a--) {
                        var s = t[a],
                            o = n._copyObject(s);
                        o[u] = [], o[c] = [], o[u].push(s.x), o[c].push(i(s.y + s.dy)), o[u].push(s.x), o[c].push(i(s.y)), o[u].push(s.x + s.dx), o[c].push(i(s.y)), o[u].push(s.x + s.dx), o[c].push(i(s.y + s.dy)), e.push(o);
                        var l = n.getChildrenField();
                        r.isArray(s[l]) && n._extractData(s[l], e)
                    }
                },
                exec: function(t) {
                    var e = this,
                        n = [],
                        i = o.merge.apply(null, t);
                    return n.push(e.execFrame(i)), n
                },
                execFrame: function(t) {
                    var e = this,
                        n = t.toJSON(),
                        i = (e.getDims(), new s.Squarify({
                            nodes: n,
                            mode: e.mode,
                            childrenField: e.getChildrenField(),
                            valueField: e.getValueField(),
                            ratio: e.ratio
                        })),
                        r = i.getNodes(),
                        n = [];
                    e._extractData(r, n);
                    var t = new o(n);
                    return t
                }
            }), t.exports = h
        },
        function(t, e, n) {
            var i = n(148);
            i.Tween = n(69), i.Ease = n(67), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(47),
                r = n(18),
                a = n(149),
                s = function(t) {
                    s.superclass.constructor.call(this, t), this._init()
                };
            i.extend(s, r), s.ATTRS = {
                time: 0,
                createTime: null,
                playTime: null,
                pauseTimeSpace: 0,
                available: !1,
                canvases: [],
                tweens: [],
                endTime: 0,
                infinite: !1,
                removeCanvas: !0,
                autoPlay: !1,
                autoDraw: !0,
                loop: !1,
                status: "silent",
                autoDestroy: !0
            }, i.augment(s, {
                _init: function() {
                    window.tween = this;
                    var t = this.get("autoPlay");
                    this.set("createTime", +new Date), t && this.play()
                },
                _trySetEndTime: function(t) {
                    var e = this;
                    i.isObject(t) ? e._setEndTime(t) : i.isArray(t) && i.each(t, function(t, n) {
                        e._setEndTime(t)
                    })
                },
                _trySetCanvases: function(t) {
                    var e = this;
                    i.isObject(t) ? e._setCanvases(t) : i.isArray(t) && i.each(t, function(t, n) {
                        e._setCanvases(t)
                    })
                },
                _setEndTime: function(t) {
                    var e = this.get("endTime"),
                        n = t.get("endTime");
                    n > e && this.set("endTime", n)
                },
                _setCanvases: function(t) {
                    var e = t.get("canvas"),
                        n = this.get("canvases");
                    n.indexOf(e) === -1 && n.push(e)
                },
                _resetTweens: function() {
                    var t = this.get("tweens");
                    t.sort(function(t, e) {
                        return e.get("startTime") - t.get("startTime")
                    }), i.each(t, function(t) {
                        t.reset()
                    })
                },
                _getTime: function() {
                    var t = this.get("playTime"),
                        e = this.get("pauseTimeSpace");
                    return +new Date - t + e
                },
                _refresh: function(t) {
                    for (var e, n, r = this.get("tweens"), a = this.get("canvases"), s = this.get("autoDraw"), o = this.get("autoDestroy"), u = this.get("removeCanvas"), c = [], l = [], h = 0; h < r.length; h++) n = r[h], e = n.get("canvas"), n.get("needsDestroy") && o ? n.destroy() : n.get("destroyed") || n.get("needsDestroy") || n.tryStep(t), n.destroyed || c.push(n), i.inArray(a, e) || l.push(e);
                    s && this.draw(), u && this.set("canvases", l), this.set("tweens", c)
                },
                _update: function() {
                    if (this.get("available")) {
                        var t = this,
                            e = t._getTime(),
                            n = t.get("endTime"),
                            r = t.get("loop"),
                            a = t.get("infinite"),
                            s = t.get("tweens");
                        t._refresh(e), t.fire("update"), i.requestAnimationFrame(function() {
                            e <= n + 32 || a || s.length > 0 ? t._update() : t._tryShut(), e > n && r && (t.set("pauseTimeSpace", 0), t._resetTweens(), t.set("playTime", +new Date))
                        })
                    }
                },
                _tryShut: function() {
                    var t = this;
                    setTimeout(function() {
                        var e = t._getTime(),
                            n = t.get("endTime"),
                            i = t.get("tweens");
                        e <= n + 100 && i.length > 0 ? t._update() : (t.reset(), t.set("status", "silent"))
                    }, 100)
                },
                animate: function(t, e) {
                    var n = new a({
                        target: t,
                        timeline: this,
                        startTime: e ? e : 0
                    });
                    return n
                },
                add: function(t) {
                    var e, n = this.get("tweens");
                    return i.isArray(t) ? e = n.concat(t) : i.isObject(t) && "tween" === t.get("type") ? (n.push(t), e = n) : console.error("Timeline not Support this type"), this.set("tweens", e), this._trySetCanvases(t), this._trySetEndTime(t), this._removeOverdueTweens(), this
                },
                _removeOverdueTweens: function() {
                    var t = this.get("tweens"),
                        e = this.getNow();
                    i.each(t, function(n, r) {
                        i.isObject(n) && n.get("endTime") < e && n.get("needsDestroy") && (n.destroyed || n.destroy(), t.splice(r, 1))
                    })
                },
                getNow: function() {
                    var t = this.get("playTime");
                    return t ? +new Date - t : 0
                },
                getTime: function() {
                    var t = this.get("playTime");
                    return t ? +new Date - t : 0
                },
                play: function() {
                    var t = this.get("status");
                    return "silent" === t && (this.set("playTime", +new Date), this.set("available", !0), this.set("status", "playing"), this._update()), this
                },
                loop: function(t) {
                    return t || void 0 === t ? (this.set("infinite", !0), this.set("autoDestroy", !1), this.set("removeCanvas", !1), this.set("loop", !0)) : this.set("loop", !1), this
                },
                stop: function() {
                    this.set("status", "silent"), this.set("available", !1), this.set("pauseTimeSpace", 0), this._resetTweens(), this._refresh(0), this.draw()
                },
                pause: function() {
                    var t = this.get("available");
                    return t && this.set("pauseTimeSpace", +new Date - this.get("playTime")), this.set("available", !1), this.set("status", "silent"), this
                },
                reset: function() {
                    this.set("playTime", 0), this.set("endTime", 0), this.set("canvases", [])
                },
                draw: function() {
                    for (var t, e = this.get("canvases"), n = 0; n < e.length; n++) t = e[n], !t.get("destroyed") && t.draw()
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(47),
                r = n(68),
                a = n(18),
                s = n(69),
                o = n(3),
                u = (o.Matrix3, function(t) {
                    u.superclass.constructor.call(this, t)
                });
            i.extend(u, a), u.ATTRS = {
                target: null,
                timeline: null,
                startTime: null
            }, i.augment(u, {
                append: function(t, e, n, a) {
                    var o, u = i.guid("tween_"),
                        c = this.get("target"),
                        l = (this.get("tweens"), this.get("timeline")),
                        h = this.get("startTime"),
                        f = r.getKeyFrameByProps(c, e),
                        g = f[1];
                    return t = t ? t : h, e && e.delay && (t += e.delay), o = new s({
                        id: u,
                        canvas: c.get("canvas"),
                        startTime: t,
                        target: c,
                        easing: n,
                        callBack: a,
                        endKeyFrame: g,
                        duration: e.duration ? e.duration : 1e3,
                        repeat: !!e.repeat && e.repeat,
                        destroyTarget: !!e.destroy && e.destroy
                    }), l && l.add(o), this
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(152),
                a = n(153),
                s = n(72),
                o = n(151),
                u = n(3),
                c = u.Vector3,
                l = function() {};
            i.augment(l, {
                canFill: !1,
                canStroke: !1,
                initAttrs: function(t) {
                    return this.__attrs = {}, this.attr(i.mix({}, this.getDefaultAttrs(), t)), this
                },
                getDefaultAttrs: function() {
                    var t = this,
                        e = t.constructor,
                        n = e.__attrs;
                    return i.mix(!0, {}, n)
                },
                attr: function(t, e) {
                    var n = this;
                    if (0 === arguments.length) return n.__attrs;
                    if (i.isObject(t)) return i.each(t, function(t, e) {
                        n._setAttr(e, t)
                    }), n.__afterSetAttrAll && n.__afterSetAttrAll(t), n;
                    if (2 === arguments.length) {
                        if (n._setAttr(t, e) !== !1) {
                            var r = "__afterSetAttr" + i.ucfirst(t);
                            n[r] && n[r](e)
                        }
                        return n
                    }
                    return n._getAttr(t)
                },
                resetAttrs: function() {
                    var t = this,
                        e = t,
                        n = t.get("context"),
                        o = e.__attrs;
                    e.isGroup ? i.each(o, function(t, a) {
                        r[a] && ("fillStyle" === a && (t = s.parseStyle(t, e, o.fillOpacity)), "strokeStyle" === a && (t = s.parseStyle(t, e, o.strokeOpacity)), "lineDash" === a && n.setLineDash ? i.isArray(t) ? n.setLineDash(t) : i.isString(t) && n.setLineDash(t.split(" ")) : n[a] = t)
                    }) : i.each(o, function(t, r) {
                        a[r] && ("fillStyle" === r && (t = s.parseStyle(t, e, o.fillOpacity)), "strokeStyle" === r && (t = s.parseStyle(t, e, o.strokeOpacity)), "lineDash" === r && n.setLineDash ? i.isArray(t) ? n.setLineDash(t) : i.isString(t) && n.setLineDash(t.split(" ")) : n[r] = t)
                    })
                },
                _getAttr: function(t) {
                    var e = this,
                        n = e.__attrs[t],
                        r = "__getAttr" + i.ucfirst(t);
                    return e[r] && (n = e[r](n)), n
                },
                _setAttr: function(t, e) {
                    var n = this,
                        r = "__setAttr" + i.ucfirst(t);
                    return n[r] && (e = n[r](e, n.__attrs[t])), e !== n.__attrs[t] && (n.__attrs[t] = e, n)
                },
                __setAttrFill: function(t) {
                    var e = this;
                    if (e.canFill) return e.__attrs.fillStyle = t, t
                },
                hasFill: function() {
                    if (this.canFill)
                        for (var t = this; t;) {
                            if (t.__attrs.fill) return t.__attrs.fill;
                            t = t.get("parent")
                        }
                },
                __setAttrStroke: function(t) {
                    var e = this;
                    if (e.canStroke) return this.__attrs.strokeStyle = t, t
                },
                hasStroke: function() {
                    if (this.canStroke)
                        for (var t = this; t;) {
                            if (t.__attrs.stroke) return t.__attrs.stroke;
                            t = t.get("parent")
                        }
                },
                __setAttrOpacity: function(t) {
                    return this.__attrs.globalAlpha = t, t
                },
                __getAttrOpacity: function() {
                    return this.__attrs.globalAlpha
                },
                __setAttrLineWidth: function(t, e) {
                    return t >= 0 ? t : e || 1
                },
                __setAttrClip: function(t) {
                    var e = this;
                    if (t && t.type in o) return null === t.get("canvas") && (t = i.clone(t)), t.set("parent", e.get("parent")), t.set("context", e.get("context")), t.inside = function(n, i) {
                        var r = new c(n, i, 1);
                        return t.invert(r, e.get("canvas")), t.__isPointInFill(r.x, r.y)
                    }, t
                }
            }), t.exports = l
        },
        function(t, e) {
            "use strict";
            t.exports = {
                circle: 1,
                ellipse: 1,
                fan: 1,
                polygon: 1,
                rect: 1,
                path: 1
            }
        },
        function(t, e) {
            "use strict";
            t.exports = {
                fillStyle: 1,
                strokeStyle: 1,
                globalAlpha: 1,
                shadowBlur: 1,
                shadowColor: 1,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                lineDash: 1
            }
        },
        function(t, e) {
            "use strict";
            t.exports = {
                fillStyle: 1,
                font: 1,
                globalAlpha: 1,
                lineCap: 1,
                lineWidth: 1,
                lineJoin: 1,
                miterLimit: 1,
                shadowBlur: 1,
                shadowColor: 1,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                strokeStyle: 1,
                textAlign: 1,
                textBaseline: 1,
                lineDash: 1
            }
        },
        function(t, e, n) {
            var i = n(5),
                r = n(71),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                init: function() {
                    a.superclass.init.call(this);
                    var t = this,
                        e = t.get("canvasId"),
                        n = t.get("el");
                    n = n ? n : document.getElementById(e), t.set("el", n), t.set("context", n.getContext("2d")), t.set("canvas", t), t.__events()
                },
                __events: function() {},
                getPointByClient: function(t, e) {
                    var n = this,
                        i = n.get("el"),
                        r = i.getBoundingClientRect(),
                        a = r.right - r.left,
                        s = r.bottom - r.top;
                    return {
                        x: (t - r.left) * (i.width / a),
                        y: (e - r.top) * (i.height / s)
                    }
                },
                getClientByPoint: function(t, e) {
                    var n = this,
                        i = n.get("el"),
                        r = i.getBoundingClientRect(),
                        a = r.right - r.left,
                        s = r.bottom - r.top;
                    return {
                        clientX: t / (i.width / a) + r.left,
                        clientY: e / (i.height / s) + r.top
                    }
                },
                beforeDraw: function() {
                    var t = this.get("context"),
                        e = this.get("el");
                    t.clearRect(0, 0, e.width, e.height)
                },
                draw: function() {
                    function t() {
                        e.set("animateHandler", i.requestAnimationFrame(function() {
                            e.set("animateHandler", void 0), e.get("toDraw") && t()
                        }));
                        try {
                            a.superclass.draw.call(e)
                        } catch (n) {
                            e.set("toDraw", !1)
                        }
                        e.set("toDraw", !1)
                    }
                    var e = this;
                    e.get("animateHandler") ? e.set("toDraw", !0) : t()
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = function() {};
            i.augment(r, {
                initEventDispatcher: function() {
                    this.__listeners = {}
                },
                on: function(t, e) {
                    var n = this.__listeners;
                    return i.isNull(n[t]) && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e), this
                },
                off: function(t, e) {
                    var n = this.__listeners;
                    return 0 === arguments.length ? (this.__listeners = {}, this) : 1 === arguments.length && i.isString(t) ? (n[t] = [], this) : 2 === arguments.length && i.isString(t) && i.isFunction(e) ? (i.remove(n[t], e), this) : void 0
                },
                has: function(t, e) {
                    var n = this.__listeners;
                    return 0 === arguments.length && !i.isBlank(n) || (!(1 !== arguments.length || !n[t] || i.isBlank(n[t])) || !(2 !== arguments.length || !n[t] || n[t].indexOf(e) === -1))
                },
                trigger: function(t) {
                    var e = this,
                        n = e.__listeners,
                        r = n[t.type];
                    if (t.target = e, i.notNull(r) && i.each(r, function(n) {
                            n.call(e, t)
                        }), t.bubbles) {
                        var a = e.get("parent");
                        a && !t.propagationStopped && a.trigger(t)
                    }
                    return e
                }
            }), t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(3),
                a = r.Matrix3,
                s = n(6),
                o = function() {};
            i.augment(o, {
                initTransform: function() {
                    this.__m = new a
                },
                translate: function(t, e) {
                    return this.__m.translate(t, e), this
                },
                rotate: function(t) {
                    return this.__m.rotate(s.degreeToRad(t)), this
                },
                scale: function(t, e) {
                    return this.__m.scale(t, e), this
                },
                transform: function(t) {
                    var e = this;
                    return i.each(t, function(t) {
                        switch (t[0]) {
                            case "t":
                                e.translate(t[1], t[2]);
                                break;
                            case "s":
                                e.scale(t[1], t[2]);
                                break;
                            case "r":
                                e.rotate(t[1]);
                                break;
                            case "m":
                                e.__m = a.multiply(t[1], e.__m)
                        }
                    }), this
                },
                setTransform: function(t) {
                    return this.__m.identity(), this.transform(t)
                },
                getMatrix: function() {
                    return this.__m
                },
                setMatrix: function(t) {
                    return this.__m = t, this
                },
                apply: function(t, e) {
                    var n = this;
                    e = e || n;
                    for (var r = n, s = []; r !== e;) s.unshift(r), r = r.get("parent");
                    s.unshift(r);
                    var o = new a;
                    return i.each(s, function(t) {
                        o.multiply(t.__m)
                    }), t.applyMatrix(o), this
                },
                invert: function(t, e) {
                    var n = this;
                    e = e || n;
                    for (var r = n, s = []; r !== e;) s.unshift(r), r = r.get("parent");
                    s.unshift(r);
                    var o = new a;
                    i.each(s, function(t) {
                        o.multiply(t.__m)
                    });
                    var u = o.getInverse();
                    return t.applyMatrix(u), this
                },
                resetTransform: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__m.to2DObject();
                    e.transform(n.a, n.b, n.c, n.d, n.e, n.f)
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(48),
                o = n(6),
                u = n(23),
                c = n(3),
                l = c.Vector2,
                h = n(13),
                f = function(t) {
                    f.superclass.constructor.call(this, t)
                };
            f.ATTRS = {
                x: 0,
                y: 0,
                r: 0,
                startAngle: 0,
                endAngle: 0,
                clockwise: !1,
                lineWidth: 1,
                arrow: !1
            }, i.extend(f, r), i.augment(f, {
                canStroke: !0,
                type: "arc",
                __setAttrR: function(t, e) {
                    return t >= 0 ? t : (h.warn("r \u5fc5\u987b\u5927\u4e8e0"), e)
                },
                __setAttrClockwise: function(t, e) {
                    return i.isBoolean(t) ? t : (h.warn("clockwise \u5fc5\u987b\u662fboolean\u503c"), e)
                },
                __setAttrStartAngle: function(t) {
                    return o.degreeToRad(t)
                },
                __getAttrStartAngle: function(t) {
                    return o.radToDegree(t)
                },
                __setAttrEndAngle: function(t) {
                    return o.degreeToRad(t)
                },
                __getAttrEndAngle: function(t) {
                    return o.radToDegree(t)
                },
                __afterSetAttrX: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY: function() {
                    this.__calculateBox()
                },
                __afterSetAttrR: function() {
                    this.__calculateBox()
                },
                __afterSetAttrStartAngle: function() {
                    this.__calculateBox()
                },
                __afterSetAttrEndAngle: function() {
                    this.__calculateBox()
                },
                __afterSetAttrClockwise: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this.__attrs,
                        e = t.x,
                        n = t.y,
                        i = t.r,
                        r = t.startAngle,
                        a = t.endAngle,
                        o = t.clockwise,
                        u = t.lineWidth,
                        c = s.box(e, n, i, r, a, o),
                        l = u / 2;
                    c.minX -= l, c.minY -= l, c.maxX += l, c.maxY += l, this.set("box", c)
                },
                isPointInPath: function(t, e) {
                    var n = this.__attrs,
                        i = n.x,
                        r = n.y,
                        s = n.r,
                        o = n.startAngle,
                        u = n.endAngle,
                        c = n.clockwise,
                        l = n.lineWidth;
                    return !!this.hasStroke() && a.arcline(i, r, s, o, u, c, l, t, e)
                },
                createPath: function() {
                    var t = this.get("context"),
                        e = this.__attrs,
                        n = e.x,
                        i = e.y,
                        r = e.r,
                        a = e.startAngle,
                        s = e.endAngle,
                        o = e.clockwise,
                        c = e.lineWidth,
                        h = e.arrow;
                    if (t.beginPath(), t.arc(n, i, r, a, s, o), h) {
                        var f = {
                                x: n + r * Math.cos(s),
                                y: i + r * Math.sin(s)
                            },
                            g = new l(-r * Math.sin(s), r * Math.cos(s));
                        o && g.multiplyScaler(-1), u.makeArrow(t, g, f, c)
                    }
                }
            }), t.exports = f
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(13),
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            o.ATTRS = {
                x: 0,
                y: 0,
                r: 0,
                lineWidth: 1
            }, i.extend(o, r), i.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "circle",
                __setAttrR: function(t, e) {
                    return t >= 0 ? t : (s.warn("r \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __afterSetAttrX: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY: function() {
                    this.__calculateBox()
                },
                __afterSetAttrR: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this.__attrs,
                        e = t.x,
                        n = t.y,
                        i = t.r,
                        r = t.lineWidth,
                        a = r / 2 + i;
                    this.set("box", {
                        minX: e - a,
                        minY: n - a,
                        maxX: e + a,
                        maxY: n + a
                    })
                },
                isPointInPath: function(t, e) {
                    var n = this.hasFill(),
                        i = this.hasStroke();
                    return n && i ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!i && this.__isPointInStroke(t, e)
                },
                __isPointInFill: function(t, e) {
                    var n = this.__attrs,
                        i = n.x,
                        r = n.y,
                        s = n.r;
                    return a.circle(i, r, s, t, e)
                },
                __isPointInStroke: function(t, e) {
                    var n = this.__attrs,
                        i = n.x,
                        r = n.y,
                        s = n.r,
                        o = n.lineWidth;
                    return a.arcline(i, r, s, 0, 2 * Math.PI, !1, o, t, e)
                },
                createPath: function() {
                    var t = this.get("context"),
                        e = this.__attrs,
                        n = e.x,
                        i = e.y,
                        r = e.r;
                    t.beginPath(), t.arc(n, i, r, 0, 2 * Math.PI, !1), t.closePath()
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(23),
                o = n(38),
                u = n(3),
                c = u.Vector2,
                l = function(t) {
                    l.superclass.constructor.call(this, t)
                };
            l.ATTRS = {
                p1: null,
                p2: null,
                p3: null,
                p4: null,
                lineWidth: 1,
                arrow: !1
            }, i.extend(l, r), i.augment(l, {
                canStroke: !0,
                type: "cubic",
                __afterSetAttrP1: function() {
                    this.__calculateBox()
                },
                __afterSetAttrP2: function() {
                    this.__calculateBox()
                },
                __afterSetAttrP3: function() {
                    this.__calculateBox()
                },
                __afterSetAttrP4: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t, e, n = this.__attrs,
                        r = n.p1,
                        a = n.p2,
                        s = n.p3,
                        u = n.p4;
                    if (!(i.isNull(r) || i.isNull(a) || i.isNull(s) || i.isNull(u))) {
                        var c = n.lineWidth / 2,
                            l = o.extrema(r[0], a[0], s[0], u[0]);
                        for (t = 0, e = l.length; t < e; t++) l[t] = o.at(r[0], a[0], s[0], u[0], l[t]);
                        var h = o.extrema(r[1], a[1], s[1], u[1]);
                        for (t = 0, e = h.length; t < e; t++) h[t] = o.at(r[1], a[1], s[1], u[1], h[t]);
                        l.push(r[0], u[0]), h.push(r[1], u[1]), this.set("box", {
                            minX: Math.min.apply(Math, l) - c,
                            maxX: Math.max.apply(Math, l) + c,
                            minY: Math.min.apply(Math, h) - c,
                            maxY: Math.max.apply(Math, h) + c
                        })
                    }
                },
                isPointInPath: function(t, e) {
                    var n = this.__attrs,
                        i = n.p1,
                        r = n.p2,
                        s = n.p3,
                        o = n.p4,
                        u = n.lineWidth;
                    return a.cubicline(i[0], i[1], r[0], r[1], s[0], s[1], o[0], o[1], u, t, e)
                },
                createPath: function() {
                    var t = this.get("context"),
                        e = this.__attrs,
                        n = e.p1,
                        r = e.p2,
                        a = e.p3,
                        o = e.p4,
                        u = e.lineWidth,
                        l = e.arrow;
                    if (!(i.isNull(n) || i.isNull(r) || i.isNull(a) || i.isNull(o)))
                        if (t.beginPath(), t.moveTo(n[0], n[1]), l) {
                            var h = new c(o[0] - a[0], o[1] - a[1]),
                                f = s.getEndPoint(h, new c(o[0], o[1]), u);
                            t.bezierCurveTo(r[0], r[1], a[0], a[1], f.x, f.y), s.makeArrow(t, h, f, u)
                        } else t.bezierCurveTo(r[0], r[1], a[0], a[1], o[0], o[1])
                },
                getPoint: function(t) {
                    var e = this.__attrs;
                    return {
                        x: o.at(e.p4[0], e.p3[0], e.p2[0], e.p1[0], t),
                        y: o.at(e.p4[1], e.p3[1], e.p2[1], e.p1[1], t)
                    }
                }
            }), t.exports = l
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(3),
                o = s.Matrix3,
                u = s.Vector3,
                c = n(13),
                l = function(t) {
                    l.superclass.constructor.call(this, t)
                };
            l.ATTRS = {
                x: 0,
                y: 0,
                rx: 1,
                ry: 1,
                lineWidth: 1
            }, i.extend(l, r), i.augment(l, {
                canFill: !0,
                canStroke: !0,
                type: "ellipse",
                __setAttrRx: function(t, e) {
                    return t > 0 ? t : (c.warn("rx \u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __setAttrRy: function(t, e) {
                    return t > 0 ? t : (c.warn("ry \u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __afterSetAttrX: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY: function() {
                    this.__calculateBox()
                },
                __afterSetAttrRx: function() {
                    this.__calculateBox()
                },
                __afterSetAttrRy: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this.__attrs,
                        e = t.x,
                        n = t.y,
                        i = t.rx,
                        r = t.ry,
                        a = t.lineWidth,
                        s = i + a / 2,
                        o = r + a / 2;
                    this.set("box", {
                        minX: e - s,
                        minY: n - o,
                        maxX: e + s,
                        maxY: n + o
                    })
                },
                isPointInPath: function(t, e) {
                    var n = this.hasFill(),
                        i = this.hasStroke();
                    return n && i ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!i && this.__isPointInStroke(t, e)
                },
                __isPointInFill: function(t, e) {
                    var n = this.__attrs,
                        i = n.x,
                        r = n.y,
                        s = n.rx,
                        c = n.ry,
                        l = s > c ? s : c,
                        h = s > c ? 1 : s / c,
                        f = s > c ? c / s : 1,
                        g = new u(t, e, 1),
                        d = new o;
                    d.scale(h, f), d.translate(i, r);
                    var p = d.getInverse();
                    return g.applyMatrix(p), a.circle(0, 0, l, g.x, g.y)
                },
                __isPointInStroke: function(t, e) {
                    var n = this.__attrs,
                        i = n.x,
                        r = n.y,
                        s = n.rx,
                        c = n.ry,
                        l = n.lineWidth,
                        h = s > c ? s : c,
                        f = s > c ? 1 : s / c,
                        g = s > c ? c / s : 1,
                        d = new u(t, e, 1),
                        p = new o;
                    p.scale(f, g), p.translate(i, r);
                    var v = p.getInverse();
                    return d.applyMatrix(v), a.arcline(0, 0, h, 0, 2 * Math.PI, !1, l, d.x, d.y)
                },
                createPath: function() {
                    var t = this.get("context"),
                        e = this.__attrs,
                        n = e.x,
                        i = e.y,
                        r = e.rx,
                        a = e.ry,
                        s = r > a ? r : a,
                        u = r > a ? 1 : r / a,
                        c = r > a ? a / r : 1,
                        l = new o;
                    l.scale(u, c), l.translate(n, i);
                    var h = l.to2DObject();
                    t.beginPath(), t.save(), t.transform(h.a, h.b, h.c, h.d, h.e, h.f), t.arc(0, 0, s, 0, 2 * Math.PI), t.restore(), t.closePath()
                }
            }), t.exports = l
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(6),
                o = n(48),
                u = n(3),
                c = u.Vector2,
                l = n(13),
                h = function(t) {
                    h.superclass.constructor.call(this, t)
                };
            h.ATTRS = {
                x: 0,
                y: 0,
                rs: 0,
                re: 0,
                startAngle: 0,
                endAngle: 0,
                clockwise: !1,
                lineWidth: 1
            }, i.extend(h, r), i.augment(h, {
                canFill: !0,
                canStroke: !0,
                type: "fan",
                __setAttrRs: function(t, e) {
                    return t >= 0 ? t : (l.warn("rs \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __setAttrRe: function(t, e) {
                    return t >= 0 ? t : (l.warn("re \u5fc5\u987b\u5927\u4e8e\u7b49\u4f600"), e)
                },
                __setAttrClockwise: function(t, e) {
                    return i.isBoolean(t) ? t : (l.warn("clockwise \u5fc5\u987b\u4e3aboolean\u503c"), e)
                },
                __setAttrStartAngle: function(t) {
                    return s.degreeToRad(t)
                },
                __getAttrStartAngle: function(t) {
                    return s.radToDegree(t)
                },
                __setAttrEndAngle: function(t) {
                    return s.degreeToRad(t)
                },
                __getAttrEndAngle: function(t) {
                    return s.radToDegree(t)
                },
                __afterSetAttrX: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY: function() {
                    this.__calculateBox()
                },
                __afterSetAttrRs: function() {
                    this.__calculateBox()
                },
                __afterSetAttrRe: function() {
                    this.__calculateBox()
                },
                __afterSetAttrStartAngle: function() {
                    this.__calculateBox()
                },
                __afterSetAttrEndAngle: function() {
                    this.__calculateBox()
                },
                __afterSetAttrClockwise: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        i = e.y,
                        r = e.rs,
                        a = e.re,
                        s = e.startAngle,
                        u = e.endAngle,
                        c = e.clockwise,
                        l = e.lineWidth,
                        h = o.box(n, i, r, s, u, c),
                        f = o.box(n, i, a, s, u, c),
                        g = Math.min(h.minX, f.minX),
                        d = Math.min(h.minY, f.minY),
                        p = Math.max(h.maxX, f.maxX),
                        v = Math.max(h.maxY, f.maxY),
                        m = l / 2;
                    this.set("box", {
                        minX: g - m,
                        minY: d - m,
                        maxX: p + m,
                        maxY: v + m
                    })
                },
                isPointInPath: function(t, e) {
                    var n = this.hasFill(),
                        i = this.hasStroke();
                    return n && i ? this.__isPointInFill(t, e) || this.__isPointInStroke(t, e) : n ? this.__isPointInFill(t, e) : !!i && this.__isPointInStroke(t, e)
                },
                __isPointInFill: function(t, e) {
                    var n = this.__attrs,
                        i = n.x,
                        r = n.y,
                        a = n.rs,
                        u = n.re,
                        l = n.startAngle,
                        h = n.endAngle,
                        f = n.clockwise,
                        g = new c(1, 0),
                        d = new c(t - i, e - r),
                        p = g.angleTo(d),
                        v = o.nearAngle(p, l, h, f);
                    if (s.equal(p, v)) {
                        var m = d.lengthSq();
                        if (a * a <= m && m <= u * u) return !0
                    }
                    return !1
                },
                __isPointInStroke: function(t, e) {
                    var n = this.__attrs,
                        i = n.x,
                        r = n.y,
                        s = n.rs,
                        o = n.re,
                        u = n.startAngle,
                        c = n.endAngle,
                        l = n.clockwise,
                        h = n.lineWidth,
                        f = {
                            x: Math.cos(u) * s + i,
                            y: Math.sin(u) * s + r
                        },
                        g = {
                            x: Math.cos(u) * o + i,
                            y: Math.sin(u) * o + r
                        },
                        d = {
                            x: Math.cos(c) * s + i,
                            y: Math.sin(c) * s + r
                        },
                        p = {
                            x: Math.cos(c) * o + i,
                            y: Math.sin(c) * o + r
                        };
                    return !!a.line(f.x, f.y, g.x, g.y, h, t, e) || (!!a.line(d.x, d.y, p.x, p.y, h, t, e) || (!!a.arcline(i, r, s, u, c, l, h, t, e) || !!a.arcline(i, r, o, u, c, l, h, t, e)))
                },
                createPath: function() {
                    var t = this.get("context"),
                        e = this.__attrs,
                        n = e.x,
                        i = e.y,
                        r = e.rs,
                        a = e.re,
                        s = e.startAngle,
                        o = e.endAngle,
                        u = e.clockwise,
                        c = {
                            x: Math.cos(s) * r + n,
                            y: Math.sin(s) * r + i
                        },
                        l = {
                            x: Math.cos(s) * a + n,
                            y: Math.sin(s) * a + i
                        },
                        h = {
                            x: Math.cos(o) * r + n,
                            y: Math.sin(o) * r + i
                        };
                    t.beginPath(), t.moveTo(c.x, c.y), t.lineTo(l.x, l.y), t.arc(n, i, a, s, o, u), t.lineTo(h.x, h.y), t.arc(n, i, r, o, s, !u), t.closePath()
                }
            }), t.exports = h
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(13),
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            o.ATTRS = {
                x: 0,
                y: 0,
                img: void 0,
                width: 0,
                height: 0,
                sx: null,
                sy: null,
                swidth: null,
                sheight: null
            }, i.extend(o, r), i.augment(o, {
                type: "image",
                getDefaultAttrs: function() {
                    return o.ATTRS
                },
                __setAttrWidth: function(t, e) {
                    return t >= 0 ? t : (s.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __setAttrHeight: function(t, e) {
                    return t >= 0 ? t : (s.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __afterSetAttrX: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY: function() {
                    this.__calculateBox()
                },
                __afterSetAttrWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrHeight: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this.__attrs,
                        e = t.x,
                        n = t.y,
                        i = t.width,
                        r = t.height;
                    this.set("box", {
                        minX: e,
                        minY: n,
                        maxX: e + i,
                        maxY: n + r
                    })
                },
                isPointInPath: function(t, e) {
                    var n = this.__attrs;
                    if (this.get("toDraw") || !n.img) return !1;
                    var i = n.x,
                        r = n.y,
                        s = n.width,
                        o = n.height;
                    return a.rect(i, r, s, o, t, e)
                },
                __setLoading: function(t) {
                    var e = this.get("canvas");
                    return t === !1 && this.get("toDraw") === !0 && (this.__cfg.loading = !1, e.draw()), t
                },
                __setAttrImg: function(t) {
                    var e = this,
                        n = e.__attrs;
                    if (!i.isString(t)) return t instanceof Image ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : t instanceof HTMLElement && i.isString(t.nodeName) && "CANVAS" === t.nodeName.toUpperCase() ? (n.width || e.attr("width", Number(t.getAttribute("width"))), n.height || e.attr("height", Number(t.getAttribute("height"))), t) : t instanceof ImageData ? (n.width || e.attr("width", t.width), n.height || e.attr("height", t.height), t) : void 0;
                    var r = new Image;
                    r.onload = function() {
                        if (e.get("destroyed")) return !1;
                        e.attr("imgSrc", t), e.attr("img", r);
                        var n = e.get("callback");
                        n && n.call(e), e.set("loading", !1)
                    }, r.src = t, e.set("loading", !0)
                },
                drawInner: function() {
                    return this.get("loading") ? void this.set("toDraw", !0) : void this.__drawImage()
                },
                __drawImage: function() {
                    var t = this.get("context"),
                        e = this.__attrs,
                        n = e.x,
                        r = e.y,
                        a = e.img,
                        s = e.width,
                        o = e.height,
                        u = e.sx,
                        c = e.sy,
                        l = e.swidth,
                        h = e.sheight;
                    if (this.set("toDraw", !1), a instanceof Image || a instanceof HTMLElement && i.isString(a.nodeName) && "CANVAS" === a.nodeName.toUpperCase()) {
                        if (i.isNull(u) || i.isNull(c) || i.isNull(l) || i.isNull(h)) return void t.drawImage(a, n, r, s, o);
                        if (i.notNull(u) && i.notNull(c) && i.notNull(l) && i.notNull(h)) return void t.drawImage(a, u, c, l, h, n, r, s, o)
                    } else if (a instanceof ImageData) return void t.putImageData(a, n, r, u || 0, c || 0, l || s, h || o)
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(3),
                o = s.Vector2,
                u = n(23),
                c = n(49),
                l = function(t) {
                    l.superclass.constructor.call(this, t)
                };
            l.ATTRS = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                lineWidth: 1,
                arrow: !1
            }, i.extend(l, r), i.augment(l, {
                canStroke: !0,
                type: "line",
                __afterSetAttrX1: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY1: function() {
                    this.__calculateBox()
                },
                __afterSetAttrX2: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY2: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this.__attrs,
                        e = t.x1,
                        n = t.y1,
                        i = t.x2,
                        r = t.y2,
                        a = t.lineWidth;
                    this.set("box", c.box(e, n, i, r, a))
                },
                isPointInPath: function(t, e) {
                    var n = this.__attrs,
                        i = n.x1,
                        r = n.y1,
                        s = n.x2,
                        o = n.y2,
                        u = n.lineWidth;
                    return !!this.hasStroke() && a.line(i, r, s, o, u, t, e)
                },
                createPath: function() {
                    var t = this.get("context"),
                        e = this.__attrs,
                        n = e.x1,
                        i = e.y1,
                        r = e.x2,
                        a = e.y2,
                        s = e.arrow,
                        c = e.lineWidth;
                    if (t.beginPath(), t.moveTo(n, i), s) {
                        var l = new o(r - n, a - i),
                            h = u.getEndPoint(l, new o(r, a), c);
                        t.lineTo(h.x, h.y), u.makeArrow(t, l, h, c)
                    } else t.lineTo(r, a)
                },
                getPoint: function(t) {
                    var e = this.__attrs;
                    return {
                        x: c.at(e.x1, e.x2, t),
                        y: c.at(e.y1, e.y2, t)
                    }
                }
            }), t.exports = l
        },
        function(t, e) {
            "use strict";

            function n(t, e, n, i, r) {
                return e * Math.cos(t) * Math.cos(r) - n * Math.sin(t) * Math.sin(r) + i
            }

            function i(t, e, n, i, r) {
                return e * Math.sin(t) * Math.cos(r) + n * Math.cos(t) * Math.sin(r) + i
            }

            function r(t, e, n) {
                return Math.atan(-n / e * Math.tan(t))
            }

            function a(t, e, n) {
                return Math.atan(n / (e * Math.tan(t)))
            }
            t.exports = {
                xAt: n,
                yAt: i,
                xExtrema: r,
                yExtrema: a
            }
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(171),
                s = n(72),
                o = n(23),
                u = n(3),
                c = n(79),
                l = n(38),
                h = u.Vector2,
                f = function(t) {
                    f.superclass.constructor.call(this, t)
                };
            f.ATTRS = {
                path: null,
                lineWidth: 1
            }, i.extend(f, r), i.augment(f, {
                curve: null,
                tCache: null,
                canFill: !0,
                canStroke: !0,
                type: "path",
                __afterSetAttrPath: function(t) {
                    var e = this;
                    if (i.isNull(t)) return e.set("segments", null), void e.set("box", void 0);
                    var n, r = s.parsePath(t),
                        o = [];
                    !i.isArray(r) || 0 === r.length || "M" !== r[0][0] && "m" !== r[0][0] || (i.each(r, function(t) {
                        n = new a(t, n), o.push(n)
                    }), e.set("segments", o), e.set("tCache", null), e.__calculateBox())
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function(t) {
                    t.path ? this.__afterSetAttrPath(t.path) : this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.lineWidth,
                        r = t.get("segments");
                    if (r) {
                        var a = 1 / 0,
                            s = -(1 / 0),
                            o = 1 / 0,
                            u = -(1 / 0);
                        if (1 === r.length) return void this.set("box", {
                            minX: 0,
                            minY: 0,
                            maxX: 0,
                            maxY: 0
                        });
                        i.each(r, function(t) {
                            t.getBBox(n);
                            var e = t.box;
                            e && (e.minX < a && (a = e.minX), e.maxX > s && (s = e.maxX), e.minY < o && (o = e.minY), e.maxY > u && (u = e.maxY))
                        }), this.set("box", {
                            minX: a,
                            minY: o,
                            maxX: s,
                            maxY: u
                        })
                    }
                },
                isPointInPath: function(t, e) {
                    var n = this,
                        i = n.hasFill(),
                        r = n.hasStroke();
                    return i && r ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : i ? n.__isPointInFill(t, e) : !!r && n.__isPointInStroke(t, e)
                },
                __isPointInFill: function(t, e) {
                    var n = this,
                        i = n.get("context");
                    if (i) return n.createPath(), i.isPointInPath(t, e)
                },
                __isPointInStroke: function(t, e) {
                    for (var n = this, i = n.get("segments"), r = n.__attrs, a = r.lineWidth, s = 0, o = i.length; s < o; s++)
                        if (i[s].isInside(t, e, a)) return !0;
                    return !1
                },
                __setTcache: function() {
                    var t, e, n, r, a = 0,
                        s = 0,
                        o = [],
                        u = this.curve;
                    u && (i.each(u, function(t, e) {
                        n = u[e + 1], r = t.length, n && (a += l.len(t[r - 2], t[r - 1], n[1], n[2], n[3], n[4], n[5], n[6]))
                    }), i.each(u, function(i, c) {
                        n = u[c + 1], r = i.length, n && (t = [], t[0] = s / a, e = l.len(i[r - 2], i[r - 1], n[1], n[2], n[3], n[4], n[5], n[6]), s += e, t[1] = s / a, o.push(t))
                    }), this.tCache = o)
                },
                __calculateCurve: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.path;
                    this.curve = c.toCurve(n)
                },
                getPoint: function(t) {
                    var e, n, r, a, s, o, u = this.tCache;
                    return null === u && (this.__calculateCurve(), this.__setTcache(), u = this.tCache), e = this.curve, u ? (i.each(u, function(e, i) {
                        t >= e[0] && t <= e[1] && (n = (t - e[0]) / (e[1] - e[0]), r = i)
                    }), a = e[r], i.isNull(a) || i.isNull(r) ? null : (s = a.length, o = e[r + 1], {
                        x: l.at(a[s - 2], o[1], o[3], o[5], 1 - n),
                        y: l.at(a[s - 1], o[2], o[4], o[6], 1 - n)
                    })) : e ? {
                        x: e[0][1],
                        y: e[0][2]
                    } : null
                },
                createPath: function() {
                    var t = this,
                        e = t.__attrs,
                        n = t.get("context"),
                        r = t.get("segments"),
                        a = e.lineWidth,
                        s = e.arrow;
                    if (i.isArray(r)) {
                        n.beginPath();
                        for (var u = 0, c = r.length; u < c; u++)
                            if (u === c - 1 && s) {
                                var l = r[u],
                                    f = r[u].endTangent,
                                    g = {
                                        x: l.params[l.params.length - 1].x,
                                        y: l.params[l.params.length - 1].y
                                    };
                                if (l && i.isFunction(f)) {
                                    var d = f(),
                                        p = o.getEndPoint(d, new h(g.x, g.y), a);
                                    l.params[l.params.length - 1] = p, r[u].draw(n), o.makeArrow(n, d, p, a), l.params[l.params.length - 1] = g
                                }
                            } else r[u].draw(n)
                    }
                }
            }), t.exports = f
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            s.ATTRS = {
                points: null,
                lineWidth: 1
            }, i.extend(s, r), i.augment(s, {
                canFill: !0,
                canStroke: !0,
                type: "polygon",
                __afterSetAttrPoints: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.points,
                        r = e.lineWidth;
                    if (n && 0 !== n.length) {
                        var a = 1 / 0,
                            s = 1 / 0,
                            o = -(1 / 0),
                            u = -(1 / 0);
                        i.each(n, function(t) {
                            var e = t[0],
                                n = t[1];
                            e < a && (a = e), e > o && (o = e), n < s && (s = n), n > u && (u = n)
                        });
                        var c = r / 2;
                        t.set("box", {
                            minX: a - c,
                            minY: s - c,
                            maxX: o + c,
                            maxY: u + c
                        })
                    }
                },
                isPointInPath: function(t, e) {
                    var n = this,
                        i = n.hasFill(),
                        r = n.hasStroke();
                    return i && r ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : i ? n.__isPointInFill(t, e) : !!r && n.__isPointInStroke(t, e)
                },
                __isPointInFill: function(t, e) {
                    var n = this,
                        i = n.get("context");
                    return n.createPath(), i.isPointInPath(t, e)
                },
                __isPointInStroke: function(t, e) {
                    var n = this,
                        i = n.__attrs,
                        r = i.points;
                    if (r.length < 2) return !1;
                    var s = i.lineWidth,
                        o = r.slice(0);
                    return r.length >= 3 && o.push(r[0]), a.polyline(o, s, t, e)
                },
                createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.points;
                    r.length < 2 || (e.beginPath(), i.each(r, function(t, n) {
                        0 === n ? e.moveTo(t[0], t[1]) : e.lineTo(t[0], t[1])
                    }), e.closePath())
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(3),
                o = s.Vector2,
                u = n(23),
                c = n(49),
                l = function(t) {
                    l.superclass.constructor.call(this, t)
                };
            l.ATTRS = {
                points: null,
                lineWidth: 1,
                arrow: !1,
                tCache: null
            }, i.extend(l, r), i.augment(l, {
                canStroke: !0,
                type: "polyline",
                tCache: null,
                __afterSetAttrPoints: function() {
                    this.__calculateBox(), this.__setTcache()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox(), this.__setTcache()
                },
                __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.lineWidth,
                        r = e.points;
                    if (r && 0 !== r.length) {
                        var a = 1 / 0,
                            s = 1 / 0,
                            o = -(1 / 0),
                            u = -(1 / 0);
                        i.each(r, function(t) {
                            var e = t[0],
                                n = t[1];
                            e < a && (a = e), e > o && (o = e), n < s && (s = n), n > u && (u = n)
                        });
                        var c = n / 2;
                        this.set("box", {
                            minX: a - c,
                            minY: s - c,
                            maxX: o + c,
                            maxY: u + c
                        })
                    }
                },
                __setTcache: function() {
                    var t, e, n = this,
                        r = n.__attrs,
                        a = r.points,
                        s = 0,
                        o = 0,
                        u = [];
                    a && 0 !== a.length && (i.each(a, function(t, e) {
                        a[e + 1] && (s += c.len(t[0], t[1], a[e + 1][0], a[e + 1][1]))
                    }), s <= 0 || (i.each(a, function(n, i) {
                        a[i + 1] && (t = [], t[0] = o / s, e = c.len(n[0], n[1], a[i + 1][0], a[i + 1][1]), o += e, t[1] = o / s, u.push(t))
                    }), this.tCache = u))
                },
                isPointInPath: function(t, e) {
                    var n = this,
                        i = n.__attrs;
                    if (n.hasStroke()) {
                        var r = i.points;
                        if (r.length < 2) return !1;
                        var s = i.lineWidth;
                        return a.polyline(r, s, t, e)
                    }
                    return !1
                },
                createPath: function() {
                    var t, e, n = this,
                        i = n.get("context"),
                        r = n.__attrs,
                        a = r.points,
                        s = r.arrow,
                        c = r.lineWidth;
                    if (!(a.length < 2)) {
                        for (i.beginPath(), i.moveTo(a[0][0], a[0][1]), e = 1, t = a.length - 1; e < t; e++) i.lineTo(a[e][0], a[e][1]);
                        if (s) {
                            var l = new o(a[t][0] - a[t - 1][0], a[t][1] - a[t - 1][1]),
                                h = u.getEndPoint(l, new o(a[t][0], a[t][1]), c);
                            i.lineTo(h.x, h.y), u.makeArrow(i, l, h, c)
                        } else i.lineTo(a[t][0], a[t][1])
                    }
                },
                getPoint: function(t) {
                    var e, n, r = this.__attrs,
                        a = r.points,
                        s = this.tCache;
                    return s ? (i.each(s, function(i, r) {
                        t >= i[0] && t <= i[1] && (e = (t - i[0]) / (i[1] - i[0]), n = r)
                    }), {
                        x: c.at(a[n][0], a[n + 1][0], e),
                        y: c.at(a[n][1], a[n + 1][1], e)
                    }) : a ? {
                        x: a[0][0],
                        y: a[0][1]
                    } : {}
                }
            }), t.exports = l
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(23),
                o = n(50),
                u = n(3),
                c = u.Vector2,
                l = function(t) {
                    l.superclass.constructor.call(this, t)
                };
            l.ATTRS = {
                p1: null,
                p2: null,
                p3: null,
                lineWidth: 1,
                arrow: !1
            }, i.extend(l, r), i.augment(l, {
                canStroke: !0,
                type: "quadratic",
                __afterSetAttrP1: function() {
                    this.__calculateBox()
                },
                __afterSetAttrP2: function() {
                    this.__calculateBox()
                },
                __afterSetAttrP3: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t, e, n = this,
                        r = n.__attrs,
                        a = r.p1,
                        s = r.p2,
                        u = r.p3;
                    if (!(i.isNull(a) || i.isNull(s) || i.isNull(u))) {
                        var c = r.lineWidth / 2,
                            l = o.extrema(a[0], s[0], u[0]);
                        for (t = 0, e = l.length; t < e; t++) l[t] = o.at(a[0], s[0], u[0], l[t]);
                        l.push(a[0], u[0]);
                        var h = o.extrema(a[1], s[1], u[1]);
                        for (t = 0, e = h.length; t < e; t++) h[t] = o.at(a[1], s[1], u[1], h[t]);
                        h.push(a[1], u[1]), n.set("box", {
                            minX: Math.min.apply(Math, l) - c,
                            maxX: Math.max.apply(Math, l) + c,
                            minY: Math.min.apply(Math, h) - c,
                            maxY: Math.max.apply(Math, h) + c
                        })
                    }
                },
                isPointInPath: function(t, e) {
                    var n = this,
                        i = n.__attrs,
                        r = i.p1,
                        s = i.p2,
                        o = i.p3,
                        u = i.lineWidth;
                    return a.quadraticline(r[0], r[1], s[0], s[1], o[0], o[1], u, t, e)
                },
                createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.p1,
                        a = n.p2,
                        o = n.p3,
                        u = n.lineWidth,
                        l = n.arrow;
                    if (!(i.isNull(r) || i.isNull(a) || i.isNull(o)))
                        if (e.beginPath(), e.moveTo(r[0], r[1]), l) {
                            var h = new c(o[0] - a[0], o[1] - a[1]),
                                f = s.getEndPoint(h, new c(o[0], o[1]), u);
                            e.quadraticCurveTo(a[0], a[1], f.x, f.y), s.makeArrow(e, h, f, u)
                        } else e.quadraticCurveTo(a[0], a[1], o[0], o[1])
                },
                getPoint: function(t) {
                    var e = this.__attrs;
                    return {
                        x: o.at(e.p1[0], e.p2[0], e.p3[0], t),
                        y: o.at(e.p1[1], e.p2[1], e.p3[1], t)
                    }
                }
            }), t.exports = l
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(13),
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            o.ATTRS = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                radius: 0,
                lineWidth: 1
            }, i.extend(o, r), i.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "rect",
                __setAttrWidth: function(t, e) {
                    return t >= 0 ? t : (s.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __setAttrHeight: function(t, e) {
                    return t >= 0 ? t : (s.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __setAttrRadius: function(t, e) {
                    return t >= 0 ? t : (s.warn("radius \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
                },
                __afterSetAttrX: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY: function() {
                    this.__calculateBox()
                },
                __afterSetAttrWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrHeight: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrAll: function() {
                    this.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        i = e.y,
                        r = e.width,
                        a = e.height,
                        s = e.lineWidth,
                        o = s / 2;
                    this.set("box", {
                        minX: n - o,
                        minY: i - o,
                        maxX: n + r + o,
                        maxY: i + a + o
                    })
                },
                isPointInPath: function(t, e) {
                    var n = this,
                        i = n.hasFill(),
                        r = n.hasStroke();
                    return i && r ? n.__isPointInFill(t, e) || n.__isPointInStroke(t, e) : i ? n.__isPointInFill(t, e) : !!r && n.__isPointInStroke(t, e)
                },
                __isPointInFill: function(t, e) {
                    var n = this.get("context");
                    return !!n && (this.createPath(), n.isPointInPath(t, e))
                },
                __isPointInStroke: function(t, e) {
                    var n = this,
                        i = n.__attrs,
                        r = i.x,
                        s = i.y,
                        o = i.width,
                        u = i.height,
                        c = i.radius,
                        l = i.lineWidth;
                    if (0 === c) {
                        var h = l / 2;
                        return a.line(r - h, s, r + o + h, s, l, t, e) || a.line(r + o, s - h, r + o, s + u + h, l, t, e) || a.line(r + o + h, s + u, r - h, s + u, l, t, e) || a.line(r, s + u + h, r, s - h, l, t, e)
                    }
                    return a.line(r + c, s, r + o - c, s, l, t, e) || a.line(r + o, s + c, r + o, s + u - c, l, t, e) || a.line(r + o - c, s + u, r + c, s + u, l, t, e) || a.line(r, s + u - c, r, s + c, l, t, e) || a.arcline(r + o - c, s + c, c, 1.5 * Math.PI, 2 * Math.PI, !1, l, t, e) || a.arcline(r + o - c, s + u - c, c, 0, .5 * Math.PI, !1, l, t, e) || a.arcline(r + c, s + u - c, c, .5 * Math.PI, Math.PI, !1, l, t, e) || a.arcline(r + c, s + c, c, Math.PI, 1.5 * Math.PI, !1, l, t, e)
                },
                createPath: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        i = n.x,
                        r = n.y,
                        a = n.width,
                        s = n.height,
                        o = n.radius;
                    e.beginPath(), 0 === o ? (e.moveTo(i, r), e.lineTo(i + a, r), e.lineTo(i + a, r + s), e.lineTo(i, r + s), e.lineTo(i, r)) : (e.moveTo(i + o, r), e.lineTo(i + a - o, r), e.arc(i + a - o, r + o, o, -Math.PI / 2, 0, !1), e.lineTo(i + a, r + s - o), e.arc(i + a - o, r + s - o, o, 0, Math.PI / 2, !1), e.lineTo(i + o, r + s), e.arc(i + o, r + s - o, o, Math.PI / 2, Math.PI, !1), e.lineTo(i, r + o), e.arc(i + o, r + o, o, Math.PI, 3 * Math.PI / 2, !1)), e.closePath()
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(5),
                r = n(7),
                a = n(8),
                s = n(13),
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            o.ATTRS = {
                x: 0,
                y: 0,
                text: null,
                fontSize: 12,
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "normal",
                fontVariant: "normal",
                textAlign: "start",
                textBaseline: "bottom",
                lineWidth: 1,
                lineCount: 1,
                lineHeight: null,
                textArr: null
            };
            var u = {
                    start: 1,
                    right: 1,
                    left: 1,
                    end: 1,
                    center: 1
                },
                c = {
                    top: 1,
                    middle: 1,
                    bottom: 1
                },
                l = {
                    normal: 1,
                    italic: 1,
                    oblique: 1
                },
                h = {
                    normal: 1,
                    "small-caps": 1
                },
                f = {
                    normal: 1,
                    bold: 1,
                    bolder: 1,
                    lighter: 1,
                    100: 1,
                    200: 1,
                    300: 1,
                    400: 1,
                    500: 1,
                    600: 1,
                    700: 1,
                    800: 1,
                    900: 1
                };
            i.extend(o, r), i.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "text",
                __setAttrTextAlign: function(t, e) {
                    return t in u ? t : e
                },
                __setAttrTextBaseline: function(t, e) {
                    return t in c ? t : e
                },
                __setAttrFontSize: function(t, e) {
                    return t >= 12 ? t : e
                },
                __setAttrFontStyle: function(t, e) {
                    return t in l ? t : e
                },
                __setAttrFontVariant: function(t, e) {
                    return t in h ? t : e
                },
                __setAttrFontWeight: function(t, e) {
                    return t in f ? t : e
                },
                __assembleFont: function() {
                    var t = this,
                        e = t.attr("fontSize"),
                        n = t.attr("fontFamily"),
                        i = t.attr("fontWeight"),
                        r = t.attr("fontStyle"),
                        a = t.attr("fontVariant");
                    t.attr("font", [r, a, i, e + "px", n].join(" "))
                },
                __afterSetAttrFontSize: function() {
                    this.attr({
                        height: this.__getTextHeight()
                    }), this.__assembleFont()
                },
                __afterSetAttrFontFamily: function() {
                    this.__assembleFont()
                },
                __afterSetAttrFontWeight: function() {
                    this.__assembleFont()
                },
                __afterSetAttrFontStyle: function() {
                    this.__assembleFont()
                },
                __afterSetAttrFontVariant: function() {
                    this.__assembleFont()
                },
                __afterSetAttrFont: function() {
                    this.attr("width", this.measureText())
                },
                __afterSetAttrText: function() {
                    var t, e = this.__attrs.text;
                    if (i.isString(e) && e.indexOf("\n") !== -1) {
                        t = e.split("\n");
                        var n = t.length;
                        this.attr("lineCount", n), this.attr("textArr", t)
                    }
                    this.attr("height", this.__getTextHeight()), this.attr("width", this.measureText())
                },
                __afterSetAttrTextAlign: function() {
                    this.__calculateBox()
                },
                __afterSetAttrTextBaseline: function() {
                    this.__calculateBox()
                },
                __afterSetAttrX: function() {
                    this.__calculateBox()
                },
                __afterSetAttrY: function() {
                    this.__calculateBox()
                },
                __afterSetAttrWidth: function() {
                    this.__calculateBox()
                },
                __afterSetAttrLineWidth: function() {
                    this.__calculateBox()
                },
                __getTextHeight: function() {
                    var t = this.__attrs,
                        e = t.lineCount,
                        n = t.fontSize,
                        i = this.__getSpaceingY();
                    return e > 1 ? n * e + i * (e - 1) : n
                },
                __afterSetAttrAll: function(t) {
                    var e = this;
                    "fontSize" in t && e.attr("height", t.fontSize), ("fontSize" in t || "fontWeight" in t || "fontStyle" in t || "fontVariant" in t || "fontFamily" in t) && e.__assembleFont(), "text" in t && e.__afterSetAttrText(t.text), e.__calculateBox()
                },
                __calculateBox: function() {
                    var t = this,
                        e = t.__attrs,
                        n = e.x,
                        i = e.y,
                        r = e.width;
                    if (!r) return void this.set("box", {
                        minX: n,
                        minY: i,
                        maxX: n,
                        maxY: i
                    });
                    var a = e.height,
                        s = e.textAlign,
                        o = e.textBaseline,
                        u = e.lineWidth,
                        c = {
                            x: n,
                            y: i - a
                        };
                    s && ("end" === s || "right" === s ? c.x -= r : "center" === s && (c.x -= r / 2)), o && ("top" === o ? c.y += a : "middle" === o && (c.y += a / 2)), this.set("startPoint", c);
                    var l = u / 2;
                    this.set("box", {
                        minX: c.x - l,
                        minY: c.y - l,
                        maxX: c.x + r + l,
                        maxY: c.y + a + l
                    })
                },
                __getSpaceingY: function() {
                    var t = this.__attrs,
                        e = t.lineHeight,
                        n = t.fontSize;
                    return e ? e - n : .14 * n
                },
                isPointInPath: function(t, e) {
                    var n = this,
                        i = n.getBBox();
                    if (n.hasFill() || n.hasStroke()) return a.box(i.minX, i.maxX, i.minY, i.maxY, t, e)
                },
                drawInner: function() {
                    var t = this,
                        e = t.get("context"),
                        n = t.__attrs,
                        r = n.text;
                    if (r) {
                        var a, s = n.textArr,
                            o = n.fontSize,
                            u = t.__getSpaceingY(),
                            c = n.x,
                            l = n.y,
                            h = n.textBaseline,
                            f = t.get("box"),
                            g = f.maxY - f.minY;
                        e.beginPath(), t.hasFill() && (s ? i.each(s, function(t, n) {
                            a = l + n * (u + o) - g + o, "middle" === h && (a += g - o - (g - o) / 2), "top" === h && (a += g - o), e.fillText(t, c, a)
                        }) : e.fillText(r, c, l)), t.hasStroke() && (s ? i.each(s, function(t, n) {
                            a = l + n * (u + o) - g + o, "middle" === h && (a += g - o - (g - o) / 2), "top" === h && (a += g - o), e.strokeText(t, c, a)
                        }) : e.strokeText(r, c, l))
                    }
                },
                measureText: function() {
                    var t, e = this,
                        n = e.__attrs,
                        r = n.text,
                        a = n.font,
                        o = n.textArr,
                        u = 0;
                    if (!i.isNull(r)) {
                        var c = s.backupContext;
                        return c.save(), c.font = a, o ? i.each(o, function(e) {
                            t = c.measureText(e).width, u < t && (u = t), c.restore()
                        }) : (u = c.measureText(r).width, c.restore()), u
                    }
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                this.preSegment = e, this.init(t, e)
            }

            function r(t, e, n) {
                return {
                    x: n.x + t,
                    y: n.y + e
                }
            }

            function a(t, e) {
                return {
                    x: e.x + (e.x - t.x),
                    y: e.y + (e.y - t.y)
                }
            }

            function s(t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }

            function o(t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (s(t) * s(e))
            }

            function u(t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(o(t, e))
            }

            function c(t, e, n, i, r, a, s) {
                var c = h.mod(h.degreeToRad(s), 2 * Math.PI),
                    l = t.x,
                    f = t.y,
                    g = e.x,
                    d = e.y,
                    p = Math.cos(c) * (l - g) / 2 + Math.sin(c) * (f - d) / 2,
                    v = -1 * Math.sin(c) * (l - g) / 2 + Math.cos(c) * (f - d) / 2,
                    m = p * p / (r * r) + v * v / (a * a);
                m > 1 && (r *= Math.sqrt(m), a *= Math.sqrt(m));
                var x = Math.sqrt((r * r * (a * a) - r * r * (v * v) - a * a * (p * p)) / (r * r * (v * v) + a * a * (p * p)));
                n === i && (x *= -1), isNaN(x) && (x = 0);
                var y = x * r * v / a,
                    _ = x * -a * p / r,
                    S = (l + g) / 2 + Math.cos(c) * y - Math.sin(c) * _,
                    w = (f + d) / 2 + Math.sin(c) * y + Math.cos(c) * _,
                    b = u([1, 0], [(p - y) / r, (v - _) / a]),
                    M = [(p - y) / r, (v - _) / a],
                    A = [(-1 * p - y) / r, (-1 * v - _) / a],
                    C = u(M, A);
                return o(M, A) <= -1 && (C = Math.PI), o(M, A) >= 1 && (C = 0), 0 === i && C > 0 && (C -= 2 * Math.PI), 1 === i && C < 0 && (C += 2 * Math.PI), [t, S, w, r, a, b, C, c, i]
            }
            var l = n(5),
                h = n(6),
                f = n(3),
                g = n(8),
                d = n(38),
                p = n(50),
                v = n(164),
                m = f.Vector2,
                x = f.Vector3,
                y = f.Matrix3;
            l.augment(i, {
                init: function(t, e) {
                    var n = t[0];
                    e = e || {
                        endPoint: {
                            x: 0,
                            y: 0
                        }
                    };
                    var i, s, o, u, l = /[a-z]/.test(n),
                        h = n.toUpperCase(),
                        f = t;
                    switch (h) {
                        default: break;
                        case "M":
                                u = l ? r(f[1], f[2], e.endPoint) : {
                                x: f[1],
                                y: f[2]
                            },
                            this.command = "M",
                            this.params = [e.endPoint, u],
                            this.subStart = u,
                            this.endPoint = u;
                            break;
                        case "L":
                                u = l ? r(f[1], f[2], e.endPoint) : {
                                x: f[1],
                                y: f[2]
                            },
                            this.command = "L",
                            this.params = [e.endPoint, u],
                            this.subStart = e.subStart,
                            this.endPoint = u,
                            this.endTangent = function() {
                                return new m(u.x - e.endPoint.x, u.y - e.endPoint.y)
                            };
                            break;
                        case "H":
                                u = l ? r(f[1], 0, e.endPoint) : {
                                x: f[1],
                                y: e.endPoint.y
                            },
                            this.command = "L",
                            this.params = [e.endPoint, u],
                            this.subStart = e.subStart,
                            this.endPoint = u,
                            this.endTangent = function() {
                                return new m(u.x - e.endPoint.x, u.y - e.endPoint.y)
                            };
                            break;
                        case "V":
                                u = l ? r(0, f[1], e.endPoint) : {
                                x: e.endPoint.x,
                                y: f[1]
                            },
                            this.command = "L",
                            this.params = [e.endPoint, u],
                            this.subStart = e.subStart,
                            this.endPoint = u,
                            this.endTangent = function() {
                                return new m(u.x - e.endPoint.x, u.y - e.endPoint.y)
                            };
                            break;
                        case "Q":
                                l ? (i = r(f[1], f[2], e.endPoint), s = r(f[3], f[4], e.endPoint)) : (i = {
                                x: f[1],
                                y: f[2]
                            }, s = {
                                x: f[3],
                                y: f[4]
                            }),
                            this.command = "Q",
                            this.params = [e.endPoint, i, s],
                            this.subStart = e.subStart,
                            this.endPoint = s,
                            this.endTangent = function() {
                                return new m(s.x - i.x, s.y - i.y)
                            };
                            break;
                        case "T":
                                s = l ? r(f[1], f[2], e.endPoint) : {
                                x: f[1],
                                y: f[2]
                            },
                            "Q" === e.command ? (i = a(e.params[1], e.endPoint), this.command = "Q", this.params = [e.endPoint, i, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function() {
                                return new m(s.x - i.x, s.y - i.y)
                            }) : (this.command = "TL", this.params = [e.endPoint, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function() {
                                return new m(s.x - e.endPoint.x, s.y - e.endPoint.y)
                            });
                            break;
                        case "C":
                                l ? (i = r(f[1], f[2], e.endPoint), s = r(f[3], f[4], e.endPoint), o = r(f[5], f[6], e.endPoint)) : (i = {
                                x: f[1],
                                y: f[2]
                            }, s = {
                                x: f[3],
                                y: f[4]
                            }, o = {
                                x: f[5],
                                y: f[6]
                            }),
                            this.command = "C",
                            this.params = [e.endPoint, i, s, o],
                            this.subStart = e.subStart,
                            this.endPoint = o,
                            this.endTangent = function() {
                                return new m(o.x - s.x, o.y - s.y)
                            };
                            break;
                        case "S":
                                l ? (s = r(f[1], f[2], e.endPoint), o = r(f[3], f[4], e.endPoint)) : (s = {
                                x: f[1],
                                y: f[2]
                            }, o = {
                                x: f[3],
                                y: f[4]
                            }),
                            "C" === e.command ? (i = a(e.params[2], e.endPoint), this.command = "C", this.params = [e.endPoint, i, s, o], this.subStart = e.subStart, this.endPoint = o, this.endTangent = function() {
                                return new m(o.x - s.x, o.y - s.y)
                            }) : (this.command = "SQ", this.params = [e.endPoint, s, o], this.subStart = e.subStart, this.endPoint = o, this.endTangent = function() {
                                return new m(o.x - s.x, o.y - s.y)
                            });
                            break;
                        case "A":
                                var g = f[1],
                                d = f[2],
                                p = f[3],
                                v = f[4],
                                x = f[5];u = l ? r(f[6], f[7], e.endPoint) : {
                                x: f[6],
                                y: f[7]
                            },
                            this.command = "A",
                            this.params = c(e.endPoint, u, v, x, g, d, p),
                            this.subStart = e.subStart,
                            this.endPoint = u;
                            break;
                        case "Z":
                                this.command = "Z",
                            this.params = [e.endPoint, e.subStart],
                            this.subStart = e.subStart,
                            this.endPoint = e.subStart
                    }
                },
                isInside: function(t, e, n) {
                    var i = this,
                        r = i.command,
                        a = i.params,
                        s = i.box;
                    if (s && !g.box(s.minX, s.maxX, s.minY, s.maxY, t, e)) return !1;
                    switch (r) {
                        default: break;
                        case "M":
                                return !1;
                        case "TL":
                                case "L":
                                case "Z":
                                return g.line(a[0].x, a[0].y, a[1].x, a[1].y, n, t, e);
                        case "SQ":
                                case "Q":
                                return g.quadraticline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, n, t, e);
                        case "C":
                                return g.cubicline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y, n, t, e);
                        case "A":
                                var o = a,
                                u = o[1],
                                c = o[2],
                                l = o[3],
                                h = o[4],
                                f = o[5],
                                d = o[6],
                                p = o[7],
                                v = o[8],
                                m = l > h ? l : h,
                                _ = l > h ? 1 : l / h,
                                S = l > h ? h / l : 1;o = new x(t, e, 1);
                            var w = new y;
                            return w.translate(-u, -c),
                            w.rotate(-p),
                            w.scale(1 / _, 1 / S),
                            o.applyMatrix(w),
                            g.arcline(0, 0, m, f, f + d, 1 - v, n, o.x, o.y)
                    }
                    return !1
                },
                draw: function(t) {
                    var e, n, i, r = this.command,
                        a = this.params;
                    switch (r) {
                        default: break;
                        case "M":
                                t.moveTo(a[1].x, a[1].y);
                            break;
                        case "TL":
                                case "L":
                                t.lineTo(a[1].x, a[1].y);
                            break;
                        case "SQ":
                                case "Q":
                                e = a[1],
                            n = a[2],
                            t.quadraticCurveTo(e.x, e.y, n.x, n.y);
                            break;
                        case "C":
                                e = a[1],
                            n = a[2],
                            i = a[3],
                            t.bezierCurveTo(e.x, e.y, n.x, n.y, i.x, i.y);
                            break;
                        case "A":
                                var s = a,
                                o = s[1],
                                u = s[2],
                                c = s[3],
                                l = s[4],
                                h = s[5],
                                f = s[6],
                                g = s[7],
                                d = s[8],
                                p = c > l ? c : l,
                                v = c > l ? 1 : c / l,
                                m = c > l ? l / c : 1;t.translate(o, u),
                            t.rotate(g),
                            t.scale(v, m),
                            t.arc(0, 0, p, h, h + f, 1 - d),
                            t.scale(1 / v, 1 / m),
                            t.rotate(-g),
                            t.translate(-o, -u);
                            break;
                        case "Z":
                                t.closePath()
                    }
                },
                getBBox: function(t) {
                    var e, n, i, r, a = t / 2,
                        s = this.params;
                    switch (this.command) {
                        default:
                            case "M":
                            case "Z":
                            break;
                        case "TL":
                                case "L":
                                this.box = {
                                minX: Math.min(s[0].x, s[1].x) - a,
                                maxX: Math.max(s[0].x, s[1].x) + a,
                                minY: Math.min(s[0].y, s[1].y) - a,
                                maxY: Math.max(s[0].y, s[1].y) + a
                            };
                            break;
                        case "SQ":
                                case "Q":
                                for (n = p.extrema(s[0].x, s[1].x, s[2].x), i = 0, r = n.length; i < r; i++) n[i] = p.at(s[0].x, s[1].x, s[2].x, n[i]);
                            for (n.push(s[0].x, s[2].x), e = p.extrema(s[0].y, s[1].y, s[2].y), i = 0, r = e.length; i < r; i++) e[i] = p.at(s[0].y, s[1].y, s[2].y, e);e.push(s[0].y, s[2].y),
                            this.box = {
                                minX: Math.min.apply(Math, n) - a,
                                maxX: Math.max.apply(Math, n) + a,
                                minY: Math.min.apply(Math, e) - a,
                                maxY: Math.max.apply(Math, e) + a
                            };
                            break;
                        case "C":
                                for (n = d.extrema(s[0].x, s[1].x, s[2].x, s[3].x), i = 0, r = n.length; i < r; i++) n[i] = d.at(s[0].x, s[1].x, s[2].x, s[3].x, n[i]);
                            for (e = d.extrema(s[0].y, s[1].y, s[2].y, s[3].y), i = 0, r = e.length; i < r; i++) e[i] = d.at(s[0].y, s[1].y, s[2].y, s[3].y, e[i]);n.push(s[0].x, s[3].x),
                            e.push(s[0].y, s[3].y),
                            this.box = {
                                minX: Math.min.apply(Math, n) - a,
                                maxX: Math.max.apply(Math, n) + a,
                                minY: Math.min.apply(Math, e) - a,
                                maxY: Math.max.apply(Math, e) + a
                            };
                            break;
                        case "A":
                                var o = s,
                                u = o[1],
                                c = o[2],
                                l = o[3],
                                h = o[4],
                                f = o[5],
                                g = o[6],
                                m = o[7],
                                x = o[8],
                                y = f,
                                _ = f + g,
                                S = v.xExtrema(m, l, h),
                                w = 1 / 0,
                                b = -(1 / 0),
                                M = [y, _];
                            for (i = 2 * -Math.PI; i <= 2 * Math.PI; i += Math.PI) {
                                var A = S + i;
                                1 === x ? y < A && A < _ && M.push(A) : _ < A && A < y && M.push(A)
                            }
                            for (i = 0, r = M.length; i < r; i++) {
                                var C = v.xAt(m, l, h, u, M[i]);
                                C < w && (w = C), C > b && (b = C)
                            }
                            var T = v.yExtrema(m, l, h),
                                k = 1 / 0,
                                P = -(1 / 0),
                                I = [y, _];
                            for (i = 2 * -Math.PI; i <= 2 * Math.PI; i += Math.PI) {
                                var D = T + i;
                                1 === x ? y < D && D < _ && I.push(D) : _ < D && D < y && I.push(D)
                            }
                            for (i = 0, r = I.length; i < r; i++) {
                                var L = v.yAt(m, l, h, c, I[i]);
                                L < k && (k = L), L > P && (P = L)
                            }
                            this.box = {
                                minX: w - a,
                                maxX: b + a,
                                minY: k - a,
                                maxY: P + a
                            }
                    }
                }
            }), t.exports = i
        },
        function(t, e, n) {
            ! function() {
                function e() {
                    var t = {},
                        e = [];
                    return t.data = function(n) {
                        return arguments.length ? (e = n.slice(), t) : e
                    }, t.mb = function() {
                        var t, n, i = e.length;
                        if (1 === i) t = 0, n = e[0][1];
                        else {
                            for (var r, a, s, o = 0, u = 0, c = 0, l = 0, h = 0; h < i; h++) r = e[h], a = r[0], s = r[1], o += a, u += s, c += a * a, l += a * s;
                            t = (i * l - o * u) / (i * c - o * o), n = u / i - t * o / i
                        }
                        return {
                            m: t,
                            b: n
                        }
                    }, t.m = function() {
                        return t.mb().m
                    }, t.b = function() {
                        return t.mb().b
                    }, t.line = function() {
                        var e = t.mb(),
                            n = e.m,
                            i = e.b;
                        return function(t) {
                            return i + n * t
                        }
                    }, t
                }

                function n(t, e) {
                    if (t.length < 2) return 1;
                    for (var n, i = 0, r = 0; r < t.length; r++) i += t[r][1];
                    n = i / t.length;
                    for (var a = 0, s = 0; s < t.length; s++) a += Math.pow(n - t[s][1], 2);
                    for (var o = 0, u = 0; u < t.length; u++) o += Math.pow(t[u][1] - e(t[u][0]), 2);
                    return 1 - o / a
                }

                function i() {
                    var t = {},
                        e = 0,
                        n = {};
                    return t.train = function(t, i) {
                        n[i] || (n[i] = {});
                        for (var r in t) {
                            var a = t[r];
                            void 0 === n[i][r] && (n[i][r] = {}), void 0 === n[i][r][a] && (n[i][r][a] = 0), n[i][r][t[r]]++
                        }
                        e++
                    }, t.score = function(t) {
                        var i, r = {};
                        for (var a in t) {
                            var s = t[a];
                            for (i in n) void 0 === r[i] && (r[i] = {}), n[i][a] ? r[i][a + "_" + s] = (n[i][a][s] || 0) / e : r[i][a + "_" + s] = 0
                        }
                        var o = {};
                        for (i in r)
                            for (var u in r[i]) void 0 === o[i] && (o[i] = 0), o[i] += r[i][u];
                        return o
                    }, t
                }

                function r(t) {
                    for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                    return e
                }

                function a(t) {
                    return 0 === t.length ? null : r(t) / t.length
                }

                function s(t) {
                    if (0 === t.length) return null;
                    for (var e = 1, n = 0; n < t.length; n++) {
                        if (t[n] <= 0) return null;
                        e *= t[n]
                    }
                    return Math.pow(e, 1 / t.length)
                }

                function o(t) {
                    if (0 === t.length) return null;
                    for (var e = 0, n = 0; n < t.length; n++) {
                        if (t[n] <= 0) return null;
                        e += 1 / t[n]
                    }
                    return t.length / e
                }

                function u(t) {
                    if (0 === t.length) return null;
                    for (var e = 0, n = 0; n < t.length; n++) e += Math.pow(t[n], 2);
                    return Math.sqrt(e / t.length)
                }

                function c(t) {
                    for (var e, n = 0; n < t.length; n++)(t[n] < e || void 0 === e) && (e = t[n]);
                    return e
                }

                function l(t) {
                    for (var e, n = 0; n < t.length; n++)(t[n] > e || void 0 === e) && (e = t[n]);
                    return e
                }

                function h(t) {
                    if (0 === t.length) return null;
                    for (var e = a(t), n = [], i = 0; i < t.length; i++) n.push(Math.pow(t[i] - e, 2));
                    return a(n)
                }

                function f(t) {
                    return 0 === t.length ? null : Math.sqrt(h(t))
                }

                function g(t, e) {
                    for (var n = a(t), i = 0, r = 0; r < t.length; r++) i += Math.pow(t[r] - n, e);
                    return i
                }

                function d(t) {
                    if (t.length <= 1) return null;
                    var e = g(t, 2);
                    return e / (t.length - 1)
                }

                function p(t) {
                    return t.length <= 1 ? null : Math.sqrt(d(t))
                }

                function v(t, e) {
                    if (t.length <= 1 || t.length != e.length) return null;
                    for (var n = a(t), i = a(e), r = 0, s = 0; s < t.length; s++) r += (t[s] - n) * (e[s] - i);
                    return r / (t.length - 1)
                }

                function m(t, e) {
                    var n = v(t, e),
                        i = p(t),
                        r = p(e);
                    return null === n || null === i || null === r ? null : n / i / r
                }

                function x(t) {
                    if (0 === t.length) return null;
                    var e = t.slice().sort(function(t, e) {
                        return t - e
                    });
                    if (e.length % 2 === 1) return e[(e.length - 1) / 2];
                    var n = e[e.length / 2 - 1],
                        i = e[e.length / 2];
                    return (n + i) / 2
                }

                function y(t) {
                    if (0 === t.length) return null;
                    if (1 === t.length) return t[0];
                    for (var e, n = t.slice().sort(function(t, e) {
                            return t - e
                        }), i = n[0], r = 0, a = 1, s = 1; s < n.length + 1; s++) n[s] !== i ? (a > r && (r = a, e = i), a = 1, i = n[s]) : a++;
                    return e
                }

                function _(t, e) {
                    var n = a(t),
                        i = f(t),
                        r = Math.sqrt(t.length);
                    return (n - e) / (i / r)
                }

                function S(t, e, n) {
                    var i = t.length,
                        r = e.length;
                    if (!i || !r) return null;
                    n || (n = 0);
                    var s = a(t),
                        o = a(e),
                        u = ((i - 1) * d(t) + (r - 1) * d(e)) / (i + r - 2);
                    return (s - o - n) / Math.sqrt(u * (1 / i + 1 / r))
                }

                function w(t, e) {
                    var n = [];
                    if (e <= 0) return null;
                    for (var i = 0; i < t.length; i += e) n.push(t.slice(i, i + e));
                    return n
                }

                function b(t, e) {
                    e = e || Math.random;
                    for (var n, i, r = t.length; r > 0;) i = Math.floor(e() * r--), n = t[r], t[r] = t[i], t[i] = n;
                    return t
                }

                function M(t, e) {
                    return t = t.slice(), b(t.slice(), e)
                }

                function A(t, e, n) {
                    var i = M(t, n);
                    return i.slice(0, e)
                }

                function C(t, e) {
                    if (0 === t.length) return null;
                    var n = t.slice().sort(function(t, e) {
                        return t - e
                    });
                    if (e.length) {
                        for (var i = [], r = 0; r < e.length; r++) i[r] = T(n, e[r]);
                        return i
                    }
                    return T(n, e)
                }

                function T(t, e) {
                    var n = t.length * e;
                    return e < 0 || e > 1 ? null : 1 === e ? t[t.length - 1] : 0 === e ? t[0] : n % 1 !== 0 ? t[Math.ceil(n) - 1] : t.length % 2 === 0 ? (t[n - 1] + t[n]) / 2 : t[n]
                }

                function k(t) {
                    return 0 === t.length ? null : C(t, .75) - C(t, .25)
                }

                function P(t) {
                    if (!t || 0 === t.length) return null;
                    for (var e = x(t), n = [], i = 0; i < t.length; i++) n.push(Math.abs(t[i] - e));
                    return x(n)
                }

                function I(t, e) {
                    var n, i, r = [],
                        a = [],
                        s = 0;
                    for (n = 0; n < t.length + 1; n++) {
                        var o = [],
                            u = [];
                        for (i = 0; i < e + 1; i++) o.push(0), u.push(0);
                        r.push(o), a.push(u)
                    }
                    for (n = 1; n < e + 1; n++)
                        for (r[1][n] = 1, a[1][n] = 0, i = 2; i < t.length + 1; i++) a[i][n] = 1 / 0;
                    for (var c = 2; c < t.length + 1; c++) {
                        for (var l = 0, h = 0, f = 0, g = 0, d = 1; d < c + 1; d++) {
                            var p = c - d + 1,
                                v = t[p - 1];
                            if (f++, l += v, h += v * v, s = h - l * l / f, g = p - 1, 0 !== g)
                                for (i = 2; i < e + 1; i++) a[c][i] >= s + a[g][i - 1] && (r[c][i] = p, a[c][i] = s + a[g][i - 1])
                        }
                        r[c][1] = 1, a[c][1] = s
                    }
                    return {
                        lower_class_limits: r,
                        variance_combinations: a
                    }
                }

                function D(t, e, n) {
                    var i = t.length - 1,
                        r = [],
                        a = n;
                    for (r[n] = t[t.length - 1], r[0] = t[0]; a > 1;) r[a - 1] = t[e[i][a] - 2], i = e[i][a] - 1, a--;
                    return r
                }

                function L(t, e) {
                    if (e > t.length) return null;
                    t = t.slice().sort(function(t, e) {
                        return t - e
                    });
                    var n = I(t, e),
                        i = n.lower_class_limits;
                    return D(t, i, e)
                }

                function F(t) {
                    if (t.length < 3) return null;
                    var e = t.length,
                        n = Math.pow(p(t), 3),
                        i = g(t, 3);
                    return e * i / ((e - 1) * (e - 2) * n)
                }

                function B(t) {
                    var e = Math.abs(t),
                        n = Math.floor(10 * e),
                        i = 10 * (Math.floor(100 * e) / 10 - Math.floor(100 * e / 10)),
                        r = Math.min(10 * n + i, Y.length - 1);
                    return t >= 0 ? Y[r] : +(1 - Y[r]).toFixed(4)
                }

                function R(t, e, n) {
                    return (t - e) / n
                }

                function O(t) {
                    if (t < 0) return null;
                    for (var e = 1, n = 2; n <= t; n++) e *= n;
                    return e
                }

                function N(t) {
                    return t < 0 || t > 1 ? null : E(1, t)
                }

                function E(t, e) {
                    function n(t, e, n) {
                        return O(e) / (O(t) * O(e - t)) * (Math.pow(n, t) * Math.pow(1 - n, e - t))
                    }
                    if (e < 0 || e > 1 || t <= 0 || t % 1 !== 0) return null;
                    var i = 0,
                        r = 0,
                        a = {};
                    do a[i] = n(i, t, e), r += a[i], i++; while (r < 1 - V);
                    return a
                }

                function G(t) {
                    function e(t, e) {
                        return Math.pow(Math.E, -e) * Math.pow(e, t) / O(t)
                    }
                    if (t <= 0) return null;
                    var n = 0,
                        i = 0,
                        r = {};
                    do r[n] = e(n, t), i += r[n], n++; while (i < 1 - V);
                    return r
                }

                function z(t, e, n) {
                    for (var i, r, s = a(t), o = 0, u = 1, c = e(s), l = [], h = [], f = 0; f < t.length; f++) void 0 === l[t[f]] && (l[t[f]] = 0), l[t[f]]++;
                    for (f = 0; f < l.length; f++) void 0 === l[f] && (l[f] = 0);
                    for (r in c) r in l && (h[r] = c[r] * t.length);
                    for (r = h.length - 1; r >= 0; r--) h[r] < 3 && (h[r - 1] += h[r], h.pop(), l[r - 1] += l[r], l.pop());
                    for (r = 0; r < l.length; r++) o += Math.pow(l[r] - h[r], 2) / h[r];
                    return i = l.length - u - 1, j[i][n] < o
                }

                function X(t) {
                    function e(t) {
                        return function() {
                            var e = Array.prototype.slice.apply(arguments);
                            return e.unshift(this), W[t].apply(W, e)
                        }
                    }
                    var n = !(!Object.defineProperty || !Object.defineProperties);
                    if (!n) throw new Error("without defineProperty, simple-statistics cannot be mixed in");
                    var i, r = ["median", "standard_deviation", "sum", "sample_skewness", "mean", "min", "max", "quantile", "geometric_mean", "harmonic_mean", "root_mean_square"];
                    i = t ? t.slice() : Array.prototype;
                    for (var a = 0; a < r.length; a++) Object.defineProperty(i, r[a], {
                        value: e(r[a]),
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    });
                    return i
                }
                var W = {};
                t.exports = W;
                var Y = [.5, .504, .508, .512, .516, .5199, .5239, .5279, .5319, .5359, .5398, .5438, .5478, .5517, .5557, .5596, .5636, .5675, .5714, .5753, .5793, .5832, .5871, .591, .5948, .5987, .6026, .6064, .6103, .6141, .6179, .6217, .6255, .6293, .6331, .6368, .6406, .6443, .648, .6517, .6554, .6591, .6628, .6664, .67, .6736, .6772, .6808, .6844, .6879, .6915, .695, .6985, .7019, .7054, .7088, .7123, .7157, .719, .7224, .7257, .7291, .7324, .7357, .7389, .7422, .7454, .7486, .7517, .7549, .758, .7611, .7642, .7673, .7704, .7734, .7764, .7794, .7823, .7852, .7881, .791, .7939, .7967, .7995, .8023, .8051, .8078, .8106, .8133, .8159, .8186, .8212, .8238, .8264, .8289, .8315, .834, .8365, .8389, .8413, .8438, .8461, .8485, .8508, .8531, .8554, .8577, .8599, .8621, .8643, .8665, .8686, .8708, .8729, .8749, .877, .879, .881, .883, .8849, .8869, .8888, .8907, .8925, .8944, .8962, .898, .8997, .9015, .9032, .9049, .9066, .9082, .9099, .9115, .9131, .9147, .9162, .9177, .9192, .9207, .9222, .9236, .9251, .9265, .9279, .9292, .9306, .9319, .9332, .9345, .9357, .937, .9382, .9394, .9406, .9418, .9429, .9441, .9452, .9463, .9474, .9484, .9495, .9505, .9515, .9525, .9535, .9545, .9554, .9564, .9573, .9582, .9591, .9599, .9608, .9616, .9625, .9633, .9641, .9649, .9656, .9664, .9671, .9678, .9686, .9693, .9699, .9706, .9713, .9719, .9726, .9732, .9738, .9744, .975, .9756, .9761, .9767, .9772, .9778, .9783, .9788, .9793, .9798, .9803, .9808, .9812, .9817, .9821, .9826, .983, .9834, .9838, .9842, .9846, .985, .9854, .9857, .9861, .9864, .9868, .9871, .9875, .9878, .9881, .9884, .9887, .989, .9893, .9896, .9898, .9901, .9904, .9906, .9909, .9911, .9913, .9916, .9918, .992, .9922, .9925, .9927, .9929, .9931, .9932, .9934, .9936, .9938, .994, .9941, .9943, .9945, .9946, .9948, .9949, .9951, .9952, .9953, .9955, .9956, .9957, .9959, .996, .9961, .9962, .9963, .9964, .9965, .9966, .9967, .9968, .9969, .997, .9971, .9972, .9973, .9974, .9974, .9975, .9976, .9977, .9977, .9978, .9979, .9979, .998, .9981, .9981, .9982, .9982, .9983, .9984, .9984, .9985, .9985, .9986, .9986, .9987, .9987, .9987, .9988, .9988, .9989, .9989, .9989, .999, .999],
                    V = 1e-4,
                    j = {
                        1: {
                            .995: 0,
                            .99: 0,
                            .975: 0,
                            .95: 0,
                            .9: .02,
                            .5: .45,
                            .1: 2.71,
                            .05: 3.84,
                            .025: 5.02,
                            .01: 6.63,
                            .005: 7.88
                        },
                        2: {
                            .995: .01,
                            .99: .02,
                            .975: .05,
                            .95: .1,
                            .9: .21,
                            .5: 1.39,
                            .1: 4.61,
                            .05: 5.99,
                            .025: 7.38,
                            .01: 9.21,
                            .005: 10.6
                        },
                        3: {
                            .995: .07,
                            .99: .11,
                            .975: .22,
                            .95: .35,
                            .9: .58,
                            .5: 2.37,
                            .1: 6.25,
                            .05: 7.81,
                            .025: 9.35,
                            .01: 11.34,
                            .005: 12.84
                        },
                        4: {
                            .995: .21,
                            .99: .3,
                            .975: .48,
                            .95: .71,
                            .9: 1.06,
                            .5: 3.36,
                            .1: 7.78,
                            .05: 9.49,
                            .025: 11.14,
                            .01: 13.28,
                            .005: 14.86
                        },
                        5: {
                            .995: .41,
                            .99: .55,
                            .975: .83,
                            .95: 1.15,
                            .9: 1.61,
                            .5: 4.35,
                            .1: 9.24,
                            .05: 11.07,
                            .025: 12.83,
                            .01: 15.09,
                            .005: 16.75
                        },
                        6: {
                            .995: .68,
                            .99: .87,
                            .975: 1.24,
                            .95: 1.64,
                            .9: 2.2,
                            .5: 5.35,
                            .1: 10.65,
                            .05: 12.59,
                            .025: 14.45,
                            .01: 16.81,
                            .005: 18.55
                        },
                        7: {
                            .995: .99,
                            .99: 1.25,
                            .975: 1.69,
                            .95: 2.17,
                            .9: 2.83,
                            .5: 6.35,
                            .1: 12.02,
                            .05: 14.07,
                            .025: 16.01,
                            .01: 18.48,
                            .005: 20.28
                        },
                        8: {
                            .995: 1.34,
                            .99: 1.65,
                            .975: 2.18,
                            .95: 2.73,
                            .9: 3.49,
                            .5: 7.34,
                            .1: 13.36,
                            .05: 15.51,
                            .025: 17.53,
                            .01: 20.09,
                            .005: 21.96
                        },
                        9: {
                            .995: 1.73,
                            .99: 2.09,
                            .975: 2.7,
                            .95: 3.33,
                            .9: 4.17,
                            .5: 8.34,
                            .1: 14.68,
                            .05: 16.92,
                            .025: 19.02,
                            .01: 21.67,
                            .005: 23.59
                        },
                        10: {
                            .995: 2.16,
                            .99: 2.56,
                            .975: 3.25,
                            .95: 3.94,
                            .9: 4.87,
                            .5: 9.34,
                            .1: 15.99,
                            .05: 18.31,
                            .025: 20.48,
                            .01: 23.21,
                            .005: 25.19
                        },
                        11: {
                            .995: 2.6,
                            .99: 3.05,
                            .975: 3.82,
                            .95: 4.57,
                            .9: 5.58,
                            .5: 10.34,
                            .1: 17.28,
                            .05: 19.68,
                            .025: 21.92,
                            .01: 24.72,
                            .005: 26.76
                        },
                        12: {
                            .995: 3.07,
                            .99: 3.57,
                            .975: 4.4,
                            .95: 5.23,
                            .9: 6.3,
                            .5: 11.34,
                            .1: 18.55,
                            .05: 21.03,
                            .025: 23.34,
                            .01: 26.22,
                            .005: 28.3
                        },
                        13: {
                            .995: 3.57,
                            .99: 4.11,
                            .975: 5.01,
                            .95: 5.89,
                            .9: 7.04,
                            .5: 12.34,
                            .1: 19.81,
                            .05: 22.36,
                            .025: 24.74,
                            .01: 27.69,
                            .005: 29.82
                        },
                        14: {
                            .995: 4.07,
                            .99: 4.66,
                            .975: 5.63,
                            .95: 6.57,
                            .9: 7.79,
                            .5: 13.34,
                            .1: 21.06,
                            .05: 23.68,
                            .025: 26.12,
                            .01: 29.14,
                            .005: 31.32
                        },
                        15: {
                            .995: 4.6,
                            .99: 5.23,
                            .975: 6.27,
                            .95: 7.26,
                            .9: 8.55,
                            .5: 14.34,
                            .1: 22.31,
                            .05: 25,
                            .025: 27.49,
                            .01: 30.58,
                            .005: 32.8
                        },
                        16: {
                            .995: 5.14,
                            .99: 5.81,
                            .975: 6.91,
                            .95: 7.96,
                            .9: 9.31,
                            .5: 15.34,
                            .1: 23.54,
                            .05: 26.3,
                            .025: 28.85,
                            .01: 32,
                            .005: 34.27
                        },
                        17: {
                            .995: 5.7,
                            .99: 6.41,
                            .975: 7.56,
                            .95: 8.67,
                            .9: 10.09,
                            .5: 16.34,
                            .1: 24.77,
                            .05: 27.59,
                            .025: 30.19,
                            .01: 33.41,
                            .005: 35.72
                        },
                        18: {
                            .995: 6.26,
                            .99: 7.01,
                            .975: 8.23,
                            .95: 9.39,
                            .9: 10.87,
                            .5: 17.34,
                            .1: 25.99,
                            .05: 28.87,
                            .025: 31.53,
                            .01: 34.81,
                            .005: 37.16
                        },
                        19: {
                            .995: 6.84,
                            .99: 7.63,
                            .975: 8.91,
                            .95: 10.12,
                            .9: 11.65,
                            .5: 18.34,
                            .1: 27.2,
                            .05: 30.14,
                            .025: 32.85,
                            .01: 36.19,
                            .005: 38.58
                        },
                        20: {
                            .995: 7.43,
                            .99: 8.26,
                            .975: 9.59,
                            .95: 10.85,
                            .9: 12.44,
                            .5: 19.34,
                            .1: 28.41,
                            .05: 31.41,
                            .025: 34.17,
                            .01: 37.57,
                            .005: 40
                        },
                        21: {
                            .995: 8.03,
                            .99: 8.9,
                            .975: 10.28,
                            .95: 11.59,
                            .9: 13.24,
                            .5: 20.34,
                            .1: 29.62,
                            .05: 32.67,
                            .025: 35.48,
                            .01: 38.93,
                            .005: 41.4
                        },
                        22: {
                            .995: 8.64,
                            .99: 9.54,
                            .975: 10.98,
                            .95: 12.34,
                            .9: 14.04,
                            .5: 21.34,
                            .1: 30.81,
                            .05: 33.92,
                            .025: 36.78,
                            .01: 40.29,
                            .005: 42.8
                        },
                        23: {
                            .995: 9.26,
                            .99: 10.2,
                            .975: 11.69,
                            .95: 13.09,
                            .9: 14.85,
                            .5: 22.34,
                            .1: 32.01,
                            .05: 35.17,
                            .025: 38.08,
                            .01: 41.64,
                            .005: 44.18
                        },
                        24: {
                            .995: 9.89,
                            .99: 10.86,
                            .975: 12.4,
                            .95: 13.85,
                            .9: 15.66,
                            .5: 23.34,
                            .1: 33.2,
                            .05: 36.42,
                            .025: 39.36,
                            .01: 42.98,
                            .005: 45.56
                        },
                        25: {
                            .995: 10.52,
                            .99: 11.52,
                            .975: 13.12,
                            .95: 14.61,
                            .9: 16.47,
                            .5: 24.34,
                            .1: 34.28,
                            .05: 37.65,
                            .025: 40.65,
                            .01: 44.31,
                            .005: 46.93
                        },
                        26: {
                            .995: 11.16,
                            .99: 12.2,
                            .975: 13.84,
                            .95: 15.38,
                            .9: 17.29,
                            .5: 25.34,
                            .1: 35.56,
                            .05: 38.89,
                            .025: 41.92,
                            .01: 45.64,
                            .005: 48.29
                        },
                        27: {
                            .995: 11.81,
                            .99: 12.88,
                            .975: 14.57,
                            .95: 16.15,
                            .9: 18.11,
                            .5: 26.34,
                            .1: 36.74,
                            .05: 40.11,
                            .025: 43.19,
                            .01: 46.96,
                            .005: 49.65
                        },
                        28: {
                            .995: 12.46,
                            .99: 13.57,
                            .975: 15.31,
                            .95: 16.93,
                            .9: 18.94,
                            .5: 27.34,
                            .1: 37.92,
                            .05: 41.34,
                            .025: 44.46,
                            .01: 48.28,
                            .005: 50.99
                        },
                        29: {
                            .995: 13.12,
                            .99: 14.26,
                            .975: 16.05,
                            .95: 17.71,
                            .9: 19.77,
                            .5: 28.34,
                            .1: 39.09,
                            .05: 42.56,
                            .025: 45.72,
                            .01: 49.59,
                            .005: 52.34
                        },
                        30: {
                            .995: 13.79,
                            .99: 14.95,
                            .975: 16.79,
                            .95: 18.49,
                            .9: 20.6,
                            .5: 29.34,
                            .1: 40.26,
                            .05: 43.77,
                            .025: 46.98,
                            .01: 50.89,
                            .005: 53.67
                        },
                        40: {
                            .995: 20.71,
                            .99: 22.16,
                            .975: 24.43,
                            .95: 26.51,
                            .9: 29.05,
                            .5: 39.34,
                            .1: 51.81,
                            .05: 55.76,
                            .025: 59.34,
                            .01: 63.69,
                            .005: 66.77
                        },
                        50: {
                            .995: 27.99,
                            .99: 29.71,
                            .975: 32.36,
                            .95: 34.76,
                            .9: 37.69,
                            .5: 49.33,
                            .1: 63.17,
                            .05: 67.5,
                            .025: 71.42,
                            .01: 76.15,
                            .005: 79.49
                        },
                        60: {
                            .995: 35.53,
                            .99: 37.48,
                            .975: 40.48,
                            .95: 43.19,
                            .9: 46.46,
                            .5: 59.33,
                            .1: 74.4,
                            .05: 79.08,
                            .025: 83.3,
                            .01: 88.38,
                            .005: 91.95
                        },
                        70: {
                            .995: 43.28,
                            .99: 45.44,
                            .975: 48.76,
                            .95: 51.74,
                            .9: 55.33,
                            .5: 69.33,
                            .1: 85.53,
                            .05: 90.53,
                            .025: 95.02,
                            .01: 100.42,
                            .005: 104.22
                        },
                        80: {
                            .995: 51.17,
                            .99: 53.54,
                            .975: 57.15,
                            .95: 60.39,
                            .9: 64.28,
                            .5: 79.33,
                            .1: 96.58,
                            .05: 101.88,
                            .025: 106.63,
                            .01: 112.33,
                            .005: 116.32
                        },
                        90: {
                            .995: 59.2,
                            .99: 61.75,
                            .975: 65.65,
                            .95: 69.13,
                            .9: 73.29,
                            .5: 89.33,
                            .1: 107.57,
                            .05: 113.14,
                            .025: 118.14,
                            .01: 124.12,
                            .005: 128.3
                        },
                        100: {
                            .995: 67.33,
                            .99: 70.06,
                            .975: 74.22,
                            .95: 77.93,
                            .9: 82.36,
                            .5: 99.33,
                            .1: 118.5,
                            .05: 124.34,
                            .025: 129.56,
                            .01: 135.81,
                            .005: 140.17
                        }
                    };
                W.linear_regression = e, W.standard_deviation = f, W.r_squared = n, W.median = x, W.mean = a, W.mode = y, W.min = c, W.max = l, W.sum = r, W.quantile = C, W.quantile_sorted = T, W.iqr = k, W.mad = P, W.chunk = w, W.shuffle = M, W.shuffle_in_place = b, W.sample = A, W.sample_covariance = v, W.sample_correlation = m, W.sample_variance = d, W.sample_standard_deviation = p, W.sample_skewness = F, W.geometric_mean = s, W.harmonic_mean = o, W.root_mean_square = u, W.variance = h, W.t_test = _, W.t_test_two_sample = S, W.jenksMatrices = I, W.jenksBreaks = D, W.jenks = L, W.bayesian = i, W.epsilon = V, W.factorial = O, W.bernoulli_distribution = N, W.binomial_distribution = E, W.poisson_distribution = G, W.chi_squared_goodness_of_fit = z, W.z_score = R, W.cumulative_std_normal_probability = B, W.standard_normal_table = Y, W.average = a, W.interquartile_range = k, W.mixin = X, W.median_absolute_deviation = P, W.rms = u
            }(this)
        },
        function(t, e) {
            "use strict";

            function n(t) {
                return t instanceof Date ? t : new Date(t)
            }

            function i(t, e, n) {
                var i = new Date(n);
                switch (isNaN(i) && (i = new Date), e = parseInt(e, 10), t) {
                    case "s":
                        i = new Date(i.getTime() + 1e3 * e);
                        break;
                    case "n":
                        i = new Date(i.getTime() + 6e4 * e);
                        break;
                    case "h":
                        i = new Date(i.getTime() + 36e5 * e);
                        break;
                    case "d":
                        i = new Date(i.getTime() + 864e5 * e);
                        break;
                    case "w":
                        i = new Date(i.getTime() + 6048e5 * e);
                        break;
                    case "m":
                        i = new Date(i.getFullYear(), i.getMonth() + e, i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds());
                        break;
                    case "y":
                        i = new Date(i.getFullYear() + e, i.getMonth(), i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds())
                }
                return i
            }
            var r = /^(?:(?!0000)[0-9]{4}([-\/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-\/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,
                a = function() {
                    var t = /w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                        e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                        n = /[^-+\dA-Z]/g,
                        i = function(t, e) {
                            for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
                            return t
                        },
                        r = {
                            "default": "ddd mmm dd yyyy HH:MM:ss",
                            shortDate: "m/d/yy",
                            longDate: "mmmm d, yyyy",
                            fullDate: "dddd, mmmm d, yyyy",
                            shortTime: "h:MM TT",
                            longTime: "h:MM:ss TT Z",
                            isoDate: "yyyy-mm-dd",
                            isoTime: "HH:MM:ss",
                            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                            isoUTCDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                            localShortDate: "yy\u5e74mm\u6708dd\u65e5",
                            localShortDateTime: "yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",
                            localLongDate: "yyyy\u5e74mm\u6708dd\u65e5",
                            localLongDateTime: "yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",
                            localFullDate: "yyyy\u5e74mm\u6708dd\u65e5 w",
                            localFullDateTime: "yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"
                        },
                        a = {
                            dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
                            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        };
                    return function(s, o, u) {
                        if (1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(s) || /\d/.test(s) || (o = s, s = void 0), s = s ? new Date(s) : new Date, isNaN(s)) throw SyntaxError("invalid date");
                        o = String(r[o] || o || r["default"]), "UTC:" === o.slice(0, 4) && (o = o.slice(4), u = !0);
                        var c = u ? "getUTC" : "get",
                            l = s[c + "Date"](),
                            h = s[c + "Day"](),
                            f = s[c + "Month"](),
                            g = s[c + "FullYear"](),
                            d = s[c + "Hours"](),
                            p = s[c + "Minutes"](),
                            v = s[c + "Seconds"](),
                            m = s[c + "Milliseconds"](),
                            x = u ? 0 : s.getTimezoneOffset(),
                            y = {
                                d: l,
                                dd: i(l, void 0),
                                ddd: a.dayNames[h],
                                dddd: a.dayNames[h + 7],
                                w: a.dayNames[h + 14],
                                m: f + 1,
                                mm: i(f + 1, void 0),
                                mmm: a.monthNames[f],
                                mmmm: a.monthNames[f + 12],
                                yy: String(g).slice(2),
                                yyyy: g,
                                h: d % 12 || 12,
                                hh: i(d % 12 || 12, void 0),
                                H: d,
                                HH: i(d, void 0),
                                M: p,
                                MM: i(p, void 0),
                                s: v,
                                ss: i(v, void 0),
                                l: i(m, 3),
                                L: i(m > 99 ? Math.round(m / 10) : m, void 0),
                                t: d < 12 ? "a" : "p",
                                tt: d < 12 ? "am" : "pm",
                                T: d < 12 ? "A" : "P",
                                TT: d < 12 ? "AM" : "PM",
                                Z: u ? "UTC" : (String(s).match(e) || [""]).pop().replace(n, ""),
                                o: (x > 0 ? "-" : "+") + i(100 * Math.floor(Math.abs(x) / 60) + Math.abs(x) % 60, 4),
                                S: ["th", "st", "nd", "rd"][l % 10 > 3 ? 0 : (l % 100 - l % 10 !== 10) * l % 10]
                            };
                        return o.replace(t, function(t) {
                            return t in y ? y[t] : t.slice(1, t.length - 1)
                        })
                    }
                }(),
                s = {
                    add: function(t, e, n) {
                        return i(t, e, n)
                    },
                    addHour: function(t, e) {
                        return i("h", t, e)
                    },
                    addMinute: function(t, e) {
                        return i("n", t, e)
                    },
                    addSecond: function(t, e) {
                        return i("s", t, e)
                    },
                    addDay: function(t, e) {
                        return i("d", t, e)
                    },
                    addWeek: function(t, e) {
                        return i("w", t, e)
                    },
                    addMonths: function(t, e) {
                        return i("m", t, e)
                    },
                    addYear: function(t, e) {
                        return i("y", t, e)
                    },
                    isDateEquals: function(t, e) {
                        return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
                    },
                    isEquals: function(t, e) {
                        return t === e || !(!t || !e) && (!(!t.getTime || !e.getTime) && t.getTime() === e.getTime())
                    },
                    isDateString: function(t) {
                        return r.test(t)
                    },
                    format: function(t, e, n) {
                        return a(t, e, n)
                    },
                    parse: function(t) {
                        return "string" == typeof t && (t = t.replace(/-/g, "/")), n(t)
                    },
                    today: function() {
                        var t = new Date;
                        return new Date(t.getFullYear(), t.getMonth(), t.getDate())
                    },
                    getDate: function(t) {
                        return new Date(t.getFullYear(), t.getMonth(), t.getDate())
                    }
                };
            t.exports = s
        },
        function(t, e, n) {
            var i;
            i = {
                albers: n(175),
                mercator: n(176),
                orthographic: n(177)
            }, t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(52),
                a = function(t) {
                    a.superclass.constructor.call(this, t), this._init()
                };
            i.extend(a, r), i.augment(a, {
                "\u03bb0": 0,
                "\u03c60": 0,
                "\u03c61": 0,
                "\u03c62": 0,
                basic: [0, 0, 0, 60],
                _init: function() {
                    this.\u03bb0 = this.toRadians(this.basic[0]), this.\u03c60 = this.toRadians(this.basic[1]), this.\u03c61 = this.toRadians(this.basic[2]), this.\u03c62 = this.toRadians(this.basic[3])
                },
                project: function(t, e) {
                    var n = this.\u03bb0,
                        i = (this.\u03c60, this.\u03c61),
                        r = this.\u03c62,
                        a = .5 * (Math.sin(i) + Math.sin(r)),
                        s = Math.cos(i),
                        o = s * s + 2 * a * Math.sin(i),
                        u = Math.sqrt(o - 2 * a * Math.sin(n)) / a,
                        c = a * (this.toRadians(t) - n),
                        l = Math.sqrt(o - 2 * a * Math.sin(this.toRadians(e))) / a;
                    return {
                        x: this.toDegrees(l * Math.sin(c)),
                        y: this.toDegrees(u - l * Math.cos(c))
                    }
                },
                invert: function(t) {
                    var e = this.\u03bb0,
                        n = (this.\u03c60, this.\u03c61),
                        i = this.\u03c62,
                        r = this.toRadians(t.x),
                        a = this.toRadians(t.y),
                        s = .5 * (Math.sin(n) + Math.sin(i)),
                        o = Math.cos(n),
                        u = o * o + 2 * s * Math.sin(n),
                        c = Math.sqrt(u - 2 * s * Math.sin(e)) / s,
                        l = Math.atan(r / (c - a)),
                        h = Math.sqrt(r * r + Math.pow(c - a, 2));
                    return {
                        x: this.toDegrees(e + l / s),
                        y: this.toDegrees(Math.asin((u - h * h * s * s) / (2 * s)))
                    }
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(52),
                a = function(t) {
                    a.superclass.constructor.call(this, t), this._init()
                };
            i.extend(a, r), i.augment(a, {
                "\u03bb0": 0,
                _init: function() {
                    this.\u03bb0 = this.toRadians(this.\u03bb0)
                },
                project: function(t, e) {
                    return t = this.toRadians(t), e = this.toRadians(e), {
                        x: this.toDegrees(t - this.\u03bb0),
                        y: this.toDegrees(Math.log(Math.tan(Math.PI / 4 + e / 2)))
                    }
                },
                invert: function(t) {
                    var e = this.toRadians(t.x),
                        n = this.toRadians(t.y);
                    return {
                        x: this.toDegrees(e + this.\u03bb0),
                        y: this.toDegrees(2 * Math.atan(Math.exp(n)) - Math.PI / 2)
                    }
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(52),
                a = function(t) {
                    a.superclass.constructor.call(this, t), this._init()
                };
            i.extend(a, r), i.augment(a, {
                "\u03bb0": 110,
                "\u03c61": 25,
                _init: function() {
                    this.\u03bb0 = this.toRadians(this.\u03bb0), this.\u03c61 = this.toRadians(this.\u03c61)
                },
                project: function(t, e) {
                    t = this.toRadians(t), e = this.toRadians(e);
                    var n = Math.cos(e) * Math.sin(t - this.\u03bb0),
                        i = Math.cos(\u03c61) * Math.sin(e) - Math.sin(\u03c61) * Math.cos(e) * Math.cos(t - \u03bb0);
                    return {
                        x: this.toDegrees(n),
                        y: this.toDegrees(i)
                    }
                },
                invert: function(t) {
                    var e = this.toRadians(t.x),
                        n = this.toRadians(t.y),
                        i = Math.sqrt(e * e + n * n),
                        r = Math.asin(i),
                        a = this.\u03bb0 + Math.atan(e * Math.sin(r) / (i * Math.cos(this.\u03c61) * Math.cos(r) - n * Math.sin(this.\u03c611) * Math.sin(r))),
                        s = Math.asin(Math.cos(r) * Math.sin(this.\u03c61) + n * Math.sin(r) * Math.cos(this.\u03c61) / i);
                    return {
                        x: this.toDegrees(a),
                        y: this.toDegrees(s)
                    }
                }
            }), t.exports = a
        },
        function(t, e, n) {
            var i = n(39);
            i.Facet = n(28), i.Rect = n(74), i.List = n(73), i.Circle = n(179), i.Tree = n(181), i.Mirror = n(180), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                return {
                    x: t.x + e * Math.cos(n),
                    y: t.y + e * Math.sin(n)
                }
            }
            var r = n(1),
                a = n(39),
                s = n(2),
                o = n(28),
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            r.extend(u, a), r.augment(u, {
                getRegion: function(t, e) {
                    var n = this,
                        r = n.plotRange,
                        a = Math.min(r.getWidth(), r.getHeight()) / 2,
                        s = 2 * Math.PI / t,
                        o = -1 * Math.PI / 2 + s * e,
                        u = a / (1 + 1 / Math.sin(s / 2)),
                        c = n.getCenter(),
                        l = i(c, a - u, o);
                    return n.getFacetRegion(l, u)
                },
                getFacetRegion: function(t, e) {
                    var n = 3 * Math.PI / 4,
                        r = Math.PI * -1 * 1 / 4;
                    return {
                        start: i(t, e, n),
                        end: i(t, e, r)
                    }
                },
                getCenter: function() {
                    var t = this,
                        e = t.plotRange,
                        n = e.tl,
                        i = e.getWidth(),
                        r = e.getHeight(),
                        a = {
                            x: n.x + i / 2,
                            y: n.y + r / 2
                        };
                    return a
                },
                generateFacets: function(t) {
                    var e = this,
                        n = e.dims,
                        i = n[0];
                    if (!i) throw new Error("Please specify for the field for facet!");
                    var a = e.getDimValues(i, t),
                        u = a.length,
                        c = [],
                        l = 0;
                    return r.each(a, function(n, r) {
                        var h = [{
                                dim: i,
                                value: n,
                                values: a
                            }],
                            f = e.getFilter(h),
                            g = s.filter(t, f),
                            d = new o({
                                type: e.type,
                                xValue: n,
                                xDim: i,
                                colIndex: r,
                                cols: u,
                                rows: 1,
                                rowIndex: 0,
                                frame: g,
                                region: e.getRegion(u, r),
                                index: l++
                            });
                        c.push(d)
                    }), c
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(73),
                a = function(t) {
                    a.superclass.constructor.call(this, t), this._init()
                };
            i.extend(a, r), i.augment(a, {
                type: "mirror",
                transpose: !1,
                drawTitles: function(t, e) {
                    var n = this,
                        r = n.dims,
                        a = n.transpose ? "col" : "row";
                    i.each(t, function(t) {
                        n.drawFacetTitle(a, t, e)
                    }), n.drawDimTitle(a, r[0], e)
                },
                _init: function() {
                    var t = this,
                        e = t.dims,
                        n = e[0];
                    if (!n) throw new Error("Please specify for the field for facet!");
                    t.transpose ? (t.cols = 2, t.rows = 1) : (t.cols = 1, t.rows = 2)
                },
                getRegion: function(t, e, n, i) {
                    var r, a, s = this,
                        o = s.plotRange,
                        u = s.margin,
                        c = o.tl,
                        l = o.br;
                    e > 1 ? (r = (l.x - c.x - u) / e, a = l.y - c.y) : (r = l.x - c.x, a = (l.y - c.y - u) / t);
                    var h = {
                            x: c.x + r * n + n * u,
                            y: c.y + a * (i + 1) + u * i
                        },
                        f = {
                            x: h.x + r,
                            y: h.y - a
                        };
                    return {
                        start: h,
                        end: f
                    }
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(39),
                a = n(2),
                s = n(28),
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(o, r), i.augment(o, {
                rootTitle: "",
                line: {
                    stroke: "red"
                },
                smooth: !1,
                generateFacets: function(t) {
                    var e = this,
                        n = e.dims;
                    if (!n.length) throw new Error("Please specify for the fields for facet!");
                    var i = [],
                        r = e.getRootFacet(t);
                    return i.push(r), r.children = e.getChildFacets(t, 1, i), e.setRegion(i), i
                },
                getRows: function() {
                    return this.dims.length + 1
                },
                drawTitles: function(t, e) {
                    var n = this;
                    n.drawLines(t, e), i.each(t, function(t) {
                        n.drawFacetTitle("col", t, e)
                    })
                },
                drawLines: function(t, e) {
                    var n = this,
                        r = e.addGroup();
                    i.each(t, function(t) {
                        if (!n.isLeaf(t)) {
                            var e = t.children;
                            n._addFacetLines(t, e, r)
                        }
                    })
                },
                _addFacetLines: function(t, e, n) {
                    var r = this,
                        a = t.region,
                        s = {
                            x: a.start.x + (a.end.x - a.start.x) / 2,
                            y: a.start.y
                        };
                    i.each(e, function(t) {
                        var e = t.region,
                            i = {
                                x: e.start.x + (e.end.x - e.start.x) / 2,
                                y: e.end.y
                            },
                            a = {
                                x: s.x,
                                y: s.y + (i.y - s.y) / 2
                            },
                            o = {
                                x: i.x,
                                y: a.y
                            };
                        r._drawLine([s, a, o, i], n)
                    })
                },
                _getPath: function(t) {
                    var e = this,
                        n = "",
                        r = e.smooth;
                    if (r) {
                        var a = [];
                        a.push(["M", t[0].x, t[0].y]), a.push(["C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]), n = a.join(" ")
                    } else i.each(t, function(t, e) {
                        var r = 0 === e ? "M {x} {y}" : "L {x} {y}";
                        n += i.substitute(r, t)
                    });
                    return n
                },
                _drawLine: function(t, e) {
                    var n = this,
                        r = n._getPath(t),
                        a = n.line;
                    e.addShape("Path", {
                        attrs: i.mix({
                            path: r
                        }, a)
                    })
                },
                getRootFacet: function(t) {
                    var e = this,
                        n = new s({
                            type: e.type,
                            rows: e.getRows(),
                            rowIndex: 0,
                            colIndex: 0,
                            xValue: e.rootTitle,
                            frame: t,
                            index: 0
                        });
                    return n
                },
                getChildFacets: function(t, e, n) {
                    var r = this,
                        o = [],
                        u = r.dims,
                        c = u.length;
                    if (c < e) return [];
                    var l = u[e - 1],
                        h = r.getDimValues(l, t);
                    return i.each(h, function(i, u) {
                        var c = [{
                                dim: l,
                                value: i,
                                values: h
                            }],
                            f = r.getFilter(c),
                            g = a.filter(t, f);
                        if (g.rowCount()) {
                            var d = new s({
                                type: r.type,
                                xValue: i,
                                xDim: l,
                                colIndex: u,
                                rows: r.getRows(),
                                rowIndex: e,
                                frame: g,
                                children: r.getChildFacets(g, e + 1, n),
                                index: n.length
                            });
                            o.push(d), n.push(d)
                        }
                    }), o
                },
                getFacetsByLevel: function(t, e) {
                    var n = [];
                    return i.each(t, function(t) {
                        t.rowIndex === e && n.push(t)
                    }), n
                },
                getRegion: function(t, e, n, i) {
                    var r = this,
                        a = r.plotRange,
                        s = r.margin,
                        o = a.bl,
                        u = a.tr,
                        c = (u.x - o.x) / e,
                        l = (u.y - o.y) / t,
                        h = {
                            x: o.x + c * n + s,
                            y: o.y + l * i - s
                        },
                        f = {
                            x: h.x + c - s,
                            y: h.y + 2 * l / 3 + s
                        };
                    return {
                        start: h,
                        end: f
                    }
                },
                getRegionIndex: function(t) {
                    var e = t[0],
                        n = t[t.length - 1];
                    return (n.colIndex - e.colIndex) / 2 + e.colIndex
                },
                setRegion: function(t) {
                    var e = this;
                    e.forceColIndex(t), i.each(t, function(t) {
                        t.region = e.getRegion(t.rows, t.cols, t.colIndex, t.rows - t.rowIndex - 1)
                    })
                },
                isLeaf: function(t) {
                    return !t.children || !t.children.length
                },
                forceColIndex: function(t) {
                    var e = this,
                        n = [],
                        r = 0;
                    i.each(t, function(t) {
                        e.isLeaf(t) && (n.push(t), t.colIndex = r, r++)
                    }), i.each(n, function(t) {
                        t.cols = n.length
                    });
                    for (var a = e.dims.length, s = a - 1; s >= 0; s--)
                        for (var o = e.getFacetsByLevel(t, s), u = 0; u < o.length; u++) {
                            var c = o[u];
                            e.isLeaf(c) || (c.originColIndex = c.colIndex, c.colIndex = e.getRegionIndex(c.children), c.cols = n.length)
                        }
                }
            }), t.exports = o
        },
        function(t, e, n) {
            var i = n(1),
                r = n(24);
            i.augment(r, {
                row: function(t) {
                    var e = this,
                        n = e.colNames(),
                        i = [];
                    return i.push(e._getObject(t, n)), new r(i, {
                        names: n.slice(0)
                    })
                },
                addRow: function(t) {
                    var e = this,
                        n = e.colNames(),
                        r = e.arr;
                    i.each(n, function(e, n) {
                        r[n].push(t[e])
                    })
                },
                rows: function(t) {
                    var e = this,
                        n = e.colNames(),
                        i = e.data,
                        a = [];
                    if (i)
                        for (var s = 0; s < t.length; s++) a.push(e._getObject(s, n));
                    return new r(a, {
                        names: n.slice(0)
                    })
                },
                _getColArray: function(t, e, n) {
                    var r = this,
                        a = r.arr,
                        s = r.colNames(),
                        o = [],
                        u = r.rowCount(),
                        c = i.map(t, function(t) {
                            return i.indexOf(s, t)
                        });
                    e = e || 0, n = i.isNull(n) ? u : n;
                    for (var l = 0; l < c.length; l++) {
                        var h = a[c[l]] || [],
                            f = h.slice(e, n);
                        o.push(f)
                    }
                    return o
                },
                col: function(t) {
                    var e, n = this,
                        a = n.colNames();
                    i.isString(t) ? (e = t, t = i.indexOf(a, e)) : e = a[t];
                    var s = n._getColArray([e]);
                    return new r(s, {
                        names: [e]
                    })
                },
                cols: function(t) {
                    for (var e = this, n = 0; n < t.length; n++) {
                        var a = t[n];
                        i.isNumber(a) && (t[n] = e.names[a])
                    }
                    var s = e._getColArray(t);
                    return new r(s, {
                        names: t
                    })
                },
                cell: function(t, e) {
                    var n = this,
                        r = n.colNames(),
                        a = n.arr;
                    return i.isString(e) && (e = i.indexOf(r, e)), a[e] ? a[e][t] : void 0
                },
                clone: function() {
                    var t = this,
                        e = t.colNames(),
                        n = t.toJSON();
                    return new r(n, {
                        names: e.slice(0)
                    })
                },
                sub: function(t, e, n, a) {
                    var s, o = this,
                        u = o.colNames();
                    return t = t || 0, e ? e += 1 : e = void 0, u = u.slice(t, e), i.isNull(n) || (a ? a += 1 : a = o.rowCount - 1), s = o._getColArray(u, n, a), new r(s, {
                        names: u
                    })
                },
                toString: function() {
                    var t = this,
                        e = [],
                        n = t.arr,
                        i = t.colNames(),
                        r = t.rowCount();
                    e.push(i.join("\t"));
                    for (var a = 0; a < r; a++) {
                        for (var s = [], o = 0; o < n.length; o++) s.push(n[o][a]);
                        e.push(s.join("\t"))
                    }
                    return e.join("\n")
                },
                s: function() {
                    return this.toString()
                }
            }), t.exports = r
        },
        function(t, e, n) {
            function i() {
                var t, e = s.toArray(arguments);
                t = s.isString(e[0]) ? e.shift() : "type";
                var n = [];
                return s.each(e, function(e, i) {
                    s.each(e, function(e) {
                        e[t] = i
                    }), n = n.concat(e)
                }), new u(n)
            }

            function r(t, e, n, i, r) {
                if (i = i || "type", s.isString(r) && (r = [r]), !r) {
                    r = [];
                    var a = t.colNames();
                    s.each(a, function(t) {
                        s.indexOf(e, t) === -1 && r.push(t)
                    })
                }
                var c = [];
                return t.each(function(t) {
                    s.each(e, function(e) {
                        var a = {};
                        a[n] = t[e], a[i] = e, o.mixIf(a, t, r), c.push(a)
                    })
                }), new u(c)
            }

            function a() {
                var t = s.toArray(arguments),
                    e = [],
                    n = [];
                return s.each(t, function(t) {
                    e = e.concat(t.colNames()), n = n.concat(t.toArray())
                }), new u(n, {
                    names: e
                })
            }
            var s = n(1),
                o = n(77),
                u = n(24),
                c = n(172);
            s.mix(u, {
                mean: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.mean(n)
                },
                geometric_mean: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.geometric_mean(n)
                },
                median: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.median(n)
                },
                max: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.max(n)
                },
                min: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.min(n)
                },
                mode: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.mode(n)
                },
                range: function(t, e) {
                    var n = u.max(t, e),
                        i = u.min(t, e);
                    return [i, n]
                },
                sum: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.sum(n)
                },
                quantile: function(t, e, n) {
                    var i = t.colArray(e);
                    return i = o.formatArray(i), i = o.filterNull(i), c.quantile(i, n)
                },
                variance: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.variance(n)
                },
                sample_variance: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.sample_variance(n)
                },
                standard_deviation: function(t, e) {
                    var n = t.colArray(e);
                    return n = o.formatArray(n), n = o.filterNull(n), c.standard_deviation(n)
                },
                sd: function(t, e) {
                    return u.standard_deviation(t, e)
                },
                se: function(t, e) {
                    var n = t.colArray(e);
                    n = o.formatArray(n), n = o.filterNull(n);
                    var i = c.sample_variance(n);
                    return Math.sqrt(i) / Math.sqrt(n.length)
                },
                sortBy: function(t, e) {
                    return o.sort(t, e)
                },
                filter: function(t, e) {
                    var n = [];
                    return e ? (t.each(function(t, i) {
                        e(t, i) && n.push(t)
                    }), new u(n)) : t
                },
                cumulative: function(t, e) {
                    var n = t.colArray(e);
                    n = o.filterNull(n);
                    var i = [],
                        r = 0;
                    return s.each(n, function(t) {
                        r += t, i.push(r)
                    }), i
                },
                complement: function(t, e) {
                    var n = t.colNames().slice(0);
                    return s.each(e, function(t) {
                        s.remove(n, t)
                    }), t.cols(n)
                },
                forceMerge: function() {
                    var t = s.toArray(arguments),
                        e = [],
                        n = [];
                    return s.each(t, function(t) {
                        var n = t.colNames();
                        s.each(n, function(t) {
                            s.indexOf(e, t) === -1 && e.push(t)
                        })
                    }), s.each(t, function(t) {
                        var e = t.toJSON();
                        n = n.concat(e)
                    }), new u(n, {
                        names: e
                    })
                },
                combine: a,
                combin: a,
                combineColumns: r,
                combinColumns: r,
                combineArray: i,
                combinArray: i
            }), u.Array = {
                repeat: function(t, e) {
                    for (var n = [], i = 0; i < e; i++) n.push(t);
                    return n
                }
            }, t.exports = u
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                if (!t._attrs && t !== r) {
                    var e = t.superclass.constructor;
                    e && !e._attrs && i(e), t._attrs = {}, a.mix(!0, t._attrs, e._attrs), a.mix(!0, t._attrs, t.ATTRS)
                }
            }
            var r, a = n(1);
            r = function(t) {
                i(this.constructor), this._attrs = {}, this.events = {};
                var e = this.getDefaultCfg();
                a.mix(this._attrs, e, t)
            }, a.augment(r, {
                getDefaultCfg: function() {
                    var t = this,
                        e = t.constructor,
                        n = e._attrs,
                        i = a.mix(!0, {}, n);
                    return i
                },
                set: function(t, e) {
                    var n = "_onRender" + a.ucfirst(t);
                    return this[n] && this[n](e, this._attrs[t]), this._attrs[t] = e, this
                },
                get: function(t) {
                    return this._attrs[t]
                },
                on: function(t, e) {
                    var n = this,
                        i = n.events,
                        r = i[t];
                    return r || (r = i[t] = []), r.push(e), n
                },
                fire: function(t, e) {
                    var n = this,
                        i = n.events,
                        r = i[t];
                    r && a.each(r, function(t) {
                        t(e)
                    })
                },
                off: function(t, e) {
                    var n = this,
                        i = n.events,
                        r = i[t];
                    return t ? (r && a.remove(r, e), n) : (n.events = {}, n)
                },
                destroy: function() {
                    var t = this,
                        e = t.destroyed;
                    return e ? t : (t._attrs = {}, t.events = {}, void(t.destroyed = !0))
                }
            }), t.exports = r
        },
        function(t, e) {
            "use strict";

            function n(t) {
                w = t.length, w && (b = t[0].length), w > 1 && b > 1 && (x = t[0][0][0], _ = t[0][0][1], y = t[1][0][0] - t[0][0][0], S = t[0][1][1] - t[0][0][1])
            }

            function i(t, e) {
                var n = r(!0, t, e),
                    i = r(!1, t, e);
                return [n, i]
            }

            function r(t, e, n) {
                var i = w,
                    r = b,
                    s = [];
                t ? r-- : i--;
                for (var o = 0; o < i; o++) {
                    s[o] = [];
                    for (var u = 0; u < r; u++) {
                        s[o][u] = {};
                        var c, l;
                        if (c = e[o][u][2], l = t ? e[o][u + 1][2] : e[o + 1][u][2], a(c, l)) s[o][u].rate = -2, s[o][u].have_iso_point = !1;
                        else {
                            var h = a(n, c),
                                f = a(n, l),
                                g = (n - c) * (n - l);
                            if (h || f) {
                                h ? c += M : l += M;
                                var d = s[o][u].rate = (n - c) / (l - c);
                                d > 0 && d < 1 ? s[o][u].have_iso_point = !0 : s[o][u].have_iso_point = !1
                            } else g > 0 ? (s[o][u].rate = -2, s[o][u].have_iso_point = !1) : g < 0 && (s[o][u].rate = (n - c) / (l - c), s[o][u].have_iso_point = !0)
                        }
                    }
                }
                return s
            }

            function a(t, e) {
                return Math.abs(t - e) < 1e-9
            }

            function s(t, e, n, i) {
                var r = 0,
                    a = 0,
                    s = c(),
                    u = c();
                for (r = 0; r < w - 1; r++) e[r][0].have_iso_point && (s = c(r, -1, !1), u = c(r, 0, !1), o(s, u, n, i, t, e));
                for (a = 0; a < b - 1; a++) t[w - 1][a].have_iso_point && (s = c(w, a, !0), u = c(w - 1, a, !0), o(s, u, n, i, t, e));
                for (r = 0; r < w - 1; r++) e[r][b - 1].have_iso_point && (s = c(r, b, !1), u = c(r, b - 1, !1), o(s, u, n, i, t, e));
                for (a = 0; a < b - 1; a++) t[0][a].have_iso_point && (s = c(-1, a, !0), u = c(0, a, !0), o(s, u, n, i, t, e))
            }

            function o(t, e, n, i, r, a) {
                var s = !1,
                    o = {
                        value: n,
                        path: []
                    };
                for (h(e, r, a), o.path.push(u(e, r, a)); !s && f(e, t, r, a, o);) s = !e.row && e.isHorizon || !e.col && !e.isHorizon || e.row == w - 1 || e.col == b - 1;
                i.push(o)
            }

            function u(t, e, n) {
                var i = t.row,
                    r = t.col,
                    a = t.isHorizon,
                    s = x + i * y,
                    o = _ + r * S;
                return a ? o += e[i][r].rate * S : s += n[i][r].rate * y, [s, o]
            }

            function c(t, e, n) {
                return {
                    row: t || 0,
                    col: e || 0,
                    isHorizon: n || 0,
                    clone: l
                }
            }

            function l(t) {
                this.row = t.row, this.col = t.col, this.isHorizon = t.isHorizon
            }

            function h(t, e, n) {
                var i = t.row,
                    r = t.col,
                    a = t.isHorizon;
                return a ? e[i][r].have_iso_point = !1 : n[i][r].have_iso_point = !1, t
            }

            function f(t, e, n, i, r) {
                var a = c(),
                    s = c(),
                    o = c();
                g(a, s, o, t, e);
                for (var l = [a, s, o], f = [], v = {}, m = !1, x = 0; x < 3; x++) f[x] = d(n, i, l[x]);
                if (f[0] && f[1] && f[2]) v = p(t, l[0], n, i) < p(t, l[1], n, i) ? h(l[0], n, i) : h(l[1], n, i), m = !0;
                else
                    for (var x = 0; x < 3; x++)
                        if (f[x]) {
                            v = h(l[x], n, i), m = !0;
                            break
                        } return m && (r.path.push(u(v, n, i)), e.clone(t), t.clone(v)), m
            }

            function g(t, e, n, i, r) {
                return i.row > r.row ? (t.clone(i), t.isHorizon = !1, e.clone(t), e.col += 1, n.clone(i), void(n.row += 1)) : i.col > r.col ? (e.clone(i), e.isHorizon = !0, t.clone(e), t.row += 1, n.clone(i), void(n.col += 1)) : i.isHorizon ? (e.clone(i), e.row -= 1, e.isHorizon = !1, t.clone(e), t.col += 1, n.clone(i), void(n.row -= 1)) : (t.clone(i), t.col -= 1, t.isHorizon = !0, e.clone(t), e.row += 1, n.clone(i), void(n.col -= 1))
            }

            function d(t, e, n) {
                var i = n.row,
                    r = n.col,
                    a = n.isHorizon;
                return a ? t[i][r].have_iso_point : e[i][r].have_iso_point
            }

            function p(t, e, n, i) {
                var r = u(t, n, i),
                    a = u(e, n, i),
                    s = r.x - a.x,
                    o = r.y - a.y;
                return Math.sqrt(s * s + o * o)
            }

            function v(t, e, n, i) {
                var r, a, s = c(),
                    o = c();
                for (a = 0; a < b - 1; a++)
                    for (r = 0; r < w - 1; r++) e[r][a].have_iso_point && (s = c(r, 0, !1), o = c(r, a, !1), m(s, o, t, e, n, i))
            }

            function m(t, e, n, i, r, a) {
                var s = e.row,
                    o = e.col,
                    c = !1,
                    l = {
                        value: r,
                        path: []
                    };
                for (l.path.push(u(e, n, i)); !c && f(e, t, n, i, l);) c = e.row == s && e.col == o && !e.isHorizon;
                a.push(l)
            }
            var x, y, _, S, w = 0,
                b = 0,
                M = .001,
                A = function(t, e) {
                    var r, a = [],
                        o = [],
                        u = [];
                    n(t);
                    for (var c = 0; c < e.length; c++) {
                        r = e[c];
                        var l = i(t, r);
                        a = l[0], o = l[1], s(a, o, r, u), v(a, o, r, u)
                    }
                    return u
                };
            t.exports = A
        },
        [342, 187, 80],
        function(t, e, n) {
            "use strict";

            function i(t, e, n, i) {
                var r = t[i] + (e[i] - t[i]) * n;
                return r
            }
            var r = n(80),
                a = n(1);
            t.exports = {
                calColor: function(t, e, n) {
                    var a, s = t.length - 1,
                        o = Math.floor(s * e),
                        u = s * e - o,
                        c = t[o],
                        l = o === s ? c : t[o + 1];
                    return "hsl" === n ? a = r.hsl2Rgb([i(c, l, u, 0), i(c, l, u, 1), i(c, l, u, 2)]) : (a = {
                        r: i(c, l, u, 0),
                        g: i(c, l, u, 1),
                        b: i(c, l, u, 2)
                    }, a = "#" + r.toHex(a.r) + r.toHex(a.g) + r.toHex(a.b)), a
                },
                lightness: function(t, e) {
                    e = e || 0;
                    var n = [
                        [e, 1, .9],
                        [e, 1, .5]
                    ];
                    return this.calColor(n, t, "hsl")
                },
                red: function(t) {
                    return this.lightness(t, 0)
                },
                blue: function(t) {
                    return this.lightness(t, .66)
                },
                green: function(t) {
                    return this.lightness(t, .33)
                },
                gradient: function(t) {
                    var e = this,
                        n = [];
                    return a.isString(t) && (t = t.split("-")), a.each(t, function(t) {
                            t.indexOf("#") === -1 && (t = r.toRGB(t)), n.push(r.rgb2arr(t))
                        }),
                        function(t) {
                            return e.calColor(n, t)
                        }
                },
                gradientHsl: function(t) {
                    var e = this,
                        n = [];
                    return a.isString(t) && (t = t.split("-")), a.each(t, function(t) {
                            t.indexOf("#") === -1 && (t = r.toRGB(t)), n.push(r.rgb2hsl(t))
                        }),
                        function(t) {
                            return e.calColor(n, t, "hsl")
                        }
                },
                saturation: function(t, e) {
                    e = e || 0;
                    var n = [
                        [e, 0, .5],
                        [e, 1, .5]
                    ];
                    return this.calColor(n, t, "hsl")
                },
                hue: function(t) {
                    var e = [
                        [0, 1, .5],
                        [1, 1, .5]
                    ];
                    return this.calColor(e, t, "hsl")
                },
                brightness: function(t) {
                    var e = [
                        [255, 255, 255],
                        [0, 0, 0]
                    ];
                    return this.calColor(e, t)
                },
                heat: function(t) {
                    var e = [
                        [255, 255, 255],
                        [255, 127.5, 0],
                        [0, 0, 0]
                    ];
                    return this.calColor(e, t)
                },
                rainbow: function(t) {
                    var e = [
                        [0, 255, 255],
                        [0, 0, 255],
                        [0, 255, 0],
                        [255, 0, 0]
                    ];
                    return this.calColor(e, t)
                },
                circular: function(t) {
                    var e = [
                        [0, 0, 255],
                        [0, 255, 0],
                        [255, 255, 0],
                        [255, 0, 0],
                        [0, 0, 255]
                    ];
                    return this.calColor(e, t)
                },
                bipolar: function(t) {
                    var e = [
                        [0, 255, 0],
                        [0, 0, 0],
                        [255, 0, 0]
                    ];
                    return this.calColor(e, t)
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var i = n(30),
                r = n(22),
                a = r.Shape.superclass.constructor,
                s = r.Canvas,
                o = n(82);
            i.mixin(a, [o.GMixin]), i.mixin(r.Group, [o.GroupMixin]);
            var u = function(t) {
                u.superclass.constructor.call(this, t)
            };
            u.CFG = {
                width: null,
                height: null,
                widthCanvas: null,
                heightCanvas: null,
                widthStyle: null,
                heightStyle: null,
                containerDOM: null,
                canvasDOM: null,
                pixelRatio: null
            }, i.extend(u, s), i.augment(u, {
                init: function() {
                    u.superclass.constructor.superclass.init.call(this), this._setGlobalParam(), this._setDOM(), this._setInitSize(), this._setCanvas(), this._scale()
                },
                _scale: function() {
                    var t = this.get("pixelRatio");
                    this.scale(t, t)
                },
                _setCanvas: function() {
                    var t = this.get("canvasDOM");
                    this.set("el", t), this.set("context", t.getContext("2d")), this.set("canvas", this), this.__events()
                },
                _setGlobalParam: function() {
                    var t = this.get("pixelRatio");
                    t || this.set("pixelRatio", i.getRatio())
                },
                _setDOM: function() {
                    this._setContainer(), this._setLayer()
                },
                _setContainer: function() {
                    var t = this.get("containerId"),
                        e = this.get("containerDOM");
                    e || (e = document.getElementById(t), this.set("containerDOM", e)), i.modiCSS(e, {
                        position: "relative"
                    })
                },
                _setLayer: function() {
                    var t = this.get("containerDOM"),
                        e = i.guid("canvas_");
                    if (t) {
                        var n = i.createDom('<canvas id="' + e + '"></canvas>');
                        t.appendChild(n), this.set("canvasDOM", n)
                    }
                },
                _setInitSize: function() {
                    this.get("widthStyle") ? this.changeSizeByCss(this.get("widthStyle"), this.get("heightStyle")) : this.get("width") && this.changeSize(this.get("width"), this.get("height"))
                },
                _getPx: function(t, e) {
                    var n = this.get("canvasDOM");
                    n.style[t] = e;
                    var r = i.getBoundingClientRect(n);
                    return "width" === t ? r.right - r.left : "height" === t ? r.bottom - r.top : void 0
                },
                _reSize: function() {
                    var t = this.get("canvasDOM"),
                        e = this.get("widthCanvas"),
                        n = this.get("heightCanvas"),
                        i = this.get("widthStyle"),
                        r = this.get("heightStyle");
                    t.style.width = i, t.style.height = r, t.setAttribute("width", e), t.setAttribute("height", n)
                },
                getWidth: function() {
                    var t = this.get("pixelRatio"),
                        e = this.get("width");
                    return e * t
                },
                getHeight: function() {
                    var t = this.get("pixelRatio"),
                        e = this.get("height");
                    return e * t
                },
                changeSizeByCss: function(t, e) {
                    var n = this.get("pixelRatio"),
                        t = this._getPx("width", t),
                        e = this._getPx("height", e),
                        i = t * n,
                        r = e * n;
                    this.set("widthStyle", t), this.set("heightStyle", e), this.set("widthCanvas", i), this.set("heightCanvas", r), this.set("width", t), this.set("height", e), this._reSize()
                },
                changeSize: function(t, e) {
                    var n = this.get("pixelRatio"),
                        i = t * n,
                        r = e * n;
                    this.set("widthCanvas", i), this.set("heightCanvas", r), this.set("widthStyle", t + "px"), this.set("heightStyle", e + "px"), this.set("width", t), this.set("height", e), this._reSize()
                },
                destroy: function() {
                    var t = this.get("containerDOM"),
                        e = this.get("canvasDOM");
                    e && t && t.removeChild(e), u.superclass.destroy.call(this)
                }
            }), t.exports = u;
        },
        function(t, e, n) {
            var i = n(30),
                r = (n(22), function() {});
            i.augment(r, {
                getParent: function() {
                    return this.get("parent") || this.get("father")
                },
                getDefaultCfg: function() {
                    i.initClassCfgs(this.constructor);
                    var t = i.mix(!0, {}, this.constructor.__cfg);
                    return t
                },
                getBBBox: function() {
                    var t = this.getBBox();
                    return t ? (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY, t.centerX = t.x + t.width / 2, t.centerY = t.y + t.height / 2) : t = {
                        x: 0,
                        y: 0,
                        centerX: 0,
                        centerY: 0,
                        width: 0,
                        height: 0
                    }, t
                },
                move: function(t, e) {
                    var n = this,
                        i = n.get("x") || 0,
                        r = n.get("y") || 0;
                    n.translate(t - i, e - r), n.set("x", t), n.set("y", e)
                }
            }), t.exports = r
        },
        function(t, e, n) {
            var i = n(30),
                r = n(22),
                a = n(81),
                s = function() {};
            i.augment(s, {
                addShape: function(t, e) {
                    var n, a = this.get("canvas");
                    return e = i.mix({}, e), e ? (e.type = t, e.canvas = a, e.father = this, t = i.upperFirst(t), n = new r[t](e)) : n = new r[t], this.add(n), n
                },
                addGroup: function(t, e) {
                    var n, r = this.get("canvas");
                    if (e = i.mix({}, e), i.isFunction(t)) e ? (e.canvas = r, e.father = this, n = new t(e)) : n = new t({
                        canvas: r,
                        father: this
                    }), this.add(n);
                    else if (i.isObject(t)) t.canvas = r, n = new a(t), this.add(n);
                    else {
                        if (void 0 !== t) return !1;
                        n = new a, this.add(n)
                    }
                    return n
                },
                findByCFG: function(t, e) {
                    var n = this.get("children"),
                        r = [];
                    return i.each(n, function(n, i) {
                        n.get(t) === e && r.push(n)
                    }), r
                }
            }), t.exports = s
        },
        function(t, e) {
            var n = function(t, e, n) {
                    var i, r, a, s, o = !0;
                    for (i = 0; i < n - 1; i++) {
                        if (0 == t[i][i]) {
                            o = !1;
                            break
                        }
                        for (r = i + 1; r < n; r++)
                            for (s = -t[r][i] / t[i][i], e[r] = e[r] + s * e[i], a = i; a < n; a++) t[r][a] = t[r][a] + s * t[i][a]
                    }
                    for (i = 0; i < n; i++)
                        if (0 == t[i][i]) {
                            o = !1;
                            break
                        }
                    return o
                },
                i = function(t, e) {
                    var i = [],
                        r = t,
                        a = e,
                        s = a.length,
                        o = n(r, a, s);
                    if (o) {
                        i[s - 1] = a[s - 1] / r[s - 1][s - 1];
                        for (var u = s - 2; u >= 0; u--) {
                            i[u] = a[u];
                            for (var c = u + 1; c < s; c++) i[u] = i[u] - r[u][c] * i[c];
                            i[u] = i[u] / r[u][u]
                        }
                    } else i = !1;
                    return i
                };
            t.exports = i
        },
        function(t, e, n) {
            var i = (n(1), n(19)),
                r = n(84);
            r.Weight = n(83), r.Sankey = n(193), i.link = function(t, e) {
                return new r({
                    dims: t,
                    nodes: e
                })
            }, i.link.weight = function(t, e) {
                return new r.Weight({
                    dims: t,
                    nodes: e
                })
            }, i.link.sankey = function(t, e) {
                return new r.Sankey({
                    dims: t,
                    nodes: e
                })
            }, t.exports = i
        },
        function(t, e, n) {
            var i = n(1),
                r = n(2),
                a = n(83),
                s = "..x",
                o = "..y",
                u = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(u, a), i.augment(u, {
                type: "sankey",
                detachment: !0,
                _getValueField: function() {
                    var t = this.getDims();
                    return t[4]
                },
                initDims: function(t) {
                    t.unshift(o), t.unshift(s), this.valueField = this._getValueField()
                },
                edgeLayout: function(t, e, n) {
                    var r = this,
                        a = r.nodes,
                        u = "in" === t ? r.edgesSortByFromNodes : r.edgesSortByToNodes,
                        c = t + "Edges",
                        l = r.valueField;
                    a.forEach(function(t) {
                        if (t[c].length > 0) {
                            t[c].sort(u.bind(r));
                            var a = t.x - .5 * t.width;
                            t[c].forEach(function(u) {
                                var c = u[l] * e,
                                    h = a + c;
                                h - (t.x + .5 * t.width) < r.PRECISION && (i.isNull(u[s]) && (u[s] = []), i.isNull(u[o]) && (u[o] = []), u[s].push(a), u[s].push(h), u[o].push(t.y), u[o].push(t.y), n.push(u)), a = h
                            })
                        }
                    })
                },
                execFrame: function() {
                    var t = this.nodes,
                        e = this.valueField,
                        n = t[0].width / t[0][e],
                        i = [];
                    return this.edgeLayout("out", n, i), this.edgeLayout("in", n, i), new r(i)
                },
                edgesSortByToNodes: function(t, e) {
                    var n = this._getToField(),
                        i = this._findObj(t[n]),
                        r = this._findObj(e[n]);
                    return i.x - r.x
                },
                edgesSortByFromNodes: function(t, e) {
                    var n = this._getFromField(),
                        i = this._findObj(t[n]),
                        r = this._findObj(e[n]);
                    return i.x - r.x
                }
            }), t.exports = u
        },
        function(t, e, n) {
            var i = n(195);
            t.exports = i
        },
        function(t, e) {
            "use strict";

            function n(t, e, i) {
                i = i || 0;
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var o = e[r];
                        null !== o && s.isObject(o) ? (s.isObject(t[r]) || (t[r] = {}), i < a ? n(t[r], e[r], i + 1) : t[r] = e[r]) : s.isArray(o) ? (t[r] = [], t[r] = t[r].concat(o)) : void 0 !== o && (t[r] = e[r])
                    }
            }
            var i = Object.prototype,
                r = i.toString,
                a = 5,
                s = {
                    substitute: function(t, e) {
                        return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, n) {
                            return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[n] ? "" : e[n]
                        }) : t
                    },
                    ucfirst: function(t) {
                        return t += "", t.charAt(0).toUpperCase() + t.substring(1)
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isNumeric: function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    },
                    isBoolean: function(t) {
                        return "boolean" == typeof t
                    },
                    isFunction: function(t) {
                        return "function" == typeof t
                    },
                    isArray: "isArray" in Array ? Array.isArray : function(t) {
                        return "[object Array]" === r.call(t)
                    },
                    isDate: function(t) {
                        return "[object Date]" === r.call(t)
                    },
                    isNull: function(t) {
                        return void 0 === t || null === t
                    },
                    notNull: function(t) {
                        return !s.isNull(t)
                    },
                    isBlank: function(t) {
                        if (s.isArray(t)) return 0 === t.length;
                        if (s.isObject(t)) {
                            var e = 0;
                            return s.each(t, function(t, n) {
                                e++
                            }), 0 === e
                        }
                        return !1
                    },
                    isObject: "[object Object]" === r.call(null) ? function(t) {
                        return null !== t && void 0 !== t && "[object Object]" === r.call(t) && void 0 === t.ownerDocument
                    } : function(t) {
                        return "[object Object]" === r.call(t)
                    },
                    extend: function(t, e, n, i) {
                        s.isFunction(e) || (n = e, e = t, t = function() {});
                        var r = Object.create ? function(t, e) {
                                return Object.create(t, {
                                    constructor: {
                                        value: e
                                    }
                                })
                            } : function(t, e) {
                                function n() {}
                                n.prototype = t;
                                var i = new n;
                                return i.constructor = e, i
                            },
                            a = r(e.prototype, t);
                        return t.prototype = s.mix(a, t.prototype), t.superclass = r(e.prototype, e), s.mix(a, n), s.mix(t, i), t
                    },
                    augment: function(t) {
                        for (var e = s.toArray(arguments), n = 1; n < e.length; n++) {
                            var i = e[n];
                            s.isFunction(i) && (i = i.prototype), s.mix(t.prototype, i)
                        }
                    },
                    toArray: function(t) {
                        return t && t.length ? Array.prototype.slice.call(t) : []
                    },
                    mix: function() {
                        var t = s.toArray(arguments),
                            e = t[0];
                        if (e === !0) {
                            e = t[1];
                            for (var i = 2; i < t.length; i++) {
                                var r = t[i];
                                n(e, r)
                            }
                        } else
                            for (var i = 1; i < t.length; i++) {
                                var r = t[i];
                                for (var a in r) r.hasOwnProperty(a) && "constructor" !== a && (e[a] = r[a])
                            }
                        return e
                    },
                    each: function(t, e) {
                        if (t)
                            if (s.isObject(t)) {
                                for (var n in t)
                                    if (t.hasOwnProperty(n)) {
                                        var i = e(t[n], n);
                                        if (i === !1) break
                                    }
                            } else if (t.length)
                            for (var r = 0; r < t.length; r++) {
                                var i = e(t[r], r);
                                if (i === !1) break
                            }
                    },
                    requestAnimationFrame: function(t) {
                        var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                            return setTimeout(t, 16)
                        };
                        return e(t)
                    },
                    cancelAnimationFrame: function(t) {
                        var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function(t) {
                            return clearTimeout(t)
                        };
                        return e(t)
                    }
                };
            t.exports = s
        },
        function(t, e, n) {
            var i = n(31);
            i.Dodge = n(197), i.Jitter = n(198), i.Stack = n(199), i.Symmetric = n(200), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(31),
                a = n(2),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            i.extend(s, r), i.augment(s, {
                marginRatio: .5,
                dodgeRatio: .5,
                _getDodgeDim: function(t) {
                    var e = this,
                        n = null;
                    return i.each(t, function(t) {
                        if (t !== e.xDim) return n = t, !1
                    }), n
                },
                processAdjust: function(t) {
                    var e = this,
                        n = a.merge.apply(null, t),
                        i = e.groupDims,
                        r = e._getDodgeDim(i);
                    return r && (t = a.group(n, r)), e.adjFrames = t, e.mergeFrame = n, t = e.adjustFrames(t, n), r && (n = a.merge.apply(null, t), t = a.group(n, i)), e.adjFrames = null, e.mergeFrame = null, t
                },
                getDistribution: function(t) {
                    var e = this,
                        n = e.adjFrames,
                        r = {};
                    return i.each(n, function(e, n) {
                        var s = a.values(e, t);
                        s.length || s.push(0), i.each(s, function(t) {
                            r[t] || (r[t] = []), r[t].push(n)
                        })
                    }), r
                },
                adjustDim: function(t, e, n, r, a) {
                    var s = this,
                        o = s.getDistribution(t),
                        u = s.groupData(n, t);
                    i.each(u, function(n, r) {
                        r = parseFloat(r);
                        var u;
                        u = 1 === e.length ? {
                            pre: -1,
                            next: 1
                        } : s.getAdjustRange(t, r, e), i.each(n, function(e) {
                            var n = e[t],
                                r = o[n],
                                c = i.indexOf(r, a);
                            e[t] = s.getDodgeOffset(u, c, r.length)
                        })
                    })
                },
                getDodgeOffset: function(t, e, n) {
                    var i, r = this,
                        a = t.pre,
                        s = t.next,
                        o = s - a,
                        u = o * r.dodgeRatio / n,
                        c = r.marginRatio * u;
                    return i = .5 * (o - n * u - (n - 1) * c) + ((e + 1) * u + e * c) - .5 * u - .5 * o, (a + s) / 2 + i
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(31),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                getAdjustOffset: function(t, e) {
                    var n = Math.random(),
                        i = e - t,
                        r = .05 * i;
                    return t + r + .9 * i * n
                },
                _adjustGroup: function(t, e, n, r) {
                    var a = this,
                        s = a.getAdjustRange(e, n, r);
                    i.each(t, function(t) {
                        t[e] = a.getAdjustOffset(s.pre, s.next)
                    })
                },
                adjustDim: function(t, e, n) {
                    var r = this,
                        a = r.groupData(n, t);
                    i.each(a, function(n, i) {
                        i = parseFloat(i), r._adjustGroup(n, t, i, e)
                    })
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = n(31),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            i.extend(s, a), i.augment(s, {
                height: null,
                size: 10,
                adjustNames: ["y"],
                processOneDimStack: function(t) {
                    for (var e = this, n = e.xDim, i = e.yDim || "y", a = e.height, s = {}, o = [], u = 0; u < t.length; u++) {
                        for (var c = t[u].toJSON(), l = 0; l < c.length; l++) {
                            var h = c[l],
                                f = h.size || e.size,
                                g = 2 * f / a,
                                d = h[n];
                            s[d] || (s[d] = g / 2), h[i] = s[d], s[d] += g
                        }
                        o.push(new r(c))
                    }
                    return o
                },
                processAdjust: function(t) {
                    var e = this;
                    return t = e.yDim ? e.processStack(t) : e.processOneDimStack(t)
                },
                processStack: function(t) {
                    for (var e = this, n = e.xDim, a = e.yDim, s = t.length, o = [], u = {
                            positive: {},
                            negative: {}
                        }, c = [], l = 0; l < s; l++) {
                        for (var h = t[l].toJSON(), f = 0; f < h.length; f++) {
                            var g = h[f],
                                d = g[n],
                                p = g[a] || 0,
                                v = d.toString();
                            p = i.isArray(p) ? p[1] : p;
                            var m = p >= 0 ? "positive" : "negative";
                            u[m][v] || (u[m][v] = 0), g[a] = [u[m][v], p + u[m][v]], u[m][v] += p
                        }
                        o.push(h)
                    }
                    return i.each(o, function(t) {
                        var e = new r(t);
                        c.push(e)
                    }), c
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = n(31),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            i.extend(s, a), i.augment(s, {
                cacheMax: null,
                adjustNames: ["y"],
                _getMax: function(t) {
                    var e = this,
                        n = e.mergeFrame,
                        i = r.max(n, t);
                    return i
                },
                _getXValuesMax: function() {
                    var t = this,
                        e = t.yDim,
                        n = t.xDim,
                        r = {},
                        a = t.mergeFrame;
                    return a.each(function(t) {
                        var a = t[n],
                            s = t[e],
                            o = i.isArray(s) ? Math.max.apply(null, s) : s;
                        r[a] = r[a] || 0, r[a] < o && (r[a] = o)
                    }), r
                },
                processAdjust: function(t) {
                    var e = this,
                        n = r.merge.apply(null, t);
                    return e.mergeFrame = n, t = e._processSymmetric(t), e.mergeFrame = null, t
                },
                _processSymmetric: function(t) {
                    var e, n = this,
                        a = n.xDim,
                        s = n.yDim,
                        o = n._getMax(s),
                        u = t[0].rowObject(0),
                        c = [];
                    return u && i.isArray(u[s]) && (e = n._getXValuesMax()), i.each(t, function(t) {
                        var n = t.toJSON();
                        i.each(n, function(t) {
                            var n, r = t[s];
                            if (i.isArray(r)) {
                                var u = t[a],
                                    c = e[u];
                                n = (o - c) / 2;
                                var l = [];
                                i.each(r, function(t) {
                                    l.push(n + t)
                                }), t[s] = l
                            } else n = (o - r) / 2, t[s] = [n, r + n]
                        }), c.push(new r(n))
                    }), c
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n, i) {
                var r = t[i] + (e[i] - t[i]) * n;
                return r
            }
            var r = n(86),
                a = n(1),
                s = {
                    calColor: function(t, e, n) {
                        var a, s = t.length - 1,
                            o = Math.floor(s * e),
                            u = s * e - o,
                            c = t[o],
                            l = o === s ? c : t[o + 1];
                        return "hsl" === n ? a = r.hsl2Rgb([i(c, l, u, 0), i(c, l, u, 1), i(c, l, u, 2)]) : (a = {
                            r: i(c, l, u, 0),
                            g: i(c, l, u, 1),
                            b: i(c, l, u, 2)
                        }, a = "#" + r.toHex(a.r) + r.toHex(a.g) + r.toHex(a.b)), a
                    },
                    lightness: function(t, e) {
                        e = e || 0;
                        var n = [
                            [e, 1, .9],
                            [e, 1, .5]
                        ];
                        return s.calColor(n, t, "hsl")
                    },
                    red: function(t) {
                        return s.lightness(t, 0)
                    },
                    blue: function(t) {
                        return s.lightness(t, .66)
                    },
                    green: function(t) {
                        return s.lightness(t, .33)
                    },
                    gradient: function(t) {
                        var e = [];
                        return a.isString(t) && (t = t.split("-")), a.each(t, function(t) {
                                t.indexOf("#") === -1 && (t = r.toRGB(t)), e.push(r.rgb2arr(t))
                            }),
                            function(t) {
                                return s.calColor(e, t)
                            }
                    },
                    gradientHsl: function(t) {
                        var e = [];
                        return a.isString(t) && (t = t.split("-")), a.each(t, function(t) {
                                t.indexOf("#") === -1 && (t = r.toRGB(t)), e.push(r.rgb2hsl(t))
                            }),
                            function(t) {
                                return s.calColor(e, t, "hsl")
                            }
                    },
                    saturation: function(t, e) {
                        e = e || 0;
                        var n = [
                            [e, 0, .5],
                            [e, 1, .5]
                        ];
                        return s.calColor(n, t, "hsl")
                    },
                    hue: function(t) {
                        var e = [
                            [0, 1, .5],
                            [1, 1, .5]
                        ];
                        return s.calColor(e, t, "hsl")
                    },
                    brightness: function(t) {
                        var e = [
                            [255, 255, 255],
                            [0, 0, 0]
                        ];
                        return s.calColor(e, t)
                    },
                    heat: function(t) {
                        var e = [
                            [255, 255, 255],
                            [255, 127.5, 0],
                            [0, 0, 0]
                        ];
                        return s.calColor(e, t)
                    },
                    rainbow: function(t) {
                        var e = [
                            [0, 255, 255],
                            [0, 0, 255],
                            [0, 255, 0],
                            [255, 0, 0]
                        ];
                        return s.calColor(e, t)
                    },
                    circular: function(t) {
                        var e = [
                            [0, 0, 255],
                            [0, 255, 0],
                            [255, 255, 0],
                            [255, 0, 0],
                            [0, 0, 255]
                        ];
                        return s.calColor(e, t)
                    },
                    bipolar: function(t) {
                        var e = [
                            [0, 255, 0],
                            [0, 0, 0],
                            [255, 0, 0]
                        ];
                        return s.calColor(e, t)
                    }
                };
            t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(186),
                a = function(t) {
                    i.mix(this, t)
                };
            i.augment(a, {
                get: function(t) {
                    return this[t]
                },
                set: function(t, e) {
                    this[t] = e
                },
                width: 500,
                height: 500,
                x: 0,
                y: 0,
                min: null,
                max: null,
                formatter: function(t) {
                    return t
                },
                radius: 60,
                blur: 0,
                colors: ["rgb(0,0,255)", "rgb(0,0,255)", "rgb(0,255,0)", "yellow", "rgb(255,0,0)"],
                _mkcircle: function(t, e, n, i) {
                    var r = this.blur,
                        a = this.radius,
                        s = i.createRadialGradient(t, e, a * r, t, e, a);
                    s.addColorStop(0, "rgba(0, 0, 0, 1)"), s.addColorStop(1, "rgba(0, 0, 0, 0)"), i.globalAlpha = n, i.fillStyle = s
                },
                _colorise: function(t) {
                    for (var e = this.width, n = this.height, i = t.getImageData(this.x, this.y, e, n), a = i.data, s = a.length, o = this.colors, u = r.gradient(o), c = 3; c < s; c += 4) {
                        var l = a[c];
                        if (l) {
                            var h = r.Util.rgb2arr(u(l / 256));
                            a[c - 3] = h[0], a[c - 2] = h[1], a[c - 1] = h[2], a[c] = l
                        }
                    }
                    return i
                },
                getData: function(t) {
                    for (var e = [], n = t.length - 1; n >= 0; n--) e.push(t[n][2]);
                    var r = i.isNull(this.max) ? Math.max.apply(null, e) : this.max,
                        a = i.isNull(this.min) ? Math.min.apply(null, e) : this.min;
                    if (r === a) return !1;
                    var s = document.createElement("canvas"),
                        o = s.getContext("2d");
                    s.width = this.width + this.x, s.height = this.height + this.y;
                    for (var u = this.formatter, n = t.length - 1; n >= 0; n--) {
                        var c = (u(t[n][2]) - u(a)) / (u(r) - u(a));
                        this._mkcircle(t[n][0], t[n][1], c, o), o.fillRect(0, 0, this.width + this.x, this.height + this.y)
                    }
                    return this._colorise(o)
                }
            }), t.exports = a
        },
        function(t, e) {
            "use strict";

            function n(t, e) {
                var n = t.length;
                if (0 === n) return NaN;
                var i = t[0];
                if (e < t[0]) return NaN;
                if (e >= t[n - 1]) return t[n - 1];
                for (var r = 1; r < t.length && !(e < t[r]); r++) i = t[r];
                return i
            }

            function i(t, e) {
                var n = t.length;
                if (0 === n) return NaN;
                var i, r = t[0];
                if (e > t[n - 1]) return NaN;
                if (e < t[0]) return t[0];
                for (var a = 1; a < t.length; a++) {
                    if (e <= t[a]) {
                        i = t[a];
                        break
                    }
                    r = t[a]
                }
                return i
            }
            var r = {
                PRECISION: 1e-5,
                equal: function(t, e) {
                    return Math.abs(t - e) < r.PRECISION
                },
                clamp: function(t, e, n) {
                    return t < e ? e : t > n ? n : t
                },
                snapTo: function(t, e) {
                    var r = n(t, e),
                        a = i(t, e);
                    if (isNaN(r) || isNaN(a)) {
                        if (t[0] >= e) return t[0];
                        var s = t[t.length - 1];
                        if (s <= e) return s
                    }
                    return Math.abs(e - r) < Math.abs(a - e) ? r : a
                },
                snapFloor: function(t, e) {
                    return n(t, e)
                },
                snapCeiling: function(t, e) {
                    return i(t, e)
                },
                degreeToRad: function(t) {
                    return Math.PI / 180 * t
                },
                radToDegree: function(t) {
                    return 180 / Math.PI * t
                },
                mod: function(t, e) {
                    return (t % e + e) % e
                }
            };
            t.exports = r
        },
        function(t, e, n) {
            var i = {};
            i.Tree = n(207), i.Linear = n(87), i.Sankey = n(205), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1);
            n(208);
            var r = n(87),
                a = function(t) {
                    i.mix(this, t), this._init()
                };
            i.extend(a, r), i.augment(a, {
                hasWeight: !0,
                stepField: "step",
                totalStep: 0,
                calculationTimes: 2,
                _init: function() {
                    var t = this.edges.slice(0);
                    this.edges = t, this._initNode()
                },
                _initNode: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.stepField,
                        r = t.valueField;
                    i.isNull(e) ? e = t._createNodes() : (e = e.slice(0), t.nodes = e), t._initNodeMap(), i.isNull(e[0][n]) && t._calculateStep(), i.isNull(e[0][r]) && t._calculateValue()
                },
                _calculateStep: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.stepField;
                    e.forEach(function(e) {
                        i.isNull(e[n]) && t._getStepFromEdges(e)
                    });
                    var r = e.filter(function(t) {
                        return 0 === t.outEdges.length
                    });
                    r.map(function(e) {
                        e.step = t.totalStep - 1
                    })
                },
                _getValueFromEdges: function(t) {
                    var e = this.valueField,
                        n = 0,
                        i = t.step;
                    return 0 === i ? t.outEdges.forEach(function(t) {
                        n += t[e]
                    }) : t.inEdges.forEach(function(t) {
                        n += t[e]
                    }), t.value = n, n
                },
                _getStepFromEdges: function(t) {
                    var e = this,
                        n = e.sourceField,
                        r = 0;
                    return t.inEdges.length > 0 && t.inEdges.forEach(function(t) {
                        var a, s = e._findObj(t[n]);
                        a = i.isNull(s.step) ? e._getStepFromEdges(s) : s.step, r = Math.max(a + 1, r)
                    }), t.step = r, e.totalStep = Math.max(e.totalStep, r + 1), r
                },
                _findObj: function(t) {
                    var e = this.nodesMap;
                    return e[t]
                },
                getNodes: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.sourceField,
                        r = t.targetField,
                        a = t.stepField,
                        s = t.valueField,
                        o = [],
                        u = [],
                        c = [];
                    e.forEach(function(t) {
                        var e = t[a];
                        void 0 === u[e] && (u[e] = []), u[e].push(t), i.isNull(o[e]) ? o[e] = t[s] : o[e] += t[s]
                    }), t.maxValue = Math.max.apply(null, o), t.totalStep = u.length, t._setMarginWidth(u[0]), t._layoutByWeight(u[0]), t._layoutNodes(u, n);
                    for (var l = t.calculationTimes; l > 0; l--) t._layoutNodes(u.reverse(), r), t._layoutNodes(u.reverse(), n);
                    return u.forEach(function(t) {
                        c = c.concat(t)
                    }), t.normalization(c), c
                },
                normalization: function(t) {
                    var e = 1;
                    t.forEach(function(t) {
                        t.x > e && (e = t.x)
                    }), e > 1 && t.map(function(t) {
                        t.x = t.x / e, t.width = t.width / e
                    })
                },
                _layoutNodes: function(t, e) {
                    var n = this;
                    if (t.length >= 2) {
                        var i;
                        for (i = 1; i < t.length; i++) n.y = i / (n.totalStep - 1), n._layoutHighStep(t[i], e), t[i].sort(function(t, e) {
                            return t.x - e.x
                        }), n._handleConflict(t[i]);
                        n._layoutX(t[i - 1])
                    }
                },
                _handleConflict: function(t) {
                    var e = this.margin;
                    t.map(function(n, i) {
                        i > 0 && n.x - .5 * n.width <= t[i - 1].x + .5 * t[i - 1].width + 2 * e && (n.x = t[i - 1].x + .5 * t[i - 1].width + 2 * e + .5 * n.width)
                    })
                },
                _layoutHighStep: function(t, e) {
                    var n = this,
                        i = n.valueField,
                        r = n.maxValue,
                        a = n.thickness,
                        s = n.marginWidth,
                        o = n.y,
                        u = e === n.sourceField ? n.targetField : n.sourceField;
                    t.map(function(t) {
                        var c, l = n._getEdgeOfCurNode(t, u),
                            h = 0;
                        l.forEach(function(r) {
                            c = n._findObj(r[e]);
                            var a = r[i];
                            h += c.x * a / t[i]
                        }), t.x = h, t.weight = t[i] / r, t.width = t.weight * (1 - s), t.height = a, t.y = void 0 === t.y ? o : t.y
                    })
                },
                getEdges: function() {
                    for (var t = this.calculationTimes; t > 0; t--) this._layoutEdges();
                    return this.edges
                },
                _layoutEdges: function() {
                    var t = this,
                        e = t.nodes,
                        n = t.stepField,
                        i = t.targetField,
                        r = t.sourceField,
                        a = t.totalStep;
                    e.forEach(function(e) {
                        0 !== e[n] && t._edgeSort(e.inEdges, r)
                    }), e.forEach(function(e) {
                        e[n] !== a && t._edgeSort(e.outEdges, i)
                    })
                },
                _edgeSort: function(t, e) {
                    var n = this,
                        r = n.edges;
                    t.sort(function(t, i) {
                        return n._findObj(t[e]).x - n._findObj(i[e]).x
                    }), t.forEach(function(a, s) {
                        for (var o = 0; o < s; o++) {
                            var u = n._findIndex(r, t[o]),
                                c = n._findIndex(r, a);
                            n._findObj(t[o][e]).x > n._findObj(a[e]).x ? i.insertBefore(r, c, u) : i.insertAfter(r, c, u)
                        }
                    })
                },
                _findIndex: function(t, e) {
                    var n = this.sourceField,
                        i = this.targetField,
                        r = t.findIndex(function(t) {
                            return t[n] === e[n] && t[i] === e[i]
                        });
                    return r
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t) {
                    i.mix(this, t)
                };
            i.augment(r, {
                parent: null,
                level: 0,
                children: null,
                x: 0,
                y: 0
            }), t.exports = r
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                return t / 2
            }
            var r = n(1),
                a = "level",
                s = n(206),
                o = function(t) {
                    r.mix(this, t), this._init()
                };
            r.augment(o, {
                nodes: null,
                childrenField: "children",
                collapsedField: "collapsed",
                width: 1,
                height: 1,
                _levels: 1,
                idField: null,
                edgeFields: null,
                _preX: {},
                dx: 0,
                dy: 0,
                nodeAlign: "start",
                _totalLeafCount: 0,
                _init: function() {
                    var t = this,
                        e = t.nodes.slice(0);
                    t._traverseNodes(e), t.originDx = t.dx, t.originDy = t.dy, t.nodes = e, t._initDxDy()
                },
                _initDxDy: function() {
                    var t = this,
                        e = t.nodes,
                        n = t._levels;
                    t._preX = {};
                    var i = t._getAlignCount(e);
                    t._totalLeafCount = i, t.originDx || (t.dx = t.width / (i + .5)), t.originDy || (t.dy = t.height / n)
                },
                reset: function() {
                    this._initDxDy()
                },
                _traverseNodes: function(t, e) {
                    var n, i, s = this;
                    e ? (n = e[a] + 1, i = e.id) : (n = 0, i = "");
                    var o = s.childrenField,
                        u = s.idField;
                    r.each(t, function(t, r) {
                        t[a] = n, t.parent = e, u && (t.id = t[u]), t.id || (t.id = i ? i + "-" + r : r.toString());
                        var c = t[o];
                        c && c.length ? s._traverseNodes(t[o], t) : n + 1 > s._levels && (s._levels = n + 1)
                    })
                },
                _getAlignCount: function(t) {
                    var e = this,
                        n = 0,
                        a = 0,
                        s = 0,
                        o = e.childrenField,
                        u = t.length,
                        c = e.collapsedField;
                    return r.each(t, function(t, r) {
                        var l = t[o];
                        if (l && l.length && !t[c]) {
                            var h = s / 2;
                            n += h, h > 1 && h < a && (a -= h);
                            var f = e._getAlignCount(l),
                                g = i(f);
                            a += 1, n += Math.max(g, a), a = 0, s = f, t._alignCount = f
                        } else a += 1, r === u - 1 && 1 !== u && (a += .5)
                    }), a = Math.max(a, i(s)), n += Math.abs(a)
                },
                _getMaxPreXParent: function(t) {
                    if (!t) return null;
                    var e = this,
                        n = e._preX,
                        i = t.level,
                        r = n[i] || 0,
                        a = r,
                        s = i,
                        o = t.parent,
                        u = t;
                    if (o && o.children[0] === t || 0 === r)
                        for (; s > 0 && o;) {
                            var c = s - 1,
                                l = n[c] || 0;
                            if (l > a && (a = l, u = o), s = c, o.parent && o.parent.children[0] !== o) break;
                            o = o.parent
                        }
                    return u
                },
                _layoutNodes: function(t, e) {
                    var n = this,
                        i = n.childrenField,
                        o = n.collapsedField,
                        u = t.length;
                    r.each(t, function(t, r) {
                        var c = t[i],
                            l = t[a],
                            h = n.dx,
                            f = n.dy,
                            g = new s(t);
                        e.push(g), g.y = l * f, "middle" === n.nodeAlign ? g.y += .5 * f : "end" === n.nodeAlign && (g.y += f);
                        var d = n._preX[l] || 0;
                        if (c && c.length && !t[o]) {
                            n._layoutNodes(c, e);
                            var p = c[0],
                                v = c[c.length - 1],
                                m = (p.x + v.x) / 2;
                            g.x = Math.max(m, d + h), n._preX[l] = g.x
                        } else {
                            if (t.parent && 0 === r) {
                                var x = n._getMaxPreXParent(t.parent),
                                    y = n._preX[l - 1] || 0;
                                if (x)
                                    if (y = n._preX[x.level] || 0, x === t.parent && 1 === t.parent.children.length);
                                    else {
                                        var _ = x._alignCount;
                                        y -= y < h ? _ * h / 2 - h / 2 : _ * h / 2 - h
                                    }
                                d = Math.max(d, y)
                            }
                            g.x = d + h, n._preX[l] = g.x, r === u - 1 && u > 1 && (n._preX[l] += .5 * h)
                        }
                        t.x = g.x, t.y = g.y
                    })
                },
                _getEdges: function(t, e) {
                    var n = this,
                        i = [],
                        a = n.childrenField,
                        s = n.collapsedField,
                        o = n.edgeFields;
                    return e && e[s] ? i : (r.each(t, function(t) {
                        if (e) {
                            var s = {
                                source: e.id,
                                target: t.id
                            };
                            o && r.each(o, function(e) {
                                s[e] = t[e]
                            }), i.push(s)
                        }
                        t[a] && (i = i.concat(n._getEdges(t[a], t)))
                    }), i)
                },
                getNodes: function() {
                    var t = this,
                        e = t.nodes,
                        n = [];
                    return t._layoutNodes(e, n), t._fixedRange(n), n
                },
                _fixedRange: function(t) {
                    var e = 0,
                        n = this.width;
                    if (this._totalLeafCount > 3) {
                        r.each(this._preX, function(t) {
                            e < t && (e = t)
                        });
                        var i = (n - this.dx / 2) / e;
                        r.each(t, function(t) {
                            t.x = t.x * i
                        })
                    }
                },
                getEdges: function() {
                    var t = this,
                        e = t.nodes;
                    return t._getEdges(e)
                },
                _findBy: function(t, e) {
                    var n = this,
                        i = null,
                        a = n.childrenField;
                    return r.each(t, function(t) {
                        var r = t[a];
                        if (e(t) ? i = t : r && r.length && (i = n._findBy(r, e)), i) return !1
                    }), i
                },
                findNode: function(t) {
                    return this._findBy(this.nodes, function(e) {
                        return e.id.toString() === t.toString()
                    })
                }
            }), t.exports = o
        },
        function(t, e, n) {
            var i = n(1);
            i.mix(i, {
                insertBefore: function(t, e, n) {
                    if (!(e <= n)) {
                        var i = t.splice(e, 1)[0];
                        t.splice(n - 1, 0, i)
                    }
                },
                insertAfter: function(t, e, n) {
                    if (!(e >= n)) {
                        var i = t.splice(e, 1)[0];
                        t.splice(n, 0, i)
                    }
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = e.toString(),
                    i = n.indexOf(".");
                if (i === -1) return Math.round(t);
                var r = n.substr(i + 1).length;
                return parseFloat(t.toFixed(r))
            }

            function r(t, e) {
                for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
            }
            var a = n(194);
            a.mix(a, {
                mixin: function(t, e) {
                    if (t && e) {
                        t._mixins = e, t.ATTRS = t.ATTRS || {};
                        var n = {};
                        a.each(e, function(e) {
                            a.augment(t, e);
                            var i = e.ATTRS;
                            i && a.mix(n, i)
                        }), t.ATTRS = a.mix(n, t.ATTRS)
                    }
                },
                map: function(t, e) {
                    var n = [];
                    return a.each(t, function(t, i) {
                        n.push(e(t, i))
                    }), n
                },
                filter: function(t, e) {
                    var n = [];
                    return a.each(t, function(t, i) {
                        e(t, i) && n.push(t)
                    }), n
                },
                guid: function() {
                    var t = {};
                    return function(e) {
                        return e = e || "g", t[e] ? t[e] += 1 : t[e] = 1, e + t[e]
                    }
                }(),
                inArray: function(t, e) {
                    return a.indexOf(t, e) !== -1
                },
                indexOf: function(t, e) {
                    var n = Array.prototype.indexOf;
                    if (n) return n.call(t, e);
                    for (var i = -1, r = 0; r < t.length; r++)
                        if (t[r] === e) {
                            i = r;
                            break
                        }
                    return i
                },
                remove: function(t, e) {
                    var n = a.indexOf(t, e);
                    n !== -1 && t.splice(n, 1)
                },
                empty: function(t) {
                    if (!(t instanceof Array))
                        for (var e = t.length - 1; e >= 0; e--) delete t[e];
                    t.length = 0
                },
                equalsArray: function(t, e) {
                    if (t === e) return !0;
                    if (!t || !e) return !1;
                    if (t.length !== e.length) return !1;
                    for (var n = !0, i = 0; i < t.length; i++)
                        if (t[i] !== e[i]) {
                            n = !1;
                            break
                        }
                    return n
                },
                wrapBehavior: function(t, e) {
                    var n = function(n) {
                        t[e](n)
                    };
                    return t["_wrap_" + e] = n, n
                },
                getWrapBehavior: function(t, e) {
                    return t["_wrap_" + e]
                },
                fixedBase: function(t, e) {
                    return i(t, e)
                },
                length: function(t) {
                    if (a.isArray(t)) return t.length;
                    if (a.isObject(t)) {
                        var e = 0;
                        return a.each(t, function() {
                            e++
                        }), e
                    }
                    return 0
                },
                clone: function(t) {
                    if ("object" != typeof t || null === t) return t;
                    var e;
                    if (a.isArray(t)) {
                        e = [];
                        for (var n = 0, i = t.length; n < i; n++) "object" == typeof t[n] && null != t[n] ? e[n] = a.clone(t[n]) : e[n] = t[n]
                    } else {
                        e = {};
                        for (var r in t) "object" == typeof t[r] && null != t[r] ? e[r] = a.clone(t[r]) : e[r] = t[r]
                    }
                    return e
                },
                simpleMix: function(t, e, n, i) {
                    return e && r(t, e), n && r(t, n), i && r(t, i), t
                }
            }), t.exports = a
        },
        function(t, e, n) {
            var i = n(211);
            i.Group = n(212), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function() {};
            r.ATTRS = {
                actived: !1
            }, i.augment(r, {
                isActived: function() {
                    return this.get("actived")
                },
                setActived: function() {
                    this.setActiveStatus(!0), this.set("actived", !0)
                },
                setActiveStatus: function() {},
                clearActived: function() {
                    this.setActiveStatus(!1), this.set("actived", !1), this.clearActivedItem && this.clearActivedItem()
                }
            }), t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function() {};
            r.ATTRS = {
                multipleActive: !1
            }, i.augment(r, {
                isItemActived: function(t) {
                    return t.isActived()
                },
                getActiveItems: function() {
                    return this.get("children")
                },
                setItemActived: function(t, e) {
                    e ? t.setActived() : t.clearActived()
                },
                onActived: function(t) {
                    this.fire("itemactived", {
                        item: t
                    }), this.fireUpGroup && this.fireUpGroup("actived", t)
                },
                onUnActived: function(t) {
                    this.fire("itemunactived", {
                        item: t
                    }), this.fireUpGroup && this.fireUpGroup("unactived", t)
                },
                setActivedItem: function(t) {
                    var e = this,
                        n = e.get("multipleActive");
                    n || e.clearActivedItem(), t && !e.isItemActived(t) && (e.setItemActived(t, !0), e.onActived(t))
                },
                getActived: function() {
                    var t = this,
                        e = t.getActiveItems(),
                        n = null;
                    return i.each(e, function(e) {
                        if (t.isItemActived(e)) return n = e, !1
                    }), n
                },
                getAllActived: function() {
                    var t = this,
                        e = t.getActiveItems(),
                        n = [];
                    return i.each(e, function(e) {
                        t.isItemActived(e) && n.push(e)
                    }), n
                },
                clearAllActived: function() {
                    var t = this,
                        e = t.getAllActived();
                    return i.each(e, function(e) {
                        t.setItemActived(e, !1), t.onUnActived(e)
                    }), this
                },
                clearActivedItem: function(t) {
                    var e = this;
                    return t = t || e.getActived(), t && (e.setItemActived(t, !1), e.onUnActived(t)), this
                }
            }), t.exports = r
        },
        function(t, e, n) {
            function i(t) {
                var e = [];
                return a.each(t, function(t) {
                    a.isArray(t) ? e = e.concat(t) : e.push(t)
                }), e
            }
            var r = 8,
                a = n(1);
            t.exports = function(t) {
                var e = {},
                    n = [],
                    a = t.maxCount || r,
                    s = i(t.data);
                if (s.length <= a + a / 2) n = [].concat(s);
                else {
                    var o = s.length,
                        u = parseInt(o / (a - 1), 10),
                        c = s.map(function(t, e) {
                            return e % u === 0 ? s.slice(e, e + u) : null
                        }).filter(function(t) {
                            return t
                        });
                    n.push(s[0]);
                    for (var l = 1; l < c.length && l < a - 1; l++) n.push(c[l][0]);
                    n.push(s[o - 1])
                }
                return e.categories = s, e.ticks = n, e
            }
        },
        function(t, e, n) {
            var i = n(1),
                r = 5,
                a = 7,
                s = [0, 1, 2, 3, 4, 5, 10],
                o = i.isNull,
                u = n(88),
                c = function(t) {
                    var e, n = t.min,
                        c = t.max,
                        l = t.interval,
                        h = [],
                        f = t.minCount || r,
                        g = t.maxCount || a,
                        d = (f + g) / 2;
                    if (i.isNull(n) && (n = 0), i.isNull(c) && (c = 0), c === n && (0 === n ? c = 1 : n > 0 ? n = 0 : c = 0, c - n < 5 && !l && c - n >= 1 && (l = 1)), o(l)) {
                        var p = (c - n) / (d - 1);
                        l = u.snapFactorTo(p, s, "ceil"), g !== f ? (e = parseInt((c - n) / l, 10), e > g && (e = g), e < f && (e = f), l = u.snapFactorTo((c - n) / (e - 1), s, "floor")) : e = d
                    }
                    if (t.interval || g !== f) c = u.snapMultiple(c, l, "ceil"), n = u.snapMultiple(n, l, "floor"), e = Math.round((c - n) / l), n = i.fixedBase(n, l), c = i.fixedBase(c, l);
                    else {
                        d = parseInt(d, 10);
                        var v, m = (c + n) / 2,
                            x = u.snapMultiple(m, l, "ceil"),
                            y = Math.floor((d - 2) / 2),
                            _ = x + y * l;
                        v = d % 2 === 0 ? x - y * l : x - (y + 1) * l, _ < c && (_ += l), v > n && (v -= l), c = i.fixedBase(_, l), n = i.fixedBase(v, l)
                    }
                    h.push(n);
                    for (var S = 1; S < e; S++) h.push(i.fixedBase(l * S + n, l));
                    return h[h.length - 1] < c && h.push(c), {
                        min: n,
                        max: c,
                        interval: l,
                        count: e,
                        ticks: h
                    }
                };
            t.exports = c
        },
        function(t, e, n) {
            function i(t) {
                return new Date(t).getFullYear()
            }

            function r(t) {
                return new Date(t, 0, 1).getTime()
            }

            function a(t) {
                return new Date(t).getMonth()
            }

            function s(t, e) {
                var n = i(t),
                    r = i(e),
                    s = a(t),
                    o = a(e);
                return 12 * (r - n) + (o - s) % 12
            }

            function o(t, e) {
                return new Date(t, e, 1).getTime()
            }

            function u(t, e) {
                return Math.ceil((e - t) / v)
            }

            function c(t, e) {
                return Math.ceil((e - t) / p)
            }

            function l(t, e) {
                return Math.ceil((e - t) / 6e4)
            }
            var h = n(1),
                f = 6,
                g = [1, 2, 4, 6, 8, 12],
                d = 6e4,
                p = 36e5,
                v = 864e5,
                m = n(88),
                x = function(t) {
                    var e, n = t.min,
                        x = t.max,
                        y = t.interval,
                        _ = t.minInterval,
                        S = [];
                    if (x === n && (x = n + v), h.isNull(y)) {
                        var w, b = x - n,
                            M = v,
                            A = 365 * M;
                        y = parseInt(b / (t.maxCount || f), 10), _ && _ > y && (y = _), w = y / A;
                        var C = i(n);
                        if (w > .51) {
                            for (var T = Math.ceil(w), k = i(x), P = C; P <= k + T; P += T) S.push(r(P));
                            y = null
                        } else if (w > .0834) {
                            for (var T = i(n), I = Math.ceil(w / .0834), D = a(n), L = s(n, x), P = 0; P <= L + I; P += I) S.push(o(C, P + D));
                            y = null
                        } else if (y > .5 * M) {
                            var F = new Date(n),
                                T = F.getFullYear(),
                                I = F.getMonth(n),
                                B = F.getDate(),
                                R = Math.ceil(y / M),
                                O = u(n, x);
                            y = R * M;
                            for (var P = 0; P < O + R; P += R) S.push(new Date(T, I, B + P).getTime())
                        } else if (y > p) {
                            var F = new Date(n),
                                T = F.getFullYear(),
                                I = F.getMonth(n),
                                R = F.getDate(),
                                N = F.getHours(),
                                E = m.snapTo(g, Math.ceil(y / p)),
                                G = c(n, x);
                            y = E * p;
                            for (var P = 0; P <= G + E; P += E) S.push(new Date(T, I, R, N + P).getTime())
                        } else if (y > d) {
                            var z = l(n, x),
                                X = Math.ceil(y / d);
                            y = X * d;
                            for (var P = 0; P <= z + X; P += X) S.push(n + P * d)
                        } else {
                            y < 1e3 && (y = 1e3), n = 1e3 * Math.floor(n / 1e3);
                            var W = Math.ceil((x - n) / 1e3),
                                Y = Math.ceil(y / 1e3);
                            y = 1e3 * Y;
                            for (var P = 0; P < W + Y; P += Y) S.push(n + 1e3 * P)
                        }
                    }
                    if (!S.length) {
                        n = 1e3 * Math.floor(n / 1e3), x = 1e3 * Math.ceil(x / 1e3);
                        for (var e = (x - n) / y, P = 0; P <= e; P++) S.push(h.fixedBase(y * P + n, y))
                    }
                    return {
                        max: x,
                        min: n,
                        interval: y,
                        ticks: S,
                        count: S.length
                    }
                };
            t.exports = x
        },
        function(t, e, n) {
            var i = n(14);
            i.Image = n(219), i.Text = n(223), i.Line = n(220), i.Tag = n(222), i.Rect = n(221), i.Arc = n(217), i.Html = n(218), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(14),
                a = n(3),
                s = a.Vector2,
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(o, r), i.augment(o, {
                start: [],
                end: [],
                cfg: {
                    stroke: "#000"
                },
                getCfg: function(t) {
                    var e, n, i, r = this,
                        a = r.parsePoint(t, r.start),
                        o = r.parsePoint(t, r.end),
                        u = t.invertPoint(a),
                        c = t.invertPoint(o),
                        l = {
                            x: (c.x + u.x) / 2,
                            y: u.y
                        },
                        h = t.convertPoint(l),
                        f = t.getCenter(),
                        g = new s(1, 0),
                        d = new s.sub(a, f).length(),
                        p = new s.sub(o, a);
                    return p = p.vertical(), p.setLength(d), p.add(h), e = new s.sub(a, p), n = new s.sub(o, p), i = {
                        x: p.x,
                        y: p.y,
                        startAngle: e.angleTo(g, !0) / Math.PI * 180,
                        endAngle: n.angleTo(g, !0) / Math.PI * 180,
                        r: d
                    }
                },
                paint: function(t, e) {
                    var n = i.mix({}, this.cfg, this.getCfg(t));
                    e.addShape("Arc", {
                        attrs: n
                    })
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                var i = [];
                switch (t) {
                    case "tl":
                        i[0] = 0, i[1] = 0;
                        break;
                    case "tr":
                        i[0] = -e, i[1] = 0;
                        break;
                    case "bl":
                        i[0] = 0, i[1] = Math.floor(-n);
                        break;
                    case "br":
                        i[0] = Math.floor(-e), i[1] = Math.floor(-n);
                        break;
                    case "rc":
                        i[0] = Math.floor(-e), i[1] = Math.floor(-n / 2);
                        break;
                    case "lc":
                        i[0] = 0, i[1] = Math.floor(-n / 2);
                        break;
                    case "tc":
                        i[0] = Math.floor(-e / 2), i[1] = Math.floor(-n);
                        break;
                    case "bc":
                        i[0] = Math.floor(-e / 2), i[1] = 0;
                        break;
                    default:
                        i[0] = Math.floor(-e / 2), i[1] = Math.floor(-n / 2)
                }
                return i
            }
            var r = n(1),
                a = n(14);
            n(224);
            var s = function(t) {
                s.superclass.constructor.call(this, t)
            };
            r.extend(s, a), r.augment(s, {
                type: "html",
                point: [],
                cfg: {
                    offset: [0, 0],
                    align: "cc"
                },
                html: "",
                paint: function(t, e) {
                    var n = this,
                        a = n.parsePoint(t, n.point),
                        s = r.createDom(n.html);
                    s = r.modiCSS(s, {
                        position: "absolute",
                        top: Math.floor(a.y) + "px",
                        left: Math.floor(a.x) + "px",
                        visibility: "hidden"
                    });
                    var o, u = e.get("canvas").get("el").parentNode;
                    u.getElementsByClassName("guideWapper").length > 0 ? o = u.getElementsByClassName("guideWapper")[0] : (o = r.createDom('<div class="guideWapper"></div>'), o = r.modiCSS(o, {
                        position: "absolute",
                        top: 0,
                        left: 0
                    }), u.appendChild(o)), o.appendChild(s);
                    var c = n.cfg;
                    if (c.align) {
                        var l = c.align,
                            h = r.getWidth(s),
                            f = r.getHeight(s),
                            g = i(l, h, f);
                        a.x = a.x + g[0], a.y = a.y + g[1]
                    }
                    if (c.offset) {
                        var d = c.offset;
                        a.x = a.x + d[0], a.y = a.y + d[1]
                    }
                    r.modiCSS(s, {
                        top: Math.floor(a.y) + "px",
                        left: Math.floor(a.x) + "px",
                        visibility: "visible"
                    })
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(14),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                start: [],
                end: null,
                src: "",
                paint: function(t, e) {
                    var n = this,
                        r = n.parsePoint(t, n.start),
                        a = n.cfg;
                    if (a.img = a.src, a = i.mix({
                            src: n.src
                        }, a, r), n.end) {
                        var s = n.parsePoint(t, n.end);
                        a.x = r.x, a.y = s.y, a.width = s.x - r.x, a.height = r.y - s.y
                    } else a.y = a.y - a.height;
                    e.addShape("Image", {
                        attrs: a
                    })
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(14),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                from: [],
                to: [],
                cfg: {
                    stroke: "#000",
                    lineWidth: 1
                },
                paint: function(t, e) {
                    var n = this,
                        r = n.parsePoint(t, n.from),
                        a = n.parsePoint(t, n.to),
                        s = n.cfg,
                        o = i.substitute("M {x} {y}", r) + i.substitute("L {x} {y}", a);
                    s = i.mix({
                        path: o
                    }, s), e.addShape("Path", {
                        attrs: s
                    })
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(14),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                start: [],
                end: [],
                cfg: {
                    stroke: "#000"
                },
                getPath: function(t) {
                    var e = this,
                        n = e.parsePoint(t, e.start),
                        i = e.parsePoint(t, e.end),
                        r = [];
                    return r.push(["M", n.x, n.y]), r.push(["L", i.x, n.y]), r.push(["L", i.x, i.y]), r.push(["L", n.x, i.y]), r.push(["z"]), r
                },
                paint: function(t, e) {
                    var n = this,
                        r = n.cfg,
                        a = n.getPath(t);
                    r = i.mix({
                        path: a
                    }, r), e.addShape("Path", {
                        attrs: r
                    })
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(14),
                a = 10,
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            i.extend(s, r), i.augment(s, {
                from: [],
                to: [],
                text: "",
                cfg: {
                    line: {
                        stroke: "#000",
                        lineWidth: 1
                    },
                    text: {
                        fill: "#000"
                    },
                    rect: {
                        stroke: "#000",
                        lineWidth: 1,
                        fill: "#fff"
                    }
                },
                paint: function(t, e) {
                    var n = this,
                        i = n.parsePoint(t, n.from),
                        r = n.parsePoint(t, n.to),
                        a = e.addGroup();
                    n.drawLine(i, r, a), n.drawText(r, a)
                },
                drawLine: function(t, e, n) {
                    var r = this,
                        a = i.substitute("M {x} {y}", t) + i.substitute("L {x} {y}", e),
                        s = i.mix({
                            path: a
                        }, r.cfg.line);
                    n.addShape("Path", {
                        attrs: s
                    })
                },
                drawText: function(t, e) {
                    var n = this,
                        r = i.mix({
                            text: n.text
                        }, n.cfg.text, t),
                        s = e.addShape("Text", {
                            zIndex: 1,
                            attrs: r
                        }),
                        o = s.getBBBox(),
                        u = i.mix({
                            x: o.minX - a,
                            y: o.minY - a,
                            width: o.width + 2 * a,
                            height: o.height + 2 * a
                        }, n.cfg.rect);
                    e.addShape("rect", {
                        attrs: u
                    }), e.sort()
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(14),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                position: [],
                text: "",
                cfg: {
                    fill: "#000",
                    textAlign: "center"
                },
                paint: function(t, e) {
                    var n = this,
                        r = n.position,
                        a = n.parsePoint(t, r),
                        s = n.cfg;
                    s = i.mix({
                        text: n.text
                    }, s, a), e.addShape("Text", {
                        attrs: s
                    })
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = document.createElement("table"),
                a = document.createElement("tr"),
                s = /^\s*<(\w+|!)[^>]*>/,
                o = {
                    tr: document.createElement("tbody"),
                    tbody: r,
                    thead: r,
                    tfoot: r,
                    td: a,
                    th: a,
                    "*": document.createElement("div")
                };
            i.mix(i, {
                modiCSS: function(t, e) {
                    var n;
                    for (n in e) e.hasOwnProperty(n) === !0 && (t.style[n] = e[n]);
                    return t
                },
                createDom: function(t) {
                    var e = s.test(t) && RegExp.$1;
                    e in o || (e = "*");
                    var n = o[e];
                    return t = t.replace(/(^\s*)|(\s*$)/g, ""), n.innerHTML = "" + t, n.childNodes[0]
                },
                getStyle: function(t, e) {
                    return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
                },
                getWidth: function(t) {
                    var e = this.getStyle(t, "width");
                    return "auto" === e && (e = t.offsetWidth), parseFloat(e)
                },
                getHeight: function(t) {
                    var e = this.getStyle(t, "height");
                    return "auto" === e && (e = t.offsetHeight), parseFloat(e)
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(41),
                r = function(t, e) {
                    return new i({
                        dims: t,
                        binWidth: e
                    })
                };
            t.exports = r
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                var i = [];
                return s.each(t, function(t) {
                    i.push(t * e * n / 2)
                }), i
            }

            function r(t, e) {
                var n = [];
                return s.each(t, function(t) {
                    n.push(t * e / 2)
                }), n
            }
            var a = n(41),
                s = n(1),
                o = function(t, e, n) {
                    return new a({
                        ratio: n || .5,
                        dims: t,
                        binWidth: e || .03,
                        _getDimVaues: function(t, e, n) {
                            var i = this,
                                r = i.getDimRange(e),
                                a = r.max - r.min,
                                o = [];
                            return s.each(n, function(e) {
                                o.push(t + a * e)
                            }), o
                        },
                        toBin: function(t) {
                            var e = this,
                                n = e.getBinDims();
                            if (n < 2) throw "the bin.rect method only support 2 dimenssion!";
                            var a = n[0],
                                s = n[1],
                                o = e.binWidth,
                                u = e.ratio,
                                c = e._center([t[a], t[s]]),
                                l = i([-.5, -1.5, -.5, .5, 1.5, .5], o, u),
                                h = r([-1, 0, 1, 1, 0, -1], o);
                            t[a] = e._getDimVaues(c[0], a, l), t[s] = e._getDimVaues(c[1], s, h)
                        },
                        _center: function(t) {
                            var e, n, i, r = this,
                                a = r.binWidth,
                                s = r.getBinDims(),
                                o = s[0],
                                u = r.getDimRange(o),
                                c = a * (u.max - u.min) / 2,
                                l = s[1],
                                h = r.getDimRange(l),
                                f = a * (h.max - h.min) / 2,
                                g = r.ratio;
                            return n = [t[0] / (c * g), t[1] / f], i = r._centerForBasis(n), e = [i[0] * c, i[1] * f]
                        },
                        _chkOdd: function(t) {
                            var e = parseInt(t);
                            return e ? !!(e % 2) : "0"
                        },
                        _aroundX: function(t) {
                            var e, n, i, r = this;
                            return t = t < 1 ? 1 : t, r._chkOdd(t) ? n = i = parseInt(t) + .5 : t % 2 === 0 ? n = i = parseInt(t) - .5 : (n = parseInt(t) - .5, i = n + 2), e = [n, i]
                        },
                        _aroundY: function(t) {
                            var e, n, i;
                            return t = t < 1 ? 1 : t, n = parseInt(t), i = n + 1, e = [n, i]
                        },
                        _shortPoint: function(t, e, n) {
                            var i, r, a = this,
                                s = (t[1] - .5) % 4;
                            1 === s ? a._chkOdd(e[1]) ? (i = [t[0], e[0]], r = [t[1], e[1]]) : (i = [t[1], e[0]], r = [t[0], e[1]]) : a._chkOdd(e[0]) ? (i = [t[0], e[0]], r = [t[1], e[1]]) : (i = [t[1], e[0]], r = [t[0], e[1]]);
                            var o = Math.abs(n[0] - i[0]) + Math.abs(n[1] - i[1]),
                                u = Math.abs(n[0] - r[0]) + Math.abs(n[1] - r[1]);
                            return o === u ? i[0] < r[0] ? i : r : o < u ? i : r
                        },
                        _centerForBasis: function(t) {
                            var e, n, i, r, a = this,
                                s = a._aroundX(t[0]),
                                o = a.ratio;
                            return s[0] === s[1] ? (i = s[0], i > 2 && a._chkOdd(i / 2) ? (t[1] = t[1] < 1 ? 1 : t[1], r = a._chkOdd(parseInt(t[1])) ? parseInt(t[1]) + 1 : parseInt(t[1])) : (t[1] = t[1] < 1 ? 1 : t[1], r = a._chkOdd(parseInt(t[1])) ? parseInt(t[1]) : parseInt(t[1]) - 1), e = [i, r]) : (t[1] = t[1] < 1 ? 1 : t[1], n = a._aroundY(t[1]), e = a._shortPoint(s, n, t)), e[0] = e[0] * o, e
                        }
                    })
                };
            t.exports = o
        },
        function(t, e, n) {
            var i = {
                dot: n(225),
                rect: n(230),
                hex: n(226),
                quantile: n(228)
            };
            t.exports = i
        },
        function(t, e, n) {
            var i = n(89);
            i.letter = n(229), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(89),
                r = function(t, e) {
                    return new i({
                        dims: t,
                        binWidth: e,
                        fractions: 4
                    })
                };
            t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(41),
                r = function(t, e) {
                    return new i({
                        dims: t,
                        binWidth: e,
                        toBin: function(t) {
                            var e = this,
                                n = e.getBinDims();
                            if (n.length < 1) throw "the bin.rect method support for minimum one dimension!";
                            if (1 === n.length) {
                                var i = n[0];
                                t[i] = e._getValueRange(i, t[i])
                            } else {
                                var r = n[0],
                                    a = n[1],
                                    s = e._getValueRange(r, t[r]),
                                    o = e._getValueRange(a, t[a]);
                                t[r] = [s[0], s[0], s[1], s[1]], t[a] = [o[0], o[1], o[1], o[0]]
                            }
                        },
                        _getValueRange: function(t, e) {
                            var n = this,
                                i = n.binWidth,
                                r = n.getDimRange(t),
                                a = r.max - r.min,
                                s = n.getCenterValue(e, r.max, r.min);
                            return [s - a * i * 1 / 2, s + a * i * 1 / 2]
                        }
                    })
                };
            t.exports = r
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                return e = e || .01, new r({
                    dims: t,
                    bandWidth: e,
                    kernelType: n
                })
            }
            var r = n(232),
                a = n(233),
                s = {};
            s.kernel = {}, s.kernel.uniform = function(t, e) {
                return i(t, e, "uniform")
            }, s.kernel.triangular = function(t, e) {
                return i(t, e, "triangular")
            }, s.kernel.epanechnikov = function(t, e) {
                return i(t, e, "epanechnikov")
            }, s.kernel.quartic = function(t, e) {
                return i(t, e, "quartic")
            }, s.kernel.triweight = function(t, e) {
                return i(t, e, "triweight")
            }, s.kernel.tricube = function(t, e) {
                return i(t, e, "tricube")
            }, s.kernel.gaussian = function(t, e) {
                return i(t, e, "gaussian")
            }, s.kernel.cosine = function(t, e) {
                return i(t, e, "cosine")
            }, s.normal = function(t, e) {
                return e = e || .01, new a({
                    dims: t,
                    bandWidth: e
                })
            }, t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = n(78),
                s = n(90),
                o = "..density",
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            i.extend(u, s), i.augment(u, {
                kernelType: "",
                execFrame: function(t) {
                    var e = this,
                        n = e.kernelType;
                    if (!n) return t;
                    var i = a[n],
                        s = e.getDims(),
                        o = [];
                    return 2 === s.length ? o = e._getOneDimDensity(t, i, s) : 3 === s.length && (o = e._getTwoDimDensity(t, i, s)), new r(o)
                },
                _getOneDimDensity: function(t, e, n) {
                    for (var r = n[n.length - 2], a = t.colArray(r), s = this.getWindowWidth(t, r), u = this.getCoordinate(t, r, s), c = u.length, l = a.length, h = t.rowObject(0), f = [], g = 0; g < c; g++) {
                        for (var d = 0, p = u[g], v = 0; v < l; v++) d += e((p - a[v]) / s);
                        var m = 1 / (l * s) * d,
                            x = i.mix({}, h);
                        x[r] = p, x[o] = m, f[g] = x
                    }
                    return f
                },
                _getTwoDimDensity: function(t, e, n) {
                    for (var r = n[n.length - 3], a = n[n.length - 2], s = this.getWindowWidth(t, r), u = this.getWindowWidth(t, a), c = this.getCoordinate(t, r, s), l = c.length, h = this.getCoordinate(t, a, u), f = h.length, g = t.rowCount(), d = t.rowObject(0), p = [], v = 0; v < l; v++)
                        for (var m = 0; m < f; m++) {
                            for (var x = 0, y = c[v], _ = h[m], S = 0; S < g; S++) x += e((y - t.data[S][r]) / s) * e((_ - t.data[S][a]) / u);
                            var w = 1 / (g * s * u) * x,
                                b = i.mix({}, d);
                            b[r] = y, b[a] = _, b[o] = w, p.push(b)
                        }
                    return p
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = n(90),
                s = "..density",
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(o, a), i.augment(o, {
                execFrame: function(t) {
                    for (var e = this, n = t.rowObject(0), a = e.getDims(), o = a[a.length - 2], u = this.getWindowWidth(t, o), c = this.getCoordinate(t, o, u), l = c.length, h = r.mean(t, o), f = r.standard_deviation(t, o), g = [], d = 0; d < l; d++) {
                        var p = c[d],
                            v = e.getNormal(p, h, f),
                            m = i.mix({}, n);
                        m[o] = p, m[s] = v, g.push(m)
                    }
                    return new r(g)
                },
                getNormal: function(t, e, n) {
                    var i = 1 / (Math.sqrt(2 * Math.PI) * n) * Math.exp(-(t - e) * (t - e) / (2 * n * n));
                    return i
                }
            }), t.exports = o
        },
        function(t, e, n) {
            var i = {
                spread: {
                    range: n(235),
                    sd: n(236),
                    se: n(237)
                },
                confi: {}
            };
            t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(53),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.range(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(53),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0),
                                i = r.mean(t, e),
                                a = r.sd(t, e);
                            return n[e] = [i - a, i + a], new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(53),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0),
                                i = r.mean(t, e),
                                a = r.se(t, e);
                            return n[e] = [i - a, i + a], new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(15),
                a = n(26),
                s = n(25),
                o = function(t) {
                    return new r(i.mix({}, s, {
                        dims: t,
                        regressionType: "cubic",
                        getRegression: function(t) {
                            return a("polynomial", t, 3)
                        }
                    }))
                };
            t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(15),
                a = n(26),
                s = n(25),
                o = n(2),
                u = function(t) {
                    return new r(i.mix({}, s, {
                        dims: t,
                        regressionType: "exp",
                        preExecute: function(t) {
                            var e = this.getYDim();
                            i.each(t, function(t) {
                                var n = o.min(t, e);
                                if (n < 0) throw "the field " + e + " has value less than 0,you can't use this regression!"
                            })
                        },
                        getRegression: function(t) {
                            return a("exponential", t)
                        }
                    }))
                };
            t.exports = u
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = 0, i = 0; i < t.length; i++) {
                    var r = t[i];
                    n += r * Math.pow(e, i)
                }
                return n
            }
            var r = n(1),
                a = ["linear", "cubic", "quadratic"],
                s = {
                    execFnction: function(t, e, n) {
                        var i;
                        return i = r.indexOf(a, t) >= 0 ? s.poly(e, n) : s[t] ? s[t](e[0], e[1], n) : n
                    },
                    linear: function(t, e, n) {
                        var r = [e, t];
                        return i(r, n)
                    },
                    poly: function(t, e) {
                        return i(t, e)
                    },
                    log: function(t, e, n) {
                        return t + e * Math.log(n)
                    },
                    pow: function(t, e, n) {
                        return t * Math.pow(n, e)
                    },
                    exp: function(t, e, n) {
                        return t * Math.pow(Math.E, e * n)
                    }
                };
            t.exports = s
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                return e = e || .01, new a({
                    dims: t,
                    bandWidth: e,
                    kernelType: n
                })
            }
            var r = n(54);
            r.mean = n(245), r.median = n(246), r.linear = n(242), r.quadratic = n(248), r.cubic = n(238), r.log = n(244), r.pow = n(247), r.exp = n(239);
            var a = n(243);
            r.loess = {}, r.loess.uniform = function(t, e) {
                return i(t, e, "uniform")
            }, r.loess.triangular = function(t, e) {
                return i(t, e, "triangular")
            }, r.loess.epanechnikov = function(t, e) {
                return i(t, e, "epanechnikov")
            }, r.loess.quartic = function(t, e) {
                return i(t, e, "quartic")
            }, r.loess.triweight = function(t, e) {
                return i(t, e, "triweight")
            }, r.loess.tricube = function(t, e) {
                return i(t, e, "tricube")
            }, r.loess.gaussian = function(t, e) {
                return i(t, e, "gaussian")
            }, r.loess.cosine = function(t, e) {
                return i(t, e, "cosine")
            }, t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(15),
                a = n(26),
                s = n(25),
                o = function(t) {
                    return new r(i.mix({}, s, {
                        dims: t,
                        regressionType: "linear",
                        getRegression: function(t) {
                            return a("polynomial", t, 1)
                        }
                    }))
                };
            t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(54),
                r = n(1),
                a = n(78),
                s = n(2),
                o = n(191),
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            r.extend(u, i), r.augment(u, {
                kernelType: "",
                k: 10,
                execFrame: function(t) {
                    var e = this,
                        n = e.getDims(),
                        i = [];
                    if (2 === n.length) {
                        var a = e.getXDim(),
                            o = e.getYDim(),
                            u = e.getData(t),
                            c = e.getInterArray(t, a),
                            l = e.execSmooth(u, c),
                            h = t.rowObject(0);
                        r.each(l, function(t) {
                            var e = r.mix({}, h);
                            e[a] = t[0], e[o] = t[1], i.push(e)
                        })
                    } else {
                        var a = e.getXDim(),
                            o = e.getYDim(),
                            f = e.getZDim(),
                            u = e.getData(t),
                            c = [];
                        c[0] = e.getInterArray(t, a), c[1] = e.getInterArray(t, o);
                        var l = e.execSmoothThreeDim(u, c),
                            h = t.rowObject(0);
                        r.each(l, function(t) {
                            var e = r.mix({}, h);
                            e[a] = t[0], e[o] = t[1], e[f] = t[2], i.push(e)
                        })
                    }
                    return new s(i)
                },
                execSmooth: function(t, e) {
                    for (var n = this, i = e.length, r = t.length, s = n.kernelType, o = a[s], u = [], c = [], l = e[1] - e[0], h = 0; h < i; h++) {
                        for (var f, g, d, p, v = 0, m = 0, x = 0, y = 0, _ = 0, S = e[h], w = n.getWindowWidth([S], t, [l])[0], b = 0; b < r; b++) g = t[b][0], d = t[b][1], f = o((S - g) / w), 0 !== f && (v += f, m += f * g, x += f * g * g, y += f * d, _ += f * g * d);
                        v * x - m * m !== 0 && (c[1] = (m * y - v * _) / (m * m - v * x), c[0] = y / v - m / v * c[1], p = c[0] + c[1] * S, u.push([S, p]))
                    }
                    return u
                },
                execSmoothThreeDim: function(t, e) {
                    for (var n = this, i = e[0].length, r = e[1].length, s = t.length, u = n.kernelType, c = a[u], l = [], h = [], f = e[0][1] - e[0][0], g = e[1][1] - e[1][0], d = 0; d < i; d++)
                        for (var p = 0; p < r; p++) {
                            for (var v, m, x, y, _, S = 0, w = 0, b = 0, M = 0, A = 0, C = 0, T = 0, k = 0, P = 0, I = e[0][d], D = e[1][p], L = n.getWindowWidth([I, D], t, [f, g]), F = L[0], B = L[1], R = 0; R < s; R++) m = t[R][0], x = t[R][1], y = t[R][2], v = c((I - m) / F) * c((D - x) / B), 0 !== v && (S += v, w += v * m, b += v * x, M += v * m * x, A += v * m * m, C += v * x * x, T += v * y, k += v * m * y, P += v * x * y);
                            var O = [
                                    [S, w, b],
                                    [w, A, M],
                                    [b, M, C]
                                ],
                                N = [T, k, P];
                            h = o(O, N), h && (_ = h[0] + h[1] * I + h[2] * D, l.push([I, D, _]))
                        }
                    return l
                },
                getWindowWidth: function(t, e, n) {
                    var i = this,
                        r = i.k,
                        a = e.length,
                        s = [],
                        o = e[0].length - 1,
                        u = 0;
                    a <= r && (r = a), e.sort(function(e, i) {
                        for (var r = 0, a = 0, s = 0; s < o; s++) r += (e[s] - t[s]) * (e[s] - t[s]) / (n[s] * n[s]), a += (i[s] - t[s]) * (i[s] - t[s]) / (n[s] * n[s]);
                        return r - a
                    });
                    for (var c = 0; c < o; c++) {
                        for (; e[r - 1][c] === e[0][c];) r++;
                        var l = 1.1 * Math.abs(e[r - 1][c] - t[c]) / n[c];
                        u += l * l
                    }
                    u = Math.sqrt(u);
                    for (var c = 0; c < o; c++) s[c] = u * n[c];
                    return s
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(15),
                a = n(26),
                s = n(25),
                o = function(t) {
                    return new r(i.mix({}, s, {
                        dims: t,
                        regressionType: "log",
                        getRegression: function(t) {
                            return a("logarithmic", t)
                        }
                    }))
                };
            t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = n(15),
                s = function(t) {
                    return new a({
                        dims: t,
                        getRegressionString: function() {
                            return "y = " + this.curMean
                        },
                        execSmooth: function(t, e, n) {
                            var a = this,
                                s = a.getYDim(),
                                o = r.mean(n, s);
                            a.curMean = o;
                            var u = [];
                            return i.each(e, function(t) {
                                u.push([t, o])
                            }), u
                        }
                    })
                };
            t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(2),
                a = n(15),
                s = function(t) {
                    return new a({
                        dims: t,
                        getRegressionString: function() {
                            return "y = " + this.curMedian
                        },
                        execSmooth: function(t, e, n) {
                            var a = this,
                                s = a.getYDim(),
                                o = r.median(n, s);
                            a.curMedian = o;
                            var u = [];
                            return i.each(e, function(t) {
                                u.push([t, o])
                            }), u
                        }
                    })
                };
            t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(15),
                a = n(26),
                s = n(25),
                o = n(2),
                u = function(t) {
                    return new r(i.mix({}, s, {
                        dims: t,
                        regressionType: "pow",
                        preExecute: function(t) {
                            var e = this.getYDim();
                            i.each(t, function(t) {
                                var n = o.min(t, e);
                                if (n < 0) throw "the field " + e + " has value less than 0,you can't use this regression!"
                            })
                        },
                        getRegression: function(t) {
                            return a("power", t)
                        }
                    }))
                };
            t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(15),
                a = n(26),
                s = n(25),
                o = function(t) {
                    return new r(i.mix({}, s, {
                        regressionType: "quadratic",
                        dims: t,
                        getRegression: function(t) {
                            return a("polynomial", t, 2)
                        }
                    }))
                };
            t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        initDims: function(t) {
                            t.push("..count")
                        },
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = t.rowCount(), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = n(1),
                s = function(t) {
                    return new i({
                        dims: t,
                        getStatDims: function() {
                            var t = this.stat;
                            if (t) return t.getStatDims();
                            var e = this.getDims(),
                                n = e.length,
                                i = [e[n - 1]];
                            return i
                        },
                        execFrame: function(t) {
                            var e = this.getStatDims(),
                                n = e[e.length - 1],
                                i = this.getDims()[0];
                            i && i !== n && (t = r.sort(t, i));
                            var s = this.stat,
                                o = [];
                            if (s && "density" === s.type) {
                                var u = s.getWindowWidth(t, i),
                                    c = t.colArray(n),
                                    l = 0;
                                a.each(c, function(t) {
                                    l += t * u, o.push(l)
                                })
                            } else o = r.cumulative(t, n);
                            return t.colReplace(n, o), t
                        }
                    })
                };
            t.exports = s
        },
        function(t, e, n) {
            var i = {
                count: n(249),
                max: n(252),
                min: n(255),
                mean: n(253),
                median: n(254),
                proportion: n(258),
                range: n(259),
                percent: n(257),
                sd: n(260),
                mode: n(256),
                sum: n(261),
                cumulative: n(250)
            };
            t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.max(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.mean(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.median(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.min(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.mode(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(9),
                a = n(2),
                s = n(91),
                o = "..percent",
                u = function(t) {
                    return new r(i.mix({
                        dims: t,
                        initDims: function(t) {
                            var e = t[t.length - 1];
                            t.splice(t.length - 1, 0, o), this.percetDim = e
                        },
                        getStatDims: function() {
                            return [o]
                        },
                        transform: function(t, e, n) {
                            e = this.percetDim;
                            var i = a.sum(t, e),
                                r = a.sum(n, e),
                                s = t.rowObject(0);
                            return s["..percent"] = i / r, s[e] = i, new a([s])
                        }
                    }, s))
                };
            t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(9),
                a = n(2),
                s = n(91),
                o = function(t) {
                    return new r(i.mix({
                        dims: t,
                        initDims: function(t) {
                            t.push("..proportion")
                        },
                        transform: function(t, e, n) {
                            var i = t.rowCount() / n.rowCount(),
                                r = t.rowObject(0);
                            return r[e] = i, new a([r])
                        }
                    }, s))
                };
            t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.max(t, e) - r.min(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.standard_deviation(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(2),
                a = function(t) {
                    return new i({
                        dims: t,
                        transform: function(t, e) {
                            var n = t.rowObject(0);
                            return n[e] = r.sum(t, e), new r([n])
                        }
                    })
                };
            t.exports = a
        },
        function(t, e) {
            /**
             * @license
             *
             * Regression.JS - Regression functions for javascript
             * http://tom-alexander.github.com/regression-js/
             *
             * copyright(c) 2013 Tom Alexander
             * Licensed under the MIT license.
             *
             **/
            "use strict";
            var n = function(t, e) {
                    var n = 0,
                        i = 0,
                        r = 0,
                        a = 0,
                        s = 0,
                        o = t.length - 1,
                        u = new Array(e);
                    for (n = 0; n < o; n++) {
                        for (a = n, i = n + 1; i < o; i++) Math.abs(t[n][i]) > Math.abs(t[n][a]) && (a = i);
                        for (r = n; r < o + 1; r++) s = t[r][n], t[r][n] = t[r][a], t[r][a] = s;
                        for (i = n + 1; i < o; i++)
                            for (r = o; r >= n; r--) t[r][i] -= t[r][n] * t[n][i] / t[n][n]
                    }
                    for (i = o - 1; i >= 0; i--) {
                        for (s = 0, r = i + 1; r < o; r++) s += t[r][i] * u[r];
                        u[i] = (t[o][i] - s) / t[i][i]
                    }
                    return u
                },
                i = {
                    linear: function(t) {
                        for (var e = [0, 0, 0, 0, 0], n = 0, i = []; n < t.length; n++) null != t[n][1] && (e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][0] * t[n][0], e[3] += t[n][0] * t[n][1], e[4] += t[n][1] * t[n][1]);
                        for (var r = (n * e[3] - e[0] * e[1]) / (n * e[2] - e[0] * e[0]), a = e[1] / n - r * e[0] / n, s = 0, o = t.length; s < o; s++) {
                            var u = [t[s][0], t[s][0] * r + a];
                            i.push(u)
                        }
                        var c = "y = " + Math.round(100 * r) / 100 + "x + " + Math.round(100 * a) / 100;
                        return {
                            equation: [r, a],
                            points: i,
                            string: c
                        }
                    },
                    linearThroughOrigin: function(t) {
                        for (var e = [0, 0], n = 0, i = []; n < t.length; n++) null != t[n][1] && (e[0] += t[n][0] * t[n][0], e[1] += t[n][0] * t[n][1]);
                        for (var r = e[1] / e[0], a = 0, s = t.length; a < s; a++) {
                            var o = [t[a][0], t[a][0] * r];
                            i.push(o)
                        }
                        var u = "y = " + Math.round(100 * r) / 100 + "x";
                        return {
                            equation: [r],
                            points: i,
                            string: u
                        }
                    },
                    exponential: function(t) {
                        var e = [0, 0, 0, 0, 0, 0],
                            n = 0,
                            i = [];
                        for (u = t.length; n < u; n++) null != t[n][1] && (e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][0] * t[n][0] * t[n][1], e[3] += t[n][1] * Math.log(t[n][1]), e[4] += t[n][0] * t[n][1] * Math.log(t[n][1]), e[5] += t[n][0] * t[n][1]);
                        for (var r = e[1] * e[2] - e[5] * e[5], a = Math.pow(Math.E, (e[2] * e[3] - e[5] * e[4]) / r), s = (e[1] * e[4] - e[5] * e[3]) / r, o = 0, u = t.length; o < u; o++) {
                            var c = [t[o][0], a * Math.pow(Math.E, s * t[o][0])];
                            i.push(c)
                        }
                        var l = "y = " + Math.round(100 * a) / 100 + "e^(" + Math.round(100 * s) / 100 + "x)";
                        return {
                            equation: [a, s],
                            points: i,
                            string: l
                        }
                    },
                    logarithmic: function(t) {
                        var e = [0, 0, 0, 0],
                            n = 0,
                            i = [];
                        for (o = t.length; n < o; n++) null != t[n][1] && (e[0] += Math.log(t[n][0]), e[1] += t[n][1] * Math.log(t[n][0]), e[2] += t[n][1], e[3] += Math.pow(Math.log(t[n][0]), 2));
                        for (var r = (n * e[1] - e[2] * e[0]) / (n * e[3] - e[0] * e[0]), a = (e[2] - r * e[0]) / n, s = 0, o = t.length; s < o; s++) {
                            var u = [t[s][0], a + r * Math.log(t[s][0])];
                            i.push(u)
                        }
                        var c = "y = " + Math.round(100 * a) / 100 + " + " + Math.round(100 * r) / 100 + " ln(x)";
                        return {
                            equation: [a, r],
                            points: i,
                            string: c
                        }
                    },
                    power: function(t) {
                        var e = [0, 0, 0, 0],
                            n = 0,
                            i = [];
                        for (o = t.length; n < o; n++) null != t[n][1] && (e[0] += Math.log(t[n][0]), e[1] += Math.log(t[n][1]) * Math.log(t[n][0]), e[2] += Math.log(t[n][1]), e[3] += Math.pow(Math.log(t[n][0]), 2));
                        for (var r = (n * e[1] - e[2] * e[0]) / (n * e[3] - e[0] * e[0]), a = Math.pow(Math.E, (e[2] - r * e[0]) / n), s = 0, o = t.length; s < o; s++) {
                            var u = [t[s][0], a * Math.pow(t[s][0], r)];
                            i.push(u)
                        }
                        var c = "y = " + Math.round(100 * a) / 100 + "x^" + Math.round(100 * r) / 100;
                        return {
                            equation: [a, r],
                            points: i,
                            string: c
                        }
                    },
                    polynomial: function(t, e) {
                        "undefined" == typeof e && (e = 2);
                        for (var i = [], r = [], a = [], s = 0, o = 0, u = 0, c = e + 1; u < c; u++) {
                            for (var l = 0, h = t.length; l < h; l++) null != t[l][1] && (s += Math.pow(t[l][0], u) * t[l][1]);
                            i.push(s), s = 0;
                            for (var f = [], g = 0; g < c; g++) {
                                for (var l = 0, h = t.length; l < h; l++) null != t[l][1] && (o += Math.pow(t[l][0], u + g));
                                f.push(o), o = 0
                            }
                            r.push(f)
                        }
                        r.push(i);
                        for (var d = n(r, c), u = 0, h = t.length; u < h; u++) {
                            for (var p = 0, v = 0; v < d.length; v++) p += d[v] * Math.pow(t[u][0], v);
                            a.push([t[u][0], p])
                        }
                        for (var m = "y = ", u = d.length - 1; u >= 0; u--) m += u > 1 ? Math.round(d[u] * Math.pow(10, u)) / Math.pow(10, u) + "x^" + u + " + " : 1 == u ? Math.round(100 * d[u]) / 100 + "x + " : Math.round(100 * d[u]) / 100;
                        return {
                            equation: d,
                            points: a,
                            string: m
                        }
                    },
                    lastvalue: function(t) {
                        for (var e = [], n = null, i = 0; i < t.length; i++) t[i][1] ? (n = t[i][1], e.push([t[i][0], t[i][1]])) : e.push([t[i][0], n]);
                        return {
                            equation: [n],
                            points: e,
                            string: "" + n
                        }
                    }
                },
                r = function(t, e, n) {
                    if ("string" == typeof t) return i[t](e, n)
                };
            t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = (n(33), {
                region: n(267),
                center: n(264),
                name: n(266),
                location: n(265)
            });
            t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                return Math.min.apply(null, t)
            }

            function r(t) {
                return Math.max.apply(null, t)
            }
            var a = n(1),
                s = n(33),
                o = function(t, e) {
                    return new s({
                        dims: t,
                        mapData: e,
                        addGeoInfo: function(t, e) {
                            var n = this,
                                i = n.getDims(),
                                r = i[i.length - 1],
                                s = t[r],
                                o = n.mapData.features,
                                u = e[0],
                                c = e[1];
                            return t[u] = null, t[c] = null, o && a.each(o, function(e) {
                                var i = e.properties ? e.properties.name : "";
                                if (i === s) {
                                    var r = e.properties.cp;
                                    if (!r) {
                                        var a = e.geometry,
                                            o = a.coordinates,
                                            l = n._getBBox(o);
                                        r = [l[0] + (l[2] - l[0]) / 2, l[1] + (l[3] - l[1]) / 2]
                                    }
                                    return t[u] = r[0], t[c] = r[1], !1
                                }
                            }), t
                        },
                        _getBBox: function(t) {
                            var e = this,
                                n = [],
                                s = [],
                                o = e._getPoints(t);
                            return a.each(o, function(t) {
                                n.push(t[0]), s.push(t[1])
                            }), [i(n), i(s), r(n), r(s)]
                        },
                        _getPoints: function(t) {
                            var e = this,
                                n = [];
                            return a.isArray(t[0]) ? a.each(t, function(t) {
                                var i = e._getPoints(t);
                                n = n.concat(i)
                            }) : n.push(t), n
                        }
                    })
                };
            t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(33),
                r = function(t) {
                    return new i({
                        dims: t,
                        initDims: function(t) {
                            var e = t.slice(0, 2),
                                n = t.slice(2);
                            t = n.concat(e), t.unshift("..lant"), t.unshift("..long"), this.dims = t
                        },
                        addGeoInfo: function(t, e) {
                            var n = this,
                                i = e[0],
                                r = e[1],
                                a = n.getDims(),
                                s = a.length;
                            return t[i] = t[a[s - 2]], t[r] = t[a[s - 1]], t
                        }
                    })
                };
            t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(33),
                a = function(t, e) {
                    return new r({
                        dims: t,
                        mapData: e,
                        initDims: function(t) {
                            t.push("..name")
                        },
                        addGeoInfo: function(t, e) {
                            var n = this,
                                r = n.getDims(),
                                a = r[0],
                                s = r[1],
                                o = [t[a], t[s]],
                                u = !1,
                                c = n.mapData.features;
                            return t[e] = "", c && i.each(c, function(r) {
                                var a = r.geometry.coordinates;
                                if ("Polygon" === r.geometry.type ? i.each(a, function(t) {
                                        if (u = n._isInside(o, t)) return !1
                                    }) : "MultiPolygon" === r.geometry.type && i.each(a, function(t) {
                                        return !u && void i.each(t, function(t) {
                                            if (u = n._isInside(o, t)) return !1
                                        })
                                    }), u) {
                                    var s = r.properties ? r.properties.name : "";
                                    return t[e] = n.names ? n.names.indexOf(s) : s, !1
                                }
                            }), t
                        },
                        _isInside: function(t, e) {
                            for (var n = t[0], i = t[1], r = !1, a = 0, s = e.length - 1; a < e.length; s = a++) {
                                var o = e[a][0],
                                    u = e[a][1],
                                    c = e[s][0],
                                    l = e[s][1],
                                    h = u > i != l > i && n < (c - o) * (i - u) / (l - u) + o;
                                h && (r = !r)
                            }
                            return r
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(33),
                a = function(t, e) {
                    return new r({
                        dims: t,
                        mapData: e,
                        addGeoInfo: function(t, e) {
                            var n = this,
                                r = n.getDims(),
                                a = r[r.length - 1],
                                s = t[a],
                                o = n.mapData,
                                u = o.features,
                                c = e[0],
                                l = e[1];
                            return t[c] = [], t[l] = [], u && i.each(u, function(e) {
                                var i = e.properties ? e.properties.name : "";
                                if (i === s) {
                                    var r = e.geometry,
                                        a = r.coordinates;
                                    return "Polygon" === r.type ? a.forEach(function(e) {
                                        n._getCoordinates(e, t[c], t[l])
                                    }) : "MultiPolygon" === r.type ? a.forEach(function(e) {
                                        e.forEach(function(e) {
                                            n._getCoordinates(e, t[c], t[l])
                                        })
                                    }) : "MultiLineString" === r.type && a.forEach(function(e) {
                                        n._getCoordinates(e, t[c], t[l], "line")
                                    }), !1
                                }
                            }), t
                        },
                        _getCoordinates: function(t, e, n, r) {
                            return i.each(t, function(t) {
                                e.push(t[0]), n.push(t[1])
                            }), r && "line" === r && (e.push(t[0][0]), n.push(t[0][1])), !1
                        }
                    })
                };
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(43),
                r = n(1),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            r.extend(a, i), r.augment(a, {
                type: "identity",
                value: null,
                getText: function() {
                    return this.value.toString()
                },
                scale: function() {
                    return 1
                },
                invert: function() {
                    return this.value
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                return 1 === t ? 1 : Math.log(e) / Math.log(t)
            }
            var r = n(1),
                a = n(42),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            r.extend(s, a), r.augment(s, {
                type: "log",
                base: 2,
                tickCount: 10,
                _minTick: null,
                calculateTicks: function() {
                    var t, e = this,
                        n = e.base;
                    if (e.min < 0) throw new Error("The minimum value must be greater than zero");
                    var a = i(n, e.max);
                    if (e.min > 0) t = Math.floor(i(n, e.min));
                    else {
                        var s = e.values,
                            o = e.max;
                        r.each(s, function(t) {
                            t > 0 && t < o && (o = t)
                        }), o === e.max && (o = e.max / n), o > 1 && (o = 1), t = Math.floor(i(n, o)), e._minTick = t, e.positiveMin = o
                    }
                    for (var u = a - t, c = e.tickCount, l = Math.ceil(u / c), h = [], f = t; f < a + l; f += l) h.push(Math.pow(n, f));
                    return 0 === e.min && h.unshift(0), h
                },
                getScalePercent: function(t) {
                    var e = this.max,
                        n = this.min;
                    if (e === n) return 0;
                    if (t <= 0) return 0;
                    var r = this.base,
                        a = this.positiveMin;
                    a && (n = 1 * a / r);
                    var s;
                    return s = t < a ? t / a / (i(r, e) - i(r, n)) : (i(r, t) - i(r, n)) / (i(r, e) - i(r, n))
                },
                scale: function(t) {
                    var e = this.getScalePercent(t),
                        n = this.rangeMin(),
                        i = this.rangeMax();
                    return n + e * (i - n)
                },
                invert: function(t) {
                    var e, n, r = this.base,
                        a = i(r, this.max),
                        s = this.rangeMin(),
                        o = this.rangeMax() - s,
                        u = this.positiveMin;
                    if (u) {
                        if (0 === t) return 0;
                        n = i(r, u / r);
                        var c = 1 / (a - n) * o;
                        if (t < c) return t / c * u
                    } else n = i(r, this.min);
                    e = (t - s) / o;
                    var l = e * (a - n) + n;
                    return Math.pow(r, l)
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = Math.E,
                    i = Math.pow(n, Math.log(e) / t);
                return i
            }
            var r = n(1),
                a = n(42),
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            r.extend(s, a), r.augment(s, {
                type: "pow",
                exponent: 2,
                tickCount: 12,
                calculateTicks: function() {
                    var t, e = this,
                        n = e.exponent,
                        r = Math.ceil(i(n, e.max));
                    if (t = e.min >= 0 ? Math.round(i(n, e.min)) : 0, t > r) {
                        var a = r;
                        r = t, t = a
                    }
                    for (var s = r - t, o = e.tickCount, u = Math.ceil(s / o), c = [], l = t; l < r + u; l += u) c.push(Math.pow(l, n));
                    return c
                },
                getScalePercent: function(t) {
                    var e = this.max,
                        n = this.min;
                    if (e === n) return 0;
                    var r = this.exponent,
                        a = (i(r, t) - i(r, n)) / (i(r, e) - i(r, n));
                    return a
                },
                scale: function(t) {
                    var e = this.getScalePercent(t),
                        n = this.rangeMin(),
                        i = this.rangeMax();
                    return n + e * (i - n)
                },
                invert: function(t) {
                    var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()),
                        n = this.exponent,
                        r = i(n, this.max),
                        a = i(n, this.min),
                        s = e * (r - a) + a;
                    return Math.pow(s, n)
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(93),
                r = n(1),
                a = n(51),
                s = n(40),
                o = n(94),
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            r.extend(u, i), r.augment(u, {
                type: "timeCat",
                mask: "yyyy-mm-dd HH:MM:ss",
                tickCount: 5,
                init: function() {
                    var t = this,
                        e = this.values;
                    e.sort(function(e, n) {
                        return e = t._toTimeStamp(e), n = t._toTimeStamp(n), e - n
                    }), r.each(e, function(n, i) {
                        e[i] = t._toTimeStamp(n)
                    }), this.ticks = this.calculateTicks(!0)
                },
                calculateTicks: function(t) {
                    var e = this,
                        n = e.tickCount,
                        i = s.Category.caculate({
                            maxCount: n,
                            data: e.values
                        }),
                        o = i.ticks;
                    return t && r.each(o, function(t, n) {
                        o[n] = a.format(t, e.mask)
                    }), o
                },
                translate: function(t) {
                    t = this._toTimeStamp(t);
                    var e = this.values.indexOf(t);
                    return e === -1 && (e = r.isNumber(t) && t < this.values.length ? t : NaN), e
                },
                scale: function(t) {
                    var e, n = this.rangeMin(),
                        i = this.rangeMax(),
                        r = this.translate(t);
                    return e = 0 === r ? 0 : this.values.length > 1 && Math.floor(r) === r && r > -1 ? r / (this.values.length - 1) : r ? t : 0, n + e * (i - n)
                },
                getText: function(t) {
                    var e = "",
                        n = this.translate(t);
                    n > -1 && (e = this.values[n]);
                    var i = this.formatter;
                    return e = parseInt(e, 10), e = i ? i(e) : a.format(e, this.mask)
                },
                getTicks: function() {
                    var t = this,
                        e = this.calculateTicks(!1),
                        n = [];
                    return r.each(e, function(e) {
                        var i;
                        i = r.isObject(e) ? e : {
                            text: t.getText(e),
                            value: t.scale(e)
                        }, n.push(i)
                    }), n
                },
                _toTimeStamp: function(t) {
                    return o.toTimeStamp(t)
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(42),
                r = n(1),
                a = n(40),
                s = n(51),
                o = n(94),
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            r.extend(u, i), r.augment(u, {
                type: "time",
                mask: "yyyy-mm-dd",
                init: function() {
                    var t = this,
                        e = t.values;
                    if (e) {
                        var n = [],
                            i = 1 / 0,
                            a = i,
                            s = 0;
                        r.each(e, function(e) {
                            var r = t._toTimeStamp(e);
                            i > r ? (a = i, i = r) : a > r && (a = r), s < r && (s = r), n.push(r)
                        }), e.length > 1 && (t.minTickInterval = a - i), (r.isNull(t.min) || t._toTimeStamp(t.min) > i) && (t.min = i), (r.isNull(t.max) || t._toTimeStamp(t.max) < s) && (t.max = s)
                    }
                    u.superclass.init.call(t)
                },
                calculateTicks: function() {
                    var t = this,
                        e = t.min,
                        n = t.max,
                        i = t.tickCount,
                        r = t.tickInterval,
                        s = a.Time.caculate({
                            min: e,
                            max: n,
                            minCount: i,
                            maxCount: i,
                            interval: r,
                            minInterval: t.minTickInterval
                        });
                    return s.ticks
                },
                getText: function(t) {
                    var e = this.formatter;
                    return t = this.translate(t), t = e ? e(t) : s.format(t, this.mask)
                },
                scale: function(t) {
                    return r.isString(t) && (t = this.translate(t)), u.superclass.scale.call(this, t)
                },
                translate: function(t) {
                    return this._toTimeStamp(t)
                },
                _toTimeStamp: function(t) {
                    return o.toTimeStamp(t)
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(55),
                a = function(t) {
                    t.inner = t.inner || 0, a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "clock"
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(55),
                a = function(t) {
                    t.inner = t.inner || 0, a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "gauge"
            }), t.exports = a
        },
        function(t, e, n) {
            var i = n(1),
                r = n(34),
                a = n(3),
                s = a.Vector2,
                o = function(t) {
                    var e = {};
                    i.mix(e, o.ATTRS, t), o.superclass.constructor.call(this, e), this._init()
                };
            o.ATTRS = {
                startAngle: 1.25 * Math.PI,
                endAngle: 7.25 * Math.PI
            }, i.extend(o, r), i.augment(o, {
                type: "helix",
                isHelix: !0,
                PRECISION: 1e-5,
                _init: function() {
                    var t = this,
                        e = t.getWidth(),
                        n = t.getHeight(),
                        i = t.get("startAngle"),
                        r = t.get("endAngle"),
                        a = (r - i) / (2 * Math.PI);
                    a = 2 * a + 2;
                    var s = Math.floor(Math.min(e / a, n / a)),
                        o = s / (2 * Math.PI),
                        u = {
                            start: i,
                            end: r
                        },
                        c = {
                            start: 0,
                            end: .99 * s
                        };
                    t.set("a", o), t.set("d", s), t.set("x", u), t.set("y", c)
                },
                getCenter: function() {
                    return this.get("center")
                },
                convertPoint: function(t) {
                    var e = this,
                        n = e.get("a"),
                        i = e.get("center"),
                        r = e.isTransposed ? t.y : t.x,
                        a = e.isTransposed ? t.x : t.y,
                        s = this.convertDim(r, "x"),
                        o = n * s,
                        u = this.convertDim(a, "y");
                    return {
                        x: i.x + Math.cos(s) * (o + u),
                        y: i.y + Math.sin(s) * (o + u)
                    }
                },
                invertPoint: function(t) {
                    var e, n = this,
                        i = n.get("center"),
                        r = n.get("a"),
                        a = n.get("d"),
                        o = new s.sub(t, i),
                        u = new s(1, 0),
                        c = o.angleTo(u, !0),
                        l = c * r;
                    o.length() < l && (l = o.length()), e = Math.floor((o.length() - l) / a), c = 2 * e * Math.PI + c;
                    var h = r * c,
                        f = o.length() - h;
                    f = n.equal(f, 0) ? 0 : f;
                    var g = n.invertDim(c, "x"),
                        d = n.invertDim(f, "y");
                    g = n.equal(g, 0) ? 0 : g, d = n.equal(d, 0) ? 0 : d;
                    var p = {};
                    return p.x = n.isTransposed ? d : g, p.y = n.isTransposed ? g : d, p
                },
                equal: function(t, e) {
                    return Math.abs(t - e) < this.PRECISION
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(96),
                a = n(174),
                s = function(t) {
                    var e = {};
                    i.mix(e, s.ATTRS, t), s.superclass.constructor.call(this, e);
                    var n = this.get("projection"),
                        r = this.get("basic"),
                        o = a[n];
                    this.set("project", new o({
                        basic: r
                    }))
                };
            s.ATTRS = {
                projection: "mercator"
            }, i.extend(s, r), i.augment(s, {
                type: "map",
                _getOriginRange: function() {
                    var t = this,
                        e = t.get("originMin") ? t.get("originMin")[0] : t.get("min")[0],
                        n = t.get("originMin") ? t.get("originMin")[1] : t.get("min")[1],
                        i = t.get("originMax") ? t.get("originMax")[0] : t.get("max")[0],
                        r = t.get("originMax") ? t.get("originMax")[1] : t.get("max")[1],
                        a = {
                            x: i - e,
                            y: r - n
                        };
                    return {
                        xMin: e,
                        yMin: n,
                        range: a
                    }
                },
                _getProjectRange: function() {
                    var t = this,
                        e = t.get("min") ? t.get("min") : t.get("originMin"),
                        n = t.get("max") ? t.get("max") : t.get("originMax"),
                        i = e[0],
                        r = e[1],
                        a = n[0],
                        s = n[1],
                        o = {
                            x: a - i,
                            y: s - r
                        };
                    return {
                        xMin: i,
                        yMin: r,
                        range: o
                    }
                },
                _invert: function(t, e) {
                    var n;
                    "origin" === e ? n = this._getOriginRange() : "project" === e && (n = this._getProjectRange());
                    var i = n.xMin,
                        r = n.yMin,
                        a = n.range;
                    return t.x = i + t.x * a.x, t.y = r + t.y * a.y, t
                },
                _scale: function(t, e) {
                    var n;
                    "origin" === e ? n = this._getOriginRange() : "project" === e && (n = this._getProjectRange());
                    var i = n.xMin,
                        r = n.yMin,
                        a = n.range;
                    return t.x = (t.x - i) / a.x, t.y = (t.y - r) / a.y, t
                },
                convertPoint: function(t) {
                    var e = this,
                        n = e.isTransposed ? t.y : t.x,
                        i = e.isTransposed ? t.x : t.y,
                        r = e.get("project"),
                        a = e._invert({
                            x: n,
                            y: i
                        }, "origin");
                    return a = r.project(a.x, a.y), a = e._scale(a, "project"), {
                        x: this.convertDim(a.x, "x"),
                        y: this.convertDim(a.y, "y")
                    }
                },
                invertPoint: function(t) {
                    var e = this,
                        n = this.invertDim(t.x, "x"),
                        i = this.invertDim(t.y, "y"),
                        r = {};
                    r.x = e.isTransposed ? i : n, r.y = e.isTransposed ? n : i;
                    var a = e.get("project");
                    return r = e._invert(r, "project"), r = a.invert(r), r = e._scale(r, "origin")
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(44),
                a = n(3),
                s = a.Vector2,
                o = function(t) {
                    t.inner = t.inner || 0, o.superclass.constructor.call(this, t);
                    var e = this.get("x");
                    this.set("x", this.get("y")), this.set("y", e)
                };
            i.extend(o, r), i.augment(o, {
                type: "rho",
                convertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        i = e.get("y").start,
                        r = e.convertDim(t.x, "x");
                    return {
                        x: n.x + Math.cos(i) * r,
                        y: n.y + Math.sin(i) * r
                    }
                },
                invertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        i = new s(t.x - n.x, t.y - n.y),
                        r = i.length();
                    return {
                        x: e.invertDim(r, "x")
                    }
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(44),
                a = n(3),
                s = n(6),
                o = a.Vector2,
                u = a.Matrix3,
                c = a.Vector3,
                l = function(t) {
                    t.inner = t.inner || 0, l.superclass.constructor.call(this, t)
                };
            i.extend(l, r), i.augment(l, {
                type: "theta",
                convertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        i = e.convertDim(t.x, "x"),
                        r = e.get("y").end;
                    return {
                        x: n.x + Math.cos(i) * r,
                        y: n.y + Math.sin(i) * r
                    }
                },
                invertPoint: function(t) {
                    var e = this,
                        n = e.getCenter(),
                        i = new o(t.x - n.x, t.y - n.y),
                        r = e.get("x"),
                        a = new u;
                    a.rotate(r.start);
                    var l = new c(1, 0, 0);
                    l.applyMatrix(a), l = new o(l.x, l.y);
                    var h = l.angleTo(i, r.end < r.start);
                    s.equal(h, 2 * Math.PI) && (h = 0);
                    var f = h / (r.end - r.start);
                    return f = r.end - r.start > 0 ? f : -f, {
                        x: f
                    }
                }
            }), t.exports = l
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = {};
                r.mix(e, i.ATTRS, t), i.superclass.constructor.call(this, e), this._init()
            }
            var r = n(1),
                a = n(34);
            i.ATTRS = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                top: .5
            }, r.extend(i, a), r.augment(i, {
                type: "triAngle",
                triAngle: !0,
                _init: function() {
                    return this.setTopfactor(), this
                },
                setTopfactor: function() {
                    var t = this,
                        e = t.get("start"),
                        n = t.get("end"),
                        i = {
                            x: n.x,
                            y: e.y
                        },
                        r = {
                            x: e.x + (n.x - e.x) * t.get("top"),
                            y: n.y
                        };
                    t.getXStart = function(t) {
                        return e.x + (r.x - e.x) / (r.y - e.y) * (t - e.y)
                    }, t.getXEnd = function(t) {
                        return i.x + (r.x - i.x) / (r.y - i.y) * (t - i.y)
                    }
                },
                set: function(t, e) {
                    return this._attrs[t] = e, "top" === t && this.setTopfactor(), this
                },
                convertPoint: function(t) {
                    var e = this,
                        n = e.get("start"),
                        i = e.get("end"),
                        r = t.y,
                        a = t.x;
                    isNaN(r) && (r = 0), r = n.y + (i.y - n.y) * r;
                    var s = e.getXStart(r),
                        o = e.getXEnd(r);
                    return a = s + (o - s) * a, {
                        x: a,
                        y: r
                    }
                },
                invertPoint: function(t) {
                    var e = this,
                        n = e.get("start"),
                        i = e.get("end"),
                        r = e.getXStart(t.y),
                        a = e.getXEnd(t.y),
                        s = (t.x - r) / (r - a);
                    return {
                        x: -s,
                        y: -(t.y - n.y) / (i.y - n.y)
                    }
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(10),
                r = n(29),
                a = n(11),
                s = n(142),
                o = r.G,
                u = o.Shape.superclass.constructor;
            new s(o), i.mixin(u, [a.GMixin]), i.mixin(o.Group, [a.GroupMixin]), o.Marker = a.Marker;
            var c = function(t) {
                c.superclass.constructor.call(this, t)
            };
            c.CFG = {}, i.extend(c, r), t.exports = c
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(45),
                a = n(3),
                s = n(6),
                o = a.Vector2,
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            i.extend(u, r), u.CFG = {
                type: "circle",
                tickInterval: null,
                startAngle: -Math.PI / 2,
                endAngle: 3 * Math.PI / 2,
                grid: {
                    line: {
                        lineWidth: 1,
                        stroke: "#C0D0E0"
                    }
                },
                labelOffset: 5
            }, i.augment(u, {
                _beforeRenderUI: function() {
                    var t = this;
                    u.superclass._beforeRenderUI.call(t)
                },
                parseTick: function(t, e, n) {
                    return {
                        text: t,
                        value: e / n
                    }
                },
                _getCirclePoint: function(t, e) {
                    var n = this,
                        i = n.get("center");
                    return e = e || n.get("radius"), {
                        x: i.x + Math.cos(t) * e,
                        y: i.y + Math.sin(t) * e
                    }
                },
                getTickPoint: function(t) {
                    var e = this,
                        n = e.get("startAngle"),
                        i = e.get("endAngle"),
                        r = n + (i - n) * t;
                    return e._getCirclePoint(r)
                },
                getSideVector: function(t, e) {
                    var n = this,
                        i = n.get("center"),
                        r = new o(e.x - i.x, e.y - i.y);
                    return t && r.setLength(t), r
                },
                getSidePoint: function(t, e) {
                    var n = this,
                        i = n.getSideVector(e, t);
                    return {
                        x: t.x + i.x,
                        y: t.y + i.y
                    }
                },
                getTickEnd: function(t, e) {
                    var n = this,
                        i = n.get("tickLine");
                    return e = e ? e : i.value, n.getSidePoint(t, e)
                },
                getTextAnchor: function(t) {
                    var e;
                    return s.equal(t.x, 0) ? e = "center" : t.x > 0 ? e = "left" : t.x < 0 && (e = "right"), e
                },
                getLinePath: function() {
                    var t = this,
                        e = t.get("center"),
                        n = e.x,
                        i = e.y,
                        r = t.get("radius"),
                        a = r,
                        s = t.get("startAngle"),
                        o = t.get("endAngle"),
                        u = t.get("inner"),
                        c = [];
                    if (Math.abs(o - s) === 2 * Math.PI) c = [
                        ["M", n, i],
                        ["m", 0, -a],
                        ["a", r, a, 0, 1, 1, 0, 2 * a],
                        ["a", r, a, 0, 1, 1, 0, -2 * a],
                        ["z"]
                    ];
                    else {
                        var l = t._getCirclePoint(s),
                            h = t._getCirclePoint(o),
                            f = Math.abs(o - s) > Math.PI ? 1 : 0,
                            g = s > o ? 0 : 1;
                        if (u) {
                            var d = t.getSideVector(u * r, l),
                                p = t.getSideVector(u * r, h),
                                v = {
                                    x: d.x + n,
                                    y: d.y + i
                                },
                                m = {
                                    x: p.x + n,
                                    y: p.y + i
                                };
                            c = [
                                ["M", v.x, v.y],
                                ["L", l.x, l.y],
                                ["A", r, a, 0, f, g, h.x, h.y],
                                ["L", m.x, m.y],
                                ["A", r * u, a * u, 0, f, Math.abs(g - 1), v.x, v.y]
                            ]
                        } else c = [
                            ["M", n, i],
                            ["L", l.x, l.y],
                            ["A", r, a, 0, f, g, h.x, h.y],
                            ["L", n, i]
                        ]
                    }
                    return c
                },
                addLabel: function(t, e, n, i) {
                    var r = this,
                        a = r.get("labelOffset");
                    e = r.getSidePoint(e, a), u.superclass.addLabel.call(r, t, e, n, i)
                },
                autoRotateLabels: function() {
                    var t = this,
                        e = t.get("ticks"),
                        n = t.get("labelsGroup");
                    if (n && e.length > 12) {
                        var r = t.get("radius"),
                            a = t.get("startAngle"),
                            s = t.get("endAngle"),
                            o = s - a,
                            u = o / (e.length - 1),
                            c = Math.sin(u / 2) * r * 2,
                            l = t.getMaxLabelWidth(n);
                        i.each(n.get("children"), function(t, n) {
                            var i = e[n],
                                r = i.value * o + a,
                                s = r % (2 * Math.PI);
                            l < c ? (s <= 0 && (r += Math.PI), s > Math.PI && (r -= Math.PI), r -= Math.PI / 2, t.attr("textAlign", "center")) : s > Math.PI / 2 ? r -= Math.PI : s < Math.PI / 2 * -1 && (r += Math.PI), t.rotateAtStart(180 * r / Math.PI)
                        })
                    }
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";

            function i(t, e, n) {
                var i = e.get(t);
                return i || (i = n, e.set(t, i)), i
            }

            function r(t) {
                r.superclass.constructor.call(this, t)
            }
            var a = n(11),
                s = a.GroupBase,
                o = n(1),
                u = "x-chart-grid";
            o.extend(r, s), r.CFG = {
                zIndex: 1,
                elCls: u,
                type: "line",
                line: null,
                minorLine: null,
                minorCount: 0,
                renderer: null,
                items: null,
                odd: null,
                even: null,
                animate: !1,
                matrix: null,
                duration: 1e3
            }, o.augment(r, {
                _renderUI: function() {
                    var t = this;
                    r.superclass._renderUI.call(t), t._drawLines()
                },
                _drawLines: function() {
                    var t = this,
                        e = t.get("line"),
                        n = t.get("items");
                    n && n.length > 0 && (t._precessItems(n), t._drawGridLines(n, e, u + "-line"), t.get("minorCount") && t.drawMinorLines())
                },
                _precessItems: function(t) {
                    var e, n = this,
                        i = n.get("minorCount"),
                        r = n.get("renderer");
                    o.each(t, function(t, a) {
                        r ? r.call(n, t, a) : i && e && n._addMonorItem(t, e), e && (n.get("odd") || n.get("even")) && n._drawOddEven(t, e, a), e = t
                    })
                },
                _clearPre: function() {
                    var t, e = this;
                    e.get("minorCount") && e.set("minorItems", []), t = e.findAllBy(function(t) {
                        var e = t.get("elCls");
                        return e !== u + "-line" && e !== u + "-minor"
                    }), o.each(t, function(t) {
                        t.remove()
                    })
                },
                _isVertical: function(t) {
                    return t.x1 === t.x2
                },
                _drawGridLines: function(t, e, n) {
                    var i, r, a, s, u = this,
                        c = this.get("type"),
                        l = this.get("smooth");
                    return 0 !== t.length && void("line" === c ? o.each(t, function(t) {
                        l ? (r = [], o.each(t, function(t) {
                            r.push(t.x), r.push(t.y)
                        }), a = o.catmullRom2bezier(r), a.unshift(["M", t[0].x, t[0].y])) : (a = [], o.each(t, function(t, e) {
                            0 === e ? a.push(["M", t.x, t.y]) : a.push(["L", t.x, t.y])
                        })), s = o.mix({}, e, {
                            path: a
                        }), i = u.addShape("path", {
                            elCls: n,
                            attrs: s
                        }), i.animateType = "gridLine", i.id = t.id + "grid", u.set("gridLine" + n, i)
                    }) : "polygon" === c ? o.each(t, function(t) {
                        a = [], o.each(t, function(t, e) {
                            0 === e ? a.push(["M", t.x, t.y]) : a.push(["L", t.x, t.y])
                        }), s = o.mix({}, e, {
                            path: a
                        }), i = u.addShape("path", {
                            elCls: n,
                            attrs: s
                        }), i.animateType = "gridLine", i.id = t.id + "grid", u.set("gridLine" + n, i)
                    }) : o.each(t, function(t) {
                        a = [], o.each(t, function(t, e) {
                            var n = t.radius;
                            0 === e ? a.push(["M", t.x, t.y]) : a.push(["A", n, n, 0, 0, t.flag, t.x, t.y])
                        }), s = o.mix({}, e, {
                            path: a
                        }), i = u.addShape("path", {
                            elCls: n,
                            attrs: s
                        }), i.animateType = "gridLine", i.id = t.id + "grid", u.set("gridLine" + n, i)
                    }))
                },
                _drawOddEven: function(t, e, n) {
                    var i, r, a = this,
                        s = a.get("odd"),
                        o = a.get("even");
                    n % 2 === 0 ? o && (r = a._getBackItem(e, t, o), i = "even") : s && (r = a._getBackItem(e, t, s), i = "odd"), r && a.addShape("Path", {
                        elCls: u + "-" + i,
                        attrs: r
                    })
                },
                _getBackItem: function(t, e, n) {
                    var i = o.substitute("M {x1} {y1} L{x2} {y2}", t);
                    return i += o.substitute("L{x2} {y2} L{x1} {y1}Z", e), n = o.mix({}, n, {
                        path: i
                    })
                },
                _getMinorItem: function(t, e, n, i) {
                    var r = this,
                        a = r._isVertical(t, e),
                        s = a ? "x" : "y",
                        o = a ? "y" : "x",
                        u = e[s + "1"] - t[s + "1"],
                        c = u / (i + 1),
                        l = {};
                    return l[s + "1"] = l[s + "2"] = (n + 1) * c + t[s + "1"], l[o + "1"] = t[o + "1"], l[o + "2"] = t[o + "2"], l
                },
                _addMonorItem: function(t, e) {
                    var n = this,
                        r = i("minorItems", n, []),
                        a = n.get("minorCount");
                    if (a)
                        for (var s = 0; s < a; s++) {
                            var o = n._getMinorItem(e, t, s, a);
                            r.push(o)
                        }
                },
                drawMinorLines: function() {
                    var t = this,
                        e = t.get("minorLine"),
                        n = t.get("minorItems");
                    t._drawGridLines(n, e, u + "-minor")
                }
            }), t.exports = r
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(45),
                a = n(3),
                s = a.Vector2,
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(o, r), o.CFG = {
                type: "helix",
                grid: {
                    line: {
                        "stroke-width": 1,
                        stroke: "#C0D0E0"
                    }
                },
                labelOffset: 5,
                startAngle: 1.25 * Math.PI,
                endAngle: 7.25 * Math.PI,
                a: 0,
                center: null,
                axisStart: null,
                crp: []
            }, i.augment(o, {
                getLinePath: function() {
                    var t = this,
                        e = t.get("crp"),
                        n = t.get("axisStart"),
                        r = i.catmullRom2bezier(e);
                    return r.unshift(["M", n.x, n.y]), r
                },
                getTickPoint: function(t) {
                    var e = this,
                        n = e.get("startAngle"),
                        i = e.get("endAngle"),
                        r = n + (i - n) * t;
                    return e._getHelixPoint(r)
                },
                _getHelixPoint: function(t) {
                    var e = this,
                        n = e.get("center"),
                        i = e.get("a"),
                        r = i * t;
                    return {
                        x: n.x + Math.cos(t) * r,
                        y: n.y + Math.sin(t) * r
                    }
                },
                getSideVector: function(t, e) {
                    var n = this,
                        i = n.get("center"),
                        r = new s(e.x - i.x, e.y - i.y);
                    return t && r.setLength(t), r
                },
                getSidePoint: function(t, e) {
                    var n = this,
                        i = n.getSideVector(e, t);
                    return {
                        x: t.x + i.x,
                        y: t.y + i.y
                    }
                },
                getTickEnd: function(t, e) {
                    var n = this,
                        i = n.get("tickLine");
                    return e = e ? e : i.value, n.getSidePoint(t, e)
                }
            }), t.exports = o
        },
        function(t, e, n) {
            var i = n(97);
            i.Abstract = n(45), i.Circle = n(281), i.MultLine = n(285), i.Helix = n(283), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(97),
                a = n(3),
                s = a.Vector2,
                o = function(t) {
                    o.superclass.constructor.call(this, t)
                };
            o.CFG = {
                type: "multLine"
            }, i.extend(o, r), i.augment(o, {
                _beforeRenderUI: function() {
                    var t = this;
                    o.superclass._beforeRenderUI.call(t)
                },
                getLinePath: function() {
                    var t = this,
                        e = t.get("tickPoints"),
                        n = t.get("start"),
                        r = t.get("end"),
                        a = [];
                    a.push(n.x), a.push(n.y), i.each(e, function(t) {
                        a.push(t.x), a.push(t.y)
                    }), a.push(r.x), a.push(r.y);
                    var s = i.catmullRom2bezier(a);
                    return s.unshift(["M", n.x, n.y]), s
                },
                getTickPoint: function(t, e) {
                    var n = this.get("tickPoints");
                    return n[e]
                },
                getTickEnd: function(t, e, n) {
                    var i = this,
                        r = i.get("tickLine"),
                        a = e ? e : r.value,
                        s = i.getSideVector(a, t, n);
                    return {
                        x: t.x + s.x,
                        y: t.y + s.y
                    }
                },
                getSideVector: function(t, e, n) {
                    var i, r = this;
                    if (0 === n) i = r.get("start");
                    else {
                        var a = r.get("tickPoints");
                        i = a[n - 1]
                    }
                    var o = new s(e.x - i.x, e.y - i.y),
                        u = o.normalize(),
                        c = u.vertical(!1);
                    return c.multiplyScaler(t)
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            t.exports = {
                Axis: n(284),
                PlotBack: n(100),
                PlotRange: n(58),
                Plot: {
                    Back: n(100),
                    Range: n(58)
                },
                Labels: n(98),
                Tooltip: n(293),
                Li: n(57),
                Ul: n(102),
                Legend: n(290),
                Range: n(101)
            }
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                t.remove()
            }
            var r = n(10),
                a = n(99),
                s = function() {};
            s.ATTRS = {
                labels: null
            }, r.augment(s, {
                renderLabels: function() {
                    var t, e = this,
                        n = e.get("labels");
                    n && (n.items || (n.items = []), r.isNull(n.animate) && (n.animate = e.get("animate")), t = e.addGroup(a, n), e.set("labelsGroup", t))
                },
                resetLabels: function(t) {
                    var e = this,
                        n = e.get("labels");
                    if (n) {
                        var a = e.get("labelsGroup"),
                            s = a.getLabels(),
                            o = s.length;
                        t = t || n.items, r.each(t, function(t, n) {
                            if (n < o) {
                                var i = s[n];
                                a.changeLabel(i, t)
                            } else e.addLabel(t.text, t)
                        });
                        for (var u = o - 1; u >= t.length; u--) i(s[u])
                    }
                },
                addLabel: function(t, e) {
                    var n, i = this,
                        r = i.get("labelsGroup"),
                        a = {};
                    return r && (a.text = t, a.x = e.x, a.y = e.y, a.point = e, a.textAlign = e.textAlign, a.id = e.id, e.rotate && (a.rotate = e.rotate), n = r.addLabel(a)), n
                },
                removeLabels: function() {
                    var t = this,
                        e = t.get("labelsGroup");
                    e && e.remove(), t.set("labelsGroup", null)
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = null;
                return r.each(t, function(t) {
                    if (t.name === e.get("value")) return n = t, !1
                }), n
            }
            var r = n(10),
                a = n(57),
                s = n(35),
                o = n(56),
                u = function(t) {
                    u.superclass.constructor.call(this, t)
                };
            u.CFG = {
                type: "category-legend",
                items: null,
                spacingX: 5,
                spacingY: 10,
                wordSpaceing: 2,
                itemsGroup: null,
                layout: "horizontal",
                leaveChecked: !0,
                backPadding: [0, 0, 0, 0],
                checkable: !0,
                itemsbeginX: 0,
                itemsbeginY: 0,
                unChecked: "#CCC",
                word: {
                    fill: "#3c3c3c"
                },
                back: null,
                itemWrap: !1,
                maxLength: 100,
                _back: {},
                formatter: null
            }, r.extend(u, o), r.augment(u, {
                _formatPoint: function(t) {
                    var e = this.get("formatter");
                    return e && (t = e.call(this, t)), t
                },
                _initCfg: function() {
                    u.superclass._initCfg.call(this), this.deepSet("back")
                },
                _beforeRenderUI: function() {
                    u.superclass._beforeRenderUI.call(this);
                    var t = this.get("col"),
                        e = this.get("items").length;
                    this.set("_row", Math.ceil(e / t))
                },
                _renderUI: function() {
                    u.superclass._renderUI.call(this), this._renderTitle(), this._renderItems(), this._wrapItems(), this._renderBack(), this.setPosition()
                },
                _wrapItems: function() {
                    var t = this.get("itemWrap"),
                        e = this.get("layout"),
                        n = this.get("maxLength");
                    t && n > 0 && ("horizontal" === e ? this._warpHorizontal() : "vertical" === e && this._warpVertical())
                },
                _warpVertical: function() {
                    var t, e, n, i, a = this.get("itemsGroup"),
                        s = this.get("titleShape"),
                        o = a.get("children"),
                        u = this.get("maxLength"),
                        c = this.get("spacingX"),
                        l = this.get("spacingY"),
                        h = s.getBBBox().height + l,
                        f = 1,
                        g = h,
                        d = 0,
                        p = 0,
                        v = 0;
                    a.getBBBox().height > u && r.each(o, function(r) {
                        i = r.getBBBox(), e = i.width + c, n = i.height + l, d = p, p = e > p ? e : p, t = g, g += n, g > u ? (v += d, g = n + h, f++, p = 0, d = 0, r.move(v, h)) : r.move(v, t)
                    })
                },
                _warpHorizontal: function() {
                    var t, e, n, i = this.get("itemsGroup"),
                        a = i.get("children"),
                        s = this.get("maxLength"),
                        o = this.get("spacingX"),
                        u = this.get("spacingY"),
                        c = 1,
                        l = 0,
                        h = 0;
                    i.getBBBox().width > s && r.each(a, function(i) {
                        n = i.getBBBox(), t = n.width + o, e = n.height + u, h = l, l += t, l > s ? (l = t, c++, i.move(0, c * e)) : i.move(h, c * e)
                    })
                },
                _bindUI: function() {
                    this._bindOverOut(), this._bindClick()
                },
                _bindClick: function() {
                    var t = this.get("checkable");
                    t && this.on("click", r.wrapBehavior(this, "_onClick"))
                },
                _bindOverOut: function() {
                    this.on("mouseenter", r.wrapBehavior(this, "_onMouseenter")), this.on("mouseleave", r.wrapBehavior(this, "_onMouseleave"))
                },
                _onClick: function(t) {
                    var e, n, r, a, o = this.get("leaveChecked"),
                        u = this._getLi(t.currentTarget),
                        c = this.get("items");
                    if (u) {
                        var l = i(c, u);
                        if (a = u.get("checked"), e = new s("itemclick", t), e.item = l, this.trigger(e), o && a && 1 === this.getLeaveCount()) return;
                        a ? (r = new s("itemunchecked", t), r.item = l, r.currentTarget = u, this.trigger(r)) : (n = new s("itemchecked", t), n.item = l, n.currentTarget = u, this.trigger(n))
                    }
                },
                _onMouseenter: function(t) {
                    var e = this.get("canvas"),
                        n = this._getLi(t.currentTarget);
                    if (n) {
                        var a = new s("itemover", t),
                            o = t.currentTarget,
                            u = o.getCanvasNode();
                        a.item = n, this.trigger(a), r.modiCSS(u, {
                            cursor: "pointer"
                        });
                        var c = this.get("items"),
                            l = i(c, n);
                        if (n.get("checked")) {
                            var h = new s("itemactived", t);
                            h.item = l, h.currentTarget = n, this.trigger(h), e.draw()
                        }
                    }
                },
                _onMouseleave: function(t) {
                    var e = this.get("canvas"),
                        n = this._getLi(t.currentTarget);
                    if (n) {
                        var i = new s("itemout", t),
                            a = this.getCanvasNode();
                        if (i.item = n, this.trigger(i), r.modiCSS(a, {
                                cursor: "default"
                            }), n.get("checked")) {
                            var o = new s("itemunactived", t);
                            this.trigger(o), e.draw()
                        }
                    }
                },
                _renderBack: function() {
                    var t = this.get("itemsGroup"),
                        e = this.get("backPadding"),
                        n = this.get("back");
                    t.renderBack(e, n)
                },
                _renderItems: function() {
                    var t = this,
                        e = t.get("items");
                    r.each(e, function(e, n) {
                        t._addItem(e, n)
                    })
                },
                _addItem: function(t) {
                    var e = this.get("itemsGroup"),
                        n = this._getNextX(),
                        i = this._getNextY(),
                        s = this.get("unChecked"),
                        o = {
                            words: [{
                                text: this._formatPoint(t.name)
                            }]
                        };
                    t.marker && (t.checked || (t.marker.fill = s, t.marker.stroke = s, r.isObject(t.word) ? t.word.fill = s : (t.word = {}, t.word.fill = s)), o.marker = t.marker), e.addGroup(a, {
                        value: t.name,
                        "class": "legend-item",
                        word: t.word,
                        checked: t.checked,
                        x: n,
                        y: i,
                        items: o
                    })
                },
                _getNextX: function() {
                    var t = this.get("layout"),
                        e = this.get("spacingX"),
                        n = this.get("itemsGroup"),
                        i = n.get("children"),
                        a = 0;
                    return "horizontal" === t && r.each(i, function(t) {
                        a += t.getBBBox().width + e
                    }), a
                },
                _getNextY: function() {
                    var t = this.get("spacingY"),
                        e = this.get("layout"),
                        n = this.get("itemsGroup"),
                        i = this.get("titleShape"),
                        a = n.get("children"),
                        s = i.getBBBox().height + t;
                    return "vertical" === e && r.each(a, function(e) {
                        s += e.getBBBox().height + t
                    }), s
                },
                _getLi: function(t) {
                    var e = t.getParent();
                    return "li" === e.get("type") && e
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(10),
                r = n(56),
                a = n(37),
                s = n(35),
                o = n(11),
                u = o.GroupBase,
                c = n(101),
                l = 16,
                h = function(t) {
                    h.superclass.constructor.call(this, t)
                };
            h.CFG = {
                type: "continuous-legend",
                items: null,
                layout: "vertical",
                width: 200,
                height: 60,
                attrType: null,
                titleOffset: 20,
                nameOffset: 10,
                word: {},
                range: [0, 100],
                outRange: {
                    fill: "#ccc"
                },
                inRange: {
                    fill: "#4E7CCC"
                },
                _word: {
                    fill: "#333",
                    textAlign: "center",
                    textBaseline: "middle"
                },
                middleAttr: {
                    fill: "#fff",
                    fillOpacity: 0
                },
                checkable: !0
            }, i.extend(h, r), i.augment(h, {
                _calStartPoint: function() {
                    var t = this.get("titleShape"),
                        e = t.getBBBox(),
                        n = this.get("titleOffset"),
                        i = {
                            x: 0,
                            y: e.height + n
                        };
                    return i
                },
                _beforeRenderUI: function() {
                    var t = this.get("items");
                    if (i.isArray(t) && t.length) {
                        h.superclass._beforeRenderUI.call(this);
                        var e = new u,
                            n = new u,
                            r = new u,
                            a = this._calStartPoint(),
                            s = this.addGroup(c, {
                                minHandleElement: e,
                                maxHandleElement: n,
                                backgroundElement: r,
                                middleAttr: this.get("middleAttr"),
                                layout: this.get("layout"),
                                range: this.get("range"),
                                width: this.get("width"),
                                height: this.get("height"),
                                operable: this.get("checkable")
                            });
                        s.translate(a.x, a.y), this.set("rangeElement", s), this.set("firstItem", t[0]), this.set("lastItem", t[t.length - 1])
                    }
                },
                _bindUI: function() {
                    var t = this.get("checkable");
                    if (t) {
                        var e = this,
                            n = e.get("rangeElement");
                        n.on("rangeChange", function(t) {
                            var n = t.range,
                                i = 1 * e.get("firstItem").name,
                                r = 1 * e.get("lastItem").name,
                                a = parseInt(i + n[0] / 100 * (r - i), 10) + "",
                                o = parseInt(i + n[1] / 100 * (r - i), 10) + "";
                            e._updateElement(a, o);
                            var u = new s("itemfiltered", t);
                            u.range = [a, o], e.trigger(u)
                        })
                    }
                },
                _updateElement: function(t, e) {
                    var n = this.get("minTextElement"),
                        r = this.get("maxTextElement");
                    n.attr(i.mix({}, n.__attrs, {
                        text: t
                    })), r.attr(i.mix({}, r.__attrs, {
                        text: e
                    }))
                },
                _renderUI: function() {
                    h.superclass._renderUI.call(this), this._renderBackground(), this._renderTrigger()
                },
                _renderBackground: function() {
                    var t, e = this.get("rangeElement"),
                        n = e.get("middleHandleElement"),
                        i = this.get("attrType");
                    "color" === i ? t = this._renderGradient() : "size" === i && (t = this._renderTriangle()), t.attr("clip", n)
                },
                _renderGradient: function() {
                    var t, e = this.get("rangeElement"),
                        n = e.get("backgroundElement"),
                        r = this.get("width"),
                        s = this.get("height"),
                        o = this.get("layout"),
                        u = this.get("items"),
                        c = "";
                    return "vertical" === o ? (c += "l (90) ", i.each(u, function(e) {
                        t = new a(e.color).getRGBStyle(), c += 1 - e.value + ":" + t + " "
                    })) : (c += "l (0) ", i.each(u, function(e) {
                        t = new a(e.color).getRGBStyle(), c += e.value + ":" + t + " "
                    })), this._addBackground(n, "Rect", {
                        x: 0,
                        y: 0,
                        width: r,
                        height: s,
                        fill: c,
                        strokeOpacity: 0
                    })
                },
                _renderTriangle: function() {
                    var t = this.get("rangeElement"),
                        e = t.get("backgroundElement"),
                        n = this.get("width"),
                        r = this.get("height"),
                        a = this.get("inRange"),
                        s = this.get("layout"),
                        o = "vertical" === s ? [
                            [0, 0],
                            [n, 0],
                            [n, r]
                        ] : [
                            [0, r],
                            [n, 0],
                            [n, r]
                        ];
                    return this._addBackground(e, "Polygon", i.mix({
                        points: o
                    }, a))
                },
                _addBackground: function(t, e, n) {
                    t.addShape(e, {
                        attrs: i.mix({}, n, this.get("outRange"))
                    });
                    var r = t.addShape(e, {
                        attrs: n
                    });
                    return r
                },
                _renderTrigger: function() {
                    var t, e, n, r, a = this.get("firstItem"),
                        s = this.get("lastItem"),
                        o = this.get("layout"),
                        u = this.get("attrType"),
                        c = this.get("word"),
                        l = this.get("inRange");
                    "color" === u ? (t = {
                        fill: a.color
                    }, e = {
                        fill: s.color
                    }) : (t = i.mix({}, l), e = i.mix({}, l)), n = i.mix({
                        text: a.name
                    }, c), r = i.mix({
                        text: s.name
                    }, c), "vertical" === o ? (this._addVerticalTrigger("min", t, n), this._addVerticalTrigger("max", e, r)) : (this._addHorizontalTrigger("min", t, n), this._addHorizontalTrigger("max", e, r))
                },
                _addVerticalTrigger: function(t, e, n) {
                    var r = this.get("rangeElement"),
                        a = r.get(t + "HandleElement"),
                        s = this.get("width"),
                        o = a.addShape("Polygon", {
                            attrs: i.mix({
                                points: [
                                    [s / 2 + l, 0],
                                    [s / 2 + 1, 0],
                                    [s / 2 + l, "min" === t ? l : -l]
                                ]
                            }, e)
                        }),
                        u = a.addShape("Text", {
                            attrs: i.mix(n, {
                                x: s + 8,
                                y: "max" === t ? -8 : 8,
                                textAlign: "start",
                                textBaseline: "middle"
                            })
                        });
                    this.set(t + "ButtonElement", o), this.set(t + "TextElement", u)
                },
                _addHorizontalTrigger: function(t, e, n) {
                    var r = this.get("rangeElement"),
                        a = r.get(t + "HandleElement"),
                        s = a.addShape("Polygon", {
                            attrs: i.mix({
                                points: [
                                    [0, 0],
                                    [0, -1 * l],
                                    ["min" === t ? -l : l, -1 * l]
                                ]
                            }, e)
                        }),
                        o = a.addShape("Text", {
                            attrs: i.mix(n, {
                                x: "min" === t ? -l / 2 : l / 2,
                                y: -1 * (8 + l),
                                textAlign: "min" === t ? "end" : "start",
                                textBaseline: "middle"
                            })
                        });
                    this.set(t + "ButtonElement", s), this.set(t + "TextElement", o)
                }
            }), t.exports = h
        },
        function(t, e, n) {
            var i = n(56);
            i.Category = n(288), i.Continuous = n(289), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(10),
                r = n(11),
                a = r.GroupBase,
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            s.CFG = {
                type: "li",
                items: null,
                itemsGroup: null,
                word: null,
                marker: null,
                wordSpaceing: null,
                _marker: {
                    fill: "red",
                    lineWidth: 4,
                    r: 2.5
                },
                _wordSpaceing: 6,
                _word: {
                    fill: "#fff",
                    textBaseline: "middle"
                }
            }, i.extend(s, a), i.augment(s, {
                _initCfg: function() {
                    this.deepSet("word"), this.deepSet("marker"), this.deepSet("wordSpaceing"), this.deepSet("markerAlign")
                },
                _renderUI: function() {
                    s.superclass._renderUI.call(this), this._renderItems()
                },
                _renderItems: function() {
                    var t, e = this,
                        n = e.getBBBox(),
                        r = n.width,
                        a = e.get("word"),
                        s = e.get("wordSpaceing"),
                        o = e.get("items"),
                        u = e.get("marker"),
                        c = e.get("markerAlign");
                    o.marker && (t = i.mix({}, u, o.marker, {
                        x: "center" === c ? 0 : o.marker.radius,
                        y: 0
                    }), i.mixXY(t, e), t.symbol && e.addShape("Marker", {
                        type: "marker",
                        attrs: t
                    })), i.each(o.words, function(o) {
                        n = e.getBBBox(), r = Math.abs(n.width) === 1 / 0 ? 0 : n.width, t = i.mix({}, a, o, {
                            x: "center" === c ? s : 0 === r ? 0 : r + s,
                            y: 0
                        }), i.mixXY(t, e), e.addShape("Text", {
                            attrs: t
                        })
                    })
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(11),
                a = r.GroupBase,
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            s.CFG = {
                range: null,
                middleAttr: null,
                backgroundElement: null,
                minHandleElement: null,
                maxHandleElement: null,
                middleHandleElement: null,
                currentTarget: null,
                layout: "vertical",
                width: null,
                height: null,
                pageX: null,
                pageY: null,
                animate: !1,
                operable: !0
            }, i.extend(s, a), i.augment(s, {
                _beforeRenderUI: function() {
                    var t = this.get("layout"),
                        e = this.get("backgroundElement"),
                        n = this.get("minHandleElement"),
                        i = this.get("maxHandleElement"),
                        r = this.addShape("rect", {
                            attrs: this.get("middleAttr")
                        }),
                        a = "vertical" === t ? "ns-resize" : "ew-resize";
                    this.add([e, n, i]), this.set("middleHandleElement", r), e.set("zIndex", 0), r.set("zIndex", 1), n.set("zIndex", 2), i.set("zIndex", 2), this.get("operable") && (r.set("cursor", "move"), n.set("cursor", a), i.set("cursor", a)), this.sort()
                },
                _renderUI: function() {
                    var t = this.get("layout");
                    "horizontal" === t ? this._renderHorizontal() : this._renderVertical()
                },
                _transform: function(t) {
                    var e = this.get("range"),
                        n = e[0] / 100,
                        i = e[1] / 100,
                        r = this.get("width"),
                        a = this.get("height"),
                        s = this.get("minHandleElement"),
                        o = this.get("maxHandleElement"),
                        u = this.get("middleHandleElement");
                    s.initTransform(), o.initTransform(), "horizontal" === t ? (u.attr({
                        x: r * n,
                        y: 0,
                        width: (i - n) * r,
                        height: a
                    }), s.translate(n * r, 0), o.translate(i * r, 0)) : (u.attr({
                        x: 0,
                        y: a * (1 - i),
                        width: r,
                        height: (i - n) * a
                    }), s.translate(r / 2, (1 - n) * a), o.translate(r / 2, (1 - i) * a))
                },
                _renderHorizontal: function() {
                    this._transform("horizontal")
                },
                _renderVertical: function() {
                    this._transform("vertical")
                },
                _bindUI: function() {
                    this.get("operable") && (this.on("mousedown", i.wrapBehavior(this, "_onMouseDown")), this.on("mousemove", i.wrapBehavior(this, "_onMouseMove")), this.on("mouseleave", i.wrapBehavior(this, "_onMouseLeave")))
                },
                _isElement: function(t, e) {
                    var n = this.get(e);
                    return t === n || n.isGroup && n.isChild(t)
                },
                _getRange: function(t, e) {
                    var n = t + e;
                    return n = n > 100 ? 100 : n, n = n < 0 ? 0 : n
                },
                _updateStatus: function(t, e) {
                    var n, r = "x" === t ? this.get("width") : this.get("height"),
                        a = i.ucfirst(t),
                        s = this.get("range"),
                        o = this.get("page" + a),
                        u = this.get("currentTarget"),
                        c = this.get("rangeStash"),
                        l = this.get("layout"),
                        h = "vertical" === l ? -1 : 1,
                        f = e["page" + a],
                        g = f - o,
                        d = g / r * 100 * h;
                    s[1] <= s[0] ? (this._isElement(u, "minHandleElement") || this._isElement(u, "maxHandleElement")) && (s[0] = this._getRange(d, s[0]), s[1] = this._getRange(d, s[0])) : (this._isElement(u, "minHandleElement") && (s[0] = this._getRange(d, s[0])), this._isElement(u, "maxHandleElement") && (s[1] = this._getRange(d, s[1]))), this._isElement(u, "middleHandleElement") && (n = c[1] - c[0], s[0] = this._getRange(d, s[0]), s[1] = s[0] + n, s[1] > 100 && (s[1] = 100, s[0] = s[1] - n)), this.fire("rangeChange", {
                        range: s
                    }), this.set("page" + a, f), this._renderUI(), this.get("canvas").draw()
                },
                _onMouseLeave: function() {
                    var t = this.get("canvas").get("containerDOM");
                    t.style.cursor = "default"
                },
                _onMouseMove: function(t) {
                    var e = t.currentTarget.deepGet("cursor", !0),
                        n = this.get("canvas").get("containerDOM");
                    n && (e ? n.style.cursor = e : n.style.cursor = "default")
                },
                _onMouseDown: function(t) {
                    var e = t.currentTarget,
                        n = t.event,
                        i = this.get("range");
                    n.stopPropagation(), n.preventDefault(), this.set("pageX", n.pageX), this.set("pageY", n.pageY), this.set("currentTarget", e), this.set("rangeStash", [i[0], i[1]]), this._bindCanvasEvents()
                },
                _bindCanvasEvents: function() {
                    this.onMouseMoveListener = i.addEventListener(document, "mousemove", i.wrapBehavior(this, "_onCanvasMouseMove")), this.onMouseUpListener = i.addEventListener(document, "mouseup", i.wrapBehavior(this, "_onCanvasMouseUp"))
                },
                _onCanvasMouseMove: function(t) {
                    var e = this.get("layout");
                    "horizontal" === e ? this._updateStatus("x", t) : this._updateStatus("y", t)
                },
                _onCanvasMouseUp: function() {
                    this._removeDocumentEvents()
                },
                _removeDocumentEvents: function() {
                    this.onMouseMoveListener.remove(), this.onMouseUpListener.remove()
                }
            }), t.exports = s
        },
        function(t, e, n) {
            var i = n(294);
            t.exports = i
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                return t.getElementsByClassName(e)[0]
            }
            var r = n(10),
                a = n(3),
                s = n(11),
                o = n(102),
                u = s.GroupBase,
                c = "ac-title",
                l = "ac-list",
                h = function(t) {
                    h.superclass.constructor.call(this, t)
                };
            h.CFG = {
                zIndex: 10,
                x: 0,
                y: 0,
                itemName: "tootip",
                items: [],
                ulItems: [],
                ul: {
                    fill: "#fff",
                    textAlign: "left"
                },
                title: {},
                name: {},
                value: {},
                crossLine: {
                    stroke: "#999",
                    lineWidth: 1
                },
                markerCfg: null,
                titleText: void 0,
                wordSpaceing: 6,
                padding: [10, 10, 10, 10],
                crosshairs: !1,
                titleShape: null,
                ulGroup: null,
                crossShapeX: null,
                crossShapeY: null,
                backShape: null,
                plotRange: null,
                shared: !1,
                offset: 10,
                animate: !0,
                duration: 50,
                visible: !1,
                valueSplit: "",
                valueSuffix: "",
                custom: !1,
                customDiv: null,
                customFollow: !0,
                timeStamp: 0,
                html: '<div class="ac-tooltip" style="position:absolute;visibility: hidden;"><h4 class="' + c + '"></h4><ul class="' + l + '"></ul></div>',
                itemTpl: '<li><span style="color:{color}">{name}</span> : {value}</li>'
            }, r.extend(h, u), r.augment(h, {
                _beforeRenderUI: function() {
                    o.superclass._beforeRenderUI.call(this);
                    var t = this.get("ul"),
                        e = this.get("custom"),
                        n = this.get("crossLine"),
                        i = this.addGroup({
                            attrs: n
                        }),
                        r = this.addGroup(o, {
                            zIndex: 10,
                            attrs: t
                        });
                    this.set("ulItems", []), this.set("crossGroup", i), this.set("ulGroup", r), e && this._setCustomDiv()
                },
                _renderUI: function() {
                    o.superclass._renderUI.call(this);
                    var t = this.get("custom");
                    t ? this._renderCustom() : this._renderUl(), this._renderCrossLine()
                },
                _renderUl: function() {
                    var t, e, n, i, a = this,
                        s = [],
                        o = a.get("ulGroup"),
                        u = a.get("items"),
                        c = a.get("title"),
                        l = a.get("titleText"),
                        h = a.get("name"),
                        f = a.get("value"),
                        g = a.get("valueSplit"),
                        d = a.get("valueSuffix"),
                        p = a.get("markerCfg");
                    c && s.push({
                        words: [{
                            text: l
                        }],
                        attrs: c
                    }), r.each(u, function(t) {
                        var e = r.mix({}, h, {
                                text: t.name ? t.name + ":" : ""
                            }),
                            n = r.mix({}, f, {
                                text: t.value + g + d
                            });
                        t.marker === !0 && (t.marker = "circle");
                        var i = t.marker ? {
                            symbol: t.marker,
                            fill: t.color
                        } : {};
                        s.push({
                            color: t.color,
                            words: [e, n],
                            marker: r.mix(i, p)
                        })
                    }), o.setItems(s), i = o.get("backShape"), c && (e = o.get("itemsGroup").getFirst(), n = e.getFirst(), a.set("titleShape", n)), t = o.get("itemsGroup").getFilterChild(e), a.set("backShape", i), a.set("ulItems", s), a.set("textGroup", t)
                },
                _renderCrossLine: function() {
                    var t = this.get("crosshairs"),
                        e = this.get("canvas"),
                        n = this.get("plotRange");
                    if (this.clearCrossGroup(), t) switch (t.type) {
                        case "x":
                            this._renderCrossLineX(e, n);
                            break;
                        case "y":
                            this._renderCrossLineY(e, n);
                            break;
                        case "cross":
                            this._renderCrossLineX(e, n), this._renderCrossLineY(e, n);
                            break;
                        default:
                            this._renderCrossLineY(e, n)
                    }
                },
                _renderCrossLineY: function(t, e) {
                    var n, i, a = this.get("crosshairs");
                    e ? (n = e.bl.y, i = e.tl.y) : (n = t.get("height"), i = 0);
                    var s = r.mix({
                        x1: 0,
                        y1: n,
                        x2: 0,
                        y2: i
                    }, this.get("crossLine"));
                    "dash" === a.shape && (s = r.mix(s, {
                        lineDash: "6 3"
                    }));
                    var o = this._getCrossShape(s);
                    this.set("crossShapeY", o)
                },
                _renderCrossLineX: function(t, e) {
                    var n, i, a, s, o = this.get("crosshairs");
                    e ? (n = e.bl.x, i = e.br.x) : (n = t.get("width"), i = 0), a = r.mix({
                        x1: n,
                        y1: 0,
                        x2: i,
                        y2: 0
                    }, this.get("crossLine")), "dash" === o.shape && (a = r.mix(a, {
                        lineDash: "6 3"
                    })), s = this._getCrossShape(a), this.set("crossShapeX", s)
                },
                _getCrossShape: function(t) {
                    var e = this.get("crossGroup"),
                        n = e.addShape("Line", {
                            attrs: t
                        });
                    return n
                },
                clearCrossGroup: function() {
                    var t = this.get("crossGroup");
                    this.set("crossShapeX", void 0), this.set("crossShapeY", void 0), t.clear()
                },
                setCross: function(t) {
                    var e = {};
                    e.type = t, this.set("crosshairs", {
                        type: t
                    }), this._renderCrossLine()
                },
                setContent: function(t, e) {
                    var n = this._isContentChange(t, e);
                    if (n) {
                        var i = this.get("custom"),
                            r = +new Date;
                        this.set("items", e), this.set("titleText", t), this.set("timeStamp", r), i ? this._renderCustom() : this._renderUl()
                    }
                    return this
                },
                _isContentChange: function(t, e) {
                    var n = this.get("titleText"),
                        i = this.get("items"),
                        a = !(t === n && i.length === e.length);
                    return a || r.each(e, function(t, e) {
                        var n = i[e];
                        if (a = t.value !== n.value || t.color !== n.color || t.name !== n.name || t.title !== n.title) return !1
                    }), a
                },
                getTitle: function() {
                    return this.get("titleShape")
                },
                setPosition: function(t, e) {
                    var n, i = this.get("canvas"),
                        s = this.get("custom"),
                        o = this.get("customDiv"),
                        u = this.get("plotRange"),
                        c = this.get("offset"),
                        l = this.get("crossShapeX"),
                        h = this.get("crossShapeY"),
                        f = this.get("ulGroup"),
                        g = f.getBBBox(),
                        d = this.get("animate"),
                        p = new a.Matrix3,
                        v = !0,
                        m = t,
                        x = e;
                    o && this.get("customFollow") ? (n = r.getWidth(o) + 2 * c, t -= n, e = e - r.getHeight(o) - 2 * c) : (n = g.width + c, t -= n, e -= g.height), u && (u.isInRange(t, e) || (u.isInHorizontal(t) || (u.tr.x - u.tl.x >= 2 * n ? (t = Math.max(u.tl.x, m) + c, v = !1) : (t = u.tl.x, e -= c)), u.isInVertical(e) || (e = u.tl.y))), this.get("x") === t && this.get("y") === e || (h && (v ? h.move(m, 0) : h.move(t - c, 0)), l && l.move(0, x), p.translate(t, e), d && this.get("visible") ? f.animate({
                        matrix: p
                    }, this.get("duration")) : (f.setMatrix(p), this.get("visible") || this.show(), i.draw()), s && this.moveCustom(t, e, v))
                },
                _setCustomDiv: function() {
                    var t, e, n = this,
                        i = n.get("html"),
                        a = n.get("canvas").get("el").parentNode;
                    /^\#/.test(i) ? (e = i.replace("#", ""), t = document.getElementById(e)) : t = r.createDom(i), n.set("customDiv", t), n.get("customFollow") && (a.appendChild(t), a.style.position = "relative")
                },
                _renderCustom: function() {
                    var t = this,
                        e = t.get("title"),
                        n = t.get("titleText"),
                        a = t.get("customDiv"),
                        s = i(a, c),
                        o = i(a, l),
                        u = t.get("items");
                    t._clearCustom(), s && e && (s.innerHTML = n), o && (t.set("titleText", n), r.each(u, function(e, n) {
                        t.addCustomItem(e, n)
                    }))
                },
                _clearCustom: function() {
                    var t = this.get("customDiv"),
                        e = i(t, c),
                        n = i(t, l);
                    e && (e.innerHTML = ""), n && (n.innerHTML = "")
                },
                addCustomItem: function(t, e) {
                    var n, a, s = this.get("customDiv"),
                        o = i(s, l),
                        u = this.get("itemTpl"),
                        c = r.mix({
                            index: e
                        }, t);
                    n = r.substitute(u, c), a = r.createDom(n), o.appendChild(a)
                },
                moveCustom: function(t, e) {
                    var n = this,
                        i = n.get("customDiv");
                    i && n.get("customFollow") && (i.style.left = t + "px", i.style.top = e + "px")
                },
                show: function() {
                    var t = this.get("crossShapeX"),
                        e = this.get("crossShapeY"),
                        n = this.get("customDiv"),
                        i = this.get("hideHandler");
                    i && clearTimeout(i), h.superclass.show.call(this), n && this.get("customFollow") && (n.style.visibility = "visible"), t && t.show(), e && e.show()
                },
                hide: function() {
                    var t = this,
                        e = t.get("customDiv"),
                        n = t.get("crossShapeX"),
                        i = t.get("crossShapeY"),
                        r = t.get("canvas"),
                        a = setTimeout(function() {
                            e && t.get("customFollow") && (e.style.visibility = "hidden"), t.set("hideHandler", null), t.get("destroyed") || (h.superclass.hide.call(t), r.draw())
                        }, t.get("duration"));
                    t.set("hideHandler", a), n && n.hide(), i && i.hide()
                },
                remove: function() {
                    var t = this,
                        e = t.get("crossShapeX"),
                        n = t.get("crossShapeY"),
                        i = t.get("customDiv"),
                        r = t.get("html");
                    e && e.remove(), n && n.remove(), h.superclass.remove.call(this), i && !/^\#/.test(r) && i.parentNode.removeChild(i)
                }
            }), t.exports = h
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                i.superclass.constructor.call(this, t)
            }
            var r = n(1),
                a = n(11),
                s = n(57),
                o = a.GroupBase;
            i.CFG = {
                items: null,
                itemsGroup: null,
                backShape: null,
                back: {
                    radius: 6,
                    fill: "#000",
                    fillOpacity: .7
                },
                padding: null,
                lineHeight: null,
                _padding: [10, 10, 10, 10],
                _lineHeight: 20
            }, r.extend(i, o), r.augment(i, {
                _initCfg: function() {
                    this.deepSet("lineHeight"), this.deepSet("padding"), this.deepSet("marker")
                },
                _beforeRenderUI: function() {
                    i.superclass._beforeRenderUI.call(this);
                    var t = this;
                    t.set("itemsGroup", this.addGroup())
                },
                _renderUI: function() {
                    i.superclass._renderUI.call(this);
                    var t = this;
                    t.get("items") && (t._renderItems(), t._renderBack())
                },
                _renderBack: function() {
                    var t = this.get("padding"),
                        e = this.get("back"),
                        n = this.get("itemsGroup"),
                        i = n.renderBack(t, e);
                    this.set("backShape", i)
                },
                _renderItems: function() {
                    var t = this,
                        e = t.get("items");
                    r.each(e, function(e, n) {
                        t._addItem(e, n)
                    })
                },
                _addItem: function(t, e) {
                    var n = this,
                        i = n.get("itemsGroup"),
                        r = n.get("lineHeight"),
                        a = n.get("padding"),
                        o = e * r + a[0] + 8;
                    i.addGroup(s, {
                        x: a[3],
                        y: o,
                        items: t
                    })
                },
                setItems: function(t) {
                    var e = this;
                    e.clearItems(), e.set("items", t), e._renderItems(), e._renderBack()
                },
                clearItems: function() {
                    var t = this,
                        e = t.get("itemsGroup");
                    e && e.clear()
                }
            }), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(10),
                r = n(35),
                a = n(147),
                s = new a,
                o = function() {};
            i.augment(o, {
                tween: s,
                fire: function(t, e) {
                    var n = new r(t);
                    i.each(e, function(t, e) {
                        n[e] = t
                    }), this.trigger(n)
                },
                getCenter: function() {
                    var t = this.getBBBox();
                    return {
                        x: t.minX + t.width / 2,
                        y: t.minY + t.height / 2
                    }
                },
                getWidth: function() {
                    return this.getBBBox().width
                },
                getHeight: function() {
                    return this.getBBBox().height
                },
                init: function() {
                    this.set("animable", !0), this.set("animCount", 0), this.transformByAttr()
                },
                deepSet: function(t) {
                    var e = this.get("_" + t),
                        n = this.deepGet(t);
                    this.set(t, i.merge(e, n))
                },
                deepGet: function(t) {
                    for (var e = this.get(t), n = this.getParent(); n;) e = i.merge(n.get(t), e), n = n.getParent();
                    return e
                },
                getCanvasNode: function() {
                    var t = this.get("canvas");
                    return t.get("el")
                },
                transformByAttr: function() {
                    var t = this.get("attrs");
                    return t && t.rotate && this.rotateAtStart(t.rotate), this
                },
                rotateAtStart: function(t) {
                    var e = this.attr("x"),
                        n = this.attr("y");
                    this.transform([
                        ["t", -e, -n],
                        ["r", t],
                        ["t", e, n]
                    ])
                },
                move: function(t, e) {
                    var n = this,
                        i = n.get("x") || 0,
                        r = n.get("y") || 0;
                    n.translate(t - i, e - r), n.set("x", t), n.set("y", e)
                },
                animate: function(t, e, n, r) {
                    var a = s.getNow(),
                        o = i.mix({}, t, {
                            duration: e
                        });
                    s.animate(this).append(a, o, n, r), "silent" === s.get("status") && s.play()
                },
                attr: function(t, e) {
                    var n = this;
                    if (0 === arguments.length) return n.__attrs;
                    if (i.isObject(t)) return i.adapAttrs(t), i.each(t, function(t, e) {
                        n._setAttr(e, t)
                    }), n.__afterSetAttrAll && n.__afterSetAttrAll(t), n;
                    if (2 === arguments.length) {
                        if (n._setAttr(t, e) !== !1) {
                            var r = i.adapAttr(t, e);
                            t = r.name, e = r.value;
                            var a = "__afterSetAttr" + i.ucfirst(t);
                            n[a] && n[a](e)
                        }
                        return n
                    }
                    return n._getAttr(t)
                }
            }), t.exports = o
        },
        function(t, e, n) {
            var i = n(10),
                r = n(29),
                a = n(103),
                s = r.G,
                o = function() {};
            i.augment(o, {
                findAllBy: function(t) {
                    var e = this,
                        n = e.get("children"),
                        r = [],
                        a = [];
                    return i.each(n, function(e) {
                        if (t(e) && r.push(e), e.findBy) {
                            a = e.findAllBy(t);
                            for (var n = 0; n < a.length; n++) r.push(a[n])
                        }
                    }), 0 !== r.length && r
                },
                isChild: function(t) {
                    var e = this.get("children");
                    return e.indexOf(t) !== -1
                },
                getFilterChild: function(t) {
                    var e = this.get("children"),
                        n = [];
                    return i.each(e, function(e) {
                        t !== e && n.push(e)
                    }), n
                },
                getChildAt: function(t) {
                    var e = this.get("children");
                    return e[t]
                },
                getFirst: function() {
                    var t = this.get("children");
                    return t[0]
                },
                getLast: function() {
                    var t = this.get("children");
                    return t[t.length - 1]
                },
                addShape: function(t, e) {
                    var n, r, a = this.get("canvas");
                    return e = i.mix({}, e), e ? (e.type = t, t = i.upperFirst(t), e.attrs && (r = e.attrs, "Text" === t && (r.fontFamily = r.fontFamily ? r.fontFamily : a.get("fontFamily"))), e.canvas = a, e.father = this, n = new s[t](e)) : n = new s[t], this.add(n), n
                },
                addGroup: function(t, e) {
                    var n, r = this.get("canvas");
                    if (e = i.mix({}, e), i.isFunction(t)) e ? (e.canvas = r, e.father = this, n = new t(e)) : n = new t({
                        canvas: r,
                        father: this
                    }), this.add(n);
                    else if (i.isObject(t)) t.canvas = r, n = new a(t), this.add(n);
                    else {
                        if (void 0 !== t) return !1;
                        n = new a, this.add(n)
                    }
                    return n
                },
                renderBack: function(t, e) {
                    var n = this.get("backShape"),
                        r = this.getBBBox(),
                        a = this.getParent();
                    return i.mix(e, {
                        x: r.minX - t[3],
                        y: r.minY - t[0],
                        width: r.width + t[1] + t[3],
                        height: r.height + t[0] + t[2]
                    }), n ? n.attr(e) : n = a.addShape("Rect", {
                        zIndex: -1,
                        attrs: e
                    }), this.set("backShape", n), a.sort(), n
                },
                findByType: function(t) {
                    var e, n = this.get("children");
                    return i.each(n, function(n) {
                        n.get("type") === t && (e = n)
                    }), e
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(29),
                r = n(10),
                a = i.G,
                s = function(t) {
                    s.superclass.constructor.call(this, t)
                };
            s.Symbols = {
                circle: function(t, e, n) {
                    return [
                        ["M", t, e - n],
                        ["a", n, n, 0, 1, 1, 0, 2 * n],
                        ["a", n, n, 0, 1, 1, 0, -2 * n],
                        ["z"]
                    ]
                },
                square: function(t, e, n) {
                    return [
                        ["M", t - n, e - n],
                        ["L", t + n, e - n],
                        ["L", t + n, e + n],
                        ["L", t - n, e + n],
                        ["z"]
                    ]
                },
                diamond: function(t, e, n) {
                    return [
                        ["M", t - n, e],
                        ["L", t, e - n],
                        ["L", t + n, e],
                        ["L", t, e + n],
                        ["z"]
                    ]
                },
                triangle: function(t, e, n) {
                    var i = n / .966,
                        r = n;
                    return [
                        ["M", t, e - n],
                        ["L", t + i, e + r],
                        ["L", t - i, e + r],
                        ["z"]
                    ]
                },
                "triangle-down": function(t, e, n) {
                    var i = n / .966,
                        r = n;
                    return [
                        ["M", t, e + n],
                        ["L", t + i, e - r],
                        ["L", t - i, e - r],
                        ["z"]
                    ]
                }
            }, s.ATTRS = {
                path: null,
                lineWidth: 1
            }, r.extend(s, a.Path), r.augment(s, {
                getDefaultAttrs: function() {
                    s.superclass.getDefaultAttrs.call(this);
                    var t, e, n = this.get("attrs"),
                        i = n.x ? n.x : 0,
                        a = n.y ? n.y : 0,
                        o = n.radius ? n.radius : n.r;
                    return e = r.isFunction(n.symbol) ? n.symbol : s.Symbols[n.symbol], e && (t = {
                        path: e(i, a, o)
                    }), r.mix(s.ATTRS, t)
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = {
                    transform: function(t, e) {
                        return t = t.clone(), i.each(e, function(e) {
                            switch (e[0]) {
                                case "t":
                                    t.translate(e[1], e[2]);
                                    break;
                                case "s":
                                    t.scale(e[1], e[2]);
                                    break;
                                case "r":
                                    t.rotate(e[1]);
                                    break;
                                case "m":
                                    t.multiply(e[1]);
                                    break;
                                default:
                                    return !1
                            }
                        }), t
                    },
                    isMatrix3: function(t) {
                        return "matrix3" === t.type
                    },
                    scale: function(t, e, n, i, r) {
                        return t = t.clone(), t.translate(-1 * i, -1 * r), t.scale(e, n), t.translate(i, r), t
                    },
                    rotate: function(t, e, n, i) {
                        return t = t.clone(), e = parseFloat(e) / 180 * Math.PI, t.translate(-1 * n, -1 * i), t.rotate(e), t.translate(n, i), t
                    }
                };
            t.exports = r
        },
        function(t, e, n) {
            var i = n(27);
            i.Position = n(303), i.Color = n(301), i.Size = n(305), i.Shape = n(304), i.Opacity = n(302), t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(85),
                a = n(27),
                s = function(t) {
                    s.superclass.constructor.call(this, t), this.initMethod()
                };
            i.extend(s, a), i.augment(s, {
                type: "color",
                names: ["color"],
                arr: null,
                method: null,
                methodType: null,
                initMethod: function() {
                    var t, e = this.methodType;
                    t = e && e.indexOf("-") !== -1 ? r.gradient(e) : r[e], this.method = t
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(27),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "opacity",
                names: ["opacity"],
                min: .1,
                max: 1,
                arr: null
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(27),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "position",
                names: ["x", "y", "z"],
                coord: null,
                parseParam: function(t, e) {
                    var n;
                    return i.isArray(t) ? (n = [], i.each(t, function(t) {
                        n.push(e.scale(t))
                    })) : n = e.scale(t), n
                },
                callback: function(t, e) {
                    var n, r, a, s = this.coord;
                    if (t || 0 === t || (t = .1), e || 0 === e || (e = .1), i.isArray(e) && i.isArray(t)) {
                        n = [], r = [];
                        for (var o = 0, u = 0; o < t.length && u < e.length; o++, u++) a = s.convertPoint({
                            x: t[o],
                            y: e[u]
                        }), n.push(a.x), r.push(a.y)
                    } else if (i.isArray(e)) r = [], i.each(e, function(e) {
                        a = s.convertPoint({
                            x: t,
                            y: e
                        }), n && n !== a.x ? (i.isArray(n) || (n = [n]), n.push(a.x)) : n = a.x, r.push(a.y)
                    });
                    else if (i.isArray(t)) n = [], i.each(t, function(t) {
                        a = s.convertPoint({
                            x: t,
                            y: e
                        }), r && r !== a.y ? (i.isArray(r) || (r = [r]), r.push(a.y)) : r = a.y, n.push(a.x)
                    });
                    else {
                        var c = s.convertPoint({
                            x: t,
                            y: e
                        });
                        n = c.x, r = c.y
                    }
                    return [n, r]
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(27),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "shape",
                names: ["shape"],
                arr: null
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(27),
                a = function(t) {
                    a.superclass.constructor.call(this, t)
                };
            i.extend(a, r), i.augment(a, {
                type: "size",
                names: ["size"],
                arr: null
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = [];
                if (t.length > 0) {
                    e = t.slice(0);
                    var n = e[0],
                        i = e[e.length - 1];
                    0 !== n.value && e.unshift({
                        value: 0
                    }), 1 !== i.value && e.push({
                        value: 1
                    })
                }
                return e
            }
            var r = n(1),
                a = n(12),
                s = a.Components.Axis,
                o = n(3),
                u = o.Vector2,
                c = n(4),
                l = ["..x", "..y", "..long", "..lant", "..pieX"],
                h = function(t) {
                    this.axisCfg = {}, r.mix(this, t)
                };
            r.augment(h, {
                axisCfg: null,
                enable: !0,
                container: null,
                chart: null,
                _isHide: function(t) {
                    var e = this.axisCfg;
                    return !(!r.inArray(l, t) || !r.isNull(e[t])) || e && e[t] === !1
                },
                _getMiddleValue: function(t, e, n) {
                    var i = e.length;
                    if (n === i - 1) return null;
                    var r = e[n + 1].value;
                    return (t + r) / 2
                },
                _getLineRange: function(t, e, n, i) {
                    var r, a, s, o = e.dim,
                        u = this.axisCfg,
                        c = "";
                    return u[o] && u[o].position && (c = u[o].position), "x" === n ? (r = {
                        x: 0,
                        y: "top" === c ? 1 : 0
                    }, a = {
                        x: 1,
                        y: "top" === c ? 1 : 0
                    }, s = !1) : (i ? (r = {
                        x: "left" === c ? 0 : 1,
                        y: 0
                    }, a = {
                        x: "left" === c ? 0 : 1,
                        y: 1
                    }) : (r = {
                        x: "right" === c ? 1 : 0,
                        y: 0
                    }, a = {
                        x: "right" === c ? 1 : 0,
                        y: 1
                    }), s = !0), r = t.convert(r), a = t.convert(a), {
                        start: r,
                        end: a,
                        isVertical: s
                    }
                },
                _getLineCfg: function(t, e, n, i) {
                    var r, a = this._getLineRange(t, e, n, i),
                        s = a.isVertical,
                        o = a.start,
                        u = a.end,
                        c = t.get("center");
                    return t.isTransposed && (s = !s), r = s && o.x > c.x || !s && o.y > c.y ? 1 : -1, {
                        isVertical: s,
                        factor: r,
                        start: o,
                        end: u
                    }
                },
                _getCircleCfg: function(t) {
                    var e, n = {},
                        i = t.get("x"),
                        r = t.get("y"),
                        a = r.start > r.end;
                    e = t.isTransposed ? {
                        x: a ? 0 : 1,
                        y: 0
                    } : {
                        x: 0,
                        y: a ? 0 : 1
                    }, e = t.convert(e);
                    var s, o = t.get("circleCentre"),
                        c = new u(e.x - o.x, e.y - o.y),
                        l = new u(1, 0);
                    s = e.y > o.y ? u.angle(c, l) : u.angle(c, l) * -1;
                    var h = s + (i.end - i.start);
                    return n.startAngle = s, n.endAngle = h, n.center = o, n.radius = Math.sqrt(Math.pow(e.x - o.x, 2) + Math.pow(e.y - o.y, 2)), n.inner = t.get("inner") || 0, n
                },
                _getRadiusCfg: function(t) {
                    var e, n, i = t.get("x").start,
                        r = i < 0 ? -1 : 1;
                    return t.isTransposed ? (e = {
                        x: 0,
                        y: 0
                    }, n = {
                        x: 1,
                        y: 0
                    }) : (e = {
                        x: 0,
                        y: 0
                    }, n = {
                        x: 0,
                        y: 1
                    }), {
                        factor: r,
                        start: t.convert(e),
                        end: t.convert(n)
                    }
                },
                _getMultiLineCfg: function(t, e, n) {
                    var i = e.getTicks(),
                        a = [],
                        s = this._getLineRange(t, e, n),
                        o = s.isVertical;
                    return r.each(i, function(e) {
                        var n = t.convert({
                            x: o ? 0 : e.value,
                            y: o ? e.value : 0
                        });
                        a.push(n)
                    }), {
                        start: s.start,
                        end: s.end,
                        tickPoints: a
                    }
                },
                _getAxisPosition: function(t, e, n) {
                    var i = t.type,
                        r = "";
                    return t.isRect ? (this.facet && "mirror" === this.facet.type ? "x" === e && (r = "bottom") : "x" === e && (r = "bottom"), "y" === e && (r = n ? "right" : "left")) : r = "clock" === i ? "clock" : "gauge" === i ? "gauge" : "helix" === i ? "helix" : "x" === e ? t.isTransposed ? "radius" : "circle" : t.isTransposed ? "circle" : "radius", r
                },
                _getAxisDefaultCfg: function(t, e, n, i, a) {
                    var s = {},
                        o = this,
                        u = o.facet,
                        l = o.axisCfg,
                        h = t.getHeight(),
                        f = t.type;
                    if ("cartesian" !== f || r.isNull(u) || u && 1 === u.rows && 1 === u.cols) "cartesian" === f && (s.title = {
                        text: e.alias || e.dim
                    });
                    else {
                        var g = u.rows,
                            d = u.cols,
                            p = u.rowIndex,
                            v = u.colIndex,
                            m = u.type;
                        s.title = {
                            text: e.alias || e.dim
                        }, "tree" === m ? ("y" === n && 0 !== u.originColIndex && 0 !== v || "x" === n && u.children) && (s.labels = null, s.title = null) : "circle" === m ? (s.labels = null, s.title = null) : ("mirror" !== m && "y" === n && (0 !== v && "left" === i || v !== d - 1 && "right" === i) && (s.labels = null, s.title = null), "rect" === m ? "x" === n && 0 !== p && (s.labels = null, s.title = null) : "list" === m ? "x" === n && p !== g - 1 && d * p + v + 1 + d <= u.count && (s.labels = null, s.title = null) : "mirror" === m && "x" === n && (1 === g && 1 === v || 2 === g && 0 === p) && (s.labels = null, s.title = null)), "y" === n && s.title && p !== Math.floor(g / 2) && (s.title = null), "x" === n && s.title && v !== Math.floor(d / 2) && (s.title = null)
                    }
                    if (s = r.mix(!0, {}, c.axis[i], s, l[e.dim]), s.ticks = e.getTicks(), t.isPolar && !e.isCategory && "x" === n && ("clock" === t.type ? s.ticks[0].text = "" : "gauge" !== t.type && s.ticks.pop()), "y" === n) {
                        var x = s.ticks,
                            y = x.length,
                            _ = 16;
                        if (h / y < _) {
                            var S = [],
                                w = Math.floor(h / _) + 1,
                                b = Math.floor(y / w);
                            b < 1 && (b = 1), S.push(x[0]);
                            for (var M = b; M <= y - 2; M += b) S.push(x[M]);
                            S.push(x[y - 1]), s.ticks = S
                        }
                    }
                    return s.coord = t, s.id = o._getViewId() + a + n, s.labels && r.isNull(s.labels.autoRotate) && (s.labels.autoRotate = !0), s
                },
                _getAxisCfg: function(t, e, n, a, s) {
                    r.isNull(s) && (s = "");
                    var o = this,
                        u = {},
                        c = o._getAxisPosition(t, a, s),
                        l = o._getViewId();
                    if (u = o._getAxisDefaultCfg(t, e, a, c, s), u.grid && n) {
                        var h = [],
                            f = i(n.getTicks()),
                            g = u.ticks;
                        r.each(g, function(e, n) {
                            var i = [],
                                c = e.value;
                            if ("middle" === u.gridAlign && (c = o._getMiddleValue(c, g, n)), c) {
                                var d = t.get("x"),
                                    p = t.get("y");
                                r.each(f, function(e) {
                                    var n = "x" === a ? c : e.value,
                                        r = "x" === a ? e.value : c,
                                        s = t.convert({
                                            x: n,
                                            y: r
                                        });
                                    if (t.isPolar) {
                                        var o = t.get("circleCentre");
                                        p.start > p.end && (r = 1 - r), s.flag = d.start > d.end ? 0 : 1, s.radius = Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2))
                                    }
                                    i.push(s)
                                }), i.id = l + s + a + e.text, h.push(i)
                            }
                        }), u.grid.items = h, u.grid.id = l + s + a + e.dim, "map" === u.coord.type && (u.grid.smooth = !0)
                    }
                    return u
                },
                _getHelixCfg: function(t) {
                    for (var e = {}, n = t.get("a"), i = t.get("startAngle"), r = t.get("endAngle"), a = 100, s = [], o = 0; o <= a; o++) {
                        var u = t.convert({
                            x: o / 100,
                            y: 0
                        });
                        s.push(u.x), s.push(u.y)
                    }
                    var c = t.convert({
                        x: 0,
                        y: 0
                    });
                    return e.a = n, e.startAngle = i, e.endAngle = r, e.crp = s, e.axisStart = c, e.center = t.get("center"), e
                },
                _getViewId: function() {
                    var t = this.chart,
                        e = t ? t.get("viewId") : "";
                    return e
                },
                _drawAxis: function(t, e, n, i, a, o) {
                    var u, c, l = this.container,
                        h = this._getViewId();
                    t.isRect ? "map" === t.type && "x" === i ? (u = s.MultLine, c = this._getMultiLineCfg(t, e, i)) : (u = s, c = this._getLineCfg(t, e, i, o)) : t.isHelix && "x" === i ? (u = s.Helix, c = this._getHelixCfg(t)) : "x" === i ? (u = s.Circle, c = this._getCircleCfg(t)) : (u = s, c = this._getRadiusCfg(t));
                    var f = this._getAxisCfg(t, e, n, i, o);
                    return f = r.mix(!0, {
                        id: h + o + i + e.dim
                    }, f, c), "y" === i && a && "circle" === a.get("type") && (f.circle = a), l.addGroup(u, f)
                },
                createAxis: function(t, e, n) {
                    var i = this;
                    if (i.enable) {
                        var a = t.get("coord"),
                            s = a.type;
                        if (this.facet = t.get("facet"), "theta" !== s && ("polar" !== s || !a.isTransposed)) {
                            var o;
                            e && !i._isHide(e.dim) && (o = i._drawAxis(a, e, n[0], "x")), n && n.length && "helix" !== s && r.each(n, function(t, n) {
                                i._isHide(t.dim) || i._drawAxis(a, t, e, "y", o, n)
                            })
                        }
                    }
                }
            }), t.exports = h
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(95),
                a = function(t) {
                    i.mix(this, t), this.resetActions()
                };
            i.augment(a, {
                type: "rect",
                coordCfg: {},
                actions: [],
                _execActions: function(t) {
                    var e = this.actions;
                    i.each(e, function(e) {
                        var n = e[0];
                        t[n](e[1], e[2])
                    })
                },
                hasAction: function(t) {
                    var e = this.actions,
                        n = !1;
                    return i.each(e, function(e) {
                        if (t === e[0]) return n = !0, !1
                    }), n
                },
                createCoord: function(t, e) {
                    var n, a, s = this,
                        o = s.type || "rect",
                        u = i.mix({
                            start: t,
                            end: e
                        }, s.coordCfg);
                    return "theta" === o ? (n = r.Polar, s.hasAction("transpose") || s.transpose(), a = new n(u), a.type = o) : (n = r[i.ucfirst(o)] || r.Rect, a = new n(u)), s._execActions(a), a
                },
                rotate: function(t) {
                    var e = this.actions;
                    return t = t * Math.PI / 180, e.push(["rotate", t]), this
                },
                reflect: function(t) {
                    var e = this.actions;
                    return e.push(["reflect", t]), this
                },
                scale: function(t, e) {
                    var n = this.actions;
                    return n.push(["scale", t, e]), this
                },
                transpose: function() {
                    var t = this.actions;
                    return t.push(["transpose"]), this
                },
                resetActions: function() {
                    return this.actions = [], this
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = i.getRatio(),
                a = function(t) {
                    i.mix(this, t)
                };
            i.augment(a, {
                chart: null,
                rangePlot: null,
                startPoint: null,
                rangeSelected: !1,
                selectable: !1,
                selectMode: "",
                _getCanvas: function() {
                    var t = this.chart;
                    return t.get("frontCanvas")
                },
                _getPointInfo: function(t) {
                    var e = this.chart,
                        n = {
                            x: t.x / r,
                            y: t.y / r
                        },
                        i = e.getViewsByPoint(n);
                    return n.views = i, n
                },
                _getEventObj: function(t, e, n) {
                    return {
                        x: e.x,
                        y: e.y,
                        target: t.target,
                        toElement: t.event.toElement,
                        views: n
                    }
                },
                _getActiveShape: function(t) {
                    var e = null;
                    return i.each(t, function(t) {
                        var n = t.getActiveShape();
                        if (n) return e = n, !1
                    }), e
                },
                _limitCoordScope: function(t) {
                    var e = this.chart,
                        n = e.get("plotRange"),
                        i = n.tl,
                        r = n.br;
                    return t.x < i.x && (t.x = i.x), t.x > r.x && (t.x = r.x), t.y < i.y && (t.y = i.y), t.y > r.y && (t.y = r.y), t
                },
                _getSelectedValues: function(t, e) {
                    var n = null;
                    if (t) {
                        var i = [];
                        if (t.isCategory)
                            for (var r = e[0]; r <= e[1]; r += 1 / t.values.length) {
                                var a = t.invert(r);
                                i.push(a)
                            } else {
                                var s = t.invert(e[0]),
                                    o = t.invert(e[1]);
                                i.push(s), i.push(o)
                            }
                        n = {
                            dim: t.dim,
                            values: i
                        }
                    }
                    return n
                },
                _filterRangeValues: function(t, e, n) {
                    var r = this,
                        a = {};
                    return i.each(n, function(n, i) {
                        var s = r._getSelectedValues(e[i], n);
                        s && (a[s.dim] = s.values, t.filter(s.dim, s.values))
                    }), t.repaint(), a
                },
                bindEvents: function() {
                    var t = this,
                        e = t._getCanvas();
                    e.on("canvas-mousedown", i.wrapBehavior(t, "onDown")), e.on("canvas-mousemove", i.wrapBehavior(t, "onMove")), e.on("canvas-mouseleave", i.wrapBehavior(t, "onOut")), e.on("canvas-click", i.wrapBehavior(t, "onClick")), e.on("canvas-dblclick", i.wrapBehavior(t, "onClick"))
                },
                onDown: function(t) {
                    var e = this.chart,
                        n = e.get("plotRange"),
                        i = n.tl,
                        a = n.br,
                        s = t.x / r,
                        o = t.y / r;
                    if (!(s < i.x || s > a.x || o < i.y || o > a.y) && (this.startPoint = {
                            x: s,
                            y: o
                        }, this.selectable)) {
                        this.rangeSelected = !0;
                        var u = this.rangePlot;
                        if (!u) {
                            var c = this._getCanvas();
                            u = c.addGroup(), u.initTransform(), this.rangePlot = u
                        }
                        var l = this._getPointInfo(t);
                        e.fire("rangeselectstart", this._getEventObj(t, l, l.views));
                        var h = t.event;
                        h.stopPropagation(), h.preventDefault(), this._bindCanvasEvent()
                    }
                },
                _bindCanvasEvent: function() {
                    var t = this._getCanvas(),
                        e = t.get("canvasDOM");
                    this.onMouseMoveListener = i.addEventListener(e, "mousemove", i.wrapBehavior(this, "_onCanvasMouseMove")), this.onMouseUpListener = i.addEventListener(e, "mouseup", i.wrapBehavior(this, "_onCanvasMouseUp"))
                },
                _onCanvasMouseMove: function(t) {
                    if (this.rangeSelected) {
                        var e, n, r, a, s = t.offsetX,
                            o = t.offsetY,
                            u = this._limitCoordScope({
                                x: s,
                                y: o
                            }),
                            c = this.startPoint,
                            l = this.chart.get("plotRange"),
                            h = this._getCanvas(),
                            f = this.rangePlot,
                            g = this.rectShape;
                        "rangeY" === this.selectMode ? (e = l.tl.x, n = u.y >= c.y ? c.y : u.y, r = Math.abs(l.tl.x - l.tr.x), a = Math.abs(c.y - u.y)) : "rangeX" === this.selectMode ? (e = u.x >= c.x ? c.x : u.x, n = l.tl.y, r = Math.abs(c.x - u.x), a = Math.abs(l.tl.y - l.bl.y)) : "rangeXY" === this.selectMode && (u.x >= c.x ? (e = c.x, n = o >= c.y ? c.y : u.y) : (e = u.x, n = u.y >= c.y ? c.y : u.y), r = Math.abs(c.x - u.x), a = Math.abs(c.y - u.y)), g ? g.attr(i.mix({}, g.__attrs, {
                            x: e,
                            y: n,
                            width: r,
                            height: a
                        })) : (g = f.addShape("rect", {
                            attrs: {
                                x: e,
                                y: n,
                                width: r,
                                height: a,
                                fill: "#CCD7EB",
                                globalAlpha: .4
                            }
                        }), this.rectShape = g), h.draw(), t.cancelBubble = !0, t.returnValue = !1
                    }
                },
                _onCanvasMouseUp: function(t) {
                    var e = this._getCanvas(),
                        n = this.startPoint,
                        r = this.rangePlot;
                    this.onMouseMoveListener.remove(), this.onMouseUpListener.remove(), this.rangePlot.clear(), this.rangeSelected = !1, this.rectShape = null, e.draw();
                    var a = t.offsetX,
                        s = t.offsetY;
                    if (!(Math.abs(n.x - a) <= 1 && Math.abs(n.y - s) <= 1)) {
                        var o, u = {},
                            c = this.chart,
                            l = this._limitCoordScope({
                                x: a,
                                y: s
                            }),
                            h = this._getPointInfo(l);
                        if (i.each(h.views, function(t) {
                                if (t.get("data")) return o = t, !1
                            }), o) {
                            var f = o.getXScale(),
                                g = o.getYScales()[0],
                                d = c.get("plotRange"),
                                p = Math.abs(d.start.y - d.end.y),
                                v = Math.abs(d.start.x - d.end.x),
                                m = [(n.x - d.start.x) / v, (l.x - d.start.x) / v].sort(),
                                x = [(d.bl.y - l.y) / p, (d.bl.y - n.y) / p].sort();
                            "rangeX" === this.selectMode ? u = this._filterRangeValues(o, [f], [m]) : "rangeY" === this.selectMode ? u = this._filterRangeValues(o, [g], [x]) : "rangeXY" === this.selectMode && (u = this._filterRangeValues(o, [f, g], [m, x]))
                        }
                        var y = {
                            x: a,
                            y: s,
                            selected: u,
                            view: o,
                            rangePlot: r
                        };
                        c.fire("rangeselectend", y)
                    }
                },
                onOut: function(t) {
                    var e = this,
                        n = e.chart,
                        i = e._getPointInfo(t);
                    n.fire("plotleave", e._getEventObj(t, i, e.curViews))
                },
                onMove: function(t) {
                    var e = this,
                        n = e.chart,
                        i = e._getPointInfo(t),
                        r = e.curViews || [];
                    if (0 === r.length && i.views.length && n.fire("plotenter", e._getEventObj(t, i, i.views)), r.length && 0 === i.views.length && n.fire("plotleave", e._getEventObj(t, i, r)), i.views.length) {
                        var a = e._getEventObj(t, i, i.views),
                            s = e._getActiveShape(i.views);
                        a.shape = s, n.fire("plotmove", a);
                        var o = n.get("frontCanvas").get("el");
                        s && s.attr("cursor") ? o.style.cursor = s.attr("cursor") : o.style.cursor = ""
                    }
                    e.curViews = i.views
                },
                onClick: function(t) {
                    var e = this,
                        n = e.chart,
                        i = e._getPointInfo(t),
                        r = i.views;
                    if (r && r.length) {
                        for (var a = e._getEventObj(t, i, r), s = null, o = r.length - 1; o >= 0; o--) {
                            for (var u, c = r[o], l = c.get("geoms"), h = l.length - 1; h >= 0 && (u = l[h], !(s = u.getSingleShape(i))); h--);
                            if (s) {
                                u && s && u.allowSelected() && u.setSelected(s.get("origin"), c), a.geom = u;
                                break
                            }
                        }
                        s && (a.shape = s, a.data = s.get("origin")), n.fire("plotclick", a), "canvas-dblclick" === t.type && n.fire("plotdbclick", a)
                    }
                },
                clearEvents: function() {
                    var t = this,
                        e = t._getCanvas();
                    e.off("canvas-mousemove", i.getWrapBehavior(t, "onMove")), e.off("canvas-mouseleave", i.getWrapBehavior(t, "onClick")), e.off("canvas-mousedown", i.getWrapBehavior(t, "onDown")), e.off("canvas-mouseup", i.getWrapBehavior(t, "onUp"))
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(178),
                a = n(4),
                s = function(t) {
                    i.mix(this, t)
                };
            i.augment(s, {
                chart: null,
                _getFacetClass: function(t) {
                    return t = i.ucfirst(t), r[t]
                },
                _createFacetView: function(t) {
                    var e = this.chart;
                    e.set("animate", !1);
                    var n = e.createView({
                        index: t.index,
                        data: t.frame,
                        region: t.region,
                        facet: t
                    });
                    return n.get("guideAssist").guides = e.get("guideAssist").guides, n.set("filters", e.get("filters")), n.set("layers", e.get("layers")), n.set("scales", e.get("scales")), n
                },
                generateFacets: function(t) {
                    var e = this,
                        n = [],
                        r = e.chart,
                        s = r.get("scaleAssist"),
                        o = r.get("facetCfg");
                    o.defs = s.defs, o.plotRange = r.get("plotRange"), o = i.mix({}, a.facetCfg, o), o.facetTitle = i.mix({}, a.facetCfg.facetTitle, o.facetTitle);
                    var u = e._getFacetClass(o.type),
                        c = new u(o),
                        l = c.generateFacets(t),
                        h = r.get("plotContainer"),
                        f = h.addGroup();
                    return c.drawTitles(l, f), i.each(l, function(t) {
                        n.push(e._createFacetView(t))
                    }), n
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(216),
                a = n(4),
                s = ["text", "tag", "html"],
                o = function(t) {
                    i.mix(this, t), this.guides = []
                };
            i.augment(o, {
                guides: null,
                xScale: null,
                yScale: null,
                backPlot: null,
                frontPlot: null,
                _addGuide: function(t) {
                    this.guides.push(t)
                },
                _getDefault: function() {
                    return {
                        xScale: this.xScale,
                        yScale: this.yScale
                    }
                },
                setScale: function(t, e) {
                    var n = this.guides;
                    this.xScale = t, this.yScale = e, i.each(n, function(n) {
                        n.xScale = t, n.yScale = e
                    })
                },
                line: function(t, e, n) {
                    var s = {
                        type: "line",
                        from: t,
                        to: e,
                        cfg: i.mix({}, a.guide.line, n)
                    };
                    i.mix(s, this._getDefault());
                    var o = new r.Line(s);
                    return this._addGuide(o), this
                },
                text: function(t, e, n) {
                    var s = {
                        type: "text",
                        position: t,
                        text: e,
                        cfg: i.mix({}, a.guide.text, n)
                    };
                    i.mix(s, this._getDefault());
                    var o = new r.Text(s);
                    return this._addGuide(o), this
                },
                image: function(t, e, n) {
                    var a = {
                        type: "image",
                        start: t
                    };
                    i.isArray(e) && (a.end = e), i.isObject(e) && (n = e), n && (a.cfg = n), i.mix(a, this._getDefault());
                    var s = new r.Image(a);
                    return this._addGuide(s), this
                },
                rect: function(t, e, n) {
                    var s = {
                        type: "rect",
                        start: t,
                        end: e,
                        cfg: i.mix({}, a.guide.rect, n)
                    };
                    i.mix(s, this._getDefault());
                    var o = new r.Rect(s);
                    return this._addGuide(o), this
                },
                arc: function(t, e, n) {
                    var s = {
                        type: "arc",
                        start: t,
                        end: e,
                        cfg: i.mix({}, a.guide.arc, n)
                    };
                    i.mix(s, this._getDefault());
                    var o = new r.Arc(s);
                    return this._addGuide(o), this
                },
                tag: function(t, e, n, s) {
                    var o = {
                        type: "tag",
                        from: t,
                        to: e,
                        text: n,
                        cfg: i.mix({}, a.guide.tag, s)
                    };
                    i.mix(o, this._getDefault());
                    var u = new r.Tag(o);
                    return this._addGuide(u), this
                },
                html: function(t, e, n) {
                    var s = {
                        type: "html",
                        point: t,
                        html: e,
                        cfg: i.mix({}, a.guide.html, n)
                    };
                    i.mix(s, this._getDefault());
                    var o = new r.Html(s);
                    return this._addGuide(o), this
                },
                paint: function(t, e, n) {
                    var r = this.guides;
                    e = e || this.backPlot, n = n || this.frontPlot, i.each(r, function(r) {
                        i.inArray(s, r.type) ? r.paint(t, n) : r.paint(t, e)
                    })
                },
                clear: function() {
                    this.guides = [], this.reset()
                },
                reset: function() {
                    var t = this.frontPlot;
                    if (t && !t.get("destroyed")) {
                        var e = t.get("parent") ? t.get("parent").get("el").parentNode : t.get("el").parentNode,
                            n = e.getElementsByClassName("guideWapper")[0];
                        n && e.removeChild(n)
                    }
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                for (var e = !0, n = t[0], i = n.attrValue, r = 1; r < t.length; r++)
                    if (t[r].attrValue !== i) {
                        e = !1;
                        break
                    }
                return e
            }

            function r(t, e) {
                var n = [];
                return c.each(t, function(t) {
                    t[v].endsWith(e) && n.push(t)
                }), n
            }

            function a(t, e) {
                return t + "\uff08" + e + "\uff09"
            }

            function s(t) {
                return t.alias || t.dim
            }

            function o(t, e, n) {
                n && c.each(t, function(t) {
                    t.checked = n.indexOf(t.value) !== -1
                })
            }

            function u(t, e, n) {
                var i;
                return !c.isNull(n) && (i = n.isCategory ? t === e : Math.abs(t - e) <= 1)
            }
            var c = n(1),
                l = n(12),
                h = l.Components.Legend,
                f = n(4),
                g = n(110),
                d = 16,
                p = 16,
                v = "value",
                m = "_origin",
                x = function(t) {
                    c.mix(this, t), this.legendCfg = {}, this.clear();
                    var e = this.chart;
                    this.container = e.get("frontCanvas"), this.plotRange = e.get("plotRange")
                };
            c.augment(x, {
                plotRange: null,
                container: null,
                chart: null,
                enable: !0,
                position: "right",
                legendCfg: {},
                _isFiltered: function(t, e, n) {
                    if (!t.isCategory) return !0;
                    var i = !1;
                    return n = t.invert(n), c.each(e, function(e) {
                        if (i = i || t.getText(e) === t.getText(n)) return !1
                    }), i
                },
                _getFilterVals: function(t, e, n) {
                    var i = e.get("filters");
                    return n && (i[t] = []), i[t]
                },
                _isDimInView: function(t, e, n) {
                    var i = !1,
                        r = t.split("*"),
                        a = e.split("*");
                    return c.each(r, function(t, e) {
                        var r = n.getScale(t);
                        if (r && r.values) {
                            var s = a[e];
                            i = c.inArray(r.values, s)
                        }
                    }), i
                },
                _addFilterVals: function(t, e, n, i) {
                    if (this._isDimInView(t, e, n)) {
                        var r = this._getFilterVals(t, n, i);
                        r.push(e)
                    }
                },
                _removeFilterVals: function(t, e, n, i) {
                    if (this._isDimInView(t, e, i)) {
                        var r = this._getFilterVals(t, i);
                        r || (r = n.slice(0)), c.remove(r, e), i.filter(t, r)
                    }
                },
                _bindClickEvent: function(t, e) {
                    var n = this,
                        i = n.chart,
                        r = i.getViews(),
                        a = [],
                        s = t.get("items");
                    c.each(s, function(t) {
                        a.push(t[v])
                    }), t.on("itemchecked", function(t) {
                        var a = t.item.value,
                            s = "single" === this.get("selectedMode");
                        n._addFilterVals(e, a, i, s), c.each(r, function(t) {
                            n._addFilterVals(e, a, t, s)
                        }), i.repaint()
                    }), t.on("itemunchecked", function(t) {
                        if ("single" !== this.get("selectedMode")) {
                            var s = t.item.value;
                            n._removeFilterVals(e, s, a, i), c.each(r, function(t) {
                                n._removeFilterVals(e, s, a, t)
                            }), i.repaint()
                        }
                    }), t.on("itemfiltered", function(t) {
                        var n = t.range,
                            r = i.getAllGeoms();
                        c.each(r, function(t) {
                            var i = t.getShapes();
                            c.each(i, function(t) {
                                var i = t.get("origin")[m][e];
                                i < n[0] || i > n[1] ? t.set("visible", !1) : t.set("visible", !0)
                            }), t.setShapesFiltered(i)
                        })
                    })
                },
                _bindActiveEvent: function(t, e) {
                    var n = this,
                        i = n.chart;
                    t.on("itemactived", function(t) {
                        var n = t.item.value,
                            r = i.getAllGeoms();
                        c.each(r, function(t) {
                            var i = t.getShapes(),
                                r = t.getScales()[e],
                                a = [];
                            c.each(i, function(t) {
                                var i = t.get("origin")[m];
                                u(i[e], n, r) && a.push(t)
                            }), t.setShapesActive(a)
                        })
                    }), t.on("itemunactived", function() {
                        var t = i.getAllGeoms();
                        c.each(t, function(t) {
                            t.clearShapeActived()
                        })
                    })
                },
                _getLayoutType: function(t) {
                    return "right" === t || "left" === t ? "vertical" : "horizontal"
                },
                _getRegion: function(t) {
                    var e = 0,
                        n = 0;
                    return c.each(t, function(t) {
                        var i = t.getBBBox();
                        e < i.width && (e = i.width), n += i.width
                    }), {
                        maxWidth: e,
                        totalWidth: n
                    }
                },
                _alignLegend: function(t, e, n, i) {
                    var r = this,
                        a = r.container,
                        s = a.get("canvas"),
                        o = s.get("width"),
                        u = s.get("height"),
                        c = r.plotRange,
                        l = 0,
                        h = 0,
                        f = t.get("dx") || 0,
                        g = t.get("dy") || 0,
                        v = t.getBBBox();
                    if ("left" === i || "right" === i) {
                        var m = n.maxWidth;
                        c ? (u = c.br.y, l = "left" === i ? d : c.br.x + d) : l = "left" === i ? d : o - m + d, h = u - v.height, e && (h = e.get("y") - v.height - p)
                    } else {
                        var x = 0;
                        c && (x = c.bl.x + (c.getWidth() - n.totalWidth) / 2), l = x, h = "top" === i ? d : u - v.height - d, e && (l = e.get("x") + e.getBBBox().width + p)
                    }
                    t.move(l + f, h + g)
                },
                _setItemChecked: function(t, e, n, i) {
                    var r = this,
                        a = r.container,
                        s = r.chart,
                        o = s.get("canvas"),
                        u = e.item,
                        l = u.geom,
                        h = e.currentTarget,
                        f = t.get("unChecked"),
                        g = t.get("word").fill;
                    if (i) {
                        if (!n) return;
                        var d = s.getAllGeoms(),
                            p = t.get("itemsGroup").get("children");
                        c.each(d, function(t) {
                            l !== t && t.setVisible(!1)
                        }), c.each(p, function(t) {
                            if (t !== u) {
                                var e = t.get("children");
                                e[0].attr("fill", f), e[1].attr("fill", f), t.set("checked", !1)
                            }
                        })
                    }
                    l.setVisible(n), u.checked = n, h.get("children")[0].attr("fill", n ? u.color : f), h.get("children")[1].attr("fill", n ? g : f), h.set("checked", n), a.draw(), o.draw()
                },
                addMixedLegend: function(t) {
                    var e = this;
                    if (!e.enable) return null;
                    var n = e.legendCfg,
                        i = "single" === n.selectedMode,
                        r = g.getShape("point"),
                        a = n.marker || "circle";
                    c.each(t, function(t, e) {
                        if (t.type = null, t.marker = r.getMarkerCfg(a, t), i && e > 0) {
                            var n = t.geom;
                            n.setVisible(!1), t.checked = !1
                        } else t.checked = !0
                    });
                    var s = e.container,
                        o = e.position,
                        u = e.legends;
                    u[o] = u[o] || [];
                    var l = s.addGroup(h.Category, c.mix({}, {
                        checkable: !(n.selectedMode === !1),
                        layout: e._getLayoutType(o),
                        items: t
                    }, f.legend[o], n));
                    return u[o].push(l), l.on("itemchecked", function(t) {
                        e._setItemChecked(this, t, !0, i)
                    }), l.on("itemunchecked", function(t) {
                        e._setItemChecked(this, t, !1, i)
                    }), l
                },
                addLegend: function(t, e, n, u) {
                    var l = this;
                    if (l.enable) {
                        var h = l.legendCfg,
                            g = t.dim;
                        if (!h || h[g] !== !1) {
                            var d = h.position || l.position;
                            h[g] && h[g].position && (d = h[g].position);
                            var p = c.mix({
                                titleText: s(t),
                                attrType: e.type
                            }, f.legend[d], h, h[g]);
                            p.checkable = !(p.selectedMode === !1);
                            var m, x, y = e.scales,
                                _ = [];
                            if (1 === y.length || t.isLinear) _ = l._getLegendItems(t, e, n, u), x = t.dim, m = l._addLegend(t, p, _, d);
                            else {
                                var S = y[1],
                                    w = t.getTicks(),
                                    b = [];
                                if (x = t.dim + "*" + S.dim, p.titleText && (p.titleText = a(s(S), s(t))), c.each(w, function(r) {
                                        var a = t.invert(r.value),
                                            s = l._getCategoryItems(S, e, n, u, a);
                                        if (i(s)) {
                                            var o = s[0];
                                            o[v] = a, o.name = t.getText(a), o.attrValue = a, _.push(o)
                                        } else b = b.concat(s)
                                    }), b.length) {
                                    var M = S.getTicks();
                                    c.each(M, function(t) {
                                        var e = S.invert(t.value),
                                            n = r(b, e);
                                        if (n.length === w.length && i(n)) {
                                            var a = n[0];
                                            a[v] = "*" + e, a.name = S.getText(e), a.attrValue = e, _.push(a)
                                        } else _ = _.concat(n)
                                    })
                                }
                                o(_, x, u), m = l._addLegend(t, p, _, d)
                            }
                            m.get("checkable") && l._bindClickEvent(m, x), l._bindActiveEvent(m, x)
                        }
                    }
                },
                _getLegendItems: function(t, e, n, i, r) {
                    var a = this;
                    return t.isLinear ? a._getContinuousItems(t, e, r) : a._getCategoryItems(t, e, n, i, r)
                },
                _getContinuousItems: function(t, e, n) {
                    var i, r, a = this,
                        s = [],
                        o = t.getTicks();
                    return c.each(o, function(o) {
                        var u = o.value,
                            c = t.invert(u),
                            l = a._mappingValues(c, e, n);
                        s.push({
                            name: o.text,
                            color: l,
                            value: u
                        }), 0 === u && (i = !0), 1 === u && (r = !0)
                    }), i || s.unshift({
                        name: t.getText(t.invert(0)),
                        color: a._mappingValues(t.invert(0), e, n),
                        value: 0
                    }), r || s.push({
                        name: t.getText(t.invert(1)),
                        color: a._mappingValues(t.invert(1), e, n),
                        value: 1
                    }), s
                },
                _getCategoryItems: function(t, e, n, i, r) {
                    var s, o, u = this,
                        l = t.getTicks(),
                        h = u.legendCfg,
                        f = [],
                        d = "point",
                        p = t.dim,
                        v = h.marker || h[p] && h[p].marker || "circle",
                        m = "single" === h.selectedMode || h[p] && "single" === h[p].selectedMode;
                    return c.each(l, function(l, h) {
                        var p = l.text;
                        o = p;
                        var x = l.value,
                            y = t.invert(x),
                            _ = {
                                isInCircle: n.isInCircle()
                            },
                            S = u._mappingValues(y, e, r);
                        "color" === e.type ? _.color = S : "shape" === e.type ? (d = n.get("shapeType") || n.get("type"), v = S) : "size" === e.type && (s = S);
                        var w = g.getShape(d),
                            b = w.getMarkerCfg(v, _);
                        c.isNull(s) || (b.radius = s);
                        var M = !0;
                        c.isNull(r) ? M = m ? i ? u._isFiltered(t, i, x) : 0 === h : !i || u._isFiltered(t, i, x) : (y = r + "*" + y, o = a(o, r)), f.push({
                            name: o,
                            checked: M,
                            type: null,
                            marker: b,
                            attrValue: S,
                            value: y
                        })
                    }), f
                },
                _mappingValues: function(t, e, n) {
                    var i;
                    if (c.isNull(n)) i = e.mappingValues(t).join("");
                    else {
                        var r = [n, t];
                        i = e.mappingValues.apply(e, r).join("")
                    }
                    return i
                },
                _addLegend: function(t, e, n, i) {
                    var r, a, s = this,
                        o = s._getLayoutType(i);
                    if (t.isLinear) a = h.Continuous, r = c.mix({
                        layout: o
                    }, e);
                    else {
                        a = h.Category;
                        var u = s.plotRange,
                            l = "right" === i || "left" === i ? u.bl.y - u.tr.y : u.tr.x - u.bl.x;
                        r = c.mix(!0, {
                            maxLength: l,
                            layout: o,
                            items: n,
                            word: {
                                fill: "#333"
                            }
                        }, e)
                    }
                    r.items = n;
                    var f = s.container,
                        g = s.legends,
                        d = f.addGroup(a, r);
                    return g[i] = g[i] || [], g[i].push(d), d
                },
                alignLegends: function() {
                    var t = this,
                        e = t.legends;
                    return c.each(e, function(e, n) {
                        var i = t._getRegion(e);
                        c.each(e, function(r, a) {
                            var s = e[a - 1];
                            t._alignLegend(r, s, i, n)
                        })
                    }), this
                },
                clear: function() {
                    var t = this,
                        e = t.legends;
                    c.each(e, function(t) {
                        c.each(t, function(t) {
                            t.remove()
                        })
                    }), this.legends = {}
                }
            }), t.exports = x
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(92),
                a = n(51),
                s = n(2),
                o = n(4),
                u = {
                    LINEAR: "linear",
                    CAT: "cat",
                    TIME: "time"
                },
                c = function(t) {
                    i.mix(this, t), this.defs = this.defs || {}
                };
            i.augment(c, {
                defs: null,
                _addNewCol: function(t, e, n) {
                    var r = this,
                        a = r._getDefs(),
                        s = e.dims,
                        o = [];
                    i.each(s, function(t) {
                        var e = a[t] && a[t].type || r._getDefaultType(t, n);
                        if (0 === o.length) o.push(e);
                        else if (!i.inArray(o, e)) throw new Error('Sorry, the values that are involved in "+" must be of the same type.')
                    }), i.isNull(e.type) && (e.type = o[0]);
                    var u = [];
                    i.each(s, function(t) {
                        u.push(n.colArray(t))
                    });
                    for (var c = [], l = 0; l < u[0].length; l++) {
                        c[l] = [];
                        for (var h = 0; h < s.length; h++) c[l].push(u[h][l])
                    }
                    n.addCol(t, c)
                },
                _getDefs: function() {
                    var t = this.defs;
                    return i.mix(!0, {}, o.scales, t)
                },
                _getScaleCfg: function(t, e, n, a) {
                    var o = {
                        dim: e
                    };
                    if (n.contains(e)) {
                        var u = s.values(n, e);
                        o.values = u, r.isCategory(t) || "time" === t || (o.min = s.min(n, e), o.max = s.max(n, e), o.nice = !0), "time" === t && (o.nice = !1)
                    }
                    if (!r.isCategory(t) && "time" !== t && a && (!o.min || o.min > 0)) {
                        var c = this.defs,
                            l = {};
                        l[e] = {
                            min: 0
                        }, this.defs = i.mix(!0, l, c)
                    }
                    return o
                },
                _getDefaultType: function(t, e) {
                    var n = u.LINEAR,
                        r = s.values(e, t),
                        o = r[0];
                    return i.isArray(o) && (o = o[0]), a.isDateString(o) ? n = u.TIME : i.isString(o) && (n = u.CAT), n
                },
                _syncScales: function(t, e) {
                    if ("identity" !== t.type) {
                        var n = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        t.change(n)
                    }
                },
                createDefaultScale: function(t, e, n) {
                    var i = this._getDefaultType(t, e),
                        a = this._getScaleCfg(i, t, e, n);
                    return r[i](a)
                },
                createScale: function(t, e, n) {
                    var a, s = this,
                        o = s._getDefs();
                    if (i.isNumber(t)) a = r.I({
                        value: t,
                        dim: t.toString()
                    });
                    else if (o[t] || i.indexOf(e.colNames(), t) !== -1)
                        if (o[t]) {
                            var u = o[t];
                            u.dims && !e.contains(t) && s._addNewCol(t, u, e);
                            var c = u.type || s._getDefaultType(t, e),
                                l = s._getScaleCfg(c, t, e, n);
                            i.mix(l, u), a = r[c](l)
                        } else a = s.createDefaultScale(t, e, n);
                    else a = r.I({
                        value: t,
                        dim: t
                    });
                    return a
                },
                sortScales: function(t, e, n) {
                    var r = this;
                    return n ? (t = s.sortBy(t, n), void i.each(e, function(e, n) {
                        var i = e.type;
                        if ("identity" !== i && t.contains(n)) {
                            var a = r.createScale(n, t);
                            e.values = a.values
                        }
                    })) : null
                },
                trainScales: function(t, e) {
                    var n = this;
                    i.each(e, function(e) {
                        var i = e.type,
                            r = e.dim;
                        if ("identity" !== i && t.contains(r)) {
                            var a = n.createScale(r, t);
                            n._syncScales(e, a)
                        }
                    })
                },
                resetScales: function(t, e) {
                    var n = this;
                    i.each(e, function(e, i) {
                        var r = n.createScale(i, t);
                        n._syncScales(e, r)
                    })
                },
                _getFilterFunction: function(t, e) {
                    var n, r, a, s, o = t.dim;
                    return n = t.isCategory ? "timeCat" === t.type ? function(t) {
                        return r = new Date(t[o]).getTime(), a = new Date(e[0]).getTime(), s = new Date(e[1]).getTime(), r >= a && r <= s
                    } : function(n) {
                        var a = !1;
                        return i.each(e, function(e) {
                            if (r = n[o], a = a || t.getText(e) === t.getText(r)) return !1
                        }), a
                    } : t.isLinear ? function(n) {
                        return r = t.translate(n[o]), a = t.translate(e[0]), s = t.translate(e[1]), r >= a && r <= s
                    } : function(t) {
                        return r = t[o], i.inArray(e, r)
                    }
                },
                _getMultpleFilterFunction: function(t, e) {
                    var n = function(n) {
                        var r = !1;
                        return i.each(e, function(e) {
                            var a = e.split("*"),
                                s = !0;
                            if (i.each(a, function(e, i) {
                                    if (e) {
                                        var r = t[i],
                                            a = n[r.dim];
                                        s = s && r.getText(e) === r.getText(a)
                                    }
                                }), r = r || s) return !1
                        }), r
                    };
                    return n
                },
                filterData: function(t, e, n) {
                    var r = this;
                    t = r.convertToString(t, n);
                    var a = [];
                    i.each(e, function(t, e) {
                        var i;
                        if (e.indexOf("*") !== -1) {
                            var s = e.split("*"),
                                o = s.map(function(t) {
                                    return n[t]
                                });
                            t && o.length && (i = r._getMultpleFilterFunction(o, t), a.push(i))
                        } else {
                            var u = n[e];
                            t && u && (i = r._getFilterFunction(u, t), a.push(i))
                        }
                    });
                    var o = t;
                    return a.length && (o = s.filter(t, function(t) {
                        var e = !0;
                        return i.each(a, function(n) {
                            e = e && n(t)
                        }), e
                    })), o
                },
                convertToString: function(t, e) {
                    var n = this._getDefs();
                    return i.each(e, function(e, r) {
                        var a = e.type;
                        if (e.isCategory && "timeCat" !== a && t.contains(r)) {
                            var s = n[r];
                            if (s && !s.hasOwnProperty("values") || !s) {
                                var o = t.colArray(r);
                                i.each(o, function(t, e) {
                                    i.isNull(t) || (o[e] = t.toString())
                                }), t.colReplace(r, o)
                            }
                        }
                    }), t
                }
            }), t.exports = c
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = -1;
                return o.each(t, function(t, i) {
                    if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return n = i, !1
                }), n
            }

            function r(t, e) {
                if (!t) return !1;
                var n = "";
                return !!t.className && (n = o.isNull(t.className.baseVal) ? t.className : t.className.baseVal, n.indexOf(e) !== -1)
            }

            function a(t, e) {
                for (var n = t.parentNode, i = !1; n && n !== document.body;) {
                    if (r(n, e)) {
                        i = !0;
                        break
                    }
                    n = n.parentNode
                }
                return i
            }

            function s(t) {
                var e = [];
                return o.each(t, function(t) {
                    var n = i(e, t);
                    n === -1 ? e.push(t) : e[n] = t
                }), e
            }
            var o = n(1),
                u = n(4),
                c = n(12),
                l = c.Components,
                h = l.Tooltip,
                f = ["line", "area", "path", "areaStack"],
                g = ["line", "area"],
                d = function(t) {
                    o.mix(this, t)
                };
            o.augment(d, {
                enable: !0,
                cfg: null,
                tooltip: null,
                markerGroup: null,
                chart: null,
                timeStamp: 0,
                get: function(t) {
                    return this[t]
                },
                set: function(t, e) {
                    this[t] = e
                },
                _setTooltipCrosshairs: function() {
                    var t = this,
                        e = o.mix({}, u.tooltip),
                        n = t.get("chart"),
                        i = n.getAllGeoms(),
                        r = [];
                    return o.each(i, function(t) {
                        var e = t.get("type");
                        o.indexOf(r, e) === -1 && r.push(e)
                    }), i.length && "cartesian" === i[0].get("coord").type && 1 === r.length && o.indexOf(g, r[0]) > -1 && o.mix(e, {
                        crosshairs: !0
                    }), e
                },
                _showMarkers: function(t, e) {
                    var n = this,
                        i = n.get("markerGroup");
                    i.setMatrix(e.get("matrix").clone()), i.clear(), o.each(t, function(t) {
                        var e = t.point,
                            n = o.mix({}, i.get("marker"), {
                                x: o.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
                                y: o.isArray(e.y) ? e.y[e.y.length - 1] : e.y,
                                stroke: t.color
                            });
                        i.addShape("Marker", {
                            attrs: n
                        })
                    }), i.show()
                },
                _getCanvas: function() {
                    return this.chart.get("frontCanvas")
                },
                _setTooltip: function(t, e, n) {
                    var i = this,
                        r = i.get("tooltip"),
                        a = i.get("prePoint");
                    if (!a || a.x !== e.x || a.y !== e.y) {
                        n = s(n), i.set("prePoint", e);
                        var u = i.chart,
                            c = o.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
                            l = o.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
                        r.get("visible") || u.fire("tooltipshow", {
                            x: c,
                            y: l,
                            tooltip: r
                        }), u.fire("tooltipchange", {
                            tooltip: r,
                            x: c,
                            y: l,
                            items: n
                        }), r.setContent(t, n), r.setPosition(c, l)
                    }
                },
                _clearActive: function() {
                    var t = this,
                        e = t.get("chart"),
                        n = e.getAllGeoms();
                    o.each(n, function(t) {
                        t.clearShapeActived()
                    })
                },
                _bindEvent: function() {
                    var t = this,
                        e = t.chart;
                    e.on("plotmove", o.wrapBehavior(t, "onMouseMove")), e.on("plotleave", o.wrapBehavior(t, "onMouseOut"))
                },
                _offEvent: function() {
                    var t = this,
                        e = t.chart;
                    e.off("plotmove", o.getWrapBehavior(t, "onMouseMove")), e.off("plotleave", o.getWrapBehavior(t, "onMouseOut"))
                },
                renderTooltip: function() {
                    var t = this;
                    if (!t.get("tooltip")) {
                        var e = t.get("chart"),
                            n = t.get("cfg"),
                            i = t._setTooltipCrosshairs();
                        n = o.mix({
                            plotRange: e.get("plotRange"),
                            visible: !1,
                            capture: !1
                        }, i, n);
                        var r = t._getCanvas();
                        if (!t.get("markerGroup")) {
                            var a = r.addGroup({
                                zIndex: 9,
                                capture: !1,
                                marker: u.tooltipMarker
                            });
                            t.set("markerGroup", a)
                        }
                        var s = r.addGroup(h, n);
                        r.sort(), t.set("tooltip", s), t._bindEvent()
                    }
                },
                showTooltip: function(t, e) {
                    var n = this;
                    if ((!e || e.length) && t) {
                        var i = n.get("cfg"),
                            r = i && i.map,
                            a = [],
                            s = [];
                        if (o.each(e, function(e) {
                                if (!e.get("tooltipEnable")) return !0;
                                var i = e.get("geoms"),
                                    u = e.get("coord");
                                o.each(i, function(e) {
                                    var n = e.get("container");
                                    if (n.get("visible")) {
                                        var i = e.get("frames");
                                        if (e.isShareTooltip()) {
                                            var u = [];
                                            o.each(i, function(n) {
                                                var i = e.findPoint(t, n);
                                                if (i) {
                                                    u.push(i);
                                                    var c = e.getTipItems(i, r);
                                                    s = s.concat(c);
                                                    var l = e.get("type");
                                                    o.indexOf(f, l) !== -1 && (a = a.concat(c))
                                                }
                                            }), u.length && e.setActiveByPoint(u[0])
                                        } else {
                                            var c = e.getSingleShape(t, i);
                                            c && c.get("visible") && (s = e.getTipItems(c.get("origin"), r), e.setShapesActive([c]))
                                        }
                                    }
                                }), a.length && n._showMarkers(a, u)
                            }), s.length) {
                            var u = s[0];
                            if (a.length) {
                                t = u.point;
                                var c = o.isArray(t.x) ? t.x[t.x.length - 1] : t.x,
                                    l = o.isArray(t.y) ? t.y[t.y.length - 1] : t.y,
                                    h = e[0].get("coord");
                                t = h.trans(c, l, 1)
                            }
                            var g = u.title || u.name;
                            n._setTooltip(g, t, s)
                        } else n._clearActive()
                    }
                },
                hideTooltip: function() {
                    var t = this,
                        e = t.get("tooltip"),
                        n = t.chart,
                        i = t.get("markerGroup"),
                        r = t._getCanvas();
                    t.set("prePoint", null), e.hide(), i.hide(), t._clearActive(), n.fire("tooltiphide", {
                        tooltip: e
                    }), r.draw()
                },
                onMouseMove: function(t) {
                    var e = this.get("timeStamp"),
                        n = +new Date;
                    if (this.enable && t.views && t.views.length) {
                        var i = this,
                            r = {
                                x: t.x,
                                y: t.y
                            };
                        n - e > 16 && (i.showTooltip(r, t.views), this.set("timeStamp", n))
                    }
                },
                onMouseOut: function(t) {
                    var e = this,
                        n = e.get("tooltip"),
                        i = e._getCanvas();
                    n.get("visible") && (t && t.target !== i || t && n.get("custom") && t.toElement && (r(t.toElement, "ac-tooltip") || a(t.toElement, "ac-tooltip")) || e.hideTooltip())
                },
                clear: function() {
                    var t = this,
                        e = t.get("tooltip"),
                        n = t.get("markerGroup");
                    e && e.remove(), n && n.remove(), t.set("tooltip", null), t.set("markerGroup", null), t.set("prePoint", null), t._offEvent()
                }
            }), t.exports = d
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = !1;
                return l.each(t, function(t) {
                    var i = [].concat(t.values),
                        r = [].concat(e.values);
                    if (t.type === e.type && t.dim === e.dim && i.sort().toString() === r.sort().toString()) return void(n = !0)
                }), n
            }

            function r(t) {
                var e = t.get("el");
                e.style.position = "absolute", e.style.top = 0, e.style.left = 0
            }

            function a(t, e) {
                var n = new h(t);
                return e && r(n), n.set("fontFamily", d.fontFamily), n
            }

            function s(t) {
                var e = t.id,
                    n = document.getElementById(e),
                    i = t.container;
                if (!n && !i) throw new Error("please specify the canvas container Id !");
                if (n && i) throw new Error('"container" and "id" can not be declared at the same time!');
                if (!i) {
                    var r = l.guid("g-chart");
                    i = l.createDom("<div></div>"), i.id = r, n.appendChild(i)
                }
                return i
            }

            function o(t) {
                var e = t.container,
                    n = l.getWidth(e);
                return t.width = n, t
            }

            function u(t) {
                var e = t.width,
                    n = t.height,
                    i = t.container,
                    r = {
                        width: e,
                        height: n,
                        containerDOM: i,
                        capture: !1
                    },
                    s = a(r, !1),
                    o = a(r, !0),
                    u = a(r, !0);
                return t.backCanvas = s, t.canvas = o, t.frontCanvas = u, t
            }

            function c(t) {
                var e = l.mix({}, d.plotCfg, t.plotCfg),
                    n = s(t);
                t.plotCfg = e, t.container = n, t.forceFit && (t = o(t)), t = u(t);
                var i = t.backCanvas,
                    r = i.addGroup(g.Back, e);
                return t.backPlotBg = r, t.plotRange = r.get("plotRange"), t
            }
            var l = n(1),
                h = n(12),
                f = h.Components,
                g = f.Plot,
                d = n(4),
                p = n(341),
                v = n(104),
                m = function x(t) {
                    t = c(t), x.superclass.constructor.call(this, t), this.init()
                };
            m.ATTRS = {
                id: null,
                width: null,
                height: null,
                plotCfg: null,
                forceFit: !1
            }, l.extend(m, p), l.augment(m, {
                init: function() {
                    var t = this.get("plotRange");
                    this.set("region", {
                        start: t.start,
                        end: t.end
                    }), this.set("viewId", "chart"), this.get("forceFit") && window.addEventListener("resize", l.wrapBehavior(this, "_initForceFitEvent")), v.initEvent(this), v.initLegend(this), v.initTooltip(this)
                },
                _initForceFitEvent: function() {
                    var t = setTimeout(l.wrapBehavior(this, "forceFit"), 200);
                    clearTimeout(this.get("resizeTimer")), this.set("resizeTimer", t)
                },
                _getAllYScales: function() {
                    var t = [],
                        e = this.get("views");
                    return t = t.concat(this.getYScales()), l.each(e, function(e) {
                        t = t.concat(e.getYScales())
                    }), t
                },
                _renderLegends: function() {
                    var t = this.get("legendAssist"),
                        e = this.getAllGeoms(),
                        n = this._getAllYScales(),
                        r = [];
                    if (l.each(e, function(e) {
                            var n = e.getLegendAttr();
                            l.each(n, function(n) {
                                var a = n.type,
                                    s = n.getScale(a);
                                if ("identity" !== s.type && !i(r, s)) {
                                    r.push(s);
                                    var o, u = n.scales,
                                        c = 1 === u.length ? s.dim : s.dim + "*" + u[1].dim,
                                        l = e.get("chart"),
                                        h = l.get("filters");
                                    h && h[c] && (o = h[c]), t.addLegend(s, n, e, o)
                                }
                            })
                        }), !r.length && n.length > 1) {
                        var a = [];
                        l.each(n, function(t) {
                            l.each(e, function(e) {
                                if (e.getYScale() === t && t.values && t.values.length > 0) {
                                    var n = {
                                        name: t.alias || t.dim,
                                        color: e.getDefaultValue("color"),
                                        geom: e
                                    };
                                    return a.push(n), !1
                                }
                            })
                        }), t.addMixedLegend(a)
                    }
                    t.alignLegends()
                },
                _renderTooltip: function() {
                    var t = this.get("tooltipAssist");
                    t.renderTooltip()
                },
                legend: function(t, e) {
                    var n = this.get("legendAssist"),
                        i = n.legendCfg;
                    return n.enable = !0, l.isBoolean(t) ? n.enable = t : l.isObject(t) ? (i = t, n.position = i.position ? i.position : "right") : i[t] = e, n.legendCfg = i, this
                },
                tooltip: function(t, e) {
                    var n = this.get("tooltipAssist");
                    return l.isObject(t) && (e = t, t = !0), n.enable = t, n.cfg = e, this
                },
                facet: function(t, e) {
                    var n = {};
                    return n.dims = l.isString(t) ? [t] : t, l.mix(n, e), this.set("facetCfg", n), this
                },
                changeSize: function(t, e) {
                    var n = this,
                        i = n.get("backCanvas"),
                        r = n.get("canvas"),
                        a = n.get("frontCanvas");
                    i.changeSize(t, e), r.changeSize(t, e), a.changeSize(t, e), n.set("width", t), n.set("height", e);
                    var s = n.get("backPlotBg");
                    s.repaint();
                    var o = s.get("plotRange");
                    n.set("region", {
                        start: o.start,
                        end: o.end
                    });
                    var u = n.get("views");
                    return l.each(u, function(t) {
                        var e = n._getRegion(t);
                        t.set("region", e)
                    }), n.repaint(), n
                },
                destroy: function() {
                    if (!this.destroyed) {
                        var t = this.get("container");
                        this.fire("destroy"), this.clear(), this.get("backCanvas").destroy(), this.get("canvas").destroy(), this.get("frontCanvas").destroy(), this._attrs = {}, this.events = {}, this.destroyed = !0, t.parentNode.removeChild(t), window.removeEventListener("resize", l.getWrapBehavior(this, "_initForceFitEvent"))
                    }
                },
                showTooltip: function(t) {
                    var e = this,
                        n = e.getViewsByPoint(t);
                    if (n.length) {
                        var i = e.get("tooltipAssist");
                        i.showTooltip(t, n)
                    }
                    return e
                },
                hideTooltip: function() {
                    var t = this.get("tooltipAssist");
                    t.hideTooltip()
                },
                getTooltipItems: function(t) {
                    var e = this,
                        n = e.getViewsByPoint(t),
                        i = [];
                    return l.each(n, function(n) {
                        var r = n.getGeoms(),
                            a = e.get("tooltipAssist"),
                            s = a.cfg && a.cfg.map;
                        l.each(r, function(e) {
                            var n = e.get("frames"),
                                r = [];
                            l.each(n, function(n) {
                                var i = e.findPoint(t, n);
                                if (i) {
                                    var a = e.getTipItems(i, s);
                                    r = r.concat(a)
                                }
                            }), i = i.concat(r)
                        })
                    }), i
                },
                forceFit: function() {
                    var t = this.get("container"),
                        e = l.getWidth(t),
                        n = this.get("height");
                    e !== this.get("width") && this.changeSize(e, n)
                },
                setMode: function(t) {
                    var e = this.get("eventAssist");
                    return t === !1 ? e.selectable = !1 : "select" === t && (e.selectable = !0), this
                },
                select: function(t) {
                    var e = this.get("eventAssist");
                    return e.selectMode = t, this
                },
                downloadImage: function() {
                    var t = this.get("frontCanvas"),
                        e = this.get("canvas"),
                        n = this.get("backCanvas"),
                        i = n.get("el"),
                        r = i.getContext("2d");
                    r.drawImage(e.get("el"), 0, 0), r.drawImage(t.get("el"), 0, 0);
                    var a = i.toDataURL("image/png");
                    n.draw();
                    var s = document.createElement("a");
                    return s.download = "chart.png", s.href = a.replace("image/png", "image/octet-stream"), s.click(), a
                }
            }), t.exports = m
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(300),
                a = n(318),
                s = n(4),
                o = function(t) {
                    i.mix(this, t), this._init()
                };
            i.augment(o, {
                type: "point",
                adjusts: null,
                chart: null,
                attrs: null,
                styleCfg: null,
                labelCfg: null,
                scales: null,
                tooltipDims: null,
                selectedCfg: null,
                _init: function() {
                    this.attrs = [], this.scales = {}, this.stats = [];
                    var t = this.adjusts;
                    t && (i.each(t, function(e, n) {
                        t[n] = i.ucfirst(e)
                    }), this.adjusts = t)
                },
                _createScale: function(t, e) {
                    var n = this.scales,
                        i = this.chart;
                    return n[t] || (n[t] = i.createScale(t, e)), n[t]
                },
                _addStat: function(t) {
                    this.stats.push(t)
                },
                _addAttr: function(t, e) {
                    var n = this.attrs;
                    t = i.ucfirst(t);
                    var a = r[t],
                        s = new a(e);
                    n.push(s)
                },
                _getDefaultShapes: function() {
                    var t = this.type,
                        e = /[A-Z].*$/;
                    return t = t.replace(e), s.shapes[t]
                },
                _getDefaultColors: function() {
                    var t, e = this.adjusts;
                    return t = e && 1 === e.length ? this.type + e[0] : this.type, s.colors[t] || s.colors["default"]
                },
                _parseDims: function(t, e) {
                    var n, r = this,
                        a = r.chart;
                    if (t.isStat && (n = t, n.init(), t = n.getDims(), r._addStat(n)), i.isString(t) && t.indexOf("+") !== -1) {
                        var s = [],
                            o = a.get("scaleAssist"),
                            u = t.replace(/\s+/g, "").split("*");
                        i.each(u, function(t) {
                            var e = t.replace(/\(|\)|\s+/g, "").split("+"),
                                n = e.join("+");
                            s.push(n), e.length > 1 && (o.defs[n] = i.mix({}, o.defs[n], {
                                dims: e
                            }))
                        }), t = s
                    } else i.isString(t) && t.indexOf("*") !== -1 ? (t = t.split("*"), t = i.map(t, function(t) {
                        return t.trim()
                    })) : (i.isNumber(t) || i.isString(t)) && (t = [t]);
                    var c = a.get("coordAssist");
                    "position" === e && "theta" === c.type && "interval" === r.type && "Stack" === r.adjusts[0] && t.unshift("..pieX"), "position" === e && 1 === t.length && (i.inArray(r.adjusts, "Jitter") || i.inArray(r.adjusts, "Stack")) && t.push("..y");
                    var l = [];
                    return i.each(t, function(t, e) {
                        var n = 1 === e && "interval" === r.type,
                            i = r._createScale(t, n);
                        l.push(i)
                    }), {
                        dims: t,
                        stat: n,
                        scales: l
                    }
                },
                createGeom: function() {
                    var t = this.type;
                    return t = i.ucfirst(t), new a({
                        type: this.type,
                        chart: this.chart,
                        attrs: this.attrs,
                        stats: this.stats,
                        scales: this.scales,
                        styleCfg: this.styleCfg,
                        labelCfg: this.labelCfg,
                        tooltipDims: this.tooltipDims,
                        adjusts: this.adjusts,
                        selectedCfg: this.selectedCfg
                    })
                },
                position: function(t) {
                    var e = this._parseDims(t, "position");
                    return this._addAttr("position", {
                        scales: e.scales,
                        stat: e.stat
                    }), this
                },
                color: function(t, e) {
                    var n = this._parseDims(t),
                        r = {
                            scales: n.scales,
                            stat: n.stat
                        };
                    return "heatmap" !== this.type || e || (e = s.heatmapColors), i.isFunction(e) ? r.callback = e : i.isArray(e) ? r.arr = e : e ? r.methodType = e : r.arr = this._getDefaultColors(), this._addAttr("color", r), this
                },
                shape: function(t, e) {
                    var n = this._parseDims(t),
                        r = {
                            scales: n.scales,
                            stat: n.stat
                        };
                    return i.isFunction(e) ? r.callback = e : r.arr = e || this._getDefaultShapes(), this._addAttr("shape", r), this
                },
                opacity: function(t, e) {
                    var n = this._parseDims(t),
                        r = {
                            scales: n.scales,
                            stat: n.stat
                        };
                    return i.isFunction(e) && (r.callback = e), this._addAttr("opacity", r), this
                },
                size: function(t, e, n) {
                    var r = this._parseDims(t),
                        a = {
                            scales: r.scales,
                            stat: r.stat,
                            min: i.isNull(n) ? 1 : n
                        };
                    return i.isFunction(e) ? a.callback = e : a.max = e || 10, this._addAttr("size", a), this
                },
                label: function(t, e, n) {
                    var r = this._parseDims(t);
                    i.isObject(e) && (n = e, e = null);
                    var a = {
                        scales: r.scales,
                        cfg: n,
                        stat: r.stat,
                        callback: e
                    };
                    return this.labelCfg = a, this
                },
                tooltip: function(t) {
                    var e = this._parseDims(t);
                    return this.tooltipDims = e.dims, this
                },
                style: function(t) {
                    return this.styleCfg = t, this
                },
                selected: function(t, e) {
                    var n = {};
                    return t === !1 ? n.selectedMode = !1 : n = t === !0 ? e : t, this.selectedCfg = n, this
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(12),
                a = n(210),
                s = function o(t) {
                    o.superclass.constructor.call(this, t)
                };
            i.extend(s, r.Group), i.mixin(s, [a.Group]), i.augment(s, {
                isItemActived: function(t) {
                    return t.get("actived")
                },
                setItemActived: function(t, e) {
                    t.set("actived", e)
                }
            }), t.exports = s
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (p.isArray(t) && e.get("animate") !== !1) {
                    var n = e.get("children");
                    p.each(n, function(e) {
                        e.isGroup ? i(t, e) : e.isShape && t.push(e)
                    })
                }
            }

            function r(t, e) {
                var n, i, r, a, s = t.length,
                    o = e.length,
                    u = o > s ? e : t,
                    c = {
                        attrs1: {},
                        attrs2: {}
                    },
                    l = !1;
                return p.each(u, function(s, o) {
                    n = t[o], i = e[o], p.isObject(n) || p.isObject(i) || "path" === o && (n = p.parsePathString(n), i = p.parsePathString(i), r = p.path2string(n), a = p.path2string(i), r === a || r.indexOf("NaN") !== -1 || a.indexOf("NaN") !== -1) || p.isArray(n) && p.isArray(i) && p.equalsArray(n, i) || n === i || y[o] || (c.attrs1[o] = n, c.attrs2[o] = i, l = !0)
                }), !!l && c
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++)
                    if (e[n].id === t) return e[n];
                return !1
            }

            function s(t) {
                var e = {},
                    n = t.__attrs;
                return p.each(n, function(n, i) {
                    e[i] = t.attr(i)
                }), e
            }

            function o(t) {
                var e = [];
                return p.each(t, function(t) {
                    t.id && !t.isClip && e.push({
                        id: t.id,
                        stash: !0,
                        type: t.get("type"),
                        attrs: s(t),
                        matrix: t.getMatrix().clone(),
                        animateType: t.animateType,
                        realShape: t,
                        isStash: !0
                    })
                }), e
            }

            function u(t) {
                for (var e = 0; e < t.length; e++)
                    if (0 !== t[e] && !t[e] || !p.isNumber(t[e])) return !1;
                return !0
            }

            function c(t) {
                return p.isObject(t) && "matrix3" === t.type && u(t.elements)
            }

            function l(t, e) {
                var n = !0;
                return p.each(t, function(t, i) {
                    if (("undefined" == typeof t ? "undefined" : d(t)) !== d(e[i])) return n = !1, !1
                }), n
            }

            function h(t, e) {
                var n, i, r, a;
                return !(!t || !e) && (n = t.attrs, i = s(e), r = t.matrix, a = e.getMatrix(), !(!c(r) || !c(a)) && !!l(n, i))
            }

            function f(t, e, n, i) {
                var o, u, l, f, g, d, v, y, _, S = t.concat(e);
                return S.length > 1500 ? void n.draw() : void p.each(S, function(S) {
                    if (!S.isStash && S.realShape && S.realShape.isTem) return void S.realShape.remove(!0);
                    if (S.isTem && !S.get("destroyed") && S.remove(!0), f = S.id)
                        if (S.isStash ? (u = S, l = a(f, e)) : (u = a(f, t), l = S), u && l && !l.get("destroyed")) {
                            if (!h(u, l)) return;
                            if (d = m.getAnimate(u.animateType, i, "update"), p.isFunction(d) && (d = d(i)), null === d) return;
                            if (v = l.getMatrix(), g = r(u.attrs, s(l)), _ = x.equal(u.matrix, v), !g && _) return;
                            g && _ ? (l.attr(g.attrs1), y = g.attrs2) : g || _ ? (l.attr(g.attrs1), l.setMatrix(u.matrix), y = p.mix({
                                matrix: v
                            }, g.attrs2)) : (l.setMatrix(u.matrix), y = {
                                matrix: v
                            }), l.animate(y, 450, "easeInOutQuart")
                        } else if (u && !l) {
                        if (!c(u.matrix)) return;
                        d = m.getAnimate(u.animateType, i, "out"), d && (o = n.addShape(u.type, {
                            attrs: u.attrs
                        }), u.animateType.indexOf("label") === -1 && u.matrix.multiply(i.get("matrix")), o.setMatrix(u.matrix), o.isTem = !0, d && d(o, i))
                    } else if (!u && l && !l.get("destroyed")) {
                        if (!c(l.getMatrix())) return;
                        d = m.getAnimate(l.animateType, i, "appear"), d && d(l, i)
                    }
                })
            }

            function g(t, e) {
                var n = t.get("shapesStash"),
                    r = [];
                n = n ? n : [], i(r, t), t.set("shapesStash", o(r)), f(n, r, t, e), t && !t.get("destroyed") && t.draw()
            }
            var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                p = n(1),
                v = n(12),
                m = n(105),
                x = v.Matrix.Matrix3,
                y = {
                    text: "text",
                    elements: "elements",
                    rotate: "rotate",
                    textAlign: "textAlign",
                    textBaseline: "textBaseline",
                    fontStyle: "fontStyle",
                    font: "font",
                    fontWeight: "fontWeight",
                    fontFamily: "fontFamily",
                    points: "points"
                };
            t.exports = g
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(18),
                a = n(324),
                s = n(326),
                o = n(328),
                u = n(329),
                c = n(327),
                l = n(316),
                h = n(106),
                f = ["size", "shape", "color"],
                g = function d(t) {
                    d.superclass.constructor.call(this, t), this._init()
                };
            g.ATTRS = {
                type: "point",
                chart: null,
                attrs: null,
                stats: null,
                scales: null,
                styleCfg: null,
                labelCfg: null
            }, i.extend(g, r), i.mixin(g, [c, u, s, o]), i.augment(g, {
                _init: function() {
                    var t = this.get("chart"),
                        e = t.get("plotContainer");
                    e || (e = t.get("canvas").addGroup());
                    var n = e.addGroup({
                        zIndex: 10
                    });
                    this.set("container", n)
                },
                _addLabels: function(t) {
                    var e = this,
                        n = e.get("type"),
                        r = e.get("coord"),
                        s = a.getLabelsClass(r.type, n),
                        o = this.get("id"),
                        u = e.get("container"),
                        c = u.addGroup(s, {
                            id: o,
                            labelsCfg: e.get("labelCfg"),
                            coord: r,
                            geom: e,
                            geomType: n
                        }),
                        l = [];
                    i.each(t, function(t) {
                        l = l.concat(t.toJSON())
                    }), c.showLabels(l), e.set("labelGroup", c)
                },
                _draw: function(t) {
                    var e = this.get("group"),
                        n = this.get("type"),
                        r = this.get("id"),
                        a = this._getGroupScales();
                    n = i.ucfirst(n);
                    var s = new h[n]({
                            id: r,
                            container: e,
                            attrs: this.get("attrs"),
                            styleCfg: this.get("styleCfg"),
                            adjusts: this.get("adjusts"),
                            frames: t,
                            groupScales: a
                        }),
                        o = s.draw(t);
                    return this.set("geomShape", s.get("shapeObj")), this.set("shapeType", s.get("shapeType")), this.set("shapeDatas", s.get("shapeDatas")), o
                },
                paint: function(t, e, n) {
                    function i() {
                        var t = r._draw(e);
                        n && n(t), r.get("labelCfg") && r._addLabels(t)
                    }
                    var r = this;
                    if ("map" === t.type) {
                        var a = r.get("scales"),
                            s = a["..long"],
                            o = a["..lant"];
                        t.set("originMin", [s.min, o.min]), t.set("originMax", [s.max, o.max]), r.set("coord", t)
                    }
                    var u = r.getAttr("position");
                    u.coord = t;
                    var c = r.get("container"),
                        h = c.addGroup(l, {
                            geom: r,
                            coord: t,
                            multipleActive: r.isShareTooltip(),
                            capture: !1
                        });
                    return h.setMatrix(t.get("matrix").clone()), r.set("group", h), i(), r
                },
                getDefaultValue: function(t) {
                    var e = this,
                        n = e.get(t),
                        i = e.getAttr(t);
                    if (i) {
                        var r = i.getScale(t);
                        "identity" === r.type && (n = r.value)
                    }
                    return n
                },
                getLegendAttr: function() {
                    var t = this,
                        e = t.get("attrs"),
                        n = [];
                    return i.each(e, function(t) {
                        i.indexOf(f, t.type) !== -1 && n.push(t)
                    }), n
                },
                getScales: function() {
                    return this.get("scales")
                },
                destroy: function() {
                    var t = this.get("group");
                    t && !t.get("destroyed") && (t.clear(), t.remove()), this.clearShapeActived(), this._attrs = {}, this.events = {}
                },
                getXDistance: function() {
                    var t, e = this,
                        n = e.getXScale();
                    if (n.isCategory) t = 1;
                    else {
                        var i = n.values,
                            r = i.length;
                        t = Math.abs(i[r - 1] - i[0]) / r
                    }
                    return t
                },
                getAttr: function(t) {
                    var e = this.get("attrs"),
                        n = null;
                    return i.each(e, function(e) {
                        e.type === t && (n = e)
                    }), n
                },
                getXDim: function() {
                    var t = this.getXScale();
                    return t.dim
                },
                getYDim: function() {
                    var t = this.getYScale();
                    return t ? t.dim : "y"
                },
                getXScale: function() {
                    return this.getAttr("position").scales[0]
                },
                getYScale: function() {
                    return this.getAttr("position").scales[1]
                },
                isInCircle: function() {
                    return this.get("coord").isPolar
                },
                getData: function() {
                    return this.get("shapeDatas")
                },
                setVisible: function(t) {
                    var e = this.get("container");
                    e.set("visible", t)
                }
            }), t.exports = g
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(185),
                a = n(2),
                s = n(21),
                o = function u(t) {
                    u.superclass.constructor.call(this, t)
                };
            o.ATTRS = {
                type: "contour"
            }, i.extend(o, s.Path), i.augment(o, {
                _beql: function(t, e) {
                    return Math.abs(t - e) < 1e-6
                },
                _getZScale: function() {
                    return this.getAttr("position").getScale("z")
                },
                _getData: function(t) {
                    var e = this,
                        n = [],
                        r = e.getAttr("position"),
                        s = r.getDims(),
                        o = s[0],
                        u = s[1],
                        c = s[2],
                        l = a.values(t, o),
                        h = a.values(t, u),
                        f = 0,
                        g = 0,
                        d = null;
                    return i.each(l, function(t) {
                        d && e._beql(d, t) || f++, d = t
                    }), d = null, i.each(h, function(t) {
                        d && e._beql(d, t) || g++, d = t
                    }), t.each(function(t, e) {
                        var i = Math.floor(e / g),
                            r = Math.floor(e % g),
                            a = [t[o], t[u], t[c]];
                        Array.isArray(n[i]) || (n[i] = []), n[i][r] = a
                    }), n
                },
                processFrames: function(t) {
                    var e = this,
                        n = e.getXDim(),
                        s = e.getYDim(),
                        o = e._getZScale(),
                        u = o.dim,
                        c = a.merge.apply(null, t),
                        l = c.rowObject(0),
                        h = e._getData(c),
                        f = o.ticks,
                        g = r(h, f),
                        d = [];
                    return i.each(g, function(t) {
                        var e = t.path,
                            r = t.value,
                            o = [];
                        i.each(e, function(t) {
                            var e = i.mix({}, l);
                            e[n] = t[0], e[s] = t[1], e[u] = r, o.push(e)
                        }), d.push(new a(o))
                    }), d
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(21),
                a = function s(t) {
                    s.superclass.constructor.call(this, t)
                };
            a.ATTRS = {
                type: "edge"
            }, i.extend(a, r.Base), t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(202),
                a = n(21),
                s = n(4),
                o = "_origin",
                u = function c(t) {
                    c.superclass.constructor.call(this, t)
                };
            u.ATTRS = {
                type: "heatmap"
            }, i.extend(u, a.Base), i.augment(u, {
                _getHeatmapData: function(t) {
                    var e = this,
                        n = [],
                        i = e.getAttr("color"),
                        r = i.getDims(),
                        a = r[0];
                    return t.each(function(t) {
                        var e = [t.x, t.y, t[o][a]];
                        n.push(e)
                    }), n
                },
                _getImageRegion: function() {
                    var t = this,
                        e = t.getCoord(),
                        n = e.get("start"),
                        i = e.get("end"),
                        r = {
                            x: n.x,
                            y: i.y,
                            width: i.x - n.x,
                            height: n.y - i.y
                        };
                    return r
                },
                _getColorScale: function() {
                    return this.getAttr("color").getScale("color")
                },
                _getRadius: function() {
                    var t = this,
                        e = t.getAttr("position"),
                        n = t.getCoord(),
                        i = e.stat,
                        r = null;
                    if (i) {
                        var a = i.bandWidth;
                        r = Math.min(n.getWidth(), n.getHeight()) * a
                    }
                    return 2 * r
                },
                drawFrame: function(t) {
                    var e = this,
                        n = e.get("container"),
                        a = e._getHeatmapData(t),
                        o = e._getImageRegion(),
                        u = e._getColorScale(),
                        c = t.rowObject(0).size,
                        l = e.getAttr("color"),
                        h = i.mix({
                            min: u.min,
                            max: u.max,
                            formatter: function(t) {
                                return u.scale(t)
                            }
                        }, s.heatmap, o);
                    h.colors = [l.mappingValues(u.invert(0)).join(""), l.mappingValues(u.invert(.25)).join(""), l.mappingValues(u.invert(.5)).join(""), l.mappingValues(u.invert(.75)).join(""), l.mappingValues(u.invert(1)).join("")];
                    var f = c ? parseInt(c, 10) : e._getRadius();
                    f && (h.radius = f);
                    var g = new r(h),
                        d = g.getData(a),
                        p = document.createElement("canvas"),
                        v = p.getContext("2d");
                    p.width = o.width, p.height = o.height, v.putImageData(d, 0, 0);
                    var m = n.addShape("Image", {
                        attrs: o
                    });
                    m.attr("img", p), m.animateType = "heatmap", m.id = this.get("viewId") + "heatmap"
                }
            }), t.exports = u
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(21),
                a = n(107),
                s = "_origin",
                o = function u(t) {
                    u.superclass.constructor.call(this, t)
                };
            o.ATTRS = {
                adjusts: null,
                frames: null
            }, i.extend(o, r.Interval), i.mixin(o, [a]), i.augment(o, {
                processFrames: function(t) {
                    var e = this.getCoord(),
                        n = e.type,
                        r = this.get("adjusts");
                    if (("theta" === n || "polar" === n && e.isTransposed) && "Stack" === r.toString()) {
                        var a = [],
                            o = this.getYDim();
                        return i.each(t, function(t) {
                            var e = t.colArray(s);
                            e[0][o] >= 0 && a.push(t)
                        }), a
                    }
                    return t
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(21),
                a = n(107),
                s = function o(t) {
                    o.superclass.constructor.call(this, t)
                };
            s.ATTRS = {
                adjusts: null,
                frames: null
            }, i.extend(s, r.Schema), i.mixin(s, [a]), t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(109),
                r = n(108),
                a = n(325),
                s = {
                    getLabelsClass: function(t) {
                        var e = i;
                        return "polar" === t || "plus" === t ? e = r : "theta" === t && (e = a), e
                    }
                };
            t.exports = s
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                return l.equal(t, -Math.PI / 2) || l.equal(t, Math.PI / 2) || l.equal(t, 3 * Math.PI / 2)
            }

            function r(t, e, n) {
                return {
                    x: t.x + n * Math.cos(e),
                    y: t.y + n * Math.sin(e)
                }
            }

            function a(t, e, n, i, r, a) {
                var s = Math.acos((i - e) / i),
                    o = a ? n - Math.PI + s : n - s;
                t.orignAngle = t.angle, t.angle = o, t.orignX = t.x, t.orignY = t.y, t.x = r.x + (i + 2.5) * Math.cos(t.angle), t.y = r.y + (i + 2.5) * Math.sin(t.angle), l.equal(o, -Math.PI / 2) ? t.x += g : l.equal(o, 3 * Math.PI / 2) ? t.x -= g : l.equal(o, Math.PI / 2) && (o >= t.orignAngle ? t.x += g : t.x -= g)
            }

            function s(t, e, n, i, r, s) {
                var o = parseInt(2 * e / s, 10),
                    u = t.y + e,
                    c = t.y - e;
                o < n.length && n.splice(o, n.length - o);
                for (var l, h, f, g = 0, d = n.length, p = 0, v = 0; v < d; v++) {
                    var m = n[v],
                        x = m.y;
                    h = d - v, l = r > 0 ? (u - x) / h : (x - c) / h, v > 0 && (p = r > 0 ? (x - c) / v : (u - x) / v);
                    var y;
                    if (y = r > 0 ? h < d ? x - n[v - 1].y : x - c : h < d - 1 ? n[v - 1].y - x : u - x, g = v, l < s) {
                        0 !== g && (g = v + 1);
                        break
                    }(p > 0 && p < s || y > 0 && y < s) && (f = v)
                }
                if (f)
                    for (var _ = 0; _ <= f; _++) {
                        var S = _ * s;
                        a(n[_], S, i, e, t, !0)
                    }
                var w = r < 0 && g <= d - 1 || r > 0 && g < d - 1;
                if (d > 1 && w) {
                    var b = 0 === g ? 0 : g - 1,
                        M = n[b],
                        A = M.y,
                        C = r > 0 ? u : c;
                    if (h = d - b - 1, l = Math.abs(C - A) / h, h > 1 || l <= s) {
                        l < s && (l = s);
                        for (var T = d - 1; T >= b; T--) {
                            var k = (d - 1 - T) * l;
                            a(n[T], k, i, e, t, !1)
                        }
                    }
                    for (var P = r > 0 ? c : u, I = !1, D = b - 1; D > 0; D--) {
                        var L = n[D];
                        if (!I && Math.abs(P - L.y) / (D + 1) < s && (I = !0), I) {
                            var F = Math.abs(n[D + 1].y - C) + s;
                            a(n[D], F, i, e, t)
                        }
                    }
                }
            }
            var o = n(1),
                u = n(108),
                c = n(20),
                l = n(6),
                h = n(4),
                f = 5,
                g = 1,
                d = function p(t) {
                    p.superclass.constructor.call(this, t)
                };
            d.CFG = {
                labels: h.thetaLabels
            }, o.extend(d, u), o.augment(d, {
                adjustItems: function(t) {
                    var e = this,
                        n = e.getDefaultOffset();
                    return n > 0 && (t = e._adjustItems(t, n)), t
                },
                _adjustItems: function(t) {
                    var e = this,
                        n = e.getDefaultOffset(),
                        i = [],
                        r = e.get("coord"),
                        a = r.getCenter(),
                        u = r.getRadius(),
                        c = u + n,
                        l = r.get("startAngle"),
                        h = e.get("labels").labelHeight,
                        f = [],
                        g = [];
                    if (o.each(t, function(t) {
                            t.x > a.x ? f.push(t) : i.push(t)
                        }), i.length) {
                        var d = l >= -Math.PI / 2 ? 3 * Math.PI / 2 : -Math.PI / 2;
                        s(a, c, i, d, -1, h)
                    }
                    return f.length && s(a, c, f, Math.PI / 2, 1, h), g = g.concat(f, i), e._alignLabels(g), g
                },
                _alignLabels: function(t) {
                    var e = this;
                    o.each(t, function(t) {
                        t.textAlign = e.getLabelAlign(t)
                    })
                },
                drawLines: function(t, e) {
                    var n = this,
                        i = n.getDefaultOffset();
                    i > 0 && o.each(t, function(t) {
                        n.lineToLabel(t, e)
                    })
                },
                lineToLabel: function(t, e) {
                    var n, a, s = this,
                        u = s.get("coord"),
                        c = u.getRadius(),
                        h = s.getDefaultOffset(),
                        g = s.get("labels"),
                        d = t.orignAngle || t.angle,
                        p = u.getCenter(),
                        v = r(p, d, c + f / 2),
                        m = g.labelHeight,
                        x = s.get("lineGroup"),
                        y = [],
                        _ = i(t.angle),
                        S = 1;
                    _ && (h -= m / 2, l.equal(t.angle, Math.PI / 2) && (S = -1)), y.push(["M", v.x, v.y]), n = r(p, d, c + h / 2);
                    var w = _ ? t.y + m / 2 * S : t.y;
                    y.push(["R", n.x, n.y, t.x, w]), y = o.path2Absolute(y), x || (x = s.addGroup({
                        elCls: "x-line-group"
                    }), s.set("lineGroup", x)), a = x.addShape("path", {
                        attrs: o.mix({
                            path: y,
                            fill: null,
                            stroke: t.color
                        }, e)
                    }), a.animateType = "labelLine", a.id = t.id.replace("LabelText", "LabelLine")
                },
                getLabelRotate: function(t, e) {
                    var n;
                    return e < 0 && (n = 180 * t / Math.PI, n > 90 && (n -= 180), n < -90 && (n += 180)), n
                },
                getLabelAlign: function(t) {
                    var e, n = this,
                        i = n.get("coord"),
                        r = i.getCenter();
                    e = t.x === r.x ? "center" : t.x > r.x ? "left" : "right";
                    var a = n.getDefaultOffset();
                    return a <= 0 && (e = "right" === e ? "left" : "right"), e
                },
                getArcPoint: function(t) {
                    return t
                },
                getPointAngle: function(t) {
                    var e, n = this,
                        i = n.get("coord"),
                        r = {
                            x: o.isArray(t.x) ? t.x[0] : t.x,
                            y: t.y[0]
                        },
                        a = {
                            x: o.isArray(t.x) ? t.x[1] : t.x,
                            y: t.y[1]
                        },
                        s = c.getPointAngle(i, r);
                    if (t.points && t.points[0].y === t.points[1].y) e = s;
                    else {
                        var u = c.getPointAngle(i, a);
                        s >= u && (u += 2 * Math.PI), e = s + (u - s) / 2
                    }
                    return e
                },
                getCirclePoint: function(t, e) {
                    var n = this,
                        i = n.get("coord"),
                        r = i.getCenter(),
                        a = i.getRadius() + e;
                    return {
                        x: r.x + a * Math.cos(t),
                        y: r.y + a * Math.sin(t),
                        angle: t,
                        r: a
                    }
                }
            }), t.exports = d
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (!t) return !0;
                if (t.length !== e.length) return !0;
                var n = !1;
                return a.each(e, function(e, i) {
                    if (e !== t[i]) return n = !0, !1
                }), n
            }

            function r(t, e) {
                for (var n = t.x, i = t.y, r = n[0], a = i[0], s = n[0], o = i[0], u = 0; u < n.length; u++) {
                    var c = n[u],
                        l = i[u];
                    c <= r && (r = c), c >= s && (s = c), l <= a && (a = l), l >= o && (o = l)
                }
                var h = e.x >= r && e.x <= s && e.y >= a && e.y <= o;
                return h
            }
            var a = n(1),
                s = n(2),
                o = Math.abs,
                u = "_origin",
                c = function() {};
            c.ATTRS = {
                localRefresh: !1,
                allowActiveShape: !0,
                snapAll: !0,
                snapDistance: 10
            }, a.augment(c, {
                isAllowActiveShape: function() {
                    var t = this.get("type");
                    return !a.inArray(["contour", "path", "line", "area"], t) && this.get("allowActiveShape")
                },
                isSnapAll: function() {
                    var t = this.get("type");
                    return "interval" !== t && "schema" !== t && this.get("snapAll")
                },
                setActiveByPoint: function(t) {
                    var e = this,
                        n = e.get("coord"),
                        r = null;
                    if (!e.isAllowActiveShape()) return [];
                    if (e.isShareTooltip()) r = e._getSharedShapes(t, n);
                    else {
                        r = [];
                        var a = e.getSingleShape(t);
                        a && a.get("visible") && r.push(a)
                    }
                    var s = e.get("preShapes");
                    return i(s, r) && e.setShapesActive(r), e.set("preShapes", r), r
                },
                _getSharedShapes: function(t) {
                    var e = this,
                        n = e.get("group"),
                        i = [];
                    if (n) {
                        var r = e.getXDim(),
                            s = n.get("children");
                        a.each(s, function(e) {
                            var n = e.get("origin");
                            if (e.get("visible") && n) {
                                var s = n[u][r],
                                    o = t[u][r];
                                (a.isArray(s) && a.isArray(o) && a.equalsArray(s, o) || s === o) && i.push(e)
                            }
                        })
                    }
                    return i
                },
                getSingleShape: function(t) {
                    var e, n = this,
                        i = null,
                        r = s.forceMerge.apply(null, n.get("frames"));
                    if ("contour" === n.get("type")) return e = n.findPoint(t, r), i = {
                        origin: e,
                        get: function(t) {
                            return this[t]
                        }
                    };
                    var o = n.get("group"),
                        u = n.get("coord"),
                        c = o.get("canvas"),
                        l = c.get("pixelRatio");
                    if (o) {
                        var h = o.get("children"),
                            f = [];
                        if (h.length > 30) {
                            var g = s.max(r, "size");
                            a.each(h, function(e) {
                                n.isSnapPoint(t, e, u, g) && f.push(e)
                            })
                        } else f = h;
                        for (var d = f.length - 1; d >= 0; d--) {
                            var p = f[d];
                            if (p.get("origin") && p.isHit(t.x * l, t.y * l)) {
                                i = p;
                                break
                            }
                        }
                    }
                    return i
                },
                _isSnapPointOfPolygon: function(t, e, n) {
                    var i, s = this,
                        c = s.get("snapDistance"),
                        l = s.getXScale(),
                        h = s.getYScale(),
                        f = e[u],
                        g = n.invert(t);
                    if (a.isArray(e.x) && a.isArray(e.y)) i = r(e, t);
                    else {
                        var d = n.trans(e.x, e.y, 1),
                            p = !1,
                            v = !1;
                        p = l.isCategory ? l.translate(l.invert(g.x)) === l.translate(f[l.dim]) : o(d.x - t.x) < c, v = h && h.isCategory ? h.translate(h.invert(g.y)) === h.translate(f[h.dim]) : o(d.y - t.y) < c, i = p && v
                    }
                    return i
                },
                isSnapPoint: function(t, e, n, i) {
                    var r = this,
                        s = e.get("origin");
                    if (!s) return !1;
                    var c, l = i || this.get("snapDistance"),
                        h = r.get("type"),
                        f = !1;
                    if ("polygon" === h) f = r._isSnapPointOfPolygon(t, s, n);
                    else if ("edge" === h) {
                        t = n.reverse(t.x, t.y, 1), c = e.getBBBox();
                        var g = c.minX,
                            d = c.maxX,
                            p = c.minY,
                            v = c.maxY;
                        f = t.x >= g && t.x <= d && t.y >= p && t.y <= v
                    } else if (this.isSnapAll()) {
                        var m;
                        if ("point" === h && "Marker" !== e.get("type")) c = e.getBBBox(), m = n.trans(c.centerX, c.centerY, 1);
                        else {
                            var x = s.y;
                            a.isArray(s.y) && (x = (x[0] + x[x.length - 1]) / 2), m = n.trans(s.x, x, 1)
                        }
                        f = o(m.x - t.x) < l && o(m.y - t.y) < l
                    } else {
                        var y = n.invert(t),
                            _ = r.getXScale(),
                            S = _.dim,
                            w = _.translate(_.invert(y.x));
                        l = r.getXDistance(), f = o(w - _.translate(s[u][S])) < l
                    }
                    return f
                },
                setShapesActive: function(t) {
                    var e = this;
                    if (e.isAllowActiveShape()) {
                        var n = e.get("coord"),
                            i = e.get("activeGroup"),
                            r = e.get("chart"),
                            s = r.get("frontCanvas");
                        i ? i.clear() : (i = s.addGroup(), e.set("activeGroup", i)), i.setMatrix(n.get("matrix").clone()), a.each(t, function(t) {
                            t.get("visible") && e._setActiveShape(t, i)
                        }), e.set("activeShapes", t), s.sort()
                    }
                },
                _setLabelsVisible: function(t, e) {
                    var n = this;
                    if (t.get("gLabel")) t.get("gLabel").set("visible", e);
                    else {
                        var i = n.get("labelCfg");
                        if (i && i.scales && i.scales.length > 0) {
                            var r = n.getXDim(),
                                s = n.getYDim(),
                                o = t.get("origin")._origin,
                                u = n.get("labelGroup"),
                                c = u.get("labelsGroup").get("children");
                            a.each(c, function(n) {
                                var i = n.get("attrs").point;
                                i[r] === o[r] && i[s] === o[s] && (n.set("visible", e), t.set("gLabel", n))
                            })
                        }
                    }
                },
                setShapesFiltered: function(t) {
                    var e = this,
                        n = e.get("chart"),
                        i = n.get("canvas");
                    a.each(t, function(t) {
                        t.get("visible") ? e._setLabelsVisible(t, !0) : e._setLabelsVisible(t, !1)
                    }), i.draw()
                },
                _setActiveShape: function(t, e) {
                    var n, i = this,
                        r = t.get("type"),
                        s = t.get("origin"),
                        o = s.shape || i.getDefaultValue("shape"),
                        u = i.get("geomShape"),
                        c = u.getActiveCfg(o, s);
                    n = a.mix({}, c, {
                        fill: "white",
                        fillOpacity: .15,
                        clip: null
                    });
                    var l = a.mix({}, t.__attrs, n),
                        h = e.addShape(r, {
                            attrs: l
                        });
                    h.setMatrix(t.getMatrix()), h.set("origin", s)
                },
                clearShapeActived: function() {
                    var t = this,
                        e = t.get("activeGroup");
                    e && e.clear(), t.set("activeShapes", null)
                }
            }), t.exports = c
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                return t.binWidth || t.bandWidth
            }
            var r = n(1),
                a = n(2),
                s = n(196),
                o = n(4),
                u = ["size", "shape", "color"],
                c = "_origin",
                l = ["Dodge", "Jitter", "Stack", "Symmetric"],
                h = function() {};
            h.ATTRS = {
                adjusts: null
            }, r.augment(h, {
                _getScale: function(t) {
                    var e = this,
                        n = e.get("scales"),
                        i = null;
                    return r.each(n, function(e) {
                        if (e.dim === t) return i = e, !1
                    }), i
                },
                _getGroupScales: function() {
                    var t = this,
                        e = [],
                        n = t.get("attrs");
                    return r.each(n, function(t) {
                        if (u.indexOf(t.type) !== -1) {
                            var n = t.scales;
                            r.each(n, function(t) {
                                t.isCategory && r.indexOf(e, t) === -1 && e.push(t)
                            })
                        }
                    }), e
                },
                _saveOriginData: function(t) {
                    return r.each(t, function(t) {
                        var e = t.toJSON();
                        t.addCol(c, e)
                    }), t
                },
                _setStatRange: function(t) {
                    var e = this,
                        n = t.getDims(),
                        i = [];
                    r.each(n, function(n) {
                        var r = e._getScale(n);
                        r.isCategory || "identity" === r.type || (isNaN(r.min) || isNaN(r.max) || t.setRange(n, {
                            min: r.min,
                            max: r.max
                        }), "bin" === t.type && i.push(n))
                    }), i.length && (t.binDims = i)
                },
                _getBinStat: function(t) {
                    var e = null;
                    if (i(t)) e = t;
                    else if (t.stat) {
                        for (var n = t.stat; n && !i(n);) n = n.stat;
                        n && i(n) && (e = n)
                    }
                    return e
                },
                _execStat: function(t, e) {
                    var n = this,
                        i = n._getBinStat(t);
                    return i && n._setStatRange(i), (t.isRegression || t.setRange) && n._setStatRange(t), t.exec(e)
                },
                _execStats: function(t) {
                    var e = this,
                        n = t;
                    if (r.isNull(t) || t && 0 === t.length) return n;
                    var i = e.get("attrs"),
                        s = e.getAttr("position"),
                        o = s.stat,
                        u = [];
                    r.each(i, function(t) {
                        "position" !== t.type && t.stat && u.push(t.stat)
                    }), o && (n = e._execStat(o, n));
                    var c = e.get("labelCfg");
                    if (c && c.stat && (n = e._execStat(c.stat, n)), u.length) {
                        var l = [],
                            h = s.getDims();
                        r.each(n, function(t) {
                            l = l.concat(a.group(t, h))
                        }), n = l, r.each(u, function(t) {
                            n = e._execStat(t, n)
                        }), n = [a.merge.apply(this, n)]
                    }
                    return n
                },
                _getGroupDims: function() {
                    var t = [],
                        e = this._getGroupScales();
                    return r.each(e, function(e) {
                        t.push(e.dim)
                    }), t
                },
                _groupFrames: function(t) {
                    var e = this._getGroupDims();
                    return a.group(t, e)
                },
                _filterNullValue: function(t) {
                    var e = this.getXDim();
                    return a.filter(t, function(t) {
                        return r.isArray(t[e]) || !r.isNull(t[e])
                    })
                },
                _createFrame: function(t) {
                    var e = this,
                        n = e.get("scales"),
                        i = t.clone();
                    return r.each(n, function(e) {
                        var n = e.dim;
                        if (!t.contains(n)) {
                            var r, s = !e.value && o.scales[n] ? 0 : e.value;
                            r = a.Array.repeat(s, t.rowCount()), i.addCol(n, r)
                        }
                    }), i
                },
                processData: function(t) {
                    var e = this._createFrame(t);
                    return e = this._filterNullValue(e), t = this._groupFrames(e), t = this._execStats(t), t = this._saveOriginData(t)
                },
                numbericFrames: function(t) {
                    var e = this,
                        n = e.get("scales");
                    return r.each(t, function(t) {
                        r.each(n, function(e) {
                            var n = e.dim;
                            if (e.isCategory || "time" === e.type) {
                                var i = t.colArray(n);
                                r.each(i, function(t, n) {
                                    i[n] = e.translate(t)
                                }), t.colReplace(n, i)
                            }
                        })
                    }), t
                },
                _paddingNullValue: function(t) {
                    var e = this,
                        n = e.getXDim(),
                        i = e.getYDim(),
                        s = a.merge.apply(null, t),
                        o = a.values(s, n);
                    r.each(t, function(t) {
                        if (t.rowCount() < o.length) {
                            var e = {},
                                a = t.rowObject(0),
                                s = t.colArray(n);
                            r.each(s, function(t) {
                                e[t] = !0
                            });
                            var u = !0;
                            r.each(o, function(s) {
                                if (e[s]) u = !0;
                                else if (u === !0) {
                                    var o = r.mix({}, a);
                                    o[n] = s, o[i] = null;
                                    var c = {};
                                    c[n] = s, o[i] = null, o._origin = c, t.addRow(o), u = !1
                                }
                            })
                        }
                    })
                },
                processAdjust: function(t) {
                    var e = this,
                        n = e.get("adjusts");
                    if (!r.isNull(n)) {
                        var i = e.get("type"),
                            a = e.getYScale(),
                            o = e.getXScale();
                        "point" !== i || "Dodge" !== n[0] || a || n.push("Stack"), r.each(n, function(n) {
                            if (!r.inArray(l, n)) throw new Error(r.ucfirst(n) + " is not supported, please use " + l.toString());
                            var i = {};
                            if ("Dodge" === n) {
                                var u = [];
                                if (o.isCategory) u.push("x");
                                else {
                                    if (a) throw new Error("dodge is not support linear attribute, please use category attribute!");
                                    u.push("y")
                                }
                                var c = e._getGroupDims();
                                i = {
                                    xDim: e.getXDim(),
                                    yDim: a ? a.dim : null,
                                    adjustNames: u,
                                    groupDims: c
                                }, e.isInCircle() && (i.dodgeRatio = 1, i.marginRatio = 0)
                            } else if ("Stack" === n) {
                                var h = e.getDefaultValue("size") || 3;
                                if (i = {
                                        xDim: e.getXDim(),
                                        size: h
                                    }, "area" === e.get("type") && e._paddingNullValue(t), a && "..y" !== a.dim) i.yDim = e.getYDim();
                                else {
                                    var f = e.get("coord");
                                    i.height = f.getHeight()
                                }
                            } else i = {
                                xDim: e.getXDim(),
                                yDim: e.getYDim()
                            };
                            var g = new s[n](i);
                            "Stack" === n && a && "..y" === a.dim ? (g.yDim = "..y", t = g.processOneDimStack(t)) : t = g.processAdjust(t)
                        })
                    }
                    return t
                }
            }), t.exports = h
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = i.MatrixUtil,
                a = function() {};
            a.ATTRS = {
                allowSelected: !1
            }, i.augment(a, {
                allowSelected: function s() {
                    var t = this.get("type"),
                        e = this.get("coord"),
                        n = e && e.type,
                        s = this.get("allowSelected");
                    return this.get("selectedCfg") && this.get("selectedCfg").selectedMode !== !1 && (s = !0), "interval" === t && "theta" === n && (s = !0, this.get("selectedCfg") && this.get("selectedCfg").selectedMode === !1 && (s = !1)), s
                },
                getShapes: function() {
                    var t = this,
                        e = t.get("container"),
                        n = [],
                        r = e.get("children");
                    return i.each(r, function(t) {
                        var e = t.get("children");
                        i.each(e, function(t) {
                            t.get("origin") && n.push(t)
                        })
                    }), n
                },
                getSelectedShapes: function(t) {
                    var e = this;
                    t = t || e.getShapes();
                    var n = [];
                    return i.each(t, function(t) {
                        t.get("selected") && n.push(t)
                    }), n
                },
                getShapeByData: function(t, e) {
                    var n = null;
                    return t && i.each(e, function(e) {
                        if (e.get("origin") === t) return n = e, !1
                    }), n
                },
                setShapeSelected: function(t, e) {
                    var n = this;
                    t.set("selected", e), n.setSelectedStatus(t, e)
                },
                setSelectedStatus: function(t, e) {
                    var n = this,
                        r = n.get("activeGroup"),
                        a = n.get("selectedCfg") || {},
                        s = a.animate !== !1,
                        o = {};
                    if (e) {
                        var u = t.get("origin"),
                            c = n.get("geomShape"),
                            l = u.shape || n.getDefaultValue("shape"),
                            h = i.mix({
                                geom: n,
                                coord: t.get("parent").get("coord"),
                                point: u
                            }, a),
                            f = c.getSelectedCfg(l, h);
                        i.mix(f, h.style), t.get("originSelectStyle") ? o = t.get("originSelectStyle") : (i.each(f, function(e, n) {
                            if ("transform" === n || "matrix" === n) o.matrix = t.getMatrix().clone();
                            else {
                                var i = t.attr(n);
                                i !== e && (o[n] = i)
                            }
                        }), t.set("originSelectStyle", o)), f = this.parseCfg(o.matrix, f), s ? t.animate(f, 300) : (t.attr(f), t.get("canvas").draw())
                    } else o = t.get("originSelectStyle"), s ? t.animate(o, 300) : (t.attr(o), t.get("canvas").draw());
                    n.clearShapeActived(), r && r.get("canvas").draw()
                },
                parseCfg: function(t, e) {
                    return e.transform && (e.matrix = r.transform(t, e.transform), delete e.transform), e
                },
                setSelected: function(t) {
                    var e = this,
                        n = e.get("chart"),
                        r = e.getShapes(),
                        a = e.getSelectedShapes(r),
                        s = e.getShapeByData(t, r),
                        o = e.get("selectedCfg") || {};
                    if ("multiple" === o.selectedMode && s) i.indexOf(a, s) === -1 ? (a.push(s), e.setShapeSelected(s, !0), n.fire("itemselected", {
                        shape: s,
                        data: t,
                        view: e,
                        geom: e
                    })) : (i.remove(a, s), e.setShapeSelected(s, !1), n.fire("itemunselected", {
                        shape: s,
                        data: s.get("origin"),
                        view: e,
                        geom: e
                    }));
                    else {
                        var u = o.cancelable !== !1,
                            c = a[0];
                        u && (s = c === s ? null : s), c !== s && (c && (e.setShapeSelected(c, !1), n.fire("itemunselected", {
                            shape: c,
                            data: c.get("origin"),
                            view: e,
                            geom: e
                        })), s && (e.setShapeSelected(s, !0), n.fire("itemselected", {
                            shape: s,
                            data: t,
                            view: e,
                            geom: e
                        })), n.fire("itemselectedchange", {
                            shape: s,
                            data: t,
                            view: e,
                            geom: e,
                            preShape: c,
                            preData: c ? c.get("origin") : null
                        }))
                    }
                },
                getSelected: function() {
                    var t = this,
                        e = t.getSelectedShapes(),
                        n = null;
                    return e.length > 0 && (t.get("selectedCfg") && "multiple" === t.get("selectedCfg").selectedMode ? (n = [], i.each(e, function(t) {
                        n.push(t.get("origin"))
                    })) : n = e[0].get("origin")), n
                },
                clearSelected: function() {
                    var t = this,
                        e = t.getSelectedShapes();
                    i.each(e, function(e) {
                        t.setShapeSelected(e, !1)
                    })
                }
            }), t.exports = a
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                return t.alias || t.dim
            }
            var r = n(1),
                a = n(4),
                s = "_origin",
                o = function() {};
            o.ATTRS = {
                tooltipMap: {},
                tooltipDims: null,
                shareTooltip: !0
            }, r.augment(o, {
                _snapEqual: function(t, e, n) {
                    var i;
                    return t = n.translate(t), e = n.translate(e), i = n.isCategory ? t === e : Math.abs(t - e) <= .001
                },
                _getScaleValueByPoint: function(t) {
                    var e = 0,
                        n = this.get("coord"),
                        i = this.getXScale(),
                        r = n.invert(t),
                        a = r.x;
                    return this.isInCircle() && a > (1 + i.rangeMax()) / 2 && (a = i.rangeMin()), e = i.invert(a), i.isCategory && (e = i.translate(e)), e
                },
                _getTipMapScale: function(t) {
                    var e = this.get("tooltipMap"),
                        n = e && e[t];
                    return this._getScale(n)
                },
                _getTipValueScale: function() {
                    var t = this._getTipMapScale("value");
                    if (!t) {
                        var e = this.getLegendAttr();
                        r.each(e, function(e) {
                            var n = e.getScale(e.type);
                            if (n.isLinear) return t = n, !1
                        })
                    }
                    var n = this.getXScale(),
                        i = this.getYScale();
                    return !t && i && "..y" === i.dim ? n : t || i || n
                },
                _getTipTitleScale: function() {
                    var t = this,
                        e = t._getTipMapScale("title");
                    if (!e) {
                        var n, i = t.getAttr("position"),
                            a = i.getDims();
                        r.each(a, function(t) {
                            if (t.indexOf("..") === -1) return n = t, !1
                        }), e = t._getScale(n)
                    }
                    return e
                },
                _filterValue: function(t, e) {
                    var n = this.get("coord"),
                        i = this.getYScale(),
                        a = i.dim,
                        o = n.invert(e),
                        u = o.y;
                    u = i.invert(u);
                    var c = t[t.length - 1];
                    return r.each(t, function(t) {
                        var e = t[s];
                        if (e[a][0] <= u && e[a][1] >= u) return c = t, !1
                    }), c
                },
                findPoint: function(t, e) {
                    var n = this,
                        i = n.getXScale(),
                        a = n.getYScale(),
                        o = i.dim,
                        u = a.dim,
                        c = n.get("type"),
                        l = e.toJSON(),
                        h = null;
                    if (r.indexOf(["heatmap", "contour", "point"], c) > -1) {
                        var f, g = n.get("coord"),
                            d = g.invert(t),
                            p = i.invert(d.x),
                            v = a.invert(d.y),
                            m = {};
                        r.each(l, function(t) {
                            var e = (t._origin[o] - p) * (t._origin[o] - p) + (t._origin[u] - v) * (t._origin[u] - v);
                            (r.isNull(f) || e < f) && (f = e, m = t)
                        }), h = m
                    } else {
                        var x = l[0],
                            y = l[l.length - 1];
                        if (!x) return h;
                        var _ = n._getScaleValueByPoint(t),
                            S = x[s][o],
                            w = x[s][u],
                            b = y[s][o],
                            M = a.isLinear && r.isArray(w);
                        if (r.isArray(S)) r.each(l, function(t) {
                            var e = t[s];
                            if (i.translate(e[o][0]) <= _ && i.translate(e[o][1]) >= _) {
                                if (!M) return h = t, !1;
                                r.isArray(h) || (h = []), h.push(t)
                            }
                        }), r.isArray(h) && (h = this._filterValue(h, t));
                        else {
                            var A;
                            if (i.isLinear || "timeCat" === i.type) {
                                if ((_ > i.translate(b) || _ < i.translate(S)) && (_ > i.max || _ < i.min)) return null;
                                for (var C, T = 0, k = l.length - 1; T <= k;) {
                                    C = Math.floor((T + k) / 2);
                                    var P = l[C][s][o];
                                    if (n._snapEqual(P, _, i)) return l[C];
                                    i.translate(P) <= i.translate(_) ? (T = C + 1, y = l[C], A = l[C + 1]) : (0 === k && (y = l[0]), k = C - 1)
                                }
                            } else r.each(l, function(t, e) {
                                var a = t[s];
                                if (n._snapEqual(a[o], _, i)) {
                                    if (!M) return h = t, !1;
                                    r.isArray(h) || (h = []), h.push(t)
                                } else i.translate(a[o]) <= _ && (y = t, A = l[e + 1])
                            }), r.isArray(h) && (h = this._filterValue(h, t));
                            y && A && Math.abs(i.translate(y[s][o]) - _) > Math.abs(i.translate(A[s][o]) - _) && (y = A)
                        }
                        var I = n.getXDistance();
                        !h && Math.abs(i.translate(y[s][o]) - _) < I / 2 && (h = y)
                    }
                    return h
                },
                getTipTitle: function(t) {
                    var e, n = "",
                        i = this.get("tooltipMap"),
                        r = i.title;
                    if (r) {
                        if (e = this._getScale(r), !e) return r
                    } else e = this._getTipTitleScale();
                    if (e) {
                        var a = t[e.dim];
                        n = e.getText(a)
                    } else if ("heatmap" === this.get("type")) {
                        var s = this.getXScale(),
                            o = this.getYScale(),
                            u = s.getText(t[s.dim]),
                            c = o.getText(t[o.dim]);
                        n = "( " + u + ", " + c + " )"
                    }
                    return n
                },
                getTipValue: function(t, e) {
                    var n, i = e.dim;
                    if (n = t[i], r.isArray(n)) {
                        var a = [];
                        r.each(n, function(t) {
                            a.push(e.getText(t))
                        }), n = a.join("-")
                    } else n = e.getText(n);
                    return n
                },
                getTipName: function(t) {
                    var e, n, a = this.get("tooltipMap"),
                        s = a.name;
                    if (s && (n = this._getScale(s), !n)) return s;
                    var o = this._getGroupScales();
                    if (!n && o.length && r.each(o, function(t) {
                            return n = t, !1
                        }), n) {
                        var u = n.dim;
                        e = n.getText(t[u])
                    } else {
                        var c = this._getTipValueScale();
                        e = i(c)
                    }
                    return e
                },
                getTipItems: function(t, e) {
                    function n(e, n) {
                        r.isNull(n) || "" === n || g.push({
                            title: h,
                            point: t,
                            name: e || h,
                            value: n,
                            color: t.color || a.defaultColor,
                            marker: !0
                        })
                    }
                    var o = this,
                        u = t[s];
                    e && o.set("tooltipMap", e);
                    var c, l, h = o.getTipTitle(u),
                        f = o.get("tooltipDims"),
                        g = [];
                    if (f) r.each(f, function(t) {
                        if (!r.isNull(u[t])) {
                            var e = o._getScale(t);
                            c = i(e), l = e.getText(u[t]), n(c, l)
                        }
                    });
                    else {
                        var d = o._getTipValueScale();
                        r.isNull(u[d.dim]) || (l = o.getTipValue(u, d), c = o.getTipName(u), n(c, l))
                    }
                    return g
                },
                isShareTooltip: function() {
                    var t = this.get("shareTooltip"),
                        e = this.get("type");
                    if ("interval" === e) {
                        var n = this.get("coord"),
                            i = n.type;
                        ("theta" === i || "polar" === i && n.isTransposed) && (t = !1)
                    } else this.getYScale() && !r.inArray(["contour", "point", "polygon", "edge"], e) || (t = !1);
                    return t
                }
            }), t.exports = o
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = g.shape.hollowArea,
                    n = l.mix(!0, {}, e, {
                        stroke: t.color,
                        lineWidth: t.size,
                        strokeOpacity: t.opacity
                    }, t.style);
                return n
            }

            function r(t) {
                var e = g.shape.area,
                    n = l.mix(!0, {}, e, {
                        fill: t.color,
                        stroke: t.color,
                        lineWidth: t.size,
                        fillOpacity: t.opacity
                    }, t.style);
                return n
            }

            function a(t, e) {
                var n = "",
                    i = [],
                    r = [],
                    a = [],
                    s = t.isInCircle;
                return l.each(t.points, function(t) {
                    r.push(t[0]), a.push(t[1])
                }), a = a.reverse(), i.push(r, a), l.each(i, function(t, i) {
                    var r = "";
                    if (r = e ? f.getSplinePath(t, !1) : f.getLinePath(t, !1), s) {
                        var a = t[0];
                        r += l.substitute("L {x} {y}", a)
                    } else i > 0 && (r = r.replace("M", "L"));
                    n += r
                }), n += "z"
            }

            function s(t, e, n) {
                return [
                    ["M", t - n, e + n],
                    ["L", t - n, e - n],
                    ["L", t, e],
                    ["L", t + n, e - n],
                    ["L", t + n, e + n],
                    ["z"]
                ]
            }

            function o(t, e, n) {
                return l.path2Absolute([
                    ["M", t - n, e + n],
                    ["L", t - n, e],
                    ["R", t - n / 2, e - n / 2, t, e, t + n / 2, e + n / 2, t + n, e],
                    ["L", t + n, e + n],
                    ["z"]
                ])
            }

            function u(t, e, n) {
                var a = n ? i(t) : r(t);
                return l.mix({
                    symbol: e ? o : s
                }, a)
            }

            function c(t) {
                return t && t.indexOf("line") !== -1 ? g.activeShape.hollowArea : g.activeShape.area
            }
            var l = n(1),
                h = n(16),
                f = n(20),
                g = n(4),
                d = [2, 1],
                p = h.registGeom("area", {
                    defaultShapeType: "area",
                    getActiveCfg: function(t) {
                        return c(t)
                    }
                });
            h.registShape("area", "area", {
                getShapePoints: function(t) {
                    var e = [],
                        n = t.x,
                        i = t.y,
                        r = t.y0;
                    return i = l.isArray(i) ? i : [r, i], l.each(i, function(t) {
                        e.push({
                            x: n,
                            y: t
                        })
                    }), e
                },
                drawShape: function(t, e) {
                    var n = r(t),
                        i = a(t, !1);
                    return i = this.parsePath(i, !1), e.addShape("path", {
                        attrs: l.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return u(t, !1, !1)
                }
            }), h.registShape("area", "smooth", {
                drawShape: function(t, e) {
                    var n = r(t),
                        i = a(t, !0);
                    return i = this.parsePath(i, !1), e.addShape("path", {
                        attrs: l.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return u(t, !0, !1)
                }
            }), h.registShape("area", "line", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = a(t, !1);
                    return r = this.parsePath(r, !1), e.addShape("path", {
                        attrs: l.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return u(t, !1, !0)
                }
            }), h.registShape("area", "dotLine", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = a(t, !1);
                    return n.lineDash = d, r = this.parsePath(r), e.addShape("path", {
                        attrs: l.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = u(t, !1, !0);
                    return e.lineDash = d, e
                }
            }), h.registShape("area", "smoothLine", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = a(t, !0);
                    return r = this.parsePath(r, !1), e.addShape("path", {
                        attrs: l.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return u(t, !0, !0)
                }
            }), h.registShape("area", "dotSmoothLine", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = a(t, !0);
                    return n.lineDash = d, r = this.parsePath(r, !1), e.addShape("path", {
                        attrs: l.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = u(t, !0, !0);
                    return e.lineDash = d, e
                }
            }), p.spline = p.smooth, t.exports = p
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = g.shape.line,
                    n = l.mix(!0, {}, e, {
                        stroke: t.color,
                        lineWidth: t.size,
                        strokeOpacity: t.opacity,
                        opacity: t.opacity
                    }, t.style);
                return n
            }

            function r(t, e) {
                var n = [];
                n.push({
                    x: t.x,
                    y: .5 * t.y + 1 * e.y / 2
                }), n.push({
                    y: .5 * t.y + 1 * e.y / 2,
                    x: e.x
                }), n.push(e);
                var i = ["C"];
                return l.each(n, function(t) {
                    i.push(t.x, t.y)
                }), i
            }

            function a(t, e) {
                var n = [];
                n.push({
                    x: e.x,
                    y: e.y
                }), n.push(t);
                var i = ["Q"];
                return l.each(n, function(t) {
                    i.push(t.x, t.y)
                }), i
            }

            function s(t, e) {
                var n = r(t, e),
                    i = [
                        ["M", t.x, t.y]
                    ];
                return i.push(n), i
            }

            function o(t, e, n) {
                var i = a(e, n),
                    r = [
                        ["M", t.x, t.y]
                    ];
                return r.push(i), r
            }

            function u(t, e) {
                var n = a(t[1], e),
                    i = a(t[3], e),
                    r = [
                        ["M", t[0].x, t[0].y]
                    ];
                return r.push(i), r.push(["L", t[3].x, t[3].y]), r.push(["L", t[2].x, t[2].y]), r.push(n), r.push(["L", t[1].x, t[1].y]), r.push(["L", t[0].x, t[0].y]), r.push(["Z"]), r
            }

            function c(t, e) {
                var n = [];
                n.push({
                    y: t.y * (1 - p) + e.y * p,
                    x: t.x
                }), n.push({
                    y: t.y * (1 - p) + e.y * p,
                    x: e.x
                }), n.push(e);
                var i = [
                    ["M", t.x, t.y]
                ];
                return l.each(n, function(t) {
                    i.push(["L", t.x, t.y])
                }), i
            }
            var l = n(1),
                h = n(16),
                f = n(59),
                g = n(4),
                d = n(20),
                p = 1 / 3,
                v = h.registGeom("edge", {
                    defaultShapeType: "line",
                    getShapePoints: function(t, e) {
                        return f.splitPoints(e)
                    },
                    getActiveCfg: function() {
                        return {
                            strokeOpacity: .7
                        }
                    }
                });
            h.registShape("edge", "line", {
                drawShape: function(t, e) {
                    var n = this.parsePoints(t.points),
                        r = i(t),
                        a = d.getLinePath(n),
                        s = e.addShape("path", {
                            attrs: l.mix(r, {
                                path: a
                            })
                        });
                    return s
                }
            }), h.registShape("edge", "vhv", {
                drawShape: function(t, e) {
                    var n = t.points,
                        r = i(t),
                        a = c(n[0], n[1]);
                    a = this.parsePath(a);
                    var s = e.addShape("path", {
                        attrs: l.mix(r, {
                            path: a
                        })
                    });
                    return s
                }
            }), h.registShape("edge", "smooth", {
                drawShape: function(t, e) {
                    var n = t.points,
                        r = i(t),
                        a = s(n[0], n[1]);
                    a = this.parsePath(a);
                    var o = e.addShape("path", {
                        attrs: l.mix(r, {
                            path: a
                        })
                    });
                    return o
                }
            }), h.registShape("edge", "arc", {
                drawShape: function(t, e) {
                    var n, a, s = t.points,
                        c = s.length > 2 ? "weight" : "normal",
                        h = i(t);
                    if (t.isInCircle) {
                        var f = {
                            x: 0,
                            y: 1
                        };
                        "normal" === c ? a = o(s[0], s[1], f) : (h.fill = h.stroke, a = u(s, f)), a = this.parsePath(a), n = e.addShape("path", {
                            attrs: l.mix(h, {
                                path: a
                            })
                        })
                    } else if ("normal" === c) s = this.parsePoints(s), n = e.addShape("arc", {
                        attrs: l.mix(h, {
                            x: (s[1].x + s[0].x) / 2,
                            y: s[0].y,
                            r: Math.abs(s[1].x - s[0].x) / 2,
                            startAngle: 180,
                            endAngle: 360
                        })
                    });
                    else {
                        a = [
                            ["M", s[0].x, s[0].y],
                            ["L", s[1].x, s[1].y]
                        ];
                        var g = r(s[1], s[3]),
                            d = r(s[2], s[0]);
                        a.push(g), a.push(["L", s[3].x, s[3].y]), a.push(["L", s[2].x, s[2].y]), a.push(d), a.push(["Z"]), a = this.parsePath(a), h.fill = h.stroke, n = e.addShape("path", {
                            attrs: l.mix(h, {
                                path: a
                            })
                        })
                    }
                    return n
                }
            }), t.exports = v
        },
        function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = t.x,
                    i = t.y,
                    r = t.y0,
                    a = t.size,
                    s = r,
                    o = i;
                d.isArray(i) && (o = i[1], s = i[0]);
                var u, c;
                d.isArray(n) ? (u = n[0], c = n[1]) : (u = n - a / 2, c = n + a / 2);
                var l = [];
                return l.push({
                    x: u,
                    y: s
                }, {
                    x: u,
                    y: o
                }), e ? l.push({
                    x: c,
                    y: (o + s) / 2
                }) : l.push({
                    x: c,
                    y: o
                }, {
                    x: c,
                    y: s
                }), l
            }

            function r(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i) {
                        var r = 0 === n ? "M" : "L";
                        e.push([r, i.x, i.y])
                    }
                }
                var a = t[0];
                return e.push(["L", a.x, a.y]), e.push(["z"]), e
            }

            function a(t) {
                var e = t.x,
                    n = t.y,
                    i = t.y0,
                    r = [];
                return d.isArray(n) ? d.each(n, function(t, n) {
                    r.push({
                        x: d.isArray(e) ? e[n] : e,
                        y: t
                    })
                }) : r.push({
                    x: e,
                    y: n
                }, {
                    x: e,
                    y: i
                }), r
            }

            function s(t) {
                var e = t.x,
                    n = d.isArray(t.y) ? t.y[1] : t.y,
                    i = d.isArray(t.y) ? t.y[0] : t.y0,
                    r = t.size,
                    a = [];
                return a.push({
                    x: e - r / 2,
                    y: n
                }, {
                    x: e + r / 2,
                    y: n
                }, {
                    x: e,
                    y: n
                }, {
                    x: e,
                    y: i
                }, {
                    x: e - r / 2,
                    y: i
                }, {
                    x: e + r / 2,
                    y: i
                }), a
            }

            function o(t) {
                var e = [];
                return e.push(["M", t[0].x, t[0].y], ["L", t[1].x, t[1].y], ["M", t[2].x, t[2].y], ["L", t[3].x, t[3].y], ["M", t[4].x, t[4].y], ["L", t[5].x, t[5].y]), e
            }

            function u(t) {
                var e = m.shape.interval,
                    n = d.mix(!0, {}, e, {
                        fill: t.color,
                        stroke: t.color,
                        fillOpacity: t.opacity
                    }, t.style);
                return n
            }

            function c(t) {
                var e = m.shape.hollowInterval,
                    n = d.mix(!0, {}, e, {
                        stroke: t.color,
                        strokeOpacity: t.opacity
                    }, t.style);
                return n
            }

            function l(t, e) {
                var n = [],
                    i = t.points,
                    r = t.nextPoints;
                return d.isNull(r) ? e ? n.push(["M", i[0].x, i[0].y], ["L", i[1].x, i[1].y], ["L", i[2].x, i[2].y], ["L", i[3].x, i[3].y], ["Z"]) : n.push(["M", i[0].x, i[0].y], ["L", i[1].x, i[1].y], ["L", i[2].x, i[2].y], ["Z"]) : n.push(["M", i[0].x, i[0].y], ["L", i[1].x, i[1].y], ["L", r[1].x, r[1].y], ["L", r[0].x, r[0].y], ["Z"]), n
            }

            function h(t) {
                return t && "rect" !== t ? m.activeShape.hollowInterval : m.activeShape.interval
            }

            function f(t, e) {
                var n, i, r, a, s = e.getRadius(),
                    o = e.get("inner"),
                    u = s * o;
                return !d.isArray(t.x) && d.isArray(t.y) && (t.x = [t.x, t.x]), d.isArray(t.x) ? (r = {
                    x: t.x[0],
                    y: t.y[0]
                }, a = {
                    x: t.x[1],
                    y: t.y[1]
                }, n = v.getPointAngle(e, r), i = v.getPointAngle(e, a), i <= n && (i += 2 * Math.PI)) : (a = t, n = e.get("startAngle"), i = v.getPointAngle(e, a)), {
                    r: s,
                    ir: u,
                    startAngle: n,
                    endAngle: i
                }
            }

            function g(t, e) {
                var n, i = e.coord,
                    r = e.point,
                    a = 7.5;
                if (i && "theta" === i.type) {
                    var s = f(r, i),
                        o = (s.endAngle - s.startAngle) / 2 + s.startAngle,
                        u = a * Math.cos(o),
                        c = a * Math.sin(o);
                    n = {
                        transform: [
                            ["t", u, c]
                        ]
                    }
                }
                return d.mix({}, n)
            }
            var d = n(1),
                p = n(16),
                v = n(20),
                m = n(4),
                x = p.registGeom("interval", {
                    defaultShapeType: "rect",
                    getActiveCfg: function(t) {
                        return h(t)
                    },
                    getSelectedCfg: function(t, e) {
                        return g(t, e)
                    }
                });
            p.registShape("interval", "rect", {
                getShapePoints: function(t) {
                    return i(t)
                },
                drawShape: function(t, e) {
                    var n = u(t),
                        i = r(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: d.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = u(t),
                        n = t.isInCircle,
                        i = n ? "circle" : "square";
                    return d.mix({
                        symbol: i
                    }, e)
                }
            }), p.registShape("interval", "hollowRect", {
                getShapePoints: function(t) {
                    return i(t)
                },
                drawShape: function(t, e) {
                    var n = c(t),
                        i = r(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: d.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = c(t),
                        n = t.isInCircle,
                        i = n ? "circle" : "square";
                    return d.mix({
                        symbol: i
                    }, e)
                }
            }), p.registShape("interval", "line", {
                getShapePoints: function(t) {
                    return a(t)
                },
                drawShape: function(t, e) {
                    var n = c(t);
                    n.lineWidth = t.size || 1;
                    var i = r(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: d.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = c(t);
                    return d.mix({
                        symbol: "line"
                    }, e)
                }
            }), p.registShape("interval", "tick", {
                getShapePoints: function(t) {
                    return s(t)
                },
                drawShape: function(t, e) {
                    var n = c(t),
                        i = o(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: d.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = c(t);
                    return d.mix({
                        symbol: "tick"
                    }, e)
                }
            }), p.registShape("interval", "funnel", {
                getShapePoints: function(t) {
                    return t.size = 2 * t.size, i(t)
                },
                drawShape: function(t, e) {
                    var n = u(t),
                        i = l(t, !0);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: d.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = u(t);
                    return d.mix({
                        symbol: "square"
                    }, e)
                }
            }), p.registShape("interval", "pyramid", {
                getShapePoints: function(t) {
                    return t.size = 2 * t.size, i(t, !0)
                },
                drawShape: function(t, e) {
                    var n = u(t),
                        i = l(t, !1);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: d.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = u(t);
                    return d.mix({
                        symbol: "square"
                    }, e)
                }
            }), t.exports = x
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = v.shape.line,
                    n = f.mix(!0, {}, e, {
                        stroke: t.color,
                        lineWidth: t.size,
                        strokeOpacity: t.opacity,
                        opacity: t.opacity
                    }, t.style);
                return n
            }

            function r(t, e) {
                var n = "",
                    i = t.points,
                    r = t.isInCircle;
                return n += e ? g.getSplinePath(i, !1) : g.getLinePath(i, !1), r && (n += "z"), f.path2Absolute(n)
            }

            function a(t, e) {
                var n = [];
                return f.each(t, function(i, r) {
                    var a = t[r + 1];
                    n.push(i), a && (n = n.concat(e(i, a)))
                }), n
            }

            function s(t) {
                var e = "";
                return f.each(t, function(t, n) {
                    var i = 0 === n ? "M {x} {y}" : "L {x} {y}";
                    e += f.substitute(i, t)
                }), e
            }

            function o(t, e) {
                var n = a(t.points, e);
                return s(n)
            }

            function u(t, e, n) {
                return [
                    ["M", t - n, e],
                    ["L", t + n, e]
                ]
            }

            function c(t, e, n) {
                return f.path2Absolute([
                    ["M", t - n, e],
                    ["R", t - n / 2, e - n / 2, t, e, t + n / 2, e + n / 2, t + n, e]
                ])
            }

            function l(t, e) {
                return f.mix({
                    symbol: e ? c : u
                }, i(t))
            }

            function h(t, e) {
                return f.mix({
                    symbol: e
                }, i(t))
            }
            var f = n(1),
                g = n(20),
                d = n(59),
                p = n(16),
                v = n(4),
                m = [2, 1],
                x = [10, 5],
                y = p.registGeom("line", {
                    defaultShapeType: "line",
                    getMarkerCfg: function(t, e) {
                        var n = y[t] || y.line;
                        return n.getMarkerCfg(e)
                    },
                    getActiveCfg: function() {
                        return v.activeShape.line
                    }
                });
            p.registShape("line", "line", {
                getShapePoints: function(t) {
                    return d.splitPoints(t)
                },
                drawShape: function(t, e) {
                    var n = i(t),
                        a = r(t, !1);
                    return a = this.parsePath(a, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: a
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return l(t)
                }
            }), p.registShape("line", "dot", {
                drawShape: function(t, e) {
                    var n = i(t),
                        a = r(t, !1);
                    return a = this.parsePath(a, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: a,
                            lineDash: m
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = l(t, !1);
                    return e.lineDash = m, e
                }
            }), p.registShape("line", "fill", {
                drawShape: function(t, e) {
                    var n = i(t),
                        a = r(t, !1);
                    return a = this.parsePath(a, !1), a.push(["z"]), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: a,
                            fill: n.stroke
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = l(t, !1);
                    return e.fill = e.stroke, e
                }
            }), p.registShape("line", "dash", {
                drawShape: function(t, e) {
                    var n = i(t),
                        a = r(t, !1);
                    return a = this.parsePath(a, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: a,
                            lineDash: x
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = l(t, !1);
                    return e.lineDash = x, e
                }
            }), p.registShape("line", "smooth", {
                drawShape: function(t, e) {
                    var n = i(t),
                        a = r(t, !0);
                    return a = this.parsePath(a, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: a
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return l(t, !0)
                }
            }), p.registShape("line", "dotSmooth", {
                drawShape: function(t, e) {
                    var n = i(t),
                        a = r(t, !0);
                    return a = this.parsePath(a, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: a,
                            lineDash: m
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = l(t, !0);
                    return e.lineDash = m, e
                }
            }), p.registShape("line", "hv", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = o(t, function(t, e) {
                            var n = [];
                            return n.push({
                                x: e.x,
                                y: t.y
                            }), n
                        });
                    return r = this.parsePath(r, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return h(t, function(t, e, n) {
                        return [
                            ["M", t - n, e - n],
                            ["L", t, e - n],
                            ["L", t, e],
                            ["L", t + n, e]
                        ]
                    })
                }
            }), p.registShape("line", "vh", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = o(t, function(t, e) {
                            var n = [];
                            return n.push({
                                x: t.x,
                                y: e.y
                            }), n
                        });
                    return r = this.parsePath(r, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return h(t, function(t, e, n) {
                        return [
                            ["M", t - n, e],
                            ["L", t, e],
                            ["L", t, e - n],
                            ["L", t + n, e - n]
                        ]
                    })
                }
            }), p.registShape("line", "hvh", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = o(t, function(t, e) {
                            var n = [],
                                i = (e.x - t.x) / 2 + t.x;
                            return n.push({
                                x: i,
                                y: t.y
                            }), n.push({
                                x: i,
                                y: e.y
                            }), n
                        });
                    return r = this.parsePath(r, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return h(t, function(t, e, n) {
                        return [
                            ["M", t - 3 * n / 2, e],
                            ["L", t - n / 2, e],
                            ["L", t - n / 2, e - n / 2],
                            ["L", t + n / 2, e - n / 2],
                            ["L", t + n / 2, e],
                            ["L", t + 3 * n / 2, e]
                        ]
                    })
                }
            }), p.registShape("line", "vhv", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = o(t, function(t, e) {
                            var n = [],
                                i = (e.y - t.y) / 2 + t.y;
                            return n.push({
                                x: t.x,
                                y: i
                            }), n.push({
                                x: e.x,
                                y: i
                            }), n
                        });
                    return r = this.parsePath(r, !1), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: r
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return h(t, function(t, e, n) {
                        return [
                            ["M", t - n, e],
                            ["L", t - n, e - n / 2],
                            ["L", t, e - n / 2],
                            ["L", t, e - n],
                            ["L", t, e + n / 2],
                            ["L", t + n, e + n / 2]
                        ]
                    })
                }
            }), y.spline = y.smooth, t.exports = y
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = l.shape.point,
                    n = o.mix(!0, {}, e, {
                        fill: t.color,
                        fillOpacity: t.opacity,
                        radius: t.size
                    }, t.style);
                return n
            }

            function r(t) {
                var e = l.shape.hollowPoint,
                    n = o.mix(!0, {}, e, {
                        stroke: t.color,
                        strokeOpacity: t.opacity,
                        radius: t.size
                    }, t.style);
                return n
            }

            function a(t) {
                return !t || 0 !== t.indexOf("hollow") && o.indexOf(g, t) === -1 ? l.activeShape.point : l.activeShape.hollowPoint
            }

            function s(t) {
                var e = t.points[0].x,
                    n = t.points[0].y,
                    i = t.size[0],
                    r = t.size[1],
                    a = [
                        ["M", e - .5 * i, n - .5 * r],
                        ["L", e + .5 * i, n - .5 * r],
                        ["L", e + .5 * i, n + .5 * r],
                        ["L", e - .5 * i, n + .5 * r],
                        ["z"]
                    ];
                return a
            }
            var o = n(1),
                u = n(59),
                c = n(12),
                l = n(4),
                h = n(16),
                f = ["circle", "square", "bowtie", "diamond", "hexagon", "triangle", "triangle-down"],
                g = ["cross", "tick", "plus", "hyphen", "line", "pointerLine", "pointerArrow"],
                d = Math.sqrt(3);
            o.mix(c.Shape.Marker.Symbols, {
                hexagon: function(t, e, n) {
                    var i = n / 2 * d;
                    return [
                        ["M", t, e - n],
                        ["L", t + i, e - n / 2],
                        ["L", t + i, e + n / 2],
                        ["L", t, e + n],
                        ["L", t - i, e + n / 2],
                        ["L", t - i, e - n / 2],
                        ["z"]
                    ]
                },
                bowtie: function(t, e, n) {
                    return [
                        ["M", t - n, e - n],
                        ["L", t + n, e + n],
                        ["L", t + n, e - n],
                        ["L", t - n, e + n],
                        ["z"]
                    ]
                },
                cross: function(t, e, n) {
                    return [
                        ["M", t - n, e - n],
                        ["L", t + n, e + n],
                        ["M", t + n, e - n],
                        ["L", t - n, e + n]
                    ]
                },
                tick: function(t, e, n) {
                    return [
                        ["M", t - n / 2, e - n],
                        ["L", t + n / 2, e - n],
                        ["M", t, e - n],
                        ["L", t, e + n],
                        ["M", t - n / 2, e + n],
                        ["L", t + n / 2, e + n]
                    ]
                },
                plus: function(t, e, n) {
                    return [
                        ["M", t - n, e],
                        ["L", t + n, e],
                        ["M", t, e - n],
                        ["L", t, e + n]
                    ]
                },
                hyphen: function(t, e, n) {
                    return [
                        ["M", t - n, e],
                        ["L", t + n, e]
                    ]
                },
                line: function(t, e, n) {
                    return [
                        ["M", t, e - n],
                        ["L", t, e + n]
                    ]
                }
            });
            var p = h.registGeom("point", {
                defaultShapeType: "hollowCircle",
                getActiveCfg: function(t, e) {
                    var n = a(t);
                    return e && e.size && delete n.radius, n
                },
                getShapePoints: function(t, e) {
                    return u.splitPoints(e)
                }
            });
            h.registShape("point", "rect", {
                drawShape: function(t, e) {
                    var n = i(t),
                        r = s(t);
                    r = this.parsePath(r);
                    var a = e.addShape("path", {
                        attrs: o.mix(n, {
                            path: r
                        })
                    });
                    return a
                },
                getMarkerCfg: function(t) {
                    var e = i(t);
                    return e.symbol = "rect", e
                }
            }), o.each(f, function(t) {
                h.registShape("point", t, {
                    drawShape: function(e, n) {
                        e.points = this.parsePoints(e.points);
                        var r = i(e),
                            a = n.addShape("Marker", {
                                attrs: o.mix(r, {
                                    symbol: t
                                })
                            });
                        return a.move(e.points[0].x, e.points[0].y), a
                    },
                    getMarkerCfg: function(e) {
                        var n = i(e);
                        return n.symbol = t, n
                    }
                }), h.registShape("point", "hollow" + o.ucfirst(t), {
                    drawShape: function(e, n) {
                        e.points = this.parsePoints(e.points);
                        var i = r(e),
                            a = n.addShape("Marker", {
                                attrs: o.mix(i, {
                                    symbol: t
                                })
                            });
                        return a.move(e.points[0].x, e.points[0].y), a
                    },
                    getMarkerCfg: function(e) {
                        var n = r(e);
                        return n.symbol = t, n
                    }
                })
            }), o.each(g, function(t) {
                h.registShape("point", t, {
                    drawShape: function(e, n) {
                        e.points = this.parsePoints(e.points);
                        var i = r(e),
                            a = n.addShape("Marker", {
                                attrs: o.mix(i, {
                                    symbol: t
                                })
                            });
                        return a.move(e.points[0].x, e.points[0].y), a
                    },
                    getMarkerCfg: function(e) {
                        var n = r(e);
                        return n.symbol = t, n
                    }
                })
            }), t.exports = p
        },
        function(t, e, n) {
            "use strict";

            function i() {
                return u.activeShape.polygon
            }

            function r(t) {
                var e = u.shape.polygon,
                    n = s.mix(!0, {}, e, {
                        stroke: t.color,
                        fill: t.color,
                        fillOpacity: t.opacity
                    }, t.style);
                return n
            }

            function a(t) {
                var e = "",
                    n = [t[0].x, t[0].y],
                    i = 0,
                    r = t[0];
                return s.each(t, function(a, o) {
                    var u = 0 === o ? "M {x} {y} " : "L {x} {y} ";
                    if (e += s.substitute(u, a), i !== o && o < t.length - 1 && s.equalsArray(n, [a.x, a.y])) {
                        var c = t[o + 1];
                        e += "z" + s.substitute("M {x} {y}", c), r = c, i = o + 1, n = [c.x, c.y]
                    }
                }), e += s.substitute("L {x} {y}", r), e += "z", s.path2Absolute(e)
            }
            var s = n(1),
                o = n(16),
                u = n(4),
                c = o.registGeom("polygon", {
                    defaultShapeType: "polygon",
                    getMarkerCfg: function() {
                        return {
                            symbol: "rect"
                        }
                    },
                    getActiveCfg: function(t) {
                        return i(t)
                    },
                    getSelectedCfg: function(t, e) {
                        return e && e.style ? e.style : i(t)
                    }
                });
            o.registShape("polygon", "polygon", {
                getShapePoints: function(t) {
                    var e = [];
                    return s.each(t.x, function(n, i) {
                        var r = t.y[i];
                        e.push({
                            x: n,
                            y: r
                        })
                    }), e
                },
                drawShape: function(t, e) {
                    var n = r(t),
                        i = a(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: s.mix(n, {
                            path: i
                        })
                    })
                }
            }), o.registShape("polygon", "hollow", {
                drawShape: function(t, e) {
                    var n = r(t),
                        i = a(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: s.mix(n, {
                            path: i
                        })
                    })
                }
            }), t.exports = c
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                f.isArray(t) || (t = [t]);
                var e = t[0],
                    n = t[t.length - 1],
                    i = t.length > 1 ? t[1] : e,
                    r = t.length > 3 ? t[3] : n,
                    a = t.length > 2 ? t[2] : i;
                return {
                    min: e,
                    max: n,
                    min1: i,
                    max1: r,
                    median: a
                }
            }

            function r(t, e) {
                f.each(t, function(t) {
                    e.push({
                        x: t[0],
                        y: t[1]
                    })
                })
            }

            function a(t) {
                var e = d.shape.line,
                    n = f.mix(!0, {}, e, {
                        stroke: t.color,
                        fill: "#fff",
                        fillOpacity: 0,
                        strokeOpacity: t.opacity
                    });
                return n
            }

            function s(t, e, n) {
                var a, s, o = [];
                return f.isArray(e) ? (s = i(e), a = [
                    [t - n / 2, s.max],
                    [t + n / 2, s.max],
                    [t, s.max],
                    [t, s.max1],
                    [t - n / 2, s.min1],
                    [t - n / 2, s.max1],
                    [t + n / 2, s.max1],
                    [t + n / 2, s.min1],
                    [t, s.min1],
                    [t, s.min],
                    [t - n / 2, s.min],
                    [t + n / 2, s.min],
                    [t - n / 2, s.median],
                    [t + n / 2, s.median]
                ]) : (e = e || .5, s = i(t), a = [
                    [s.min, e - n / 2],
                    [s.min, e + n / 2],
                    [s.min, e],
                    [s.min1, e],
                    [s.min1, e - n / 2],
                    [s.min1, e + n / 2],
                    [s.max1, e + n / 2],
                    [s.max1, e - n / 2],
                    [s.max1, e],
                    [s.max, e],
                    [s.max, e - n / 2],
                    [s.max, e + n / 2],
                    [s.median, e - n / 2],
                    [s.median, e + n / 2]
                ]), r(a, o), o
            }

            function o(t) {
                f.isArray(t) || (t = [t]);
                var e = t.sort(function(t, e) {
                        return t < e ? 1 : -1
                    }),
                    n = e.length;
                if (n < 4)
                    for (var i = e[n - 1], r = 0; r < 4 - n; r++) e.push(i);
                return e
            }

            function u(t, e, n) {
                var i = o(e),
                    r = [{
                        x: t,
                        y: i[0]
                    }, {
                        x: t,
                        y: i[1]
                    }, {
                        x: t - n / 2,
                        y: i[2]
                    }, {
                        x: t - n / 2,
                        y: i[1]
                    }, {
                        x: t + n / 2,
                        y: i[1]
                    }, {
                        x: t + n / 2,
                        y: i[2]
                    }, {
                        x: t,
                        y: i[2]
                    }, {
                        x: t,
                        y: i[3]
                    }];
                return r
            }

            function c(t) {
                var e = [
                    ["M", t[0].x, t[0].y],
                    ["L", t[1].x, t[1].y],
                    ["M", t[2].x, t[2].y],
                    ["L", t[3].x, t[3].y],
                    ["M", t[4].x, t[4].y],
                    ["L", t[5].x, t[5].y],
                    ["L", t[6].x, t[6].y],
                    ["L", t[7].x, t[7].y],
                    ["L", t[4].x, t[4].y],
                    ["Z"],
                    ["M", t[8].x, t[8].y],
                    ["L", t[9].x, t[9].y],
                    ["M", t[10].x, t[10].y],
                    ["L", t[11].x, t[11].y],
                    ["M", t[12].x, t[12].y],
                    ["L", t[13].x, t[13].y]
                ];
                return e
            }

            function l(t) {
                var e = [
                    ["M", t[0].x, t[0].y],
                    ["L", t[1].x, t[1].y],
                    ["M", t[2].x, t[2].y],
                    ["L", t[3].x, t[3].y],
                    ["L", t[4].x, t[4].y],
                    ["L", t[5].x, t[5].y],
                    ["Z"],
                    ["M", t[6].x, t[6].y],
                    ["L", t[7].x, t[7].y]
                ];
                return e
            }

            function h(t, e) {
                return f.mix({
                    symbol: e
                }, a(t))
            }
            var f = n(1),
                g = n(16),
                d = n(4),
                p = g.registGeom("schema", {
                    defaultShapeType: "",
                    getActiveCfg: function() {
                        return d.activeShape.line
                    }
                });
            g.registShape("schema", "box", {
                getShapePoints: function(t) {
                    return s(t.x, t.y, t.size)
                },
                drawShape: function(t, e) {
                    var n = a(t),
                        i = c(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: i
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    return h(t, function(t, e, n) {
                        var i = [e - n, e - n / 2, e, e + n / 2, e + n],
                            r = s(t, i, 2 * n);
                        return c(r)
                    })
                }
            }), g.registShape("schema", "candle", {
                getShapePoints: function(t) {
                    return u(t.x, t.y, t.size)
                },
                drawShape: function(t, e) {
                    var n = a(t),
                        i = l(t.points);
                    return i = this.parsePath(i), e.addShape("path", {
                        attrs: f.mix(n, {
                            path: i,
                            fill: t.color,
                            fillOpacity: t.opacity,
                            lineWidth: 1
                        })
                    })
                },
                getMarkerCfg: function(t) {
                    var e = h(t, function(t, e, n) {
                        e = [e + 1.5 * n, e + n / 2, e - n / 2, e - 1.5 * n];
                        var i = u(t, e, n);
                        return l(i)
                    });
                    return e.fill = t.color, e.fillOpacity = t.opacity, e
                }
            }), t.exports = p
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(46),
                a = "#62a4e8",
                s = i.mix(!0, {}, r, {
                    defaultColor: a,
                    colors: {
                        "default": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0"],
                        intervalStack: ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#605ff0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
                    },
                    shape: {
                        point: {
                            fill: a
                        },
                        hollowPoint: {
                            stroke: a
                        },
                        interval: {
                            fill: a
                        },
                        hollowInterval: {
                            stroke: a
                        },
                        area: {
                            fill: a
                        },
                        polygon: {
                            fill: a
                        },
                        hollowPolygon: {
                            stroke: a
                        },
                        hollowArea: {
                            stroke: a
                        },
                        line: {
                            stroke: a
                        }
                    },
                    guide: {
                        line: {
                            stroke: a
                        },
                        rect: {
                            fill: a
                        },
                        tag: {
                            line: {
                                stroke: a
                            },
                            rect: {
                                fill: a
                            }
                        }
                    },
                    tooltipMarker: {
                        stroke: a
                    }
                });
            t.exports = s
        },
        function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(46),
                a = i.mix(!0, {}, r, {
                    plotCfg: {
                        margin: [20, 80, 60, 80],
                        border: {
                            fill: "#18242E"
                        }
                    },
                    axis: {
                        top: {
                            labels: {
                                label: {
                                    fill: "#D5D4D4"
                                }
                            },
                            tickLine: {
                                stroke: "#46525F"
                            }
                        },
                        bottom: {
                            labels: {
                                label: {
                                    fill: "#999"
                                }
                            },
                            line: {
                                stroke: "#46525F"
                            },
                            tickLine: {
                                stroke: "#46525F"
                            }
                        },
                        left: {
                            labels: {
                                label: {
                                    fill: "#999"
                                }
                            },
                            line: {
                                stroke: "#46525F"
                            },
                            tickLine: {
                                stroke: "#46525F"
                            },
                            grid: {
                                line: {
                                    stroke: "#46525F"
                                }
                            }
                        },
                        right: {
                            labels: {
                                label: {
                                    fill: "#999"
                                }
                            },
                            line: {
                                stroke: "#46525F"
                            },
                            tickLine: {
                                stroke: "#46525F"
                            }
                        },
                        circle: {
                            line: {
                                stroke: "#46525F"
                            },
                            grid: {
                                line: {
                                    stroke: "#46525F"
                                }
                            },
                            labels: {
                                label: {
                                    fill: "#999"
                                }
                            }
                        },
                        gauge: {
                            tickLine: {
                                stroke: "#46525F"
                            },
                            labels: {
                                label: {
                                    fill: "#999"
                                }
                            }
                        },
                        clock: {
                            tickLine: {
                                stroke: "#46525F"
                            },
                            subTick: 5,
                            labels: {
                                label: {
                                    fill: "#999"
                                }
                            }
                        },
                        radius: {
                            labels: {
                                label: {
                                    fill: "#999"
                                }
                            },
                            line: {
                                stroke: "#46525F"
                            },
                            grid: {
                                line: {
                                    stroke: "#46525F"
                                }
                            }
                        }
                    },
                    legend: {
                        right: {
                            word: {
                                fill: "#999"
                            },
                            title: {
                                fill: "#999"
                            }
                        },
                        left: {
                            word: {
                                fill: "#999"
                            },
                            title: {
                                fill: "#999"
                            }
                        },
                        top: {
                            word: {
                                fill: "#999"
                            }
                        },
                        bottom: {
                            word: {
                                fill: "#999"
                            }
                        }
                    },
                    guide: {
                        text: {
                            fill: "#999"
                        },
                        tag: {
                            text: {
                                fill: "#999"
                            }
                        }
                    }
                });
            t.exports = a
        },
        function(t, e, n) {
            "use strict";
            var i = {
                "default": n(46),
                dark: n(338),
                cheery: n(337)
            };
            t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var i = n(65);
            setTimeout(function() {
                if (i.tracking) {
                    var t = new i;
                    t.log({
                        g2: !0,
                        version: "2.2.6",
                        page_type: "page"
                    })
                }
            }, 3e3)
        },
        function(t, e, n) {
            "use strict";

            function i(t) {
                var e = ["polar", "plus", "theta"];
                return l.inArray(e, t.type)
            }

            function r(t) {
                var e = t.coordCfg;
                return !(e && !l.isNull(e.startAngle) && !l.isNull(e.endAngle) && e.endAngle - e.startAngle < 2 * Math.PI)
            }

            function a(t, e) {
                var n = !!t[e];
                return n || l.each(t, function(t, i) {
                    var r = i.split("*");
                    if (r.indexOf(e) !== -1) return n = !0, !1
                }), n
            }

            function s(t, e, n) {
                var i = (t - e) / (n - e);
                return i >= 0 && i <= 1
            }

            function o(t, e) {
                var n = !1;
                if (t) {
                    var i = t.type;
                    if ("theta" === i) {
                        var r = t.get("start"),
                            a = t.get("end");
                        n = s(e.x, r.x, a.x) && s(e.y, r.y, a.y)
                    } else {
                        var o = t.invert(e);
                        n = o.x >= 0 && o.y >= 0 && o.x <= 1 && o.y <= 1
                    }
                }
                return n
            }

            function u(t) {
                for (var e = t[0].min, n = t[0].max, i = 1; i < t.length; i++) {
                    var r = t[i];
                    e > r.min && (e = r.min), n < r.max && (n = r.max)
                }
                return [e, n]
            }

            function c(t, e) {
                return function(n) {
                    var i = this,
                        r = [];
                    e && (r = r.concat(e)), n && (r = r.concat(n));
                    var a = new v({
                        chart: i,
                        type: t,
                        adjusts: r
                    });
                    return i._addLayer(a), a
                }
            }
            var l = n(1),
                h = n(18),
                f = n(2),
                g = n(4),
                d = n(104),
                p = n(106),
                v = n(315),
                m = n(317),
                x = function S(t) {
                    S.superclass.constructor.call(this, t), this._init()
                };
            x.ATTRS = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 1,
                    y: 1
                },
                tooltipEnable: !0,
                id: "",
                data: null,
                layers: [],
                geoms: [],
                filters: {},
                scales: {},
                animate: g.animate,
                views: [],
                facets: [],
                syncXYScales: !1
            }, l.extend(x, h), l.augment(x, {
                _init: function() {
                    var t = this.get("data"),
                        e = this.get("facets");
                    e.push(this), this._initData(t), this._initAssists(), this.set("views", []), this.set("geoms", []), this.set("layers", []), this.set("scales", {}), this.set("filters", {}), this.set("facets", e)
                },
                _initAssists: function() {
                    d.initScale(this), d.initCoord(this), d.initAxis(this), d.initGuide(this)
                },
                _initData: function(t) {
                    var e = this;
                    if (t) {
                        if (!(t instanceof f)) {
                            var n = e.get("colDims");
                            if (n && t.length) {
                                var i = t[0];
                                l.each(i, function(t, e) {
                                    n.indexOf(e) === -1 && n.push(e)
                                })
                            }
                            t = new f(t, {
                                names: n
                            })
                        }
                        this.set("data", t)
                    }
                },
                _addLayer: function(t) {
                    this.get("layers").push(t)
                },
                _trainScales: function(t, e) {
                    var n = this.get("scales"),
                        i = [];
                    l.each(n, function(t) {
                        e(t) && i.push(t)
                    });
                    var r = this.get("scaleAssist");
                    r.trainScales(t, i)
                },
                _trainLinearScales: function(t) {
                    this._trainScales(t, function(t) {
                        return t.isLinear
                    })
                },
                _trainCatScales: function(t) {
                    var e = this,
                        n = e.get("filters");
                    e._trainScales(t, function(t) {
                        return t.isCategory && !a(n, t.dim)
                    })
                },
                _setCatScalesRange: function() {
                    var t = this,
                        e = t.get("coordAssist"),
                        n = t.getXScale(),
                        a = t.getYScales(),
                        s = [];
                    n && s.push(n), s = s.concat(a);
                    var o = i(e) && r(e),
                        u = t.get("scaleAssist"),
                        c = u.defs;
                    l.each(s, function(t) {
                        if (t.isCategory && t.values && (!c[t.dim] || !c[t.dim].range)) {
                            var n, i = t.values.length;
                            if (1 === i) n = [.5, 1];
                            else {
                                var r = 1,
                                    a = 0;
                                o ? e.hasAction("transpose") ? (r = g.widthRatio.multiplePie, a = 1 / i * r, n = [a / 2, 1 - a / 2]) : n = [0, 1 - 1 / i] : (r = g.widthRatio.column, a = 1 / i * r, n = [a, 1 - a])
                            }
                            t.range = n
                        }
                    })
                },
                _initGeoms: function() {
                    var t = this.get("layers"),
                        e = this.get("coord"),
                        n = this.get("viewId"),
                        i = [];
                    return l.each(t, function(t, r) {
                        var a = t.createGeom();
                        a.set("id", n + "geom" + r), a.set("coord", e), i.push(a)
                    }), this.set("geoms", i), i
                },
                _renderAxis: function() {
                    var t = this.get("axisAssist");
                    t.container = this.get("backPlot");
                    var e = this.getXScale(),
                        n = this.getYScales();
                    t.createAxis(this, e, n)
                },
                _renderGuide: function() {
                    var t = this.get("guideAssist");
                    if (t.guides.length) {
                        if (!this.get("frontPlot")) {
                            var e = this.get("frontCanvas"),
                                n = e.addGroup();
                            this.set("frontPlot", n)
                        }
                        t.backPlot = this.get("backPlot"), t.frontPlot = this.get("frontPlot");
                        var i = this.get("coord"),
                            r = this.getXScale(),
                            a = this.getYScales()[0];
                        t.setScale(r, a), t.paint(i)
                    }
                },
                _getRegion: function(t) {
                    var e = this.get("plotRange"),
                        n = t.get("start"),
                        i = t.get("end"),
                        r = e.tl,
                        a = e.br,
                        s = {
                            x: n.x * (a.x - r.x) + r.x,
                            y: i.y * (a.y - r.y) + r.y
                        },
                        o = {
                            x: i.x * (a.x - r.x) + r.x,
                            y: n.y * (a.y - r.y) + r.y
                        };
                    return {
                        start: s,
                        end: o
                    }
                },
                _clearInner: function(t) {
                    var e = this.get("geoms");
                    return e.length && l.each(e, function(t) {
                        t.destroy()
                    }), this.set("geoms", []), this.get("guideAssist").reset(), this.get("legendAssist") && this.get("legendAssist").clear(), this.get("tooltipAssist") && this.get("tooltipAssist").clear(), this.get("plotContainer") && this.get("plotContainer").clear(), this.get("backPlot") && this.get("backPlot").clear(), this.get("frontPlot") && this.get("frontPlot").clear(), t && (this.get("guideAssist").clear(), this.set("layers", []), this.set("scales", {}), this.set("filters", {})), this
                },
                source: function(t, e, n) {
                    if (e) {
                        var i = this.get("scaleAssist");
                        i.defs = l.mix({}, !0, i.defs, e)
                    }
                    return this.set("colDims", n), this._initData(t), this
                },
                coord: function(t, e) {
                    var n = this.get("coordAssist");
                    return n.type = t, n.coordCfg = e, n.resetActions(), n
                },
                axis: function(t, e) {
                    var n = this.get("axisAssist");
                    if (t === !1) n.enable = !1;
                    else {
                        var i = n.axisCfg;
                        n.enable = !0, i[t] = e
                    }
                    return this
                },
                guide: function() {
                    return this.get("guideAssist")
                },
                filter: function(t, e) {
                    var n = this.get("filters");
                    return n[t] = e, this.set("filters", n), this
                },
                col: function(t, e) {
                    var n = this.get("scaleAssist"),
                        i = n.defs;
                    return i[t] = e, this
                },
                cols: function(t) {
                    var e = this.get("scaleAssist");
                    e.defs = l.mix({}, !0, e.defs, t)
                },
                tooltip: function(t) {
                    this.set("tooltipEnable", t)
                },
                animate: function(t) {
                    return this.set("animate", t), this
                },
                _drawCanvas: function() {
                    var t = this.get("animate"),
                        e = this.get("canvas"),
                        n = this.get("backCanvas"),
                        i = this.get("frontCanvas"),
                        r = this.get("coord");
                    t ? (m(n, r), m(e, r)) : (e.draw(), n.draw()), i.draw()
                },
                _initPlot: function() {
                    if (!this.get("plotContainer")) {
                        var t = this.get("canvas"),
                            e = t.addGroup();
                        this.set("plotContainer", e)
                    }
                    if (!this.get("backPlot")) {
                        var n = this.get("backCanvas"),
                            i = n.addGroup();
                        this.set("backPlot", i)
                    }
                    if (!this.get("frontPlot")) {
                        var r = this.get("frontCanvas"),
                            a = r.addGroup();
                        this.set("frontPlot", a)
                    }
                },
                _createCoord: function() {
                    var t = this.get("coordAssist"),
                        e = this.get("region"),
                        n = t.createCoord(e.start, e.end);
                    if (this.get("facet")) {
                        var i = this.get("facet");
                        "mirror" === i.type && (1 === i.rows ? (n.transpose(), 0 === i.colIndex && n.scale(-1, 1)) : 1 === i.rowIndex && n.scale(1, -1))
                    }
                    return this.set("coord", n), n
                },
                _filterData: function() {
                    var t = this.get("scaleAssist"),
                        e = this.get("data"),
                        n = this.get("scales"),
                        i = this.get("filters");
                    return t.filterData(e, i, n)
                },
                _generateGeoms: function(t) {
                    var e = this._initGeoms(),
                        n = [];
                    return l.each(e, function(e) {
                        var i = e.processData(t);
                        e.set("frames", i), n = n.concat(i)
                    }), n
                },
                _processCatScales: function(t) {
                    var e = !1;
                    l.each(this.get("geoms"), function(t) {
                        var n = t.getAttr("position");
                        !n.stat || "tree" !== n.stat.type && "treemap" !== n.stat.type || (e = !0)
                    });
                    var n;
                    e && (n = f.forceMerge.apply(null, t), this._trainCatScales(n));
                    var i = this.getXScale();
                    if (i && "timeCat" === i.type) {
                        n = f.forceMerge.apply(null, t);
                        var r = this.get("scaleAssist");
                        r.trainScales(n, [i])
                    }
                    this._setCatScalesRange()
                },
                _numericAndAdjust: function() {
                    var t = [],
                        e = this.get("geoms");
                    return l.each(e, function(e) {
                        var n = e.get("frames");
                        n = e.numbericFrames(n), n = e.processAdjust(n), e.set("frames", n), t = t.concat(n)
                    }), t
                },
                _processLinearScales: function(t) {
                    var e = f.forceMerge.apply(null, t);
                    this._trainLinearScales(e)
                },
                _paint: function() {
                    var t = this.get("geoms"),
                        e = this.get("coord");
                    this.fire("beforepaint", {
                        chart: this
                    }), l.each(t, function(t) {
                        t.paint(e, t.get("frames"), function(e) {
                            t.set("frames", e)
                        })
                    }), this._renderGuide(), this.getXScale() && this._renderAxis(), this.fire("afterpaint"), this.get("plotContainer").sort()
                },
                _renderView: function() {
                    var t = this.get("facets"),
                        e = [];
                    l.each(t, function(t) {
                        t._initPlot(), t._createCoord();
                        var n = t._filterData();
                        n = t._generateGeoms(n), e = e.concat(n)
                    }), 0 !== e.length && (l.each(t, function(t) {
                        t._processCatScales(e)
                    }), e = [], l.each(t, function(t) {
                        var n = t._numericAndAdjust();
                        e = e.concat(n)
                    }), l.each(t, function(t) {
                        t._processLinearScales(e)
                    }))
                },
                _renderLegends: function() {},
                _renderTooltip: function() {},
                _generateFacets: function() {
                    this._initPlot(), this._createCoord();
                    var t = this._filterData();
                    d.initFacet(this);
                    var e = this.get("facetAssist"),
                        n = e.generateFacets(t);
                    this.set("facets", n)
                },
                render: function() {
                    var t = this,
                        e = t.get("facetCfg");
                    e && t._generateFacets(), t._renderView();
                    var n = t.get("views");
                    return l.each(n, function(t) {
                        t.get("facet") || t._renderView()
                    }), t.get("syncXYScales") && t._syncXYScales(), l.each([t].concat(n), function(t) {
                        t._paint()
                    }), t._renderLegends(), t._renderTooltip(), t._drawCanvas(), t
                },
                changeData: function(t) {
                    var e = this.get("scales"),
                        n = this.get("scaleAssist");
                    return this._initData(t), t = this.get("data"), n.resetScales(t, e), this.repaint(), this
                },
                clear: function() {
                    var t = this.get("views");
                    return t.length > 0 && (l.each(t, function(t) {
                        t._clearInner(!0)
                    }), this.set("views", [])), this._clearInner(!0), !this.get("parent") && this.get("frontCanvas").clear(), this.get("backCanvas").draw(), this.get("canvas").draw(), this.get("frontCanvas").draw(), this.set("plotContainer", null), this.set("backPlot", null), this.set("frontPlot", null), this.set("facets", [this]), this
                },
                repaint: function() {
                    var t = this.get("views");
                    return t.length > 0 && l.each(t, function(t) {
                        t._clearInner(!1)
                    }), this._clearInner(!1), this.render(), this
                },
                createView: function(t) {
                    var e = this.get("views"),
                        n = new x(t);
                    n.get("region") || n.set("region", this._getRegion(n)), n.set("backCanvas", this.get("backCanvas")), n.set("frontCanvas", this.get("frontCanvas")), n.set("canvas", this.get("canvas")), n.set("animate", this.get("animate")), n.set("viewId", this.get("viewId") + e.length), n.set("parent", this), n.set("syncXYScales", this.get("syncXYScales")), t && t.id || n.set("id", "view" + e.length);
                    var i = n.get("scaleAssist");
                    i.defs = l.mix({}, this.get("scaleAssist").defs);
                    var r = n.get("axisAssist");
                    r.enable = this.get("axisAssist").enable, r.axisCfg = l.mix({}, this.get("axisAssist").axisCfg);
                    var a = n.get("coordAssist");
                    return a.type = this.get("coordAssist").type, a.coordCfg = l.mix({}, this.get("coordAssist").coordCfg), a.actions = this.get("coordAssist").actions, e.push(n), this.set("views", e), n
                },
                removeView: function(t) {
                    for (var e = [], n = this.get("views"), i = null, r = 0; r < n.length; r++) i = n[r], i !== t ? e.push(i) : i.clear();
                    this.set("views", e)
                },
                getActiveShape: function() {
                    var t = this,
                        e = t.get("geoms"),
                        n = null;
                    return l.each(e, function(t) {
                        var e = t.get("activeShapes");
                        if (e && e.length) return n = e[0], !1
                    }), n
                },
                getSnapRecords: function(t) {
                    var e = this,
                        n = e.get("geoms"),
                        i = [];
                    return l.each(n, function(e) {
                        var n, r = e.get("frames");
                        if ("point" === e.get("type")) {
                            var a = f.merge.apply(null, r);
                            n = e.findPoint(t, a), n && i.push(n)
                        } else l.each(r, function(r) {
                            n = e.findPoint(t, r), n && i.push(n)
                        })
                    }), i
                },
                getPosition: function(t) {
                    var e, n, i, r = this,
                        a = r.get("coord"),
                        s = r.getXScale();
                    s && (i = s.dim, e = s.scale(t[i]));
                    var o = this.get("scales");
                    return l.each(o, function(e) {
                        if (e && e.dim !== i && !l.isNull(t[e.dim])) {
                            var r = e.dim;
                            return void(n = e.scale(t[r]))
                        }
                    }), a.convert({
                        x: e,
                        y: n
                    })
                },
                getXScale: function() {
                    var t = this.get("geoms"),
                        e = null;
                    return t.length && (e = t[0].getXScale()), e
                },
                getYScales: function() {
                    var t = this.get("geoms"),
                        e = [];
                    return l.each(t, function(t) {
                        var n = t.getYScale();
                        n && l.indexOf(e, n) === -1 && e.push(n)
                    }), e
                },
                getViews: function() {
                    return this.get("views")
                },
                getView: function(t) {
                    var e = null,
                        n = this.get("views");
                    return l.each(n, function(n) {
                        if (n.get("id") === t) return e = n, !1
                    }), e
                },
                getGeoms: function() {
                    return this.get("geoms")
                },
                getAllGeoms: function() {
                    var t = [];
                    t = t.concat(this.getGeoms());
                    var e = this.get("views");
                    return l.each(e, function(e) {
                        t = t.concat(e.getGeoms())
                    }), t
                },
                getScale: function(t) {
                    var e = this.get("scales");
                    return e[t]
                },
                createScale: function(t, e) {
                    var n = this.get("data"),
                        i = this.get("scaleAssist"),
                        r = this.get("scales");
                    return r[t] || (r[t] = i.createScale(t, n, e)), r[t]
                },
                getViewsByPoint: function(t) {
                    var e = [],
                        n = this.get("views");
                    return o(this.get("coord"), t) && e.push(this), l.each(n, function(n) {
                        o(n.get("coord"), t) && e.push(n)
                    }), e
                },
                _getLinearScales: function(t) {
                    var e = [],
                        n = this.getAllGeoms();
                    return l.each(n, function(n) {
                        var i;
                        "x" === t ? i = n.getXScale() : "y" === t && (i = n.getYScale()), i.isLinear && e.push(i)
                    }), e
                },
                _syncXYScales: function() {
                    var t = this._getLinearScales("x"),
                        e = this._getLinearScales("y"),
                        n = u(t),
                        i = u(e),
                        r = this.get("scaleAssist"),
                        a = r.defs,
                        s = this.getAllGeoms();
                    l.each(s, function(t) {
                        var e = t.get("chart"),
                            r = e.get("scaleAssist").defs,
                            s = t.getAttr("position"),
                            o = s.scales,
                            u = o[0].dim,
                            c = o[1].dim;
                        a[u] || r[u] || (o[0].min = n[0], o[0].max = n[1]), a[c] || r[c] || (o[1].min = i[0], o[1].max = i[1])
                    })
                }
            });
            for (var y in p) p.hasOwnProperty(y) && (y = y.toLowerCase(), x.prototype[y] = c(y));
            var _ = ["pointStack", "pointJitter", "pointDodge", "intervalStack", "intervalDodge", "intervalSymmetric", "areaStack", "schemaDodge"];
            l.each(_, function(t) {
                var e = t.replace(/([a-z](?=[A-Z]))/g, "$1 "),
                    n = e.split(" "),
                    i = n[0],
                    r = l.ucfirst(n[1]);
                "pointDodge" === t && (r = ["Dodge"]), x.prototype[t] = c(i, r)
            }), t.exports = x
        },
        function(t, e, n, i, r) {
            var a = n(i);
            a.Util = n(r), t.exports = a
        }
    ]))
});
