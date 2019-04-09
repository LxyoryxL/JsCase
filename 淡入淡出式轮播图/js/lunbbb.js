$(function () {
    var index=0;
    var timer;

    pointChange:
        $("li").click(function (event) {
            // console.log(event)
            // console.log($(this))
            // console.log($(this).index())
            index=$(this).index();

            $(this).addClass("active").siblings().removeClass("active");
            changeSmooth:
                $("img").eq(index).fadeIn(200).siblings().fadeOut(200);

        })

    autoChangeImg:
        timer=setInterval(showImg,1000);
    clearChangeImg:
        $("img").hover(function () {
            clearInterval(timer);
        },function () {
            timer=setInterval(showImg,1000);
        });

    function showImg() {
        index++;
        if(index>6){
            index=0;
        }
        $("img").eq(index).fadeIn(200).siblings().fadeOut(200);
        $("li").eq(index).addClass("active").siblings().removeClass("active");
    }
});