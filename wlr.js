var generatedCookies = []
var test = null
var start_ts = Date.now ? Date.now() : +new Date
var z1 = 0
var y1 = 2016
var pen = -1
var den = null
var wen = null
var aj_indx = 0
var ke_vel = 0
var me_vel = 24324167
var doe_vel = 13881721
var dme_vel = 13881486
var te_vel = 0
var pe_vel = 0
var nav_perm = "01321144241322243122"
var ver = 1.54
var mact = "0,1,48,1302,652;1,1,274,1278,644;2,1,275,1271,644;3,1,277,1265,644;4,1,277,1259,644;5,1,293,1222,650;6,1,293,1217,652;7,1,296,1212,654;8,1,297,1206,656;9,1,303,1196,661;10,1,306,1185,667;11,1,311,1172,675;12,1,312,1165,678;13,1,314,1158,681;14,1,316,1152,685;15,1,317,1145,689;16,1,319,1138,694;17,1,321,1131,699;18,1,323,1124,704;19,1,326,1117,709;20,1,335,1088,732;21,1,335,1080,739;22,1,338,1072,745;23,1,340,1065,752;24,1,342,1058,760;25,1,353,1013,808;26,1,356,1006,817;27,1,378,936,903;28,1,397,884,964;29,1,716,652,968;30,1,731,645,968;31,1,731,644,968;32,1,739,642,968;33,1,740,641,968;34,1,750,638,968;35,1,28107,309,7;36,1,28107,309,7;37,1,28107,325,15;38,1,28109,343,24;39,1,28111,362,33;40,1,28113,381,43;41,1,28115,402,54;42,1,28117,424,67;43,1,28119,445,80;44,1,28121,468,95;45,1,28123,491,108;46,1,28125,515,123;47,1,28127,540,138;48,1,28129,567,156;49,1,28131,593,172;50,1,28133,619,188;51,1,28135,646,205;52,1,28137,673,222;53,1,28139,701,240;54,1,28141,726,257;55,1,28144,752,273;56,1,28147,779,290;57,1,28148,803,306;58,1,28149,829,322;59,1,28151,854,338;60,1,28153,878,354;61,1,28155,902,370;62,1,28157,924,384;63,1,28160,947,400;64,1,28162,970,415;65,1,28164,992,429;66,1,28165,1015,444;67,1,28167,1036,459;68,1,28169,1058,473;69,1,28171,1080,487;70,1,28173,1100,500;71,1,28175,1121,513;72,1,28177,1140,526;73,1,28179,1160,538;74,1,28181,1178,549;75,1,28183,1197,561;76,1,28185,1217,572;77,1,28187,1236,583;78,1,28189,1254,593;79,1,28191,1273,603;80,1,28194,1291,613;81,1,28195,1309,623;82,1,28197,1327,633;83,1,28199,1345,642;84,1,28201,1362,652;85,1,28203,1378,660;86,1,28205,1393,669;87,1,68008,223,6;88,1,68008,223,6;89,1,68011,230,12;90,1,68012,237,18;91,1,68014,244,24;92,1,68016,252,30;93,1,68018,260,36;94,1,68020,268,43;95,1,68022,275,50;96,1,68024,284,57;97,1,68026,292,64;98,1,68028,301,72;99,1,68030,310,80;3276,3,1881408,707,966,1008;3277,4,1881499,707,966,1008;3278,2,1881499,707,966,1008;9442,3,2712384,723,967,-1;9443,4,2712464,723,967,-1;9444,2,2712464,723,967,-1;15991,3,3981513,899,190,-1,3;15992,4,3981580,899,190,-1,3;"
var vcact = "0,19385;1,27748;0,35690;1,67809;0,1252578;1,1293926;0,1697275;1,1701313;3,1881403;2,1881882;3,1887086;2,1887093;0,2009316;1,2020818;0,2021302;1,2075590;0,2080140;1,2080989;0,2159486;1,2188079;0,2237881;1,2424251;3,2712382;2,2712633;3,2717537;2,2717537;3,3981512;2,3982485;0,3982500;1,3998119;3,3998121;2,3999029;0,4000918;1,4070019;"
var mr = "8,15,15,14,20,192,13,8,8,7,6,6,10,300,"
var fpValstr = "-1752591854;66351601;dis;,7,8;true;true;true;300;true;24;24;true;false;-1"
var o9 = 8537238
var cs = "0a46G5m17Vrp4o4c"
var api_public_key = "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq"
var tst = 15
var me_cnt = 27842

function getT (a) {
    if (null == a) return -1;
    try {
        for (var t = 0, e = 0; e < a.length; e++) {
            var n = a.charCodeAt(e);
            n < 128 && (t += n)
        }
        return t
    } catch (a) {
        return -2
    }
}

function bc() {
    var a = window.addEventListener ? 1 : 0,
        t = window.XMLHttpRequest ? 1 : 0,
        e = window.XDomainRequest ? 1 : 0,
        n = window.emit ? 1 : 0,
        o = window.DeviceOrientationEvent ? 1 : 0,
        m = window.DeviceMotionEvent ? 1 : 0,
        r = window.TouchEvent ? 1 : 0,
        i = window.spawn ? 1 : 0,
        c = window.innerWidth ? 1 : 0,
        b = window.outerWidth ? 1 : 0,
        d = window.chrome ? 1 : 0,
        k = Function.prototype.bind ? 1 : 0,
        s = window.Buffer ? 1 : 0,
        l = window.PointerEvent ? 1 : 0;
    xagg = a + (t << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (c << 8) + (b << 9) + (d << 10) + (k << 11) + (s << 12) + (l << 13)
}

var d2 = 0;
function bd(){
    var a = [],
            t = window.callPhantom ? 1 : 0;
        a.push(",cpen:" + t);
        try {
            var e = new Function("return/\*@cc_on!@\*/!1")() ? 1 : 0
        } catch (a) {
            var e = 0
        }
        a.push("i1:" + e);
        var n = "number" == typeof document.documentMode ? 1 : 0;
        a.push("dm:" + n);
        var o = window.chrome && window.chrome.webstore ? 1 : 0;
        a.push("cwen:" + o);
        var m = navigator.onLine ? 1 : 0;
        a.push("non:" + m);
        var r = window.opera ? 1 : 0;
        a.push("opc:" + r);
        var i = "undefined" != typeof InstallTrigger ? 1 : 0;
        a.push("fc:" + i);
        var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
        a.push("sc:" + c);
        var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
        a.push("wrc:" + b);
        var d = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0;
        a.push("isc:" + d), d2 = parseInt(z1 / 23);
        var k = "function" == typeof navigator.vibrate ? 1 : 0;
        a.push("vib:" + k);
        var s = "function" == typeof navigator.getBattery ? 1 : 0;
        a.push("bat:" + s);
        var l = Array.prototype.forEach ? 0 : 1;
        a.push("x11:" + l);
        var u = "FileReader" in window ? 1 : 0;
        return a.push("x12:" + u), a.join(",")
}

function bmisc() {
    pen = window._phantom ? 1 : 0, wen = 0, den = 0
}

function get_cf_date() {
    return Date.now ? Date.now() : +new Date
}

function fas() {
    try {
        return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24)
    } catch (a) {
        return 0
    }
}

function sd_debug(a) {
    if (false) {
        var t = a;
        "string" == typeof _sd_trace ? _sd_trace += t : _sd_trace = t
    }
}

function gd() {
    var a = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",
        t = "" + getT(a),
        e = start_ts / 2,
        n = window.screen ? window.screen.availWidth : -1,
        o = window.screen ? window.screen.availHeight : -1,
        m = window.screen ? window.screen.width : -1,
        r = window.screen ? window.screen.height : -1,
        i = window.innerWidth || document.body.clientWidth,
        c = window.innerHeight || document.body.clientHeight,
        b = window.outerWidth || document.body.outerWidth;
        z1 = parseInt(start_ts / (y1 * y1));
    var d = Math.random(),
        k = parseInt(1e3 * d / 2),
        s = d + "";
    return s = s.slice(0, 11) + k, 3, bc(), bmisc(), a + ",uaend," + xagg + "," + "20030107" + "," + "en-US" + "," + "Gecko" + "," + 3 + "," + 0 + "," + 0 + "," + 0 + "," + z1 + "," + 8537260 + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + bd() + "," + t + "," + s + "," + e + ",loc:" + ""
}

function ab(a) {
    if (null == a) return -1;
    try {
        for (var t = 0, e = 0; e < a.length; e++) {
            var n = a.charCodeAt(e);
            n < 128 && (t += n)
        }
        return t
    } catch (a) {
        return -2
    }
}

function np() {
    var a = [],
        t = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];
    try {
        if (!navigator.permissions) return 6;
        var e = function (t, e) {
                return navigator.permissions.query({
                    name: t
                }).then(function (t) {
                    switch (t.state) {
                    case "prompt":
                        a[e] = 1;
                        break;
                    case "granted":
                        a[e] = 2;
                        break;
                    case "denied":
                        a[e] = 0;
                        break;
                    default:
                        a[e] = 5
                    }
                }).catch(function (t) {
                    a[e] = -1 !== t.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3
                })
            },
            n = t.map(function (a, t) {
                return e(a, t)
            });
        Promise.all(n).then(function () {
            nav_perm = a.join("")
        })
    } catch (a) {
        return 7
    }
}

function sed() {
    var a;
    a = window["\$cdc_asdjflasutopfhvcZLmcfl_"] || document["\$cdc_asdjflasutopfhvcZLmcfl_"] ? "1" : "0";
    var t;
    t = null != window.document.documentElement.getAttribute("webdriver") ? "1" : "0";
    var e;
    e = void 0 !== navigator.webdriver && navigator.webdriver ? "1" : "0";
    var n;
    n = void 0 !== window.webdriver ? "1" : "0";
    var o;
    o = void 0 !== window.XPathResult || void 0 !== document.XPathResult ? "1" : "0";
    var m;
    m = null != window.document.documentElement.getAttribute("driver") ? "1" : "0";
    var r;
    return r = null != window.document.documentElement.getAttribute("selenium") ? "1" : "0", [a, t, e, n, o, m, r].join(",")
}

function rir(a, t, e, n) {
    return a > t && a <= e && (a += n % (e - t)) > e && (a = a - e + t), a
}

function uar() {
    return window.navigator.userAgent.replace(/\\|"/g, "")
}

function od(a, t) {
    try {
        a = String(a), t = String(t);
        var e = [],
            n = t.length;
        if (n > 0) {
            for (var o = 0; o < a.length; o++) {
                var m = a.charCodeAt(o),
                    r = a.charAt(o),
                    i = t.charCodeAt(o % n);
                m = rir(m, 47, 57, i), m != a.charCodeAt(o) && (r = String.fromCharCode(m)), e.push(r)
            }
            if (e.length > 0) return e.join("")
        }
    } catch (a) {}
    return a
}

function genCookie() {
    function pepega() {
        var a = 0;
        try {
            a = Date.now ? Date.now() : +new Date;
            var t = (Date.now ? Date.now() : +new Date) - (Date.now ? Date.now() : +new Date),
                e = "3";
            var n = gd(),
                o = window.DeviceOrientationEvent ? "do_en" : "do_dis",
                m = window.DeviceMotionEvent ? "dm_en" : "dm_dis",
                r = window.TouchEvent ? "t_en" : "t_dis",
                i = o + "," + m + "," + r,
                c = "0,-1,0,0,1429,630,0;0,-1,0,0,795,795,0;0,-1,1,0,878,-1,0;0,-1,0,0,3405,891,0;0,-1,0,0,3406,891,0;0,-1,0,0,1758,1758,0;",
                b = "https://www.dickssportinggoods.com/p/nike-lebron-17-low-basketball-shoes-20nikalbrn17lwblkmnka/20nikalbrn17lwblkmnka".replace(/\\|"/g, ""), //document.URL.replace(/\\|"/g, "")
                d = 1 + "," + aj_indx;
            var k = ke_vel + me_vel + doe_vel + dme_vel + te_vel + pe_vel,
                s = get_cf_date() - start_ts,
                l = parseInt(d2 / 6),
                u = fas(),
                _ = [ke_vel + 1, me_vel + 32, te_vel + 32, doe_vel, dme_vel, pe_vel, k, t, 0, start_ts, 13, d2, 0, me_cnt, l, 6, 0, s, 51869566, "0", e, ab(e), "669", "-756992228", u],  //bmak.rVal / bmak.fpcf.rCFP
                f = _.join(","),
                p = "" + ab(fpValstr);
            np();
            console.log("C: " + c)
            var v = sed(),
                h = [],
                g = "",
                w = "",
                y = "";
            test = ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + "0,-1,0,0,1429,630,0;0,-1,0,0,795,795,0;0,-1,0,0,878,-1,1;0,-1,0,0,1758,1758,0;" + "-1,2,-94,-102," + c + "-1,2,-94,-108," + "" + "-1,2,-94,-110," + mact + "-1,2,-94,-117," + "" + "-1,2,-94,-111," + "0,384,-1,-1,-1;1,27858,-1,-1,-1;2,67899,-1,-1,-1;3,1294013,-1,-1,-1;4,1701406,-1,-1,-1;5,2020894,-1,-1,-1;6,2075665,-1,-1,-1;7,2081062,-1,-1,-1;8,2188165,-1,-1,-1;9,2424330,-1,-1,-1;" + "-1,2,-94,-109," + "0,379,-1,-1,-1,-1,-1,-1,-1,-1,-1;1,27816,-1,-1,-1,-1,-1,-1,-1,-1,-1;2,67873,-1,-1,-1,-1,-1,-1,-1,-1,-1;3,1293987,-1,-1,-1,-1,-1,-1,-1,-1,-1;4,1701389,-1,-1,-1,-1,-1,-1,-1,-1,-1;5,2020868,-1,-1,-1,-1,-1,-1,-1,-1,-1;6,2075642,-1,-1,-1,-1,-1,-1,-1,-1,-1;7,2081039,-1,-1,-1,-1,-1,-1,-1,-1,-1;8,2188143,-1,-1,-1,-1,-1,-1,-1,-1,-1;9,2424305,-1,-1,-1,-1,-1,-1,-1,-1,-1;" + "-1,2,-94,-114," + "" + "-1,2,-94,-103," + vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + f + "-1,2,-94,-106," + d, test = test + "-1,2,-94,-119," + mr + "-1,2,-94,-122," + v + "-1,2,-94,-123," + g + "-1,2,-94,-124," + w + "-1,2,-94,-126," + y + "-1,2,-94,-127," + nav_perm;
            var j = 24 ^ ab(test);
            test = test + "-1,2,-94,-70," + fpValstr + "-1,2,-94,-80," + p + "-1,2,-94,-116," + o9 + "-1,2,-94,-118," + j + "-1,2,-94,-121,", sd_debug(",s1:" + test.slice(0, 10))
        } catch (a) {
            try {
                sd_debug(",s2:" + a), test = ver + "-1,2,-94,-100," + uar() + "-1,2,-94,-120," + a.replace(/\"/g, "\\'")
            } catch (a) {
                sd_debug(",s3:" + a)
            }
        }
        try {
            var M = od(cs, api_public_key).slice(0, 16),
                x = Math.floor(get_cf_date() / 36e5),
                A = get_cf_date(),
                L = M + bmak.od(x, M) + test;
            test = L + ";" + (get_cf_date() - a) + ";" + tst + ";" + (get_cf_date() - A)
        } catch (a) {}
        sd_debug("</bpd>")
    }

    function bruhmoment(a, t, e) {
        pepega()
        var n;
        void 0 !== window.XMLHttpRequest ? n = new XMLHttpRequest : void 0 !== window.XDomainRequest ? (n = new XDomainRequest, n.onload = function() {
            this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange()
        }) : n = new ActiveXObject("Microsoft.XMLHTTP"), n.open("POST", a, t), void 0 !== n.withCredentials && (n.withCredentials = !0);
        var o = '\{"sensor_data":"' + test + '"\}';
        n.onreadystatechange = function() {
            n.readyState > 3 && e && e(n)
        }, n.send(o)
        console.log(n)
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    a = []
    true && (bruhmoment("https://www.footlocker.com/assets/c7b8a45816262992aff5b862e75c", a), aj_indx = aj_indx + 1)
    console.log(getCookie('_abck'))
    generatedCookies.push(getCookie('_abck'))
}

var handler = function(count) {
    var caller = arguments.callee;
    //Infinite
    if (count == -1) {
        window.setTimeout(function() {
            genCookie();
            caller(count);
        }, 1000);
    }
    if (count > 0) {
        if (count == 0) return;
        genCookie();
        window.setTimeout(function() {
            caller(count - 1);
        }, 100);    
    }
    if (count == null) {genCookie(); }
};