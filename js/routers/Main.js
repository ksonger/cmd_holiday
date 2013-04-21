Backbone.View.prototype.close = function () {
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var app;

var AppRouter = Backbone.Router.extend({
    manifest:null,
    errors:0,
    canvas:null,
    stage:null,
    exportRoot:null,
    lib:null,
    images:null,
    createjs:null,
    mainView:null,
    clickTimeout:null,
    base_url:"images/100/",
    base_width:1500,
    base_height:1000,
    base_scale:1,
    isTablet:false,
    isPhone:false,
    default_man1:7,
    default_woman1:2,
    default_man2:1,
    initializing:true,
    muted:false,
    backgroundChecked:false,
    currentBgx:0,
    initialize:function () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || this.isTablet || this.isPhone) {
                if ($(window).width() > 480 || this.isTablet) {
                    // tablet
                    this.base_url = "images/64/";
                    this.base_width = 960;
                    this.base_height = 640;
                    this.base_scale = .64;
                    this.isTablet = true;
                } else {
                    // phone
                    this.base_url = "images/32/";
                    this.base_width = 480;
                    this.base_height = 320;
                    this.base_scale = .32;
                    this.isPhone = true;
                }
            }
            this.lib = this.lib || {};
            this.images = this.images || {};
            this.createjs = createjs || {};
            this.error_manifest = [
                {src:this.base_url + "prompts/prompt2.png", id:"click_prompt"}
            ];
            this.manifest = [
                {src:this.base_url + "backgrounds/stage_background.jpg", id:"background_blue"},
                {src:this.base_url + "backgrounds/background_00_option2_filmleader.jpg", id:"backscreen_opt1"},
                {src:this.base_url + "backgrounds/background_01_bridge.jpg", id:"backscreen_opt2"},
                {src:this.base_url + "backgrounds/background_02_office.jpg", id:"backscreen_opt3"},
                {src:this.base_url + "backgrounds/background_03_seattlesnow.jpg", id:"backscreen_opt4"},
                {src:this.base_url + "backgrounds/background_04_bigfootlodge.jpg", id:"backscreen_opt5"},
                {src:this.base_url + "backgrounds/backscreen_rolleredges.png", id:"backscreen_rolleredges"},
                {src:this.base_url + "bodies/body1_suit01_greenman.png", id:"body1_suit01_greenman"},
                {src:this.base_url + "bodies/body2_suit01_fancypants.png", id:"body2_suit01_fancypants"},
                {src:this.base_url + "bodies/body3_suit01_browntight.png", id:"body3_suit01_browntight"},
                {src:this.base_url + "bodies/body1_suit02_aloha.png", id:"body1_suit02_aloha"},
                {src:this.base_url + "bodies/body1_suit03_huggybear.png", id:"body1_suit03_huggybear"},
                {src:this.base_url + "bodies/body2_suit02_foxyinred.png", id:"body2_suit02_foxyinred"},
                {src:this.base_url + "bodies/body2_suit03_christmasjacket.png", id:"body2_suit03_christmasjacket"},
                {src:this.base_url + "bodies/body3_suit02_itchysweater.png", id:"body3_suit02_itchysweater"},
                {src:this.base_url + "bodies/body3_suit03_discomachine.png", id:"body3_suit03_discomachine"},
                {src:this.base_url + "curtains/opening_sign.png", id:"opening_sign"},
                {src:this.base_url + "curtains/curtain01.jpg", id:"curtain_left"},
                {src:this.base_url + "curtains/curtain02.jpg", id:"curtain_right"},
                {src:this.base_url + "mids/furniture_01_tree1.png", id:"furniture_01_tree1"},
                {src:this.base_url + "mids/furniture_01_tree2.png", id:"furniture_01_tree2"},
                {src:this.base_url + "mids/furniture_02_boxes1.png", id:"furniture_02_boxes1"},
                {src:this.base_url + "mids/furniture_02_boxes2.png", id:"furniture_02_boxes2"},
                {src:this.base_url + "mids/furniture_03_snowman1.png", id:"furniture_03_snowman1"},
                {src:this.base_url + "mids/furniture_03_snowman2.png", id:"furniture_03_snowman2"},
                {src:this.base_url + "mids/furniture_04_bear1.png", id:"furniture_04_bear1"},
                {src:this.base_url + "mids/furniture_04_bear2.png", id:"furniture_04_bear2"},
                {src:this.base_url + "shop/shopwindow_frame.png", id:"shopwindow_frame"},
                {src:this.base_url + "shop/speaker.png", id:"speaker"},
                {src:this.base_url + "shop/speaker_mute.png", id:"speaker_mute"},
                {src:this.base_url + "decorations/snowflake.png", id:"snowflake"},
                {src:this.base_url + "decorations/star.png", id:"star"},
                {src:this.base_url + "decorations/UFO.png", id:"UFO"},
                {src:this.base_url + "decorations/xmaslights.png", id:"xmaslights"},
                {src:this.base_url + "banner/banner.jpg", id:"banner"},
                {src:this.base_url + "backgrounds/floor.jpg", id:"floor"},
                {src:this.base_url + "dialog/cancel.png", id:"cancel_off"},
                {src:this.base_url + "dialog/cancel_press.png", id:"cancel_press"},
                {src:this.base_url + "dialog/decorations.jpg", id:"shadowbox_decorations"},
                {src:this.base_url + "dialog/lady_generic.jpg", id:"shadowbox_lady"},
                {src:this.base_url + "dialog/man1_generic.jpg", id:"shadowbox_man1"},
                {src:this.base_url + "dialog/man2_generic.jpg", id:"shadowbox_man2"},
                {src:this.base_url + "dialog/props.jpg", id:"shadowbox_props"},
                {src:this.base_url + "dialog/dialog_ropes.png", id:"dialog_ropes"},
                {src:this.base_url + "dialog/backgrounds.jpg", id:"shadowbox_set"},
                {src:this.base_url + "heads/head1_01_Dan.png", id:"head1_01_Dan"},
                {src:this.base_url + "heads/head1_01_Ramsey.png", id:"head1_01_Ramsey"},
                {src:this.base_url + "heads/head1_02_Dennis.png", id:"head1_02_Dennis"},
                {src:this.base_url + "heads/head1_02_Timberwolf.png", id:"head1_02_Timberwolf"},
                {src:this.base_url + "heads/head1_03_JonA.png", id:"head1_03_JonA"},
                {src:this.base_url + "heads/head1_04_MikeC.png", id:"head1_04_MikeC"},
                {src:this.base_url + "heads/head1_05_JohnO.png", id:"head1_05_JohnO"},
                {src:this.base_url + "heads/head1_06_MikeP.png", id:"head1_06_MikeP"},
                {src:this.base_url + "heads/head1_07_DavidL.png", id:"head1_07_DavidL"},
                {src:this.base_url + "heads/body1_DavidW.png", id:"body1_DavidW"},
                {src:this.base_url + "heads/head2_01_BirdE.png", id:"head2_01_BirdE"},
                {src:this.base_url + "heads/head2_05_DarcieM.png", id:"head2_05_DarcieM"},
                {src:this.base_url + "heads/head2_02_JessicaR.png", id:"head2_02_JessicaR"},
                {src:this.base_url + "heads/head2_03_AlexD.png", id:"head2_03_AlexD"},
                {src:this.base_url + "heads/head2_04_LauraD.png", id:"head2_04_LauraD"},
                {src:this.base_url + "heads/body2_PattiC.png", id:"body2_PattiC"},
                {src:this.base_url + "heads/body2_Julie.png", id:"body2_Julie"},
                {src:this.base_url + "heads/head2_08_SarahJ.png", id:"head2_08_SarahJ"},
                {src:this.base_url + "heads/head2_09_JeaneI.png", id:"head2_09_JeaneI"},
                {src:this.base_url + "heads/head2_10_Coffeelady.png", id:"head2_10_MrsCoffee"},
                {src:this.base_url + "heads/head3_01_Brad.png", id:"head3_01_Brad"},
                {src:this.base_url + "heads/head3_02_Rob.png", id:"head3_02_Rob"},
                {src:this.base_url + "heads/head3_03_Doug.png", id:"head3_03_Doug"},
                {src:this.base_url + "heads/body1_Curt.png", id:"body1_Curt"},
                {src:this.base_url + "heads/head3_05_Phil.png", id:"head3_05_Phil"},
                {src:this.base_url + "heads/head3_11_Jeff.png", id:"head3_11_Jeff"},
                {src:this.base_url + "heads/head3_07_Blaine.png", id:"head3_07_Blaine"},
                {src:this.base_url + "heads/head3_08_Del.png", id:"head3_08_Del"},
                {src:this.base_url + "heads/head3_09_Wolfie.png", id:"head3_09_Wolfie"},
                {src:this.base_url + "heads/head3_10_Hotrod.png", id:"head3_10_Hotrod"},
                {src:this.base_url + "dialog/outfits_man1.jpg", id:"shadowbox_man1ensembles"},
                {src:this.base_url + "dialog/outfits_lady.jpg", id:"shadowbox_woman1ensembles"},
                {src:this.base_url + "dialog/outfits_man2.jpg", id:"shadowbox_man2ensembles"},
                {src:this.base_url + "prompts/prompt2.png", id:"click_prompt"},
                {id:"stars", src:"sound/bkg_gold_stars_in.mp3|sound/bkg_gold_stars_in.ogg"},
                {id:"lights", src:"sound/bkg_lights_drop_in.mp3|sound/bkg_lights_drop_in.ogg"},
                {id:"snowflakes", src:"sound/bkg_snowflakes_in.mp3|sound/bkg_snowflakes_in.ogg"},
                {id:"ufos", src:"sound/bkg_UFO_in.mp3|sound/bkg_UFO_in.ogg"},
                {id:"snowmen", src:"sound/border_window_frosty.mp3|sound/border_window_frosty.ogg"},
                {id:"presents", src:"sound/border_window_package.mp3|sound/border_window_package.ogg"},
                {id:"bears", src:"sound/border_window_polar_bear.mp3|sound/border_window_polar_bear.ogg"},
                {id:"trees", src:"sound/border_window_tannenbaum.mp3|sound/border_window_tannenbaum.ogg"},
                {id:"wardrobe_change", src:"sound/Whistle_Swoosh_v2.mp3|sound/Whistle_Swoosh_v2.ogg"},
                {id:"curtains_close", src:"sound/Curtain_closes_sign_down.mp3|sound/Curtain_closes_sign_down.ogg"},
                {id:"curtains_open", src:"sound/Curtain_opens_sign_up.mp3|sound/Curtain_opens_sign_up.ogg"},
                {id:"head_change", src:"sound/face_change_sign_in _and_out.mp3|sound/face_change_sign_in _and_out.ogg"},
                {id:"generic_change", src:"sound/generic_slide.mp3|sound/generic_slide.ogg"},
                {id:"head_change_squeak_pop", src:"sound/head_change_squeak_pop.mp3|sound/head_change_squeak_pop.ogg"},
                {id:"music1", src:"sound/loop1.mp3|sound/loop1.ogg"},
                {id:"music2", src:"sound/loop2.mp3|sound/loop2.ogg"},
                {id:"music3", src:"sound/loop3.mp3|sound/loop3.ogg"},
                {id:"music4", src:"sound/loop4.mp3|sound/loop4.ogg"},
                {id:"parrot", src:"sound/parrot.mp3|sound/parrot.ogg"},
                {id:"sheep", src:"sound/sheep_baa.mp3|sound/sheep_baa.ogg"},
                {id:"sign_down", src:"sound/sign_slide_down.mp3|sound/sign_slide_down.ogg"},
                {id:"sign_up", src:"sound/sign_slide_up.mp3|sound/sign_slide_up.ogg"},
                {id:"wolf", src:"sound/wolf.mp3|sound/wolf.ogg"}
            ];
    },
    routes:{
        "":"index"
    },
    index:function () {
        this.begin();
    },

    begin:function (callback) {
        if(!isIE8())    {
            jQuery('<div/>', {
                id:"main"
            }).appendTo("body");

            jQuery('<div/>', {
                id:"loader"
            }).appendTo("#main");
            var img_url = "url('./images/100/loader.jpg')";
            if (this.isTablet) {
                img_url = "url('./images/64/loader.jpg')";
            }
            if (this.isPhone) {
                img_url = "url('./images/32/loader.jpg')";
            }
            $("#loader").css({"background":img_url, "width":695 * this.base_scale + "px", "height":642 * this.base_scale + "px", "top":"10%", "position":"absolute", "align":"center"});

            jQuery('<div/>', {
                class:"loadingBar"
            }).appendTo("#loader");
            $(".loadingBar").css({"background-color":"rgb(47,34,34)", "width":375 * this.base_scale + "px", "height":18 * this.base_scale + "px", "top":410 * this.base_scale + "px", "left":160 * this.base_scale + "px", "position":"relative", "align":"center", "-moz-border-radius":"3px", "-webkit-border-radius":"3px", "border-radius":"3px", "-moz-box-shadow":"0px 1px 0px rgba(255,255,255,0.25) ,inset 0px 1px 3px rgba(0,0,0,0.5)", "-webkit-box-shadow":"0px 1px 0px rgba(255,255,255,0.25) ,inset 0px 1px 3px rgba(0,0,0,0.5)", "box-shadow":"0px 1px 0px rgba(255,255,255,0.25) ,inset 0px 1px 3px rgba(0,0,0,0.5)"});
            jQuery('<div/>', {
                class:"loading-progress-15",
                id:"loadingFill"
            }).appendTo(".loadingBar");
            $(".loading-progress-15").css({
                "width":375 * app.base_scale + "px",
                "height":18 * app.base_scale + "px"
            });


            $("#loader").css({"left":(($(window).width() - $("#loader").width()) / 2) + "px"});
            this.loader = new createjs.PreloadJS(false);
            this.loader.installPlugin(createjs.SoundJS);
            this.loader.onFileLoad = this.handleFileLoad;
            this.loader.onProgress = this.handleOverallProgress;
            this.loader.onComplete = this.handleComplete;
            this.loader.onFileProgress = this.handleFileProgress;
            this.loader.onError = this.handleFileError;

            this.loader.loadManifest(this.manifest);
        }
    },
    handleFileLoad:function (o) {
        if (o.type == "image") {
            app.images[o.id] = o.result;
        }
    },
    handleComplete:function () {
        if (app.errors == 0) {
            TweenMax.to($(".loadingBar"), 0.4, {css:{autoAlpha:0}, onComplete:function () {
                $(".loadingBar").remove();
                app.showPlay();
            }});
        } else {
            app.errors = 0;
            app.loader.close();
            app.loader.initialize();
            app.loader.loadManifest(app.manifest);
        }
    },
    showPlay:function () {
        jQuery('<div/>', {
            class:"playButton"
        }).appendTo("#loader");

        var img_url = "url('./images/100/play.jpg')";
        if (this.isTablet) {
            img_url = "url('./images/64/play.jpg')";
        }
        if (this.isPhone) {
            img_url = "url('./images/32/play.jpg')";
        }
        $(".playButton").css({"visibility":"hidden", "background":img_url, "cursor":"pointer", "top":410 * app.base_scale + "px", "left":160 * app.base_scale + "px", "width":375 * app.base_scale + "px", "height":76 * app.base_scale + "px", "position":"relative", "align":"center"});
        TweenMax.to($(".playButton"), 0.4, {css:{autoAlpha:1}, delay:.5});
        $(".playButton").click(function () {
            TweenMax.to($("#loader"), 0.4, {css:{autoAlpha:0}, onComplete:function () {
                $("#loader").remove();
                app.lib = new MainModel();
                app.lib.build(app.lib, app.images, app.createjs);
                app.currentBgx = -833 * app.base_scale;
                app.mainView = new MainView({model:app.lib});
                app.exportRoot.dialogs["select_m1h" + app.default_man1].onPress();
                app.exportRoot.dialogs["select_w1h" + app.default_woman1].onPress();
                app.exportRoot.dialogs["select_m2h" + app.default_man2].onPress();
                app.loadFrost();
                app.currentMusic = "music1";
                createjs.SoundJS.setMasterVolume(.7);
                createjs.SoundJS.play("music1", createjs.SoundJS.INTERRUPT_ANY, 0, 0, -1);
            }});
        })
    },
    loadFrost:function () {
        //add the frost
        var frost_loader = new createjs.PreloadJS(false);
        frost_loader.onComplete = this.handleFrostComplete;
        frost_loader.onFileLoad = this.handleFileLoad;
        frost_loader.loadFile({src:this.base_url + "shop/frost.png", id:"shopwindow_frost"});
    },
    handleFrostComplete:function () {
        app.exportRoot.window_frame.addFrost();
    },
    handleOverallProgress:function (e) {
        var perc = app.loader.progress * 100;
        TweenMax.to($("#loadingFill"), 0.2, {css:{'width':perc + '%'}});
    },
    handleFileProgress:function (e) {

    },
    handleFileError:function (e) {
        app.errors++;
        for (var el in e) {
            if (el == 'src') {
                //console.log('error loading asset: ' + el + ": " + e[el]);
                //alert('error loading asset: ' + el + ": " + e[el]);
            }
        }
    },
    clearClickTimeout:function () {
        self.clearTimeout(app.clickTimeout);
    },
    tick:function () {
        if ($("#main") != null) {
            $(window).resize();
        }
        app.stage.update();
        try {
            var pct = $("#main").getNiceScroll()[0].cursor[0].offsetTop / ($("#main").getNiceScroll()[0].scrollvaluemax);
            app.exportRoot.anim.gotoAndStop(app.exportRoot.anim.duration * pct);
            if (pct == 1 && app.clickTimeout == null) {
                app.clickTimeout = self.setTimeout("app.mainView.showClickPrompt()", 2500);
            }
            if(pct > .9 && !app.backgroundChecked) {
                app.checkBackground();
            }
            if (pct < .7 && app.exportRoot.dialogs.y == -110 * app.base_scale) {
                app.exportRoot.dialogs.y = -111 * app.base_scale;
                app.exportRoot.dialogs.hide_dialog();
            }
            if (pct > .1 && app.initializing) {
                app.initializing = false;
            }
            if(pct < .9) {
                app.backgroundChecked = false;
            }
        } catch (e) {

        }
    },
    checkBackground:function()  {
        //console.log("check");
        app.backgroundChecked = true;
        var num = parseInt(app.currentMusic.substr(app.currentMusic.length - 1, 1));
        var xpos = -(833 * num) * app.base_scale;
        if(app.exportRoot.backgrounds_roller.backgrounds.x != xpos && num != 1)     {
            createjs.Tween.get(app.exportRoot.backgrounds_roller.backgrounds).to({x:xpos}, 1500, createjs.Ease.cubicInOut);
        }
        app.currentBgx = xpos;
    },
    auto_open:function () {
        TweenMax.to($("#main").getNiceScroll()[0], 2, {'scrollTop':4000, ease:Sine.easeInOut});
    },
    getBounds:function (obj) {
        var bounds = {x:Infinity, y:Infinity, width:0, height:0};

        if (obj instanceof createjs.Container) {
            var children = obj.children, l = children.length, cbounds, c;
            for (c = 0; c < l; c++) {
                cbounds = app.getBounds(children[c]);
                if (cbounds.x < bounds.x) bounds.x = cbounds.x;
                if (cbounds.y < bounds.y) bounds.y = cbounds.y;
                if (cbounds.width > bounds.width) bounds.width = cbounds.width;
                if (cbounds.height > bounds.height) bounds.height = cbounds.height;
            }
        } else {
            var gp, imgr;
            if (obj instanceof createjs.Bitmap) {
                gp = obj.localToGlobal(0, 0);
                imgr = {width:obj.image.width, height:obj.image.height};
            } else if (obj instanceof createjs.BitmapAnimation) {
                gp = obj.localToGlobal(0, 0);
                imgr = obj.spriteSheet._frames[obj.currentFrame];
            } else {
                return bounds;
            }

            bounds.width = imgr.width * Math.abs(obj.scaleX);
            if (obj.scaleX >= 0) {
                bounds.x = gp.x;
            } else {
                bounds.x = gp.x - bounds.width;
            }

            bounds.height = imgr.height * Math.abs(obj.scaleY);
            if (obj.scaleX >= 0) {
                bounds.y = gp.y;
            } else {
                bounds.y = gp.y - bounds.height;
            }
        }

        return bounds;
    }
});

tpl.loadTemplates([
    'main'
], function () {
    app = new AppRouter();
    Backbone.history.start();
});
var ww = $(window).width();
var wh = $(window).height();
$(window).resize(function () {
    $("#main").height($(window).height());
    $("#canvas").css({"left":(($(window).width() - $("#canvas").width()) / 2) + "px"});
    $("#loader").css({"left":(($(window).width() - $("#loader").width()) / 2) + "px"});
    $("#canvas").css({"left":(($(window).width() - $("#canvas").width()) / 2) + "px", "height":$("#canvas").width() * .6666666666666666});
    if ($("#scrollPrompt").css("visibility") == "visible") {
        $("#scrollPrompt").css({"left":ww - 120 + "px"});
    }
    try {
        $("#main").getNiceScroll()[0].updateScrollBar();
        $("#main").getNiceScroll()[0].onResize();
        if ($("#main").getNiceScroll()[0].getScrollTop() != 0 && $("#scrollPrompt").css("visibility") != "hidden") {
            $("#scrollPrompt").css({"visibility":"hidden"});
        }

    } catch (e) {

    }
    wh = $(window).height();
    ww = $(window).width();
});


