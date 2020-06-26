(function($){
    var header = $('#title'),
        sub = $('.subtitle'),
        nav = $('#navbar');

    TweenLite.from(header, 1,{autoAlpha: 0, x:-100, delay:0.25});
    TweenLite.from(sub, 1, {autoAlpha: 0, delay:1});
    TweenLite.from(nav, 1, {autoAlpha: 0, delay:1});
})(jQuery);
