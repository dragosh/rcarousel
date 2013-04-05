$(function() {

    var options = {
        onReady: function($el,obj) {
            log('On Ready',$el ,obj);
        },
        onSelected: function(index,item){
            log('On Selected' , index,item);
        }
    };

    var Carousel = $('.carousel').rcarousel(options);

    $('.prev').on("click",function(ev) {
        Carousel.rcarousel('select','prev');
    });
    $('.next').on("click",function(ev) {
        Carousel.rcarousel('select','next');
    });
    $('.prev-page').on("click",function(ev) {
        Carousel.rcarousel('selectPage','prev');

    });
    $('.next-page').on("click",function(ev) {        
        Carousel.rcarousel('selectPage','next');
    });
});



/*
|--------------------------------------------------------------------------
| Some log functions
|--------------------------------------------------------------------------
*/
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') { log.apply.call(console.log, console, newarr); } else { console.log.apply(console, newarr); } }};
