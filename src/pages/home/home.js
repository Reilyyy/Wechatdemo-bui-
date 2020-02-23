loader.define(function(require,exports,module){

    var pageview = {};

    pageview.init = function(){
        // 抽屉滑动控件 js 初始化:
        var uiSwipe = bui.swipe({
            id: "#uiSwipe",
            handle: "#uiList",
            movingDistance: 400,
            direction: "xy",
        }); 
                        
    }
    pageview.init();
    return pageview;
})