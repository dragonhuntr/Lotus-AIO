function getPayload(){
    var Sha1 = {};
    (function() {
        Sha1.hash = function(a) {
            var e = [1518500249, 1859775393, 2400959708, 3395469782];
            a += String.fromCharCode(128);
            for (var d = Math.ceil((a.length / 4 + 2) / 16), b = Array(d), f = 0; f < d; f++) {
                b[f] = Array(16);
                for (var g = 0; 16 > g; g++) b[f][g] = a.charCodeAt(64 * f + 4 * g) << 24 | a.charCodeAt(64 * f + 4 * g + 1) << 16 | a.charCodeAt(64 * f + 4 * g + 2) << 8 | a.charCodeAt(64 * f + 4 * g + 3)
            }
            b[d - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32);
            b[d - 1][14] = Math.floor(b[d - 1][14]);
            b[d - 1][15] = 8 * (a.length - 1) & 4294967295;
            a = 1732584193;
            g = 4023233417;
            var k = 2562383102,
                l = 271733878,
                m = 3285377520,
                h = Array(80);
            for (f = 0; f < d; f++) {
                for (var c = 0; 16 > c; c++) h[c] = b[f][c];
                for (c = 16; 80 > c; c++) h[c] = Sha1.ROTL(h[c - 3] ^ h[c - 8] ^ h[c - 14] ^ h[c - 16], 1);
                var n = a;
                var p = g;
                var q = k;
                var r = l;
                var u = m;
                for (c = 0; 80 > c; c++) {
                    var t = Math.floor(c / 20);
                    t = Sha1.ROTL(n, 5) + Sha1.f(t, p, q, r) + u + e[t] + h[c] & 4294967295;
                    u = r;
                    r = q;
                    q = Sha1.ROTL(p, 30);
                    p = n;
                    n = t
                }
                a = a + n & 4294967295;
                g = g + p & 4294967295;
                k = k + q & 4294967295;
                l = l + r & 4294967295;
                m = m + u & 4294967295
            }
            return Sha1.toHexStr(a) + Sha1.toHexStr(g) + Sha1.toHexStr(k) + Sha1.toHexStr(l) + Sha1.toHexStr(m)
        };
        Sha1.f = function(a, e, d, b) {
            switch (a) {
                case 0:
                    return e & d ^ ~e & b;
                case 1:
                    return e ^ d ^ b;
                case 2:
                    return e & d ^ e & b ^ d & b;
                case 3:
                    return e ^ d ^ b
            }
        };
        Sha1.ROTL = function(a, e) {
            return a << e | a >>> 32 - e
        };
        Sha1.toHexStr = function(a) {
            for (var e = "", d, b = 7; 0 <= b; b--) d = a >>> 4 * b & 15, e += d.toString(16);
            return e
        };
        "undefined" == typeof String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
            return unescape(encodeURIComponent(this))
        });
        "undefined" == typeof String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
            try {
                return decodeURIComponent(escape(this))
            } catch (a) {
                return this
            }
        })
    })();
    g = function() {
        return (new Date).getTime()
    };

    A = function() {
        return (new Date).getTime()
    };
    var b = g();
    a = []
    A = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        var n = (b + 16 * Math.random()) % 16 | 0;
        b = Math.floor(b / 16);
        return ("x" === a ? n : n & 3 | 8).toString(16)
    })
    var Ja, Y, ra = "__ERROR_EVAL__",
        Z = "__ERROR_EVAL__",
        sa = "__ERROR_EVAL__",
        Ka = "__ERROR_EVAL__",
        aa = "__ERROR_EVAL__",
        ta = "__ERROR_EVAL__",
        ua = "__ERROR_EVAL__",
        La = "__ERROR_EVAL__",
        Ma = "__ERROR_EVAL__",
        Na = "__ERROR_EVAL__",
        ba = "__ERROR_EVAL__",
        va = "__ERROR_EVAL__",
        Oa = "__ERROR_EVAL__",
        Pa = "__ERROR_EVAL__",
        T = {},
        G = 0,
        A, ca = function() {
            try {
                var b =
                    z("rdf-uuid"),
                    g = z("rdf-count");
                if ((!1 === b || !1 === g) && a.name) try {
                    var k = JSON.parse(a.name);
                    b = k["rdf-uuid"];
                    g = k["rdf-count"];
                    H("rdf-uuid", b);
                    H("rdf-count", g)
                } catch (d) {}
                P(b);
                b || (b = pa());
                g || (g = 0);
                g++;
                A = b;
                G = g;
                h("This is print number " + g + " for UUID " + b + ".");
                if (1 < g) return !1
            } catch (d) {}
            return !0
        }();

    X = 0
    R = g()
    Y = g() - R - X;



    yb = function() {
        var a = function(a) {
            try {
                var b = eval(a)
            } catch (c) {
                b = "__ERROR_EVAL__"
            }
            return "undefined" !== typeof b ? b : "__ERROR_EVAL__"
        };
        return [a("/*@cc_on @_win32@*/"), a("/*@_win16@*/"), a("/*@_mac@*/"), a("/*@_alpha@*/"), a("/*@_x86@*/"), a("/*@_mc680x0@*/"), a("/*@_PowerPC@*/"), a("/*@_jscript_build@*/")].join("|&|")
    }()




    va = Sha1.hash(Ka);

    Pa = Sha1.hash([ba, Sha1.hash(Oa)].join("|,|"));

    ba = Sha1.hash(Z);


    nb = -((new Date((new Date).getFullYear() + "/6/9")).getTimezoneOffset() / 60).toFixed(2)

    ob = -((new Date((new Date).getFullYear() + "/12/21")).getTimezoneOffset() / 60).toFixed(2)

    Ga = [];

    ma = Ga.length; // ma = 0



    Ha = Sha1.hash(Ga.join(","));

    d = {
        colorDepth: screen.colorDepth,
        country: '',
        language: '',
        pixelDepth: screen.pixelDepth,
        processors: "hardwareConcurrency" in window.navigator ? window.navigator.hardwareConcurrency : "__ERROR_EVAL__",
        resolution: [screen.width, screen.height],
        touchPoints: window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints || "__ERROR_EVAL__",
        hasAudio: "__ERROR_EVAL__",
        hasVideo: "__ERROR_EVAL__",
        numAudioDevices: "__ERROR_EVAL__",
        numVideoDevices: "__ERROR_EVAL__",
        hasBattery: "__ERROR_EVAL__",
        hasAccelerometer: "__ERROR_EVAL__",
        hasGyroscope: "__ERROR_EVAL__",
        hasLightSensor: "__ERROR_EVAL__"
    };
    ra = [d.processors, d.resolution.join(","), [screen.availWidth, screen.availHeight].join(), "availLeft" in screen ? screen.availLeft : "__ERROR_EVAL__", "availTop" in screen ? screen.availTop : "__ERROR_EVAL__", d.colorDepth, d.pixelDepth, a.devicePixelRatio, d.language, d.country, nb, ob, d.hasAudio, d.hasVideo, d.numAudioDevices, d.numVideoDevices, d.hasBattery, d.hasAccelerometer, d.hasGyroscope, d.hasLightSensor, ma, Ha, yb, d.touchPoints];

    Z = ra.join("|,|");
    ba = Sha1.hash(Z)


    k = false;



    var Sha1 = {};
    (function() {
        Sha1.hash = function(a) {
            var e = [1518500249, 1859775393, 2400959708, 3395469782];
            a += String.fromCharCode(128);
            for (var d = Math.ceil((a.length / 4 + 2) / 16), b = Array(d), f = 0; f < d; f++) {
                b[f] = Array(16);
                for (var g = 0; 16 > g; g++) b[f][g] = a.charCodeAt(64 * f + 4 * g) << 24 | a.charCodeAt(64 * f + 4 * g + 1) << 16 | a.charCodeAt(64 * f + 4 * g + 2) << 8 | a.charCodeAt(64 * f + 4 * g + 3)
            }
            b[d - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32);
            b[d - 1][14] = Math.floor(b[d - 1][14]);
            b[d - 1][15] = 8 * (a.length - 1) & 4294967295;
            a = 1732584193;
            g = 4023233417;
            var k = 2562383102,
                l = 271733878,
                m = 3285377520,
                h = Array(80);
            for (f = 0; f < d; f++) {
                for (var c = 0; 16 > c; c++) h[c] = b[f][c];
                for (c = 16; 80 > c; c++) h[c] = Sha1.ROTL(h[c - 3] ^ h[c - 8] ^ h[c - 14] ^ h[c - 16], 1);
                var n = a;
                var p = g;
                var q = k;
                var r = l;
                var u = m;
                for (c = 0; 80 > c; c++) {
                    var t = Math.floor(c / 20);
                    t = Sha1.ROTL(n, 5) + Sha1.f(t, p, q, r) + u + e[t] + h[c] & 4294967295;
                    u = r;
                    r = q;
                    q = Sha1.ROTL(p, 30);
                    p = n;
                    n = t
                }
                a = a + n & 4294967295;
                g = g + p & 4294967295;
                k = k + q & 4294967295;
                l = l + r & 4294967295;
                m = m + u & 4294967295
            }
            return Sha1.toHexStr(a) + Sha1.toHexStr(g) + Sha1.toHexStr(k) + Sha1.toHexStr(l) + Sha1.toHexStr(m)
        };
        Sha1.f = function(a, e, d, b) {
            switch (a) {
                case 0:
                    return e & d ^ ~e & b;
                case 1:
                    return e ^ d ^ b;
                case 2:
                    return e & d ^ e & b ^ d & b;
                case 3:
                    return e ^ d ^ b
            }
        };
        Sha1.ROTL = function(a, e) {
            return a << e | a >>> 32 - e
        };
        Sha1.toHexStr = function(a) {
            for (var e = "", d, b = 7; 0 <= b; b--) d = a >>> 4 * b & 15, e += d.toString(16);
            return e
        };
        "undefined" == typeof String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
            return unescape(encodeURIComponent(this))
        });
        "undefined" == typeof String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
            try {
                return decodeURIComponent(escape(this))
            } catch (a) {
                return this
            }
        })
    })();




    function Bruh() {
        g = function() {
            return (new Date).getTime()
        };
        var b = g();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var n = (b + 16 * Math.random()) % 16 | 0;
            b = Math.floor(b / 16);
            return ("x" === a ? n : n & 3 | 8).toString(16)
        })
    }
    //encodeURIComponent(va)
    q = '{ "version": "0.8.0", "hashes": { "device": "' + encodeURIComponent(Pa) + '", "browser": "' +
        encodeURIComponent(va) + '", "match": "' + encodeURIComponent(ba) + '" }, "data": "' + k + '", "uuid": "' + A + '", "timestamp": ' + g() + ', "time": ' + Y + ', "errors": "' + '" }';

    return(q)
}

function generateRDFUUID() {
payload = JSON.parse(getPayload())
var request = require('request');
var j = request.jar();
var request = request.defaults({jar:j});
var newurl = 'https://rdf.radial.com/rdf/service/data/clients/HIBUS/fingerprints/' + payload['uuid'] + '?stamp=' + payload['timestamp'].toString()
console.log(newurl)
options = {
    url: newurl,
    headers: {
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Host': 'rdf.radial.com',
        'Origin': 'https://www.hibbett.com',
        'Referer': 'https://www.hibbett.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
    },
    body : payload,
    json: true

};
request.post(options, function (error, response, body) {
    console.log(response.statusCode)
    console.log(response.statusMessage)
    if (response.statusMessage.toString().includes('Created') && response.statusCode == 201){
        console.log(payload['uuid'])
        return payload['uuid']
    }
});
}