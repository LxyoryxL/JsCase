var a=$(".buttons a");
var Img=$("li");
var cArr=["p1","p2","p3","p4","p5","p6","p7"];
var indexOrigin=0;

$(".next").click(function () {
    nextImg();
});

$(".prev").click(function () {
    prevImg();
});

function nextImg(){
    cArr.push(cArr[0]);
    cArr.shift();

    $("li").each(function (index, element) {
        $(this).removeClass()
            .addClass(cArr[index]);

    });

    indexOrigin++;
    indexOrigin=indexOrigin>6? 0:indexOrigin;
    showBtColor();
}

function prevImg(){
    cArr.unshift(cArr[6]);
    cArr.pop();

    $("li").each(function (index,element) {
        $(element).removeClass()
            .addClass(cArr[index]);

    })

    indexOrigin--;
    indexOrigin=indexOrigin<0? 6:indexOrigin;
    showBtColor();

}

function showBtColor(){
    $(a).eq(indexOrigin)
        .addClass("blue")
        .siblings()
        .removeClass("blue");
}

function showImg(){
    cArr=["p1","p2","p3","p4","p5","p6","p7"];
    cArr.reverse();

    for(var i=cArr.length-1;i>=indexOrigin;i--){
        cArr.unshift(cArr[cArr.length-1]);
        cArr.pop();
    }

    $("li").each(function (index,element) {
        $(this).removeClass()
            .addClass(cArr[index]);
    })

}

a.each(function (index, element) {
    $(this).click(function () {
        if(indexOrigin!==$(this).index()){
            indexOrigin=index;
            showBtColor();
            showImg();
        }
    })
});


// $("li").each(function (index,element) {
// 	$(this).click(function () {
// 	    // console.log($(this)[0].getAttribute("class")=="p1")
// 		if ($(this)[0].getAttribute("class")=="p2" ){
// 			nextImg();
// 		}
// 		if ($(this)[0].getAttribute("class")=="p4"){
// 		    prevImg();
// 		}
//     })
//
// })
// 或者：
$(document).on("click",".p2",function () {
    prevImg();
})
$(document).on("click",".p4",function () {
    nextImg();
})

window.setInterval(prevImg,3000);