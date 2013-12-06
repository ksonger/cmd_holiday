/**
 * Created with JetBrains WebStorm.
 * User: KSonger
 * Date: 12/20/12
 * Time: 1:55 PM
 * To change this template use File | Settings | File Templates.
 */

var isIE8 = function()  {
    var result = false;
    if(/msie/i.test(navigator.userAgent) && $.browser.version < 9)  {
        result = true;
    }
    return result;
};

var serveStatic = function()    {
    jQuery('<div/>', {
        id:"main"
    }).appendTo("body");

    jQuery('<div/>', {
        id:"loader"
    }).appendTo("#main");
    var img_url = "url('./images/100/static.jpg')",
        loader = $("#loader");
    loader.css({"background":img_url, "width":"738px", "height":"715px", "top":"10%", "position":"absolute", "align":"center"});
    loader.css({"left":(($(window).width() - loader.width()) / 2) + "px"});
};

if(isIE8()) {
    serveStatic();
}   else{
    document.write("<script src='./js/lib/underscore-min.js'></script>");
    document.write("<script src='./js/lib/backbone-min.js'></script>");
    document.write("<script src='./js/lib/jquery.nicescroll.min.js'></script>");
    document.write("<script src='./js/lib/greensock/TweenMax.min.js'></script>");
    document.write("<script src='./js/lib/easeljs-0.5.0.min.js'></script>");
    document.write("<script src='./js/lib/tweenjs-0.3.0.min.js'></script>");
    document.write("<script src='./js/lib/preloadjs-0.2.0.min.js'></script>");
    document.write("<script src='./js/lib/movieclip-0.5.0.min.js'></script>");
    document.write("<script src='./js/lib/soundjs-0.3.0.min.js'></script>");
    document.write("<script src='./js/utils.js'></script>");
    document.write("<script src='./js/routers/Main.js'></script>");
    document.write("<script src='./js/models/MainModel.js'></script>");
    document.write("<script src='./js/collections/MainCollection.js'></script>");
    document.write("<script src='./js/views/MainView.js'></script>");
}

(function ($) {
    $.browserTest = function (a, z) {
        var u = 'unknown', x = 'X', m = function (r, h) {
            for (var i = 0; i < h.length; i = i + 1) {
                r = r.replace(h[i][0], h[i][1]);
            }
            return r;
        }, c = function (i, a, b, c) {
            var r = {
                name: m((a.exec(i) || [u, u])[1], b)
            };

            r[r.name] = true;

            r.version = (c.exec(i) || [x, x, x, x])[3];

            if (r.name.match(/safari/) && r.version > 400) {
                r.version = '2.0';
            }

            if (r.name === 'presto') {
                r.version = ($.browser.version > 9.27) ? 'futhark' : 'linear_b';
            }
            r.versionNumber = parseFloat(r.version, 10) || 0;
            r.versionX = (r.version !== x) ? (r.version + '').substr(0, 1) : x;
            r.className = r.name + r.versionX;

            return r;
        };
        a = (a.match(/Opera|Navigator|Minefield|KHTML|Chrome/) ? m(a, [
            [/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ''],
            ['Chrome Safari', 'Chrome'],
            ['KHTML', 'Konqueror'],
            ['Minefield', 'Firefox'],
            ['Navigator', 'Netscape']
        ]) : a).toLowerCase();

        $.browser = $.extend((!z) ? $.browser : {}, c(a, /(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/, [], /(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));

        $.layout = c(a, /(gecko|konqueror|msie|opera|webkit)/, [
            ['konqueror', 'khtml'],
            ['msie', 'trident'],
            ['opera', 'presto']
        ], /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);

        $.os = {
            name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris')
        };

        if (!z) {
            $('html').addClass([$.os.name, $.browser.name, $.browser.className, $.layout.name, $.layout.className].join(' '));
        }
    };
    $.browserTest(navigator.userAgent);

})(jQuery);


