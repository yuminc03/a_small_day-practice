var windowWidth, windowHeight;

window.onload = function(){

    var _cards = document.querySelectorAll(".cardItem");
    var _buttonAll = document.querySelectorAll("button");
    var pageNum = 0;


   
    
    for( var i = 0; i < _buttonAll.length; i++ ){
        (function(idx) {
            _buttonAll[idx].onclick = function() {
                //alert(idx);
                pageNum = idx;
                cardSetting();
            }
        })(i);
    }

    TweenMax.from("h1", 1, {
        top : -50,
        autoAlpha : 0,
        ease : Power3.easeOut
    })

    // 중복
    TweenMax.killTweensOf(_cards);

    function cardSetting(){

            //랜덤
            _cards.forEach(function(item, i){
                var scaleNum = Math.random() * 3;
                TweenMax.to(item, 1, {
                    top : Math.random() * (windowHeight - 300) + 100,
                    left : Math.random() * (windowWidth - 300) + 100, 
                    rotationX : "random(-60,60)", //Math.random()*30 
                    rotationY : "random(-60,60)", 
                    rotationZ : "random(-90,90)",
                    //scale : Math.random() * .6 + .6,
                    ease : Power4.easeInOut, 
                    delay : "random(0,.5)"
                })
            });
        };

    window.addEventListener('resize', function(){
        resize();
    });

    function resize(){
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        cardSetting();
    }

    
    function cardRandom(){
        _cards.forEach(function(item, i){

            TweenMax.to(item, 1, {
                top : Math.random() * windowHeight,
                left : Math.random() * windowWidth, 
                rotation : Math.random()*180, 
                ease : Power4.easeInOut, 
                delay : i * .1
            })
            
        })
    }


    resize();

}


