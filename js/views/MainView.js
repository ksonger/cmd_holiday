/**
 * Created with JetBrains WebStorm.
 * User: KSonger
 * Date: 7/5/12
 * Time: 12:43 PM
 * To change this template use File | Settings | File Templates.
 */
window.MainView = Backbone.View.extend({

    tagName:"div",
    p:null,
    sequence:[],
    anim:null,

    initialize:function () {
        this.render();
    },

    render:function () {

        var cjs = app.createjs;

        this.$el.attr({id:"card"});
        this.$el.html("<canvas id='canvas' width='" + app.base_width + "px' height='" + app.base_height + "px'></canvas>");
        this.$el.find("#canvas").css({"background":"#000000", "position":"fixed", "width":"100%", "max-width":app.base_width + "px", "visibility":"hidden"});
        this.$el.appendTo("#main");

        TweenMax.to($("#canvas"), .01, {css:{autoAlpha:0}});

        app.canvas = document.getElementById("canvas");

        this.card.prototype = this.p = new cjs.Container();
        this.p.nominalBounds = new cjs.Rectangle(-494.4, 0, 3057, 640);

        app.exportRoot = new this.card();

        app.stage = new app.createjs.Stage(app.canvas);
        app.stage.addChild(app.exportRoot);
        app.stage.enableMouseOver();
        app.stage.update();

        app.createjs.Ticker.setFPS(24);
        app.createjs.Ticker.addListener(app);

        this.scrollPrompt();

        return this;
    },

    showClickPrompt:function () {
        app.createjs.Tween.get(app.exportRoot.click_prompt).to({alpha:1}, 1000, app.createjs.Ease.cubicOut)
    },

    hideClickPrompt:function () {
        app.createjs.Tween.get(app.exportRoot.click_prompt).to({alpha:0}, 1000, app.createjs.Ease.cubicOut)
    },

    card:function () {
        var cjs = app.createjs,
            main = $("#main");

        this.initialize();

        // bluebackground
        this.bbg = new app.lib.background_blue();
        this.bbg.setTransform(258 * app.base_scale, 72 * app.base_scale);

        // backgrounds roller
        this.backgrounds_roller = new app.lib.background_roll();
        this.backgrounds_roller.setTransform(333.5 * app.base_scale, 72 * app.base_scale);
        this.backgrounds_roller.rollermask = new cjs.Shape();
        this.backgrounds_roller.rollermask.graphics.beginStroke("#FF0").setStrokeStyle(5).drawRect(this.backgrounds_roller.x, 0, app.getBounds(this.backgrounds_roller).width - 2, app.getBounds(this.backgrounds_roller).height + app.getBounds(this.backgrounds_roller).y).closePath();
        this.backgrounds_roller.mask = this.backgrounds_roller.rollermask;


        this.floor = new app.lib.floor();
        this.floor.setTransform(258 * app.base_scale, 559 * app.base_scale);

        //decorations
        this.decorations = new app.lib.decorations();
        this.decorations.setTransform(250 * app.base_scale, -200 * app.base_scale);

        //character group
        this.characters = new app.lib.people();
        this.characters.setTransform(362 * app.base_scale, 65 * app.base_scale);
        this.characters.grp_man1.setTransform(-400 * app.base_scale);
        this.characters.grp_woman.setTransform(-400 * app.base_scale);
        this.characters.grp_man2.setTransform(855 * app.base_scale);

        // midground
        this.midground = new app.lib.middle_grounds();
        this.midground.setTransform(0, 100 * app.base_scale);
        this.midground.leftside.setTransform(-339 * app.base_scale, 0);
        this.midground.rightside.setTransform(1240 * app.base_scale, 0);

        // store window
        this.window_frame = new app.lib.shop_window();

        // volume control
        this.volume_control = new app.lib.volume_control();
        this.volume_control.setTransform(150 * app.base_scale, 100);

        // banner
        this.banner = new app.lib.banner();
        this.banner.setTransform(258 * app.base_scale, 598 * app.base_scale);

        // curtains
        this.curtains = new app.lib.curtains();
        this.curtains.setTransform(0, 73 * app.base_scale);

        // sign
        this.sign = new app.lib.opening_sign();
        this.sign.setTransform(485 * app.base_scale, 0);

        // shadowbox
        this.shadow_box = new app.lib.shadowbox();
        this.shadow_box.alpha = 0;
        this.shadow_box.visible = false;

        // dialog
        this.dialogs = new app.lib.dialog();
        this.dialogs.setTransform(447.5 * app.base_scale, -630 * app.base_scale);

        // click prompt
        this.click_prompt = new app.lib.click_prompt();
        this.click_prompt.setTransform(475 * app.base_scale, 740 * app.base_scale);
        this.click_prompt.alpha = 0;


        this.addChild(this.bbg, this.backgrounds_roller, this.decorations, this.midground, this.floor, this.characters, this.banner, this.curtains, this.sign, this.window_frame, this.volume_control, this.click_prompt, this.shadow_box, this.dialogs);


        // the animation
        this.sequence = [
            cjs.Tween.get(this.sign).to({y:-510 * app.base_scale}, 1000, cjs.Ease.backIn),
            cjs.Tween.get(this.curtains.curtain_left).wait(1000).to({x:-255 * app.base_scale}, 1000, cjs.Ease.circInOut),
            cjs.Tween.get(this.curtains.curtain_right).wait(1000).to({x:1245 * app.base_scale}, 1000, cjs.Ease.circInOut),
            cjs.Tween.get(this.midground.leftside).wait(2000).to({x:257 * app.base_scale}, 800, cjs.Ease.circInOut),
            cjs.Tween.get(this.midground.rightside).wait(2000).to({x:948 * app.base_scale}, 800, cjs.Ease.circInOut),
            cjs.Tween.get(this.backgrounds_roller.backgrounds).wait(1500).to({x:-833 * app.base_scale}, 4200),
            cjs.Tween.get(this.characters.grp_man2).wait(2500).to({x:488 * app.base_scale}, 1000, cjs.Ease.circInOut),
            cjs.Tween.get(this.characters.grp_woman).wait(2900).to({x:227 * app.base_scale}, 1000, cjs.Ease.circInOut),
            cjs.Tween.get(this.characters.grp_man1).wait(3300).to({x:0}, 1000, cjs.Ease.circInOut),
            cjs.Tween.get(this.banner).wait(5500).to({y:540 * app.base_scale}, 800, cjs.Ease.circInOut),
            cjs.Tween.get(this.decorations).wait(3500).to({y:70 * app.base_scale}, 700, cjs.Ease.backOut)
        ];


        this.anim = new app.createjs.Timeline(this.sequence, null, {paused:true});

        main.niceScroll({cursorcolor:"#ffffe2", cursorborder:"1px solid #ffffe2", cursorwidth:"10px", cursoropacitymax:.9, cursoropacitymin:0, cursorborderradius:"6px", "autohidemode":false});
        main.getNiceScroll()[0].setScrollTop(0);

        TweenMax.to($("#canvas"), 1.2, {css:{autoAlpha:1}, delay:.5});
    },

    scrollPrompt:function () {

        var prompt = $("#scrollPrompt");

        jQuery('<div/>', {
            id:"scrollPrompt"
        }).appendTo("body");
        TweenMax.to(prompt, 0.01, {css:{autoAlpha:0}});
        prompt.html("<div width='120px'><img src='" + app.base_url + "prompts/prompt1.gif'></div>");
        TweenMax.to(prompt, 0.7, {css:{autoAlpha:1}});
    }
});