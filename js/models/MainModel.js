window.MainModel = Backbone.Model.extend({
    build:function (lib, img, cjs) {
        var p = new cjs.Container();

        // symbols:
        (this.background_blue = function () {
            this.initialize(img.background_blue);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 1045 * app.base_scale, 640 * app.base_scale);


        (this.backscreen_opt1 = function () {
            this.initialize(img.backscreen_opt1);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 834 * app.base_scale, 487 * app.base_scale);


        (this.backscreen_opt2 = function () {
            this.initialize(img.backscreen_opt2);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 834 * app.base_scale, 487 * app.base_scale);


        (this.backscreen_opt3 = function () {
            this.initialize(img.backscreen_opt3);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 834 * app.base_scale, 487 * app.base_scale);

        (this.backscreen_opt4 = function () {
            this.initialize(img.backscreen_opt4);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 834 * app.base_scale, 487 * app.base_scale);

        (this.backscreen_opt5 = function () {
            this.initialize(img.backscreen_opt5);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 834 * app.base_scale, 487 * app.base_scale);


        (this.backscreen_rolleredges = function () {
            this.initialize(img.backscreen_rolleredges);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 833 * app.base_scale, 530 * app.base_scale);


        (this.opening_sign = function () {
            this.initialize(img.opening_sign);

            this.onPress = function (e) {
                app.auto_open();
            };
            this.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 550 * app.base_scale, 570 * app.base_scale);


        (this.curtain_left = function () {
            this.initialize(img.curtain_left);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 498 * app.base_scale, 530 * app.base_scale);


        (this.curtain_right = function () {
            this.initialize(img.curtain_right);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 494 * app.base_scale, 530 * app.base_scale);

        (this.banner = function () {
            this.initialize(img.banner);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 986 * app.base_scale, 57 * app.base_scale);

        (this.floor = function () {
            this.initialize(img.floor);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 990 * app.base_scale, 35 * app.base_scale);

        (this.click_prompt = function () {
            this.initialize(img.click_prompt);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 550 * app.base_scale, 85 * app.base_scale);


        /*************************************/
        /************ DECORATIONS ************/
        /*************************************/

        (lib.snowflake = function () {
            this.initialize(img.snowflake);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 85 * app.base_scale, 85 * app.base_scale);


        (lib.star = function () {
            this.initialize(img.star);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 118 * app.base_scale, 122 * app.base_scale);


        (lib.UFO = function () {
            this.initialize(img.UFO);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 262 * app.base_scale, 162 * app.base_scale);


        (lib.xmaslights = function () {
            this.initialize(img.xmaslights);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 215 * app.base_scale, 78 * app.base_scale);


        (lib.deco4 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // Layer 1
            this.instance = new lib.snowflake();

            this.instance_1 = new lib.star();

            this.instance_2 = new lib.xmaslights();
            this.instance_2.setTransform(-13 * app.base_scale, 17.7 * app.base_scale);

            this.instance_4 = new lib.UFO();
            this.instance_4.setTransform(57 * app.base_scale, 4 * app.base_scale, 0.179, 0.179, -15);

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).to({state:[
                {t:this.instance_4}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 85 * app.base_scale, 85 * app.base_scale);


        (lib.deco3 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // Layer 1
            this.instance_5 = new lib.snowflake();

            this.instance_6 = new lib.star();

            this.instance_7 = new lib.xmaslights();
            this.instance_7.setTransform(64 * app.base_scale, -20 * app.base_scale);

            this.instance_8 = new lib.UFO();
            this.instance_8.setTransform(274 * app.base_scale, -5 * app.base_scale, 0.265, 0.265, -11);

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance_5}
            ]}).to({state:[
                {t:this.instance_6}
            ]}, 1).to({state:[
                {t:this.instance_7}
            ]}, 1).to({state:[
                {t:this.instance_8}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 85 * app.base_scale, 85 * app.base_scale);


        (lib.deco2 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // Layer 1
            this.instance_9 = new lib.snowflake();

            this.instance_10 = new lib.star();

            this.instance_11 = new lib.xmaslights();
            this.instance_11.setTransform(271 * app.base_scale, -123.4 * app.base_scale);

            this.instance_12 = new lib.xmaslights();
            this.instance_12.setTransform(56 * app.base_scale, -123.4 * app.base_scale);

            this.instance_13 = new lib.UFO();
            this.instance_13.setTransform(434 * app.base_scale, -148 * app.base_scale, 0.351, 0.351, 7);

            this.instance_14 = new lib.UFO();
            this.instance_14.setTransform(175 * app.base_scale, -103 * app.base_scale, 0.441, 0.441, -23);

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance_9}
            ]}).to({state:[
                {t:this.instance_10}
            ]}, 1).to({state:[
                {t:this.instance_12},
                {t:this.instance_11}
            ]}, 1).to({state:[
                {t:this.instance_14},
                {t:this.instance_13}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 85 * app.base_scale, 85 * app.base_scale);


        (lib.deco1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // Layer 1
            this.instance_15 = new lib.snowflake();

            this.instance_16 = new lib.star();
            this.instance_16.setTransform(-36 * app.base_scale, 0 * app.base_scale);

            this.instance_17 = new lib.xmaslights();
            this.instance_17.setTransform(-45 * app.base_scale, 18 * app.base_scale);

            this.instance_18 = new lib.UFO();
            this.instance_18.setTransform(-30 * app.base_scale, -3 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance_15}
            ]}).to({state:[
                {t:this.instance_16}
            ]}, 1).to({state:[
                {t:this.instance_17}
            ]}, 1).to({state:[
                {t:this.instance_18}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 85 * app.base_scale, 85 * app.base_scale);


        (lib.decorations = function () {
            this.initialize();

            // element4
            this.deco4 = new lib.deco4();
            this.deco4.setTransform(914.5 * app.base_scale, 56 * app.base_scale, 1, 1, 0, 0, 0, 42.5 * app.base_scale, 42.5 * app.base_scale);

            // element3
            this.deco3 = new lib.deco3();
            this.deco3.setTransform(622.7 * app.base_scale, 94 * app.base_scale, 1, 1, 0, 0, 0, 42.5 * app.base_scale, 42.5 * app.base_scale);

            // element2
            this.deco2 = new lib.deco2();
            this.deco2.setTransform(200.6 * app.base_scale, 197 * app.base_scale, 1, 1, 0, 0, 0, 42.5 * app.base_scale, 42.5 * app.base_scale);

            // element1
            this.deco1 = new lib.deco1();
            this.deco1.setTransform(86.5 * app.base_scale, 56 * app.base_scale, 1, 1, 0, 0, 0, 42.5 * app.base_scale, 42.5 * app.base_scale);

            this.addChild(this.deco1, this.deco2, this.deco3, this.deco4);

            this.deco1.gotoAndStop(0);
            this.deco2.gotoAndStop(0);
            this.deco3.gotoAndStop(0);
            this.deco4.gotoAndStop(0);

            this.selectedElement = 'snow';

            this.onPress = function () {
                app.exportRoot.dialogs.show_dialog(4);
            };
            this.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };

            this.change_deco = function (num) {
                var elements = ['snow', 'stars', 'lights', 'ships'];
                if (this.selectedElement == 'snow' || this.selectedElement == 'stars' || this.selectedElement == 'lights') {
                    cjs.Tween.get(app.exportRoot.decorations).wait(300).to({y:-200 * app.base_scale}, 500, cjs.Ease.backIn).call(app.exportRoot.decorations.swap, [num - 1]);
                }
                if (this.selectedElement == 'ships') {
                    cjs.Tween.get(app.exportRoot.decorations).wait(300).to({scaleX:.7, scaleY:.7, alpha:0, x:360 * app.base_scale}, 500, cjs.Ease.circIn).call(app.exportRoot.decorations.swap, [num - 1]);
                }
                this.selectedElement = elements[num - 1];
                app.exportRoot.dialogs.hide_dialog();
            };
            this.swap = function (num) {
                for (var i = 1; i < 5; i++) {
                    var d = 'deco' + i;
                    this[d].gotoAndStop(num);
                }
                if (this.selectedElement == 'snow' || this.selectedElement == 'stars') {
                    app.exportRoot.decorations.alpha = 1;
                    app.exportRoot.decorations.setTransform(250 * app.base_scale, -200 * app.base_scale, 1, 1);
                    if (this.selectedElement == "snow") {
                        app.exportRoot.decorations.deco1.rotation = 60;
                        app.exportRoot.decorations.deco1.y = 0;
                        app.exportRoot.decorations.deco2.rotation = -60;
                        app.exportRoot.decorations.deco3.rotation = 80;
                        app.exportRoot.decorations.deco3.y = 0;
                        app.exportRoot.decorations.deco4.rotation = -90;
                        cjs.Tween.get(app.exportRoot.decorations).wait(100).to({y:70 * app.base_scale}, 500, cjs.Ease.backOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco1).wait(150).to({rotation:0, y:56 * app.base_scale}, 600, cjs.Ease.circOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco2).wait(230).to({rotation:0}, 400, cjs.Ease.circOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco3).wait(250).to({rotation:0, y:94 * app.base_scale}, 700, cjs.Ease.circOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco4).wait(190).to({rotation:0}, 600, cjs.Ease.circOut);
                    }
                    if (this.selectedElement == "stars") {
                        app.exportRoot.decorations.deco1.rotation = -90;
                        app.exportRoot.decorations.deco2.rotation = 110;
                        app.exportRoot.decorations.deco2.y = 60 * app.base_scale;
                        app.exportRoot.decorations.deco3.rotation = -60;
                        app.exportRoot.decorations.deco4.rotation = 60;
                        app.exportRoot.decorations.deco4.y = 0;
                        cjs.Tween.get(app.exportRoot.decorations).wait(100).to({y:70 * app.base_scale}, 500, cjs.Ease.backOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco1).wait(150).to({rotation:0, y:56 * app.base_scale}, 600, cjs.Ease.circOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco2).wait(230).to({rotation:0, y:197 * app.base_scale}, 400, cjs.Ease.circOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco3).wait(100).to({rotation:0, y:94 * app.base_scale}, 500, cjs.Ease.circOut);
                        cjs.Tween.get(app.exportRoot.decorations.deco4).wait(190).to({rotation:0, y:56 * app.base_scale}, 600, cjs.Ease.circOut);
                    }
                }
                if (this.selectedElement == 'lights') {
                    app.exportRoot.decorations.alpha = 1;
                    app.exportRoot.decorations.setTransform(250 * app.base_scale, -200 * app.base_scale, 1, 1);
                    cjs.Tween.get(app.exportRoot.decorations).wait(100).to({y:70 * app.base_scale}, 1500, cjs.Ease.elasticOut);
                }
                if (this.selectedElement == 'ships') {
                    cjs.Tween.get(app.exportRoot.decorations).wait(1).to({scaleX:1, scaleY:1, alpha:1, x:250 * app.base_scale, y:70 * app.base_scale}, 1, cjs.Ease.circOut);

                    app.exportRoot.decorations.deco1.rotation = 30;
                    app.exportRoot.decorations.deco1.alpha = 0;
                    app.exportRoot.decorations.deco1.x = 150 * app.base_scale;
                    app.exportRoot.decorations.deco1.y = -20 * app.base_scale;
                    app.exportRoot.decorations.deco1.scaleX = .3;
                    app.exportRoot.decorations.deco1.scaleY = .3;

                    app.exportRoot.decorations.deco2.rotation = -20;
                    app.exportRoot.decorations.deco2.alpha = 0;
                    app.exportRoot.decorations.deco2.x = 250 * app.base_scale;
                    app.exportRoot.decorations.deco2.y = 280 * app.base_scale;
                    app.exportRoot.decorations.deco2.scaleX = .6;
                    app.exportRoot.decorations.deco2.scaleY = .6;

                    app.exportRoot.decorations.deco3.rotation = 20;
                    app.exportRoot.decorations.deco3.alpha = 0;
                    app.exportRoot.decorations.deco3.scaleX = .6;
                    app.exportRoot.decorations.deco3.scaleY = .6;

                    app.exportRoot.decorations.deco4.rotation = -25;
                    app.exportRoot.decorations.deco4.alpha = 0;
                    app.exportRoot.decorations.deco4.scaleX = .6;
                    app.exportRoot.decorations.deco4.scaleY = .6;

                    cjs.Tween.get(app.exportRoot.decorations.deco1).wait(150).to({rotation:0, alpha:1, x:80 * app.base_scale, y:56 * app.base_scale, scaleX:1, scaleY:1}, 800, cjs.Ease.circOut);
                    cjs.Tween.get(app.exportRoot.decorations.deco2).wait(0).to({rotation:0, alpha:1, x:200.6 * app.base_scale, y:197 * app.base_scale, scaleX:1, scaleY:1}, 1200, cjs.Ease.cubicInOut);
                    cjs.Tween.get(app.exportRoot.decorations.deco3).wait(200).to({rotation:0, alpha:1, x:622.7 * app.base_scale, y:94 * app.base_scale, scaleX:1, scaleY:1}, 900, cjs.Ease.circOut);
                    cjs.Tween.get(app.exportRoot.decorations.deco4).wait(450).to({rotation:0, alpha:1, x:914.5 * app.base_scale, y:56 * app.base_scale, scaleX:1, scaleY:1}, 600, cjs.Ease.circOut);
                }
                if (!app.muted) {
                    if (num == 0) {
                        cjs.SoundJS.play("snowflakes", cjs.SoundJS.INTERRUPT_ANY);
                    }
                    if (num == 1) {
                        cjs.SoundJS.play("stars", cjs.SoundJS.INTERRUPT_ANY);
                    }
                    if (num == 2) {
                        cjs.SoundJS.play("lights", cjs.SoundJS.INTERRUPT_ANY);
                    }
                    if (num == 3) {
                        cjs.SoundJS.play("ufos", cjs.SoundJS.INTERRUPT_ANY);
                    }
                }
            }

        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(44 * app.base_scale, 14 * app.base_scale, 913 * app.base_scale, 226 * app.base_scale);


        (this.shopwindow_frame = function () {
            this.initialize(img.shopwindow_frame);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 1500 * app.base_scale, 1000 * app.base_scale);

        (this.shopwindow_frost = function () {
            this.initialize(img.shopwindow_frost);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 1500 * app.base_scale, 1000 * app.base_scale);

        (this.speaker = function () {
            this.initialize(img.speaker);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 70 * app.base_scale, 70 * app.base_scale);

        (this.speaker_mute = function () {
            this.initialize(img.speaker_mute);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 70 * app.base_scale, 70 * app.base_scale);


        (this.volume_control = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

            // mids
            this.instance = new lib.speaker();
            this.instance_1 = new lib.speaker_mute();

            this.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };
            this.onPress = function (e) {
                if (app.muted) {
                    createjs.SoundJS.setMasterVolume(1);
                    this.gotoAndStop(0);
                    // restore the music
                    createjs.SoundJS.play(app.currentMusic, createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1);
                } else {
                    createjs.SoundJS.setMasterVolume(0);
                    this.gotoAndStop(1);
                    createjs.SoundJS.stop(app.currentMusic);
                }
                app.muted = !app.muted;
            };


            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).wait(1));

            this.gotoAndStop(0);

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 70 * app.base_scale, 70 * app.base_scale);

        (this.logo_btn = function() {
            this.initialize();

            // Layer 1
            this.shape = new cjs.Shape();
            this.shape.graphics.f("rgba(255,0,0,.01)").s().p("AF+CjIr7AAIAAlFIL7AAIAAFF").cp();
            this.shape.setTransform(38.3 * app.base_scale,16.4 * app.base_scale, app.base_scale, app.base_scale);

            this.addChild(this.shape);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0,0,76.5 * app.base_scale,32.8 * app.base_scale);

        (this.shop_window = function () {
            this.initialize();

            // Layer 1
            this.instance = new lib.shopwindow_frame();

            // logo_hitarea
            this.btn = new lib.logo_btn();
            this.btn.setTransform(324.1 * app.base_scale,651.3 * app.base_scale,1,1,0,0,0,38.3 * app.base_scale,16.4 * app.base_scale);

            this.btn.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.btn.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };
            this.btn.onPress = function (e) {
                // go to CMD
                window.open('http://www.cmdagency.com');
            };

            this.addChild(this.instance, this.btn);

            this.addFrost = function () {
                this.frost_instance = new lib.shopwindow_frost();
                this.frost_instance.alpha = 0;
                this.addChild(this.frost_instance);
                cjs.Tween.get(this.frost_instance).to({alpha:1}, 4000);
            }
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 1500 * app.base_scale, 1000 * app.base_scale);


        (this.roller_gradient = function () {
            this.initialize();

            this.instance_1 = new lib.backscreen_rolleredges();

            this.addChild(this.instance_1);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(-63.4 * app.base_scale, 0 * app.base_scale, 960 * app.base_scale, 530 * app.base_scale);


        /*************************************/
        /************* MIDGROUNDS ************/
        /*************************************/

        (this.furniture_01_tree1 = function () {
            this.initialize(img.furniture_01_tree1);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 250 * app.base_scale, 460 * app.base_scale);


        (this.furniture_01_tree2 = function () {
            this.initialize(img.furniture_01_tree2);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 320 * app.base_scale, 460 * app.base_scale);


        (this.furniture_02_boxes1 = function () {
            this.initialize(img.furniture_02_boxes1);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 250 * app.base_scale, 460 * app.base_scale);


        (this.furniture_02_boxes2 = function () {
            this.initialize(img.furniture_02_boxes2);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 320 * app.base_scale, 460 * app.base_scale);


        (this.furniture_03_snowman1 = function () {
            this.initialize(img.furniture_03_snowman1);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 250 * app.base_scale, 460 * app.base_scale);


        (this.furniture_03_snowman2 = function () {
            this.initialize(img.furniture_03_snowman2);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 320 * app.base_scale, 460 * app.base_scale);

        (this.furniture_04_bear1 = function () {
            this.initialize(img.furniture_04_bear1);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 250 * app.base_scale, 460 * app.base_scale);


        (this.furniture_04_bear2 = function () {
            this.initialize(img.furniture_04_bear2);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 320 * app.base_scale, 460 * app.base_scale);

        (this.left_midground = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };
            this.frame_3 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3));

            // mids
            this.instance = new lib.furniture_01_tree1();
            this.instance_1 = new lib.furniture_04_bear1();
            this.instance_2 = new lib.furniture_02_boxes1();
            this.instance_3 = new lib.furniture_03_snowman1();


            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).to({state:[
                {t:this.instance_3}
            ]}, 1).wait(1));

            this.gotoAndStop(0);


        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 250 * app.base_scale, 460 * app.base_scale);


        (this.right_midground = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };
            this.frame_3 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3));

            // mids
            this.instance = new lib.furniture_01_tree2();
            this.instance_1 = new lib.furniture_04_bear2();
            this.instance_2 = new lib.furniture_02_boxes2();
            this.instance_3 = new lib.furniture_03_snowman2();


            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).to({state:[
                {t:this.instance_3}
            ]}, 1).wait(1));

            this.gotoAndStop(0);

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 320 * app.base_scale, 460 * app.base_scale);


        (this.middle_grounds = function () {
            this.initialize();

            // Layer 2
            this.rightside = new lib.right_midground();
            this.rightside.setTransform(921 * app.base_scale, 0);

            // Layer 1
            this.leftside = new lib.left_midground();
            this.leftside.setTransform(0, 0);

            this.addChild(this.leftside, this.rightside);

            this.onPress = function () {
                app.exportRoot.dialogs.show_dialog(3);
            };
            this.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };

            this.change_mid = function (num) {
                if (!app.muted) {
                    if (num == 1) {
                        cjs.SoundJS.play("trees", cjs.SoundJS.INTERRUPT_ANY);
                    }
                    if (num == 2) {
                        cjs.SoundJS.play("bears", cjs.SoundJS.INTERRUPT_ANY);
                    }
                    if (num == 3) {
                        cjs.SoundJS.play("presents", cjs.SoundJS.INTERRUPT_ANY);
                    }
                    if (num == 4) {
                        cjs.SoundJS.play("snowmen", cjs.SoundJS.INTERRUPT_ANY);
                    }
                }
                cjs.Tween.get(app.exportRoot.midground.rightside).wait(300).to({x:1240 * app.base_scale}, 500, cjs.Ease.cubicIn).call(app.exportRoot.midground.swap, [num - 1]).to({x:948 * app.base_scale}, 500, cjs.Ease.cubicOut);
                cjs.Tween.get(app.exportRoot.midground.leftside).wait(300).to({x:-339 * app.base_scale}, 500, cjs.Ease.cubicIn).to({x:257 * app.base_scale}, 500, cjs.Ease.cubicOut);
                app.exportRoot.dialogs.hide_dialog();
            };
            this.swap = function (num) {
                app.exportRoot.midground.rightside.gotoAndStop(num);
                app.exportRoot.midground.leftside.gotoAndStop(num);
            }
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 960 * app.base_scale, 544 * app.base_scale);


        /*************************************/
        /******* MAN1, WOMAN, MAN2 ***********/
        /*************************************/

        (this.man1 = function () {
            this.initialize();
            this.man_body = new lib.bodies1();
            this.man_body.setTransform(0, 59 * app.base_scale);
            this.man_head = new lib.heads1();
            this.man_head.gotoAndStop(0);
            this.man_head.setTransform(92 * app.base_scale, 6 * app.base_scale);


            this.man_head.onPress = function () {
                app.exportRoot.dialogs.show_dialog(0);
            };
            this.man_head.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.man_head.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };
            this.man_body.onPress = function () {
                app.exportRoot.dialogs.show_dialog(6);
            };
            this.man_body.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.man_body.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };
            this.change_head = function (num) {
                cjs.Tween.get(app.exportRoot.characters.grp_man1.man_head).wait(300).to({x:Math.round(133 * app.base_scale), y:Math.round(64 * app.base_scale), scaleX:.5, scaleY:.5, alpha:0}, 300, cjs.Ease.cubicIn).call(app.exportRoot.characters.grp_man1.swap_head, [num - 1]).to({x:Math.round(92 * app.base_scale), y:Math.round(6 * app.base_scale), scaleX:1, scaleY:1, alpha:1}, 600, cjs.Ease.elasticInOut);
                app.exportRoot.dialogs.hide_dialog();
            };
            this.swap_head = function (num) {
                app.exportRoot.characters.grp_man1.man_head.gotoAndStop(num);
                if (!app.initializing && !app.muted) {
                    if (num != 8) {
                        cjs.SoundJS.play("head_change_squeak_pop", cjs.SoundJS.INTERRUPT_ANY);
                    } else {
                        cjs.SoundJS.play("sheep", cjs.SoundJS.INTERRUPT_ANY);
                    }
                }
            };

            this.swap_body = function (num) {
                app.exportRoot.characters.grp_man1.man_body.gotoAndStop(num);
                app.exportRoot.characters.grp_man1.man_head.x = 55 * app.base_scale;
                app.exportRoot.characters.grp_man1.man_head.y = 53 * app.base_scale;
                app.exportRoot.characters.grp_man1.man_head.rotation = -30;
                cjs.Tween.get(app.exportRoot.characters.grp_man1).to({x:0}, 400, cjs.Ease.circOut);
                cjs.Tween.get(app.exportRoot.characters.grp_man1.man_head).to({rotation:0, x:92 * app.base_scale, y:6 * app.base_scale}, 500, cjs.Ease.backInOut);
            };

            this.change_body = function (num) {
                if (!app.muted) {
                    cjs.SoundJS.play("wardrobe_change", cjs.SoundJS.INTERRUPT_ANY);
                }

                app.exportRoot.dialogs.hide_dialog();
                cjs.Tween.get(app.exportRoot.characters.grp_man1.man_head).wait(300).to({rotation:30, x:147 * app.base_scale, y:-20 * app.base_scale}, 200, cjs.Ease.circIn);
                cjs.Tween.get(app.exportRoot.characters.grp_man1).wait(300).to({x:-600 * app.base_scale}, 300, cjs.Ease.circIn).call(app.exportRoot.characters.grp_man1.swap_body, [num - 1]);
            };

            this.addChild(this.man_body, this.man_head);
            this.man_head.gotoAndStop(0);
            this.man_body.gotoAndStop(0);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 598 * app.base_scale, 242 * app.base_scale);


        (this.woman = function () {
            this.initialize();
            this.woman_body = new lib.bodies2();
            this.woman_body.setTransform(0, 78 * app.base_scale);
            this.woman_head = new lib.heads2();
            this.woman_head.gotoAndStop(0);
            this.woman_head.setTransform(104 * app.base_scale, 59 * app.base_scale);

            this.woman_head.onPress = function () {
                app.exportRoot.dialogs.show_dialog(1);
            };
            this.woman_head.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.woman_head.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };

            this.woman_body.onPress = function () {
                app.exportRoot.dialogs.show_dialog(7);
            };
            this.woman_body.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.woman_body.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };

            this.change_head = function (num) {
                cjs.Tween.get(app.exportRoot.characters.grp_woman.woman_head).wait(300).to({x:Math.round(142 * app.base_scale), y:Math.round(84 * app.base_scale), scaleX:.5, scaleY:.5, alpha:0}, 300, cjs.Ease.cubicIn).call(app.exportRoot.characters.grp_woman.swap_head, [num - 1]).to({x:Math.round(104 * app.base_scale), y:Math.round(59 * app.base_scale), scaleX:1, scaleY:1, alpha:1}, 600, cjs.Ease.elasticInOut);
                app.exportRoot.dialogs.hide_dialog();
            };
            this.swap_head = function (num) {
                app.exportRoot.characters.grp_woman.woman_head.gotoAndStop(num);
                if (!app.initializing && !app.muted) {
                    if (num != 8) {
                        cjs.SoundJS.play("head_change_squeak_pop", cjs.SoundJS.INTERRUPT_ANY);
                    } else {
                        cjs.SoundJS.play("parrot", cjs.SoundJS.INTERRUPT_ANY);
                    }
                }
            };
            this.swap_body = function (num) {
                app.exportRoot.characters.grp_woman.woman_body.gotoAndStop(num);
                cjs.Tween.get(app.exportRoot.characters.grp_woman).to({x:227 * app.base_scale}, 400, cjs.Ease.circOut);
                app.exportRoot.characters.grp_woman.woman_head.rotation = -30;
                app.exportRoot.characters.grp_woman.woman_head.x = 70 * app.base_scale;
                app.exportRoot.characters.grp_woman.woman_head.y = 100 * app.base_scale;
                cjs.Tween.get(app.exportRoot.characters.grp_woman.woman_head).to({rotation:0, x:104 * app.base_scale, y:59 * app.base_scale}, 600, cjs.Ease.backInOut);
            };

            this.change_body = function (num) {
                if (!app.muted) {
                    cjs.SoundJS.play("wardrobe_change", cjs.SoundJS.INTERRUPT_ANY);
                }
                app.exportRoot.dialogs.hide_dialog();
                cjs.Tween.get(app.exportRoot.characters.grp_woman.woman_head).wait(300).to({rotation:30, x:145 * app.base_scale, y:25 * app.base_scale}, 300, cjs.Ease.circIn);
                cjs.Tween.get(app.exportRoot.characters.grp_woman).wait(300).to({x:-700 * app.base_scale}, 400, cjs.Ease.circIn).call(app.exportRoot.characters.grp_woman.swap_body, [num - 1]);
            };

            this.addChild(this.woman_body, this.woman_head);
            this.woman_head.gotoAndStop(0);
            this.woman_body.gotoAndStop(0);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 598 * app.base_scale, 242 * app.base_scale);

        (this.man2 = function () {
            this.initialize();
            this.man_body = new lib.bodies3();
            this.man_body.setTransform(0, 79 * app.base_scale);
            this.man_head = new lib.heads3();
            this.man_head.gotoAndStop(0);
            this.man_head.setTransform(79 * app.base_scale, 18 * app.base_scale);

            this.man_head.onPress = function () {
                app.exportRoot.dialogs.show_dialog(2);
            };
            this.man_head.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.man_head.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };
            this.man_body.onPress = function () {
                app.exportRoot.dialogs.show_dialog(8);
            };
            this.man_body.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
            };
            this.man_body.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };
            this.change_head = function (num) {
                cjs.Tween.get(app.exportRoot.characters.grp_man2.man_head).wait(300).to({x:Math.round(108 * app.base_scale), y:Math.round(62 * app.base_scale), scaleX:.5, scaleY:.5, alpha:0}, 300, cjs.Ease.cubicIn).call(app.exportRoot.characters.grp_man2.swap_head, [num - 1]).to({x:Math.round(79 * app.base_scale), y:Math.round(18 * app.base_scale), scaleX:1, scaleY:1, alpha:1}, 600, cjs.Ease.elasticInOut);
                app.exportRoot.dialogs.hide_dialog();
            };
            this.swap_head = function (num) {
                app.exportRoot.characters.grp_man2.man_head.gotoAndStop(num);
                if (!app.initializing && !app.muted) {
                    if (num != 8) {
                        cjs.SoundJS.play("head_change_squeak_pop", cjs.SoundJS.INTERRUPT_ANY);
                    } else {
                        cjs.SoundJS.play("wolf", cjs.SoundJS.INTERRUPT_ANY);
                    }
                }
            };

            this.swap_body = function (num) {
                app.exportRoot.characters.grp_man2.man_body.gotoAndStop(num);
                app.exportRoot.characters.grp_man2.man_head.x = 135 * app.base_scale;
                app.exportRoot.characters.grp_man2.man_head.y = 2 * app.base_scale;
                app.exportRoot.characters.grp_man2.man_head.rotation = 30;
                cjs.Tween.get(app.exportRoot.characters.grp_man2).to({x:488 * app.base_scale}, 400, cjs.Ease.circOut);
                cjs.Tween.get(app.exportRoot.characters.grp_man2.man_head).to({rotation:0, x:79 * app.base_scale, y:18 * app.base_scale}, 500, cjs.Ease.backInOut);
            };

            this.change_body = function (num) {
                app.exportRoot.dialogs.hide_dialog();
                if (!app.muted) {
                    cjs.SoundJS.play("wardrobe_change", cjs.SoundJS.INTERRUPT_ANY);
                }
                cjs.Tween.get(app.exportRoot.characters.grp_man2.man_head).wait(300).to({rotation:-30, x:35 * app.base_scale, y:62 * app.base_scale}, 200, cjs.Ease.circIn);
                cjs.Tween.get(app.exportRoot.characters.grp_man2).wait(300).to({x:1155 * app.base_scale}, 300, cjs.Ease.circIn).call(app.exportRoot.characters.grp_man2.swap_body, [num - 1]);
            };
            this.addChild(this.man_body, this.man_head);
            this.man_head.gotoAndStop(0);
            this.man_body.gotoAndStop(0);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 598 * app.base_scale, 242 * app.base_scale);


        /*************************************/
        /**************** BODIES **************/
        /*************************************/

        (this.body1_suit01_greenman = function () {
            this.initialize(img.body1_suit01_greenman);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 470 * app.base_scale);

        (this.body1_suit02_aloha = function () {
            this.initialize(img.body1_suit02_aloha);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 470 * app.base_scale);

        (this.body1_suit03_huggybear = function () {
            this.initialize(img.body1_suit03_huggybear);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 470 * app.base_scale);


        (this.body2_suit01_fancypants = function () {
            this.initialize(img.body2_suit01_fancypants);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);

        (this.body2_suit02_foxyinred = function () {
            this.initialize(img.body2_suit02_foxyinred);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);

        (this.body2_suit03_christmasjacket = function () {
            this.initialize(img.body2_suit03_christmasjacket);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);


        (this.body3_suit01_browntight = function () {
            this.initialize(img.body3_suit01_browntight);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);

        (this.body3_suit02_itchysweater = function () {
            this.initialize(img.body3_suit02_itchysweater);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);

        (this.body3_suit03_discomachine = function () {
            this.initialize(img.body3_suit03_discomachine);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);


        (this.bodies1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

            // bodies
            this.instance = new lib.body1_suit01_greenman();

            this.instance_1 = new lib.body1_suit03_huggybear();

            this.instance_2 = new lib.body1_suit02_aloha();

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 470 * app.base_scale);

        (this.bodies2 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

            // bodies
            this.instance = new lib.body2_suit01_fancypants();

            this.instance_1 = new lib.body2_suit02_foxyinred();

            this.instance_2 = new lib.body2_suit03_christmasjacket();

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);

        (this.bodies3 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

            // bodies
            this.instance = new lib.body3_suit01_browntight();

            this.instance_1 = new lib.body3_suit03_discomachine();

            this.instance_2 = new lib.body3_suit02_itchysweater();

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 300 * app.base_scale, 450 * app.base_scale);


        /*************************************/
        /**************** HEADS **************/
        /*************************************/


        (this.heads1 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };
            this.frame_3 = function () {
            };
            this.frame_4 = function () {
            };
            this.frame_5 = function () {
            };
            this.frame_6 = function () {
            };
            this.frame_7 = function () {
            };
            this.frame_8 = function () {
            };
            this.frame_9 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9));

            // heads
            this.instance = new lib.head1_01_Dan();

            this.instance_1 = new lib.head1_07_DavidL();

            this.instance_2 = new lib.head1_04_MikeC();

            this.instance_3 = new lib.head1_03_JonA();

            this.instance_4 = new lib.head1_06_MikeP();

            this.instance_5 = new lib.head1_05_JohnO();

            this.instance_6 = new lib.body1_DavidW();

            this.instance_7 = new lib.head1_02_Dennis();

            this.instance_8 = new lib.head1_01_Ramsey();

            this.instance_9 = new lib.head1_02_Timberwolf();


            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).to({state:[
                {t:this.instance_3}
            ]}, 1).to({state:[
                {t:this.instance_4}
            ]}, 1).to({state:[
                {t:this.instance_5}
            ]}, 1).to({state:[
                {t:this.instance_6}
            ]}, 1).to({state:[
                {t:this.instance_7}
            ]}, 1).to({state:[
                {t:this.instance_8}
            ]}, 1).to({state:[
                {t:this.instance_9}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.heads2 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };
            this.frame_3 = function () {
            };
            this.frame_4 = function () {
            };
            this.frame_5 = function () {
            };
            this.frame_6 = function () {
            };
            this.frame_7 = function () {
            };
            this.frame_8 = function () {
            };
            this.frame_9 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9));

            // heads
            this.instance = new lib.body2_PattiC();

            this.instance_1 = new lib.head2_05_DarcieM();

            this.instance_2 = new lib.head2_02_JessicaR();

            this.instance_3 = new lib.head2_08_SarahJ();

            this.instance_4 = new lib.head2_04_LauraD();

            this.instance_5 = new lib.head2_03_AlexD();

            this.instance_6 = new lib.head2_09_JeaneI();

            this.instance_7 = new lib.body2_Julie();

            this.instance_8 = new lib.head2_01_BirdE();

            this.instance_9 = new lib.head2_10_MrsCoffee();

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).to({state:[
                {t:this.instance_3}
            ]}, 1).to({state:[
                {t:this.instance_4}
            ]}, 1).to({state:[
                {t:this.instance_5}
            ]}, 1).to({state:[
                {t:this.instance_6}
            ]}, 1).to({state:[
                {t:this.instance_7}
            ]}, 1).to({state:[
                {t:this.instance_8}
            ]}, 1).to({state:[
                {t:this.instance_9}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.heads3 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };
            this.frame_2 = function () {
            };
            this.frame_3 = function () {
            };
            this.frame_4 = function () {
            };
            this.frame_5 = function () {
            };
            this.frame_6 = function () {
            };
            this.frame_7 = function () {
            };
            this.frame_8 = function () {
            };
            this.frame_9 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9));

            // heads
            this.instance = new lib.head3_01_Brad();

            this.instance_1 = new lib.head3_02_Rob();

            this.instance_2 = new lib.head3_03_Doug();

            this.instance_3 = new lib.body1_Curt();

            this.instance_4 = new lib.head3_05_Phil();

            this.instance_5 = new lib.head3_11_Jeff();

            this.instance_6 = new lib.head3_07_Blaine();

            this.instance_7 = new lib.head3_08_Del();

            this.instance_8 = new lib.head3_09_Wolfie();

            this.instance_9 = new lib.head3_10_Hotrod();

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).to({state:[
                {t:this.instance_2}
            ]}, 1).to({state:[
                {t:this.instance_3}
            ]}, 1).to({state:[
                {t:this.instance_4}
            ]}, 1).to({state:[
                {t:this.instance_5}
            ]}, 1).to({state:[
                {t:this.instance_6}
            ]}, 1).to({state:[
                {t:this.instance_7}
            ]}, 1).to({state:[
                {t:this.instance_8}
            ]}, 1).to({state:[
                {t:this.instance_9}
            ]}, 1).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        /*************************************/
        /******** INDIVIDUAL HEADS ***********/
        /*************************************/


        (this.head1_01_Dan = function () {
            this.initialize(img.head1_01_Dan);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head1_01_Ramsey = function () {
            this.initialize(img.head1_01_Ramsey);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.head1_02_Dennis = function () {
            this.initialize(img.head1_02_Dennis);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head1_02_Timberwolf = function () {
            this.initialize(img.head1_02_Timberwolf);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.head1_03_JonA = function () {
            this.initialize(img.head1_03_JonA);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.head1_04_MikeC = function () {
            this.initialize(img.head1_04_MikeC);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.head1_05_JohnO = function () {
            this.initialize(img.head1_05_JohnO);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.head1_06_MikeP = function () {
            this.initialize(img.head1_06_MikeP);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.head1_07_DavidL = function () {
            this.initialize(img.head1_07_DavidL);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.body1_DavidW = function () {
            this.initialize(img.body1_DavidW);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 169 * app.base_scale, 126 * app.base_scale);


        (this.head2_01_BirdE = function () {
            this.initialize(img.head2_01_BirdE);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);


        (this.body2_PattiC = function () {
            this.initialize(img.body2_PattiC);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);

        (this.body2_Julie = function () {
            this.initialize(img.body2_Julie);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);

        (this.head2_02_JessicaR = function () {
            this.initialize(img.head2_02_JessicaR);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);


        (this.head2_03_AlexD = function () {
            this.initialize(img.head2_03_AlexD);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);


        (this.head2_04_LauraD = function () {
            this.initialize(img.head2_04_LauraD);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);


        (this.head2_05_DarcieM = function () {
            this.initialize(img.head2_05_DarcieM);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);


        (this.head2_08_SarahJ = function () {
            this.initialize(img.head2_08_SarahJ);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);


        (this.head2_09_JeaneI = function () {
            this.initialize(img.head2_09_JeaneI);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);

        (this.head2_10_MrsCoffee = function () {
            this.initialize(img.head2_10_MrsCoffee);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 130 * app.base_scale);

        (this.head3_01_Brad = function () {
            this.initialize(img.head3_01_Brad);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head3_02_Rob = function () {
            this.initialize(img.head3_02_Rob);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head3_03_Doug = function () {
            this.initialize(img.head3_03_Doug);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.body1_Curt = function () {
            this.initialize(img.body1_Curt);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head3_05_Phil = function () {
            this.initialize(img.head3_05_Phil);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head3_11_Jeff = function () {
            this.initialize(img.head3_11_Jeff);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head3_07_Blaine = function () {
            this.initialize(img.head3_07_Blaine);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121, 126 * app.base_scale);


        (this.head3_08_Del = function () {
            this.initialize(img.head3_08_Del);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head3_09_Wolfie = function () {
            this.initialize(img.head3_09_Wolfie);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        (this.head3_10_Hotrod = function () {
            this.initialize(img.head3_10_Hotrod);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 121 * app.base_scale, 126 * app.base_scale);


        /*************************************/
        /**************** PEOPLE *************/
        /*************************************/

        (this.people = function () {
            this.initialize();

            // male1
            this.grp_man1 = new lib.man1();
            // female1
            this.grp_woman = new lib.woman();
            // male2
            this.grp_man2 = new lib.man2();

            this.addChild(this.grp_man1, this.grp_woman, this.grp_man2);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 755 * app.base_scale, 523.1 * app.base_scale);


        (this.curtain_right_1 = function () {
            this.initialize();

            // Layer 1
            this.instance_6 = new lib.curtain_right();

            this.addChild(this.instance_6);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 480 * app.base_scale, 522 * app.base_scale);


        (this.curtain_left_1 = function () {
            this.initialize();

            // Layer 1
            this.instance_7 = new lib.curtain_left();

            this.addChild(this.instance_7);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 506 * app.base_scale, 522 * app.base_scale);


        (lib.shadowbox = function () {
            this.initialize();

            // Layer 1
            this.shape = new cjs.Shape();
            this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EB1MBOIMjqXAAAMAAAicPMDqXAAAMAAACcP").cp();
            this.shape.setTransform(750 * app.base_scale, 500 * app.base_scale);

            this.addChild(this.shape);

            this.show = function () {
                this.visible = true;
                cjs.Tween.get(this).to({alpha:1}, 750);
            };
            this.hide = function () {
                this.visible = true;
                cjs.Tween.get(this).to({alpha:0, visible:false}, 750);
            }
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 1500 * app.base_scale, 1000 * app.base_scale);


        /*************************************/
        /*********** NEW SHADOWBOX ***********/
        /*************************************/

        (this.dialog_ropes = function () {
            this.initialize(img.dialog_ropes);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 205 * app.base_scale);

        (this.dialog_highlight_bodies = function () {
            this.initialize();

            // Layer 1
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f().s("#0095C7").ss(4, 1, 1).p("AKE0TI0HAAQgzAAAAArMAAAAnRQAAArAzAAIUHAAQAzAAAAgrMAAAgnRQAAgrgzAAIAAAA").cp();
            this.shape_4.setTransform(69.5 * app.base_scale, 130 * app.base_scale, app.base_scale, app.base_scale);

            this.addChild(this.shape_4);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 139 * app.base_scale, 260 * app.base_scale);

        (this.dialog_highlight_sets = function () {
            this.initialize();

            // Layer 1
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f().s("#0095C7").ss(4, 1, 1).p("AKE0TI0HAAQgzAAAAArMAAAAnRQAAArAzAAIUHAAQAzAAAAgrMAAAgnRQAAgrgzAAIAAAA").cp();
            this.shape_2.setTransform(69.5 * app.base_scale, 130 * app.base_scale, app.base_scale, app.base_scale);

            this.addChild(this.shape_2);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 139 * app.base_scale, 260 * app.base_scale);


        (lib.dialog_highlight_heads = function () {
            this.initialize();

            // Layer 1
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f().s("#0095C7").ss(4, 1, 1).p("AGto5ItZAAQgzAAAAArIAAQdQAAArAzAAINZAAQAzAAAAgrIAAwdQAAgrgzAAIAAAA").cp();
            this.shape_3.setTransform(47.5 * app.base_scale, 56.5 * app.base_scale, app.base_scale, app.base_scale);

            this.addChild(this.shape_3);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 95 * app.base_scale, 113 * app.base_scale);

        (this.sets_highlight = function () {
            this.initialize();

            // Layer 1
            this.shape = new cjs.Shape();
            this.shape.graphics.f("rgba(255,0,0,.01)").s().p("AKy4/MAAAAx/I1jAAMAAAgx/IVjAA").cp();
            this.shape.setTransform(69 * app.base_scale, 160 * app.base_scale, app.base_scale, app.base_scale);

            this.addChild(this.shape);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 138 * app.base_scale, 320 * app.base_scale);


        (this.heads_highlight = function () {
            this.initialize();

            // Layer 1
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("rgba(255,0,0,.01)").s().p("AnpMvIAA5dIPTAAIAAZdIvTAA").cp();
            this.shape_1.setTransform(49 * app.base_scale, 81.5 * app.base_scale, app.base_scale, app.base_scale);

            this.addChild(this.shape_1);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 98 * app.base_scale, 163 * app.base_scale);

        (this.bodies_highlight = function () {
            this.initialize();

            // Layer 1
            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f("rgba(255,0,0,.01)").s().p("AKy4/MAAAAx/I1jAAMAAAgx/IVjAA").cp();
            this.shape_5.setTransform(69 * app.base_scale, 160 * app.base_scale, app.base_scale, app.base_scale);

            this.addChild(this.shape_5);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 138 * app.base_scale, 320 * app.base_scale);

        (this.cancel_off = function () {
            this.initialize(img.cancel_off);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 79 * app.base_scale, 21 * app.base_scale);

        (this.cancel_press = function () {
            this.initialize(img.cancel_press);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 79 * app.base_scale, 21 * app.base_scale);

        (this.cancel = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {}, true);

            // timeline functions:
            this.frame_0 = function () {
            };
            this.frame_1 = function () {
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

            // images
            this.instance = new lib.cancel_off();
            this.instance_1 = new lib.cancel_press();

            this.onMouseOver = function (e) {
                document.body.style.cursor = 'pointer';
                this.gotoAndStop(1);
            };
            this.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
                this.gotoAndStop(0);
            };

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).to({state:[
                {t:this.instance_1}
            ]}, 1).wait(1));

            this.gotoAndStop(0);

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 79 * app.base_scale, 21 * app.base_scale);

        (this.shadowbox_decorations = function () {
            this.initialize(img.shadowbox_decorations);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);


        (this.shadowbox_lady = function () {
            this.initialize(img.shadowbox_lady);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);


        (this.shadowbox_man1 = function () {
            this.initialize(img.shadowbox_man1);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);


        (this.shadowbox_man2 = function () {
            this.initialize(img.shadowbox_man2);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);


        (this.shadowbox_props = function () {
            this.initialize(img.shadowbox_props);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);


        (this.shadowbox_set = function () {
            this.initialize(img.shadowbox_set);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);

        (lib.shadowbox_man1ensembles = function () {
            this.initialize(img.shadowbox_man1ensembles);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);

        (lib.shadowbox_woman1ensembles = function () {
            this.initialize(img.shadowbox_woman1ensembles);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);

        (lib.shadowbox_man2ensembles = function () {
            this.initialize(img.shadowbox_man2ensembles);
        }).prototype = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 420 * app.base_scale);


        (this.dialog = function (mode, startPosition, loop) {
            if (loop == null) {
                loop = false;
            }
            this.initialize(mode, startPosition, loop, {}, true);

            // ropes
            this.instance = new lib.dialog_ropes();

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance}
            ]}).wait(6));

            // highlight
            this.highlight_heads = new lib.dialog_highlight_heads();
            this.highlight_heads.setTransform(83 * app.base_scale, 315 * app.base_scale, 1, 1, 0, 0, 0, 48 * app.base_scale, 57 * app.base_scale);

            this.highlight_sets = new lib.dialog_highlight_sets();
            this.highlight_sets.setTransform(94.5 * app.base_scale, 405 * app.base_scale, 1, 1, 0, 0, 0, 69.5 * app.base_scale, 130 * app.base_scale);

            this.highlight_bodies = new lib.dialog_highlight_bodies();
            this.highlight_bodies.setTransform(164.5 * app.base_scale, 405 * app.base_scale, 1, 1, 0, 0, 0, 69.5 * app.base_scale, 130 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.highlight_heads}
            ]}).to({state:[
                {t:this.highlight_heads}
            ]}, 1).to({state:[
                {t:this.highlight_heads}
            ]}, 1).to({state:[
                {t:this.highlight_sets}
            ]}, 1).to({state:[
                {t:this.highlight_sets}
            ]}, 1).to({state:[
                {t:this.highlight_sets}
            ]}, 1).to({state:[
                {t:this.highlight_bodies}
            ]}, 1).to({state:[
                {t:this.highlight_bodies}
            ]}, 1).to({state:[
                {t:this.highlight_bodies}
            ]}, 1).wait(1));

            // m1h10
            this.select_m1h10 = new lib.heads_highlight();
            this.select_m1h10.setTransform(523 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h10).to({_off:true}, 1).wait(8));

            // m1h9
            this.select_m1h9 = new lib.heads_highlight();
            this.select_m1h9.setTransform(413 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h9).to({_off:true}, 1).wait(8));

            // m1h8
            this.select_m1h8 = new lib.heads_highlight();
            this.select_m1h8.setTransform(303 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h8).to({_off:true}, 1).wait(8));

            // m1h7
            this.select_m1h7 = new lib.heads_highlight();
            this.select_m1h7.setTransform(193 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h7).to({_off:true}, 1).wait(8));

            // m1h6
            this.select_m1h6 = new lib.heads_highlight();
            this.select_m1h6.setTransform(83 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h6).to({_off:true}, 1).wait(8));

            // m1h5
            this.select_m1h5 = new lib.heads_highlight();
            this.select_m1h5.setTransform(523 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h5).to({_off:true}, 1).wait(8));

            // m1h4
            this.select_m1h4 = new lib.heads_highlight();
            this.select_m1h4.setTransform(413 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h4).to({_off:true}, 1).wait(8));

            // m1h3
            this.select_m1h3 = new lib.heads_highlight();
            this.select_m1h3.setTransform(303 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h3).to({_off:true}, 1).wait(8));

            // m1h2
            this.select_m1h2 = new lib.heads_highlight();
            this.select_m1h2.setTransform(193 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h2).to({_off:true}, 1).wait(8));

            // m1h1
            this.select_m1h1 = new lib.heads_highlight();
            this.select_m1h1.setTransform(83 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get(this.select_m1h1).to({_off:true}, 1).wait(8));

            // w1h10
            this.select_w1h10 = new lib.heads_highlight();
            this.select_w1h10.setTransform(523 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h10._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h10).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h9
            this.select_w1h9 = new lib.heads_highlight();
            this.select_w1h9.setTransform(413 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h9._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h9).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h8
            this.select_w1h8 = new lib.heads_highlight();
            this.select_w1h8.setTransform(303 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h8._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h8).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h7
            this.select_w1h7 = new lib.heads_highlight();
            this.select_w1h7.setTransform(193 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h7._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h7).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h6
            this.select_w1h6 = new lib.heads_highlight();
            this.select_w1h6.setTransform(83 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h6._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h6).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h5
            this.select_w1h5 = new lib.heads_highlight();
            this.select_w1h5.setTransform(523 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h5._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h5).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h4
            this.select_w1h4 = new lib.heads_highlight();
            this.select_w1h4.setTransform(413 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h4._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h4).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h3
            this.select_w1h3 = new lib.heads_highlight();
            this.select_w1h3.setTransform(303 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h3).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h2
            this.select_w1h2 = new lib.heads_highlight();
            this.select_w1h2.setTransform(193 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h2).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // w1h1
            this.select_w1h1 = new lib.heads_highlight();
            this.select_w1h1.setTransform(83 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_w1h1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_w1h1).wait(1).to({_off:false}, 0).to({_off:true}, 1).wait(7));

            // m2h10
            this.select_m2h10 = new lib.heads_highlight();
            this.select_m2h10.setTransform(523 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h10._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h10).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h9
            this.select_m2h9 = new lib.heads_highlight();
            this.select_m2h9.setTransform(413 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h9._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h9).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h8
            this.select_m2h8 = new lib.heads_highlight();
            this.select_m2h8.setTransform(303 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h8._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h8).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h7
            this.select_m2h7 = new lib.heads_highlight();
            this.select_m2h7.setTransform(193 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h7._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h7).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h6
            this.select_m2h6 = new lib.heads_highlight();
            this.select_m2h6.setTransform(83 * app.base_scale, 508.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h6._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h6).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h5
            this.select_m2h5 = new lib.heads_highlight();
            this.select_m2h5.setTransform(523 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h5._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h5).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h4
            this.select_m2h4 = new lib.heads_highlight();
            this.select_m2h4.setTransform(413 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h4._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h4).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h3
            this.select_m2h3 = new lib.heads_highlight();
            this.select_m2h3.setTransform(303 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h3).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h2
            this.select_m2h2 = new lib.heads_highlight();
            this.select_m2h2.setTransform(193 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h2).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // m2h1
            this.select_m2h1 = new lib.heads_highlight();
            this.select_m2h1.setTransform(83 * app.base_scale, 338.5 * app.base_scale, 1, 1, 0, 0, 0, 49 * app.base_scale, 81.5 * app.base_scale);
            this.select_m2h1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_m2h1).wait(2).to({_off:false}, 0).to({_off:true}, 1).wait(6));

            // s1m4
            this.select_s1m4 = new lib.sets_highlight();
            this.select_s1m4.setTransform(511 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1m4._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1m4).wait(3).to({_off:false}, 0).to({_off:true}, 1).wait(5));

            // s1m3
            this.select_s1m3 = new lib.sets_highlight();
            this.select_s1m3.setTransform(372 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1m3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1m3).wait(3).to({_off:false}, 0).to({_off:true}, 1).wait(5));

            // s1m2
            this.select_s1m2 = new lib.sets_highlight();
            this.select_s1m2.setTransform(233 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1m2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1m2).wait(3).to({_off:false}, 0).to({_off:true}, 1).wait(5));

            // s1m1
            this.select_s1m1 = new lib.sets_highlight();
            this.select_s1m1.setTransform(94 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1m1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1m1).wait(3).to({_off:false}, 0).to({_off:true}, 1).wait(5));

            // s1d4
            this.select_s1d4 = new lib.sets_highlight();
            this.select_s1d4.setTransform(511 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1d4._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1d4).wait(4).to({_off:false}, 0).to({_off:true}, 1).wait(4));

            // s1d3
            this.select_s1d3 = new lib.sets_highlight();
            this.select_s1d3.setTransform(372 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1d3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1d3).wait(4).to({_off:false}, 0).to({_off:true}, 1).wait(4));

            // s1d2
            this.select_s1d2 = new lib.sets_highlight();
            this.select_s1d2.setTransform(233 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1d2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1d2).wait(4).to({_off:false}, 0).to({_off:true}, 1).wait(4));

            // s1d1
            this.select_s1d1 = new lib.sets_highlight();
            this.select_s1d1.setTransform(94 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1d1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1d1).wait(4).to({_off:false}, 0).to({_off:true}, 1).wait(4));

            // s1b4
            this.select_s1b4 = new lib.sets_highlight();
            this.select_s1b4.setTransform(511 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1b4._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1b4).wait(5).to({_off:false}, 0).to({_off:true}, 1).wait(3));

            // s1b3
            this.select_s1b3 = new lib.sets_highlight();
            this.select_s1b3.setTransform(372 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1b3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1b3).wait(5).to({_off:false}, 0).to({_off:true}, 1).wait(3));

            // s1b2
            this.select_s1b2 = new lib.sets_highlight();
            this.select_s1b2.setTransform(233 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1b2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1b2).wait(5).to({_off:false}, 0).to({_off:true}, 1).wait(3));

            // s1b1
            this.select_s1b1 = new lib.sets_highlight();
            this.select_s1b1.setTransform(94 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_s1b1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_s1b1).wait(5).to({_off:false}, 0).to({_off:true}, 1).wait(3));

            // c1b1
            this.select_c1b3 = new lib.bodies_highlight();
            this.select_c1b3.setTransform(442 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c1b3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c1b3).wait(6).to({_off:false}, 0).to({_off:true}, 1).wait(2));

            // c1b2
            this.select_c1b2 = new lib.bodies_highlight();
            this.select_c1b2.setTransform(302 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c1b2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c1b2).wait(6).to({_off:false}, 0).to({_off:true}, 1).wait(2));

            // c1b3
            this.select_c1b1 = new lib.bodies_highlight();
            this.select_c1b1.setTransform(164 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c1b1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c1b1).wait(6).to({_off:false}, 0).to({_off:true}, 1).wait(2));

            // c2b3
            this.select_c2b3 = new lib.bodies_highlight();
            this.select_c2b3.setTransform(442 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c2b3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c2b3).wait(7).to({_off:false}, 0).to({_off:true}, 1).wait(1));

            // c2b2
            this.select_c2b2 = new lib.bodies_highlight();
            this.select_c2b2.setTransform(302 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c2b2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c2b2).wait(7).to({_off:false}, 0).to({_off:true}, 1).wait(1));

            // c2b1
            this.select_c2b1 = new lib.bodies_highlight();
            this.select_c2b1.setTransform(164 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c2b1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c2b1).wait(7).to({_off:false}, 0).to({_off:true}, 1).wait(1));

            // c3b3
            this.select_c3b3 = new lib.bodies_highlight();
            this.select_c3b3.setTransform(442 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c3b3._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c3b3).wait(8).to({_off:false}, 0).wait(1));

            // c3b2
            this.select_c3b2 = new lib.bodies_highlight();
            this.select_c3b2.setTransform(302 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c3b2._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c3b2).wait(8).to({_off:false}, 0).wait(1));

            // c3b1
            this.select_c3b1 = new lib.bodies_highlight();
            this.select_c3b1.setTransform(164 * app.base_scale, 435 * app.base_scale, 1, 1, 0, 0, 0, 69 * app.base_scale, 160 * app.base_scale);
            this.select_c3b1._off = true;

            this.timeline.addTween(cjs.Tween.get(this.select_c3b1).wait(8).to({_off:false}, 0).wait(1));

            // cancel
            this.cancel_btn = new lib.cancel();
            this.cancel_btn.setTransform(516 * app.base_scale, 215 * app.base_scale);

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.cancel_btn}
            ]}).wait(9));

            // box
            this.instance_2 = new lib.shadowbox_man1();
            this.instance_2.setTransform(0, 205 * app.base_scale);

            this.instance_3 = new lib.shadowbox_lady();
            this.instance_3.setTransform(0, 205 * app.base_scale);

            this.instance_4 = new lib.shadowbox_man2();
            this.instance_4.setTransform(0, 205 * app.base_scale);

            this.instance_5 = new lib.shadowbox_props();
            this.instance_5.setTransform(0, 205 * app.base_scale);

            this.instance_6 = new lib.shadowbox_decorations();
            this.instance_6.setTransform(0, 205 * app.base_scale);

            this.instance_7 = new lib.shadowbox_set();
            this.instance_7.setTransform(0, 205 * app.base_scale);

            this.instance_8 = new lib.shadowbox_man1ensembles();
            this.instance_8.setTransform(0, 205 * app.base_scale);

            this.instance_9 = new lib.shadowbox_woman1ensembles();
            this.instance_9.setTransform(0, 205 * app.base_scale);

            this.instance_10 = new lib.shadowbox_man2ensembles();
            this.instance_10.setTransform(0, 205 * app.base_scale);

            this.cancel_btn.onPress = function () {
                app.exportRoot.dialogs.hide_dialog();
            };

            this.show_dialog = function (num) {
                var pct = $("#main").getNiceScroll()[0].cursor[0].offsetTop / ($("#main").getNiceScroll()[0].scrollvaluemax);

                if (pct > .75 && this.y < -150 * app.base_scale) {
                    // hide the click prompt
                    app.clearClickTimeout();
                    app.mainView.hideClickPrompt();

                    this.gotoAndStop(num);
                    if (num == 0) {
                        app.exportRoot.dialogs.highlight_heads.x = this.m1hlx;
                        app.exportRoot.dialogs.highlight_heads.y = this.m1hly;
                    }
                    if (num == 1) {
                        app.exportRoot.dialogs.highlight_heads.x = this.w1hlx;
                        app.exportRoot.dialogs.highlight_heads.y = this.w1hly;
                    }
                    if (num == 2) {
                        app.exportRoot.dialogs.highlight_heads.x = this.m2hlx;
                        app.exportRoot.dialogs.highlight_heads.y = this.m2hly;
                    }
                    if (num == 3) {
                        app.exportRoot.dialogs.highlight_sets.x = this.s1mlx;
                        app.exportRoot.dialogs.highlight_sets.y = this.s1mly;
                    }
                    if (num == 4) {
                        app.exportRoot.dialogs.highlight_sets.x = this.s1dlx;
                        app.exportRoot.dialogs.highlight_sets.y = this.s1dly;
                    }
                    if (num == 5) {
                        app.exportRoot.dialogs.highlight_sets.x = this.s1blx;
                        app.exportRoot.dialogs.highlight_sets.y = this.s1bly;
                    }
                    if (num == 6) {
                        app.exportRoot.dialogs.highlight_bodies.x = this.c1blx;
                        app.exportRoot.dialogs.highlight_bodies.y = this.c1bly;
                    }
                    if (num == 7) {
                        app.exportRoot.dialogs.highlight_bodies.x = this.c2blx;
                        app.exportRoot.dialogs.highlight_bodies.y = this.c2bly;
                    }
                    if (num == 8) {
                        app.exportRoot.dialogs.highlight_bodies.x = this.c3blx;
                        app.exportRoot.dialogs.highlight_bodies.y = this.c3bly;
                    }

                    cjs.Tween.get(this).to({y:-110 * app.base_scale}, 750, cjs.Ease.backInOut);
                    app.exportRoot.shadow_box.show();
                }
            };

            this.hide_dialog = function () {
                cjs.Tween.get(this).to({y:-630 * app.base_scale}, 500, cjs.Ease.backIn);
                app.exportRoot.shadow_box.hide();
            };

            this.highlight_heads.x = this.select_m1h1.x + (1 * app.base_scale);
            this.highlight_heads.y = this.select_m1h1.y - (23 * app.base_scale);

            this.highlight_sets.x = this.select_s1m1.x + (1 * app.base_scale);
            this.highlight_sets.y = this.select_s1m1.y - (30 * app.base_scale);

            this.m1hlx = this.highlight_heads.x;
            this.m1hly = this.highlight_heads.y;

            this.w1hlx = this.highlight_heads.x;
            this.w1hly = this.highlight_heads.y;

            this.m2hlx = this.highlight_heads.x;
            this.m2hly = this.highlight_heads.y;

            this.s1mlx = this.highlight_sets.x;
            this.s1mly = this.highlight_sets.y;

            this.s1dlx = this.highlight_sets.x;
            this.s1dly = this.highlight_sets.y;

            this.s1blx = this.highlight_sets.x;
            this.s1bly = this.highlight_sets.y;

            this.c1blx = this.highlight_bodies.x;
            this.c1bly = this.highlight_bodies.y;

            this.c2blx = this.highlight_bodies.x;
            this.c2bly = this.highlight_bodies.y;

            this.c3blx = this.highlight_bodies.x;
            this.c3bly = this.highlight_bodies.y;

            for (var i = 1; i < 11; i++) {
                var tgts = ["select_m1h" + i, "select_w1h" + i, "select_m2h" + i];
                var chars = ["man1", "woman1", "man2"];
                for (var j = 0; j < tgts.length; j++) {
                    this[tgts[j]].ct = i;
                    this[tgts[j]].char = chars[j];
                    this[tgts[j]].onPress = function (e) {
                        if (!app.initializing && app.exportRoot.dialogs.highlight_heads.x == this.x + 1 && app.exportRoot.dialogs.highlight_heads.y == this.y - (23 * app.base_scale)) {
                            app.exportRoot.dialogs.hide_dialog();
                        } else {

                            app.exportRoot.dialogs.highlight_heads.x = this.x + (1 * app.base_scale);
                            app.exportRoot.dialogs.highlight_heads.y = this.y - (23 * app.base_scale);

                            if (this.char == "man1") {
                                app.exportRoot.dialogs.m1hlx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.m1hly = this.y - (23 * app.base_scale);
                                app.exportRoot.characters.grp_man1.change_head(this.ct);
                            } else if (this.char == "woman1") {
                                app.exportRoot.dialogs.w1hlx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.w1hly = this.y - (23 * app.base_scale);
                                app.exportRoot.characters.grp_woman.change_head(this.ct);
                            } else if (this.char == "man2") {
                                app.exportRoot.dialogs.m2hlx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.m2hly = this.y - (23 * app.base_scale);
                                app.exportRoot.characters.grp_man2.change_head(this.ct);
                            }
                        }
                    };
                    this[tgts[j]].onMouseOver = function (e) {
                        if ($("#main").getNiceScroll()[0].cursor[0].offsetTop / ($("#main").getNiceScroll()[0].scrollvaluemax) > .75) {
                            document.body.style.cursor = 'pointer';
                        }
                    };
                    this[tgts[j]].onMouseOut = function (e) {
                        document.body.style.cursor = 'default';
                    }
                }
            }

            for (var i = 1; i < 5; i++) {
                var tgts = ["select_s1m" + i, "select_s1d" + i, "select_s1b" + i];
                var sets = ["mids", "decos", "bgs"];
                for (var j = 0; j < tgts.length; j++) {
                    this[tgts[j]].ct = i;
                    this[tgts[j]].set = sets[j];
                    this[tgts[j]].onPress = function (e) {
                        if (app.exportRoot.dialogs.highlight_sets.x == this.x + (1 * app.base_scale) && app.exportRoot.dialogs.highlight_sets.y == this.y - (30 * app.base_scale)) {
                            app.exportRoot.dialogs.hide_dialog();
                        } else {

                            app.exportRoot.dialogs.highlight_sets.x = this.x + (1 * app.base_scale);
                            app.exportRoot.dialogs.highlight_sets.y = this.y - (30 * app.base_scale);

                            if (this.set == "mids") {
                                app.exportRoot.dialogs.s1mlx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.s1mly = this.y - (30 * app.base_scale);
                                app.exportRoot.midground.change_mid(this.ct);
                            } else if (this.set == "decos") {
                                app.exportRoot.dialogs.s1dlx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.s1dly = this.y - (30 * app.base_scale);
                                app.exportRoot.decorations.change_deco(this.ct);
                            } else if (this.set == "bgs") {
                                app.exportRoot.dialogs.s1blx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.s1bly = this.y - (30 * app.base_scale);
                                app.exportRoot.backgrounds_roller.change_bg(this.ct);
                            }
                        }
                    };
                    this[tgts[j]].onMouseOver = function (e) {
                        if ($("#main").getNiceScroll()[0].cursor[0].offsetTop / ($("#main").getNiceScroll()[0].scrollvaluemax) > .75) {
                            document.body.style.cursor = 'pointer';
                        }
                    };
                    this[tgts[j]].onMouseOut = function (e) {
                        document.body.style.cursor = 'default';
                    }
                }
            }

            for (var i = 1; i < 4; i++) {
                var tgts = ["select_c1b" + i, "select_c2b" + i, "select_c3b" + i];
                var bods = ["man1", "woman1", "man2"];
                for (var j = 0; j < tgts.length; j++) {
                    this[tgts[j]].ct = i;
                    this[tgts[j]].bod = bods[j];
                    this[tgts[j]].onPress = function (e) {
                        if (app.exportRoot.dialogs.highlight_bodies.x == this.x + (1 * app.base_scale) && app.exportRoot.dialogs.highlight_bodies.y == this.y - (30 * app.base_scale)) {
                            app.exportRoot.dialogs.hide_dialog();
                        } else {
                            app.exportRoot.dialogs.highlight_bodies.x = this.x + (1 * app.base_scale);
                            app.exportRoot.dialogs.highlight_bodies.y = this.y - (30 * app.base_scale);

                            if (this.bod == "man1") {
                                app.exportRoot.dialogs.c1blx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.c1bly = this.y - (30 * app.base_scale);
                                app.exportRoot.characters.grp_man1.change_body(this.ct);
                            } else if (this.bod == "woman1") {
                                app.exportRoot.dialogs.c2blx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.c2bly = this.y - (30 * app.base_scale);
                                app.exportRoot.characters.grp_woman.change_body(this.ct);
                            } else if (this.bod == "man2") {
                                app.exportRoot.dialogs.c3blx = this.x + (1 * app.base_scale);
                                app.exportRoot.dialogs.c3bly = this.y - (30 * app.base_scale);
                                app.exportRoot.characters.grp_man2.change_body(this.ct);
                            }
                        }
                    };
                    this[tgts[j]].onMouseOver = function (e) {
                        if ($("#main").getNiceScroll()[0].cursor[0].offsetTop / ($("#main").getNiceScroll()[0].scrollvaluemax) > .75) {
                            document.body.style.cursor = 'pointer';
                        }
                    };
                    this[tgts[j]].onMouseOut = function (e) {
                        document.body.style.cursor = 'default';
                    }
                }
            }

            this.timeline.addTween(cjs.Tween.get({}).to({state:[
                {t:this.instance_2}
            ]}).to({state:[
                {t:this.instance_3}
            ]}, 1).to({state:[
                {t:this.instance_4}
            ]}, 1).to({state:[
                {t:this.instance_5}
            ]}, 1).to({state:[
                {t:this.instance_6}
            ]}, 1).to({state:[
                {t:this.instance_7}
            ]}, 1).to({state:[
                {t:this.instance_8}
            ]}, 1).to({state:[
                {t:this.instance_9}
            ]}, 1).to({state:[
                {t:this.instance_10}
            ]}, 1).wait(1));
            this.gotoAndStop(0);

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 605 * app.base_scale, 625 * app.base_scale);


        (this.backgrounds_clip = function () {
            this.initialize();

            // Layer 1
            this.instance_6 = new lib.backscreen_opt5();
            this.instance_6.setTransform(3332 * app.base_scale, 0);

            this.instance_7 = new lib.backscreen_opt4();
            this.instance_7.setTransform(2499 * app.base_scale, 0);

            this.instance_8 = new lib.backscreen_opt3();
            this.instance_8.setTransform(1666 * app.base_scale, 0);

            this.instance_9 = new lib.backscreen_opt2();
            this.instance_9.setTransform(833 * app.base_scale, 0);

            this.instance_10 = new lib.backscreen_opt1();

            this.addChild(this.instance_10, this.instance_9, this.instance_8, this.instance_7, this.instance_6);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 2499 * app.base_scale, 530 * app.base_scale);


        (this.curtains = function (m) {
            this.initialize();

            this.curtain_right = new lib.curtain_right_1();
            this.curtain_right.setTransform(764 * app.base_scale, 0);

            this.curtain_left = new lib.curtain_left_1();
            this.curtain_left.setTransform(258 * app.base_scale, 0);

            this.addChild(this.curtain_left, this.curtain_right);

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-494.8 * app.base_scale, 0, 1948.7 * app.base_scale, 530 * app.base_scale);


        (lib.background_roll = function () {
            this.initialize();

            // Layer 2
            this.gradient = new lib.roller_gradient();
            this.gradient.setTransform(416.5 * app.base_scale, 265 * app.base_scale, 1, 1, 0, 0, 0, 416.5 * app.base_scale, 265 * app.base_scale);

            this.backgrounds = new lib.backgrounds_clip();

            this.onPress = function (e) {
                if (e.stageX > 334 * app.base_scale && e.stageX < 1162 * app.base_scale) {
                    app.checkBackground();
                    app.exportRoot.dialogs.show_dialog(5);
                }
            };
            this.onMouseOver = function (e) {
                if ($("#main").getNiceScroll()[0].cursor[0].offsetTop / ($("#main").getNiceScroll()[0].scrollvaluemax) > .75) {
                    document.body.style.cursor = 'pointer';
                }
            };
            this.onMouseOut = function (e) {
                document.body.style.cursor = 'default';
            };

            this.change_bg = function (num) {
                createjs.SoundJS.stop(app.currentMusic);
                if (num == 1) {
                    app.currentMusic = "music1";
                    if (!app.muted) {
                        createjs.SoundJS.play(app.currentMusic, createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1);
                    }
                }
                if (num == 2) {
                    app.currentMusic = "music2";
                    if (!app.muted) {
                        createjs.SoundJS.play(app.currentMusic, createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1);
                    }
                }
                if (num == 3) {
                    app.currentMusic = "music3";
                    if (!app.muted) {
                        createjs.SoundJS.play(app.currentMusic, createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1);
                    }
                }
                if (num == 4) {
                    app.currentMusic = "music4";
                    if (!app.muted) {
                        createjs.SoundJS.play(app.currentMusic, createjs.SoundJS.INTERRUPT_NONE, 0, 0, -1);
                    }
                }
                var xpos = -(833 * num) * app.base_scale;
                cjs.Tween.get(this.backgrounds).to({x:xpos}, 2500, cjs.Ease.cubicInOut);
                app.exportRoot.dialogs.hide_dialog();
            };


            this.addChild(this.backgrounds, this.gradient);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0, 0, 2499 * app.base_scale, 530 * app.base_scale);
    }
});

