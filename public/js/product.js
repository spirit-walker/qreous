function InitCountrySelectorMegaFooter() {
    jQuery('.global-megafooter-country select').bind('change', function () {
        var n = jQuery('.global-megafooter-country select').val(),
            t = GetApiVersion() == 'AS' ? '/RestServices/CartService/SwitchLocale?switchlocale=' + n : '/~/service/DRConnect?method=emptycart&switchlocale=' + n;
        jQuery.get(t, function () {
            window.location.reload()
        })
    })
}
function shoppingCartPriceFormat(n) {
    var t = '',
        u = ',00',
        r,
        i;
    for (t = n.toString(), t.indexOf('.') >= 0 && (r = t.split('.'), r.length == 2 && (t = r[0], u = ',' + r[1])), i = t.length - 3; i > 0; i -= 3) t = t.substr(0, i) + '.' + t.substr(i);
    return t + u
}
function getInternetExplorerVersion() {
    var n = - 1,
        t,
        i;
    return navigator.appName == 'Microsoft Internet Explorer' && (t = navigator.userAgent, i = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})'), i.exec(t) != null && (n = parseFloat(RegExp.$1))),
        n
}
function GetSelectedEComCountry() {
    return jQuery('form').data('switchedLocale')
}
function GetApiVersion() {
    var n = jQuery('.MasterLocaleSelector option:selected'),
        t = n.length > 0 ? n.data('api')  : jQuery('form').data('api');
    return t === undefined ? 'AS' : t
}
function IsSelectedCountryRedirect() {
    var n = jQuery('.MasterLocaleSelector option:selected');
    return (n.length > 0 ? n.data('redirect')  : jQuery('form').data('redirect')) == !0
}
function IsSelectedCountryFindStore() {
    var n = jQuery('.MasterLocaleSelector option:selected');
    return (n.length > 0 ? n.data('findstore')  : jQuery('form').data('findstore')) == !0
}
function ToastMegaMenuInit() {
    var i = jQuery('#toastmenu'),
        g = jQuery('#tm-close-btn'),
        f = jQuery('#topmenu a'),
        t = !1,
        r = jQuery('#topmenu li.megamenu-enabled'),
        e,
        h = jQuery('#tm-slides-wrapper').width(),
        u = jQuery('#tm-slides-slider'),
        p,
        w = jQuery('#topheader').height(),
        b = !0,
        c = !1,
        l,
        k = '50%',
        o = 7,
        a = 160,
        s,
        n,
        v,
        y;
    if (jQuery(f).each(function () {
        jQuery(this).parent().hasClass('megamenu-enabled') && jQuery(this).click(function (o) {
            var s = jQuery(this);
            l = s.width() / 2,
                k = s.offset().left + l + 19,
                    jQuery(this).hasClass('active') && t ? (f.removeClass('active'), i.stop().animate({
                top: - n + 'px'
            }, 500, 'easeOutCubic', function () {
                t = !1,
                    r.removeClass('open')
            }))  : (f.removeClass('active'), s.addClass('active'), e = jQuery(r).index(s.parent()), t ? b ? u.animate({
                opacity: 0
            }, 500, function () {
                u.css({
                    left: - h * e
                }),
                    u.animate({
                        opacity: 1
                    }, 250)
            })  : u.animate({
                left: - h * e
            }, 500, 'easeOutCubic')  : (u.css({
                left: - h * e
            }), i.stop().animate({
                top: w + 'px'
            }, 500, 'easeOutCubic', function () {
                t = !0,
                    r.addClass('open')
            }))),
                o.preventDefault()
        })
    }), jQuery('#main').click(function () {
        t && i.stop().animate({
            top: - n + 'px'
        }, 500, 'easeOutCubic', function () {
            t = !1,
                r.removeClass('open')
        })
    }), !0) {
        jQuery('#toastmenu, #themebar, #topmenu').mouseover(function () {
            c = !0
        }),
            jQuery('#toastmenu, #themebar, #topmenu').mouseout(function () {
                c = !1;
                var n = setTimeout(d, 750)
            });
        function d() {
            t && !c && (f.removeClass('active'), i.stop().animate({
                top: - n + 'px'
            }, 500, 'easeOutCubic', function () {
                t = !1,
                    r.removeClass('open')
            }))
        }
    }
    n = 320,
        jQuery('#tm-slides-slider div.tm-slide').each(function () {
            s = jQuery('body').hasClass('frontpage') ? Math.ceil(jQuery('.tm-item').length / 2 / o) * a : Math.ceil(jQuery('.tm-item').length / o) * a,
                s > n && (n = s + 30)
        }),
        jQuery('#tm-slides-wrapper, #tm-slides-slider, .tm-slide').css('height', n + 'px'),
        i.css('height', n + 'px'),
        p = n,
        i.css('top', - (n - 20) + 'px'),
        v = jQuery('.tm-item').length % o,
        y = (o - v) * 137,
        jQuery('.toastmenu .all-product').css('width', y + 'px')
}
function IOwnThisSmartPage() {
    var t,
        i,
        n;
    if (jQuery('#smartProductInfo.smartProductIOwnThis').length) {
        t = jQuery('#smartProductInfo.smartProductIOwnThis #smartContent'),
            i = t.parent(),
            t.css('top', (i.height() - t.height()) / 2);
        var n = '',
            r = jQuery('.smart-iownthis input');
        r.hide(),
            n = r.is(':checked') ? '/resources/sbv-custom/img/smartpage/iownthis_yes.png' : '/resources/sbv-custom/img/smartpage/iownthis_no.png',
            jQuery('.smart-iownthis label').append('<img src=\'' + n + '\' alt=\'\' />'),
            n = jQuery('.smartProductIOwnThis .ataglance-images'),
            n.css('left', - (n.width() + 20 + (250 - n.width() / 2)))
    }
}
function objBuyModuleUIA9() {
    this.LoadImage = function (n) {
        var i,
            t;
        for (jQuery('.standardBuyModule .buymodule-images img').fadeOut(200, function () {
            jQuery(this).remove()
        }), i = 0; i < n.length; i++) t = jQuery('<img src=\'' + n[i] + '\' alt=\'\' />'),
            t.hide(),
            jQuery('.standardBuyModule .buymodule-images').append(t),
            t.load(function () {
                t.show(),
                    BuyModuleUI.CenterImage()
            })
    }
}
function objBuyModuleUI() {
    this.OutOfStock = function () {
        this.ButtonArea(!1, 'left', 'Out Of Stock'),
            jQuery('.standardBuyModule .buymodule-buy-button').addClass('outofstock')
    },
        this.NotAvailableInCountry = function () {
            this.ButtonArea(!1, 'left', 'Not available in country'),
                jQuery('.standardBuyModule .buymodule-buy-button').addClass('outofstock')
        },
        this.ButtonArea = function (n, t, i) {
            var r = jQuery('.standardBuyModule .buymodule-buy-priceinfo');
            n == !0 ? r.show()  : r.hide(),
                jQuery('.standardBuyModule .buymodule-buy-button').removeClass('outofstock').css('float', t),
                jQuery('.standardBuyModule #buy-button span b').text(i)
        },
        this.FadePriceOut = function () {
            jQuery('.standardBuyModule .buymodule-buy').is(':visible') && (jQuery('.standardBuyModule .buymodule-buy').fadeOut(200), jQuery('.standardBuyModule .before').css('display', 'none'))
        },
        this.FadePriceIn = function (n, t, i) {
            n.length > 7 ? (jQuery('.standardBuyModule .buymodule-buy-priceinfo-currency').css('font-size', '12px'), jQuery('.standardBuyModule .buymodule-buy-priceinfo-price').css('font-size', '19px'), jQuery('.standardBuyModule .before .currency').css('font-size', '12px'), jQuery('.standardBuyModule .before .lineoriginalprice').css('font-size', '15px'), jQuery('.buymodule-buy .buymodule-buy-priceinfo .before .linetrough').css('margin', '0px -2px -9px -2px'), jQuery('.buymodule-buy .buymodule-buy-priceinfo').css('margin-top', '-4px'))  : (jQuery('.standardBuyModule .buymodule-buy-priceinfo-currency').css('font-size', '16px'), jQuery('.standardBuyModule .buymodule-buy-priceinfo-price').css('font-size', '24px'), jQuery('.standardBuyModule .before .currency').css('font-size', '16px'), jQuery('.standardBuyModule .before .lineoriginalprice').css('font-size', '18px'), jQuery('.buymodule-buy .buymodule-buy-priceinfo .before .linetrough').css('margin', '0px -2px -11px -2px'), jQuery('.buymodule-buy .buymodule-buy-priceinfo').css('margin-top', '-7px')),
                jQuery('.standardBuyModule .before .lineoriginalprice').html(t),
                jQuery('.standardBuyModule .buymodule-buy-priceinfo-price').html(n),
                i ? (jQuery('.standardBuyModule .before').css('display', 'inline-block'), jQuery('.buymodule-buy .buymodule-buy-priceinfo').css('padding-top', '0px'))  : (jQuery('.buymodule-buy .buymodule-buy-priceinfo').css('padding-top', '8px'), jQuery('.buymodule-buy .buymodule-buy-priceinfo').css('margin-top', '0px')),
                jQuery('.standardBuyModule .buymodule-buy').fadeIn(200)
        },
        this.CreateVariant = function (n, t, i, r, u) {
            var f = jQuery('<li data-id=\'' + t + '\'><img src=\'' + i + '?w=32&h=32\' alt=\'\' /><span class=\'color-overlay\'></span></li>');
            f.append('<div class=\'tooltip\'><div class=\'tooltip-end\'>' + r + '</div><div class=\'tooltip-arrow\'></div></div>'),
                n.append(f),
                f.find('.tooltip').each(function () {
                    jQuery(this).css('left', - (jQuery(this).width() / 2) + 16)
                }),
                f.find('.tooltip-arrow').each(function (n, t) {
                    jQuery(t).css('margin-left', jQuery(t).parent().width() / 2 - 6)
                }),
                f.find('.tooltip-end').mouseover(function () {
                    jQuery(this).parent().fadeOut(250)
                }),
                f.bind(clickEventType, function () {
                    u(t)
                }),
                f.hover(function () {
                    jQuery(this).find('.tooltip').stop(!0, !0).fadeIn(250)
                }, function () {
                    jQuery(this).find('.tooltip').stop(!0, !0).fadeOut(250)
                })
        },
        this.CenterImage = function () {
            var n = jQuery('.standardBuyModule .buymodule-images');
            jQuery('.standardBuyModule .buymodule-images img').each(function () {
                var t = jQuery(this),
                    i = jQuery('.standardBuyModule .buymodule-offer').length,
                    r = (735 - 245 * i - t.width()) / 2,
                    u = (t.parent().height() - t.height()) / 2;
                n.css('left', r),
                    t.css('top', u),
                    t.show(),
                    window.setTimeout(function () {
                        t.css('z-index', '5')
                    }, 200)
            })
        },
        this.LoadImage = function (n) {
            jQuery('.standardBuyModule .buymodule-images img').fadeOut(200, function () {
                jQuery(this).remove()
            }).append(),
                jQuery('.standardBuyModule .buymodule-images').append('<img src=\'' + n + '\' alt=\'\' />');
            var t = jQuery('.standardBuyModule .buymodule-images img');
            t.load(function () {
                BuyModuleUI.CenterImage()
            })
        },
        this.Resize = function () {
            var u = jQuery('#sc_buyModule').parent(),
                i = jQuery('.buymodule-sidebar'),
                r = (600 - i.height()) / 2,
                n,
                t;
            i.css('margin-top', r),
                n = jQuery('.buymodule-loading'),
                t = n.find('div'),
                t.css('margin-top', (n.height() - t.height()) / 2)
        },
        this.DisableScroll = function () {
            ContentController.scrollBehaviour('off'),
                jQuery(document).scroll(function (n) {
                    n.preventDefault()
                }),
                jQuery('.buymodule-checkout iframe').scroll(function (n) {
                    n.preventDefault()
                })
        },
        this.EnableScroll = function () {
            ContentController.scrollBehaviour('on'),
                jQuery(document).scroll(function () {
                    return !0
                }),
                jQuery('.buymodule-checkout').scroll(function () {
                    return !0
                })
        },
        this.FormatPrice = function (n) {
            var t = '',
                u = '',
                r,
                i;
            for (isNaN(n) || (t = n.toString()), t.indexOf('.') && (r = t.split('.'), r.length == 2 && (t = r[0], u = ',' + r[1])), i = t.length - 3; i > 0; i -= 3) t = t.substr(0, i) + '.' + t.substr(i);
            return t + u
        }
}
function objSwoosh() {
    this.ShowLoading = function () {
        var n = jQuery('#sc_buyModule').parent().css('top');
        jQuery('.buymodule-loading').appendTo('body').css('top', n),
            jQuery('.buymodule-loading').css('display', 'block'),
            jQuery('.buymodule-loading').animate({
                width: 250
            })
    },
        this.HideLoading = function () {
            jQuery('.buymodule-loading').animate({
                width: 0
            }, {
                complete: function () {
                    jQuery('.buymodule-loading').css('display', 'none')
                }
            })
        },
        this.Checkout = function (n) {
            var i = jQuery('#sc_buyModule').parent(),
                u = jQuery('#sc_buyModule').parent().css('top'),
                t = jQuery('.buymodule-checkout'),
                r = t.find('iframe');
            t.appendTo('body').css('top', u),
                t.css('width', i.width()),
                r.css('width', i.width()),
                t.css('right', - i.width()),
                r.attr('src', n),
                r.load(function () {
                    jQuery('.buymodule-checkout').show().animate({
                        right: 0
                    }, function () {
                        Swoosh.ShowOnlyIframe()
                    })
                })
        },
        this.ShowOnlyIframe = function () {
            var t = jQuery('.buymodule-checkout').position().top,
                n = jQuery('.buymodule-checkout').height();
            jQuery(document).scrollTop(0),
                jQuery('html,body').css('max-height', n).css('overflow', 'hidden'),
                jQuery('.buymodule-checkout').data('top') || jQuery('.buymodule-checkout').data('top', n),
                jQuery('.buymodule-checkout').css('top', 0),
                jQuery('.buymodule-loading').hide(),
                jQuery('#mainform').hide()
        },
        this.RestoreFromIframe = function () {
            var n = jQuery('.buymodule-checkout').data('top');
            jQuery('html, body').css('max-height', '').css('overflow', ''),
                jQuery('.buymodule-checkout').css('top', n),
                jQuery('#mainform').show(),
                jQuery(document).scrollTop(n),
                jQuery('.buymodule-checkout').animate({
                    right: - jQuery('.buymodule-checkout').width()
                })
        }
}
function getInternetExplorerVersion() {
    var n = - 1,
        t,
        i;
    return navigator.appName == 'Microsoft Internet Explorer' && (t = navigator.userAgent, i = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})'), i.exec(t) != null && (n = parseFloat(RegExp.$1))),
        n
}
function ShowHelpPopup() {
    jQuery('#help-popup-wrapper').length == 0 && jQuery('<div id="help-popup-wrapper"><div id="help-popup"><div class="close"></div><iframe src="/StoreSupport" name="helpFrame"></iframe></div></div>').appendTo('body');
    jQuery('body').one('click', function (n) {
        jQuery('body').unbind(n.handleObj),
            jQuery('#help-popup-wrapper').hide()
    })
}
function OpenLightBox(n) {
    var t = jQuery('#' + n);
    t.show(),
        t.css('top', jQuery(document).scrollTop()),
        dataLayer.push({
            eventCategory: 'Overlay',
            eventAction: 'Open',
            eventLabel: location.pathname + ' : ' + n,
            eventInteraction: 'true',
            event: 'send-ga-event'
        })
}
var shoppingCart,
    clickEventType,
    buyModuleInitialized,
    BuyModule,
    BuyModuleUI,
    Swoosh,
    dataLayer,
    scRec;
window.log = function () {
    if (log.history = log.history || [], log.history.push(arguments), this.console) {
        arguments.callee = arguments.callee.caller;
        var n = [
        ].slice.call(arguments);
        typeof console.log == 'object' ? log.apply.call(console.log, console, n)  : console.log.apply(console, n)
    }
},
    function (n) {
        function i() {
        }
        for (var r = 'assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn'.split(','), t; t = r.pop(); ) n[t] = n[t] || i
    }(function () {
        try {
            return console.log(),
                window.console
        } catch (n) {
            return window.console = {
            }
        }
    }()),
    function (n) {
        function u() {
            var t = n('script:first'),
                i = t.css('color'),
                r = !1;
            if (/^rgba/.test(i)) r = !0;
            else try {
                r = i != t.css('color', 'rgba(0, 0, 0, 0.5)').css('color'),
                    t.css('color', i)
            } catch (u) {
            }
            return r
        }
        function i(t, i, r) {
            var u = 'rgb' + (n.support.rgba ? 'a' : '') + '(' + parseInt(t[0] + r * (i[0] - t[0]), 10) + ',' + parseInt(t[1] + r * (i[1] - t[1]), 10) + ',' + parseInt(t[2] + r * (i[2] - t[2]), 10);
            return n.support.rgba && (u += ',' + (t && i ? parseFloat(t[3] + r * (i[3] - t[3]))  : 1)),
                u + ')'
        }
        function t(n) {
            var t,
                i;
            return (t = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(n)) ? i = [
                parseInt(t[1], 16),
                parseInt(t[2], 16),
                parseInt(t[3], 16),
                1
            ] : (t = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(n)) ? i = [
                    parseInt(t[1], 16) * 17,
                    parseInt(t[2], 16) * 17,
                    parseInt(t[3], 16) * 17,
                1
            ] : (t = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) ? i = [
                parseInt(t[1]),
                parseInt(t[2]),
                parseInt(t[3]),
                1
            ] : (t = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(n)) && (i = [
                parseInt(t[1], 10),
                parseInt(t[2], 10),
                parseInt(t[3], 10),
                parseFloat(t[4])
            ]),
                i
        }
        n.extend(!0, n, {
            support: {
                rgba: u()
            }
        });
        var r = [
            'color',
            'backgroundColor',
            'borderBottomColor',
            'borderLeftColor',
            'borderRightColor',
            'borderTopColor',
            'outlineColor'
        ];
        n.each(r, function (r, u) {
            n.fx.step[u] = function (r) {
                r.init || (r.a = t(n(r.elem).css(u)), r.end = t(r.end), r.init = !0),
                    r.elem.style[u] = i(r.a, r.end, r.pos)
            }
        }),
            n.fx.step.borderColor = function (u) {
                u.init || (u.end = t(u.end));
                var f = r.slice(2, 6);
                n.each(f, function (r, f) {
                    u.init || (u[f] = {
                        a: t(n(u.elem).css(f))
                    }),
                        u.elem.style[f] = i(u[f].a, u.end, u.pos)
                }),
                    u.init = !0
            }
    }(jQuery),
    function (n) {
        n.backstretch = function (t, i, r) {
            function a(t) {
                try {
                    c = {
                        left: 0,
                        top: 0
                    },
                        s = f.width(),
                        e = s / l,
                            e >= f.height() ? (h = (e - f.height()) / 2, o.centeredY && n.extend(c, {
                        top: '-' + h + 'px'
                    }))  : (e = f.height(), s = e * l, h = (s - f.width()) / 2, o.centeredX && n.extend(c, {
                        left: '-' + h + 'px'
                    })),
                        n('#backstretch, #backstretch img:last').width(s).height(e).filter('img').css(c)
                } catch (i) {
                }
                typeof t == 'function' && t()
            }
            var u = n('#backstretch'),
                o = u.data('settings') || {
                    centeredX: !0,
                    centeredY: !0,
                    speed: 0
                },
                f,
                l,
                s,
                e,
                h,
                c;
            return u.data('settings'),
                f = 'onorientationchange' in window ? n(document)  : n(window),
                i && typeof i == 'object' && n.extend(o, i),
                n(document).ready(function () {
                    if (t) {
                        var i;
                        u.length == 0 ? u = n('<div />').attr('id', 'backstretch').css({
                            left: 0,
                            top: 0,
                            position: 'fixed',
                            overflow: 'hidden',
                            zIndex: - 999999,
                            margin: 0,
                            padding: 0,
                            height: '100%',
                            width: '100%'
                        })  : u.find('img').addClass('deleteable'),
                            i = n('<img />').css({
                                position: 'absolute',
                                display: 'none',
                                margin: 0,
                                padding: 0,
                                border: 'none',
                                zIndex: - 999999
                            }).bind('load', function (t) {
                                var i = n(this),
                                    f;
                                i.css({
                                    width: 'auto',
                                    height: 'auto'
                                }),
                                    f = this.width || n(t.target).width(),
                                    t = this.height || n(t.target).height(),
                                    l = f / t,
                                    a(function () {
                                        i.fadeIn(o.speed, function () {
                                            u.find('.deleteable').remove(),
                                                typeof r == 'function' && r()
                                        })
                                    })
                            }).appendTo(u),
                            n('body #backstretch').length == 0 && n('body').append(u),
                            u.data('settings', o),
                            i.attr('src', t),
                            n(window).resize(a)
                    }
                }),
                this
        }
    }(jQuery),
    function (n) {
        n.fn.extend({
            leanModal: function (t) {
                function i(t) {
                    n('#lean_overlay').fadeOut(200),
                        n(t).css({
                            display: 'none'
                        })
                }
                return t = n.extend({
                    top: 100,
                    overlay: 0.5
                }, t),
                    this.each(function () {
                        var r = t;
                        n(this).click(function (t) {
                            var e = n('<div id=\'lean_overlay\'></div>'),
                                u = n(this).attr('href'),
                                o,
                                f;
                            n('body').append(e),
                                n('#lean_overlay').click(function () {
                                    i(u)
                                }),
                                o = n(u).outerHeight(),
                                f = n(u).outerWidth(),
                                n('#lean_overlay').css({
                                    display: 'block',
                                    opacity: 0
                                }),
                                n('#lean_overlay').fadeTo(200, r.overlay),
                                n(u).css({
                                    display: 'block',
                                    position: 'fixed',
                                    opacity: 0,
                                    'z-index': 11000,
                                    left: '50%',
                                    'margin-left': - (f / 2) + 'px',
                                    top: r.top + 'px'
                                }),
                                n(u).fadeTo(200, 1),
                                t.preventDefault()
                        })
                    })
            }
        })
    }(jQuery),
    jQuery.effects || function (n, t) {
    function u(t) {
        var i;
        return t && t.constructor == Array && t.length == 3 ? t : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [
            parseInt(i[1], 10),
            parseInt(i[2], 10),
            parseInt(i[3], 10)
        ] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [
                parseFloat(i[1]) * 2.55,
                parseFloat(i[2]) * 2.55,
                parseFloat(i[3]) * 2.55
        ] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [
            parseInt(i[1], 16),
            parseInt(i[2], 16),
            parseInt(i[3], 16)
        ] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [
            parseInt(i[1] + i[1], 16),
            parseInt(i[2] + i[2], 16),
            parseInt(i[3] + i[3], 16)
        ] : /rgba\(0, 0, 0, 0\)/.exec(t) ? o.transparent : o[n.trim(t).toLowerCase()]
    }
    function h(t, i) {
        var r;
        do {
            if (r = n.curCSS(t, i), r != '' && r != 'transparent' || n.nodeName(t, 'body')) break;
            i = 'backgroundColor'
        } while (t = t.parentNode);
        return u(r)
    }
    function f() {
        var n = document.defaultView ? document.defaultView.getComputedStyle(this, null)  : this.currentStyle,
            i = {
            },
            t,
            u,
            r;
        if (n && n.length && n[0] && n[n[0]]) for (r = n.length; r--; ) t = n[r],
            typeof n[t] == 'string' && (u = t.replace(/\-(\w)/g, function (n, t) {
            return t.toUpperCase()
        }), i[u] = n[t]);
        else for (t in n) typeof n[t] == 'string' && (i[t] = n[t]);
        return i
    }
    function e(t) {
        var i,
            r;
        for (i in t) r = t[i],
            (r == null || n.isFunction(r) || i in l || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(r))) && delete t[i];
        return t
    }
    function c(n, t) {
        var r = {
                _: 0
            },
            i;
        for (i in t) n[i] != t[i] && (r[i] = t[i]);
        return r
    }
    function i(t, i, r, u) {
        return typeof t == 'object' && (u = i, r = null, i = t, t = i.effect),
            n.isFunction(i) && (u = i, r = null, i = {
        }),
            (typeof i == 'number' || n.fx.speeds[i]) && (u = r, r = i, i = {
        }),
            n.isFunction(r) && (u = r, r = null),
            i = i || {
            },
            r = r || i.duration,
            r = n.fx.off ? 0 : typeof r == 'number' ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default,
            u = u || i.complete,
            [
                t,
                i,
                r,
                u
            ]
    }
    function r(t) {
        return !t || typeof t == 'number' || n.fx.speeds[t] ? !0 : typeof t == 'string' && !n.effects[t] ? !0 : !1
    }
    n.effects = {
    },
        n.each(['backgroundColor',
            'borderBottomColor',
            'borderLeftColor',
            'borderRightColor',
            'borderTopColor',
            'borderColor',
            'color',
            'outlineColor'], function (t, i) {
            n.fx.step[i] = function (n) {
                n.colorInit || (n.start = h(n.elem, i), n.end = u(n.end), n.colorInit = !0),
                    n.elem.style[i] = 'rgb(' + Math.max(Math.min(parseInt(n.pos * (n.end[0] - n.start[0]) + n.start[0], 10), 255), 0) + ',' + Math.max(Math.min(parseInt(n.pos * (n.end[1] - n.start[1]) + n.start[1], 10), 255), 0) + ',' + Math.max(Math.min(parseInt(n.pos * (n.end[2] - n.start[2]) + n.start[2], 10), 255), 0) + ')'
            }
        });
    var o = {
            aqua: [
                0,
                255,
                255
            ],
            azure: [
                240,
                255,
                255
            ],
            beige: [
                245,
                245,
                220
            ],
            black: [
                0,
                0,
                0
            ],
            blue: [
                0,
                0,
                255
            ],
            brown: [
                165,
                42,
                42
            ],
            cyan: [
                0,
                255,
                255
            ],
            darkblue: [
                0,
                0,
                139
            ],
            darkcyan: [
                0,
                139,
                139
            ],
            darkgrey: [
                169,
                169,
                169
            ],
            darkgreen: [
                0,
                100,
                0
            ],
            darkkhaki: [
                189,
                183,
                107
            ],
            darkmagenta: [
                139,
                0,
                139
            ],
            darkolivegreen: [
                85,
                107,
                47
            ],
            darkorange: [
                255,
                140,
                0
            ],
            darkorchid: [
                153,
                50,
                204
            ],
            darkred: [
                139,
                0,
                0
            ],
            darksalmon: [
                233,
                150,
                122
            ],
            darkviolet: [
                148,
                0,
                211
            ],
            fuchsia: [
                255,
                0,
                255
            ],
            gold: [
                255,
                215,
                0
            ],
            green: [
                0,
                128,
                0
            ],
            indigo: [
                75,
                0,
                130
            ],
            khaki: [
                240,
                230,
                140
            ],
            lightblue: [
                173,
                216,
                230
            ],
            lightcyan: [
                224,
                255,
                255
            ],
            lightgreen: [
                144,
                238,
                144
            ],
            lightgrey: [
                211,
                211,
                211
            ],
            lightpink: [
                255,
                182,
                193
            ],
            lightyellow: [
                255,
                255,
                224
            ],
            lime: [
                0,
                255,
                0
            ],
            magenta: [
                255,
                0,
                255
            ],
            maroon: [
                128,
                0,
                0
            ],
            navy: [
                0,
                0,
                128
            ],
            olive: [
                128,
                128,
                0
            ],
            orange: [
                255,
                165,
                0
            ],
            pink: [
                255,
                192,
                203
            ],
            purple: [
                128,
                0,
                128
            ],
            violet: [
                128,
                0,
                128
            ],
            red: [
                255,
                0,
                0
            ],
            silver: [
                192,
                192,
                192
            ],
            white: [
                255,
                255,
                255
            ],
            yellow: [
                255,
                255,
                0
            ],
            transparent: [
                255,
                255,
                255
            ]
        },
        s = [
            'add',
            'remove',
            'toggle'
        ],
        l = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    n.effects.animateClass = function (t, i, r, u) {
        return n.isFunction(r) && (u = r, r = null),
            this.queue(function () {
                var o = n(this),
                    h = o.attr('style') || ' ',
                    a = e(f.call(this)),
                    l,
                    v = o.attr('class');
                n.each(s, function (n, i) {
                    t[i] && o[i + 'Class'](t[i])
                }),
                    l = e(f.call(this)),
                    o.attr('class', v),
                    o.animate(c(a, l), {
                        queue: !1,
                        duration: i,
                        easing: r,
                        complete: function () {
                            n.each(s, function (n, i) {
                                t[i] && o[i + 'Class'](t[i])
                            }),
                                    typeof o.attr('style') == 'object' ? (o.attr('style').cssText = '', o.attr('style').cssText = h)  : o.attr('style', h),
                                u && u.apply(this, arguments),
                                n.dequeue(this)
                        }
                    })
            })
    },
        n.fn.extend({
            _addClass: n.fn.addClass,
            addClass: function (t, i, r, u) {
                return i ? n.effects.animateClass.apply(this, [
                    {
                        add: t
                    },
                    i,
                    r,
                    u
                ])  : this._addClass(t)
            },
            _removeClass: n.fn.removeClass,
            removeClass: function (t, i, r, u) {
                return i ? n.effects.animateClass.apply(this, [
                    {
                        remove: t
                    },
                    i,
                    r,
                    u
                ])  : this._removeClass(t)
            },
            _toggleClass: n.fn.toggleClass,
            toggleClass: function (i, r, u, f, e) {
                return typeof r == 'boolean' || r === t ? u ? n.effects.animateClass.apply(this, [
                    r ? {
                        add: i
                    }
                        : {
                        remove: i
                    },
                    u,
                    f,
                    e
                ])  : this._toggleClass(i, r)  : n.effects.animateClass.apply(this, [
                    {
                        toggle: i
                    },
                    r,
                    u,
                    f
                ])
            },
            switchClass: function (t, i, r, u, f) {
                return n.effects.animateClass.apply(this, [
                    {
                        add: i,
                        remove: t
                    },
                    r,
                    u,
                    f
                ])
            }
        }),
        n.extend(n.effects, {
            version: '1.8.16',
            save: function (n, t) {
                for (var i = 0; i < t.length; i++) t[i] !== null && n.data('ec.storage.' + t[i], n[0].style[t[i]])
            },
            restore: function (n, t) {
                for (var i = 0; i < t.length; i++) t[i] !== null && n.css(t[i], n.data('ec.storage.' + t[i]))
            },
            setMode: function (n, t) {
                return t == 'toggle' && (t = n.is(':hidden') ? 'show' : 'hide'),
                    t
            },
            getBaseline: function (n, t) {
                var i;
                switch (n[0]) {
                    case 'top':
                        i = 0;
                        break;
                    case 'middle':
                        i = 0.5;
                        break;
                    case 'bottom':
                        i = 1;
                        break;
                    default:
                        i = n[0] / t.height
                }
                switch (n[1]) {
                    case 'left':
                        n = 0;
                        break;
                    case 'center':
                        n = 0.5;
                        break;
                    case 'right':
                        n = 1;
                        break;
                    default:
                        n = n[1] / t.width
                }
                return {
                    x: n,
                    y: i
                }
            },
            createWrapper: function (t) {
                if (t.parent().is('.ui-effects-wrapper')) return t.parent();
                var i = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        float: t.css('float')
                    },
                    r = n('<div></div>').addClass('ui-effects-wrapper').css({
                        fontSize: '100%',
                        background: 'transparent',
                        border: 'none',
                        margin: 0,
                        padding: 0
                    }),
                    u = document.activeElement;
                return t.wrap(r),
                    (t[0] === u || n.contains(t[0], u)) && n(u).focus(),
                    r = t.parent(),
                        t.css('position') == 'static' ? (r.css({
                    position: 'relative'
                }), t.css({
                    position: 'relative'
                }))  : (n.extend(i, {
                    position: t.css('position'),
                    zIndex: t.css('z-index')
                }), n.each(['top',
                    'left',
                    'bottom',
                    'right'], function (n, r) {
                    i[r] = t.css(r),
                        isNaN(parseInt(i[r], 10)) && (i[r] = 'auto')
                }), t.css({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 'auto',
                    bottom: 'auto'
                })),
                    r.css(i).show()
            },
            removeWrapper: function (t) {
                var r,
                    i = document.activeElement;
                return t.parent().is('.ui-effects-wrapper') ? (r = t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus(), r)  : t
            },
            setTransition: function (t, i, r, u) {
                return u = u || {
                },
                    n.each(i, function (n, i) {
                        unit = t.cssUnit(i),
                            unit[0] > 0 && (u[i] = unit[0] * r + unit[1])
                    }),
                    u
            }
        }),
        n.fn.extend({
            effect: function (t) {
                var r = i.apply(this, arguments),
                    u = {
                        options: r[1],
                        duration: r[2],
                        callback: r[3]
                    },
                    f;
                return (r = u.options.mode, f = n.effects[t], n.fx.off || !f) ? r ? this[r](u.duration, u.callback)  : this.each(function () {
                    u.callback && u.callback.call(this)
                })  : f.call(this, u)
            },
            _show: n.fn.show,
            show: function (n) {
                if (r(n)) return this._show.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t[1].mode = 'show',
                    this.effect.apply(this, t)
            },
            _hide: n.fn.hide,
            hide: function (n) {
                if (r(n)) return this._hide.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t[1].mode = 'hide',
                    this.effect.apply(this, t)
            },
            __toggle: n.fn.toggle,
            toggle: function (t) {
                if (r(t) || typeof t == 'boolean' || n.isFunction(t)) return this.__toggle.apply(this, arguments);
                var u = i.apply(this, arguments);
                return u[1].mode = 'toggle',
                    this.effect.apply(this, u)
            },
            cssUnit: function (t) {
                var i = this.css(t),
                    r = [
                    ];
                return n.each(['em',
                    'px',
                    '%',
                    'pt'], function (n, t) {
                    i.indexOf(t) > 0 && (r = [
                        parseFloat(i),
                        t
                    ])
                }),
                    r
            }
        }),
        n.easing.jswing = n.easing.swing,
        n.extend(n.easing, {
            def: 'easeOutQuad',
            swing: function (t, i, r, u, f) {
                return n.easing[n.easing.def](t, i, r, u, f)
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
                n = 1.70158;
                var f = 0,
                    e = r;
                return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * 0.3), e < Math.abs(r) ? (e = r, n = f / 4)  : n = f / (2 * Math.PI) * Math.asin(r / e), - (e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - n) * 2 * Math.PI / f)) + i)
            },
            easeOutElastic: function (n, t, i, r, u) {
                n = 1.70158;
                var f = 0,
                    e = r;
                return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * 0.3), e < Math.abs(r) ? (e = r, n = f / 4)  : n = f / (2 * Math.PI) * Math.asin(r / e), e * Math.pow(2, - 10 * t) * Math.sin((t * u - n) * 2 * Math.PI / f) + r + i)
            },
            easeInOutElastic: function (n, t, i, r, u) {
                n = 1.70158;
                var f = 0,
                    e = r;
                return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * 0.3 * 1.5), e < Math.abs(r) ? (e = r, n = f / 4)  : n = f / (2 * Math.PI) * Math.asin(r / e), t < 1) ? - 0.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - n) * 2 * Math.PI / f) + i : e * Math.pow(2, - 10 * (t -= 1)) * Math.sin((t * u - n) * 2 * Math.PI / f) * 0.5 + r + i
            },
            easeInBack: function (n, i, r, u, f, e) {
                return e == t && (e = 1.70158),
                    u * (i /= f) * i * ((e + 1) * i - e) + r
            },
            easeOutBack: function (n, i, r, u, f, e) {
                return e == t && (e = 1.70158),
                    u * ((i = i / f - 1) * i * ((e + 1) * i + e) + 1) + r
            },
            easeInOutBack: function (n, i, r, u, f, e) {
                return (e == t && (e = 1.70158), (i /= f / 2) < 1) ? u / 2 * i * i * (((e *= 1.525) + 1) * i - e) + r : u / 2 * ((i -= 2) * i * (((e *= 1.525) + 1) * i + e) + 2) + r
            },
            easeInBounce: function (t, i, r, u, f) {
                return u - n.easing.easeOutBounce(t, f - i, 0, u, f) + r
            },
            easeOutBounce: function (n, t, i, r, u) {
                return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + i
            },
            easeInOutBounce: function (t, i, r, u, f) {
                return i < f / 2 ? n.easing.easeInBounce(t, i * 2, 0, u, f) * 0.5 + r : n.easing.easeOutBounce(t, i * 2 - f, 0, u, f) * 0.5 + u * 0.5 + r
            }
        })
}(jQuery), function (n) {
    n.fn.hoverIntent = function (t, i) {
        var r = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        r = n.extend(r, i ? {
            over: t,
            out: i
        }
            : t);
        var u,
            f,
            e,
            o,
            s = function (n) {
                u = n.pageX,
                    f = n.pageY
            },
            h = function (t, i) {
                if (i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.abs(e - u) + Math.abs(o - f) < r.sensitivity) return n(i).unbind('mousemove', s),
                    i.hoverIntent_s = 1,
                    r.over.apply(i, [
                        t
                    ]);
                e = u,
                    o = f,
                    i.hoverIntent_t = setTimeout(function () {
                        h(t, i)
                    }, r.interval)
            },
            l = function (n, t) {
                return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
                    t.hoverIntent_s = 0,
                    r.out.apply(t, [
                        n
                    ])
            },
            c = function (t) {
                var u = jQuery.extend({
                    }, t),
                    i = this;
                i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)),
                        t.type == 'mouseenter' ? (e = u.pageX, o = u.pageY, n(i).bind('mousemove', s), i.hoverIntent_s != 1 && (i.hoverIntent_t = setTimeout(function () {
                    h(u, i)
                }, r.interval)))  : (n(i).unbind('mousemove', s), i.hoverIntent_s == 1 && (i.hoverIntent_t = setTimeout(function () {
                    l(u, i)
                }, r.timeout)))
            };
        return this.bind('mouseenter', c).bind('mouseleave', c)
    }
}(jQuery), jQuery.cookie = function (n, t, i) {
    var u,
        r,
        f,
        e;
    return arguments.length > 1 && String(t) !== '[object Object]' ? (i = jQuery.extend({
    }, i), (t === null || t === undefined) && (i.expires = - 1), typeof i.expires == 'number' && (u = i.expires, r = i.expires = new Date, r.setDate(r.getDate() + u)), t = String(t), document.cookie = [
        encodeURIComponent(n),
        '=',
        i.raw ? t : encodeURIComponent(t),
        i.expires ? '; expires=' + i.expires.toUTCString()  : '',
        i.path ? '; path=' + i.path : '',
        i.domain ? '; domain=' + i.domain : '',
        i.secure ? '; secure' : ''
    ].join(''))  : (i = t || {
    }, e = i.raw ? function (n) {
        return n
    }
        : decodeURIComponent, (f = new RegExp('(?:^|; )' + encodeURIComponent(n) + '=([^;]*)').exec(document.cookie)) ? e(f[1])  : null)
};
/*!
 * Masonry PACKAGED v3.0.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function (n) {
    'use strict';
    function t(n) {
        if (n) {
            if ('string' == typeof r[n]) return n;
            n = n.charAt(0).toUpperCase() + n.slice(1);
            for (var t, u = 0, f = i.length; f > u; u++) if (t = i[u] + n, 'string' == typeof r[t]) return t
        }
    }
    var i = 'Webkit Moz ms Ms O'.split(' '),
        r = document.documentElement.style;
    'function' == typeof define && define.amd ? define(function () {
        return t
    })  : n.getStyleProperty = t
}) (window), function (n) {
    'use strict';
    function i(n) {
        var t = parseFloat(n),
            i = - 1 === n.indexOf('%') && !isNaN(t);
        return i && t
    }
    function e() {
        for (var r, i = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, n = 0, u = t.length; u > n; n++) r = t[n],
            i[r] = 0;
        return i
    }
    function u(n) {
        function o(n) {
            var s,
                o,
                c;
            if ('string' == typeof n && (n = document.querySelector(n)), n && 'object' == typeof n && n.nodeType) {
                if (s = f(n), 'none' === s.display) return e();
                o = {
                },
                    o.width = n.offsetWidth,
                    o.height = n.offsetHeight;
                for (var d = o.isBorderBox = !(!r || !s[r] || 'border-box' !== s[r]), h = 0, g = t.length; g > h; h++) {
                    var l = t[h],
                        nt = s[l],
                        a = parseFloat(nt);
                    o[l] = isNaN(a) ? 0 : a
                }
                var v = o.paddingLeft + o.paddingRight,
                    y = o.paddingTop + o.paddingBottom,
                    tt = o.marginLeft + o.marginRight,
                    it = o.marginTop + o.marginBottom,
                    p = o.borderLeftWidth + o.borderRightWidth,
                    w = o.borderTopWidth + o.borderBottomWidth,
                    b = d && u,
                    k = i(s.width);
                return k !== !1 && (o.width = k + (b ? 0 : v + p)),
                    c = i(s.height),
                    c !== !1 && (o.height = c + (b ? 0 : y + w)),
                    o.innerWidth = o.width - (v + p),
                    o.innerHeight = o.height - (y + w),
                    o.outerWidth = o.width + tt,
                    o.outerHeight = o.height + it,
                    o
            }
        }
        var u,
            r = n('boxSizing');
        return function () {
            var n,
                t,
                e;
            r && (n = document.createElement('div'), n.style.width = '200px', n.style.padding = '1px 2px 3px 4px', n.style.borderStyle = 'solid', n.style.borderWidth = '1px 2px 3px 4px', n.style[r] = 'border-box', t = document.body || document.documentElement, t.appendChild(n), e = f(n), u = 200 === i(e.width), t.removeChild(n))
        }(),
            o
    }
    var r = document.defaultView,
        f = r && r.getComputedStyle ? function (n) {
            return r.getComputedStyle(n, null)
        }
            : function (n) {
            return n.currentStyle
        },
        t = [
            'paddingLeft',
            'paddingRight',
            'paddingTop',
            'paddingBottom',
            'marginLeft',
            'marginRight',
            'marginTop',
            'marginBottom',
            'borderLeftWidth',
            'borderRightWidth',
            'borderTopWidth',
            'borderBottomWidth'
        ];
    'function' == typeof define && define.amd ? define(['get-style-property'], u)  : n.getSize = u(n.getStyleProperty)
}(window), function (n) {
    'use strict';
    var t = document.documentElement,
        r = function () {
        },
        i,
        u;
    t.addEventListener ? r = function (n, t, i) {
        n.addEventListener(t, i, !1)
    }
        : t.attachEvent && (r = function (t, i, r) {
        t[i + r] = r.handleEvent ? function () {
            var t = n.event;
            t.target = t.target || t.srcElement,
                r.handleEvent.call(r, t)
        }
            : function () {
            var i = n.event;
            i.target = i.target || i.srcElement,
                r.call(t, i)
        },
            t.attachEvent('on' + i, t[i + r])
    }),
        i = function () {
        },
        t.removeEventListener ? i = function (n, t, i) {
            n.removeEventListener(t, i, !1)
        }
            : t.detachEvent && (i = function (n, t, i) {
            n.detachEvent('on' + t, n[t + i]);
            try {
                delete n[t + i]
            } catch (r) {
                n[t + i] = void 0
            }
        }),
        u = {
            bind: r,
            unbind: i
        },
            'function' == typeof define && define.amd ? define(u)  : n.eventie = u
}(this), function (n) {
    'use strict';
    function t(n) {
        'function' == typeof n && (t.isReady ? n()  : u.push(n))
    }
    function i(n) {
        var o = 'readystatechange' === n.type && 'complete' !== r.readyState,
            i,
            f,
            e;
        if (!t.isReady && !o) for (t.isReady = !0, i = 0, f = u.length; f > i; i++) e = u[i],
            e()
    }
    function f(u) {
        return u.bind(r, 'DOMContentLoaded', i),
            u.bind(r, 'readystatechange', i),
            u.bind(n, 'load', i),
            t
    }
    var r = n.document,
        u = [
        ];
    t.isReady = !1,
            'function' == typeof define && define.amd ? define(['eventie'], f)  : n.docReady = f(n.eventie)
}(this), function (n) {
    'use strict';
    function i() {
    }
    function r(n, t) {
        if (u) return t.indexOf(n);
        for (var i = t.length; i--; ) if (t[i] === n) return i;
        return - 1
    }
    var t = i.prototype,
        u = Array.prototype.indexOf ? !0 : !1;
    t._getEvents = function () {
        return this._events || (this._events = {
        })
    },
        t.getListeners = function (n) {
            var r,
                t,
                i = this._getEvents();
            if ('object' == typeof n) {
                r = {
                };
                for (t in i) i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
            } else r = i[n] || (i[n] = [
            ]);
            return r
        },
        t.getListenersAsObject = function (n) {
            var t,
                i = this.getListeners(n);
            return i instanceof Array && (t = {
            }, t[n] = i),
                t || i
        },
        t.addListener = function (n, t) {
            var i,
                u = this.getListenersAsObject(n);
            for (i in u) u.hasOwnProperty(i) && - 1 === r(t, u[i]) && u[i].push(t);
            return this
        },
        t.on = t.addListener,
        t.defineEvent = function (n) {
            return this.getListeners(n),
                this
        },
        t.defineEvents = function (n) {
            for (var t = 0; n.length > t; t += 1) this.defineEvent(n[t]);
            return this
        },
        t.removeListener = function (n, t) {
            var f,
                i,
                u = this.getListenersAsObject(n);
            for (i in u) u.hasOwnProperty(i) && (f = r(t, u[i]), - 1 !== f && u[i].splice(f, 1));
            return this
        },
        t.off = t.removeListener,
        t.addListeners = function (n, t) {
            return this.manipulateListeners(!1, n, t)
        },
        t.removeListeners = function (n, t) {
            return this.manipulateListeners(!0, n, t)
        },
        t.manipulateListeners = function (n, t, i) {
            var r,
                u,
                f = n ? this.removeListener : this.addListener,
                e = n ? this.removeListeners : this.addListeners;
            if ('object' != typeof t || t instanceof RegExp) for (r = i.length; r--; ) f.call(this, t, i[r]);
            else for (r in t) t.hasOwnProperty(r) && (u = t[r]) && ('function' == typeof u ? f.call(this, r, u)  : e.call(this, r, u));
            return this
        },
        t.removeEvent = function (n) {
            var t,
                r = typeof n,
                i = this._getEvents();
            if ('string' === r) delete i[n];
            else if ('object' === r) for (t in i) i.hasOwnProperty(t) && n.test(t) && delete i[t];
            else delete this._events;
            return this
        },
        t.emitEvent = function (n, t) {
            var u,
                i,
                f,
                r = this.getListenersAsObject(n);
            for (i in r) if (r.hasOwnProperty(i)) for (u = r[i].length; u--; ) f = t ? r[i][u].apply(null, t)  : r[i][u](),
                f === !0 && this.removeListener(n, r[i][u]);
            return this
        },
        t.trigger = t.emitEvent,
        t.emit = function (n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(n, t)
        },
            'function' == typeof define && define.amd ? define(function () {
        return i
    })  : n.EventEmitter = i
}(this), function (n) {
    'use strict';
    function i() {
    }
    function t(n) {
        function u(t) {
            t.prototype.option || (t.prototype.option = function (t) {
                n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
            })
        }
        function f(i, u) {
            n.fn[i] = function (f) {
                var h,
                    e,
                    s;
                if ('string' == typeof f) {
                    for (var c = r.call(arguments, 1), o = 0, l = this.length; l > o; o++) if (h = this[o], e = n.data(h, i), e) if (n.isFunction(e[f]) && '_' !== f.charAt(0)) {
                        if (s = e[f].apply(e, c), void 0 !== s) return s
                    } else t('no such method \'' + f + '\' for ' + i + ' instance');
                    else t('cannot call methods on ' + i + ' prior to initialization; attempted to call \'' + f + '\'');
                    return this
                }
                return this.each(function () {
                    var t = n.data(this, i);
                    t ? (t.option(f), t._init())  : (t = new u(this, f), n.data(this, i, t))
                })
            }
        }
        if (n) {
            var t = 'undefined' == typeof console ? i : function (n) {
                console.error(n)
            };
            n.bridget = function (n, t) {
                u(t),
                    f(n, t)
            }
        }
    }
    var r = Array.prototype.slice;
    'function' == typeof define && define.amd ? define(['jquery'], t)  : t(n.jQuery)
}(window), function (n, t) {
    'use strict';
    function r(n, t) {
        return n[f](t)
    }
    function u(n) {
        if (!n.parentNode) {
            var t = document.createDocumentFragment();
            t.appendChild(n)
        }
    }
    function s(n, t) {
        u(n);
        for (var r = n.parentNode.querySelectorAll(t), i = 0, f = r.length; f > i; i++) if (r[i] === n) return !0;
        return !1
    }
    function h(n, t) {
        return u(n),
            r(n, t)
    }
    var i,
        f = function () {
            var u,
                i;
            if (t.matchesSelector) return 'matchesSelector';
            for (var r = [
                'webkit',
                'moz',
                'ms',
                'o'
            ], n = 0, f = r.length; f > n; n++) if (u = r[n], i = u + 'MatchesSelector', t[i]) return i
        }(),
        e,
        o;
    f ? (e = document.createElement('div'), o = r(e, 'div'), i = o ? r : h)  : i = s,
            'function' == typeof define && define.amd ? define(function () {
        return i
    })  : window.matchesSelector = i
}(this, Element.prototype), function (n) {
    'use strict';
    function h(n, t) {
        for (var i in t) n[i] = t[i];
        return n
    }
    function t(n, t) {
        n && (this.element = n, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var c = n.getSize,
        i = n.getStyleProperty,
        l = n.EventEmitter,
        u = document.defaultView,
        a = u && u.getComputedStyle ? function (n) {
            return u.getComputedStyle(n, null)
        }
            : function (n) {
            return n.currentStyle
        },
        r = i('transition'),
        v = i('transform'),
        y = r && v,
        p = !!i('perspective'),
        f = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'otransitionend',
            transition: 'transitionend'
        }
            [
            r
            ],
        e = [
            'transform',
            'transition',
            'transitionDuration',
            'transitionProperty'
        ],
        w = function () {
            for (var n, t, u = {
            }, r = 0, f = e.length; f > r; r++) n = e[r],
                t = i(n),
                t && t !== n && (u[n] = t);
            return u
        }(),
        o,
        s;
    h(t.prototype, l.prototype),
        t.prototype._create = function () {
            this.css({
                position: 'absolute'
            })
        },
        t.prototype.handleEvent = function (n) {
            var t = 'on' + n.type;
            this[t] && this[t](n)
        },
        t.prototype.getSize = function () {
            this.size = c(this.element)
        },
        t.prototype.css = function (n) {
            var r = this.element.style,
                t,
                i;
            for (t in n) i = w[t] || t,
                r[i] = n[t]
        },
        t.prototype.getPosition = function () {
            var r = a(this.element),
                u = this.layout.options,
                f = u.isOriginLeft,
                e = u.isOriginTop,
                n = parseInt(r[f ? 'left' : 'right'], 10),
                t = parseInt(r[e ? 'top' : 'bottom'], 10),
                i;
            n = isNaN(n) ? 0 : n,
                t = isNaN(t) ? 0 : t,
                i = this.layout.size,
                n -= f ? i.paddingLeft : i.paddingRight,
                t -= e ? i.paddingTop : i.paddingBottom,
                this.position.x = n,
                this.position.y = t
        },
        t.prototype.layoutPosition = function () {
            var t = this.layout.size,
                i = this.layout.options,
                n = {
                };
            i.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + 'px', n.right = '')  : (n.right = this.position.x + t.paddingRight + 'px', n.left = ''),
                i.isOriginTop ? (n.top = this.position.y + t.paddingTop + 'px', n.bottom = '')  : (n.bottom = this.position.y + t.paddingBottom + 'px', n.top = ''),
                this.css(n),
                this.emitEvent('layout', [
                    this
                ])
        },
        o = p ? function (n, t) {
            return 'translate3d(' + n + 'px, ' + t + 'px, 0)'
        }
            : function (n, t) {
            return 'translate(' + n + 'px, ' + t + 'px)'
        },
        t.prototype._transitionTo = function (n, t) {
            this.getPosition();
            var e = this.position.x,
                s = this.position.y,
                h = parseInt(n, 10),
                c = parseInt(t, 10),
                l = h === this.position.x && c === this.position.y;
            if (this.setPosition(n, t), l && !this.isTransitioning) return this.layoutPosition(),
                void 0;
            var i = n - e,
                r = t - s,
                u = {
                },
                f = this.layout.options;
            i = f.isOriginLeft ? i : - i,
                r = f.isOriginTop ? r : - r,
                u.transform = o(i, r),
                this.transition({
                    to: u,
                    onTransitionEnd: this.layoutPosition,
                    isCleaning: !0
                })
        },
        t.prototype.goTo = function (n, t) {
            this.setPosition(n, t),
                this.layoutPosition()
        },
        t.prototype.moveTo = y ? t.prototype._transitionTo : t.prototype.goTo,
        t.prototype.setPosition = function (n, t) {
            this.position.x = parseInt(n, 10),
                this.position.y = parseInt(t, 10)
        },
        t.prototype._nonTransition = function (n) {
            this.css(n.to),
                n.isCleaning && this._removeStyles(n.to),
                n.onTransitionEnd && n.onTransitionEnd.call(this)
        },
        t.prototype._transition = function (n) {
            var u = this.layout.options.transitionDuration,
                t,
                r,
                e,
                i,
                o;
            if (!parseFloat(u)) return this._nonTransition(n),
                void 0;
            t = n.to,
                r = [
                ];
            for (e in t) r.push(e);
            i = {
            },
                (i.transitionProperty = r.join(','), i.transitionDuration = u, this.element.addEventListener(f, this, !1), (n.isCleaning || n.onTransitionEnd) && this.on('transitionEnd', function (i) {
                    return n.isCleaning && i._removeStyles(t),
                        n.onTransitionEnd && n.onTransitionEnd.call(i),
                        !0
                }), n.from) && (this.css(n.from), o = this.element.offsetHeight, o = null),
                this.css(i),
                this.css(t),
                this.isTransitioning = !0
        },
        t.prototype.transition = t.prototype[r ? '_transition' : '_nonTransition'],
        t.prototype.onwebkitTransitionEnd = function (n) {
            this.ontransitionend(n)
        },
        t.prototype.onotransitionend = function (n) {
            this.ontransitionend(n)
        },
        t.prototype.ontransitionend = function (n) {
            n.target === this.element && (this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1, this.emitEvent('transitionEnd', [
                this
            ]))
        },
        t.prototype._removeStyles = function (n) {
            var t = {
                },
                i;
            for (i in n) t[i] = '';
            this.css(t)
        },
        s = {
            transitionProperty: '',
            transitionDuration: ''
        },
        t.prototype.removeTransitionStyles = function () {
            this.css(s)
        },
        t.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
                this.emitEvent('remove', [
                    this
                ])
        },
        t.prototype.remove = r ? function () {
            var n = this;
            this.on('transitionEnd', function () {
                return n.removeElem(),
                    !0
            }),
                this.hide()
        }
            : t.prototype.removeElem,
        t.prototype.reveal = function () {
            this.css({
                display: ''
            });
            var n = this.layout.options;
            this.transition({
                from: n.hiddenStyle,
                to: n.visibleStyle,
                isCleaning: !0
            })
        },
        t.prototype.hide = function () {
            this.css({
                display: ''
            });
            var n = this.layout.options;
            this.transition({
                from: n.visibleStyle,
                to: n.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: function () {
                    this.css({
                        display: 'none'
                    })
                }
            })
        },
        t.prototype.destroy = function () {
            this.css({
                position: '',
                left: '',
                right: '',
                top: '',
                bottom: '',
                transition: '',
                transform: ''
            })
        },
        n.Outlayer = {
            Item: t
        }
}(window), function (n) {
    'use strict';
    function i(n, t) {
        for (var i in t) n[i] = t[i];
        return n
    }
    function w(n) {
        return '[object Array]' === nt.call(n)
    }
    function e(n) {
        var t = [
            ],
            i,
            r;
        if (w(n)) t = n;
        else if ('number' == typeof n.length) for (i = 0, r = n.length; r > i; i++) t.push(n[i]);
        else t.push(n);
        return t
    }
    function b(n) {
        return n.replace(/(.)([A-Z])/g, function (n, t, i) {
            return t + '-' + i
        }).toLowerCase()
    }
    function t(n, t) {
        if ('string' == typeof n && (n = l.querySelector(n)), !n || !v(n)) return f && f.error('Bad ' + this.settings.namespace + ' element: ' + n),
            void 0;
        this.element = n,
            this.options = i({
            }, this.options),
            i(this.options, t);
        var r = ++tt;
        this.element.outlayerGUID = r,
            p[r] = this,
            this._create(),
            this.options.isInitLayout && this.layout()
    }
    function o(n, r) {
        n.prototype[r] = i({
        }, t.prototype[r])
    }
    var s = n.Outlayer,
        h = s.Item,
        k = n.docReady,
        d = n.EventEmitter,
        c = n.eventie,
        u = n.getSize,
        g = n.matchesSelector,
        l = n.document,
        f = n.console,
        r = n.jQuery,
        a = function () {
        },
        nt = Object.prototype.toString,
        v = 'object' == typeof HTMLElement ? function (n) {
            return n instanceof HTMLElement
        }
            : function (n) {
            return n && 'object' == typeof n && 1 === n.nodeType && 'string' == typeof n.nodeName
        },
        y = Array.prototype.indexOf ? function (n, t) {
            return n.indexOf(t)
        }
            : function (n, t) {
            for (var i = 0, r = n.length; r > i; i++) if (n[i] === t) return i;
            return - 1
        },
        tt = 0,
        p = {
        };
    t.prototype.settings = {
        namespace: 'outlayer',
        item: s.Item
    },
        t.prototype.options = {
            containerStyle: {
                position: 'relative'
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            transitionDuration: '0.4s',
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            }
        },
        i(t.prototype, d.prototype),
        t.prototype._create = function () {
            this.reloadItems(),
                this.stamps = [
                ],
                this.stamp(this.options.stamp),
                i(this.element.style, this.options.containerStyle),
                this.options.isResizeBound && this.bindResize()
        },
        t.prototype.reloadItems = function () {
            this.items = this._getItems(this.element.children)
        },
        t.prototype._getItems = function (n) {
            for (var u, f, i = this._filterFindItemElements(n), e = this.settings.item, r = [
            ], t = 0, o = i.length; o > t; t++) u = i[t],
                f = new e(u, this, this.options.itemOptions),
                r.push(f);
            return r
        },
        t.prototype._filterFindItemElements = function (n) {
            var t,
                i;
            if (n = e(n), t = this.options.itemSelector, !t) return n;
            for (var r = [
            ], u = 0, s = n.length; s > u; u++) {
                i = n[u],
                    g(i, t) && r.push(i);
                for (var o = i.querySelectorAll(t), f = 0, h = o.length; h > f; f++) r.push(o[f])
            }
            return r
        },
        t.prototype.getItemElements = function () {
            for (var t = [
            ], n = 0, i = this.items.length; i > n; n++) t.push(this.items[n].element);
            return t
        },
        t.prototype.layout = function () {
            this._resetLayout(),
                this._manageStamps();
            var n = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, n),
                this._isLayoutInited = !0
        },
        t.prototype._init = t.prototype.layout,
        t.prototype._resetLayout = function () {
            this.getSize()
        },
        t.prototype.getSize = function () {
            this.size = u(this.element)
        },
        t.prototype._getMeasurement = function (n, t) {
            var r,
                i = this.options[n];
            i ? ('string' == typeof i ? r = this.element.querySelector(i)  : v(i) && (r = i), this[n] = r ? u(r) [t] : i)  : this[n] = 0
        },
        t.prototype.layoutItems = function (n, t) {
            n = this._getItemsForLayout(n),
                this._layoutItems(n, t),
                this._postLayout()
        },
        t.prototype._getItemsForLayout = function (n) {
            for (var i, r = [
            ], t = 0, u = n.length; u > t; t++) i = n[t],
                i.isIgnored || r.push(i);
            return r
        },
        t.prototype._layoutItems = function (n, t) {
            var u,
                i;
            if (!n || !n.length) return this.emitEvent('layoutComplete', [
                this,
                n
            ]),
                void 0;
            this._itemsOn(n, 'layout', function () {
                this.emitEvent('layoutComplete', [
                    this,
                    n
                ])
            });
            for (var f = [
            ], r = 0, e = n.length; e > r; r++) u = n[r],
                i = this._getItemLayoutPosition(u),
                i.item = u,
                i.isInstant = t,
                f.push(i);
            this._processLayoutQueue(f)
        },
        t.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        },
        t.prototype._processLayoutQueue = function (n) {
            for (var t, i = 0, r = n.length; r > i; i++) t = n[i],
                this._positionItem(t.item, t.x, t.y, t.isInstant)
        },
        t.prototype._positionItem = function (n, t, i, r) {
            r ? n.goTo(t, i)  : n.moveTo(t, i)
        },
        t.prototype._postLayout = function () {
            var n = this._getContainerSize();
            n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1))
        },
        t.prototype._getContainerSize = a,
        t.prototype._setContainerMeasure = function (n, t) {
            if (void 0 !== n) {
                var i = this.size;
                i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                    n = Math.max(n, 0),
                    this.element.style[t ? 'width' : 'height'] = n + 'px'
            }
        },
        t.prototype._itemsOn = function (n, t, i) {
            function e() {
                return u++,
                    u === o && i.call(s),
                    !0
            }
            for (var f, u = 0, o = n.length, s = this, r = 0, h = n.length; h > r; r++) {
                f = n[r];
                f.on(t, e)
            }
        },
        t.prototype.ignore = function (n) {
            var t = this.getItem(n);
            t && (t.isIgnored = !0)
        },
        t.prototype.unignore = function (n) {
            var t = this.getItem(n);
            t && delete t.isIgnored
        },
        t.prototype.stamp = function (n) {
            var t,
                i,
                r;
            if (n = this._find(n)) for (this.stamps = this.stamps.concat(n), t = 0, i = n.length; i > t; t++) r = n[t],
                this.ignore(r)
        },
        t.prototype.unstamp = function (n) {
            var t,
                u,
                i,
                r;
            if (n = this._find(n)) for (t = 0, u = n.length; u > t; t++) i = n[t],
                r = y(this.stamps, i),
                - 1 !== r && this.stamps.splice(r, 1),
                this.unignore(i)
        },
        t.prototype._find = function (n) {
            if (n) return ('string' == typeof n && (n = this.element.querySelectorAll(n)), n = e(n))
        },
        t.prototype._manageStamps = function () {
            var n,
                t,
                i;
            if (this.stamps && this.stamps.length) for (this._getBoundingRect(), n = 0, t = this.stamps.length; t > n; n++) i = this.stamps[n],
                this._manageStamp(i)
        },
        t.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                n = this.size;
            this._boundingRect = {
                left: t.left + n.paddingLeft + n.borderLeftWidth,
                top: t.top + n.paddingTop + n.borderTopWidth,
                right: t.right - (n.paddingRight + n.borderRightWidth),
                bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
            }
        },
        t.prototype._manageStamp = a,
        t.prototype._getElementOffset = function (n) {
            var t = n.getBoundingClientRect(),
                i = this._boundingRect,
                r = u(n);
            return {
                left: t.left - i.left - r.marginLeft,
                top: t.top - i.top - r.marginTop,
                right: i.right - t.right - r.marginRight,
                bottom: i.bottom - t.bottom - r.marginBottom
            }
        },
        t.prototype.handleEvent = function (n) {
            var t = 'on' + n.type;
            this[t] && this[t](n)
        },
        t.prototype.bindResize = function () {
            this.isResizeBound || (c.bind(n, 'resize', this), this.isResizeBound = !0)
        },
        t.prototype.unbindResize = function () {
            c.unbind(n, 'resize', this),
                this.isResizeBound = !1
        },
        t.prototype.onresize = function () {
            function n() {
                t.resize()
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var t = this;
            this.resizeTimeout = setTimeout(n, 100)
        },
        t.prototype.resize = function () {
            var n = u(this.element),
                t = this.size && n;
            t && n.innerWidth === this.size.innerWidth || (this.layout(), delete this.resizeTimeout)
        },
        t.prototype.addItems = function (n) {
            var t = this._getItems(n);
            if (t.length) return this.items = this.items.concat(t),
                t
        },
        t.prototype.appended = function (n) {
            var t = this.addItems(n);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        },
        t.prototype.prepended = function (n) {
            var t = this._getItems(n),
                i;
            t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
        },
        t.prototype.reveal = function (n) {
            var t,
                i,
                r;
            if (n && n.length) for (t = 0, i = n.length; i > t; t++) r = n[t],
                r.reveal()
        },
        t.prototype.hide = function (n) {
            var t,
                i,
                r;
            if (n && n.length) for (t = 0, i = n.length; i > t; t++) r = n[t],
                r.hide()
        },
        t.prototype.getItem = function (n) {
            for (var i, t = 0, r = this.items.length; r > t; t++) if (i = this.items[t], i.element === n) return i
        },
        t.prototype.getItems = function (n) {
            var u,
                i;
            if (n && n.length) {
                for (var r = [
                ], t = 0, f = n.length; f > t; t++) u = n[t],
                    i = this.getItem(u),
                    i && r.push(i);
                return r
            }
        },
        t.prototype.remove = function (n) {
            var t,
                i,
                u,
                r,
                f;
            for (n = e(n), t = this.getItems(n), this._itemsOn(t, 'remove', function () {
                this.emitEvent('removeComplete', [
                    this,
                    t
                ])
            }), i = 0, u = t.length; u > i; i++) r = t[i],
                r.remove(),
                f = y(this.items, r),
                this.items.splice(f, 1)
        },
        t.prototype.destroy = function () {
            var t = this.element.style,
                n,
                i,
                r;
            for (t.height = '', t.position = '', t.width = '', n = 0, i = this.items.length; i > n; n++) r = this.items[n],
                r.destroy();
            this.unbindResize(),
                delete this.element.outlayerGUID
        },
        t.data = function (n) {
            var t = n && n.outlayerGUID;
            return t && p[t]
        },
        t.create = function (n, u) {
            function e() {
                t.apply(this, arguments)
            }
            return i(e.prototype, t.prototype),
                o(e, 'options'),
                o(e, 'settings'),
                i(e.prototype.options, u),
                e.prototype.settings.namespace = n,
                e.data = t.data,
                e.Item = function () {
                    h.apply(this, arguments)
                },
                e.Item.prototype = new t.Item,
                e.prototype.settings.item = e.Item,
                k(function () {
                    for (var c, t, u, a, o = b(n), s = l.querySelectorAll('.js-' + o), h = 'data-' + o + '-options', i = 0, v = s.length; v > i; i++) {
                        t = s[i],
                            u = t.getAttribute(h);
                        try {
                            c = u && JSON.parse(u)
                        } catch (y) {
                            f && f.error('Error parsing ' + h + ' on ' + t.nodeName.toLowerCase() + (t.id ? '#' + t.id : '') + ': ' + y);
                            continue
                        }
                        a = new e(t, c),
                            r && r.data(t, n, a)
                    }
                }),
                r && r.bridget && r.bridget(n, e),
                e
        },
        t.Item = h,
        n.Outlayer = t
}(window), function (n) {
    'use strict';
    function t(n, t) {
        var r = n.create('masonry');
        return r.prototype._resetLayout = function () {
            this.getSize(),
                this._getMeasurement('columnWidth', 'outerWidth'),
                this._getMeasurement('gutter', 'outerWidth'),
                this.measureColumns();
            var n = this.cols;
            for (this.colYs = [
            ]; n--; ) this.colYs.push(0);
            this.maxY = 0
        },
            r.prototype.measureColumns = function () {
                var n = this.items[0],
                    i = n && n.element;
                this.columnWidth || (this.columnWidth = i ? t(i).outerWidth : this.size.innerWidth),
                    this.columnWidth += this.gutter,
                    this.cols = Math.floor((this.size.innerWidth + this.gutter) / this.columnWidth),
                    this.cols = Math.max(this.cols, 1)
            },
            r.prototype._getItemLayoutPosition = function (n) {
                var t;
                n.getSize(),
                    t = Math.ceil(n.size.outerWidth / this.columnWidth),
                    t = Math.min(t, this.cols);
                for (var r = this._getColGroup(t), u = Math.min.apply(Math, r), e = i(r, u), o = {
                    x: this.columnWidth * e,
                    y: u
                }, s = u + n.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[e + f] = s;
                return o
            },
            r.prototype._getColGroup = function (n) {
                var r;
                if (1 === n) return this.colYs;
                for (var i = [
                ], u = this.cols + 1 - n, t = 0; u > t; t++) r = this.colYs.slice(t, t + n),
                    i[t] = Math.max.apply(Math, r);
                return i
            },
            r.prototype._manageStamp = function (n) {
                var e = t(n),
                    r = this._getElementOffset(n),
                    o = this.options.isOriginLeft ? r.left : r.right,
                    h = o + e.outerWidth,
                    f = Math.floor(o / this.columnWidth),
                    u,
                    s,
                    i;
                for (f = Math.max(0, f), u = Math.floor(h / this.columnWidth), u = Math.min(this.cols - 1, u), s = (this.options.isOriginTop ? r.top : r.bottom) + e.outerHeight, i = f; u >= i; i++) this.colYs[i] = Math.max(s, this.colYs[i])
            },
            r.prototype._getContainerSize = function () {
                return this.maxY = Math.max.apply(Math, this.colYs),
                {
                    height: this.maxY
                }
            },
            r
    }
    var i = Array.prototype.indexOf ? function (n, t) {
        return n.indexOf(t)
    }
        : function (n, t) {
        for (var u, i = 0, r = n.length; r > i; i++) if (u = n[i], u === t) return i;
        return - 1
    };
    'function' == typeof define && define.amd ? define(['outlayer',
        'get-size'], t)  : n.Masonry = t(n.Outlayer, n.getSize)
}(window), jQuery && function (n) {
    n.extend(n.fn, {
        selectBox: function (t, i) {
            var v,
                e = '',
                y = navigator.platform.match(/mac/i),
                d = function (t, i) {
                    var e,
                        v,
                        s,
                        y,
                        o,
                        l,
                        d;
                    if (navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i) || t.tagName.toLowerCase() !== 'select' || (t = n(t), t.data('selectBox-control'))) return !1;
                    var f = n('<a class="selectBox" />'),
                        g = t.attr('multiple') || parseInt(t.attr('size')) > 1,
                        nt = i || {
                        },
                        a = t.outerWidth();
                    t.css('width') == '100%' && (a = t.parent().outerWidth()),
                        f.width(a + 'px').addClass(t.attr('class')).attr('title', t.attr('title') || '').attr('tabindex', parseInt(t.attr('tabindex'))).css('display', 'inline-block').bind('focus.selectBox', function () {
                            (this !== document.activeElement && document.body !== document.activeElement && n(document.activeElement).blur(), f.hasClass('selectBox-active')) || (f.addClass('selectBox-active'), t.trigger('focus'))
                        }).bind('blur.selectBox', function () {
                            f.hasClass('selectBox-active') && (f.removeClass('selectBox-active'), t.trigger('blur'))
                        }),
                        n(window).data('selectBox-bindings') || n(window).data('selectBox-bindings', !0).bind('scroll.selectBox', r).bind('resize.selectBox', r),
                        t.attr('disabled') && f.addClass('selectBox-disabled'),
                        t.bind('click.selectBox', function (n) {
                            f.focus(),
                                n.preventDefault()
                        }),
                        g ? (e = c(t, 'inline'), f.append(e).data('selectBox-options', e).addClass('selectBox-inline selectBox-menuShowing').bind('keydown', function (n) {
                            b(t, n)
                        }).bind('keypress', function (n) {
                            k(t, n)
                        }).bind('mousedown', function (t) {
                            n(t.target).is('A.selectBox-inline') && t.preventDefault(),
                                f.hasClass('selectBox-focus') || f.focus()
                        }).insertAfter(t), t[0].style.height || (v = t.attr('size') ? parseInt(t.attr('size'))  : 5, s = f.clone().removeAttr('id').css({
                            position: 'absolute',
                            top: '-9999em'
                        }).show().appendTo('body'), s.find('.selectBox-options').html('<li><a> </a></li>'), y = parseInt(s.find('.selectBox-options A:first').html('&nbsp;').outerHeight()), s.remove(), f.height(y * v)), h(f))  : (o = n('<span class="selectBox-label" />'), l = n('<span class="selectBox-arrow" />'), o.attr('class', p(t)).text(w(t)), e = c(t, 'dropdown'), e.appendTo('BODY'), f.data('selectBox-options', e).addClass('selectBox-dropdown').append(o).append(l).bind('mousedown', function (n) {
                            f.hasClass('selectBox-menuShowing') ? r()  : (n.stopPropagation(), e.data('selectBox-down-at-x', n.screenX).data('selectBox-down-at-y', n.screenY), u(t))
                        }).bind('keydown', function (n) {
                            b(t, n)
                        }).bind('keypress', function (n) {
                            k(t, n)
                        }).bind('open', function (n, i) {
                            i && i._selectBox === !0 || u(t)
                        }).bind('close', function (n, t) {
                            t && t._selectBox === !0 || r()
                        }).insertAfter(t), h(f), d = f.width() - l.outerWidth() - parseInt(o.css('paddingLeft')) - parseInt(o.css('paddingLeft')), o.width(d)),
                        t.addClass('selectBox').data('selectBox-control', f).data('selectBox-settings', nt).hide()
                },
                c = function (t, i) {
                    var u,
                        s = function (t, i) {
                            return t.children('OPTION, OPTGROUP').each(function () {
                                if (n(this).is('OPTION')) n(this).length > 0 ? ft(n(this), i)  : i.append('<li> </li>');
                                else {
                                    var t = n('<li class="selectBox-optgroup" />');
                                    t.text(n(this).attr('label')),
                                        i.append(t),
                                        i = s(n(this), i)
                                }
                            }),
                                i
                        },
                        e,
                        c;
                    switch (i) {
                        case 'inline':
                            return u = n('<ul class="selectBox-options" />'),
                                u = s(t, u),
                                u.find('A').bind('mouseover.selectBox', function () {
                                    f(t, n(this).parent())
                                }).bind('mouseout.selectBox', function () {
                                    a(t, n(this).parent())
                                }).bind('mousedown.selectBox', function (n) {
                                    n.preventDefault(),
                                        t.selectBox('control').hasClass('selectBox-active') || t.selectBox('control').focus()
                                }).bind('mouseup.selectBox', function (i) {
                                    r(),
                                        o(t, n(this).parent(), i)
                                }),
                                h(u),
                                u;
                        case 'dropdown':
                            if (u = n('<ul class="selectBox-dropdown-menu selectBox-options" />'), u = s(t, u), u.data('selectBox-select', t).css('display', 'none').appendTo('BODY').find('A').bind('mousedown.selectBox', function (n) {
                                n.preventDefault(),
                                    n.screenX === u.data('selectBox-down-at-x') && n.screenY === u.data('selectBox-down-at-y') && (u.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y'), r())
                            }).bind('mouseup.selectBox', function (i) {
                                (i.screenX !== u.data('selectBox-down-at-x') || i.screenY !== u.data('selectBox-down-at-y')) && (u.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y'), o(t, n(this).parent()), r())
                            }).bind('mouseover.selectBox', function () {
                                f(t, n(this).parent())
                            }).bind('mouseout.selectBox', function () {
                                a(t, n(this).parent())
                            }), e = t.attr('class') || '', e !== '') {
                                e = e.split(' ');
                                for (c in e) u.addClass(e[c] + '-selectBox-dropdown-menu')
                            }
                            return h(u),
                                u
                    }
                },
                p = function (t) {
                    var i = n(t).find('OPTION:selected');
                    return ('selectBox-label ' + (i.attr('class') || '')).replace(/\s+jQuery/, '')
                },
                w = function (t) {
                    var i = n(t).find('OPTION:selected');
                    return i.text() || ' '
                },
                l = function (t) {
                    t = n(t);
                    var i = t.data('selectBox-control');
                    i && i.find('.selectBox-label').attr('class', p(t)).text(w(t))
                },
                g = function (t) {
                    var i,
                        r;
                    (t = n(t), i = t.data('selectBox-control'), i) && (r = i.data('selectBox-options'), r.remove(), i.remove(), t.removeClass('selectBox').removeData('selectBox-control').data('selectBox-control', null).removeData('selectBox-settings').data('selectBox-settings', null).show())
                },
                nt = function (t) {
                    t = n(t),
                        t.selectBox('options', t.html())
                },
                u = function (t) {
                    var c,
                        o,
                        h;
                    t = n(t);
                    var i = t.data('selectBox-control'),
                        u = t.data('selectBox-settings'),
                        e = i.data('selectBox-options');
                    if (i.hasClass('selectBox-disabled') || (r(), c = isNaN(i.css('borderBottomWidth')) ? 0 : parseInt(i.css('borderBottomWidth')), e.width(i.innerWidth()).css({
                        top: i.offset().top + i.outerHeight() - c,
                        left: i.offset().left
                    }), t.triggerHandler('beforeopen'))) return !1;
                    o = function () {
                        t.triggerHandler('open', {
                            _selectBox: !0
                        })
                    };
                    switch (u.menuTransition) {
                        case 'fade':
                            e.fadeIn(u.menuSpeed, o);
                            break;
                        case 'slide':
                            e.slideDown(u.menuSpeed, o);
                            break;
                        default:
                            e.show(u.menuSpeed, o)
                    }
                    u.menuSpeed || o(),
                        h = e.find('.selectBox-selected:first'),
                        s(t, h, !0),
                        f(t, h),
                        i.addClass('selectBox-menuShowing'),
                        n(document).bind('mousedown.selectBox', function (t) {
                            n(t.target).parents().andSelf().hasClass('selectBox-options') || r()
                        })
                },
                r = function () {
                    n('.selectBox-dropdown-menu:visible').length !== 0 && (n(document).unbind('mousedown.selectBox'), n('.selectBox-dropdown-menu').each(function () {
                        var r = n(this),
                            u = r.data('selectBox-select'),
                            f = u.data('selectBox-control'),
                            t = u.data('selectBox-settings'),
                            i;
                        if (u.triggerHandler('beforeclose')) return !1;
                        i = function () {
                            u.triggerHandler('close', {
                                _selectBox: !0
                            })
                        };
                        switch (t.menuTransition) {
                            case 'fade':
                                r.fadeOut(t.menuSpeed, i);
                                break;
                            case 'slide':
                                r.slideUp(t.menuSpeed, i);
                                break;
                            default:
                                r.hide(t.menuSpeed, i)
                        }
                        t.menuSpeed || i(),
                            f.removeClass('selectBox-menuShowing')
                    }))
                },
                o = function (t, i, r) {
                    var u,
                        s,
                        f,
                        o,
                        e;
                    return (t = n(t), i = n(i), u = t.data('selectBox-control'), s = t.data('selectBox-settings'), u.hasClass('selectBox-disabled')) ? !1 : i.length === 0 || i.hasClass('selectBox-disabled') ? !1 : (t.attr('multiple') ? r.shiftKey && u.data('selectBox-last-selected') ? (i.toggleClass('selectBox-selected'), f = i.index() > u.data('selectBox-last-selected').index() ? i.siblings().slice(u.data('selectBox-last-selected').index(), i.index())  : i.siblings().slice(i.index(), u.data('selectBox-last-selected').index()), f = f.not('.selectBox-optgroup, .selectBox-disabled'), i.hasClass('selectBox-selected') ? f.addClass('selectBox-selected')  : f.removeClass('selectBox-selected'))  : y && r.metaKey || !y && r.ctrlKey ? i.toggleClass('selectBox-selected')  : (i.siblings().removeClass('selectBox-selected'), i.addClass('selectBox-selected'))  : (i.siblings().removeClass('selectBox-selected'), i.addClass('selectBox-selected')), u.hasClass('selectBox-dropdown') && u.find('.selectBox-label').text(i.text()), o = 0, e = [
                    ], t.attr('multiple') ? u.find('.selectBox-selected A').each(function () {
                        e[o++] = n(this).attr('rel')
                    })  : e = i.find('A').attr('rel'), u.data('selectBox-last-selected', i), t.val() !== e && (t.val(e), l(t), t.trigger('change')), !0)
                },
                f = function (t, i) {
                    t = n(t),
                        i = n(i);
                    var r = t.data('selectBox-control'),
                        u = r.data('selectBox-options');
                    u.find('.selectBox-hover').removeClass('selectBox-hover'),
                        i.addClass('selectBox-hover')
                },
                a = function (t, i) {
                    t = n(t),
                        i = n(i);
                    var r = t.data('selectBox-control'),
                        u = r.data('selectBox-options');
                    u.find('.selectBox-hover').removeClass('selectBox-hover')
                },
                s = function (t, i, r) {
                    if (i && i.length !== 0) {
                        t = n(t);
                        var f = t.data('selectBox-control'),
                            e = f.data('selectBox-options'),
                            u = f.hasClass('selectBox-dropdown') ? e : e.parent(),
                            o = parseInt(i.offset().top - u.position().top),
                            s = parseInt(o + i.outerHeight());
                        r ? u.scrollTop(i.offset().top - u.offset().top + u.scrollTop() - u.height() / 2)  : (o < 0 && u.scrollTop(i.offset().top - u.offset().top + u.scrollTop()), s > u.height() && u.scrollTop(i.offset().top + i.outerHeight() - u.offset().top + u.scrollTop() - u.height()))
                    }
                },
                b = function (t, i) {
                    var h,
                        c;
                    t = n(t);
                    var v = t.data('selectBox-control'),
                        l = v.data('selectBox-options'),
                        w = t.data('selectBox-settings'),
                        y = 0,
                        p = 0;
                    if (!v.hasClass('selectBox-disabled')) switch (i.keyCode) {
                        case 8:
                            i.preventDefault(),
                                e = '';
                            break;
                        case 9:
                        case 27:
                            r(),
                                a(t);
                            break;
                        case 13:
                            v.hasClass('selectBox-menuShowing') ? (o(t, l.find('LI.selectBox-hover:first'), i), v.hasClass('selectBox-dropdown') && r())  : u(t);
                            break;
                        case 38:
                        case 37:
                            if (i.preventDefault(), v.hasClass('selectBox-menuShowing')) {
                                for (h = l.find('.selectBox-hover').prev('LI'), y = l.find('LI:not(.selectBox-optgroup)').length, p = 0; h.length === 0 || h.hasClass('selectBox-disabled') || h.hasClass('selectBox-optgroup'); ) if (h = h.prev('LI'), h.length === 0 && (h = w.loopOptions ? l.find('LI:last')  : l.find('LI:first')), ++p >= y) break;
                                f(t, h),
                                    o(t, h, i),
                                    s(t, h)
                            } else u(t);
                            break;
                        case 40:
                        case 39:
                            if (i.preventDefault(), v.hasClass('selectBox-menuShowing')) {
                                for (c = l.find('.selectBox-hover').next('LI'), y = l.find('LI:not(.selectBox-optgroup)').length, p = 0; c.length === 0 || c.hasClass('selectBox-disabled') || c.hasClass('selectBox-optgroup'); ) if (c = c.next('LI'), c.length === 0 && (c = w.loopOptions ? l.find('LI:first')  : l.find('LI:last')), ++p >= y) break;
                                f(t, c),
                                    o(t, c, i),
                                    s(t, c)
                            } else u(t)
                    }
                },
                k = function (t, i) {
                    t = n(t);
                    var r = t.data('selectBox-control'),
                        o = r.data('selectBox-options');
                    if (!r.hasClass('selectBox-disabled')) switch (i.keyCode) {
                        case 9:
                        case 27:
                        case 13:
                        case 38:
                        case 37:
                        case 40:
                        case 39:
                            break;
                        default:
                            r.hasClass('selectBox-menuShowing') || u(t),
                                i.preventDefault(),
                                clearTimeout(v),
                                e += String.fromCharCode(i.charCode || i.keyCode),
                                o.find('A').each(function () {
                                    if (n(this).text().substr(0, e.length).toLowerCase() === e.toLowerCase()) return f(t, n(this).parent()),
                                        s(t, n(this).parent()),
                                        !1
                                }),
                                v = setTimeout(function () {
                                    e = ''
                                }, 1000)
                    }
                },
                tt = function (t) {
                    t = n(t),
                        t.attr('disabled', !1);
                    var i = t.data('selectBox-control');
                    i && i.removeClass('selectBox-disabled')
                },
                it = function (t) {
                    t = n(t),
                        t.attr('disabled', !0);
                    var i = t.data('selectBox-control');
                    i && i.addClass('selectBox-disabled')
                },
                rt = function (t, i) {
                    var r,
                        u,
                        f;
                    (t = n(t), t.val(i), i = t.val(), r = t.data('selectBox-control'), r) && (u = t.data('selectBox-settings'), f = r.data('selectBox-options'), l(t), f.find('.selectBox-selected').removeClass('selectBox-selected'), f.find('A').each(function () {
                        if (typeof i == 'object') for (var t = 0; t < i.length; t++) n(this).attr('rel') == i[t] && n(this).parent().addClass('selectBox-selected');
                        else n(this).attr('rel') == i && n(this).parent().addClass('selectBox-selected')
                    }), u.change && u.change.call(t))
                },
                ut = function (t, r) {
                    var f,
                        a,
                        u,
                        e,
                        o,
                        h,
                        s;
                    t = n(t),
                        f = t.data('selectBox-control'),
                        a = t.data('selectBox-settings');
                    switch (typeof i) {
                        case 'string':
                            t.html(i);
                            break;
                        case 'object':
                            t.html('');
                            for (u in i) if (i[u] !== null) if (typeof i[u] == 'object') {
                                e = n('<optgroup label="' + u + '" />');
                                for (o in i[u]) e.append('<option value="' + o + '">' + i[u][o] + '</option>');
                                t.append(e)
                            } else h = n('<option value="' + u + '">' + i[u] + '</option>'),
                                t.append(h)
                    }
                    if (f) {
                        f.data('selectBox-options').remove(),
                            s = f.hasClass('selectBox-dropdown') ? 'dropdown' : 'inline',
                            r = c(t, s),
                            f.data('selectBox-options', r);
                        switch (s) {
                            case 'inline':
                                f.append(r);
                                break;
                            case 'dropdown':
                                l(t),
                                    n('BODY').append(r)
                        }
                    }
                },
                h = function (t) {
                    n(t).css('MozUserSelect', 'none').bind('selectstart', function (n) {
                        n.preventDefault()
                    })
                },
                ft = function (t, i) {
                    var r = n('<li />'),
                        u = n('<a />');
                    r.addClass(t.attr('class')),
                        r.data(t.data()),
                        u.attr('rel', t.val()).text(t.text()),
                        r.append(u),
                        t.attr('disabled') && r.addClass('selectBox-disabled'),
                        t.attr('selected') && r.addClass('selectBox-selected'),
                        i.append(r)
                };
            switch (t) {
                case 'control':
                    return n(this).data('selectBox-control');
                case 'settings':
                    if (!i) return n(this).data('selectBox-settings');
                    n(this).each(function () {
                        n(this).data('selectBox-settings', n.extend(!0, n(this).data('selectBox-settings'), i))
                    });
                    break;
                case 'options':
                    if (i === undefined) return n(this).data('selectBox-control').data('selectBox-options');
                    n(this).each(function () {
                        ut(this, i)
                    });
                    break;
                case 'value':
                    if (i === undefined) return n(this).val();
                    n(this).each(function () {
                        rt(this, i)
                    });
                    break;
                case 'refresh':
                    n(this).each(function () {
                        nt(this)
                    });
                    break;
                case 'enable':
                    n(this).each(function () {
                        tt(this)
                    });
                    break;
                case 'disable':
                    n(this).each(function () {
                        it(this)
                    });
                    break;
                case 'destroy':
                    n(this).each(function () {
                        g(this)
                    });
                    break;
                default:
                    n(this).each(function () {
                        d(this, t)
                    })
            }
            return n(this)
        }
    })
}(jQuery),
    function (n) {
        function o(i, r, f, o) {
            var s = {
                data: o || o === 0 || o === !1 ? o : r ? r.data : {
                },
                _wrap: r ? r._wrap : null,
                tmpl: null,
                parent: r || null,
                nodes: [
                ],
                calls: d,
                nest: g,
                wrap: nt,
                html: tt,
                update: it
            };
            return i && n.extend(s, i, {
                nodes: [
                ],
                parent: r
            }),
                f && (s.tmpl = f, s._ctnt = s._ctnt || s.tmpl(n, s), s.key = ++e, (c.length ? u : t) [e] = s),
                s
        }
        function s(t, i, u) {
            var f,
                e = u ? n.map(u, function (n) {
                    return typeof n == 'string' ? t.key ? n.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, '$1 ' + r + '="' + t.key + '" $2')  : n : s(n, t, n._ctnt)
                })  : t;
            return i ? e : (e = e.join(''), e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (t, i, r, u) {
                f = n(r).get(),
                    b(f),
                    i && (f = l(i).concat(f)),
                    u && (f = f.concat(l(u)))
            }), f ? f : l(e))
        }
        function l(t) {
            var i = document.createElement('div');
            return i.innerHTML = t,
                n.makeArray(i.childNodes)
        }
        function p(t) {
            return new Function('jQuery', '$item', 'var $=jQuery,call,__=[],$data=$item.data;with($data){__.push(\'' + n.trim(t).replace(/([\\'])/g, '\\$1').replace(/[\r\t\n]/g, ' ').replace(/\$\{([^\}]*)\}/g, '{{= $1}}').replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (t, i, r, u, f, e, o) {
                var c = n.tmpl.tag[r],
                    l,
                    s,
                    a;
                if (!c) throw 'Unknown template tag: ' + r;
                return l = c._default || [],
                    e && !/\w$/.test(f) && (f += e, e = ''),
                    f ? (f = h(f), o = o ? ',' + h(o) + ')' : e ? ')' : '', s = e ? f.indexOf('.') > - 1 ? f + h(e)  : '(' + f + ').call($item' + o : f, a = e ? s : '(typeof(' + f + ')===\'function\'?(' + f + ').call($item):(' + f + '))')  : a = s = l.$1 || 'null',
                    u = h(u),
                    '\');' + c[i ? 'close' : 'open'].split('$notnull_1').join(f ? 'typeof(' + f + ')!==\'undefined\' && (' + f + ')!=null' : 'true').split('$1a').join(a).split('$1').join(s).split('$2').join(u || l.$2 || '') + '__.push(\''
            }) + '\');}return __;')
        }
        function w(t, i) {
            t._wrap = s(t, !0, n.isArray(i) ? i : [
                v.test(i) ? i : n(i).html()
            ]).join('')
        }
        function h(n) {
            return n ? n.replace(/\\'/g, '\'').replace(/\\\\/g, '\\')  : null
        }
        function k(n) {
            var t = document.createElement('div');
            return t.appendChild(n.cloneNode(!0)),
                t.innerHTML
        }
        function b(f) {
            function p(f) {
                function p(n) {
                    n = n + a,
                        s = v[n] = v[n] || o(s, t[s.parent.key + a] || s.parent)
                }
                var y,
                    h = f,
                    c,
                    s,
                    l;
                if (l = f.getAttribute(r)) {
                    while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(y = h.getAttribute(r)));
                    y !== l && (h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(r) || 0 : 0, (s = t[l]) || (s = u[l], s = o(s, t[h] || u[h]), s.key = ++e, t[e] = s), i && p(l)),
                        f.removeAttribute(r)
                } else i && (s = n.data(f, 'tmplItem')) && (p(s.key), t[s.key] = s, h = n.data(f.parentNode, 'tmplItem'), h = h ? h.key : 0);
                if (s) {
                    for (c = s; c && c.key != h; ) c.nodes.push(f),
                        c = c.parent;
                    delete s._ctnt,
                        delete s._wrap,
                        n.data(f, 'tmplItem', s)
                }
            }
            for (var a = '_' + i, c, l, v = {
            }, h, s = 0, y = f.length; s < y; s++) if ((c = f[s]).nodeType === 1) {
                for (l = c.getElementsByTagName('*'), h = l.length - 1; h >= 0; h--) p(l[h]);
                p(c)
            }
        }
        function d(n, t, i, r) {
            if (!n) return c.pop();
            c.push({
                _: n,
                tmpl: t,
                item: this,
                data: i,
                options: r
            })
        }
        function g(t, i, r) {
            return n.tmpl(n.template(t), i, r, this)
        }
        function nt(t, i) {
            var r = t.options || {
            };
            return r.wrapped = i,
                n.tmpl(n.template(t.tmpl), t.data, r, t.item)
        }
        function tt(t, i) {
            var r = this._wrap;
            return n.map(n(n.isArray(r) ? r.join('')  : r).filter(t || '*'), function (n) {
                return i ? n.innerText || n.textContent : n.outerHTML || k(n)
            })
        }
        function it() {
            var t = this.nodes;
            n.tmpl(null, null, null, this).insertBefore(t[0]),
                n(t).remove()
        }
        var a = n.fn.domManip,
            r = '_tmplitem',
            v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
            t = {
            },
            u = {
            },
            f,
            y = {
                key: 0,
                data: {
                }
            },
            e = 0,
            i = 0,
            c = [
            ];
        n.each({
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
        }, function (r, u) {
            n.fn[r] = function (e) {
                var o = [
                    ],
                    h = n(e),
                    c,
                    s,
                    a,
                    v,
                    l = this.length === 1 && this[0].parentNode;
                if (f = t || {
                }, l && l.nodeType === 11 && l.childNodes.length === 1 && h.length === 1) h[u](this[0]),
                    o = this;
                else {
                    for (s = 0, a = h.length; s < a; s++) i = s,
                        c = (s > 0 ? this.clone(!0)  : this).get(),
                        n(h[s]) [u](c),
                        o = o.concat(c);
                    i = 0,
                        o = this.pushStack(o, r, h.selector)
                }
                return v = f,
                    f = null,
                    n.tmpl.complete(v),
                    o
            }
        }),
            n.fn.extend({
                tmpl: function (t, i, r) {
                    return n.tmpl(this[0], t, i, r)
                },
                tmplItem: function () {
                    return n.tmplItem(this[0])
                },
                template: function (t) {
                    return n.template(t, this[0])
                },
                domManip: function (r, u, e) {
                    if (r[0] && n.isArray(r[0])) {
                        for (var o = n.makeArray(arguments), s = r[0], l = s.length, h = 0, c; h < l && !(c = n.data(s[h++], 'tmplItem')); );
                        c && i && (o[2] = function (t) {
                            n.tmpl.afterManip(this, t, e)
                        }),
                            a.apply(this, o)
                    } else a.apply(this, arguments);
                    return i = 0,
                        f || n.tmpl.complete(t),
                        this
                }
            }),
            n.extend({
                tmpl: function (i, r, f, e) {
                    var h,
                        c = !e;
                    if (c) e = y,
                        i = n.template[i] || n.template(null, i),
                        u = {
                        };
                    else if (!i) return i = e.tmpl,
                        t[e.key] = e,
                        e.nodes = [
                        ],
                        e.wrapped && w(e, e.wrapped),
                        n(s(e, null, e.tmpl(n, e)));
                    return i ? (typeof r == 'function' && (r = r.call(e || {
                    })), f && f.wrapped && w(f, f.wrapped), h = n.isArray(r) ? n.map(r, function (n) {
                        return n ? o(f, e, i, n)  : null
                    })  : [
                        o(f, e, i, r)
                    ], c ? n(s(e, null, h))  : h)  : [
                    ]
                },
                tmplItem: function (t) {
                    var i;
                    for (t instanceof n && (t = t[0]); t && t.nodeType === 1 && !(i = n.data(t, 'tmplItem')) && (t = t.parentNode); );
                    return i || y
                },
                template: function (t, i) {
                    return i ? (typeof i == 'string' ? i = p(i)  : i instanceof n && (i = i[0] || {
                    }), i.nodeType && (i = n.data(i, 'tmpl') || n.data(i, 'tmpl', p(i.innerHTML))), typeof t == 'string' ? n.template[t] = i : i)  : t ? typeof t != 'string' ? n.template(null, t)  : n.template[t] || n.template(null, v.test(t) ? t : n(t))  : null
                },
                encode: function (n) {
                    return ('' + n).split('<').join('&lt;').split('>').join('&gt;').split('"').join('&#34;').split('\'').join('&#39;')
                }
            }),
            n.extend(n.tmpl, {
                tag: {
                    tmpl: {
                        _default: {
                            $2: 'null'
                        },
                        open: 'if($notnull_1){__=__.concat($item.nest($1,$2));}'
                    },
                    wrap: {
                        _default: {
                            $2: 'null'
                        },
                        open: '$item.calls(__,$1,$2);__=[];',
                        close: 'call=$item.calls();__=call._.concat($item.wrap(call,__));'
                    },
                    each: {
                        _default: {
                            $2: '$index, $value'
                        },
                        open: 'if($notnull_1){$.each($1a,function($2){with(this){',
                        close: '}});}'
                    },
                    'if': {
                        open: 'if(($notnull_1) && $1a){',
                        close: '}'
                    },
                    'else': {
                        _default: {
                            $1: 'true'
                        },
                        open: '}else if(($notnull_1) && $1a){'
                    },
                    html: {
                        open: 'if($notnull_1){__.push($1a);}'
                    },
                    '=': {
                        _default: {
                            $1: '$data'
                        },
                        open: 'if($notnull_1){__.push($.encode($1a));}'
                    },
                    '!': {
                        open: ''
                    }
                },
                complete: function () {
                    t = {
                    }
                },
                afterManip: function (t, r, u) {
                    var f = r.nodeType === 11 ? n.makeArray(r.childNodes)  : r.nodeType === 1 ? [
                        r
                    ] : [
                    ];
                    u.call(t, r),
                        b(f),
                        i++
                }
            })
    }(jQuery),
    jQuery.browser.msie && parseInt(jQuery.browser.version, 10) == 9 && jQuery('#persistent-cart-button').hide(),
    shoppingCart = {
    },
    function (n) {
        var a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            r,
            e,
            u,
            c;
        if (jQuery('#cart').length > 0) {
            jQuery.ajaxSetup({
                cache: !1
            });
            function l() {
                if (typeof pageYOffset != 'undefined') return pageYOffset;
                var t = document.body,
                    n = document.documentElement;
                return n = n.clientHeight ? n : t,
                    n.scrollTop
            }
            var t = jQuery('#cart'),
                f = jQuery('#cart-blackout'),
                o = 80,
                i = {
                },
                s = n('#cartbutton'),
                h = 'isnotempty';
            n('#cartitems-template').template('cart'),
                n(window).scroll(function () {
                    var n = l();
                    n > 82 && !t.hasClass('open') && s.hasClass(h) ? (jQuery('#persistent-cart-button').addClass('visible'), jQuery.browser.msie && parseInt(jQuery.browser.version, 10) == 9 && jQuery('#persistent-cart-button').show())  : jQuery('#persistent-cart-button').removeClass('visible')
                }),
                jQuery('body').css({
                    'overflow-x': 'visible'
                }),
                jQuery('#topMenu').css('overflow', 'visible'),
                r = function (n, i) {
                    i ? (t.removeClass('enabletransition'), t.css({
                        top: n + 'px'
                    }))  : (t.addClass('enabletransition'), t.css({
                        top: n + 'px'
                    }))
                },
                e = function (n, u, e) {
                    var s = n ? n == 'close' ? !0 : !1 : t.hasClass('open') ? !0 : !1;
                    s = i.TotalItemsInCart > 0 ? s : !0,
                        s ? (t.removeClass('open'), r( - (o + 90), u), jQuery(window).scroll(), f.fadeOut(200, function () {
                            f.hide()
                        }))  : 'ContentController' in window ? (window.location.hash = 'at-a-glance', t.addClass('open'), r(80), f.fadeIn(200))  : e ? jQuery('body, html').animate({
                            scrollTop: 0
                        }, function () {
                            t.addClass('open'),
                                r(80),
                                f.fadeIn(200)
                        })  : (jQuery('html,body').scrollTop(0), t.addClass('open'), r(80), f.fadeIn(200))
                },
                jQuery('#cartbutton, #persistent-cart-button a').click(function () {
                    if (GetSelectedEComCountry() == 'en_US') _gaq.push(['_setAllowLinker',
                        !0]),
                        _gaq.push(['_link',
                            'http://beoplay.hostedbywebstore.com/cart']);
                    else return e(null, !1, !0),
                        !1
                }),
                jQuery('.megamenu-enabled > a').add('.continue-shopping > a').add('.close-cart > a').click(function () {
                    e('close')
                }),
                r( - 99999, !0),
                t.css({
                    display: 'block'
                }),
                u = function (n) {
                    GetSelectedEComCountry() != 'en_US' && ('Swoosh' in window && Swoosh.HideLoading(), 'success' in n && !n.success || (i = n, i.LineItems || (i.LineItems = {
                        LineItem: [
                        ]
                    }), i.Pricing && (!i.Pricing || i.Pricing.OrderTotal) || (i.Pricing = {
                        OrderTotal: {
                            Currency: '',
                            Price: ''
                        }
                    }), jQuery('#cartbutton .cart, #persistent-cart-button .cart').html('cart (' + i.TotalItemsInCart + ')'), jQuery('#cart .cart-content').html(jQuery.tmpl('cart', i)), o = jQuery('#cart .cart-wrapper').height(), t.height(o), i.TotalItemsInCart == 0 ? (e('close', !1), s.removeClass(h))  : s.addClass(h)))
                },
                shoppingCart.getCart = function () {
                    var n = GetApiVersion() == 'AS' ? '/RestServices/CartService/GetCart?switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=getcart';
                    jQuery.get(n, function (n) {
                        u(n)
                    })
                },
                shoppingCart.emptyCart = function () {
                    var n = GetApiVersion() == 'AS' ? '/RestServices/CartService/EmptyCart?switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=emptycart&switchlocale=' + GetSelectedEComCountry();
                    jQuery.get(n),
                        u({
                            ID: 0,
                            LineItems: null,
                            Pricing: null,
                            ShippingMethod: null,
                            TotalItemsInCart: 0
                        })
                },
                shoppingCart.addToCart = function (n, t) {
                    var i = GetApiVersion() == 'AS' ? '/RestServices/CartService/AddProductsToCart?pid=' + n + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=addproductstocart&returnCart=1&pid=' + n;
                    return jQuery.get(i, function (i) {
                        t ? shoppingCart.checkout(n)  : (u(i), e('open'))
                    }),
                        !1
                },
                shoppingCart.remove = function (n) {
                    var t = GetApiVersion() == 'AS' ? '/RestServices/CartService/RemoveLineItem?lid=' + n + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=removelineitem&returnCart=1&lid=' + n;
                    return jQuery.get(t, u),
                        !1
                },
                c = {
                },
                shoppingCart.set = function (n, t, i) {
                    return i = parseInt(i),
                        i < 0 && (i = 0),
                        c[GetApiVersion() == 'AS' ? t : n] = i,
                        setTimeout(function () {
                            if (c[GetApiVersion() == 'AS' ? t : n] == i) {
                                var r = GetApiVersion() == 'AS' ? '/RestServices/CartService/SetQuantity?lid=' + t + '&quantity=' + i + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=setquantity&returnCart=1&pid=' + n + '&quantity=' + i;
                                jQuery.get(r, u)
                            }
                        }, 300),
                        !1
                },
                shoppingCart.delta = function (n, t) {
                    var i = jQuery(t).parent().find('input').get(0);
                    return i.value = parseInt(i.value) + n,
                        i.onchange(),
                        !1
                },
                shoppingCart.checkout = function (n) {
                    var t = GetApiVersion() == 'AS' ? '/RestServices/CartService/Checkout?switchlocale=' + GetSelectedEComCountry() + '&pid=' + n : '/~/service/DRConnect?method=checkout' + n,
                        i = function (n) {
                            var r = jQuery('#sc_buyModule'),
                                t;
                            r.prepend('<div class="nsoverlay" style="width: 100%; height:100%; position:fixed; top: 0; left: 0;z-index: 1001;"></div>'),
                                r.prepend('<div class="dimmed" style="width: 100%; height:100%; background-color:  black;position:fixed; top: 0; left: 0;z-index: 1001; opacity: 0.6;"></div>');
                            var u = r.find('.nsoverlay'),
                                f = '<a href=\'' + n + '\' alt=\'\' style=\'color:#666666 !important\'>No thank you, proceed to checkout</a>',
                                i = u.prepend('<div class="nspopup" style="opacitybox-shadow: 0 0 5px rgba(0,0,0,0.4);border: 1px solid #d9d9d9; border-radius: 20px;position: relative;background-color:#f2f2f2;margin: 0 auto;margin-top: 50px;width: 870px; height:550px; background-color:  #f2f2f2;z-index: 1002;"></div>');
                            i.find('.nspopup').prepend('<div class=\'nsoverlayInner\'style=\'margin: 0 auto; overflow:hidden;\'></div>'),
                                i.find('.nspopup').prepend('<div class=\'closebutton\' style=\'position:absolute;left:810px;padding: 15px 0 0 0\'><img src=\'/resources/AlphaSolutions/img/closebutton.png\' alt=\'\'\'></div>'),
                                t = i.find('.nsoverlayInner'),
                                t.css('width', 850),
                                t.css('height', 500),
                                t.append('<div class=\'nstop\' style=\'height:420px; padding: 30px 0 0 30px;\'><h1 class=\'nsheader\' style=\'color: #666666; font: 39px/1em GothamThin;text-transform: uppercase;margin-bottom: .8em;letter-spacing: .035em;\'></h1><div class=\'nsbread\' style=\'color: #666666; line-height: 18px;font-family: ProximaRegular; font-size:13px;height:50px;\'></div><div style=\'text-align: center;\'><img src=\'/~/media/HTML%20pages/Spot%20feature/A9_nordicsky_offer.ashx\' class=\'imageDiv\' style=\'height: 273px; width: auto;\'></img></div></div> '),
                                t.find('.nsheader').text('Add free Nordic Sky Accessory Pack'),
                                t.find('.nsbread').html('You have chosen BeoPlay A9. If you order now, you get a free Nordic Sky Accessory Pack.<br />Choose between three different Nordic Sky variants. Estimated retail value is € 199, $ 249.'),
                                t.append('<div class=\'nsbot\'><div class=\'nsbotleft\' style=\'margin-top: 12px;color:#666666;float:left;padding-left: 190px\'></div><div class=\'nsbotright\' style=\'float:left;padding:0 0 0 30px;\'></div></div> '),
                                t.find('.nsbotleft').append(f),
                                t.find('.nsbotright').append('<div class=\'buymodule-buy-button\' style=\'float: right;\'><a href=\'http://www.beoplay.com/products/beoplaya9-nordic-sky#buy\' id=\'buy-button\' class=\'link-button\' style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><span style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><em class=\'icon-buy\'><img src=\'/resources/sbv-custom/img/linkbuttons/icons.png\' alt=\'\'></em><b>ADD FREE NORDIC SKY</b></span></a></div>');
                            i.find('.closebutton').on('click', function () {
                                location.href = n
                            })
                        },
                        r = function (n) {
                            var r = jQuery('#sc_buyModule'),
                                t;
                            r.prepend('<div class="nsoverlay" style="width: 100%; height:100%; position:fixed; top: 0; left: 0;z-index: 1001;"></div>'),
                                r.prepend('<div class="dimmed" style="width: 100%; height:100%; background-color:  black;position:fixed; top: 0; left: 0;z-index: 1001; opacity: 0.6;"></div>');
                            var u = r.find('.nsoverlay'),
                                f = n + '&item=1605907',
                                e = n + '&item=1605967',
                                o = n + '&item=1605950',
                                i = u.prepend('<div class="nspopup" style="opacitybox-shadow: 0 0 5px rgba(0,0,0,0.4);border: 1px solid #d9d9d9; border-radius: 20px;position: relative;background-color:#f2f2f2;margin: 0 auto;margin-top: 50px;width: 870px; height:550px; background-color:  #f2f2f2;z-index: 1002;"></div>');
                            i.find('.nspopup').prepend('<div class=\'nsoverlayInner\'style=\'margin: 0 auto; overflow:hidden;\'></div>'),
                                i.find('.nspopup').prepend('<div class=\'closebutton\' style=\'position:absolute;left:810px;padding: 15px 0 0 0\'><img src=\'/resources/AlphaSolutions/img/closebutton.png\' alt=\'\'\'></div>'),
                                t = i.find('.nsoverlayInner'),
                                t.css('width', 850),
                                t.css('height', 550),
                                t.append('<div class=\'nstop\' style=\'height:420px; padding: 30px 0 0 30px;\'><h1 class=\'nsheader\' style=\'color: #666666; font: 39px/1em GothamThin;text-transform: uppercase;margin-bottom: .8em;letter-spacing: .035em;\'></h1><div class=\'nsbread\' style=\'color: #666666; line-height: 18px;font-family: ProximaRegular; font-size:13px;height:50px;\'></div><div style=\'text-align: center;\'><img src=\'/~/media/HTML%20pages/Spot%20feature/A9_nordicsky_offer.ashx\' class=\'imageDiv\' style=\'height: 273px; width: auto;\'></img></div></div> '),
                                t.find('.nsheader').text('Add free Nordic Sky Accessory Pack'),
                                t.find('.nsbread').html('You have chosen BeoPlay A9. If you order now, you get a free Nordic Sky Accessory Pack.<br />Choose between three different Nordic Sky variants. Estimated retail value is $ 249.'),
                                t.append('<div class=\'nsbot\'><div class=\'nsbotbuttons\' style=\'color:#666666; text-align: center; clear:both;\'></div><div class=\'nsbotright\' style=\'margin-top: 12px;float:left;padding:0 0 0 30px;\'></div></div> '),
                                t.find('.nsbotbuttons').append('<div class=\'buymodule-buy-button buttonAdd1\' style=\'display: inline-block; margin-right: 15px; margin-left: 20px;\'><a href=\'javascript:void(0)\' id=\'buy-button\' class=\'link-button\' style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><span style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><em class=\'icon-buy\'><img src=\'/resources/sbv-custom/img/linkbuttons/icons.png\' alt=\'\'></em><b>ADD TO CART</b></span></a></div>'),
                                t.find('.nsbotbuttons').append('<div class=\'buymodule-buy-button buttonAdd2\' style=\'display: inline-block; margin-right: 15px;\'><a href=\'javascript:void(0)\' id=\'buy-button\' class=\'link-button\' style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><span style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><em class=\'icon-buy\'><img src=\'/resources/sbv-custom/img/linkbuttons/icons.png\' alt=\'\'></em><b>ADD TO CART</b></span></a></div>'),
                                t.find('.nsbotbuttons').append('<div class=\'buymodule-buy-button buttonAdd3\' style=\'display: inline-block;\'><a href=\'javascript:void(0)\' id=\'buy-button\' class=\'link-button\' style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><span style=\'background-images: url(/resources/sbv-custom/img/linkbuttons/darkgrey.png) !important;\'><em class=\'icon-buy\'><img src=\'/resources/sbv-custom/img/linkbuttons/icons.png\' alt=\'\'></em><b>ADD TO CART</b></span></a></div>'),
                                t.find('.nsbotright').append('<a class=\'button2\' href=\'javascript:void(0)\' alt=\'\' style=\'color:#666666 !important\'>No thank you, proceed to checkout</a>');
                            i.find('.closebutton').on('click', function () {
                                _gaq.push(['_setAllowLinker',
                                    !0]),
                                    _gaq.push(['_link',
                                        n])
                            });
                            i.find('.buttonAdd1').on('click', function () {
                                _gaq.push(['_setAllowLinker',
                                    !0]),
                                    _gaq.push(['_link',
                                        f])
                            });
                            i.find('.buttonAdd2').on('click', function () {
                                _gaq.push(['_setAllowLinker',
                                    !0]),
                                    _gaq.push(['_link',
                                        e])
                            });
                            i.find('.buttonAdd3').on('click', function () {
                                _gaq.push(['_setAllowLinker',
                                    !0]),
                                    _gaq.push(['_link',
                                        o])
                            });
                            i.find('.button2').on('click', function () {
                                _gaq.push(['_setAllowLinker',
                                    !0]),
                                    _gaq.push(['_link',
                                        n])
                            })
                        };
                    return jQuery(window.location.pathname.split('/')).last() [0].toLowerCase() == 'beoplaya9' && typeof n != 'undefined' ? (jQuery.get(t, function (n) {
                        var t;
                        n.checkout && (n.checkout.lastIndexOf('http', 0) === 0 ? GetSelectedEComCountry() == 'en_US' ? r(n.checkout)  : (t = window.location.protocol + '//' + window.location.hostname + (n.checkout.indexOf('/', 0) === 0 ? '' : '/') + n.checkout, i(t))  : (t = window.location.protocol + '//' + window.location.hostname + (n.checkout.indexOf('/', 0) === 0 ? '' : '/') + n.checkout, GetSelectedEComCountry() == 'en_US' ? r(t)  : i(t)))
                    }), !1)  : (jQuery.get(t, function (n) {
                        if (n.checkout) if (n.checkout.lastIndexOf('http', 0) === 0) GetSelectedEComCountry() == 'en_US' ? (_gaq.push(['_setAllowLinker',
                            !0]), _gaq.push(['_link',
                            n.checkout]))  : location.href = n.checkout;
                        else {
                            var t = window.location.protocol + '//' + window.location.hostname + (n.checkout.indexOf('/', 0) === 0 ? '' : '/') + n.checkout;
                            GetSelectedEComCountry() == 'en_US' ? (_gaq.push(['_setAllowLinker',
                                !0]), _gaq.push(['_link',
                                t]))  : location.href = t
                        }
                    }), !1)
                },
                    'ContentController' in window ? jQuery(document).bind('onValtechMegaFooterAppended', function () {
                jQuery('#sc_megaFooter').parent().css('background-color', '#f1f1f1'),
                    jQuery('.megafooter-content li:last-child').addClass('last'),
                    jQuery('.global-megafooter-country select').selectBox(),
                    InitCountrySelectorMegaFooter(),
                    shoppingCart.getCart()
            })  : (jQuery('#sc_megaFooter').parent().css('background-color', '#f1f1f1'), jQuery('.megafooter-content li:last-child').addClass('last'), jQuery('.global-megafooter-country select').selectBox(), InitCountrySelectorMegaFooter(), shoppingCart.getCart())
        }
    }(jQuery),
    jQuery('.hm-page #topMenu').css({
        'z-index': 18000,
        height: '81px'
    }),
    jQuery(window).load(function () {
        ToastMegaMenuInit()
    }),
    clickEventType = document.ontouchstart !== null ? 'click' : 'touchstart',
    jQuery.ajaxSetup({
        cache: !1
    }),
    jQuery(document).ready(function () {
        typeof buy_productDefinitions != 'undefined';
        jQuery('body').on('click', '#smartButtons a', function (n) {
            if (n.currentTarget.href) {
                n.preventDefault();
                var t = window.location.pathname.split('/'),
                    i = window.location.hash.replace('#', ''),
                    r = t[t.length - 1],
                    u = r + '/' + i,
                    f = n.target.innerText,
                    e = n.currentTarget.href;
                _gaq.push(['_trackEvent',
                    u,
                    'Smartpage Click',
                    f]),
                    setTimeout('document.location = "' + e + '"', 100)
            }
        });
        jQuery('body').on('click', '#A9NotifyLink', function (n) {
            n.preventDefault(),
                window.location = 'http://beoplay.com/buynow/a9'
        })
    }),
    jQuery(document).bind('onValtechAtAGlanceAppended', function () {
        IOwnThisSmartPage(),
            document.createEvent ? (evt = document.createEvent('Event'), evt.initEvent('atAGlanceReady', !0, !0), document.dispatchEvent(evt))  : document.createEventObject && document.documentElement.atAGlanceReady++
    }),
    buyModuleInitialized = 0,
    jQuery(document).bind('onValtechBuyAppended', function () {
        jQuery('#sc_buyModule').parent().css('background-color', '#f1f1f1'),
            jQuery('.buymodule-usp li').length == 0 && jQuery('.buymodule-usp').css('display', 'none'),
            jQuery('.buymodule-bullets li').length == 0 && jQuery('.buymodule-bullets').css('display', 'none'),
            jQuery('#standardBuyModule').length ? BuyModule()  : jQuery('#a9BuyModule').length ? BuyModuleA9()  : jQuery('#v1BuyModule').length ? BuyModuleV1()  : jQuery('#multipleBuyModule').length && MultipleBuyModule(),
            document.createEvent ? (evt = document.createEvent('Event'), evt.initEvent('buyModuleReady', !0, !0), document.dispatchEvent(evt))  : document.createEventObject && document.documentElement.buyModuleReady++
    }),
    BuyModule = function () {
        function r() {
            var e,
                o,
                i,
                t;
            if (buy_productDefinitions.Definitions.length > 0) {
                for (e = jQuery('.standardBuyModule .buymodule-color ul'), e.html(''), o = !1, i = 0; i < buy_productDefinitions.Definitions.length; i++) t = buy_productDefinitions.Definitions[i],
                    (GetSelectedEComCountry() == buy_otherLocale && f(t, buy_defaultLocale) || t.LocaleRestriction == null || f(t, GetSelectedEComCountry())) && (o = !0, BuyModuleUI.CreateVariant(e, t.ProductID, t.ProductVariantGraphic, t.ProductVariantText, u));
                if (o) n == '' || jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + n + '\']').length == 0 ? u(jQuery('.standardBuyModule .buymodule-color li').first().data('id'))  : u(n);
                else if (GetSelectedEComCountry() != buy_defaultLocale) {
                    jQuery('form').data('switchedLocale', buy_defaultLocale),
                        r();
                    return
                }
            }
        }
        function u(t) {
            var i = c(t),
                u;
            i != null && (n != i.ProductID && BuyModuleUI.LoadImage(i.ProductImage), n = i.ProductID, jQuery('.standardBuyModule .buymodule-color li').removeClass('selected'), jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + t + '\']').addClass('selected'), BuyModuleUI.FadePriceOut(), GetSelectedEComCountry() != buy_otherLocale ? h(i.ProductID, function (n) {
                if (n.Products && n.Products.length > 0) {
                    n.Products[0].DisplayCurrency && (jQuery('.standardBuyModule .buymodule-buy-priceinfo-currency').html(n.Products[0].DisplayCurrency), jQuery('.standardBuyModule .before .currency').html(n.Products[0].DisplayCurrency));
                    var t = BuyModuleUI.FormatPrice(n.Products[0].SalePrice),
                        i = BuyModuleUI.FormatPrice(n.Products[0].BeforePrice);
                    n.Products[0].InStock == undefined || n.Products[0].InStock != !1 || IsSelectedCountryRedirect() || BuyModuleUI.OutOfStock(),
                        BuyModuleUI.FadePriceIn(t, i, n.Products[0].BeforePrice > n.Products[0].SalePrice)
                } else if (!IsSelectedCountryRedirect() && GetSelectedEComCountry() != buy_defaultLocale) {
                    jQuery('form').data('switchedLocale', buy_defaultLocale),
                        r();
                    return
                }
            })  : BuyModuleUI.FadePriceIn(0, 0, !1), u = 'Buy', buyModuleBuyText != null && (u = buyModuleBuyText), e() ? BuyModuleUI.ButtonArea(!1, 'left', 'Notify me')  : IsSelectedCountryRedirect() ? BuyModuleUI.ButtonArea(!1, 'left', u)  : IsSelectedCountryFindStore() ? BuyModuleUI.ButtonArea(!1, 'left', 'Find store')  : o() ? BuyModuleUI.ButtonArea(!1, 'left', 'Preorder')  : l() ? BuyModuleUI.NotAvailableInCountry()  : BuyModuleUI.ButtonArea(!0, 'right', u))
        }
        function s(i) {
            if (e()) window.open(t().NotifyMeURL + '?sku=' + i);
            else if (IsSelectedCountryRedirect()) window.location = buy_productDefinitions.RedirectURL;
            else if (IsSelectedCountryFindStore()) window.location = '/FindStore';
            else if (o()) window.location = t().PreOrderBase.replace('%locale%', GetSelectedEComCountry()).replace('%pid%', n);
            else if (jQuery('#cart').length > 0) shoppingCart.addToCart(n, !0);
            else {
                Swoosh.ShowLoading();
                var r = GetApiVersion() == 'AS' ? '/RestServices/CartService/DirectBuy&pid=' + i + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=directbuy&pid=' + i + '&switchlocale=' + GetSelectedEComCountry();
                jQuery.getJSON(r, function (n) {
                    n.checkout && (window.location = n.checkout)
                })
            }
        }
        function h(n, t) {
            i && i.abort();
            var r = GetApiVersion() == 'AS' ? '/RestServices/ProductService/GetProductDetails?pid=' + n + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=getproductdetails&pid=' + n + '&switchlocale=' + GetSelectedEComCountry();
            i = jQuery.getJSON(r, function (n) {
                t(n)
            })
        }
        function c(n) {
            for (var t = 0; t < buy_productDefinitions.Definitions.length; t++) if (buy_productDefinitions.Definitions[t].ProductID == n) return buy_productDefinitions.Definitions[t];
            return null
        }
        function t() {
            if (n != '') for (var t = 0; t < buy_productDefinitions.Definitions.length; t++) if (buy_productDefinitions.Definitions[t].ProductID == n) return buy_productDefinitions.Definitions[t]
        }
        function f(n, t) {
            return n.LocaleRestriction == null ? !0 : jQuery.inArray(t, n.LocaleRestriction) > - 1
        }
        function e() {
            var n = t().NotifyMeLocale;
            return n != null && jQuery.inArray(GetSelectedEComCountry(), n) > - 1
        }
        function o() {
            var n = t().PreOrderLocale;
            return n != null && jQuery.inArray(GetSelectedEComCountry(), n) > - 1
        }
        function l() {
            var n = t().NotAvailableInCountry;
            return n != null && jQuery.inArray(GetSelectedEComCountry(), n) > - 1
        }
        var n = '',
            i;
        BuyModuleUI.Resize(),
            r(),
            BuyModuleUI.Resize(),
            jQuery('.buymodule-offer .buymodule-offer-close').bind(clickEventType, function () {
                jQuery(this).parent().remove(),
                    BuyModuleUI.CenterImage()
            }),
            jQuery('.buymodule-buy #buy-button').click(function () {
                jQuery(this).parent().hasClass('outofstock') || s(n)
            })
    },
    Array.prototype.equals = function (n, t) {
        if (!n || (arguments.length == 1 && (t = !0), this.length != n.length)) return !1;
        for (var i = 0; i < this.length; i++) if (this[i] instanceof Array && n[i] instanceof Array) {
            if (!this[i].equals(n[i], t)) return !1
        } else {
            if (t && this[i] != n[i]) return !1;
            if (!t) return this.sort().equals(n.sort(), !0)
        }
        return !0
    };
var MultipleBuyModule = function () {
        function r() {
            var h,
                f,
                o,
                c,
                s,
                i,
                t;
            if (buy_productDefinitions.Products.length > 0) {
                for (jQuery('.standardBuyModule .buymodule-color').html(''), h = !1, t = 0; t < buy_productDefinitions.Products.length; t++) for (f = buy_productDefinitions.Products[t], o = jQuery('<div class=\'buymodule-section\'>').appendTo('.standardBuyModule .buymodule-color'), o.append('<strong>' + f.Title + '</strong>'), c = jQuery('<ul>').appendTo(o), o.append('<div style=\'clear:both;\'></div>'), s = 0; s < f.Product.Definitions.length; s++) i = f.Product.Definitions[s],
                    (GetSelectedEComCountry() == buy_otherLocale && e(i, buy_defaultLocale) || i.LocaleRestriction == null || e(i, GetSelectedEComCountry())) && (h = !0, BuyModuleUI.CreateVariant(c, i.ProductID, i.ProductVariantGraphic, i.ProductVariantText, u));
                if (h) if (n.length == 0 || jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + n[0] + '\']').length == 0) u(jQuery('.standardBuyModule .buymodule-color li').first().data('id'));
                else for (t = 0; t < n.length; ++t) u(n[t]);
                else if (GetSelectedEComCountry() != buy_defaultLocale) {
                    jQuery('form').data('switchedLocale', buy_defaultLocale),
                        r();
                    return
                }
            }
        }
        function h() {
            var t,
                n;
            for (this.inStock = !0, this.salesPrice = 0, this.beforePrice = 0, t = 0; t < arguments.length; ++t) n = arguments[t],
                this.inStock = this.inStock && !(n.InStock != undefined && n.InStock == !1 && !IsSelectedCountryRedirect()),
                this.salesPrice += n.SalePrice,
                this.beforePrice += n.BeforePrice
        }
        function u(t) {
            var e,
                u,
                i,
                c,
                p,
                y;
            if (n.indexOf(t) >= 0 && (jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + t + '\']').removeClass('selected'), u = jQuery('.standardBuyModule .buymodule-color li.selected'), u.length > 0 && (t = u[0].getAttribute('data-id'))), e = f(t), e != null) {
                for (jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + t + '\']').parent().children().removeClass('selected'), u = jQuery('.standardBuyModule .buymodule-color li.selected'), i = [
                ], i.push(e.ProductID), c = 0; c < u.length; ++c) i.push(u[c].getAttribute('data-id'));
                v(i) && (i = [
                    e.ProductID
                ], jQuery('.standardBuyModule .buymodule-color li').removeClass('selected')),
                    jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + t + '\']').addClass('selected'),
                    i.equals(n, !1) || (p = a(i), p == null ? BuyModuleUI.LoadImage(e.ProductImage)  : BuyModuleUI.LoadImage(p)),
                    n = i,
                    BuyModuleUI.FadePriceOut(),
                    l(i, function (n) {
                        var t,
                            i,
                            u;
                        if (n.Products && n.Products.length > 0) n.Products[0].DisplayCurrency && (jQuery('.standardBuyModule .buymodule-buy-priceinfo-currency').html(n.Products[0].DisplayCurrency), jQuery('.standardBuyModule .before .currency').html(n.Products[0].DisplayCurrency)),
                            t = {
                            },
                            h.apply(t, n.Products),
                            t.inStock || BuyModuleUI.OutOfStock(),
                            i = BuyModuleUI.FormatPrice(t.salesPrice),
                            u = BuyModuleUI.FormatPrice(t.beforePrice),
                            BuyModuleUI.FadePriceIn(i, u, t.beforePrice > t.salesPrice);
                        else if (!IsSelectedCountryRedirect() && GetSelectedEComCountry() != buy_defaultLocale) {
                            jQuery('form').data('switchedLocale', buy_defaultLocale),
                                r();
                            return
                        }
                    }),
                    y = 'Buy',
                    buyModuleBuyText != null && (y = buyModuleBuyText),
                    o() ? BuyModuleUI.ButtonArea(!1, 'left', 'Notify me')  : IsSelectedCountryRedirect() ? BuyModuleUI.ButtonArea(!1, 'left', y)  : IsSelectedCountryFindStore() ? BuyModuleUI.ButtonArea(!1, 'left', 'Find store')  : s() ? BuyModuleUI.ButtonArea(!1, 'left', 'Preorder')  : BuyModuleUI.ButtonArea(!0, 'right', y)
            }
        }
        function c(i) {
            if (o()) window.open(t().NotifyMeURL);
            else if (!p()) if (IsSelectedCountryRedirect()) window.location = 'RedirectURL' in buy_productDefinitions ? buy_productDefinitions.RedirectURL : buy_productDefinitions.Products[0].Product.RedirectURL;
            else if (IsSelectedCountryFindStore()) window.location = '/FindStore';
            else if (s()) window.location = y().PreOrderBase.replace('%locale%', GetSelectedEComCountry()).replace('%pid%', i[0]);
            else if (jQuery('#cart').length > 0) shoppingCart.addToCart(n.join(), !0);
            else {
                Swoosh.ShowLoading();
                var r = GetApiVersion() == 'AS' ? '/RestServices/CartService/DirectBuy?pid=' + i.join() + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=directbuy&pid=' + i[0] + '&switchlocale=' + GetSelectedEComCountry();
                jQuery.getJSON(r, function (n) {
                    n.checkout && (window.location = n.checkout)
                })
            }
        }
        function l(n, t) {
            i && i.abort();
            var r = GetApiVersion() == 'AS' ? '/RestServices/ProductService/GetProductsDetails?pid=' + n.join() + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=getproductdetails&pid=' + n[0] + '&switchlocale=' + GetSelectedEComCountry();
            i = jQuery.getJSON(r, function (n) {
                t(n)
            })
        }
        function a(n) {
            if (buy_productDefinitions.BundleImages === null) return null;
            for (var t = 0; t < buy_productDefinitions.BundleImages.length; t++) if (buy_productDefinitions.BundleImages[t].ProductCodes.equals(n, !1)) return buy_productDefinitions.BundleImages[t].BundleImage;
            return null
        }
        function f(n) {
            for (var i, t = 0; t < buy_productDefinitions.Products.length; t++) for (i = 0; i < buy_productDefinitions.Products[t].Product.Definitions.length; i++) if (buy_productDefinitions.Products[t].Product.Definitions[i].ProductID == n) return buy_productDefinitions.Products[t].Product.Definitions[i];
            return null
        }
        function v(n) {
            for (var i, t = 0; t < buy_productDefinitions.Products.length; t++) for (i = 0; i < buy_productDefinitions.Products[t].Product.Definitions.length; i++) if (n.indexOf(buy_productDefinitions.Products[t].Product.Definitions[i].ProductID) > - 1 && buy_productDefinitions.Products[t].MutualExclusive) return !0;
            return !1
        }
        function y() {
            if (n.length > 0) return f(n[0])
        }
        function t() {
            var t = {
                    NotifyMeLocale: [
                    ],
                    OutOfStock: [
                    ],
                    PreOrderLocale: [
                    ],
                    NotifyMeURL: ''
                },
                r,
                i;
            if (n.length > 0) for (r = 0; r < n.length; ++r) i = f(n[0]),
                t.NotifyMeLocale.push.apply(t.NotifyMeLocale, i.NotifyMeLocale),
                t.OutOfStock.push.apply(t.OutOfStock, i.OutOfStock),
                t.PreOrderLocale.push.apply(t.PreOrderLocale, i.PreOrderLocale),
                i.NotifyMeURL != '' && (t.NotifyMeURL = i.NotifyMeURL);
            return t
        }
        function e(n, t) {
            return n.LocaleRestriction == null ? !0 : jQuery.inArray(t, n.LocaleRestriction) > - 1
        }
        function o() {
            var n = t().NotifyMeLocale;
            return n != null && jQuery.inArray(GetSelectedEComCountry(), n) > - 1
        }
        function p() {
            var n = t(),
                r,
                i;
            if (n && n.OutOfStock) for (r = GetSelectedEComCountry(), i = 0; i < n.OutOfStock.length; i++) if (n.OutOfStock[i] == r) return !0;
            return !1
        }
        function s() {
            var n = t().PreOrderLocale;
            return n != null && jQuery.inArray(GetSelectedEComCountry(), n) > - 1
        }
        var n = [
            ],
            i;
        BuyModuleUI.Resize(),
            r(),
            BuyModuleUI.Resize(),
            jQuery('.buymodule-offer .buymodule-offer-close').bind(clickEventType, function () {
                jQuery(this).parent().remove(),
                    BuyModuleUI.CenterImage()
            }),
            jQuery('.buymodule-buy #buy-button').click(function () {
                jQuery(this).parent().hasClass('outofstock') || c(n)
            }),
            Array.prototype.indexOf || (Array.prototype.indexOf = function (n, t) {
            for (var i = t || 0, r = this.length; i < r; i++) if (this[i] === n) return i;
            return - 1
        })
    },
    BuyModuleA9 = function () {
        function y() {
            var s,
                h,
                o,
                f,
                u,
                c,
                a,
                v;
            jQuery('.standardBuyModule .buymodule-color').html(''),
                s = !1;
            for (u in buy_productDefinitions) if (buy_productDefinitions[u] && buy_productDefinitions[u].Definitions && buy_productDefinitions[u].Definitions.length > 0 && n[u]) if (n[u].title == '') {
                for (o = 0; o < buy_productDefinitions[u].Definitions.length; o++) if (f = buy_productDefinitions[u].Definitions[o], GetSelectedEComCountry() == buy_otherLocale && r(f, buy_defaultLocale) || f.LocaleRestriction == null || r(f, GetSelectedEComCountry())) {
                    l = f.ProductID;
                    break
                }
            } else {
                for (jQuery('<strong>' + n[u].title + '</strong>').appendTo('.standardBuyModule .buymodule-color'), h = jQuery('<ul>').attr('data-key', u).appendTo('.standardBuyModule .buymodule-color'), o = 0; o < buy_productDefinitions[u].Definitions.length; o++) f = buy_productDefinitions[u].Definitions[o],
                    (GetSelectedEComCountry() == buy_otherLocale && r(f, buy_defaultLocale) || f.LocaleRestriction == null || r(f, GetSelectedEComCountry())) && (s = !0, BuyModuleUI.CreateVariant(h, f.ProductID, f.ProductVariantGraphic, f.ProductVariantText, i));
                jQuery('<div>').css('clear', 'both').appendTo('.standardBuyModule .buymodule-color')
            }
            for (u in n) c = jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + n[u].lastSelectedId + '\']'),
                    c.length == 0 ? (a = jQuery('.standardBuyModule .buymodule-color ul[data-key=\'' + u + '\'] li:first-child'), i(a.data('id')))  : i(n[u].lastSelectedId);
            v = '/RestServices/ProductService/GetProductDetails?pid=' + l + '&switchlocale=' + GetSelectedEComCountry(),
                jQuery.getJSON(v, function (r) {
                    var u,
                        f,
                        o,
                        h;
                    if (t = r, s) {
                        for (t.Products.length == 0 && console.log('No base unit in response'), r.Products[0].InStock != undefined && r.Products[0].InStock == !1 && (e = r.Products[0].InStock), n.BaseUnit.price = t.Products[0].SalePrice, n.BaseUnit.beforePrice = t.Products[0].BeforePrice, n.BaseUnit.groupid = t.Products[0].ID, u = 0; u < t.POP.length; u++) t.POP[u].ID == 0 ? n.CoverVariants.groupid = t.POP[u].ID : t.POP[u].Name == 'BeoPlay A9 Configurator' && (n.LegVariants.groupid = t.POP[u].ID);
                        for (f in n) n[f].title != '' && (o = jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + n[f].lastSelectedId + '\']'), o.length == 0 ? (h = jQuery('.standardBuyModule .buymodule-color ul[data-key=\'' + f + '\'] li:first-child'), i(h.data('id')))  : i(n[f].lastSelectedId))
                    } else {
                        GetSelectedEComCountry() != buy_otherLocale && jQuery('.MasterLocaleSelector').val(buy_otherLocale).change();
                        return
                    }
                })
        }
        function i(i) {
            var y = s(i),
                r,
                h,
                l,
                b,
                g,
                nt,
                p;
            if (y != null) {
                var k = jQuery('.standardBuyModule .buymodule-color li[data-id=\'' + i + '\']'),
                    d = k.parent('ul'),
                    f = d.data('key');
                if (n[f].image = y.ProductImage, f == 'CoverVariants' && (n[f].alternativeImage = y.ProductAlternativeImage), n[f].lastSelectedId = y.ProductID, u != y.ProductID && (n.LegVariants.lastSelectedId == '260072700' || n.LegVariants.lastSelectedId == '1210800' ? n.CoverVariants.alternativeImage != null ? BuyModuleUIA9.LoadImage([n.LegVariants.image,
                    n.CoverVariants.alternativeImage])  : BuyModuleUIA9.LoadImage([n.LegVariants.image])  : BuyModuleUIA9.LoadImage(['/resources/sbv-custom/img/buymodule/special/product-front-shadow.png',
                    n.CoverVariants.image,
                    n.LegVariants.image])), jQuery('.a9shadow').remove(), d.find('li').removeClass('selected'), k.addClass('selected'), t != null) {
                    r = w(i),
                            f == 'CoverVariants' ? r != null && (o = r.InStock)  : r != null && (c = r.InStock),
                        jQuery('.buymodule-buy-priceinfo-currency').html(r.Price.DisplayCurrency),
                        jQuery('.standardBuyModule .before .currency').html(r.Price.DisplayCurrency),
                            r.DisplayName != 'White' ? (n[f].price = r.Price.SalePrice, n[f].beforePrice = r.Price.BeforePrice)  : (o = e, n[f].price = 0, n[f].beforePrice = 0),
                        h = 0,
                        l = 0;
                    for (b in n) h += n[b].price * 100,
                        l += n[b].beforePrice * 100;
                    h = h / 100,
                        l = l / 100,
                        g = BuyModuleUI.FormatPrice(h.toString()),
                        nt = BuyModuleUI.FormatPrice(l.toString()),
                        BuyModuleUI.FadePriceIn(g, nt, l > h)
                }
                p = 'Buy',
                    buyModuleBuyText != null && (p = buyModuleBuyText),
                    a() ? BuyModuleUI.ButtonArea(!1, 'left', 'Notify me')  : IsSelectedCountryRedirect() ? BuyModuleUI.ButtonArea(!1, 'left', p)  : IsSelectedCountryFindStore() ? BuyModuleUI.ButtonArea(!1, 'left', 'Find store')  : v() ? BuyModuleUI.ButtonArea(!1, 'left', 'Preorder')  : BuyModuleUI.ButtonArea(!0, 'right', p),
                    e != !1 && o && c || IsSelectedCountryRedirect() || BuyModuleUI.OutOfStock()
            }
        }
        function p(t) {
            var i,
                r;
            a() ? window.open(s(t).NotifyMeURL)  : b() || (IsSelectedCountryRedirect() ? window.location = buy_productDefinitions.BaseUnit.RedirectURL : IsSelectedCountryFindStore() ? window.location = '/FindStore' : v() ? window.location = s(t).PreOrderBase.replace('%locale%', GetSelectedEComCountry()).replace('%pid%', u)  : (i = n.BaseUnit.groupid + ',', n.CoverVariants.price > 0 && (i += n.CoverVariants.lastSelectedId + '|' + n.CoverVariants.groupid + ','), i += n.LegVariants.lastSelectedId + '|' + n.LegVariants.groupid, jQuery('#cart').length > 0 ? shoppingCart.addToCart(i, !0)  : (Swoosh.ShowLoading(), r = GetApiVersion() == 'AS' ? '/RestServices/CartService/DirectBuy?pid=' + i + '&switchlocale=' + GetSelectedEComCountry()  : '/~/service/DRConnect?method=directbuy&pid=' + i + '&switchlocale=' + GetSelectedEComCountry(), jQuery.getJSON(r, function (n) {
                n.checkout && (window.location = n.checkout)
            }))))
        }
        function s(n) {
            var t,
                i;
            for (t in buy_productDefinitions) if (buy_productDefinitions[t] && buy_productDefinitions[t].Definitions) for (i = 0; i < buy_productDefinitions[t].Definitions.length; i++) if (buy_productDefinitions[t].Definitions[i].ProductID == n) return buy_productDefinitions[t].Definitions[i];
            return null
        }
        function w(n) {
            var i,
                r;
            if (t.Products) for (i = 0; i < t.Products.length; i++) if (t.Products[i].ID == n) return t.Products[i];
            if (t.POP) for (i = 0; i < t.POP.length; i++) {
                if (t.POP[i].ID == n) return t.POP[i];
                if (t.POP[i].Products) for (r = 0; r < t.POP[i].Products.length; r++) if (t.POP[i].Products[r].ID == n) return t.POP[i].Products[r]
            }
        }
        function h() {
            return buy_productDefinitions.BaseUnit.Definitions[0]
        }
        function r(n, t) {
            return n.LocaleRestriction == null ? !0 : jQuery.inArray(t, n.LocaleRestriction) > - 1
        }
        function a() {
            var n = h().NotifyMeLocale;
            return n != null && jQuery.inArray(GetSelectedEComCountry(), n) > - 1
        }
        function b() {
            var n = h(),
                i,
                t;
            if (n && n.OutOfStock) for (i = GetSelectedEComCountry(), t = 0; t < n.OutOfStock.length; t++) if (n.OutOfStock[t] == i) return !0;
            return !1
        }
        function v() {
            var n = h().PreOrderLocale;
            return n != null && jQuery.inArray(GetSelectedEComCountry(), n) > - 1
        }
        var u = '',
            t,
            f,
            e = !0,
            o = !0,
            c = !0,
            l = '',
            n = {
            };
        n.BaseUnit = {
            title: '',
            price: 0
        },
            n.CoverVariants = {
                title: 'Covers',
                price: 0
            },
            n.LegVariants = {
                title: 'Legs',
                price: 0
            },
            BuyModuleUI.Resize(),
            y(),
            BuyModuleUI.Resize(),
            jQuery('.buymodule-offer .buymodule-offer-close').bind(clickEventType, function () {
                jQuery(this).parent().remove(),
                    BuyModuleUI.CenterImage()
            }),
            jQuery('.buymodule-buy #buy-button').click(function () {
                jQuery(this).parent().hasClass('outofstock') || p(u)
            })
    },
    BuyModuleV1 = function () {
        function t() {
            var n = jQuery('ul.buymodule-variant-mount li');
            n.find('.tooltip').each(function () {
                jQuery(this).css('left', - (jQuery(this).width() / 2) + 27)
            }),
                n.find('.tooltip-end').mouseover(function () {
                    jQuery(this).parent().fadeOut(200)
                }),
                n.hover(function () {
                    jQuery(this).find('.tooltip').stop(!0, !0).fadeIn(200)
                }, function () {
                    jQuery(this).find('.tooltip').stop(!0, !0).fadeOut(200)
                })
        }
        function n() {
            var n = jQuery('.buymodule-variant-color .selected').data('color'),
                t = jQuery('.buymodule-variant-mount .selected').data('type');
            jQuery('.buymodule-images img').hide(),
                jQuery('.v1' + n + t).show()
        }
        BuyModuleUI.Resize(),
            jQuery('.buymodule-color li').click(function () {
                jQuery(this).parent().find('li').removeClass('selected'),
                    jQuery(this).addClass('selected'),
                    n()
            }),
            BuyModuleUI.Resize(),
            jQuery('.buymodule-color ul li:first-child').addClass('selected'),
            n(),
            t()
    },
    BuyModuleUIA9 = new objBuyModuleUIA9;
BuyModuleUI = new objBuyModuleUI,
    Swoosh = new objSwoosh,
    jQuery('.help-popup').click(function () {
        ShowHelpPopup()
    });
/*! jCarousel - v0.3.1 - 2014-04-26
 * http://sorgalla.com/jcarousel
 * Copyright (c) 2014 Jan Sorgalla; Licensed MIT */
(function (n) {
    'use strict';
    var t = n.jCarousel = {
        },
        i;
    t.version = '0.3.1',
        i = /^([+\-]=)?(.+)$/,
        t.parseTarget = function (n) {
            var r = !1,
                t = typeof n != 'object' ? i.exec(n)  : null;
            return t ? (n = parseInt(t[2], 10) || 0, t[1] && (r = !0, t[1] === '-=' && (n *= - 1)))  : typeof n != 'object' && (n = parseInt(n, 10) || 0),
            {
                target: n,
                relative: r
            }
        },
        t.detectCarousel = function (n) {
            for (var t; n.length > 0; ) {
                if ((t = n.filter('[data-jcarousel]'), t.length > 0) || (t = n.find('[data-jcarousel]'), t.length > 0)) return t;
                n = n.parent()
            }
            return null
        },
        t.base = function (i) {
            return {
                version: t.version,
                _options: {
                },
                _element: null,
                _carousel: null,
                _init: n.noop,
                _create: n.noop,
                _destroy: n.noop,
                _reload: n.noop,
                create: function () {
                    return (this._element.attr('data-' + i.toLowerCase(), !0).data(i, this), !1 === this._trigger('create')) ? this : (this._create(), this._trigger('createend'), this)
                },
                destroy: function () {
                    return !1 === this._trigger('destroy') ? this : (this._destroy(), this._trigger('destroyend'), this._element.removeData(i).removeAttr('data-' + i.toLowerCase()), this)
                },
                reload: function (n) {
                    return !1 === this._trigger('reload') ? this : (n && this.options(n), this._reload(), this._trigger('reloadend'), this)
                },
                element: function () {
                    return this._element
                },
                options: function (t, i) {
                    if (arguments.length === 0) return n.extend({
                    }, this._options);
                    if (typeof t == 'string') {
                        if (typeof i == 'undefined') return typeof this._options[t] == 'undefined' ? null : this._options[t];
                        this._options[t] = i
                    } else this._options = n.extend({
                    }, this._options, t);
                    return this
                },
                carousel: function () {
                    return this._carousel || (this._carousel = t.detectCarousel(this.options('carousel') || this._element), this._carousel || n.error('Could not detect carousel for plugin "' + i + '"')),
                        this._carousel
                },
                _trigger: function (t, r, u) {
                    var f,
                        e = !1;
                    return u = [
                        this
                    ].concat(u || []),
                        (r || this._element).each(function () {
                            f = n.Event((i + ':' + t).toLowerCase()),
                                n(this).trigger(f, u),
                                f.isDefaultPrevented() && (e = !0)
                        }),
                        !e
                }
            }
        },
        t.plugin = function (i, r) {
            var u = n[i] = function (t, i) {
                this._element = n(t),
                    this.options(i),
                    this._init(),
                    this.create()
            };
            return u.fn = u.prototype = n.extend({
            }, t.base(i), r),
                n.fn[i] = function (t) {
                    var f = Array.prototype.slice.call(arguments, 1),
                        r = this;
                    return typeof t == 'string' ? this.each(function () {
                        var u = n(this).data(i),
                            e;
                        return u ? !n.isFunction(u[t]) || t.charAt(0) === '_' ? n.error('No such method "' + t + '" for ' + i + ' instance')  : (e = u[t].apply(u, f), e !== u && typeof e != 'undefined' ? (r = e, !1)  : void 0)  : n.error('Cannot call methods on ' + i + ' prior to initialization; attempted to call method "' + t + '"')
                    })  : this.each(function () {
                        var r = n(this).data(i);
                        r instanceof u ? r.reload(t)  : new u(this, t)
                    }),
                        r
                },
                u
        }
}) (jQuery),
    function (n, t) {
        'use strict';
        var i = function (n) {
            return parseFloat(n) || 0
        };
        n.jCarousel.plugin('jcarousel', {
            animating: !1,
            tail: 0,
            inTail: !1,
            resizeTimer: null,
            lt: null,
            vertical: !1,
            rtl: !1,
            circular: !1,
            underflow: !1,
            relative: !1,
            _options: {
                list: function () {
                    return this.element().children().eq(0)
                },
                items: function () {
                    return this.list().children()
                },
                animation: 400,
                transitions: !1,
                wrap: null,
                vertical: null,
                rtl: null,
                center: !1
            },
            _list: null,
            _items: null,
            _target: null,
            _first: null,
            _last: null,
            _visible: null,
            _fullyvisible: null,
            _init: function () {
                var n = this;
                return this.onWindowResize = function () {
                    n.resizeTimer && clearTimeout(n.resizeTimer),
                        n.resizeTimer = setTimeout(function () {
                            n.reload()
                        }, 100)
                },
                    this
            },
            _create: function () {
                this._reload();
                n(t).on('resize.jcarousel', this.onWindowResize)
            },
            _destroy: function () {
                n(t).off('resize.jcarousel', this.onWindowResize)
            },
            _reload: function () {
                var t,
                    i;
                return this.vertical = this.options('vertical'),
                    this.vertical == null && (this.vertical = this.list().height() > this.list().width()),
                    this.rtl = this.options('rtl'),
                    this.rtl == null && (this.rtl = function (t) {
                    if (('' + t.attr('dir')).toLowerCase() === 'rtl') return !0;
                    var i = !1;
                    return t.parents('[dir]').each(function () {
                        if (/rtl/i.test(n(this).attr('dir'))) return i = !0,
                            !1
                    }),
                        i
                }(this._element)),
                    this.lt = this.vertical ? 'top' : 'left',
                    this.relative = this.list().css('position') === 'relative',
                    this._list = null,
                    this._items = null,
                    t = this._target && this.index(this._target) >= 0 ? this._target : this.closest(),
                    this.circular = this.options('wrap') === 'circular',
                    this.underflow = !1,
                    i = {
                        left: 0,
                        top: 0
                    },
                    t.length > 0 && (this._prepare(t), this.list().find('[data-jcarousel-clone]').remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, i[this.lt] = this._position(t) + 'px'),
                    this.move(i),
                    this
            },
            list: function () {
                if (this._list === null) {
                    var t = this.options('list');
                    this._list = n.isFunction(t) ? t.call(this)  : this._element.find(t)
                }
                return this._list
            },
            items: function () {
                if (this._items === null) {
                    var t = this.options('items');
                    this._items = (n.isFunction(t) ? t.call(this)  : this.list().find(t)).not('[data-jcarousel-clone]')
                }
                return this._items
            },
            index: function (n) {
                return this.items().index(n)
            },
            closest: function () {
                var e = this,
                    t = this.list().position() [this.lt],
                    r = n(),
                    u = !1,
                    o = this.vertical ? 'bottom' : this.rtl && !this.relative ? 'left' : 'right',
                    f;
                return this.rtl && this.relative && !this.vertical && (t += this.list().width() - this.clipping()),
                    this.items().each(function () {
                        if (r = n(this), u) return !1;
                        var s = e.dimension(r);
                        if (t += s, t >= 0) if (f = s - i(r.css('margin-' + o)), Math.abs(t) - s + f / 2 <= 0) u = !0;
                        else return !1
                    }),
                    r
            },
            target: function () {
                return this._target
            },
            first: function () {
                return this._first
            },
            last: function () {
                return this._last
            },
            visible: function () {
                return this._visible
            },
            fullyvisible: function () {
                return this._fullyvisible
            },
            hasNext: function () {
                if (!1 === this._trigger('hasnext')) return !0;
                var n = this.options('wrap'),
                    t = this.items().length - 1;
                return t >= 0 && !this.underflow && (n && n !== 'first' || this.index(this._last) < t || this.tail && !this.inTail) ? !0 : !1
            },
            hasPrev: function () {
                if (!1 === this._trigger('hasprev')) return !0;
                var n = this.options('wrap');
                return this.items().length > 0 && !this.underflow && (n && n !== 'last' || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1
            },
            clipping: function () {
                return this._element['inner' + (this.vertical ? 'Height' : 'Width')]()
            },
            dimension: function (n) {
                return n['outer' + (this.vertical ? 'Height' : 'Width')](!0)
            },
            scroll: function (t, i, r) {
                var h,
                    p,
                    b;
                if (this.animating || !1 === this._trigger('scroll', null, [
                    t,
                    i
                ])) return this;
                if (n.isFunction(i) && (r = i, i = !0), h = n.jCarousel.parseTarget(t), h.relative) {
                    var o = this.items().length - 1,
                        v = Math.abs(h.target),
                        f = this.options('wrap'),
                        c,
                        w,
                        e,
                        y,
                        u,
                        l,
                        s,
                        a;
                    if (h.target > 0) if (p = this.index(this._last), p >= o && this.tail) this.inTail ? f === 'both' || f === 'last' ? this._scroll(0, i, r)  : n.isFunction(r) && r.call(this, !1)  : this._scrollTail(i, r);
                    else if (c = this.index(this._target), this.underflow && c === o && (f === 'circular' || f === 'both' || f === 'last') || !this.underflow && p === o && (f === 'both' || f === 'last')) this._scroll(0, i, r);
                    else if (e = c + v, this.circular && e > o) {
                        for (a = o, u = this.items().get( - 1); a++ < e; ) u = this.items().eq(0),
                            l = this._visible.index(u) >= 0,
                            l && u.after(u.clone(!0).attr('data-jcarousel-clone', !0)),
                            this.list().append(u),
                            l || (s = {
                        }, s[this.lt] = this.dimension(u), this.moveBy(s)),
                            this._items = null;
                        this._scroll(u, i, r)
                    } else this._scroll(Math.min(e, o), i, r);
                    else if (this.inTail) this._scroll(Math.max(this.index(this._first) - v + 1, 0), i, r);
                    else if (w = this.index(this._first), c = this.index(this._target), y = this.underflow ? c : w, e = y - v, y <= 0 && (this.underflow && f === 'circular' || f === 'both' || f === 'first')) this._scroll(o, i, r);
                    else if (this.circular && e < 0) {
                        for (a = e, u = this.items().get(0); a++ < 0; ) u = this.items().eq( - 1),
                            l = this._visible.index(u) >= 0,
                            l && u.after(u.clone(!0).attr('data-jcarousel-clone', !0)),
                            this.list().prepend(u),
                            this._items = null,
                            b = this.dimension(u),
                            s = {
                            },
                            s[this.lt] = - b,
                            this.moveBy(s);
                        this._scroll(u, i, r)
                    } else this._scroll(Math.max(e, 0), i, r)
                } else this._scroll(h.target, i, r);
                return this._trigger('scrollend'),
                    this
            },
            moveBy: function (n, t) {
                var f = this.list().position(),
                    r = 1,
                    u = 0;
                return this.rtl && !this.vertical && (r = - 1, this.relative && (u = this.list().width() - this.clipping())),
                    n.left && (n.left = f.left + u + i(n.left) * r + 'px'),
                    n.top && (n.top = f.top + u + i(n.top) * r + 'px'),
                    this.move(n, t)
            },
            move: function (t, i) {
                var e,
                    u,
                    l,
                    a;
                i = i || {
                };
                var o = this.options('transitions'),
                    s = !!o,
                    h = !!o.transforms,
                    c = !!o.transforms3d,
                    r = i.duration || 0,
                    f = this.list();
                if (!s && r > 0) {
                    f.animate(t, i);
                    return
                }
                if (e = i.complete || n.noop, u = {
                }, s && (l = f.css(['transitionDuration',
                    'transitionTimingFunction',
                    'transitionProperty']), a = e, e = function () {
                    n(this).css(l),
                        a.call(this)
                }, u = {
                    transitionDuration: (r > 0 ? r / 1000 : 0) + 's',
                    transitionTimingFunction: o.easing || i.easing,
                    transitionProperty: r > 0 ? function () {
                        return h || c ? 'all' : t.left ? 'left' : 'top'
                    }()  : 'none',
                    transform: 'none'
                }), c ? u.transform = 'translate3d(' + (t.left || 0) + ',' + (t.top || 0) + ',0)' : h ? u.transform = 'translate(' + (t.left || 0) + ',' + (t.top || 0) + ')' : n.extend(u, t), s && r > 0) f.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', e);
                f.css(u),
                    r <= 0 && f.each(function () {
                    e.call(this)
                })
            },
            _scroll: function (t, i, r) {
                var u,
                    e,
                    f;
                return this.animating ? (n.isFunction(r) && r.call(this, !1), this)  : (typeof t != 'object' ? t = this.items().eq(t)  : typeof t.jquery == 'undefined' && (t = n(t)), t.length === 0) ? (n.isFunction(r) && r.call(this, !1), this)  : (this.inTail = !1, this._prepare(t), u = this._position(t), e = this.list().position() [this.lt], u === e) ? (n.isFunction(r) && r.call(this, !1), this)  : (f = {
                }, f[this.lt] = u + 'px', this._animate(f, i, r), this)
            },
            _scrollTail: function (t, i) {
                var r,
                    u;
                return this.animating || !this.tail ? (n.isFunction(i) && i.call(this, !1), this)  : (r = this.list().position() [this.lt], this.rtl && this.relative && !this.vertical && (r += this.list().width() - this.clipping()), this.rtl && !this.vertical ? r += this.tail : r -= this.tail, this.inTail = !0, u = {
                }, u[this.lt] = r + 'px', this._update({
                    target: this._target.next(),
                    fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
                }), this._animate(u, t, i), this)
            },
            _animate: function (t, i, r) {
                if (r = r || n.noop, !1 === this._trigger('animate')) return r.call(this, !1),
                    this;
                this.animating = !0;
                var f = this.options('animation'),
                    e = n.proxy(function () {
                        this.animating = !1;
                        var n = this.list().find('[data-jcarousel-clone]');
                        n.length > 0 && (n.remove(), this._reload()),
                            this._trigger('animateend'),
                            r.call(this, !0)
                    }, this),
                    u = typeof f == 'object' ? n.extend({
                    }, f)  : {
                        duration: f
                    },
                    o = u.complete || n.noop;
                return i === !1 ? u.duration = 0 : typeof n.fx.speeds[u.duration] != 'undefined' && (u.duration = n.fx.speeds[u.duration]),
                    u.complete = function () {
                        e(),
                            o.call(this)
                    },
                    this.move(t, u),
                    this
            },
            _prepare: function (t) {
                var y = this.index(t),
                    s = y,
                    u = this.dimension(t),
                    e = this.clipping(),
                    c = this.vertical ? 'bottom' : this.rtl ? 'left' : 'right',
                    l = this.options('center'),
                    f = {
                        target: t,
                        first: t,
                        last: t,
                        visible: t,
                        fullyvisible: u <= e ? t : n()
                    },
                    r,
                    a,
                    h,
                    o,
                    v;
                if (l && (u /= 2, e /= 2), u < e) for (; ; ) {
                    if (r = this.items().eq(++s), r.length === 0) {
                        if (!this.circular) break;
                        if (r = this.items().eq(0), t.get(0) === r.get(0)) break;
                        a = this._visible.index(r) >= 0,
                            a && r.after(r.clone(!0).attr('data-jcarousel-clone', !0)),
                            this.list().append(r),
                            a || (v = {
                        }, v[this.lt] = this.dimension(r), this.moveBy(v)),
                            this._items = null
                    }
                    if (o = this.dimension(r), o === 0) break;
                    if (u += o, f.last = r, f.visible = f.visible.add(r), h = i(r.css('margin-' + c)), u - h <= e && (f.fullyvisible = f.fullyvisible.add(r)), u >= e) break
                }
                if (!this.circular && !l && u < e) for (s = y; ; ) {
                    if (--s < 0) break;
                    if (r = this.items().eq(s), r.length === 0) break;
                    if (o = this.dimension(r), o === 0) break;
                    if (u += o, f.first = r, f.visible = f.visible.add(r), h = i(r.css('margin-' + c)), u - h <= e && (f.fullyvisible = f.fullyvisible.add(r)), u >= e) break
                }
                return this._update(f),
                    this.tail = 0,
                    l || this.options('wrap') === 'circular' || this.options('wrap') === 'custom' || this.index(f.last) !== this.items().length - 1 || (u -= i(f.last.css('margin-' + c)), u > e && (this.tail = u - e)),
                    this
            },
            _position: function (n) {
                var i = this._first,
                    t = i.position() [this.lt],
                    r = this.options('center'),
                    u = r ? this.clipping() / 2 - this.dimension(i) / 2 : 0;
                return this.rtl && !this.vertical ? (t -= this.relative ? this.list().width() - this.dimension(i)  : this.clipping() - this.dimension(i), t += u)  : t -= u,
                        !r && (this.index(n) > this.index(i) || this.inTail) && this.tail ? (t = this.rtl && !this.vertical ? t - this.tail : t + this.tail, this.inTail = !0)  : this.inTail = !1,
                    - t
            },
            _update: function (t) {
                var r = this,
                    i = {
                        target: this._target || n(),
                        first: this._first || n(),
                        last: this._last || n(),
                        visible: this._visible || n(),
                        fullyvisible: this._fullyvisible || n()
                    },
                    f = this.index(t.first || i.first) < this.index(i.first),
                    u,
                    e = function (u) {
                        var e = [
                            ],
                            o = [
                            ];
                        t[u].each(function () {
                            i[u].index(this) < 0 && e.push(this)
                        }),
                            i[u].each(function () {
                                t[u].index(this) < 0 && o.push(this)
                            }),
                            f ? e = e.reverse()  : o = o.reverse(),
                            r._trigger(u + 'in', n(e)),
                            r._trigger(u + 'out', n(o)),
                            r['_' + u] = t[u]
                    };
                for (u in t) e(u);
                return this
            }
        })
    }(jQuery, window),
    function (n) {
        'use strict';
        n.jcarousel.fn.scrollIntoView = function (t, i, r) {
            var f = n.jCarousel.parseTarget(t),
                o = this.index(this._fullyvisible.first()),
                h = this.index(this._fullyvisible.last()),
                u,
                l;
            if (u = f.relative ? f.target < 0 ? Math.max(0, o + f.target)  : h + f.target : typeof f.target != 'object' ? f.target : this.index(f.target), u < o) return this.scroll(u, i, r);
            if (u >= o && u <= h) return n.isFunction(r) && r.call(this, !1),
                this;
            for (var a = this.items(), c = this.clipping(), v = this.vertical ? 'bottom' : this.rtl ? 'left' : 'right', s = 0, e; ; ) {
                if (e = a.eq(u), e.length === 0) break;
                if (s += this.dimension(e), s >= c) {
                    l = parseFloat(e.css('margin-' + v)) || 0,
                        s - l !== c && u++;
                    break
                }
                if (u <= 0) break;
                u--
            }
            return this.scroll(u, i, r)
        }
    }(jQuery),
    function (n) {
        'use strict';
        n.jCarousel.plugin('jcarouselControl', {
            _options: {
                target: '+=1',
                event: 'click',
                method: 'scroll'
            },
            _active: null,
            _init: function () {
                this.onDestroy = n.proxy(function () {
                    this._destroy();
                    this.carousel().one('jcarousel:createend', n.proxy(this._create, this))
                }, this),
                    this.onReload = n.proxy(this._reload, this),
                    this.onEvent = n.proxy(function (t) {
                        t.preventDefault();
                        var i = this.options('method');
                        n.isFunction(i) ? i.call(this)  : this.carousel().jcarousel(this.options('method'), this.options('target'))
                    }, this)
            },
            _create: function () {
                this.carousel().one('jcarousel:destroy', this.onDestroy).on('jcarousel:reloadend jcarousel:scrollend', this.onReload);
                this._element.on(this.options('event') + '.jcarouselcontrol', this.onEvent);
                this._reload()
            },
            _destroy: function () {
                this._element.off('.jcarouselcontrol', this.onEvent),
                    this.carousel().off('jcarousel:destroy', this.onDestroy).off('jcarousel:reloadend jcarousel:scrollend', this.onReload)
            },
            _reload: function () {
                var t = n.jCarousel.parseTarget(this.options('target')),
                    r = this.carousel(),
                    i,
                    u;
                return t.relative ? i = r.jcarousel(t.target > 0 ? 'hasNext' : 'hasPrev')  : (u = typeof t.target != 'object' ? r.jcarousel('items').eq(t.target)  : t.target, i = r.jcarousel('target').index(u) >= 0),
                    this._active !== i && (this._trigger(i ? 'active' : 'inactive'), this._active = i),
                    this
            }
        })
    }(jQuery),
    function (n) {
        'use strict';
        n.jCarousel.plugin('jcarouselPagination', {
            _options: {
                perPage: null,
                item: function (n) {
                    return '<a href="#' + n + '">' + n + '</a>'
                },
                event: 'click',
                method: 'scroll'
            },
            _carouselItems: null,
            _pages: {
            },
            _items: {
            },
            _currentPage: null,
            _init: function () {
                this.onDestroy = n.proxy(function () {
                    this._destroy();
                    this.carousel().one('jcarousel:createend', n.proxy(this._create, this))
                }, this),
                    this.onReload = n.proxy(this._reload, this),
                    this.onScroll = n.proxy(this._update, this)
            },
            _create: function () {
                this.carousel().one('jcarousel:destroy', this.onDestroy).on('jcarousel:reloadend', this.onReload).on('jcarousel:scrollend', this.onScroll);
                this._reload()
            },
            _destroy: function () {
                this._clear(),
                    this.carousel().off('jcarousel:destroy', this.onDestroy).off('jcarousel:reloadend', this.onReload).off('jcarousel:scrollend', this.onScroll),
                    this._carouselItems = null
            },
            _reload: function () {
                var t = this.options('perPage');
                if (this._pages = {
                }, this._items = {
                }, n.isFunction(t) && (t = t.call(this)), t == null) this._pages = this._calculatePages();
                else for (var s = parseInt(t, 10) || 0, h = this._getCarouselItems(), u = 1, e = 0, f; ; ) {
                    if (f = h.eq(e++), f.length === 0) break;
                    this._pages[u] = this._pages[u] ? this._pages[u].add(f)  : f,
                        e % s == 0 && u++
                }
                this._clear();
                var i = this,
                    r = this.carousel().data('jcarousel'),
                    c = this._element,
                    l = this.options('item'),
                    o = this._getCarouselItems().length;
                n.each(this._pages, function (t, u) {
                    var f = i._items[t] = n(l.call(i, t, u));
                    f.on(i.options('event') + '.jcarouselpagination', n.proxy(function () {
                        var e = u.eq(0),
                            n,
                            f;
                        r.circular && (n = r.index(r.target()), f = r.index(e), parseFloat(t) > parseFloat(i._currentPage) ? f < n && (e = '+=' + (o - n + f))  : f > n && (e = '-=' + (n + (o - f)))),
                            r[this.options('method')](e)
                    }, i));
                    c.append(f)
                }),
                    this._update()
            },
            _update: function () {
                var i = this.carousel().jcarousel('target'),
                    t;
                n.each(this._pages, function (n, r) {
                    return r.each(function () {
                        if (i.is(this)) return t = n,
                            !1
                    }),
                        t ? !1 : void 0
                }),
                    this._currentPage !== t && (this._trigger('inactive', this._items[this._currentPage]), this._trigger('active', this._items[t])),
                    this._currentPage = t
            },
            items: function () {
                return this._items
            },
            reloadCarouselItems: function () {
                return this._carouselItems = null,
                    this
            },
            _clear: function () {
                this._element.empty(),
                    this._currentPage = null
            },
            _calculatePages: function () {
                for (var u = this.carousel().data('jcarousel'), f = this._getCarouselItems(), e = u.clipping(), r = 0, o = 0, t = 1, i = {
                }, n; ; ) {
                    if (n = f.eq(o++), n.length === 0) break;
                    i[t] = i[t] ? i[t].add(n)  : n,
                        r += u.dimension(n),
                        r >= e && (t++, r = 0)
                }
                return i
            },
            _getCarouselItems: function () {
                return this._carouselItems || (this._carouselItems = this.carousel().jcarousel('items')),
                    this._carouselItems
            }
        })
    }(jQuery),
    function (n) {
        'use strict';
        n.jCarousel.plugin('jcarouselAutoscroll', {
            _options: {
                target: '+=1',
                interval: 3000,
                autostart: !0
            },
            _timer: null,
            _init: function () {
                this.onDestroy = n.proxy(function () {
                    this._destroy();
                    this.carousel().one('jcarousel:createend', n.proxy(this._create, this))
                }, this),
                    this.onAnimateEnd = n.proxy(this.start, this)
            },
            _create: function () {
                this.carousel().one('jcarousel:destroy', this.onDestroy);
                this.options('autostart') && this.start()
            },
            _destroy: function () {
                this.stop(),
                    this.carousel().off('jcarousel:destroy', this.onDestroy)
            },
            start: function () {
                this.stop();
                this.carousel().one('jcarousel:animateend', this.onAnimateEnd);
                return this._timer = setTimeout(n.proxy(function () {
                    this.carousel().jcarousel('scroll', this.options('target'))
                }, this), this.options('interval')),
                    this
            },
            stop: function () {
                return this._timer && (this._timer = clearTimeout(this._timer)),
                    this.carousel().off('jcarousel:animateend', this.onAnimateEnd),
                    this
            }
        })
    }(jQuery),
    function (n) {
        n(function () {
            n('.jcarousel').jcarousel(),
                n('.jcarousel-control-prev').on('jcarouselcontrol:active', function () {
                    n(this).removeClass('inactive')
                }).on('jcarouselcontrol:inactive', function () {
                    n(this).addClass('inactive')
                }).jcarouselControl({
                    target: '-=1'
                });
            var t = n('#slides-list').children().length;
            n('.jcarousel-control-next').on('jcarouselcontrol:active', function () {
                n(this).removeClass('inactive')
            }).on('jcarouselcontrol:inactive', function () {
                n(this).addClass('inactive')
            }).jcarouselControl({
                target: '+=' + (t > 1 ? '1' : '0')
            }),
                n('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function () {
                    n(this).addClass('active')
                }).on('jcarouselpagination:inactive', 'a', function () {
                    n(this).removeClass('active')
                }).jcarouselPagination()
        })
    }(jQuery),
    jQuery('#slides-list').each(function () {
        jQuery(this).find('li').sort(function (n, t) {
            return parseInt(n.id) > parseInt(t.id)
        }).each(function () {
            var n = jQuery(this);
            n.remove(),
                jQuery(n).appendTo('#slides-list')
        }),
            jQuery(this).find('a').click(function (n) {
                var t = jQuery(this).attr('href'),
                    i = jQuery(this).parents('.dl').attr('id');
                jQuery(this).attr('target') == '_blank' ? dataLayer.push({
                    eventCategory: 'Overlay',
                    eventAction: 'Link click',
                    eventLabel: location.pathname + ' : ' + i + ' : ' + t,
                    eventInteraction: 'true',
                    event: 'send-ga-event'
                })  : (n.preventDefault(), dataLayer.push({
                    eventCategory: 'Overlay',
                    eventAction: 'Link click',
                    eventLabel: location.pathname + ' : ' + i + ' : ' + t,
                    eventInteraction: 'true',
                    event: 'send-ga-event'
                }), setTimeout(function () {
                    document.location.href = t
                }, 200)),
                    console.log(dataLayer)
            })
    }),
    dataLayer = dataLayer || [],
    scRec = document.createElement('SCRIPT'),
    scRec.type = 'text/javascript',
    scRec.src = '//d2oh4tlt9mrke9.cloudfront.net/Record/js/sessioncam.recorder.js',
    document.getElementsByTagName('head') [0].appendChild(scRec)
