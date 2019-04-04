* {
    margin: 0;
    padding: 0;
}

.box{
    width: 100%;
    height: 340px;
    background-color: gainsboro;

    margin-top: 100px;


    position: relative;
}

.list {
    width: 80%;
    height: 300px;

    margin-left: -600px;

    left: 50%;
    position: absolute;
    overflow: hidden;

}

img{
    /*img元素虽然是行内元素,但是同时也是置换元素,能设置宽高*/
    width: 751px;
    height: 300px;
    /*float: left;*/
}

.btn{
    width: 60px;
    height: 100px;
    background-color: greenyellow;

    text-align: center;
    text-decoration: none;
    line-height: 100px;
    color: white;
    font-size: 30px;


    top: 50%;
    position: absolute;/*应用后,内联元素会变成块元素*/

}

.next {
    right: 0;
}

.buttons {
    width: 100%;
    height: 30px;
    background-color: bisque;

    text-align: center;

    margin-left: -600px;
    padding-top: 10px;

    left: 50%;
    bottom: 0;
    position: absolute;
}

.buttons a {
    display: inline-block;

    width: 30px;
    height: 5px;
    background-color: red;

    padding-top: 4px;

}

.buttons .blue {
    background-color: blue;
}