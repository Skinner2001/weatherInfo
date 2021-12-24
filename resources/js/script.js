"use strict";
var userAgent = navigator.userAgent.toLowerCase(), initialDate = new Date, $document = $(document), $window = $(window), $html = $("html"), isDesktop = $html.hasClass("desktop"),
    isIE = -1 != userAgent.indexOf("msie") ? parseInt(userAgent.split("msie")[1]) : -1 != userAgent.indexOf("trident") ? 11 : -1 != userAgent.indexOf("edge") ? 12 : !1,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isTouch = "ontouchstart" in window, plugins = {
        pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : !1,
        smoothScroll: $html.hasClass("use--smoothscroll") ? "js/smoothscroll.min.js" : !1,
        bootstrapTooltip: $("[data-toggle='tooltip']"),
        bootstrapTabs: $(".tabs"),
        rdParallax: $(".rd-parallax"),
        rdAudioPlayer: $(".rd-audio"),
        rdVideoPlayer: $(".rd-video-player"),
        responsiveTabs: $(".responsive-tabs"),
        rdGoogleMaps: $(".rd-google-map"),
        rdNavbar: $(".rd-navbar"),
        rdVideoBG: $(".rd-video"),
        rdRange: $(".rd-range"),
        textRotator: $(".text-rotator"),
        owl: $(".owl-carousel"),
        swiper: $(".swiper-slider"),
        counter: $(".counter"),
        flickrfeed: $(".flickr"),
        twitterfeed: $(".twitter"),
        progressBar: $(".progress-bar-js"),
        progressLinear: $(".progress-linear"),
        isotope: $(".isotope"),
        countDown: $(".countdown"),
        calendar: $(".rd-calendar"),
        facebookfeed: $(".facebook"),
        instafeed: $(".instafeed"),
        facebookWidget: $("#fb-root"),
        materialTabs: $(".rd-material-tabs"),
        filePicker: $(".rd-file-picker"),
        fileDrop: $(".rd-file-drop"),
        popover: $('[data-toggle="popover"]'),
        dateCountdown: $(".DateCountdown"),
        statefulButton: $(".btn-stateful"),
        slick: $(".slick-slider"),
        scroller: $(".scroll-wrap"),
        socialite: $(".socialite"),
        viewAnimate: $(".view-animate"),
        selectFilter: $("select"),
        rdInputLabel: $(".form-label"),
        stacktable: $("[data-responsive=true]"),
        bootstrapDateTimePicker: $("[data-time-picker]"),
        customWaypoints: $("[data-custom-scroll-to]"),
        photoSwipeGallery: $("[data-photo-swipe-item]"),
        circleProgress: $(".progress-bar-circle"),
        stepper: $("input[type='number']"),
        radio: $("input[type='radio']"),
        checkbox: $("input[type='checkbox']"),
        customToggle: $("[data-custom-toggle]"),
        rdMailForm: $(".rd-mailform"),
        regula: $("[data-constraints]"),
        search: $(".rd-search"),
        searchResults: $(".rd-search-results"),
        imgZoom: $("[mag-thumb]"),
        thumbnailFeatureHover: $(".thumbnail-features")
    };
$document.ready(function () {
    function a(a, b) {
        var d, c = a.attr("data-" + b);
        if (!c) return void 0;
        if (d = c.match(/(px)|(%)|(vh)$/i), !d.length) return void 0;
        switch (d[0]) {
            case"px":
                return parseFloat(c);
            case"vh":
                return $(window).height() * (parseFloat(c) / 100);
            case"%":
                return a.width() * (parseFloat(c) / 100)
        }
    }

    function b(a) {
        var d, b = $(a.slides[a.previousIndex]), c = $(a.slides[a.activeIndex]);
        b.find("video").each(function () {
            this.pause()
        }), d = c.find("video"), d.length && d.get(0).play()
    }

    function c(a) {
        var b = $(a.container), c = $(a.slides[a.activeIndex]);
        b.find("[data-caption-animate]").each(function () {
            var a = $(this);
            a.removeClass("animated").removeClass(a.attr("data-caption-animate")).addClass("not-animated")
        }), c.find("[data-caption-animate]").each(function () {
            var a = $(this), b = a.attr("data-caption-delay"), c = a.attr("data-caption-duration");
            setTimeout(function () {
                a.removeClass("not-animated").addClass(a.attr("data-caption-animate")).addClass("animated"), c && a.css("animation-duration", c + "ms")
            }, b ? parseInt(b) : 0)
        })
    }

    function d(a, b, c, e) {
        var f = window.scrollY || window.pageYOffset;
        if (e != f && (e = f, a.addClass("no-transition"), a[0].style.transform = "translate3d(0," + -f * (1 - b) + "px,0)", a.height(), a.removeClass("no-transition"), "true" === a.attr("data-fade"))) {
            var m, g = a[0].getBoundingClientRect(), h = 2 * g.top + f, i = c.outerHeight(), j = c.offset().top + i / 2, k = h + a.outerHeight() / 2, l = i / 6;
            j + l > k && j - l < k ? a[0].style.opacity = 1 : (m = j - l < k ? 1 + (j + l - k) / i / 3 * 5 : 1 - (j - l - k) / i / 3 * 5, a[0].style.opacity = m < 0 ? 0 : m > 1 ? 1 : m.toFixed(2))
        }
        requestAnimationFrame(function () {
            d(a, b, c, e)
        })
    }

    function e(a) {
        var b = $(window);
        return a.offset().top + a.outerHeight() >= b.scrollTop() && a.offset().top <= b.scrollTop() + b.height()
    }

    function f(a, b) {
        var c = jQuery(window);
        c.on("load scroll", function () {
            !a.hasClass("lazy-loaded") && e(a) && (b.call(), a.addClass("lazy-loaded"))
        })
    }

    function g(a) {
        $("#" + a.live).removeClass("cleared").html(), a.current++, a.spin.addClass("loading"), $.get(_, {
            s: decodeURI(a.term),
            liveSearch: a.live,
            dataType: "html",
            liveCount: a.liveCount,
            filter: a.filter,
            template: a.template
        }, function (b) {
            a.processed++;
            var c = $("#" + a.live);
            a.processed != a.current || c.hasClass("cleared") || (c.find("> #search-results").removeClass("active"), c.html(b), setTimeout(function () {
                c.find("> #search-results").addClass("active")
            }, 50)), a.spin.parents(".rd-search").find(".input-group-addon").removeClass("loading")
        })
    }

    function h(a) {
        for (var b = 0; b < a.length; b++) {
            var d, c = $(a[b]);
            c.addClass("form-control-has-validation").after("<span class='form-validation'></span>"), d = c.parent().find(".form-validation"), d.is(":last-child") && c.addClass("form-control-last-child")
        }
        a.on("input change propertychange blur", function (a) {
            var d, c = $(this);
            if (("blur" == a.type || c.parent().hasClass("has-error")) && !c.parents(".rd-mailform").hasClass("success")) if ((d = c.regula("validate")).length) for (b = 0; b < d.length; b++) c.siblings(".form-validation").text(d[b].message).parent().addClass("has-error"); else c.siblings(".form-validation").text("").parent().removeClass("has-error")
        }).regula("bind")
    }

    function i(a) {
        var b, c = 0;
        if (a.length) {
            for (u = 0; u < a.length; u++) {
                var d = $(a[u]);
                if ((b = d.regula("validate")).length) for (mb = 0; mb < b.length; mb++) c++, d.siblings(".form-validation").text(b[mb].message).parent().addClass("has-error"); else d.siblings(".form-validation").text("").parent().removeClass("has-error")
            }
            return 0 == c
        }
        return !0
    }

    function j() {
        window.innerWidth < 599 ? (plugins.bootstrapTooltip.tooltip("destroy"), plugins.bootstrapTooltip.tooltip({placement: "bottom"})) : (plugins.bootstrapTooltip.tooltip("destroy"), plugins.bootstrapTooltip.tooltipPlacement, plugins.bootstrapTooltip.tooltip())
    }

    function k(a, b) {
        var c, d, e;
        a.find(".resp-tabs-extertal-list li").removeClass("active"), e = a.find(".resp-tab-item.resp-tab-active"), d = e.next(), d.length || (d = a.find(".resp-tab-item:first-child()")), c = e.prev(), c.length || (c = a.find(".resp-tab-item:last-child()")), b && ("next" === b ? d.trigger("click") : c.trigger("click"), setTimeout(function () {
            k(a)
        }, 10)), a.find(".resp-tab-external-prev li:nth-child(" + (c.index() + 1) + ")").addClass("active"), a.find(".resp-tab-external-next li:nth-child(" + (d.index() + 1) + ")").addClass("active")
    }

    var l = $("#copyright-year");
    if (l.length && l.text(initialDate.getFullYear()), isIE && (isIE < 10 && $html.addClass("lt-ie-10"), isIE < 11 && plugins.pointerEvents && $.getScript(plugins.pointerEvents).done(function () {
        $html.addClass("ie-10"), PointerEventsPolyfill.initialize({})
    }), 11 === isIE && $("html").addClass("ie-11"), 12 === isIE && $("html").addClass("ie-edge")), plugins.bootstrapTooltip.length) {
        var m = plugins.bootstrapTooltip.attr("data-placement");
        j(m), $(window).on("resize orientationchange", function () {
            j(m)
        })
    }
    if (plugins.smoothScroll && $.getScript(plugins.smoothScroll), plugins.rdAudioPlayer.length > 0) {
        var n;
        for (n = 0; n < plugins.rdAudioPlayer.length; n++) $(plugins.rdAudioPlayer[n]).RDAudio()
    }
    if (plugins.textRotator.length) {
        var n;
        for (n = 0; n < plugins.textRotator.length; n++) {
            var o = plugins.textRotator[n];
            $(o).rotator()
        }
    }
    if (plugins.rdGoogleMaps.length) {
        var n;
        $.getScript("//maps.google.com/maps/api/js?key=AIzaSyAFeB0kVA6ouyJ_gEvFbMaefLy3cBCyRwo&sensor=false&libraries=geometry,places&v=3.7", function () {
            var a = document.getElementsByTagName("head")[0], b = a.insertBefore;
            for (a.insertBefore = function (c, d) {
                c.href && -1 != c.href.indexOf("//fonts.googleapis.com/css?family=Roboto") || -1 != c.innerHTML.indexOf("gm-style") || b.call(a, c, d)
            }, n = 0; n < plugins.rdGoogleMaps.length; n++) {
                var c = $(plugins.rdGoogleMaps[n]);
                f(c, $.proxy(function () {
                    var a = $(this), b = a.attr("data-styles");
                    a.googleMap({
                        styles: b ? JSON.parse(b) : [], onInit: function (a) {
                            var b = $("#rd-google-map-address");
                            if (b.length) {
                                var c = b, d = new google.maps.Geocoder, e = new google.maps.Marker({map: a, icon: "images/gmap_marker.png"}), f = new google.maps.places.Autocomplete(b[0]);
                                f.bindTo("bounds", a), b.attr("placeholder", ""), b.on("change", function () {
                                    $("#rd-google-map-address-submit").trigger("click")
                                }), b.on("keydown", function (a) {
                                    13 == a.keyCode && $("#rd-google-map-address-submit").trigger("click")
                                }), $("#rd-google-map-address-submit").on("click", function (b) {
                                    b.preventDefault();
                                    var f = c.val();
                                    d.geocode({address: f}, function (b, c) {
                                        if (c == google.maps.GeocoderStatus.OK) {
                                            var d = b[0].geometry.location.lat(), f = b[0].geometry.location.lng();
                                            a.setCenter(new google.maps.LatLng(parseFloat(d), parseFloat(f))), e.setPosition(new google.maps.LatLng(parseFloat(d), parseFloat(f)))
                                        }
                                    })
                                })
                            }
                        }
                    })
                }, c))
            }
        })
    }
    if (plugins.bootstrapDateTimePicker.length) {
        var n;
        for (n = 0; n < plugins.bootstrapDateTimePicker.length; n++) {
            var p = $(plugins.bootstrapDateTimePicker[n]), q = {};
            q.format = "dddd DD MMMM YYYY - HH:mm", "date" == p.attr("data-time-picker") ? (q.format = "dddd DD MMMM YYYY", q.minDate = new Date) : "time" == p.attr("data-time-picker") && (q.format = "HH:mm"), q.time = "date" != p.attr("data-time-picker"), q.date = "time" != p.attr("data-time-picker"), q.shortTime = !0, p.bootstrapMaterialDatePicker(q)
        }
    }
    if (plugins.responsiveTabs.length > 0) {
        var n;
        for (n = 0; n < plugins.responsiveTabs.length; n++) {
            var r = $(plugins.responsiveTabs[n]);
            if (r.easyResponsiveTabs({type: "accordion" === r.attr("data-type") ? "accordion" : "default"}), r.find(".owl-carousel").length && r.find(".resp-tab-item").on("click", $.proxy(function () {
                var b = $(this), c = b.find(".resp-tab-content-active .owl-carousel").owlCarousel().data("owlCarousel");
                c && "function" === typeof c.onResize && c.onResize()
            }, r)), r.find(".slick-slider").length && r.find(".resp-tab-item").on("click", $.proxy(function () {
                var b = $(this);
                b.find(".resp-tab-content-active .slick-slider").slick("setPosition")
            }, r)), "true" == r.attr("data-external-buttons")) {
                for (var s = r.find(".resp-tabs-list li"), t = '<ul class="resp-tabs-extertal-list">', u = 0; u < s.length; u++) t += "<li><span>" + $(s[u]).text() + "</span></li>";
                t += "</ul>", r.find(".resp-tabs-container").before('<div class="resp-tab-external-prev"></div>'), r.find(".resp-tab-external-prev").html(t), r.find(".resp-tabs-container").after('<div class="resp-tab-external-next"></div>'), r.find(".resp-tab-external-next").html(t), k(r), r.find(".resp-tab-external-prev").on("click", $.proxy(function () {
                    var b = $(this);
                    k(b, "prev")
                }, r)), r.find(".resp-tab-external-next").on("click", $.proxy(function () {
                    var b = $(this);
                    k(b, "next")
                }, r)), r.find(".resp-tabs-list .resp-tab-item").on("click", $.proxy(function () {
                    var b = $(this);
                    k(b)
                }, r))
            }
        }
    }
    if (plugins.instafeed.length > 0) {
        var n;
        for (n = 0; n < plugins.instafeed.length; n++) {
            var v = $(plugins.instafeed[n]);
            v.RDInstafeed({})
        }
    }
    if (plugins.twitterfeed.length > 0) {
        var n;
        for (n = 0; n < plugins.twitterfeed.length; n++) {
            var w = plugins.twitterfeed[n];
            $(w).RDTwitter({})
        }
    }
    if (plugins.materialTabs.length) {
        var n;
        for (n = 0; n < plugins.materialTabs.length; n++) {
            var x = plugins.materialTabs[n];
            $(x).RDMaterialTabs({})
        }
    }
    if (plugins.facebookfeed.length > 0) {
        var n;
        for (n = 0; n < plugins.facebookfeed.length; n++) {
            var y = plugins.facebookfeed[n];
            $(y).RDFacebookFeed({})
        }
    }
    if (plugins.facebookWidget.length && f(plugins.facebookWidget, function () {
        !function (a, b, c) {
            var d, e = a.getElementsByTagName(b)[0];
            a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5", e.parentNode.insertBefore(d, e))
        }(document, "script", "facebook-jssdk")
    }), plugins.flickrfeed.length > 0) {
        var n;
        for (n = 0; n < plugins.flickrfeed.length; n++) {
            var z = $(plugins.flickrfeed[n]);
            z.RDFlickr({
                callback: function () {
                    var a = z.find("[data-photo-swipe-item]");
                    if (a.length) for (var b = 0; b < a.length; b++) {
                        var c = new Image;
                        c.setAttribute("data-index", b), c.onload = function () {
                            a[this.getAttribute("data-index")].setAttribute("data-size", this.naturalWidth + "x" + this.naturalHeight)
                        }, c.src = a[b].getAttribute("href")
                    }
                }
            })
        }
    }
    if (plugins.selectFilter.length) {
        var n;
        for (n = 0; n < plugins.selectFilter.length; n++) {
            var A = $(plugins.selectFilter[n]);
            A.select2({theme: "bootstrap"}).next().addClass(A.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", "g"), " "))
        }
    }
    if (plugins.stepper.length && plugins.stepper.stepper({labels: {up: "", down: ""}}), plugins.radio.length) {
        var n;
        for (n = 0; n < plugins.radio.length; n++) {
            var B = $(plugins.radio[n]);
            B.addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
        }
    }
    if (plugins.checkbox.length) {
        var n;
        for (n = 0; n < plugins.checkbox.length; n++) {
            var B = $(plugins.checkbox[n]);
            B.addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
        }
    }
    if (plugins.filePicker.length || plugins.fileDrop.length) {
        var n;
        for (n = 0; n < plugins.filePicker.length; n++) {
            var C = plugins.filePicker[n];
            $(C).RDFilepicker({metaFieldClass: "rd-file-picker-meta"})
        }
        for (n = 0; n < plugins.fileDrop.length; n++) {
            var D = plugins.fileDrop[n];
            $(D).RDFilepicker({metaFieldClass: "rd-file-drop-meta", buttonClass: "rd-file-drop-btn", dropZoneClass: "rd-file-drop"})
        }
    }
    if (plugins.popover.length && (window.innerWidth < 767 ? (plugins.popover.attr("data-placement", "bottom"), plugins.popover.popover()) : plugins.popover.popover()), plugins.countDown.length) {
        var n;
        for (n = 0; n < plugins.countDown.length; n++) {
            var E = plugins.countDown[n], F = new Date, G = E.getAttribute("data-type"), H = E.getAttribute("data-time"), I = E.getAttribute("data-format"), J = [];
            F.setTime(Date.parse(H)).toLocaleString(), J[G] = F, J.format = I, $(E).countdown(J)
        }
    }
    if (plugins.dateCountdown.length) {
        var n;
        for (n = 0; n < plugins.dateCountdown.length; n++) {
            var K = $(plugins.dateCountdown[n]), H = {
                Days: {text: "Days", color: "#5dd39e", show: !0},
                Hours: {text: "Hours", color: "#5dd39e", show: !0},
                Minutes: {text: "Minutes", color: "#5dd39e", show: !0},
                Seconds: {text: "Seconds", color: "#5dd39e", show: !0}
            };
            K.TimeCircles({animation: "smooth", bg_width: 1, fg_width: .034, circle_bg_color: "rgba(247,247,247,1)", time: H}), $(window).on("load resize orientationchange", function () {
                window.innerWidth < 479 ? K.TimeCircles({
                    time: {
                        Minutes: {show: !0},
                        Seconds: {show: !1}
                    }
                }).rebuild() : window.innerWidth < 767 ? K.TimeCircles({time: {Seconds: {show: !1}}}).rebuild() : K.TimeCircles({time: H}).rebuild()
            })
        }
    }
    if (plugins.statefulButton.length && $(plugins.statefulButton).on("click", function () {
        var a = $(this).button("loading");
        setTimeout(function () {
            a.button("reset")
        }, 2e3)
    }), plugins.calendar.length) {
        var n;
        for (n = 0; n < plugins.calendar.length; n++) {
            var L = $(plugins.calendar[n]);
            L.rdCalendar({
                days: L.attr("data-days") ? L.attr("data-days").split(/\s?,\s?/i) : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                month: L.attr("data-months") ? L.attr("data-months").split(/\s?,\s?/i) : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            })
        }
    }
    if (plugins.circleProgress.length) {
        var n;
        for (n = 0; n < plugins.circleProgress.length; n++) {
            var M = $(plugins.circleProgress[n]);
            $document.on("scroll", function () {
                if (!M.hasClass("animated")) {
                    var a = M.attr("data-gradient").split(",");
                    M.circleProgress({
                        value: M.attr("data-value"),
                        size: M.attr("data-size") ? M.attr("data-size") : 175,
                        fill: {gradient: a, gradientAngle: Math.PI / 4},
                        startAngle: -Math.PI / 4 * 2,
                        emptyFill: M.attr("data-empty-fill") ? M.attr("data-empty-fill") : "rgb(245,245,245)",
                        thickness: M.attr("data-thickness") ? parseInt(M.attr("data-thickness")) : 10
                    }).on("circle-animation-progress", function (a, b, c) {
                        $(this).find("span").text(String(c.toFixed(2)).replace("0.", "").replace("1.", "1"))
                    }), M.addClass("animated")
                }
            }).trigger("scroll")
        }
    }
    if (plugins.progressLinear.length) for (n = 0; n < plugins.progressLinear.length; n++) {
        var N = $(plugins.progressLinear[n]);
        $window.on("scroll load", $.proxy(function () {
            var a = $(this);
            if (!a.hasClass("animated-first") && e(a)) {
                var b = a.attr("data-to");
                a.find(".progress-bar-linear").css({width: b + "%"}), a.find(".progress-value").countTo({refreshInterval: 40, from: 0, to: b, speed: 500}), a.addClass("animated-first")
            }
        }, N))
    }
    if (plugins.progressBar.length) {
        var n, O, G;
        for (n = 0; n < plugins.progressBar.length; n++) {
            var P = plugins.progressBar[n];
            O = null, P.className.indexOf("progress-bar-horizontal") > -1 && (G = "Line"), P.className.indexOf("progress-bar-radial") > -1 && (G = "Circle"), P.getAttribute("data-stroke") && P.getAttribute("data-value") && G ? (O = new ProgressBar[G](P, {
                strokeWidth: Math.round(parseFloat(P.getAttribute("data-stroke")) / P.offsetWidth * 100),
                trailWidth: P.getAttribute("data-trail") ? Math.round(parseFloat(P.getAttribute("data-trail")) / P.offsetWidth * 100) : 0,
                text: {value: "true" === P.getAttribute("data-counter") ? "0" : null, className: "progress-bar__body", style: null}
            }), O.svg.setAttribute("preserveAspectRatio", "none meet"), "Line" === G && O.svg.setAttributeNS(null, "height", P.getAttribute("data-stroke")), O.path.removeAttribute("stroke"), O.path.className.baseVal = "progress-bar__stroke", O.trail && (O.trail.removeAttribute("stroke"), O.trail.className.baseVal = "progress-bar__trail"), P.getAttribute("data-easing") && !isIE ? $(document).on("scroll", {barItem: O}, $.proxy(function (a) {
                var b = a.data.barItem, c = $(this);
                e(c) && -1 === this.className.indexOf("progress-bar--animated") && (this.className += " progress-bar--animated", b.animate(parseInt(c.attr("data-value")) / 100, {
                    easing: c.attr("data-easing"),
                    duration: c.attr("data-duration") ? parseInt(c.attr("data-duration")) : 800,
                    step: function (a, b) {
                        (b._container.className.indexOf("progress-bar-horizontal") > -1 || b._container.className.indexOf("progress-bar-vertical") > -1) && (b.text.style.width = Math.abs(100 * b.value()).toFixed(0) + "%"), b.setText(Math.abs(100 * b.value()).toFixed(0))
                    }
                }))
            }, P)).trigger("scroll") : (O.set(parseInt($(P).attr("data-value")) / 100), O.setText($(P).attr("data-value")), "Line" === G && (O.text.style.width = parseInt($(P).attr("data-value")) + "%"))) : console.error(P.className + ": progress bar type is not defined")
        }
    }
    if (isDesktop && $().UItoTop({
        easingType: "easeOutQuart",
        containerClass: "ui-to-top fa fa-angle-up"
    }), plugins.rdNavbar.length && (plugins.rdNavbar.RDNavbar({stickUpClone: plugins.rdNavbar.attr("data-stick-up-clone") ? "true" === plugins.rdNavbar.attr("data-stick-up-clone") : !1}), plugins.rdNavbar.attr("data-body-class") && (document.body.className += " " + plugins.rdNavbar.attr("data-body-class"))), plugins.viewAnimate.length) {
        var n;
        for (n = 0; n < plugins.viewAnimate.length; n++) {
            var Q = $(plugins.viewAnimate[n]).not(".active");
            $document.on("scroll", $.proxy(function () {
                e(this) && this.addClass("active")
            }, Q)).trigger("scroll")
        }
    }
    if (plugins.swiper.length) {
        var n;
        for (n = 0; n < plugins.swiper.length; n++) {
            var R = $(plugins.swiper[n]), S = R.find(".swiper-pagination"), T = R.find(".swiper-button-next"), U = R.find(".swiper-button-prev"), O = R.find(".swiper-scrollbar"),
                V = R.parents(".rd-parallax").length, W = R.find(".swiper-slide");
            for (u = 0; u < W.length; u++) {
                var X, B = $(W[u]);
                (X = B.attr("data-slide-bg")) && B.css({"background-image": "url(" + X + ")", "background-size": "cover"})
            }
            W.end().find("[data-caption-animate]").addClass("not-animated").end().swiper({
                autoplay: R.attr("data-autoplay") ? "false" === R.attr("data-autoplay") ? void 0 : R.attr("data-autoplay") : 5e3,
                direction: R.attr("data-direction") ? R.attr("data-direction") : "horizontal",
                effect: R.attr("data-slide-effect") ? R.attr("data-slide-effect") : "slide",
                speed: R.attr("data-slide-speed") ? R.attr("data-slide-speed") : 600,
                keyboardControl: "true" === R.attr("data-keyboard"),
                mousewheelControl: "true" === R.attr("data-mousewheel"),
                mousewheelReleaseOnEdges: "true" === R.attr("data-mousewheel-release"),
                nextButton: T.length ? T.get(0) : null,
                prevButton: U.length ? U.get(0) : null,
                pagination: S.length ? S.get(0) : null,
                paginationClickable: S.length ? "false" !== S.attr("data-clickable") : !1,
                paginationBulletRender: S.length && "true" === S.attr("data-index-bullet") ? function (a, b) {
                    return '<span class="' + b + '">' + (a + 1) + "</span>"
                } : null,
                scrollbar: O.length ? O.get(0) : null,
                scrollbarDraggable: O.length ? "false" !== O.attr("data-draggable") : !0,
                scrollbarHide: O.length ? "false" === O.attr("data-draggable") : !1,
                loop: "false" !== R.attr("data-loop"),
                simulateTouch: R.attr("data-simulate-touch") ? "true" === R.attr("data-simulate-touch") : !1,
                onTransitionStart: function (a) {
                    b(a)
                },
                onTransitionEnd: function (a) {
                    c(a)
                },
                onInit: function (a) {
                    b(a), c(a);
                    for (var e = R.find(".swiper-parallax"), f = 0; f < e.length; f++) {
                        var h, g = $(e[f]);
                        !V || isIEBrows || isMobile || (h = g.attr("data-speed")) && d(g, h, R, !1)
                    }
                    $(window).on("resize", function () {
                        a.update(!0)
                    })
                }
            }), $(window).on("resize", function () {
                var b = a(R, "min-height"), c = a(R, "height");
                c && R.css("height", b && b > c ? b : c)
            }).trigger("resize")
        }
    }
    if (plugins.rdVideoPlayer.length) {
        var n;
        for (n = 0; n < plugins.rdVideoPlayer.length; n++) {
            var Y = plugins.rdVideoPlayer[n], Z = $(".rd-video-volume-wrap");
            $(Y).RDVideoPlayer({}), Z.on("mouseenter", function () {
                $(this).addClass("hover")
            }), Z.on("mouseleave", function () {
                $(this).removeClass("hover")
            }), isTouch && (Z.find(".rd-video-volume").on("click", function () {
                $(this).toggleClass("hover")
            }), $document.on("click", function (a) {
                $(a.target).is(Z) || 0 != $(a.target).parents(Z).length || Z.find(".rd-video-volume").removeClass("hover")
            }))
        }
    }
    if (plugins.search.length || plugins.searchResults) {
        var _ = "bat/rd-search.php",
            ab = '<h5 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h5><p>...#{token}...</p><p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>',
            bb = "*.html";
        if (plugins.search.length) for (n = 0; n < plugins.search.length; n++) {
            var cb = $(plugins.search[n]), q = {
                element: cb,
                filter: cb.attr("data-search-filter") ? cb.attr("data-search-filter") : bb,
                template: cb.attr("data-search-template") ? cb.attr("data-search-template") : ab,
                live: cb.attr("data-search-live") ? cb.attr("data-search-live") : !1,
                liveCount: cb.attr("data-search-live-count") ? parseInt(cb.attr("data-search-live")) : 4,
                current: 0,
                processed: 0,
                timer: {}
            };
            if ($(".rd-navbar-search-toggle").length) {
                var db = $(".rd-navbar-search-toggle");
                db.on("click", function () {
                    $(this).hasClass("active") || cb.find("input").val("").trigger("propertychange")
                })
            }
            if (q.live) {
                var eb = !1;
                cb.find("input").on("keyup input propertychange", $.proxy(function () {
                    this.term = this.element.find("input").val().trim(), this.spin = this.element.find(".input-group-addon"), clearTimeout(this.timer), this.term.length > 2 ? (this.timer = setTimeout(g(this), 200), 0 == eb && (eb = !0, $("body").on("click", function (a) {
                        0 == $(a.toElement).parents(".rd-search").length && $(".rd-search-results-live").addClass("cleared").html("")
                    }))) : 0 == this.term.length && $("#" + this.live).addClass("cleared").html("")
                }, q, this))
            }
            cb.submit($.proxy(function () {
                return $("<input />").attr("type", "hidden").attr("name", "filter").attr("value", this.filter).appendTo(this.element), !0
            }, q, this))
        }
        if (plugins.searchResults.length) {
            var fb = /\?.*s=([^&]+)\&filter=([^&]+)/g, gb = fb.exec(location.search);
            null != gb && $.get(_, {s: decodeURI(gb[1]), dataType: "html", filter: gb[2], template: ab, live: ""}, function (a) {
                plugins.searchResults.html(a)
            })
        }
    }
    if (plugins.slick.length) {
        var n;
        for (n = 0; n < plugins.slick.length; n++) {
            var hb = $(plugins.slick[n]);
            hb.slick({
                slidesToScroll: parseInt(hb.attr("data-slide-to-scroll")) || 1,
                asNavFor: hb.attr("data-for") || !1,
                dots: "true" == hb.attr("data-dots"),
                infinite: "true" == hb.attr("data-loop"),
                focusOnSelect: !0,
                arrows: "true" == hb.attr("data-arrows"),
                swipe: "true" == hb.attr("data-swipe"),
                autoplay: "true" == hb.attr("data-autoplay"),
                vertical: "true" == hb.attr("data-vertical"),
                centerMode: "true" == hb.attr("data-center-mode"),
                centerPadding: hb.attr("data-center-padding") ? hb.attr("data-center-padding") : "0.50",
                mobileFirst: !0,
                speed: 550,
                responsive: [{breakpoint: 0, settings: {slidesToShow: parseInt(hb.attr("data-items")) || 1}}, {
                    breakpoint: 480,
                    settings: {slidesToShow: parseInt(hb.attr("data-xs-items")) || 1}
                }, {breakpoint: 768, settings: {slidesToShow: parseInt(hb.attr("data-sm-items")) || 1}}, {
                    breakpoint: 992,
                    settings: {slidesToShow: parseInt(hb.attr("data-md-items")) || 1}
                }, {breakpoint: 1200, settings: {slidesToShow: parseInt(hb.attr("data-lg-items")) || 1}}]
            }).on("afterChange", function (a, b, c) {
                var e = $(this), f = e.attr("data-child");
                f && ($(f + " .slick-slide").removeClass("slick-current"), $(f + " .slick-slide").eq(c).addClass("slick-current"))
            })
        }
    }
    if (plugins.owl.length) {
        var n;
        for (n = 0; n < plugins.owl.length; n++) {
            var u, mb, ib = $(plugins.owl[n]), jb = {}, kb = ["-", "-xs-", "-sm-", "-md-", "-lg-"], lb = [0, 480, 768, 992, 1200];
            for (u = 0; u < lb.length; u++) for (jb[lb[u]] = {}, mb = u; mb >= -1; mb--) !jb[lb[u]].items && ib.attr("data" + kb[mb] + "items") && (jb[lb[u]].items = mb < 0 ? 1 : parseInt(ib.attr("data" + kb[mb] + "items"))), !jb[lb[u]].stagePadding && 0 !== jb[lb[u]].stagePadding && ib.attr("data" + kb[mb] + "stage-padding") && (jb[lb[u]].stagePadding = mb < 0 ? 0 : parseInt(ib.attr("data" + kb[mb] + "stage-padding"))), !jb[lb[u]].margin && 0 !== jb[lb[u]].margin && ib.attr("data" + kb[mb] + "margin") && (jb[lb[u]].margin = mb < 0 ? 30 : parseInt(ib.attr("data" + kb[mb] + "margin")));
            ib.owlCarousel({
                autoplay: "true" === ib.attr("data-autoplay"),
                loop: "false" !== ib.attr("data-loop"),
                items: 1,
                dotsContainer: ib.attr("data-pagination-class") || !1,
                navContainer: ib.attr("data-navigation-class") || !1,
                mouseDrag: "false" !== ib.attr("data-mouse-drag"),
                nav: "true" === ib.attr("data-nav"),
                dots: "true" === ib.attr("data-dots"),
                dotsEach: ib.attr("data-dots-each") ? parseInt(ib.attr("data-dots-each")) : !1,
                animateIn: ib.attr("data-animation-in") ? ib.attr("data-animation-in") : "slide",
                animateOut: ib.attr("data-animation-out") ? ib.attr("data-animation-out") : !1,
                responsive: jb,
                navText: []
            })
        }
    }
    if (plugins.counter.length) {
        var n;
        for (n = 0; n < plugins.counter.length; n++) {
            var nb = $(plugins.counter[n]).not(".animated");
            $document.on("scroll", $.proxy(function () {
                var a = this;
                !a.hasClass("animated") && e(a) && (a.countTo({refreshInterval: 40, speed: a.attr("data-speed") || 1e3}), a.addClass("animated"))
            }, nb)).trigger("scroll")
        }
    }
    if (plugins.isotope.length) {
        var n, ob = [];
        for (n = 0; n < plugins.isotope.length; n++) {
            var pb = plugins.isotope[n],
                qb = new Isotope(pb, {itemSelector: ".isotope-item", layoutMode: pb.getAttribute("data-isotope-layout") ? pb.getAttribute("data-isotope-layout") : "masonry", filter: "*"});
            ob.push(qb)
        }
        $(window).on("load", function () {
            setTimeout(function () {
                var a;
                for (a = 0; a < ob.length; a++) ob[a].element.className += " isotope--loaded", ob[a].layout()
            }, 600)
        });
        var rb;
        $("[data-isotope-filter]").on("click", function (a) {
            a.preventDefault();
            var b = $(this);
            clearTimeout(rb), b.parents(".isotope-filters").find(".active").removeClass("active"), b.addClass("active");
            var c = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]');
            c.isotope({
                itemSelector: ".isotope-item",
                layoutMode: c.attr("data-isotope-layout") ? c.attr("data-isotope-layout") : "masonry",
                filter: "*" == this.getAttribute("data-isotope-filter") ? "*" : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]'
            })
        }).eq(0).trigger("click")
    }
    if (isDesktop && $html.hasClass("wow-animation") && $(".wow").length && (new WOW).init(), plugins.bootstrapTabs.length) {
        var n;
        for (n = 0; n < plugins.bootstrapTabs.length; n++) {
            var sb = $(plugins.bootstrapTabs[n]);
            sb.on("click", "a", function (a) {
                a.preventDefault(), $(this).tab("show")
            })
        }
    }
    if (plugins.scroller.length) {
        var n;
        for (n = 0; n < plugins.scroller.length; n++) {
            var tb = $(plugins.scroller[n]);
            tb.mCustomScrollbar({scrollInertia: 200, scrollButtons: {enable: !0}})
        }
    }
    if (plugins.socialite.length && Socialite.load(), plugins.rdVideoBG.length) {
        var n;
        for (n = 0; n < plugins.rdVideoBG.length; n++) {
            var Y = $(plugins.rdVideoBG[n]);
            Y.RDVideo({})
        }
    }
    if (plugins.rdInputLabel.length && plugins.rdInputLabel.RDInputLabel(), plugins.regula.length && h(plugins.regula), plugins.rdMailForm.length) {
        var n, u, mb, ub = {
            MF000: "Successfully sent!",
            MF001: "Recipients are not set!",
            MF002: "Form will not work locally!",
            MF003: "Please, define email field in your form!",
            MF004: "Please, define type of your form!",
            MF254: "Something went wrong with PHPMailer!",
            MF255: "Aw, snap! Something went wrong."
        };
        for (n = 0; n < plugins.rdMailForm.length; n++) {
            var vb = $(plugins.rdMailForm[n]);
            vb.attr("novalidate", "novalidate").ajaxForm({
                data: {"form-type": vb.attr("data-form-type") || "contact", counter: n}, beforeSubmit: function () {
                    var a = $(plugins.rdMailForm[this.extraData.counter]), b = a.find("[data-constraints]");
                    if (!i(b)) return !1;
                    var c = $("#" + a.attr("data-form-output"));
                    c.hasClass("snackbars") && (c.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'), c.addClass("active"))
                }, error: function (a) {
                    var b = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output"));
                    b.text(ub[a])
                }, success: function (a) {
                    var b = $(plugins.rdMailForm[this.extraData.counter]), c = $("#" + b.attr("data-form-output")), d = vb.find("select");
                    if (d.length) for (u = 0; u < d.length; u++) {
                        var e = $(d[u]);
                        e.select2("val", null)
                    }
                    b.addClass("success"), a = 5 == a.length ? a : "MF255", c.text(ub[a]), "MF000" === a ? (c.hasClass("snackbars") && c.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + ub[a] + "</span></p>"), c.addClass("success active")) : (c.hasClass("snackbars") && c.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + ub[a] + "</span></p>"), c.addClass("error active")), b.clearForm(), b.find("input, textarea").blur(), setTimeout(function () {
                        c.removeClass("active error success"), b.removeClass("success")
                    }, 5e3)
                }
            })
        }
    }
    if (plugins.rdRange.length && plugins.rdRange.RDRange({}), plugins.photoSwipeGallery.length && $document.delegate("[data-photo-swipe-item]", "click", function (a) {
        a.preventDefault();
        var g, i, b = $(this), c = b.parents("[data-photo-swipe-gallery]").find("a[data-photo-swipe-item]"), d = document.querySelectorAll(".pswp")[0], e = {}, f = [], h = 0;
        0 == c.length && (c = b), c.each(function () {
            var d, a = $(this), b = a.attr("href"), c = a.attr("data-size").split("x");
            a.is(":visible") && (e[b] || (d = {src: b, w: parseInt(c[0], 10), h: parseInt(c[1], 10), el: a}, e[b] = {item: d, index: h}, f.push(d), h++))
        }), g = {
            index: e[b.attr("href")].index, getThumbBoundsFn: function (a) {
                var b = f[a].el, c = b.offset();
                return {x: c.left, y: c.top, w: b.width()}
            }
        }, i = new PhotoSwipe(d, PhotoSwipeUI_Default, f, g), i.init()
    }), plugins.stacktable.length) {
        var n;
        for (n = 0; n < plugins.stacktable.length; n++) {
            var wb = $(plugins.stacktable[n]);
            wb.stacktable()
        }
    }
    if (plugins.customToggle.length) {
        var n;
        for (n = 0; n < plugins.customToggle.length; n++) {
            var B = $(plugins.customToggle[n]);
            B.on("click", $.proxy(function (a) {
                a.preventDefault();
                var b = $(this);
                $(b.attr("data-custom-toggle")).add(this).toggleClass("active")
            }, B)), "true" === B.attr("data-custom-toggle-disable-on-blur") && $("body").on("click", B, function (a) {
                a.target !== a.data[0] && 0 == $(a.data.attr("data-custom-toggle")).find($(a.target)).length && 0 == a.data.find($(a.target)).length && $(a.data.attr("data-custom-toggle")).add(a.data[0]).removeClass("active")
            })
        }
    }
    if (plugins.imgZoom.length) {
        var n;
        for (n = 0; n < plugins.imgZoom.length; n++) {
            var xb = $(plugins.imgZoom[n]);
            xb.mag()
        }
    }
    if (plugins.customWaypoints.length) {
        var n;
        for (n = 0; n < plugins.customWaypoints.length; n++) {
            var B = $(plugins.customWaypoints[n]);
            B.on("click", function (a) {
                a.preventDefault(), $("body, html").stop().animate({scrollTop: $("#" + $(this).attr("data-custom-scroll-to")).offset().top}, 1e3, function () {
                    $(window).trigger("resize")
                })
            })
        }
    }
    if (plugins.rdParallax.length) {
        var n;
        $.RDParallax(), isIE || isMobile || $(window).on("scroll", function () {
            for (n = 0; n < plugins.rdParallax.length; n++) {
                var a = $(plugins.rdParallax[n]);
                e(a) ? a.find(".rd-parallax-inner").css("position", "fixed") : a.find(".rd-parallax-inner").css("position", "absolute")
            }
        }), $("a[href='#'], a[href^='#']").on("click", function () {
            setTimeout(function () {
                $(window).trigger("resize")
            }, 300)
        })
    }
    if (plugins.thumbnailFeatureHover.length) {
        var n;
        plugins.thumbnailFeatureHover.hover(function () {
            plugins.thumbnailFeatureHover.css("opacity", "0.33"), $(this).css("opacity", "1")
        }, function () {
            plugins.thumbnailFeatureHover.css("opacity", "1")
        })
    }
}), $(".modal-backdrop, #myModal .close, #myModal .btn").live("click", function () {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"))
});
