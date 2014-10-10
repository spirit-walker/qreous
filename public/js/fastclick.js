/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENCE.txt)
 @codingstandard ftlabs-jslint
 */
function Event() {
}
function MouseEvent() {
}
function KeyboardEvent() {
}
function TouchEvent() {
}
function MutationEvent() {
}
function MessageEvent() {
}
function MediaEvent() {
}
function MouseAndTouchEvent() {
}
function Key() {
}
function SmartObject(n) {
    var i = {
            _x: 0,
            _y: 0,
            _z: 0,
            _rotation: 0,
            _rotationX: 0,
            _rotationY: 0,
            _rotationZ: 0,
            _scaleX: 1,
            _scaleY: 1,
            _opacity: 1
        },
        t;
    return n == null ? (t = document.createElement('div'), t.style.position = 'absolute', t.style.left = '0px', t.style.top = '0px')  : (n instanceof jQuery && (n = jQuery(n).get() [0]), t = n, t.style.position = 'absolute', t.style.left && (i._x = parseInt(t.style.left)), t.style.top && (i._y = parseInt(t.style.top)), t.style.opacity && (i._opacity = t.style.opacity)),
        SmartObject.convert(t, i)
}
function startTrace(n) {
    if (CURRENT_TRACE_GROUP = n, TRACE_ACTIVE) try {
        console.log('/*************************/'),
            console.log(CURRENT_TRACE_GROUP),
            console.log('/*************************/')
    } catch (t) {
    }
}
function endTrace() {
    if (TRACE_ACTIVE) try {
        console.log('/*************************/'),
            console.log(CURRENT_TRACE_GROUP),
            console.log('/*************************/')
    } catch (n) {
    }
}
function trace(n, t) {
    function r(n) {
        var t = '';
        try {
            t = typeof n == 'function' ? n.name.toString() + '();' : n.toString()
        } catch (i) {
            try {
                t = n.toString()
            } catch (r) {
                t = 'null'
            }
        }
        return t
    }
    if (TRACE_ACTIVE) {
        var i = r(n);
        t && (i = r(t) + ' => ' + i);
        try {
            TRACE_ON_SCREEN && (General._traceField || (General._traceField = General.getNewDiv(), General._traceField.style.whiteSpace = 'noWrap', General._traceField.style.color = '#00ff00', General._traceField.style.padding = '10px', General._traceField.style.zIndex = 2000000, General._traceField.style.left = '60px', General._traceField.style.top = '20px', General._traceField.style.fontFamily = 'Courier New', General._traceField.style.fontSize = '10px', General._traceField.style.backgroundColor = '#000000', General._traceField.style.position = 'fixed', General._traceFieldLines = [
            ]), General._traceFieldLines.push(i), General._traceFieldLines.length > General._maxTraceLines && General._traceFieldLines.shift(), General._traceField.innerHTML = General._traceFieldLines.join('<br />'), jQuery(document.body).prepend(General._traceField)),
                console.log(i)
        } catch (u) {
        }
    }
}
function traceObject(n, t) {
    var i,
        r;
    for (i in n) {
        if (r = t ? t + '.' + i + '\n' + n[i] : i + '\n' + n[i], !confirm(r)) return;
        typeof n[i] == 'object' && (t ? dumpProps(n[i], t + '.' + i)  : dumpProps(n[i], i))
    }
}
function mapXML(n) {
    if (TRACE_ACTIVE) for (var t = 0, i = jQuery(n).children(), u = i.length, r = null, t = 0; t < u; t += 1) r = i[t],
        trace('child.nodeName : ' + r.nodeName)
}
function General() {
}
function Matrix() {
}
function FrameByFrameAnim(n, t, i, r, u, f, e) {
    var o = this,
        h = new SmartObject,
        p = u,
        w = 0,
        d = n.length,
        a = [
        ],
        b = n,
        k = t[0].length,
        y = 1000 / i,
        v = !1,
        g = !1,
        c = !1,
        s = 1,
        l;
    return o.load = function () {
        for (var h = b.length, t = 0; t < h; t++) {
            var c = b[t],
                i = new SmartObject,
                n = new Image;
            function u(n) {
                n.currentTarget.removeEventListener(Event.LOAD, u),
                    n.currentTarget.removeEventListener(Event.LOAD, s),
                    w++,
                    w == d && (f && f(), g = !0, o.init())
            }
            function s(n) {
                trace('FrameByFrameAnim - Image Failed to Load: ' + n.currentTarget.src)
            }
            n.addEventListener(Event.LOAD, u, !1),
                n.addEventListener(Event.ERROR, s, !1),
                n.src = r + c,
                i.appendChild(n),
                a.push(i),
                e && n.addEventListener(Event.ONLOAD, FixIE.imageCheckForPNGFix)
        }
    },
        o.init = function () {
            for (var i = a.length, t, n = 0; n < i; n++) t = a[n],
                h.appendChild(t);
            o.setFrame(0),
                p && p === !0 && o.play()
        },
        o.setFrame = function (n) {
            var f = 0,
                e = a.length;
            for (f; f < e; f++) {
                var r = a[f],
                    o = t[f],
                    i = o[n],
                    u = r._transformOriginX || r._transformOriginY;
                n == 0 && (u ? (r._transformOriginX = i.rx, r._transformOriginY = i.ry)  : (r.registrationPointPercentX = i.rx, r.registrationPointPercentY = i.ry)),
                    i.x && (u ? r._x = i.x : r.x = i.x),
                    i.y && (u ? r._y = i.y : r.y = i.y),
                    i.sx && (u ? r._scaleX = i.sx : r.scaleX = i.sx),
                    i.sy && (u ? r._scaleY = i.sy : r.scaleY = i.sy),
                    i.r && (u ? r._rotation = i.r : r.rotation = i.r),
                    (i.o || i.o === 0) && (u ? r._opacity = i.o : r.opacity = i.o)
            }
        },
        o.play = function (n) {
            function t() {
                o.setFrame(s),
                    s++,
                        s < k - 1 && c == !1 ? l = setTimeout(t, y)  : (n && n(), v = !1)
            }
            clearTimeout(l),
                c = !1,
                v = !0,
                t()
        },
        o.animateTo = function (n, t) {
            function i() {
                o.setFrame(s),
                        r == 'incr' ? (s++, s < n && c == !1 ? l = setTimeout(i, y)  : (v = !1, t && t()))  : (s--, s > n && c == !1 ? l = setTimeout(i, y)  : (v = !1, s < 0 && (s = 0), t && t()))
            }
            clearTimeout(l);
            var r = 'incr';
            n <= s && (r = 'decr'),
                c = !1,
                v = !0,
                i()
        },
        o.stop = function () {
            clearTimeout(l),
                c = !0
        },
        o.gotoAndStop = function (n) {
            clearTimeout(l),
                c = !0,
                s = n,
                o.setFrame(s)
        },
        o.gotoAndPlay = function (n, t) {
            c = !0,
                s = n,
                o.setFrame(s),
                o.play(t)
        },
        o.getTotalFrames = function () {
            return k
        },
        o.load(),
        h.play = o.play,
        h.stop = o.stop,
        h.gotoAndStop = o.gotoAndStop,
        h.gotoAndPlay = o.gotoAndPlay,
        h.animateTo = o.animateTo,
        h.gotoFrame = o.setFrame,
        h.getTotalFrames = o.getTotalFrames,
        h
}
function AssetGroup(n, t, i) {
    var r = this;
    return r.data = n,
        r.callback = t,
        i && (r.customPath = i),
        r
}
function Timeline(n) {
    function d(n) {
        var t = '';
        return f > 100 ? n < 10 ? t = '00' : n < 100 && (t = '0')  : f > 10 && n < 10 && (t = '0'),
            t + n
    }
    function g() {
        p += 1,
            p == f && nt()
    }
    function nt() {
        y = !0,
            r ? t.play()  : v(),
            jQuery(t).trigger('loaded')
    }
    function v() {
        k(o),
            i._delay && (clearInterval(u), u = setTimeout(it, 1000 * i._delay)),
            o += 1,
            o > f - 1 && (b ? o = 0 : t.stop())
    }
    function k(n) {
        a.frame = n,
            i = rt(n),
            w && (jQuery(i).width(l), jQuery(i).height(h)),
            t.appendChild(i),
            s && i != s && t.removeChild(s),
            s = i
    }
    function tt() {
        var n = Math.floor(a.frame);
        t.gotoFrame(n)
    }
    function it() {
        r && (u = setInterval(v, 1000 / c))
    }
    function rt(n) {
        for (var c = e.length, t, s, h, u, r = n, f, o, i = 0; i < c; i += 1) if (t = e[i], s = t.startId, h = t.endId, f = h - (s - 1), r - f >= 0) r -= f;
        else {
            u = t.frames,
                o = u[r],
                o._delay = r == u.length - 1 ? t.delay : null;
            break
        }
        return o
    }
    var t = General.getNewDiv(),
        c,
        y = !1,
        r = !1,
        u,
        o = 0,
        p = 0,
        f = 0,
        i,
        s,
        w = !1,
        l,
        h,
        e,
        b = !0,
        a = {
            frame: 0
        };
    return c = n ? n : 24,
        t.load = function (n) {
            e = n;
            for (var a = e.length, r, u, t, o, s = [
            ], h, c, l, i = 0; i < a; i += 1) {
                for (r = e[i], h = r.filename, c = r.ext, l = r.startId, endId = r.endId, o = [
                ], u = l; u <= endId; u += 1) t = new Image,
                    t.style.position = 'absolute',
                    t._id = u,
                    o.push(t),
                    s.push(t);
                r.frames = o
            }
            for (f = s.length, i = 0; i < f; i += 1) t = s[i],
                filename = h + d(t._id) + c,
                t.onload = g,
                t.src = filename
        },
        t.play = function () {
            r = !0,
                y && (clearInterval(u), u = setInterval(v, 1000 / c))
        },
        t.stop = function () {
            clearInterval(u),
                r = !1
        },
        t.gotoFrame = k,
        t.animateToFrame = function (n, t) {
            r = !0,
                jQuery(a).stop(!0, !1).animate({
                    frame: n
                }, {
                    duration: t,
                    easing: Expo.easeOut,
                    step: tt
                }),
                setTimeout(function () {
                    r = !1
                }, t)
        },
        t.newHeight = function (n) {
            if (i) {
                var t = jQuery(i).width(),
                    r = jQuery(i).height(),
                    u = t / r;
                h = n,
                    l = h * u,
                    jQuery(i).width(l),
                    jQuery(i).height(h),
                    w = !0
            }
        },
        t.imageWidth = function () {
            var n = 0;
            return i && (n = jQuery(i).width()),
                n
        },
        t.imageHeight = function () {
            var n = 0;
            return i && (n = jQuery(i).height()),
                n
        },
        t.setLoop = function (n) {
            b = n
        },
        t.isPlaying = function () {
            return r
        },
        t
}
function CustomInterval(n, t, i, r) {
    function s() {
        u += 1,
            r ? o(u)  : o(),
            u < e && setTimeout(s, f)
    }
    trace('CustomInterval();');
    var e = n,
        o = i,
        u = 0,
        f = 1000 * (t / e);
    trace(f, '_interval'),
        setTimeout(s, f)
}
function updateModuleStates() {
    if (Assets.SITE_ID === 'beoplaya9' || Assets.SITE_ID === 'beoplayEarset3' || Assets.SITE_ID === 'beoplaya8') {
        var i = jQuery(document).scrollTop(),
            t = 0,
            r = ContentController._activeTemplates.length,
            n;
        for (t; t < r; t++) n = ContentController._activeTemplates[t].array[0],
                n._contentControl_yPos + n._contentControl_height > i && n._contentControl_yPos < i + ContentController.WIN_HEIGHT ? n._contentControl_active || (n._contentControl_active = !0, n._h3h6PreventHide != !0 && jQuery(Assets.LAYER_MID).append(n))  : n._contentControl_active && (n._contentControl_active = !1, n._h3h6PreventHide != !0 && jQuery(n).detach())
    }
}
function VisitorData() {
    visited = jQuery.cookie('visited'),
        (BrowserDetect.OS == 'iPhone' || BrowserDetect.OS == 'iPhone/iPod' || BrowserDetect.OS == 'iPod' || BrowserDetect.OS == 'Android' || BrowserDetect.OS == 'Windows CE' || BrowserDetect.OS == 'Blackberry' || BrowserDetect.OS == 'Palm') && (visited == 'undefined' || visited == null) && (showVideo(), jQuery.cookie('visited', 'yes', {
        expires: 30,
        path: '/'
    }))
}
function showVideo() {
    var f = jQuery('#frontpage-video-wrapper #fpvParam').text(),
        e = jQuery('#frontpage-video-overlay'),
        t = jQuery('#frontpage-video-wrapper'),
        n = t.find('iframe'),
        o = jQuery('#fpvClose'),
        i = n.attr('src'),
        r = n.attr('width'),
        u = n.attr('height');
    i = i + '&wmode=transparent&autoplay=' + f,
        n.attr('src', i),
        t.css({
            width: r,
            height: u,
            'margin-top': - u / 2,
            'margin-left': - r / 2
        }),
        n != null && (jQuery('#fpvideo').appendTo('body').css('display', 'block'), e.css('display', 'block'), t.css('display', 'block')),
        o.click(function () {
            jQuery('#fpvideo').remove()
        })
}
function notifyBox() {
    var t = jQuery('#notify-boxes-wrapper'),
        r = jQuery('.notify-close'),
        i = jQuery('#notify-overlay'),
        u = jQuery('.notify-btn'),
        n,
        f = jQuery('#notify-me-btn');
    r.click(function () {
        var n = jQuery(this).parent();
        n.css('display', 'none'),
            t.css('display', 'none'),
            i.css('display', 'none')
    }),
        u.live('click', function () {
            n = jQuery(this).attr('rel'),
                console.log('button rel: ' + n),
                t.css('display', 'block'),
                i.css('display', 'block'),
                jQuery('#' + n).css('display', 'block')
        })
}
function Pullout(n, t) {
    function o() {
        var t = jQuery('<div/>').css({
                position: 'absolute'
            }),
            e,
            r,
            u,
            f;
        jQuery(i).append(t),
            e = AssetLoader.getAsset('icon_bg_white_left'),
            jQuery(t).append(e),
            r = n.imageWidth - 60,
            r > 0 && (u = AssetLoader.getAsset('icon_bg_white_mid'), jQuery(t).append(u), jQuery(u).css({
            left: 30
        }), jQuery(u).attr({
            width: r,
            height: 73
        })),
            f = AssetLoader.getAsset('icon_bg_white_right'),
            jQuery(t).append(f),
            jQuery(f).css({
                left: 30 + r
            }),
            jQuery(t).css({
                left: 18,
                top: 16
            })
    }
    function s() {
        var r = TextLib.getTextField('GothamBold', 13, !1),
            t;
        jQuery(i).append(r),
            jQuery(r).append(n.header),
            jQuery(r).css({
                left: 18 + n.imageWidth + 18,
                top: 16,
                width: 300,
                color: Assets.getHeaderColor(),
                height: 'auto'
            }),
            t = TextLib.getTextField('Lucida Grande', 13, !1),
            jQuery(i).append(t),
            jQuery(t).append(n.body),
            jQuery(t).css({
                left: 18 + n.imageWidth + 18,
                top: 40,
                width: 310,
                color: '#666666',
                height: 'auto'
            })
    }
    function h() {
        function u() {
            TweenMax.to(t, 0.3, {
                css: {
                    opacity: 1
                }
            })
        }
        function r() {
            TweenMax.to(t, 0.3, {
                css: {
                    opacity: 0
                }
            })
        }
        var n = jQuery('<div/>').css({
                position: 'absolute',
                width: 42,
                height: 42,
                cursor: 'pointer'
            }),
            i = AssetLoader.getAsset('pullout_close_btn_' + Assets.SITE_ID),
            t = AssetLoader.getAsset('pullout_close_btn_' + Assets.SITE_ID + '_hover');
        return General.disableSelection(i),
            General.disableSelection(t),
            jQuery(n).append(i),
            jQuery(n).append(t),
            r(),
            jQuery(n).bind(MouseEvent.CLICK, c),
            jQuery(n).bind(MouseEvent.MOUSE_OVER, u),
            jQuery(n).bind(MouseEvent.MOUSE_OUT, r),
            n
    }
    function c() {
        t.destroyPullout(i)
    }
    function e() {
        window.open(n.link, '_blank')
    }
    function l() {
        r = AssetLoader.getAsset(n.image),
            jQuery(r).css({
                opacity: 0,
                left: 18,
                top: - 14,
                cursor: 'pointer'
            }),
            General.disableSelection(r),
            jQuery(i).append(r),
            jQuery(r).stop(!0, !0).animate({
                opacity: 1,
                top: - 22
            }, {
                duration: 500
            }),
            jQuery(r).bind(MouseEvent.CLICK, e),
            f = jQuery('<div/>').css({
                position: 'absolute',
                cursor: 'pointer',
                width: u,
                height: 108,
                opacity: 0.01,
                backgroundColor: '#ffffff'
            }),
            jQuery(i).append(f),
            jQuery(f).bind(MouseEvent.CLICK, e);
        var t = h();
        jQuery(i).append(t),
            jQuery(t).css({
                left: u - 81,
                top: 35
            })
    }
    var i = jQuery('<div/>').css({
            position: 'absolute'
        }),
        u = 18 + n.imageWidth + 18 + 300 + 27 + 114,
        r,
        f;
    return function () {
        var f,
            t,
            r;
        i.align = n.align,
            AssetLoader.loadGroup(new AssetGroup([n.image], l)),
            f = AssetLoader.getAsset('pullout_bg_left'),
            jQuery(i).append(f),
            t = AssetLoader.getAsset('pullout_bg_mid'),
            jQuery(i).append(t),
            jQuery(t).css({
                left: 50
            }),
            jQuery(t).attr({
                width: u - 162,
                height: 108
            }),
            r = AssetLoader.getAsset('pullout_bg_right'),
            jQuery(i).append(r),
            jQuery(r).css({
                left: u - 114
            }),
            o(),
            s()
    }(),
        i.getWidth = function () {
            return u
        },
        i
}
function Pullouts() {
    var t = jQuery('<div/>').css({
            position: 'absolute'
        }),
        n,
        i = 0;
    return function () {
        n = [
        ]
    }(),
        t.addPullout = function (i) {
            var r = new Pullout(i.data, t),
                u;
            jQuery(t).append(r),
                u = i.height != null ? !0 : !1,
                n.push({
                    item: r,
                    useHeight: u,
                    height: i.height,
                    id: i.id,
                    leftOffset: r.getWidth()
                })
        },
        t.destroyPullout = function (t) {
            function o() {
                jQuery(n[r].item).css({
                    left: i - n[r].leftOffset
                })
            }
            function f() {
                jQuery(t).css({
                    opacity: 0
                }),
                    jQuery(t).remove(),
                    n.splice(r, 1),
                    delete t
            }
            var u = 0,
                e = n.length,
                r;
            for (u; u < e; u++) if (n[u].item === t) {
                r = u;
                break
            }
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 ? f()  : Assets.MOBILE_VERSION || BrowserDetect.OS == 'iPad' ? TweenMax.to(n[r].item, 0.4, {
                css: {
                    opacity: 0
                },
                ease: Quad.easeOut,
                onComplete: f
            })  : TweenMax.to(n[r], 0.4, {
                leftOffset: 0,
                ease: Quad.easeOut,
                onUpdate: o,
                onComplete: f
            })
        },
        t.resize = function (t, r, u) {
            i = t;
            var f = 0,
                l = n.length,
                c,
                h,
                a,
                e,
                s,
                o;
            for (f; f < l; f++) {
                e = n[f].item,
                    h = n[f].id,
                    c = ContentController._activeTemplates[h].array[0],
                    a = jQuery(c).position(),
                    o = n[f].useHeight ? n[f].height : r,
                    o = parseInt(o),
                    s = u ? u[h] : 0,
                    jQuery(e).css({
                        left: t - n[f].leftOffset
                    });
                switch (e.align) {
                    case 'top':
                        jQuery(e).css({
                            top: s + 144
                        });
                        break;
                    case 'center':
                        jQuery(e).css({
                            top: s + o * 0.5 - 52
                        });
                        break;
                    case 'bottom':
                        jQuery(e).css({
                            top: s + o - 250
                        });
                        break;
                    default:
                        jQuery(e).css({
                            top: s + o - 250
                        })
                }
            }
        },
        t
}
function HighlightsMenu(n, t) {
    function c() {
        var t,
            p,
            s,
            c,
            v,
            w,
            b,
            k,
            d,
            y;
        for (f = AssetLoader.getAsset('spacer-bg'), jQuery(f).css({
            position: 'absolute',
            top: '52px',
            left: '0px'
        }), jQuery(i).append(f), e = AssetLoader.getAsset('highlights_menu_btnSpacers'), jQuery(e).css({
            position: 'absolute',
            top: '70px',
            left: '144px'
        }), jQuery(i).append(e), t = 0, p = r.length, t; t < p; t++) w = AssetLoader.getAsset(r[t] + '_active'),
            b = AssetLoader.getAsset(r[t]),
            k = AssetLoader.getAsset(r[t] + '_hover'),
            d = t == n ? !0 : !1,
            s = new HighlightsBtn(b, w, k, d),
            jQuery(s).css({
                position: 'absolute',
                cursor: 'pointer',
                top: '80px',
                left: 170 + t * 108 + 'px'
            }),
            jQuery(s).attr({
                'data-id': t
            }),
            jQuery(s).bind('click', a),
            o.push(s),
            jQuery(i).append(s),
            v = jQuery('<div/>'),
            jQuery(v).css({
                position: 'absolute',
                top: '130px',
                width: '107px',
                height: '30px',
                'text-align': 'center',
                left: 144 + t * 108 + 'px'
            }),
            jQuery(i).append(v),
            c = jQuery('<p/>'),
            jQuery(c).css({
                position: 'absolute',
                top: '5px',
                'text-align': 'center',
                width: '107px',
                'font-size': '10px',
                color: '#a2a2a2',
                'font-family': 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif',
                left: '0px'
            }),
            jQuery(c).append(h[t]),
            jQuery(v).append(c);
        u = AssetLoader.getAsset('highlights_menu_spacerMarker'),
            jQuery(u).css({
                position: 'absolute',
                top: '46px',
                left: 193 + n * 108 + 'px'
            }),
            jQuery(i).append(u),
            y = new BuyBtn,
            jQuery(y).css({
                position: 'absolute',
                top: '66px',
                left: '850px'
            }),
            jQuery(i).append(y),
            setTimeout(l, 1000 * 0.4)
    }
    function l() {
        i.activateBtn(s)
    }
    function a(n) {
        var u = jQuery(n.currentTarget).attr('data-id'),
            f = jQuery(t).children(),
            e = jQuery(t).attr('data-path'),
            r = jQuery(f[u]).attr('data-path');
        i.activateBtn(u),
            Assets.IS_LOCAL || (r == 'design' ? (adf.createOrder({
        }), adf.track(4047, 1069635))  : r == 'portability' ? (adf.createOrder({
        }), adf.track(4047, 1069635))  : r == 'sound' ? (adf.createOrder({
        }), adf.track(4047, 1069634))  : r == 'simplicity' ? (adf.createOrder({
        }), adf.track(4047, 1069633))  : r == 'airplay' && (adf.createOrder({
        }), adf.track(4047, 1069632))),
            ContentController.path(e + '/' + jQuery(f[u]).attr('data-path'))
    }
    var i = jQuery('<div/>'),
        f,
        e,
        r = [
            'highlights-btn-01',
            'highlights-btn-05',
            'highlights-btn-04',
            'highlights-btn-03',
            'highlights-btn-02'
        ],
        h = [
            'AIRPLAY',
            'SIMPLICITY',
            'SOUND',
            'PORTABILITY',
            'DESIGN'
        ],
        o = [
        ],
        u,
        s = 0;
    return jQuery(i).css({
        position: 'absolute'
    }),
        AssetLoader.loadGroup(new AssetGroup(['highlights-btn-01.png',
            'highlights-btn-01_active.png',
            'highlights-btn-01_hover.png',
            'highlights-btn-02.png',
            'highlights-btn-02_active.png',
            'highlights-btn-02_hover.png',
            'highlights-btn-03.png',
            'highlights-btn-03_active.png',
            'highlights-btn-03_hover.png',
            'highlights-btn-04.png',
            'highlights-btn-04_active.png',
            'highlights-btn-04_hover.png',
            'highlights-btn-05.png',
            'highlights-btn-05_active.png',
            'highlights-btn-05_hover.png',
            'highlights_menu_btnSpacers.png',
            'highlights_menu_buyBtn.png',
            'highlights_menu_hover_buyBtn.png',
            'highlights_menu_buyBtn_beoli.png',
            'Beolit12-shadow01_down.png',
            'spacer-bg.png',
            'highlights_menu_spacerMarker.png'], c)),
        i.activateBtn = function (n) {
            var t = 0,
                r = o.length,
                i,
                f = 193 + n * 108;
            for (jQuery(u).animate({
                left: f
            }, 400, Quint.easeInOut), s = n, t; t < r; t += 1) i = o[t],
                    t === n ? i.active(!0)  : i.active(!1)
        },
        i
}
function Btn(n, t, i, r) {
    function p() {
        c || a || (jQuery(s).stop(!0, !1).animate({
            opacity: l
        }, 1000 * f, e), h && jQuery(o).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * f, e))
    }
    function w() {
        c || a || (jQuery(s).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * f, e), h && jQuery(o).stop(!0, !1).animate({
            opacity: 1
        }, 1000 * f, e))
    }
    var u = General.getNewDiv(),
        c,
        l = 1,
        a = !1,
        v,
        y,
        b = v,
        k = y,
        h = !0,
        f = 0.5,
        e = 'easeOutQuint',
        o,
        s;
    return r === !1 && (h = !1),
        c = i !== null ? i : !1,
        jQuery(u).css({
            cursor: 'pointer',
            position: 'absolute'
        }),
        o = n,
        jQuery(o).css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            cursor: 'pointer'
        }),
        jQuery(u).append(o),
        s = t,
        jQuery(s).css({
            position: 'absolute',
            top: '0px',
            left: '0px',
            cursor: 'pointer'
        }),
        jQuery(u).append(s),
        jQuery(u).bind('mouseover', p),
        jQuery(u).bind('mouseout', w),
        c || (jQuery(s).stop(), jQuery(s).fadeTo(0, 0)),
        u.kill = function () {
            jQuery(u).unbind('mouseover', p),
                jQuery(u).unbind('mouseout', w)
        },
        u.forceOver = function () {
            jQuery(s).stop(!0, !1).animate({
                opacity: l
            }, 1000 * f, e),
                h && jQuery(o).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * f, e)
        },
        u.isLocked = function () {
            return a
        },
        u.forceOut = function () {
            jQuery(s).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * f, e),
                h && jQuery(o).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * f, e)
        },
        u.lock = function (n) {
            a = n
        },
        u.active = function (n) {
            n ? (c = !0, jQuery(s).stop(!0, !1).animate({
                opacity: l
            }, 1000 * f, e), h && jQuery(o).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * f, e))  : (c = !1, jQuery(s).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * f, e), h && jQuery(o).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * f, e))
        },
        u.alpha = function (n) {
            l = n
        },
        u.init = function () {
            v = jQuery(o).width(),
                y = jQuery(o).height()
        },
        u.newHeight = function (n, t, i) {
            var u = n / t,
                r = i * u;
            jQuery(s).width(r),
                jQuery(s).height(i),
                jQuery(o).width(r),
                jQuery(o).height(i)
        },
        u.setTransitionSpeed = function (n) {
            f = n
        },
        u.setEaseType = function (n) {
            e = n
        },
        u
}
function HighlightsBtn(n, t, i, r) {
    function p() {
        o || jQuery(e).stop(!0, !1).animate({
            opacity: v
        }, 1000 * 0.5, Quint.easeOut)
    }
    function w() {
        o || (jQuery(e).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.5, Quint.easeOut), jQuery(f).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.5, Quint.easeOut))
    }
    function y() {
        Resizer.resize(s, h, c),
            Resizer.resize(f, h, c),
            Resizer.resize(e, h, c)
    }
    var u = jQuery('<div/>'),
        o,
        v = 1,
        l,
        a,
        h = l,
        c = a,
        s,
        e,
        f;
    return o = r !== null ? r : !1,
        s = n,
        jQuery(s).css({
            position: 'absolute',
            top: '0px',
            left: '0px'
        }),
        jQuery(u).append(s),
        e = i,
        jQuery(e).css({
            position: 'absolute',
            top: '0px',
            left: '0px'
        }),
        jQuery(u).append(e),
        f = t,
        jQuery(f).css({
            position: 'absolute',
            top: '0px',
            left: '0px'
        }),
        jQuery(u).append(f),
        jQuery(u).bind('mouseover', p),
        jQuery(u).bind('mouseout', w),
        o || (jQuery(f).stop(), jQuery(f).fadeTo(0, 0), jQuery(e).fadeTo(0, 0)),
        u.active = function (n) {
            n ? (o = !0, jQuery(f).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * 0.5, Quint.easeOut))  : (jQuery(f).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut), jQuery(e).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut), o = !1)
        },
        u.init = function () {
            l = jQuery(s).width(),
                a = jQuery(s).height()
        },
        u.scaleX = function (n) {
            n >= 0 && (h = l * n, y())
        },
        u.scaleY = function (n) {
            n >= 0 && (c = a * n, y())
        },
        u.alpha = function (n) {
            v = n
        },
        u
}
function BreakBtn(n, t, i, r, u) {
    function w() {
        l || (jQuery(s).stop(!0, !1).animate({
            opacity: a
        }, 1000 * 0.5, Quint.easeOut), p && jQuery(e).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.5, Quint.easeOut))
    }
    function b() {
        l || (jQuery(s).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.5, Quint.easeOut), jQuery(o).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.5, Quint.easeOut), p && jQuery(e).stop(!0, !1).animate({
            opacity: 1
        }, 1000 * 0.5, Quint.easeOut))
    }
    var f = jQuery('<div/>'),
        l,
        a = 1,
        v,
        y,
        h = v,
        c = y,
        p = !0,
        e,
        o,
        s;
    return u === !1 && (p = !1),
        l = r !== null ? r : !1,
        e = n,
        jQuery(e).css({
            position: 'absolute',
            top: '0px',
            left: '0px'
        }),
        jQuery(f).append(e),
        o = t,
        jQuery(o).css({
            position: 'absolute',
            top: '0px',
            left: '0px'
        }),
        jQuery(f).append(o),
        s = i,
        jQuery(s).css({
            position: 'absolute',
            top: '0px',
            left: '0px'
        }),
        jQuery(f).append(s),
        jQuery(f).bind('mouseover', w),
        jQuery(f).bind('mouseout', b),
        jQuery(s).fadeTo(0, 0),
        l || (jQuery(o).stop(), jQuery(o).fadeTo(0, 0)),
        f.active = function (n) {
            n ? (l = !0, jQuery(o).stop(!0, !1).animate({
                opacity: a
            }, 1000 * 0.5, Quint.easeOut), jQuery(e).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut), jQuery(s).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut))  : (l = !1, jQuery(e).stop(!0, !1).animate({
                opacity: a
            }, 1000 * 0.5, Quint.easeOut), jQuery(o).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut), jQuery(s).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut))
        },
        f.alpha = function (n) {
            a = n
        },
        f.init = function () {
            v = jQuery(e).width(),
                y = jQuery(e).height()
        },
        f.scaleX = function (n) {
            n >= 0 && (h = v * n, Resizer.resize(e, h, c), Resizer.resize(o, h, c), Resizer.resize(s, h, c))
        },
        f.scaleY = function (n) {
            n >= 0 && (c = y * n, Resizer.resize(e, h, c), Resizer.resize(o, h, c), Resizer.resize(s, h, c))
        },
        f
}
function BuyBtn() {
    function f() {
        jQuery(n).css({
            cursor: 'pointer'
        }),
            r = AssetLoader.getAsset('highlights_menu_buyBtn'),
            jQuery(r).css({
                position: 'absolute',
                top: '15px',
                left: '0px'
            }),
            jQuery(n).append(r),
            u = AssetLoader.getAsset('highlights_menu_hover_buyBtn'),
            jQuery(u).css({
                position: 'absolute',
                top: 15,
                left: 0,
                opacity: 0
            }),
            jQuery(n).append(u),
            i = AssetLoader.getAsset('Beolit12-shadow01_down'),
            jQuery(i).css({
                position: 'absolute',
                top: 35,
                left: 125
            }),
            jQuery(n).append(i),
            t = AssetLoader.getAsset('highlights_menu_buyBtn_beoli'),
            jQuery(t).css({
                position: 'absolute',
                top: 0,
                left: 155
            }),
            jQuery(n).append(t);
        var f = General.getNewDiv();
        jQuery(f).css({
            position: 'absolute',
            color: '#de0033',
            top: '33px',
            width: '80px',
            'font-size': '12px',
            'line-height': '14px',
            'font-family': 'GothamBold',
            left: '60px'
        }),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && jQuery(f).css({
            'font-family': 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'
        }),
            jQuery(f).html('BUY<br />BEOLIT 12'),
            jQuery(n).append(f),
            jQuery(n).bind('click', s),
            jQuery(n).bind('mouseover', e),
            jQuery(n).bind('mouseout', o)
    }
    function e() {
        jQuery(t).stop(!0, !1).animate({
            top: - 20
        }, 2000, Elastic.easeOut),
            jQuery(i).stop(!0, !1).animate({
                opacity: 0.2
            }, 2000, Elastic.easeOut),
            jQuery(r).stop(!0, !1).delay(1000 * 0.2).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut),
            jQuery(u).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * 0.5, Quint.easeOut)
    }
    function o() {
        jQuery(t).stop(!0, !1).animate({
            top: 0
        }, 1000 * 0.7, Quint.easeInOut),
            jQuery(i).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * 0.7, Quint.easeInOut),
            jQuery(r).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * 0.5, Quint.easeOut),
            jQuery(u).stop(!0, !1).delay(1000 * 0.2).animate({
                opacity: 0
            }, 1000 * 0.5, Quint.easeOut)
    }
    function s() {
        CustomGoogleTracking.trackEvent('Highlights', 'Store Click', 'Buy Beolit 12'),
            document.location = '#/buy',
            IUMTracking.track('notify')
    }
    var n = jQuery('<div/>'),
        t,
        i,
        r,
        u;
    return f(),
        n
}
function ImageSwapper(n, t, i) {
    function y() {
        var a,
            t,
            f,
            g,
            nt,
            v,
            l,
            y,
            n,
            w,
            d;
        if (u.appendChild(r), a = General.getNewDiv(), a.style.backgroundImage = 'url(/layouts/SBV-Custom/HMProductPage/assets/images/navigation/pagingBGLight_left.png)', a.style.width = '23px', a.style.height = '32px', t = General.getNewDiv(), t.style.backgroundImage = 'url(/layouts/SBV-Custom/HMProductPage/assets/images/navigation/pagingLightBG_middle.png)', t.style.width = '27px', t.style.height = '32px', t.style.left = '23px', jQuery(t).css({
            width: 9 + e * 15 + 9 - 42
        }), f = General.getNewDiv(), f.style.backgroundImage = 'url(/layouts/SBV-Custom/HMProductPage/assets/images/navigation/pagingLightBG_right.png)', f.style.width = '27px', f.style.height = '32px', f.style.left = parseInt(t.style.width) + parseInt(t.style.left) + 'px', r.appendChild(a), r.appendChild(t), r.appendChild(f), i == !0) {
            g = new Image,
                g.src = '/layouts/SBV-Custom/HMProductPage/assets/V1se/btn_cart_over.png',
                nt = new Image,
                nt.src = '/layouts/SBV-Custom/HMProductPage/assets/V1se/btn_cart.png',
                v = new Btn(nt, g, !1, !0),
                v.style.top = '-1px',
                v.style.left = '152px';
            function tt() {
                window.location.href = 'http://beoplay.com/FindStore'
            }
            v.addEventListener(MouseEvent.MOUSE_DOWN, tt, !1),
                r.appendChild(v)
        }
        for (l = 0; l < e; l += 1) y = c[l],
            n = General.getNewDiv(),
            s = '/' + y.parentNode.getAttribute('data-path') + '/' + y.getAttribute('data-path'),
            n.style.width = '10px',
            n.style.height = '10px',
            n.style.top = '12px',
            n.style.left = 14 + 15 * l + 'px',
            n.style.cursor = 'pointer',
            w = AssetLoader.getAsset('pagingLight_circle'),
            jQuery(w).css({
                width: 10,
                height: 10,
                opacity: 1,
                position: 'absolute'
            }),
            jQuery(n).append(w),
            d = AssetLoader.getAsset('pagingLight_circle_over'),
            jQuery(d).css({
                width: 10,
                height: 10,
                opacity: 0,
                position: 'absolute'
            }),
            jQuery(n).append(d),
            n._over = d,
            n._out = w,
            n._xml = y,
            n._id = l,
            r.appendChild(n),
            jQuery(n).bind(MouseEvent.MOUSE_DOWN, p),
            jQuery(n).bind(MouseEvent.MOUSE_OVER, b),
            jQuery(n).bind(MouseEvent.MOUSE_OUT, k),
            h.push(n);
        r.style.top = '60px';
        try {
            u.selectItem(o)
        } catch (it) {
        }
        jQuery(r).animate({
            top: 0
        }, 900, 'easeInOutQuart')
    }
    function p() {
        var n = this._xml,
            u = '/' + n.parentNode.getAttribute('data-path') + '/' + n.getAttribute('data-path'),
            t;
        if (Assets.SITE_ID == 'beoplayForm2') {
            t = this._id,
                s = n.getAttribute('data-path'),
                GlobalController.changeColor(t);
            var i = ContentController.getCurrentTemplate() - 1,
                f = ContentController._activeTemplates[i],
                r = f.menuTemplate;
            r && r.updateColor(t, i)
        } else ContentController.path(u)
    }
    function w(n) {
        f != null && a(f),
            l(n),
            f = n
    }
    function b() {
        l(this)
    }
    function l(n) {
        jQuery(n._out).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.4, 'easeOutQuart'),
            jQuery(n._over).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * 0.4, 'easeOutQuart')
    }
    function k() {
        var n = this;
        f != n && a(n)
    }
    function a(n) {
        jQuery(n._out).stop(!0, !1).animate({
            opacity: 1
        }, 1000 * 0.4, 'easeOutQuart'),
            jQuery(n._over).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.4, 'easeOutQuart')
    }
    var u = General.getNewDiv(),
        r = General.getNewDiv(),
        h = [
        ],
        f = null,
        d = n,
        c = jQuery(n).children(),
        e = c.length,
        o = 0,
        v = 63 + e * 15 + 9 - 62,
        s;
    return AssetLoader.loadGroup(new AssetGroup(['/layouts/SBV-Custom/HMProductPage/assets/images/navigation/pagingLight_circle.png',
        '/layouts/SBV-Custom/HMProductPage/assets/images/navigation/pagingLight_circle_over.png'], y), !0),
        u.getWidth = function () {
            return v
        },
        u.selectItem = function (n) {
            o = n;
            var t = h[o];
            t && w(t)
        },
        u.getCurHash = function () {
            return s
        },
        u
}
function SoundBoard(n, t) {
    function o(n) {
        var t = n.keyCode;
        h(t)
    }
    function h(n) {
        CustomGoogleTracking.trackEvent('Highlights', 'Engagement Click', 'Sound/PlayBass');
        var n = String.fromCharCode(n).toLowerCase(),
            t = l(n);
        t && (clearTimeout(f), jQuery(t._press).stop(!0, !1).animate({
            opacity: 1
        }, 1000 * 0.2, Quint.easeOut), jQuery(t._press).delay(1000 * 0.2).animate({
            opacity: 0
        }, 1000 * 0.2, Quint.easeOut), t._sound.play(), RumbleEngine.start(), f = setTimeout(RumbleEngine.stop, 500))
    }
    function c(n) {
        if (n) {
            clearTimeout(f),
                jQuery(n._press).stop(!0, !1).animate({
                    opacity: 1
                }, 1000 * 0.2, Quint.easeOut),
                jQuery(n._press).delay(1000 * 0.2).animate({
                    opacity: 0
                }, 1000 * 0.2, Quint.easeOut);
            try {
                n._sound.play()
            } catch (t) {
            }
            RumbleEngine.start(),
                f = setTimeout(RumbleEngine.stop, 500)
        }
    }
    function l(n) {
        for (var f = r.length, i, u, t = 0; t < f; t += 1) if (i = r[t], i._value == n) {
            u = i;
            break
        }
        return u
    }
    function a() {
        r = [
        ];
        var t,
            c = e.length,
            n,
            f = 19,
            h = 0,
            o = 37;
        for (i.appendChild(u), t = 0; t < c; t += 1) n = v(e[t]),
            n.style.left = f + 'px',
            n.style.top = h + 'px',
            n.style.cursor = 'pointer',
            u.appendChild(n),
            r.push(n),
            f += o,
                t == 1 ? f += o : t == 4 && (f = 0, h += o),
            jQuery(n).bind(MouseEvent.MOUSE_DOWN, s)
    }
    function s() {
        CustomGoogleTracking.trackEvent('Highlights', 'Engagement Click', 'Sound/PlayBass'),
            c(this)
    }
    function v(n) {
        var t = General.getNewDiv(),
            s = n,
            i = n.split('-'),
            f = i.pop(),
            r,
            u,
            e,
            o;
        return i.push('press'),
            i.push(f),
            assetPressUrl = i.join('-'),
            r = AssetLoader.getAsset(s),
            u = AssetLoader.getAsset(assetPressUrl),
            jQuery(r).css({
                position: 'absolute'
            }),
            jQuery(u).css({
                position: 'absolute',
                opacity: 0
            }),
            jQuery(t).append(r),
            jQuery(t).append(u),
            t._out = r,
            t._press = u,
            t._value = f.replace('-', '').toLowerCase(),
            e = {
                id: t._value,
                loops: 0,
                volume: 100,
                url: '/layouts/SBV-Custom/HMProductPage/assets/sound/' + t._value + '.mp3'
            },
            o = soundManager.createSound(e),
            t._sound = o,
            t
    }
    var i = General.getNewDiv(),
        e = n,
        r,
        u = General.getNewDiv(),
        y = t,
        f;
    return i.kill = function () {
        jQuery(document).unbind('keydown', o);
        for (var i = r.length, t, n = 0; n < i; n += 1) t = r[n],
            jQuery(t).unbind(MouseEvent.MOUSE_DOWN, s)
    },
        i.init = function () {
            u.style.top = '100px',
                i.style.width = '300px',
                i.style.height = '91px',
                i.style.overflow = 'hidden',
                a(),
                jQuery(document).bind('keydown', o)
        },
        i.animateIn = function () {
            jQuery(u).animate({
                top: 0
            }, 1000, Quint.easeInOut)
        },
        i.animateOut = function () {
            jQuery(u).animate({
                top: 100
            }, 1000, Quint.easeInOut)
        },
        i
}
function SpinningPreloader(n, t) {
    function s() {
        o && jQuery(i).css({
            left: Math.floor(u * 0.5) - 54,
            top: Math.floor(f * 0.5) - 54 - e
        })
    }
    var r = General.getNewDiv(),
        i,
        o = !1,
        u,
        f,
        e;
    return r.init = function (u) {
        e = n ? n : 0,
            u && (r.style.backgroundColor = u),
            i = General.getNewDiv(),
            r.appendChild(i),
                Assets.SITE_ID == 'beoplayh3' && t ? (jQuery(i).append(AssetLoader.getAsset('bgcircle_dark')), jQuery(i).append(AssetLoader.getAsset('loadingCircle_dark').css({
            margin: 4
        })), jQuery(i).append(AssetLoader.getAsset('Generic-preloader_dark').css({
            margin: 4
        })))  : (jQuery(i).append(AssetLoader.getAsset('bgCircle')), jQuery(i).append(AssetLoader.getAsset('loadingCircle').css({
            margin: 4
        })), jQuery(i).append(AssetLoader.getAsset('genericPreloader').css({
            margin: 4
        }))),
            o = !0,
            s()
    },
        r.resize = function (n, t) {
            n && (u = n),
                t && (f = t),
                r.style.width = u + 'px',
                r.style.height = f + 'px',
                s()
        },
        r
}
function HighlightsHeader() {
    function a() {
        n = General.getNewDiv(),
            o.appendChild(n),
            jQuery(n).css({
                opacity: 0
            }),
            n.style.width = u + 'px',
            n.style.height = '20px',
            n.style.fontFamily = 'GothamBold',
            n.style.overflow = 'hidden',
            n.style.color = '#c4c4c5',
            n.style.fontSize = '13px',
            n.style.left = '5px',
            n.style.textAlign = h,
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (n.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', n.style.fontWeight = 'bold'),
            jQuery(n).text(c)
    }
    function v() {
        s = General.getNewDiv(),
            s.style.top = '17px',
            o.appendChild(s);
        var e = l.split('<br />'),
            n,
            c = e.length,
            a,
            v = 0,
            t = 70,
            y = Math.floor(t * 0.9);
        for (r = [
        ], f = General.getNewDiv(), f.style.width = u + 'px', f.style.height = t * c + 'px', f.style.backgroundColor = '#ff0000', i = 0; i < c; i += 1) a = e[i],
            n = General.getNewDiv(),
            n.style.top = v + 'px',
            n.style.heigth = t + 'px',
            n.style.width = u + 'px',
            n.style.overflow = 'hidden',
            n.style.fontFamily = 'GothamThin',
            n.style.fontSize = t + 'px',
            n.style.color = '#666462',
            n.style.textAlign = h,
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (n.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'),
            jQuery(n).css({
                opacity: 0
            }),
            jQuery(n).text(a),
            s.appendChild(n),
            v += y,
            r.push(n)
    }
    var t = General.getNewDiv(),
        c,
        l,
        u,
        e,
        o = General.getNewDiv(),
        n,
        s,
        r,
        f,
        h = 'left';
    return t.init = function (n, i, r, f) {
        c = n,
            l = i,
            u = r,
            f && (h = f),
            e = General.getNewDiv(),
            t.appendChild(e),
            e.style.width = u + 'px',
            jQuery(e).append(o),
            a(),
            v()
    },
        t.animateIn = function () {
            var t = 500,
                u,
                i;
            for (jQuery(n).delay(t).animate({
                opacity: 1
            }, 600, Quart.easeOut), t += 100, u = r.length, i = 0; i < u; i += 1) jQuery(r[i]).delay(t).animate({
                opacity: 1
            }, 600, Quart.easeOut),
                t += 100
        },
        t.animateOut = function () {
            var t = 500,
                u,
                i;
            for (jQuery(n).stop(!0, !1).delay(t).animate({
                opacity: 0
            }, 600, Quart.easeOut), t -= 100, u = r.length, i = 0; i < u; i += 1) jQuery(r[i]).stop(!0, !1).delay(t).animate({
                opacity: 0
            }, 600, Quart.easeOut),
                t -= 100
        },
        t.resize = function (n) {
            var h;
            f.style.height = n + 'px';
            var u,
                e = r.length,
                o = 0,
                t = Math.floor(n / e),
                s = 70;
            for (t > s && (t = s), h = Math.floor(t * 0.9), i = 0; i < e; i += 1) u = r[i],
                u.style.top = o + 'px',
                u.style.height = t + 'px',
                u.style.fontSize = t + 'px',
                o += h
        },
        t.innerContainer = function () {
            return o
        },
        t.titleLines = function () {
            return r
        },
        t.littleHeader = function () {
            return n
        },
        t
}
function HighlightsColumn() {
    function s() {
        var s = AssetLoader.getAsset('sound-template-spacer');
        jQuery(t).append(s),
            jQuery(s).css({
                position: 'absolute',
                top: r
            }),
            n = General.getNewDiv(),
            t.appendChild(n),
            n.style.width = '400px',
            n.style.top = r + 20 + 'px',
            n.style.textAlign = 'center',
            n.style.left = '50px',
            n.style.color = '#e00034',
            n.style.fontFamily = 'GothamBold',
            n.style.fontSize = '15px',
            n.style.lineHeight = '17px',
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (n.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', n.style.fontWeight = 'bold'),
            u = jQuery('<div/>'),
            jQuery(u).append(e),
            jQuery(n).append(u),
            i = General.getNewDiv(),
            t.appendChild(i),
            i.style.width = n.style.width,
            i.style.textAlign = 'center',
            i.style.left = n.style.left,
            i.style.color = '#514f4e',
            i.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif',
            i.style.fontSize = '13px',
            i.style.lineHeight = '17px',
            i.style.top = parseInt(n.style.top) + jQuery(n).height() + 6 + 'px',
            f = jQuery('<div/>'),
            jQuery(f).append(o),
            jQuery(i).append(f)
    }
    var t = General.getNewDiv(),
        e,
        o,
        r = 0,
        n,
        i,
        u,
        f;
    return t.init = function (n, i, u) {
        jQuery(t).css({
            opacity: 0
        }),
            e = n,
            o = i,
            u !== null && (r = u),
            _container = General.getNewDiv(),
            t.appendChild(_container),
            s()
    },
        t.animateIn = function () {
            jQuery(t).animate({
                opacity: 1
            }, 800, Quart.easeOut)
        },
        t.animateOut = function () {
            jQuery(t).animate({
                opacity: 0
            }, 800, Quart.easeOut)
        },
        t.header = function () {
            return n
        },
        t.body = function () {
            return i
        },
        t
}
function RatioMenuWithIcons(n, t) {
    function v() {
        if (u = new Slice3Image, i.appendChild(u), Assets.IS_CHROME_IOS) {
            var h = 3,
                t = 0,
                f = AssetLoader.getAsset(r + '-left'),
                o = AssetLoader.getAsset(r + '-center'),
                s = AssetLoader.getAsset(r + '-right');
            f.get(0).onload = n,
                o.get(0).onload = n,
                s.get(0).onload = n;
            function n(n) {
                var i,
                    c;
                t++,
                    i = n.target || n.currentTarget || n.srcElement,
                    i._width = i.naturalWidth || i.width,
                    i._height = i.naturalHeight || i.height,
                    t === h && (c = {
                    left: f.get(0),
                    right: s.get(0),
                    center: o.get(0)
                }, u.init(AssetLoader.getAsset(r + '-left'), AssetLoader.getAsset(r + '-center'), AssetLoader.getAsset(r + '-right'), c), setTimeout(function () {
                    u.width(e)
                }, 1000))
            }
        } else u.init(AssetLoader.getAsset(r + '-left'), AssetLoader.getAsset(r + '-center'), AssetLoader.getAsset(r + '-right'))
    }
    function y() {
        var t = DataSelectors.getHtmlByDataName(s, 'header'),
            n;
        t ? (o = 155, Assets.SITE_ID == 'beoplayv1' && (o += 70), n = General.getNewDiv(), n.style.color = '#ffffff', n.style.top = '17px', n.style.fontSize = '12px', n.style.whiteSpace = 'noWrap', n.style.lineHeight = '14px', n.style.fontFamily = 'GothamBold', n.style.left = '20px', BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (n.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', n.style.bold = 'bold'), jQuery(n).html(t), i.appendChild(n))  : o = 12
    }
    function p() {
        f = [
        ];
        var v = h.length,
            t,
            r,
            y,
            c,
            n,
            g = StrUtils.stripExtension(a),
            k,
            p,
            s = o,
            d = u.getHeight();
        for (l = [
        ], t = 0; t < v; t += 1) c = h[t],
            r = AssetLoader.getAsset(c + '-over'),
            y = AssetLoader.getAsset(c + '-out'),
            n = new Btn(y, r),
            n.setTransitionSpeed(0.4),
            n.setEaseType('easeInOutQuad'),
            jQuery(i).append(n),
            p = Math.floor(d * 0.5 - jQuery(r).height() * 0.5),
            jQuery(n).css({
                position: 'absolute',
                left: s,
                top: p
            }),
            n.init(),
            s += Math.floor(jQuery(r).width()),
            n._id = t,
            f.push(n),
            jQuery(n).bind('click', b),
            t != v - 1 && (s += 11),
            n._iconOver = r,
            l.push(n),
            k = null;
        s += 12,
            e = s,
            u.width(e),
            (BrowserDetect.BROWSER_NAME == 'Chrome' || Assets.IS_CHROME_IOS) && new CustomInterval(10, 10, w, !0)
    }
    function w(n) {
        for (var l = f.length, r, s, c, t = o, a = u.getHeight(), h, i = 0; i < l; i += 1) r = f[i],
            s = r._seperator,
            h = r._iconOver,
            c = Math.floor(a * 0.5 - jQuery(h).height() * 0.5),
            jQuery(r).css({
                left: t,
                top: c
            }),
            t += Math.floor(jQuery(h).width()),
            s && (jQuery(s).css({
            left: t,
            top: '28px'
        }), t += jQuery(s).width() - 1);
        t += 12,
            e = t,
            u.width(e),
            n < 4 && jQuery(window).trigger('resize')
    }
    function b(n) {
        var r = this;
        return (c !== r._id || t === !0) && (c = r._id, i.selectById(c), jQuery(i).trigger('select')),
            n.stopPropagation(),
            !1
    }
    var i = General.getNewDiv(),
        s = n,
        r,
        u,
        f,
        h,
        a,
        c = 0,
        l,
        o = 0,
        e = 0;
    return i.init = function () {
        v(),
            y(),
            p(),
            i.selectById(0)
    },
        i.kill = function () {
            for (var i = f.length, t, n = 0; n < i; n += 1) t = f[n],
                t.kill()
        },
        i.applyAssets = function (n) {
            h = [
            ];
            for (var u = jQuery(DataSelectors.getXmlByDataName(s, 'icons')).children(), e = u.length, i, f, t = 0; t < e; t += 1) f = u[t],
                i = jQuery(f).text(),
                n.push(i + '-out.png'),
                n.push(i + '-over.png'),
                h.push(i);
            r = DataSelectors.getXmlByDataName(s, 'slice3Image').text(),
                n.push(r + '-left.png'),
                n.push(r + '-center.png'),
                n.push(r + '-right.png'),
                a = DataSelectors.getXmlByDataName(s, 'seperator').text(),
                n.push(a)
        },
        i.selectById = function (n) {
            for (var r = l.length, t, i = 0; i < r; i += 1) t = l[i],
                    i == n ? t.isLocked() || (t.forceOver(), t.lock(!0))  : t.isLocked() && (t.forceOut(), t.lock(!1))
        },
        i.getWidth = function () {
            return e
        },
        i.getId = function () {
            return c
        },
        i
}
function StandardModuleHeader(n, t) {
    function e() {
        r = General.getNewDiv(),
            r.style.fontFamily = 'GothamBold',
            r.style.fontSize = '13px',
            r.style.width = '425px',
            r.style.color = '#ffffff',
            r.style.cursor = 'Default',
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (r.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', r.style.fontWeight = 'bold'),
            jQuery(r).html(DataSelectors.getHtmlByDataName(f, 'subHeader')),
            u.appendChild(r),
            i = General.getNewDiv(),
            i.style.fontFamily = 'GothamThin',
            t ? (i.style.fontSize = t + 'px', i.style.lineHeight = t + 'px')  : (i.style.fontSize = '38px', i.style.lineHeight = '38px'),
            i.style.width = '960px',
            i.style.top = '20px',
            i.style.left = Assets.SITE_ID == 'beoplayEarset3' ? '-5px' : '-2px',
            i.style.color = '#ffffff',
            i.style.cursor = 'Default',
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (i.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'),
            jQuery(i).html(DataSelectors.getHtmlByDataName(f, 'header')),
            u.appendChild(i)
    }
    var u = General.getNewDiv(),
        f = n,
        r,
        i;
    return u.init = function () {
        e()
    },
        u.changeColor = function (n) {
            var t = jQuery(r).children('span');
            jQuery(t).stop(!0, !0).animate({
                color: n
            }, {
                duration: 500
            }),
                jQuery(r).stop(!0, !0).animate({
                    color: n
                }, {
                    duration: 500
                })
        },
        u
}
function ColorMenuBtns(n, t, i) {
    function h() {
        r.id = 0,
            r.updateButtons = o,
            Assets.SITE_ID == 'beoplaya9' && (e = jQuery('<div />').css({
            position: 'absolute',
            width: 100,
            height: 25,
            background: 'green',
            textAlign: 'center',
            top: - 30,
            left: - 30,
            color: '#939291',
            background: 'url(' + AssetLoader.getAsset('color_identifier_line').get(0).src + ') no-repeat',
            backgroundPosition: 'center bottom',
            visibility: 'hidden'
        }).html('Dummy'), jQuery(r).append(e));
        var i = 0,
            h = 0,
            a = n.length,
            t;
        for (f = [
        ], i; i < a; i++) t = new ColorBtn(AssetLoader.getAsset('menu_btn_hole'), n[i], u),
            Assets.SITE_ID == 'beoplaya9' && (jQuery(t).data('name', n[i].name), jQuery(t).data('index', i)),
                Assets.SITE_ID == 'beoplayEarset3' ? (i > 4 && (h = 140), jQuery(t).css({
            left: h + 50 * i
        }))  : Assets.SITE_ID == 'beoplayForm2' ? jQuery(t).css({
            left: 50 * i
        })  : jQuery(t).css({
            left: u.buttonSpacing * i
        }),
            jQuery(r).append(t),
            General.disableSelection(t),
            f.push(t),
            jQuery(t).data('id', i),
                BrowserDetect.OS == 'iPad' ? jQuery(t).bind(TouchEvent.TOUCH_START, s)  : (jQuery(t).bind(MouseEvent.MOUSE_DOWN, s), BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || (jQuery(t).bind(MouseEvent.MOUSE_OVER, c), jQuery(t).bind(MouseEvent.MOUSE_OUT, l)));
        setTimeout(function () {
            var n = u.defaultSelection,
                t;
            Assets.SITE_ID == 'beoplayEarset3' && (t = HeadphoneCableController.getCurrentColor(), t == 'green' ? n = 1 : t == 'orange' ? n = 2 : t == 'black' ? n = 3 : t == 'white' && (n = 4)),
                o(n)
        }, 20)
    }
    function s() {
        var n = jQuery(this).data('id');
        t != null ? t.tweening || (Assets.SITE_ID == 'beoplaya9' ? jQuery(r).trigger('colorChange', [
            {
                id: n,
                index: u.index,
                name: jQuery(this).data('name')
            }
        ])  : jQuery(r).trigger('colorChange', [
            {
                id: n
            }
        ]), Assets.SITE_ID !== 'beoplayEarset3' && o(n))  : (Assets.SITE_ID == 'beoplaya9' ? jQuery(r).trigger('colorChange', [
            {
                id: n,
                index: u.index,
                name: jQuery(this).data('name')
            }
        ])  : jQuery(r).trigger('colorChange', [
            {
                id: n
            }
        ]), Assets.SITE_ID !== 'beoplayEarset3' && o(n))
    }
    function c(n) {
        var i = n.originalEvent.target,
            u = jQuery(i).css('cursor'),
            r,
            t;
        u != 'default' && TweenMax.to(i, 0.15, {
            css: {
                opacity: 0.65
            },
            ease: Quint.easeOut,
            overwrite: 'allOnStart'
        }),
            Assets.SITE_ID == 'beoplaya9' && (r = parseInt(jQuery(this).css('left')) - 30, t = jQuery(this).data('name'), t = a(t), jQuery(e).css({
            visibility: 'visible',
            left: r
        }).html(t))
    }
    function l(n) {
        var t = n.originalEvent.target;
        TweenMax.to(t, 0.15, {
            css: {
                opacity: 1
            },
            ease: Quint.easeOut,
            overwrite: 'allOnStart'
        }),
            Assets.SITE_ID == 'beoplaya9' && jQuery(e).css({
            visibility: 'hidden'
        })
    }
    function o(n) {
        var t = 0,
            i = f.length;
        for (t; t < i; t++) t === n ? f[t].activate()  : f[t].deactivate()
    }
    function a(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }
    var r = jQuery('<div/>').css({
            position: 'absolute',
            '-webkit-transform': 'translate3d( 0, 0, 0)',
            '-webkit-backface-visibility': 'hidden'
        }),
        f,
        e,
        u = {
            buttonSpacing: 71,
            buttonDiameter: 43,
            index: 0,
            defaultSelection: 0
        };
    return u = jQuery.extend(!0, {
    }, u, i),
        h(),
        r
}
function ColorBtn(n, t, i) {
    function c() {
        u = jQuery('<div/>').css({
            position: 'absolute'
        }),
            jQuery(u).append(t),
            jQuery(e).append(n),
            jQuery(e).append(u),
            jQuery(n).css({
                cursor: 'pointer'
            }),
            jQuery(t).css({
                cursor: 'pointer'
            }),
            setTimeout(function () {
                if (r = jQuery(t).width(), o = jQuery(t).height(), Assets.SITE_ID == 'beoplayForm2' || Assets.SITE_ID === 'beoplayv1' ? (r = f.buttonDiameter, o = f.buttonDiameter)  : Assets.SITE_ID === 'beoplayEarset3' && (r = 43, o = 44), BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 9) {
                    jQuery(t).css({
                        maxWidth: '100%',
                        maxHeight: '100%'
                    });
                    var n = t
                }
                t = jQuery('<div/>').css({
                    background: 'url(' + jQuery(t).get(0).src + ')',
                    width: r,
                    height: o,
                    backgroundSize: '100%'
                }),
                    BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 9 && (jQuery(t).css({
                    background: 'none'
                }), jQuery(t).append(n)),
                    jQuery(u).children().eq(0).remove(),
                    jQuery(u).append(t)
            }, 10)
    }
    var e = jQuery('<div/>').css({
            position: 'absolute',
            '-webkit-user-select': 'none'
        }),
        r,
        o,
        u,
        s,
        h = !1,
        f = {
            buttonDiameter: 43
        };
    return f = jQuery.extend(!0, {
    }, f, i),
        e.activate = function () {
            h = !0,
                jQuery(n).css({
                    cursor: 'default'
                }),
                jQuery(t).css({
                    cursor: 'default'
                });
            var i = 2,
                e = 1;
            f.buttonDiameter == 40 && (i = 0, e = 1),
                jQuery(u).css({
                    left: e,
                    top: e
                }),
                jQuery(t).css({
                    width: r - i,
                    height: r - i,
                    opacity: 1
                })
        },
        e.deactivate = function () {
            h = !1,
                jQuery(n).css({
                    cursor: 'pointer'
                }),
                jQuery(t).css({
                    cursor: 'pointer'
                });
            var i = 12,
                e = 6;
            f.buttonDiameter == 40 && (i = 8, e = 5),
                jQuery(u).css({
                    left: e,
                    top: e
                }),
                jQuery(t).css({
                    width: r - i,
                    height: r - i,
                    opacity: 1
                })
        },
        c(),
        e
}
function SocialMenu() {
    function v() {
        var o = AssetLoader.getAsset('socialOverlay_bg'),
            e,
            i,
            f;
        jQuery(n).append(o),
            e = TextLib.getTextField('GothamBold', 12, !1),
            jQuery(e).css({
                color: '#656565',
                left: 15,
                top: 11
            }),
            jQuery(e).append('SHARE'),
            jQuery(n).append(e),
            jQuery(n).bind(MouseEvent.MOUSE_OVER, k),
            jQuery(n).bind(MouseEvent.MOUSE_OUT, d),
            i = jQuery('<div/>').css({
                position: 'absolute',
                width: 24,
                height: 32,
                cursor: 'pointer'
            }),
            f = AssetLoader.getAsset('socialOverlay_btn_facebook'),
            jQuery(i).css({
                left: 71,
                top: 1
            }),
            jQuery(n).append(i),
            jQuery(f).css({
                left: 8,
                top: 9,
                opacity: 0
            }),
            jQuery(i).append(f),
            jQuery(i).attr({
                id: 0
            }),
            jQuery(i).bind(MouseEvent.CLICK, y),
            jQuery(i).bind(MouseEvent.MOUSE_OVER, r),
            jQuery(i).bind(MouseEvent.MOUSE_OUT, u),
            t.push(f),
            i = jQuery('<div/>').css({
                position: 'absolute',
                width: 24,
                height: 32,
                cursor: 'pointer'
            }),
            f = AssetLoader.getAsset('socialOverlay_btn_pintrest'),
            jQuery(i).css({
                left: 97,
                top: 1
            }),
            jQuery(n).append(i),
            jQuery(f).css({
                left: 6,
                top: 7,
                opacity: 0
            }),
            jQuery(i).append(f),
            jQuery(i).attr({
                id: 1
            }),
            jQuery(i).addClass('pin-it-button'),
            jQuery(i).attr({
                'count-layout': 'none'
            }),
            jQuery(i).bind(MouseEvent.CLICK, p),
            jQuery(i).bind(MouseEvent.MOUSE_OVER, r),
            jQuery(i).bind(MouseEvent.MOUSE_OUT, u),
            t.push(f),
            i = jQuery('<div/>').css({
                position: 'absolute',
                width: 24,
                height: 32,
                cursor: 'pointer'
            }),
            f = AssetLoader.getAsset('socialOverlay_btn_twitter'),
            jQuery(i).css({
                left: 129,
                top: 1
            }),
            jQuery(n).append(i),
            jQuery(f).css({
                left: 4,
                top: 9,
                opacity: 0
            }),
            jQuery(i).append(f),
            jQuery(i).attr({
                id: 2
            }),
            jQuery(i).bind(MouseEvent.CLICK, w),
            jQuery(i).bind(MouseEvent.MOUSE_OVER, r),
            jQuery(i).bind(MouseEvent.MOUSE_OUT, u),
            t.push(f),
            i = jQuery('<div/>').css({
                position: 'absolute',
                width: 24,
                height: 32,
                cursor: 'pointer'
            }),
            f = AssetLoader.getAsset('socialOverlay_btn_mail'),
            jQuery(i).css({
                left: 159,
                top: 1
            }),
            jQuery(n).append(i),
            jQuery(f).css({
                left: 4,
                top: 10,
                opacity: 0
            }),
            jQuery(i).append(f),
            jQuery(i).attr({
                id: 3
            }),
            jQuery(i).bind(MouseEvent.CLICK, b),
            jQuery(i).bind(MouseEvent.MOUSE_OVER, r),
            jQuery(i).bind(MouseEvent.MOUSE_OUT, u),
            t.push(f)
    }
    function y() {
        var n = window.location.href,
            r = n.split('#'),
            t,
            i;
        n = r[0],
            t = Assets.SITE_ID.toUpperCase(),
            i = t.replace('BEOPLAY', ''),
            SocialShare.facebookShare(n, 'B&O Play ' + i)
    }
    function p() {
        window.open('http://pinterest.com/beoplay/', '_blank', 'width=1024,height=678,scrollbars=1,resizable=1')
    }
    function w() {
        var n = window.location.href,
            r = n.split('#'),
            t,
            i;
        n = r[0],
            t = Assets.SITE_ID.toUpperCase(),
            i = t.replace('BEOPLAY', ''),
            SocialShare.twitterShare(n, 'B&O Play ' + i)
    }
    function b() {
        var n = window.location.href,
            r = n.split('#'),
            t,
            i;
        n = r[0],
            t = Assets.SITE_ID.toUpperCase(),
            i = t.replace('BEOPLAY', ''),
            SocialShare.mailShare(n, 'B&O Play ' + i)
    }
    function r() {
        var n = jQuery(this).attr('id');
        TweenMax.to(t[n], 0.3, {
            css: {
                opacity: 1
            }
        })
    }
    function u() {
        var n = jQuery(this).attr('id');
        TweenMax.to(t[n], 0.3, {
            css: {
                opacity: 0
            }
        })
    }
    function k() {
        c = !0
    }
    function d() {
        c = !1
    }
    function g() {
        jQuery(e).stop(!0, !1).animate({
            opacity: 0
        }, 500, 'easeOutQuart'),
            jQuery(o).stop(!0, !1).animate({
                opacity: 1
            }, 500, 'easeOutQuart'),
            jQuery(n).stop(!0, !1).animate({
                opacity: 1
            }, 500, 'easeOutQuart'),
            jQuery(n).css({
                visibility: 'visible'
            }),
            s && clearTimeout(s),
            h = !0
    }
    function nt() {
        a(),
            h || l()
    }
    function a() {
        s = setTimeout(function () {
            c ? a()  : l()
        }, 500)
    }
    function l() {
        h = !1,
            jQuery(e).stop(!0, !1).animate({
                opacity: 1
            }, 500, 'easeOutQuart'),
            jQuery(o).stop(!0, !1).animate({
                opacity: 0
            }, 500, 'easeOutQuart'),
            jQuery(n).stop(!0, !1).animate({
                opacity: 0
            }, 500, 'easeOutQuart'),
            jQuery(n).css({
                visibility: 'hidden'
            })
    }
    var f = jQuery('<div/>').css({
            position: 'absolute'
        }),
        i = jQuery('<div/>').css({
            position: 'absolute',
            width: 16,
            height: 13,
            cursor: 'pointer'
        }),
        e = AssetLoader.getAsset('leftNav_btn_social_deactive'),
        o = AssetLoader.getAsset('leftNav_btn_social_active').css({
            opacity: 0
        }),
        n = jQuery('<div/>').css({
            position: 'absolute'
        }),
        s,
        h = !1,
        c = !1,
        t = [
        ];
    return function () {
        jQuery(i).append(e),
            jQuery(i).append(o),
            jQuery(f).append(i),
            jQuery(i).bind('mouseover', g),
            jQuery(i).bind('mouseout', nt),
            v(),
            jQuery(f).append(n),
            jQuery(n).css({
                left: 40,
                top: - 9,
                opacity: 0
            }),
            l()
    }(),
        f
}
function GlanceTemplate(n) {
    function p() {
        var n = jQuery(o).children('#smartAnimation');
        a = jQuery(n).children(),
            e = jQuery(n).children().length,
            r = e > 0 ? !0 : !1
    }
    var t = jQuery('<div/>').css({
        position: 'absolute',
        overflow: 'hidden'
    });
    t._h3h6PreventHide = !0;
    var f = n,
        v = f.getAttribute('data-path'),
        y = ContentController.getIndexOfPath(ContentController._xml, v);
    t._templateId = y;
    var c = [
        ],
        r = !1,
        l = [
        ],
        e,
        a,
        o,
        i,
        u,
        s = !1,
        h = !1;
    return t.templateLoad = function (n) {
        function h() {
            ContentController.removePreloader(jQuery(f).parent()),
                _callback(t)
        }
        if (_callback = n, o = jQuery(Assets.SITECORE_DATA).children('#smartPage'), p(), r) {
            var i = 0,
                s = e,
                u;
            for (i; i < s; i++) u = jQuery(a[i]).text(),
                l.push(u),
                c.push(u)
        }
        ContentController.addPreloader(jQuery(f).parent()),
            AssetLoader.loadGroup(new AssetGroup(c, h))
    },
        t.templateIn = function () {
            r && (i = GlanceAnimations.getAnimation(l), jQuery(t).append(i), jQuery(i).css({
                position: 'absolute',
                top: 80
            }), s && t.focusIn()),
                u = jQuery(o).children('#smartProductInfo'),
                jQuery(u).css({
                    position: 'absolute',
                    top: 80
                }),
                jQuery(t).append(u),
                jQuery(t).trigger('onValtechAtAGlanceAppended')
        },
        t.templateOut = function () {
        },
        t.resize = function (n, r) {
            jQuery(t).css({
                width: n,
                height: r
            });
            var f = n * 0.5;
            jQuery(i).css({
                left: f - 550
            }),
                jQuery(u).css({
                    left: f + 30
                })
        },
        t.focusIn = function () {
            s = !0,
                r && !h && i && (i.focusIn(), h = !0)
        },
        t.focusOut = function () {
            s = !1,
                h = !1,
                r && i && i.focusOut()
        },
        t
}
function SectionTemplate(n) {
    function r() {
        jQuery(t).remove(),
            u(),
            ContentController.nextTemplate()
    }
    function u() {
    }
    var t = General.getNewDiv(),
        i = n;
    return t.templateIn = function () {
        var n = General.getNewDiv(),
            r;
        n.style.left = '30px',
            n.style.top = '30px',
            n.style.color = '#ffffff',
            n.style.width = '200px',
            r = '/ ' + jQuery(i).parent().attr('data-path') + ' / ' + jQuery(i).attr('data-path'),
            jQuery(n).text(r),
            t.appendChild(n),
            ContentController.nextTemplate()
    },
        t.templateOut = function () {
            r()
        },
        t.focusIn = function () {
        },
        t.focusOut = function () {
        },
        t.resize = function () {
        },
        t
}
function MenuTemplate(n) {
    trace('MenuTemplate();');
    var t = General.getNewDiv(),
        i = n;
    return t.templateIn = function () {
        var n = General.getNewDiv();
        n.style.backgroundColor = '#ff0000',
            n.style.width = '50px',
            n.style.height = '50px',
            t.appendChild(n)
    },
        t.pathChange = function () {
        },
        t.resize = function (n, t) {
            _background.style.width = n + 'px',
                _background.style.height = t + 'px'
        },
        t
}
function SwapperTemplate(n) {
    var t = General.getNewDiv(),
        i = n,
        f,
        h,
        e,
        r = null,
        u = null,
        s,
        c = 0,
        o;
    return t.templateIn = function () {
        function n() {
            var n = c + 1,
                r;
            n >= e && (n = 0),
                r = '/' + i.getAttribute('data-path') + '/' + i.children[n].getAttribute('data-path'),
                    Assets.SITE_ID == 'beoplayForm2' ? (r = i.children[n].getAttribute('data-path'), t.pathChange(r), ContentController.changeTemplateForModule(5, r), GlobalController.changeColor(n))  : ContentController.path(r)
        }
        function l() {
            var n = c - 1,
                r;
            n < 0 && (n = e - 1),
                r = '/' + i.getAttribute('data-path') + '/' + i.children[n].getAttribute('data-path'),
                    Assets.SITE_ID == 'beoplayForm2' ? (r = i.children[n].getAttribute('data-path'), t.pathChange(r), ContentController.changeTemplateForModule(5, r), GlobalController.changeColor(n))  : ContentController.path(r)
        }
        if (h = jQuery(i).children(), e = h.length, f = new ImageSwapper(i, t), r = new Image, r.src = '/layouts/SBV-Custom/HMProductPage/assets/images/navigation/swapper_arrow_left.png', r.style.position = 'absolute', r.style.cursor = 'pointer', u = new Image, u.src = '/layouts/SBV-Custom/HMProductPage/assets/images/navigation/swapper_arrow_right.png', u.style.position = 'absolute', u.style.cursor = 'pointer', o = jQuery('<div/>').css({
            position: 'absolute',
            cursor: 'pointer',
            width: 100,
            height: 100,
            backgroundColor: '#FFFFFF',
            opacity: 0.01
        }), s = jQuery('<div/>').css({
            position: 'absolute',
            cursor: 'pointer',
            width: 100,
            height: 100,
            backgroundColor: '#FFFFFF',
            opacity: 0.01
        }), jQuery(o).bind('mousedown', l), jQuery(s).bind('mousedown', n), e > 1 && (t.appendChild(f), t.appendChild(r), t.appendChild(u), jQuery(t).append(o), jQuery(t).append(s)), Assets.SITE_ID == 'beoplayEarset3') {
            var a = HeadphoneCableController.getNewCable(5);
            jQuery(t).append(a)
        }
    },
        t.updateImage = function (n) {
            if (Assets.SITE_ID == 'beoplayForm2') {
                var r = i.children[n].getAttribute('data-path');
                t.pathChange(r),
                    ContentController.changeTemplateForModule(5, r)
            }
        },
        t.updateColor = function () {
        },
        t.pathChange = function (n) {
            for (var i = null, r, u, t = 0; t < e; t += 1) if (r = h[t], u = jQuery(r).attr('data-path'), u === n) {
                i = t;
                break
            }
            i !== null && (c = i, f.selectItem(i))
        },
        t.resize = function (n, t) {
            if (f.style.left = Math.floor(n * 0.5 - f.getWidth() * 0.5) - 16 + 'px', f.style.top = t - 75 + 'px', r.style.left = '90px', r.style.top = t - 90 + 'px', u.style.left = n - 120 + 'px', u.style.top = t - 90 + 'px', jQuery(o).css({
                left: 60,
                top: t - 106
            }), jQuery(s).css({
                left: n - 129,
                top: t - 106
            }), Assets.SITE_ID == 'beoplayEarset3');
        },
        t
}
function HighlightsMenuTemplate(n) {
    var t = General.getNewDiv(),
        u = n,
        i,
        r = jQuery('<div/>');
    return t.templateIn = function () {
        function u() {
            jQuery(AssetLoader).unbind('complete', u),
                jQuery(r).css({
                    position: 'absolute',
                    height: '168px',
                    overflow: 'hidden',
                    top: f - 168 + 'px',
                    left: '0px'
                }),
                jQuery(t).append(r),
                jQuery(i).css({
                    position: 'absolute',
                    top: '168px',
                    left: '0px'
                }),
                jQuery(r).append(i),
                t.resize(ContentController.WIN_WIDTH, ContentController.WIN_HEIGHT),
                jQuery(i).animate({
                    top: 0
                }, {
                    duration: 1000,
                    easing: 'easeInOutQuint'
                })
        }
        var e = jQuery(window).width(),
            f = jQuery(window).height();
        i = new HighlightsMenu(0, n),
            jQuery(AssetLoader).bind('complete', u)
    },
        t.pathChange = function (t) {
            var u = jQuery(n).children(),
                r = 0,
                f = u.length;
            for (r; r < f; r += 1) jQuery(u[r]).attr('data-path') == t && i.activateBtn(r)
        },
        t.resize = function (n, t) {
            var u = Math.round(n * 0.5 - 480);
            jQuery(i).css({
                left: u - 146
            }),
                jQuery(r).css({
                    top: t - 168,
                    width: n
                })
        },
        t
}
function ImageTemplate(n) {
    function k() {
        t = new Image,
            t.style.position = 'absolute',
            t.style.top = '0px',
            jQuery(t).bind('load', d),
            t.src = jQuery(r).attr('data-images')
    }
    function d() {
        _mainImageLoaded = !0,
            jQuery(t).css({
                opacity: 0
            }),
            v.appendChild(t),
            ContentController.removePreloader(jQuery(r).parent()),
            p(e)
    }
    function g() {
        var n = 'opacity',
            t = jQuery(r).attr('data-type'),
            i = jQuery(r).attr('data-direction-in');
        return i ? n = i : t && (n = t),
            b(n)
    }
    function nt() {
        var n = 'opacity',
            t = jQuery(r).attr('data-type'),
            i = jQuery(r).attr('data-direction-out');
        return i ? n = i : t && (n = t),
            b(n)
    }
    function b(n) {
        return n == 'rotateFromBottom' ? n = 'bottom' : n == 'rotateFromTop' ? n = 'top' : n == 'rotateFromRight' ? n = 'right' : n == 'moveFromBottom' && (n = 'bottom'),
            n
    }
    function tt() {
        var r = g(),
            e = jQuery(t).position(),
            l = e.left,
            v = e.top,
            h = jQuery(t).height(),
            c = jQuery(t).width(),
            n;
        r == 'bottom' ? jQuery(t).css({
            opacity: 1,
            top: - h
        })  : r == 'top' ? jQuery(t).css({
            opacity: 1,
            top: h
        })  : r == 'right' ? jQuery(t).css({
            opacity: 1,
            left: - c
        })  : r == 'left' ? jQuery(t).css({
            opacity: 1,
            left: c
        })  : jQuery(t).css({
            opacity: 0
        }),
                r == 'opacity' ? jQuery(t).delay(0).animate({
            opacity: 1
        }, 1200, 'easeInOutQuart')  : jQuery(t).delay(0).animate({
            left: l,
            top: v
        }, 1200, 'easeInOutQuint'),
            jQuery(i).stop(!0, !1).delay(1000).animate({
                top: i._storeTop
            }, 900, 'easeInOutQuint'),
            jQuery(f).stop(!0, !1).delay(1000).animate({
                top: i._storeTop + 1
            }, 900, 'easeInOutQuint'),
            n = ContentController.WIN_HEIGHT - s._storeTop,
            a > 0 && (n = n - ContentController.WIN_HEIGHT / 10),
            n < 210 && (n = 210),
            jQuery(s).stop(!0, !1).delay(1000).animate({
                top: n
            }, 900, 'easeInOutQuint'),
            o != null && jQuery(o).stop(!0, !1).delay(1000).animate({
            top: 27
        }, 900, 'easeInOutQuint'),
            u != null && jQuery(u).stop(!0, !1).delay(1000).animate({
            top: 45
        }, 900, 'easeInOutQuint'),
            y = !0,
            _direction != '' && ContentController.nextTemplate()
    }
    function it() {
        var v,
            p,
            t,
            y,
            w,
            e,
            n,
            b;
        i = General.getNewDiv(),
            i.style.fontFamily = 'GothamBold',
            i.style.fontSize = '13px',
            i.style.left = '30px',
            i.style.top = '-50px',
            i.style.width = '225px',
            i.style.color = '#ffffff',
            i.style.lineHeight = '17px',
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (i.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', i.style.fontWeight = 'bold'),
            v = jQuery(r).attr('data-headercolor'),
            v != null && v != undefined && (i.style.color = v),
            p = jQuery(r).attr('data-header'),
            jQuery(i).html(p),
            f = General.getNewDiv(),
            f.style.fontFamily = 'GothamBold',
            f.style.fontSize = '13px',
            f.style.left = '29px',
            f.style.top = '-49px',
            f.style.width = '225px',
            f.style.color = '#000000',
            f.style.lineHeight = '17px',
            jQuery(f).css({
                opacity: 0.3
            }),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (f.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', f.style.fontWeight = 'bold'),
            jQuery(f).html(p),
            l.appendChild(f),
            l.appendChild(i),
            t = jQuery(r).attr('data-largeheader'),
            t != undefined && t != null && (u = General.getNewDiv(), u.style.fontFamily = 'GothamThin', u.style.fontSize = '46px', u.style.width = '500px', u.style.left = '30px', u.style.top = '-160px', u.style.lineHeight = '40px', u.style.color = '#ffffff', BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (u.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'), jQuery(u).html(t), l.appendChild(u), _largeHeaderWhiteShadow = General.getNewDiv(), _largeHeaderWhiteShadow.style.fontFamily = 'GothamThin', _largeHeaderWhiteShadow.style.fontSize = '46px', _largeHeaderWhiteShadow.style.top = '-1px', _largeHeaderWhiteShadow.style.left = '-1px', _largeHeaderWhiteShadow.style.lineHeight = '40px', _largeHeaderWhiteShadow.style.color = '#4a4847', jQuery(_largeHeaderWhiteShadow).html(t), u.appendChild(_largeHeaderWhiteShadow)),
            y = jQuery(r).attr('data-rightside'),
            y != undefined && y != null && (o = General.getNewDiv(), o.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', o.style.fontSize = '13px', o.style.width = '715px', o.style.textAlign = 'right', o.style.left = '245px', o.style.top = '-30px', o.style.color = '#ffffff', o.style.lineHeight = '17px', jQuery(o).html(y), l.appendChild(o)),
            s = General.getNewDiv(),
            l.appendChild(s),
            w = jQuery(r).attr('data-small-header'),
            e = 0,
            w && (n = General.getNewDiv(), s.appendChild(n), n.style.color = '#e00034', n.style.width = '200px', n.style.fontSize = '14px', n.style.fontFamily = 'GothamBold', BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (n.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', n.style.fontWeight = 'bold'), jQuery(n).html(w), e += 50),
            b = jQuery(r).children() [0],
            h = General.getNewDiv(),
            h.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif',
            h.style.fontSize = '13px',
            jQuery(h).css({
                top: e
            }),
            h.style.width = '300px',
            h.style.color = '#ffffff',
            h.style.lineHeight = '17px',
            jQuery(h).html(b.innerHTML),
            c = General.getNewDiv(),
            c.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif',
            c.style.fontSize = '13px',
            c.style.width = '300px',
            c.style.color = '#000000',
            c.style.lineHeight = '17px',
            c.style.left = '-1px',
            jQuery(c).css({
                opacity: 0.3,
                top: e + 1
            }),
            jQuery(c).html(b.innerHTML),
            s.appendChild(c),
            s.appendChild(h),
            a = parseInt(jQuery(r).attr('data-bodyOffset')),
            isNaN(a) && (a = 0),
            s._storeTop = e + jQuery(h).height() + 30 + a,
            s.style.top = ContentController.WIN_HEIGHT + 'px',
            i.style.top = '-100px',
            f.style.top = '-99px'
    }
    function rt() {
        ContentController.nextTemplate(!1)
    }
    function ut() {
        jQuery(e).remove(),
            et()
    }
    function ft() {
        ResizeHelper.resizeItem(t, {
            width: ContentController.WIN_WIDTH,
            height: ContentController.WIN_HEIGHT,
            alignX: 'center',
            alignY: 'center'
        })
    }
    function et() {
        jQuery(v).remove()
    }
    var ot = this,
        e = General.getNewDiv(),
        r = n,
        v,
        l,
        t,
        i,
        f,
        s,
        h,
        c,
        o,
        u,
        y = !1,
        p,
        a = 0,
        w = Boolean(r.getAttribute('data-hasControls'));
    return e.style.overflow = 'hidden',
        e.templateLoad = function (n) {
            function t() {
                var u = jQuery(r).parent().children().length,
                    f = jQuery(r).index(),
                    n = f + 1,
                    t,
                    i;
                n >= u && (n = 0),
                    Assets.IN_USE_CONTROLS && Assets.IN_USE_CONTROLS.gotoCycle(n),
                    t = jQuery(r).parent().children() [n],
                    i = jQuery(r).parent().attr('data-path') + '/' + jQuery(t).attr('data-path'),
                    ContentController.path(i)
            }
            function i() {
                var i = jQuery(r).parent().children().length,
                    u = jQuery(r).index(),
                    n = u - 1,
                    t;
                n < 0 && (n = i - 1),
                    Assets.IN_USE_CONTROLS && Assets.IN_USE_CONTROLS.gotoCycle(n),
                    t = jQuery(r).parent().children() [n],
                    ContentController.path(jQuery(r).parent().attr('data-path') + '/' + jQuery(t).attr('data-path'))
            }
            p = n,
                ContentController.addPreloader(jQuery(r).parent()),
                v = General.getNewDiv(),
                jQuery(v).touchwipe({
                    wipeLeft: t,
                    wipeRight: i,
                    min_move_x: 130,
                    min_move_y: 130,
                    preventDefaultEvents: !1
                }),
                e.appendChild(v),
                l = General.getNewDiv(),
                e.appendChild(l),
                k()
        },
        e.templateIn = function (n) {
            _direction = n,
                it(),
                setTimeout(tt, 1000 * 0.2)
        },
        e.templateOut = function () {
            jQuery(i).stop(!0, !1).animate({
                top: - 200
            }, 900, 'easeInOutQuint'),
                jQuery(f).stop(!0, !1).animate({
                    top: - 199
                }, 900, 'easeInOutQuint'),
                jQuery(s).stop(!0, !1).animate({
                    top: ContentController.WIN_HEIGHT
                }, 900, 'easeInOutQuint'),
                o != null && jQuery(o).stop(!0, !1).animate({
                top: - 200
            }, 900, 'easeInOutQuint'),
                u != null && jQuery(u).stop(!0, !1).delay(300).animate({
                top: - 300
            }, 900, 'easeInOutQuint');
            var n = nt(),
                r = jQuery(t).height(),
                e = jQuery(t).width();
            n == 'bottom' ? jQuery(t).delay(0).animate({
                top: r
            }, 1200, 'easeInOutQuint')  : n == 'top' ? jQuery(t).delay(0).animate({
                top: - r
            }, 1200, 'easeInOutQuint')  : n == 'right' ? jQuery(t).delay(0).animate({
                left: e
            }, 1200, 'easeInOutQuint')  : n == 'left' ? jQuery(t).delay(0).animate({
                left: - e
            }, 1200, 'easeInOutQuint')  : jQuery(t).delay(0).animate({
                opacity: 0
            }, 900, 'easeInOutQuart'),
                setTimeout(rt, 1000 * 0.5),
                setTimeout(ut, 2000)
        },
        e.updateColor = function (n) {
            var i = ContentController._activeTemplates[5],
                t = i.menuTemplate;
            t && t.updateImage(n)
        },
        e.resize = function (n, t) {
            var o,
                r;
            t == NaN && (t = _storeHeight),
                e.style.width = n + 'px',
                e.style.height = t + 'px',
                _storeHeight = t,
                o = Math.floor(n * 0.5) - 480,
                i && (i._storeLeft = o, i._storeTop = 25, i.style.left = i._storeLeft + 'px', f.style.left = i._storeLeft - 1 + 'px'),
                s && (s.style.left = o + 'px'),
                u != null && (u.style.left = i._storeLeft - 3 + 'px'),
                y == !0 && (r = t - s._storeTop, a > 0 && (r = r - ContentController.WIN_HEIGHT / 10), r < 210 && (r = 210), s.style.top = r + 'px'),
                _mainImageLoaded == !0 && ft()
        },
        e.focusIn = function () {
            w && Assets.IN_USE_CONTROLS && Assets.IN_USE_CONTROLS.startCycle()
        },
        e.focusOut = function () {
            w && Assets.IN_USE_CONTROLS && Assets.IN_USE_CONTROLS.stopCycle()
        },
        e
}
function FeaturesTemplate(n) {
    var a = this,
        i = General.getNewDiv(),
        e = n,
        r,
        t,
        f,
        u,
        c = !1,
        o,
        h,
        l,
        s = [
        ];
    return i.style.overflow = 'hidden',
        i.templateLoad = function (n) {
            l = n,
                ContentController.addPreloader(jQuery(e).parent()),
                    Assets.SITE_ID == 'beoplaya3' ? (o = [
                'features_bg.jpg',
                'made_ipad.png'
            ], AssetLoader.loadGroup(new AssetGroup(o, i.ready, '/layouts/SBV-Custom/HMProductPage/assets/beoplayA3/specs/')))  : Assets.SITE_ID == 'beoplayForm2' ? (o = [
                'features_bg.jpg',
                'made_ipad.png'
            ], AssetLoader.loadGroup(new AssetGroup(o, i.ready, '/layouts/SBV-Custom/HMProductPage/assets/beoplayA3/specs/')))  : Assets.SITE_ID == 'beoplaya8' ? (o = [
                'dlna_logo.png',
                'button_downloadManual.png'
            ], AssetLoader.loadGroup(new AssetGroup(o, i.ready, '/layouts/SBV-Custom/HMProductPage/assets/beoplayA8/features/')))  : Assets.SITE_ID == 'beoplaya9' ? (o = [
                'supported.png'
            ], AssetLoader.loadGroup(new AssetGroup(o, i.ready, '/layouts/SBV-Custom/HMProductPage/assets/beoplayA9/features/')))  : (ContentController.removePreloader(jQuery(e).parent()), n(i))
        },
        i.ready = function () {
            (Assets.SITE_ID == 'beoplaya3' || Assets.SITE_ID == 'beoplayForm2') && (h = AssetLoader.getAsset('features_bg')),
                ContentController.removePreloader(jQuery(e).parent()),
                l(i)
        },
        i.templateIn = function () {
            var w,
                it,
                y,
                v,
                b,
                p,
                ut,
                a,
                k,
                n,
                d,
                o,
                tt,
                g,
                nt,
                ft,
                l;
            if (Assets.SITE_ID == 'beoplaya3' && jQuery(i).append(h), r = General.getNewDiv(), r.style.fontFamily = 'GothamBold', r.style.fontSize = '13px', r.style.left = '30px', r.style.top = '-30px', r.style.width = '225px', r.style.color = '#ffffff', BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (r.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', r.style.fontWeight = 'bold'), w = jQuery(e).attr('data-headercolor'), w != null && w != undefined && (r.style.color = w), it = jQuery(e).attr('data-header'), jQuery(r).text(it), i.appendChild(r), y = jQuery(e).attr('data-largeheader'), y != undefined && y != null && (u = General.getNewDiv(), u.style.fontFamily = 'GothamThin', u.style.fontSize = '38px', u.style.lineHeight = '38px', u.style.width = '800px', u.style.left = '32px', u.style.color = '#4a4847', jQuery(u).html(y), i.appendChild(u), _largeHeaderWhiteShadow = General.getNewDiv(), _largeHeaderWhiteShadow.style.fontFamily = 'GothamThin', _largeHeaderWhiteShadow.style.fontSize = '38px', _largeHeaderWhiteShadow.style.lineHeight = '38px', _largeHeaderWhiteShadow.style.top = '-1px', _largeHeaderWhiteShadow.style.left = '-1px', _largeHeaderWhiteShadow.style.color = '#4a4847', jQuery(_largeHeaderWhiteShadow).html(y), BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (u.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', _largeHeaderWhiteShadow.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'), Assets.SITE_ID == 'beoplaya8')) {
                v = AssetLoader.getAsset('button_downloadManual.png'),
                    jQuery(v).get(0).style.left = '0px',
                    jQuery(v).get(0).style.top = '136px',
                    jQuery(v).get(0).style.cursor = 'pointer',
                    u.appendChild(jQuery(v).get(0)),
                        BrowserDetect.BROWSER_NAME == 'Firefox' ? jQuery(v).get(0).onclick = function () {
                    window.open('http://beoplay.com/a8/connections', '_blank')
                }
                    : (jQuery(v).click(rt), jQuery(v).get(0).ondblclick = rt);
                function rt() {
                    window.open('http://beoplay.com/a8/connections', '_blank')
                }
            }
            for (b = jQuery(e).attr('data-rightside'), b != undefined && b != null && (f = General.getNewDiv(), f.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', f.style.fontSize = '13px', f.style.width = '715px', f.style.textAlign = 'right', f.style.left = '245px', f.style.top = '-30px', f.style.color = '#ffffff', jQuery(f).text(b), i.appendChild(f)), t = General.getNewDiv(), i.appendChild(t), p = General.getNewImage(), p.src = '/layouts/SBV-Custom/HMProductPage/assets/images/spacer-bg.png', p.style.left = '-115px', p.style.top = '145px', t.appendChild(p), ut = jQuery(e).children().length, a = 0; a < ut; a++) k = jQuery(e).children() [a],
                n = General.getNewDiv(),
                n.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif',
                n.style.fontSize = '13px',
                n.style.left = 245 * a + 'px',
                n.style.top = '0px',
                n.style.width = '225px',
                n.style.color = '#ffffff',
                    a > 3 ? (n.style.left = 245 * (a - 1) + 'px', n.style.top = '107px')  : (d = General.getNewImage(), d.src = jQuery(k).attr('data-images'), d.style.top = '65px', n.appendChild(d)),
                o = General.getNewDiv(),
                n.style.fontFamily = 'GothamBold',
                o.style.textAlign = 'left',
                o.style.width = '225px',
                o.style.top = '185px',
                o.style.color = '#e00034',
                Assets.SITE_ID == 'beoplaya3' && (o.style.color = '#00aeda', tt = AssetLoader.getAsset('made_ipad'), jQuery(tt).css({
                left: 730,
                top: 290
            }), jQuery(t).append(tt)),
                Assets.SITE_ID == 'beoplayForm2',
                Assets.SITE_ID == 'beoplaya8' && a == 0 && (g = AssetLoader.getAsset('dlna_logo.png'), jQuery(g).get(0).style.left = '731px', jQuery(g).get(0).style.top = '430px', jQuery(t).append(jQuery(g).get(0))),
                Assets.SITE_ID == 'beoplaya9' && a == 0 && (nt = AssetLoader.getAsset('supported.png'), jQuery(nt).get(0).style.left = '731px', jQuery(nt).get(0).style.top = '430px', jQuery(t).append(jQuery(nt).get(0))),
                BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (o.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'),
                ft = jQuery(k).attr('data-title'),
                jQuery(o).html(ft),
                s.push(o),
                l = General.getNewDiv(),
                l.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif',
                l.style.fontSize = '13px',
                l.style.color = '#666666',
                l.style.textAlign = 'left',
                l.style.width = '225px',
                l.style.top = '210px',
                l.style.lineHeight = '14px',
                jQuery(l).html(jQuery(k).html()),
                n.appendChild(o),
                n.appendChild(l),
                t.appendChild(n);
            r.style.top = '25px',
                t._storeTop = ContentController.WIN_HEIGHT - jQuery(t).height() - 25,
                t.style.top = t._storeTop + 'px',
                u.style.top = '45px',
                c = !0
        },
        i.updateColor = function (n) {
            var t = 0,
                u = s.length,
                f = GlobalController.headerHex[n],
                i,
                r;
            for (t; t < u; t++) i = jQuery(s[t]).text(),
                jQuery(s[t]).empty(),
                r = '<font style="color:' + f + ';">' + i + '</font>',
                jQuery(s[t]).append(r)
        },
        i.templateOut = function () {
            trace('imageTemplate.templateOut()'),
                jQuery(r).stop(!0, !1).animate({
                    top: - 200
                }, 400, Quad.easeIn),
                jQuery(t).stop(!0, !1).animate({
                    top: ContentController.WIN_HEIGHT
                }, 400, Quad.easeIn),
                f != null && jQuery(f).stop(!0, !1).animate({
                top: - 200
            }, 400, Quad.easeIn),
                u != null && jQuery(u).stop(!0, !1).delay(300).animate({
                top: - 300
            }, 400, Quad.easeIn)
        },
        i.resize = function (n, f) {
            _storeHeight = f,
                i.style.width = n + 'px',
                i.style.height = f + 'px';
            var e = Math.floor(n * 0.5) - 480;
            r._storeLeft = e,
                r._storeTop = 25,
                t._storeLeft = e,
                t._storeTop = Assets.SITE_ID == 'beoplaya3' ? f - jQuery(t).height() - 515 : Assets.SITE_ID == 'beoplaya8' ? f - jQuery(t).height() - 515 : Assets.SITE_ID == 'beoplayForm2' ? f - jQuery(t).height() - 400 : Assets.SITE_ID == 'beoplaya9' ? f - jQuery(t).height() - 600 : f - jQuery(t).height() - 450,
                r.style.left = r._storeLeft + 'px',
                t.style.left = t._storeLeft + 'px',
                u != null && (u.style.left = r._storeLeft - 3 + 'px'),
                c == !0 && (Assets.SITE_ID == 'beoplaya8' && t._storeTop < 180 && (t._storeTop = 180), t.style.top = t._storeTop + 'px'),
                Assets.SITE_ID == 'beoplaya3' && jQuery(h).css({
                width: n,
                height: f
            })
        },
        i.focusIn = function () {
        },
        i.focusOut = function () {
        },
        i
}
function IllustrationTemplate(n) {
    function b() {
        var f,
            e;
        t.style.overflow = 'hidden',
            o = {
            },
            f = DataSelectors.getXmlByDataName(r, 'animation'),
            e = jQuery(f).attr('data-animation-pt').split(','),
            o.left = Number(e[0]),
            o.top = Number(e[1]);
        for (var s, h = [
        ], n, c = jQuery(f).children(), p = c.length, l, a, v, y, u = 0; u < p; u += 1) n = c[u],
            v = DataSelectors.getTextByDataName(n, 'filename'),
            l = Number(DataSelectors.getTextByDataName(n, 'startId')),
            a = Number(DataSelectors.getTextByDataName(n, 'endId')),
            y = Number(DataSelectors.getTextByDataName(n, 'delay')),
            s = {
                filename: v,
                startId: l,
                endId: a,
                delay: y,
                ext: '.png'
            },
            h.push(s);
        i = new Timeline,
            jQuery(i).bind('loaded', w),
            t.appendChild(i),
            i.load(h)
    }
    function w() {
        jQuery(i).unbind('loaded', w),
            ContentController.removePreloader(jQuery(r).parent()),
            p(t)
    }
    function k() {
        u = General.getNewImage(DataSelectors.getTextByDataName(r, 'image'), d)
    }
    function d() {
        s = !0,
            u = this,
            t.appendChild(this),
            l = jQuery(u).width(),
            a = jQuery(u).height(),
            g()
    }
    function g() {
        AssetLoader.loadGroup(new AssetGroup(['btn_get_playlist_light.png',
            'btn_get_playlist_light_hover.png',
            'btn_get_playlist_dark.png',
            'btn_get_playlist_dark_hover.png'], nt, '/layouts/SBV-Custom/HMProductPage/assets/shared/buttons/'))
    }
    function nt() {
        f = tt(),
            t.appendChild(f),
            t.resize(ContentController.WIN_WIDTH, ContentController.WIN_HEIGHT),
            b()
    }
    function tt() {
        var u = General.getNewDiv(),
            i = General.getNewDiv(),
            n,
            t,
            f;
        return i.style.position = 'relative',
            i.style.whiteSpace = 'noWrap',
            i.style.fontFamily = 'GothamBold',
            i.style.fontSize = '11px',
            i.style.color = '#666666',
            jQuery(i).html(DataSelectors.getHtmlByDataName(r, 'subHeader')),
            u.appendChild(i),
            n = General.getNewDiv(),
            n.style.position = 'relative',
            n.style.marginTop = '10px',
            n.style.lineHeight = '26px',
            n.style.whiteSpace = 'noWrap',
            n.style.fontFamily = 'GothamThin',
            n.style.fontSize = '24px',
            n.style.color = '#878889',
            jQuery(n).html(DataSelectors.getHtmlByDataName(r, 'header')),
            u.appendChild(n),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (i.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', i.style.fontWeight = 'bold', n.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'),
            t = General.getNewDiv(),
            t.style.position = 'relative',
            t.style.marginTop = '16px',
            t.style.lineHeight = '17px',
            t.style.width = '230px',
            t.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif',
            t.style.fontSize = '13px',
            t.style.color = '#999999',
            jQuery(t).html(DataSelectors.getHtmlByDataName(r, 'column')),
            u.appendChild(t),
            f = new IllustationSpotifyButton('black', DataSelectors.getHtmlByDataName(r, 'spotifyLink'), DataSelectors.getHtmlByDataName(r, 'spotifyLabel'), '#343434'),
            f.style.marginTop = '16px',
            f.style.position = 'relative',
            u.appendChild(f),
            u
    }
    var t = General.getNewDiv(),
        r = n,
        u = null,
        s = !1,
        h,
        c,
        e,
        l,
        a,
        f,
        v,
        y,
        i,
        o,
        p;
    return t.templateIn = function () {
    },
        t.templateLoad = function (n) {
            var t,
                i;
            ContentController.addPreloader(jQuery(r).parent()),
                p = n,
                t = String(jQuery(r).attr('data-column-pt')).split(','),
                v = Number(t[0]),
                y = Number(t[1]),
                i = DataSelectors.getXmlByDataName(r, 'image'),
                e = jQuery(i).attr('data-align-y'),
                e || (e = 'center'),
                k()
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
            i && i.play()
        },
        t.focusOut = function () {
            i && i.stop()
        },
        t.resize = function (n, r) {
            n && (h = n, c = r);
            var p = 0,
                w = 0;
            t.style.width = n + 'px',
                t.style.height = r + 'px',
                s == !0 && (p = Math.floor(h * 0.5 - l * 0.5), u.style.left = p + 'px', e == 'center' && (w = Math.floor(c * 0.5 - a * 0.5), u.style.top = w + 'px')),
                f && (f.style.left = p + v + 'px', f.style.top = w + y + 'px'),
                i && (i.style.left = p + o.left + 'px', i.style.top = w + 'px')
        },
        t
}
function SliderDot(n) {
    function u() {
        jQuery(i).animate({
            opacity: 1
        }, {
            duration: 300,
            easing: 'easeInSine'
        })
    }
    function f() {
        jQuery(i).animate({
            opacity: 0
        }, {
            duration: 300,
            easing: 'easeInSine'
        })
    }
    var r = jQuery('<div/>').css({
            position: 'absolute'
        }),
        t = jQuery('<div/>').css({
            position: 'absolute'
        }),
        i = AssetLoader.getAsset('slider_dot');
    return function () {
        jQuery(i).css({
            left: - 3,
            top: - 3,
            opacity: 0
        }),
            jQuery(r).append(i),
            jQuery(t).css({
                left: - 15,
                top: - 15,
                width: 30,
                height: 30,
                opacity: 0,
                cursor: 'pointer',
                backgroundColor: '#FF0000'
            }),
            jQuery(r).append(t),
            n || (jQuery(t).bind(MouseEvent.ROLL_OVER, u), jQuery(t).bind(MouseEvent.ROLL_OUT, f))
    }(),
        r
}
function GalleryGridTemplate(n) {
    function c() {
        u = new SpinningPreloader(0),
            u.init(),
            u.resize(f, e),
            jQuery(t).append(u)
    }
    function l() {
        function n() {
            h = !0,
                t.append(i),
                jQuery(u).remove()
        }
        i = new GalleryGrid(r, t, n)
    }
    function a() {
        var n = window.location.hash.replace('#', ''),
            i = n.substring(0, n.lastIndexOf('/'));
        n = i ? i.replace('/', '')  : n.replace('/', ''),
            n === o && t.focusIn()
    }
    var t = jQuery('<div/>').css({
        position: 'absolute',
        overflow: 'hidden'
    });
    t.skipSeperator = !0;
    var r = n,
        o = r.getAttribute('data-path'),
        s = ContentController.getIndexOfPath(ContentController._xml, o);
    t._templateId = s;
    var i,
        h = !1,
        u,
        f = ContentController.WIN_WIDTH,
        e = ContentController.WIN_HEIGHT;
    return t.templateLoad = function (n) {
        function i() {
            var t = [
                ],
                i = r.querySelectorAll('[data-type=images]'),
                n = 0,
                f = i.length;
            for (n; n < f; n++) t.push(i[n].getAttribute('data-smallImg'));
            AssetLoader.loadGroup(new AssetGroup(t, u), !0)
        }
        function u() {
            n(t),
                ContentController.removePreloader(jQuery(r).parent())
        }
        ContentController.addPreloader(jQuery(r).parent()),
            AssetLoader.loadGroup(new AssetGroup(['gallery_ui_close.png',
                'gallery_ui_next.png',
                'gallery_ui_open.png',
                'gallery_ui_prev.png'], i, '/layouts/SBV-Custom/HMProductPage/assets/beoplayH6/gallery/ui/'))
    },
        t.templateIn = function () {
            c(),
                l(),
                t.resize(),
                a()
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
            i && i.focusIn()
        },
        t.focusOut = function () {
            if (i) {
                var n = ContentController.getCurrentTemplate() - 1;
                n !== t._templateId && i.focusOut()
            }
        },
        t.resize = function (n, r) {
            function u() {
                t.css({
                    width: f,
                    height: e
                })
            }
            function o() {
                i && i.resize(f, e)
            }
            f = n || f,
                e = r || e,
                u(),
                o()
        },
        t
}
function GalleryGridItemView(n, t) {
    function y() {
        function n() {
            jQuery(i).css({
                position: 'absolute',
                overflow: 'hidden'
            })
        }
        function y() {
            var t = o.getAttribute('data-caption'),
                n;
            t && (n = new SmartObject, n.style.padding = '0 30px 0 30px', BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 10 && (n.style.padding = '0 100px 0 100px'), n.style.position = 'relative', n.innerHTML = t, r = new SmartObject, r._y = c === 'top' ? - 20 : f, jQuery(r).css({
                overflow: 'hidden',
                height: 100,
                width: s,
                zIndex: 100,
                font: '16px/16px GothamBold',
                color: a,
                textShadow: '0 1px 0 rgba(0,0,0,0.25)'
            }).html(n), r.style.textAlign = o.getAttribute('data-captionAlign') || 'left', jQuery(i).append(r))
        }
        function w() {
            function y() {
                AssetLoader.getAsset(a[0]) || (h = new SpinningPreloader(0), h.init(), h.resize(s, f), jQuery(i).append(h))
            }
            function w() {
                AssetLoader.loadGroup(new AssetGroup(a, k))
            }
            function k() {
                i && (d(), g(), i.resize(), nt(), p(), t && t())
            }
            function d() {
                u = SmartObject(AssetLoader.getAsset(a[0]).get(0)),
                    u.onload = function (n) {
                        n = n || window.event;
                        var t = n.target || n.currentTarget || n.srcElement;
                        t._orgW = t.naturalWidth || t.width,
                            t._orgH = t.naturalHeight || t.height,
                            t._ratio = t._orgH / t._orgW,
                            v()
                    },
                    u._opacity = 0,
                    u.style.cursor = 'pointer',
                    jQuery(i).append(u)
            }
            function g() {
                e = e ? e.toLowerCase()  : 'center',
                    n ? n.toLowerCase && (n = eval(n.toLowerCase()))  : n = !0,
                    u._gravity = e,
                    u._scale = n
            }
            function nt() {
                var n = h ? 1 : 0;
                TweenMax.to(u, 0.5, {
                    delay: n,
                    _opacity: 1,
                    ease: Quart.easeInOut,
                    overwrite: 'auto',
                    onComplete: tt
                }),
                    r && (c === 'top' ? TweenMax.to(r, 0.5, {
                    delay: n + 0.5,
                    _y: 30,
                    ease: Quart.easeInOut,
                    overwrite: 'all'
                })  : TweenMax.to(r, 0.5, {
                    delay: n + 0.5,
                    _y: f - (l ? 58 : 40),
                    ease: Quart.easeInOut,
                    overwrite: 'all'
                }))
            }
            function tt() {
                jQuery(h).remove(),
                    b()
            }
            var e = o.getAttribute('data-gravity'),
                n = o.getAttribute('data-scale'),
                a = [
                    o.getAttribute('data-largeImg')
                ];
            y(),
                w()
        }
        function b() {
            var n,
                t,
                r;
            BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 10 && (l = !0, n = AssetLoader.getAsset('gallery_ui_next.png').get(0), jQuery(n).css({
                position: 'absolute',
                zIndex: 100,
                width: 40,
                height: 40,
                cursor: 'pointer',
                bottom: '30px',
                right: '30px'
            }), t = AssetLoader.getAsset('gallery_ui_prev.png').get(0), jQuery(t).css({
                position: 'absolute',
                zIndex: 100,
                width: 40,
                height: 40,
                cursor: 'pointer',
                bottom: '30px',
                left: '30px'
            }), r = AssetLoader.getAsset('gallery_ui_close.png').get(0), jQuery(r).css({
                position: 'absolute',
                zIndex: 100,
                width: 40,
                height: 40,
                cursor: 'pointer',
                top: '30px',
                right: '30px'
            }), n.style.opacity = 0, t.style.opacity = 0, r.style.opacity = 0, TweenMax.to([n,
                t,
                r], 0.5, {
                delay: 0.5,
                opacity: 1,
                css: {
                    opacity: 1
                },
                ease: Quart.easeInOut,
                overwrite: 'auto'
            }), jQuery(i).append(n), jQuery(i).append(t), jQuery(i).append(r))
        }
        trace(a, '_captionColor'),
            trace(c, '_captionPostion'),
            n(),
            y(),
            w(),
            e = AssetLoader.getAsset('gallery_ui_close.png', !0),
            e.style.width = e.orgW * 0.5 + 'px',
            e.style.height = e.orgH * 0.5 + 'px',
            e.style.zIndex = 105,
            e.style.cursor = 'pointer',
            e._y = 30,
            i.appendChild(e),
            i.resize()
    }
    function p() {
    }
    function w() {
    }
    function v() {
        if (u && u._ratio) {
            var f = i._width,
                r = i._height,
                e = u._ratio,
                t = Math.ceil(f),
                n = Math.ceil(t * e),
                o,
                s;
            n < r && (n = Math.ceil(r), t = Math.ceil(n / e));
            function h() {
                u._scale ? (u.style.width = t + 'px', u.style.height = n + 'px')  : (t = Math.ceil(u._orgW), n = Math.ceil(u._orgH))
            }
            function c() {
                o = (f - t) / 2,
                    s = (r - n) / 2,
                    u._x = Math.ceil(o),
                    u._y = Math.ceil(s)
            }
            h(),
                c()
        }
    }
    var i = new SmartObject;
    i._width,
        i._height;
    var o = n._xml,
        u,
        h,
        r,
        l = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 10,
        s = ContentController.WIN_WIDTH,
        f = ContentController.WIN_HEIGHT,
        e,
        c = o.getAttribute('data-captionY') || 'bottom',
        a = o.getAttribute('data-captionColor') ? '#' + o.getAttribute('data-captionColor')  : '#FFFFFF';
    return i.resize = function (n, t) {
        function u() {
            jQuery(i).css({
                width: s,
                height: f
            }),
                r && (jQuery(r).css({
                width: s
            }), r._x = 0, r._y = c === 'top' ? 30 : r._y !== f ? f - (l ? 58 : 40)  : f)
        }
        s = n || s,
            f = t || f,
            i._width = s,
            i._height = f,
            u(),
            v(),
            e && (e._x = s - 70)
    },
        i.destroy = function (n) {
            trace('GalleryGridItemView Destroy : ' + o.getAttribute('data-path')),
                w(),
                i && (r && (c === 'top' ? TweenMax.to(r, 0.5, {
                _y: - 20,
                ease: Quart.easeInOut,
                overwrite: 'all'
            })  : TweenMax.to(r, 0.5, {
                _y: f,
                ease: Quart.easeInOut,
                overwrite: 'all'
            })), TweenMax.to(i, 0.5, {
                delay: 0,
                _opacity: 0,
                ease: Quart.easeInOut,
                overwrite: 'auto',
                onComplete: function () {
                    jQuery(i).remove(),
                        i = null,
                        n && n()
                }
            }))
        },
        y(),
        i
}
function GalleryGridItem(n, t, i) {
    function p() {
        r._image = u,
            r._xml = n,
            r._settings = t,
            r._path = r._xml.getAttribute('data-path'),
            r._color = r._xml.getAttribute('data-bgColor'),
            r._width,
            r._height,
            r.style.overflow = 'hidden',
            r.style.background = r._color,
            r.style.cursor = 'pointer',
            w(),
            b()
    }
    function w() {
        function f() {
            u = SmartObject(AssetLoader.getAsset(i).get(0)),
                u.onload = function (n) {
                    n = n || window.event;
                    var t = n.target || n.currentTarget || n.srcElement;
                    t._orgW = t.naturalWidth || t.width,
                        t._orgH = t.naturalHeight || t.height,
                        t._ratio = t._orgH / t._orgW,
                        c()
                },
                BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 9 && (u.style.cursor = 'pointer'),
                u._opacity = 0,
                r.appendChild(u)
        }
        function e() {
            n = n ? n.toLowerCase()  : 'center',
                t = t ? eval(t.toLowerCase())  : !0,
                u._gravity = n,
                u.___scaleX = t
        }
        function o() {
            TweenMax.to(u, 0, {
                _opacity: 1,
                ease: Quart.easeOut,
                overwrite: 'auto'
            })
        }
        var i = r._xml.getAttribute('data-smallImg'),
            n = r._xml.getAttribute('data-gravity'),
            t = r._xml.getAttribute('data-scale');
        f(),
            e(),
            r.resize(),
            o()
    }
    function b() {
        e = new SmartObject,
            jQuery(e).css({
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                background: r._color
            })
    }
    function c() {
        if (u && u._ratio) {
            var o = r._width,
                i = r._height,
                s = u._ratio,
                t = Math.ceil(o),
                n = Math.ceil(t * s),
                f,
                e;
            n < i && (n = Math.ceil(i), t = Math.ceil(n / s));
            function h() {
                u.___scaleX ? (u.style.width = t + 'px', u.style.height = n + 'px')  : (t = Math.ceil(u._orgW), n = Math.ceil(u._orgH))
            }
            function c() {
                f = u._gravity.indexOf('left') !== - 1 ? 0 : u._gravity.indexOf('right') !== - 1 ? o - t : (o - t) / 2,
                    e = u._gravity.indexOf('center') !== - 1 ? (i - n) / 2 : u._gravity.indexOf('bottom') !== - 1 ? i - n : 0,
                    u._x = Math.ceil(f),
                    u._y = Math.ceil(e)
            }
            h(),
                c()
        }
    }
    var r = new SmartObject,
        f = t,
        u,
        e,
        h = i,
        l = h.rows,
        a = h.columns,
        v = 0,
        y = 0,
        k = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        o = ContentController.WIN_WIDTH,
        s = ContentController.WIN_HEIGHT;
    return r.onMouseOver = function () {
        TweenMax.to(u, 0.3, {
            _scaleX: 1.1,
            _scaleY: 1.1,
            ease: Quart.easeOut,
            overwrite: 'auto'
        })
    },
        r.onMouseOut = function () {
            TweenMax.to(u, 0.3, {
                _scaleX: 1,
                _scaleY: 1,
                ease: Quart.easeOut,
                overwrite: 'auto'
            })
        },
        r.onMouseDown = function () {
        },
        r.fadeImage = function (n, t, i) {
            TweenMax.to(u, 0.5, {
                delay: t,
                _opacity: n === 'out' ? 0 : 1,
                ease: Quart.easeInOut,
                overwrite: 'auto',
                onComplete: function () {
                    i && i()
                }
            })
        },
        r.fadeOverlay = function (n, t, i) {
            var r = n === 'out' ? 0.5 : 0;
            TweenMax.to(e, r, {
                delay: t,
                _opacity: n === 'out' ? 0 : 1,
                ease: Quart.easeInOut,
                overwrite: 'auto',
                onComplete: function () {
                    i && i()
                }
            })
        },
        r.resize = function (n, t) {
            o = n || o,
                s = t || s;
            var i = Math.ceil(o / a),
                u = Math.ceil(s / l),
                e = i * f.w,
                h = u * f.h,
                p = i * f.x,
                w = u * f.y;
            r._width = e,
                r._height = h,
                TweenMax.to(r, v, {
                    delay: y,
                    _x: p,
                    _y: w,
                    css: {
                        width: e,
                        height: h,
                        zIndex: 0
                    },
                    ease: Quart.easeOut,
                    overwrite: 'all'
                }),
                c()
        },
        p(),
        r
}
function GalleryGrid(n, t, i) {
    function et() {
        function n() {
            jQuery(r).css({
            }),
                    Assets.SITE_ID === 'beoplayv1' ? y = [
                460,
                460,
                400,
                400,
                400
            ] : Assets.SITE_ID === 'beoplaya8' ? y = [
                400,
                400,
                400,
                400
            ] : Assets.SITE_ID === 'beolit12' && (y = [
                400,
                400,
                400,
                400
            ])
        }
        function t() {
            function e() {
                i()
            }
            var t = [
                ],
                r = p.querySelectorAll('[data-type=images]'),
                n = 0,
                f = r.length,
                u;
            for (n; n < f; n++) u = r[n].getAttribute('data-smallImg'),
                t.push(u);
            AssetLoader.loadGroup(new AssetGroup(t, e))
        }
        function i() {
            var n = 0,
                h = p.children.length,
                t,
                u,
                i,
                s;
            for (n; n < h; n++) t = k.items[n],
                u = p.children[n],
                t && (i = new GalleryGridItem(u, t, k), e.push(i), jQuery(r).append(i));
            f(),
                r.resize(),
                setTimeout(function () {
                    tt()
                }, 500),
                jQuery(window).bind('hashchange', tt),
                s = ContentController.getCurrentTemplate() - 1,
                s === o._templateId && r.focusIn(),
                nt && nt()
        }
        function f() {
            Assets.IS_DESKTOP || jQuery(o).touchwipe({
                wipeLeft: function () {
                    ft('Left')
                },
                wipeRight: function () {
                    ft('Right')
                },
                min_move_x: 150,
                min_move_y: 150,
                preventDefaultEvents: !0
            })
        }
        n(),
            t()
    }
    function tt() {
        var i = ContentController.getCurrentTemplate() - 1,
            t,
            n;
        i === o._templateId && (t = window.location.hash, n = t.substring(t.lastIndexOf('/') + 1, t.length) || null, n && (r.findImage(n), n.indexOf('image') !== - 1 && CustomGoogleTracking.trackEvent('UpClose', 'Images', n)))
    }
    function it(n) {
        var t,
            i;
        n = n || window.event,
            t = n.target,
            t.tagName.toLowerCase() === 'img' && (i = t.parentNode, i.onMouseOver())
    }
    function rt(n) {
        var t,
            i;
        n = n || window.event,
            t = n.target,
            t.tagName.toLowerCase() === 'img' && (i = t.parentNode, i.onMouseOut())
    }
    function w(n) {
        n = n || window.event;
        var t = n.target || n.currentTarget;
        t.tagName.toLowerCase() === 'img' && b(t.parentNode)
    }
    function b(n) {
        v ? v && r.closeImage()  : (f = n, r.openImage())
    }
    function ut(n) {
        return n = n.originalEvent || window.event,
            n.preventDefault(),
            !1
    }
    function ft(n) {
        f && (n === 'Right' ? l = 'previous' : n === 'Left' && (l = 'next'), ot())
    }
    function ot() {
        var n,
            t,
            i;
        if (f) {
            if (n = e.indexOf(f), t = l === 'next' ? 1 : - 1, !e[n + t]) return r.closeImage(),
                !1;
            function u() {
                b(i)
            }
            i = e[n + t],
                r.closeImage(u)
        }
    }
    function st() {
        function n() {
            trace('GalleryGrid onLargeImageLoaded')
        }
        trace('GalleryGrid showImage'),
            c = new GalleryGridItemView(f, n),
            jQuery(o).append(c)
    }
    function ht(n) {
        c && c.destroy(n)
    }
    var r = new SmartObject;
    r._transformOriginX = 0,
        r._transformOriginY = 0,
        r._hasEvents = !1;
    var p = n,
        k = GalleryGridLayouts[p.getAttribute('data-layout')],
        e = [
        ],
        o = t,
        s,
        u,
        l,
        v = !1,
        d,
        y,
        f,
        c,
        g,
        nt = i,
        a = ContentController.WIN_WIDTH,
        h = ContentController.WIN_HEIGHT;
    return r.findImage = function (n) {
        function h() {
            b(i)
        }
        var t,
            o,
            i,
            u,
            s;
        if (trace('GalleryGrid findImage : ' + n), g === n) return !1;
        for (g = n, t = 0, o = e.length, t; t < o; t++) if (u = e[t], s = u._xml.getAttribute('data-path'), s === g) {
            if (i = u, i === f) return !1;
            trace('!FOUND ' + t),
                c ? r.closeImage(h)  : b(i);
            break
        }
    },
        r.hideMouse = function () {
            u && TweenLite.to(u, 0.3, {
                opacity: 0
            })
        },
        r.showMouse = function () {
            u && TweenLite.to(u, 0.3, {
                opacity: 1
            })
        },
        r.openImage = function () {
            if (f) {
                trace('GalleryGrid openImage');
                var n = f._xml,
                    t = n.getAttribute('data-path'),
                    i = n.parentNode.getAttribute('data-path'),
                    u = '/' + i + '/' + t;
                Assets.IS_DESKTOP && f.onMouseDown(),
                    r.zoom('in', st),
                    window.location.hash = u
            }
        },
        r.closeImage = function (n) {
            if (f) {
                trace('GalleryGrid closeImage');
                var t = f._xml,
                    e = t.getAttribute('data-path'),
                    i = t.parentNode.getAttribute('data-path'),
                    u = i;
                Assets.IS_DESKTOP && f.onMouseOut(),
                    ht(function () {
                        c = null,
                            r.zoom('out', n)
                    }),
                    n || (window.location.hash = u)
            }
        },
        r.zoom = function (n, t) {
            var i = n === 'out' ? !0 : !1,
                u = i ? 1 : a / f._width,
                c = i ? 0 : - f._x * u,
                e = i ? 0 : - f._y * u,
                l = i ? 0.5 : 0.6,
                y = i ? 0 : 0.5,
                o,
                s,
                h;
            i || f._height > f._width && f._settings.h >= f._settings.w && (o = f._settings.h === k.rows ? 2.5 : 4, e -= f._height / o * u),
                s = i ? 'in' : 'out',
                h = i ? 0.5 : 0,
                f.fadeImage(s, h),
                TweenMax.to(r, l, {
                    delay: y,
                    _x: Math.ceil(c),
                    _y: Math.ceil(e),
                    _scaleX: u,
                    _scaleY: u,
                    ease: Quart.easeInOut,
                    overwrite: 'all',
                    onStart: function () {
                    },
                    onComplete: function () {
                        t && t()
                    }
                }),
                v = v ? !1 : !0
        },
        r.resize = function (n, t) {
            var f,
                i,
                u;
            for (a = n || a, h = t || h, jQuery(r).css({
                width: a,
                height: h
            }), i = 0, u = e.length, i; i < u; i++) f = e[i],
                f.resize(a, h);
            if (d = o._templateId * h - (h - 600), y) for (i = 0, u = y.length, i; i < u; i++) d -= h - y[i];
            c && c.resize(a, h)
        },
        r.focusIn = function () {
            var t,
                n,
                i,
                u;
            if (r.addEvents(), r.resize(), t = ContentController.getCurrentTemplate() - 1, t === o._templateId) for (n = 0, i = e.length, n; n < i; n++) u = e[n],
                u.fadeOverlay('out', 1 + n * 0.1)
        },
        r.focusOut = function () {
            function n() {
                var r = ContentController.getCurrentTemplate() - 1,
                    n,
                    t,
                    i;
                if (r !== o._templateId) {
                    for (n = 0, t = e.length, n; n < t; n++) i = e[n],
                        i.fadeOverlay('in', 1);
                    v = !1
                }
            }
            r.removeEvents(),
                r.closeImage(n)
        },
        r.addEvents = function () {
            r._hasEvents || (Assets.IS_DESKTOP && (jQuery(r).bind(MouseEvent.MOUSE_OVER, it), jQuery(r).bind(MouseEvent.MOUSE_OUT, rt), jQuery(o).bind(MouseEvent.DRAG_START, ut)), BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? jQuery(o).bind(MouseEvent.MOUSE_DOWN, w)  : jQuery(o).bind(MouseEvent.CLICK, w), r._hasEvents = !0)
        },
        r.removeEvents = function () {
            if (r._hasEvents) {
                if (Assets.IS_DESKTOP) {
                    jQuery(r).unbind(MouseEvent.MOUSE_OVER, it),
                        jQuery(r).unbind(MouseEvent.MOUSE_OUT, rt),
                        jQuery(o).unbind(MouseEvent.DRAG_START, ut);
                    var n = ContentController.getCurrentTemplate() - 1
                }
                BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? jQuery(o).unbind(MouseEvent.MOUSE_DOWN, w)  : jQuery(o).unbind(MouseEvent.CLICK, w),
                    r._hasEvents = !1
            }
        },
        et(),
        r
}
function H3H6_BuyTemplate(n) {
    var t = jQuery('<div/>').css({
        position: 'absolute',
        overflow: 'hidden'
    });
    t.skipSeperator = !0,
        t._h3h6PreventHide = !0;
    var i = n,
        o = i.getAttribute('data-path'),
        s = ContentController.getIndexOfPath(ContentController._xml, o);
    t._templateId = s;
    var r = i.getAttribute('data-bgImage'),
        f,
        u = ContentController.WIN_WIDTH,
        e = ContentController.WIN_HEIGHT;
    return t.templateLoad = function (n) {
        function f() {
            ContentController.removePreloader(jQuery(i).parent()),
                n(t)
        }
        var u = [
            r
        ];
        ContentController.addPreloader(jQuery(i).parent()),
            AssetLoader.loadGroup(new AssetGroup(u, f, '/layouts/SBV-Custom/HMProductPage/assets/common/placeholders/'))
    },
        t.templateIn = function () {
            function u() {
                var n = window.location.hash.replace('#', ''),
                    i = n.substring(0, n.lastIndexOf('/'));
                n = i ? i.replace('/', '')  : n.replace('/', ''),
                    n === o && (trace('Forced focusIn: ' + o), t.focusIn())
            }
            var n = i.parentNode.getAttribute('data-background') || i.parentNode.getAttribute('data-bgcolor') || '#F2F2F2';
            jQuery(t).css({
                background: n
            }),
                f = jQuery(Assets.SITECORE_DATA).children('#sc_buyModule').clone(),
                r = AssetLoader.getAsset(r),
                jQuery(t).append(f),
                t.resize(),
                jQuery(t).trigger('onValtechBuyAppended'),
                u()
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
        },
        t.focusOut = function () {
        },
        t.resize = function (n, i) {
            u = n || u,
                e = i || e,
                jQuery(t).css({
                    width: u,
                    height: e
                }),
                r && jQuery(r).css({
                left: (u - 1280) / 2
            }),
                f && jQuery(f).css({
                width: u,
                height: e
            })
        },
        t
}
function GalleryTimelineItem(n, t, i) {
    function c() {
        r.isOpen = !1,
            r.css({
                position: 'absolute'
            }),
            l()
    }
    function l() {
        var y,
            h,
            s,
            a,
            i,
            p,
            c,
            v,
            l;
        u = jQuery(AssetLoader.getAsset(n.getAttribute('data-images'))),
            u[0].width = n.getAttribute('data-images-width'),
            u.addClass('legacy-product-images'),
            r.append(u),
            SmartObject(u[0]),
            r[0].image = u,
            r[0].image.origWidth = u.width,
            y = o < 805 ? 0.8 : 1,
            TweenMax.to(u, 0, {
                _scaleX: y,
                _scaleY: y,
                ease: Linear.easeNone
            }),
            f = jQuery(new SmartObject),
            f.css({
                top: 5,
                width: 500,
                textAlign: 'left',
                position: 'absolute',
                color: '#000'
            }),
            f.prop('_opacity', 0),
            f.prop('_x', 240),
            r.append(f),
            h = jQuery('<div />'),
            h.addClass('legacy-product-headline'),
            h.css({
                width: 500,
                marginLeft: '-5px',
                color: '#000',
                fontSize: '90px',
                fontFamily: 'GothamThin'
            }),
            h.html(n.querySelector('[data-name=\'headline\']').innerHTML),
            f.append(h),
            s = jQuery('<div />'),
            s.addClass('designed-by'),
            s.html(n.querySelector('[data-name=\'subheadline\']').innerHTML),
            s.css({
                width: 500,
                marginTop: '27px',
                marginBottom: '27px',
                color: '#000',
                font: '13px/16px GothamThin'
            }),
            s.find('b').css({
                fontFamily: 'GothamBold',
                fontWeight: '400'
            }),
            f.append(s),
            a = jQuery('<div />'),
            a.html(n.querySelector('[data-name=\'description\']').innerHTML),
            a.css({
                width: 260,
                color: '#000',
                font: '13px/16px ProximaRegular'
            }),
            f.append(a),
            t != 4 && (i = jQuery('<div />'), i.css({
            position: 'relative',
            marginTop: 25,
            cursor: 'pointer'
        }), p = AssetLoader.getAsset('Legacy_btn_rotate'), p.css({
            width: 185,
            height: 42
        }), i.append(p), c = AssetLoader.getAsset('Legacy_btn_rotate_hover'), c.css({
            opacity: 0,
            width: 185,
            height: 42
        }), i.append(c), e = jQuery('<div />'), e.css({
            position: 'absolute',
            color: '#000',
            font: '12px/16px ProximaRegular',
            fontWeight: 600,
            top: 14,
            left: 86
        }), e.text('SIDE VIEW'), i.append(e), i.hover(function () {
            c.stop().animate({
                opacity: 1
            }, 150, 'linear')
        }, function () {
            c.stop().animate({
                opacity: 0
            }, 150, 'linear')
        }), i.mousedown(function () {
            r.swapImage()
        }), u.mousedown(function () {
            r.swapImage()
        })),
            f.append(i),
            v = jQuery('<div />'),
            v.addClass('legacy-date-dot'),
            v.css({
                position: 'absolute',
                top: '554px',
                left: '1px',
                width: 6,
                height: 6,
                backgroundImage: 'url(' + AssetLoader.getAsset('Legacy_timeline_dot.png').get(0).src + ')'
            }),
            f.append(v),
            l = jQuery('<div />'),
            l.addClass('legacy-date-text'),
            l.html(n.getAttribute('data-year')),
            l.css({
                position: 'absolute',
                top: '541px',
                left: '-96px',
                width: 200,
                textAlign: 'center',
                marginTop: '27px',
                color: '#000',
                font: '13px/16px ProximaRegular'
            }),
            f.append(l)
    }
    var r = jQuery('<div />'),
        a = ContentController.WIN_WIDTH,
        o = ContentController.WIN_HEIGHT,
        s = BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        h = t,
        u,
        e,
        f;
    return r.swapImage = function () {
        var t,
            f,
            c;
        i._currentIndex === h && (r.isOpen ? (r.isOpen = !1, e.text('SIDE VIEW'), secondaryImage && TweenMax.to(secondaryImage, s ? 0 : 0.2, {
            _opacity: 0,
            ease: Linear.easeNone,
            onComplete: function () {
                jQuery(r).get(0).removeChild(secondaryImage),
                    secondaryImage = null
            }
        }), TweenMax.to(u, s ? 0 : 0.2, {
            css: {
                opacity: 1
            },
            ease: Linear.easeNone
        }))  : (r.isOpen = !0, secondaryImage = SmartObject(AssetLoader.getAsset(n.getAttribute('data-images') + '_f').get(0)), t = o < 805 ? 0.8 : 1, f = t == 1 ? 0 : - 30, secondaryImage._opacity = 0, jQuery(r).get(0).appendChild(secondaryImage), secondaryImage._scaleX = secondaryImage._scaleY = t, secondaryImage._x = - (440 * t) + 53, secondaryImage._y = f, e.text('FRONT VIEW'), c = Assets.IS_DESKTOP ? 0.2 : 0, TweenMax.to(secondaryImage, s ? 0 : 0.2, {
            _opacity: 1
        }), secondaryImage.addEventListener(MouseAndTouchEvent.MOUSE_DOWN, r.swapImage), TweenMax.to(u, s ? 0 : 0.2, {
            css: {
                opacity: 0
            }
        })))
    },
        r.animateIn = function () {
            var n = o < 805 ? 0.8 : 1;
            TweenLite.to(u, 0.7, {
                css: {
                    left: - (u.width() * n) + 50,
                    opacity: 1
                },
                ease: Cubic.easeInOut
            }),
                f.prop('_x', 103),
                TweenMax.to(f, 0.7, {
                    delay: 0.5,
                    _opacity: 1,
                    ease: Linear.easeNone
                })
        },
        r.animateOut = function () {
            r.isOpen && r.swapImage(),
                TweenMax.to(f, 0.4, {
                    _opacity: 0,
                    ease: Linear.easeNone
                }),
                TweenLite.to(u, 0.7, {
                    delay: 0.4,
                    css: {
                        left: 0
                    },
                    ease: Cubic.easeInOut
                })
        },
        r.resize = function (n, t) {
            o = n,
                o = t
        },
        c(),
        r
}
function GalleryThumb(n, t, i) {
    function h() {
        r.interval,
            r[0].num = t,
            r.css({
                position: 'absolute',
                width: 52,
                height: 52
            }),
            r.prop('_opacity', 0),
            (BrowserDetect.BROWSER_NAME === 'Safari' || BrowserDetect.TABLET) && r.prop('_opacity', 1),
            c()
    }
    function c() {
        var c,
            h,
            i;
        u = SmartObject(AssetLoader.getAsset('Legacy_timer').get(0)),
            u.style.width = '60px',
            u.style.height = '60px',
            u.style.marginTop = '-4px',
            u.style.marginLeft = '-4px',
            u.style.zIndex = 2,
            u._opacity = 0,
            r.append(u),
            e = SmartObject(AssetLoader.getAsset('Legacy_timer_mask').get(0)),
            e.style.width = '60px',
            e.style.height = '60px',
            e.style.marginTop = '-4px',
            e.style.marginLeft = '-4px',
            e.style.zIndex = 3,
            e._opacity = 0,
            r.append(e),
            f = SmartObject(AssetLoader.getAsset('Legacy_timer').get(0)),
            f.style.width = '60px',
            f.style.height = '60px',
            f.style.marginTop = '-4px',
            f.style.marginLeft = '-4px',
            f.style.zIndex = 2,
            f._rotation = 180,
            f._opacity = 0,
            r.append(f),
            h = t == 0 ? 'Legacy_btn_1_w' : 'Legacy_btn_bg_w',
            c = jQuery(SmartObject(AssetLoader.getAsset(h).get(0))),
            c.css({
                position: 'absolute',
                zIndex: 0,
                width: '100%',
                height: '100%'
            }),
            r.append(c),
            h = t == 0 ? 'Legacy_btn_1_b' : 'Legacy_btn_bg_b',
            o = jQuery(SmartObject(AssetLoader.getAsset(h).get(0))),
            o.css({
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                height: '100%'
            }),
            o.prop('_opacity', 0),
            r.append(o),
            s = jQuery(SmartObject(AssetLoader.getAsset('Legacy_btn_pause.png').get(0))),
            s.css({
                position: 'absolute',
                zIndex: 9,
                width: 52,
                height: 52
            }),
            s.prop('_opacity', 0),
            r.append(s),
            t > 0 && (i = SmartObject(AssetLoader.getAsset(n.getAttribute('data-thumb')).get(0)), i.style.position = 'absolute', i.style.zIndex = 2, i.style.width = '100%', i.style.height = '100%', r.append(i)),
            r.css({
                cursor: 'pointer'
            })
    }
    var r = jQuery(new SmartObject),
        o,
        u,
        e,
        f,
        s;
    return r.hover(function () {
        TweenMax.to(o, 0.3, {
            _opacity: 1,
            ease: Linear.easeNone
        })
    }, function () {
        r.selected || TweenMax.to(o, 0.3, {
            _opacity: 0,
            ease: Linear.easeNone
        })
    }),
        r.startTimer = function () {
            i._isTimerKilled || (u._rotation = 0, TweenLite.to([u,
                f], 0.5, {
                _opacity: 1,
                onComplete: function () {
                    r.interval = setTimeout(r.advance, 6000)
                }
            }), TweenLite.to(u, 2.5, {
                delay: 0.5,
                _rotation: 180,
                ease: Linear.easeNone
            }), TweenLite.to(u, 2.5, {
                onComplete: function () {
                    u._opacity = 0,
                        f._opacity = 0,
                        e._opacity = 0
                },
                onStart: function () {
                    f._opacity = 0,
                        e._opacity = 1
                },
                delay: 3,
                _rotation: 360,
                ease: Linear.easeNone
            }))
        },
        r.stopTimer = function () {
            r.interval && (clearTimeout(r.interval), r.interval = null),
                TweenLite.to([u,
                    f,
                    e], 0.5, {
                    _opacity: 0,
                    overwrite: 'all'
                })
        },
        r.advance = function () {
            r.stopTimer();
            for (var n = 0; n < i._thumbs.length; n++) i._thumbs[n].selected = !1,
                i._thumbs[n].trigger('mouseout');
            i._timelineItems[i._currentIndex].animateOut(),
                i._currentIndex++,
                i._currentIndex > 7 && (i._currentIndex = 0),
                i._thumbs[i._currentIndex].selected = !0,
                i._thumbs[i._currentIndex].trigger('mouseover'),
                setTimeout(function () {
                    i.cycle()
                }, 400)
        },
        r.click(function () {
            if (i._currentIndex == this.num) {
                r.interval ? (s.prop('_opacity', 1), r.stopTimer())  : (s.prop('_opacity', 0), r.startTimer());
                return
            }
            i._isTimerKilled = !0,
                i._thumbs[i._currentIndex].stopTimer();
            var n = 0,
                t = i._thumbs.length;
            for (n; n < t; n++) i._thumbs[n].selected = !1,
                i._thumbs[n].trigger('mouseout');
            i._timelineItems[i._currentIndex].animateOut(),
                i._currentIndex = this.num,
                i._thumbs[i._currentIndex].selected = !0,
                i._thumbs[i._currentIndex].trigger('mouseover'),
                setTimeout(function () {
                    i.cycle()
                }, 400)
        }),
        h(),
        r
}
function H6_LegacyTemplate(n) {
    function d() {
        jQuery(t).css({
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.4)',
            background: '#f2f2f2'
        })
    }
    function g() {
        var n;
        for (r = jQuery(new SmartObject), r.css({
            position: 'relative',
            marginTop: '100px',
            height: '600px',
            width: h.children.length * i
        }), jQuery(t).append(r), a = jQuery('<div />'), a.css({
            position: 'absolute',
            bottom: '50px',
            left: '-1px',
            height: '25px',
            width: '100%',
            background: 'url(' + AssetLoader.getAsset('Legacy_timeline.png').get(0).src + ') repeat-x bottom left'
        }), r.append(a), n = 0; n < h.children.length; n++) {
            var f = h.children[n],
                u = n == 0 ? nt(f)  : new GalleryTimelineItem(f, n, t),
                e = i / 2 + i / 2 * n - 120;
            n == 0 && (e = i / 2 - 232),
                u.css('left', e),
                r.append(u),
                t._timelineItems.push(u)
        }
        r.prop('_x', - (i / 2) * (t._timelineItems.length - 1))
    }
    function nt(n) {
        var i = jQuery('<div />'),
            t,
            o,
            r;
        return i.css({
            position: 'absolute'
        }),
            t = jQuery('<div />'),
            o = AssetLoader.getAsset('Legacy_old_logo.png').css({
                width: 68,
                height: 102,
                position: 'relative',
                left: 198
            }),
            t.append(o),
            f = jQuery('<div />'),
            f.css({
                font: '40px GothamThin',
                color: '#000',
                textAlign: 'left',
                position: 'relative',
                width: 464,
                textAlign: 'center',
                marginTop: '20px'
            }),
            f.html(u.getAttribute('data-description')),
            jQuery(t).append(f),
            e = jQuery('<div />'),
            e.css({
                font: '13px GothamBold',
                color: '#000',
                textAlign: 'left',
                position: 'relative',
                width: 464,
                textAlign: 'center',
                marginTop: '3px'
            }),
            e.html(u.getAttribute('data-subheadline')),
            jQuery(t).append(e),
            r = jQuery('<div />'),
            r.css({
                font: '13px/19px ProximaRegular',
                color: '#000',
                textAlign: 'left',
                position: 'relative',
                width: 464,
                textAlign: 'left',
                marginTop: '45px'
            }),
            r.html(n.querySelector('[data-name=\'description\']').innerHTML),
            jQuery(t).append(r),
            t.css({
                width: 464,
                marginTop: '30px',
                color: '#000',
                textAlign: 'left',
                font: '13px/19px ProximaRegular'
            }),
            i.append(t),
            i.animateIn = function () {
                trace('intro animate in'),
                    TweenMax.to(this, 0.4, {
                        css: {
                            opacity: 1
                        },
                        ease: Linear.easeNone
                    })
            },
            i.animateOut = function () {
                trace('intro animate out'),
                    TweenMax.to(this, 0.4, {
                        css: {
                            opacity: 0
                        },
                        ease: Linear.easeNone
                    })
            },
            i
    }
    function tt() {
        var n,
            u,
            r;
        for (o = jQuery('<div />'), o.css({
            position: 'relative',
            left: i / 2,
            marginLeft: '-250px',
            height: '100px',
            width: '500px'
        }), jQuery(t).append(o), n = 0; n < h.children.length; n++) u = h.children[n],
            r = new GalleryThumb(u, n, t),
            r.css('left', 70 * n),
            o.append(r),
            n === 0 && (r.selected = !0, r.trigger('mouseover')),
            t._thumbs.push(r)
    }
    function it() {
        Assets.IS_DESKTOP || jQuery(t).touchwipe({
            wipeLeft: function () {
                v('Left')
            },
            wipeRight: function () {
                v('Right')
            },
            min_move_x: 150,
            min_move_y: 150,
            preventDefaultEvents: !0
        })
    }
    function rt() {
        var n = window.location.hash.replace('#', ''),
            i = n.substring(0, n.lastIndexOf('/'));
        n = i ? i.replace('/', '')  : n.replace('/', ''),
            n === l && (trace('Forced focusIn: ' + l), t.focusIn())
    }
    function v(n) {
        var r,
            i;
        if (n === 'Right') {
            if (t._currentIndex - 1 < 0) return !1;
            r = - 1
        } else if (n === 'Left') {
            if (t._currentIndex >= t._thumbs.length - 1) return !1;
            r = 1
        }
        for (t._isTimerKilled = !0, t._thumbs[t._currentIndex].stopTimer(), i = 0; i < t._thumbs.length; i++) t._thumbs[i].selected = !1,
            t._thumbs[i].trigger('mouseout');
        t._timelineItems[t._currentIndex].animateOut(),
            t._currentIndex += r,
            setTimeout(function () {
                t._thumbs[t._currentIndex].selected = !0,
                    t._thumbs[t._currentIndex].trigger('mouseover'),
                    t.cycle()
            }, 400)
    }
    function ut() {
        t._timelineItems[t._currentIndex].animateIn(),
            TweenLite.to(r, 0.7, {
                _x: - (i / 2) * t._currentIndex,
                ease: k.easeInOut
            })
    }
    function ft() {
        trace('animateIn'),
            r && TweenLite.to(r, 2, {
            _x: 0,
            ease: Circ.easeInOut,
            overwrite: 'all'
        }),
            BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || (jQuery.each(t._thumbs, function (n) {
            var i = t._thumbs[n],
                r = 100 * n + 1800;
            TweenMax.to(i, 0.3, {
                delay: r / 1000,
                _opacity: 1,
                ease: Linear.easeNone,
                overwrite: !0
            })
        }), t._timelineItems[0] && setTimeout(function () {
            t._timelineItems[0].animateIn()
        }, 1000), t._thumbs[0] && setTimeout(function () {
        }, 2500), t.resize(), c = !1)
    }
    function w(n) {
        n = n || window.event;
        var u = n.target || n.currentTarget,
            t = {
                x: 0,
                y: 0
            },
            r;
        n.pageX || n.pageY ? (t.x = n.pageX, t.y = n.pageY)  : (n.clientX || n.clientY) && (t.x = n.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t.y = n.clientY + document.body.scrollTop + document.documentElement.scrollTop),
            r = t.x > i * 0.8 ? 'Left' : t.x < i * 0.2 ? 'Right' : !1,
            r && v(r)
    }
    function et() {
        var n = 0,
            r = t._timelineItems.length;
        for (n; n < r; n++) t._timelineItems[n].resize(i, s)
    }
    var t = jQuery('<div/>').css({
            position: 'absolute',
            overflow: 'hidden'
        }),
        u = n,
        l = u.getAttribute('data-path'),
        b = ContentController.getIndexOfPath(ContentController._xml, l),
        i = ContentController.WIN_WIDTH,
        s = ContentController.WIN_HEIGHT,
        k = Cubic,
        h,
        o,
        r,
        a,
        c = !0,
        f,
        e,
        p = BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        y;
    return t.templateLoad = function (n) {
        function i() {
            n(t),
                ContentController.removePreloader(jQuery(u).parent())
        }
        ContentController.addPreloader(jQuery(u).parent()),
            AssetLoader.loadGroup(new AssetGroup(['Legacy_btn_1_b.png',
                'Legacy_btn_1_w.png',
                'Legacy_btn_1.png',
                'Legacy_btn_2.png',
                'Legacy_btn_3.png',
                'Legacy_btn_4.png',
                'Legacy_btn_5.png',
                'Legacy_btn_6.png',
                'Legacy_btn_7.png',
                'Legacy_btn_bg_b.png',
                'Legacy_btn_bg_w.png',
                'Legacy_btn_rotate_hover.png',
                'Legacy_btn_rotate.png',
                'Legacy_h_3i_f.png',
                'Legacy_h_3i.png',
                'Legacy_h_Form1_f.png',
                'Legacy_h_Form1.png',
                'Legacy_h_Form2_f.png',
                'Legacy_h_Form2.png',
                'Legacy_h_H3_f.png',
                'Legacy_h_H3.png',
                'Legacy_h_H6_f.png',
                'Legacy_h_H6.png',
                'Legacy_h_U70_f.png',
                'Legacy_h_U70.png',
                'Legacy_timeline_dot.png',
                'Legacy_timeline.png',
                'Legacy_timer.png',
                'Legacy_timer_mask.png',
                'Legacy_old_logo.png',
                'Legacy_btn_pause.png',
                'Legacy_btn_8.png',
                'Legacy_h_Form2i_f.png',
                'Legacy_h_Form2i.png'], i, '/layouts/SBV-Custom/HMProductPage/assets/beoplayH6/legacy/'))
    },
        t.templateIn = function () {
            t.skipSeperator = !0,
                t._templateId = b,
                t._currentIndex = 0,
                t._thumbs = [
                ],
                t._timelineItems = [
                ],
                t._isTimerKilled = !1,
                c = !0,
                h = u.querySelector('[data-type=\'timeline\']'),
                d(),
                g(),
                tt(),
                it(),
                t.resize(),
                rt()
        },
        t.cycle = function () {
            ut()
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
            var n,
                u;
            trace('focusIn'),
                n = ContentController.getCurrentTemplate() - 1,
                n == t._templateId && (t._isTimerKilled = !1, c = !0, t._currentIndex = 0, r && (r.prop('_x', - (i / 2) * (t._timelineItems.length - 1)), u = BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? 3000 : 1500, setTimeout(ft, u)), Assets.IS_DESKTOP && document.body.addEventListener(MouseEvent.CLICK, w), t.resize())
        },
        t.focusOut = function () {
            Assets.IS_DESKTOP && document.body.removeEventListener(MouseEvent.CLICK, w),
                r && TweenLite.killTweensOf(r),
                BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || (jQuery.each(t._thumbs, function (n) {
                var i = t._thumbs[n];
                i.stop(),
                    TweenMax.to(i, 0.3, {
                        delay: n * 0.03,
                        _opacity: 0,
                        ease: Linear.easeNone,
                        overwrite: !0
                    })
            }), t._isTimerKilled = !0),
                setTimeout(function () {
                    t._thumbs[t._currentIndex].stopTimer();
                    for (var n = 0; n < t._thumbs.length; n++) t._thumbs[n].selected = !1,
                        t._thumbs[n].trigger('mouseout'),
                        t._thumbs[n].css('opacity', 0);
                    t._timelineItems[t._currentIndex].animateOut(),
                        t._currentIndex = 0,
                        t._thumbs[t._currentIndex].selected = !0,
                        t._thumbs[t._currentIndex].trigger('mouseover')
                }, 500)
        },
        y = 1,
        t.resize = function (n, u) {
            var a,
                e,
                h,
                v,
                f,
                l;
            for (i = n || i, s = u || s, jQuery(t).css({
                width: i,
                height: s
            }), f = 0; f < t._timelineItems.length; f++) l = t._timelineItems[f],
                a = i / 2 + i / 2 * f - 120,
                f == 0 && (a = i / 2 - 232),
                l.css('left', a);
            if (o.css({
                left: i / 2
            }), o && p && o.css({
                position: 'absolute',
                bottom: 0
            }), e = s - 750, e = e < 10 ? 10 : e, e = e > 230 ? 230 : e, r.css({
                marginTop: e / (p ? 4 : 1)
            }), h = s < 805 ? 0.8 : 1, y != h) {
                for (v = h == 1 ? 0 : - 30, f = 0; f < t._timelineItems.length; f++) l = t._timelineItems[f].find('.legacy-product-images'),
                    l.css({
                        scale: h,
                        top: v
                    });
                h == 1 ? (jQuery('.legacy-product-headline').css({
                    fontSize: '90px',
                    marginTop: 0
                }), jQuery('.legacy-date-dot').css('top', 554), jQuery('.legacy-date-text').css('top', 541), jQuery('.designed-by').css({
                    marginTop: 27,
                    marginBottom: 27
                }), r.height('600px'))  : (jQuery('.legacy-product-headline').css({
                    fontSize: '40px',
                    marginTop: 20
                }), jQuery('.legacy-date-dot').css('top', 476), jQuery('.legacy-date-text').css('top', 462), jQuery('.designed-by').css({
                    marginTop: 12,
                    marginBottom: 12
                }), r.height('520px')),
                    y = h
            }
            c || r.prop('_x', - (i / 2) * t._currentIndex),
                et()
        },
        t
}
function FooterTemplate(n) {
    var t = jQuery('<div/>').css({
        position: 'absolute',
        overflow: 'hidden'
    });
    t.skipSeperator = !0,
        t._h3h6PreventHide = !0;
    var u = n,
        i = ContentController.WIN_WIDTH,
        r = ContentController.WIN_HEIGHT;
    return t.templateLoad = function (i) {
        function o() {
            ContentController.removePreloader(jQuery(u).parent()),
                i(t)
        }
        var e = jQuery(n).children('#sc_megaFooter'),
            r,
            f;
        jQuery(t).append(e),
            jQuery(t).trigger('onValtechMegaFooterAppended'),
            r = [
            ],
            f = '/layouts/SBV-Custom/HMProductPage/assets/common/placeholders/',
            ContentController.addPreloader(jQuery(u).parent()),
            AssetLoader.loadGroup(new AssetGroup(r, o, f))
    },
        t.templateIn = function () {
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
        },
        t.focusOut = function () {
        },
        t.resize = function (n, u) {
            i = n || i,
                r = u || r,
                jQuery(t).css({
                    width: i,
                    height: r
                })
        },
        t
}
function VideoPlayer(n, t, i, r, u, f) {
    function hi() {
        function t() {
            v.hidePreloader(),
                ii(),
                ot && ot()
        }
        function i() {
            jQuery(o).css({
                position: 'absolute',
                overflow: 'hidden'
            }),
                o._opacity = 0
        }
        function r() {
            jQuery(l).css({
                position: 'absolute',
                overflow: 'hidden',
                '-webkit-backface-visibility': 'hidden'
            }),
                l._opacity = 0,
                jQuery(o).append(l);
            var n = h === k ? 'silver' : h;
            e.backRocks = SmartObject(AssetLoader.getAsset(n + '_04_backRocks.png').get(0)),
                e.middleRocks = SmartObject(AssetLoader.getAsset(n + '_02_middleRocks.png').get(0)),
                e.frontRocks = SmartObject(AssetLoader.getAsset(n + '_01_rocks.png').get(0)),
                e.earphonesLeft = SmartObject(AssetLoader.getAsset(n + '_03_earphones_left.png').get(0)),
                e.earphonesRight = SmartObject(AssetLoader.getAsset(n + '_03_earphones_right.png').get(0)),
                e.backgroundExplosion = SmartObject(AssetLoader.getAsset(n + '_05_explosion.jpg').get(0)),
                e.backRocks.style['-webkit-backface-visibility'] = 'hidden',
                e.middleRocks.style['-webkit-backface-visibility'] = 'hidden',
                e.frontRocks.style['-webkit-backface-visibility'] = 'hidden',
                e.earphonesLeft.style['-webkit-backface-visibility'] = 'hidden',
                e.earphonesRight.style['-webkit-backface-visibility'] = 'hidden',
                e.backgroundExplosion.style['-webkit-backface-visibility'] = 'hidden',
                _videoFadeTop = SmartObject(AssetLoader.getAsset('video_fade_edges.png')),
                _videoFadeTop._opacity = 0,
                _videoFadeTop.style.pointerEvents = 'none',
                _videoFadeBottom = SmartObject(AssetLoader.getAsset('video_fade_edges.png')),
                _videoFadeBottom._opacity = 0,
                _videoFadeBottom._rotation = 180,
                _videoFadeBottom.style.pointerEvents = 'none',
                jQuery(l).append(e.backgroundExplosion),
                jQuery(l).append(e.backRocks),
                    h === 'red' ? (jQuery(l).append(e.earphonesRight), jQuery(l).append(e.middleRocks), jQuery(l).append(e.earphonesLeft))  : (jQuery(l).append(e.earphonesLeft), jQuery(l).append(e.middleRocks), jQuery(l).append(e.earphonesRight)),
                jQuery(l).append(y),
                jQuery(l).append(e.frontRocks),
                yt || (jQuery(o).append(_videoFadeTop), jQuery(o).append(_videoFadeBottom))
        }
        function u() {
            y = new SmartObject,
                jQuery(y).css({
                    width: 500,
                    height: 90,
                    zIndex: 100
                }),
                a = new SmartObject,
                a._opacity = it ? 1 : 0,
                a._pos = nt.getAttribute('data-captionPos'),
                a.innerHTML = nt.innerHTML,
                jQuery(a).css({
                    width: 500,
                    height: 90,
                    font: '24px/24px GothamThin',
                    color: 'white',
                    textTransform: 'uppercase',
                    pointerEvents: 'none'
                }),
                jQuery(y).append(a)
        }
        function f() {
            c = new SmartObject,
                c._opacity = 0,
                jQuery(c).css({
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer'
                });
            var n = SmartObject(AssetLoader.getAsset('hotspot.png').css({
                width: 40,
                height: 40,
                margin: '4px 0 0 4px',
                pointerEvents: 'none'
            }).get(0));
            jQuery(c).append(n),
                jQuery(y).append(c)
        }
        function p() {
            function n() {
                s.addEventListener(MediaEvent.LOADED_DATA, ni)
            }
            function t() {
                var t = BrowserDetect.BROWSER_NAME === 'Firefox' ? nt.getAttribute('data-videoSrcOgg')  : nt.getAttribute('data-videoSrcMp4'),
                    n = document.createElement('source');
                n.src = t,
                    s.appendChild(n)
            }
            s = document.createElement('video'),
                s.style.position = 'absolute',
                s.controls = !1,
                s.loop = !1,
                s.muted = !0,
                s.defaultMuted = !0,
                s.defaultPlaybackRate = 1,
                n(),
                t(),
                jQuery(o).append(s)
        }
        if (i(), u(), vt || p(), r(), f(), vt) {
            var n = o._opacity === 0 ? 1 : 0;
            TweenMax.to(o, n, {
                _opacity: 1,
                ease: Quart.easeInOut,
                overwrite: 'auto',
                onStart: t
            })
        }
        o.resize()
    }
    function pt() {
        if (at = ContentController.getCurrentTemplate() - 1, g = Math.round(s.duration * 1000) / 1000 - 0.04, at === v._templateId || at === 0) {
            h !== k || et || v.showPresentationCopy();
            var t = h === k ? 2 : 0,
                n = h === k ? 2 : 0;
            n = o._opacity === 1 ? 0.5 : n,
                TweenMax.to(o, n, {
                    delay: t,
                    _opacity: 1,
                    ease: Quart.easeInOut,
                    overwrite: 'auto',
                    onStart: function () {
                        s.play(),
                            lt || (lt = !0, TweenMax.ticker.addEventListener('tick', ti))
                    }
                })
        }
    }
    function ni() {
        v._playedVids.indexOf(h) === - 1 && BrowserDetect.BROWSER_NAME !== 'Firefox' ? (g = s.duration, dt = setInterval(ci, 250))  : pt(),
            s.removeEventListener(MediaEvent.LOADED_DATA, ni)
    }
    function ci() {
        if (s.readyState) {
            var n = s.buffered.end(0),
                t = 100 * n / g;
            n >= g - 10 && (clearInterval(dt), v.hidePreloader(), setTimeout(pt, 1000))
        }
    }
    function ti() {
        var n = Math.round(s.currentTime * 1000) / 1000;
        n >= kt && !ut ? ii()  : n >= g && ut && (lt = !1, TweenMax.ticker.removeEventListener('tick', ti), ri())
    }
    function ii() {
        trace('VideoPlayer: videoInParallax'),
            s && s.pause(),
            ut = !0,
                h === k || yt ? (rt(0, 0), ui('show', function () {
            o.addEvents(),
                s && h === k && (s.style.opacity = 0)
        }))  : li(function () {
            ui('show', function () {
                o.addEvents(rt),
                    setTimeout(function () {
                        if (o._hasEvents) {
                            var n = Math.ceil(Math.random() * 10);
                            rt(n, n, !1, 'onMouseMove')
                        }
                    }, 600)
            })
        }),
            st('show'),
            v.startCycle()
    }
    function ri() {
        trace('VideoPlayer: videoEnded'),
            v.showPreloader(),
            o.quit()
    }
    function ui(n, t) {
        var i = n === 'hide' ? 0 : 0.5;
        TweenMax.to(l, i, {
            _opacity: n === 'hide' ? 0 : 1,
            ease: Quart.easeIn,
            overwrite: 'auto',
            onComplete: function () {
                t && t()
            }
        })
    }
    function wt(n, t) {
        var i = n === 'hide' ? 0.5 : 1;
        TweenMax.to(a, i, {
            _opacity: it ? 1 : n === 'hide' ? 0 : 1,
            ease: Quart.easeInOut,
            overwrite: 'auto',
            onComplete: function () {
                t && t()
            }
        })
    }
    function st(n, t) {
        if (it) return t && t(),
            !1;
        var i = n === 'hide' ? 1 : 2;
        TweenMax.to(c, i, {
            _opacity: it ? 0 : n === 'hide' ? 0 : 1,
            ease: Quart.easeInOut,
            overwrite: 'auto',
            onComplete: function () {
                t && t()
            }
        })
    }
    function w(n, t) {
        function e() {
            n.style.width = r + 'px',
                n.style.height = i + 'px'
        }
        function o() {
            if (t) return !1;
            u = Math.ceil(b - r) / 2,
                f = Math.ceil(p - i) / 2,
                isNaN(n._x) ? (n.style.left = u + 'px', n.style.top = f + 'px')  : (n._x = u, n._y = f)
        }
        var r = Math.ceil(b),
            i = Math.ceil(r * bt),
            u,
            f;
        return i < p && (i = Math.ceil(p), r = Math.ceil(i / bt)),
            e(),
            o(),
        {
            w: r,
            h: i,
            x: u,
            y: f
        }
    }
    function ht() {
        TweenMax.killTweensOf(c),
            st('hide'),
            wt('show'),
            TweenMax.to(c, 0, {
                delay: 5,
                onComplete: function () {
                    st('show'),
                        wt('hide')
                }
            })
    }
    function fi() {
    }
    function ei(n) {
        function i() {
            var t = {
                x: 0,
                y: 0
            };
            return n.pageX || n.pageY ? (t.x = n.pageX, t.y = n.pageY)  : n.clientX || n.clientY ? (t.x = n.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t.y = n.clientY + document.body.scrollTop + document.documentElement.scrollTop)  : n.targetTouches && n.targetTouches.length == _status.fingerCount && (t.x = n.touches[0].pageX, t.y = n.touches[0].pageY),
                t
        }
        n = n.originalEvent || window.event,
            n.preventDefault();
        var t = i();
        ft.x = t.x,
            ft.y = t.y - gt,
            rt(b / 2 - ft.x, p / 2 - ft.y, !1, 'onMouseMove'),
            v.hideIpadInstructions()
    }
    function rt(n, t, i, r) {
        var o = n || 0,
            c = t || 0,
            u = n === 0 ? 0.5 : 1,
            s = 1.65,
            f = Quart.easeOut;
        r === 'onMouseMove' && (f = Quad.easeOut),
            TweenMax.to(e.backgroundExplosion, u * 3, {
                _opacity: 1,
                _scaleX: 1,
                _scaleY: 1,
                overwrite: 'auto',
                ease: f
            }),
            TweenMax.to(e.backgroundExplosion, u, {
                _x: o / (s * 32),
                _y: c / 75,
                overwrite: 'auto',
                ease: f
            }),
            TweenMax.to(e.backRocks, u, {
                _x: o / (s * 16),
                _y: c / 20,
                _opacity: 1,
                overwrite: 'auto',
                ease: f
            }),
            TweenMax.to(e.middleRocks, u, {
                _x: o / (s * 8),
                _y: c / 20,
                _opacity: 1,
                overwrite: 'auto',
                ease: f
            }),
            TweenMax.to(e.earphonesLeft, u, {
                _x: o / (s * (h === 'red' ? 2 : 4)),
                _y: c / 100,
                _opacity: 1,
                overwrite: 'auto',
                ease: f
            }),
            TweenMax.to(e.earphonesRight, u, {
                _x: o / (s * (h === 'red' ? 4 : 2)),
                _y: c / 75,
                _opacity: 1,
                overwrite: 'auto',
                ease: f
            }),
            TweenMax.to(e.frontRocks, u, {
                _x: o / s,
                _y: c / 10,
                _opacity: 1,
                _scaleX: 1,
                _scaleY: 1,
                ease: f,
                overwrite: 'auto',
                onComplete: function () {
                    i && i()
                }
            }),
            Assets.IS_TABLET || BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 || TweenMax.to(y, u, {
            _x: a._orgX + o / (s * 8),
            overwrite: 'auto'
        })
    }
    function li(n) {
        var o = 0,
            s = 0,
            t = 0,
            c = 1.65,
            i = {
                x: 0,
                y: 0,
                delay: 0
            },
            r = {
                x: 0,
                y: 0,
                delay: 0
            },
            u,
            f;
        switch (h) {
            case 'silverIntro':
            case 'silver':
                i = {
                    x: window.innerWidth,
                    y: 0,
                    delay: 0.2
                },
                    r = {
                        x: - window.innerWidth,
                        y: 0,
                        delay: 0
                    };
                break;
            case 'gold':
                i = {
                    x: 0,
                    y: window.innerHeight,
                    delay: 0
                },
                    r = {
                        x: 0,
                        y: window.innerHeight,
                        delay: 0.2
                    };
                break;
            case 'red':
                i = {
                    x: window.innerWidth,
                    y: window.innerHeight * 0.7,
                    delay: 0
                },
                    r = {
                        x: - window.innerWidth,
                        y: 0,
                        delay: 0.2
                    };
                break;
            case 'black':
                i = {
                    x: - window.innerWidth,
                    y: 0,
                    delay: 0.2
                },
                    r = {
                        x: window.innerWidth,
                        y: 0,
                        delay: 0
                    }
        }
        TweenMax.to([_videoFadeTop,
            _videoFadeBottom], t, {
            _opacity: 0,
            overwrite: 'all'
        }),
            TweenMax.to(e.backgroundExplosion, t, {
                _x: o / (c * 32),
                _y: s / 75,
                _opacity: 0,
                _scaleX: 1.3,
                _scaleY: 1.3,
                overwrite: 'all'
            }),
            u = d( - 200, 200),
            f = d( - 200, 200),
            TweenMax.to(e.backRocks, t, {
                _x: u,
                _y: f,
                _opacity: 0,
                overwrite: 'all'
            }),
            u = d( - 200, 200),
            f = d( - 200, 200),
            TweenMax.to(e.middleRocks, t, {
                _x: u,
                _y: f,
                _opacity: 0,
                overwrite: 'all'
            }),
            TweenMax.to(e.earphonesLeft, t, {
                delay: i.delay,
                _x: i.x,
                _y: i.y,
                overwrite: 'all',
                ease: Quart.easeInOut
            }),
            TweenMax.to(e.earphonesRight, t, {
                delay: r.delay,
                _x: r.x,
                _y: r.y,
                overwrite: 'all',
                ease: Quart.easeInOut
            }),
            TweenMax.to(e.frontRocks, t, {
                _x: o / c,
                _y: s / 10,
                _scaleX: 1.1,
                _scaleY: 1.1,
                overwrite: 'all',
                onComplete: function () {
                    n && n()
                }
            })
    }
    function ai(n) {
        var t = 1.6,
            i = {
                x: 0,
                y: 0,
                delay: 0
            },
            r = {
                x: 0,
                y: 0,
                delay: 0
            },
            u,
            f;
        switch (h) {
            case 'silverIntro':
            case 'silver':
                i = {
                    x: window.innerWidth,
                    y: window.innerHeight,
                    delay: 0.2
                },
                    r = {
                        x: - window.innerWidth,
                        y: 0,
                        delay: 0
                    };
                break;
            case 'gold':
                i = {
                    x: 0,
                    y: window.innerHeight * 3,
                    delay: 0
                },
                    r = {
                        x: 0,
                        y: window.innerHeight * 3,
                        delay: 0.2
                    };
                break;
            case 'red':
                i = {
                    x: window.innerWidth,
                    y: 0,
                    delay: 0
                },
                    r = {
                        x: - window.innerWidth,
                        y: 100,
                        delay: 0.2
                    };
                break;
            case 'black':
                i = {
                    x: - window.innerWidth,
                    y: 0,
                    delay: 0.2
                },
                    r = {
                        x: window.innerWidth,
                        y: 0,
                        delay: 0
                    }
        }
        TweenMax.to([_videoFadeTop,
            _videoFadeBottom], t / 2, {
            _opacity: 1,
            overwrite: 'all'
        }),
            TweenMax.to(e.backgroundExplosion, t * 2, {
                _x: 0,
                _y: 0,
                _scaleX: 0.9,
                _scaleY: 0.9,
                _opacity: 0,
                overwrite: 'auto'
            }),
            u = d( - 200, 200),
            f = d( - 200, 200),
            TweenMax.to(e.backRocks, t, {
                _x: u,
                _y: f,
                _opacity: 0,
                overwrite: 'auto'
            }),
            u = d( - 200, 200),
            f = d( - 200, 200),
            TweenMax.to(e.middleRocks, t * 2, {
                _x: u,
                _y: f,
                _opacity: 0,
                overwrite: 'auto'
            }),
            TweenMax.to(e.earphonesLeft, t, {
                delay: i.delay,
                _x: i.x,
                _y: i.y,
                overwrite: 'auto',
                ease: Quart.easeInOut
            }),
            TweenMax.to(e.earphonesRight, t, {
                delay: r.delay,
                _x: r.x,
                _y: r.y,
                overwrite: 'auto',
                ease: Quart.easeInOut
            }),
            TweenMax.to(e.frontRocks, t * 0.75, {
                _x: 0,
                _y: 0,
                _scaleX: 1.1,
                _scaleY: 1.1,
                _opacity: 0,
                overwrite: 'auto',
                onComplete: function () {
                    n && n()
                }
            })
    }
    function oi(n, t) {
        vt ? (tt && tt(), TweenMax.to(o, 0, {
            delay: n || 3,
            overwrite: 'all',
            onComplete: function () {
                jQuery(o).remove(),
                    o = null,
                    trace('_isFallback VIDEO REMOVED!!!!')
            }
        }))  : TweenMax.to(o, 0.5, {
            delay: n || 0,
            _opacity: 0,
            ease: Quart.easeInOut,
            overwrite: 'auto',
            onComplete: function () {
                jQuery(o).remove(),
                    o = null,
                    tt && !t && tt()
            }
        })
    }
    function d(n, t) {
        return Math.floor(Math.random() * (t - n + 1) + n)
    }
    var o = new SmartObject;
    o._hasEvents = !1;
    var nt = n,
        s,
        h = nt.getAttribute('data-id'),
        bt = 720 / 1280,
        g,
        ut = !1,
        v = t,
        ct = i,
        a,
        y,
        c,
        k = 'silverIntro',
        kt = h === k ? 4.8 : 1.4;
    BrowserDetect.BROWSER_NAME === 'Safari' && BrowserDetect.BROWSER_VERSION >= 7 && (kt -= 0.3);
    var l = new SmartObject,
        e = {
            backRocks: null,
            middleRocks: null,
            frontRocks: null,
            earphonesRight: null,
            earphonesLeft: null,
            backgroundExplosion: null
        },
        ft = {
            x: 0,
            y: 0
        },
        et = !1,
        lt = !1,
        at,
        tt = u,
        ot = f,
        dt,
        vt = r,
        it = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        si = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 9,
        gt,
        yt = Assets.IS_PHONE || BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        b = ContentController.WIN_WIDTH,
        p = ContentController.WIN_HEIGHT;
    return o.playOutro = function () {
        function n() {
            s ? (trace('has video'), v.showPreloader(), tt(), oi(1, !0))  : (trace('no video'), ri())
        }
        trace('VideoPlayer: playOutro'),
            o.removeEvents(),
            TweenMax.to(c, 0.3, {
                _opacity: 0,
                ease: Quart.easeInOut,
                overwrite: 'all'
            });
        var t = s ? w(s)  : w(e.frontRocks);
        yt || Assets.IS_TABLET ? rt(0, 0, n)  : ai(n),
            wt('hide'),
            st('hide')
    },
        o.quit = function () {
            oi(1)
        },
        o.pause = function () {
            g && s.pause()
        },
        o.play = function () {
            g && !et && pt()
        },
        o.addEvents = function (n) {
            !o._hasEvents && ut && (Assets.IS_DESKTOP ? (jQuery(o).bind(MouseEvent.MOUSE_DOWN, fi), jQuery(c).bind(MouseEvent.MOUSE_OVER, ht))  : jQuery(c).bind(MouseEvent.CLICK, ht), jQuery(v).bind(MouseAndTouchEvent.MOUSE_MOVE, ei), ct.enable(), h !== k || et || (et = !0, ot && ot(), ct.focusIn()), o._hasEvents = !0, n && n())
        },
        o.removeEvents = function (n) {
            o._hasEvents && (Assets.IS_DESKTOP ? (jQuery(o).unbind(MouseEvent.MOUSE_DOWN, fi), jQuery(c).unbind(MouseEvent.MOUSE_OVER, ht))  : jQuery(c).unbind(MouseEvent.CLICK, ht), jQuery(v).unbind(MouseAndTouchEvent.MOUSE_MOVE, ei), ct.disable(), TweenMax.killTweensOf(c), o._hasEvents = !1, n && n())
        },
        o.resize = function (n, t) {
            b = n || b,
                p = t || p,
                jQuery(o).css({
                    width: b,
                    height: p
                }),
                y._x = a._pos.indexOf('right') !== - 1 ? b - 550 : it || si || Assets.IS_TABLET ? 300 : 300,
                y._y = a._pos.indexOf('top') !== - 1 ? 100 : p - 200,
                a._orgX = y._x,
                a._orgY = y._y,
                c._x = a._pos.indexOf('right') !== - 1 ? 375 : - 60,
                gt = v._templateId * p - (p - 600),
                _videoFadeTop.style.width = b + 'px',
                _videoFadeTop.style.height = '150px',
                _videoFadeBottom.style.width = b + 'px',
                _videoFadeBottom.style.height = '150px',
                _videoFadeBottom._y = p - 150,
                w(e.backgroundExplosion, !0),
                w(e.backRocks, !0),
                w(e.middleRocks, !0),
                w(e.earphonesLeft, !0),
                w(e.earphonesRight, !0),
                w(e.frontRocks, !0),
                s && w(s),
                w(l)
        },
        hi(),
        o
}
function H3_TravelingGrid(n, t, i, r) {
    function l() {
        u.style.backgroundColor = '#FFFFFF',
            u.style.zIndex = 2,
            u.style.display = 'none',
            u.style.pointerEvents = 'none',
            e.appendChild(u);
        var f = 0,
            l = n.children.length,
            h,
            c = 0,
            s = 0,
            a = Math.ceil(ContentController.WIN_WIDTH / 4),
            v = Math.ceil(ContentController.WIN_HEIGHT / 3);
        for (f; f < l; f++) h = i ? new H3_TravelingGridItemSmall(n.children[f]._index, s, n.children[f], t, r)  : new H3_TravelingGridItem(f + 1, s, n.children[f], t),
            h._x = a * s,
            h._y = v * c,
            e.appendChild(h),
            o.push(h),
            i ? c++ : (s++, s > 3 && (s = 0, c++))
    }
    function c() {
        var n = s + ContentController.WIN_WIDTH * f.size,
            t = h + ContentController.WIN_HEIGHT * f.size;
        n > ContentController.WIN_WIDTH && (n = ContentController.WIN_WIDTH),
            t > ContentController.WIN_HEIGHT && (t = ContentController.WIN_HEIGHT),
            u.style.width = n + 'px',
            u.style.height = t + 'px',
            u._x = s * f.position.column * f.placement,
            u._y = h * f.position.row * f.placement
    }
    function a() {
        TweenLite.to(u, 0.3, {
            _opacity: 0,
            onComplete: function () {
                u.style.display = 'none',
                    u.style.zIndex = 0
            }
        })
    }
    function v(n) {
        var i = Math.ceil(n / 4) - 1,
            t = n - i * 4 - 1,
            r = {
                row: i,
                column: t
            };
        t < 3 ? t++ : t--,
            f.position.row = i,
            f.position.column = t
    }
    var e = new SmartObject,
        y = new SmartObject,
        o = [
        ],
        u = new SmartObject,
        f = {
            color: '#FFFFFF',
            size: 0,
            placement: 1,
            position: {
                row: 0,
                column: 0
            }
        },
        s = 0,
        h = 0;
    return e.resize = function () {
        var n = 0,
            u = o.length,
            r,
            t;
        for (s = Math.ceil(ContentController.WIN_WIDTH / 4), h = Math.ceil(ContentController.WIN_HEIGHT / 3), r = 0, t = 0, n; n < u; n++) o[n].resize(s, h),
            o[n]._x = s * t,
            o[n]._y = h * r,
            i ? r++ : (t++, t > 3 && (t = 0, r++));
        c()
    },
        e.animateToVideo = function (n, t, i) {
            f.color = n,
                u.style.backgroundColor = n,
                v(t),
                u._opacity = 1,
                u.style.zIndex = 2,
                u.style.display = 'inline',
                TweenLite.to(f, 0.5, {
                    size: 1,
                    placement: 0,
                    onUpdate: c,
                    onComplete: i
                })
        },
        e.animateToGrid = function (n) {
            f.position.column = o[n].getPosition(),
                TweenLite.to(f, 0.5, {
                    size: 0,
                    placement: 1,
                    onUpdate: c,
                    onComplete: a
                }),
                e.resetItems()
        },
        e.resetItems = function () {
            var n = 0,
                t = o.length;
            for (n; n < t; n++) o[n].reset()
        },
        l(),
        e
}
function H3_TravelingGridItem(n, t, i, r) {
    function wt() {
        s.style.backgroundColor = i.getAttribute('data-color'),
            s.style.pointerEvents = 'none',
            u.appendChild(s),
            b.style.backgroundColor = '#FFFFFF',
            b.style.width = '36px',
            b.style.height = '1px',
            b._opacity = 0,
            s.appendChild(b),
            k.style.backgroundColor = '#FFFFFF',
            k.style.width = '36px',
            k.style.height = '1px',
            k._opacity = 0,
            s.appendChild(k),
            y.style.color = '#FFFFFF',
            y.style.textAlign = 'center',
            y._opacity = 0,
            y.innerHTML = i.querySelector('div[data-name="name"]').innerHTML,
            s.appendChild(y),
            p.style.color = '#FFFFFF',
            p.style.textAlign = 'center',
            p._opacity = 0,
            p.innerHTML = 'Destination: ' + i.querySelector('div[data-name="destination"]').innerHTML,
            s.appendChild(p);
        var t = i.querySelector('div[data-name="name"]').innerHTML;
        w.style.color = '#FFFFFF',
            w.style.textAlign = 'center',
            w._opacity = 0,
            w.innerHTML = 'Hear about ' + bt(t) + '’libs Dream Destination',
            s.appendChild(w),
            a.style.overflow = 'hidden',
            u.appendChild(a),
            h = AssetLoader.getAsset('BW_' + n, !0),
            f = AssetLoader.getAsset('Color_' + n, !0),
            f.onload = function (n) {
                n = n || window.event;
                var t = n.target || n.currentTarget || n.srcElement;
                t._orgW = t.naturalWidth || t.width,
                    t._orgH = t.naturalHeight || t.height,
                    t._ratio = t._orgH / t._orgW,
                    u.resize()
            },
            h.onload = function (n) {
                n = n || window.event;
                var t = n.target || n.currentTarget || n.srcElement;
                t._orgW = t.naturalWidth || t.width,
                    t._orgH = t.naturalHeight || t.height,
                    t._ratio = t._orgH / t._orgW,
                    u.resize()
            },
            BrowserDetect.BROWSER_NAME == 'Explorer' && (h.style.width = '500px', h.style.height = '370px', f.style.width = '500px', f.style.height = '370px'),
            a.appendChild(h),
            a.appendChild(f),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 && (a.style.zIndex = 2, f.style.zIndex = 5),
            f.style.zIndex = 10,
            l.style.zIndex = 9,
            l.style.pointerEvents = 'none',
            l._scaleX = l._scaleY = 0,
            u.appendChild(l),
            c.style.zIndex = 9,
            c.style.pointerEvents = 'none',
            c._scaleX = c._scaleY = 0,
            u.appendChild(c),
            e.style.backgroundColor = '#FFFFFF',
            e._opacity = 0,
            e.style.zIndex = 10,
            u.appendChild(e),
            f._opacity = BrowserDetect.TABLET || BrowserDetect.MOBILE ? 1 : 0,
            u.addEvents()
    }
    function bt(n) {
        return n.replace(/\w\S*/g, function (n) {
            return n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
        })
    }
    function ft() {
        it ? nt = !0 : yt()
    }
    function ht() {
        r._openingVid || (t === 3 && TweenLite.to(e, 0.5, {
            _x: - 37
        }), TweenLite.to(ut, 0.5, {
            value: 37,
            onComplete: ot
        }), TweenLite.to(f, 0.3, {
            _opacity: 1,
            _scaleX: 1.1,
            _scaleY: 1.1,
            overwrite: !0
        }), TweenLite.to(h, 0.3, {
            _scaleX: 1.1,
            _scaleY: 1.1,
            onComplete: dt,
            overwrite: !0
        }), BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || TweenLite.to(c, 0.5, {
            delay: 0.5,
            _scaleX: 1,
            _scaleY: 1,
            ease: Back.easeOut,
            overwrite: !0,
            onComplete: kt
        }))
    }
    function kt() {
        ct(),
            rt = setInterval(ct, 2010)
    }
    function ct() {
        TweenMax.to(c, 1, {
            _scaleX: 1.1,
            _scaleY: 1.1,
            ease: Quad.easeInOut,
            overwrite: !0
        }),
            TweenMax.to(c, 1, {
                delay: 1,
                _scaleX: 0.9,
                _scaleY: 0.9,
                ease: Quad.easeInOut
            }),
            TweenLite.to(l, 1.2, {
                delay: 1.3,
                _scaleX: 1.6,
                _scaleY: 1.6,
                ease: Quad.easeOut
            }),
            TweenLite.to(l, 1.2, {
                delay: 1.6,
                _opacity: 0,
                onComplete: lt
            })
    }
    function lt() {
        l._opacity = 1,
            l._scaleX = l._scaleY = 0
    }
    function at() {
        rt && clearInterval(rt),
            TweenMax.to(c, 0.25, {
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            })
    }
    function vt() {
        TweenLite.to(ut, 0.5, {
            value: 0,
            onComplete: ot
        }),
            pt(),
            TweenLite.to(f, 0.3, {
                _opacity: 0,
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            }),
            TweenLite.to(h, 0.3, {
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            }),
            BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || (at(), TweenLite.to(c, 0.3, {
            _scaleX: 0,
            _scaleY: 0,
            overwrite: !0
        }))
    }
    function dt() {
        it = !0,
            u.style.zIndex = 5,
            TweenLite.to(g, 0.3, {
                value: 1,
                onUpdate: et,
                overwrite: !0,
                onComplete: gt
            }),
            TweenLite.to(y, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(p, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(w, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(b, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(k, 0.3, {
                delay: 0.2,
                _opacity: 1
            })
    }
    function gt() {
        it = !1,
            nt && yt()
    }
    function yt() {
        BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 ? window.open('http://www.youtube.com/watch?v=' + i.querySelector('div[data-name="videoId"]').innerHTML, '_blank')  : (nt = !1, u.removeEvents(), r.initiateVideo(i, n), TweenLite.to(u, 0.3, {
            delay: 0.3,
            _opacity: 0
        }), TweenLite.to(f, 0.3, {
            _opacity: 0,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }), TweenLite.to(h, 0.3, {
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }), s.style.zIndex = 2, TweenLite.to(a, 0.3, {
            _x: s._x,
            _y: s._y
        }), at(), TweenLite.to(c, 0.3, {
            _scaleX: 0,
            _scaleY: 0,
            overwrite: !0
        }), TweenLite.to(l, 0.3, {
            _opacity: 0,
            onComplete: lt,
            overwrite: !0
        }))
    }
    function pt() {
        TweenLite.to(g, 0.3, {
            value: 0,
            onUpdate: et,
            onComplete: ni,
            overwrite: !0
        }),
            TweenLite.to(e, 0.5, {
                _x: 0
            }),
            TweenLite.to(y, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(p, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(w, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(b, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(k, 0.3, {
                _opacity: 0
            })
    }
    function ni() {
        u.style.zIndex = 0
    }
    function et() {
        s._x = t < 3 ? o * g.value : - (o * g.value)
    }
    function ti() {
        if (f && h && o && v && f._ratio && h._ratio) {
            var e = o,
                i = v,
                s = f._ratio || h._ratio,
                t = Math.ceil(e),
                n = Math.ceil(t * s),
                r,
                u;
            n < i && (n = Math.ceil(i), t = Math.ceil(n / s));
            function c() {
                f.style.width = t + 'px',
                    f.style.height = n + 'px',
                    h.style.width = t + 'px',
                    h.style.height = n + 'px'
            }
            function l() {
                r = (e - t) / 2,
                    u = (i - n) / 2,
                    f._x = Math.ceil(r),
                    f._y = Math.ceil(u),
                    h._x = Math.ceil(r),
                    h._y = Math.ceil(u)
            }
            c(),
                l()
        }
    }
    function ot() {
        e.style.width = o + ut.value + 'px',
            e.style.height = v + 'px'
    }
    var u = new SmartObject,
        ii = new SmartObject,
        a = new SmartObject,
        h,
        f,
        e = new SmartObject,
        o = 0,
        v = 0,
        st,
        d,
        s = new SmartObject,
        g = {
            value: 0
        },
        y = SmartObject(TextLib.getTextField('GothamThin', 40, !1)),
        p = SmartObject(TextLib.getTextField('ProximaRegular', 13, !1)),
        w = SmartObject(TextLib.getTextField('GothamBold', 13, !1)),
        b = new SmartObject,
        k = new SmartObject,
        it = !1,
        nt = !1,
        tt = !1,
        rt,
        c = AssetLoader.getAsset('play_' + n, !0),
        l = AssetLoader.getAsset('play_pulse', !0),
        ut = {
            value: 0
        };
    return u.reset = function () {
        TweenLite.to(u, 0.3, {
            delay: 0.3,
            _opacity: 1
        }),
            TweenLite.to(a, 0, {
                _x: 0,
                _y: 0
            }),
            (BrowserDetect.TABLET || BrowserDetect.MOBILE) && TweenLite.to(f, 0.3, {
            _opacity: 1,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 && TweenLite.to(f, 0.3, {
            _opacity: 0,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }),
            nt = !1,
            s.style.zIndex = 0,
            a.style.zIndex = 1,
            pt(),
            u.addEvents()
    },
        u.removeEvents = function () {
            tt && (e.style.cursor = 'default', e.style.pointerEvents = 'none', e.removeEventListener(MouseEvent.CLICK, ft), e.removeEventListener(MouseEvent.MOUSE_OVER, ht), e.removeEventListener(MouseEvent.MOUSE_OUT, vt), tt = !1)
        },
        u.addEvents = function () {
            tt || (BrowserDetect.TABLET || BrowserDetect.MOBILE ? e.addEventListener(MouseEvent.CLICK, ft)  : (e.style.cursor = 'pointer', e.style.pointerEvents = 'all', e.addEventListener(MouseEvent.CLICK, ft), e.addEventListener(MouseEvent.MOUSE_OVER, ht), e.addEventListener(MouseEvent.MOUSE_OUT, vt), tt = !0))
        },
        u.getPosition = function () {
            return t
        },
        u.resize = function (n, i) {
            o = n || o,
                v = i || v,
                st = o * 0.5,
                d = v * 0.5,
                u.style.width = o + 'px',
                u.style.height = v + 'px',
                a.style.width = o + 'px',
                a.style.height = v + 'px',
                s.style.width = o + 'px',
                s.style.height = v + 'px',
                y.style.width = o + 'px',
                y._y = d - 32,
                p.style.width = o + 'px',
                p._y = d + 16,
                w.style.width = o + 'px',
                w._y = v - 50,
                b._x = k._x = st - 18,
                b._y = d - 47,
                k._y = d + 47,
                l._x = (t === 3 ? 0 : o) - 55,
                l._y = d - 55,
                c._x = (t === 3 ? 0 : o) - 33,
                c._y = d - 33,
                et(),
                ti(),
                ot()
        },
        wt(),
        u
}
function ColorControls(n, t) {
    function y() {
        function n() {
            jQuery(i).css({
                width: '100%',
                height: '100px',
                overflow: 'hidden',
                textAlign: 'center',
                zIndex: 100
            })
        }
        function t() {
            function e(n) {
                function f(n) {
                    var t = new SmartObject,
                        e,
                        u,
                        r,
                        f;
                    return t.style.width = '52px',
                        t.style.height = '52px',
                        t.style.pointerEvents = 'none',
                        t._x = - 4,
                        t._y = - 4,
                        t._scaleX = 0.5,
                        t._scaleY = 0.5,
                        t._opacity = 0,
                        e = new SmartObject,
                        e.style.width = '50px',
                        e.style.height = '50px',
                        e.appendChild(SmartObject(AssetLoader.getAsset('btn_loader_bg.png').css({
                            width: '50px',
                            height: '50px'
                        }).get(0))),
                        u = new SmartObject,
                        u.style.width = '25px',
                        u.style.height = '50px',
                        u.style.overflow = 'hidden',
                        u.appendChild(SmartObject(AssetLoader.getAsset('btn_loader_bg.png').css({
                            width: '50px',
                            height: '50px'
                        }).get(0))),
                        r = new SmartObject,
                        r.style.width = '50px',
                        r.style.height = '50px',
                        r.appendChild(SmartObject(AssetLoader.getAsset('btn_loader.png').css({
                            width: '25px',
                            height: '50px'
                        }).get(0))),
                        f = new SmartObject,
                        f.style.width = '50px',
                        f.style.height = '50px',
                        f._rotation = 180,
                        f._opacity = 0,
                        f.appendChild(SmartObject(AssetLoader.getAsset('btn_loader.png').css({
                            width: '25px',
                            height: '50px'
                        }).get(0))),
                        t._button = n,
                        e._button = n,
                        u._button = n,
                        r._button = n,
                        h || (t.appendChild(e), t.appendChild(f), t.appendChild(r), t.appendChild(u)),
                        t.startCycle = function (e) {
                            function s() {
                                i._opacity = 0,
                                    h ? (r._rotation = 0, u._opacity = 1, f._opacity = 0, n.deActivate(), e && e())  : TweenMax.to(t, 0.5, {
                                        _scaleX: 0.5,
                                        _scaleY: 0.5,
                                        _opacity: 0,
                                        ease: Quart.easeInOut,
                                        overwrite: 'auto',
                                        onComplete: function () {
                                            r._rotation = 0,
                                                u._opacity = 1,
                                                f._opacity = 0,
                                                n.deActivate(),
                                                e && e()
                                        }
                                    })
                            }
                            function c() {
                                o = !0,
                                    n.showPauseBtn(),
                                    TweenMax.to(r, 6, {
                                        _rotation: 360,
                                        ease: Linear.easeNone,
                                        overwrite: 'auto',
                                        onStart: n.activate,
                                        onUpdate: function () {
                                            r._rotation >= 180 && (f._opacity = 1, u._opacity = 0)
                                        },
                                        onComplete: function () {
                                            s()
                                        }
                                    })
                            }
                            TweenMax.to(t, 0.5, {
                                _scaleX: 1,
                                _scaleY: 1,
                                _opacity: 1,
                                ease: Quart.easeInOut,
                                overwrite: 'auto',
                                onComplete: c
                            })
                        },
                        t.stopCycle = function (e, s) {
                            o = !1,
                                i._opacity = 0,
                                TweenMax.killTweensOf(r),
                                TweenMax.to(t, 0.5, {
                                    _scaleX: 0.5,
                                    _scaleY: 0.5,
                                    _opacity: 0,
                                    ease: Quart.easeInOut,
                                    overwrite: 'all',
                                    onComplete: function () {
                                        r._rotation = 0,
                                            u._opacity = 1,
                                            f._opacity = 0,
                                            n.deActivate(s),
                                            e && e()
                                    }
                                })
                        },
                        t
                }
                var t = new SmartObject,
                    u,
                    i;
                return t.className = 'navcolorbutton',
                    jQuery(t).css({
                        width: '42px',
                        height: '42px',
                        textAlign: 'left',
                        position: 'relative',
                        display: 'inline-block',
                        margin: '30px 10px 0 10px',
                        cursor: 'pointer'
                    }),
                    t._loader = f(t),
                    t._color = n,
                    u = SmartObject(AssetLoader.getAsset('btn_' + n + '.png').css({
                        width: 34,
                        height: 34,
                        margin: '4px 0 0 4px',
                        pointerEvents: 'none'
                    }).get(0)),
                    i = SmartObject(AssetLoader.getAsset('btn_pause.png').css({
                        width: 34,
                        height: 34,
                        margin: '4px 0 0 4px',
                        pointerEvents: 'none'
                    }).get(0)),
                    i._opacity = 0,
                    jQuery(t).append(t._loader),
                    jQuery(t).append(AssetLoader.getAsset('btn_bg.png').css({
                        width: 42,
                        height: 42,
                        pointerEvents: 'none'
                    })),
                    jQuery(t).append(u),
                    h || jQuery(t).append(i),
                    u._button = t,
                    i._button = t,
                    t.onMouseOver = function () {
                        TweenMax.to(u, 0.5, {
                            _opacity: 0.5,
                            ease: Quart.easeOut,
                            overwrite: 'all'
                        })
                    },
                    t.onMouseOut = function () {
                        TweenMax.to(u, 0.5, {
                            _opacity: 1,
                            ease: Quart.easeOut,
                            overwrite: 'all'
                        })
                    },
                    t.showPauseBtn = function () {
                        o && r === t && (i._opacity = 1)
                    },
                    t.hidePauseBtn = function () {
                        o && r === t && (i._opacity = 0)
                    },
                    t.activate = function () {
                        h || TweenMax.to(u, 0.5, {
                            _scaleX: 1.235294118,
                            _scaleY: 1.235294118,
                            ease: Quart.easeOut,
                            overwrite: 'all'
                        })
                    },
                    t.deActivate = function (n) {
                        n !== 'pause' && TweenMax.to(u, 0.5, {
                            _scaleX: 1,
                            _scaleY: 1,
                            ease: Quart.easeOut,
                            overwrite: 'all'
                        })
                    },
                    t
            }
            var n = 0,
                f = u.length,
                t;
            for (n; n < f; n++) t = e(u[n]),
                s.push(t),
                jQuery(i).append(t),
                n === 0 && (r = t, t.activate())
        }
        n(),
            t(),
            i.resize()
    }
    function l(n) {
        n = n || window.event,
            n.preventDefault();
        var t = n.target;
        BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 9 ? t !== r && i._enabled && t.className.toLowerCase() !== 'navcolorbutton' && t._button && (t = t._button, t.onMouseOver())  : t !== r && i._enabled && t.className.toLowerCase() === 'navcolorbutton' && t.onMouseOver()
    }
    function a(n) {
        n = n || window.event,
            n.preventDefault();
        var t = n.target;
        BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 9 ? t !== r && i._enabled && t.className.toLowerCase() !== 'navcolorbutton' && t._button && (t = t._button, t.onMouseOut())  : t !== r && i._enabled && t.className.toLowerCase() === 'navcolorbutton' && t.onMouseOut()
    }
    function v(t) {
        t = t || window.event,
            t.preventDefault();
        var u = t.target,
            f = r;
        if (BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 9 ? u !== r && i._enabled && u.className.toLowerCase() !== 'navcolorbutton' && u._button && (u = u._button)  : u !== r && i._enabled && u.className.toLowerCase() === 'navcolorbutton', u === r && i._enabled && u.className.toLowerCase() === 'navcolorbutton' && (o ? r._loader.stopCycle(null, 'pause')  : i.startCycle()), u !== r && i._enabled && u.className.toLowerCase() === 'navcolorbutton') {
            n._inCycleMode = !1,
                r._loader.stopCycle(),
                r.onMouseOut();
            i.onColorChange(u._color)
        }
        u === f && i._enabled && u.className.toLowerCase() === 'navcolorbutton' && (n._inCycleMode = !0)
    }
    var i = new SmartObject;
    i._enabled = !1,
        i._visible = !1,
        i._hasEvents = !1;
    var u = [
            'silver',
            'gold',
            'red',
            'black'
        ],
        e = u[0],
        r,
        s = [
        ],
        o = !1,
        c = ContentController.WIN_WIDTH,
        f = ContentController.WIN_HEIGHT,
        h = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8;
    return i.onColorChange = function (n) {
        var i = s[u.indexOf(e)];
        i.deActivate(),
            e = n,
            r = s[u.indexOf(e)],
            r.activate(),
            t && t(e)
    },
        i.focusIn = function (n, t) {
            i._visible || TweenMax.to(i, 0.5, {
                delay: n || 0,
                _y: f - 100,
                ease: Quart.easeInOut,
                overwrite: 'auto',
                onComplete: function () {
                    i._visible = !0,
                        i.addEvents(),
                        i.resize(),
                        t && t()
                }
            })
        },
        i.focusOut = function (n, t) {
            i._visible && TweenMax.to(i, 0.5, {
                delay: n || 0,
                _y: f,
                ease: Quart.easeInOut,
                overwrite: 'auto',
                onComplete: function () {
                    i._visible = !1,
                        i.removeEvents(),
                        t && t()
                }
            })
        },
        i.startCycle = function () {
            if (n._inCycleMode) {
                var t = u.indexOf(e),
                    f = s[t];
                r = f,
                    t = t >= u.length - 1 ? - 1 : t,
                    nextColor = u[++t],
                    r._loader.startCycle(function () {
                        i.onColorChange(nextColor)
                    })
            }
        },
        i.enable = function () {
            i._enabled = !0
        },
        i.disable = function () {
            i._enabled = !1
        },
        i.addEvents = function () {
            i._hasEvents || (Assets.IS_DESKTOP && (jQuery(i).bind(MouseEvent.MOUSE_OVER, l), jQuery(i).bind(MouseEvent.MOUSE_OUT, a)), jQuery(i).bind(MouseAndTouchEvent.MOUSE_DOWN, v), i._hasEvents = !0)
        },
        i.removeEvents = function () {
            i._hasEvents && (Assets.IS_DESKTOP && (jQuery(i).unbind(MouseEvent.MOUSE_OVER, l), jQuery(i).unbind(MouseEvent.MOUSE_OUT, a)), jQuery(i).unbind(MouseAndTouchEvent.MOUSE_DOWN, v), i._hasEvents = !1)
        },
        i.resize = function (n, t) {
            c = n || c,
                f = t || f,
                i._y = i._visible ? f - 100 : f
        },
        y(),
        i
}
function H3_StarterTemplate(n) {
    var t = jQuery('<div/>').css({
            position: 'absolute',
            overflow: 'hidden'
        }),
        r,
        u;
    t.skipSeperator = !0;
    var i = n,
        f = i.getAttribute('data-path'),
        e = ContentController.getIndexOfPath(ContentController._xml, f);
    return t._templateId = e,
        r = ContentController.WIN_WIDTH,
        u = ContentController.WIN_HEIGHT,
        t.templateLoad = function (n) {
            function r() {
                n(t),
                    ContentController.removePreloader(jQuery(i).parent())
            }
            ContentController.addPreloader(jQuery(i).parent()),
                AssetLoader.loadGroup(new AssetGroup([], r, '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/templateFolder/'))
        },
        t.templateIn = function () {
            function n() {
                jQuery(t).css({
                    display: 'table',
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.4)',
                    background: '#' + ('000000' + (Math.random() * 16777215 << 0).toString(16)).slice( - 6)
                })
            }
            function r() {
                var n = jQuery('<div />');
                n.css({
                    font: '72px/0 Helvetica',
                    display: 'table-cell',
                    verticalAlign: 'middle',
                    fontWeight: '700'
                }),
                    n.html(i.getAttribute('data-description')),
                    jQuery(t).append(n)
            }
            function u() {
                var n = window.location.hash.replace('#', ''),
                    i = n.substring(0, n.lastIndexOf('/'));
                n = i ? i.replace('/', '')  : n.replace('/', ''),
                    n === f && (trace('Forced focusIn: ' + f), t.focusIn())
            }
            n(),
                r(),
                t.resize(),
                u()
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
        },
        t.focusOut = function () {
        },
        t.resize = function (n, i) {
            r = n || r,
                u = i || u,
                jQuery(t).css({
                    width: r,
                    height: u
                })
        },
        t
}
function H3_VideoFeatureTemplate(n) {
    function w(n) {
        var i = window.location.hash.replace('#', ''),
            r = i.substring(0, i.lastIndexOf('/'));
        if (i = r ? r.replace('/', '')  : i.replace('/', ''), n) return i;
        i === b && t.focusIn()
    }
    var t = jQuery('<div/>').css({
        position: 'absolute',
        overflow: 'hidden'
    });
    t.skipSeperator = !0,
        t._h3h6PreventHide = !0;
    var c = n,
        b = c.getAttribute('data-path'),
        d = ContentController.getIndexOfPath(ContentController._xml, b);
    t._templateId = d,
        t._playedVids = [
        ],
        t._inCycleMode = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? !1 : !0;
    var k = c.querySelector('[data-name=video]'),
        v = k.children[0],
        i,
        u,
        l = v.getAttribute('data-id'),
        a = !1,
        y = !1,
        f,
        r,
        p = !1,
        s,
        h = Assets.IS_TABLET || Assets.IS_PHONE || BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        e = ContentController.WIN_WIDTH,
        o = ContentController.WIN_HEIGHT;
    return t.templateLoad = function (n) {
        function i() {
            AssetLoader.loadGroup(new AssetGroup(['btn_bg.png',
                'btn_gold.png',
                'btn_black.png',
                'btn_red.png',
                'btn_silver.png',
                'btn_loader_bg.png',
                'btn_loader.png',
                'btn_pause.png',
                'ipad_guide_arrow.png',
                'ipad_guide_hand.png',
                'hotspot.png',
                'video_fade_edges.png'], r, '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/ui/'))
        }
        function r() {
            n(t),
                ContentController.removePreloader(jQuery(c).parent())
        }
        ContentController.addPreloader(jQuery(c).parent(), !0, 0, !0),
            AssetLoader.loadGroup(new AssetGroup(['/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/black_01_rocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/black_02_middleRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/black_03_earphones_left.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/black_03_earphones_right.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/black_04_backRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/black_05_explosion.jpg',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/red_01_rocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/red_02_middleRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/red_03_earphones_left.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/red_03_earphones_right.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/red_04_backRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/red_05_explosion.jpg',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/silver_01_rocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/silver_02_middleRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/silver_03_earphones_left.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/silver_03_earphones_right.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/silver_04_backRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/silver_05_explosion.jpg',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/gold_01_rocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/gold_02_middleRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/gold_03_earphones_left.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/gold_03_earphones_right.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/gold_04_backRocks.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/layers/gold_05_explosion.jpg',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/ui/btn_bg.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/ui/btn_black.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/ui/btn_red.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/ui/btn_gold.png',
                '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/videoFeature/ui/btn_silver.png'], i), !0)
    },
        t.templateIn = function () {
            function n() {
                jQuery(t).css({
                    color: 'rgba(0, 0, 0, 0.4)'
                }),
                    f = new SmartObject,
                    f._opacity = 0,
                    jQuery(f).css({
                        width: 500,
                        height: 100,
                        zIndex: 100,
                        fontFamily: 'GothamThin',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        pointerEvents: 'none'
                    }).append(c.querySelector('[data-name=presentation]')),
                    jQuery(t).append(f)
            }
            function i() {
                s = new SpinningPreloader(0, !0),
                    s.init(),
                    s.resize(e, o),
                    s.style.opacity = 0,
                    jQuery(t).append(s)
            }
            function l() {
                u = new ColorControls(t, t.onColorChange),
                    jQuery(t).append(u)
            }
            function a() {
                var i,
                    n;
                h && Assets.IS_TABLET && (r = new SmartObject, r._opacity = 0, jQuery(r).css({
                    width: 187,
                    height: 85,
                    zIndex: 999,
                    pointerEvents: 'none'
                }), i = AssetLoader.getAsset('ipad_guide_arrow.png').css({
                    width: 188,
                    height: 9
                }).get(0), jQuery(r).append(i), n = AssetLoader.getAsset('ipad_guide_hand.png').css({
                    width: 60,
                    height: 118
                }).get(0), jQuery(r).append(n), SmartObject(i), SmartObject(n), n._x = 152, n._y = - 36, TweenMax.to(n, 1, {
                    _x: 0,
                    ease: Quart.easeInOut,
                    overwrite: 'auto',
                    repeat: - 1,
                    yoyo: !0
                }), jQuery(t).append(r))
            }
            n(),
                i(),
                l(),
                a(),
                t.buildVideo(),
                t.resize(),
                w()
        },
        t.buildVideo = function () {
            t.showPreloader(),
                i = new VideoPlayer(v, t, u, h, t.switchVideo, t.onIntroVidPlayed),
                t._video = i,
                jQuery(t).append(i),
                t.showIpadInstructions()
        },
        t.onColorChange = function (n) {
            l !== n && (l = n, setTimeout(function () {
                i.playOutro()
            }, 0))
        },
        t.showPreloader = function () {
            a || t._playedVids.indexOf(l) !== - 1 || h || (s.style.opacity = 1, a = !0)
        },
        t.hidePreloader = function () {
            a && (s.style.opacity = 0, a = !1, t._playedVids.push(l), trace(t._playedVids))
        },
        t.showIpadInstructions = function () {
            h && Assets.IS_TABLET && !p && TweenMax.to(r, 0.5, {
                delay: 2,
                _opacity: 1,
                overwrite: 'all'
            })
        },
        t.hideIpadInstructions = function () {
            h && Assets.IS_TABLET && !p && TweenMax.to(r, 0.5, {
                _opacity: 0,
                overwrite: 'all',
                onComplete: function () {
                    p = !0,
                        jQuery(r).remove()
                }
            })
        },
        t.switchVideo = function () {
            h = !0,
                v = k.querySelector('[data-id=' + l + ']'),
                t.buildVideo()
        },
        t.startCycle = function () {
            t._inCycleMode && ContentController._currentTemplateId === t._templateId && u.startCycle()
        },
        t.onIntroVidPlayed = function () {
            trace('onIntroVidPlayed'),
                y = !0
        },
        t.showPresentationCopy = function () {
            TweenMax.to(f, 2, {
                _opacity: 1,
                delay: 0,
                ease: Quart.easeInOut,
                overwrite: 'all',
                onComplete: function () {
                    TweenMax.to(f, 2, {
                        _opacity: 0,
                        delay: 2.2,
                        ease: Quart.easeInOut,
                        overwrite: 'all',
                        onComplete: function () {
                        }
                    })
                }
            })
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
            i && (i.play(), i.addEvents(), setTimeout(function () {
                w(!0) !== 'at-a-glance' && (i.style.display = 'block')
            }, Assets.IS_TABLET ? 1500 : 0)),
                u && y && u.focusIn(1)
        },
        t.focusOut = function () {
            i && (i.pause(), i.removeEvents(), setTimeout(function () {
                w(!0) !== 'at-a-glance' && (i.style.display = 'none'),
                    t._inCycleMode = !1
            }, Assets.IS_TABLET ? 0 : 500)),
                u && y && u.focusOut(0.3)
        },
        t.resize = function (n, s) {
            function h() {
                jQuery(t).css({
                    width: e,
                    height: o
                }),
                    i.resize(e, o),
                    u.resize(e, o),
                    f && (f._x = (e - 500) / 2, f._y = (o - 200) / 2 * 2.2),
                    r && (r._x = (e - 187) / 2, r._y = (o - 100) / 2)
            }
            e = n || e,
                o = s || o,
                h()
        },
        t
}
function H3_TechTalkTemplate(n) {
    var t = jQuery('<div/>').css({
        position: 'absolute',
        overflow: 'hidden'
    });
    t.skipSeperator = !0,
        t._h3h6PreventHide = !0;
    var a = n,
        p = a.getAttribute('data-path'),
        w = ContentController.getIndexOfPath(ContentController._xml, p);
    t._templateId = w;
    var v,
        y,
        l,
        f,
        i,
        e,
        h,
        o,
        s,
        u = ContentController.WIN_WIDTH,
        r = ContentController.WIN_HEIGHT,
        c = {
            w: u / 50,
            h: r / 918
        };
    return t.templateLoad = function (n) {
        function i() {
            n(t),
                ContentController.removePreloader(jQuery(a).parent())
        }
        ContentController.addPreloader(jQuery(a).parent()),
            AssetLoader.loadGroup(new AssetGroup(['background.jpg',
                'cad.png',
                'icon_1.png',
                'icon_2.png',
                'icon_3.png',
                'icon_4.png',
                'icon_5.png',
                'icon_6.png',
                'icon_7.png',
                'icon_8.png',
                'case.png',
                'ear_large.png',
                'ear_medium.png',
                'ear_small.png'], i, '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/techTalk/'))
    },
        t.templateIn = function () {
            function n() {
                jQuery(t).css({
                    color: 'rgba(0, 0, 0, 0.4)',
                    background: '#242424'
                }),
                    l = AssetLoader.getAsset('background.jpg'),
                    jQuery(t).append(l)
            }
            function c() {
                y = jQuery('<div />'),
                    y.css({
                        position: 'absolute',
                        font: '13px/0 GothamBold',
                        color: '#000',
                        textAlign: 'left',
                        top: '30px',
                        left: '150px',
                        color: 'white'
                    }),
                    y.html(a.getAttribute('data-subheadline')),
                    jQuery(t).append(y),
                    v = jQuery('<div />'),
                    v.css({
                        position: 'absolute',
                        font: '39px/0 GothamThin',
                        color: '#000',
                        textAlign: 'left',
                        top: '62px',
                        left: '150px',
                        color: 'white'
                    }),
                    v.html(a.getAttribute('data-description')),
                    jQuery(t).append(v)
            }
            function w() {
                function n(n) {
                    var r = jQuery('<div />').css({
                            float: 'left',
                            width: 220,
                            height: '100%',
                            marginLeft: n === 'one' ? 0 : 23
                        }),
                        i = jQuery(a).find('[data-column=' + n + ']'),
                        t = 0,
                        u = i.length;
                    for (t; t < u; t++) {
                        var f = i[t].getAttribute('data-icon'),
                            e = jQuery(i[t]).find('[data-name=headline]').html(),
                            o = jQuery(i[t]).find('[data-name=text]').html(),
                            h = s(f, e, o);
                        jQuery(r).append(h)
                    }
                    return r
                }
                function s(n, t, i) {
                    var r = jQuery('<div />').css({
                            width: '100%',
                            display: 'block',
                            clear: 'both',
                            marginBottom: 20
                        }),
                        n = AssetLoader.getAsset(n).css({
                            width: 25,
                            height: 25,
                            position: 'relative'
                        }),
                        t = jQuery('<div />').css({
                            font: '13px/18px GothamBold',
                            textTransform: 'uppercase',
                            marginLeft: 40,
                            marginTop: - 25
                        }).html(t),
                        i = jQuery('<div />').css({
                            font: '13px/18px ProximaRegular',
                            marginLeft: 40,
                            marginTop: 5
                        }).html(i);
                    return jQuery(r).append(n),
                        jQuery(r).append(t),
                        jQuery(r).append(i),
                        r
                }
                f = new SmartObject,
                    f._y = r,
                    jQuery(f).css({
                        width: 950,
                        height: 140,
                        color: 'white'
                    });
                var i = n('one'),
                    u = n('two'),
                    e = n('three'),
                    o = n('four');
                jQuery(f).append(i),
                    jQuery(f).append(u),
                    jQuery(f).append(e),
                    jQuery(f).append(o),
                    jQuery(t).append(f)
            }
            function b() {
                s = AssetLoader.getAsset('cad.png').get(0),
                    SmartObject(s),
                    i = AssetLoader.getAsset('case.png').get(0),
                    SmartObject(i),
                    i._x = u,
                    e = AssetLoader.getAsset('ear_small.png').get(0),
                    SmartObject(e),
                    h = AssetLoader.getAsset('ear_medium.png').get(0),
                    SmartObject(h),
                    o = AssetLoader.getAsset('ear_large.png').get(0),
                    SmartObject(o),
                    BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 || (s._opacity = 0, e._opacity = 0, h._opacity = 0, o._opacity = 0),
                    jQuery(t).append(s),
                    jQuery(t).append(e),
                    jQuery(t).append(h),
                    jQuery(t).append(o),
                    jQuery(t).append(i)
            }
            function k() {
                var n = window.location.hash.replace('#', ''),
                    i = n.substring(0, n.lastIndexOf('/'));
                n = i ? i.replace('/', '')  : n.replace('/', ''),
                    n === p && (trace('Forced focusIn: ' + p), t.focusIn())
            }
            n(),
                b(),
                w(),
                c(),
                t.resize(),
                k()
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
            t.focusOut(0),
                f && TweenMax.to(f, 1, {
                delay: 0.3,
                _y: Math.ceil(r - r / 2.9),
                ease: Quart.easeInOut,
                overwrite: 'all'
            }),
                i && (TweenMax.to(s, 1, {
                delay: 0.6,
                _opacity: 1,
                ease: Quart.easeInOut,
                overwrite: 'all'
            }), TweenMax.to(i, 1, {
                delay: 0.9,
                _x: u - parseInt(jQuery(i).css('width')),
                ease: Quart.easeInOut,
                overwrite: 'all'
            }), TweenMax.to(e, 0.5, {
                delay: 1.2,
                _opacity: 1,
                ease: Quart.easeInOut,
                overwrite: 'all'
            }), TweenMax.to(h, 0.5, {
                delay: 1.2 + 0.2,
                _opacity: 1,
                ease: Quart.easeInOut,
                overwrite: 'all'
            }), TweenMax.to(o, 0.5, {
                delay: 1.2 + 0.4,
                _opacity: 1,
                ease: Quart.easeInOut,
                overwrite: 'all'
            }))
        },
        t.focusOut = function (n) {
            f && TweenMax.to(f, 0, {
                delay: n || 1,
                _y: r,
                overwrite: 'all'
            }),
                i && (BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 || (TweenMax.to(s, 0, {
                delay: n || 1,
                _opacity: 0,
                overwrite: 'all'
            }), TweenMax.to(i, 0, {
                delay: n || 1,
                _x: u + parseInt(jQuery(i).css('width')),
                overwrite: 'all'
            }), TweenMax.to(e, 0, {
                delay: n || 1,
                _opacity: 0,
                overwrite: 'all'
            }), TweenMax.to(h, 0, {
                delay: n || 1,
                _opacity: 0,
                overwrite: 'all'
            }), TweenMax.to(o, 0, {
                delay: n || 1,
                _opacity: 0,
                overwrite: 'all'
            })))
        },
        t.resize = function (n, a) {
            if (u = n || u, r = a || r, c = {
                w: u / 50,
                h: r / 918
            }, jQuery(t).css({
                width: u,
                height: r
            }), jQuery(v).css({
                left: u * 0.5 - 480
            }), jQuery(y).css({
                left: u * 0.5 - 480
            }), f._x = Math.ceil((u - 950) / 2), f._y = f._y !== r && ContentController._currentTemplateId == t._templateId ? Math.ceil(r - r / 2.9)  : r, l) {
                var k = u,
                    b = r,
                    d = 932 / 1640,
                    w = Math.ceil(k),
                    p = Math.ceil(w * d),
                    g,
                    nt;
                p < b && (p = Math.ceil(b), w = Math.ceil(p / d));
                function tt() {
                    jQuery(l).css({
                        width: w
                    }),
                        jQuery(l).css({
                            height: p
                        })
                }
                function it() {
                    g = (k - w) / 2,
                        nt = (b - p) / 2,
                        jQuery(l).css({
                            left: g
                        }),
                        jQuery(l).css({
                            top: nt
                        })
                }
                tt(),
                    it()
            }
            s && (s._width = r < 800 ? 676 : 901, s._height = r < 800 ? 385 : 513, s._x = Math.ceil(u - s._width) / 2, s._y = (r - s._height) / 2 - 139800 / 1640, jQuery(s).css({
                width: s._width,
                height: s._height
            })),
                i && (i._width = Math.ceil(358 * c.h), i._height = Math.ceil(881 * c.h), i._x = i._x !== u && ContentController._currentTemplateId == t._templateId ? Math.ceil(u - i._width)  : u, i._y = Math.ceil(r - i._height + 0 * c.h), jQuery(i).css({
                width: i._width,
                height: i._height
            }), e._width = Math.ceil(64 * c.h), e._height = Math.ceil(69 * c.h), e._x = Math.ceil(u - e._width - i._width / 1), e._y = Math.ceil((r - e._height) / 2 - e._height / 3), jQuery(e).css({
                width: e._width,
                height: e._height
            }), h._width = Math.ceil(79 * c.h), h._height = Math.ceil(80 * c.h), h._x = Math.ceil(u - h._width - i._width / 1), h._y = Math.ceil((r - h._height) / 1.65), jQuery(h).css({
                width: h._width,
                height: h._height
            }), o._width = Math.ceil(91 * c.h), o._height = Math.ceil(91 * c.h), o._x = Math.ceil(u - o._width - i._width / 1.15), o._y = Math.ceil((r - o._height) / 2 + o._height / 3), jQuery(o).css({
                width: o._width,
                height: o._height
            }))
        },
        t
}
function H3_TravelingTemplate(n) {
    function p() {
        i && (t.removeChild(i), i.kill(), i = null, t._openingVid = !1)
    }
    function w() {
        i = new H3_TravelingVideo(h, l, f, t, s),
            t.appendChild(i)
    }
    function a() {
        t.removeChild(r)
    }
    var t = new SmartObject;
    t._openingVid = !1,
        t._switchToId;
    var f = n,
        e = ContentController.WIN_WIDTH,
        o = ContentController.WIN_HEIGHT,
        i,
        u,
        s,
        h,
        l,
        v = f.getAttribute('data-path'),
        y = ContentController.getIndexOfPath(ContentController._xml, v),
        r,
        c = !1;
    return t.VIDEO_PLAYED = !1,
        t.templateLoad = function (n) {
            function u() {
                n(t),
                    ContentController.removePreloader(jQuery(f))
            }
            t._templateId = y,
                t.skipSeperator = !0,
                t.style.overflow = 'hidden';
            var r = [
                    'line.png',
                    'btn_Close.png',
                    'btn_Compass_h.jpg',
                    'btn_Compass.jpg',
                    'btn_Playlist_h.jpg',
                    'btn_Playlist.jpg',
                    'btn_Share_h.jpg',
                    'btn_Share.jpg',
                    'Map_large.jpg',
                    'Map_pin_gray.png',
                    'Map_pin_chaz.png',
                    'Map_pin_christian.png',
                    'Map_pin_diana.png',
                    'Map_pin_ekow.png',
                    'Map_pin_gray.png',
                    'Map_pin_jana.png',
                    'Map_pin_joshua.png',
                    'Map_pin_maude.png',
                    'Map_pin_paula.png',
                    'Map_pin_petra.png',
                    'Map_pin_priscilla.png',
                    'Map_pin_shadi.png',
                    'Map_pin_tiga.png',
                    'Map_pin_dot.png',
                    'play_1.png',
                    'play_2.png',
                    'play_3.png',
                    'play_4.png',
                    'play_5.png',
                    'play_6.png',
                    'play_7.png',
                    'play_8.png',
                    'play_9.png',
                    'play_10.png',
                    'play_11.png',
                    'play_12.png',
                    'play_pulse.png'
                ],
                i = 0;
            for (i; i < 12; i++) r.push('BW_' + (i + 1) + '.jpg'),
                r.push('Color_' + (i + 1) + '.jpg'),
                r.push('Map_' + (i + 1) + '.jpg');
            ContentController.addPreloader(jQuery(f)),
                AssetLoader.loadGroup(new AssetGroup(r, u, '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/traveling/'))
        },
        t.templateIn = function () {
            s = f.querySelector('[data-name=gridData]'),
                u = new H3_TravelingGrid(s, t),
                u.style.zIndex = 0,
                t.appendChild(u),
                r = new H3_TravelingIntroOverlay,
                r.style.zIndex = 10,
                t.appendChild(r),
                c && r && r.animateOut(a)
        },
        t.initiateVideo = function (n, i) {
            l = i,
                t._openingVid = !0,
                h = n.querySelector('[data-name=videoId]').innerHTML,
                t._curVideoId = h;
            var r = n.getAttribute('data-color');
            u.animateToVideo(r, i, w)
        },
        t.closeVideo = function (n) {
            i && TweenLite.to(i, 0.5, {
                _opacity: 0,
                onComplete: p
            }),
                u.animateToGrid(n),
                t._switchToId && setTimeout(function () {
                var n = t._switchToId.data,
                    i = t._switchToId.id;
                t.initiateVideo(n, i),
                    t._switchToId = null
            }, 1000)
        },
        t.templateOut = function () {
        },
        t.focusIn = function () {
            c || (c = !0, r && r.animateOut(a))
        },
        t.focusOut = function () {
            i && i.close(!0)
        },
        t.resize = function (n, f) {
            e = n,
                o = f,
                t.style.width = e + 'px',
                t.style.height = o + 'px',
                i && i.resize(e, o),
                r && r.resize(n, f),
                u.resize(e, o)
        },
        t
}
function YoutubeVideoPlayer(n, t, i, r, u, f) {
    function ft() {
        trace(w, '_autoPlay'),
            i && (h = i),
            y = ContentController.WIN_WIDTH,
            p = ContentController.WIN_HEIGHT,
            l = y,
            a = p,
            s.style.width = l + 'px',
            s.style.height = a + 'px',
            s.id = 'videoPlayer',
            o.appendChild(s),
            et()
    }
    function et() {
        v = document.createElement('script'),
            v.src = 'http://www.youtube.com/iframe_api';
        var n = document.getElementsByTagName('script') [0];
        n.parentNode.insertBefore(v, n)
    }
    function k() {
        it = !0,
            c = e.getIframe(),
                BrowserDetect.TABLET || BrowserDetect.MOBILE ? u != 0 && e.seekTo(u, !0)  : (c.style.zIndex = 0, c.style.pointerEvents = 'none', c.style.cursor = 'default'),
            e.setVolume(50),
            rt(e.getPlayerState()),
            tt = setInterval(ot, 250)
    }
    function ot() {
        h && (o.curTime = e.getCurrentTime(), h.setProgressPerc(o.curTime, e.getDuration()), u && o.curTime < u && (e.seekTo(u, !0), e.playVideo()), r && o.curTime >= r && (u ? e.seekTo(u, !0)  : e.seekTo(0, !0), e.pauseVideo(), h.setProgressPerc(0), h.toggleExternal()))
    }
    function d(n) {
        trace('VideoPlayer.onPlayerError : An error occured of type: ' + n)
    }
    function g(n) {
        b = !1;
        var t = n.data;
        t == 1 && (b = !0),
            rt(t)
    }
    function rt(n) {
        var i = n;
        t(i)
    }
    var o = new SmartObject,
        s = new SmartObject,
        e,
        h,
        w = f ? 1 : 0,
        l,
        a,
        y = 0,
        p = 0,
        nt = !1,
        ut,
        tt,
        it = !1,
        c,
        v,
        b = !1;
    return window.onYouTubeIframeAPIReady = function () {
        BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? e = new YT.Player('videoPlayer', {
            height: '390',
            width: '640',
            videoId: n,
            playerVars: {
                wmode: 'transparent',
                autoplay: 1,
                enablejsapi: 1,
                disablekb: 0,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                controls: 1,
                origin: 'http://localhost:8888'
            },
            events: {
                onReady: k,
                onStateChange: g,
                onError: d
            }
        })  : BrowserDetect.TABLET || BrowserDetect.MOBILE ? e = new YT.Player('videoPlayer', {
            height: '390',
            width: '640',
            videoId: n,
            playerVars: {
                wmode: 'transparent',
                autoplay: 1,
                enablejsapi: 1,
                disablekb: 0,
                html5: 1,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                controls: 1,
                origin: 'http://localhost:8888'
            },
            events: {
                onReady: k,
                onStateChange: g,
                onError: d
            }
        })  : (w === 1 && i.togglePlaying(), e = new YT.Player('videoPlayer', {
            height: '390',
            width: '640',
            videoId: n,
            playerVars: {
                wmode: 'transparent',
                autoplay: w,
                enablejsapi: 1,
                disablekb: 0,
                html5: 1,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                controls: 0,
                origin: 'http://localhost:8888'
            },
            events: {
                onReady: k,
                onStateChange: g,
                onError: d
            }
        }))
    },
        o.updateVolumeLevel = function (n) {
            e.setVolume(n)
        },
        o.getPlayer = function () {
            return e
        },
        o.getCurrentTime = function () {
            return e.getCurrentTime()
        },
        o.seekTo = function (n) {
            e.seekTo(n, !0)
        },
        o.seekToPerc = function (n) {
            b = !1;
            var t = ut * n;
            e.seekTo(t, !0)
        },
        o.play = function () {
            e.playVideo()
        },
        o.pause = function () {
            e.pauseVideo()
        },
        o.playVideo = function () {
            e && (nt && (e.seekTo(0, !0), nt = !1), e.playVideo())
        },
        o.pauseVideo = function () {
            e && e.pauseVideo()
        },
        o.getDuration = function () {
            if (e) return e.getDuration()
        },
        o.getCurrentTime = function () {
            if (e) return e.getCurrentTime()
        },
        o.resize = function (n, t) {
            y = n,
                p = t,
                l = y,
                a = p,
                s.style.width = l + 'px',
                s.style.height = a + 'px',
                e && it && (c.style.width = l + 'px', c.style.height = a + 'px')
        },
        o.close = function (n) {
            setTimeout(n, 1000)
        },
        o.setControls = function (n) {
            h = n
        },
        o.kill = function () {
            v.parentNode.removeChild(v),
                window.YT = null,
                clearInterval(tt),
                e && e.destroy(),
                o.removeChild(s),
                s = null
        },
        ft(),
        o
}
function H3_TravelingGrid(n, t, i, r) {
    function l() {
        u.style.backgroundColor = '#FFFFFF',
            u.style.zIndex = 2,
            u.style.display = 'none',
            u.style.pointerEvents = 'none',
            e.appendChild(u);
        var f = 0,
            l = n.children.length,
            h,
            c = 0,
            s = 0,
            a = Math.ceil(ContentController.WIN_WIDTH / 4),
            v = Math.ceil(ContentController.WIN_HEIGHT / 3);
        for (f; f < l; f++) h = i ? new H3_TravelingGridItemSmall(n.children[f]._index, s, n.children[f], t, r)  : new H3_TravelingGridItem(f + 1, s, n.children[f], t),
            h._x = a * s,
            h._y = v * c,
            e.appendChild(h),
            o.push(h),
            i ? c++ : (s++, s > 3 && (s = 0, c++))
    }
    function c() {
        var n = s + ContentController.WIN_WIDTH * f.size,
            t = h + ContentController.WIN_HEIGHT * f.size;
        n > ContentController.WIN_WIDTH && (n = ContentController.WIN_WIDTH),
            t > ContentController.WIN_HEIGHT && (t = ContentController.WIN_HEIGHT),
            u.style.width = n + 'px',
            u.style.height = t + 'px',
            u._x = s * f.position.column * f.placement,
            u._y = h * f.position.row * f.placement
    }
    function a() {
        TweenLite.to(u, 0.3, {
            _opacity: 0,
            onComplete: function () {
                u.style.display = 'none',
                    u.style.zIndex = 0
            }
        })
    }
    function v(n) {
        var i = Math.ceil(n / 4) - 1,
            t = n - i * 4 - 1,
            r = {
                row: i,
                column: t
            };
        t < 3 ? t++ : t--,
            f.position.row = i,
            f.position.column = t
    }
    var e = new SmartObject,
        y = new SmartObject,
        o = [
        ],
        u = new SmartObject,
        f = {
            color: '#FFFFFF',
            size: 0,
            placement: 1,
            position: {
                row: 0,
                column: 0
            }
        },
        s = 0,
        h = 0;
    return e.resize = function () {
        var n = 0,
            u = o.length,
            r,
            t;
        for (s = Math.ceil(ContentController.WIN_WIDTH / 4), h = Math.ceil(ContentController.WIN_HEIGHT / 3), r = 0, t = 0, n; n < u; n++) o[n].resize(s, h),
            o[n]._x = s * t,
            o[n]._y = h * r,
            i ? r++ : (t++, t > 3 && (t = 0, r++));
        c()
    },
        e.animateToVideo = function (n, t, i) {
            f.color = n,
                u.style.backgroundColor = n,
                v(t),
                u._opacity = 1,
                u.style.zIndex = 2,
                u.style.display = 'inline',
                TweenLite.to(f, 0.5, {
                    size: 1,
                    placement: 0,
                    onUpdate: c,
                    onComplete: i
                })
        },
        e.animateToGrid = function (n) {
            f.position.column = o[n].getPosition(),
                TweenLite.to(f, 0.5, {
                    size: 0,
                    placement: 1,
                    onUpdate: c,
                    onComplete: a
                }),
                e.resetItems()
        },
        e.resetItems = function () {
            var n = 0,
                t = o.length;
            for (n; n < t; n++) o[n].reset()
        },
        l(),
        e
}
function H3_TravelingGridItem(n, t, i, r) {
    function wt() {
        s.style.backgroundColor = i.getAttribute('data-color'),
            s.style.pointerEvents = 'none',
            u.appendChild(s),
            b.style.backgroundColor = '#FFFFFF',
            b.style.width = '36px',
            b.style.height = '1px',
            b._opacity = 0,
            s.appendChild(b),
            k.style.backgroundColor = '#FFFFFF',
            k.style.width = '36px',
            k.style.height = '1px',
            k._opacity = 0,
            s.appendChild(k),
            y.style.color = '#FFFFFF',
            y.style.textAlign = 'center',
            y._opacity = 0,
            y.innerHTML = i.querySelector('div[data-name="name"]').innerHTML,
            s.appendChild(y),
            p.style.color = '#FFFFFF',
            p.style.textAlign = 'center',
            p._opacity = 0,
            p.innerHTML = 'Destination: ' + i.querySelector('div[data-name="destination"]').innerHTML,
            s.appendChild(p);
        var t = i.querySelector('div[data-name="name"]').innerHTML;
        w.style.color = '#FFFFFF',
            w.style.textAlign = 'center',
            w._opacity = 0,
            w.innerHTML = 'Hear about ' + bt(t) + '’libs Dream Destination',
            s.appendChild(w),
            a.style.overflow = 'hidden',
            u.appendChild(a),
            h = AssetLoader.getAsset('BW_' + n, !0),
            f = AssetLoader.getAsset('Color_' + n, !0),
            f.onload = function (n) {
                n = n || window.event;
                var t = n.target || n.currentTarget || n.srcElement;
                t._orgW = t.naturalWidth || t.width,
                    t._orgH = t.naturalHeight || t.height,
                    t._ratio = t._orgH / t._orgW,
                    u.resize()
            },
            h.onload = function (n) {
                n = n || window.event;
                var t = n.target || n.currentTarget || n.srcElement;
                t._orgW = t.naturalWidth || t.width,
                    t._orgH = t.naturalHeight || t.height,
                    t._ratio = t._orgH / t._orgW,
                    u.resize()
            },
            BrowserDetect.BROWSER_NAME == 'Explorer' && (h.style.width = '500px', h.style.height = '370px', f.style.width = '500px', f.style.height = '370px'),
            a.appendChild(h),
            a.appendChild(f),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 && (a.style.zIndex = 2, f.style.zIndex = 5),
            f.style.zIndex = 10,
            l.style.zIndex = 9,
            l.style.pointerEvents = 'none',
            l._scaleX = l._scaleY = 0,
            u.appendChild(l),
            c.style.zIndex = 9,
            c.style.pointerEvents = 'none',
            c._scaleX = c._scaleY = 0,
            u.appendChild(c),
            e.style.backgroundColor = '#FFFFFF',
            e._opacity = 0,
            e.style.zIndex = 10,
            u.appendChild(e),
            f._opacity = BrowserDetect.TABLET || BrowserDetect.MOBILE ? 1 : 0,
            u.addEvents()
    }
    function bt(n) {
        return n.replace(/\w\S*/g, function (n) {
            return n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
        })
    }
    function ft() {
        it ? nt = !0 : yt()
    }
    function ht() {
        r._openingVid || (t === 3 && TweenLite.to(e, 0.5, {
            _x: - 37
        }), TweenLite.to(ut, 0.5, {
            value: 37,
            onComplete: ot
        }), TweenLite.to(f, 0.3, {
            _opacity: 1,
            _scaleX: 1.1,
            _scaleY: 1.1,
            overwrite: !0
        }), TweenLite.to(h, 0.3, {
            _scaleX: 1.1,
            _scaleY: 1.1,
            onComplete: dt,
            overwrite: !0
        }), BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || TweenLite.to(c, 0.5, {
            delay: 0.5,
            _scaleX: 1,
            _scaleY: 1,
            ease: Back.easeOut,
            overwrite: !0,
            onComplete: kt
        }))
    }
    function kt() {
        ct(),
            rt = setInterval(ct, 2010)
    }
    function ct() {
        TweenMax.to(c, 1, {
            _scaleX: 1.1,
            _scaleY: 1.1,
            ease: Quad.easeInOut,
            overwrite: !0
        }),
            TweenMax.to(c, 1, {
                delay: 1,
                _scaleX: 0.9,
                _scaleY: 0.9,
                ease: Quad.easeInOut
            }),
            TweenLite.to(l, 1.2, {
                delay: 1.3,
                _scaleX: 1.6,
                _scaleY: 1.6,
                ease: Quad.easeOut
            }),
            TweenLite.to(l, 1.2, {
                delay: 1.6,
                _opacity: 0,
                onComplete: lt
            })
    }
    function lt() {
        l._opacity = 1,
            l._scaleX = l._scaleY = 0
    }
    function at() {
        rt && clearInterval(rt),
            TweenMax.to(c, 0.25, {
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            })
    }
    function vt() {
        TweenLite.to(ut, 0.5, {
            value: 0,
            onComplete: ot
        }),
            pt(),
            TweenLite.to(f, 0.3, {
                _opacity: 0,
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            }),
            TweenLite.to(h, 0.3, {
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            }),
            BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || (at(), TweenLite.to(c, 0.3, {
            _scaleX: 0,
            _scaleY: 0,
            overwrite: !0
        }))
    }
    function dt() {
        it = !0,
            u.style.zIndex = 5,
            TweenLite.to(g, 0.3, {
                value: 1,
                onUpdate: et,
                overwrite: !0,
                onComplete: gt
            }),
            TweenLite.to(y, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(p, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(w, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(b, 0.3, {
                delay: 0.2,
                _opacity: 1
            }),
            TweenLite.to(k, 0.3, {
                delay: 0.2,
                _opacity: 1
            })
    }
    function gt() {
        it = !1,
            nt && yt()
    }
    function yt() {
        BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 ? window.open('http://www.youtube.com/watch?v=' + i.querySelector('div[data-name="videoId"]').innerHTML, '_blank')  : (nt = !1, u.removeEvents(), r.initiateVideo(i, n), TweenLite.to(u, 0.3, {
            delay: 0.3,
            _opacity: 0
        }), TweenLite.to(f, 0.3, {
            _opacity: 0,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }), TweenLite.to(h, 0.3, {
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }), s.style.zIndex = 2, TweenLite.to(a, 0.3, {
            _x: s._x,
            _y: s._y
        }), at(), TweenLite.to(c, 0.3, {
            _scaleX: 0,
            _scaleY: 0,
            overwrite: !0
        }), TweenLite.to(l, 0.3, {
            _opacity: 0,
            onComplete: lt,
            overwrite: !0
        }))
    }
    function pt() {
        TweenLite.to(g, 0.3, {
            value: 0,
            onUpdate: et,
            onComplete: ni,
            overwrite: !0
        }),
            TweenLite.to(e, 0.5, {
                _x: 0
            }),
            TweenLite.to(y, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(p, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(w, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(b, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(k, 0.3, {
                _opacity: 0
            })
    }
    function ni() {
        u.style.zIndex = 0
    }
    function et() {
        s._x = t < 3 ? o * g.value : - (o * g.value)
    }
    function ti() {
        if (f && h && o && v && f._ratio && h._ratio) {
            var e = o,
                i = v,
                s = f._ratio || h._ratio,
                t = Math.ceil(e),
                n = Math.ceil(t * s),
                r,
                u;
            n < i && (n = Math.ceil(i), t = Math.ceil(n / s));
            function c() {
                f.style.width = t + 'px',
                    f.style.height = n + 'px',
                    h.style.width = t + 'px',
                    h.style.height = n + 'px'
            }
            function l() {
                r = (e - t) / 2,
                    u = (i - n) / 2,
                    f._x = Math.ceil(r),
                    f._y = Math.ceil(u),
                    h._x = Math.ceil(r),
                    h._y = Math.ceil(u)
            }
            c(),
                l()
        }
    }
    function ot() {
        e.style.width = o + ut.value + 'px',
            e.style.height = v + 'px'
    }
    var u = new SmartObject,
        ii = new SmartObject,
        a = new SmartObject,
        h,
        f,
        e = new SmartObject,
        o = 0,
        v = 0,
        st,
        d,
        s = new SmartObject,
        g = {
            value: 0
        },
        y = SmartObject(TextLib.getTextField('GothamThin', 40, !1)),
        p = SmartObject(TextLib.getTextField('ProximaRegular', 13, !1)),
        w = SmartObject(TextLib.getTextField('GothamBold', 13, !1)),
        b = new SmartObject,
        k = new SmartObject,
        it = !1,
        nt = !1,
        tt = !1,
        rt,
        c = AssetLoader.getAsset('play_' + n, !0),
        l = AssetLoader.getAsset('play_pulse', !0),
        ut = {
            value: 0
        };
    return u.reset = function () {
        TweenLite.to(u, 0.3, {
            delay: 0.3,
            _opacity: 1
        }),
            TweenLite.to(a, 0, {
                _x: 0,
                _y: 0
            }),
            (BrowserDetect.TABLET || BrowserDetect.MOBILE) && TweenLite.to(f, 0.3, {
            _opacity: 1,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 && TweenLite.to(f, 0.3, {
            _opacity: 0,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }),
            nt = !1,
            s.style.zIndex = 0,
            a.style.zIndex = 1,
            pt(),
            u.addEvents()
    },
        u.removeEvents = function () {
            tt && (e.style.cursor = 'default', e.style.pointerEvents = 'none', e.removeEventListener(MouseEvent.CLICK, ft), e.removeEventListener(MouseEvent.MOUSE_OVER, ht), e.removeEventListener(MouseEvent.MOUSE_OUT, vt), tt = !1)
        },
        u.addEvents = function () {
            tt || (BrowserDetect.TABLET || BrowserDetect.MOBILE ? e.addEventListener(MouseEvent.CLICK, ft)  : (e.style.cursor = 'pointer', e.style.pointerEvents = 'all', e.addEventListener(MouseEvent.CLICK, ft), e.addEventListener(MouseEvent.MOUSE_OVER, ht), e.addEventListener(MouseEvent.MOUSE_OUT, vt), tt = !0))
        },
        u.getPosition = function () {
            return t
        },
        u.resize = function (n, i) {
            o = n || o,
                v = i || v,
                st = o * 0.5,
                d = v * 0.5,
                u.style.width = o + 'px',
                u.style.height = v + 'px',
                a.style.width = o + 'px',
                a.style.height = v + 'px',
                s.style.width = o + 'px',
                s.style.height = v + 'px',
                y.style.width = o + 'px',
                y._y = d - 32,
                p.style.width = o + 'px',
                p._y = d + 16,
                w.style.width = o + 'px',
                w._y = v - 50,
                b._x = k._x = st - 18,
                b._y = d - 47,
                k._y = d + 47,
                l._x = (t === 3 ? 0 : o) - 55,
                l._y = d - 55,
                c._x = (t === 3 ? 0 : o) - 33,
                c._y = d - 33,
                et(),
                ti(),
                ot()
        },
        wt(),
        u
}
function H3_TravelingGridItemSmall(n, t, i, r, u) {
    function et() {
        c.style.backgroundColor = i.getAttribute('data-color'),
            c.style.pointerEvents = 'none',
            o.appendChild(c),
            v.style.backgroundColor = '#FFFFFF',
            v.style.width = '36px',
            v.style.height = '1px',
            v._opacity = 0,
            c.appendChild(v),
            y.style.backgroundColor = '#FFFFFF',
            y.style.width = '36px',
            y.style.height = '1px',
            y._opacity = 0,
            c.appendChild(y),
            l.style.color = '#FFFFFF',
            l.style.textAlign = 'center',
            l._opacity = 0,
            l.innerHTML = i.querySelector('div[data-name="name"]').innerHTML,
            c.appendChild(l),
            a.style.color = '#FFFFFF',
            a.style.textAlign = 'center',
            a._opacity = 0,
            a.innerHTML = 'Destination: ' + i.querySelector('div[data-name="destination"]').innerHTML,
            c.appendChild(a),
            h.style.overflow = 'hidden',
            o.appendChild(h),
            s = AssetLoader.getAsset('BW_' + n, !0),
            e = AssetLoader.getAsset('Color_' + n, !0),
            BrowserDetect.BROWSER_NAME == 'Explorer' && (s.style.width = '500px', s.style.height = '370px', e.style.width = '500px', e.style.height = '370px'),
            h.appendChild(s),
            h.appendChild(e),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 && (h.style.zIndex = 2, e.style.zIndex = 5),
            e.style.zIndex = 10,
            f.style.backgroundColor = '#FFFFFF',
            f._opacity = 0.01,
            f.style.zIndex = 10,
            o.appendChild(f),
            e._opacity = BrowserDetect.TABLET || BrowserDetect.MOBILE ? 1 : 0,
            o.addEvents()
    }
    function nt() {
        g ? b = !0 : ut()
    }
    function it() {
        TweenLite.to(e, 0.3, {
            _opacity: 1,
            _scaleX: 1.1,
            _scaleY: 1.1,
            overwrite: !0
        }),
            TweenLite.to(s, 0.3, {
                _scaleX: 1.1,
                _scaleY: 1.1,
                onComplete: ot,
                overwrite: !0
            })
    }
    function rt() {
        ft(),
            TweenLite.to(e, 0.3, {
                _opacity: 0,
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            }),
            TweenLite.to(s, 0.3, {
                _scaleX: 1,
                _scaleY: 1,
                overwrite: !0
            })
    }
    function ot() {
        g = !0,
            o.style.zIndex = 5,
            TweenLite.to(w, 0.3, {
                value: 1,
                onUpdate: tt,
                overwrite: !0,
                onComplete: st
            }),
            TweenLite.to(l, 0, {
                delay: 0,
                _opacity: 1
            }),
            TweenLite.to(a, 0, {
                delay: 0,
                _opacity: 1
            }),
            TweenLite.to(v, 0, {
                delay: 0,
                _opacity: 1
            }),
            TweenLite.to(y, 0, {
                delay: 0,
                _opacity: 1
            })
    }
    function st() {
        g = !1,
            b && ut()
    }
    function ut() {
        b = !1,
            r._switchToId = {
                data: i,
                id: n
            },
            u.close()
    }
    function ft() {
        TweenLite.to(w, 0.3, {
            value: 0,
            onUpdate: tt,
            onComplete: ht,
            overwrite: !0
        }),
            TweenLite.to(l, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(a, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(v, 0.3, {
                _opacity: 0
            }),
            TweenLite.to(y, 0.3, {
                _opacity: 0
            })
    }
    function ht() {
        o.style.zIndex = 0
    }
    function tt() {
        h._x = t < 3 ? d * w.value : - (d * w.value)
    }
    function ct() {
        var n = Resizer.getNewSize({
            orgW: s.orgW,
            orgH: s.orgH,
            boundsW: 266,
            boundsH: p,
            overscale: !0
        });
        s.style.width = n.w + 'px',
            s.style.height = n.h + 'px',
            s._x = 266 * 0.5 - n.w * 0.5,
            s._y = p * 0.5 - n.h * 0.5,
            e.style.width = n.w + 'px',
            e.style.height = n.h + 'px',
            e._x = 266 * 0.5 - n.w * 0.5,
            e._y = p * 0.5 - n.h * 0.5
    }
    var o = new SmartObject,
        lt = new SmartObject,
        h = new SmartObject,
        s,
        e,
        f = new SmartObject,
        d = Math.ceil(ContentController.WIN_WIDTH / 4),
        p = Math.ceil(ContentController.WIN_HEIGHT / 3),
        c = new SmartObject,
        w = {
            value: 0
        },
        l = SmartObject(TextLib.getTextField('GothamThin', 40, !1)),
        a = SmartObject(TextLib.getTextField('ProximaRegular', 13, !1)),
        v = new SmartObject,
        y = new SmartObject,
        g = !1,
        b = !1,
        k = !1;
    return o.reset = function () {
        TweenLite.to(o, 0.3, {
            delay: 0.3,
            _opacity: 1
        }),
            TweenLite.to(h, 0, {
                _x: 0,
                _y: 0
            }),
            (BrowserDetect.TABLET || BrowserDetect.MOBILE) && TweenLite.to(e, 0.3, {
            _opacity: 1,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 && TweenLite.to(e, 0.3, {
            _opacity: 0,
            _scaleX: 1,
            _scaleY: 1,
            overwrite: !0
        }),
            b = !1,
            c.style.zIndex = 0,
            h.style.zIndex = 1,
            ft()
    },
        o.removeEvents = function () {
            k && (f.style.cursor = 'default', f.style.pointerEvents = 'none', f.removeEventListener(MouseEvent.CLICK, nt), f.removeEventListener(MouseEvent.MOUSE_OVER, it), f.removeEventListener(MouseEvent.MOUSE_OUT, rt), k = !1)
        },
        o.addEvents = function () {
            k || (BrowserDetect.TABLET || BrowserDetect.MOBILE ? f.addEventListener(MouseEvent.CLICK, nt)  : (f.style.cursor = 'pointer', f.style.pointerEvents = 'all', f.addEventListener(MouseEvent.CLICK, nt), f.addEventListener(MouseEvent.MOUSE_OVER, it), f.addEventListener(MouseEvent.MOUSE_OUT, rt), k = !0))
        },
        o.getPosition = function () {
            return t
        },
        o.resize = function (n, t) {
            d = n,
                p = t,
                o.style.width = n + 'px',
                o.style.height = t + 'px',
                h.style.width = n + 'px',
                h.style.height = t + 'px',
                c.style.width = '266px',
                c.style.height = t + 'px',
                f.style.width = n + 'px',
                f.style.height = t + 'px',
                l.style.width = '266px',
                l._y = t * 0.5 - 32,
                a.style.width = '266px',
                a._y = t * 0.5 + 16,
                v._x = y._x = 266 * 0.5 - 18,
                v._y = t * 0.5 - 47,
                y._y = t * 0.5 + 47,
                tt(),
                ct()
        },
        et(),
        o
}
function H3_TravelingVideo(n, t, i, r, u) {
    function ht() {
        ContentController.addPreloader(jQuery(i));
        var n = d.getAttribute('data-color');
        p.style.backgroundColor = n,
            f.appendChild(p),
            a = new H3_TravelingSideBar(d, n, t, f, tt, r),
            a._x = s,
            a.style.zIndex = 6,
            a.resize(s, l),
            f.appendChild(a),
            y = new H3_TravelingPeopleBar(tt, r, f),
            y._x = s,
            y.style.zIndex = 7,
            y.resize(s, l),
            f.appendChild(y),
            ct()
    }
    function ut(n) {
        var t = n,
            i;
        n == - 1 && (t = 'unstarted'),
            n == 0 && (t = 'ended'),
            n == 1 && (t = 'playing', TweenLite.to(h, b ? 0 : 0.5, {
            value: 266,
            onUpdate: f.resize
        })),
            n == 2 && (t = 'paused', i = e.curTime, a && a.mapOverlayIsOpen() ? c.toggleExternal(!0)  : rt || yt()),
            n == 3 && (t = 'buffering'),
            n == 5 && (t = 'video cued')
    }
    function ct() {
        function o() {
            var t;
            ContentController.removePreloader(jQuery(i)),
                    BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? ft()  : (c = new H3_TravelingVideoControls(f), g = parseInt(d.querySelector('div[data-name="videoEnd"]').innerHTML), BrowserDetect.TABLET || BrowserDetect.MOBILE ? (t = 0, e = new YoutubeVideoPlayer(n, ut, c, g, t), e._y = - 20, e._opacity = 1)  : (t = r.VIDEO_PLAYED ? nt : null, e = new YoutubeVideoPlayer(n, ut, c, g, t, !0), e._opacity = 0, setTimeout(f.resize, 500), ft()), e.style.zIndex = 0, f.appendChild(e))
        }
        var u = [
                'fallback_' + t + '.jpg',
            'vid_bg.png',
            'vid_pause.png',
            'vid_play.png'
        ];
        AssetLoader.loadGroup(new AssetGroup(u, o, '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/traveling/'), !0)
    }
    function ft() {
        o = AssetLoader.getAsset('fallback_' + t, !0),
            o._opacity = 0,
            o.style.zIndex = 3,
            Resizer.fitInside(o, {
                width: s,
                height: l,
                overscale: !0
            }),
            o._x = s * 0.5 - o._getWidth() * 0.5,
            o._y = l * 0.5 - o._getHeight() * 0.5,
            f.appendChild(o),
            lt(),
            at()
    }
    function lt() {
        BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? (TweenLite.to(h, b ? 0 : 0.5, {
            value: 266,
            onUpdate: f.resize
        }), v = new SmartObject, v.style.zIndex = 20, v.style.position = 'absolute', v.id = '_videoWrapper', v.style.background = '#000', f.resize())  : (c.setPlayer(e.getPlayer()), c.style.zIndex = 5, f.appendChild(c), c._x = s * 0.5 - 244, c._y = l - w.value, it = !0, TweenLite.to(w, 0.5, {
            delay: 0.5,
            value: 80,
            onUpdate: et,
            ease: Back.easeOut
        }), TweenLite.to(e, 0.3, {
            _opacity: 1
        }), f.resize())
    }
    function at() {
        e.onclick = function () {
            c.toggleExternal(!0)
        },
            o.onclick = function () {
                c.toggleExternal(!0)
            }
    }
    function et() {
        c._y = l - w.value
    }
    function ot() {
        e.updateVolumeLevel(k.level)
    }
    function st() {
        r.closeVideo(t - 1)
    }
    function vt() {
        r.VIDEO_PLAYED ? (e.getCurrentTime() < nt && e.seekTo(nt), e.play())  : e.play()
    }
    function yt() {
        TweenLite.to(h, b ? 0 : 0.5, {
            value: 532,
            onUpdate: f.resize
        })
    }
    var f = new SmartObject,
        e,
        c,
        o,
        a,
        y,
        tt = u,
        h = {
            value: 0
        },
        s = ContentController.WIN_WIDTH - h.value,
        l = ContentController.WIN_HEIGHT,
        it = !1,
        p = new SmartObject,
        k = {
            level: 50
        },
        d = i.querySelector('div[data-name="gridData"]').children[t - 1],
        w = {
            value: 0
        },
        g,
        v,
        b = BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        nt = 44,
        rt = !1;
    return f.close = function (n) {
        var t = n ? 0 : 0.5,
            i = n ? 1.5 : 0.5;
        BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? (jQuery(v).empty(), TweenLite.to(h, t, {
            delay: i,
            value: 0,
            onUpdate: f.resize,
            onComplete: st
        }))  : (r.VIDEO_PLAYED = !0, rt = !0, c.toggleExternal(), TweenLite.to(w, t, {
            value: 0,
            onUpdate: et
        }), TweenLite.to(h, t, {
            delay: i,
            value: 0,
            onUpdate: f.resize,
            onComplete: st
        })),
            trace(r.VIDEO_PLAYED, 'H3_TravelingVideo close')
    },
        f.toggleSound = function (n) {
            n ? TweenLite.to(k, 0.3, {
                level: 50,
                onUpdate: ot
            })  : TweenLite.to(k, 0.3, {
                level: 0,
                onUpdate: ot
            })
        },
        f.changeState = function (n) {
            n == 1 ? (TweenLite.to(o, 0.3, {
                _opacity: 0,
                onComplete: vt
            }), TweenLite.to(e, 0.3, {
                delay: 0.3,
                _opacity: 1
            }), f.resize())  : (e.pause(), TweenLite.to(e, 0.3, {
                _opacity: 0
            }), TweenLite.to(o, 0.3, {
                _opacity: 1
            }), a.mapOverlayIsOpen() && h.value !== 266 && TweenLite.to(h, b ? 0 : 0.5, {
                value: 266,
                onUpdate: f.resize
            }))
        },
        f.resize = function (n, t) {
            n && t && (s = n, l = t),
                o && (Resizer.fitInside(o, {
                width: s - h.value,
                height: l,
                overscale: !0
            }), o._x = (s - h.value) * 0.5 - o._getWidth() * 0.5, o._y = l * 0.5 - o._getHeight() * 0.5),
                it && (c._x = (s - h.value) * 0.5 - 244, c._y = l - w.value),
                p && (p.style.width = s + 'px', p.style.height = l + 'px'),
                a._x = s - h.value,
                a.resize(s - h.value, l),
                y._x = s - h.value + 266,
                y.resize(s - h.value, l),
                e && e.resize(s - h.value, l),
                v && (v.style.width = s - h.value + 'px', v.style.height = l + 'px')
        },
        f.kill = function () {
            e && (e.onclick = null),
                o && (o.onclick = null),
                BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 || e.kill()
        },
        ht(),
        f
}
function H3_TravelingVideoControls(n) {
    function w() {
        l ? (l = !1, c.animateOut())  : (l = !0, c.animateIn()),
            n.toggleSound(l)
    }
    function b() {
        TweenLite.to(i, 0.5, {
            _opacity: 1
        }),
            TweenLite.to(r, 0.5, {
                _opacity: 1
            })
    }
    function k() {
        TweenLite.to(i, 0.5, {
            _opacity: 0
        }),
            TweenLite.to(r, 0.5, {
                _opacity: 0
            })
    }
    function a(n) {
        var t = Math.floor(n / 60),
            i = Math.floor(n - t * 60);
        return t < 10 && (t = '0' + t),
            i < 10 && (i = '0' + i),
            t + ':' + i
    }
    function v() {
        h == 0 ? (h = 1, s.style.display = 'none', o.style.display = 'inline')  : (h = 0, s.style.display = 'inline', o.style.display = 'none'),
            n.changeState(h)
    }
    var t = new SmartObject,
        y = AssetLoader.getAsset('vid_bg', !0),
        s = AssetLoader.getAsset('vid_play', !0),
        o = AssetLoader.getAsset('vid_pause', !0),
        f = new SmartObject,
        e = new SmartObject,
        h = 0,
        i = SmartObject(TextLib.getTextField('GothamBold', 13, !1)),
        r = SmartObject(TextLib.getTextField('GothamBold', 13, !1)),
        c = new SoundBars,
        u = new SmartObject,
        l = !0,
        p;
    return function () {
        t.appendChild(y),
            t.appendChild(f),
            f.style.backgroundColor = '#FFFFFF',
            f.style.width = '0px',
            f.style.height = '1px',
            f._x = 101,
            f._y = 19,
            t.appendChild(f),
            t.appendChild(s),
            s._x = 20,
            s._y = 11,
            t.appendChild(o),
            o._x = 20,
            o._y = 11,
            o.style.display = 'none',
            i.style.color = '#FFFFFF',
            i.innerHTML = '00:00',
            i._x = 57,
            i._y = 12,
            i._opacity = 0,
            t.appendChild(i),
            r.style.color = '#FFFFFF',
            r.innerHTML = '00:00',
            r._x = 404,
            r._y = 12,
            r._opacity = 0,
            t.appendChild(r),
            e.style.backgroundColor = '#FFFFFF',
            e.style.width = '50px',
            e.style.height = '40px',
            e.style.cursor = 'pointer',
            e.style.pointerEvents = 'all',
            e._opacity = 0.01,
            t.appendChild(e),
            e.addEventListener(MouseAndTouchEvent.MOUSE_DOWN, v),
            c._x = 455,
            c._y = 25,
            t.appendChild(c),
            u.style.backgroundColor = '#FFFFFF',
            u.style.width = '40px',
            u.style.height = '40px',
            u.style.cursor = 'pointer',
            u.style.pointerEvents = 'all',
            u._opacity = 0.01,
            u._x = 448,
            t.appendChild(u),
            u.addEventListener(MouseAndTouchEvent.MOUSE_DOWN, w)
    }(),
        t.setProgressPerc = function (n, t) {
            f.style.width = 290 * (n / t) + 'px',
                i.innerHTML = a(n),
                r.innerHTML = a(t),
                    t > 0 ? b()  : k()
        },
        t.togglePlaying = function () {
            h = 1,
                s.style.display = 'none',
                o.style.display = 'inline'
        },
        t.setPlayer = function (n) {
            p = n
        },
        t.toggleExternal = function (n) {
            (h == 1 || n) && v()
        },
        t
}
function H3_TravelingSideBar(n, t, i, r, u, f) {
    function rt() {
        function ot(n) {
            var t = new SmartObject,
                u,
                i,
                r;
            return t.style.cursor = 'pointer',
                    n === 'spotify' ? (u = AssetLoader.getAsset('btn_Playlist.jpg', !0), i = AssetLoader.getAsset('btn_Playlist_h.jpg', !0), r = 'http://open.spotify.com/user/1113334336/playlist/5XeI2FjJZswqYRBwEetRz2')  : (u = AssetLoader.getAsset('btn_Share.jpg', !0), i = AssetLoader.getAsset('btn_Share_h.jpg', !0), r = 'http://open.spotify.com/user/1113334336/playlist/5XeI2FjJZswqYRBwEetRz2'),
                i._opacity = 0,
                t.onmouseover = function () {
                    TweenMax.to(i, 0.3, {
                        _opacity: 1,
                        ease: Quart.easeOut
                    })
                },
                t.onmouseout = function () {
                    TweenMax.to(i, 0.3, {
                        _opacity: 0,
                        ease: Quart.easeOut
                    })
                },
                t.onclick = function () {
                    t.onmouseout(),
                            n === 'spotify' ? (window.open(r, '_blank'), window.focus())  : SocialShare.facebookShare(r, 'Traveling In Style')
                },
                t.appendChild(u),
                t.appendChild(i),
                t
        }
        var i,
            rt;
        h.style.backgroundColor = '#141414',
            h.style.width = '266px',
            h.style.height = ContentController.WIN_HEIGHT + 'px',
            h.style.zIndex = 0,
            s.appendChild(h),
            e._x = 20,
            s.appendChild(e),
            k.style.color = t,
            k.style.width = '160px',
            k.innerHTML = 'TRAVELLER',
            e.appendChild(k),
            v.style.color = '#FFFFFF',
            v.style.width = '160px',
            v.innerHTML = n.querySelector('div[data-name="name"]').innerHTML,
            v._y = 18,
            e.appendChild(v),
            l.style.color = t,
            l.style.width = '225px',
            l.innerHTML = 'DESTINATION',
            l._y = 56,
            e.appendChild(l),
            y.style.color = '#FFFFFF',
            y.style.width = '225px',
            y.innerHTML = n.querySelector('div[data-name="destination"]').innerHTML,
            y._y = 72,
            e.appendChild(y),
            a.style.color = t,
            a.style.width = '225px',
            a.innerHTML = 'TRAVEL TUNE',
            a._y = 112,
            e.appendChild(a),
            p.style.color = '#FFFFFF',
            p.style.width = '225px',
            p.innerHTML = n.querySelector('div[data-name="tune"]').innerHTML,
            p._y = 130,
            e.appendChild(p),
            nt._x = 0,
            nt._y = 223,
            e.appendChild(nt),
            tt._x = 0,
            tt._y = 500,
            e.appendChild(tt),
            w._x = 0,
            w._y = 265,
            w.style.cursor = 'pointer',
            w.addEventListener(MouseAndTouchEvent.MOUSE_DOWN, it),
            e.appendChild(w),
            d = ot('spotify'),
            d._x = 0,
            d._y = 535,
            e.appendChild(d),
            g = ot(),
            g._x = 0,
            g._y = 585,
            e.appendChild(g),
            o._x = 196,
            o._y = 30,
            o.style.width = '40px',
            o.style.height = '40px',
            o.style.zIndex = 13,
            s.appendChild(o),
            i = new SmartObject,
            i._x = 196,
            i._y = 30,
            i.style.backgroundColor = '#FFFFFF',
            i.style.width = '40px',
            i.style.height = '40px',
            i.style.zIndex = 13,
            i.style.cursor = 'pointer',
            i.style.pointerEvents = 'all',
            i.style.zIndex = 14,
            i._opacity = 0.01,
            i.addEventListener(MouseEvent.MOUSE_OVER, ut),
            i.addEventListener(MouseEvent.MOUSE_OUT, ft),
            i.addEventListener(MouseAndTouchEvent.MOUSE_DOWN, et),
            s.appendChild(i),
            rt = new Btn2(AssetLoader.getAsset('btn_Compass', !0), AssetLoader.getAsset('btn_Compass_h', !0)),
            b.appendChild(rt),
            b._x = - 2,
            b._y = 442,
            e.appendChild(b),
            b.addEventListener(MouseAndTouchEvent.MOUSE_DOWN, it),
            c = new H3_TravelingMapOverlay(n, u, r, f),
            c.style.zIndex = 999
    }
    function ut() {
        TweenLite.to(o, 0.4, {
            _opacity: 0.5
        })
    }
    function ft() {
        TweenLite.to(o, 0.4, {
            _opacity: 1
        })
    }
    function et() {
        r.close()
    }
    function it() {
        trace('Compass click'),
            r.appendChild(c),
            c.focusIn(),
            r.changeState('pause')
    }
    var s = new SmartObject,
        h = new SmartObject,
        k = SmartObject(TextLib.getTextField('GothamBold', 13, !1)),
        l = SmartObject(TextLib.getTextField('GothamBold', 13, !1)),
        a = SmartObject(TextLib.getTextField('GothamBold', 13, !1)),
        v = SmartObject(TextLib.getTextField('GothamThin', 25, !1)),
        y = SmartObject(TextLib.getTextField('GothamThin', 25, !1)),
        p = SmartObject(TextLib.getTextField('GothamThin', 25, !1)),
        w = AssetLoader.getAsset('Map_' + i, !0),
        nt = AssetLoader.getAsset('line', !0),
        tt = AssetLoader.getAsset('line', !0),
        d,
        g,
        c,
        o = AssetLoader.getAsset('btn_Close', !0),
        b = new SmartObject,
        e = new SmartObject;
    return s.mapOverlayIsOpen = function () {
        return c._isOpen
    },
        s.resize = function (n, t) {
            c.resize(n, t),
                h.style.height = t + 'px',
                e._y = t > 0 ? t * 0.5 - 310 : 0
        },
        rt(),
        s
}
function H3_TravelingPeopleBar(n, t, i) {
    function e() {
        var s;
        r.style.backgroundColor = 'black',
            r.style.width = '266px',
            r.style.height = ContentController.WIN_HEIGHT + 'px',
            r.style.zIndex = 0,
            u.appendChild(r);
        var h = n.cloneNode(!0),
            e = 0,
            w = h.children.length,
            b,
            o = [
            ],
            a = 0,
            l = 0,
            c = 0;
        for (e; e < w; e++) if (h.children[e].querySelector('[data-name=videoId]').innerHTML === t._curVideoId) {
            b = e,
                a = e + 1,
                l = e + 2,
                c = e + 3,
                    e + 1 === 10 ? c = 0 : e + 1 === 11 ? (l = 0, c = 1)  : e + 1 === 12 && (a = 0, l = 1, c = 2);
            var v = h.children[a],
                y = h.children[l],
                p = h.children[c];
            v._index = jQuery(v).index() + 1,
                y._index = jQuery(y).index() + 1,
                p._index = jQuery(p).index() + 1,
                o.push(v),
                o.push(y),
                o.push(p)
        }
        s = document.createElement('div'),
            s.setAttribute('data-name', 'gridData'),
            s.appendChild(o[0]),
            s.appendChild(o[1]),
            s.appendChild(o[2]),
            f = new H3_TravelingGrid(s, t, !0, i),
            u.appendChild(f)
    }
    var u = new SmartObject,
        r = new SmartObject,
        f;
    return u.resize = function (n, t) {
        r.style.height = t + 'px',
            f && f.resize(n, t)
    },
        e(),
        u
}
function H3_TravelingIntroOverlay() {
    var t = new SmartObject,
        i = new SmartObject,
        n = SmartObject(TextLib.getTextField('GothamThin', 66, !1)),
        r;
    return function () {
        i.style.backgroundColor = '#000000',
            i._opacity = 0.8,
            t.appendChild(i),
            n.innerHTML = 'If you could go anywhere in the <br/>world, where would you go?',
            n.style.textAlign = 'center',
            n.style.lineHeight = '66px',
            n.style.color = '#FFFFFF',
            t.appendChild(n),
            r = n._getHeight() * 0.5
    }(),
        t.resize = function (t, u) {
            i.style.width = t + 'px',
                i.style.height = u + 'px',
                n.style.width = t + 'px',
                n._y = u * 0.5 - r
        },
        t.animateOut = function (n) {
            TweenLite.to(t, 0.5, {
                delay: 3,
                _opacity: 0,
                onComplete: n
            })
        },
        t
}
function H3_TravelingMapOverlay(n, t, i, r) {
    function v() {
        var a,
            b,
            s,
            v,
            k,
            n;
        for (u._opacity = 0, u._scaleX = h ? 1 : 0.95, u._scaleY = h ? 1 : 0.95, u._transformOriginX = 50, u._transformOriginY = 50, u.style.background = '#191919', u.style.pointerEvents = 'none', c = jQuery('<div />'), c.css({
            position: 'absolute',
            font: '13px/16px GothamBold',
            color: '#fff',
            textAlign: 'left',
            top: '30px',
            left: '150px',
            zIndex: 999
        }), c.html('TRAVELLING IN STYLE.<br />WHERE WOULD YOU GO?'), jQuery(u).append(c), o = AssetLoader.getAsset('Map_large.jpg').get(0), SmartObject(o), o._opacity = 0.5, a = 0, b = t.children.length, a; a < b; a++) s = t.children[a],
            v = new H3_TravelingTooltip({
                name: s.querySelector('div[data-name="name"]').innerHTML,
                destination: s.querySelector('div[data-name="destination"]').innerHTML,
                tune: s.querySelector('div[data-name="tune"]').innerHTML,
                x: s.querySelector('div[data-name="mapX"]').innerHTML,
                y: s.querySelector('div[data-name="mapY"]').innerHTML,
                gravity: s.querySelector('div[data-name="mapGravity"]').innerHTML,
                color: s.getAttribute('data-color'),
                data: s,
                id: a + 1
            }, u, i, r),
            l.push(v),
            e.appendChild(v);
        k = AssetLoader.getAsset('Map_pin_dot.png').get(0),
            n = new SmartObject,
            n._x = 262,
            n._y = 255,
            n.style.width = '200px',
            n.style.color = '#fff',
            n.style.textTransform = 'uppercase',
            n.style.font = '11px/11px ProximaRegular, sans-serif',
            n.innerHTML = '<span style="font-family:GothamBold; margin-left:20px;">NEW YORK CITY</span>',
            jQuery(n).prepend(k),
            e.appendChild(o),
            e.appendChild(n),
            u.appendChild(e),
            f.style.width = '40px',
            f.style.height = '40px',
            f.style.cursor = 'pointer',
            f.style.zIndex = 13,
            f.addEventListener(MouseEvent.MOUSE_OVER, y),
            f.addEventListener(MouseEvent.MOUSE_OUT, p),
            f.addEventListener(MouseAndTouchEvent.MOUSE_DOWN, w),
            u.appendChild(f),
            u.resize()
    }
    function y() {
        TweenLite.to(f, 0.4, {
            _opacity: 0.5
        })
    }
    function p() {
        TweenLite.to(f, 0.4, {
            _opacity: 1
        })
    }
    function w() {
        u.focusOut()
    }
    var u = new SmartObject,
        e = new SmartObject,
        o,
        c,
        l = [
        ],
        f = AssetLoader.getAsset('btn_Close', !0),
        h = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
        s = ContentController.WIN_WIDTH,
        a = ContentController.WIN_HEIGHT;
    return u.focusIn = function (n) {
        u._isOpen = !0,
            TweenLite.to(u, h ? 0 : 0.5, {
                _scaleX: 1,
                _scaleY: 1,
                _opacity: 1,
                onComplete: function () {
                    for (var t = 0, i = l.length; t < i; t++) TweenLite.to(l[t], 0.3, {
                        delay: 0.05 * t,
                        _opacity: 1,
                        ease: Quart.easeInOut
                    });
                    n && n()
                }
            }),
            u.style.pointerEvents = 'all'
    },
        u.focusOut = function (n) {
            u._isOpen = !1,
                TweenLite.to(u, h ? 0 : 0.5, {
                    delay: 0,
                    _scaleX: h ? 1 : 0.95,
                    _scaleY: h ? 1 : 0.95,
                    _opacity: 0,
                    onComplete: function () {
                        for (var t = 0, i = l.length; t < i; t++) TweenLite.to(l[t], 0, {
                            _opacity: 0
                        });
                        jQuery(u).remove(),
                            n && n()
                    }
                }),
                u.style.pointerEvents = 'none'
        },
        u.resize = function (n, t) {
            if (s = n + 266 || s, a = t || a, jQuery(c).css({
                left: s * 0.5 - 480
            }), jQuery(u).css({
                width: s,
                height: a
            }), f && (f._x = s - 70, f._y = 30), o) {
                var v = 1280,
                    h = 672,
                    l = 672 / 1670,
                    r = Math.ceil(v),
                    i = Math.ceil(r * l),
                    y,
                    p;
                i < h && (i = Math.ceil(h), r = Math.ceil(i / l));
                function w() {
                    jQuery(o).css({
                        width: r,
                        height: i
                    }),
                        jQuery(e).css({
                            width: 1280,
                            height: 672
                        })
                }
                function b() {
                    y = (s - r) / 2,
                        p = (a - i) / 2,
                        o._x = - 195,
                        e._x = (s - 1280) / 2,
                        e._y = (a - 672) / 2
                }
                w(),
                    b()
            }
        },
        v(),
        u
}
function H3_TravelingTooltip(n, t, i, r) {
    function k(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }
    function d() {
        var t = 65,
            i = n.gravity;
        if (typeof i == 'undefined') return !1;
        u.correctHeight = u._getHeight(),
            u.correctHeight += Assets.FIRST_RUN ? 21 : 21;
        switch (i) {
            case 'top':
                u._y = - u.correctHeight - 8,
                    u._x = - 235 / 2 + 19;
                break;
            case 'bottom':
                u._y = t,
                    u._x = - 235 / 2 + 19;
                break;
            case 'left':
                u._y = - (u.correctHeight / 2) + 38 - 8,
                    u._x = - 187 - t / 2;
                break;
            case 'right':
                u._y = - (u.correctHeight / 2) + 38 - 7,
                    u._x = t - 22
        }
    }
    function y() {
        Assets.IS_TABLET || (e.addEventListener(MouseEvent.MOUSE_OVER, w, !1), e.addEventListener(MouseEvent.MOUSE_OUT, c, !1)),
            e.addEventListener(MouseEvent.MOUSE_DOWN, b, !1)
    }
    function p() {
        Assets.IS_TABLET || (e.removeEventListener(MouseEvent.MOUSE_OVER, w, !1), e.removeEventListener(MouseEvent.MOUSE_OUT, c, !1)),
            e.removeEventListener(MouseEvent.MOUSE_DOWN, b, !1)
    }
    function w() {
        u.visible = !0,
            TweenLite.to(u, 0, {
                _opacity: 1,
                ease: Quint.easeInOut,
                overwrite: 'concurrent'
            }),
            TweenLite.to(e, 0.1, {
                _opacity: 0,
                ease: Quad.easeInOut,
                overwrite: 'concurrent'
            }),
            f.style.zIndex = 999
    }
    function c() {
        u.visible = !1,
            TweenLite.to(u, 0, {
                _opacity: 0,
                ease: Quint.easeInOut,
                overwrite: 'concurrent'
            }),
            TweenLite.to(e, 0.1, {
                _opacity: 1,
                ease: Quad.easeInOut,
                overwrite: 'concurrent'
            }),
            f.style.zIndex = 10
    }
    function b() {
        r._switchToId = {
            data: n.data,
            id: n.id
        },
            t.focusOut(i.close)
    }
    var f = new SmartObject,
        h,
        l,
        u,
        a,
        o,
        e,
        v,
        s;
    return f.style.width = '58px',
        f.style.height = '52px',
        f.style.zIndex = 10,
        h = 29,
        l = 26,
        f._x = n.x - h,
        f._y = n.y - l,
        u = new SmartObject,
        u.style.position = 'absolute',
        u.style.background = n.color,
        u.style.width = '170px',
        u.style.color = '#fff',
        u.style.padding = '30px 20px 30px 20px',
        u.style.pointerEvents = 'none',
        u.style.zIndex = - 1,
        u.style.font = '13px/16px ProximaRegular, sans-serif',
        u.style.letterSpacing = 0,
        u.style.pointerEvents = 'none',
        u._opacity = 0,
        a = '<span style="font-family:GothamBold;">TRAVELLER</span><br />' + k(n.name.toLowerCase()) + '<br /><br /><span style="font-family:GothamBold;">DESTINATION</span><br />' + n.destination + '<br /><br /><span style="font-family:GothamBold;">TRAVEL TUNE</span><br />' + n.tune,
        u.innerHTML = a,
        o = new SmartObject,
        o._x = h + 15,
        o._y = 20,
        o.style.width = '200px',
        o.style.color = '#fff',
        o.style.textTransform = 'uppercase',
        o.style.font = '11px/11px ProximaRegular, sans-serif',
        o.style.zIndex = - 2,
        o.style.pointerEvents = 'none',
        o.innerHTML = '<span style="font-family:GothamBold;">' + n.destination + '</span>',
        e = new SmartObject(AssetLoader.getAsset('Map_pin_gray.png').get(0)),
        e.style.width = '100%',
        e.style.cursor = 'pointer',
        e.randDelay = Math.random() + 1,
        v = n.name.toLowerCase().replace(/\s+/g, '') + '.png',
        s = new SmartObject(AssetLoader.getAsset('Map_pin_' + v).get(0)),
        s.style.width = '100%',
        s.style.cursor = 'pointer',
        s.style.pointerEvents = 'none',
        s.randDelay = Math.random() + 1,
        f._opacity = 0,
        d(),
        y(!0),
        f.appendChild(o),
        f.appendChild(s),
        f.appendChild(e),
        f.appendChild(u),
        f.setContent = function (n) {
            u.innerHTML = n
        },
        f.addEvents = y,
        f.removeEvents = p,
        f.popUp = function () {
            Assets.IS_DESKTOP || TweenLite.to(e, 0.3, {
                delay: e.randDelay * 0.8,
                _opacity: 1,
                _rotation: 0,
                ease: Quad.easeInOut,
                overwrite: 'all'
            })
        },
        f.popDown = function () {
            Assets.IS_DESKTOP || TweenLite.to(e, 0.3, {
                _opacity: 0,
                _rotation: 0,
                ease: Quad.easeInOut,
                overwrite: 'all'
            })
        },
        f.close = function () {
            u.visible === !0 && c()
        },
        f.kill = function () {
            p(),
                f = null
        },
        f
}
function SoundBars() {
    var t = new SmartObject,
        n = [
        ];
    return function () {
        var r = 0,
            u = 4,
            i;
        for (r; r < 5; r++) i = new SmartObject,
            i._x = 5 * r,
            i._y = - u,
            i.style.width = '2px',
            i.style.height = u + 'px',
            i.style.backgroundColor = '#FFFFFF',
            t.appendChild(i),
            n.push(i),
            u += 2
    }(),
        t.animateIn = function () {
            var t = 0,
                i = n.length;
            for (t; t < i; t++) TweenMax.killTweensOf(n[t]),
                TweenMax.to(n[t], 0.3, {
                    delay: t * 0.05,
                    css: {
                        backgroundColor: '#FFFFFF'
                    },
                    _opacity: 1
                })
        },
        t.animateOut = function () {
            var t = n.length - 1,
                i = 0;
            for (t; t > - 1; t--) TweenMax.killTweensOf(n[t]),
                TweenMax.to(n[t], 0.3, {
                    delay: i * 0.05,
                    css: {
                        backgroundColor: '#EEEEEE'
                    },
                    _opacity: 0.4
                }),
                i++
        },
        t
}
function Btn2(n, t) {
    function u() {
        TweenLite.to(t, 0.5, {
            _opacity: 1
        })
    }
    function f() {
        TweenLite.to(t, 0.5, {
            _opacity: 0
        })
    }
    var r = new SmartObject,
        i = new SmartObject;
    return function () {
        r.appendChild(n),
            r.appendChild(t),
            t.style.zIndex = 2,
            t._opacity = 0,
            i.style.backgroundColor = '#FFFFFF',
            i.style.width = n._getWidth() + 'px',
            i.style.height = n._getHeight() + 'px',
            i._opacity = 0.01,
            i.style.zIndex = 3,
            i.style.cursor = 'pointer',
            i.style.pointerEvents = 'all',
            r.appendChild(i),
            i.addEventListener(MouseEvent.MOUSE_OVER, u),
            i.addEventListener(MouseEvent.MOUSE_OUT, f)
    }(),
        r
}
function Main(n) {
    function e() {
        jQuery.noConflict(),
            t && (t.url = '/layouts/SBV-Custom/HMProductPage/assets/swf/', t.flashVersion = 9, t.waitForWindowLoad = !0, t.debugMode = !1, t.useConsole = !1, t.useHighPerformance = !0),
            TRACE_ACTIVE = !0,
            TRACE_ON_SCREEN = !1,
            BrowserDetect.TABLET ? !0 : !1,
            BrowserDetect.checkTablet(),
            trace(BrowserDetect.BROWSER_NAME, 'BrowserDetect.BROWSER_NAME'),
            trace(BrowserDetect.BROWSER_VERSION, 'BrowserDetect.BROWSER_VERSION'),
            trace(BrowserDetect.OS, 'BrowserDetect.OS'),
            Assets.BUY_ID = u;
        var n = y(u);
        Assets.SITE_ID = n.internalId,
            Assets.SKIN_FOLDER = n.assetsFolder + 'skin/',
            v(n.tracking),
            trace(Assets.SITE_ID, 'Assets.SITE_ID'),
            Assets.IS_LOCAL = p(),
            trace(Assets.IS_LOCAL, 'Assets.IS_LOCAL'),
                BrowserDetect.OS == 'iPhone' || BrowserDetect.OS == 'iPhone/iPod' || BrowserDetect.OS == 'iPod' || BrowserDetect.OS == 'Android' || BrowserDetect.OS == 'Windows CE' || BrowserDetect.OS == 'Blackberry' || BrowserDetect.OS == 'Palm' ? (Assets.MOBILE_VERSION = !0, jQuery('head').append('<meta name="viewport" content="width=1024, user-scalable=0, minimum-scale=0, maximum-scale=1.0" />'))  : BrowserDetect.OS == 'iPad' && jQuery('head').append('<meta name="viewport" content="width=1024, user-scalable=0, minimum-scale=0.5, maximum-scale=1.0" />'),
            AssetLoader.init('/layouts/SBV-Custom/HMProductPage/assets/images/'),
            Assets.SITECORE_DATA = jQuery('#scData'),
            jQuery(Assets.SITECORE_DATA).remove(),
            SitecoreData.init(o)
    }
    function o() {
        if (t) {
            t.ok() || r();
            t.onready(function () {
                r()
            })
        } else r()
    }
    function r() {
        if (i == !1) {
            i = !0,
                clearTimeout(f),
                (BrowserDetect.BROWSER_NAME == 'Safari' || BrowserDetect.BROWSER_NAME == 'Chrome' || BrowserDetect.BROWSER_NAME == 'Explorer') && GlobalMouse.init(),
                Assets.STATIC_DATA = jQuery('#staticContent'),
                jQuery(Assets.STATIC_DATA).remove(),
                Assets.XML = jQuery('#content'),
                jQuery(Assets.XML).remove(),
                s(),
                CustomGoogleTracking.init(Assets.SITE_ID);
            var n = jQuery('#topMenu').get() [0];
            TopMenu.setContainer(n),
                w(),
                Assets.PULLOUTS = new Pullouts,
                jQuery(Assets.LAYER_TOP).append(Assets.PULLOUTS),
                Assets.SITE_ID == 'beolit12' && RumbleEngine.init(),
                Assets.SITE_ID == 'beoplayh6' && (Assets.PROFILE_GRID_XML = Assets.XML.get(0).querySelector('[data-type=profileGrid]')),
                (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID == 'beoplayh6') && (fastClick = new FastClick(document.body)),
                OverallMenu.init(Assets.XML),
                c()
        }
    }
    function s() {
        var i = jQuery(Assets.SITECORE_DATA).children('#sc_relatedContent'),
            r = jQuery(Assets.SITECORE_DATA).children('#sc_youMayAlsoLike'),
            t = jQuery(Assets.SITECORE_DATA).children('#sc_megaFooter'),
            n;
        n = h(t, 'footer', 'FooterTemplate', 'FOOTER', 'footer', '330'),
            jQuery(Assets.XML).append(n)
    }
    function h(n, t, i, r, u, f) {
        var e = document.createElement('div'),
            o = document.createElement('div');
        return e.setAttribute('data-path', t),
            e.setAttribute('data-bgcolor', '#F2F2F2'),
            e.setAttribute('data-description', r),
            e.setAttribute('data-height', f),
            o.setAttribute('data-template', i),
            o.setAttribute('data-description', r),
            o.setAttribute('data-name', u),
            o.setAttribute('data-path', t),
            jQuery(e).append(o),
            jQuery(o).append(n),
            e
    }
    function c() {
        var n = [
                'genericPreloader.gif',
                'loadingCircle.gif',
                'bgCircle.png'
            ],
            t;
        Assets.SITE_ID === 'beoplayh3' && (t = [
            'Generic-preloader_dark.gif',
            'loadingCircle_dark.gif',
            'bgcircle_dark.png'
        ], n = n.concat(t)),
            AssetLoader.loadGroup(new AssetGroup(n, l, '/layouts/SBV-Custom/HMProductPage/assets/common/preloader/'))
    }
    function l() {
        Assets.SITE_ID == 'beoplayEarset3' ? HeadphoneCableController.init(a)  : ContentController.init(Assets.XML)
    }
    function a() {
        ContentController.init(Assets.XML)
    }
    function v(n) {
        if (n) for (var r = n.length, i, t = 0; t < r; t += 1) i = n[t],
            IUMTracking.add(i.group, i.data)
    }
    function y(n) {
        var t = [
        ];
        t.push({
            id: 'Beolit12',
            internalId: 'beolit12',
            assetsFolder: '',
            tracking: [
                {
                    group: 'bottomBtnsClick',
                    data: [
                        'adf.track(4047,1069636,{});',
                        'adf.track(4047,1069636,{});',
                        'adf.track(4047,1069636,{});',
                        'adf.track(4047,1069636,{});'
                    ]
                },
                {
                    group: 'notify',
                    data: [
                        'adf.track(4047,1069631,{});'
                    ]
                }
            ]
        }),
            t.push({
                id: 'BeoplayA8',
                internalId: 'beoplaya8',
                assetsFolder: ''
            }),
            t.push({
                id: 'BeoplayV1',
                internalId: 'beoplayv1',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/V1/',
                tracking: [
                    {
                        group: 'topBuyAction',
                        data: [
                            'adf.track(4047,1261424,{});'
                        ]
                    },
                    {
                        group: 'bottomBtnsClick',
                        data: [
                            'adf.track(4047,1261425,{});',
                            'adf.track(4047,1261426,{});'
                        ]
                    }
                ]
            }),
            t.push({
                id: 'BeoplayV1SE',
                internalId: 'beoplayv1se',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/V1se/',
                tracking: null
            }),
            t.push({
                id: 'BeoplayA3',
                internalId: 'beoplaya3',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/beoplayA3/',
                tracking: [
                    {
                        group: 'topBuyAction',
                        data: [
                            'adf.track(4047,1261427,{});'
                        ]
                    },
                    {
                        group: 'bottomBtnsClick',
                        data: [
                            'adf.track(4047,1261428,{});',
                            'adf.track(4047,1261429,{});'
                        ]
                    }
                ]
            }),
            t.push({
                id: 'BeoplayA9',
                internalId: 'beoplaya9',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/beoplayA9/',
                tracking: [
                    {
                        group: 'topBuyAction',
                        data: [
                            'adf.track(4047,1261427,{});'
                        ]
                    },
                    {
                        group: 'bottomBtnsClick',
                        data: [
                            'adf.track(4047,1261428,{});',
                            'adf.track(4047,1261429,{});'
                        ]
                    }
                ]
            }),
            t.push({
                id: 'BeoplayForm2',
                internalId: 'beoplayForm2',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/beoplayForm2/',
                tracking: [
                    {
                        group: 'topBuyAction',
                        data: [
                            'adf.track(4047,1261427,{});'
                        ]
                    },
                    {
                        group: 'bottomBtnsClick',
                        data: [
                            'adf.track(4047,1261428,{});',
                            'adf.track(4047,1261429,{});'
                        ]
                    }
                ]
            }),
            t.push({
                id: 'BeoplayEarset3',
                internalId: 'beoplayEarset3',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/beoplayEarset3/',
                tracking: [
                    {
                        group: 'topBuyAction',
                        data: [
                            'adf.track(4047,1261427,{});'
                        ]
                    },
                    {
                        group: 'bottomBtnsClick',
                        data: [
                            'adf.track(4047,1261428,{});',
                            'adf.track(4047,1261429,{});'
                        ]
                    }
                ]
            }),
            t.push({
                id: 'BeoplayH6',
                internalId: 'beoplayh6',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/beoplayH6/',
                tracking: [
                    {
                        group: 'topBuyAction',
                        data: [
                            'adf.track(4047,1261427,{});'
                        ]
                    },
                    {
                        group: 'bottomBtnsClick',
                        data: [
                            'adf.track(4047,1261428,{});',
                            'adf.track(4047,1261429,{});'
                        ]
                    }
                ]
            }),
            t.push({
                id: 'BeoplayH3',
                internalId: 'beoplayh3',
                assetsFolder: '/layouts/SBV-Custom/HMProductPage/assets/beoplayH3/',
                tracking: [
                    {
                        group: 'topBuyAction',
                        data: [
                            'adf.track(4047,1261427,{});'
                        ]
                    },
                    {
                        group: 'bottomBtnsClick',
                        data: [
                            'adf.track(4047,1261428,{});',
                            'adf.track(4047,1261429,{});'
                        ]
                    }
                ]
            });
        for (var f = t.length, i = 0, r, u = '', i = 0; i < f; i += 1) if (r = t[i], r.id == n) {
            u = r;
            break
        }
        if (!u) throw new Error('No settings for this site was found — se Main.getInternalSettings();');
        return u
    }
    function p() {
        var n = !1,
            t = document.location.href;
        return (t.indexOf('http://127.0.0.1:8020') != - 1 || t.indexOf('http://localhost:8888/') != - 1) && (n = !0),
            n
    }
    function w() {
        Assets.REAL_BODY = document.body,
            Assets.REAL_BODY.style.width = '100%',
            Assets.REAL_BODY.style.height = '100%',
            Assets.REAL_BODY.style.margin = 0,
            Assets.REAL_BODY.style.padding = 0,
            Assets.REAL_BODY.style.backgroundColor = '#ffffff',
            Assets.BODY = jQuery('#mainform').get(0),
            Assets.BODY.style.width = '100%',
            Assets.BODY.style.height = '100%',
            Assets.BODY.style.margin = 0,
            Assets.BODY.style.padding = 0,
            Assets.BODY.style.backgroundColor = '#ffffff',
            Assets.BODY.style.color = '#000000',
            Assets.BODY.style.fontFamily = 'ProximaRegular, Lucida Grande',
            Assets.BODY.style.fontSize = '13px',
            Assets.LAYER_ALL = General.getNewDiv(),
            Assets.BODY.appendChild(Assets.LAYER_ALL),
            Assets.LAYER_BOT = General.getNewDiv(),
            Assets.LAYER_BOT.style.zIndex = 0,
            Assets.LAYER_ALL.appendChild(Assets.LAYER_BOT),
            Assets.LAYER_MID = General.getNewDiv(),
            style = Assets.LAYER_MID.style,
            style.zIndex = 1,
            Assets.LAYER_ALL.appendChild(Assets.LAYER_MID),
            Assets.LAYER_TOP = General.getNewDiv(),
            Assets.LAYER_TOP.style.zIndex = 2,
            Assets.LAYER_ALL.appendChild(Assets.LAYER_TOP)
    }
    var u = n,
        f,
        i,
        t;
    jQuery(document).ready(e),
        i = !1,
        t = t || null
}
var BrowserDetect,
    SmartObjectRenderer,
    Stats,
    FixIE,
    StrUtils,
    NumUtils,
    MathUtils,
    ProductData,
    ProductDataFormatter,
    ShopService,
    AssetLoaderEvent,
    AssetLoader,
    SitecoreData,
    Assets,
    SocialShare,
    visited,
    GlanceAnimations,
    H3H6_VisibilityController;
(function (n, t) {
    function it(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    function lt(n) {
        if (!ht[n]) {
            var e = r.body,
                t = i('<' + n + '>').appendTo(e),
                u = t.css('display');
            t.remove(),
                (u === 'none' || u === '') && (f || (f = r.createElement('iframe'), f.frameBorder = f.width = f.height = 0), e.appendChild(f), v && f.createElement || (v = (f.contentWindow || f.contentDocument).document, v.write((r.compatMode === 'CSS1Compat' ? '<!doctype html>' : '') + '<html><body>'), v.close()), t = v.createElement(n), v.body.appendChild(t), u = i.css(t, 'display'), e.removeChild(f)),
                ht[n] = u
        }
        return ht[n]
    }
    function h(n, t) {
        var r = {
        };
        return i.each(yr.concat.apply([], yr.slice(0, t)), function () {
            r[this] = n
        }),
            r
    }
    function wr() {
        tt = t
    }
    function at() {
        return setTimeout(wr, 0),
            tt = i.now()
    }
    function br() {
        try {
            return new n.ActiveXObject('Microsoft.XMLHTTP')
        } catch (t) {
        }
    }
    function vt() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {
        }
    }
    function kr(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {
        }, l, p = v.length, a, u = v[0], h, y, f, e, o, c = 1; c < p; c++) {
            if (c === 1) for (l in n.converters) typeof l == 'string' && (s[l.toLowerCase()] = n.converters[l]);
            if (h = u, u = v[c], u === '*') u = h;
            else if (h !== '*' && h !== u) {
                if (y = h + ' ' + u, f = s[y] || s['* ' + u], !f) {
                    o = t;
                    for (e in s) if (a = e.split(' '), (a[0] === h || a[0] === '*') && (o = s[a[1] + ' ' + u], o)) {
                        e = s[e],
                                e === !0 ? f = o : o === !0 && (f = e);
                        break
                    }
                }
                f || o || i.error('No conversion from ' + y.replace(' ', ' to ')),
                    f !== !0 && (r = f ? f(r)  : o(e(r)))
            }
        }
        return r
    }
    function dr(n, i, r) {
        var s = n.contents,
            f = n.dataTypes,
            c = n.responseFields,
            o,
            u,
            e,
            h;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === '*') f.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader('content-type'));
        if (o) for (u in s) if (s[u] && s[u].test(o)) {
            f.unshift(u);
            break
        }
        if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + ' ' + f[0]]) {
                    e = u;
                    break
                }
                h || (h = u)
            }
            e = e || h
        }
        if (e) return e !== f[0] && f.unshift(e),
            r[e]
    }
    function rt(n, t, r, u) {
        if (i.isArray(t)) i.each(t, function (t, f) {
            r || wf.test(n) ? u(n, f)  : rt(n + '[' + (typeof f == 'object' || i.isArray(f) ? t : '') + ']', f, r, u)
        });
        else if (r || t == null || typeof t != 'object') u(n, t);
        else for (var f in t) rt(n + '[' + f + ']', t[f], r, u)
    }
    function yt(n, r) {
        var u,
            f,
            e = i.ajaxSettings.flatOptions || {
            };
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {
        })) [u] = r[u]);
        f && i.extend(!0, n, f)
    }
    function p(n, i, r, u, f, e) {
        f = f || i.dataTypes[0],
            e = e || {
            },
            e[f] = !0;
        for (var s = n[f], h = 0, l = s ? s.length : 0, c = n === st, o; h < l && (c || !o); h++) o = s[h](i, r, u),
            typeof o == 'string' && (!c || e[o] ? o = t : (i.dataTypes.unshift(o), o = p(n, i, r, u, o, e)));
        return !c && o || e['*'] || (o = p(n, i, r, u, '*', e)),
            o
    }
    function pt(n) {
        return function (t, r) {
            if (typeof t != 'string' && (r = t, t = '*'), i.isFunction(r)) for (var o = t.toLowerCase().split(or), f = 0, h = o.length, u, s, e; f < h; f++) u = o[f],
                e = /^\+/.test(u),
                e && (u = u.substr(1) || '*'),
                s = n[u] = n[u] || [],
                s[e ? 'unshift' : 'push'](r)
        }
    }
    function wt(n, t, r) {
        var u = t === 'width' ? n.offsetWidth : n.offsetHeight,
            e = t === 'width' ? vf : yf,
            f = 0,
            o = e.length;
        if (u > 0) {
            if (r !== 'border') for (; f < o; f++) r || (u -= parseFloat(i.css(n, 'padding' + e[f])) || 0),
                    r === 'margin' ? u += parseFloat(i.css(n, r + e[f])) || 0 : u -= parseFloat(i.css(n, 'border' + e[f] + 'Width')) || 0;
            return u + 'px'
        }
        if (u = l(n, t, t), (u < 0 || u == null) && (u = n.style[t] || 0), u = parseFloat(u) || 0, r) for (; f < o; f++) u += parseFloat(i.css(n, 'padding' + e[f])) || 0,
            r !== 'padding' && (u += parseFloat(i.css(n, 'border' + e[f] + 'Width')) || 0),
            r === 'margin' && (u += parseFloat(i.css(n, r + e[f])) || 0);
        return u + 'px'
    }
    function gr(n, t) {
        t.src ? i.ajax({
            url: t.src,
            async: !1,
            dataType: 'script'
        })  : i.globalEval((t.text || t.textContent || t.innerHTML || '').replace(of, '/*$0*/')),
            t.parentNode && t.parentNode.removeChild(t)
    }
    function nu(n) {
        var t = r.createElement('div');
        return tr.appendChild(t),
            t.innerHTML = n.outerHTML,
            t.firstChild
    }
    function bt(n) {
        var t = (n.nodeName || '').toLowerCase();
        t === 'input' ? kt(n)  : t !== 'script' && typeof n.getElementsByTagName != 'undefined' && i.grep(n.getElementsByTagName('input'), kt)
    }
    function kt(n) {
        (n.type === 'checkbox' || n.type === 'radio') && (n.defaultChecked = n.checked)
    }
    function w(n) {
        return typeof n.getElementsByTagName != 'undefined' ? n.getElementsByTagName('*')  : typeof n.querySelectorAll != 'undefined' ? n.querySelectorAll('*')  : [
        ]
    }
    function dt(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === 'object' ? t.outerHTML = n.outerHTML : r !== 'input' || n.type !== 'checkbox' && n.type !== 'radio' ? r === 'option' ? t.selected = n.defaultSelected : (r === 'input' || r === 'textarea') && (t.defaultValue = n.defaultValue)  : (n.checked && (t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value)), t.removeAttribute(i.expando))
    }
    function gt(n, t) {
        if (t.nodeType === 1 && !!i.hasData(n)) {
            var r,
                u,
                o,
                s = i._data(n),
                e = i._data(t, s),
                f = s.events;
            if (f) {
                delete e.handle,
                    e.events = {
                    };
                for (r in f) for (u = 0, o = f[r].length; u < o; u++) i.event.add(t, r + (f[r][u].namespace ? '.' : '') + f[r][u].namespace, f[r][u], f[r][u].data)
            }
            e.data && (e.data = i.extend({
            }, e.data))
        }
    }
    function tu(n) {
        return i.nodeName(n, 'table') ? n.getElementsByTagName('tbody') [0] || n.appendChild(n.ownerDocument.createElement('tbody'))  : n
    }
    function ni(n) {
        var i = bi.split('|'),
            t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t
    }
    function ti(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == 'string') {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (ku.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }
    function ii(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }
    function b() {
        return !0
    }
    function c() {
        return !1
    }
    function ri(n, t, r) {
        var u = t + 'defer',
            f = t + 'queue',
            e = t + 'mark',
            o = i._data(n, u);
        !o || r !== 'queue' && i._data(n, f) || r !== 'mark' && i._data(n, e) || setTimeout(function () {
            i._data(n, f) || i._data(n, e) || (i.removeData(n, u, !0), o.fire())
        }, 0)
    }
    function ut(n) {
        for (var t in n) if ((t !== 'data' || !i.isEmptyObject(n[t])) && t !== 'toJSON') return !1;
        return !0
    }
    function ui(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = 'data-' + r.replace(oi, '-$1').toLowerCase();
            if (u = n.getAttribute(f), typeof u == 'string') {
                try {
                    u = u === 'true' ? !0 : u === 'false' ? !1 : u === 'null' ? null : i.isNumeric(u) ? parseFloat(u)  : ei.test(u) ? i.parseJSON(u)  : u
                } catch (e) {
                }
                i.data(n, r, u)
            } else u = t
        }
        return u
    }
    function iu(n) {
        var i = fi[n] = {
            },
            t,
            r;
        for (n = n.split(/\s+/), t = 0, r = n.length; t < r; t++) i[n[t]] = !0;
        return i
    }
    var r = n.document,
        ru = n.navigator,
        uu = n.location,
        i = function () {
            function c() {
                if (!i.isReady) {
                    try {
                        r.documentElement.doScroll('left')
                    } catch (n) {
                        setTimeout(c, 1);
                        return
                    }
                    i.ready()
                }
            }
            var i = function (n, t) {
                    return new i.fn.init(n, t, l)
                },
                k = n.jQuery,
                d = n.$,
                l,
                g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                a = /\S/,
                v = /^\s+/,
                y = /\s+$/,
                nt = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                tt = /^[\],:{}\s]*$/,
                it = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                rt = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                ut = /(?:^|:|,)(?:\s*\[)+/g,
                ft = /(webkit)[ \/]([\w.]+)/,
                et = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                ot = /(msie) ([\w.]+)/,
                st = /(mozilla)(?:.*? rv:([\w.]+))?/,
                ht = /-([a-z]|[0-9])/gi,
                ct = /^-ms-/,
                lt = function (n, t) {
                    return (t + '').toUpperCase()
                },
                at = ru.userAgent,
                e,
                o,
                u,
                vt = Object.prototype.toString,
                s = Object.prototype.hasOwnProperty,
                h = Array.prototype.push,
                f = Array.prototype.slice,
                p = String.prototype.trim,
                w = Array.prototype.indexOf,
                b = {
                };
            return i.fn = i.prototype = {
                constructor: i,
                init: function (n, u, f) {
                    var o,
                        s,
                        e,
                        h;
                    if (!n) return this;
                    if (n.nodeType) return this.context = this[0] = n,
                        this.length = 1,
                        this;
                    if (n === 'body' && !u && r.body) return this.context = r,
                        this[0] = r.body,
                        this.selector = n,
                        this.length = 1,
                        this;
                    if (typeof n == 'string') {
                        if (o = n.charAt(0) !== '<' || n.charAt(n.length - 1) !== '>' || n.length < 3 ? g.exec(n)  : [
                            null,
                            n,
                            null
                        ], o && (o[1] || !u)) {
                            if (o[1]) return u = u instanceof i ? u[0] : u,
                                h = u ? u.ownerDocument || u : r,
                                e = nt.exec(n),
                                e ? i.isPlainObject(u) ? (n = [
                                    r.createElement(e[1])
                                ], i.fn.attr.call(n, u, !0))  : n = [
                                    h.createElement(e[1])
                                ] : (e = i.buildFragment([o[1]], [
                                    h
                                ]), n = (e.cacheable ? i.clone(e.fragment)  : e.fragment).childNodes),
                                i.merge(this, n);
                            if (s = r.getElementById(o[2]), s && s.parentNode) {
                                if (s.id !== o[2]) return f.find(n);
                                this.length = 1,
                                    this[0] = s
                            }
                            return this.context = r,
                                this.selector = n,
                                this
                        }
                        return !u || u.jquery ? (u || f).find(n)  : this.constructor(u).find(n)
                    }
                    return i.isFunction(n) ? f.ready(n)  : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
                },
                selector: '',
                jquery: '1.7.1',
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return f.call(this, 0)
                },
                get: function (n) {
                    return n == null ? this.toArray()  : n < 0 ? this[this.length + n] : this[n]
                },
                pushStack: function (n, t, r) {
                    var u = this.constructor();
                    return i.isArray(n) ? h.apply(u, n)  : i.merge(u, n),
                        u.prevObject = this,
                        u.context = this.context,
                            t === 'find' ? u.selector = this.selector + (this.selector ? ' ' : '') + r : t && (u.selector = this.selector + '.' + t + '(' + r + ')'),
                        u
                },
                each: function (n, t) {
                    return i.each(this, n, t)
                },
                ready: function (n) {
                    return i.bindReady(),
                        o.add(n),
                        this
                },
                eq: function (n) {
                    return n = + n,
                            n === - 1 ? this.slice(n)  : this.slice(n, n + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq( - 1)
                },
                slice: function () {
                    return this.pushStack(f.apply(this, arguments), 'slice', f.call(arguments).join(','))
                },
                map: function (n) {
                    return this.pushStack(i.map(this, function (t, i) {
                        return n.call(t, i, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: h,
                sort: [
                ].sort,
                splice: [
                ].splice
            },
                i.fn.init.prototype = i.fn,
                i.extend = i.fn.extend = function () {
                    var o,
                        e,
                        u,
                        r,
                        s,
                        h,
                        n = arguments[0] || {
                        },
                        f = 1,
                        l = arguments.length,
                        c = !1;
                    for (typeof n == 'boolean' && (c = n, n = arguments[1] || {
                    }, f = 2), typeof n != 'object' && !i.isFunction(n) && (n = {
                    }), l === f && (n = this, --f); f < l; f++) if ((o = arguments[f]) != null) for (e in o) (u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : [
                    ])  : h = u && i.isPlainObject(u) ? u : {
                    }, n[e] = i.extend(c, h, r))  : r !== t && (n[e] = r));
                    return n
                },
                i.extend({
                    noConflict: function (t) {
                        return n.$ === i && (n.$ = d),
                            t && n.jQuery === i && (n.jQuery = k),
                            i
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (n) {
                        n ? i.readyWait++ : i.ready(!0)
                    },
                    ready: function (n) {
                        if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                            if (!r.body) return setTimeout(i.ready, 1);
                            if (i.isReady = !0, n !== !0 && --i.readyWait > 0) return;
                            o.fireWith(r, [
                                i
                            ]),
                                i.fn.trigger && i(r).trigger('ready').off('ready')
                        }
                    },
                    bindReady: function () {
                        if (!o) {
                            if (o = i.Callbacks('once memory'), r.readyState === 'complete') return setTimeout(i.ready, 1);
                            if (r.addEventListener) r.addEventListener('DOMContentLoaded', u, !1),
                                n.addEventListener('load', i.ready, !1);
                            else if (r.attachEvent) {
                                r.attachEvent('onreadystatechange', u),
                                    n.attachEvent('onload', i.ready);
                                var t = !1;
                                try {
                                    t = n.frameElement == null
                                } catch (f) {
                                }
                                r.documentElement.doScroll && t && c()
                            }
                        }
                    },
                    isFunction: function (n) {
                        return i.type(n) === 'function'
                    },
                    isArray: Array.isArray || function (n) {
                        return i.type(n) === 'array'
                    },
                    isWindow: function (n) {
                        return n && typeof n == 'object' && 'setInterval' in n
                    },
                    isNumeric: function (n) {
                        return !isNaN(parseFloat(n)) && isFinite(n)
                    },
                    type: function (n) {
                        return n == null ? String(n)  : b[vt.call(n)] || 'object'
                    },
                    isPlainObject: function (n) {
                        if (!n || i.type(n) !== 'object' || n.nodeType || i.isWindow(n)) return !1;
                        try {
                            if (n.constructor && !s.call(n, 'constructor') && !s.call(n.constructor.prototype, 'isPrototypeOf')) return !1
                        } catch (u) {
                            return !1
                        }
                        var r;
                        for (r in n);
                        return r === t || s.call(n, r)
                    },
                    isEmptyObject: function (n) {
                        for (var t in n) return !1;
                        return !0
                    },
                    error: function (n) {
                        throw new Error(n);
                    },
                    parseJSON: function (t) {
                        if (typeof t != 'string' || !t) return null;
                        if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
                        if (tt.test(t.replace(it, '@').replace(rt, ']').replace(ut, ''))) return new Function('return ' + t) ();
                        i.error('Invalid JSON: ' + t)
                    },
                    parseXML: function (r) {
                        var u,
                            f;
                        try {
                            n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, 'text/xml'))  : (u = new ActiveXObject('Microsoft.XMLDOM'), u.async = 'false', u.loadXML(r))
                        } catch (e) {
                            u = t
                        }
                        return u && u.documentElement && !u.getElementsByTagName('parsererror').length || i.error('Invalid XML: ' + r),
                            u
                    },
                    noop: function () {
                    },
                    globalEval: function (t) {
                        t && a.test(t) && (n.execScript || function (t) {
                            n.eval.call(n, t)
                        }) (t)
                    },
                    camelCase: function (n) {
                        return n.replace(ct, 'ms-').replace(ht, lt)
                    },
                    nodeName: function (n, t) {
                        return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
                    },
                    each: function (n, r, u) {
                        var f,
                            e = 0,
                            o = n.length,
                            s = o === t || i.isFunction(n);
                        if (u) {
                            if (s) {
                                for (f in n) if (r.apply(n[f], u) === !1) break
                            } else for (; e < o; ) if (r.apply(n[e++], u) === !1) break
                        } else if (s) {
                            for (f in n) if (r.call(n[f], f, n[f]) === !1) break
                        } else for (; e < o; ) if (r.call(n[e], e, n[e++]) === !1) break;
                        return n
                    },
                    trim: p ? function (n) {
                        return n == null ? '' : p.call(n)
                    }
                        : function (n) {
                        return n == null ? '' : (n + '').replace(v, '').replace(y, '')
                    },
                    makeArray: function (n, t) {
                        var u = t || [],
                            r;
                        return n != null && (r = i.type(n), n.length == null || r === 'string' || r === 'function' || r === 'regexp' || i.isWindow(n) ? h.call(u, n)  : i.merge(u, n)),
                            u
                    },
                    inArray: function (n, t, i) {
                        var r;
                        if (t) {
                            if (w) return w.call(t, n, i);
                            for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i)  : i : 0; i < r; i++) if (i in t && t[i] === n) return i
                        }
                        return - 1
                    },
                    merge: function (n, i) {
                        var u = n.length,
                            r = 0,
                            f;
                        if (typeof i.length == 'number') for (f = i.length; r < f; r++) n[u++] = i[r];
                        else while (i[r] !== t) n[u++] = i[r++];
                        return n.length = u,
                            n
                    },
                    grep: function (n, t, i) {
                        var u = [
                            ],
                            f,
                            r,
                            e;
                        for (i = !!i, r = 0, e = n.length; r < e; r++) f = !!t(n[r], r),
                            i !== f && u.push(n[r]);
                        return u
                    },
                    map: function (n, r, u) {
                        var f,
                            h,
                            e = [
                            ],
                            s = 0,
                            o = n.length,
                            c = n instanceof i || o !== t && typeof o == 'number' && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
                        if (c) for (; s < o; s++) f = r(n[s], s, u),
                            f != null && (e[e.length] = f);
                        else for (h in n) f = r(n[h], h, u),
                            f != null && (e[e.length] = f);
                        return e.concat.apply([], e)
                    },
                    guid: 1,
                    proxy: function (n, r) {
                        var e,
                            o,
                            u;
                        return (typeof r == 'string' && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (o = f.call(arguments, 2), u = function () {
                            return n.apply(r, o.concat(f.call(arguments)))
                        }, u.guid = n.guid = n.guid || u.guid || i.guid++, u)
                    },
                    access: function (n, r, u, f, e, o) {
                        var c = n.length,
                            h,
                            s;
                        if (typeof r == 'object') {
                            for (h in r) i.access(n, h, r[h], f, e, u);
                            return n
                        }
                        if (u !== t) {
                            for (f = !o && f && i.isFunction(u), s = 0; s < c; s++) e(n[s], r, f ? u.call(n[s], s, e(n[s], r))  : u, o);
                            return n
                        }
                        return c ? e(n[0], r)  : t
                    },
                    now: function () {
                        return (new Date).getTime()
                    },
                    uaMatch: function (n) {
                        n = n.toLowerCase();
                        var t = ft.exec(n) || et.exec(n) || ot.exec(n) || n.indexOf('compatible') < 0 && st.exec(n) || [];
                        return {
                            browser: t[1] || '',
                            version: t[2] || '0'
                        }
                    },
                    sub: function () {
                        function n(t, i) {
                            return new n.fn.init(t, i)
                        }
                        i.extend(!0, n, this),
                            n.superclass = this,
                            n.fn = n.prototype = this(),
                            n.fn.constructor = n,
                            n.sub = this.sub,
                            n.fn.init = function (r, u) {
                                return u && u instanceof i && !(u instanceof n) && (u = n(u)),
                                    i.fn.init.call(this, r, u, t)
                            },
                            n.fn.init.prototype = n.fn;
                        var t = n(r);
                        return n
                    },
                    browser: {
                    }
                }),
                i.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function (n, t) {
                    b['[object ' + t + ']'] = t.toLowerCase()
                }),
                e = i.uaMatch(at),
                e.browser && (i.browser[e.browser] = !0, i.browser.version = e.version),
                i.browser.webkit && (i.browser.safari = !0),
                a.test(' ') && (v = /^[\s\xA0]+/, y = /[\s\xA0]+$/),
                l = i(r),
                r.addEventListener ? u = function () {
                    r.removeEventListener('DOMContentLoaded', u, !1),
                        i.ready()
                }
                    : r.attachEvent && (u = function () {
                    r.readyState === 'complete' && (r.detachEvent('onreadystatechange', u), i.ready())
                }),
                i
        }(),
        fi = {
        },
        k,
        ei,
        oi,
        ar,
        y,
        g,
        vr,
        a,
        pr,
        ct;
    i.Callbacks = function (n) {
        n = n ? fi[n] || iu(n)  : {
        };
        var r = [
            ],
            f = [
            ],
            u,
            s,
            c,
            h,
            e,
            l = function (t) {
                for (var u, e, f = 0, s = t.length; f < s; f++) u = t[f],
                    e = i.type(u),
                        e === 'array' ? l(u)  : e === 'function' && (!n.unique || !o.has(u)) && r.push(u)
            },
            a = function (t, i) {
                for (i = i || [], u = !n.memory || [t,
                    i], s = !0, e = c || 0, c = 0, h = r.length; r && e < h; e++) if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                    u = !0;
                    break
                }
                s = !1,
                    r && (n.once ? u === !0 ? o.disable()  : r = [
                ] : f && f.length && (u = f.shift(), o.fireWith(u[0], u[1])))
            },
            o = {
                add: function () {
                    if (r) {
                        var n = r.length;
                        l(arguments),
                            s ? h = r.length : u && u !== !0 && (c = n, a(u[0], u[1]))
                    }
                    return this
                },
                remove: function () {
                    var t;
                    if (r) for (var u = arguments, i = 0, f = u.length; i < f; i++) for (t = 0; t < r.length; t++) if (u[i] === r[t] && (s && t <= h && (h--, t <= e && e--), r.splice(t--, 1), n.unique)) break;
                    return this
                },
                has: function (n) {
                    if (r) for (var t = 0, i = r.length; t < i; t++) if (n === r[t]) return !0;
                    return !1
                },
                empty: function () {
                    return r = [
                    ],
                        this
                },
                disable: function () {
                    return r = f = u = t,
                        this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return f = t,
                        u && u !== !0 || o.disable(),
                        this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (t, i) {
                    return f && (s ? n.once || f.push([t,
                        i])  : (!n.once || !u) && a(t, i)),
                        this
                },
                fire: function () {
                    return o.fireWith(this, arguments),
                        this
                },
                fired: function () {
                    return !!u
                }
            };
        return o
    },
        k = [
        ].slice,
        i.extend({
            Deferred: function (n) {
                var u = i.Callbacks('once memory'),
                    f = i.Callbacks('once memory'),
                    e = i.Callbacks('memory'),
                    s = 'pending',
                    h = {
                        resolve: u,
                        reject: f,
                        notify: e
                    },
                    o = {
                        done: u.add,
                        fail: f.add,
                        progress: e.add,
                        state: function () {
                            return s
                        },
                        isResolved: u.fired,
                        isRejected: f.fired,
                        then: function (n, i, r) {
                            return t.done(n).fail(i).progress(r),
                                this
                        },
                        always: function () {
                            return t.done.apply(t, arguments).fail.apply(t, arguments),
                                this
                        },
                        pipe: function (n, r, u) {
                            return i.Deferred(function (f) {
                                i.each({
                                    done: [
                                        n,
                                        'resolve'
                                    ],
                                    fail: [
                                        r,
                                        'reject'
                                    ],
                                    progress: [
                                        u,
                                        'notify'
                                    ]
                                }, function (n, r) {
                                    var e = r[0],
                                        o = r[1],
                                        u;
                                    i.isFunction(e) ? t[n](function () {
                                        u = e.apply(this, arguments),
                                                u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify)  : f[o + 'With'](this === t ? f : this, [
                                            u
                                        ])
                                    })  : t[n](f[o])
                                })
                            }).promise()
                        },
                        promise: function (n) {
                            if (n == null) n = o;
                            else for (var t in o) n[t] = o[t];
                            return n
                        }
                    },
                    t = o.promise({
                    }),
                    r;
                for (r in h) t[r] = h[r].fire,
                    t[r + 'With'] = h[r].fireWith;
                return t.done(function () {
                    s = 'resolved'
                }, f.disable, e.lock).fail(function () {
                    s = 'rejected'
                }, u.disable, e.lock),
                    n && n.call(t, t),
                    t
            },
            when: function (n) {
                function h(n) {
                    return function (i) {
                        o[n] = arguments.length > 1 ? k.call(arguments, 0)  : i,
                            t.notifyWith(s, o)
                    }
                }
                function c(n) {
                    return function (i) {
                        r[n] = arguments.length > 1 ? k.call(arguments, 0)  : i,
                            --e || t.resolveWith(t, r)
                    }
                }
                var r = k.call(arguments, 0),
                    u = 0,
                    f = r.length,
                    o = Array(f),
                    e = f,
                    l = f,
                    t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred(),
                    s = t.promise();
                if (f > 1) {
                    for (; u < f; u++) r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u))  : --e;
                    e || t.resolveWith(t, r)
                } else t !== n && t.resolveWith(t, f ? [
                    n
                ] : [
                ]);
                return s
            }
        }),
        i.support = function () {
            var u,
                y,
                o,
                l,
                a,
                f,
                s,
                e,
                c,
                v,
                p,
                h,
                t = r.createElement('div'),
                w = r.documentElement;
            if (t.setAttribute('className', 't'), t.innerHTML = '   <link/><table></table><a href=\'/a\' style=\'top:1px;float:left;opacity:.55;\'>a</a><input type=\'checkbox\'/>', y = t.getElementsByTagName('*'), o = t.getElementsByTagName('a') [0], !y || !y.length || !o) return {
            };
            l = r.createElement('select'),
                a = l.appendChild(r.createElement('option')),
                f = t.getElementsByTagName('input') [0],
                u = {
                    leadingWhitespace: t.firstChild.nodeType === 3,
                    tbody: !t.getElementsByTagName('tbody').length,
                    htmlSerialize: !!t.getElementsByTagName('link').length,
                    style: /top/.test(o.getAttribute('style')),
                    hrefNormalized: o.getAttribute('href') === '/a',
                    opacity: /^0.55/.test(o.style.opacity),
                    cssFloat: !!o.style.cssFloat,
                    checkOn: f.value === 'on',
                    optSelected: a.selected,
                    getSetAttribute: t.className !== 't',
                    enctype: !!r.createElement('form').enctype,
                    html5Clone: r.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>',
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0
                },
                f.checked = !0,
                u.noCloneChecked = f.cloneNode(!0).checked,
                l.disabled = !0,
                u.optDisabled = !a.disabled;
            try {
                delete t.test
            } catch (b) {
                u.deleteExpando = !1
            }
            if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent('onclick', function () {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).fireEvent('onclick')), f = r.createElement('input'), f.value = 't', f.setAttribute('type', 'radio'), u.radioValue = f.value === 't', f.setAttribute('checked', 'checked'), t.appendChild(f), e = r.createDocumentFragment(), e.appendChild(t.lastChild), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, e.removeChild(f), e.appendChild(t), t.innerHTML = '', n.getComputedStyle && (s = r.createElement('div'), s.style.width = '0', s.style.marginRight = '0', t.style.width = '2px', t.appendChild(s), u.reliableMarginRight = (parseInt((n.getComputedStyle(s, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), t.attachEvent) for (p in {
                submit: 1,
                change: 1,
                focusin: 1
            }) v = 'on' + p,
                h = v in t,
                h || (t.setAttribute(v, 'return;'), h = typeof t[v] == 'function'),
                u[p + 'Bubbles'] = h;
            return e.removeChild(t),
                e = l = a = s = t = f = null,
                i(function () {
                    var f,
                        e,
                        n,
                        p,
                        o,
                        l,
                        a,
                        v,
                        y,
                        w,
                        s = r.getElementsByTagName('body') [0];
                    s && (l = 1, a = 'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;', v = 'visibility:hidden;border:0;', y = 'style=\'' + a + 'border:5px solid #000;padding:0;\'', w = '<div ' + y + '><div></div></div><table ' + y + ' cellpadding=\'0\' cellspacing=\'0\'><tr><td></td></tr></table>', f = r.createElement('div'), f.style.cssText = v + 'width:0;height:0;position:static;top:0;margin-top:' + l + 'px', s.insertBefore(f, s.firstChild), t = r.createElement('div'), f.appendChild(t), t.innerHTML = '<table><tr><td style=\'padding:0;border:0;display:none\'></td><td>t</td></tr></table>', c = t.getElementsByTagName('td'), h = c[0].offsetHeight === 0, c[0].style.display = '', c[1].style.display = 'none', u.reliableHiddenOffsets = h && c[0].offsetHeight === 0, t.innerHTML = '', t.style.width = t.style.paddingLeft = '1px', i.boxModel = u.boxModel = t.offsetWidth === 2, typeof t.style.zoom != 'undefined' && (t.style.display = 'inline', t.style.zoom = 1, u.inlineBlockNeedsLayout = t.offsetWidth === 2, t.style.display = '', t.innerHTML = '<div style=\'width:4px;\'></div>', u.shrinkWrapBlocks = t.offsetWidth !== 2), t.style.cssText = a + v, t.innerHTML = w, e = t.firstChild, n = e.firstChild, p = e.nextSibling.firstChild.firstChild, o = {
                        doesNotAddBorder: n.offsetTop !== 5,
                        doesAddBorderForTableAndCells: p.offsetTop === 5
                    }, n.style.position = 'fixed', n.style.top = '20px', o.fixedPosition = n.offsetTop === 20 || n.offsetTop === 15, n.style.position = n.style.top = '', e.style.overflow = 'hidden', e.style.position = 'relative', o.subtractsBorderForOverflowNotVisible = n.offsetTop === - 5, o.doesNotIncludeMarginInBodyOffset = s.offsetTop !== l, s.removeChild(f), t = f = null, i.extend(u, o))
                }),
                u
        }(),
        ei = /^(?:\{.*\}|\[.*\])$/,
        oi = /([A-Z])/g,
        i.extend({
            cache: {
            },
            uuid: 0,
            expando: 'jQuery' + (i.fn.jquery + Math.random()).replace(/\D/g, ''),
            noData: {
                embed: !0,
                object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
                applet: !0
            },
            hasData: function (n) {
                return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
                    !!n && !ut(n)
            },
            data: function (n, r, u, f) {
                if (!!i.acceptData(n)) {
                    var a,
                        o,
                        h,
                        c = i.expando,
                        v = typeof r == 'string',
                        l = n.nodeType,
                        s = l ? i.cache : n,
                        e = l ? n[c] : n[c] && c,
                        y = r === 'events';
                    return (!e || !s[e] || !y && !f && !s[e].data) && v && u === t ? void 0 : (e || (l ? n[c] = e = ++i.uuid : e = c), s[e] || (s[e] = {
                    }, l || (s[e].toJSON = i.noop)), (typeof r == 'object' || typeof r == 'function') && (f ? s[e] = i.extend(s[e], r)  : s[e].data = i.extend(s[e].data, r)), a = o = s[e], f || (o.data || (o.data = {
                    }), o = o.data), u !== t && (o[i.camelCase(r)] = u), y && !o[r]) ? a.events : (v ? (h = o[r], h == null && (h = o[i.camelCase(r)]))  : h = o, h)
                }
            },
            removeData: function (n, t, r) {
                if (!!i.acceptData(n)) {
                    var e,
                        s,
                        c,
                        o = i.expando,
                        h = n.nodeType,
                        u = h ? i.cache : n,
                        f = h ? n[o] : o;
                    if (!u[f]) return;
                    if (t && (e = r ? u[f] : u[f].data, e)) {
                        for (i.isArray(t) || ((t in e) ? t = [
                            t
                        ] : (t = i.camelCase(t), t = (t in e) ? [
                            t
                        ] : t.split(' '))), s = 0, c = t.length; s < c; s++) delete e[t[s]];
                        if (!(r ? ut : i.isEmptyObject) (e)) return
                    }
                    if (!r && (delete u[f].data, !ut(u[f]))) return;
                    i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null,
                        h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o)  : n[o] = null)
                }
            },
            _data: function (n, t, r) {
                return i.data(n, t, r, !0)
            },
            acceptData: function (n) {
                if (n.nodeName) {
                    var t = i.noData[n.nodeName.toLowerCase()];
                    if (t) return t !== !0 && n.getAttribute('classid') === t
                }
                return !0
            }
        }),
        i.fn.extend({
            data: function (n, r) {
                var u,
                    s,
                    e,
                    f = null,
                    o,
                    h;
                if (typeof n == 'undefined') {
                    if (this.length && (f = i.data(this[0]), this[0].nodeType === 1 && !i._data(this[0], 'parsedAttrs'))) {
                        for (s = this[0].attributes, o = 0, h = s.length; o < h; o++) e = s[o].name,
                            e.indexOf('data-') === 0 && (e = i.camelCase(e.substring(5)), ui(this[0], e, f[e]));
                        i._data(this[0], 'parsedAttrs', !0)
                    }
                    return f
                }
                return typeof n == 'object' ? this.each(function () {
                    i.data(this, n)
                })  : (u = n.split('.'), u[1] = u[1] ? '.' + u[1] : '', r === t) ? (f = this.triggerHandler('getData' + u[1] + '!', [
                    u[0]
                ]), f === t && this.length && (f = i.data(this[0], n), f = ui(this[0], n, f)), f === t && u[1] ? this.data(u[0])  : f)  : this.each(function () {
                    var t = i(this),
                        f = [
                            u[0],
                            r
                        ];
                    t.triggerHandler('setData' + u[1] + '!', f),
                        i.data(this, n, r),
                        t.triggerHandler('changeData' + u[1] + '!', f)
                })
            },
            removeData: function (n) {
                return this.each(function () {
                    i.removeData(this, n)
                })
            }
        }),
        i.extend({
            _mark: function (n, t) {
                n && (t = (t || 'fx') + 'mark', i._data(n, t, (i._data(n, t) || 0) + 1))
            },
            _unmark: function (n, t, r) {
                if (n !== !0 && (r = t, t = n, n = !1), t) {
                    r = r || 'fx';
                    var u = r + 'mark',
                        f = n ? 0 : (i._data(t, u) || 1) - 1;
                    f ? i._data(t, u, f)  : (i.removeData(t, u, !0), ri(t, r, 'mark'))
                }
            },
            queue: function (n, t, r) {
                var u;
                if (n) return t = (t || 'fx') + 'queue',
                    u = i._data(n, t),
                    r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r))  : u.push(r)),
                    u || []
            },
            dequeue: function (n, t) {
                t = t || 'fx';
                var r = i.queue(n, t),
                    u = r.shift(),
                    f = {
                    };
                u === 'inprogress' && (u = r.shift()),
                    u && (t === 'fx' && r.unshift('inprogress'), i._data(n, t + '.run', f), u.call(n, function () {
                    i.dequeue(n, t)
                }, f)),
                    r.length || (i.removeData(n, t + 'queue ' + t + '.run', !0), ri(n, t, 'queue'))
            }
        }),
        i.fn.extend({
            queue: function (n, r) {
                return (typeof n != 'string' && (r = n, n = 'fx'), r === t) ? i.queue(this[0], n)  : this.each(function () {
                    var t = i.queue(this, n, r);
                    n === 'fx' && t[0] !== 'inprogress' && i.dequeue(this, n)
                })
            },
            dequeue: function (n) {
                return this.each(function () {
                    i.dequeue(this, n)
                })
            },
            delay: function (n, t) {
                return n = i.fx ? i.fx.speeds[n] || n : n,
                    t = t || 'fx',
                    this.queue(t, function (t, i) {
                        var r = setTimeout(t, n);
                        i.stop = function () {
                            clearTimeout(r)
                        }
                    })
            },
            clearQueue: function (n) {
                return this.queue(n || 'fx', [
                ])
            },
            promise: function (n, r) {
                function e() {
                    --s || o.resolveWith(u, [
                        u
                    ])
                }
                typeof n != 'string' && (r = n, n = t),
                    n = n || 'fx';
                for (var o = i.Deferred(), u = this, f = u.length, s = 1, h = n + 'defer', l = n + 'queue', a = n + 'mark', c; f--; ) (c = i.data(u[f], h, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], h, i.Callbacks('once memory'), !0)) && (s++, c.add(e));
                return e(),
                    o.promise()
            }
        });
    var si = /[\n\t\r]/g,
        d = /\s+/,
        fu = /\r/g,
        eu = /^(?:button|input)$/i,
        ou = /^(?:button|input|object|select|textarea)$/i,
        su = /^a(?:rea)?$/i,
        hi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ci = i.support.getSetAttribute,
        e,
        li,
        ai;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, n, t, !0, i.attr)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, n, t, !0, i.prop)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n,
                this.each(function () {
                    try {
                        this[n] = t,
                            delete this[n]
                    } catch (i) {
                    }
                })
        },
        addClass: function (n) {
            var r,
                f,
                o,
                t,
                e,
                u,
                s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == 'string') for (r = n.split(d), f = 0, o = this.length; f < o; f++) if (t = this[f], t.nodeType === 1) if (t.className || r.length !== 1) {
                for (e = ' ' + t.className + ' ', u = 0, s = r.length; u < s; u++) ~e.indexOf(' ' + r[u] + ' ') || (e += r[u] + ' ');
                t.className = i.trim(e)
            } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var o,
                u,
                s,
                r,
                f,
                e,
                h;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == 'string' || n === t) for (o = (n || '').split(d), u = 0, s = this.length; u < s; u++) if (r = this[u], r.nodeType === 1 && r.className) if (n) {
                for (f = (' ' + r.className + ' ').replace(si, ' '), e = 0, h = o.length; e < h; e++) f = f.replace(' ' + o[e] + ' ', ' ');
                r.className = i.trim(f)
            } else r.className = '';
            return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == 'boolean';
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            })  : this.each(function () {
                if (r === 'string') for (var f, s = 0, o = i(this), e = t, h = n.split(d); f = h[s++]; ) e = u ? e : !o.hasClass(f),
                    o[e ? 'addClass' : 'removeClass'](f);
                else (r === 'undefined' || r === 'boolean') && (this.className && i._data(this, '__className__', this.className), this.className = this.className || n === !1 ? '' : i._data(this, '__className__') || '')
            })
        },
        hasClass: function (n) {
            for (var i = ' ' + n + ' ', t = 0, r = this.length; t < r; t++) if (this[t].nodeType === 1 && (' ' + this[t].className + ' ').replace(si, ' ').indexOf(i) > - 1) return !0;
            return !1
        },
        val: function (n) {
            var r,
                u,
                e,
                f = this[0];
            return !arguments.length ? f ? (r = i.valHooks[f.nodeName.toLowerCase()] || i.valHooks[f.type], r && 'get' in r && (u = r.get(f, 'value')) !== t) ? u : (u = f.value, typeof u == 'string' ? u.replace(fu, '')  : u == null ? '' : u)  : void 0 : (e = i.isFunction(n), this.each(function (u) {
                var o = i(this),
                    f;
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val())  : n, f == null ? f = '' : typeof f == 'number' ? f += '' : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? '' : n + ''
                })), r = i.valHooks[this.nodeName.toLowerCase()] || i.valHooks[this.type], r && 'set' in r && r.set(this, f, 'value') !== t || (this.value = f))
            }))
        }
    }),
        i.extend({
            valHooks: {
                option: {
                    get: function (n) {
                        var t = n.attributes.value;
                        return !t || t.specified ? n.value : n.text
                    }
                },
                select: {
                    get: function (n) {
                        var o,
                            r,
                            h,
                            t,
                            u = n.selectedIndex,
                            s = [
                            ],
                            f = n.options,
                            e = n.type === 'select-one';
                        if (u < 0) return null;
                        for (r = e ? u : 0, h = e ? u + 1 : f.length; r < h; r++) if (t = f[r], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute('disabled') === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, 'optgroup'))) {
                            if (o = i(t).val(), e) return o;
                            s.push(o)
                        }
                        return e && !s.length && f.length ? i(f[u]).val()  : s
                    },
                    set: function (n, t) {
                        var r = i.makeArray(t);
                        return i(n).find('option').each(function () {
                            this.selected = i.inArray(i(this).val(), r) >= 0
                        }),
                            r.length || (n.selectedIndex = - 1),
                            r
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function (n, r, u, f) {
                var o,
                    s,
                    h,
                    c = n.nodeType;
                if (!!n && c !== 3 && c !== 8 && c !== 2) {
                    if (f && r in i.attrFn) return i(n) [r](u);
                    if (typeof n.getAttribute == 'undefined') return i.prop(n, r, u);
                    if (h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), s = i.attrHooks[r] || (hi.test(r) ? li : e)), u !== t) {
                        if (u === null) {
                            i.removeAttr(n, r);
                            return
                        }
                        return s && 'set' in s && h && (o = s.set(n, u, r)) !== t ? o : (n.setAttribute(r, '' + u), u)
                    }
                    return s && 'get' in s && h && (o = s.get(n, r)) !== null ? o : (o = n.getAttribute(r), o === null ? t : o)
                }
            },
            removeAttr: function (n, t) {
                var u,
                    f,
                    r,
                    o,
                    e = 0;
                if (t && n.nodeType === 1) for (f = t.toLowerCase().split(d), o = f.length; e < o; e++) r = f[e],
                    r && (u = i.propFix[r] || r, i.attr(n, r, ''), n.removeAttribute(ci ? r : u), hi.test(r) && u in n && (n[u] = !1))
            },
            attrHooks: {
                type: {
                    set: function (n, t) {
                        if (eu.test(n.nodeName) && n.parentNode) i.error('type property can\'t be changed');
                        else if (!i.support.radioValue && t === 'radio' && i.nodeName(n, 'input')) {
                            var r = n.value;
                            return n.setAttribute('type', t),
                                r && (n.value = r),
                                t
                        }
                    }
                },
                value: {
                    get: function (n, t) {
                        return e && i.nodeName(n, 'button') ? e.get(n, t)  : t in n ? n.value : null
                    },
                    set: function (n, t, r) {
                        if (e && i.nodeName(n, 'button')) return e.set(n, t, r);
                        n.value = t
                    }
                }
            },
            propFix: {
                tabindex: 'tabIndex',
                readonly: 'readOnly',
                'for': 'htmlFor',
                'class': 'className',
                maxlength: 'maxLength',
                cellspacing: 'cellSpacing',
                cellpadding: 'cellPadding',
                rowspan: 'rowSpan',
                colspan: 'colSpan',
                usemap: 'useMap',
                frameborder: 'frameBorder',
                contenteditable: 'contentEditable'
            },
            prop: function (n, r, u) {
                var e,
                    f,
                    s,
                    o = n.nodeType;
                if (!!n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n),
                    s && (r = i.propFix[r] || r, f = i.propHooks[r]),
                        u !== t ? f && 'set' in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && 'get' in f && (e = f.get(n, r)) !== null ? e : n[r]
            },
            propHooks: {
                tabIndex: {
                    get: function (n) {
                        var i = n.getAttributeNode('tabindex');
                        return i && i.specified ? parseInt(i.value, 10)  : ou.test(n.nodeName) || su.test(n.nodeName) && n.href ? 0 : t
                    }
                }
            }
        }),
        i.attrHooks.tabindex = i.propHooks.tabIndex,
        li = {
            get: function (n, r) {
                var u,
                    f = i.prop(n, r);
                return f === !0 || typeof f != 'boolean' && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase()  : t
            },
            set: function (n, t, r) {
                var u;
                return t === !1 ? i.removeAttr(n, r)  : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())),
                    r
            }
        },
        ci || (ai = {
        name: !0,
        id: !0
    }, e = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i),
                    r && (ai[i] ? r.nodeValue !== '' : r.specified) ? r.nodeValue : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)),
                u.nodeValue = t + ''
        }
    }, i.attrHooks.tabindex.set = e.set, i.each(['width',
        'height'], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === '') return n.setAttribute(t, 'auto'),
                    i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: e.get,
        set: function (n, t, i) {
            t === '' && (t = 'false'),
                e.set(n, t, i)
        }
    }),
        i.support.hrefNormalized || i.each(['href',
        'src',
        'width',
        'height'], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    }),
        i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = '' + t
        }
    }),
        i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
        }
    })),
        i.support.enctype || (i.propFix.enctype = 'encoding'),
        i.support.checkOn || i.each(['radio',
        'checkbox'], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute('value') === null ? 'on' : n.value
            }
        }
    }),
        i.each(['radio',
            'checkbox'], function () {
            i.valHooks[this] = i.extend(i.valHooks[this], {
                set: function (n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
                }
            })
        });
    var ft = /^(?:textarea|input|select)$/i,
        vi = /^([^\.]*)?(?:\.(.+))?$/,
        hu = /\bhover(\.\S+)?\b/,
        cu = /^key/,
        lu = /^(?:mouse|contextmenu)|click/,
        yi = /^(?:focusinfocus|focusoutblur)$/,
        au = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        vu = function (n) {
            var t = au.exec(n);
            return t && (t[1] = (t[1] || '').toLowerCase(), t[3] = t[3] && new RegExp('(?:^|\\libs)' + t[3] + '(?:\\libs|$)')),
                t
        },
        yu = function (n, t) {
            var i = n.attributes || {
            };
            return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {
            }).value === t[2]) && (!t[3] || t[3].test((i['class'] || {
            }).value))
        },
        pi = function (n) {
            return i.event.special.hover ? n : n.replace(hu, 'mouseenter$1 mouseleave$1')
        };
    i.event = {
        add: function (n, r, u, f, e) {
            var a,
                s,
                v,
                y,
                p,
                o,
                w,
                l,
                b,
                c,
                h;
            if (!(n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(a = i._data(n)))) {
                for (u.handler && (b = u, u = b.handler), u.guid || (u.guid = i.guid++), v = a.events, v || (a.events = v = {
                }), s = a.handle, s || (a.handle = s = function (n) {
                    return typeof i != 'undefined' && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments)  : t
                }, s.elem = n), r = i.trim(pi(r)).split(' '), y = 0; y < r.length; y++) p = vi.exec(r[y]) || [],
                    o = p[1],
                    w = (p[2] || '').split('.').sort(),
                    h = i.event.special[o] || {
                    },
                    o = (e ? h.delegateType : h.bindType) || o,
                    h = i.event.special[o] || {
                    },
                    l = i.extend({
                        type: o,
                        origType: p[1],
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        quick: vu(e),
                        namespace: w.join('.')
                    }, b),
                    c = v[o],
                    c || (c = v[o] = [
                ], c.delegateCount = 0, h.setup && h.setup.call(n, f, w, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1)  : n.attachEvent && n.attachEvent('on' + o, s))),
                    h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, l)  : c.push(l),
                    i.event.global[o] = !0;
                n = null
            }
        },
        global: {
        },
        remove: function (n, t, r, u, f) {
            var y = i.hasData(n) && i._data(n),
                l,
                p,
                e,
                b,
                h,
                k,
                a,
                v,
                c,
                w,
                o,
                s;
            if (!!y && !!(v = y.events)) {
                for (t = i.trim(pi(t || '')).split(' '), l = 0; l < t.length; l++) {
                    if (p = vi.exec(t[l]) || [], e = b = p[1], h = p[2], !e) {
                        for (e in v) i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {
                    }, e = (u ? c.delegateType : c.bindType) || e, o = v[e] || [], k = o.length, h = h ? new RegExp('(^|\\.)' + h.split('.').sort().join('\\.(?:.*\\.)?') + '(\\.|$)')  : null, a = 0; a < o.length; a++) s = o[a],
                        (f || b === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === '**' && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                    o.length === 0 && k !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle), delete v[e])
                }
                i.isEmptyObject(v) && (w = y.handle, w && (w.elem = null), i.removeData(n, [
                    'events',
                    'handle'
                ], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (r, u, f, e) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var o = r.type || r,
                    p = [
                    ],
                    w,
                    k,
                    c,
                    s,
                    h,
                    a,
                    l,
                    v,
                    y,
                    b;
                if (yi.test(o + i.event.triggered)) return;
                if (o.indexOf('!') >= 0 && (o = o.slice(0, - 1), k = !0), o.indexOf('.') >= 0 && (p = o.split('.'), o = p.shift(), p.sort()), (!f || i.event.customEvent[o]) && !i.event.global[o]) return;
                if (r = typeof r == 'object' ? r[i.expando] ? r : new i.Event(o, r)  : new i.Event(o), r.type = o, r.isTrigger = !0, r.exclusive = k, r.namespace = p.join('.'), r.namespace_re = r.namespace ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.)?') + '(\\.|$)')  : null, a = o.indexOf(':') < 0 ? 'on' + o : '', !f) {
                    w = i.cache;
                    for (c in w) w[c].events && w[c].events[o] && i.event.trigger(r, u, w[c].handle.elem, !0);
                    return
                }
                if (r.result = t, r.target || (r.target = f), u = u != null ? i.makeArray(u)  : [
                ], u.unshift(r), l = i.event.special[o] || {
                }, l.trigger && l.trigger.apply(f, u) === !1) return;
                if (y = [
                    [f,
                            l.bindType || o]
                ], !e && !l.noBubble && !i.isWindow(f)) {
                    for (b = l.delegateType || o, s = yi.test(b + o) ? f : f.parentNode, h = null; s; s = s.parentNode) y.push([s,
                        b]),
                        h = s;
                    h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n,
                        b])
                }
                for (c = 0; c < y.length && !r.isPropagationStopped(); c++) s = y[c][0],
                    r.type = y[c][1],
                    v = (i._data(s, 'events') || {
                    }) [r.type] && i._data(s, 'handle'),
                    v && v.apply(s, u),
                    v = a && s[a],
                    v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                return r.type = o,
                    e || r.isDefaultPrevented() || l._default && l._default.apply(f.ownerDocument, u) !== !1 || o === 'click' && i.nodeName(f, 'a') || !i.acceptData(f) || !a || !f[o] || (o === 'focus' || o === 'blur') && r.target.offsetWidth === 0 || i.isWindow(f) || (h = f[a], h && (f[a] = null), i.event.triggered = o, f[o](), i.event.triggered = t, h && (f[a] = h)),
                    r.result
            }
        },
        dispatch: function (r) {
            r = i.event.fix(r || n.event);
            var h = (i._data(this, 'events') || {
                }) [r.type] || [],
                c = h.delegateCount,
                b = [
                ].slice.call(arguments, 0),
                k = !r.exclusive && !r.namespace,
                l = [
                ],
                f,
                a,
                e,
                v,
                y,
                p,
                o,
                w,
                u,
                s;
            if (b[0] = r, r.delegateTarget = this, c && !r.target.disabled && (!r.button || r.type !== 'click')) for (v = i(this), v.context = this.ownerDocument || this, e = r.target; e != this; e = e.parentNode || this) {
                for (p = {
                }, w = [
                ], v[0] = e, f = 0; f < c; f++) u = h[f],
                    s = u.selector,
                    p[s] === t && (p[s] = u.quick ? yu(e, u.quick)  : v.is(s)),
                    p[s] && w.push(u);
                w.length && l.push({
                    elem: e,
                    matches: w
                })
            }
            for (h.length > c && l.push({
                elem: this,
                matches: h.slice(c)
            }), f = 0; f < l.length && !r.isPropagationStopped(); f++) for (o = l[f], r.currentTarget = o.elem, a = 0; a < o.matches.length && !r.isImmediatePropagationStopped(); a++) u = o.matches[a],
                (k || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, y = ((i.event.special[u.origType] || {
            }).handle || u.handler).apply(o.elem, b), y !== t && (r.result = y, y === !1 && (r.preventDefault(), r.stopPropagation())));
            return r.result
        },
        props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {
        },
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                    n
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (n, i) {
                var o,
                    u,
                    f,
                    e = i.button,
                    s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)),
                    !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                    !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0),
                    n
            }
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var e,
                o,
                u = n,
                f = i.event.fixHooks[n.type] || {
                },
                s = f.props ? this.props.concat(f.props)  : this.props;
            for (n = i.Event(u), e = s.length; e; ) o = s[--e],
                n[o] = u[o];
            return n.target || (n.target = u.srcElement || r),
                n.target.nodeType === 3 && (n.target = n.target.parentNode),
                n.metaKey === t && (n.metaKey = n.ctrlKey),
                f.filter ? f.filter(n, u)  : n
        },
        special: {
            ready: {
                setup: i.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: 'focusin'
            },
            blur: {
                delegateType: 'focusout'
            },
            beforeunload: {
                setup: function (n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function (n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {
                }
            });
            u ? i.event.trigger(f, null, t)  : i.event.dispatch.call(t, f),
                f.isDefaultPrevented() && r.preventDefault()
        }
    },
        i.event.handle = i.event.dispatch,
        i.removeEvent = r.removeEventListener ? function (n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        }
            : function (n, t, i) {
            n.detachEvent && n.detachEvent('on' + t, i)
        },
        i.Event = function (n, t) {
            if (!(this instanceof i.Event)) return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? b : c)  : this.type = n,
                t && i.extend(this, t),
                this.timeStamp = n && n.timeStamp || i.now(),
                this[i.expando] = !0
        },
        i.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = b;
                var n = this.originalEvent;
                n && (n.preventDefault ? n.preventDefault()  : n.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = b;
                var n = this.originalEvent;
                n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = b,
                    this.stopPropagation()
            },
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c
        },
        i.each({
            mouseenter: 'mouseover',
            mouseleave: 'mouseout'
        }, function (n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function (n) {
                    var f = this,
                        r = n.relatedTarget,
                        u = n.handleObj,
                        o = u.selector,
                        e;
                    return r && (r === f || i.contains(f, r)) || (n.type = u.origType, e = u.handler.apply(this, arguments), n.type = t),
                        e
                }
            }
        }),
        i.support.submitBubbles || (i.event.special.submit = {
        setup: function () {
            if (i.nodeName(this, 'form')) return !1;
            i.event.add(this, 'click._submit keypress._submit', function (n) {
                var u = n.target,
                    r = i.nodeName(u, 'input') || i.nodeName(u, 'button') ? u.form : t;
                r && !r._submit_attached && (i.event.add(r, 'submit._submit', function (n) {
                    this.parentNode && !n.isTrigger && i.event.simulate('submit', this.parentNode, n, !0)
                }), r._submit_attached = !0)
            })
        },
        teardown: function () {
            if (i.nodeName(this, 'form')) return !1;
            i.event.remove(this, '._submit')
        }
    }),
        i.support.changeBubbles || (i.event.special.change = {
        setup: function () {
            if (ft.test(this.nodeName)) return (this.type === 'checkbox' || this.type === 'radio') && (i.event.add(this, 'propertychange._change', function (n) {
                n.originalEvent.propertyName === 'checked' && (this._just_changed = !0)
            }), i.event.add(this, 'click._change', function (n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1, i.event.simulate('change', this, n, !0))
            })),
                !1;
            i.event.add(this, 'beforeactivate._change', function (n) {
                var t = n.target;
                ft.test(t.nodeName) && !t._change_attached && (i.event.add(t, 'change._change', function (n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate('change', this.parentNode, n, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function (n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== 'radio' && t.type !== 'checkbox') return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return i.event.remove(this, '._change'),
                ft.test(this.nodeName)
        }
    }),
        i.support.focusinBubbles || i.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (n, t) {
        var u = 0,
            f = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function () {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function () {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    }),
        i.fn.extend({
            on: function (n, r, u, f, e) {
                var o,
                    s;
                if (typeof n == 'object') {
                    typeof r != 'string' && (u = r, r = t);
                    for (s in n) this.on(s, r, u, n[s], e);
                    return this
                }
                if (u == null && f == null ? (f = r, u = r = t)  : f == null && (typeof r == 'string' ? (f = u, u = t)  : (f = u, u = r, r = t)), f === !1) f = c;
                else if (!f) return this;
                return e === 1 && (o = f, f = function (n) {
                    return i().off(n),
                        o.apply(this, arguments)
                }, f.guid = o.guid || (o.guid = i.guid++)),
                    this.each(function () {
                        i.event.add(this, n, f, u, r)
                    })
            },
            one: function (n, t, i, r) {
                return this.on.call(this, n, t, i, r, 1)
            },
            off: function (n, r, u) {
                var f,
                    e;
                if (n && n.preventDefault && n.handleObj) return f = n.handleObj,
                    i(n.delegateTarget).off(f.namespace ? f.type + '.' + f.namespace : f.type, f.selector, f.handler),
                    this;
                if (typeof n == 'object') {
                    for (e in n) this.off(e, r, n[e]);
                    return this
                }
                return (r === !1 || typeof r == 'function') && (u = r, r = t),
                    u === !1 && (u = c),
                    this.each(function () {
                        i.event.remove(this, n, u, r)
                    })
            },
            bind: function (n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function (n, t) {
                return this.off(n, null, t)
            },
            live: function (n, t, r) {
                i(this.context).on(n, this.selector, t, r);
                return this
            },
            die: function (n, t) {
                return i(this.context).off(n, this.selector || '**', t),
                    this
            },
            delegate: function (n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function (n, t, i) {
                return arguments.length == 1 ? this.off(n, '**')  : this.off(t, n, i)
            },
            trigger: function (n, t) {
                return this.each(function () {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function (n, t) {
                if (this[0]) return i.event.trigger(n, t, this[0], !0)
            },
            toggle: function (n) {
                var t = arguments,
                    u = n.guid || i.guid++,
                    r = 0,
                    f = function (u) {
                        var f = (i._data(this, 'lastToggle' + n.guid) || 0) % r;
                        return i._data(this, 'lastToggle' + n.guid, f + 1),
                            u.preventDefault(),
                            t[f].apply(this, arguments) || !1
                    };
                for (f.guid = u; r < t.length; ) t[r++].guid = u;
                return this.click(f)
            },
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        }),
        i.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (n, t) {
            i.fn[t] = function (n, i) {
                return i == null && (i = n, n = null),
                        arguments.length > 0 ? this.on(t, null, n, i)  : this.trigger(t)
            },
                i.attrFn && (i.attrFn[t] = !0),
                cu.test(t) && (i.event.fixHooks[t] = i.event.keyHooks),
                lu.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
        }),
        function () {
            function b(t, i, r, u, f, o) {
                for (var s, c, h = 0, l = u.length; h < l; h++) if (s = u[h], s) {
                    for (c = !1, s = s[t]; s; ) {
                        if (s[e] === r) {
                            c = u[s.sizset];
                            break
                        }
                        if (s.nodeType === 1) if (o || (s[e] = r, s.sizset = h), typeof i != 'string') {
                            if (s === i) {
                                c = !0;
                                break
                            }
                        } else if (n.filter(i, [
                            s
                        ]).length > 0) {
                            c = s;
                            break
                        }
                        s = s[t]
                    }
                    u[h] = c
                }
            }
            function k(n, t, i, r, u, f) {
                for (var o, h, s = 0, c = r.length; s < c; s++) if (o = r[s], o) {
                    for (h = !1, o = o[n]; o; ) {
                        if (o[e] === i) {
                            h = r[o.sizset];
                            break
                        }
                        if (o.nodeType !== 1 || f || (o[e] = i, o.sizset = s), o.nodeName.toLowerCase() === t) {
                            h = o;
                            break
                        }
                        o = o[n]
                    }
                    r[s] = h
                }
            }
            var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = 'sizcache' + (Math.random() + '').replace('.', ''),
                y = 0,
                d = Object.prototype.toString,
                c = !1,
                g = !0,
                o = /\\/g,
                nt = /\r\n/g,
                l = /\W/,
                n,
                s,
                f,
                a,
                h,
                w;
            [
                0,
                0
            ].sort(function () {
                    return g = !1,
                        0
                }),
                n = function (t, i, e, o) {
                    var nt;
                    if (e = e || [], i = i || r, nt = i, i.nodeType !== 1 && i.nodeType !== 9) return [];
                    if (!t || typeof t != 'string') return e;
                    var y,
                        a,
                        h,
                        g,
                        l,
                        p,
                        b,
                        c,
                        it = !0,
                        k = n.isXML(i),
                        s = [
                        ],
                        rt = t;
                    do if (v.exec(''), y = v.exec(rt), y && (rt = y[3], s.push(y[1]), y[2])) {
                        g = y[3];
                        break
                    } while (y);
                    if (s.length > 1 && tt.exec(t)) if (s.length === 2 && u.relative[s[0]]) a = w(s[0] + s[1], i, o);
                    else for (a = u.relative[s[0]] ? [
                            i
                        ] : n(s.shift(), i); s.length; ) t = s.shift(),
                            u.relative[t] && (t += s.shift()),
                            a = w(t, a, o);
                    else if (!o && s.length > 1 && i.nodeType === 9 && !k && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, k), i = l.expr ? n.filter(l.expr, l.set) [0] : l.set[0]), i) for (l = o ? {
                        expr: s.pop(),
                        set: f(o)
                    }
                        : n.find(s.pop(), s.length === 1 && (s[0] === '~' || s[0] === '+') && i.parentNode ? i.parentNode : i, k), a = l.expr ? n.filter(l.expr, l.set)  : l.set, s.length > 0 ? h = f(a)  : it = !1; s.length; ) p = s.pop(),
                        b = p,
                        u.relative[p] ? b = s.pop()  : p = '',
                        b == null && (b = i),
                        u.relative[p](h, b, k);
                    else h = s = [
                        ];
                    if (h || (h = a), h || n.error(p || t), d.call(h) === '[object Array]') if (it) if (i && i.nodeType === 1) for (c = 0; h[c] != null; c++) h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
                    else for (c = 0; h[c] != null; c++) h[c] && h[c].nodeType === 1 && e.push(a[c]);
                    else e.push.apply(e, h);
                    else f(h, e);
                    return g && (n(g, nt, e, o), n.uniqueSort(e)),
                        e
                },
                n.uniqueSort = function (n) {
                    if (a && (c = g, n.sort(a), c)) for (var t = 1; t < n.length; t++) n[t] === n[t - 1] && n.splice(t--, 1);
                    return n
                },
                n.matches = function (t, i) {
                    return n(t, null, null, i)
                },
                n.matchesSelector = function (t, i) {
                    return n(i, null, null, [
                        t
                    ]).length > 0
                },
                n.find = function (n, t, i) {
                    var f,
                        e,
                        c,
                        r,
                        s,
                        h;
                    if (!n) return [];
                    for (e = 0, c = u.order.length; e < c; e++) if (s = u.order[e], (r = u.leftMatch[s].exec(n)) && (h = r[1], r.splice(1, 1), h.substr(h.length - 1) !== '\\' && (r[1] = (r[1] || '').replace(o, ''), f = u.find[s](r, t, i), f != null))) {
                        n = n.replace(u.match[s], '');
                        break
                    }
                    return f || (f = typeof t.getElementsByTagName != 'undefined' ? t.getElementsByTagName('*')  : [
                    ]),
                    {
                        set: f,
                        expr: n
                    }
                },
                n.filter = function (i, r, f, e) {
                    for (var o, h, c, l, y, b, p, a, w, k = i, v = [
                    ], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length; ) {
                        for (c in u.filter) if ((o = u.leftMatch[c].exec(i)) != null && o[2]) {
                            if (b = u.filter[c], p = o[1], h = !1, o.splice(1, 1), p.substr(p.length - 1) === '\\') continue;
                            if (s === v && (v = [
                            ]), u.preFilter[c]) if (o = u.preFilter[c](o, s, f, v, e, d), o) {
                                if (o === !0) continue
                            } else h = l = !0;
                            if (o) for (a = 0; (y = s[a]) != null; a++) y && (l = b(y, o, a, s), w = e ^ l, f && l != null ? w ? h = !0 : s[a] = !1 : w && (v.push(y), h = !0));
                            if (l !== t) {
                                if (f || (s = v), i = i.replace(u.match[c], ''), !h) return [];
                                break
                            }
                        }
                        if (i === k) if (h == null) n.error(i);
                        else break;
                        k = i
                    }
                    return s
                },
                n.error = function (n) {
                    throw new Error('Syntax error, unrecognized expression: ' + n);
                };
            var p = n.getText = function (n) {
                    var i,
                        r,
                        t = n.nodeType,
                        u = '';
                    if (t) {
                        if (t === 1 || t === 9) {
                            if (typeof n.textContent == 'string') return n.textContent;
                            if (typeof n.innerText == 'string') return n.innerText.replace(nt, '');
                            for (n = n.firstChild; n; n = n.nextSibling) u += p(n)
                        } else if (t === 3 || t === 4) return n.nodeValue
                    } else for (i = 0; r = n[i]; i++) r.nodeType !== 8 && (u += p(r));
                    return u
                },
                u = n.selectors = {
                    order: [
                        'ID',
                        'NAME',
                        'TAG'
                    ],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {
                    },
                    attrMap: {
                        'class': 'className',
                        'for': 'htmlFor'
                    },
                    attrHandle: {
                        href: function (n) {
                            return n.getAttribute('href')
                        },
                        type: function (n) {
                            return n.getAttribute('type')
                        }
                    },
                    relative: {
                        '+': function (t, i) {
                            var f = typeof i == 'string',
                                e = f && !l.test(i),
                                o = f && !e,
                                u,
                                s,
                                r;
                            for (e && (i = i.toLowerCase()), u = 0, s = t.length; u < s; u++) if (r = t[u]) {
                                while ((r = r.previousSibling) && r.nodeType !== 1);
                                t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
                            }
                            o && n.filter(i, t, !0)
                        },
                        '>': function (t, i) {
                            var u,
                                f = typeof i == 'string',
                                r = 0,
                                o = t.length,
                                e;
                            if (f && !l.test(i)) for (i = i.toLowerCase(); r < o; r++) u = t[r],
                                u && (e = u.parentNode, t[r] = e.nodeName.toLowerCase() === i ? e : !1);
                            else {
                                for (; r < o; r++) u = t[r],
                                    u && (t[r] = f ? u.parentNode : u.parentNode === i);
                                f && n.filter(i, t, !0)
                            }
                        },
                        '': function (n, t, i) {
                            var r,
                                f = y++,
                                u = b;
                            typeof t != 'string' || l.test(t) || (t = t.toLowerCase(), r = t, u = k),
                                u('parentNode', t, f, n, r, i)
                        },
                        '~': function (n, t, i) {
                            var r,
                                f = y++,
                                u = b;
                            typeof t != 'string' || l.test(t) || (t = t.toLowerCase(), r = t, u = k),
                                u('previousSibling', t, f, n, r, i)
                        }
                    },
                    find: {
                        ID: function (n, t, i) {
                            if (typeof t.getElementById != 'undefined' && !i) {
                                var r = t.getElementById(n[1]);
                                return r && r.parentNode ? [
                                    r
                                ] : [
                                ]
                            }
                        },
                        NAME: function (n, t) {
                            var r,
                                u,
                                i,
                                f;
                            if (typeof t.getElementsByName != 'undefined') {
                                for (r = [
                                ], u = t.getElementsByName(n[1]), i = 0, f = u.length; i < f; i++) u[i].getAttribute('name') === n[1] && r.push(u[i]);
                                return r.length === 0 ? null : r
                            }
                        },
                        TAG: function (n, t) {
                            if (typeof t.getElementsByTagName != 'undefined') return t.getElementsByTagName(n[1])
                        }
                    },
                    preFilter: {
                        CLASS: function (n, t, i, r, u, f) {
                            if (n = ' ' + n[1].replace(o, '') + ' ', f) return n;
                            for (var s = 0, e; (e = t[s]) != null; s++) e && (u ^ (e.className && (' ' + e.className + ' ').replace(/[\t\n\r]/g, ' ').indexOf(n) >= 0) ? i || r.push(e)  : i && (t[s] = !1));
                            return !1
                        },
                        ID: function (n) {
                            return n[1].replace(o, '')
                        },
                        TAG: function (n) {
                            return n[1].replace(o, '').toLowerCase()
                        },
                        CHILD: function (t) {
                            if (t[1] === 'nth') {
                                t[2] || n.error(t[0]),
                                    t[2] = t[2].replace(/^\+|\s*/g, '');
                                var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === 'even' && '2n' || t[2] === 'odd' && '2n+1' || !/\D/.test(t[2]) && '0n+' + t[2] || t[2]);
                                t[2] = i[1] + (i[2] || 1) - 0,
                                    t[3] = i[3] - 0
                            } else t[2] && n.error(t[0]);
                            return t[0] = y++,
                                t
                        },
                        ATTR: function (n, t, i, r, f, e) {
                            var s = n[1] = n[1].replace(o, '');
                            return !e && u.attrMap[s] && (n[1] = u.attrMap[s]),
                                n[4] = (n[4] || n[5] || '').replace(o, ''),
                                n[2] === '~=' && (n[4] = ' ' + n[4] + ' '),
                                n
                        },
                        PSEUDO: function (t, i, r, f, e) {
                            if (t[1] === 'not') if ((v.exec(t[3]) || '').length > 1 || /^\w/.test(t[3])) t[3] = n(t[3], null, null, i);
                            else {
                                var o = n.filter(t[3], i, r, !0 ^ e);
                                return r || f.push.apply(f, o),
                                    !1
                            } else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0])) return !0;
                            return t
                        },
                        POS: function (n) {
                            return n.unshift(!0),
                                n
                        }
                    },
                    filters: {
                        enabled: function (n) {
                            return n.disabled === !1 && n.type !== 'hidden'
                        },
                        disabled: function (n) {
                            return n.disabled === !0
                        },
                        checked: function (n) {
                            return n.checked === !0
                        },
                        selected: function (n) {
                            return n.parentNode && n.parentNode.selectedIndex,
                                n.selected === !0
                        },
                        parent: function (n) {
                            return !!n.firstChild
                        },
                        empty: function (n) {
                            return !n.firstChild
                        },
                        has: function (t, i, r) {
                            return !!n(r[3], t).length
                        },
                        header: function (n) {
                            return /h\d/i.test(n.nodeName)
                        },
                        text: function (n) {
                            var t = n.getAttribute('type'),
                                i = n.type;
                            return n.nodeName.toLowerCase() === 'input' && 'text' === i && (t === i || t === null)
                        },
                        radio: function (n) {
                            return n.nodeName.toLowerCase() === 'input' && 'radio' === n.type
                        },
                        checkbox: function (n) {
                            return n.nodeName.toLowerCase() === 'input' && 'checkbox' === n.type
                        },
                        file: function (n) {
                            return n.nodeName.toLowerCase() === 'input' && 'file' === n.type
                        },
                        password: function (n) {
                            return n.nodeName.toLowerCase() === 'input' && 'password' === n.type
                        },
                        submit: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return (t === 'input' || t === 'button') && 'submit' === n.type
                        },
                        image: function (n) {
                            return n.nodeName.toLowerCase() === 'input' && 'image' === n.type
                        },
                        reset: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return (t === 'input' || t === 'button') && 'reset' === n.type
                        },
                        button: function (n) {
                            var t = n.nodeName.toLowerCase();
                            return t === 'input' && 'button' === n.type || t === 'button'
                        },
                        input: function (n) {
                            return /input|select|textarea|button/i.test(n.nodeName)
                        },
                        focus: function (n) {
                            return n === n.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (n, t) {
                            return t === 0
                        },
                        last: function (n, t, i, r) {
                            return t === r.length - 1
                        },
                        even: function (n, t) {
                            return t % 2 == 0
                        },
                        odd: function (n, t) {
                            return t % 2 == 1
                        },
                        lt: function (n, t, i) {
                            return t < i[3] - 0
                        },
                        gt: function (n, t, i) {
                            return t > i[3] - 0
                        },
                        nth: function (n, t, i) {
                            return i[3] - 0 === t
                        },
                        eq: function (n, t, i) {
                            return i[3] - 0 === t
                        }
                    },
                    filter: {
                        PSEUDO: function (t, i, r, f) {
                            var e = i[1],
                                h = u.filters[e],
                                s,
                                o,
                                c;
                            if (h) return h(t, r, i, f);
                            if (e === 'contains') return (t.textContent || t.innerText || p([t]) || '').indexOf(i[3]) >= 0;
                            if (e === 'not') {
                                for (s = i[3], o = 0, c = s.length; o < c; o++) if (s[o] === t) return !1;
                                return !0
                            }
                            n.error(e)
                        },
                        CHILD: function (n, t) {
                            var r,
                                o,
                                s,
                                u,
                                h,
                                f,
                                c = t[1],
                                i = n;
                            switch (c) {
                                case 'only':
                                case 'first':
                                    while (i = i.previousSibling) if (i.nodeType === 1) return !1;
                                    if (c === 'first') return !0;
                                    i = n;
                                case 'last':
                                    while (i = i.nextSibling) if (i.nodeType === 1) return !1;
                                    return !0;
                                case 'nth':
                                    if (r = t[2], o = t[3], r === 1 && o === 0) return !0;
                                    if (s = t[0], u = n.parentNode, u && (u[e] !== s || !n.nodeIndex)) {
                                        for (h = 0, i = u.firstChild; i; i = i.nextSibling) i.nodeType === 1 && (i.nodeIndex = ++h);
                                        u[e] = s
                                    }
                                    return f = n.nodeIndex - o,
                                            r === 0 ? f === 0 : f % r == 0 && f / r >= 0
                            }
                        },
                        ID: function (n, t) {
                            return n.nodeType === 1 && n.getAttribute('id') === t
                        },
                        TAG: function (n, t) {
                            return t === '*' && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t
                        },
                        CLASS: function (n, t) {
                            return (' ' + (n.className || n.getAttribute('class')) + ' ').indexOf(t) > - 1
                        },
                        ATTR: function (t, i) {
                            var o = i[1],
                                s = n.attr ? n.attr(t, o)  : u.attrHandle[o] ? u.attrHandle[o](t)  : t[o] != null ? t[o] : t.getAttribute(o),
                                f = s + '',
                                e = i[2],
                                r = i[4];
                            return s == null ? e === '!=' : !e && n.attr ? s != null : e === '=' ? f === r : e === '*=' ? f.indexOf(r) >= 0 : e === '~=' ? (' ' + f + ' ').indexOf(r) >= 0 : r ? e === '!=' ? f !== r : e === '^=' ? f.indexOf(r) === 0 : e === '$=' ? f.substr(f.length - r.length) === r : e === '|=' ? f === r || f.substr(0, r.length + 1) === r + '-' : !1 : f && s !== !1
                        },
                        POS: function (n, t, i, r) {
                            var e = t[2],
                                f = u.setFilters[e];
                            if (f) return f(n, i, t, r)
                        }
                    }
                },
                tt = u.match.POS,
                it = function (n, t) {
                    return '\\' + ( + t + 1)
                };
            for (s in u.match) u.match[s] = new RegExp(u.match[s].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                u.leftMatch[s] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[s].source.replace(/\\(\d+)/g, it));
            f = function (n, t) {
                return (n = Array.prototype.slice.call(n, 0), t) ? (t.push.apply(t, n), t)  : n
            };
            try {
                Array.prototype.slice.call(r.documentElement.childNodes, 0) [0].nodeType
            } catch (rt) {
                f = function (n, t) {
                    var i = 0,
                        r = t || [],
                        u;
                    if (d.call(n) === '[object Array]') Array.prototype.push.apply(r, n);
                    else if (typeof n.length == 'number') for (u = n.length; i < u; i++) r.push(n[i]);
                    else for (; n[i]; i++) r.push(n[i]);
                    return r
                }
            }
            r.documentElement.compareDocumentPosition ? a = function (n, t) {
                return n === t ? (c = !0, 0)  : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? - 1 : 1 : n.compareDocumentPosition(t) & 4 ? - 1 : 1
            }
                : (a = function (n, t) {
                var i;
                if (n === t) return c = !0,
                    0;
                if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                var e,
                    l,
                    u = [
                    ],
                    f = [
                    ],
                    o = n.parentNode,
                    s = t.parentNode,
                    r = o;
                if (o === s) return h(n, t);
                if (!o) return - 1;
                if (!s) return 1;
                while (r) u.unshift(r),
                    r = r.parentNode;
                for (r = s; r; ) f.unshift(r),
                    r = r.parentNode;
                for (e = u.length, l = f.length, i = 0; i < e && i < l; i++) if (u[i] !== f[i]) return h(u[i], f[i]);
                return i === e ? h(n, f[i], - 1)  : h(u[i], t, 1)
            }, h = function (n, t, i) {
                if (n === t) return i;
                for (var r = n.nextSibling; r; ) {
                    if (r === t) return - 1;
                    r = r.nextSibling
                }
                return 1
            }),
                function () {
                    var n = r.createElement('div'),
                        f = 'script' + (new Date).getTime(),
                        i = r.documentElement;
                    n.innerHTML = '<a name=\'' + f + '\'/>',
                        i.insertBefore(n, i.firstChild),
                        r.getElementById(f) && (u.find.ID = function (n, i, r) {
                        if (typeof i.getElementById != 'undefined' && !r) {
                            var u = i.getElementById(n[1]);
                            return u ? u.id === n[1] || typeof u.getAttributeNode != 'undefined' && u.getAttributeNode('id').nodeValue === n[1] ? [
                                u
                            ] : t : [
                            ]
                        }
                    }, u.filter.ID = function (n, t) {
                        var i = typeof n.getAttributeNode != 'undefined' && n.getAttributeNode('id');
                        return n.nodeType === 1 && i && i.nodeValue === t
                    }),
                        i.removeChild(n),
                        i = n = null
                }(),
                function () {
                    var n = r.createElement('div');
                    n.appendChild(r.createComment('')),
                        n.getElementsByTagName('*').length > 0 && (u.find.TAG = function (n, t) {
                        var i = t.getElementsByTagName(n[1]),
                            u,
                            r;
                        if (n[1] === '*') {
                            for (u = [
                            ], r = 0; i[r]; r++) i[r].nodeType === 1 && u.push(i[r]);
                            i = u
                        }
                        return i
                    }),
                        n.innerHTML = '<a href=\'#\'></a>',
                        n.firstChild && typeof n.firstChild.getAttribute != 'undefined' && n.firstChild.getAttribute('href') !== '#' && (u.attrHandle.href = function (n) {
                        return n.getAttribute('href', 2)
                    }),
                        n = null
                }(),
                r.querySelectorAll && function () {
                var i = n,
                    t = r.createElement('div'),
                    o = '__sizzle__',
                    e;
                if (t.innerHTML = '<p class=\'TEST\'></p>', !t.querySelectorAll || t.querySelectorAll('.TEST').length !== 0) {
                    n = function (t, e, s, h) {
                        var c,
                            l;
                        if (e = e || r, !h && !n.isXML(e)) {
                            if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t), c && (e.nodeType === 1 || e.nodeType === 9)) {
                                if (c[1]) return f(e.getElementsByTagName(t), s);
                                if (c[2] && u.find.CLASS && e.getElementsByClassName) return f(e.getElementsByClassName(c[2]), s)
                            }
                            if (e.nodeType === 9) {
                                if (t === 'body' && e.body) return f([e.body], s);
                                if (c && c[3]) {
                                    if (l = e.getElementById(c[3]), !l || !l.parentNode) return f([], s);
                                    if (l.id === c[3]) return f([l], s)
                                }
                                try {
                                    return f(e.querySelectorAll(t), s)
                                } catch (b) {
                                }
                            } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== 'object') {
                                var w = e,
                                    v = e.getAttribute('id'),
                                    a = v || o,
                                    y = e.parentNode,
                                    p = /^\s*[+~]/.test(t);
                                v ? a = a.replace(/'/g, '\\$&')  : e.setAttribute('id', a),
                                    p && y && (e = e.parentNode);
                                try {
                                    if (!p || y) return f(e.querySelectorAll('[id=\'' + a + '\'] ' + t), s)
                                } catch (k) {
                                } finally {
                                    v || w.removeAttribute('id')
                                }
                            }
                        }
                        return i(t, e, s, h)
                    };
                    for (e in i) n[e] = i[e];
                    t = null
                }
            }(),
                function () {
                    var t = r.documentElement,
                        i = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector,
                        e,
                        f;
                    if (i) {
                        e = !i.call(r.createElement('div'), 'div'),
                            f = !1;
                        try {
                            i.call(r.documentElement, '[test!=\'\']:sizzle')
                        } catch (o) {
                            f = !0
                        }
                        n.matchesSelector = function (t, r) {
                            if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, '=\'$1\']'), !n.isXML(t)) try {
                                if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                    var o = i.call(t, r);
                                    if (o || !e || t.document && t.document.nodeType !== 11) return o
                                }
                            } catch (s) {
                            }
                            return n(r, null, null, [
                                t
                            ]).length > 0
                        }
                    }
                }(),
                function () {
                    var n = r.createElement('div');
                    if (n.innerHTML = '<div class=\'test e\'></div><div class=\'test\'></div>', !!n.getElementsByClassName && n.getElementsByClassName('e').length !== 0) {
                        if (n.lastChild.className = 'e', n.getElementsByClassName('e').length === 1) return;
                        u.order.splice(1, 0, 'CLASS'),
                            u.find.CLASS = function (n, t, i) {
                                if (typeof t.getElementsByClassName != 'undefined' && !i) return t.getElementsByClassName(n[1])
                            },
                            n = null
                    }
                }(),
                n.contains = r.documentElement.contains ? function (n, t) {
                    return n !== t && (n.contains ? n.contains(t)  : !0)
                }
                    : r.documentElement.compareDocumentPosition ? function (n, t) {
                    return !!(n.compareDocumentPosition(t) & 16)
                }
                    : function () {
                    return !1
                },
                n.isXML = function (n) {
                    var t = (n ? n.ownerDocument || n : 0).documentElement;
                    return t ? t.nodeName !== 'HTML' : !1
                },
                w = function (t, i, r) {
                    for (var e, o = [
                    ], s = '', h = i.nodeType ? [
                        i
                    ] : i, f, c; e = u.match.PSEUDO.exec(t); ) s += e[0],
                        t = t.replace(u.match.PSEUDO, '');
                    for (t = u.relative[t] ? t + '*' : t, f = 0, c = h.length; f < c; f++) n(t, h[f], o, r);
                    return n.filter(s, o)
                },
                n.attr = i.attr,
                n.selectors.attrMap = {
                },
                i.find = n,
                i.expr = n.selectors,
                i.expr[':'] = i.expr.filters,
                i.unique = n.uniqueSort,
                i.text = n.getText,
                i.isXMLDoc = n.isXML,
                i.contains = n.contains
        }();
    var pu = /Until$/,
        wu = /^(?:parents|prevUntil|prevAll)/,
        bu = /,/,
        ku = /^.[^:#\[\.,]*$/,
        du = Array.prototype.slice,
        wi = i.expr.match.POS,
        gu = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var s = this,
                t,
                f,
                r,
                o,
                u,
                e;
            if (typeof n != 'string') return i(n).filter(function () {
                for (t = 0, f = s.length; t < f; t++) if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack('', 'find', n), t = 0, f = this.length; t < f; t++) if (o = r.length, i.find(n, this[t], r), t > 0) for (u = o; u < r.length; u++) for (e = 0; e < o; e++) if (r[e] === r[u]) {
                r.splice(u--, 1);
                break
            }
            return r
        },
        has: function (n) {
            var t = i(n);
            return this.filter(function () {
                for (var n = 0, r = t.length; n < r; n++) if (i.contains(this, t[n])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(ti(this, n, !1), 'not', n)
        },
        filter: function (n) {
            return this.pushStack(ti(this, n, !0), 'filter', n)
        },
        is: function (n) {
            return !!n && (typeof n == 'string' ? wi.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            var f = [
                ],
                u,
                s,
                r = this[0],
                e,
                o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t; ) {
                    for (u = 0; u < n.length; u++) i(r).is(n[u]) && f.push({
                        selector: n[u],
                        elem: r,
                        level: e
                    });
                    r = r.parentNode,
                        e++
                }
                return f
            }
            for (o = wi.test(n) || typeof n != 'string' ? i(n, t || this.context)  : 0, u = 0, s = this.length; u < s; u++) for (r = this[u]; r; ) {
                if (o ? o.index(r) > - 1 : i.find.matchesSelector(r, n)) {
                    f.push(r);
                    break
                }
                if (r = r.parentNode, !r || !r.ownerDocument || r === t || r.nodeType === 11) break
            }
            return f = f.length > 1 ? i.unique(f)  : f,
                this.pushStack(f, 'closest', n)
        },
        index: function (n) {
            return n ? typeof n == 'string' ? i.inArray(this[0], i(n))  : i.inArray(n.jquery ? n[0] : n, this)  : this[0] && this[0].parentNode ? this.prevAll().length : - 1
        },
        add: function (n, t) {
            var u = typeof n == 'string' ? i(n, t)  : i.makeArray(n && n.nodeType ? [
                    n
                ] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(ii(u[0]) || ii(r[0]) ? r : i.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }),
        i.each({
            parent: function (n) {
                var t = n.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function (n) {
                return i.dir(n, 'parentNode')
            },
            parentsUntil: function (n, t, r) {
                return i.dir(n, 'parentNode', r)
            },
            next: function (n) {
                return i.nth(n, 2, 'nextSibling')
            },
            prev: function (n) {
                return i.nth(n, 2, 'previousSibling')
            },
            nextAll: function (n) {
                return i.dir(n, 'nextSibling')
            },
            prevAll: function (n) {
                return i.dir(n, 'previousSibling')
            },
            nextUntil: function (n, t, r) {
                return i.dir(n, 'nextSibling', r)
            },
            prevUntil: function (n, t, r) {
                return i.dir(n, 'previousSibling', r)
            },
            siblings: function (n) {
                return i.sibling(n.parentNode.firstChild, n)
            },
            children: function (n) {
                return i.sibling(n.firstChild)
            },
            contents: function (n) {
                return i.nodeName(n, 'iframe') ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes)
            }
        }, function (n, t) {
            i.fn[n] = function (r, u) {
                var f = i.map(this, t, r);
                return pu.test(n) || (u = r),
                    u && typeof u == 'string' && (f = i.filter(u, f)),
                    f = this.length > 1 && !gu[n] ? i.unique(f)  : f,
                    (this.length > 1 || bu.test(u)) && wu.test(n) && (f = f.reverse()),
                    this.pushStack(f, n, du.call(arguments).join(','))
            }
        }),
        i.extend({
            filter: function (n, t, r) {
                return r && (n = ':not(' + n + ')'),
                        t.length === 1 ? i.find.matchesSelector(t[0], n) ? [
                    t[0]
                ] : [
                ] : i.find.matches(n, t)
            },
            dir: function (n, r, u) {
                for (var e = [
                ], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u)); ) f.nodeType === 1 && e.push(f),
                    f = f[r];
                return e
            },
            nth: function (n, t, i) {
                t = t || 1;
                for (var r = 0; n; n = n[i]) if (n.nodeType === 1 && ++r === t) break;
                return n
            },
            sibling: function (n, t) {
                for (var i = [
                ]; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
                return i
            }
        });
    var bi = 'abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
        nf = / jQuery\d+="(?:\d+|null)"/g,
        et = /^\s+/,
        ki = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        di = /<([\w:]+)/,
        tf = /<tbody/i,
        rf = /<|&#?\w+;/,
        uf = /<(?:script|style)/i,
        ff = /<(?:script|object|embed|option|style)/i,
        gi = new RegExp('<(?:' + bi + ')', 'i'),
        nr = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ef = /\/(java|ecma)script/i,
        of = /^\s*<!(?:\[CDATA\[|\-\-)/,
        u = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            legend: [
                1,
                '<fieldset>',
                '</fieldset>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            col: [
                2,
                '<table><tbody></tbody><colgroup>',
                '</colgroup></table>'
            ],
            area: [
                1,
                '<map>',
                '</map>'
            ],
            _default: [
                0,
                '',
                ''
            ]
        },
        tr = ni(r);
    u.optgroup = u.option,
        u.tbody = u.tfoot = u.colgroup = u.caption = u.thead,
        u.th = u.td,
        i.support.htmlSerialize || (u._default = [
        1,
        'div<div>',
        '</div>'
    ]),
        i.fn.extend({
            text: function (n) {
                return i.isFunction(n) ? this.each(function (t) {
                    var r = i(this);
                    r.text(n.call(this, t, r.text()))
                })  : typeof n != 'object' && n !== t ? this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))  : i.text(this)
            },
            wrapAll: function (n) {
                if (i.isFunction(n)) return this.each(function (t) {
                    i(this).wrapAll(n.call(this, t))
                });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function () {
                            for (var n = this; n.firstChild && n.firstChild.nodeType === 1; ) n = n.firstChild;
                            return n
                        }).append(this)
                }
                return this
            },
            wrapInner: function (n) {
                return i.isFunction(n) ? this.each(function (t) {
                    i(this).wrapInner(n.call(this, t))
                })  : this.each(function () {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n)  : t.append(n)
                })
            },
            wrap: function (n) {
                var t = i.isFunction(n);
                return this.each(function (r) {
                    i(this).wrapAll(t ? n.call(this, r)  : n)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    i.nodeName(this, 'body') || i(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (n) {
                    this.nodeType === 1 && this.appendChild(n)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (n) {
                    this.nodeType === 1 && this.insertBefore(n, this.firstChild)
                })
            },
            before: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this)
                });
                if (arguments.length) {
                    var n = i.clean(arguments);
                    return n.push.apply(n, this.toArray()),
                        this.pushStack(n, 'before', arguments)
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this.nextSibling)
                });
                if (arguments.length) {
                    var n = this.pushStack(this, 'after', arguments);
                    return n.push.apply(n, i.clean(arguments)),
                        n
                }
            },
            remove: function (n, t) {
                for (var u = 0, r; (r = this[u]) != null; u++) (!n || i.filter(n, [
                    r
                ]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName('*')), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
                return this
            },
            empty: function () {
                for (var t = 0, n; (n = this[t]) != null; t++) for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName('*')); n.firstChild; ) n.removeChild(n.firstChild);
                return this
            },
            clone: function (n, t) {
                return n = n == null ? !1 : n,
                    t = t == null ? n : t,
                    this.map(function () {
                        return i.clone(this, n, t)
                    })
            },
            html: function (n) {
                if (n === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(nf, '')  : null;
                if (typeof n != 'string' || uf.test(n) || !i.support.leadingWhitespace && et.test(n) || u[(di.exec(n) || ['',
                    '']) [1].toLowerCase()]) i.isFunction(n) ? this.each(function (t) {
                    var r = i(this);
                    r.html(n.call(this, t, r.html()))
                })  : this.empty().append(n);
                else {
                    n = n.replace(ki, '<$1></$2>');
                    try {
                        for (var r = 0, f = this.length; r < f; r++) this[r].nodeType === 1 && (i.cleanData(this[r].getElementsByTagName('*')), this[r].innerHTML = n)
                    } catch (e) {
                        this.empty().append(n)
                    }
                }
                return this
            },
            replaceWith: function (n) {
                return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function (t) {
                    var r = i(this),
                        u = r.html();
                    r.replaceWith(n.call(this, t, u))
                })  : (typeof n != 'string' && (n = i(n).detach()), this.each(function () {
                    var t = this.nextSibling,
                        r = this.parentNode;
                    i(this).remove(),
                        t ? i(t).before(n)  : i(r).append(n)
                }))  : this.length ? this.pushStack(i(i.isFunction(n) ? n()  : n), 'replaceWith', n)  : this
            },
            detach: function (n) {
                return this.remove(n, !0)
            },
            domManip: function (n, r, u) {
                var c,
                    h,
                    f,
                    o,
                    e = n[0],
                    l = [
                    ];
                if (!i.support.checkClone && arguments.length === 3 && typeof e == 'string' && nr.test(e)) return this.each(function () {
                    i(this).domManip(n, r, u, !0)
                });
                if (i.isFunction(e)) return this.each(function (f) {
                    var o = i(this);
                    n[0] = e.call(this, f, r ? o.html()  : t),
                        o.domManip(n, r, u)
                });
                if (this[0]) {
                    if (o = e && e.parentNode, c = i.support.parentNode && o && o.nodeType === 11 && o.childNodes.length === this.length ? {
                        fragment: o
                    }
                        : i.buildFragment(n, this, l), f = c.fragment, h = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild, h) {
                        r = r && i.nodeName(h, 'tr');
                        for (var s = 0, a = this.length, v = a - 1; s < a; s++) u.call(r ? tu(this[s], h)  : this[s], c.cacheable || a > 1 && s < v ? i.clone(f, !0, !0)  : f)
                    }
                    l.length && i.each(l, gr)
                }
                return this
            }
        }),
        i.buildFragment = function (n, t, u) {
            var e,
                h,
                s,
                o,
                f = n[0];
            return t && t[0] && (o = t[0].ownerDocument || t[0]),
                o.createDocumentFragment || (o = r),
                n.length === 1 && typeof f == 'string' && f.length < 512 && o === r && f.charAt(0) === '<' && !ff.test(f) && (i.support.checkClone || !nr.test(f)) && (i.support.html5Clone || !gi.test(f)) && (h = !0, s = i.fragments[f], s && s !== 1 && (e = s)),
                e || (e = o.createDocumentFragment(), i.clean(n, o, e, u)),
                h && (i.fragments[f] = s ? e : 1),
            {
                fragment: e,
                cacheable: h
            }
        },
        i.fragments = {
        },
        i.each({
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
        }, function (n, t) {
            i.fn[n] = function (r) {
                var e = [
                    ],
                    u = i(r),
                    o = this.length === 1 && this[0].parentNode,
                    f,
                    h,
                    s;
                if (o && o.nodeType === 11 && o.childNodes.length === 1 && u.length === 1) return u[t](this[0]),
                    this;
                for (f = 0, h = u.length; f < h; f++) s = (f > 0 ? this.clone(!0)  : this).get(),
                    i(u[f]) [t](s),
                    e = e.concat(s);
                return this.pushStack(e, n, u.selector)
            }
        }),
        i.extend({
            clone: function (n, t, r) {
                var f,
                    e,
                    u,
                    o = i.support.html5Clone || !gi.test('<' + n.nodeName) ? n.cloneNode(!0)  : nu(n);
                if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n)) for (dt(n, o), f = w(n), e = w(o), u = 0; f[u]; ++u) e[u] && dt(f[u], e[u]);
                if (t && (gt(n, o), r)) for (f = w(n), e = w(o), u = 0; f[u]; ++u) gt(f[u], e[u]);
                return f = e = null,
                    o
            },
            clean: function (n, t, f, e) {
                var p,
                    s,
                    c,
                    h,
                    o,
                    y,
                    a,
                    b,
                    k;
                for (t = t || r, typeof t.createElement == 'undefined' && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r), s = [
                ], h = 0; (o = n[h]) != null; h++) if (typeof o == 'number' && (o += ''), o) {
                    if (typeof o == 'string') if (rf.test(o)) {
                        o = o.replace(ki, '<$1></$2>');
                        var w = (di.exec(o) || ['',
                                '']) [1].toLowerCase(),
                            v = u[w] || u._default,
                            d = v[0],
                            l = t.createElement('div');
                        for (t === r ? tr.appendChild(l)  : ni(t).appendChild(l), l.innerHTML = v[1] + o + v[2]; d--; ) l = l.lastChild;
                        if (!i.support.tbody) for (y = tf.test(o), a = w === 'table' && !y ? l.firstChild && l.firstChild.childNodes : v[1] === '<table>' && !y ? l.childNodes : [
                        ], c = a.length - 1; c >= 0; --c) i.nodeName(a[c], 'tbody') && !a[c].childNodes.length && a[c].parentNode.removeChild(a[c]);
                        !i.support.leadingWhitespace && et.test(o) && l.insertBefore(t.createTextNode(et.exec(o) [0]), l.firstChild),
                            o = l.childNodes
                    } else o = t.createTextNode(o);
                    if (!i.support.appendChecked) if (o[0] && typeof (b = o.length) == 'number') for (c = 0; c < b; c++) bt(o[c]);
                    else bt(o);
                    o.nodeType ? s.push(o)  : s = i.merge(s, o)
                }
                if (f) for (p = function (n) {
                    return !n.type || ef.test(n.type)
                }, h = 0; s[h]; h++) e && i.nodeName(s[h], 'script') && (!s[h].type || s[h].type.toLowerCase() === 'text/javascript') ? e.push(s[h].parentNode ? s[h].parentNode.removeChild(s[h])  : s[h])  : (s[h].nodeType === 1 && (k = i.grep(s[h].getElementsByTagName('script'), p), s.splice.apply(s, [
                        h + 1,
                    0
                ].concat(k))), f.appendChild(s[h]));
                return s
            },
            cleanData: function (n) {
                for (var r, u, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, f, e = 0; (t = n[e]) != null; e++) if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (u = t[i.expando], u)) {
                    if (r = o[u], r && r.events) {
                        for (f in r.events) s[f] ? i.event.remove(t, f)  : i.removeEvent(t, f, r.handle);
                        r.handle && (r.handle.elem = null)
                    }
                    h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando),
                        delete o[u]
                }
            }
        });
    var ot = /alpha\([^)]*\)/i,
        sf = /opacity=([^)]*)/,
        hf = /([A-Z]|^ms)/g,
        ir = /^-?\d+(?:px)?$/i,
        cf = /^-?\d/,
        lf = /^([\-+])=([\-+.\de]+)/,
        af = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        },
        vf = [
            'Left',
            'Right'
        ],
        yf = [
            'Top',
            'Bottom'
        ],
        l,
        rr,
        ur;
    i.fn.css = function (n, r) {
        return arguments.length === 2 && r === t ? this : i.access(this, n, r, !0, function (n, r, u) {
            return u !== t ? i.style(n, r, u)  : i.css(n, r)
        })
    },
        i.extend({
            cssHooks: {
                opacity: {
                    get: function (n, t) {
                        if (t) {
                            var i = l(n, 'opacity', 'opacity');
                            return i === '' ? '1' : i
                        }
                        return n.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: i.support.cssFloat ? 'cssFloat' : 'styleFloat'
            },
            style: function (n, r, u, f) {
                if (!!n && n.nodeType !== 3 && n.nodeType !== 8 && !!n.style) {
                    var o,
                        s,
                        h = i.camelCase(r),
                        c = n.style,
                        e = i.cssHooks[h];
                    if (r = i.cssProps[h] || h, u === t) return e && 'get' in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                    if (s = typeof u, s === 'string' && (o = lf.exec(u)) && (u = + (o[1] + 1) * + o[2] + parseFloat(i.css(n, r)), s = 'number'), u == null || s === 'number' && isNaN(u)) return;
                    if (s !== 'number' || i.cssNumber[h] || (u += 'px'), !e || !('set' in e) || (u = e.set(n, u)) !== t) try {
                        c[r] = u
                    } catch (l) {
                    }
                }
            },
            css: function (n, r, u) {
                var e,
                    f;
                return (r = i.camelCase(r), f = i.cssHooks[r], r = i.cssProps[r] || r, r === 'cssFloat' && (r = 'float'), f && 'get' in f && (e = f.get(n, !0, u)) !== t) ? e : l ? l(n, r)  : void 0
            },
            swap: function (n, t, i) {
                var u = {
                    },
                    r;
                for (r in t) u[r] = n.style[r],
                    n.style[r] = t[r];
                i.call(n);
                for (r in t) n.style[r] = u[r]
            }
        }),
        i.curCSS = i.css,
        i.each(['height',
            'width'], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r, u) {
                    var f;
                    if (r) return n.offsetWidth !== 0 ? wt(n, t, u)  : (i.swap(n, af, function () {
                        f = wt(n, t, u)
                    }), f)
                },
                set: function (n, t) {
                    return ir.test(t) ? (t = parseFloat(t), t >= 0 ? t + 'px' : void 0)  : t
                }
            }
        }),
        i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return sf.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || '') ? parseFloat(RegExp.$1) / 100 + '' : t ? '1' : ''
        },
        set: function (n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? 'alpha(opacity=' + t * 100 + ')' : '',
                f = u && u.filter || r.filter || '';
            (r.zoom = 1, t >= 1 && i.trim(f.replace(ot, '')) === '' && (r.removeAttribute('filter'), u && !u.filter)) || (r.filter = ot.test(f) ? f.replace(ot, e)  : f + ' ' + e)
        }
    }),
        i(function () {
            i.support.reliableMarginRight || (i.cssHooks.marginRight = {
                get: function (n, t) {
                    var r;
                    return i.swap(n, {
                        display: 'inline-block'
                    }, function () {
                        r = t ? l(n, 'margin-right', 'marginRight')  : n.style.marginRight
                    }),
                        r
                }
            })
        }),
        r.defaultView && r.defaultView.getComputedStyle && (rr = function (n, t) {
        var r,
            u,
            f;
        return t = t.replace(hf, '-$1').toLowerCase(),
            (u = n.ownerDocument.defaultView) && (f = u.getComputedStyle(n, null)) && (r = f.getPropertyValue(t), r === '' && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))),
            r
    }),
        r.documentElement.currentStyle && (ur = function (n, t) {
        var f,
            u,
            e,
            i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i === null && r && (e = r[t]) && (i = e),
            !ir.test(i) && cf.test(i) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === 'fontSize' ? '1em' : i || 0, i = r.pixelLeft + 'px', r.left = f, u && (n.runtimeStyle.left = u)),
                i === '' ? 'auto' : i
    }),
        l = rr || ur,
        i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        var t = n.offsetWidth,
            r = n.offsetHeight;
        return t === 0 && r === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, 'display')) === 'none'
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    });
    var pf = /%20/g,
        wf = /\[\]$/,
        fr = /\r?\n/g,
        bf = /#.*$/,
        kf = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        df = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        gf = /^(?:GET|HEAD)$/,
        ne = /^\/\//,
        er = /\?/,
        te = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ie = /^(?:select|textarea)/i,
        or = /\s+/,
        re = /([?&])_=[^&]*/,
        sr = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        hr = i.fn.load,
        st = {
        },
        cr = {
        },
        o,
        s,
        lr = [
            '*/'
        ] + ['*'];
    try {
        o = uu.href
    } catch (ee) {
        o = r.createElement('a'),
            o.href = '',
            o = o.href
    }
    s = sr.exec(o.toLowerCase()) || [],
        i.fn.extend({
            load: function (n, r, u) {
                var f,
                    e,
                    o,
                    s;
                return typeof n != 'string' && hr ? hr.apply(this, arguments)  : this.length ? (f = n.indexOf(' '), f >= 0 && (e = n.slice(f, n.length), n = n.slice(0, f)), o = 'GET', r && (i.isFunction(r) ? (u = r, r = t)  : typeof r == 'object' && (r = i.param(r, i.ajaxSettings.traditional), o = 'POST')), s = this, i.ajax({
                    url: n,
                    type: o,
                    dataType: 'html',
                    data: r,
                    complete: function (n, t, r) {
                        r = n.responseText,
                            n.isResolved() && (n.done(function (n) {
                            r = n
                        }), s.html(e ? i('<div>').append(r.replace(te, '')).find(e)  : r)),
                            u && s.each(u, [
                            r,
                            t,
                            n
                        ])
                    }
                }), this)  : this
            },
            serialize: function () {
                return i.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? i.makeArray(this.elements)  : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || ie.test(this.nodeName) || df.test(this.type))
                }).map(function (n, t) {
                    var r = i(this).val();
                    return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                        return {
                            name: t.name,
                            value: n.replace(fr, '\r\n')
                        }
                    })  : {
                        name: t.name,
                        value: r.replace(fr, '\r\n')
                    }
                }).get()
            }
        }),
        i.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function (n, t) {
            i.fn[t] = function (n) {
                return this.on(t, n)
            }
        }),
        i.each(['get',
            'post'], function (n, r) {
            i[r] = function (n, u, f, e) {
                return i.isFunction(u) && (e = e || f, f = u, u = t),
                    i.ajax({
                        type: r,
                        url: n,
                        data: u,
                        success: f,
                        dataType: e
                    })
            }
        }),
        i.extend({
            getScript: function (n, r) {
                return i.get(n, t, r, 'script')
            },
            getJSON: function (n, t, r) {
                return i.get(n, t, r, 'json')
            },
            ajaxSetup: function (n, t) {
                return t ? yt(n, i.ajaxSettings)  : (t = n, n = i.ajaxSettings),
                    yt(n, t),
                    n
            },
            ajaxSettings: {
                url: o,
                isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(s[1]),
                global: !0,
                type: 'GET',
                contentType: 'application/x-www-form-urlencoded',
                processData: !0,
                async: !0,
                accepts: {
                    xml: 'application/xml, text/xml',
                    html: 'text/html',
                    text: 'text/plain',
                    json: 'application/json, text/javascript',
                    '*': lr
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText'
                },
                converters: {
                    '* text': n.String,
                    'text html': !0,
                    'text json': i.parseJSON,
                    'text xml': i.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: pt(st),
            ajaxTransport: pt(cr),
            ajax: function (n, r) {
                function y(n, r, s, l) {
                    if (e !== 2) {
                        e = 2,
                            nt && clearTimeout(nt),
                            c = t,
                            g = l || '',
                            f.readyState = n > 0 ? 4 : 0;
                        var y,
                            b,
                            p,
                            a = r,
                            ut = s ? dr(u, f, s)  : t,
                            tt,
                            it;
                        if (n >= 200 && n < 300 || n === 304) if (u.ifModified && ((tt = f.getResponseHeader('Last-Modified')) && (i.lastModified[o] = tt), (it = f.getResponseHeader('Etag')) && (i.etag[o] = it)), n === 304) a = 'notmodified',
                            y = !0;
                        else try {
                                b = kr(u, ut),
                                    a = 'success',
                                    y = !0
                            } catch (ft) {
                                a = 'parsererror',
                                    p = ft
                            } else p = a,
                            (!a || n) && (a = 'error', n < 0 && (n = 0));
                        f.status = n,
                            f.statusText = '' + (r || a),
                            y ? d.resolveWith(h, [
                                b,
                                a,
                                f
                            ])  : d.rejectWith(h, [
                                f,
                                a,
                                p
                            ]),
                            f.statusCode(w),
                            w = t,
                            v && k.trigger('ajax' + (y ? 'Success' : 'Error'), [
                            f,
                            u,
                            y ? b : p
                        ]),
                            rt.fireWith(h, [
                                f,
                                a
                            ]),
                            v && (k.trigger('ajaxComplete', [
                            f,
                            u
                        ]), --i.active || i.event.trigger('ajaxStop'))
                    }
                }
                var tt,
                    it;
                typeof n == 'object' && (r = n, n = t),
                    r = r || {
                    };
                var u = i.ajaxSetup({
                    }, r),
                    h = u.context || u,
                    k = h !== u && (h.nodeType || h instanceof i) ? i(h)  : i.event,
                    d = i.Deferred(),
                    rt = i.Callbacks('once memory'),
                    w = u.statusCode || {
                    },
                    o,
                    ut = {
                    },
                    ft = {
                    },
                    g,
                    b,
                    c,
                    nt,
                    l,
                    e = 0,
                    v,
                    a,
                    f = {
                        readyState: 0,
                        setRequestHeader: function (n, t) {
                            if (!e) {
                                var i = n.toLowerCase();
                                n = ft[i] = ft[i] || n,
                                    ut[n] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function () {
                            return e === 2 ? g : null
                        },
                        getResponseHeader: function (n) {
                            var i;
                            if (e === 2) {
                                if (!b) for (b = {
                                }; i = kf.exec(g); ) b[i[1].toLowerCase()] = i[2];
                                i = b[n.toLowerCase()]
                            }
                            return i === t ? null : i
                        },
                        overrideMimeType: function (n) {
                            return e || (u.mimeType = n),
                                this
                        },
                        abort: function (n) {
                            return n = n || 'abort',
                                c && c.abort(n),
                                y(0, n),
                                this
                        }
                    };
                if (d.promise(f), f.success = f.done, f.error = f.fail, f.complete = rt.add, f.statusCode = function (n) {
                    if (n) {
                        var t;
                        if (e < 2) for (t in n) w[t] = [
                            w[t],
                            n[t]
                        ];
                        else t = n[f.status],
                            f.then(t, t)
                    }
                    return this
                }, u.url = ((n || u.url) + '').replace(bf, '').replace(ne, s[1] + '//'), u.dataTypes = i.trim(u.dataType || '*').toLowerCase().split(or), u.crossDomain == null && (l = sr.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] == s[1] && l[2] == s[2] && (l[3] || (l[1] === 'http:' ? 80 : 443)) == (s[3] || (s[1] === 'http:' ? 80 : 443)))), u.data && u.processData && typeof u.data != 'string' && (u.data = i.param(u.data, u.traditional)), p(st, u, r, f), e === 2) return !1;
                v = u.global,
                    u.type = u.type.toUpperCase(),
                    u.hasContent = !gf.test(u.type),
                    v && i.active++ == 0 && i.event.trigger('ajaxStart'),
                    u.hasContent || (u.data && (u.url += (er.test(u.url) ? '&' : '?') + u.data, delete u.data), o = u.url, u.cache === !1 && (tt = i.now(), it = u.url.replace(re, '$1_=' + tt), u.url = it + (it === u.url ? (er.test(u.url) ? '&' : '?') + '_=' + tt : ''))),
                    (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader('Content-Type', u.contentType),
                    u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader('If-Modified-Since', i.lastModified[o]), i.etag[o] && f.setRequestHeader('If-None-Match', i.etag[o])),
                    f.setRequestHeader('Accept', u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== '*' ? ', ' + lr + '; q=0.01' : '')  : u.accepts['*']);
                for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || e === 2)) return f.abort(),
                    !1;
                for (a in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) f[a](u[a]);
                if (c = p(cr, u, r, f), c) {
                    f.readyState = 1,
                        v && k.trigger('ajaxSend', [
                        f,
                        u
                    ]),
                        u.async && u.timeout > 0 && (nt = setTimeout(function () {
                        f.abort('timeout')
                    }, u.timeout));
                    try {
                        e = 1,
                            c.send(ut, y)
                    } catch (et) {
                        if (e < 2) y( - 1, et);
                        else throw et;
                    }
                } else y( - 1, 'No Transport');
                return f
            },
            param: function (n, r) {
                var u = [
                    ],
                    e = function (n, t) {
                        t = i.isFunction(t) ? t()  : t,
                            u[u.length] = encodeURIComponent(n) + '=' + encodeURIComponent(t)
                    },
                    f;
                if (r === t && (r = i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
                    e(this.name, this.value)
                });
                else for (f in n) rt(f, n[f], r, e);
                return u.join('&').replace(pf, '+')
            }
        }),
        i.extend({
            active: 0,
            lastModified: {
            },
            etag: {
            }
        }),
        ar = i.now(),
        y = /(\=)\?(&|$)|\?\?/i,
        i.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function () {
                return i.expando + '_' + ar++
            }
        }),
        i.ajaxPrefilter('json jsonp', function (t, r, u) {
            var h = t.contentType === 'application/x-www-form-urlencoded' && typeof t.data == 'string';
            if (t.dataTypes[0] === 'jsonp' || t.jsonp !== !1 && (y.test(t.url) || h && y.test(t.data))) {
                var o,
                    f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback()  : t.jsonpCallback,
                    c = n[f],
                    e = t.url,
                    s = t.data,
                    l = '$1' + f + '$2';
                return t.jsonp !== !1 && (e = e.replace(y, l), t.url === e && (h && (s = s.replace(y, l)), t.data === s && (e += (/\?/.test(e) ? '&' : '?') + t.jsonp + '=' + f))),
                    t.url = e,
                    t.data = s,
                    n[f] = function (n) {
                        o = [
                            n
                        ]
                    },
                    u.always(function () {
                        n[f] = c,
                            o && i.isFunction(c) && n[f](o[0])
                    }),
                    t.converters['script json'] = function () {
                        return o || i.error(f + ' was not called'),
                            o[0]
                    },
                    t.dataTypes[0] = 'json',
                    'script'
            }
        }),
        i.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                'text script': function (n) {
                    return i.globalEval(n),
                        n
                }
            }
        }),
        i.ajaxPrefilter('script', function (n) {
            n.cache === t && (n.cache = !1),
                n.crossDomain && (n.type = 'GET', n.global = !1)
        }),
        i.ajaxTransport('script', function (n) {
            if (n.crossDomain) {
                var i,
                    u = r.head || r.getElementsByTagName('head') [0] || r.documentElement;
                return {
                    send: function (f, e) {
                        i = r.createElement('script'),
                            i.async = 'async',
                            n.scriptCharset && (i.charset = n.scriptCharset),
                            i.src = n.url,
                            i.onload = i.onreadystatechange = function (n, r) {
                                (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, 'success'))
                            },
                            u.insertBefore(i, u.firstChild)
                    },
                    abort: function () {
                        i && i.onload(0, 1)
                    }
                }
            }
        }),
        g = n.ActiveXObject ? function () {
            for (var n in a) a[n](0, 1)
        }
            : !1,
        vr = 0,
        i.ajaxSettings.xhr = n.ActiveXObject ? function () {
            return !this.isLocal && vt() || br()
        }
            : vt,
        function (n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && 'withCredentials' in n
            })
        }(i.ajaxSettings.xhr()),
        i.support.ajax && i.ajaxTransport(function (r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function (f, e) {
                    var o = r.xhr(),
                        h,
                        s;
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password)  : o.open(r.type, r.url, r.async), r.xhrFields) for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType),
                        r.crossDomain || f['X-Requested-With'] || (f['X-Requested-With'] = 'XMLHttpRequest');
                    try {
                        for (s in f) o.setRequestHeader(s, f[s])
                    } catch (c) {
                    }
                    o.send(r.hasContent && r.data || null),
                        u = function (n, f) {
                            var s,
                                v,
                                y,
                                c,
                                l;
                            try {
                                if (u && (f || o.readyState === 4)) if (u = t, h && (o.onreadystatechange = i.noop, g && delete a[h]), f) o.readyState !== 4 && o.abort();
                                else {
                                    s = o.status,
                                        y = o.getAllResponseHeaders(),
                                        c = {
                                        },
                                        l = o.responseXML,
                                        l && l.documentElement && (c.xml = l),
                                        c.text = o.responseText;
                                    try {
                                        v = o.statusText
                                    } catch (w) {
                                        v = ''
                                    }
                                    !s && r.isLocal && !r.crossDomain ? s = c.text ? 200 : 404 : s === 1223 && (s = 204)
                                }
                            } catch (p) {
                                f || e( - 1, p)
                            }
                            c && e(s, v, c, y)
                        },
                            !r.async || o.readyState === 4 ? u()  : (h = ++vr, g && (a || (a = {
                    }, i(n).unload(g)), a[h] = u), o.onreadystatechange = u)
                },
                abort: function () {
                    u && u(0, 1)
                }
            }
        }
    });
    var ht = {
        },
        f,
        v,
        ue = /^(?:toggle|show|hide)$/,
        fe = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        nt,
        yr = [
            ['height',
                'marginTop',
                'marginBottom',
                'paddingTop',
                'paddingBottom'],
            [
                'width',
                'marginLeft',
                'marginRight',
                'paddingLeft',
                'paddingRight'
            ],
            [
                'opacity'
            ]
        ],
        tt;
    i.fn.extend({
        show: function (n, t, r) {
            var u,
                e,
                f,
                o;
            if (n || n === 0) return this.animate(h('show', 3), n, t, r);
            for (f = 0, o = this.length; f < o; f++) u = this[f],
                u.style && (e = u.style.display, !i._data(u, 'olddisplay') && e === 'none' && (e = u.style.display = ''), e === '' && i.css(u, 'display') === 'none' && i._data(u, 'olddisplay', lt(u.nodeName)));
            for (f = 0; f < o; f++) u = this[f],
                u.style && (e = u.style.display, (e === '' || e === 'none') && (u.style.display = i._data(u, 'olddisplay') || ''));
            return this
        },
        hide: function (n, t, r) {
            if (n || n === 0) return this.animate(h('hide', 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++) f = this[u],
                f.style && (e = i.css(f, 'display'), e !== 'none' && !i._data(f, 'olddisplay') && i._data(f, 'olddisplay', e));
            for (u = 0; u < o; u++) this[u].style && (this[u].style.display = 'none');
            return this
        },
        _toggle: i.fn.toggle,
        toggle: function (n, t, r) {
            var u = typeof n == 'boolean';
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments)  : n == null || u ? this.each(function () {
                var t = u ? n : i(this).is(':hidden');
                i(this) [t ? 'show' : 'hide']()
            })  : this.animate(h('toggle', 3), n, t, r),
                this
        },
        fadeTo: function (n, t, i, r) {
            return this.filter(':hidden').css('opacity', 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            function e() {
                f.queue === !1 && i._mark(this);
                var u = i.extend({
                    }, f),
                    y = this.nodeType === 1,
                    v = y && i(this).is(':hidden'),
                    e,
                    t,
                    r,
                    o,
                    h,
                    s,
                    c,
                    l,
                    a;
                u.animatedProperties = {
                };
                for (r in n) {
                    if (e = i.camelCase(r), r !== e && (n[e] = n[r], delete n[r]), t = n[e], i.isArray(t) ? (u.animatedProperties[e] = t[1], t = n[e] = t[0])  : u.animatedProperties[e] = u.specialEasing && u.specialEasing[e] || u.easing || 'swing', t === 'hide' && v || t === 'show' && !v) return u.complete.call(this);
                    y && (e === 'height' || e === 'width') && (u.overflow = [
                        this.style.overflow,
                        this.style.overflowX,
                        this.style.overflowY
                    ], i.css(this, 'display') === 'inline' && i.css(this, 'float') === 'none' && (!i.support.inlineBlockNeedsLayout || lt(this.nodeName) === 'inline' ? this.style.display = 'inline-block' : this.style.zoom = 1))
                }
                u.overflow != null && (this.style.overflow = 'hidden');
                for (r in n) o = new i.fx(this, u, r),
                    t = n[r],
                    ue.test(t) ? (a = i._data(this, 'toggle' + r) || (t === 'toggle' ? v ? 'show' : 'hide' : 0), a ? (i._data(this, 'toggle' + r, a === 'show' ? 'hide' : 'show'), o[a]())  : o[t]())  : (h = fe.exec(t), s = o.cur(), h ? (c = parseFloat(h[2]), l = h[3] || (i.cssNumber[r] ? '' : 'px'), l !== 'px' && (i.style(this, r, (c || 1) + l), s = (c || 1) / o.cur() * s, i.style(this, r, s + l)), h[1] && (c = (h[1] === '-=' ? - 1 : 1) * c + s), o.custom(s, c, l))  : o.custom(s, t, ''));
                return !0
            }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [
                !1
            ])  : (n = i.extend({
            }, n), f.queue === !1 ? this.each(e)  : this.queue(f.queue, e))
        },
        stop: function (n, r, u) {
            return typeof n != 'string' && (u = r, r = n, n = t),
                r && n !== !1 && this.queue(n || 'fx', [
            ]),
                this.each(function () {
                    function e(n, t, r) {
                        var f = t[r];
                        i.removeData(n, r, !0),
                            f.stop(u)
                    }
                    var t,
                        o = !1,
                        f = i.timers,
                        r = i._data(this);
                    if (u || i._unmark(!0, this), n == null) for (t in r) r[t] && r[t].stop && t.indexOf('.run') === t.length - 4 && e(this, r, t);
                    else r[t = n + '.run'] && r[t].stop && e(this, r, t);
                    for (t = f.length; t--; ) f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0)  : f[t].saveState(), o = !0, f.splice(t, 1));
                    u && o || i.dequeue(this, n)
                })
        }
    }),
        i.each({
            slideDown: h('show', 1),
            slideUp: h('hide', 1),
            slideToggle: h('toggle', 1),
            fadeIn: {
                opacity: 'show'
            },
            fadeOut: {
                opacity: 'hide'
            },
            fadeToggle: {
                opacity: 'toggle'
            }
        }, function (n, t) {
            i.fn[n] = function (n, i, r) {
                return this.animate(t, n, i, r)
            }
        }),
        i.extend({
            speed: function (n, t, r) {
                var u = n && typeof n == 'object' ? i.extend({
                }, n)  : {
                    complete: r || !r && t || i.isFunction(n) && n,
                    duration: n,
                    easing: r && t || t && !i.isFunction(t) && t
                };
                return u.duration = i.fx.off ? 0 : typeof u.duration == 'number' ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
                    (u.queue == null || u.queue === !0) && (u.queue = 'fx'),
                    u.old = u.complete,
                    u.complete = function (n) {
                        i.isFunction(u.old) && u.old.call(this),
                            u.queue ? i.dequeue(this, u.queue)  : n !== !1 && i._unmark(this)
                    },
                    u
            },
            easing: {
                linear: function (n, t, i, r) {
                    return i + r * n
                },
                swing: function (n, t, i, r) {
                    return ( - Math.cos(n * Math.PI) / 2 + 0.5) * r + i
                }
            },
            timers: [
            ],
            fx: function (n, t, i) {
                this.options = t,
                    this.elem = n,
                    this.prop = i,
                    t.orig = t.orig || {
                    }
            }
        }),
        i.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    (i.fx.step[this.prop] || i.fx.step._default) (this)
            },
            cur: function () {
                if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
                var t,
                    n = i.css(this.elem, this.prop);
                return isNaN(t = parseFloat(n)) ? !n || n === 'auto' ? 0 : n : t
            },
            custom: function (n, r, u) {
                function e(n) {
                    return f.step(n)
                }
                var f = this,
                    o = i.fx;
                this.startTime = tt || at(),
                    this.end = r,
                    this.now = this.start = n,
                    this.pos = this.state = 0,
                    this.unit = u || this.unit || (i.cssNumber[this.prop] ? '' : 'px'),
                    e.queue = this.options.queue,
                    e.elem = this.elem,
                    e.saveState = function () {
                        f.options.hide && i._data(f.elem, 'fxshow' + f.prop) === t && i._data(f.elem, 'fxshow' + f.prop, f.start)
                    },
                    e() && i.timers.push(e) && !nt && (nt = setInterval(o.tick, o.interval))
            },
            show: function () {
                var n = i._data(this.elem, 'fxshow' + this.prop);
                this.options.orig[this.prop] = n || i.style(this.elem, this.prop),
                    this.options.show = !0,
                        n !== t ? this.custom(this.cur(), n)  : this.custom(this.prop === 'width' || this.prop === 'height' ? 1 : 0, this.cur()),
                    i(this.elem).show()
            },
            hide: function () {
                this.options.orig[this.prop] = i._data(this.elem, 'fxshow' + this.prop) || i.style(this.elem, this.prop),
                    this.options.hide = !0,
                    this.custom(this.cur(), 0)
            },
            step: function (n) {
                var r,
                    f,
                    e,
                    o = tt || at(),
                    s = !0,
                    u = this.elem,
                    t = this.options;
                if (n || o >= t.duration + this.startTime) {
                    this.now = this.end,
                        this.pos = this.state = 1,
                        this.update(),
                        t.animatedProperties[this.prop] = !0;
                    for (r in t.animatedProperties) t.animatedProperties[r] !== !0 && (s = !1);
                    if (s) {
                        if (t.overflow == null || i.support.shrinkWrapBlocks || i.each(['',
                            'X',
                            'Y'], function (n, i) {
                            u.style['overflow' + i] = t.overflow[n]
                        }), t.hide && i(u).hide(), t.hide || t.show) for (r in t.animatedProperties) i.style(u, r, t.orig[r]),
                            i.removeData(u, 'fxshow' + r, !0),
                            i.removeData(u, 'toggle' + r, !0);
                        e = t.complete,
                            e && (t.complete = !1, e.call(u))
                    }
                    return !1
                }
                return t.duration == Infinity ? this.now = o : (f = o - this.startTime, this.state = f / t.duration, this.pos = i.easing[t.animatedProperties[this.prop]](this.state, f, 0, 1, t.duration), this.now = this.start + (this.end - this.start) * this.pos),
                    this.update(),
                    !0
            }
        },
        i.extend(i.fx, {
            tick: function () {
                for (var r, n = i.timers, t = 0; t < n.length; t++) r = n[t],
                    r() || n[t] !== r || n.splice(t--, 1);
                n.length || i.fx.stop()
            },
            interval: 13,
            stop: function () {
                clearInterval(nt),
                    nt = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function (n) {
                    i.style(n.elem, 'opacity', n.now)
                },
                _default: function (n) {
                    n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now
                }
            }
        }),
        i.each(['width',
            'height'], function (n, t) {
            i.fx.step[t] = function (n) {
                i.style(n.elem, t, Math.max(0, n.now) + n.unit)
            }
        }),
        i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }),
        pr = /^t(?:able|d|h)$/i,
        ct = /^(?:body|html)$/i,
        i.fn.offset = 'getBoundingClientRect' in r.documentElement ? function (n) {
            var t = this[0],
                r,
                f,
                u;
            if (n) return this.each(function (t) {
                i.offset.setOffset(this, n, t)
            });
            if (!t || !t.ownerDocument) return null;
            if (t === t.ownerDocument.body) return i.offset.bodyOffset(t);
            try {
                r = t.getBoundingClientRect()
            } catch (y) {
            }
            if (f = t.ownerDocument, u = f.documentElement, !r || !i.contains(u, t)) return r ? {
                top: r.top,
                left: r.left
            }
                : {
                top: 0,
                left: 0
            };
            var e = f.body,
                o = it(f),
                s = u.clientTop || e.clientTop || 0,
                h = u.clientLeft || e.clientLeft || 0,
                c = o.pageYOffset || i.support.boxModel && u.scrollTop || e.scrollTop,
                l = o.pageXOffset || i.support.boxModel && u.scrollLeft || e.scrollLeft,
                a = r.top + c - s,
                v = r.left + l - h;
            return {
                top: a,
                left: v
            }
        }
            : function (n) {
            var t = this[0];
            if (n) return this.each(function (t) {
                i.offset.setOffset(this, n, t)
            });
            if (!t || !t.ownerDocument) return null;
            if (t === t.ownerDocument.body) return i.offset.bodyOffset(t);
            for (var r, h = t.offsetParent, a = t, c = t.ownerDocument, l = c.documentElement, e = c.body, s = c.defaultView, o = s ? s.getComputedStyle(t, null)  : t.currentStyle, u = t.offsetTop, f = t.offsetLeft; (t = t.parentNode) && t !== e && t !== l; ) {
                if (i.support.fixedPosition && o.position === 'fixed') break;
                r = s ? s.getComputedStyle(t, null)  : t.currentStyle,
                    u -= t.scrollTop,
                    f -= t.scrollLeft,
                    t === h && (u += t.offsetTop, f += t.offsetLeft, i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !pr.test(t.nodeName)) && (u += parseFloat(r.borderTopWidth) || 0, f += parseFloat(r.borderLeftWidth) || 0), a = h, h = t.offsetParent),
                    i.support.subtractsBorderForOverflowNotVisible && r.overflow !== 'visible' && (u += parseFloat(r.borderTopWidth) || 0, f += parseFloat(r.borderLeftWidth) || 0),
                    o = r
            }
            return (o.position === 'relative' || o.position === 'static') && (u += e.offsetTop, f += e.offsetLeft),
                i.support.fixedPosition && o.position === 'fixed' && (u += Math.max(l.scrollTop, e.scrollTop), f += Math.max(l.scrollLeft, e.scrollLeft)),
            {
                top: u,
                left: f
            }
        },
        i.offset = {
            bodyOffset: function (n) {
                var t = n.offsetTop,
                    r = n.offsetLeft;
                return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, 'marginTop')) || 0, r += parseFloat(i.css(n, 'marginLeft')) || 0),
                {
                    top: t,
                    left: r
                }
            },
            setOffset: function (n, t, r) {
                var f = i.css(n, 'position');
                f === 'static' && (n.style.position = 'relative');
                var e = i(n),
                    o = e.offset(),
                    l = i.css(n, 'top'),
                    a = i.css(n, 'left'),
                    v = (f === 'absolute' || f === 'fixed') && i.inArray('auto', [
                        l,
                        a
                    ]) > - 1,
                    u = {
                    },
                    s = {
                    },
                    h,
                    c;
                v ? (s = e.position(), h = s.top, c = s.left)  : (h = parseFloat(l) || 0, c = parseFloat(a) || 0),
                    i.isFunction(t) && (t = t.call(n, r, o)),
                    t.top != null && (u.top = t.top - o.top + h),
                    t.left != null && (u.left = t.left - o.left + c),
                        'using' in t ? t.using.call(n, u)  : e.css(u)
            }
        },
        i.fn.extend({
            position: function () {
                if (!this[0]) return null;
                var u = this[0],
                    n = this.offsetParent(),
                    t = this.offset(),
                    r = ct.test(n[0].nodeName) ? {
                        top: 0,
                        left: 0
                    }
                        : n.offset();
                return t.top -= parseFloat(i.css(u, 'marginTop')) || 0,
                    t.left -= parseFloat(i.css(u, 'marginLeft')) || 0,
                    r.top += parseFloat(i.css(n[0], 'borderTopWidth')) || 0,
                    r.left += parseFloat(i.css(n[0], 'borderLeftWidth')) || 0,
                {
                    top: t.top - r.top,
                    left: t.left - r.left
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var n = this.offsetParent || r.body; n && !ct.test(n.nodeName) && i.css(n, 'position') === 'static'; ) n = n.offsetParent;
                    return n
                })
            }
        }),
        i.each(['Left',
            'Top'], function (n, r) {
            var u = 'scroll' + r;
            i.fn[u] = function (r) {
                var e,
                    f;
                return r === t ? (e = this[0], !e) ? null : (f = it(e), f ? 'pageXOffset' in f ? f[n ? 'pageYOffset' : 'pageXOffset'] : i.support.boxModel && f.document.documentElement[u] || f.document.body[u] : e[u])  : this.each(function () {
                    f = it(this),
                        f ? f.scrollTo(n ? i(f).scrollLeft()  : r, n ? r : i(f).scrollTop())  : this[u] = r
                })
            }
        }),
        i.each(['Height',
            'Width'], function (n, r) {
            var u = r.toLowerCase();
            i.fn['inner' + r] = function () {
                var n = this[0];
                return n ? n.style ? parseFloat(i.css(n, u, 'padding'))  : this[u]()  : null
            },
                i.fn['outer' + r] = function (n) {
                    var t = this[0];
                    return t ? t.style ? parseFloat(i.css(t, u, n ? 'margin' : 'border'))  : this[u]()  : null
                },
                i.fn[u] = function (n) {
                    var f = this[0],
                        e,
                        o,
                        s,
                        h;
                    return f ? i.isFunction(n) ? this.each(function (t) {
                        var r = i(this);
                        r[u](n.call(this, t, r[u]()))
                    })  : i.isWindow(f) ? (e = f.document.documentElement['client' + r], o = f.document.body, f.document.compatMode === 'CSS1Compat' && e || o && o['client' + r] || e)  : f.nodeType === 9 ? Math.max(f.documentElement['client' + r], f.body['scroll' + r], f.documentElement['scroll' + r], f.body['offset' + r], f.documentElement['offset' + r])  : n === t ? (s = i.css(f, u), h = parseFloat(s), i.isNumeric(h) ? h : s)  : this.css(u, typeof n == 'string' ? n : n + 'px')  : n == null ? null : this
                }
        }),
        n.jQuery = n.$ = i,
        typeof define == 'function' && define.amd && define.amd.jQuery && define('jquery', [
    ], function () {
        return i
    })
}) (window), function (n) {
    function r(t) {
        var i = t || window.event,
            e = [
            ].slice.call(arguments, 1),
            r = 0,
            f = 0,
            u = 0;
        return t = n.event.fix(i),
            t.type = 'mousewheel',
            i.wheelDelta && (r = i.wheelDelta / 120),
            i.detail && (r = - i.detail / 3),
            u = r,
            i.axis !== undefined && i.axis === i.HORIZONTAL_AXIS && (u = 0, f = - 1 * r),
            i.wheelDeltaY !== undefined && (u = i.wheelDeltaY / 120),
            i.wheelDeltaX !== undefined && (f = i.wheelDeltaX / - 120),
            e.unshift(t, r, f, u),
            (n.event.dispatch || n.event.handle).apply(this, e)
    }
    var t = [
            'DOMMouseScroll',
            'mousewheel'
        ],
        i;
    if (n.event.fixHooks) for (i = t.length; i; ) n.event.fixHooks[t[--i]] = n.event.mouseHooks;
    n.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var n = t.length; n; ) this.addEventListener(t[--n], r, !1);
            else this.onmousewheel = r
        },
        teardown: function () {
            if (this.removeEventListener) for (var n = t.length; n; ) this.removeEventListener(t[--n], r, !1);
            else this.onmousewheel = null
        }
    },
        n.fn.extend({
            mousewheel: function (n) {
                return n ? this.bind('mousewheel', n)  : this.trigger('mousewheel')
            },
            unmousewheel: function (n) {
                return this.unbind('mousewheel', n)
            }
        })
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function (n, t, i, r, u) {
        return jQuery.easing[jQuery.easing.def](n, t, i, r, u)
    },
    easeInQuad: function (n, t, i, r, u) {
        return r * (t /= u) * t + i
    },
    easeOutQuad: function (n, t, i, r, u) {
        return - r * (t /= u) * (t - 2) + i
    },
    easeInOutQuad: function (n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t + i : - r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function (n, t, i, r, u) {
        return r * (t /= u) * t * t + i
    },
    easeOutCubic: function (n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t + 1) + i
    },
    easeInOutCubic: function (n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function (n, t, i, r, u) {
        return r * (t /= u) * t * t * t + i
    },
    easeOutQuart: function (n, t, i, r, u) {
        return - r * ((t = t / u - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function (n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : - r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function (n, t, i, r, u) {
        return r * (t /= u) * t * t * t * t + i
    },
    easeOutQuint: function (n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function (n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function (n, t, i, r, u) {
        return - r * Math.cos(t / u * (Math.PI / 2)) + r + i
    },
    easeOutSine: function (n, t, i, r, u) {
        return r * Math.sin(t / u * (Math.PI / 2)) + i
    },
    easeInOutSine: function (n, t, i, r, u) {
        return - r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
    },
    easeInExpo: function (n, t, i, r, u) {
        return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
    },
    easeOutExpo: function (n, t, i, r, u) {
        return t == u ? i + r : r * ( - Math.pow(2, - 10 * t / u) + 1) + i
    },
    easeInOutExpo: function (n, t, i, r, u) {
        return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * ( - Math.pow(2, - 10 * --t) + 2) + i
    },
    easeInCirc: function (n, t, i, r, u) {
        return - r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
    },
    easeOutCirc: function (n, t, i, r, u) {
        return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
    },
    easeInOutCirc: function (n, t, i, r, u) {
        return (t /= u / 2) < 1 ? - r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function (n, t, i, r, u) {
        var f = 1.70158,
            e = 0,
            o = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (e || (e = u * 0.3), o < Math.abs(r) ? (o = r, f = e / 4)  : f = e / (2 * Math.PI) * Math.asin(r / o), - (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - f) * 2 * Math.PI / e)) + i)
    },
    easeOutElastic: function (n, t, i, r, u) {
        var f = 1.70158,
            e = 0,
            o = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (e || (e = u * 0.3), o < Math.abs(r) ? (o = r, f = e / 4)  : f = e / (2 * Math.PI) * Math.asin(r / o), o * Math.pow(2, - 10 * t) * Math.sin((t * u - f) * 2 * Math.PI / e) + r + i)
    },
    easeInOutElastic: function (n, t, i, r, u) {
        var f = 1.70158,
            e = 0,
            o = r;
        return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (e || (e = u * 0.3 * 1.5), o < Math.abs(r) ? (o = r, f = e / 4)  : f = e / (2 * Math.PI) * Math.asin(r / o), t < 1) ? - 0.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - f) * 2 * Math.PI / e) + i : o * Math.pow(2, - 10 * (t -= 1)) * Math.sin((t * u - f) * 2 * Math.PI / e) * 0.5 + r + i
    },
    easeInBack: function (n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
            r * (t /= u) * t * ((f + 1) * t - f) + i
    },
    easeOutBack: function (n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
            r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i
    },
    easeInOutBack: function (n, t, i, r, u, f) {
        return (f == undefined && (f = 1.70158), (t /= u / 2) < 1) ? r / 2 * t * t * (((f *= 1.525) + 1) * t - f) + i : r / 2 * ((t -= 2) * t * (((f *= 1.525) + 1) * t + f) + 2) + i
    },
    easeInBounce: function (n, t, i, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i
    },
    easeOutBounce: function (n, t, i, r, u) {
        return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + i
    },
    easeInOutBounce: function (n, t, i, r, u) {
        return t < u / 2 ? jQuery.easing.easeInBounce(n, t * 2, 0, r, u) * 0.5 + i : jQuery.easing.easeOutBounce(n, t * 2 - u, 0, r, u) * 0.5 + r * 0.5 + i
    }
}), function (n) {
    n.fn.touchwipe = function (t) {
        var i = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function () {
            },
            wipeRight: function () {
            },
            wipeUp: function () {
            },
            wipeDown: function () {
            },
            preventDefaultEvents: !0
        };
        return t && n.extend(i, t),
            this.each(function () {
                function u() {
                    this.removeEventListener('touchmove', f),
                        n = null,
                        t = !1
                }
                function f(f) {
                    if (i.preventDefaultEvents && f.preventDefault(), t) {
                        var s = f.touches[0].pageX,
                            h = f.touches[0].pageY,
                            e = n - s,
                            o = r - h;
                        Math.abs(e) >= i.min_move_x ? (u(), e > 0 ? i.wipeLeft()  : i.wipeRight())  : Math.abs(o) >= i.min_move_y && (u(), o > 0 ? i.wipeDown()  : i.wipeUp())
                    }
                }
                function e(i) {
                    i.touches.length == 1 && (n = i.touches[0].pageX, r = i.touches[0].pageY, t = !0, this.addEventListener('touchmove', f, !1))
                }
                var n,
                    r,
                    t = !1;
                'ontouchstart' in document.documentElement && this.addEventListener('touchstart', e, !1)
            }),
            this
    }
}(jQuery), function (n) {
    n.path = {
    };
    var t = {
        rotate: function (n, t) {
            var i = t * 3.141592654 / 180,
                r = Math.cos(i),
                u = Math.sin(i);
            return [r * n[0] - u * n[1],
                    u * n[0] + r * n[1]]
        },
        scale: function (n, t) {
            return [t * n[0],
                    t * n[1]]
        },
        add: function (n, t) {
            return [n[0] + t[0],
                    n[1] + t[1]]
        },
        minus: function (n, t) {
            return [n[0] - t[0],
                    n[1] - t[1]]
        }
    };
    n.path.bezier = function (i) {
        var f,
            r,
            e,
            u;
        i.start = n.extend({
            angle: 0,
            length: 0.3333
        }, i.start),
            i.end = n.extend({
                angle: 0,
                length: 0.3333
            }, i.end),
            this.p1 = [
                i.start.x,
                i.start.y
            ],
            this.p4 = [
                i.end.x,
                i.end.y
            ],
            f = t.minus(this.p4, this.p1),
            r = t.scale(f, i.start.length),
            r = t.rotate(r, i.start.angle),
            this.p2 = t.add(this.p1, r),
            e = t.scale(f, - 1),
            u = t.scale(e, i.end.length),
            u = t.rotate(u, i.end.angle),
            this.p3 = t.add(this.p4, u),
            this.f1 = function (n) {
                return n * n * n
            },
            this.f2 = function (n) {
                return 3 * n * n * (1 - n)
            },
            this.f3 = function (n) {
                return 3 * n * (1 - n) * (1 - n)
            },
            this.f4 = function (n) {
                return (1 - n) * (1 - n) * (1 - n)
            },
            this.css = function (n) {
                var t = this.f1(n),
                    i = this.f2(n),
                    r = this.f3(n),
                    u = this.f4(n),
                    f = this.p1[0] * t + this.p2[0] * i + this.p3[0] * r + this.p4[0] * u,
                    e = this.p1[1] * t + this.p2[1] * i + this.p3[1] * r + this.p4[1] * u;
                return {
                    top: e + 'px',
                    left: f + 'px'
                }
            }
    },
        n.path.arc = function (n) {
            for (var t in n) this[t] = n[t];
            for (this.dir = this.dir || 1; this.start > this.end && this.dir > 0; ) this.start -= 360;
            while (this.start < this.end && this.dir < 0) this.start += 360;
            this.css = function (n) {
                var t = this.start * n + this.end * (1 - n),
                    i,
                    r;
                return t = t * 3.1415927 / 180,
                    i = Math.sin(t) * this.radius + this.center[0],
                    r = Math.cos(t) * this.radius + this.center[1],
                {
                    top: r + 'px',
                    left: i + 'px'
                }
            }
        },
        n.fx.step.path = function (n) {
            var i = n.end.css(1 - n.pos),
                t;
            for (t in i) n.elem.style[t] = i[t]
        }
}(jQuery), function ($, n) {
    function h(n) {
        return typeof n == 'string'
    }
    function e(n) {
        var t = w.call(arguments, 1);
        return function () {
            return n.apply(this, t.concat(w.call(arguments)))
        }
    }
    function st(n) {
        return n.replace(/^[^#]*#?(.*)$/, '$1')
    }
    function ht(n) {
        return n.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, '$1')
    }
    function ut(e, s, c, a, v) {
        var b,
            y,
            w,
            k,
            d;
        return a !== t ? (w = c.match(e ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/), d = w[3] || '', v === 2 && h(a) ? y = a.replace(e ? it : tt, '')  : (k = i(w[2]), a = h(a) ? i[e ? r : u](a)  : a, y = v === 2 ? a : v === 1 ? $.extend({
        }, a, k)  : $.extend({
        }, k, a), y = o(y), e && (y = y.replace(rt, l))), b = w[1] + (e ? '#' : y || !w[1] ? '?' : '') + y + d)  : b = s(c !== t ? c : n[p][f]),
            b
    }
    function ft(n, f, e) {
        return f === t || typeof f == 'boolean' ? (e = f, f = o[n ? r : u]())  : f = h(f) ? f.replace(n ? it : tt, '')  : f,
            i(f, e)
    }
    function et(n, i, r, u) {
        return h(r) || typeof r == 'object' || (u = r, r = i, i = t),
            this.each(function () {
                var f = $(this),
                    t = i || d() [(this.nodeName || '').toLowerCase()] || '',
                    e = t && f.attr(t) || '';
                f.attr(t, o[n](e, r, u))
            })
    }
    var t,
        w = Array.prototype.slice,
        l = decodeURIComponent,
        o = $.param,
        s,
        i,
        a,
        v = $.bbq = $.bbq || {
        },
        b,
        k,
        d,
        g = $.event.special,
        nt = 'hashchange',
        u = 'querystring',
        r = 'fragment',
        y = 'elemUrlAttr',
        p = 'location',
        f = 'href',
        c = 'src',
        tt = /^.*\?|#.*$/g,
        it = /^.*\#/,
        rt,
        ot = {
        };
    o[u] = e(ut, 0, ht),
        o[r] = s = e(ut, 1, st),
        s.noEscape = function (n) {
            n = n || '';
            var t = $.map(n.split(''), encodeURIComponent);
            rt = new RegExp(t.join('|'), 'g')
        },
        s.noEscape(',/'),
        $.deparam = i = function (n, i) {
            var r = {
                },
                u = {
                    'true': !0,
                    'false': !1,
                    'null': null
                };
            return $.each(n.replace(/\+/g, ' ').split('&'), function (n, f) {
                var v = f.split('='),
                    s = l(v[0]),
                    e,
                    a = r,
                    c = 0,
                    o = s.split(']['),
                    h = o.length - 1;
                if (/\[/.test(o[0]) && /\]$/.test(o[h]) ? (o[h] = o[h].replace(/\]$/, ''), o = o.shift().split('[').concat(o), h = o.length - 1)  : h = 0, v.length === 2) if (e = l(v[1]), i && (e = e && !isNaN(e) ? + e : e === 'undefined' ? t : u[e] !== t ? u[e] : e), h) for (; c <= h; c++) s = o[c] === '' ? a.length : o[c],
                    a = a[s] = c < h ? a[s] || (o[c + 1] && isNaN(o[c + 1]) ? {
                    }
                        : [
                    ])  : e;
                else $.isArray(r[s]) ? r[s].push(e)  : r[s] = r[s] !== t ? [
                        r[s],
                        e
                    ] : e;
                else s && (r[s] = i ? t : '')
            }),
                r
        },
        i[u] = e(ft, 0),
        i[r] = a = e(ft, 1),
        $[y] || ($[y] = function (n) {
        return $.extend(ot, n)
    }) ({
        a: f,
        base: f,
        iframe: c,
        img: c,
        input: c,
        form: 'action',
        link: f,
        script: c
    }),
        d = $[y],
        $.fn[u] = e(et, u),
        $.fn[r] = e(et, r),
        v.pushState = b = function (i, r) {
            h(i) && /^#/.test(i) && r === t && (r = 2);
            var u = i !== t,
                e = s(n[p][f], u ? i : {
                }, u ? r : 2);
            n[p][f] = e + (/#/.test(e) ? '' : '#')
        },
        v.getState = k = function (n, i) {
            return n === t || typeof n == 'boolean' ? a(n)  : a(i) [n]
        },
        v.removeState = function (n) {
            var i = {
            };
            n !== t && (i = k(), $.each($.isArray(n) ? n : arguments, function (n, t) {
                delete i[t]
            })),
                b(i, 2)
        },
        g[nt] = $.extend(g[nt], {
            add: function (n) {
                function f(n) {
                    var f = n[r] = s();
                    n.getState = function (n, r) {
                        return n === t || typeof n == 'boolean' ? i(f, n)  : i(f, r) [n]
                    },
                        u.apply(this, arguments)
                }
                var u;
                if ($.isFunction(n)) return u = n,
                    f;
                u = n.handler,
                    n.handler = f
            }
        })
}(jQuery, this), function ($, n, t) {
    function f(t) {
        return t = t || n[r][u],
            t.replace(/^[^#]*#?(.*)$/, '$1')
    }
    var e,
        o = $.event.special,
        r = 'location',
        i = 'hashchange',
        u = 'href',
        l = $.browser,
        s = document.documentMode,
        h = l.msie && (s === t || s < 8),
        c = 'on' + i in n && !h;
    $[i + 'Delay'] = 100,
        o[i] = $.extend(o[i], {
            setup: function () {
                if (c) return !1;
                $(e.start)
            },
            teardown: function () {
                if (c) return !1;
                $(e.stop)
            }
        }),
        e = function () {
            function l() {
                e = c = function (n) {
                    return n
                },
                    h && (o = $('<iframe src="javascript:0"/>').hide().insertAfter('body') [0].contentWindow, c = function () {
                    return f(o.document[r][u])
                }, e = function (n, t) {
                    if (n !== t) {
                        var i = o.document;
                        i.open().close(),
                            i[r].hash = '#' + n
                    }
                }, e(f()))
            }
            var s = {
                },
                t,
                o,
                e,
                c;
            return s.start = function () {
                if (!t) {
                    var o = f();
                    e || l(),
                        function s() {
                            var l = f(),
                                h = c(o);
                            l !== o ? (e(o = l, h), $(n).trigger(i))  : h !== o && (n[r][u] = n[r][u].replace(/#.*/, '') + '#' + h),
                                t = setTimeout(s, $[i + 'Delay'])
                        }()
                }
            },
                s.stop = function () {
                    o || (t && clearTimeout(t), t = 0)
                },
                s
        }()
}(jQuery, this), BrowserDetect = {
}, BrowserDetect.init = function () {
    BrowserDetect.MOBILE = BrowserDetect.checkMobile(),
        BrowserDetect.TABLET = BrowserDetect.checkTablet(),
        BrowserDetect.BROWSER_NAME = this.searchString(this.dataBrowser) || 'An unknown browser',
        BrowserDetect.BROWSER_VERSION = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'an unknown version',
        BrowserDetect.OS = this.searchString(this.dataOS) || 'an unknown OS',
            BrowserDetect.BROWSER_NAME == 'Firefox' && BrowserDetect.BROWSER_VERSION >= 10 ? BrowserDetect.TRANSLATE3D_SUPPORT = !0 : BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION >= 10 && (BrowserDetect.TRANSLATE3D_SUPPORT = !0)
}, BrowserDetect.searchString = function (n) {
    for (var i, r, t = 0; t < n.length; t++) if (i = n[t].string, r = n[t].prop, BrowserDetect.BROWSER_VERSIONSearchString = n[t].versionSearch || n[t].identity, i) {
        if (i.indexOf(n[t].subString) != - 1) return n[t].identity
    } else if (r) return n[t].identity
}, BrowserDetect.searchVersion = function (n) {
    var t = n.indexOf(BrowserDetect.BROWSER_VERSIONSearchString);
    if (t != - 1) return parseFloat(n.substring(t + BrowserDetect.BROWSER_VERSIONSearchString.length + 1))
}, BrowserDetect.getOlderSafariVersion = function (n) {
    return n < 100 ? 1 : n < 125.2 ? 1.1 : n < 312.1 ? 1.2 : n < 412 ? 1.3 : n < 523.1 ? 2 : n <= 523.12 ? 3 : void 0
}, BrowserDetect.dataBrowser = [
    {
        string: navigator.userAgent,
        subString: 'Chrome',
        identity: 'Chrome'
    },
    {
        string: navigator.userAgent,
        subString: 'OmniWeb',
        versionSearch: 'OmniWeb/',
        identity: 'OmniWeb'
    },
    {
        string: navigator.vendor,
        subString: 'Apple',
        identity: 'Safari',
        versionSearch: 'Version'
    },
    {
        prop: window.opera,
        identity: 'Opera'
    },
    {
        string: navigator.vendor,
        subString: 'iCab',
        identity: 'iCab'
    },
    {
        string: navigator.vendor,
        subString: 'KDE',
        identity: 'Konqueror'
    },
    {
        string: navigator.userAgent,
        subString: 'Firefox',
        identity: 'Firefox'
    },
    {
        string: navigator.vendor,
        subString: 'Camino',
        identity: 'Camino'
    },
    {
        string: navigator.userAgent,
        subString: 'Netscape',
        identity: 'Netscape'
    },
    {
        string: navigator.userAgent,
        subString: 'MSIE',
        identity: 'Explorer',
        versionSearch: 'MSIE'
    },
    {
        string: navigator.userAgent,
        subString: 'Gecko',
        identity: 'Mozilla',
        versionSearch: 'rv'
    },
    {
        string: navigator.userAgent,
        subString: 'Mozilla',
        identity: 'Netscape',
        versionSearch: 'Mozilla'
    }
], BrowserDetect.dataOS = [
    {
        string: navigator.platform,
        subString: 'Win',
        identity: 'Windows'
    },
    {
        string: navigator.platform,
        subString: 'Mac',
        identity: 'Mac'
    },
    {
        string: navigator.userAgent,
        subString: 'iPhone',
        identity: 'iPhone/iPod'
    },
    {
        string: navigator.userAgent,
        subString: 'iPad',
        identity: 'iPad'
    },
    {
        string: navigator.userAgent,
        subString: 'Android',
        identity: 'Android'
    },
    {
        string: navigator.userAgent,
        subString: 'Windows CE',
        identity: 'Windows CE'
    },
    {
        string: navigator.userAgent,
        subString: 'Palm',
        identity: 'Palm'
    },
    {
        string: navigator.userAgent,
        subString: 'Blackberry',
        identity: 'Blackberry'
    },
    {
        string: navigator.platform,
        subString: 'Linux',
        identity: 'Linux'
    }
], BrowserDetect.checkMobile = function () {
    var n = /iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    return n == !0 && (BrowserDetect.TABLET = !1),
            n === !0 ? !0 : !1
}, BrowserDetect.checkTablet = function () {
    var n = /ipad|sch-i800|playbook|xoom|tablet|gt-p1000|gt-p7510|sgh-t849|nexus 7|nexus 10|shw-m180s|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()),
        r = /android/i.test(navigator.userAgent.toLowerCase()),
        t,
        i;
    return (r === !0 || n === !0) && (t = screen.height, i = screen.width, t > i && (i = screen.height, t = screen.width), t >= 736 && i >= 1024 ? n = !0 : (BrowserDetect.MOBILE = !0, n = !1)),
        n == !0 && (BrowserDetect.MOBILE = !1),
            n === !0 ? !0 : !1
}, BrowserDetect.BROWSER_NAME = null, BrowserDetect.BROWSER_VERSION = null, BrowserDetect.OS = null, BrowserDetect.MOBILE = !1, BrowserDetect.TABLET = !1, BrowserDetect.TRANSLATE3D_SUPPORT = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix, BrowserDetect.init(), Event.RESIZE = 'resize', Event.ORIENTATIONCHANGE = 'orientationchange', Event.LOAD = 'load', Event.SCROLL = 'scroll', Event.SELECT = 'select', Event.SUBMIT = 'submit', Event.HASHCHANGE = 'hashchange', Event.BLUR = 'blur', Event.CHANGE = 'change', Event.ABORT = 'abort', Event.UNLOAD = 'unload', Event.BEFOREUNLOAD = 'beforeunload', Event.LOAD = 'load', Event.ERROR = 'error', Event.CONTEXTMENU = 'contextmenu', Event.COPY = 'copy', Event.PASTE = 'paste', Event.READY_STATE_CHANGE = 'readystatechange', Event.RESET = 'reset', MouseEvent.CLICK = 'click', MouseEvent.MOUSE_DOWN = 'mousedown', MouseEvent.MOUSE_MOVE = 'mousemove', MouseEvent.MOUSE_UP = 'mouseup', MouseEvent.RIGHT_CLICK = 'rightclick', MouseEvent.MOUSE_OVER = 'mouseover', MouseEvent.MOUSE_OUT = 'mouseout', MouseEvent.DOUBLE_CLICK = 'dblclick', MouseEvent.FOCUS = 'focus', MouseEvent.MOUSE_ENTER = 'mouseenter', MouseEvent.MOUSE_LEAVE = 'mouseleave', MouseEvent.ROLL_OVER = 'mouseenter', MouseEvent.ROLL_OUT = 'mouseleave', MouseEvent.DRAG_END = 'dragend', MouseEvent.DRAG_ENTER = 'dragenter', MouseEvent.DRAG_LEAVE = 'dragleave', MouseEvent.DRAG_OVER = 'dragover', MouseEvent.DRAG_START = 'dragstart', MouseEvent.DROP = 'drop', MouseEvent.MOUSE_WHEEL = 'mousewheel', BrowserDetect.BROWSER_NAME == 'Firefox' && (MouseEvent.MOUSE_WHEEL = 'DOMMouseScroll'), KeyboardEvent.KEY_DOWN = 'keydown', KeyboardEvent.KEY_UP = 'keyup', KeyboardEvent.KEY_PRESS = 'keypress', TouchEvent.TOUCH_START = 'touchstart', TouchEvent.TOUCH_MOVE = 'touchmove', TouchEvent.TOUCH_END = 'touchend', TouchEvent.TOUCH_CANCEL = 'touchcancel', BrowserDetect.TABLET == !0 || BrowserDetect.MOBILE == !0 ? (MouseAndTouchEvent.MOUSE_DOWN = TouchEvent.TOUCH_START, MouseAndTouchEvent.MOUSE_MOVE = TouchEvent.TOUCH_MOVE, MouseAndTouchEvent.MOUSE_UP = TouchEvent.TOUCH_END, MouseAndTouchEvent.RESIZE = Event.ORIENTATIONCHANGE)  : (MouseAndTouchEvent.MOUSE_DOWN = MouseEvent.MOUSE_DOWN, MouseAndTouchEvent.MOUSE_MOVE = MouseEvent.MOUSE_MOVE, MouseAndTouchEvent.MOUSE_UP = MouseEvent.MOUSE_UP, MouseAndTouchEvent.RESIZE = Event.RESIZE), MessageEvent.MESSAGE = 'message', MediaEvent.ABORT = 'abort', MediaEvent.CANPLAY = 'canplay', MediaEvent.CAN_PLAY_THROUGH = 'canplaythrough', MediaEvent.DURATION_CHANGE = 'durationchange', MediaEvent.EMPTIED = 'emptied', MediaEvent.ENDED = 'ended', MediaEvent.ERROR = 'error', MediaEvent.LOADED_DATA = 'loadeddata', MediaEvent.LOADED_METADATA = 'loadedmetadata', MediaEvent.LOAD_START = 'loadstart', MediaEvent.PAUSE = 'pause', MediaEvent.PLAY = 'play', MediaEvent.PLAYING = 'playing', MediaEvent.PROGRESS = 'progress', MediaEvent.RATE_CHANGE = 'ratechange', MediaEvent.SEEKED = 'seeked', MediaEvent.SEEKING = 'seeking', MediaEvent.SUSPEND = 'suspend', MediaEvent.TIME_UPDATE = 'timeupdate', MediaEvent.VOLUME_CHANGE = 'volumechange', MediaEvent.WAITING = 'waiting', Key.SPACEBAR = 32, Key.BACKSPACE = 8, Key.TAB = 9, Key.ENTER = 13, Key.SHIFT = 16, Key.CTRL = 17, Key.ALT = 18, Key.PAUSE = 19, Key.CAPSLOCK = 20, Key.ESCAPE = 27, Key.PAGEUP = 33, Key.PAGEDOWN = 34, Key.END = 35, Key.HOME = 36, Key.LEFT = 37, Key.UP = 38, Key.RIGHT = 39, Key.DOWN = 40, Key.INSERT = 45, Key.DELETE = 46, Key.QUESTIONMARK = 191, Key.PASTE = 91, SmartObjectRenderer = {
}, SmartObjectRenderer.objectsToMove = [
], SmartObjectRenderer.init = function () {
    TweenMax.ticker.addEventListener('tick', SmartObjectRenderer.render)
}, SmartObjectRenderer.render = function () {
    for (var i = SmartObjectRenderer.objectsToMove.length, t, n = 0; n < i; n++) t = SmartObjectRenderer.objectsToMove[n],
        SmartObject.update(t),
        t.___isSetToMove = !1;
    SmartObjectRenderer.objectsToMove = [
    ]
}, SmartObject.convert = function (n, t) {
    function r() {
        SmartObject.updateAllDelayed(n)
    }
    function i(n, t, i) {
        SmartObject.extend(n, t, r),
            n[t] = i
    }
    return n._setter = [
    ],
        n.___compensateX = 0,
        n.___compensateY = 0,
        n.___setInitialValues = !0,
        n.___isSmartObject = !0,
        n.___timeoutRunning = !1,
        n.___firstRun = !0,
        n.___hasHadAdvancedStyle = !1,
        n.___isSetToMove = !1,
        n.___useRounded = !0,
        n._transformOriginX = 50,
        n._transformOriginY = 50,
        n._getWidth = function () {
            var t = 0,
                i;
            return n.parentNode == null ? (document.body.appendChild(n), t = n.offsetWidth, document.body.removeChild(n))  : n.offsetWidth == 0 ? (i = n.parentNode, document.body.appendChild(n), t = n.offsetWidth, i.appendChild(n))  : t = n.offsetWidth,
                t
        },
        n._getHeight = function () {
            var t = 0,
                i;
            return n.parentNode == null ? (document.body.appendChild(n), t = n.offsetHeight, document.body.removeChild(n))  : n.offsetHeight == 0 ? (i = n.parentNode, document.body.appendChild(n), t = n.offsetHeight, i.appendChild(n))  : t = n.offsetHeight,
                t
        },
        BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 7 && n.attachEvent('onpropertychange', r),
        i(n, '_x', t._x),
        i(n, '_y', t._y),
        i(n, '_z', t._z),
        i(n, '_scaleX', t._scaleX),
        i(n, '_scaleY', t._scaleY),
        i(n, '_opacity', t._opacity),
        i(n, '_rotationX', t._rotationX),
        i(n, '_rotationY', t._rotationY),
        i(n, '_rotationZ', t._rotationZ),
        i(n, '_rotation', t._rotation),
        n.style.webkitBackfaceVisibility = n.style.msBackfaceVisibility = n.style.mozBackfaceVisibility = n.style.oBackfaceVisibility = n.style.backfaceVisibility = 'hidden',
        n.style.webkitTransformStyle = n.style.msTransformStyle = n.style.mozTransformStyle = n.style.oTransformStyle = n.style.transformStyle = 'flat',
        n.___firstRun = !1,
        SmartObject.update(n),
        n
}, SmartObject.extend = function (n, t, i) {
    BrowserDetect.BROWSER_NAME == 'Explorer' ? BrowserDetect.BROWSER_VERSION >= 8 ? Object.defineProperty(n, t, {
        get: function () {
            return t
        },
        set: function (r) {
            n.___firstRun == !1 && t != '_x' && t != '_y' && (n.___hasHadAdvancedStyle = !0),
                t = r,
                i(r)
        }
    })  : n._setter.push(t)  : (n.__defineGetter__(t, function () {
        return t
    }), n.__defineSetter__(t, function (n) {
        t = n,
            i(n)
    }))
}, SmartObject.updateAllDelayed = function (n) {
    SmartObject.updateAllCheck(n)
}, SmartObject.updateAllCheck = function (n) {
    n.___timeoutRunning = !1,
        SmartObject.update(n)
}, SmartObject.update = function (n) {
    var s,
        i,
        u,
        f,
        h,
        r,
        v,
        c,
        l,
        e,
        y,
        o,
        p,
        a,
        t;
    if (n.___firstRun == !1) if (s = !1, BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 && (s = !0), s == !1) u = n._x,
        f = n._y,
        n.___useRounded == !0 && (u = Math.round(n._x), f = Math.round(n._y)),
            BrowserDetect.TRANSLATE3D_SUPPORT == !0 ? (i = 'translate3d(' + u + 'px, ' + f + 'px, ' + n._z + 'px)', n._rotationX != 0 && (i += ' rotateX(' + n._rotationX + 'deg)'), n._rotationY != 0 && (i += ' rotateY(' + n._rotationY + 'deg)'), n._rotationZ != 0 && (i += ' rotateZ(' + n._rotationZ + 'deg)'))  : i = 'translate(' + u + 'px, ' + f + 'px)',
        n._rotation != 0 && (i += ' rotate(' + n._rotation + 'deg)'),
        (n._scaleX != 1 || n._scaleY != 1) && (i += ' scale(' + n._scaleX + ', ' + n._scaleY + ')'),
        n.style.opacity = n._opacity != 1 ? n._opacity : null,
        (n._transformOriginX != 50 || n._transformOriginY != 50) && (n.style.msTransformOrigin = n.style.MozTransformOrigin = n.style.WebkitTransformOrigin = n.style.OTransformOrigin = n.style.transformOrigin = n._transformOriginX + '% ' + n._transformOriginY + '%'),
        n.style.msTransform = n.style.mozTransform = n.style.webkitTransform = n.style.oTransform = n.style.transform = i;
    else if ((n._rotation != 0 || n._scaleX != 1 || n._scaleY != 1 || n._opacity != 1) && (n.___hasHadAdvancedStyle = !0), n.___hasHadAdvancedStyle == !0) {
        h = !1,
            t = null,
                n.parentNode == null ? (r = document.createElement('div'), r.appendChild(n), document.body.appendChild(r), h = !0)  : t = n.parentNode,
            v = n.style.filter,
            n.style.filter = '',
            c = n.offsetWidth,
            l = n.offsetHeight,
            n.style.filter = v,
            n.parentNode.removeChild(n),
            e = null;
        function w(n, t) {
            var i = n.e(1, 1) * t._scaleX,
                r = n.e(1, 2) * t._scaleY,
                u = n.e(2, 1) * t._scaleX,
                f = n.e(2, 2) * t._scaleY;
            return e = Matrix.create([[i,
                r,
                0],
                [
                    u,
                    f,
                    0
                ],
                [
                    0,
                    0,
                    1
                ]]),
                'M11=' + i + ', M12=' + r + ', M21=' + u + ', M22=' + f
        }
        y = ' progid:DXImageTransform.Microsoft.Alpha(opacity=' + Math.round(n._opacity * 100) + ')',
            o = '',
            (n._rotation != 0 || n._scaleX != 1 || n._scaleY != 1) && (p = w(Matrix.Rotation(FixIE.degreesToRadians(n._rotation)), n), o = 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', ' + p + ', filterType=\'nearest neighbor\')'),
            a = o + y,
            n.style.background == null && (n.style.background = 'transparent'),
            n.style.MsFilter = a,
            n.style.filter = a,
            n.style.zoom = '1',
            o != '' && (FixIE.transformOrigin(n, e, c, l), FixIE.fixBoundaryBug(n, e, c, l)),
            n.style.left = n._x + n.___compensateX + 'px',
            n.style.top = n._y + n.___compensateY + 'px',
            t != null && (t.appendChild(n), h == !0 && (r.parentNode.removeChild(r), r = null)),
            n._rotation == 0 && n._scaleX == 1 && n._scaleY == 1 && n._opacity == 1 && (n.___compensateX = 0, n.___compensateY = 0, n.___hasHadAdvancedStyle = !1)
    } else t = null,
        n.parentNode != null && (t = n.parentNode, n.parentNode.removeChild(n)),
        n.style.left = n._x + n.___compensateX + 'px',
        n.style.top = n._y + n.___compensateY + 'px',
        t != null && t.appendChild(n)
}, (window._gsQueue || (window._gsQueue = [
])).push(function () {
        window._gsDefine('TweenMax', [
            'core.Animation',
            'core.SimpleTimeline',
            'TweenLite'
        ], function (n, t, i) {
            var r = function (n, t, r) {
                    i.call(this, n, t, r),
                        this._cycle = 0,
                        this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._dirty = !0
                },
                h = function (n) {
                    return n.jquery || 'function' == typeof n.each && n[0] && n[0].nodeType && n[0].style
                },
                c = function (n) {
                    var t = [
                    ];
                    return n.each(function () {
                        t.push(this)
                    }),
                        t
                },
                u = r.prototype = i.to({
                }, 0.1, {
                }),
                f = [
                ],
                e,
                o,
                s;
            return r.version = '1.9.3',
                u.constructor = r,
                u.kill()._gc = !1,
                r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
                r.getTweensOf = i.getTweensOf,
                r.ticker = i.ticker,
                u.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        i.prototype.invalidate.call(this)
                },
                u.updateTo = function (n, t) {
                    var u,
                        s = this.ratio,
                        f,
                        e,
                        o,
                        r;
                    t && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1)  : this._timeline.insert(this, this._startTime - this._delay));
                    for (u in n) this.vars[u] = n[u];
                    if (this._initted) if (t) this._initted = !1;
                    else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent('_onDisable', this), this._time / this._duration > 0.998) f = this._time,
                        this.render(0, !0, !1),
                        this._initted = !1,
                        this.render(f, !0, !1);
                    else if (this._time > 0) for (this._initted = !1, this._init(), o = 1 / (1 - s), r = this._firstPT; r; ) e = r.s + r.c,
                        r.c *= o,
                        r.s = e - r.c,
                        r = r._next;
                    return this
                },
                u.render = function (n, t, i) {
                    var s,
                        e,
                        u,
                        c,
                        r,
                        o,
                        h,
                        a = this._dirty ? this.totalDuration()  : this._totalDuration,
                        v = this._time,
                        l = this._totalTime,
                        y = this._cycle;
                    if (n >= a ? (this._totalTime = a, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0)  : 0)  : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1)  : 1), this._reversed || (s = !0, e = 'onComplete'), 0 === this._duration && ((0 === n || 0 > this._rawPrevTime) && this._rawPrevTime !== n && (i = !0), this._rawPrevTime = n))  : 1e-7 > n ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0)  : 0, (0 !== l || 0 === this._duration && this._rawPrevTime > 0) && (e = 'onReverseComplete', s = this._reversed), 0 > n ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = n))  : this._initted || (i = !0))  : (this._totalTime = this._time = n, 0 !== this._repeat && (c = this._duration + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType ? (r = this._time / this._duration, o = this._easeType, h = this._easePower, (1 === o || 3 === o && r >= 0.5) && (r = 1 - r), 3 === o && (r *= 2), 1 === h ? r *= r : 2 === h ? r *= r * r : 3 === h ? r *= r * r * r : 4 === h && (r *= r * r * r * r), this.ratio = 1 === o ? 1 - r : 2 === o ? r : 0.5 > this._time / this._duration ? r / 2 : 1 - r / 2)  : this.ratio = this._ease.getRatio(this._time / this._duration)), v === this._time && !i) return l !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)),
                        void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration)  : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || this._paused || (this._active = !0), 0 === l && (this._startAt && (n >= 0 ? this._startAt.render(n, t, i)  : e || (e = '_dummyGS')), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f))), u = this._firstPT; u; ) u.f ? u.t[u.p](u.c * this.ratio + u.s)  : u.t[u.p] = u.c * this.ratio + u.s,
                        u = u._next;
                    this._onUpdate && (0 > n && this._startAt && this._startAt.render(n, t, i), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)),
                        this._cycle !== y && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f)),
                        e && (this._gc || (0 > n && this._startAt && !this._onUpdate && this._startAt.render(n, t, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[e] && this.vars[e].apply(this.vars[e + 'Scope'] || this, this.vars[e + 'Params'] || f)))
                },
                r.to = function (n, t, i) {
                    return new r(n, t, i)
                },
                r.from = function (n, t, i) {
                    return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        new r(n, t, i)
                },
                r.fromTo = function (n, t, i, u) {
                    return u.startAt = i,
                        u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender,
                        new r(n, t, u)
                },
                r.staggerTo = r.allTo = function (n, t, u, e, o, s, l) {
                    e = e || 0;
                    var y,
                        v,
                        a,
                        p,
                        w = u.delay || 0,
                        b = [
                        ],
                        k = function () {
                            u.onComplete && u.onComplete.apply(u.onCompleteScope || this, u.onCompleteParams || f),
                                o.apply(l || this, s || f)
                        };
                    for (n instanceof Array || ('string' == typeof n && (n = i.selector(n) || n), h(n) && (n = c(n))), y = n.length, a = 0; y > a; a++) {
                        v = {
                        };
                        for (p in u) v[p] = u[p];
                        v.delay = w,
                            a === y - 1 && o && (v.onComplete = k),
                            b[a] = new r(n[a], t, v),
                            w += e
                    }
                    return b
                },
                r.staggerFrom = r.allFrom = function (n, t, i, u, f, e, o) {
                    return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        r.staggerTo(n, t, i, u, f, e, o)
                },
                r.staggerFromTo = r.allFromTo = function (n, t, i, u, f, e, o, s) {
                    return u.startAt = i,
                        u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender,
                        r.staggerTo(n, t, u, f, e, o, s)
                },
                r.delayedCall = function (n, t, i, u, f) {
                    return new r(t, 0, {
                        delay: n,
                        onComplete: t,
                        onCompleteParams: i,
                        onCompleteScope: u,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: u,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                },
                r.set = function (n, t) {
                    return new r(n, 0, t)
                },
                r.isTweening = function (n) {
                    for (var t, r = i.getTweensOf(n), u = r.length; --u > - 1; ) if (t = r[u], t._active || t._startTime === t._timeline._time && t._timeline._active) return !0;
                    return !1
                },
                e = function (n, t) {
                    for (var u = [
                    ], f = 0, r = n._first; r; ) r instanceof i ? u[f++] = r : (t && (u[f++] = r), u = u.concat(e(r, t)), f = u.length),
                        r = r._next;
                    return u
                },
                o = r.getAllTweens = function (t) {
                    return e(n._rootTimeline, t).concat(e(n._rootFramesTimeline, t))
                },
                r.killAll = function (n, i, r, u) {
                    null == i && (i = !0),
                        null == r && (r = !0);
                    for (var s, f, h = o(0 != u), c = h.length, l = i && r && u, e = 0; c > e; e++) f = h[e],
                        (l || f instanceof t || (s = f.target === f.vars.onComplete) && r || i && !s) && (n ? f.totalTime(f.totalDuration())  : f._enabled(!1, !1))
                },
                r.killChildTweensOf = function (n, t) {
                    if (null != n) {
                        var f,
                            e,
                            o,
                            u,
                            l,
                            s = i._tweenLookup;
                        if ('string' == typeof n && (n = i.selector(n) || n), h(n) && (n = c(n)), n instanceof Array) for (u = n.length; --u > - 1; ) r.killChildTweensOf(n[u], t);
                        else {
                            f = [
                            ];
                            for (o in s) for (e = s[o].target.parentNode; e; ) e === n && (f = f.concat(s[o].tweens)),
                                e = e.parentNode;
                            for (l = f.length, u = 0; l > u; u++) t && f[u].totalTime(f[u].totalDuration()),
                                f[u]._enabled(!1, !1)
                        }
                    }
                },
                s = function (n, i, r, u) {
                    void 0 === i && (i = !0),
                        void 0 === r && (r = !0);
                    for (var e, f, s = o(u), c = i && r && u, h = s.length; --h > - 1; ) f = s[h],
                        (c || f instanceof t || (e = f.target === f.vars.onComplete) && r || i && !e) && f.paused(n)
                },
                r.pauseAll = function (n, t, i) {
                    s(!0, n, t, i)
                },
                r.resumeAll = function (n, t, i) {
                    s(!1, n, t, i)
                },
                u.progress = function (n) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), !1)  : this._time / this.duration()
                },
                u.totalProgress = function (n) {
                    return arguments.length ? this.totalTime(this.totalDuration() * n, !1)  : this._totalTime / this.totalDuration()
                },
                u.time = function (n, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && 0 != (1 & this._cycle) ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay)  : 0 !== this._repeat && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t))  : this._time
                },
                u.duration = function (t) {
                    return arguments.length ? n.prototype.duration.call(this, t)  : this._duration
                },
                u.totalDuration = function (n) {
                    return arguments.length ? - 1 === this._repeat ? this : this.duration((n - this._repeat * this._repeatDelay) / (this._repeat + 1))  : (this._dirty && (this._totalDuration = - 1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                },
                u.repeat = function (n) {
                    return arguments.length ? (this._repeat = n, this._uncache(!0))  : this._repeat
                },
                u.repeatDelay = function (n) {
                    return arguments.length ? (this._repeatDelay = n, this._uncache(!0))  : this._repeatDelay
                },
                u.yoyo = function (n) {
                    return arguments.length ? (this._yoyo = n, this)  : this._yoyo
                },
                r
        }, !0),
            window._gsDefine('TimelineLite', [
                'core.Animation',
                'core.SimpleTimeline',
                'TweenLite'
            ], function (n, t, i) {
                var u = function (n) {
                        t.call(this, n),
                            this._labels = {
                            },
                            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
                            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
                            this._sortChildren = !0,
                            this._onUpdate = this.vars.onUpdate;
                        for (var u, i, r = this.vars, e = f.length; --e > - 1; ) if (i = r[f[e]]) for (u = i.length; --u > - 1; ) '{self}' === i[u] && (i = r[f[e]] = i.concat(), i[u] = this);
                        r.tweens instanceof Array && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    f = [
                        'onStartParams',
                        'onUpdateParams',
                        'onCompleteParams',
                        'onReverseCompleteParams',
                        'onRepeatParams'
                    ],
                    e = [
                    ],
                    o = function (n) {
                        var t,
                            i = {
                            };
                        for (t in n) i[t] = n[t];
                        return i
                    },
                    r = u.prototype = new t;
                return u.version = '1.9.3',
                    r.constructor = u,
                    r.kill()._gc = !1,
                    r.to = function (n, t, r, u) {
                        return this.add(new i(n, t, r), u)
                    },
                    r.from = function (n, t, r, u) {
                        return this.add(i.from(n, t, r), u)
                    },
                    r.fromTo = function (n, t, r, u, f) {
                        return this.add(i.fromTo(n, t, r, u), f)
                    },
                    r.staggerTo = function (n, t, r, f, e, s, h, c) {
                        var l,
                            a,
                            v = new u({
                                onComplete: s,
                                onCompleteParams: h,
                                onCompleteScope: c
                            });
                        for ('string' == typeof n && (n = i.selector(n) || n), !(n instanceof Array) && 'function' == typeof n.each && n[0] && n[0].nodeType && n[0].style && (a = [
                        ], n.each(function () {
                            a.push(this)
                        }), n = a), f = f || 0, l = 0; n.length > l; l++) r.startAt && (r.startAt = o(r.startAt)),
                            v.add(new i(n[l], t, o(r)), l * f);
                        return this.add(v, e)
                    },
                    r.staggerFrom = function (n, t, i, r, u, f, e, o) {
                        return i.immediateRender = 0 != i.immediateRender,
                            i.runBackwards = !0,
                            this.staggerTo(n, t, i, r, u, f, e, o)
                    },
                    r.staggerFromTo = function (n, t, i, r, u, f, e, o, s) {
                        return r.startAt = i,
                            r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
                            this.staggerTo(n, t, r, u, f, e, o, s)
                    },
                    r.call = function (n, t, r, u) {
                        return this.add(i.delayedCall(0, n, t, r), u)
                    },
                    r.set = function (n, t, r) {
                        return r = this._parseTimeOrLabel(r, 0, !0),
                            null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused),
                            this.add(new i(n, 0, t), r)
                    },
                    u.exportRoot = function (n, t) {
                        n = n || {
                        },
                            null == n.smoothChildTiming && (n.smoothChildTiming = !0);
                        var r,
                            o,
                            f = new u(n),
                            e = f._timeline;
                        for (null == t && (t = !0), e._remove(f, !0), f._startTime = 0, f._rawPrevTime = f._time = f._totalTime = e._time, r = e._first; r; ) o = r._next,
                            t && r instanceof i && r.target === r.vars.onComplete || f.add(r, r._startTime - r._delay),
                            r = o;
                        return e.add(f, 0),
                            f
                    },
                    r.add = function (r, f, e, o) {
                        var c,
                            a,
                            l,
                            s,
                            h;
                        if ('number' != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, r)), !(r instanceof n)) {
                            if (r instanceof Array) {
                                for (e = e || 'normal', o = o || 0, c = f, a = r.length, l = 0; a > l; l++) (s = r[l]) instanceof Array && (s = new u({
                                    tweens: s
                                })),
                                    this.add(s, c),
                                    'string' != typeof s && 'function' != typeof s && ('sequence' === e ? c = s._startTime + s.totalDuration() / s._timeScale : 'start' === e && (s._startTime -= s.delay())),
                                    c += o;
                                return this._uncache(!0)
                            }
                            if ('string' == typeof r) return this.addLabel(r, f);
                            if ('function' != typeof r) throw 'Cannot add ' + r + ' into the timeline: it is neither a tween, timeline, function, nor a string.';
                            r = i.delayedCall(0, r)
                        }
                        if (t.prototype.add.call(this, r, f), this._gc && !this._paused && this._time === this._duration && this._time < this.duration()) for (h = this; h._gc && h._timeline; ) h._timeline.smoothChildTiming ? h.totalTime(h._totalTime, !0)  : h._enabled(!0, !1),
                            h = h._timeline;
                        return this
                    },
                    r.remove = function (t) {
                        if (t instanceof n) return this._remove(t, !1);
                        if (t instanceof Array) {
                            for (var i = t.length; --i > - 1; ) this.remove(t[i]);
                            return this
                        }
                        return 'string' == typeof t ? this.removeLabel(t)  : this.kill(null, t)
                    },
                    r.append = function (n, t) {
                        return this.add(n, this._parseTimeOrLabel(null, t, !0, n))
                    },
                    r.insert = r.insertMultiple = function (n, t, i, r) {
                        return this.add(n, t || 0, i, r)
                    },
                    r.appendMultiple = function (n, t, i, r) {
                        return this.add(n, this._parseTimeOrLabel(null, t, !0, n), i, r)
                    },
                    r.addLabel = function (n, t) {
                        return this._labels[n] = this._parseTimeOrLabel(t),
                            this
                    },
                    r.removeLabel = function (n) {
                        return delete this._labels[n],
                            this
                    },
                    r.getLabelTime = function (n) {
                        return null != this._labels[n] ? this._labels[n] : - 1
                    },
                    r._parseTimeOrLabel = function (t, i, r, u) {
                        var f;
                        if (u instanceof n && u.timeline === this) this.remove(u);
                        else if (u instanceof Array) for (f = u.length; --f > - 1; ) u[f] instanceof n && u[f].timeline === this && this.remove(u[f]);
                        if ('string' == typeof i) return this._parseTimeOrLabel(i, r && 'number' == typeof t && null == this._labels[i] ? t - this.duration()  : 0, r);
                        if (i = i || 0, 'string' == typeof t && (isNaN(t) || null != this._labels[t])) {
                            if (f = t.indexOf('='), - 1 === f) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                            i = parseInt(t.charAt(f - 1) + '1', 10) * Number(t.substr(f + 1)),
                                t = f > 1 ? this._parseTimeOrLabel(t.substr(0, f - 1), 0, r)  : this.duration()
                        } else null == t && (t = this.duration());
                        return Number(t) + i
                    },
                    r.seek = function (n, t) {
                        return this.totalTime('number' == typeof n ? n : this._parseTimeOrLabel(n), t !== !1)
                    },
                    r.stop = function () {
                        return this.paused(!0)
                    },
                    r.gotoAndPlay = function (n, t) {
                        return this.play(n, t)
                    },
                    r.gotoAndStop = function (n, t) {
                        return this.pause(n, t)
                    },
                    r.render = function (n, t, i) {
                        this._gc && this._enabled(!0, !1),
                            this._active = !this._paused;
                        var r,
                            c,
                            o,
                            u,
                            s,
                            h = this._dirty ? this.totalDuration()  : this._totalDuration,
                            f = this._time,
                            a = this._startTime,
                            v = this._timeScale,
                            l = this._paused;
                        if (n >= h ? (this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (c = !0, u = 'onComplete', 0 === this._duration && (0 === n || 0 > this._rawPrevTime) && this._rawPrevTime !== n && (s = !0)), this._rawPrevTime = n, n = h + 0.000001)  : 1e-7 > n ? (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (u = 'onReverseComplete', c = this._reversed), 0 > n ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && (s = !0))  : this._initted || (s = !0), this._rawPrevTime = n)  : this._totalTime = this._time = this._rawPrevTime = n, this._time !== f || i || s) {
                            if (this._initted || (this._initted = !0), 0 === f && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e)), this._time >= f) for (r = this._first; r && (o = r._next, !this._paused || l); ) (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration()  : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i)  : r.render((n - r._startTime) * r._timeScale, t, i)),
                                r = o;
                            else for (r = this._last; r && (o = r._prev, !this._paused || l); ) (r._active || f >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration()  : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i)  : r.render((n - r._startTime) * r._timeScale, t, i)),
                                r = o;
                            this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)),
                                u && (this._gc || (a === this._startTime || v !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this.vars[u].apply(this.vars[u + 'Scope'] || this, this.vars[u + 'Params'] || e)))
                        }
                    },
                    r._hasPausedChild = function () {
                        for (var n = this._first; n; ) {
                            if (n._paused || n instanceof u && n._hasPausedChild()) return !0;
                            n = n._next
                        }
                        return !1
                    },
                    r.getChildren = function (n, t, r, u) {
                        u = u || - 9999999999;
                        for (var e = [
                        ], f = this._first, o = 0; f; ) u > f._startTime || (f instanceof i ? t !== !1 && (e[o++] = f)  : (r !== !1 && (e[o++] = f), n !== !1 && (e = e.concat(f.getChildren(!0, t, r)), o = e.length))),
                            f = f._next;
                        return e
                    },
                    r.getTweensOf = function (n, t) {
                        for (var r = i.getTweensOf(n), u = r.length, f = [
                        ], e = 0; --u > - 1; ) (r[u].timeline === this || t && this._contains(r[u])) && (f[e++] = r[u]);
                        return f
                    },
                    r._contains = function (n) {
                        for (var t = n.timeline; t; ) {
                            if (t === this) return !0;
                            t = t.timeline
                        }
                        return !1
                    },
                    r.shiftChildren = function (n, t, i) {
                        i = i || 0;
                        for (var u, r = this._first, f = this._labels; r; ) r._startTime >= i && (r._startTime += n),
                            r = r._next;
                        if (t) for (u in f) f[u] >= i && (f[u] += n);
                        return this._uncache(!0)
                    },
                    r._kill = function (n, t) {
                        if (!n && !t) return this._enabled(!1, !1);
                        for (var i = t ? this.getTweensOf(t)  : this.getChildren(!0, !0, !1), r = i.length, u = !1; --r > - 1; ) i[r]._kill(n, t) && (u = !0);
                        return u
                    },
                    r.clear = function (n) {
                        var t = this.getChildren(!1, !0, !0),
                            i = t.length;
                        for (this._time = this._totalTime = 0; --i > - 1; ) t[i]._enabled(!1, !1);
                        return n !== !1 && (this._labels = {
                        }),
                            this._uncache(!0)
                    },
                    r.invalidate = function () {
                        for (var n = this._first; n; ) n.invalidate(),
                            n = n._next;
                        return this
                    },
                    r._enabled = function (n, i) {
                        if (n === this._gc) for (var r = this._first; r; ) r._enabled(n, !0),
                            r = r._next;
                        return t.prototype._enabled.call(this, n, i)
                    },
                    r.progress = function (n) {
                        return arguments.length ? this.totalTime(this.duration() * n, !1)  : this._time / this.duration()
                    },
                    r.duration = function (n) {
                        return arguments.length ? (0 !== this.duration() && 0 !== n && this.timeScale(this._duration / n), this)  : (this._dirty && this.totalDuration(), this._duration)
                    },
                    r.totalDuration = function (n) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var f, r, i = 0, t = this._last, u = 999999999999; t; ) f = t._prev,
                                    t._dirty && t.totalDuration(),
                                        t._startTime > u && this._sortChildren && !t._paused ? this.add(t, t._startTime - t._delay)  : u = t._startTime,
                                    0 > t._startTime && !t._paused && (i -= t._startTime, this._timeline.smoothChildTiming && (this._startTime += t._startTime / this._timeScale), this.shiftChildren( - t._startTime, !1, - 9999999999), u = 0),
                                    r = t._startTime + t._totalDuration / t._timeScale,
                                    r > i && (i = r),
                                    t = f;
                                this._duration = this._totalDuration = i,
                                    this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return 0 !== this.totalDuration() && 0 !== n && this.timeScale(this._totalDuration / n),
                            this
                    },
                    r.usesFrames = function () {
                        for (var t = this._timeline; t._timeline; ) t = t._timeline;
                        return t === n._rootFramesTimeline
                    },
                    r.rawTime = function () {
                        return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    },
                    u
            }, !0),
            window._gsDefine('TimelineMax', [
                'TimelineLite',
                'TweenLite',
                'easing.Ease'
            ], function (n, t, i) {
                var f = function (t) {
                        n.call(this, t),
                            this._repeat = this.vars.repeat || 0,
                            this._repeatDelay = this.vars.repeatDelay || 0,
                            this._cycle = 0,
                            this._yoyo = this.vars.yoyo === !0,
                            this._dirty = !0
                    },
                    u = [
                    ],
                    e = new i(null, null, 1, 0),
                    o = function (n) {
                        for (; n; ) {
                            if (n._paused) return !0;
                            n = n._timeline
                        }
                        return !1
                    },
                    r = f.prototype = new n;
                return r.constructor = f,
                    r.kill()._gc = !1,
                    f.version = '1.9.3',
                    r.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0,
                            this._repeat = this.vars.repeat || 0,
                            this._repeatDelay = this.vars.repeatDelay || 0,
                            this._uncache(!0),
                            n.prototype.invalidate.call(this)
                    },
                    r.addCallback = function (n, i, r, u) {
                        return this.add(t.delayedCall(0, n, r, u), i)
                    },
                    r.removeCallback = function (n, t) {
                        if (null == t) this._kill(null, n);
                        else for (var i = this.getTweensOf(n, !1), r = i.length, u = this._parseTimeOrLabel(t); --r > - 1; ) i[r]._startTime === u && i[r]._enabled(!1, !1);
                        return this
                    },
                    r.tweenTo = function (n, i) {
                        i = i || {
                        };
                        var o,
                            r,
                            f = {
                                ease: e,
                                overwrite: 2,
                                useFrames: this.usesFrames(),
                                immediateRender: !1
                            };
                        for (o in i) f[o] = i[o];
                        return f.time = this._parseTimeOrLabel(n),
                            r = new t(this, Math.abs(Number(f.time) - this._time) / this._timeScale || 0.001, f),
                            f.onStart = function () {
                                r.target.paused(!0),
                                    r.vars.time !== r.target.time() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale),
                                    i.onStart && i.onStart.apply(i.onStartScope || r, i.onStartParams || u)
                            },
                            r
                    },
                    r.tweenFromTo = function (n, t, i) {
                        i = i || {
                        },
                            i.startAt = {
                                time: this._parseTimeOrLabel(n)
                            };
                        var r = this.tweenTo(t, i);
                        return r.duration(Math.abs(r.vars.time - r.vars.startAt.time) / this._timeScale || 0.001)
                    },
                    r.render = function (n, t, i) {
                        this._gc && this._enabled(!0, !1),
                            this._active = !this._paused;
                        var r,
                            v,
                            c,
                            o,
                            l,
                            a,
                            y = this._dirty ? this.totalDuration()  : this._totalDuration,
                            f = this._duration,
                            e = this._time,
                            p = this._totalTime,
                            k = this._startTime,
                            d = this._timeScale,
                            w = this._rawPrevTime,
                            b = this._paused,
                            s = this._cycle;
                        if (n >= y ? (this._locked || (this._totalTime = y, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (v = !0, o = 'onComplete', 0 === f && (0 === n || 0 > this._rawPrevTime) && this._rawPrevTime !== n && (l = !0)), this._rawPrevTime = n, this._yoyo && 0 != (1 & this._cycle) ? this._time = n = 0 : (this._time = f, n = f + 0.000001))  : 1e-7 > n ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== e || 0 === f && this._rawPrevTime > 0 && !this._locked) && (o = 'onReverseComplete', v = this._reversed), 0 > n ? (this._active = !1, 0 === f && this._rawPrevTime >= 0 && (l = !0))  : this._initted || (l = !0), this._rawPrevTime = n, n = 0)  : (this._time = this._rawPrevTime = n, this._locked || (this._totalTime = n, 0 !== this._repeat && (a = f + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, n = f + 0.000001)  : 0 > this._time ? this._time = n = 0 : n = this._time))), this._cycle !== s && !this._locked) {
                            var h = this._yoyo && 0 != (1 & s),
                                g = h === (this._yoyo && 0 != (1 & this._cycle)),
                                nt = this._totalTime,
                                tt = this._cycle,
                                it = this._rawPrevTime,
                                rt = this._time;
                            this._totalTime = s * f,
                                    s > this._cycle ? h = !h : this._totalTime += f,
                                this._time = e,
                                this._rawPrevTime = 0 === f ? w - 0.00001 : w,
                                this._cycle = s,
                                this._locked = !0,
                                e = h ? 0 : f,
                                this.render(e, t, 0 === f),
                                t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u),
                                g && (e = h ? f + 0.000001 : - 0.000001, this.render(e, !0, !1)),
                                this._time = rt,
                                this._totalTime = nt,
                                this._cycle = tt,
                                this._rawPrevTime = it,
                                this._locked = !1
                        }
                        if (this._time === e && !i && !l) return p !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)),
                            void 0;
                        if (this._initted || (this._initted = !0), 0 === p && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= e) for (r = this._first; r && (c = r._next, !this._paused || b); ) (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration()  : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i)  : r.render((n - r._startTime) * r._timeScale, t, i)),
                            r = c;
                        else for (r = this._last; r && (c = r._prev, !this._paused || b); ) (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration()  : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i)  : r.render((n - r._startTime) * r._timeScale, t, i)),
                            r = c;
                        this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)),
                            o && (this._locked || this._gc || (k === this._startTime || d !== this._timeScale) && (0 === this._time || y >= this.totalDuration()) && (v && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this.vars[o].apply(this.vars[o + 'Scope'] || this, this.vars[o + 'Params'] || u)))
                    },
                    r.getActive = function (n, t, i) {
                        null == n && (n = !0),
                            null == t && (t = !0),
                            null == i && (i = !1);
                        for (var r, f = [
                        ], e = this.getChildren(n, t, i), s = 0, h = e.length, u = 0; h > u; u++) r = e[u],
                            r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (o(r._timeline) || (f[s++] = r));
                        return f
                    },
                    r.getLabelAfter = function (n) {
                        n || 0 !== n && (n = this._time);
                        for (var i = this.getLabelsArray(), r = i.length, t = 0; r > t; t++) if (i[t].time > n) return i[t].name;
                        return null
                    },
                    r.getLabelBefore = function (n) {
                        null == n && (n = this._time);
                        for (var t = this.getLabelsArray(), i = t.length; --i > - 1; ) if (n > t[i].time) return t[i].name;
                        return null
                    },
                    r.getLabelsArray = function () {
                        var n,
                            t = [
                            ],
                            i = 0;
                        for (n in this._labels) t[i++] = {
                            time: this._labels[n],
                            name: n
                        };
                        return t.sort(function (n, t) {
                            return n.time - t.time
                        }),
                            t
                    },
                    r.progress = function (n) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), !1)  : this._time / this.duration()
                    },
                    r.totalProgress = function (n) {
                        return arguments.length ? this.totalTime(this.totalDuration() * n, !1)  : this._totalTime / this.totalDuration()
                    },
                    r.totalDuration = function (t) {
                        return arguments.length ? - 1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))  : (this._dirty && (n.prototype.totalDuration.call(this), this._totalDuration = - 1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    },
                    r.time = function (n, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && 0 != (1 & this._cycle) ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay)  : 0 !== this._repeat && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t))  : this._time
                    },
                    r.repeat = function (n) {
                        return arguments.length ? (this._repeat = n, this._uncache(!0))  : this._repeat
                    },
                    r.repeatDelay = function (n) {
                        return arguments.length ? (this._repeatDelay = n, this._uncache(!0))  : this._repeatDelay
                    },
                    r.yoyo = function (n) {
                        return arguments.length ? (this._yoyo = n, this)  : this._yoyo
                    },
                    r.currentLabel = function (n) {
                        return arguments.length ? this.seek(n, !0)  : this.getLabelBefore(this._time + 1e-8)
                    },
                    f
            }, !0),
            function () {
                var h = 180 / Math.PI,
                    c = Math.PI / 180,
                    n = [
                    ],
                    t = [
                    ],
                    i = [
                    ],
                    f = {
                    },
                    u = function (n, t, i, r) {
                        this.a = n,
                            this.b = t,
                            this.c = i,
                            this.d = r,
                            this.da = r - n,
                            this.ca = i - n,
                            this.ba = t - n
                    },
                    l = ',x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,',
                    e = function (n, t, i, r) {
                        var e = {
                                a: n
                            },
                            u = {
                            },
                            f = {
                            },
                            o = {
                                c: r
                            },
                            s = (n + t) / 2,
                            a = (t + i) / 2,
                            h = (i + r) / 2,
                            c = (s + a) / 2,
                            l = (a + h) / 2,
                            v = (l - c) / 8;
                        return e.b = s + (n - s) / 4,
                            u.b = c + v,
                            e.c = u.a = (e.b + u.b) / 2,
                            u.c = f.a = (c + l) / 2,
                            f.b = l - v,
                            o.b = h + (r - h) / 4,
                            f.c = o.a = (f.b + o.b) / 2,
                            [
                                e,
                                u,
                                f,
                                o
                            ]
                    },
                    a = function (r, u, f, o, s) {
                        for (var y, c, nt, h, p, b, g, tt, l, k, d, it, rt = r.length - 1, w = 0, a = r[0].a, v = 0; rt > v; v++) h = r[w],
                            y = h.a,
                            c = h.d,
                            nt = r[w + 1].d,
                            s ? (k = n[v], d = t[v], it = 0.25 * (d + k) * u / (o ? 0.5 : i[v] || 0.5), p = c - (c - y) * (o ? 0.5 * u : 0 !== k ? it / k : 0), b = c + (nt - c) * (o ? 0.5 * u : 0 !== d ? it / d : 0), g = c - (p + ((b - p) * (3 * k / (k + d) + 0.5) / 4 || 0)))  : (p = c - 0.5 * (c - y) * u, b = c + 0.5 * (nt - c) * u, g = c - (p + b) / 2),
                            p += g,
                            b += g,
                            h.c = tt = p,
                            h.b = 0 !== v ? a : a = h.a + 0.6 * (h.c - h.a),
                            h.da = c - y,
                            h.ca = tt - y,
                            h.ba = a - y,
                            f ? (l = e(y, a, tt, c), r.splice(w, 1, l[0], l[1], l[2], l[3]), w += 4)  : w++,
                            a = b;
                        h = r[w],
                            h.b = a,
                            h.c = a + 0.4 * (h.d - a),
                            h.da = h.d - h.a,
                            h.ca = h.c - h.a,
                            h.ba = a - h.a,
                            f && (l = e(h.a, a, h.c, h.d), r.splice(w, 1, l[0], l[1], l[2], l[3]))
                    },
                    v = function (i, r, f, e) {
                        var c,
                            o,
                            l,
                            s,
                            v,
                            a,
                            h = [
                            ];
                        if (e) for (i = [
                            e
                        ].concat(i), o = i.length; --o > - 1; ) 'string' == typeof (a = i[o][r]) && '=' === a.charAt(1) && (i[o][r] = e[r] + Number(a.charAt(0) + a.substr(2)));
                        if (c = i.length - 2, 0 > c) return h[0] = new u(i[0][r], 0, 0, i[ - 1 > c ? 0 : 1][r]),
                            h;
                        for (o = 0; c > o; o++) l = i[o][r],
                            s = i[o + 1][r],
                            h[o] = new u(l, 0, 0, s),
                            f && (v = i[o + 2][r], n[o] = (n[o] || 0) + (s - l) * (s - l), t[o] = (t[o] || 0) + (v - s) * (v - s));
                        return h[o] = new u(i[o][r], 0, 0, i[o + 1][r]),
                            h
                    },
                    o = function (r, u, e, o, s, h) {
                        var c,
                            y,
                            w,
                            p,
                            g,
                            nt,
                            k,
                            tt,
                            d = {
                            },
                            b = [
                            ],
                            it = h || r[0];
                        s = 'string' == typeof s ? ',' + s + ',' : l,
                            null == u && (u = 1);
                        for (y in r[0]) b.push(y);
                        if (r.length > 1) {
                            for (tt = r[r.length - 1], k = !0, c = b.length; --c > - 1; ) if (y = b[c], Math.abs(it[y] - tt[y]) > 0.05) {
                                k = !1;
                                break
                            }
                            k && (r = r.concat(), h && r.unshift(h), r.push(r[1]), h = r[r.length - 3])
                        }
                        for (n.length = t.length = i.length = 0, c = b.length; --c > - 1; ) y = b[c],
                            f[y] = - 1 !== s.indexOf(',' + y + ','),
                            d[y] = v(r, y, f[y], h);
                        for (c = n.length; --c > - 1; ) n[c] = Math.sqrt(n[c]),
                            t[c] = Math.sqrt(t[c]);
                        if (!o) {
                            for (c = b.length; --c > - 1; ) if (f[y]) for (w = d[b[c]], nt = w.length - 1, p = 0; nt > p; p++) g = w[p + 1].da / t[p] + w[p].da / n[p],
                                i[p] = (i[p] || 0) + g * g;
                            for (c = i.length; --c > - 1; ) i[c] = Math.sqrt(i[c])
                        }
                        for (c = b.length, p = e ? 4 : 1; --c > - 1; ) y = b[c],
                            w = d[y],
                            a(w, u, e, o, f[y]),
                            k && (w.splice(0, p), w.splice(w.length - p, p));
                        return d
                    },
                    y = function (n, t, i) {
                        t = t || 'soft';
                        var o,
                            a,
                            v,
                            w,
                            f,
                            y,
                            r,
                            c,
                            s,
                            e,
                            h,
                            b = {
                            },
                            l = 'cubic' === t ? 3 : 2,
                            k = 'soft' === t,
                            p = [
                            ];
                        if (k && i && (n = [
                            i
                        ].concat(n)), null == n || l + 1 > n.length) throw 'invalid Bezier data';
                        for (s in n[0]) p.push(s);
                        for (y = p.length; --y > - 1; ) {
                            for (s = p[y], b[s] = f = [
                            ], e = 0, c = n.length, r = 0; c > r; r++) o = null == i ? n[r][s] : 'string' == typeof (h = n[r][s]) && '=' === h.charAt(1) ? i[s] + Number(h.charAt(0) + h.substr(2))  : Number(h),
                                k && r > 1 && c - 1 > r && (f[e++] = (o + f[e - 2]) / 2),
                                f[e++] = o;
                            for (c = e - l + 1, e = 0, r = 0; c > r; r += l) o = f[r],
                                a = f[r + 1],
                                v = f[r + 2],
                                w = 2 === l ? 0 : f[r + 3],
                                f[e++] = h = 3 === l ? new u(o, a, v, w)  : new u(o, (2 * a + o) / 3, (2 * a + v) / 3, v);
                            f.length = e
                        }
                        return b
                    },
                    p = function (n, t, i) {
                        for (var e, s, o, a, v, y, r, u, h, f, c, p = 1 / i, l = n.length; --l > - 1; ) for (f = n[l], o = f.a, a = f.d - o, v = f.c - o, y = f.b - o, e = s = 0, u = 1; i >= u; u++) r = p * u,
                            h = 1 - r,
                            e = s - (s = (r * r * a + 3 * h * (r * v + h * y)) * r),
                            c = l * i + u - 1,
                            t[c] = (t[c] || 0) + e * e
                    },
                    w = function (n, t) {
                        t = t >> 0 || 6;
                        var s,
                            i,
                            h,
                            r,
                            f = [
                            ],
                            c = [
                            ],
                            u = 0,
                            e = 0,
                            a = t - 1,
                            l = [
                            ],
                            o = [
                            ];
                        for (s in n) p(n[s], f, t);
                        for (h = f.length, i = 0; h > i; i++) u += Math.sqrt(f[i]),
                            r = i % t,
                            o[r] = u,
                            r === a && (e += u, r = i / t >> 0, l[r] = o, c[r] = e, u = 0, o = [
                        ]);
                        return {
                            length: e,
                            lengths: c,
                            segments: l
                        }
                    },
                    r = window._gsDefine.plugin({
                        propName: 'bezier',
                        priority: - 1,
                        API: 2,
                        global: !0,
                        init: function (n, t, i) {
                            var c;
                            this._target = n,
                                t instanceof Array && (t = {
                                values: t
                            }),
                                this._func = {
                                },
                                this._round = {
                                },
                                this._props = [
                                ],
                                this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var r,
                                a,
                                f,
                                e,
                                l,
                                s = t.values || [],
                                h = {
                                },
                                v = s[0],
                                u = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = u ? u instanceof Array ? u : [
                                ['x',
                                    'y',
                                    'rotation',
                                        u === !0 ? 0 : Number(u) || 0]
                            ] : null;
                            for (r in v) this._props.push(r);
                            for (f = this._props.length; --f > - 1; ) r = this._props[f],
                                this._overwriteProps.push(r),
                                a = this._func[r] = 'function' == typeof n[r],
                                h[r] = a ? n[r.indexOf('set') || 'function' != typeof n['get' + r.substr(3)] ? r : 'get' + r.substr(3)]()  : parseFloat(n[r]),
                                l || h[r] !== s[0][r] && (l = h);
                            if ((this._beziers = 'cubic' !== t.type && 'quadratic' !== t.type && 'soft' !== t.type ? o(s, isNaN(t.curviness) ? 1 : t.curviness, !1, 'thruBasic' === t.type, t.correlate, l)  : y(s, t.type, h), this._segCount = this._beziers[r].length, this._timeRes) && (c = w(this._beziers, this._timeRes), this._length = c.length, this._lengths = c.lengths, this._segments = c.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), u = this._autoRotate) for (u[0] instanceof Array || (this._autoRotate = u = [
                                u
                            ]), f = u.length; --f > - 1; ) for (e = 0; 3 > e; e++) r = u[f][e],
                                this._func[r] = 'function' == typeof n[r] ? n[r.indexOf('set') || 'function' != typeof n['get' + r.substr(3)] ? r : 'get' + r.substr(3)] : !1;
                            return !0
                        },
                        set: function (n) {
                            var c,
                                d,
                                t,
                                f,
                                r,
                                i,
                                o,
                                p,
                                a,
                                u,
                                l = this._segCount,
                                g = this._func,
                                w = this._target,
                                e,
                                b,
                                k,
                                v,
                                y,
                                nt,
                                tt,
                                s;
                            if (this._timeRes) {
                                if (a = this._lengths, u = this._curSeg, n *= this._length, t = this._li, n > this._l2 && l - 1 > t) {
                                    for (p = l - 1; p > t && n >= (this._l2 = a[++t]); );
                                    this._l1 = a[t - 1],
                                        this._li = t,
                                        this._curSeg = u = this._segments[t],
                                        this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > n && t > 0) {
                                    for (; t > 0 && (this._l1 = a[--t]) >= n; );
                                    0 === t && this._l1 > n ? this._l1 = 0 : t++,
                                        this._l2 = a[t],
                                        this._li = t,
                                        this._curSeg = u = this._segments[t],
                                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                                        this._s2 = u[this._si]
                                }
                                if (c = t, n -= this._l1, t = this._si, n > this._s2 && u.length - 1 > t) {
                                    for (p = u.length - 1; p > t && n >= (this._s2 = u[++t]); );
                                    this._s1 = u[t - 1],
                                        this._si = t
                                } else if (this._s1 > n && t > 0) {
                                    for (; t > 0 && (this._s1 = u[--t]) >= n; );
                                    0 === t && this._s1 > n ? this._s1 = 0 : t++,
                                        this._s2 = u[t],
                                        this._si = t
                                }
                                i = (t + (n - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else c = 0 > n ? 0 : n >= 1 ? l - 1 : l * n >> 0,
                                i = (n - c * (1 / l)) * l;
                            for (d = 1 - i, t = this._props.length; --t > - 1; ) f = this._props[t],
                                r = this._beziers[f][c],
                                o = (i * i * r.da + 3 * d * (i * r.ca + d * r.ba)) * i + r.a,
                                this._round[f] && (o = o + (o > 0 ? 0.5 : - 0.5) >> 0),
                                g[f] ? w[f](o)  : w[f] = o;
                            if (this._autoRotate) for (s = this._autoRotate, t = s.length; --t > - 1; ) f = s[t][2],
                                nt = s[t][3] || 0,
                                tt = s[t][4] === !0 ? 1 : h,
                                r = this._beziers[s[t][0]][c],
                                e = this._beziers[s[t][1]][c],
                                b = r.a + (r.b - r.a) * i,
                                v = r.b + (r.c - r.b) * i,
                                b += (v - b) * i,
                                v += (r.c + (r.d - r.c) * i - v) * i,
                                k = e.a + (e.b - e.a) * i,
                                y = e.b + (e.c - e.b) * i,
                                k += (y - k) * i,
                                y += (e.c + (e.d - e.c) * i - y) * i,
                                o = Math.atan2(y - k, v - b) * tt + nt,
                                g[f] ? w[f](o)  : w[f] = o
                        }
                    }),
                    s = r.prototype;
                r.bezierThrough = o,
                    r.cubicToQuadratic = e,
                    r._autoCSS = !0,
                    r.quadraticToCubic = function (n, t, i) {
                        return new u(n, (2 * t + n) / 3, (2 * t + i) / 3, i)
                    },
                    r._cssRegister = function () {
                        var t = window._gsDefine.globals.CSSPlugin;
                        if (t) {
                            var n = t._internals,
                                i = n._parseToProxy,
                                u = n._setPluginRatio,
                                f = n.CSSPropTween;
                            n._registerComplexSpecialProp('bezier', {
                                parser: function (n, t, e, o, s, h) {
                                    t instanceof Array && (t = {
                                        values: t
                                    }),
                                        h = new r;
                                    var a,
                                        y,
                                        v,
                                        w = t.values,
                                        p = w.length - 1,
                                        b = [
                                        ],
                                        l = {
                                        };
                                    if (0 > p) return s;
                                    for (a = 0; p >= a; a++) v = i(n, w[a], o, s, h, p !== a),
                                        b[a] = v.end;
                                    for (y in t) l[y] = t[y];
                                    return l.values = b,
                                        s = new f(n, 'bezier', 0, 0, v.pt, 2),
                                        s.data = v,
                                        s.plugin = h,
                                        s.setRatio = u,
                                        0 === l.autoRotate && (l.autoRotate = !0),
                                        !l.autoRotate || l.autoRotate instanceof Array || (a = l.autoRotate === !0 ? 0 : Number(l.autoRotate) * c, l.autoRotate = null != v.end.left ? [
                                        ['left',
                                            'top',
                                            'rotation',
                                            a,
                                            !0]
                                    ] : null != v.end.x ? [
                                        ['x',
                                            'y',
                                            'rotation',
                                            a,
                                            !0]
                                    ] : !1),
                                        l.autoRotate && (o._transform || o._enableTransforms(!1), v.autoRotate = o._target._gsTransform),
                                        h._onInitTween(v.proxy, l, o._tween),
                                        s
                                }
                            })
                        }
                    },
                    s._roundProps = function (n, t) {
                        for (var i = this._overwriteProps, r = i.length; --r > - 1; ) (n[i[r]] || n.bezier || n.bezierThrough) && (this._round[i[r]] = t)
                    },
                    s._kill = function (n) {
                        var t,
                            i,
                            r = this._props;
                        for (t in this._beziers) if (t in n) for (delete this._beziers[t], delete this._func[t], i = r.length; --i > - 1; ) r[i] === t && r.splice(i, 1);
                        return this._super._kill.call(this, n)
                    }
            }(),
            window._gsDefine('plugins.CSSPlugin', [
                'plugins.TweenPlugin',
                'TweenLite'
            ], function (n, t) {
                var nt,
                    yt,
                    f,
                    pt,
                    o = function () {
                        n.call(this, 'css'),
                            this._overwriteProps.length = 0
                    },
                    h = {
                    },
                    i = o.prototype = new n('css'),
                    er,
                    si,
                    or,
                    sr,
                    ot;
                i.constructor = o,
                    o.version = '1.9.3',
                    o.API = 2,
                    o.defaultTransformPerspective = 0,
                    i = 'px',
                    o.suffixMap = {
                        top: i,
                        right: i,
                        bottom: i,
                        left: i,
                        width: i,
                        height: i,
                        fontSize: i,
                        padding: i,
                        margin: i,
                        perspective: i
                    };
                var wt,
                    hi,
                    bt,
                    kt,
                    ci,
                    tt,
                    st = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    li = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    dt = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    ht = /[^\d\-\.]/g,
                    gt = /(?:\d|\-|\+|=|#|\.)*/g,
                    ni = /opacity *= *([^)]*)/,
                    hr = /opacity:([^;]*)/,
                    cr = /alpha\(opacity *=.+?\)/i,
                    ai = /^(rgb|hsl)/,
                    vi = /([A-Z])/g,
                    yi = /-([a-z])/gi,
                    lr = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    pi = function (n, t) {
                        return t.toUpperCase()
                    },
                    ar = /(?:Left|Right|Width)/i,
                    vr = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    yr = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    c = /,(?=[^\)]*(?:\(|$))/gi,
                    wi = Math.PI / 180,
                    p = 180 / Math.PI,
                    ct = {
                    },
                    b = document,
                    it = b.createElement('div'),
                    ti = b.createElement('img'),
                    lt = o._internals = {
                        _specialProps: h
                    },
                    v = navigator.userAgent,
                    k = function () {
                        var n,
                            t = v.indexOf('Android'),
                            i = b.createElement('div');
                        return bt = - 1 !== v.indexOf('Safari') && - 1 === v.indexOf('Chrome') && ( - 1 === t || Number(v.substr(t + 8, 1)) > 3),
                            ci = bt && 6 > Number(v.substr(v.indexOf('Version/') + 8, 1)),
                            kt = - 1 !== v.indexOf('Firefox'),
                            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(v),
                            tt = parseFloat(RegExp.$1),
                            i.innerHTML = '<a style=\'top:1px;opacity:.55;\'>a</a>',
                            n = i.getElementsByTagName('a') [0],
                            n ? /^0.55/.test(n.style.opacity)  : !1
                    }(),
                    bi = function (n) {
                        return ni.test('string' == typeof n ? n : (n.currentStyle ? n.currentStyle.filter : n.style.filter) || '') ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    ki = function (n) {
                        window.console && console.log(n)
                    },
                    di = '',
                    ii = '',
                    rt = function (n, t) {
                        t = t || it;
                        var r,
                            i,
                            u = t.style;
                        if (void 0 !== u[n]) return n;
                        for (n = n.charAt(0).toUpperCase() + n.substr(1), r = [
                            'O',
                            'Moz',
                            'ms',
                            'Ms',
                            'Webkit'
                        ], i = 5; --i > - 1 && void 0 === u[r[i] + n]; );
                        return i >= 0 ? (ii = 3 === i ? 'ms' : r[i], di = '-' + ii.toLowerCase() + '-', ii + n)  : null
                    },
                    ut = b.defaultView ? b.defaultView.getComputedStyle : function () {
                    },
                    r = o.getStyle = function (n, t, i, r, u) {
                        var f;
                        return k || 'opacity' !== t ? (!r && n.style[t] ? f = n.style[t] : (i = i || ut(n, null)) ? (n = i.getPropertyValue(t.replace(vi, '-$1').toLowerCase()), f = n || i.length ? n : i[t])  : n.currentStyle && (i = n.currentStyle, f = i[t]), null == u || f && 'none' !== f && 'auto' !== f && 'auto auto' !== f ? f : u)  : bi(n)
                    },
                    l = function (n, t, i, r, u) {
                        if ('px' === r || !r) return i;
                        if ('auto' === r || !i) return 0;
                        var f,
                            e = ar.test(t),
                            o = n,
                            s = it.style,
                            h = 0 > i;
                        return h && (i = - i),
                                '%' === r && - 1 !== t.indexOf('border') ? f = i / 100 * (e ? n.clientWidth : n.clientHeight)  : (s.cssText = 'border-style:solid; border-width:0; position:absolute; line-height:0;', '%' !== r && o.appendChild ? s[e ? 'borderLeftWidth' : 'borderTopWidth'] = i + r : (o = n.parentNode || b.body, s[e ? 'width' : 'height'] = i + r), o.appendChild(it), f = parseFloat(it[e ? 'offsetWidth' : 'offsetHeight']), o.removeChild(it), 0 !== f || u || (f = l(n, t, i, r, !0))),
                            h ? - f : f
                    },
                    gi = function (n, t, i) {
                        if ('absolute' !== r(n, 'position', i)) return 0;
                        var u = 'left' === t ? 'Left' : 'Top',
                            f = r(n, 'margin' + u, i);
                        return n['offset' + u] - (l(n, t, parseFloat(f), f.replace(gt, '')) || 0)
                    },
                    ft = function (n, t) {
                        var u,
                            r,
                            i = {
                            };
                        if (t = t || ut(n, null)) if (u = t.length) for (; --u > - 1; ) i[t[u].replace(yi, pi)] = t.getPropertyValue(t[u]);
                        else for (u in t) i[u] = t[u];
                        else if (t = n.currentStyle || n.style) for (u in t) i[u.replace(yi, pi)] = t[u];
                        return k || (i.opacity = bi(n)),
                            r = vt(n, t, !1),
                            i.rotation = r.rotation * p,
                            i.skewX = r.skewX * p,
                            i.scaleX = r.scaleX,
                            i.scaleY = r.scaleY,
                            i.x = r.x,
                            i.y = r.y,
                            y && (i.z = r.z, i.rotationX = r.rotationX * p, i.rotationY = r.rotationY * p, i.scaleZ = r.scaleZ),
                            i.filters && delete i.filters,
                            i
                    },
                    ri = function (n, t, i, r, u) {
                        var e,
                            f,
                            o,
                            s = {
                            },
                            h = n.style;
                        for (f in i) 'cssText' !== f && 'length' !== f && isNaN(f) && (t[f] !== (e = i[f]) || u && u[f]) && - 1 === f.indexOf('Origin') && ('number' == typeof e || 'string' == typeof e) && (s[f] = 'auto' !== e || 'left' !== f && 'top' !== f ? '' !== e && 'auto' !== e && 'none' !== e || 'string' != typeof t[f] || '' === t[f].replace(ht, '') ? e : 0 : gi(n, f), void 0 !== h[f] && (o = new oi(h, f, h[f], o)));
                        if (r) for (f in r) 'className' !== f && (s[f] = r[f]);
                        return {
                            difs: s,
                            firstMPT: o
                        }
                    },
                    pr = {
                        width: [
                            'Left',
                            'Right'
                        ],
                        height: [
                            'Top',
                            'Bottom'
                        ]
                    },
                    wr = [
                        'marginLeft',
                        'marginRight',
                        'marginTop',
                        'marginBottom'
                    ],
                    br = function (n, t, i) {
                        var u = parseFloat('width' === t ? n.offsetWidth : n.offsetHeight),
                            f = pr[t],
                            e = f.length;
                        for (i = i || ut(n, null); --e > - 1; ) u -= parseFloat(r(n, 'padding' + f[e], i, !0)) || 0,
                            u -= parseFloat(r(n, 'border' + f[e] + 'Width', i, !0)) || 0;
                        return u
                    },
                    ui = function (n, t) {
                        (null == n || '' === n || 'auto' === n || 'auto auto' === n) && (n = '0 0');
                        var u = n.split(' '),
                            r = - 1 !== n.indexOf('left') ? '0%' : - 1 !== n.indexOf('right') ? '100%' : u[0],
                            i = - 1 !== n.indexOf('top') ? '0%' : - 1 !== n.indexOf('bottom') ? '100%' : u[1];
                        return null == i ? i = '0' : 'center' === i && (i = '50%'),
                            ('center' === r || isNaN(parseFloat(r))) && (r = '50%'),
                            t && (t.oxp = - 1 !== r.indexOf('%'), t.oyp = - 1 !== i.indexOf('%'), t.oxr = '=' === r.charAt(1), t.oyr = '=' === i.charAt(1), t.ox = parseFloat(r.replace(ht, '')), t.oy = parseFloat(i.replace(ht, ''))),
                            r + ' ' + i + (u.length > 2 ? ' ' + u[2] : '')
                    },
                    nr = function (n, t) {
                        return 'string' == typeof n && '=' === n.charAt(1) ? parseInt(n.charAt(0) + '1', 10) * parseFloat(n.substr(2))  : parseFloat(n) - parseFloat(t)
                    },
                    w = function (n, t) {
                        return null == n ? t : 'string' == typeof n && '=' === n.charAt(1) ? parseInt(n.charAt(0) + '1', 10) * Number(n.substr(2)) + t : parseFloat(n)
                    },
                    et = function (n, t, i, r) {
                        var f,
                            s,
                            u,
                            o,
                            e,
                            h = 0.000001;
                        return null == n ? e = t : 'number' == typeof n ? e = n * wi : (f = 2 * Math.PI, s = n.split('_'), u = Number(s[0].replace(ht, '')) * ( - 1 === n.indexOf('rad') ? wi : 1) - ('=' === n.charAt(1) ? 0 : t), o = s[1], o && r && (r[i] = t + u), 'short' === o ? (u %= f, u !== u % (f / 2) && (u = 0 > u ? u + f : u - f))  : 'cw' === o && 0 > u ? u = (u + 9999999999 * f) % f - (0 | u / f) * f : 'ccw' === o && u > 0 && (u = (u - 9999999999 * f) % f - (0 | u / f) * f), e = t + u),
                            h > e && e > - h && (e = 0),
                            e
                    },
                    d = {
                        aqua: [
                            0,
                            255,
                            255
                        ],
                        lime: [
                            0,
                            255,
                            0
                        ],
                        silver: [
                            192,
                            192,
                            192
                        ],
                        black: [
                            0,
                            0,
                            0
                        ],
                        maroon: [
                            128,
                            0,
                            0
                        ],
                        teal: [
                            0,
                            128,
                            128
                        ],
                        blue: [
                            0,
                            0,
                            255
                        ],
                        navy: [
                            0,
                            0,
                            128
                        ],
                        white: [
                            255,
                            255,
                            255
                        ],
                        fuchsia: [
                            255,
                            0,
                            255
                        ],
                        olive: [
                            128,
                            128,
                            0
                        ],
                        yellow: [
                            255,
                            255,
                            0
                        ],
                        orange: [
                            255,
                            165,
                            0
                        ],
                        gray: [
                            128,
                            128,
                            128
                        ],
                        purple: [
                            128,
                            0,
                            128
                        ],
                        green: [
                            0,
                            128,
                            0
                        ],
                        red: [
                            255,
                            0,
                            0
                        ],
                        pink: [
                            255,
                            192,
                            203
                        ],
                        cyan: [
                            0,
                            255,
                            255
                        ],
                        transparent: [
                            255,
                            255,
                            255,
                            0
                        ]
                    },
                    fi = function (n, t, i) {
                        return n = 0 > n ? n + 1 : n > 1 ? n - 1 : n,
                            0 | 255 * (1 > 6 * n ? t + 6 * (i - t) * n : 0.5 > n ? i : 2 > 3 * n ? t + 6 * (i - t) * (2 / 3 - n)  : t) + 0.5
                    },
                    ei = function (n) {
                        var i,
                            t,
                            e,
                            u,
                            f,
                            r;
                        return n && '' !== n ? 'number' == typeof n ? [
                                n >> 16,
                                255 & n >> 8,
                                255 & n
                        ] : (',' === n.charAt(n.length - 1) && (n = n.substr(0, n.length - 1)), d[n] ? d[n] : '#' === n.charAt(0) ? (4 === n.length && (i = n.charAt(1), t = n.charAt(2), e = n.charAt(3), n = '#' + i + i + t + t + e + e), n = parseInt(n.substr(1), 16), [
                                n >> 16,
                                255 & n >> 8,
                                255 & n
                        ])  : 'hsl' === n.substr(0, 3) ? (n = n.match(st), u = Number(n[0]) % 360 / 360, f = Number(n[1]) / 100, r = Number(n[2]) / 100, t = 0.5 >= r ? r * (f + 1)  : r + f - r * f, i = 2 * r - t, n.length > 3 && (n[3] = Number(n[3])), n[0] = fi(u + 1 / 3, i, t), n[1] = fi(u, i, t), n[2] = fi(u - 1 / 3, i, t), n)  : (n = n.match(st) || d.transparent, n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3])), n))  : d.black
                    },
                    g = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b';
                for (i in d) g += '|' + i + '\\b';
                g = RegExp(g + ')', 'gi');
                var tr = function (n, t, i, r) {
                        if (null == n) return function (n) {
                            return n
                        };
                        var e,
                            s = t ? (n.match(g) || ['']) [0] : '',
                            f = n.split(s).join('').match(dt) || [],
                            h = n.substr(0, n.indexOf(f[0])),
                            l = ')' === n.charAt(n.length - 1) ? ')' : '',
                            o = - 1 !== n.indexOf(' ') ? ' ' : ',',
                            u = f.length,
                            a = u > 0 ? f[0].replace(st, '')  : '';
                        return u ? e = t ? function (n) {
                            var p,
                                v,
                                t,
                                y;
                            if ('number' == typeof n) n += a;
                            else if (r && c.test(n)) {
                                for (y = n.replace(c, '|').split('|'), t = 0; y.length > t; t++) y[t] = e(y[t]);
                                return y.join(',')
                            }
                            if (p = (n.match(g) || [s]) [0], v = n.split(p).join('').match(dt) || [], t = v.length, u > t--) for (; u > ++t; ) v[t] = i ? v[(t - 1) / 2 >> 0] : f[t];
                            return h + v.join(o) + o + p + l + ( - 1 !== n.indexOf('inset') ? ' inset' : '')
                        }
                            : function (n) {
                            var s,
                                v,
                                t;
                            if ('number' == typeof n) n += a;
                            else if (r && c.test(n)) {
                                for (v = n.replace(c, '|').split('|'), t = 0; v.length > t; t++) v[t] = e(v[t]);
                                return v.join(',')
                            }
                            if (s = n.match(dt) || [], t = s.length, u > t--) for (; u > ++t; ) s[t] = i ? s[(t - 1) / 2 >> 0] : f[t];
                            return h + s.join(o) + l
                        }
                            : function (n) {
                            return n
                        }
                    },
                    ir = function (n) {
                        return n = n.split(','),
                            function (t, i, r, u, f, e, o) {
                                var s,
                                    h = (i + '').split(' ');
                                for (o = {
                                }, s = 0; 4 > s; s++) o[n[s]] = h[s] = h[s] || h[(s - 1) / 2 >> 0];
                                return u.parse(t, o, f, e)
                            }
                    },
                    oi = (lt._setPluginRatio = function (n) {
                        this.plugin.setRatio(n);
                        for (var r, t, u, e, f = this.data, o = f.proxy, i = f.firstMPT, s = 0.000001; i; ) r = o[i.v],
                            i.r ? r = r > 0 ? r + 0.5 >> 0 : r - 0.5 >> 0 : s > r && r > - s && (r = 0),
                            i.t[i.p] = r,
                            i = i._next;
                        if (f.autoRotate && (f.autoRotate.rotation = o.rotation), 1 === n) for (i = f.firstMPT; i; ) {
                            if (t = i.t, t.type) {
                                if (1 === t.type) {
                                    for (e = t.xs0 + t.s + t.xs1, u = 1; t.l > u; u++) e += t['xn' + u] + t['xs' + (u + 1)];
                                    t.e = e
                                }
                            } else t.e = t.s + t.xs0;
                            i = i._next
                        }
                    }, function (n, t, i, r, u) {
                        this.t = n,
                            this.p = t,
                            this.v = i,
                            this.r = u,
                            r && (r._prev = this, this._next = r)
                    }),
                    e = (lt._parseToProxy = function (n, t, i, r, u, f) {
                        var c,
                            e,
                            o,
                            s,
                            v,
                            h = r,
                            l = {
                            },
                            a = {
                            },
                            y = i._transform,
                            p = ct;
                        for (i._transform = null, ct = t, r = v = i.parse(n, t, r, u), ct = p, f && (i._transform = y, h && (h._prev = null, h._prev && (h._prev._next = null))); r && r !== h; ) {
                            if (1 >= r.type && (e = r.p, a[e] = r.s + r.c, l[e] = r.s, f || (s = new oi(r, 's', e, s, r.r), r.c = 0), 1 === r.type)) for (c = r.l; --c > 0; ) o = 'xn' + c,
                                e = r.p + '_' + o,
                                a[e] = r.data[o],
                                l[e] = r[o],
                                f || (s = new oi(r, o, e, s, r.rxp[o]));
                            r = r._next
                        }
                        return {
                            proxy: l,
                            end: a,
                            firstMPT: s,
                            pt: v
                        }
                    }, lt.CSSPropTween = function (n, t, i, r, u, f, o, s, h, c, l) {
                        this.t = n,
                            this.p = t,
                            this.s = i,
                            this.c = r,
                            this.n = o || 'css_' + t,
                            n instanceof e || pt.push(this.n),
                            this.r = s,
                            this.type = f || 0,
                            h && (this.pr = h, nt = !0),
                            this.b = void 0 === c ? i : c,
                            this.e = void 0 === l ? i + r : l,
                            u && (this._next = u, u._prev = this)
                    }),
                    at = o.parseComplex = function (n, t, i, r, u, f, o, s, h, l) {
                        o = new e(n, t, 0, 0, o, l ? 2 : 1, null, !1, s, i, r),
                            r += '';
                        var y,
                            w,
                            b,
                            a,
                            v,
                            ut,
                            ft,
                            it,
                            g,
                            et,
                            nt,
                            tt,
                            p = i.split(', ').join(',').split(' '),
                            rt = r.split(', ').join(',').split(' '),
                            ot = p.length,
                            ht = wt !== !1;
                        for (( - 1 !== r.indexOf(',') || - 1 !== i.indexOf(',')) && (p = p.join(' ').replace(c, ', ').split(' '), rt = rt.join(' ').replace(c, ', ').split(' '), ot = p.length), ot !== rt.length && (p = (f || '').split(' '), ot = p.length), o.plugin = h, o.setRatio = l, y = 0; ot > y; y++) if (a = p[y], v = rt[y], it = parseFloat(a), it || 0 === it) o.appendXtra('', it, nr(v, it), v.replace(li, ''), ht && - 1 !== v.indexOf('px'), !0);
                        else if (u && ('#' === a.charAt(0) || d[a] || ai.test(a))) tt = ',' === v.charAt(v.length - 1) ? '),' : ')',
                            a = ei(a),
                            v = ei(v),
                            g = a.length + v.length > 6,
                                g && !k && 0 === v[3] ? (o['xs' + o.l] += o.l ? ' transparent' : 'transparent', o.e = o.e.split(rt[y]).join('transparent'))  : (k || (g = !1), o.appendXtra(g ? 'rgba(' : 'rgb(', a[0], v[0] - a[0], ',', !0, !0).appendXtra('', a[1], v[1] - a[1], ',', !0).appendXtra('', a[2], v[2] - a[2], g ? ',' : tt, !0), g && (a = 4 > a.length ? 1 : a[3], o.appendXtra('', a, (4 > v.length ? 1 : v[3]) - a, tt, !1)));
                        else if (ut = a.match(st)) {
                            if (ft = v.match(li), !ft || ft.length !== ut.length) return o;
                            for (b = 0, w = 0; ut.length > w; w++) nt = ut[w],
                                et = a.indexOf(nt, b),
                                o.appendXtra(a.substr(b, et - b), Number(nt), nr(ft[w], nt), '', ht && 'px' === a.substr(et + nt.length, 2), 0 === w),
                                b = et + nt.length;
                            o['xs' + o.l] += a.substr(b)
                        } else o['xs' + o.l] += o.l ? ' ' + a : a;
                        if ( - 1 !== r.indexOf('=') && o.data) {
                            for (tt = o.xs0 + o.data.s, y = 1; o.l > y; y++) tt += o['xs' + y] + o.data['xn' + y];
                            o.e = tt + o['xs' + y]
                        }
                        return o.l || (o.type = - 1, o.xs0 = o.e),
                            o.xfirst || o
                    },
                    s = 9;
                for (i = e.prototype, i.l = i.pr = 0; --s > 0; ) i['xn' + s] = 0,
                    i['xs' + s] = '';
                i.xs0 = '',
                    i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null,
                    i.appendXtra = function (n, t, i, r, u, f) {
                        var o = this,
                            s = o.l;
                        return o['xs' + s] += f && s ? ' ' + n : n || '',
                                i || 0 === s || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o['xs' + o.l] = r || '', s > 0 ? (o.data['xn' + s] = t + i, o.rxp['xn' + s] = u, o['xn' + s] = t, o.plugin || (o.xfirst = new e(o, 'xn' + s, t, i, o.xfirst || o, 0, o.n, u, o.pr), o.xfirst.xs0 = 0), o)  : (o.data = {
                            s: t + i
                        }, o.rxp = {
                        }, o.s = t, o.c = i, o.r = u, o))  : (o['xs' + s] += t + (r || ''), o)
                    };
                var rr = function (n, t) {
                        t = t || {
                        },
                            this.p = t.prefix ? rt(n) || n : n,
                            h[n] = h[this.p] = this,
                            this.format = t.formatter || tr(t.defaultValue, t.color, t.collapsible, t.multi),
                            t.parser && (this.parse = t.parser),
                            this.clrs = t.color,
                            this.multi = t.multi,
                            this.keyword = t.keyword,
                            this.dflt = t.defaultValue,
                            this.pr = t.priority || 0
                    },
                    u = lt._registerComplexSpecialProp = function (n, t, i) {
                        'object' != typeof t && (t = {
                            parser: i
                        });
                        var r,
                            e,
                            u = n.split(','),
                            f = t.defaultValue;
                        for (i = i || [f], r = 0; u.length > r; r++) t.prefix = 0 === r && t.prefix,
                            t.defaultValue = i[r] || f,
                            e = new rr(u[r], t)
                    },
                    kr = function (n) {
                        if (!h[n]) {
                            var t = n.charAt(0).toUpperCase() + n.substr(1) + 'Plugin';
                            u(n, {
                                parser: function (n, i, r, u, f, e, o) {
                                    var s = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                                    return s ? (s._cssRegister(), h[r].parse(n, i, r, u, f, e, o))  : (ki('Error: ' + t + ' js file not loaded.'), f)
                                }
                            })
                        }
                    };
                i = rr.prototype,
                    i.parseComplex = function (n, t, i, r, u, f) {
                        var o,
                            s,
                            e,
                            a,
                            v,
                            l,
                            h = this.keyword;
                        if (this.multi && (c.test(i) || c.test(t) ? (s = t.replace(c, '|').split('|'), e = i.replace(c, '|').split('|'))  : h && (s = [
                            t
                        ], e = [
                            i
                        ])), e) {
                            for (a = e.length > s.length ? e.length : s.length, o = 0; a > o; o++) t = s[o] = s[o] || this.dflt,
                                i = e[o] = e[o] || this.dflt,
                                h && (v = t.indexOf(h), l = i.indexOf(h), v !== l && (i = - 1 === l ? e : s, i[o] += ' ' + h));
                            t = s.join(', '),
                                i = e.join(', ')
                        }
                        return at(n, this.p, t, i, this.clrs, this.dflt, r, this.pr, u, f)
                    },
                    i.parse = function (n, t, i, u, e, o) {
                        return this.parseComplex(n.style, this.format(r(n, this.p, f, !1, this.dflt)), this.format(t), e, o)
                    },
                    o.registerSpecialProp = function (n, t, i) {
                        u(n, {
                            parser: function (n, r, u, f, o, s) {
                                var h = new e(n, u, 0, 0, o, 2, u, !1, i);
                                return h.plugin = s,
                                    h.setRatio = t(n, r, f._tween, u),
                                    h
                            },
                            priority: i
                        })
                    };
                var ur = 'scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective'.split(','),
                    a = rt('transform'),
                    dr = di + 'transform',
                    fr = rt('transformOrigin'),
                    y = null !== rt('perspective'),
                    vt = function (n, t, i) {
                        var c,
                            f,
                            d,
                            ot,
                            ti,
                            ct,
                            lt,
                            tt,
                            g,
                            ii,
                            ri,
                            at,
                            vt,
                            u = i ? n._gsTransform || {
                                skewY: 0
                            }
                                : {
                                skewY: 0
                            },
                            vi = 0 > u.scaleX,
                            ut = 0.00002,
                            l = 100000,
                            st = - Math.PI + 0.0001,
                            ht = Math.PI - 0.0001,
                            yi = y ? parseFloat(r(n, fr, t, !1, '0 0 0').split(' ') [2]) || u.zOrigin || 0 : 0;
                        for (a ? c = r(n, dr, t, !0)  : n.currentStyle && (c = n.currentStyle.filter.match(vr), c = c && 4 === c.length ? c[0].substr(4) + ',' + Number(c[2].substr(4)) + ',' + Number(c[1].substr(4)) + ',' + c[3].substr(4) + ',' + (u ? u.x : 0) + ',' + (u ? u.y : 0)  : null), f = (c || '').match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], d = f.length; --d > - 1; ) ot = Number(f[d]),
                            f[d] = (ti = ot - (ot |= 0)) ? (0 | ti * l + (0 > ti ? - 0.5 : 0.5)) / l + ot : ot;
                        if (16 === f.length) {
                            var ft = f[8],
                                w = f[9],
                                v = f[10],
                                ui = f[12],
                                fi = f[13],
                                it = f[14];
                            if (u.zOrigin && (it = - u.zOrigin, ui = ft * it - f[12], fi = w * it - f[13], it = v * it + u.zOrigin - f[14]), !i || ui !== u.x || fi !== u.y || it !== u.z) {
                                var yt,
                                    et,
                                    pt,
                                    si,
                                    e,
                                    s,
                                    ei,
                                    oi,
                                    rt = f[0],
                                    b = f[1],
                                    wt = f[2],
                                    hi = f[3],
                                    bt = f[4],
                                    k = f[5],
                                    nt = f[6],
                                    ci = f[7],
                                    p = f[11],
                                    h = u.rotationX = Math.atan2(nt, v),
                                    li = st > h || h > ht;
                                h && (e = Math.cos( - h), s = Math.sin( - h), yt = bt * e + ft * s, et = k * e + w * s, pt = nt * e + v * s, si = ci * e + p * s, ft = bt * - s + ft * e, w = k * - s + w * e, v = nt * - s + v * e, p = ci * - s + p * e, bt = yt, k = et, nt = pt),
                                    h = u.rotationY = Math.atan2(ft, rt),
                                    h && (ei = st > h || h > ht, e = Math.cos( - h), s = Math.sin( - h), yt = rt * e - ft * s, et = b * e - w * s, pt = wt * e - v * s, si = hi * e - p * s, w = b * s + w * e, v = wt * s + v * e, p = hi * s + p * e, rt = yt, b = et, wt = pt),
                                    h = u.rotation = Math.atan2(b, k),
                                    h && (oi = st > h || h > ht, e = Math.cos( - h), s = Math.sin( - h), rt = rt * e + bt * s, et = b * e + k * s, k = b * - s + k * e, nt = wt * - s + nt * e, b = et),
                                        oi && li ? u.rotation = u.rotationX = 0 : oi && ei ? u.rotation = u.rotationY = 0 : ei && li && (u.rotationY = u.rotationX = 0),
                                    u.scaleX = (Math.sqrt(rt * rt + b * b) * l + 0.5 >> 0) / l,
                                    u.scaleY = (Math.sqrt(k * k + w * w) * l + 0.5 >> 0) / l,
                                    u.scaleZ = (Math.sqrt(nt * nt + v * v) * l + 0.5 >> 0) / l,
                                    u.skewX = 0,
                                    u.perspective = p ? 1 / (0 > p ? - p : p)  : 0,
                                    u.x = ui,
                                    u.y = fi,
                                    u.z = it
                            }
                        } else if (!(y && 0 !== f.length && u.x === f[4] && u.y === f[5] && (u.rotationX || u.rotationY) || void 0 !== u.x && 'none' === r(n, 'display', t))) {
                            var ai = f.length >= 6,
                                kt = ai ? f[0] : 1,
                                dt = f[1] || 0,
                                gt = f[2] || 0,
                                ni = ai ? f[3] : 1;
                            u.x = f[4] || 0,
                                u.y = f[5] || 0,
                                ct = Math.sqrt(kt * kt + dt * dt),
                                lt = Math.sqrt(ni * ni + gt * gt),
                                tt = kt || dt ? Math.atan2(dt, kt)  : u.rotation || 0,
                                g = gt || ni ? Math.atan2(gt, ni) + tt : u.skewX || 0,
                                ii = ct - Math.abs(u.scaleX || 0),
                                ri = lt - Math.abs(u.scaleY || 0),
                                Math.abs(g) > Math.PI / 2 && Math.abs(g) < 1.5 * Math.PI && (vi ? (ct *= - 1, g += 0 >= tt ? Math.PI : - Math.PI, tt += 0 >= tt ? Math.PI : - Math.PI)  : (lt *= - 1, g += 0 >= g ? Math.PI : - Math.PI)),
                                at = (tt - u.rotation) % Math.PI,
                                vt = (g - u.skewX) % Math.PI,
                                (void 0 === u.skewX || ii > ut || - ut > ii || ri > ut || - ut > ri || at > st && ht > at && 0 != at * l >> 0 || vt > st && ht > vt && 0 != vt * l >> 0) && (u.scaleX = ct, u.scaleY = lt, u.rotation = tt, u.skewX = g),
                                y && (u.rotationX = u.rotationY = u.z = 0, u.perspective = parseFloat(o.defaultTransformPerspective) || 0, u.scaleZ = 1)
                        }
                        u.zOrigin = yi;
                        for (d in u) ut > u[d] && u[d] > - ut && (u[d] = 0);
                        return i && (n._gsTransform = u),
                            u
                    },
                    gr = function (n) {
                        var c,
                            p,
                            t = this.data,
                            g = - t.rotation,
                            rt = g + t.skewX,
                            e = 100000,
                            o = (Math.cos(g) * t.scaleX * e >> 0) / e,
                            u = (Math.sin(g) * t.scaleX * e >> 0) / e,
                            f = (Math.sin(rt) * - t.scaleY * e >> 0) / e,
                            h = (Math.cos(rt) * t.scaleY * e >> 0) / e,
                            k = this.t.style,
                            d = this.t.currentStyle,
                            b,
                            y,
                            ft,
                            et;
                        if (d) {
                            p = u,
                                u = - f,
                                f = - p,
                                c = d.filter,
                                k.filter = '';
                            var i,
                                r,
                                a = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                ut = 'absolute' !== d.position,
                                w = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + o + ', M12=' + u + ', M21=' + f + ', M22=' + h,
                                nt = t.x,
                                it = t.y;
                            if (null != t.ox && (i = (t.oxp ? 0.01 * a * t.ox : t.ox) - a / 2, r = (t.oyp ? 0.01 * v * t.oy : t.oy) - v / 2, nt += i - (i * o + r * u), it += r - (i * f + r * h)), ut) i = a / 2,
                                r = v / 2,
                                w += ', Dx=' + (i - (i * o + r * u) + nt) + ', Dy=' + (r - (i * f + r * h) + it) + ')';
                            else {
                                for (et = 8 > tt ? 1 : - 1, i = t.ieOffsetX || 0, r = t.ieOffsetY || 0, t.ieOffsetX = Math.round((a - ((0 > o ? - o : o) * a + (0 > u ? - u : u) * v)) / 2 + nt), t.ieOffsetY = Math.round((v - ((0 > h ? - h : h) * v + (0 > f ? - f : f) * a)) / 2 + it), s = 0; 4 > s; s++) y = wr[s],
                                    b = d[y],
                                    p = - 1 !== b.indexOf('px') ? parseFloat(b)  : l(this.t, y, parseFloat(b), b.replace(gt, '')) || 0,
                                    ft = p !== t[y] ? 2 > s ? - t.ieOffsetX : - t.ieOffsetY : 2 > s ? i - t.ieOffsetX : r - t.ieOffsetY,
                                    k[y] = (t[y] = Math.round(p - ft * (0 === s || 2 === s ? 1 : et))) + 'px';
                                w += ', sizingMethod=\'auto expand\')'
                            }
                            k.filter = - 1 !== c.indexOf('DXImageTransform.Microsoft.Matrix(') ? c.replace(yr, w)  : w + ' ' + c,
                                (0 === n || 1 === n) && 1 === o && 0 === u && 0 === f && 1 === h && (ut && - 1 === w.indexOf('Dx=0, Dy=0') || ni.test(c) && 100 !== parseFloat(RegExp.$1) || - 1 === c.indexOf('gradient(') && k.removeAttribute('filter'))
                        }
                    },
                    nu = function () {
                        var f,
                            e,
                            t,
                            y,
                            nt,
                            tt,
                            ot,
                            it,
                            ht,
                            i = this.data,
                            rt = this.t.style,
                            ut = i.perspective,
                            h = i.scaleX,
                            d = 0,
                            p = 0,
                            c = 0,
                            g = 0,
                            w = i.scaleY,
                            b = 0,
                            l = 0,
                            ct = 0,
                            ft = 0,
                            v = i.scaleZ,
                            s = 0,
                            lt = 0,
                            et = 0,
                            k = ut ? - 1 / ut : 0,
                            o = i.rotation,
                            st = i.zOrigin,
                            u = ',',
                            n = 100000;
                        kt && (ot = rt.top ? 'top' : rt.bottom ? 'bottom' : parseFloat(r(this.t, 'top', null, !1)) ? 'bottom' : 'top', t = r(this.t, ot, null, !1), it = parseFloat(t) || 0, ht = t.substr((it + '').length) || 'px', i._ffFix = !i._ffFix, rt[ot] = (i._ffFix ? it + 0.05 : it - 0.05) + ht),
                            (o || i.skewX) && (t = h * Math.cos(o), y = w * Math.sin(o), o -= i.skewX, d = h * - Math.sin(o), w *= Math.cos(o), h = t, g = y),
                            o = i.rotationY,
                            o && (f = Math.cos(o), e = Math.sin(o), t = h * f, y = g * f, nt = v * - e, tt = k * - e, p = h * e, b = g * e, v *= f, k *= f, h = t, g = y, ct = nt, lt = tt),
                            o = i.rotationX,
                            o && (f = Math.cos(o), e = Math.sin(o), t = d * f + p * e, y = w * f + b * e, nt = ft * f + v * e, tt = et * f + k * e, p = d * - e + p * f, b = w * - e + b * f, v = ft * - e + v * f, k = et * - e + k * f, d = t, w = y, ft = nt, et = tt),
                            st && (s -= st, c = p * s, l = b * s, s = v * s + st),
                            c = (t = (c += i.x) - (c |= 0)) ? (0 | t * n + (0 > t ? - 0.5 : 0.5)) / n + c : c,
                            l = (t = (l += i.y) - (l |= 0)) ? (0 | t * n + (0 > t ? - 0.5 : 0.5)) / n + l : l,
                            s = (t = (s += i.z) - (s |= 0)) ? (0 | t * n + (0 > t ? - 0.5 : 0.5)) / n + s : s,
                            rt[a] = 'matrix3d(' + (h * n >> 0) / n + u + (g * n >> 0) / n + u + (ct * n >> 0) / n + u + (lt * n >> 0) / n + u + (d * n >> 0) / n + u + (w * n >> 0) / n + u + (ft * n >> 0) / n + u + (et * n >> 0) / n + u + (p * n >> 0) / n + u + (b * n >> 0) / n + u + (v * n >> 0) / n + u + (k * n >> 0) / n + u + c + u + l + u + s + u + (ut ? 1 + - s / ut : 1) + ')'
                    },
                    tu = function () {
                        var e,
                            o,
                            u,
                            v,
                            f,
                            s,
                            t,
                            h,
                            c,
                            n = this.data,
                            l = this.t,
                            i = l.style;
                        kt && (e = i.top ? 'top' : i.bottom ? 'bottom' : parseFloat(r(l, 'top', null, !1)) ? 'bottom' : 'top', o = r(l, e, null, !1), u = parseFloat(o) || 0, v = o.substr((u + '').length) || 'px', n._ffFix = !n._ffFix, i[e] = (n._ffFix ? u + 0.05 : u - 0.05) + v),
                                n.rotation || n.skewX ? (f = n.rotation, s = f - n.skewX, t = 100000, h = n.scaleX * t, c = n.scaleY * t, i[a] = 'matrix(' + (Math.cos(f) * h >> 0) / t + ',' + (Math.sin(f) * h >> 0) / t + ',' + (Math.sin(s) * - c >> 0) / t + ',' + (Math.cos(s) * c >> 0) / t + ',' + n.x + ',' + n.y + ')')  : i[a] = 'matrix(' + n.scaleX + ',0,0,' + n.scaleY + ',' + n.x + ',' + n.y + ')'
                    };
                for (u('transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation', {
                    parser: function (n, t, i, u, o, s, h) {
                        if (u._transform) return o;
                        var v,
                            it,
                            k,
                            b,
                            tt,
                            rt,
                            g,
                            l = u._transform = vt(n, f, !0),
                            d = n.style,
                            ut = 0.000001,
                            ft = ur.length,
                            c = h,
                            nt = {
                            };
                        if ('string' == typeof c.transform && a) k = d.cssText,
                            d[a] = c.transform,
                            d.display = 'block',
                            v = vt(n, null, !1),
                            d.cssText = k;
                        else if ('object' == typeof c) {
                            if (v = {
                                scaleX: w(null != c.scaleX ? c.scaleX : c.scale, l.scaleX),
                                scaleY: w(null != c.scaleY ? c.scaleY : c.scale, l.scaleY),
                                scaleZ: w(null != c.scaleZ ? c.scaleZ : c.scale, l.scaleZ),
                                x: w(c.x, l.x),
                                y: w(c.y, l.y),
                                z: w(c.z, l.z),
                                perspective: w(c.transformPerspective, l.perspective)
                            }, g = c.directionalRotation, null != g) if ('object' == typeof g) for (k in g) c[k] = g[k];
                            else c.rotation = g;
                            v.rotation = et('rotation' in c ? c.rotation : 'shortRotation' in c ? c.shortRotation + '_short' : 'rotationZ' in c ? c.rotationZ : l.rotation * p, l.rotation, 'rotation', nt),
                                y && (v.rotationX = et('rotationX' in c ? c.rotationX : 'shortRotationX' in c ? c.shortRotationX + '_short' : l.rotationX * p || 0, l.rotationX, 'rotationX', nt), v.rotationY = et('rotationY' in c ? c.rotationY : 'shortRotationY' in c ? c.shortRotationY + '_short' : l.rotationY * p || 0, l.rotationY, 'rotationY', nt)),
                                v.skewX = null == c.skewX ? l.skewX : et(c.skewX, l.skewX),
                                v.skewY = null == c.skewY ? l.skewY : et(c.skewY, l.skewY),
                                (it = v.skewY - l.skewY) && (v.skewX += it, v.rotation += it)
                        }
                        for (tt = l.z || l.rotationX || l.rotationY || v.z || v.rotationX || v.rotationY || v.perspective, tt || null == c.scale || (v.scaleZ = 1); --ft > - 1; ) i = ur[ft],
                            b = v[i] - l[i],
                            (b > ut || - ut > b || null != ct[i]) && (rt = !0, o = new e(l, i, l[i], b, o), i in nt && (o.e = nt[i]), o.xs0 = 0, o.plugin = s, u._overwriteProps.push(o.n));
                        return b = c.transformOrigin,
                            (b || y && tt && l.zOrigin) && (a ? (rt = !0, b = (b || r(n, i, f, !1, '50% 50%')) + '', i = fr, o = new e(d, i, 0, 0, o, - 1, 'css_transformOrigin'), o.b = d[i], o.plugin = s, y ? (k = l.zOrigin, b = b.split(' '), l.zOrigin = (b.length > 2 ? parseFloat(b[2])  : k) || 0, o.xs0 = o.e = d[i] = b[0] + ' ' + (b[1] || '50%') + ' 0px', o = new e(l, 'zOrigin', 0, 0, o, - 1, o.n), o.b = k, o.xs0 = o.e = l.zOrigin)  : o.xs0 = o.e = d[i] = b)  : ui(b + '', l)),
                            rt && (u._transformType = tt || 3 === this._transformType ? 3 : 2),
                            o
                    },
                    prefix: !0
                }), u('boxShadow', {
                    defaultValue: '0px 0px 0px 0px #999',
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: 'inset'
                }), u('borderRadius', {
                    defaultValue: '0px',
                    parser: function (n, t, i, u, e) {
                        t = this.format(t);
                        var tt,
                            a,
                            d,
                            h,
                            o,
                            s,
                            w,
                            v,
                            it,
                            ut,
                            c,
                            y,
                            g,
                            b,
                            k,
                            nt,
                            p = [
                                'borderTopLeftRadius',
                                'borderTopRightRadius',
                                'borderBottomRightRadius',
                                'borderBottomLeftRadius'
                            ],
                            ft = n.style;
                        for (it = parseFloat(n.offsetWidth), ut = parseFloat(n.offsetHeight), tt = t.split(' '), a = 0; p.length > a; a++) this.p.indexOf('border') && (p[a] = rt(p[a])),
                            o = h = r(n, p[a], f, !1, '0px'),
                            - 1 !== o.indexOf(' ') && (h = o.split(' '), o = h[0], h = h[1]),
                            s = d = tt[a],
                            w = parseFloat(o),
                            y = o.substr((w + '').length),
                            g = '=' === s.charAt(1),
                            g ? (v = parseInt(s.charAt(0) + '1', 10), s = s.substr(2), v *= parseFloat(s), c = s.substr((v + '').length - (0 > v ? 1 : 0)) || '')  : (v = parseFloat(s), c = s.substr((v + '').length)),
                            '' === c && (c = yt[i] || y),
                            c !== y && (b = l(n, 'borderLeft', w, y), k = l(n, 'borderTop', w, y), '%' === c ? (o = 100 * (b / it) + '%', h = 100 * (k / ut) + '%')  : 'em' === c ? (nt = l(n, 'borderLeft', 1, 'em'), o = b / nt + 'em', h = k / nt + 'em')  : (o = b + 'px', h = k + 'px'), g && (s = parseFloat(o) + v + c, d = parseFloat(h) + v + c)),
                            e = at(ft, p[a], o + ' ' + h, s + ' ' + d, !1, '0px', e);
                        return e
                    },
                    prefix: !0,
                    formatter: tr('0px 0px 0px 0px', !1, !0)
                }), u('backgroundPosition', {
                    defaultValue: '0 0',
                    parser: function (n, t, i, u, e, o) {
                        var c,
                            b,
                            h,
                            v,
                            y,
                            l,
                            p = 'background-position',
                            a = f || ut(n, null),
                            s = this.format((a ? tt ? a.getPropertyValue(p + '-x') + ' ' + a.getPropertyValue(p + '-y')  : a.getPropertyValue(p)  : n.currentStyle.backgroundPositionX + ' ' + n.currentStyle.backgroundPositionY) || '0 0'),
                            w = this.format(t);
                        if ( - 1 !== s.indexOf('%') != ( - 1 !== w.indexOf('%')) && (l = r(n, 'backgroundImage').replace(lr, ''), l && 'none' !== l)) {
                            for (c = s.split(' '), b = w.split(' '), ti.setAttribute('src', l), h = 2; --h > - 1; ) s = c[h],
                                v = - 1 !== s.indexOf('%'),
                                v !== ( - 1 !== b[h].indexOf('%')) && (y = 0 === h ? n.offsetWidth - ti.width : n.offsetHeight - ti.height, c[h] = v ? parseFloat(s) / 100 * y + 'px' : 100 * (parseFloat(s) / y) + '%');
                            s = c.join(' ')
                        }
                        return this.parseComplex(n.style, s, w, e, o)
                    },
                    formatter: ui
                }), u('backgroundSize', {
                    defaultValue: '0 0',
                    formatter: ui
                }), u('perspective', {
                    defaultValue: '0px',
                    prefix: !0
                }), u('perspectiveOrigin', {
                    defaultValue: '50% 50%',
                    prefix: !0
                }), u('transformStyle', {
                    prefix: !0
                }), u('backfaceVisibility', {
                    prefix: !0
                }), u('margin', {
                    parser: ir('marginTop,marginRight,marginBottom,marginLeft')
                }), u('padding', {
                    parser: ir('paddingTop,paddingRight,paddingBottom,paddingLeft')
                }), u('clip', {
                    defaultValue: 'rect(0px,0px,0px,0px)',
                    parser: function (n, t, i, u, e, o) {
                        var c,
                            s,
                            h;
                        return 9 > tt ? (s = n.currentStyle, h = 8 > tt ? ' ' : ',', c = 'rect(' + s.clipTop + h + s.clipRight + h + s.clipBottom + h + s.clipLeft + ')', t = this.format(t).split(',').join(h))  : (c = this.format(r(n, this.p, f, !1, this.dflt)), t = this.format(t)),
                            this.parseComplex(n.style, c, t, e, o)
                    }
                }), u('textShadow', {
                    defaultValue: '0px 0px 0px #999',
                    color: !0,
                    multi: !0
                }), u('autoRound,strictUnits', {
                    parser: function (n, t, i, r, u) {
                        return u
                    }
                }), u('border', {
                    defaultValue: '0px solid #000',
                    parser: function (n, t, i, u, e, o) {
                        return this.parseComplex(n.style, this.format(r(n, 'borderTopWidth', f, !1, '0px') + ' ' + r(n, 'borderTopStyle', f, !1, 'solid') + ' ' + r(n, 'borderTopColor', f, !1, '#000')), this.format(t), e, o)
                    },
                    color: !0,
                    formatter: function (n) {
                        var t = n.split(' ');
                        return t[0] + ' ' + (t[1] || 'solid') + ' ' + (n.match(g) || ['#000']) [0]
                    }
                }), u('float,cssFloat,styleFloat', {
                    parser: function (n, t, i, r, u) {
                        var f = n.style,
                            o = 'cssFloat' in f ? 'cssFloat' : 'styleFloat';
                        return new e(f, o, 0, 0, u, - 1, i, !1, 0, f[o], t)
                    }
                }), er = function (n) {
                    var u,
                        i = this.t,
                        t = i.filter,
                        f = this.s + this.c * n >> 0;
                    100 === f && ( - 1 === t.indexOf('atrix(') && - 1 === t.indexOf('radient(') ? (i.removeAttribute('filter'), u = !r(this.data, 'filter'))  : (i.filter = t.replace(cr, ''), u = !0)),
                        u || (this.xn1 && (i.filter = t = t || 'alpha(opacity=100)'), - 1 === t.indexOf('opacity') ? i.filter += ' alpha(opacity=' + f + ')' : i.filter = t.replace(ni, 'opacity=' + f))
                }, u('opacity,alpha,autoAlpha', {
                    defaultValue: '1',
                    parser: function (n, t, i, u, o, s) {
                        var l,
                            h = parseFloat(r(n, 'opacity', f, !1, '1')),
                            c = n.style;
                        return t = parseFloat(t),
                            'autoAlpha' === i && (l = r(n, 'visibility', f), 1 === h && 'hidden' === l && 0 !== t && (h = 0), o = new e(c, 'visibility', 0, 0, o, - 1, null, !1, 0, 0 !== h ? 'visible' : 'hidden', 0 === t ? 'hidden' : 'visible'), o.xs0 = 'visible', u._overwriteProps.push(o.n)),
                            k ? o = new e(c, 'opacity', h, t - h, o)  : (o = new e(c, 'opacity', 100 * h, 100 * (t - h), o), o.xn1 = 'autoAlpha' === i ? 1 : 0, c.zoom = 1, o.type = 2, o.b = 'alpha(opacity=' + o.s + ')', o.e = 'alpha(opacity=' + (o.s + o.c) + ')', o.data = n, o.plugin = s, o.setRatio = er),
                            o
                    }
                }), si = function (n, t) {
                    t && (n.removeProperty ? n.removeProperty(t.replace(vi, '-$1').toLowerCase())  : n.removeAttribute(t))
                }, or = function (n) {
                    if (this.t._gsClassPT = this, 1 === n || 0 === n) {
                        this.t.className = 0 === n ? this.b : this.e;
                        for (var t = this.data, i = this.t.style; t; ) t.v ? i[t.p] = t.v : si(i, t.p),
                            t = t._next;
                        1 === n && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.className !== this.e && (this.t.className = this.e)
                }, u('className', {
                    parser: function (n, t, i, r, u, o, s) {
                        var l,
                            y,
                            a,
                            v,
                            h,
                            c = n.className,
                            p = n.style.cssText;
                        if (u = r._classNamePT = new e(n, i, 0, 0, u, 2), u.setRatio = or, u.pr = - 11, nt = !0, u.b = c, y = ft(n, f), a = n._gsClassPT) {
                            for (v = {
                            }, h = a.data; h; ) v[h.p] = 1,
                                h = h._next;
                            a.setRatio(1)
                        }
                        return n._gsClassPT = u,
                            u.e = '=' !== t.charAt(1) ? t : '+' === t.charAt(0) ? c + ' ' + t.substr(2)  : c.replace(RegExp('\\libs*\\b' + t.substr(2) + '\\b\\libs*'), ''),
                            r._tween._duration && (n.className = u.e, l = ri(n, y, ft(n), s, v), n.className = c, u.data = l.firstMPT, n.style.cssText = p, u = u.xfirst = r.parse(n, l.difs, u, o)),
                            u
                    }
                }), sr = function (n) {
                    if ((1 === n || 0 === n) && this.data._totalTime === this.data._totalDuration) for (var t, i = 'all' === this.e, r = this.t.style, u = i ? r.cssText.split(';')  : this.e.split(','), f = u.length, e = h.transform.parse; --f > - 1; ) t = u[f],
                        i && (t = t.substr(0, t.indexOf(':')).split(' ').join('')),
                        h[t] && (t = h[t].parse === e ? a : h[t].p),
                        si(r, t)
                }, u('clearProps', {
                    parser: function (n, t, i, r, u) {
                        return u = new e(n, i, 0, 0, u, 2),
                            u.setRatio = sr,
                            u.e = t,
                            u.pr = - 10,
                            u.data = r._tween,
                            nt = !0,
                            u
                    }
                }), i = 'bezier,throwProps,physicsProps,physics2D'.split(','), s = i.length; s--; ) kr(i[s]);
                return i = o.prototype,
                    i._firstPT = null,
                    i._onInitTween = function (n, t, i) {
                        if (!n.nodeType) return !1;
                        this._target = n,
                            this._tween = i,
                            this._vars = t,
                            wt = t.autoRound,
                            nt = !1,
                            yt = t.suffixMap || o.suffixMap,
                            f = ut(n, ''),
                            pt = this._overwriteProps;
                        var c,
                            s,
                            u,
                            l,
                            b,
                            d,
                            p,
                            v,
                            w,
                            h = n.style;
                        if (hi && '' === h.zIndex && (c = r(n, 'zIndex', f), ('auto' === c || '' === c) && (h.zIndex = 0)), 'string' == typeof t && (l = h.cssText, c = ft(n, f), h.cssText = l + ';' + t, c = ri(n, c, ft(n)).difs, !k && hr.test(t) && (c.opacity = parseFloat(RegExp.$1)), t = c, h.cssText = l), this._firstPT = s = this.parse(n, t, null), this._transformType) {
                            for (w = 3 === this._transformType, a ? bt && (hi = !0, '' === h.zIndex && (p = r(n, 'zIndex', f), ('auto' === p || '' === p) && (h.zIndex = 0)), ci && (h.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (w ? 'visible' : 'hidden')))  : h.zoom = 1, u = s; u && u._next; ) u = u._next;
                            v = new e(n, 'transform', 0, 0, null, 2),
                                this._linkCSSP(v, null, u),
                                v.setRatio = w && y ? nu : a ? tu : gr,
                                v.data = this._transform || vt(n, f, !0),
                                pt.pop()
                        }
                        if (nt) {
                            for (; s; ) {
                                for (d = s._next, u = l; u && u.pr > s.pr; ) u = u._next;
                                (s._prev = u ? u._prev : b) ? s._prev._next = s : l = s,
                                    (s._next = u) ? u._prev = s : b = s,
                                    s = d
                            }
                            this._firstPT = l
                        }
                        return !0
                    },
                    i.parse = function (n, t, i, u) {
                        var o,
                            d,
                            c,
                            a,
                            y,
                            s,
                            p,
                            v,
                            w,
                            b,
                            k = n.style;
                        for (o in t) s = t[o],
                            d = h[o],
                            d ? i = d.parse(n, s, o, this, i, u, t)  : (y = r(n, o, f) + '', w = 'string' == typeof s, 'color' === o || 'fill' === o || 'stroke' === o || - 1 !== o.indexOf('Color') || w && ai.test(s) ? (w || (s = ei(s), s = (s.length > 3 ? 'rgba(' : 'rgb(') + s.join(',') + ')'), i = at(k, o, y, s, !0, 'transparent', i, 0, u))  : !w || - 1 === s.indexOf(' ') && - 1 === s.indexOf(',') ? (c = parseFloat(y), p = c || 0 === c ? y.substr((c + '').length)  : '', ('' === y || 'auto' === y) && ('width' === o || 'height' === o ? (c = br(n, o, f), p = 'px')  : 'left' === o || 'top' === o ? (c = gi(n, o, f), p = 'px')  : (c = 'opacity' !== o ? 0 : 1, p = '')), b = w && '=' === s.charAt(1), b ? (a = parseInt(s.charAt(0) + '1', 10), s = s.substr(2), a *= parseFloat(s), v = s.replace(gt, ''))  : (a = parseFloat(s), v = w ? s.substr((a + '').length) || '' : ''), '' === v && (v = yt[o] || p), s = a || 0 === a ? (b ? a + c : a) + v : t[o], p !== v && '' !== v && (a || 0 === a) && (c || 0 === c) && (c = l(n, o, c, p), '%' === v ? (c /= l(n, o, 100, '%') / 100, c > 100 && (c = 100), t.strictUnits !== !0 && (y = c + '%'))  : 'em' === v ? c /= l(n, o, 1, 'em')  : (a = l(n, o, a, v), v = 'px'), b && (a || 0 === a) && (s = a + c + v)), b && (a += c), !c && 0 !== c || !a && 0 !== a ? s || 'NaN' != s + '' && null != s ? (i = new e(k, o, a || c || 0, 0, i, - 1, 'css_' + o, !1, 0, y, s), i.xs0 = 'none' !== s || 'display' !== o && - 1 === o.indexOf('Style') ? s : y)  : ki('invalid ' + o + ' tween value: ' + t[o])  : (i = new e(k, o, c, a - c, i, 0, 'css_' + o, wt !== !1 && ('px' === v || 'zIndex' === o), 0, y, s), i.xs0 = v))  : i = at(k, o, y, s, !0, null, i, 0, u)),
                            u && i && !i.plugin && (i.plugin = u);
                        return i
                    },
                    i.setRatio = function (n) {
                        var i,
                            u,
                            r,
                            t = this._firstPT,
                            f = 0.000001;
                        if (1 !== n || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (n || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === - 0.000001) for (; t; ) {
                            if (i = t.c * n + t.s, t.r ? i = i > 0 ? i + 0.5 >> 0 : i - 0.5 >> 0 : f > i && i > - f && (i = 0), t.type) if (1 === t.type) if (r = t.l, 2 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2;
                            else if (3 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
                            else if (4 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
                            else if (5 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
                            else {
                                for (u = t.xs0 + i + t.xs1, r = 1; t.l > r; r++) u += t['xn' + r] + t['xs' + (r + 1)];
                                t.t[t.p] = u
                            } else - 1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(n);
                            else t.t[t.p] = i + t.xs0;
                            t = t._next
                        } else for (; t; ) 2 !== t.type ? t.t[t.p] = t.b : t.setRatio(n),
                            t = t._next;
                        else for (; t; ) 2 !== t.type ? t.t[t.p] = t.e : t.setRatio(n),
                            t = t._next
                    },
                    i._enableTransforms = function (n) {
                        this._transformType = n || 3 === this._transformType ? 3 : 2
                    },
                    i._linkCSSP = function (n, t, i, r) {
                        return n && (t && (t._prev = n), n._next && (n._next._prev = n._prev), i ? i._next = n : r || null !== this._firstPT || (this._firstPT = n), n._prev ? n._prev._next = n._next : this._firstPT === n && (this._firstPT = n._next), n._next = t, n._prev = i),
                            n
                    },
                    i._kill = function (t) {
                        var i,
                            f,
                            r,
                            u = t;
                        if (t.css_autoAlpha || t.css_alpha) {
                            u = {
                            };
                            for (f in t) u[f] = t[f];
                            u.css_opacity = 1,
                                u.css_autoAlpha && (u.css_visibility = 1)
                        }
                        return t.css_className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev)  : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null),
                            n.prototype._kill.call(this, u)
                    },
                    ot = function (n, t, i) {
                        var e,
                            u,
                            r,
                            f;
                        if (n.slice) for (u = n.length; --u > - 1; ) ot(n[u], t, i);
                        else for (e = n.childNodes, u = e.length; --u > - 1; ) r = e[u],
                            f = r.type,
                            r.style && (t.push(ft(r)), i && i.push(r)),
                            1 !== f && 9 !== f && 11 !== f || !r.childNodes.length || ot(r, t, i)
                    },
                    o.cascadeTo = function (n, i, r) {
                        var u,
                            f,
                            o,
                            e = t.to(n, i, r),
                            h = [
                                e
                            ],
                            c = [
                            ],
                            l = [
                            ],
                            s = [
                            ],
                            a = t._internals.reservedProps;
                        for (n = e._targets || e.target, ot(n, c, s), e.render(i, !0), ot(n, l), e.render(0, !0), e._enabled(!0), u = s.length; --u > - 1; ) if (f = ri(s[u], c[u], l[u]), f.firstMPT) {
                            f = f.difs;
                            for (o in r) a[o] && (f[o] = r[o]);
                            h.push(t.to(s[u], i, f))
                        }
                        return h
                    },
                    n.activate([o]),
                    o
            }, !0),
            function () {
                var t = window._gsDefine.plugin({
                        propName: 'roundProps',
                        priority: - 1,
                        API: 2,
                        init: function (n, t, i) {
                            return this._tween = i,
                                !0
                        }
                    }),
                    n = t.prototype;
                n._onInitAllProps = function () {
                    for (var u, n, i, t = this._tween, f = t.vars.roundProps instanceof Array ? t.vars.roundProps : t.vars.roundProps.split(','), r = f.length, e = {
                    }, o = t._propLookup.roundProps; --r > - 1; ) e[f[r]] = 1;
                    for (r = f.length; --r > - 1; ) for (u = f[r], n = t._firstPT; n; ) i = n._next,
                        n.pg ? n.t._roundProps(e, !0)  : n.n === u && (this._add(n.t, u, n.s, n.c), i && (i._prev = n._prev), n._prev ? n._prev._next = i : t._firstPT === n && (t._firstPT = i), n._next = n._prev = null, t._propLookup[u] = o),
                        n = i;
                    return !1
                },
                    n._add = function (n, t, i, r) {
                        this._addTween(n, t, i, i + r, t, !0),
                            this._overwriteProps.push(t)
                    }
            }(),
            window._gsDefine.plugin({
                propName: 'attr',
                API: 2,
                init: function (n, t) {
                    var i;
                    if ('function' != typeof n.setAttribute) return !1;
                    this._target = n,
                        this._proxy = {
                        };
                    for (i in t) this._addTween(this._proxy, i, parseFloat(n.getAttribute(i)), t[i], i),
                        this._overwriteProps.push(i);
                    return !0
                },
                set: function (n) {
                    this._super.setRatio.call(this, n);
                    for (var t, i = this._overwriteProps, r = i.length; --r > - 1; ) t = i[r],
                        this._target.setAttribute(t, this._proxy[t] + '')
                }
            }),
            window._gsDefine.plugin({
                propName: 'directionalRotation',
                API: 2,
                init: function (n, t) {
                    'object' != typeof t && (t = {
                        rotation: t
                    }),
                        this.finals = {
                        };
                    var r,
                        f,
                        e,
                        h,
                        i,
                        s,
                        o,
                        u = t.useRadians === !0 ? 2 * Math.PI : 360;
                    for (r in t) 'useRadians' !== r && (s = (t[r] + '').split('_'), f = s[0], o = s[1], e = parseFloat('function' != typeof n[r] ? n[r] : n[r.indexOf('set') || 'function' != typeof n['get' + r.substr(3)] ? r : 'get' + r.substr(3)]()), h = this.finals[r] = 'string' == typeof f && '=' === f.charAt(1) ? e + parseInt(f.charAt(0) + '1', 10) * Number(f.substr(2))  : Number(f) || 0, i = h - e, 'short' === o ? (i %= u, i !== i % (u / 2) && (i = 0 > i ? i + u : i - u))  : 'cw' === o && 0 > i ? i = (i + 9999999999 * u) % u - (0 | i / u) * u : 'ccw' === o && i > 0 && (i = (i - 9999999999 * u) % u - (0 | i / u) * u), this._addTween(n, r, e, e + i, r), this._overwriteProps.push(r));
                    return !0
                },
                set: function (n) {
                    var t;
                    if (1 !== n) this._super.setRatio.call(this, n);
                    else for (t = this._firstPT; t; ) t.f ? t.t[t.p](this.finals[t.p])  : t.t[t.p] = this.finals[t.p],
                        t = t._next
                }
            })._autoCSS = !0,
            window._gsDefine('easing.Back', [
                'easing.Ease'
            ], function (n) {
                var f,
                    u,
                    h,
                    v = window.GreenSockGlobals || window,
                    p = v.com.greensock,
                    s = 2 * Math.PI,
                    y = Math.PI / 2,
                    r = p._class,
                    t = function (t, i) {
                        var u = r('easing.' + t, function () {
                            }, !0),
                            f = u.prototype = new n;
                        return f.constructor = u,
                            f.getRatio = i,
                            u
                    },
                    c = n.register || function () {
                    },
                    e = function (n, t, i, u) {
                        var f = r('easing.' + n, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new u
                        }, !0);
                        return c(f, n),
                            f
                    },
                    l = function (n, t, i) {
                        this.t = n,
                            this.v = t,
                            i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - n)
                    },
                    a = function (t, i) {
                        var u = r('easing.' + t, function (n) {
                                this._p1 = n || 0 === n ? n : 1.70158,
                                    this._p2 = 1.525 * this._p1
                            }, !0),
                            f = u.prototype = new n;
                        return f.constructor = u,
                            f.getRatio = i,
                            f.config = function (n) {
                                return new u(n)
                            },
                            u
                    },
                    w = e('Back', a('BackOut', function (n) {
                        return (n -= 1) * n * ((this._p1 + 1) * n + this._p1) + 1
                    }), a('BackIn', function (n) {
                        return n * n * ((this._p1 + 1) * n - this._p1)
                    }), a('BackInOut', function (n) {
                        return 1 > (n *= 2) ? 0.5 * n * n * ((this._p2 + 1) * n - this._p2)  : 0.5 * ((n -= 2) * n * ((this._p2 + 1) * n + this._p2) + 2)
                    })),
                    o = r('easing.SlowMo', function (n, t, i) {
                        t = t || 0 === t ? t : 0.7,
                                null == n ? n = 0.7 : n > 1 && (n = 1),
                            this._p = 1 !== n ? t : 0,
                            this._p1 = (1 - n) / 2,
                            this._p2 = n,
                            this._p3 = this._p1 + this._p2,
                            this._calcEnd = i === !0
                    }, !0),
                    i = o.prototype = new n;
                return i.constructor = o,
                    i.getRatio = function (n) {
                        var t = n + (0.5 - n) * this._p;
                        return this._p1 > n ? this._calcEnd ? 1 - (n = 1 - n / this._p1) * n : t - (n = 1 - n / this._p1) * n * n * n * t : n > this._p3 ? this._calcEnd ? 1 - (n = (n - this._p3) / this._p1) * n : t + (n - t) * (n = (n - this._p3) / this._p1) * n * n * n : this._calcEnd ? 1 : t
                    },
                    o.ease = new o(0.7, 0.7),
                    i.config = o.config = function (n, t, i) {
                        return new o(n, t, i)
                    },
                    f = r('easing.SteppedEase', function (n) {
                        n = n || 1,
                            this._p1 = 1 / n,
                            this._p2 = n + 1
                    }, !0),
                    i = f.prototype = new n,
                    i.constructor = f,
                    i.getRatio = function (n) {
                        return 0 > n ? n = 0 : n >= 1 && (n = 0.999999999),
                            (this._p2 * n >> 0) * this._p1
                    },
                    i.config = f.config = function (n) {
                        return new f(n)
                    },
                    u = r('easing.RoughEase', function (t) {
                        t = t || {
                        };
                        for (var i, r, u, f, h, e, c = t.taper || 'none', a = [
                        ], w = 0, v = 0 | (t.points || 20), o = v, y = t.randomize !== !1, b = t.clamp === !0, p = t.template instanceof n ? t.template : null, s = 'number' == typeof t.strength ? 0.4 * t.strength : 0.4; --o > - 1; ) i = y ? Math.random()  : 1 / v * o,
                            r = p ? p.getRatio(i)  : i,
                                'none' === c ? u = s : 'out' === c ? (f = 1 - i, u = f * f * s)  : 'in' === c ? u = i * i * s : 0.5 > i ? (f = 2 * i, u = 0.5 * f * f * s)  : (f = 2 * (1 - i), u = 0.5 * f * f * s),
                            y ? r += Math.random() * u - 0.5 * u : o % 2 ? r += 0.5 * u : r -= 0.5 * u,
                            b && (r > 1 ? r = 1 : 0 > r && (r = 0)),
                            a[w++] = {
                                x: i,
                                y: r
                            };
                        for (a.sort(function (n, t) {
                            return n.x - t.x
                        }), e = new l(1, 1, null), o = v; --o > - 1; ) h = a[o],
                            e = new l(h.x, h.y, e);
                        this._prev = new l(0, 0, 0 !== e.t ? e : e.next)
                    }, !0),
                    i = u.prototype = new n,
                    i.constructor = u,
                    i.getRatio = function (n) {
                        var t = this._prev;
                        if (n > t.t) {
                            for (; t.next && n >= t.t; ) t = t.next;
                            t = t.prev
                        } else for (; t.prev && t.t >= n; ) t = t.prev;
                        return this._prev = t,
                            t.v + (n - t.t) / t.gap * t.c
                    },
                    i.config = function (n) {
                        return new u(n)
                    },
                    u.ease = new u,
                    e('Bounce', t('BounceOut', function (n) {
                        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375
                    }), t('BounceIn', function (n) {
                        return 1 / 2.75 > (n = 1 - n) ? 1 - 7.5625 * n * n : 2 / 2.75 > n ? 1 - (7.5625 * (n -= 1.5 / 2.75) * n + 0.75)  : 2.5 / 2.75 > n ? 1 - (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375)  : 1 - (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375)
                    }), t('BounceInOut', function (n) {
                        var t = 0.5 > n;
                        return n = t ? 1 - 2 * n : 2 * n - 1,
                            n = 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375,
                            t ? 0.5 * (1 - n)  : 0.5 * n + 0.5
                    })),
                    e('Circ', t('CircOut', function (n) {
                        return Math.sqrt(1 - (n -= 1) * n)
                    }), t('CircIn', function (n) {
                        return - (Math.sqrt(1 - n * n) - 1)
                    }), t('CircInOut', function (n) {
                        return 1 > (n *= 2) ? - 0.5 * (Math.sqrt(1 - n * n) - 1)  : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
                    })),
                    h = function (t, i, u) {
                        var f = r('easing.' + t, function (n, t) {
                                this._p1 = n || 1,
                                    this._p2 = t || u,
                                    this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                            }, !0),
                            e = f.prototype = new n;
                        return e.constructor = f,
                            e.getRatio = i,
                            e.config = function (n, t) {
                                return new f(n, t)
                            },
                            f
                    },
                    e('Elastic', h('ElasticOut', function (n) {
                        return this._p1 * Math.pow(2, - 10 * n) * Math.sin((n - this._p3) * s / this._p2) + 1
                    }, 0.3), h('ElasticIn', function (n) {
                        return - (this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2))
                    }, 0.3), h('ElasticInOut', function (n) {
                        return 1 > (n *= 2) ? - 0.5 * this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2)  : 0.5 * this._p1 * Math.pow(2, - 10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2) + 1
                    }, 0.45)),
                    e('Expo', t('ExpoOut', function (n) {
                        return 1 - Math.pow(2, - 10 * n)
                    }), t('ExpoIn', function (n) {
                        return Math.pow(2, 10 * (n - 1)) - 0.001
                    }), t('ExpoInOut', function (n) {
                        return 1 > (n *= 2) ? 0.5 * Math.pow(2, 10 * (n - 1))  : 0.5 * (2 - Math.pow(2, - 10 * (n - 1)))
                    })),
                    e('Sine', t('SineOut', function (n) {
                        return Math.sin(n * y)
                    }), t('SineIn', function (n) {
                        return - Math.cos(n * y) + 1
                    }), t('SineInOut', function (n) {
                        return - 0.5 * (Math.cos(Math.PI * n) - 1)
                    })),
                    r('easing.EaseLookup', {
                        find: function (t) {
                            return n.map[t]
                        }
                    }, !0),
                    c(v.SlowMo, 'SlowMo', 'ease,'),
                    c(u, 'RoughEase', 'ease,'),
                    c(f, 'SteppedEase', 'ease,'),
                    w
            }, !0)
    }), function (n) {
    var e,
        u,
        t,
        r,
        o,
        nt = n.GreenSockGlobals || n,
        ot = function (n) {
            for (var r = n.split('.'), i = nt, t = 0; r.length > t; t++) i[r[t]] = i = i[r[t]] || {
            };
            return i
        },
        l = ot('com.greensock'),
        st = function () {
        },
        w = {
        },
        ht = function (t, i, r, u) {
            this.sc = w[t] ? w[t].sc : [
            ],
                w[t] = this,
                this.gsClass = null,
                this.func = r;
            var f = [
            ];
            this.check = function (e) {
                for (var h, c, l, s, o = i.length, a = o; --o > - 1; ) (h = w[i[o]] || new ht(i[o], [
                ])).gsClass ? (f[o] = h.gsClass, a--)  : e && h.sc.push(this);
                if (0 === a && r) for (c = ('com.greensock.' + t).split('.'), l = c.pop(), s = ot(c.join('.')) [l] = this.gsClass = r.apply(r, f), u && (nt[l] = s, 'function' == typeof define && define.amd ? define((n.GreenSockAMDPath ? n.GreenSockAMDPath + '/' : '') + t.split('.').join('/'), [
                ], function () {
                    return s
                })  : 'undefined' != typeof module && module.exports && (module.exports = s)), o = 0; this.sc.length > o; o++) this.sc[o].check()
            },
                this.check(!0)
        },
        tt = n._gsDefine = function (n, t, i, r) {
            return new ht(n, t, i, r)
        },
        h = l._class = function (n, t, i) {
            return t = t || function () {
            },
                tt(n, [
                ], function () {
                    return t
                }, i),
                t
        },
        ut,
        f,
        d,
        s;
    tt.globals = nt;
    var ct = [
            0,
            0,
            1,
            1
        ],
        it = [
        ],
        c = h('easing.Ease', function (n, t, i, r) {
            this._func = n,
                this._type = i || 0,
                this._power = r || 0,
                this._params = t ? ct.concat(t)  : ct
        }, !0),
        b = c.map = {
        },
        rt = c.register = function (n, t, i, r) {
            for (var o, u, e, f, s = t.split(','), c = s.length, a = (i || 'easeIn,easeOut,easeInOut').split(','); --c > - 1; ) for (u = s[c], o = r ? h('easing.' + u, null, !0)  : l.easing[u] || {
            }, e = a.length; --e > - 1; ) f = a[e],
                b[u + '.' + f] = b[f + u] = o[f] = n.getRatio ? n : n[f] || new n
        };
    for (t = c.prototype, t._calcEnd = !1, t.getRatio = function (n) {
        if (this._func) return this._params[0] = n,
            this._func.apply(null, this._params);
        var i = this._type,
            r = this._power,
            t = 1 === i ? 1 - n : 2 === i ? n : 0.5 > n ? 2 * n : 2 * (1 - n);
        return 1 === r ? t *= t : 2 === r ? t *= t * t : 3 === r ? t *= t * t * t : 4 === r && (t *= t * t * t * t),
                1 === i ? 1 - t : 2 === i ? t : 0.5 > n ? t / 2 : 1 - t / 2
    }, e = [
        'Linear',
        'Quad',
        'Cubic',
        'Quart',
        'Quint,Strong'
    ], u = e.length; --u > - 1; ) t = e[u] + ',Power' + u,
        rt(new c(null, null, 1, u), t, 'easeOut', !0),
        rt(new c(null, null, 2, u), t, 'easeIn' + (0 === u ? ',easeNone' : '')),
        rt(new c(null, null, 3, u), t, 'easeInOut');
    b.linear = l.easing.Linear.easeIn,
        b.swing = l.easing.Quad.easeInOut,
        ut = h('events.EventDispatcher', function (n) {
            this._listeners = {
            },
                this._eventTarget = n || this
        }),
        t = ut.prototype,
        t.addEventListener = function (n, t, i, u, f) {
            f = f || 0;
            var h,
                s,
                e = this._listeners[n],
                c = 0;
            for (null == e && (this._listeners[n] = e = [
            ]), s = e.length; --s > - 1; ) h = e[s],
                    h.c === t && h.s === i ? e.splice(s, 1)  : 0 === c && f > h.pr && (c = s + 1);
            e.splice(c, 0, {
                c: t,
                s: i,
                up: u,
                pr: f
            }),
                this !== r || o || r.wake()
        },
        t.removeEventListener = function (n, t) {
            var i,
                r = this._listeners[n];
            if (r) for (i = r.length; --i > - 1; ) if (r[i].c === t) return r.splice(i, 1),
                void 0
        },
        t.dispatchEvent = function (n) {
            var r,
                i,
                t,
                u = this._listeners[n];
            if (u) for (r = u.length, i = this._eventTarget; --r > - 1; ) t = u[r],
                t.up ? t.c.call(t.s || i, {
                    type: n,
                    target: i
                })  : t.c.call(t.s || i)
        };
    var k = n.requestAnimationFrame,
        ft = n.cancelAnimationFrame,
        lt = Date.now || function () {
            return (new Date).getTime()
        };
    for (e = [
        'ms',
        'moz',
        'webkit',
        'o'
    ], u = e.length; --u > - 1 && !k; ) k = n[e[u] + 'RequestAnimationFrame'],
        ft = n[e[u] + 'CancelAnimationFrame'] || n[e[u] + 'CancelRequestAnimationFrame'];
    h('Ticker', function (n, t) {
        var f,
            h,
            u,
            s,
            c,
            i = this,
            a = lt(),
            e = t !== !1 && k,
            l = function (n) {
                i.time = (lt() - a) / 1000,
                    (!f || i.time >= c || n === !0) && (i.frame++, c = i.time + s, i.dispatchEvent('tick')),
                    n !== !0 && (u = h(l))
            };
        ut.call(i),
            this.time = this.frame = 0,
            this.tick = function () {
                l(!0)
            },
            this.sleep = function () {
                null != u && (e && ft ? ft(u)  : clearTimeout(u), h = st, u = null, i === r && (o = !1))
            },
            this.wake = function () {
                u && i.sleep(),
                    h = 0 === f ? st : e && k ? k : function (n) {
                        return setTimeout(n, 1000 * s)
                    },
                    i === r && (o = !0),
                    l()
            },
            this.fps = function (n) {
                return arguments.length ? (f = n, s = 1 / (f || 60), c = this.time + s, i.wake(), void 0)  : f
            },
            this.useRAF = function (n) {
                return arguments.length ? (e = n, i.fps(f), void 0)  : e
            },
            i.fps(n),
            setTimeout(function () {
                e && !u && i.useRAF(!1)
            }, 1000)
    }),
        t = l.Ticker.prototype = new l.events.EventDispatcher,
        t.constructor = l.Ticker,
        f = h('core.Animation', function (n, t) {
            if (this.vars = t || {
            }, this._duration = this._totalDuration = n || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0, a) {
                o || r.wake();
                var i = this.vars.useFrames ? p : a;
                i.add(this, i._time),
                    this.vars.paused && this.paused(!0)
            }
        }),
        r = f.ticker = new l.Ticker,
        t = f.prototype,
        t._dirty = t._gc = t._initted = t._paused = !1,
        t._totalTime = t._time = 0,
        t._rawPrevTime = - 1,
        t._next = t._last = t._onUpdate = t._timeline = t.timeline = null,
        t._paused = !1,
        t.play = function (n, t) {
            return arguments.length && this.seek(n, t),
                this.reversed(!1),
                this.paused(!1)
        },
        t.pause = function (n, t) {
            return arguments.length && this.seek(n, t),
                this.paused(!0)
        },
        t.resume = function (n, t) {
            return arguments.length && this.seek(n, t),
                this.paused(!1)
        },
        t.seek = function (n, t) {
            return this.totalTime(Number(n), t !== !1)
        },
        t.restart = function (n, t) {
            return this.reversed(!1),
                this.paused(!1),
                this.totalTime(n ? - this._delay : 0, t !== !1)
        },
        t.reverse = function (n, t) {
            return arguments.length && this.seek(n || this.totalDuration(), t),
                this.reversed(!0),
                this.paused(!1)
        },
        t.render = function () {
        },
        t.invalidate = function () {
            return this
        },
        t._enabled = function (n, t) {
            return o || r.wake(),
                this._gc = !n,
                this._active = n && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration,
                t !== !0 && (n && !this.timeline ? this._timeline.add(this, this._startTime - this._delay)  : !n && this.timeline && this._timeline._remove(this, !0)),
                !1
        },
        t._kill = function () {
            return this._enabled(!1, !1)
        },
        t.kill = function (n, t) {
            return this._kill(n, t),
                this
        },
        t._uncache = function (n) {
            for (var t = n ? this : this.timeline; t; ) t._dirty = !0,
                t = t.timeline;
            return this
        },
        t.eventCallback = function (n, t, i, r) {
            if (null == n) return null;
            if ('on' === n.substr(0, 2)) {
                var f,
                    u = this.vars;
                if (1 === arguments.length) return u[n];
                if (null == t) delete u[n];
                else if (u[n] = t, u[n + 'Params'] = i, u[n + 'Scope'] = r, i) for (f = i.length; --f > - 1; ) '{self}' === i[f] && (i = u[n + 'Params'] = i.concat(), i[f] = this);
                'onUpdate' === n && (this._onUpdate = t)
            }
            return this
        },
        t.delay = function (n) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + n - this._delay), this._delay = n, this)  : this._delay
        },
        t.duration = function (n) {
            return arguments.length ? (this._duration = this._totalDuration = n, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== n && this.totalTime(this._totalTime * (n / this._duration), !0), this)  : (this._dirty = !1, this._duration)
        },
        t.totalDuration = function (n) {
            return this._dirty = !1,
                arguments.length ? this.duration(n)  : this._totalDuration
        },
        t.time = function (n, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this.totalTime(n, t))  : this._time
        },
        t.totalTime = function (n, t) {
            if (o || r.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > n && (n += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var u = this._totalDuration,
                        i = this._timeline;
                    if (n > u && (n = u), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? u - n : n) / this._timeScale, i._dirty || this._uncache(!1), !i._active) for (; i._timeline; ) i.totalTime(i._totalTime, !0),
                        i = i._timeline
                }
                this._gc && this._enabled(!0, !1),
                    this._totalTime !== n && this.render(n, t, !1)
            }
            return this
        },
        t.startTime = function (n) {
            return arguments.length ? (n !== this._startTime && (this._startTime = n, this.timeline && this.timeline._sortChildren && this.timeline.add(this, n - this._delay)), this)  : this._startTime
        },
        t.timeScale = function (n) {
            if (!arguments.length) return this._timeScale;
            if (n = n || 0.000001, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    i = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / n
            }
            return this._timeScale = n,
                this._uncache(!1)
        },
        t.reversed = function (n) {
            return arguments.length ? (n != this._reversed && (this._reversed = n, this.totalTime(this._totalTime, !0)), this)  : this._reversed
        },
        t.paused = function (n) {
            if (!arguments.length) return this._paused;
            if (n != this._paused && this._timeline) {
                o || n || r.wake();
                var t = this._timeline.rawTime(),
                    i = t - this._pauseTime;
                !n && this._timeline.smoothChildTiming && (this._startTime += i, this._uncache(!1)),
                    this._pauseTime = n ? t : null,
                    this._paused = n,
                    this._active = !n && this._totalTime > 0 && this._totalTime < this._totalDuration,
                    n || 0 === i || 0 === this._duration || this.render(this._time, !0, !0)
            }
            return this._gc && !n && this._enabled(!0, !1),
                this
        },
        d = h('core.SimpleTimeline', function (n) {
            f.call(this, 0, n),
                this.autoRemoveChildren = this.smoothChildTiming = !0
        }),
        t = d.prototype = new f,
        t.constructor = d,
        t.kill()._gc = !1,
        t._first = t._last = null,
        t._sortChildren = !1,
        t.add = function (n, t) {
            var i,
                r;
            if (n._startTime = Number(t || 0) + n._delay, n._paused && this !== n._timeline && (n._pauseTime = n._startTime + (this.rawTime() - n._startTime) / n._timeScale), n.timeline && n.timeline._remove(n, !0), n.timeline = n._timeline = this, n._gc && n._enabled(!0, !0), i = this._last, this._sortChildren) for (r = n._startTime; i && i._startTime > r; ) i = i._prev;
            return i ? (n._next = i._next, i._next = n)  : (n._next = this._first, this._first = n),
                n._next ? n._next._prev = n : this._last = n,
                n._prev = i,
                this._timeline && this._uncache(!0),
                this
        },
        t.insert = t.add,
        t._remove = function (n, t) {
            return n.timeline === this && (t || n._enabled(!1, !0), n.timeline = null, n._prev ? n._prev._next = n._next : this._first === n && (this._first = n._next), n._next ? n._next._prev = n._prev : this._last === n && (this._last = n._prev), this._timeline && this._uncache(!0)),
                this
        },
        t.render = function (n, t, i) {
            var u,
                r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = n; r; ) u = r._next,
                (r._active || n >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration()  : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i)  : r.render((n - r._startTime) * r._timeScale, t, i)),
                r = u
        },
        t.rawTime = function () {
            return o || r.wake(),
                this._totalTime
        };
    var i = h('TweenLite', function (n, t, r) {
            if (f.call(this, t, r), null == n) throw 'Cannot tween a null target.';
            this.target = n = 'string' != typeof n ? n : i.selector(n) || n;
            var e,
                u,
                o,
                h = n.jquery || 'function' == typeof n.each && n[0] && n[0].nodeType && n[0].style,
                s = this.vars.overwrite;
            if (this._overwrite = s = null == s ? pt[i.defaultOverwrite] : 'number' == typeof s ? s >> 0 : pt[s], (h || n instanceof Array) && 'number' != typeof n[0]) for (this._targets = o = h && !n.slice ? vt(n)  : n.slice(0), this._propLookup = [
            ], this._siblings = [
            ], e = 0; o.length > e; e++) u = o[e],
                u ? 'string' != typeof u ? 'function' == typeof u.each && u[0] && u[0].nodeType && u[0].style ? (o.splice(e--, 1), this._targets = o = o.concat(vt(u)))  : (this._siblings[e] = g(u, this, !1), 1 === s && this._siblings[e].length > 1 && et(u, this, null, 1, this._siblings[e]))  : (u = o[e--] = i.selector(u), 'string' == typeof u && o.splice(e + 1, 1))  : o.splice(e--, 1);
            else this._propLookup = {
            },
                this._siblings = g(n, this, !1),
                1 === s && this._siblings.length > 1 && et(n, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === t && 0 === this._delay && this.vars.immediateRender !== !1) && this.render( - this._delay, !1, !0)
        }, !0),
        at = function (n) {
            return 'function' == typeof n.each && n[0] && n[0].nodeType && n[0].style
        },
        vt = function (n) {
            var t = [
            ];
            return n.each(function () {
                t.push(this)
            }),
                t
        },
        bt = function (n, t) {
            var i,
                r = {
                };
            for (i in n) yt[i] || i in t && 'x' !== i && 'y' !== i && 'width' !== i && 'height' !== i && 'className' !== i || !(!v[i] || v[i] && v[i]._autoCSS) || (r[i] = n[i], delete n[i]);
            n.css = r
        };
    t = i.prototype = new f,
        t.constructor = i,
        t.kill()._gc = !1,
        t.ratio = 0,
        t._firstPT = t._targets = t._overwrittenProps = t._startAt = null,
        t._notifyPluginsOfEnabled = !1,
        i.version = '1.9.3',
        i.defaultEase = t._ease = new c(null, null, 1, 1),
        i.defaultOverwrite = 'auto',
        i.ticker = r,
        i.autoSleep = !0,
        i.selector = n.$ || n.jQuery || function (t) {
            return n.$ ? (i.selector = n.$, n.$(t))  : n.document ? n.document.getElementById('#' === t.charAt(0) ? t.substr(1)  : t)  : t
        };
    var kt = i._internals = {
        },
        v = i._plugins = {
        },
        y = i._tweenLookup = {
        },
        dt = 0,
        yt = kt.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            orientToBezier: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        pt = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            'true': 1,
            'false': 0
        },
        p = f._rootFramesTimeline = new d,
        a = f._rootTimeline = new d;
    a._startTime = r.time,
        p._startTime = r.frame,
        a._active = p._active = !0,
        f._updateRoot = function () {
            if (a.render((r.time - a._startTime) * a._timeScale, !1, !1), p.render((r.frame - p._startTime) * p._timeScale, !1, !1), !(r.frame % 120)) {
                var u,
                    t,
                    n;
                for (n in y) {
                    for (t = y[n].tweens, u = t.length; --u > - 1; ) t[u]._gc && t.splice(u, 1);
                    0 === t.length && delete y[n]
                }
                if (n = a._first, (!n || n._paused) && i.autoSleep && !p._first && 1 === r._listeners.tick.length) {
                    for (; n && n._paused; ) n = n._next;
                    n || r.sleep()
                }
            }
        },
        r.addEventListener('tick', f._updateRoot);
    var g = function (n, t, i) {
            var r,
                f,
                u = n._gsTweenID;
            if (y[u || (n._gsTweenID = u = 't' + dt++)] || (y[u] = {
                target: n,
                tweens: [
                ]
            }), t && (r = y[u].tweens, r[f = r.length] = t, i)) for (; --f > - 1; ) r[f] === t && r.splice(f, 1);
            return y[u].tweens
        },
        et = function (n, t, i, r, u) {
            var e,
                o,
                f,
                v;
            if (1 === r || r >= 4) {
                for (v = u.length, e = 0; v > e; e++) if ((f = u[e]) !== t) f._gc || f._enabled(!1, !1) && (o = !0);
                else if (5 === r) break;
                return o
            }
            var s,
                h = t._startTime + 1e-10,
                c = [
                ],
                l = 0,
                a = 0 === t._duration;
            for (e = u.length; --e > - 1; ) (f = u[e]) === t || f._gc || f._paused || (f._timeline !== t._timeline ? (s = s || wt(t, 0, a), 0 === wt(f, s, a) && (c[l++] = f))  : h >= f._startTime && f._startTime + f.totalDuration() / f._timeScale + 1e-10 > h && ((a || !f._initted) && 2e-10 >= h - f._startTime || (c[l++] = f)));
            for (e = l; --e > - 1; ) f = c[e],
                2 === r && f._kill(i, n) && (o = !0),
                (2 !== r || !f._firstPT && f._initted) && f._enabled(!1, !1) && (o = !0);
            return o
        },
        wt = function (n, t, i) {
            for (var u = n._timeline, f = u._timeScale, r = n._startTime; u._timeline; ) {
                if (r += u._startTime, f *= u._timeScale, u._paused) return - 100;
                u = u._timeline
            }
            return r / f,
                    r > t ? r - t : i && r === t || !n._initted && 2e-10 > r - t ? 1e-10 : (r += n.totalDuration() / n._timeScale / f) > t ? 0 : r - t - 1e-10
        };
    if (t._init = function () {
        var u,
            e,
            t,
            n = this.vars,
            f = this._overwrittenProps,
            o = this._duration,
            r = n.ease;
        if (n.startAt) {
            if (n.startAt.overwrite = 0, n.startAt.immediateRender = !0, this._startAt = i.to(this.target, 0, n.startAt), n.immediateRender && (this._startAt = null, 0 === this._time && 0 !== o)) return
        } else if (n.runBackwards && n.immediateRender && 0 !== o) if (this._startAt) this._startAt.render( - 1, !0),
            this._startAt = null;
        else if (0 === this._time) return n.overwrite = n.delay = 0,
            n.runBackwards = !1,
            this._startAt = i.to(this.target, 0, n),
            n.overwrite = this._overwrite,
            n.runBackwards = !0,
            n.delay = this._delay,
            void 0;
        if (this._ease = r ? r instanceof c ? n.easeParams instanceof Array ? r.config.apply(r, n.easeParams)  : r : 'function' == typeof r ? new c(r, n.easeParams)  : b[r] || i.defaultEase : i.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (u = this._targets.length; --u > - 1; ) this._initProps(this._targets[u], this._propLookup[u] = {
        }, this._siblings[u], f ? f[u] : null) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, f);
        if (e && i._onPluginEvent('_onInitAllProps', this), f && (this._firstPT || 'function' != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (t = this._firstPT; t; ) t.s += t.c,
            t.c = - t.c,
            t = t._next;
        this._onUpdate = n.onUpdate,
            this._initted = !0
    }, t._initProps = function (n, t, i, r) {
        var u,
            o,
            c,
            e,
            s,
            f,
            h;
        if (null == n) return !1;
        this.vars.css || n.style && n.nodeType && v.css && this.vars.autoCSS !== !1 && bt(this.vars, n);
        for (u in this.vars) {
            if (yt[u]) {
                if (('onStartParams' === u || 'onUpdateParams' === u || 'onCompleteParams' === u || 'onReverseCompleteParams' === u || 'onRepeatParams' === u) && (s = this.vars[u])) for (o = s.length; --o > - 1; ) '{self}' === s[o] && (s = this.vars[u] = s.concat(), s[o] = this)
            } else if (v[u] && (e = new v[u])._onInitTween(n, this.vars[u], this)) {
                for (this._firstPT = f = {
                    _next: this._firstPT,
                    t: e,
                    p: 'setRatio',
                    s: 0,
                    c: 1,
                    f: !0,
                    n: u,
                    pg: !0,
                    pr: e._priority
                }, o = e._overwriteProps.length; --o > - 1; ) t[e._overwriteProps[o]] = this._firstPT;
                (e._priority || e._onInitAllProps) && (c = !0),
                    (e._onDisable || e._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = t[u] = f = {
                _next: this._firstPT,
                t: n,
                p: u,
                f: 'function' == typeof n[u],
                n: u,
                pg: !1,
                pr: 0
            },
                f.s = f.f ? n[u.indexOf('set') || 'function' != typeof n['get' + u.substr(3)] ? u : 'get' + u.substr(3)]()  : parseFloat(n[u]),
                h = this.vars[u],
                f.c = 'string' == typeof h && '=' === h.charAt(1) ? parseInt(h.charAt(0) + '1', 10) * Number(h.substr(2))  : Number(h) - f.s || 0;
            f && f._next && (f._next._prev = f)
        }
        return r && this._kill(r, n) ? this._initProps(n, t, i, r)  : this._overwrite > 1 && this._firstPT && i.length > 1 && et(n, this, t, this._overwrite, i) ? (this._kill(t, n), this._initProps(n, t, i, r))  : c
    }, t.render = function (n, t, i) {
        var e,
            f,
            u,
            h = this._time;
        if (n >= this._duration) this._totalTime = this._time = this._duration,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1)  : 1,
            this._reversed || (e = !0, f = 'onComplete'),
            0 === this._duration && ((0 === n || 0 > this._rawPrevTime) && this._rawPrevTime !== n && (i = !0), this._rawPrevTime = n);
        else if (1e-7 > n) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0)  : 0,
            (0 !== h || 0 === this._duration && this._rawPrevTime > 0) && (f = 'onReverseComplete', e = this._reversed),
                0 > n ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = n))  : this._initted || (i = !0);
        else if (this._totalTime = this._time = n, this._easeType) {
            var r = n / this._duration,
                o = this._easeType,
                s = this._easePower;
            (1 === o || 3 === o && r >= 0.5) && (r = 1 - r),
                3 === o && (r *= 2),
                    1 === s ? r *= r : 2 === s ? r *= r * r : 3 === s ? r *= r * r * r : 4 === s && (r *= r * r * r * r),
                this.ratio = 1 === o ? 1 - r : 2 === o ? r : 0.5 > n / this._duration ? r / 2 : 1 - r / 2
        } else this.ratio = this._ease.getRatio(n / this._duration);
        if (this._time !== h || i) {
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !e ? this.ratio = this._ease.getRatio(this._time / this._duration)  : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || this._paused || (this._active = !0), 0 === h && (this._startAt && (n >= 0 ? this._startAt.render(n, t, i)  : f || (f = '_dummyGS')), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || it))), u = this._firstPT; u; ) u.f ? u.t[u.p](u.c * this.ratio + u.s)  : u.t[u.p] = u.c * this.ratio + u.s,
                u = u._next;
            this._onUpdate && (0 > n && this._startAt && this._startAt.render(n, t, i), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || it)),
                f && (this._gc || (0 > n && this._startAt && !this._onUpdate && this._startAt.render(n, t, i), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[f] && this.vars[f].apply(this.vars[f + 'Scope'] || this, this.vars[f + 'Params'] || it)))
        }
    }, t._kill = function (n, t) {
        if ('all' === n && (n = null), null == n && (null == t || t === this.target)) return this._enabled(!1, !1);
        t = 'string' != typeof t ? t || this._targets || this.target : i.selector(t) || t;
        var u,
            e,
            o,
            r,
            f,
            s,
            h,
            c;
        if ((t instanceof Array || at(t)) && 'number' != typeof t[0]) for (u = t.length; --u > - 1; ) this._kill(n, t[u]) && (s = !0);
        else {
            if (this._targets) {
                for (u = this._targets.length; --u > - 1; ) if (t === this._targets[u]) {
                    f = this._propLookup[u] || {
                    },
                        this._overwrittenProps = this._overwrittenProps || [],
                        e = this._overwrittenProps[u] = n ? this._overwrittenProps[u] || {
                        }
                            : 'all';
                    break
                }
            } else {
                if (t !== this.target) return !1;
                f = this._propLookup,
                    e = this._overwrittenProps = n ? this._overwrittenProps || {
                    }
                        : 'all'
            }
            if (f) {
                h = n || f,
                    c = n !== e && 'all' !== e && n !== f && (null == n || n._tempKill !== !0);
                for (o in h) (r = f[o]) && (r.pg && r.t._kill(h) && (s = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete f[o]),
                    c && (e[o] = 1);
                this._firstPT || this._enabled(!1, !1)
            }
        }
        return s
    }, t.invalidate = function () {
        return this._notifyPluginsOfEnabled && i._onPluginEvent('_onDisable', this),
            this._firstPT = null,
            this._overwrittenProps = null,
            this._onUpdate = null,
            this._startAt = null,
            this._initted = this._active = this._notifyPluginsOfEnabled = !1,
            this._propLookup = this._targets ? {
            }
                : [
            ],
            this
    }, t._enabled = function (n, t) {
        if (o || r.wake(), n && this._gc) {
            var u,
                e = this._targets;
            if (e) for (u = e.length; --u > - 1; ) this._siblings[u] = g(e[u], this, !0);
            else this._siblings = g(this.target, this, !0)
        }
        return f.prototype._enabled.call(this, n, t),
                this._notifyPluginsOfEnabled && this._firstPT ? i._onPluginEvent(n ? '_onEnable' : '_onDisable', this)  : !1
    }, i.to = function (n, t, r) {
        return new i(n, t, r)
    }, i.from = function (n, t, r) {
        return r.runBackwards = !0,
            r.immediateRender = 0 != r.immediateRender,
            new i(n, t, r)
    }, i.fromTo = function (n, t, r, u) {
        return u.startAt = r,
            u.immediateRender = 0 != u.immediateRender && 0 != r.immediateRender,
            new i(n, t, u)
    }, i.delayedCall = function (n, t, r, u, f) {
        return new i(t, 0, {
            delay: n,
            onComplete: t,
            onCompleteParams: r,
            onCompleteScope: u,
            onReverseComplete: t,
            onReverseCompleteParams: r,
            onReverseCompleteScope: u,
            immediateRender: !1,
            useFrames: f,
            overwrite: 0
        })
    }, i.set = function (n, t) {
        return new i(n, 0, t)
    }, i.killTweensOf = i.killDelayedCallsTo = function (n, t) {
        for (var r = i.getTweensOf(n), u = r.length; --u > - 1; ) r[u]._kill(t, n)
    }, i.getTweensOf = function (n) {
        if (null == n) return [];
        n = 'string' != typeof n ? n : i.selector(n) || n;
        var t,
            r,
            u,
            f;
        if ((n instanceof Array || at(n)) && 'number' != typeof n[0]) {
            for (t = n.length, r = [
            ]; --t > - 1; ) r = r.concat(i.getTweensOf(n[t]));
            for (t = r.length; --t > - 1; ) for (f = r[t], u = t; --u > - 1; ) f === r[u] && r.splice(t, 1)
        } else for (r = g(n).concat(), t = r.length; --t > - 1; ) r[t]._gc && r.splice(t, 1);
        return r
    }, s = h('plugins.TweenPlugin', function (n, t) {
        this._overwriteProps = (n || '').split(','),
            this._propName = this._overwriteProps[0],
            this._priority = t || 0,
            this._super = s.prototype
    }, !0), t = s.prototype, s.version = '1.9.1', s.API = 2, t._firstPT = null, t._addTween = function (n, t, i, r, u, f) {
        var o,
            e;
        null != r && (o = 'number' == typeof r || '=' !== r.charAt(1) ? Number(r) - i : parseInt(r.charAt(0) + '1', 10) * Number(r.substr(2))) && (this._firstPT = e = {
            _next: this._firstPT,
            t: n,
            p: t,
            s: i,
            c: o,
            f: 'function' == typeof n[t],
            n: u || t,
            r: f
        }, e._next && (e._next._prev = e))
    }, t.setRatio = function (n) {
        for (var i, t = this._firstPT, r = 0.000001; t; ) i = t.c * n + t.s,
            t.r ? i = i + (i > 0 ? 0.5 : - 0.5) >> 0 : r > i && i > - r && (i = 0),
            t.f ? t.t[t.p](i)  : t.t[t.p] = i,
            t = t._next
    }, t._kill = function (n) {
        var i,
            r = this._overwriteProps,
            t = this._firstPT;
        if (null != n[this._propName]) this._overwriteProps = [
        ];
        else for (i = r.length; --i > - 1; ) null != n[r[i]] && r.splice(i, 1);
        for (; t; ) null != n[t.n] && (t._next && (t._next._prev = t._prev), t._prev ? (t._prev._next = t._next, t._prev = null)  : this._firstPT === t && (this._firstPT = t._next)),
            t = t._next;
        return !1
    }, t._roundProps = function (n, t) {
        for (var i = this._firstPT; i; ) (n[this._propName] || null != i.n && n[i.n.split(this._propName + '_').join('')]) && (i.r = t),
            i = i._next
    }, i._onPluginEvent = function (n, t) {
        var f,
            r,
            u,
            e,
            o,
            i = t._firstPT;
        if ('_onInitAllProps' === n) {
            for (; i; ) {
                for (o = i._next, r = u; r && r.pr > i.pr; ) r = r._next;
                (i._prev = r ? r._prev : e) ? i._prev._next = i : u = i,
                    (i._next = r) ? r._prev = i : e = i,
                    i = o
            }
            i = t._firstPT = u
        }
        for (; i; ) i.pg && 'function' == typeof i.t[n] && i.t[n]() && (f = !0),
            i = i._next;
        return f
    }, s.activate = function (n) {
        for (var t = n.length; --t > - 1; ) n[t].API === s.API && (v[(new n[t])._propName] = n[t]);
        return !0
    }, tt.plugin = function (n) {
        if (!(n && n.propName && n.init && n.API)) throw 'illegal plugin definition.';
        var i,
            r = n.propName,
            e = n.priority || 0,
            o = n.overwriteProps,
            u = {
                init: '_onInitTween',
                set: 'setRatio',
                kill: '_kill',
                round: '_roundProps',
                initAll: '_onInitAllProps'
            },
            t = h('plugins.' + r.charAt(0).toUpperCase() + r.substr(1) + 'Plugin', function () {
                s.call(this, r, e),
                    this._overwriteProps = o || []
            }, n.global === !0),
            f = t.prototype = new s(r);
        f.constructor = t,
            t.API = n.API;
        for (i in u) 'function' == typeof n[i] && (f[u[i]] = n[i]);
        return t.version = n.version,
            s.activate([t]),
            t
    }, e = n._gsQueue) {
        for (u = 0; e.length > u; u++) e[u]();
        for (t in w) w[t].func || n.console.log('GSAP encountered missing dependency: com.greensock.' + t)
    }
    o = !1
}(window), function (n) {
    function i(n, t) {
        this.initialize(n, t)
    }
    var t = i.prototype;
    i.HEADER_SIZE = 2,
        i._workingCanvas = document.createElement('canvas'),
        t.sampleRate = 0,
        t.stereo = !0,
        t.numSamples = 0,
        t.gain = 1,
        t._data = null,
        t._headerSize = 0,
        t._color1 = - 1,
        t._color2 = - 1,
        t.initialize = function (n, t) {
            var r,
                u;
            if (this.sampleRate = t ? t : 50, typeof n == 'string') this._getVolume = this._getVolumeString,
                this.data = n,
                this._headerSize = 1,
                this.stereo = n.charAt(0) != '0',
                this.numSamples = n.length - this._headerSize;
            else if (n instanceof Image) {
                if (this._getVolume = this._getVolumeImage, r = i._workingCanvas, r.width = n.width, r.height = n.height, u = r.getContext('2d'), u.drawImage(n, 0, 0), this.data = u.getImageData(0, 0, r.width, r.height).data, this._getColors(0), this.color1 == - 1) throw 'Unable to parse color markers.';
                this.stereo = this.color2 != - 1,
                    this._headerSize = 2,
                    this.numSamples = this.data.length / 4 - this._headerSize
            } else throw 'Unrecognized data type for VolumeData. Must be Image or String.';
        },
        t.getIndex = function (n) {
            return Math.max(0, Math.min(this.numSamples, n * this.sampleRate))
        },
        t.getVolume = function (n, t) {
            t || (t = {
            });
            var i = Math.round(this.getIndex(n));
            return i < 0 || i > this.numSamples ? t.left = t.right = 0 : this._getVolume(i, t),
                t
        },
        t.getAverageVolume = function (n, t, i) {
            var u,
                f,
                r;
            if (i || (i = {
            }), n = Math.round(this.getIndex(n)), t = Math.round(this.getIndex(t)), t < n) i.left = i.right = 0;
            else {
                for (u = 0, f = 0, r = n; r <= t; r++) this._getVolume(r, i),
                    u += i.left,
                    f += i.right;
                i.left = u / (t - n + 1),
                    i.right = f / (t - n + 1)
            }
            return i
        },
        t.toString = function () {
            return '[VolumeData]'
        },
        t._getVolume = null,
        t._getVolumeImage = function (n, t) {
            n += this._headerSize,
                this.stereo ? (t.left = Math.min(1, this.data[n * 4 + this.color1] / 255 * this.gain), t.right = Math.min(1, this.data[n * 4 + this.color2] / 255 * this.gain))  : t.left = t.right = Math.min(1, this.data[n * 4 + this.color1] / 255 * this.gain)
        },
        t._getVolumeString = function (n, t) {
            this.stereo ? (t.left = Math.min(1, (this.data.charCodeAt(n * 2 + this._headerSize | 0) - 33) / 93 * this.gain), t.right = Math.min(1, (this.data.charCodeAt(n * 2 + this._headerSize + 1 | 0) - 33) / 93 * this.gain))  : t.left = t.right = Math.min(1, (this.data.charCodeAt(n + this._headerSize | 0) - 33) / 93 * this.gain)
        },
        t._getColors = function (n) {
            var r = this.data[n * 4],
                i = this.data[n * 4 + 1],
                t = this.data[n * 4 + 2];
            this.color1 = this.color2 = - 1,
                    r > 64 ? (this.color1 = 0, i > 64 ? this.color2 = 1 : t > 64 && (this.color2 = 2))  : i > 64 ? (this.color1 = 1, t > 64 && (this.color2 = 2))  : t > 64 && (this.color1 = 2)
        },
        t._getSampleRate = function (n) {
            var t = this.data[n * 4 + 1],
                i = this.data[n * 4 + 2];
            this.sampleRate = Math.round(t / 15) * 16 + Math.round(i / 15)
        },
        n.VolumeData = i
}(window), Stats = function () {
    function ct(t, i, r) {
        for (var e, u, f = 0; f < 30; f++) for (e = 0; e < 73; e++) u = (e + f * 74) * 4,
            t[u] = t[u + 4],
            t[u + 1] = t[u + 5],
            t[u + 2] = t[u + 6];
        for (f = 0; f < 30; f++) u = (73 + f * 74) * 4,
                f < i ? (t[u] = n[r].bg.r, t[u + 1] = n[r].bg.g, t[u + 2] = n[r].bg.b)  : (t[u] = n[r].fg.r, t[u + 1] = n[r].fg.g, t[u + 2] = n[r].fg.b)
    }
    function at() {
        a++,
                a == d ? a = 0 : a,
            l.style.display = 'none',
            e.style.display = 'none',
            s.style.display = 'none';
        switch (a) {
            case 0:
                l.style.display = 'block';
                break;
            case 1:
                e.style.display = 'block';
                break;
            case 2:
                s.style.display = 'block'
        }
    }
    var a = 0,
        d = 2,
        u,
        g = 0,
        c = (new Date).getTime(),
        lt = c,
        nt = c,
        v = 0,
        tt = 1000,
        it = 0,
        l,
        f,
        t,
        y,
        rt,
        p = 0,
        ut = 1000,
        ft = 0,
        e,
        o,
        i,
        w,
        et,
        b = 0,
        ot = 1000,
        st = 0,
        s,
        h,
        r,
        k,
        ht,
        n = {
            fps: {
                bg: {
                    r: 16,
                    g: 16,
                    b: 48
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 255
                }
            },
            ms: {
                bg: {
                    r: 16,
                    g: 48,
                    b: 16
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 0
                }
            },
            mb: {
                bg: {
                    r: 48,
                    g: 16,
                    b: 26
                },
                fg: {
                    r: 255,
                    g: 0,
                    b: 128
                }
            }
        };
    u = document.createElement('div'),
        u.style.cursor = 'pointer',
        u.style.width = '80px',
        u.style.opacity = '0.9',
        u.style.zIndex = '10001',
        u.addEventListener('click', at, !1),
        l = document.createElement('div'),
        l.style.backgroundColor = 'rgb(' + Math.floor(n.fps.bg.r / 2) + ',' + Math.floor(n.fps.bg.g / 2) + ',' + Math.floor(n.fps.bg.b / 2) + ')',
        l.style.padding = '2px 0px 3px 0px',
        u.appendChild(l),
        f = document.createElement('div'),
        f.style.fontFamily = 'Helvetica, Arial, sans-serif',
        f.style.textAlign = 'left',
        f.style.fontSize = '9px',
        f.style.color = 'rgb(' + n.fps.fg.r + ',' + n.fps.fg.g + ',' + n.fps.fg.b + ')',
        f.style.margin = '0px 0px 1px 3px',
        f.innerHTML = '<span style="font-weight:bold">FPS</span>',
        l.appendChild(f),
        t = document.createElement('canvas'),
        t.width = 74,
        t.height = 30,
        t.style.display = 'block',
        t.style.marginLeft = '3px',
        l.appendChild(t),
        y = t.getContext('2d'),
        y.fillStyle = 'rgb(' + n.fps.bg.r + ',' + n.fps.bg.g + ',' + n.fps.bg.b + ')',
        y.fillRect(0, 0, t.width, t.height),
        rt = y.getImageData(0, 0, t.width, t.height),
        e = document.createElement('div'),
        e.style.backgroundColor = 'rgb(' + Math.floor(n.ms.bg.r / 2) + ',' + Math.floor(n.ms.bg.g / 2) + ',' + Math.floor(n.ms.bg.b / 2) + ')',
        e.style.padding = '2px 0px 3px 0px',
        e.style.display = 'none',
        u.appendChild(e),
        o = document.createElement('div'),
        o.style.fontFamily = 'Helvetica, Arial, sans-serif',
        o.style.textAlign = 'left',
        o.style.fontSize = '9px',
        o.style.color = 'rgb(' + n.ms.fg.r + ',' + n.ms.fg.g + ',' + n.ms.fg.b + ')',
        o.style.margin = '0px 0px 1px 3px',
        o.innerHTML = '<span style="font-weight:bold">MS</span>',
        e.appendChild(o),
        i = document.createElement('canvas'),
        i.width = 74,
        i.height = 30,
        i.style.display = 'block',
        i.style.marginLeft = '3px',
        e.appendChild(i),
        w = i.getContext('2d'),
        w.fillStyle = 'rgb(' + n.ms.bg.r + ',' + n.ms.bg.g + ',' + n.ms.bg.b + ')',
        w.fillRect(0, 0, i.width, i.height),
        et = w.getImageData(0, 0, i.width, i.height);
    try {
        performance && performance.memory && performance.memory.totalJSHeapSize && (d = 3)
    } catch (vt) {
    }
    return s = document.createElement('div'),
        s.style.backgroundColor = 'rgb(' + Math.floor(n.mb.bg.r / 2) + ',' + Math.floor(n.mb.bg.g / 2) + ',' + Math.floor(n.mb.bg.b / 2) + ')',
        s.style.padding = '2px 0px 3px 0px',
        s.style.display = 'none',
        u.appendChild(s),
        h = document.createElement('div'),
        h.style.fontFamily = 'Helvetica, Arial, sans-serif',
        h.style.textAlign = 'left',
        h.style.fontSize = '9px',
        h.style.color = 'rgb(' + n.mb.fg.r + ',' + n.mb.fg.g + ',' + n.mb.fg.b + ')',
        h.style.margin = '0px 0px 1px 3px',
        h.innerHTML = '<span style="font-weight:bold">MB</span>',
        s.appendChild(h),
        r = document.createElement('canvas'),
        r.width = 74,
        r.height = 30,
        r.style.display = 'block',
        r.style.marginLeft = '3px',
        s.appendChild(r),
        k = r.getContext('2d'),
        k.fillStyle = '#301010',
        k.fillRect(0, 0, r.width, r.height),
        ht = k.getImageData(0, 0, r.width, r.height),
    {
        domElement: u,
        update: function () {
            g++,
                c = (new Date).getTime(),
                p = c - lt,
                ut = Math.min(ut, p),
                ft = Math.max(ft, p),
                ct(et.data, Math.min(30, 30 - p / 200 * 30), 'ms'),
                o.innerHTML = '<span style="font-weight:bold">' + p + ' MS</span> (' + ut + '-' + ft + ')',
                w.putImageData(et, 0, 0),
                lt = c,
                c > nt + 1000 && (v = Math.round(g * 1000 / (c - nt)), tt = Math.min(tt, v), it = Math.max(it, v), ct(rt.data, Math.min(30, 30 - v / 100 * 30), 'fps'), f.innerHTML = '<span style="font-weight:bold">' + v + ' FPS</span> (' + tt + '-' + it + ')', y.putImageData(rt, 0, 0), d == 3 && (b = performance.memory.usedJSHeapSize * 9.54e-7, ot = Math.min(ot, b), st = Math.max(st, b), ct(ht.data, Math.min(30, 30 - b / 2), 'mb'), h.innerHTML = '<span style="font-weight:bold">' + Math.round(b) + ' MB</span> (' + Math.round(ot) + '-' + Math.round(st) + ')', k.putImageData(ht, 0, 0)), nt = c, g = 0)
        }
    }
},
function () {
    function i(n) {
        switch (n.nodeName.toLowerCase()) {
            case 'label':
            case 'video':
                return !0;
            default:
                return /\bneedsclick\b/.test(n.className)
        }
    }
    function e(n) {
        switch (n.nodeName.toLowerCase()) {
            case 'textarea':
            case 'select':
                return !0;
            case 'input':
                switch (n.type) {
                    case 'button':
                    case 'checkbox':
                    case 'file':
                    case 'image':
                    case 'radio':
                    case 'submit':
                        return !1;
                    default:
                        return !0
                }
                break;
            default:
                return /\bneedsfocus\b/.test(n.className)
        }
    }
    function r(n, t) {
        return f && window.devicePixelRatio && (n *= window.devicePixelRatio, t *= window.devicePixelRatio),
            document.elementFromPoint(n, t)
    }
    function u(u) {
        var s,
            f = {
                x: 0,
                y: 0,
                scrollX: 0,
                scrollY: 0
            },
            o = !1,
            h = Math.pow(37, 2),
            c = function (n) {
                return o = !0,
                    f.x = n.targetTouches[0].pageX,
                    f.y = n.targetTouches[0].pageY,
                    f.x === n.targetTouches[0].clientX && (f.x += window.pageXOffset),
                    f.y === n.targetTouches[0].clientY && (f.y += window.pageYOffset),
                    f.scrollX = window.pageXOffset,
                    f.scrollY = window.pageYOffset,
                    !0
            },
            l = function (n) {
                return o ? (Math.pow(n.targetTouches[0].pageX - f.x, 2) + Math.pow(n.targetTouches[0].pageY - f.y, 2) > h && (o = !1), (Math.abs(window.pageXOffset - f.scrollX) > t || Math.abs(window.pageYOffset - f.scrollY) > t) && (o = !1), !0)  : !0
            },
            a = function (t) {
                var u,
                    c,
                    s,
                    h;
                if (!o) return !0;
                if (o = !1, s = {
                    x: f.x - f.scrollX,
                    y: f.y - f.scrollY
                }, u = r(s.x, s.y), !u) return !1;
                if (u.nodeType === Node.TEXT_NODE && (u = u.parentElement), u.nodeName.toLowerCase() === 'label' && u.htmlFor) {
                    if (c = document.getElementById(u.htmlFor), c) {
                        if (u.focus(), n) return !1;
                        u = c
                    }
                } else if (e(u)) return u.focus(),
                    !1;
                return i(u) ? !1 : (h = document.createEvent('MouseEvents'), h.initMouseEvent('click', !0, !0, window, 1, 0, 0, s.x, s.y, !1, !1, !1, !1, 0, null), h.forwardedTouchEvent = !0, u.dispatchEvent(h), t.preventDefault(), !1)
            },
            v = function () {
                o = !1
            },
            y = function (n) {
                var t;
                return n.forwardedTouchEvent ? !0 : n.cancelable ? (t = r(f.x - f.scrollX, f.y - f.scrollY), !t || !i(t)) ? (n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault(), !1)  : !0 : !0
            };
        if (!u || !u.nodeType) throw new TypeError('Layer must be a document node');
        typeof window.ontouchstart != 'undefined' && (u.addEventListener('click', y, !0), u.addEventListener('touchstart', c, !0), u.addEventListener('touchmove', l, !0), u.addEventListener('touchend', a, !0), u.addEventListener('touchcancel', v, !0), typeof u.onclick == 'function' && (s = u.onclick, u.addEventListener('click', function (n) {
            s(n)
        }, !1), u.onclick = null))
    }
    var n = navigator.userAgent.indexOf('Android') > 0,
        f = n && /Chrome|CrMo/.test(navigator.userAgent),
        t = n || navigator.userAgent.indexOf('PlayBook') === - 1 ? 5 : 20;
    typeof define == 'function' && define.amd ? define(function () {
        return u
    })  : window.FastClick = u
}(),
TRACE_ACTIVE = !1,
TRACE_ON_SCREEN = !1,
CURRENT_TRACE_GROUP = '',
General._traceField,
General._traceFieldLines,
General._maxTraceLines = 30,
General.getNewDiv = function (n, t) {
    var i = document.createElement('div');
    return i.style.position = 'absolute',
        n && (i.id = n),
        t && (i.className = t),
        i
},
General.getNewImage = function (n, t, i) {
    function u() {
        jQuery(this).unbind('load', u),
            this._onLoaded(this)
    }
    var r = new Image;
    return r.style.position = 'absolute',
        n && (i && (i.appendChild(r), i._image = r), t && (jQuery(r).bind('load', u), r._onLoaded = t), r.src = n),
        r
},
General.getNewInput = function () {
    var t = document.createElement('div'),
        n = t.style,
        i;
    return n.position = 'absolute',
        t.innerHTML = '<input />',
        i = jQuery(t).children().get() [0],
        n = i.style,
        n.border = 0,
        n.background = 'none',
        n.outline = 'none',
        n.backgroundColor = '#ffffff',
        t._field = i,
        t
},
General.getNewTextarea = function () {
    var t = document.createElement('div'),
        n = t.style,
        i;
    return n.position = 'absolute',
        t.innerHTML = '<textarea />',
        i = jQuery(t).children().get() [0],
        n = i.style,
        n.border = 0,
        n.background = 'none',
        n.resize = 'none',
        n.outline = 'none',
        n.overflowY = 'hidden',
        n.backgroundColor = '#ffffff',
        t._field = i,
        t
},
General.disableSelection = function (n) {
    var t = n;
    t instanceof jQuery && (t = jQuery(t).get() [0]),
        typeof t.style.MozUserSelect != 'undefined' && (t.style.MozUserSelect = '-moz-none'),
        t.onselectstart = function () {
            return !1
        },
        t.onmousedown = function () {
            return !1
        }
},
General.PNGFix = function (n) {
    var r = !1,
        t,
        i;
    n instanceof jQuery && (n = jQuery(n).get() [0]),
        n != null && (t = n.src, t === null ? trace('Target is not an images', 'General.PNGFix')  : (t.substr(t.length - 4).toLowerCase() === '.png' && (r = !0), r == !0 && (i = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\',sizingMethod=\'crop\',src=\'' + t + '\')', n.style.background = 'transparent', n.___isAlphaPNG = !0, n.___alphaPNGFilter = ' ' + i, n.style.MsFilter = i, n.style.filter = i, n.style.zoom = 1)))
},
General.getScrollWidth = function () {
    var t = document.createElement('p'),
        n,
        r,
        i;
    return t.style.width = '100%',
        t.style.height = '200px',
        n = document.createElement('div'),
        n.style.position = 'absolute',
        n.style.top = '0px',
        n.style.left = '0px',
        n.style.visibility = 'hidden',
        n.style.width = '200px',
        n.style.height = '150px',
        n.style.overflow = 'hidden',
        n.appendChild(t),
        document.body.appendChild(n),
        r = t.offsetWidth,
        n.style.overflow = 'scroll',
        i = t.offsetWidth,
        r == i && (i = n.clientWidth),
        document.body.removeChild(n),
        r - i
},
General.WebGlSupport = function (n) {
    var i = {
            antialias: !0,
            stencil: !1,
            depth: !1
        },
        t = n.getContext('webgl', i);
    return (t || (t = n.getContext('experimental-webgl', i)), !t) ? !1 : !0
},
General.canvasSupport = function () {
    var n = document.createElement('canvas');
    return !!(n.getContext && n.getContext('2d'))
},
FixIE = {
},
FixIE.DEBUG_MODE = !1,
FixIE.init = function () {
    if (BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8) {
        this.addEventListener = n;
        function n(n) {
            window.attachEvent && n != null && (n.addEventListener = function (t, i) {
                function r(t) {
                    var u = window.event || t,
                        r = {
                        };
                    r.currentTarget = n,
                        r.target = t.srcElement,
                        r.type = t.type,
                        r.cancelable = t.cancelBubble,
                        r.preventDefault = t.returnValue,
                        r.pageX = t.clientX,
                        r.pageY = t.clientY,
                        r.offsetX = t.offsetX,
                        r.offsetY = t.offsetY,
                        r.altKey = t.altKey,
                        r.ctrlKey = t.ctrlKey,
                        r.shiftKey = t.shiftKey,
                        r.keyCode = t.keyCode,
                        r.stopPropagation = function () {
                            u.cancelBubble = !0
                        },
                        r.preventDefault = function () {
                            u.returnValue = !1
                        },
                        i(r)
                }
                n.attachEvent('on' + t, r)
            }, n.removeEventListener = function (t, i) {
                n.detachEvent('on' + t, i)
            })
        }
        function t(t) {
            n(t)
        }
        function i() {
            function t() {
                window.innerWidth = document.documentElement.clientWidth,
                    window.innerHeight = document.documentElement.clientHeight
            }
            n(document),
                n(window),
                document.addEventListener('onresize', t, !0),
                t()
        }
        function r() {
            function n(n) {
                for (var e = n.split(' '), i = this.querySelectorAll('.' + e[0]), o, s, r, h, f, u = 1; u < e.length; u++) {
                    for (o = this.querySelectorAll('.' + e[u]), s = [
                    ], r = 0; r < i.length; r++) {
                        for (h = !1, f = 0; f < o.length; f++) if (i[r] == o[f]) {
                            h = !0;
                            break
                        }
                        h && (t(i[r]), s.push(i[r]))
                    }
                    i = s
                }
                return i
            }
            document._createElement = document.createElement,
                document.createElement = function (n) {
                    var i = document._createElement(n);
                    return t(i),
                        i
                },
                document._getElementById = document.getElementById,
                document.getElementById = function (n) {
                    var i = document._getElementById(n);
                    return t(i),
                        i
                },
                document._getElementsByTagName = document.getElementsByTagName,
                document.getElementsByTagName = function (n) {
                    for (var r = document._getElementsByTagName(n), i = 0; i < r.length; i++) t(r[i]);
                    return r
                },
                document._getElementsByClassName = document.getElementsByClassName,
                document.getElementsByClassName = n
        }
        Image = function () {
            return document.createElement('img')
        },
            r(),
            i()
    }
},
FixIE.imageCheckForPNGFix = function (n) {
    var u = !1,
        t = n.currentTarget,
        i,
        r;
    t instanceof jQuery && (t = jQuery(t).get() [0]),
        t != null && (i = t.src, i.substr(i.length - 4).toLowerCase() === '.png' && (u = !0), u == !0 && (r = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=\'true\',sizingMethod=\'crop\',src=\'' + i + '\')', t.style.background = 'transparent', t.___isAlphaPNG = !0, t.___alphaPNGFilter = ' ' + r, t.style.MsFilter = r, t.style.filter = r, t.style.zoom = 1))
},
FixIE.init(),
FixIE.degreesToRadians = function (n) {
    return n * Math.PI / 180
},
FixIE.fixBoundaryBug = function (n, t) {
    var l = n.style.filter,
        f,
        e,
        s,
        u,
        h,
        c;
    n.style.filter = '',
        f = n.offsetWidth,
        e = n.offsetHeight,
        n.style.filter = l;
    var i = {
            tl: t.x(Matrix.create([[0],
                [
                    0
                ],
                [
                    1
                ]])),
            bl: t.x(Matrix.create([[0],
                [
                    e
                ],
                [
                    1
                ]])),
            tr: t.x(Matrix.create([[f],
                [
                    0
                ],
                [
                    1
                ]])),
            br: t.x(Matrix.create([[f],
                [
                    e
                ],
                [
                    1
                ]]))
        },
        a = {
            x: parseFloat(parseFloat(i.tl.e(1, 1)).toFixed(8)),
            y: parseFloat(parseFloat(i.tl.e(2, 1)).toFixed(8))
        },
        v = {
            x: parseFloat(parseFloat(i.bl.e(1, 1)).toFixed(8)),
            y: parseFloat(parseFloat(i.bl.e(2, 1)).toFixed(8))
        },
        y = {
            x: parseFloat(parseFloat(i.tr.e(1, 1)).toFixed(8)),
            y: parseFloat(parseFloat(i.tr.e(2, 1)).toFixed(8))
        },
        p = {
            x: parseFloat(parseFloat(i.br.e(1, 1)).toFixed(8)),
            y: parseFloat(parseFloat(i.br.e(2, 1)).toFixed(8))
        },
        o = {
            tl: a,
            bl: v,
            tr: y,
            br: p
        },
        r = {
            top: 0,
            left: 0
        };
    for (s in o) u = o[s],
        u.y < r.top && (r.top = u.y),
        u.x < r.left && (r.left = u.x);
    h = 0.5,
        c = 0.5,
        n.registrationPointPercentX != null && (h = n.registrationPointPercentX / 100, c = n.registrationPointPercentY / 100),
        n.___compensateY = n.___storeTempY + r.top,
        n.___compensateX = n.___storeTempX + r.left
},
FixIE.transformOrigin = function (n, t) {
    var s = n.style.filter,
        e,
        o,
        i,
        r,
        u,
        f;
    n.style.filter = '',
        e = n.offsetWidth,
        o = n.offsetHeight,
        n.style.filter = s,
        i = 0.5,
        r = 0.5,
        n.registrationPointPercentX != null && (i = n.registrationPointPercentX / 100, r = n.registrationPointPercentY / 100),
        toOrigin = {
            x: e * i,
            y: o * r
        },
        fromOrigin = {
            x: 0,
            y: 0
        },
        u = t.x(Matrix.create([[toOrigin.x],
            [
                toOrigin.y
            ],
            [
                1
            ]])),
        f = t.x(Matrix.create([[fromOrigin.x],
            [
                fromOrigin.y
            ],
            [
                1
            ]])),
        n.___storeTempY = parseFloat(parseFloat(f.e(2, 1) - fromOrigin.y - (u.e(2, 1) - toOrigin.y)).toFixed(8)),
        n.___storeTempX = parseFloat(parseFloat(f.e(1, 1) - fromOrigin.x - (u.e(1, 1) - toOrigin.x)).toFixed(8))
},
Matrix.prototype = {
    e: function (n, t) {
        return n < 1 || n > this.elements.length || t < 1 || t > this.elements[0].length ? null : this.elements[n - 1][t - 1]
    },
    multiply: function (n) {
        var a = n.modulus ? !0 : !1,
            t = n.elements || n;
        typeof t[0][0] == 'undefined' && (t = Matrix.create(t).elements);
        var r = this.elements.length,
            v = r,
            i,
            u,
            c = t[0].length,
            f,
            l = this.elements[0].length,
            e = [
            ],
            o,
            s,
            h;
        do {
            i = v - r,
                e[i] = [
                ],
                u = c;
            do {
                f = c - u,
                    o = 0,
                    s = l;
                do h = l - s,
                    o += this.elements[i][h] * t[h][f];
                while (--s);
                e[i][f] = o
            } while (--u)
        } while (--r);
        return t = Matrix.create(e),
            a ? t.col(1)  : t
    },
    x: function (n) {
        return this.multiply(n)
    },
    setElements: function (n) {
        var t,
            i = n.elements || n,
            r,
            o,
            u,
            s,
            e,
            f,
            h;
        if (typeof i[0][0] != 'undefined') {
            r = i.length,
                o = r,
                this.elements = [
                ];
            do {
                t = o - r,
                    u = i[t].length,
                    s = u,
                    this.elements[t] = [
                    ];
                do e = s - u,
                    this.elements[t][e] = i[t][e];
                while (--u)
            } while (--r);
            return this
        }
        f = i.length,
            h = f,
            this.elements = [
            ];
        do t = h - f,
            this.elements.push([i[t]]);
        while (--f);
        return this
    }
},
Matrix.create = function (n) {
    var t = new Matrix;
    return t.setElements(n)
},
Matrix.Rotation = function (n, t) {
    var e;
    if (!t) return Matrix.create([[Math.cos(n),
        - Math.sin(n)],
        [
            Math.sin(n),
            Math.cos(n)
        ]]);
    if (e = t.dup(), e.elements.length != 3) return null;
    var h = e.modulus(),
        r = e.elements[0] / h,
        u = e.elements[1] / h,
        f = e.elements[2] / h,
        o = Math.sin(n),
        s = Math.cos(n),
        i = 1 - s;
    return Matrix.create([[i * r * r + s,
            i * r * u - o * f,
            i * r * f + o * u],
        [
                i * r * u + o * f,
                i * u * u + s,
                i * u * f - o * r
        ],
        [
                i * r * f - o * u,
                i * u * f + o * r,
                i * f * f + s
        ]])
},
    Array.prototype.indexOf || (Array.prototype.indexOf = function (n, t) {
    for (var i = t || 0, r = this.length; i < r; i++) if (this[i] === n) return i;
    return - 1
}),
ArrayManipulation = {
},
ArrayManipulation.unique = function (n) {
    for (var i = 0, u = n.length, t, r = [
    ], i = 0; i < u; i += 1) t = n[i],
        jQuery.inArray(t, r) == - 1 && t != '' && t != 'undefined' && r.push(t);
    return r
},
Array.prototype.sortOn = function () {
    var n = this.slice(),
        t;
    return arguments.length ? (t = Array.prototype.slice.call(arguments), n.sort(function (n, i) {
        for (var u = t.slice(), r = u.shift(); n[r] == i[r] && u.length; ) r = u.shift();
        return n[r] == i[r] ? 0 : n[r] > i[r] ? 1 : - 1
    }))  : n.sort()
},
ArrayManipulation.pushToRndPos = function (n, t) {
    var i = Math.floor(n.length * Math.random());
    n.splice(i, 0, t)
},
StrUtils = {
},
StrUtils.levensteinDistance = function (n, t) {
    function i(n, t) {
        var h,
            s = n.length,
            o = t.length,
            c,
            u,
            f,
            i,
            e;
        for (s < o && (f = n, n = t, t = f, c = s, s = o, o = c), u = [
        ], u[0] = [
        ], f = 0; f < o + 1; f += 1) u[0][f] = f;
        for (i = 1; i < s + 1; i += 1) for (u[i] = [
        ], u[i][0] = i, e = 1; e < o + 1; e++) h = n.charAt(i - 1) == t.charAt(e - 1) ? 0 : 1,
            u[i][e] = r(u[i - 1][e] + 1, u[i][e - 1] + 1, u[i - 1][e - 1] + h);
        return u[s][o]
    }
    function r(n, t, i) {
        return n < t && n < i ? n : t < n && t < i ? t : i
    }
    return i(n, t)
},
StrUtils.urldecode = function (n) {
    return decodeURIComponent((n + '').replace(/\+/g, '%20'))
},
StrUtils.shortIfLongerThan = function (n, t, i) {
    var u = n.length,
        r = n;
    return u > t && (r = n.substring(0, t) + i),
        r
},
StrUtils.getStamp = function () {
    var n = (new Date).getTime();
    return '?stamp=' + n
},
StrUtils.stripExtension = function (n) {
    var t = '',
        i;
    return n && (i = n.split('.'), t = i[0]),
        t
},
NumUtils = {
},
NumUtils.GetRandomInt = function (n, t) {
    return Math.floor(Math.random() * (1 + t - n)) + n
},
MathUtils = {
},
MathUtils.squareToCircle = function (n) {
    var t = n,
        i = n,
        r = Math.pow(t, 2) + Math.pow(i, 2);
    return Math.sqrt(r)
},
MathUtils.circleToSquare = function (n) {
    var t = n,
        i = Math.pow(t, 2),
        r = i * 0.5;
    return Math.sqrt(r)
},
ResizeHelper = {
},
ResizeHelper.resizeItem = function (n, t, i) {
    function e(n, i, r, u) {
        var f = {
            },
            e = n,
            o = i,
            s = n / i,
            h = i / n,
            c = r / u;
        return s > c ? (o = u, e = u * s, t.alignX == 'center' ? (f.x = Math.floor(r * 0.5 - e * 0.5), f.y = 0)  : t.alignX == 'right' ? (f.x = r - e, f.y = 0)  : (f.x = 0, f.y = 0))  : (e = r, o = e * h, t.alignY == 'center' ? (f.x = 0, f.y = Math.floor(u * 0.5 - o * 0.5))  : (f.x = 0, f.y = 0)),
            f.width = e,
            f.height = o,
            f
    }
    if (n) {
        var u = jQuery(n).width(),
            f = jQuery(n).height(),
            r = e(u, f, t.width, t.height);
        if (newMediaW = r.width, newMediaH = r.height, !isNaN(r.x)) try {
            n.style.left = r.x + 'px'
        } catch (o) {
        }
        if (!isNaN(r.y)) try {
            n.style.top = r.y + 'px'
        } catch (o) {
        }
        jQuery(n).width(newMediaW),
            jQuery(n).height(newMediaH),
            i && (trace(r.x, 'newSizeObj.x'), trace(r.y, 'newSizeObj.y'), trace(r.width, 'newSizeObj.width'), trace(r.height, 'newSizeObj.height'))
    }
},
ResizeHelper.fitInside = function (n, t) {
    function h(n, t, i) {
        var r = n.width,
            u = n.height,
            e,
            f;
        r < t ? (e = u / r, f = t - r, r = r + f, u = u + f * e, n.width = r, n.height = u)  : u < i && (e = r / u, f = i - u, r = r + f * e, u = u + f, n.width = r, n.height = u),
            _props.callback && _props.callback(r, u)
    }
    var i,
        r;
    _props = t,
        t.width < 5 && (t.width = 5),
        t.height < 5 && (t.height = 5);
    var c = t.debug,
        u = t.width,
        f = t.height,
        o = t.targetWidth || n.width,
        s = t.targetHeight || n.height,
        e;
    if (e = t.ratio ? t.ratio : s / o, o = u, s = u * e, i = o, r = s, o > u ? (i = u, r = u * e, r > f && (r = f, i = f / e))  : s > f && (r = f, i = f / e, i > u && (i = u, r = f * e)), t.targetWidth && t.targetHeight) {
        if (t.callback) {
            t.callback(Math.floor(i), Math.floor(r));
            return
        }
        return {
            w: i,
            h: r
        }
    }
    n.width = i,
        n.height = r,
        t.overscale ? h(n, u, f, t)  : t.callback && t.callback(i, r)
},
GlobalMouse = {
},
GlobalMouse._initiated = !1,
GlobalMouse.x = 0,
GlobalMouse.y = 0,
GlobalMouse.init = function () {
    function n(n) {
        GlobalMouse.x = n.pageX,
            GlobalMouse.y = n.pageY
    }
    GlobalMouse._initiated || (trace('GlobalMouse.init();'), GlobalMouse._initiated = !0, jQuery(document).bind(MouseEvent.MOUSE_MOVE, n))
},
CustomGoogleTracking = {
},
CustomGoogleTracking._siteId = '',
CustomGoogleTracking._oldPageView = '',
CustomGoogleTracking._oldEvent = '',
CustomGoogleTracking._disabled = !1,
CustomGoogleTracking.init = function (n) {
    trace('CustomGoogleTracking.init();'),
        CustomGoogleTracking._siteId = n;
    var i = jQuery(Assets.XML).children(),
        t = DataSelectors.composeFullPathFromXML(jQuery(i[0]).children() [0]);
    trace(t, 'defaultPath'),
        CustomGoogleTracking._oldPageView = t
},
CustomGoogleTracking.getId = function () {
    return CustomGoogleTracking._siteId
},
CustomGoogleTracking.disable = function () {
    CustomGoogleTracking._disabled = !0
},
CustomGoogleTracking.pageView = function (n) {
    if (!CustomGoogleTracking._disabled && (n.substring(0, 1) == '/' && (n = n.substring(1, n.length)), CustomGoogleTracking._oldPageView != n)) {
        var t = '/' + CustomGoogleTracking._siteId + '#' + n;
        CustomGoogleTracking._oldPageView = n,
            _gaq.push(['_trackPageview',
                t])
    }
},
CustomGoogleTracking.trackEvent = function (n, t, i) {
    if (!CustomGoogleTracking._disabled) {
        var r = CustomGoogleTracking._siteId + '/' + n + ' - ' + t + ' - ' + i;
        CustomGoogleTracking._oldEvent != r && (trace('CustomGoogleTracking.trackEvent();'), trace(r, 'trackStr'), CustomGoogleTracking._oldEvent = r, _gaq.push(['_trackEvent',
                CustomGoogleTracking._siteId + '/' + n,
            t,
            i]))
    }
},
IUMTracking = {
},
IUMTracking._items = [
],
IUMTracking.add = function (n, t) {
    IUMTracking._items.push({
        group: n,
        data: t
    })
},
IUMTracking.track = function (n, t) {
    function f(n) {
        for (var t = 0, u = IUMTracking._items.length, i, r, t = 0; t < u; t += 1) if (i = IUMTracking._items[t], i.group == n) {
            r = i;
            break
        }
        return r
    }
    var i,
        r,
        u;
    trace('IUMTracking.call();'),
        i = f(n),
        (!t || isNaN(t)) && (t = 0),
        i ? t > i.data.length ? trace('Tracking id was to high')  : (trace(i.data.length, 'useObj.data.length'), r = i.data[t], trace('call : ' + r), Assets.IS_LOCAL || (u = new Function(r), u()))  : trace('Tracking id was not found')
},
ProductData = {
},
ProductData.baseProducts = {
    beoplaya9: {
        others: '256360700',
        italy: '257393400',
        uk: '257393300',
        switzerland: '257393500'
    },
    beoplaya8: '249373200',
    beolit12: '250877200',
    beoplaya3: '250877200',
    beoplayForm2: '250877200',
    beoplayEarset3: '250877200'
},
ProductData.productInfo = {
    beoplaya9: [
        {
            name: 'White',
            id: '256494100',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Silver',
            id: '256493800',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Green',
            id: '256493900',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Black',
            id: '256494200',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Brown',
            id: '257339900',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Beech',
            id: '257340000',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Oak',
            id: '257340100',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Teak',
            id: '257340200',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        },
        {
            name: 'Wall Bracket',
            id: '260072700',
            popId: '256494100',
            popName: 'Interstitial_CrossSell'
        }
    ]
},
ProductDataFormatter = {
},
ProductDataFormatter.getFormattedData = function (n) {
    var o = [
        ],
        r,
        s,
        u,
        f,
        t,
        c;
    switch (Assets.SITE_ID) {
        case 'beoplaya9':
            if (n.Products[0] == undefined) return null;
            ShopService.currency = n.Products[0].DisplayCurrency,
                r = n.Products[0].ID,
                u = n.Products[0].SalePrice,
                f = {
                    id: r,
                    price: u,
                    name: ''
                },
                o.push(f);
            var i = 0,
                a = n.POP.length,
                h,
                l = [
                    'Beech',
                    'Oak',
                    'Teak',
                    'Wall Bracket'
                ];
            for (i; i < a; i++) {
                if (h = n.POP[i].ID, h == 32571940009) for (t = 0, c = n.POP[i].Products.length, t; t < c; t++) {
                    r = n.POP[i].Products[t].ID;
                    var e = 0,
                        v = l.length,
                        y = n.POP[i].Products[t].DisplayName;
                    for (e; e < v; e++) y.toLowerCase().indexOf(l[e].toLowerCase()) != - 1 && (s = l[e]);
                    u = n.POP[i].Products[t].Price.SalePrice,
                        f = {
                            id: r,
                            popId: h,
                            price: u,
                            name: s
                        },
                        o.push(f)
                }
                if (n.POP[i].Name == 'A9_Cover_Colors') for (t = 0, c = n.POP[i].Products.length, t; t < c; t++) r = n.POP[i].Products[t].ID,
                    s = n.POP[i].Products[t].DisplayName,
                    u = n.POP[i].Products[t].Price.SalePrice,
                    f = {
                        id: r,
                        popId: h,
                        price: u,
                        name: s
                    },
                    o.push(f)
            }
    }
    return o
},
ShopService = {
},
ShopService.currency = '',
ShopService.allowedLocales = 'AU, BE, CH, DE, DK, ES, FR, GB, IT, NL, NO, SE',
ShopService._debugMode = !1,
ShopService._server = '',
ShopService._debugServer = 'http://cph-v-sc2-dev07.dk.valtech.com',
ShopService._baseUrl = '/~/service/DRConnect?method=',
ShopService._moduleXML = null,
ShopService._productData = null,
ShopService._ip = '62.32.31.250',
ShopService._currentCallback = null,
ShopService.init = function (n) {
    ShopService._moduleXML = n,
        jQuery.ajaxSetup({
            error: ShopService.AjaxError
        })
},
ShopService.getLocale = function (n) {
    function i(t) {
        trace(t.Locale, 'Got locale'),
            ContentController.removePreloader(ShopService._moduleXML),
            n(t.Locale)
    }
    var t;
    ShopService._currentCallback = n,
        ContentController.addPreloader(ShopService._moduleXML),
        t = ShopService._debugMode === !0 ? ShopService._debugServer + ShopService._baseUrl + 'getuserlocale&debug=1&ip=' + ShopService._ip : ShopService._server + ShopService._baseUrl + 'getuserlocale',
        jQuery.get(t, null, i)
},
ShopService.checkout = function (n, t) {
    function o(n) {
        trace('Checkout got response', 'ShopService'),
            n.ErrorMessage && trace(n.ErrorMessage, 'Error'),
            t && t(n)
    }
    var u;
    ShopService._currentCallback = t,
        ContentController.addPreloader(ShopService._moduleXML),
        u = ShopService._debugMode === !0 ? ShopService._debugServer + ShopService._baseUrl + 'directbuy' : ShopService._server + ShopService._baseUrl + 'directbuy';
    var i = 0,
        e = n.length,
        r = '',
        f;
    for (i; i < e; i++) r += String(n[i]),
        f = ShopService.getProductPopId(n[i]),
        f != null && (r += '|' + f),
        i != e - 1 && (r += ',');
    ShopService._debugMode === !0 ? jQuery.get(u, {
        pid: r,
        debug: '1',
        ip: ShopService._ip,
        crash: 'emptycheckout'
    }, o)  : jQuery.get(u, {
        pid: r
    }, o)
},
ShopService.fetchProductData = function (n, t, i) {
    function s(n, t) {
        if (trace(t, 'status'), ContentController.removePreloader(ShopService._moduleXML), trace('Done fetching data', 'ShopService'), n.Products) {
            if (ShopService._productData = ProductDataFormatter.getFormattedData(n), ShopService._productData == null) {
                i(!0);
                return
            }
        } else {
            trace('Error - no data returned', 'ShopService.fetchProductData'),
                i(!0);
            return
        }
        if (i) {
            i(!1);
            return
        }
    }
    var e,
        u,
        f,
        r,
        o;
    if (ShopService._currentCallback = i, ContentController.addPreloader(ShopService._moduleXML), e = Assets.SITE_ID == 'beoplaya9' ? 'geta9' : 'getproductdetails', u = ShopService._debugMode === !0 ? ShopService._debugServer + ShopService._baseUrl + e : ShopService._server + ShopService._baseUrl + e, f = '', t) {
        for (r = 0, o = t.length, r; r < o; r++) f += t[r],
            r != o - 1 && (f += ',');
        jQuery.get(u, {
            pid: n,
            pop: f
        }, s)
    } else ShopService._debugMode === !0 ? jQuery.get(u, {
        pid: n,
        debug: '1',
        ip: ShopService._ip
    }, s)  : jQuery.get(u, {
        pid: n
    }, s)
},
ShopService.AjaxError = function (n) {
    n.status == 0 ? trace('Check Your Network.', 'ShopService.AjaxError')  : n.status == 404 ? trace('Requested URL not found.', 'ShopService.AjaxError')  : n.status == 500 ? trace('Internel Server Error.', 'ShopService.AjaxError')  : trace('Unknow Error.\n' + n.responseText, 'ShopService.AjaxError'),
        ShopService._currentCallback && (ShopService._currentCallback(!0), ShopService._currentCallback = null)
},
ShopService.getBaseProductId = function () {
    return ShopService._productData[0].id
},
ShopService.getBaseProductPrice = function () {
    return ShopService._productData[0].price
},
ShopService.getProductPrice = function (n) {
    var i = 0,
        t = 0,
        r = ShopService._productData.length;
    for (t; t < r; t++) if (ShopService._productData[t].name.toLowerCase() == n.toLowerCase()) {
        i = ShopService._productData[t].price;
        break
    }
    return i
},
ShopService.getProductId = function (n) {
    var i = null,
        t = 0,
        r = ShopService._productData.length;
    for (t; t < r; t++) if (ShopService._productData[t].name.toLowerCase() == n.toLowerCase()) {
        i = ShopService._productData[t].id;
        break
    }
    return i
},
ShopService.getProductPopId = function (n) {
    var i = null,
        t = 0,
        r = ShopService._productData.length;
    for (t; t < r; t++) if (ShopService._productData[t].id == n) {
        i = ShopService._productData[t].popId;
        break
    }
    return i
},
AssetLoaderEvent = {
},
AssetLoaderEvent.COMPLETE = 'complete',
AssetLoader = {
},
AssetLoader.init = function (n) {
    AssetLoader.assets = [
    ],
        AssetLoader.que = [
        ],
        AssetLoader.busy = !1,
        AssetLoader.assetPath = n,
        AssetLoader.tempLayer = document.createElement('div'),
        AssetLoader.tempLayer.style.visible = 'hidden',
        document.body.appendChild(AssetLoader.tempLayer)
},
AssetLoader.loadGroup = function (n, t) {
    function i() {
        function h() {
            var i,
                r,
                f,
                e;
            if (n.length > 0) for (i = 0, r = n.length, i; i < r; i++) u = new Image,
                t = AssetLoader.stripExtension(n[i]),
                f = n[i],
                e = new RegExp('/'),
                e.test(f) ? (url = n[i], AssetLoader.que[0].stripPath && (t = AssetLoader.stripPath(n[i]), t = AssetLoader.stripExtension(t)))  : url = customPath != null ? customPath + n[i] : AssetLoader.assetPath + n[i],
                u.id = t,
                u.onload = c,
                u.src = url;
            else o()
        }
        function c() {
            var n = this;
            AssetLoader.assets.push({
                asset: n,
                id: n.id,
                orgW: n.naturalWidth,
                orgH: n.naturalHeight
            }),
                f++,
                o()
        }
        function o() {
            f == e && (callback(), AssetLoader.que.shift(), AssetLoader.que.length > 0 ? setTimeout(function () {
                i()
            }, 100)  : (AssetLoader.busy = !1, jQuery(AssetLoader).trigger(AssetLoaderEvent.COMPLETE)))
        }
        data = AssetLoader.que[0].data,
            callback = AssetLoader.que[0].callback,
            customPath = AssetLoader.que[0].customPath;
        var r = 0,
            s = data.length,
            f = 0,
            n = [
            ],
            e = 0,
            u,
            t;
        for (r; r < s; r++) t = AssetLoader.stripExtension(data[r]),
            AssetLoader.assetExist(t) || (n.push(data[r]), e++);
        h()
    }
    n.stripPath = t ? t : !1,
        AssetLoader.busy ? AssetLoader.que.push(n)  : (AssetLoader.busy = !0, AssetLoader.que.push(n), i())
},
AssetLoader.stripExtension = function (n) {
    var t = '',
        i;
    return n && (i = n.split('.'), t = i[0]),
        t
},
AssetLoader.stripPath = function (n) {
    var t,
        i;
    return n && (i = new RegExp('^.*[/]', 'g'), t = n.replace(i, '')),
        t
},
AssetLoader.getAsset = function (n, t) {
    var u,
        f;
    n = AssetLoader.stripExtension(n);
    var e = !1,
        r = 0,
        h = AssetLoader.assets.length,
        i = null,
        o,
        s;
    for (r; r < h; r++) if (n === AssetLoader.assets[r].id) {
        e = !0,
            o = AssetLoader.assets[r].orgW,
            s = AssetLoader.assets[r].orgH,
            i = AssetLoader.assets[r].asset.cloneNode(!0);
        break
    }
    if (e !== !0) trace('AssetLoader: asset with id >> ' + n + ', not found');
    else return AssetLoader.tempLayer.appendChild(i),
        u = i.width,
        f = i.height,
        BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 10 && (u = jQuery(i).width(), f = jQuery(i).height()),
        (u == 0 || u == null) && (u = o),
        (f == 0 || f == null) && (f = s),
        AssetLoader.tempLayer.removeChild(i),
            t === !0 ? (i = new SmartObject(i), i.orgW = u, i.orgH = f, i)  : (i.orgW = u, i.orgH = f, jQuery(i).css({
        position: 'absolute'
    }), jQuery(i))
},
AssetLoader.assetExist = function (n) {
    var t = 0,
        i = AssetLoader.assets.length;
    for (t; t < i; t++) if (n === AssetLoader.assets[t].id) return !0;
    return !1
},
SitecoreData = function () {
    function u() {
        var n = [
            'pullout_bg_left.png',
            'pullout_bg_mid.png',
            'pullout_bg_right.png',
            'icon_bg_white_left.png',
            'icon_bg_white_mid.png',
            'icon_bg_white_right.png',
                'pullout_close_btn_' + Assets.SITE_ID + '.png',
                'pullout_close_btn_' + Assets.SITE_ID + '_hover.png'
        ];
        AssetLoader.loadGroup(new AssetGroup(n, r, '/layouts/SBV-Custom/HMProductPage/assets/images/pullouts/'), !0)
    }
    function r() {
        i()
    }
    function f() {
        var n = {
        };
        return n.pullouts = window.SitecorePulloutData != undefined ? SitecorePulloutData : [
        ],
            n.buy = {
            },
            n
    }
    var t = {
        },
        n,
        i;
    return t.init = function (t) {
        i = t,
            n = f(),
                n.pullouts.length > 0 ? u()  : r()
    },
        t.getPulloutData = function (t) {
            var i = 0,
                o = n.pullouts.length,
                u,
                r,
                f,
                e;
            for (i; i < o; i++) if (r = n.pullouts[i].id, r.indexOf('-') != - 1 ? (f = r.split('-'), r = f[0], e = String(f[1]).toLowerCase())  : e = 'bottom', r === t) {
                u = n.pullouts[i],
                    u.align = e;
                break
            }
            return u
        },
        t
}(),
CustomEvents = {
},
DataSelectors = {
},
DataSelectors.getTextByDataName = function (n, t) {
    return jQuery(n).children('div[data-name="' + t + '"]:first').text()
},
DataSelectors.getXmlByDataName = function (n, t) {
    return jQuery(n).children('div[data-name="' + t + '"]:first')
},
DataSelectors.getHtmlByDataName = function (n, t) {
    return jQuery(n).children('div[data-name="' + t + '"]:first').html()
},
DataSelectors.composeFullPathFromXML = function (n) {
    var t = jQuery(n).attr('data-path'),
        r = [
        ],
        i,
        u;
    for (t && r.unshift(t), i = jQuery(n).parent(), u = 0; i; ) if (t = jQuery(i).attr('data-path'), t && r.unshift(t), i = jQuery(i).parent(), u += 1, u > 30) break;
    return r.join('/')
},
Assets = {
},
Assets.LOCALE_PATH = '/system/service/currentlocale?debug=1',
Assets.XML = null,
Assets.STATIC_DATA = null,
Assets.SITECORE_DATA = null,
Assets.BODY = null,
Assets.REAL_BODY = null,
Assets.LAYER_ALL = null,
Assets.LAYER_BOT = null,
Assets.LAYER_MID = null,
Assets.LAYER_TOP = null,
Assets.PULLOUTS,
Assets.MOBILE_VERSION = !1,
Assets.SITE_ID = '',
Assets.BUY_ID = '',
Assets.SKIN_FOLDER = '',
Assets.IS_LOCAL = !1,
Assets.SITE_COLORS = {
    beoplaya9: {
        header: '#454545'
    },
    beoplaya8: {
        header: '#117D8B'
    },
    beolit12: {
        header: '#DD0C11'
    },
    beoplaya3: {
        header: '#1AA0D8'
    },
    beoplayv1: {
        header: '#6F9637'
    },
    beoplayForm2: {
        header: '#F26522'
    },
    beoplayEarset3: {
        header: '#F7AD10'
    },
    beoplayh3: {
        header: '#a3193c'
    },
    beoplayh6: {
        header: '#9b4f2e'
    }
},
Assets.IE8 = Assets.IS_IE8 = BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
Assets.IPAD = Assets.IS_IPAD = BrowserDetect.OS == 'iPad',
Assets.IS_PHONE = BrowserDetect.OS == 'iPhone' || BrowserDetect.MOBILE,
Assets.IS_TABLET = BrowserDetect.OS == 'iPad' || BrowserDetect.TABLET,
Assets.IS_DESKTOP = !Assets.IS_TABLET && !Assets.IS_PHONE,
Assets.IS_3D_ENABLED = BrowserDetect.TRANSLATE3D_SUPPORT,
Assets.PIXEL_RATIO = window.devicePixelRatio || 1,
Assets.IS_IPAD1_OR_IPAD2 = Assets.IS_TABLET && Assets.PIXEL_RATIO < 2,
Assets.IS_CHROME_IOS = navigator.userAgent.match('CriOS') ? !0 : !1,
Assets.LOCALE = null,
Assets.BASE_PRODUCT_ID = null,
Assets.IN_USE_CONTROLS = null,
Assets.getSkinFileURL = function (n) {
    var t = null;
    return Assets.SKIN_FOLDER != '' && (t = Assets.SKIN_FOLDER + n),
        t
},
Assets.getHeaderColor = function () {
    return Assets.SITE_COLORS[Assets.SITE_ID].header
},
Assets.findOffsetPosition = function (n) {
    for (var i = {
        _x: 0,
        _y: 0
    }, t = n; t.parentNode; ) {
        if (i._x += t.offsetLeft, i._y += t.offsetTop, parseInt(t.style.height) === window.innerHeight) break;
        t = t.parentNode
    }
    return i
},
function (n) {
    function r(n, t, i) {
        var r = n.width,
            u = n.height,
            e,
            f;
        r == 0 && n._getWidth && (r = n._getWidth()),
            u == 0 && n._getHeight && (u = n._getHeight()),
            r < t && (e = u / r, f = t - r, r = r + f, u = u + f * e, n.width = r, n.height = u),
            u < i && (e = r / u, f = i - u, r = r + f * e, u = u + f, n.width = r, n.height = u)
    }
    function u(n, t, i, r) {
        var u = n,
            f = t,
            o,
            e;
        return u < i ? (o = f / u, e = i - u, u = u + e, f = f + e * o)  : f < r && (o = u / f, e = r - f, u = u + e * o, f = f + e),
        {
            w: Math.round(u),
            h: Math.round(f)
        }
    }
    var t = {
        },
        i;
    t.resize = function (n, t, i) {
        t < 5 && (t = 5),
            i < 5 && (i = 5);
        var u = jQuery(n).width(),
            r = jQuery(n).height(),
            f = r / u;
        u = t,
            r = u * f,
            r >= i && (r = i, u = r / f),
            jQuery(n).width(u),
            jQuery(n).height(r)
    },
        t.fitInside = function (n, t) {
            var c = t.debug,
                f,
                e;
            n instanceof jQuery && (n = jQuery(n).get() [0]),
                t.width < 5 && (t.width = 5),
                t.height < 5 && (t.height = 5);
            var i = t.width,
                u = t.height,
                o = n.width,
                s = n.height,
                h;
            o == 0 && n._getWidth && (o = n._getWidth()),
                s == 0 && n._getHeight && (s = n._getHeight()),
                h = t.ratio ? t.ratio : s / o,
                o = i,
                s = i * h,
                f = o,
                e = s,
                    o > i ? (f = i, e = i * h, e > u && (e = u, f = u / h))  : s > u && (e = u, f = u / h, f > i && (f = i, e = u * h)),
                n.width = f,
                n.height = e,
                t.overscale && r(n, i, u)
        },
        t.getNewSize = function (n) {
            i = n,
                n.boundsW < 5 && (n.boundsW = 5),
                n.boundsH < 5 && (n.boundsH = 5);
            var t = n.boundsW,
                r = n.boundsH,
                o = n.orgW,
                s = n.orgH,
                h = n.ratio || s / o,
                f = o,
                e = s;
            return o = t,
                s = t * h,
                n.overscale ? u(o, s, t, r)  : (f = o, e = s, o > t ? (f = t, e = t * h, e > r && (e = r, f = r / h))  : s > r && (e = r, f = r / h, f > t && (f = t, e = r * h)), {
                    w: Math.round(f),
                    h: Math.round(e)
                })
        },
        n.Resizer = t
}(window),
ContentController = {
},
ContentController._activeTemplates = [
],
ContentController._wheelInactiveDelay,
ContentController._isSnapping = !0,
ContentController._mouseIsDown = !1,
ContentController._wheelInUse = !1,
ContentController._xml,
ContentController._xmlChildren,
ContentController._oldPath = '',
ContentController._blocked = !1,
ContentController._currHash = '',
ContentController._oldScrollTop = 0,
ContentController._oldInFocus,
ContentController._removeData,
ContentController._oldSnapId = 0,
ContentController.WIN_WIDTH = 0,
ContentController.WIN_HEIGHT = 0,
ContentController.TOTAL_HEIGHT = 0,
ContentController._forceSnap = !1,
ContentController.pathArray,
ContentController._mouseMoveInterval,
ContentController._firstLoadRegister = [
    !0,
    !0,
    !0,
    !0,
    !0,
    !0,
    !0,
    !0,
    !0,
    !0,
    !0,
    !0,
    !0
],
ContentController.touchX = 0,
ContentController.touchY = 0,
ContentController.scrollTolerance = 3,
ContentController._curSnapId = 0,
ContentController._wheelStartTime,
ContentController._wheelTimeOut,
ContentController._allowWheel = !0,
ContentController._scrollDisabled = !1,
ContentController._hasMouseWheelSupport = !1,
ContentController.nrOfModules = 0,
ContentController._currentTemplateId = 0,
ContentController._footer,
ContentController._fixedTemplates = {
    count: 0,
    totalHeight: 0
},
ContentController._totalTemplates,
ContentController._h3h6_allowScroll = !1,
ContentController._h3h6_isBuyModule = !1,
ContentController._h3h6_isMegaFooter = !1,
ContentController._has_H3H6_BuyTemplate = !1,
ContentController.init = function (n) {
    function t() {
        document.addEventListener('DOMMouseScroll', function (n) {
            if (n.axis == n.HORIZONTAL_AXIS) return n.stopPropagation(),
                n.preventDefault(),
                n.cancelBubble = !1,
                !1
        }),
            document.addEventListener('MozMousePixelScroll', function (n) {
                return n.stopPropagation(),
                    n.preventDefault(),
                    n.cancelBubble = !1,
                    !1
            })
    }
    function i() {
        TopMenu.changePossition()
    }
    function r(n) {
        n.preventDefault()
    }
    ContentController._wheelStartTime = (new Date).getTime(),
        ContentController.WIN_WIDTH = jQuery(window).width(),
        ContentController.WIN_HEIGHT = jQuery(window).height(),
        ContentController._xml = n,
        ContentController._xmlChildren = jQuery(ContentController._xml).children(),
        ContentController.buildInitialContent(),
        jQuery(window).bind(Event.RESIZE, ContentController.onResize),
        jQuery(document).bind(MouseEvent.MOUSE_DOWN, ContentController.onMouseDown),
        ContentController.barScrollCheck(),
            BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION === 8 ? document.onmousewheel = ContentController.onIEWheel : jQuery(document).bind(MouseEvent.MOUSE_WHEEL, ContentController.onWheelUse),
        (BrowserDetect.MOBILE || BrowserDetect.TABLET) && (ContentController._h3h6_allowScroll = !1),
        jQuery(window).bind('hashchange', ContentController.onHashEvent),
        setTimeout(ContentController.hashCheck, 1000 * 0.2),
        BrowserDetect.BROWSER_NAME != 'Explorer' && t(),
        (BrowserDetect.OS === 'iPad' || Assets.MOBILE_VERSION) && (jQuery(document).bind('touchstart', i), jQuery(document).bind('touchmove', r), jQuery(document).touchwipe({
        wipeDown: ContentController.scrollToNextTemplate,
        wipeUp: ContentController.scrollToPrevTemplate,
        min_move_x: 130,
        min_move_y: 130,
        preventDefaultEvents: !1
    }), jQuery(window).bind('orientationchange', ContentController.orientationChange)),
        ContentController.onResize(),
        ContentController.nrOfModules = ContentController._xmlChildren.length,
        ContentController.snap(0, !0)
},
ContentController.onHashEvent = function (n) {
    return n.stopPropagation(),
        n.preventDefault(),
        n.cancelBubble = !1,
        !1
},
ContentController.hashCheck = function () {
    var n = jQuery.param.fragment();
    ContentController._currHash != n && (ContentController._currHash = n, ContentController.onHashChange()),
        setTimeout(ContentController.hashCheck, 250)
},
ContentController.onHashChange = function () {
    function u(n, t) {
        var u = ContentController._activeTemplates.length,
            r = ContentController._activeTemplates[n],
            i = r.menuTemplate;
        i && i.pathChange(t)
    }
    var i = ContentController.extractPath(ContentController._currHash),
        n,
        r,
        t;
    return i == ContentController._oldPath || ContentController._blocked ? ContentController._blocked : (ContentController._blocked = !0, ContentController._oldPath = i, n = i.split('/'), n[0] == '' && n.shift(), ContentController.pathArray = n, n.length > 0 ? (r = n[0], t = ContentController.getIndexOfPath(ContentController._xml, r), n.length > 1 && t !== !1 ? (ContentController.changeTemplateForModule(t, n[1]), u(t, n[1]))  : setTimeout(ContentController.removeBlock, 1000), ContentController.snap(t + 1, !0), ContentController._curSnapId = t + 1)  : setTimeout(ContentController.removeBlock, 1000)),
        !1
},
ContentController.onWheelUse = function (n, t) {
    function r() {
        var t = n.originalEvent || window.event,
            i = {
                x: 0,
                y: 0
            };
        return 'wheelDeltaX' in t ? (i.x = t.wheelDeltaX / 62, i.y = t.wheelDeltaY / 62)  : 'wheelDelta' in t ? i.x = i.y = t.wheelDelta / 62 : 'detail' in t && (i.x = i.y = - t.detail * 3),
            i
    }
    BrowserDetect.TABLET || (ContentController._hasMouseWheelSupport = !0),
        n.stopPropagation(),
        n.preventDefault(),
        n.cancelBubble = !1,
        TopMenu.changePossition();
    var i = t || r().y;
    return i < 0 && ContentController._allowWheel ? (ContentController._allowWheel = !1, ContentController.scrollToNextTemplate())  : i > 0 && ContentController._allowWheel && (ContentController._allowWheel = !1, ContentController.scrollToPrevTemplate()),
        ContentController.scrollDelay(),
        !1
},
ContentController.scrollDelay = function () {
    ContentController._wheelTimeOut && clearTimeout(ContentController._wheelTimeOut),
        ContentController._wheelTimeOut = setTimeout(function () {
            ContentController._allowWheel = !0
        }, 100)
},
ContentController.onIEWheel = function (n) {
    var t = 0;
    n || (n = window.event),
        n.wheelDelta && (t = n.wheelDelta / 120),
        TopMenu.changePossition(),
            t < 0 ? (ContentController._allowWheel = !1, ContentController.scrollToNextTemplate())  : (ContentController._allowWheel = !1, ContentController.scrollToPrevTemplate()),
        ContentController.scrollDelay(),
        n.preventDefault && n.preventDefault(),
        n.returnValue = !1
},
ContentController.scrollToNextTemplate = function () {
    ContentController._isSnapping || ContentController._scrollDisabled || (ContentController._curSnapId++, ContentController._curSnapId <= ContentController._activeTemplates.length ? (ContentController._isSnapping = !0, ContentController._wheelInUse = !0, ContentController.path(OverallMenu._btns[ContentController._curSnapId - 1]._path))  : ContentController._curSnapId = ContentController._activeTemplates.length)
},
ContentController.scrollToPrevTemplate = function () {
    ContentController._isSnapping || ContentController._scrollDisabled || (ContentController.skipBuyModule() ? ContentController._curSnapId -= 2 : ContentController._curSnapId--, ContentController._curSnapId >= 1 ? (ContentController._isSnapping = !0, ContentController._wheelInUse = !0, ContentController.path(OverallMenu._btns[ContentController._curSnapId - 1]._path))  : ContentController._curSnapId = 1)
},
ContentController.skipBuyModule = function () {
    if (ContentController._has_H3H6_BuyTemplate) {
        var n = ContentController.getPathIndex('related-content'),
            t = ContentController._activeTemplates[n].height,
            i = ContentController.getPathIndex('buy'),
            r = ContentController._activeTemplates[i].height,
            u = ContentController._h3h6_isMegaFooter,
            f = ContentController.WIN_HEIGHT > r + t;
        return u && f
    }
    return !1
},
ContentController.scrollBehaviour = function (n) {
    var t = n.toLowerCase();
    ContentController._scrollDisabled = t === 'enable' || t === 'enabled' || t === 'on' ? !1 : !0
},
ContentController.barScrollCheck = function () {
    var i = jQuery(window).scrollTop(),
        t = i / ContentController.WIN_HEIGHT,
        n;
    ContentController._isSnapping || ContentController._mouseIsDown || ContentController._wheelInUse || t == Math.floor(t) || (n = ContentController.getSnapId(), n + 1 !== ContentController._curSnapId && (trace('barScrollCheck'), ContentController._isSnapping = !0, ContentController.path(OverallMenu._btns[n]._path))),
        setTimeout(ContentController.barScrollCheck, 1000 * 0.3)
},
ContentController.onWheelInactive = function () {
    ContentController._wheelInUse = !1;
    var n = ContentController.getSnapId();
    ContentController.path(OverallMenu._btns[n]._path)
},
ContentController.onMouseDown = function (n) {
    function r() {
        t();
        var n = ContentController.WIN_WIDTH - 80;
        GlobalMouse.x !== 0 && GlobalMouse.x < n && (clearInterval(ContentController._mouseMoveInterval), jQuery(window).trigger(MouseEvent.MOUSE_UP))
    }
    function t() {
        updateModuleStates(),
            TopMenu.changePossition()
    }
    function i() {
        ContentController.snap(ContentController.getSnapId() + 1, !0),
            ContentController._forceSnap = !0,
            ContentController._mouseIsDown = !1,
            jQuery(window).unbind(MouseEvent.MOUSE_UP, i),
            jQuery(window).unbind(MouseEvent.MOUSE_MOVE, t),
            (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && H3H6_VisibilityController.affectAll(ContentController._activeTemplates, ContentController._activeTemplates[ContentController.getSnapId()].array[0], 'hide')
    }
    n.pageX > ContentController.WIN_WIDTH - 20 && (jQuery('body,html').stop(!0, !1), ContentController._wheelInUse = !1, ContentController._isSnapping = !1, ContentController._mouseIsDown = !0, jQuery(window).bind(MouseEvent.MOUSE_UP, i), BrowserDetect.BROWSER_NAME == 'Safari' || BrowserDetect.BROWSER_NAME == 'Chrome' || BrowserDetect.BROWSER_NAME == 'Explorer' ? (clearInterval(ContentController._mouseMoveInterval), ContentController._mouseMoveInterval = setInterval(r, 1000 / 24))  : jQuery(window).bind(MouseEvent.MOUSE_MOVE, t), (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && H3H6_VisibilityController.affectAll(ContentController._activeTemplates, !1, 'show'))
},
ContentController.getSnapId = function () {
    for (var f = jQuery(window).scrollTop(), e = ContentController._activeTemplates.length, r, t = [
    ], u, i, n = 0; n < e; n += 1) r = ContentController._activeTemplates[n].array[0],
        i = parseInt(jQuery(r).css('top')),
        isNaN(i) && (i = 0),
        u = Math.abs(f - i),
        t.push({
            id: n,
            dist: u
        });
    return t = t.sortOn('dist'),
        t[0].id
},
ContentController.snap = function (n, t) {
    function p() {
        TopMenu.changePossition(),
            updateModuleStates()
    }
    function c() {
        setTimeout(function () {
            var n = jQuery(window).scrollTop();
            r == 0 && n != 0 && jQuery('body,html').css({
                scrollTop: 0
            })
        }, 100),
            updateModuleStates(),
            ContentController._isSnapping = !1,
            ContentController._currentTemplateId = ContentController.getCurrentTemplate() - 1,
            (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && setTimeout(function () {
            ContentController._h3h6_allowScroll = !0
        }, 500)
    }
    var f,
        i,
        o,
        s,
        u,
        h;
    if (Assets.MOBILE_VERSION === !1 && ContentController.WIN_HEIGHT > 660 || t) {
        ContentController._isSnapping = !0,
            f = jQuery(window).scrollTop(),
            n = n == null || n == !1 ? ContentController.getSnapId()  : n - 1,
            ContentController._curSnapId = n + 1,
            updateModuleStates();
        var e = ContentController._activeTemplates[n].array,
            l = e[e.length - 1]._xml,
            a = DataSelectors.composeFullPathFromXML(l);
        if (CustomGoogleTracking.pageView(a), n != ContentController._oldSnapId || ContentController._forceSnap || t) {
            var v = ContentController._activeTemplates[n].array[0].snapToBottom,
                y = jQuery(ContentController._activeTemplates[n].array[0]).css('top'),
                r = parseInt(y);
            v && (r -= ContentController._activeTemplates[n].height),
                i = Math.abs(f - r) * 0.001,
                    i < 0.8 ? i = 0.8 : i > 1.2 && (i = 1.2),
                i = i * 1000,
                (BrowserDetect.OS == 'iPad' || Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && (i = Math.abs(f - r) * 0.002, i < 1.2 ? i = 1.2 : i > 1.6 && (i = 1.6), i = i * 1000),
                n || (n = 0),
                ContentController._oldInFocus && (ContentController._oldInFocus.focusOut(), o = ContentController._oldInFocus._templateId !== ContentController._currentTemplateId, BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION < 9 || (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && o && H3H6_VisibilityController.hide(ContentController._oldInFocus)),
                s = jQuery(ContentController._xmlChildren[n]).attr('data-path'),
                OverallMenu.select(s),
                u = ContentController._activeTemplates[n].array[0],
                u.focusIn(),
                ContentController._oldInFocus = u,
                (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && H3H6_VisibilityController.show(u),
                h = 'easeInOutExpo',
                jQuery('body,html').stop(!0, !1).animate({
                    scrollTop: r
                }, {
                    duration: i,
                    easing: h,
                    complete: c,
                    step: p
                }),
                ContentController._oldScrollTop = r,
                ContentController._oldSnapId = n,
                ContentController._forceSnap = !1
        } else c()
    }
},
ContentController.getCorrectScrollPos = function (n, t) {
    var t = t,
        u = ContentController.getPathIndex('buy'),
        f = ContentController._activeTemplates[u].array[0],
        e = f.offset().top || parseInt(jQuery(f.get(0)).css('top')),
        r = ContentController._activeTemplates[u].height,
        o = ContentController.getPathIndex('related-content'),
        s = ContentController._activeTemplates[o].array[0],
        h = s.offset().top || parseInt(jQuery(s.get(0)).css('top')),
        i = ContentController._activeTemplates[o].height,
        l = r && ContentController._activeTemplates[n].array[0]._xml.getAttribute('data-name') === 'buyModule',
        c = i && ContentController._activeTemplates[n].array[0]._xml.getAttribute('data-name') === 'megaFooter',
        a = ContentController.WIN_HEIGHT > r + i;
    return (l || c) && a ? h ? t = h - (ContentController.WIN_HEIGHT - i)  : e && (t = e - (ContentController.WIN_HEIGHT - r))  : c && (i ? t = t - (ContentController.WIN_HEIGHT - i)  : i && (t = t - (ContentController.WIN_HEIGHT - r))),
        t || !1
},
ContentController.buildInitialContent = function () {
    function d(n) {
        n._loaded = !0,
            n.templateIn('');
        var t = ContentController.WIN_HEIGHT;
        n._moduleHeight && (t = n._moduleHeight),
            n.resize(ContentController.WIN_WIDTH, t)
    }
    var u,
        t,
        n,
        p = ContentController._xmlChildren.length,
        i,
        e,
        o,
        l,
        h,
        r,
        f,
        k = ContentController.extractPath(document.location.hash),
        s = k.split('/'),
        a,
        v,
        w,
        b,
        y,
        c;
    for (s[0] == '' && s.shift(), u = 0; u < p; u += 1) t = ContentController._xmlChildren[u],
        a = jQuery(t).attr('data-path'),
        s.length > 1 && s[0] == a && (v = ContentController.getIndexOfPath(t, s[1]), v !== !1 && (i = jQuery(t).children() [v])),
        i || (i = jQuery(t).children() [0]),
        i && (n = ContentController.getTemplateWithXML(i), n !== null && (w = jQuery(i).attr('data-template'), n.name = w, jQuery(Assets.LAYER_MID).append(n), n._contentControl_active = !0, n._contentControl_yPos = 0, n._contentControl_height = 0, f = jQuery(t).attr('data-height'), b = jQuery(t).attr('data-pulloutId'), y = SitecoreData.getPulloutData(b), y && Assets.PULLOUTS.addPullout({
        data: y,
        height: f,
        id: u
    }), e = ContentController.getTemplateWithXML(t), e && (jQuery(Assets.LAYER_TOP).append(e), e.templateIn('')), l = jQuery(t).attr('data-bgcolor'), (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && H3H6_VisibilityController.setup(n), l && (o = General.getNewDiv(), o.style.backgroundColor = l, f && (o.style.height = f + 'px'), Assets.LAYER_BOT.appendChild(o)), c = n.skipSeperator, c === undefined && (c = !1), u == p - 1 || c ? (h = null, r = null)  : Assets.SITE_ID != 'beoplayh3' && Assets.SITE_ID != 'beoplayh6' && (r = General.getNewDiv(), r.style.overflow = 'hidden', r.style.height = '100px', r.style.pointerEvents = 'none', Assets.LAYER_TOP.appendChild(r), h = General.getNewImage('/layouts/SBV-Custom/HMProductPage/assets/images/spacer-bg-1.png')), ContentController._activeTemplates.push({
        array: [
            n
        ],
        menuTemplate: e,
        bgColor: o,
        seperator: r,
        shadowSeperator: h,
        height: parseInt(f),
        path: a
    }), typeof n.templateLoad == 'function' ? (n._loaded = !1, n._moduleHeight = f, n.templateLoad(d))  : (n._loaded = !0, n.templateIn('')), h = null)),
        i = null;
    Assets.PULLOUTS.resize(ContentController.WIN_WIDTH, ContentController.WIN_HEIGHT),
        ContentController._footer = jQuery('<div />').css({
            position: 'absolute',
            zIndex: 10
        }),
        jQuery(ContentController._footer).append(jQuery(Assets.SITECORE_DATA).children('#sc_footer')),
        ContentController.calculateTemplateHeights()
},
ContentController.getTemplateWithXML = function (n) {
    var i = jQuery(n).attr('data-template'),
        t;
    return i && (i == 'test' ? t = new SectionTemplate(n)  : i == 'AtAGlance' ? t = new GlanceTemplate(n)  : i == 'menu-test' ? t = new MenuTemplate(n)  : i == 'form2Buy' ? t = new Form2_Buy(n)  : i == 'swapper' ? t = new SwapperTemplate(n)  : i == 'inUseTemplate' ? t = new InUseTemplate(n)  : i == 'Form2_Highlights' ? t = new Form2_Highlights(n)  : i == 'Form2TechTalkTemplate' ? t = new Form2TechTalkTemplate(n)  : i == 'image' ? t = new ImageTemplate(n)  : i == 'expertsTemplate' ? t = new ExpertsTemplate(n)  : i == 'v1se' ? t = new V1SETemplate(n)  : i == 'fragmentImage' ? t = new FragmentGalleryTemplate(n)  : i == 'panel' ? t = new PanelTemplate(n)  : i == 'v1Room' ? t = new V1RoomTemplate(n)  : i == 'readyFuture' ? t = new ReadyFutureTemplate(n)  : i == 'takingSound' ? t = new TakingSoundTemplate(n)  : i == 'buy' ? t = new BuyTemplate(n)  : i == 'bigPreviewBuy' ? t = new BigPreviewBuyTemplate(n)  : i == 'features' ? t = new FeaturesTemplate(n)  : i == 'specs' ? t = new SpecsTemplate(n)  : i == 'staying' ? t = new StayingOnTopTemplate(n)  : i == 'airplay' ? t = new AirplayTemplate(n)  : i == 'illustration' ? t = new IllustrationTemplate(n)  : i == 'detechnofy' ? t = new DetechnofyTemplate(n)  : i == 'highlightsMenu' ? t = new HighlightsMenuTemplate(n)  : i == 'simplicity' ? t = new SimplicityTemplate(n)  : i == 'sound' ? t = new SoundTemplate(n)  : i === 'BeolitTechTalkTemplate' ? t = new BeolitTechTalkTemplate(n)  : i == 'portability' ? t = new PortabilityTemplate(n)  : i == 'design' ? t = new DesignTemplate(n)  : i == 'video' ? t = new VideoTemplate(n)  : i == 'beosound8' ? t = new A8Highlights(n)  : i == 'buyBeosound' ? t = new BuyBeosoundTemplate(n)  : i == 'illustrationBeosound' ? t = new IllustrationBeosoundTemplate(n)  : i == 'polyGallery' ? t = new testTemplate(n)  : i == 'temporaryHighlightsTop' ? t = new TemporaryHighlightsTop(n)  : i == 'A3Highlights' ? t = new A3HighlightsTemplate(n)  : i == 'A3Buy' ? t = new A3BuyTemplateNew(n)  : i == 'A3SoundQuality' ? t = new A3SoundQualityTemplate(n)  : i == 'A3Orientation' ? t = BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8 ? new A3OrientationTemplate_ie(n)  : new A3OrientationTemplate(n)  : i == 'V1Illustrations' ? t = new V1Illustrations(n)  : i == 'TvTwist' ? t = new TvTwistTemplate(n)  : i == 'AdaptiveContrast' ? t = new AdaptiveContrastTemplate(n)  : i === 'V1Video' ? t = new V1Video(n)  : i == 'Earset3_Module1' ? t = new Earset3_Module1(n)  : i == 'Earset3_Module2' ? t = new Earset3_Module2(n)  : i == 'Earset3_Module3' ? t = new Earset3_Module3(n)  : i == 'Earset3_Module4' ? t = new Earset3_Module4(n)  : i == 'Earset3_Module8' ? t = new Earset3_Module8(n)  : i == 'Earset3_Module6' ? t = new Earset3_Module6(n)  : i == 'Earset3_Module7' ? t = new Earset3_Module7(n)  : i == 'Form2_module2' ? t = new Form2_module2(n)  : i == 'Form2_Illustration' ? t = new Form2_module2(n)  : i == 'Form2_module3' ? t = new Form2_module3(n)  : i == 'Form2_module4' ? t = new Form2_module4(n)  : i === 'A9_module1' ? t = new A9_module1(n)  : i === 'A9_module8' ? t = new A9_module8(n)  : i === 'A9_module9' ? t = new A9_module9(n)  : i === 'A9_module10' ? t = new A9_module10(n)  : i === 'A9_placements' ? t = new A9_placements(n)  : i === 'A9_buy' ? t = new A9_buy(n)  : i === 'A9_beautyBass' ? t = new A9_beautyBass(n)  : i === 'A9_video' ? t = new A9_video(n)  : i === 'JustAddMusic_A8_template' ? t = new JustAddMusic_A8_template(n)  : i === 'H3_StarterTemplate' ? t = new H3_StarterTemplate(n)  : i === 'H3_VideoFeatureTemplate' ? t = new H3_VideoFeatureTemplate(n)  : i === 'H3_TechTalkTemplate' ? t = new H3_TechTalkTemplate(n)  : i === 'H3_TravelingTemplate' ? t = new H3_TravelingTemplate(n)  : i === 'H6_StarterTemplate' ? t = new H6_StarterTemplate(n)  : i === 'H6_ProfilesTemplate' ? t = new H6_ProfilesTemplate(n)  : i === 'H6_LegacyTemplate' ? t = new H6_LegacyTemplate(n)  : i === 'H6_FeaturesTemplate' ? t = new H6_FeaturesTemplate(n)  : i === 'H6_TechTalkTemplate' ? t = new H6_TechTalkTemplate(n)  : i === 'H6_GreatSoundTemplate' ? t = new H6_GreatSoundTemplate(n)  : i === 'H6_MaterialsTemplate' ? t = new H6_MaterialsTemplate(n)  : i === 'H6_ProfilesGridTemplate' ? t = new H6_ProfilesGridTemplate(n)  : i === 'GalleryGridTemplate' ? t = new GalleryGridTemplate(n)  : i === 'H3H6_BuyTemplate' ? t = new H3H6_BuyTemplate(n)  : i === 'H3H6_MegaFooterTemplate' ? t = new H3H6_MegaFooterTemplate(n)  : i === 'RelatedContentTemplate' ? t = new RelatedContentTemplate(n)  : i === 'YouMayAlsoLikeTemplate' ? t = new YouMayAlsoLikeTemplate(n)  : i === 'FooterTemplate' && (t = new FooterTemplate(n)), t && (t._xml = n)),
        t
},
ContentController.removeBlock = function () {
    ContentController._blocked = !1,
        ContentController.onHashChange()
},
ContentController.getActiveTemplates = function () {
    return ContentController._activeTemplates
},
ContentController.getCurrentTemplate = function () {
    return ContentController._curSnapId
},
ContentController.changeTemplateForModule = function (n, t) {
    var f = ContentController._xmlChildren[n],
        r = ContentController._activeTemplates[n].array,
        u,
        c,
        i,
        l;
    if (r) {
        var e = r[r.length - 1],
            a = e._xml,
            h = jQuery(a).attr('data-path');
        if (t != h) if (u = ContentController.getIndexOfPath(f, t), u !== !1) if (c = jQuery(f).children() [u], i = ContentController.getTemplateWithXML(c), i) {
            var v = ContentController.getIndexOfPath(f, h),
                o = '',
                s = '';
            u < v ? (o = 'right', s = 'left')  : (s = 'right', o = 'left'),
                r.push(i),
                l = jQuery(e).css('top'),
                jQuery(i).css({
                    top: l
                }),
                ContentController._removeData = {
                },
                ContentController._removeData.template = e,
                ContentController._removeData.moduleArr = r,
                ContentController._removeData.nextTemplate = i,
                ContentController._removeData.newDirection = s,
                ContentController._removeData.oldDirection = o,
                trace(ContentController._removeData),
                    typeof i.templateLoad == 'function' ? (i._loaded = !1, i.templateLoad(ContentController.onTemplateLoaded))  : (trace('LOADED'), i._loaded = !0, ContentController.onTemplateLoaded())
        } else setTimeout(ContentController.removeBlock, 1000);
        else setTimeout(ContentController.removeBlock, 1000);
        else setTimeout(ContentController.removeBlock, 1000)
    }
},
ContentController.onTemplateLoaded = function () {
    ContentController._removeData.nextTemplate._loaded = !0,
        ContentController._removeData.template.templateOut(ContentController._removeData.oldDirection)
},
ContentController.nextTemplate = function (n) {
    var t,
        i,
        r;
    ContentController._removeData ? (n == null && (n = !0), t = ContentController._removeData, ContentController._removeData = null, jQuery(Assets.LAYER_BOT).append(t.nextTemplate), i = t.nextTemplate, i.templateIn(t.newDirection), t.nextTemplate.resize(ContentController.WIN_WIDTH, ContentController.WIN_HEIGHT), r = t.template, t.moduleArr.shift(), n && jQuery(r).remove())  : ContentController.removeBlock()
},
ContentController.extractPath = function (n) {
    var i = n,
        r,
        t;
    return i.indexOf('#') != - 1 && (r = n.split('#'), t = r[r.length - 1].split('/'), t[0] == '' && t.shift(), i = t.join('/')),
        i
},
ContentController.getIndexOfPath = function (n, t) {
    for (var i = 0, r = jQuery(n).children(), e = r.length, u = null, f = !1, i = 0; i < e; i += 1) if (u = r[i], t == jQuery(u).attr('data-path')) {
        f = i;
        break
    }
    return f
},
ContentController.path = function (n) {
    var i,
        t,
        r,
        u;
    n != ContentController.extractPath(ContentController._currHash) && n != 'footer' ? document.location.hash = n : (i = ContentController.extractPath(n), t = i.split('/'), t[0] == '' && t.shift(), t.length > 0 && (r = t[0], u = ContentController.getIndexOfPath(ContentController._xml, r), ContentController.snap(u + 1))),
        ContentController._currentTemplateId = ContentController.getCurrentTemplate() - 1
},
ContentController.removePreloader = function (n) {
    function r() {
        jQuery(this).remove()
    }
    var i = ContentController.getIndexOfPath(ContentController._xml, jQuery(n).attr('data-path')),
        t = ContentController._activeTemplates[i];
    t.preloader && jQuery(t.preloader).stop(!0, !1).animate({
        opacity: 0
    }, 1000 * 0.5, 'easeOutQuart', r)
},
ContentController.addPreloader = function (n, t, i, r) {
    var o = ContentController.getIndexOfPath(ContentController._xml, jQuery(n).attr('data-path')),
        f = ContentController._activeTemplates[o],
        u,
        s;
    f.preloader && jQuery(f.preloader).remove(),
        u = new SpinningPreloader(i, r),
        s = f.array[0],
        jQuery(u).css({
            top: jQuery(s).css('top')
        }),
        Assets.LAYER_TOP.appendChild(u),
        u.style.opacity = 0;
    var e = null,
        h = f.bgColor,
        c = t == !1 ? !1 : !0;
    h && t && (e = h.style.backgroundColor),
            e && ContentController._firstLoadRegister[o] ? ContentController._firstLoadRegister[o] = !1 : e = null,
        ContentController.WIN_WIDTH = jQuery(window).width(),
        ContentController.WIN_HEIGHT = jQuery(window).height(),
        u.init(e),
        u.resize(ContentController.WIN_WIDTH, ContentController.WIN_HEIGHT),
        f.preloader = u,
        jQuery(u).animate({
            opacity: 1
        }, 1000 * 0.3, 'easeOutQuart')
},
ContentController.onResize = function () {
    var w = ContentController._activeTemplates.length,
        e,
        r,
        o,
        n = 0,
        l,
        t,
        s,
        y,
        u,
        h,
        a,
        i,
        c,
        v,
        p = [
        ],
        f;
    for (ContentController.WIN_WIDTH = jQuery(window).width(), ContentController.WIN_HEIGHT = jQuery(window).height(), ContentController.WIN_WIDTH >= 1000 ? (Assets.REAL_BODY.style.overflowX = 'hidden', Assets.BODY.style.overflowX = 'hidden')  : (ContentController.WIN_WIDTH = 1000, Assets.REAL_BODY.style.overflowX = 'scroll', Assets.BODY.style.overflowX = 'scroll'), ContentController.WIN_HEIGHT >= 660 || (ContentController.WIN_HEIGHT = 660), Assets.MOBILE_VERSION == !0 && (ContentController.WIN_WIDTH = 1024, ContentController.WIN_HEIGHT = 660), Assets.REAL_BODY.style.width = ContentController.WIN_WIDTH + 'px', Assets.BODY.style.width = ContentController.WIN_WIDTH + 'px', e = 0; e < w; e += 1) {
        for (t = ContentController._activeTemplates[e], l = t.array, o = t.menuTemplate, u = t.bgColor, h = t.seperator, a = t.height, y = l.length, c = t.preloader, i = a ? a : ContentController.WIN_HEIGHT, c && (jQuery(c).css({
            top: n
        }), c.resize(ContentController.WIN_WIDTH, i)), s = 0; s < y; s += 1) r = l[s],
            r._contentControl_yPos = n,
            r._contentControl_height = i,
            r._loaded == !0 && r.resize(ContentController.WIN_WIDTH, i, n),
            jQuery(r).css({
                top: n + 'px'
            }),
            o && (o.resize(ContentController.WIN_WIDTH, i), jQuery(o).css({
            top: n + 'px'
        }));
        u && (u.style.top = n + 'px', u.style.width = ContentController.WIN_WIDTH + 'px', u.style.height = i ? i + 'px' : ContentController.WIN_HEIGHT + 'px'),
            h && (h.style.width = ContentController.WIN_WIDTH + 'px', h.style.top = n + 'px', v = t.shadowSeperator, v && (v.style.left = Math.floor(ContentController.WIN_WIDTH * 0.5 - 1200 * 0.5) + 'px')),
            p.push(n),
            n += i
    }
    Assets.SITE_ID === 'beoplayh3' && (n -= 53),
        ContentController.TOTAL_HEIGHT = n,
        jQuery('html,body').height(n),
        f = parseInt(jQuery(ContentController._activeTemplates[ContentController._oldSnapId].array[0]).css('top')),
        ContentController._has_H3H6_BuyTemplate && (f = ContentController.getCorrectScrollPos(ContentController._oldSnapId, f)),
        ContentController._oldScrollTop = f,
        jQuery('body,html').scrollTop(f),
        TopMenu.resize(ContentController.WIN_WIDTH, ContentController.WIN_HEIGHT),
        BrowserDetect.OS != 'iPad' && TopMenu.changePossition(),
        OverallMenu.resize(ContentController.WIN_HEIGHT),
        Assets.PULLOUTS.resize(ContentController.WIN_WIDTH, ContentController.WIN_HEIGHT, p),
        ContentController.repositionFooter()
},
ContentController.calculateTemplateHeights = function () {
    ContentController._totalTemplates = ContentController._activeTemplates.length;
    var n = 0,
        t;
    for (n; n < ContentController._totalTemplates; n++) t = ContentController._activeTemplates[n].height,
        isNaN(t) || (ContentController._fixedTemplates.count++, ContentController._fixedTemplates.totalHeight += t)
},
ContentController.getPathIndex = function (n) {
    ContentController._totalTemplates = ContentController._activeTemplates.length;
    var t = 0,
        r = ContentController._activeTemplates.length,
        i = 0;
    for (t; t < r; t++) if (ContentController._activeTemplates[t].path === n) {
        i = t;
        break
    }
    return i
},
ContentController.repositionFooter = function () {
    var n = ContentController.WIN_HEIGHT * (ContentController._totalTemplates - ContentController._fixedTemplates.count),
        t = ContentController._fixedTemplates.totalHeight + n - 50;
    jQuery(ContentController._footer).css({
        top: t,
        width: ContentController.WIN_WIDTH,
        height: 50
    })
},
SocialShare = {
},
SocialShare.facebookShare = function (n, t) {
    return window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(n) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436'),
        !1
},
SocialShare.twitterShare = function (n, t, i) {
    var n = 'http://twitter.com/home?status=' + encodeURIComponent(t) + ' ' + encodeURIComponent(n);
    return i && (n += ' ' + encodeURIComponent(i)),
        window.open(n),
        !1
},
SocialShare.mailShare = function (n, t) {
    window.location = 'mailto:?subject=' + encodeURIComponent(t) + '&body=' + encodeURIComponent(n)
},
jQuery.noConflict(),
TextLib = {
},
TextLib.getTextField = function (n, t, i) {
    var r = General.getNewDiv();
    return n.indexOf('Lucida Grande') != - 1 && (n = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'),
        i == null && (i = !0),
        i || (r.onselectstart = function () {
        return !1
    }, r.onmousedown = function () {
        return !1
    }, r.style.cursor = 'default'),
        BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (n = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif'),
        r.style.position = 'absolute',
        r.style.fontFamily = n,
        r.style.fontSize = t + 'px',
        r
},
GlanceAnimations = {
},
GlanceAnimations.getAnimation = function (n) {
    var t = jQuery('<div />').css({
            position: 'absolute'
        }),
        i,
        u,
        r;
    for (t.assets = [
    ], i = 0, u = n.length, i; i < u; i++) r = AssetLoader.getAsset(n[i]),
        t.assets.push(r),
        jQuery(t).append(r);
    switch (Assets.SITE_ID) {
        case 'beoplaya9':
            TweenMax.to(t.assets[0], 0, {
                css: {
                    opacity: 0,
                    top: - 30,
                    left: 57,
                    zIndex: 2
                }
            }),
                TweenMax.to(t.assets[1], 0, {
                    css: {
                        opacity: 0,
                        top: 0,
                        left: 57
                    }
                }),
                t.tweensIn = [
                    [t.assets[0],
                        0.6,
                        {
                            delay: 0.9,
                            css: {
                                opacity: 1,
                                top: 0
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[1],
                        0.5,
                        {
                            delay: 1,
                            css: {
                                opacity: 1
                            },
                            overwrite: !0
                        }
                    ]
                ],
                t.tweensOut = [
                    [t.assets[0],
                        0.6,
                        {
                            css: {
                                opacity: 0,
                                top: - 30,
                                left: 57
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[1],
                        0.5,
                        {
                            css: {
                                opacity: 0,
                                left: 57
                            },
                            overwrite: !0
                        }
                    ]
                ];
            break;
        case 'beoplaya3':
            TweenMax.to(t.assets[0], 0, {
                css: {
                    opacity: 0,
                    top: 0,
                    left: - 370
                }
            }),
                TweenMax.to(t.assets[1], 0, {
                    css: {
                        opacity: 0,
                        top: 0,
                        left: - 370
                    }
                }),
                TweenMax.to(t.assets[2], 0, {
                    css: {
                        opacity: 1,
                        top: - 111,
                        left: 266
                    }
                }),
                TweenMax.to(t.assets[3], 0, {
                    css: {
                        opacity: 0,
                        top: 285,
                        left: 266
                    }
                }),
                t.tweensIn = [
                    [t.assets[0],
                        1,
                        {
                            delay: 0.9,
                            css: {
                                opacity: 1,
                                left: 0
                            },
                            overwrite: !0,
                            ease: Expo.easeOut
                        }
                    ],
                    [
                        t.assets[1],
                        1,
                        {
                            delay: 0.9,
                            css: {
                                opacity: 1,
                                left: 0
                            },
                            overwrite: !0,
                            ease: Expo.easeOut
                        }
                    ],
                    [
                        t.assets[2],
                        1,
                        {
                            delay: 0.6,
                            css: {
                                top: 285
                            },
                            overwrite: !0,
                            ease: Expo.easeOut
                        }
                    ],
                    [
                        t.assets[3],
                        1,
                        {
                            delay: 1,
                            css: {
                                opacity: 1
                            },
                            overwrite: !0,
                            ease: Expo.easeOut
                        }
                    ]
                ],
                t.tweensOut = [
                    [t.assets[0],
                        0.6,
                        {
                            css: {
                                opacity: 0,
                                left: - 370
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[1],
                        0.6,
                        {
                            css: {
                                opacity: 0,
                                left: - 370
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[2],
                        0.6,
                        {
                            css: {
                                top: - 111
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[3],
                        0.3,
                        {
                            css: {
                                opacity: 0
                            },
                            overwrite: !0
                        }
                    ]
                ];
            break;
        case 'beoplaya8':
            TweenMax.to(t.assets[2], 0, {
                css: {
                    opacity: 0,
                    top: - 80,
                    left: - 689
                }
            }),
                TweenMax.to(t.assets[3], 0, {
                    css: {
                        opacity: 0,
                        top: - 80,
                        left: - 689
                    }
                }),
                TweenMax.to(t.assets[0], 0, {
                    css: {
                        display: 'none'
                    }
                }),
                TweenMax.to(t.assets[1], 0, {
                    css: {
                        display: 'none'
                    }
                }),
                t.tweensIn = [
                    [t.assets[2],
                        1,
                        {
                            delay: 0.6,
                            css: {
                                opacity: 1,
                                left: - 48
                            },
                            ease: Expo.easeOut
                        }
                    ],
                    [
                        t.assets[3],
                        1,
                        {
                            delay: 0.6,
                            css: {
                                left: - 48
                            },
                            ease: Expo.easeOut
                        }
                    ],
                    [
                        t.assets[3],
                        1.2,
                        {
                            delay: 0.8,
                            css: {
                                opacity: 1
                            },
                            ease: Expo.easeOut
                        }
                    ]
                ],
                t.tweensOut = [
                    [t.assets[2],
                        0.6,
                        {
                            css: {
                                opacity: 0,
                                left: - 689
                            }
                        }
                    ],
                    [
                        t.assets[3],
                        0.6,
                        {
                            css: {
                                opacity: 0,
                                left: - 689
                            }
                        }
                    ]
                ];
            break;
        case 'beoplayEarset3':
            TweenMax.to(t.assets[0], 0, {
                css: {
                    top: 520,
                    left: 86,
                    zIndex: 2
                }
            }),
                TweenMax.to(t.assets[1], 0, {
                    css: {
                        top: 520,
                        left: 256
                    }
                }),
                t.tweensIn = [
                    [t.assets[0],
                        0.8,
                        {
                            delay: 0.8,
                            css: {
                                top: 178
                            },
                            ease: Expo.easeOut
                        }
                    ],
                    [
                        t.assets[1],
                        0.8,
                        {
                            delay: 0.6,
                            css: {
                                top: 34
                            },
                            ease: Expo.easeOut
                        }
                    ]
                ],
                t.tweensOut = [
                    [t.assets[0],
                        0.6,
                        {
                            css: {
                                top: 520
                            }
                        }
                    ],
                    [
                        t.assets[1],
                        0.6,
                        {
                            css: {
                                top: 520
                            }
                        }
                    ]
                ];
            break;
        case 'beoplayv1':
            TweenMax.to(t.assets[0], 0, {
                css: {
                    opacity: 1,
                    top: - 557,
                    left: 60
                }
            }),
                t.tweensIn = [
                    [t.assets[0],
                        1.1,
                        {
                            delay: 0.4,
                            css: {
                                top: - 147
                            },
                            ease: Back.easeOut
                        }
                    ]
                ],
                t.tweensOut = [
                    [t.assets[0],
                        0.6,
                        {
                            css: {
                                top: - 557
                            }
                        }
                    ]
                ];
            break;
        case 'beoplayForm2':
            TweenMax.to(t.assets[0], 0, {
                css: {
                    top: 520,
                    left: 380,
                    zIndex: 2
                }
            }),
                TweenMax.to(t.assets[1], 0, {
                    css: {
                        top: 520,
                        left: 10
                    }
                }),
                t.tweensIn = [
                    [t.assets[0],
                        2.3,
                        {
                            delay: 0.4,
                            css: {
                                top: 126
                            },
                            ease: Expo.easeOut
                        }
                    ],
                    [
                        t.assets[1],
                        1.8,
                        {
                            delay: 0.6,
                            css: {
                                top: 48
                            },
                            ease: Expo.easeOut
                        }
                    ]
                ],
                t.tweensOut = [
                    [t.assets[0],
                        0.6,
                        {
                            css: {
                                top: 520
                            }
                        }
                    ],
                    [
                        t.assets[1],
                        0.6,
                        {
                            css: {
                                top: 520
                            }
                        }
                    ]
                ];
            break;
        case 'beolit12':
            TweenMax.to(t.assets[0], 0, {
                css: {
                    top: - 379,
                    left: - 12,
                    zIndex: 2
                }
            }),
                TweenMax.to(t.assets[1], 0, {
                    css: {
                        top: 105,
                        left: - 12,
                        zIndex: 0,
                        opacity: 0
                    }
                }),
                TweenMax.to(t.assets[2], 0, {
                    css: {
                        top: - 243,
                        left: - 64,
                        zIndex: 1
                    }
                }),
                TweenMax.to(t.assets[3], 0, {
                    css: {
                        top: 136,
                        left: - 64,
                        opacity: 0,
                        zIndex: 0
                    }
                }),
                t.tweensIn = [
                    [t.assets[0],
                        1,
                        {
                            delay: 0.7,
                            css: {
                                top: 105
                            },
                            overwrite: !0,
                            ease: Quad.easeOut
                        }
                    ],
                    [
                        t.assets[1],
                        0.5,
                        {
                            delay: 1.4,
                            css: {
                                opacity: 1
                            },
                            overwrite: !0,
                            ease: Quad.easeOut
                        }
                    ],
                    [
                        t.assets[2],
                        1,
                        {
                            delay: 0.4,
                            css: {
                                top: 136
                            },
                            overwrite: !0,
                            ease: Quad.easeOut
                        }
                    ],
                    [
                        t.assets[3],
                        0.5,
                        {
                            delay: 1.1,
                            css: {
                                opacity: 1
                            },
                            overwrite: !0,
                            ease: Quad.easeOut
                        }
                    ]
                ],
                t.tweensOut = [
                    [t.assets[0],
                        0.6,
                        {
                            delay: 0.2,
                            css: {
                                top: - 379
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[1],
                        0.4,
                        {
                            delay: 0,
                            css: {
                                opacity: 0
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[2],
                        0.6,
                        {
                            delay: 0.2,
                            css: {
                                top: - 243
                            },
                            overwrite: !0
                        }
                    ],
                    [
                        t.assets[3],
                        0.4,
                        {
                            delay: 0,
                            css: {
                                opacity: 0
                            },
                            overwrite: !0
                        }
                    ]
                ]
    }
    return t.focusIn = function () {
        if (t.tweensIn) {
            var n = 0,
                r = t.tweensIn.length,
                i;
            for (n; n < r; n++) i = t.tweensIn[n],
                TweenMax.to(i[0], i[1], i[2])
        }
    },
        t.focusOut = function () {
            if (t.tweensOut) {
                var n = 0,
                    r = t.tweensOut.length,
                    i;
                for (n; n < r; n++) i = t.tweensOut[n],
                    TweenMax.to(i[0], i[1], i[2])
            }
        },
        t
},
TopMenu = {
},
TopMenu._container,
TopMenu._menuLimit,
TopMenu._children,
TopMenu.setContainer = function (n) {
    TopMenu._container = n,
        TopMenu._container.style.position = 'absolute',
        TopMenu._container.style.zIndex = 18000,
        TopMenu._container.style.height = '100px'
},
TopMenu.resize = function (n, t) {
    TopMenu._container.style.width = n + 'px',
        TopMenu._menuLimit = Math.floor(t * 0.2)
},
TopMenu.changePossition = function () {
    var n = jQuery(window).scrollTop(),
        t = 0,
        i;
    t = n < TopMenu._menuLimit ? 100 / TopMenu._menuLimit * n : 100,
        i = - 82 / 100 * t,
        TopMenu._container.style.top = Math.floor(i) + 'px'
},
OverallMenu = {
},
OverallMenu._xml,
OverallMenu._container,
OverallMenu._xmlChildren,
OverallMenu._btns,
OverallMenu._yOffset = 0,
OverallMenu._lastHighlight = null,
OverallMenu._winH,
OverallMenu._path,
OverallMenu.btnPaths,
OverallMenu.keyDelay,
OverallMenu.keyLock = !1,
OverallMenu.init = function (n) {
    function t() {
        OverallMenu.onAssetsLoaded()
    }
    if (OverallMenu.btnPaths = [
    ], BrowserDetect.OS != 'iPad') {
        OverallMenu._container = General.getNewDiv(),
            OverallMenu._xml = n,
            OverallMenu._xmlChildren = jQuery(n).children(),
            document.body.appendChild(OverallMenu._container),
            OverallMenu._container.style.position = 'fixed',
            OverallMenu._container.style.left = '-300px',
            OverallMenu._container.style.width = '30px',
            OverallMenu._container.style.height = '100px';
        AssetLoader.loadGroup(new AssetGroup(['leftNav_bg_top.png',
            'leftNav_bg_middle.png',
            'leftNav_bg_bot.png',
            'leftNav_btn_circle_active.png',
            'leftNav_btn_circle_deactive.png',
            'leftNav_btn_home_active.png',
            'leftNav_btn_home_deactive.png',
            'tool-left.png',
            'tool-center.png',
            'tool-right.png',
            'leftNav_btn_buy_active.png',
            'leftNav_btn_buy_deactive.png',
            'leftNav_btn_social_active.png',
            'leftNav_btn_social_deactive.png',
            'socialOverlay_btn_facebook.png',
            'socialOverlay_btn_mail.png',
            'socialOverlay_btn_twitter.png',
            'socialOverlay_btn_pintrest.png',
            'socialOverlay_bg.png'], t, '/layouts/SBV-Custom/HMProductPage/assets/images/navigation/'))
    } else OverallMenu._xml = n,
        OverallMenu._xmlChildren = jQuery(n).children(),
        OverallMenu.initIpadPaths()
},
OverallMenu.initIpadPaths = function () {
    var i = jQuery(OverallMenu._xml).children(),
        n = 0,
        r = i.length,
        t;
    for (OverallMenu._btns = [
    ], n; n < r; n++) t = General.getNewDiv(),
        t._path = jQuery(i[n]).attr('data-path'),
        OverallMenu._btns.push(t)
},
OverallMenu.onAssetsLoaded = function () {
    function n(n) {
        if (!ContentController._isSnapping) {
            var o = n.keyCode,
                i = '',
                r = '',
                t,
                f,
                u = '',
                e;
            ContentController.pathArray && ContentController.pathArray.length > 0 && (i = ContentController.pathArray[0]),
                ContentController.pathArray && ContentController.pathArray.length > 1 && (r = ContentController.pathArray[1]),
                ContentController.pathArray,
                    o == 40 ? i == '' ? u = jQuery(OverallMenu._xmlChildren[1]).attr('data-path')  : (t = ContentController.getIndexOfPath(OverallMenu._xml, i), t += 1, t > OverallMenu._xmlChildren.length - 1 && (t = 0), u = jQuery(OverallMenu._xmlChildren[t]).attr('data-path'))  : o == 38 ? i == '' ? u = jQuery(OverallMenu._xmlChildren[OverallMenu._xmlChildren.length - 1]).attr('data-path')  : (t = ContentController.getIndexOfPath(OverallMenu._xml, i), t -= 1, t < 0 && (t = OverallMenu._xmlChildren.length - 1), u = jQuery(OverallMenu._xmlChildren[t]).attr('data-path'))  : o == 39 ? (i == '' && (i = jQuery(OverallMenu._xmlChildren[0]).attr('data-path')), t = ContentController.getIndexOfPath(OverallMenu._xml, i), e = jQuery(OverallMenu._xmlChildren[t]).children(), r == '' && (r = jQuery(e[0]).attr('data-path')), f = ContentController.getIndexOfPath(OverallMenu._xmlChildren[t], r), f += 1, f > e.length - 1 ? (t += 1, t > OverallMenu._xmlChildren.length - 1 && (t = 0), i = jQuery(OverallMenu._xmlChildren[t]).attr('data-path'), r = '')  : r = jQuery(e[f]).attr('data-path'), u = i, r != '' && (u += '/' + r))  : o == 37 && (i == '' && (i = jQuery(OverallMenu._xmlChildren[0]).attr('data-path')), t = ContentController.getIndexOfPath(OverallMenu._xml, i), e = jQuery(OverallMenu._xmlChildren[t]).children(), r == '' && (r = jQuery(e[0]).attr('data-path')), f = ContentController.getIndexOfPath(OverallMenu._xmlChildren[t], r), f -= 1, f < 0 ? (t -= 1, t < 0 && (t = OverallMenu._xmlChildren.length - 1), i = jQuery(OverallMenu._xmlChildren[t]).attr('data-path'), r = '')  : r = jQuery(e[f]).attr('data-path'), u = i, r != '' && (u += '/' + r)),
                u != '' && (ContentController.path(u), n.preventDefault())
        }
    }
    OverallMenu.buildBtns(),
        setTimeout(OverallMenu.animateIn, 1000 * 0.2),
        jQuery(document).bind('keydown', n)
},
OverallMenu.buildBtns = function () {
    function a(n, t) {
        var r = General.getNewDiv(),
            f = AssetLoader.getAsset(t + '_deactive'),
            e = AssetLoader.getAsset(t + '_active'),
            u,
            i;
        jQuery(f).css({
            position: 'absolute'
        }),
            jQuery(e).css({
                position: 'absolute',
                opacity: 0
            }),
            jQuery(r).append(f),
            jQuery(r).append(e),
            r._out = f,
            r._over = e,
            r._path = jQuery(n).attr('data-path'),
            r._selected = !1,
            jQuery(r).bind('mouseover', w),
            jQuery(r).bind('mouseout', b),
            jQuery(r).bind('click', p),
            r.style.cursor = 'pointer',
            u = General.getNewDiv(),
            u.style.left = '48px',
            i = General.getNewDiv(),
            i.style.fontSize = '12px',
            i.style.color = '#ffffff',
            i.style.fontFamily = 'GothamBold',
            i.style.whiteSpace = 'noWrap',
            i.style.zIndex = 1,
            i.style.left = '18px',
            i.style.top = '9px',
            (BrowserDetect.BROWSER_NAME == 'Safari' || BrowserDetect.BROWSER_NAME == 'Chrome' || BrowserDetect.BROWSER_NAME == 'Explorer') && (i.style.top = '9px'),
            BrowserDetect.BROWSER_NAME == 'Explorer' && BrowserDetect.BROWSER_VERSION == '8' && (i.style.top = '9px', i.style.fontFamily = 'ProximaRegular, Lucida Grande, Lucida Sans, Lucida Sans Unicode, Verdana, sans-serif', i.style.fontWeight = 'bold'),
            jQuery(i).text(jQuery(n).attr('data-description')),
            u.appendChild(i);
        var o = AssetLoader.getAsset('tool-left'),
            s = AssetLoader.getAsset('tool-center'),
            h = AssetLoader.getAsset('tool-right');
        return jQuery(o).css({
            position: 'absolute'
        }),
            jQuery(s).css({
                position: 'absolute',
                left: 19
            }),
            jQuery(h).css({
                position: 'absolute'
            }),
            jQuery(u).append(o),
            jQuery(u).append(s),
            jQuery(u).append(h),
            u._text = i,
            u._leftBg = o,
            u._centerBg = s,
            u._rightBg = h,
            r._tool = u,
            r
    }
    function p(n) {
        var t = this,
            i = t._path;
        return ContentController.path(i),
            n.stopPropagation(),
            !1
    }
    function w() {
        var n = this;
        jQuery(n._out).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.6, 'easeOutQuart'),
            jQuery(n._over).stop(!0, !1).animate({
                opacity: 1
            }, 1000 * 0.6, 'easeOutQuart'),
            OverallMenu.showTooltip(n)
    }
    function b() {
        var n = this;
        n._selected || (jQuery(n._out).stop(!0, !1).animate({
            opacity: 1
        }, 1000 * 0.6, 'easeOutQuart'), jQuery(n._over).stop(!0, !1).animate({
            opacity: 0
        }, 1000 * 0.6, 'easeOutQuart')),
            jQuery(n._tool).stop(!0, !1).animate({
                opacity: 0
            }, 1000 * 0.6, 'easeOutQuart', k)
    }
    function k() {
        var n = this._btn;
        jQuery(n._tool).hide(),
            n._hidden = !0
    }
    var u = jQuery(OverallMenu._xml).children(),
        i,
        v = u.length,
        n,
        t = 14,
        f,
        r,
        e,
        s,
        h;
    for (OverallMenu._btns = [
    ], i = 0; i < v; i += 1) s = jQuery(u[i]) [0].getAttribute('data-path'),
        h = s == 'buy' ? !0 : !1,
            s != 'footer' ? (i === 0 ? (r = 'leftNav_btn_home', e = 9, f = 27)  : h ? (r = 'leftNav_btn_buy', e = 10, f = 26)  : (r = 'leftNav_btn_circle', e = 12, f = 22), n = a(u[i], r), OverallMenu._container.appendChild(n), jQuery(n).css({
        left: e,
        top: t,
        zIndex: 11
    }), n._tool._btn = n, n._tool.style.top = t - 10 + 'px', OverallMenu._container.appendChild(n._tool), OverallMenu._btns.push(n), t += f)  : (n = a(u[i], r), n._tool._btn = n, OverallMenu._btns.push(n));
    OverallMenu._yOffset = t * 0.5;
    var y = t - 21,
        c = AssetLoader.getAsset('leftNav_bg_top'),
        o = AssetLoader.getAsset('leftNav_bg_middle'),
        l = AssetLoader.getAsset('leftNav_bg_bot');
    jQuery(c).css({
        position: 'absolute'
    }),
        jQuery(o).css({
            position: 'absolute',
            top: 18
        }),
        jQuery(l).css({
            position: 'absolute',
            top: t - 7
        }),
        jQuery(o).width(36),
        jQuery(o).height(y),
        OverallMenu._container.style.zIndex = 99,
        jQuery(OverallMenu._container).append(c),
        jQuery(OverallMenu._container).append(o),
        jQuery(OverallMenu._container).append(l),
        n = new SocialMenu,
        t += 6,
        jQuery(OverallMenu._container).append(n),
        jQuery(n).css({
            left: 10,
            top: t,
            zIndex: 11
        })
},
OverallMenu.animateIn = function () {
    for (var e = OverallMenu._btns.length, i, n, r, u, f, t = 0; t < e; t += 1) i = OverallMenu._btns[t],
        n = i._tool,
        i._hidden = !0,
        r = jQuery(n._text).width(),
        u = n._centerBg,
        jQuery(u).width(r),
        jQuery(u).height(32),
        f = n._rightBg,
        jQuery(f).css({
            left: 19 + r
        }),
        jQuery(n).css({
            opacity: 0
        }),
        jQuery(n).hide();
    OverallMenu.resize(),
        OverallMenu.select(),
        OverallMenu._container.style.left = '-30px',
        jQuery(OverallMenu._container).delay(1000 * 0.1).animate({
            left: 30
        }, 1000, 'easeInOutQuint')
},
OverallMenu.showTooltip = function (n, t) {
    function i() {
        var n = this._btn;
        jQuery(n._tool).hide(),
            n._hidden = !0
    }
    OverallMenu._container && (OverallMenu._lastHighlight && jQuery(OverallMenu._lastHighlight._tool).stop(!0, !1).animate({
        opacity: 0
    }, 1000 * 0.6, 'easeOutQuart', i), n._hidden && (n._hidden = !1, jQuery(n._tool).show()), jQuery(n._tool).stop(!0, !1).animate({
        opacity: 1
    }, 1000 * 0.6, 'easeOutQuart'), t && jQuery(n._tool).delay(1000).animate({
        opacity: 0
    }, 1000 * 0.6, 'easeOutQuart', i), OverallMenu._lastHighlight = n)
},
OverallMenu.select = function (n) {
    if (OverallMenu._container && (n && (OverallMenu._path = n), OverallMenu._btns)) for (var r = OverallMenu._btns.length, t, i = 0; i < r; i += 1) t = OverallMenu._btns[i],
            t._path == OverallMenu._path ? (t._selected || (t._selected = !0, jQuery(t._out).stop(!0, !1).animate({
        opacity: 0
    }, 1000 * 0.6, 'easeOutQuart'), jQuery(t._over).stop(!0, !1).animate({
        opacity: 1
    }, 1000 * 0.6, 'easeOutQuart')), OverallMenu.showTooltip(t, !0))  : t._selected && (t._selected = !1, jQuery(t._out).stop(!0, !1).animate({
        opacity: 1
    }, 1000 * 0.6, 'easeOutQuart'), jQuery(t._over).stop(!0, !1).animate({
        opacity: 0
    }, 1000 * 0.6, 'easeOutQuart'))
},
OverallMenu.resize = function (n) {
    if (OverallMenu._container) {
        n && (OverallMenu._winH = n);
        var t = Math.floor(OverallMenu._winH * 0.5 - OverallMenu._yOffset);
        OverallMenu._container && isNaN(t) !== !0 && (OverallMenu._container.style.top = t + 'px'),
                ContentController.WIN_WIDTH <= 1100 ? jQuery(OverallMenu._container).hide()  : jQuery(OverallMenu._container).show()
    }
},
function (n) {
    function u(i) {
        var c,
            l,
            u,
            h;
        e(i),
            o(),
            c = n.innerWidth,
            l = n.innerHeight,
            n.newW && n.newH && (c = n.newW, l = n.newH);
        for (var a = jQuery('<div/>').css({
            position: 'absolute',
            border: '0 solid #f00',
            width: 1100,
            height: 99,
            top: 0,
            left: 0
        }), f = r.colorSections, u = 0, v = f.length, u = 0; u < v; u++) h = s({
            nrOfColors: f[u].nrOfColors,
            label: f[u].label,
            background: f[u].background,
            filePrefix: f[u].filePrefix,
            index: u,
            colorNames: f[u].colorNames,
            defaultSelection: f[u].defaultSelection
        }).css({
            left: f[u].offsetLeft
        }),
            h.label = f[u].defaultLabel,
            h.postFix = f[u].postFix,
            t.push(h),
            jQuery(a).append(h);
        return a
    }
    function e(n) {
        i = n,
            r = jQuery.extend(!0, {
            }, f, i)
    }
    function o() {
        jQuery(this).on('colorChange', function (n, i) {
            var r;
            t[i.index].label = i.name,
                trace(i.name);
            for (var r = 0, f = t.length, u = '', r = 0; r < f; r++) u += t[r].label,
                typeof t[r].postFix != 'undefined' && u.indexOf(t[r].postFix) == - 1 && (u += ' ' + t[r].postFix),
                r < f - 1 && (u += ' + ');
            Assets.BUY_CUSTOM.LABEL_AREA.innerHTML = u
        })
    }
    function s(n) {
        var i = jQuery('<div/>').css({
                position: 'absolute',
                background: '#0f0',
                top: 0,
                left: 0
            }),
            e = [
            ],
            u,
            t = 0,
            h = n.nrOfColors,
            r,
            o,
            f,
            s;
        for (t; t < h; t++) u = AssetLoader.getAsset(n.filePrefix + (t + 1)),
            u.name = n.colorNames[t],
            e.push(u);
        return r = AssetLoader.getAsset(n.background),
            jQuery(r).css({
                left: 150,
                top: 0
            }),
            General.disableSelection(r),
            o = {
                buttonSpacing: 44,
                buttonDiameter: 40,
                index: n.index,
                defaultSelection: n.defaultSelection
            },
            f = new ColorMenuBtns(e, !1, o),
            jQuery(f).css({
                left: 155,
                top: 4,
                pointerEvents: 'all'
            }),
            s = TypeHelper({
                text: n.label,
                top: '19px',
                left: '50px',
                color: '#939291',
                bold: !0,
                uppercase: !0,
                fontSize: '12px'
            }),
            jQuery(i).append(r),
            jQuery(i).append(s),
            jQuery(i).append(f),
            i
    }
    var i,
        r,
        f = {
            colorSections: [
                {
                    nrOfColors: 0,
                    label: '',
                    offsetLeft: 0,
                    background: '',
                    filePrefix: 'color',
                    colorNames: ''
                }
            ]
        },
        t = [
        ];
    u.init = function () {
    },
        n.ColorSelector = u
}(window),
GalleryGridLayouts = {
    Form2: {
        rows: 2,
        columns: 5,
        items: [
            {
                x: 0,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 1,
                y: 0,
                w: 2,
                h: 1
            },
            {
                x: 3,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 1,
                y: 1,
                w: 1,
                h: 1
            },
            {
                x: 2,
                y: 1,
                w: 2,
                h: 1
            },
            {
                x: 4,
                y: 0,
                w: 1,
                h: 2
            }
        ]
    },
    H3: {
        rows: 2,
        columns: 5,
        items: [
            {
                x: 0,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 1,
                y: 0,
                w: 2,
                h: 1
            },
            {
                x: 3,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 4,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 0,
                y: 1,
                w: 2,
                h: 1
            },
            {
                x: 2,
                y: 1,
                w: 1,
                h: 1
            }
        ]
    },
    Beolit12: {
        rows: 2,
        columns: 5,
        items: [
            {
                x: 0,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 1,
                y: 0,
                w: 2,
                h: 1
            },
            {
                x: 3,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 4,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 0,
                y: 1,
                w: 2,
                h: 1
            },
            {
                x: 2,
                y: 1,
                w: 1,
                h: 1
            }
        ]
    },
    H6: {
        rows: 2,
        columns: 5,
        items: [
            {
                x: 0,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 1,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 2,
                y: 0,
                w: 2,
                h: 1
            },
            {
                x: 4,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 1,
                y: 1,
                w: 1,
                h: 1
            },
            {
                x: 2,
                y: 1,
                w: 1,
                h: 1
            },
            {
                x: 3,
                y: 1,
                w: 2,
                h: 1
            }
        ]
    },
    H6_Profiles: {
        rows: 3,
        columns: 3,
        items: [
            {
                x: 0,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 1,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 2,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 0,
                y: 1,
                w: 1,
                h: 2
            },
            {
                x: 1,
                y: 2,
                w: 1,
                h: 1
            },
            {
                x: 2,
                y: 1,
                w: 1,
                h: 2
            }
        ]
    },
    V1: {
        rows: 2,
        columns: 4,
        items: [
            {
                x: 0,
                y: 0,
                w: 2,
                h: 1
            },
            {
                x: 2,
                y: 0,
                w: 1,
                h: 1
            },
            {
                x: 3,
                y: 0,
                w: 1,
                h: 2
            },
            {
                x: 0,
                y: 1,
                w: 1,
                h: 1
            },
            {
                x: 1,
                y: 1,
                w: 1,
                h: 1
            },
            {
                x: 2,
                y: 1,
                w: 1,
                h: 1
            }
        ]
    }
},
H3H6_VisibilityController = {
},
H3H6_VisibilityController.allTemplatesHidden = !1,
H3H6_VisibilityController.setup = function (n) {
    if (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') {
        var t = '✖✖✖✖✖✖ Template ' + n._templateId || '-X-',
            i = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
            r = n._templateId < ContentController.getCurrentTemplate() - 1 && !i;
        (n._h3h6PreventHide || i) && !r ? H3H6_VisibilityController.trace(t + ' has prevented setup!')  : (jQuery(n).css({
            display: 'none'
        }), H3H6_VisibilityController.trace(t + ' is set up!'))
    }
},
H3H6_VisibilityController.show = function (n) {
    if (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') {
        var t = '✖✖✖✖✖✖ Template ' + n._templateId || '-X-',
            i = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8;
        i ? H3H6_VisibilityController.trace(t + ' has prevented setup!')  : (jQuery(n).css({
            display: 'block'
        }), H3H6_VisibilityController.trace(t + ' is visible!'))
    }
},
H3H6_VisibilityController.hide = function (n) {
    if (Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') {
        var u = '✖✖✖✖✖✖ Template ' + n._templateId || '-X-',
            t = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8,
            i = n.name === 'H3H6_BuyTemplate',
            r = n._templateId < ContentController.getCurrentTemplate() - 1 && !t && !i && !n._h3h6PreventHide;
        (n._h3h6PreventHide || t) && !r || TweenMax.to(n, 0, {
            delay: 1.3,
            display: 'none'
        })
    }
},
H3H6_VisibilityController.affectAll = function (n, t, i) {
    var f;
    if ((Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6') && (f = BrowserDetect.BROWSER_NAME === 'Explorer' && BrowserDetect.BROWSER_VERSION <= 8, n && !f)) {
        var u = 0,
            e = n.length,
            o = 0,
            r;
        for (u; u < e; u++) r = n[u].array[0],
            r === t || r._h3h6PreventHide || (o++, TweenMax.to(r, 0, {
            delay: 0,
            display: i === 'hide' ? 'none' : 'block',
            onComplete: function () {
                var n = '✖✖✖✖✖✖ Template ' + r._templateId || '-X-';
                H3H6_VisibilityController.allTemplatesHidden = i === 'hide' ? !0 : !1
            }
        }))
    }
},
H3H6_VisibilityController.trace = function () {
    Assets.SITE_ID === 'beoplayh3' || Assets.SITE_ID === 'beoplayh6'
},
Assets.IS_PHONE = BrowserDetect.OS == 'iPhone' || BrowserDetect.MOBILE,
Assets.IS_TABLET = BrowserDetect.OS == 'iPad' || BrowserDetect.TABLET,
Assets.IS_DESKTOP = !Assets.IS_TABLET && !Assets.IS_PHONE,
Assets.IS_3D_ENABLED = BrowserDetect.TRANSLATE3D_SUPPORT,
Assets.PIXEL_RATIO = window.devicePixelRatio || 1,
Assets.IS_IPAD1_OR_IPAD2 = !Assets.IS_DESKTOP && Assets.PIXEL_RATIO < 2,
Assets.IS_CHROME_IOS = navigator.userAgent.match('CriOS') ? !0 : !1
