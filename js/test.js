!function() {
    "use strict";
    function a(a) {
        return Math.round(100 * a) / 100
    }
    function b(a, b) {
        return a > b ? a : b
    }
    function c(a, b) {
        return b > a ? a : b
    }
    function d(a, b, c) {
        return a > c ? a : c > b ? b : c
    }
    function e(a, b) {
        return Math.floor(Math.random() * (b - a) + a)
    }
    var f = {
        mobile: window.Modernizr.touch,
        click: ""
    };
    f.mobile ? (f.click = "touchstart",
        $("body").addClass("parallax-mobile")) : f.click = "click",
        $(document).on("click", ".language a", function(a) {
            a.preventDefault();
            var b = $(this).attr("data-lang");
            window.melanieLanguage.util.forceLanguage(b)
        });
    var g = {
        roundTwo: a,
        minVal: b,
        maxVal: c,
        betweenVal: d,
        randomVal: e
    };
    window.melanieClient = f,
        window.melanieClient.util = g,
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1e3 / 60)
            }
        }()
}(),
    function() {
        "use strict";
        function a() {
            d = new i.LoadQueue,
                d.on("complete", c, window),
                d.on("progress", b, window),
                d.loadManifest(e)
        }
        function b(a) {
            g = Math.round(100 * a.loaded),
                k.text(g),
                j = 20 + 80 * g / 100,
                h.to(l, .2, {
                    width: j + "%",
                    ease: "easeIn"
                })
        }
        function c() {
            $(".nb-count").html("<span>1</span><span>0</span><span>0</span>"),
                window.MelanieStart.intro()
        }
        var d, e, f, g, h = window.TweenMax, i = window.createjs, j = 50;
        f = window.melanieClient.mobile ? "scripts/load_ressources_mobile.json" : "scripts/load_ressources.json",
            $.ajax({
                url: f,
                dataType: "json",
                success: function(b) {
                    e = b.preload_files,
                        a()
                }
            });
        var k = $(".nb-count").find("span")
            , l = $(".gradient-loader")
    }(),
    function() {
        "use strict";
        function a() {
            this.languageMenu = $(".language"),
                this.navMenu = $(".nav-menu"),
                this.soundMenu = $(".sound"),
                this.loopSound = $(".loop-sound"),
                a.prototype.intro = function() {
                    var a = this
                        , b = $(window).height() / -1.5;
                    $("body").addClass("ready"),
                        $(window).trigger("resize"),
                        $(".language").find("." + window.melanieLanguage.util.currentLang).addClass("active"),
                        f.to($(".nb-count").find("span").eq(0), 1.2, {
                            y: b,
                            ease: "Expo.easeInOut",
                            force3D: !0,
                            delay: .1,
                            onComplete: function() {
                                window.melanieClient.mobile || $(".loop-audio").get(0).play()
                            }
                        }),
                        f.to($(".nb-count").find("span").eq(1), 1.2, {
                            y: b,
                            ease: "Expo.easeInOut",
                            force3D: !0,
                            delay: .2
                        }),
                        f.to($(".nb-count").find("span").eq(2), 1.2, {
                            y: b,
                            ease: "Expo.easeInOut",
                            force3D: !0,
                            delay: .3
                        }),
                        f.to(".shapes", 1, {
                            alpha: 1,
                            delay: .8
                        }),
                        a.navMenu.addClass("active"),
                        f.to(this.navMenu, .3, {
                            alpha: 1,
                            delay: .8
                        }),
                        f.to(this.soundMenu, .3, {
                            alpha: 1,
                            delay: .8
                        }),
                        f.to(".gradient-wrapper", 1.5, {
                            yPercent: -99,
                            ease: "Expo.easeInOut",
                            force3D: !0,
                            onComplete: function() {
                                $(".preloader").remove(),
                                    window.melanieClient.mobile ? a.animTypoMobile() : $(window).width() <= 1024 ? a.animTypoMobile() : a.animTypo()
                            }
                        }),
                        f.to(".gradient-splash", .2, {
                            alpha: 1,
                            delay: 1.3
                        })
                }
                ,
                a.prototype.animTypo = function() {
                    $(".mobile-lookbook").addClass("no-anim"),
                        this.spriteAnim(".sprite-lookbook img", 400, 807, 2, 84, B),
                        f.to(".baseline h4", 1, {
                            alpha: 1,
                            ease: "easeOut",
                            delay: 2.5
                        }),
                        f.to(this.languageMenu, .3, {
                            alpha: 1,
                            delay: 2.8
                        }),
                        f.to(".scroll-text", .8, {
                            alpha: 1,
                            ease: "easeOut",
                            delay: 2.8
                        }),
                        f.to(".line", 1, {
                            yPercent: 100,
                            ease: "easeOut",
                            delay: 2.8
                        })
                }
                ,
                a.prototype.animTypoMobile = function() {
                    $(".desktop-lookbook").addClass("no-anim"),
                        f.to(".baseline h3", .6, {
                            alpha: 1,
                            ease: "easeOut"
                        }),
                        f.to(".baseline h4", 1, {
                            alpha: 1,
                            ease: "easeOut",
                            delay: .6
                        }),
                        f.to(this.languageMenu, .3, {
                            alpha: 1,
                            delay: 1
                        }),
                        f.to(".scroll-text", .8, {
                            alpha: 1,
                            ease: "easeOut",
                            delay: 1
                        }),
                        f.to(".line", 1, {
                            yPercent: 100,
                            ease: "easeOut",
                            delay: 1.1
                        })
                }
                ,
                a.prototype.spriteAnim = function(a, b, c, d, e, g) {
                    var h = -b * Math.floor(g.state / 4)
                        , i = -c * (g.state % d)
                        , j = g.state;
                    clearInterval(g.val),
                        g.val = setInterval(function() {
                            g.state = j,
                                h = -b * Math.floor(j / d),
                                i = -c * (j % d),
                                j++,
                                f.set(a, {
                                    y: h,
                                    x: i,
                                    force3D: !0
                                }),
                            j === e && (clearInterval(g.val),
                                $(window).trigger("resize"),
                                $("body").addClass("ready"))
                        }, 30)
                }
                ,
                a.prototype.resetSpriteAnim = function(a, b, c, d, e) {
                    var g = -b * Math.floor(e.state / d)
                        , h = -c * (e.state % d)
                        , i = e.state;
                    clearInterval(e.val),
                        e.val = setInterval(function() {
                            e.state = i,
                                g = -b * Math.floor(i / d),
                                h = -c * (i % d),
                                i--,
                                f.set(a, {
                                    y: g,
                                    x: h,
                                    force3D: !0
                                }),
                            -1 === i && clearInterval(e.val)
                        }, 20)
                }
        }
        function b() {
            this.navMenu = $(".nav-menu"),
                this.lineMenu = $(".line-menu"),
                this.lettersMenu = $(".wrapper-letters").find("span"),
                this.menu = $(".menu"),
                this.mainLogo = $(".logo-wrapper"),
                this.contentWrapper = $(".content-wrapper"),
                this.gradientSplash = $(".gradient-splash"),
                this.contentSplash = $(".content-splash"),
                this.logo = $(".logo"),
                this.descriptionSlipper = $(".description-slipper"),
                this.letter = $(".letter"),
                this.gradient = $(".gradient"),
                this.shapes = $(".shapes"),
                this.logoMenu = $(".logo-menu"),
                this.slipperLink = $(".slipper-link"),
                this.socialIcons = $(".social-menu").find("a"),
                this.animFlag = !1,
                b.prototype.open = function() {
                    var a = this;
                    this.animFlag = !0,
                        this.openFlag = !0,
                        this.menu.addClass("active"),
                        f.to(this.menu, .8, {
                            alpha: 1,
                            ease: "easeIn"
                        }),
                        this.navMenu.addClass("white"),
                        f.to(this.mainLogo, .6, {
                            alpha: 0,
                            onComplete: function() {
                                a.mainLogo.addClass("hide")
                            }
                        }),
                        f.to(this.logoMenu, 1, {
                            alpha: 1,
                            ease: "easeIn",
                            delay: .2
                        }),
                        f.to(".half-screen .left a", .6, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: .4
                        }),
                        f.to(".half-screen .right a", .6, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: .8
                        }),
                        f.to(this.slipperLink.eq(0), .3, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: .5
                        }),
                        f.to(this.slipperLink.eq(1), .3, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: .6
                        }),
                        f.to(this.slipperLink.eq(2), .3, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: .7
                        }),
                        f.to(this.slipperLink.eq(3), .3, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: .8
                        }),
                        f.to(this.slipperLink.eq(4), .3, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: .9
                        }),
                        f.to(this.slipperLink.eq(5), .3, {
                            alpha: 1,
                            x: 25,
                            ease: "easeIn",
                            force3D: !0,
                            delay: 1,
                            onComplete: function() {
                                a.animFlag = !1
                            }
                        })
                }
                ,
                b.prototype.close = function() {
                    var a = this;
                    this.animFlag = !0,
                        this.openFlag = !1,
                        this.navMenu.removeClass("white"),
                        f.to(this.logoMenu, .2, {
                            alpha: 0,
                            ease: "easeIn"
                        }),
                        f.to(".half-screen .left a", .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0
                        }),
                        f.to(".half-screen .right a", .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0,
                            delay: .15
                        }),
                        f.to(this.slipperLink.eq(0), .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0
                        }),
                        f.to(this.slipperLink.eq(1), .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0,
                            delay: .05
                        }),
                        f.to(this.slipperLink.eq(2), .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0,
                            delay: .1
                        }),
                        f.to(this.slipperLink.eq(3), .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0,
                            delay: .15
                        }),
                        f.to(this.slipperLink.eq(4), .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0,
                            delay: .2
                        }),
                        f.to(this.slipperLink.eq(5), .2, {
                            alpha: 0,
                            x: 40,
                            ease: "easeIn",
                            clearProps: "all",
                            force3D: !0,
                            delay: .25
                        }),
                        a.mainLogo.removeClass("hide"),
                        f.to(this.mainLogo, 1, {
                            alpha: 1,
                            delay: .4
                        }),
                        f.to(this.menu, 1, {
                            alpha: 0,
                            ease: "easeIn",
                            delay: .4,
                            onComplete: function() {
                                a.menu.removeClass("active"),
                                    a.animFlag = !1
                            }
                        })
                }
                ,
                b.prototype.hover = function() {
                    f.to(this.lineMenu, .4, {
                        xPercent: 100,
                        ease: "Circ.easeIn"
                    }),
                        f.to(this.lettersMenu.eq(0), .2, {
                            y: -8,
                            ease: "Sine.easeInOut",
                            delay: .05
                        }),
                        f.to(this.lettersMenu.eq(1), .2, {
                            y: -8,
                            ease: "Sine.easeInOut",
                            delay: .1
                        }),
                        f.to(this.lettersMenu.eq(2), .2, {
                            y: -8,
                            ease: "Sine.easeInOut",
                            delay: .15
                        }),
                        f.to(this.lettersMenu.eq(3), .2, {
                            y: -8,
                            ease: "Sine.easeInOut",
                            delay: .2
                        }),
                        f.to(this.lettersMenu.eq(0), .2, {
                            y: 0,
                            ease: "Sine.easeInOut",
                            delay: .25
                        }),
                        f.to(this.lettersMenu.eq(1), .2, {
                            y: 0,
                            ease: "Sine.easeInOut",
                            delay: .3
                        }),
                        f.to(this.lettersMenu.eq(2), .2, {
                            y: 0,
                            ease: "Sine.easeInOut",
                            delay: .35
                        }),
                        f.to(this.lettersMenu.eq(3), .2, {
                            y: 0,
                            ease: "Sine.easeInOut",
                            delay: .4
                        })
                }
                ,
                b.prototype.leave = function() {
                    var a = this;
                    f.to(this.lineMenu, .2, {
                        xPercent: 200,
                        ease: "Circ.easeOut",
                        onComplete: function() {
                            f.set(a.lineMenu, {
                                xPercent: 0
                            })
                        }
                    })
                }
                ,
                b.prototype.hoverLink = function(a) {
                    f.to(a, .15, {
                        width: "100%",
                        ease: "Sine.easeOut"
                    })
                }
                ,
                b.prototype.leaveLink = function(a) {
                    f.to(a, .15, {
                        width: "0%",
                        ease: "Sine.easeOut"
                    })
                }
                ,
                b.prototype.hoverSocial = function(a, b) {
                    1 === b ? f.to(a, .15, {
                        rotation: -20,
                        force3D: !0,
                        ease: "Sine.easeOut"
                    }) : f.to(a, .15, {
                        rotation: 20,
                        force3D: !0,
                        ease: "Sine.easeOut"
                    })
                }
                ,
                b.prototype.leaveSocial = function(a) {
                    f.to(a, .15, {
                        rotation: 0,
                        force3D: !0,
                        ease: "Sine.easeOut"
                    })
                }
        }
        function c() {
            c.prototype.hoverShop = function(a) {
                f.to(a.find("span"), .5, {
                    color: "#fff",
                    ease: "Sine.easeInOut"
                }),
                    f.to(a.find(".overlay-color"), .5, {
                        alpha: 1,
                        ease: "Sine.easeInOut"
                    }),
                    f.to(a.find("span").eq(0), .2, {
                        y: -5,
                        ease: "Sine.easeInOut",
                        delay: .05
                    }),
                    f.to(a.find("span").eq(1), .2, {
                        y: -5,
                        ease: "Sine.easeInOut",
                        delay: .1
                    }),
                    f.to(a.find("span").eq(2), .2, {
                        y: -5,
                        ease: "Sine.easeInOut",
                        delay: .15
                    }),
                    f.to(a.find("span").eq(3), .2, {
                        y: -5,
                        ease: "Sine.easeInOut",
                        delay: .2
                    }),
                    f.to(a.find("span").eq(0), .2, {
                        y: 0,
                        ease: "Sine.easeInOut",
                        delay: .25
                    }),
                    f.to(a.find("span").eq(1), .2, {
                        y: 0,
                        ease: "Sine.easeInOut",
                        delay: .3
                    }),
                    f.to(a.find("span").eq(2), .2, {
                        y: 0,
                        ease: "Sine.easeInOut",
                        delay: .35
                    }),
                    f.to(a.find("span").eq(3), .2, {
                        y: 0,
                        ease: "Sine.easeInOut",
                        delay: .4
                    })
            }
                ,
                c.prototype.leaveShop = function(a, b) {
                    f.to(a.find("span"), .3, {
                        color: b,
                        ease: "Sine.easeInOut"
                    }),
                        f.to(a.find(".overlay-color"), .3, {
                            alpha: 0,
                            ease: "Sine.easeInOut"
                        })
                }
                ,
                c.prototype.hoverFooter = function(a) {
                    f.to(a.find("span"), .5, {
                        color: "#fff",
                        ease: "Sine.easeInOut"
                    }),
                        f.to(a.find(".overlay-color"), .5, {
                            alpha: 1,
                            ease: "Sine.easeInOut"
                        })
                }
                ,
                c.prototype.leaveFooter = function(a, b) {
                    f.to(a.find("span"), .3, {
                        color: b,
                        ease: "Sine.easeInOut"
                    }),
                        f.to(a.find(".overlay-color"), .3, {
                            alpha: 0,
                            ease: "Sine.easeInOut"
                        })
                }
                ,
                c.prototype.fontAnim = function(a) {
                    for (var b = a.find("h3 span").length, c = 0; b > c; c++)
                        f.to(a.find("span").eq(c), .5, {
                            y: 0,
                            alpha: 1,
                            delay: .05 * c,
                            force3D: !0
                        });
                    f.to(a.find("p"), 1.2, {
                        alpha: 1,
                        delay: .25
                    })
                }
                ,
                c.prototype.spriteAnim = function(a, b, c, d, e, g) {
                    var h = -b * Math.floor(g.state / 4)
                        , i = -c * (g.state % d)
                        , j = g.state;
                    clearInterval(g.val),
                        g.val = setInterval(function() {
                            g.state = j,
                                h = -b * Math.floor(j / d),
                                i = -c * (j % d),
                                j++,
                                f.set(a, {
                                    y: h,
                                    x: i,
                                    force3D: !0
                                }),
                            j === e && clearInterval(g.val)
                        }, 30)
                }
                ,
                c.prototype.resetSpriteAnim = function(a, b, c, d, e) {
                    var g = -b * Math.floor(e.state / d)
                        , h = -c * (e.state % d)
                        , i = e.state;
                    clearInterval(e.val),
                        e.val = setInterval(function() {
                            e.state = i,
                                g = -b * Math.floor(i / d),
                                h = -c * (i % d),
                                i--,
                                f.set(a, {
                                    y: g,
                                    x: h,
                                    force3D: !0
                                }),
                            -1 === i && clearInterval(e.val)
                        }, 20)
                }
        }
        function d() {
            A++,
                q.shapes_y = 6 * Math.sin(A / 150),
                q.rotate1 = A / 3,
                q.rotate2 = A / 1.5,
                q.rotate3 = A / -2,
                q.y_0 = window.melanieClient.util.roundTwo(.1 * (j / -26 - q.y_0) + q.y_0),
                q.y_0_bis = window.melanieClient.util.roundTwo(.1 * (j / -14 - q.y_0_bis) + q.y_0_bis),
                q.y_1 = window.melanieClient.util.roundTwo(.1 * (j / -12 - q.y_1) + q.y_1),
                q.y_2 = window.melanieClient.util.roundTwo(.1 * (j / -10 - q.y_2) + q.y_2),
                q.y_3 = window.melanieClient.util.roundTwo(.1 * (j / -14 - q.y_3) + q.y_3),
                q.y_4 = window.melanieClient.util.roundTwo(.1 * (j / -10 - q.y_4) + q.y_4),
                r.y = window.melanieClient.util.minVal(-350, window.melanieClient.util.roundTwo(.1 * (j / -15 - r.y) + r.y)),
                r.y_0 = window.melanieClient.util.maxVal(150, window.melanieClient.util.roundTwo(.1 * (j / 25 - r.y_0) + r.y_0)),
                r.y_1 = window.melanieClient.util.minVal(0, window.melanieClient.util.roundTwo(.1 * (j / -6 - r.y_1 + r.start_y_1) + r.y_1)),
                s.y = window.melanieClient.util.minVal(-280, window.melanieClient.util.roundTwo(.1 * (j / -17 - s.y) + s.y)),
                s.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (j / 150 - s.y_1 + s.start_y_1) + s.y_1)),
                s.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (j / -25 - s.y_2 + s.start_y_2) + s.y_2)),
                t.y = window.melanieClient.util.minVal(-406, window.melanieClient.util.roundTwo(.1 * (j / -17 - t.y) + t.y)),
                t.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (j / 150 - t.y_1 + t.start_y_1) + t.y_1)),
                t.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (j / -25 - t.y_2 + t.start_y_2) + t.y_2)),
                u.y = window.melanieClient.util.minVal(-540, window.melanieClient.util.roundTwo(.1 * (j / -17 - u.y) + u.y)),
                u.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (j / 150 - u.y_1 + u.start_y_1) + u.y_1)),
                u.y_2 = window.melanieClient.util.betweenVal(-50, 60, window.melanieClient.util.roundTwo(.1 * (j / -25 - u.y_2 + u.start_y_2) + u.y_2)),
                v.y = window.melanieClient.util.minVal(-680, window.melanieClient.util.roundTwo(.1 * (j / -17 - v.y) + v.y)),
                v.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (j / 150 - v.y_1 + v.start_y_1) + v.y_1)),
                v.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (j / -25 - v.y_2 + v.start_y_2) + v.y_2)),
                w.y = window.melanieClient.util.minVal(-800, window.melanieClient.util.roundTwo(.1 * (j / -17 - w.y) + w.y)),
                w.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (j / 150 - w.y_1 + w.start_y_1) + w.y_1)),
                w.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (j / -25 - w.y_2 + w.start_y_2) + w.y_2)),
                x.y = window.melanieClient.util.minVal(-920, window.melanieClient.util.roundTwo(.1 * (j / -17 - x.y) + x.y)),
                x.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (j / 150 - x.y_1 + x.start_y_1) + x.y_1)),
                x.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (j / -25 - x.y_2 + x.start_y_2) + x.y_2)),
                y.y0 = window.melanieClient.util.roundTwo(.1 * (j / -34 - y.y0) + y.y0),
                y.y1 = window.melanieClient.util.maxVal(85, window.melanieClient.util.roundTwo(.1 * (j / -50 - y.y1 + y.start_y_1) + y.y1)),
                y.y2 = window.melanieClient.util.maxVal(35, window.melanieClient.util.roundTwo(.1 * (j / -50 - y.y2 + y.start_y_2) + y.y2)),
                y.y3 = window.melanieClient.util.maxVal(35, window.melanieClient.util.roundTwo(.1 * (j / -50 - y.y3 + y.start_y_3) + y.y3)),
                y.y4 = window.melanieClient.util.maxVal(20, window.melanieClient.util.roundTwo(.1 * (j / -50 - y.y4 + y.start_y_4) + y.y4)),
                z.y = window.melanieClient.util.maxVal(30, window.melanieClient.util.roundTwo(.1 * (j / -50 - z.y + z.start_y) + z.y)),
                f.set(q.all, {
                    yPercent: q.shapes_y,
                    force3D: !0
                }),
                f.set(q.triangle, {
                    yPercent: q.y_0,
                    rotation: q.rotate1,
                    force3D: !0
                }),
                f.set(q.triangleSmall, {
                    yPercent: q.y_0_bis,
                    rotation: -1 * q.rotate1,
                    force3D: !0
                }),
                f.set(q.circle, {
                    yPercent: q.y_1,
                    force3D: !0
                }),
                f.set(q.diamond, {
                    yPercent: q.y_2,
                    rotation: q.rotate2,
                    force3D: !0
                }),
                f.set(q.waves, {
                    yPercent: q.y_3,
                    rotation: -1 * q.rotate3,
                    force3D: !0
                }),
                f.set(q.hexa, {
                    yPercent: q.y_4,
                    rotation: -1 * q.rotate2,
                    force3D: !0
                }),
                f.set(r.selector, {
                    yPercent: r.y,
                    force3D: !0
                }),
                f.set(r.selector_0, {
                    yPercent: r.y_0,
                    force3D: !0
                }),
                f.set(r.selector_1, {
                    yPercent: r.y_1,
                    force3D: !0
                }),
                f.set(s.selector, {
                    yPercent: s.y,
                    force3D: !0
                }),
                f.set(s.selector_1, {
                    yPercent: s.y_1,
                    force3D: !0
                }),
                f.set(s.selector_2, {
                    yPercent: s.y_2,
                    force3D: !0
                }),
                f.set(t.selector, {
                    yPercent: t.y,
                    force3D: !0
                }),
                f.set(t.selector_1, {
                    yPercent: t.y_1,
                    force3D: !0
                }),
                f.set(t.selector_2, {
                    yPercent: t.y_2,
                    force3D: !0
                }),
                f.set(u.selector, {
                    yPercent: u.y,
                    force3D: !0
                }),
                f.set(u.selector_1, {
                    yPercent: u.y_1,
                    force3D: !0
                }),
                f.set(u.selector_2, {
                    yPercent: u.y_2,
                    force3D: !0
                }),
                f.set(v.selector, {
                    yPercent: v.y,
                    force3D: !0
                }),
                f.set(v.selector_1, {
                    yPercent: v.y_1,
                    force3D: !0
                }),
                f.set(v.selector_2, {
                    yPercent: v.y_2,
                    force3D: !0
                }),
                f.set(w.selector, {
                    yPercent: w.y,
                    force3D: !0
                }),
                f.set(w.selector_1, {
                    yPercent: w.y_1,
                    force3D: !0
                }),
                f.set(w.selector_2, {
                    yPercent: w.y_2,
                    force3D: !0
                }),
                f.set(x.selector, {
                    yPercent: x.y,
                    force3D: !0
                }),
                f.set(x.selector_1, {
                    yPercent: x.y_1,
                    force3D: !0
                }),
                f.set(x.selector_2, {
                    yPercent: x.y_2,
                    force3D: !0
                }),
                f.set(y.selector0, {
                    yPercent: y.y0,
                    force3D: !0
                }),
                f.set(y.selector1, {
                    yPercent: y.y1,
                    force3D: !0
                }),
                f.set(y.selector2, {
                    yPercent: y.y2,
                    force3D: !0
                }),
                f.set(y.selector3, {
                    yPercent: y.y3,
                    force3D: !0
                }),
                f.set(y.selector4, {
                    yPercent: y.y4,
                    force3D: !0
                }),
                f.set(z.selector, {
                    yPercent: z.y,
                    force3D: !0
                }),
                r.y < -110 ? r.flag_sprite || (window.MelanieStart.resetSpriteAnim(".sprite-lookbook img", 400, 807, 2, B),
                    r.flag_sprite = !0) : r.flag_sprite && (window.MelanieStart.spriteAnim(".sprite-lookbook img", 400, 807, 2, 84, B),
                    r.flag_sprite = !1),
                s.y < -110 ? s.flag_sprite || (s.flag_sprite = !0,
                    h.spriteAnim(s.selector_3, 378, 429, 4, 44, C)) : s.flag_sprite && (h.resetSpriteAnim(s.selector_3, 378, 429, 4, C),
                    s.flag_sprite = !1),
                t.y < -240 ? t.flag_sprite || (t.flag_sprite = !0,
                    h.spriteAnim(t.selector_3, 378, 429, 4, 44, D)) : t.flag_sprite && (h.resetSpriteAnim(t.selector_3, 378, 429, 4, D),
                    t.flag_sprite = !1),
                u.y < -360 ? u.flag_sprite || (u.flag_sprite = !0,
                    h.spriteAnim(u.selector_3, 378, 429, 4, 42, E)) : u.flag_sprite && (h.resetSpriteAnim(u.selector_3, 378, 429, 4, E),
                    u.flag_sprite = !1),
                v.y < -480 ? v.flag_sprite || (v.flag_sprite = !0,
                    h.spriteAnim(v.selector_3, 378, 429, 4, 43, F)) : v.flag_sprite && (h.resetSpriteAnim(v.selector_3, 378, 429, 4, F),
                    v.flag_sprite = !1),
                w.y < -600 ? w.flag_sprite || (w.flag_sprite = !0,
                    h.spriteAnim(w.selector_3, 378, 429, 4, 40, G)) : w.flag_sprite && (h.resetSpriteAnim(w.selector_3, 378, 429, 4, G),
                    w.flag_sprite = !1),
                x.y < -720 ? x.flag_sprite || (x.flag_sprite = !0,
                    h.spriteAnim(x.selector_3, 378, 429, 4, 44, H)) : x.flag_sprite && (h.resetSpriteAnim(x.selector_3, 378, 429, 4, H),
                    x.flag_sprite = !1),
            y.y0 < -414 && (y.flag_font1 || (y.flag_font1 = !0,
                h.fontAnim($(".style")))),
            y.y0 < -430 && (y.flag_font2 || (y.flag_font2 = !0,
                h.fontAnim($(".pratique")))),
            y.y0 < -448 && (y.flag_font3 || (y.flag_font3 = !0,
                h.fontAnim($(".antiderapant")))),
            y.y0 < -468 && (y.flag_font4 || (y.flag_font4 = !0,
                h.fontAnim($(".confort")))),
            y.y0 < -484 && (y.flag_font5 || (y.flag_font5 = !0,
                h.fontAnim($(".maintien")))),
            y.y0 < -502 && (y.flag_font6 || (y.flag_font6 = !0,
                h.fontAnim($(".raffinement")))),
                s.y < -50 ? q.all.hasClass("red") || (q.all.addClass("red"),
                    r.selector_1.addClass("mini")) : q.all.hasClass("red") && (q.all.removeClass("red"),
                    r.selector_1.removeClass("mini")),
                t.y < -200 ? q.all.hasClass("grey") || q.all.addClass("grey") : q.all.hasClass("grey") && q.all.removeClass("grey"),
                u.y < -320 ? q.all.hasClass("yellow") || q.all.addClass("yellow") : q.all.hasClass("yellow") && q.all.removeClass("yellow"),
                v.y < -430 ? q.all.hasClass("pink") || q.all.addClass("pink") : q.all.hasClass("pink") && q.all.removeClass("pink"),
                w.y < -550 ? q.all.hasClass("victoria") || q.all.addClass("victoria") : q.all.hasClass("victoria") && q.all.removeClass("victoria"),
                x.y < -710 ? q.all.hasClass("blue") || q.all.addClass("blue") : q.all.hasClass("blue") && q.all.removeClass("blue"),
                x.y < -810 ? q.all.hasClass("green2") || q.all.addClass("green2") : q.all.hasClass("green2") && q.all.removeClass("green2"),
                window.requestAnimFrame(d)
        }
        function e() {
            r.y = window.melanieClient.util.minVal(-190, window.melanieClient.util.roundTwo(.08 * (j / -7.5 - r.y) + r.y)),
                r.y_0 = window.melanieClient.util.maxVal(100, window.melanieClient.util.roundTwo(.08 * (j / 15 - r.y_0) + r.y_0)),
                r.y_1 = window.melanieClient.util.minVal(0, window.melanieClient.util.roundTwo(.08 * (j / -3 - r.y_1 + r.start_y_1) + r.y_1)),
                s.y = window.melanieClient.util.minVal(-285, window.melanieClient.util.roundTwo(.08 * (j / -8.5 - s.y) + s.y)),
                s.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (j / 25 - s.y_0 + s.start_y_0) + s.y_0)),
                t.y = window.melanieClient.util.minVal(-405, window.melanieClient.util.roundTwo(.08 * (j / -8.5 - t.y) + t.y)),
                t.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (j / 25 - t.y_0 + t.start_y_0) + t.y_0)),
                u.y = window.melanieClient.util.minVal(-530, window.melanieClient.util.roundTwo(.08 * (j / -8.5 - u.y) + u.y)),
                u.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (j / 25 - u.y_0 + u.start_y_0) + u.y_0)),
                v.y = window.melanieClient.util.minVal(-670, window.melanieClient.util.roundTwo(.08 * (j / -8.5 - v.y) + v.y)),
                v.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (j / 25 - v.y_0 + v.start_y_0) + v.y_0)),
                w.y = window.melanieClient.util.minVal(-800, window.melanieClient.util.roundTwo(.08 * (j / -8.5 - w.y) + w.y)),
                w.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (j / 25 - w.y_0 + w.start_y_0) + w.y_0)),
                x.y = window.melanieClient.util.minVal(-930, window.melanieClient.util.roundTwo(.08 * (j / -8.5 - x.y) + x.y)),
                x.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (j / 25 - x.y_0 + x.start_y_0) + x.y_0)),
                y.y0 = window.melanieClient.util.roundTwo(.08 * (j / -17 - y.y0) + y.y0),
                z.y = window.melanieClient.util.roundTwo(.08 * (j / -25 - z.y + z.start_y) + z.y),
                f.set(r.selector, {
                    yPercent: r.y,
                    force3D: !0
                }),
                f.set(r.selector_0, {
                    yPercent: r.y_0,
                    alpha: r.opacity,
                    force3D: !0
                }),
                f.set(r.selector_1, {
                    yPercent: r.y_1,
                    force3D: !0
                }),
                f.set(s.selector, {
                    yPercent: s.y,
                    force3D: !0
                }),
                f.set(s.selector_0, {
                    yPercent: s.y_0,
                    force3D: !0
                }),
                f.set(t.selector, {
                    yPercent: t.y,
                    force3D: !0
                }),
                f.set(t.selector_0, {
                    yPercent: t.y_0,
                    force3D: !0
                }),
                f.set(u.selector, {
                    yPercent: u.y,
                    force3D: !0
                }),
                f.set(u.selector_0, {
                    yPercent: u.y_0,
                    force3D: !0
                }),
                f.set(v.selector, {
                    yPercent: v.y,
                    force3D: !0
                }),
                f.set(v.selector_0, {
                    yPercent: v.y_0,
                    force3D: !0
                }),
                f.set(w.selector, {
                    yPercent: w.y,
                    force3D: !0
                }),
                f.set(w.selector_0, {
                    yPercent: w.y_0,
                    force3D: !0
                }),
                f.set(x.selector, {
                    yPercent: x.y,
                    force3D: !0
                }),
                f.set(x.selector_0, {
                    yPercent: x.y_0,
                    force3D: !0
                }),
                f.set(y.selector0, {
                    yPercent: y.y0,
                    force3D: !0
                }),
                f.set(z.selector, {
                    yPercent: z.y,
                    force3D: !0
                }),
                s.y < -50 ? r.selector_1.hasClass("mini") || r.selector_1.addClass("mini") : r.selector_1.hasClass("mini") && r.selector_1.removeClass("mini"),
                window.requestAnimFrame(e)
        }
        var f = window.TweenMax;
        window.MelanieStart = new a;
        var g = new b
            , h = new c
            , i = !0
            , j = 0
            , k = 0
            , l = 0
            , m = 0
            , n = $(".scroll");
        window.melanieClient.mobile ? ($(document).on("touchstart", function(a) {
            k = 2.5 * a.originalEvent.changedTouches[0].pageY
        }),
            $(document).on("touchmove", function(a) {
                a.preventDefault(),
                    m = 2.5 * a.originalEvent.changedTouches[0].pageY,
                    l = k - m,
                    j > 20 ? n.hasClass("hide") || (n.addClass("hide"),
                        f.to(n, .8, {
                            alpha: 0,
                            ease: "easeIn"
                        })) : n.hasClass("hide") && (n.removeClass("hide"),
                        f.to(n, .8, {
                            alpha: 1,
                            ease: "easeIn"
                        })),
                    l > 0 ? j += Math.abs(l) : j -= Math.abs(l),
                    j = window.melanieClient.util.betweenVal(0, p, j),
                    k = m
            })) : $(window).on("scroll", function() {
            i && (i = !1,
                window.scroll(0, 0)),
                j = $(this).scrollTop(),
                j > 200 ? n.hasClass("hide") || (n.addClass("hide"),
                    f.to(n, .4, {
                        alpha: 0,
                        ease: "easeIn"
                    })) : n.hasClass("hide") && (n.removeClass("hide"),
                    f.to(n, .4, {
                        alpha: 1,
                        ease: "easeIn"
                    }))
        }),
            $(".logo").on(window.melanieClient.click, function() {
                window.melanieClient.mobile ? j = 0 : window.scroll(0, 0)
            }),
            $(".nav-menu").on(window.melanieClient.click, function(a) {
                a.preventDefault(),
                g.animFlag || (g.openFlag ? g.close() : g.open())
            }),
            $(".nav-menu").on("mouseenter", function() {
                g.hover()
            }).on("mouseleave", function() {
                g.leave()
            }),
            $(".menu").find(".slipper-link").on("mouseenter", function() {
                g.hoverLink($(this).find(".line-link"))
            }).on("mouseleave", function() {
                g.leaveLink($(this).find(".line-link"))
            }),
            $(".half-screen").find("a").on("mouseenter", function() {
                g.hoverLink($(this).find(".line-link"))
            }).on("mouseleave", function() {
                g.leaveLink($(this).find(".line-link"))
            }),
            $(".social-menu").find("a").on("mouseenter", function() {
                g.hoverSocial($(this), $(this).index())
            }).on("mouseleave", function() {
                g.leaveSocial($(this))
            }),
            $(".menu").find(".slipper-link").on(window.melanieClient.click, function() {
                var a = $(this).index(".slipper-link");
                i = !1,
                    window.melanieClient.mobile ? (n.hasClass("hide") || (n.addClass("hide"),
                        f.to(n, .8, {
                            alpha: 0,
                            ease: "easeIn"
                        })),
                        j = 0 === a ? 1275 : 1275 + 1020 * a) : 0 === a ? window.scroll(0, 2550) : window.scroll(0, 2550 + 2040 * a - 1),
                    g.close()
            }),
            $(".half-screen").find(".left a").on(window.melanieClient.click, function(a) {
                a.preventDefault(),
                    i = !1,
                    window.melanieClient.mobile ? (n.hasClass("hide") || (n.addClass("hide"),
                        f.to(n, .8, {
                            alpha: 0,
                            ease: "easeIn"
                        })),
                        j = 6375 + $(window).height() / 1.25) : window.scroll(0, 12750 + $(window).height() + $(window).height() / 2)
            }),
            $(".half-screen").on(window.melanieClient.click, function() {
                g.animFlag || g.close()
            }),
            $(".sound").on("click", function() {
                $(this).toggleClass("on"),
                    $(".loop-audio").get(0).volume = $(this).hasClass("on") ? 1 : 0
            }),
            $(".link-shop").on("mouseenter", function() {
                h.hoverShop($(this))
            }).on("mouseleave", function() {
                h.leaveShop($(this), $(this).attr("data-color"))
            }),
            $(".link-footer").on("mouseenter", function() {
                h.hoverFooter($(this))
            }).on("mouseleave", function() {
                h.leaveFooter($(this), $(this).attr("data-color"))
            });
        var o = $(".usual-nav")
            , p = 0;
        window.melanieClient.mobile ? $(window).on("resize", function() {
            p = 9350
        }) : $(window).on("resize", function() {
            p = 18700 + $(window).height(),
                o.height(p)
        });
        var q = {
            shapes_y: 0,
            rotate1: 0,
            rotate2: 0,
            rotate3: 0,
            all: $(".shapes"),
            triangle: $(".triangle.big"),
            triangleSmall: $(".triangle.small"),
            circle: $(".circle"),
            diamond: $(".diamond"),
            waves: $(".waves"),
            hexa: $(".hexa"),
            y_0: 0,
            y_0_bis: 0,
            y_1: 0,
            y_2: 0,
            y_3: 0,
            y_4: 0
        }
            , r = {
            selector: $(".splash"),
            selector_0: $(".content-splash"),
            selector_1: $(".logo-wrapper"),
            flag_sprite: !1,
            y: 0,
            y_0: 0,
            y_1: 350,
            start_y_1: 370
        }
            , s = {
            selector: $(".slipper.one"),
            selector_0: $(".slipper.one").find(".gradient"),
            selector_1: $(".slipper.one").find(".slipper-object"),
            selector_2: $(".slipper.one").find(".letter"),
            selector_3: $(".slipper.one").find(".sprite-letter"),
            flag_sprite: !1,
            y: 0,
            y_0: 0,
            start_y_0: -34.25,
            y_1: 0,
            start_y_1: -50,
            y_2: 0,
            start_y_2: 102
        }
            , t = {
            selector: $(".slipper.two"),
            selector_0: $(".slipper.two").find(".gradient"),
            selector_1: $(".slipper.two").find(".slipper-object"),
            selector_2: $(".slipper.two").find(".letter"),
            selector_3: $(".slipper.two").find(".sprite-letter"),
            flag_sprite: !1,
            y: 0,
            y_0: 0,
            start_y_0: -78.5,
            y_1: 0,
            start_y_1: -65,
            y_2: 0,
            start_y_2: 184
        }
            , u = {
            selector: $(".slipper.three"),
            selector_0: $(".slipper.three").find(".gradient"),
            selector_1: $(".slipper.three").find(".slipper-object"),
            selector_2: $(".slipper.three").find(".letter"),
            selector_3: $(".slipper.three").find(".sprite-letter"),
            flag_sprite: !1,
            y: 0,
            y_0: 0,
            start_y_0: -122.75,
            y_1: 0,
            start_y_1: -80,
            y_2: 0,
            start_y_2: 266
        }
            , v = {
            selector: $(".slipper.four"),
            selector_0: $(".slipper.four").find(".gradient"),
            selector_1: $(".slipper.four").find(".slipper-object"),
            selector_2: $(".slipper.four").find(".letter"),
            selector_3: $(".slipper.four").find(".sprite-letter"),
            flag_sprite: !1,
            y: 0,
            y_0: 0,
            start_y_0: -167,
            y_1: 0,
            start_y_1: -95,
            y_2: 0,
            start_y_2: 348
        }
            , w = {
            selector: $(".slipper.five"),
            selector_0: $(".slipper.five").find(".gradient"),
            selector_1: $(".slipper.five").find(".slipper-object"),
            selector_2: $(".slipper.five").find(".letter"),
            selector_3: $(".slipper.five").find(".sprite-letter"),
            flag_sprite: !1,
            y: 0,
            y_0: 0,
            start_y_0: -211.25,
            y_1: 0,
            start_y_1: -110,
            y_2: 0,
            start_y_2: 430
        }
            , x = {
            selector: $(".slipper.six"),
            selector_0: $(".slipper.six").find(".gradient"),
            selector_1: $(".slipper.six").find(".slipper-object"),
            selector_2: $(".slipper.six").find(".letter"),
            selector_3: $(".slipper.six").find(".sprite-letter"),
            flag_sprite: !1,
            y: 0,
            y_0: 0,
            start_y_0: -245.5,
            y_1: 0,
            start_y_1: -125,
            y_2: 0,
            start_y_2: 512
        }
            , y = {
            selector0: $(".design"),
            selector1: $(".design-1"),
            selector2: $(".design-2"),
            selector3: $(".design-3"),
            selector4: $(".design-4"),
            y0: 0,
            y1: 0,
            start_y_1: 350,
            y2: 0,
            start_y_2: 320,
            y3: 0,
            start_y_3: 350,
            y4: 0,
            start_y_4: 350,
            flag_font1: !1,
            flag_font2: !1,
            flag_font3: !1,
            flag_font4: !1,
            flag_font5: !1,
            flag_font6: !1
        }
            , z = {
            selector: $(".gradient-footer"),
            y: 0,
            start_y: 375
        }
            , A = 0
            , B = {
            val: !1,
            state: 0
        }
            , C = {
            val: !1,
            state: 0
        }
            , D = {
            val: !1,
            state: 0
        }
            , E = {
            val: !1,
            state: 0
        }
            , F = {
            val: !1,
            state: 0
        }
            , G = {
            val: !1,
            state: 0
        }
            , H = {
            val: !1,
            state: 0
        };
        window.melanieClient.mobile ? e() : d(),
            $(".logo").addClass("show")
    }();
