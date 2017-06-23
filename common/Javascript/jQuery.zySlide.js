(function ($) {
    function picture_Slide(ele, options) {
        this.$ele = $(ele);
        this.options = $.extend({speed:1000, delay:6000}, options);
        this.states = [
            { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
            { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
            { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
            { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
            { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
            { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
            { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
            { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
            { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0}
        ];

        this.images = [
                "url(\"../../Image/pictures/Madagascar_3.jpg\")", "url(\"../../Image/pictures/The_Croods.jpeg\")",
                "url(\"../../Image/pictures/Warcraft.jpg\")", "url(\"../../Image/pictures/National_Treasure_1.jpg\")",
                "url(\"../../Image/pictures/Inception(1).jpg\")", "url(\"../../Image/pictures/The_Twilight_Saga:New_Moon.jpg\")",
                "url(\"../../Image/pictures/Pirates_of_the_Caribbean_4.jpg\")",
                "url(\"../../Image/pictures/Fast_&_Furious_7.jpg\")", "url(\"../../Image/pictures/About_Time.jpg\")"
        ];

        this.circles = [
                "url(\"../../Image/Icon_circle_1.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
        ];

        this.divs = this.$ele.find('.show');
        this.divs1 = this.$ele.find('.circle');

        this.interval;

        this.$ele.find('.circle:nth-child(1)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0}
            ];

            this.circles = [
                "url(\"../../Image/Icon_circle_1.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(2)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0}      
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_circle_1.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(3)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0}
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_circle_1.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(4)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7}
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_circle_1.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(5)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1}
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_circle_1.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];
            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(6)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7}
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_circle_1.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(7)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0}
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_circle_1.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(8)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0}
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_circle_1.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.circle:nth-child(9)').click(function() {
            this.stop();
            this.states = [
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 184, $opacity: 0},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 130, $opacity: 0},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 0, $opacity: 0.7},
                { 'Z-index': 3, width: 620, height: 320, top: 20, left: 215, $opacity:1},
                { 'Z-index': 2, width: 280, height: 170, top: 95, left: 770, $opacity: 0.7},
                { 'Z-index': 0, width: 260, height: 140, top: 111, left: 690, $opacity: 0},
                { 'Z-index': 0, width: 220, height: 130, top: 121, left: 540, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 420, $opacity: 0},
                { 'Z-index': 0, width: 180, height: 120, top: 131, left: 244, $opacity: 0}
            ];

            this.circles = [
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_emptycircle.png\")", "url(\"../../Image/Icon_emptycircle.png\")",
                "url(\"../../Image/Icon_circle_1.png\")"
            ];

            this.move();
        }.bind(this));

        this.$ele.find('.previous').click(function() {
            this.stop();
            this.previous();
           /* this.play();*/
        }.bind(this));

        this.$ele.find('.next').click(function () {
            this.stop();
            this.next();
          /*  this.play();*/
        }.bind(this));

        this.$ele.find('.show, .circle').mouseenter(function() {
           this.stop();
        }.bind(this));

        this.$ele.find('.show, .circle').mouseleave(function() {
            this.play();
        }.bind(this));

        this.move();
        this.play();
    }

    picture_Slide.prototype = {
        move: function () {
            this.divs.each(function(i, element) {
                $(element).css('z-index', this.states[i]['Z-index']);
                $(element).finish().animate(this.states[i], this.options.speed);
                $(element).css('background-image', this.images[i]);
                $(element).css('background-size', "100% 100%");
                $(element).css('opacity', this.states[i].$opacity);             
            }.bind(this));
            this.divs1.each(function(i, element) {
                $(element).css('background-image', this.circles[i]);
                $(element).css('background-size', '100% 100%');
            }.bind(this));
        },

        previous: function () {
            this.states.push(this.states.shift());
            this.circles.push(this.circles.shift());
            this.move();
        },

        next: function () {
            this.states.unshift(this.states.pop());
            this.circles.unshift(this.circles.pop());
            this.move();
        },

        play: function () {
            this.interval = setInterval(function () {
                this.next();
            }.bind(this), this.options.delay);
        },

        stop: function () {
            clearInterval(this.interval);
        }
    }

    $.fn.zySlide = function (options) {
        this.each(function (i, element) {
            new picture_Slide(element, options);
        });
        return this;
    };

})(jQuery);
