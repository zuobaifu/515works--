//下拉列表
var aHide = document.querySelectorAll(".ability div");
var aP = document.querySelectorAll(".ability p");
var lastIndex = 0;
var box = document.getElementById("box");
var hide = document.getElementById("hide");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var hide3 = document.getElementById("hide3");
for (let i = 0; i < aP.length; i++) {
    aP[i].index = i;
    aP[i].isClick = "false";//设置一个点击开关

    aP[i].onclick = function () {
        box.onclick = function () {//点击外面使下拉菜单收回
            aP[lastIndex].isClick = "false";
            aP[lastIndex].className = "";
            console.log(aP[aP[i].index].isClick);
            hide.style.height = "0px";
            hide1.style.height = "0px";
            hide2.style.height = "0px";
            hide3.style.height = "0px";
        }
        if (this.isClick == "true") {
            //清除自身再次被点击的样式
            aP[this.index].className = "";
            aHide[this.index].style.height = "0";
            this.isClick = "false";
        } else {
            //设置当前点击样式
            aP[lastIndex].className = "";
            aHide[lastIndex].style.height = "0";
            //this.isClick = "false";
            aP[this.index].className = "on";
            aHide[this.index].style.height = "433px";
            aP[lastIndex].isClick = "false";//将上一次点击的开关变为未点击
            console.log(lastIndex);
            this.isClick = "true";//设置当前点击开关为被点击
            lastIndex = this.index;//记录上一次点击的是谁 
        }
    }
}
//点击切换
var lists = document.getElementById("list").getElementsByTagName("li");//引入标题
var controls = document.querySelectorAll(".control ul");//引入标题所对应的内容
var imgs = document.querySelectorAll("#list li p");//引入标题前的小图标
for (let i = 0; i < lists.length; i++) {
    lists[i].onclick = function () {
        console.log(i);
        for (let i = 0; i < controls.length; i++) {
            controls[i].className = "";//先将内容的样式全部清空
        }//判断点击的是哪一个标题并且切换标题前的小图标
        if (i == 0) {
            imgs[0].style.backgroundImage = "";
            imgs[0].style.backgroundImage = "url(img/1.png)";
            imgs[1].style.backgroundImage = "url(img/2.png)";
            imgs[2].style.backgroundImage = "url(img/3.png)";
            imgs[3].style.backgroundImage = "url(img/4.png)";
            imgs[4].style.backgroundImage = "url(img/5.png)";
            imgs[5].style.backgroundImage = "url(img/6.png)";
            console.log(i);
        }
        if (i == 1) {
            imgs[1].style.backgroundImage = "";
            imgs[1].style.backgroundImage = "url(img/7.png)";
            imgs[0].style.backgroundImage = "url(img/12.png)";
            imgs[2].style.backgroundImage = "url(img/3.png)";
            imgs[3].style.backgroundImage = "url(img/4.png)";
            imgs[4].style.backgroundImage = "url(img/5.png)";
            imgs[5].style.backgroundImage = "url(img/6.png)";
        }
        if (i == 2) {
            imgs[2].style.backgroundImage = "";
            imgs[2].style.backgroundImage = "url(img/8.png)";
            imgs[1].style.backgroundImage = "url(img/2.png)";
            imgs[0].style.backgroundImage = "url(img/12.png)";
            imgs[3].style.backgroundImage = "url(img/4.png)";
            imgs[4].style.backgroundImage = "url(img/5.png)";
            imgs[5].style.backgroundImage = "url(img/6.png)";
        }
        if (i == 3) {
            imgs[3].style.backgroundImage = "";
            imgs[3].style.backgroundImage = "url(img/9.png)";
            imgs[1].style.backgroundImage = "url(img/2.png)";
            imgs[2].style.backgroundImage = "url(img/3.png)";
            imgs[0].style.backgroundImage = "url(img/12.png)";
            imgs[4].style.backgroundImage = "url(img/5.png)";
            imgs[5].style.backgroundImage = "url(img/6.png)";
        }
        if (i == 4) {
            imgs[4].style.backgroundImage = "";
            imgs[4].style.backgroundImage = "url(img/10.png)";
            imgs[1].style.backgroundImage = "url(img/2.png)";
            imgs[2].style.backgroundImage = "url(img/3.png)";
            imgs[3].style.backgroundImage = "url(img/4.png)";
            imgs[0].style.backgroundImage = "url(img/12.png)";
            imgs[5].style.backgroundImage = "url(img/6.png)";
        }
        if (i == 5) {
            imgs[5].style.backgroundImage = "";
            imgs[5].style.backgroundImage = "url(img/11.png)";
            imgs[1].style.backgroundImage = "url(img/2.png)";
            imgs[2].style.backgroundImage = "url(img/3.png)";
            imgs[3].style.backgroundImage = "url(img/4.png)";
            imgs[4].style.backgroundImage = "url(img/5.png)";
            imgs[0].style.backgroundImage = "url(img/12.png)";
        }
        console.log(i);
        controls[i].className = "frame";//让点击的哪一个标题所对应的内容显示
        //lists[i].className="in";
    }
}
//获取li标签
var switchs = document.getElementById("switch").getElementsByTagName("li");
var blocks = document.querySelectorAll("#switch div div");
console.log(switchs);
console.log(blocks);
for (let i = 0; i < switchs.length; i++) {
    switchs[i].isClick = "false";//初始化每一个li都是没被点击状态
    switchs[i].onclick = function () {
        if (this.isClick == "true") {//如果处于被点击状态这点击将其收回
            blocks[i].style.height = "0px";
            this.isClick = "false";//将开关变回未被点击
        } else {//如果li处于未被点击状态则上一个li（lastindex）下的列表收回，当前点击的li下的列表出现
            blocks[lastIndex].style.height = "0px";//将上一次的收回
            blocks[i].style.height = "800px";//当前点击的出现
            switchs[lastIndex].isClick = "false";//清除上一次的点击状态将其变为未被点击；
            lastIndex = i;//记录上一次点击的哪一个li
            this.isClick = "true";//将开关变为被点击
        }
    }
}
//点击切换
var goPre = document.getElementById("press");//引入点击去上一张的按钮
var goNext = document.getElementById("press1");//引入点击去下一张的按钮
var pictures = document.querySelectorAll("#button p");//将图标引入
var button = document.getElementById("button");
var text = document.getElementById("text");
var empty = document.getElementById("empty");
var left = 0;//命名left并初始化left的值
console.log(goPre);
console.log(goNext);
console.log(pictures);
text.onclick = function () {
    goNext.style.boxShadow = "";
    goNext.style.backgroundColor = "";
    goPre.style.boxShadow = "";
    goPre.style.backgroundColor = "";
}
empty.onclick = function () {
    goNext.style.boxShadow = "";
    goNext.style.backgroundColor = "";
    goPre.style.boxShadow = "";
    goPre.style.backgroundColor = "";
}
goPre.onclick = function () {
    goNext.style.boxShadow = "";
    goNext.style.backgroundColor = "";
    goPre.style.boxShadow = "5px 5px 5px 5px  rgb(214,233,249)";
    goPre.style.backgroundColor = "rgb(244,237,255)";
    if (left == 0) {//如果button（装内容的）的marginLeft=0；点击去上一张则上一张为最后一张
        left = -1890;
        button.style.marginLeft = left + "px";
    } else {//如果一开始button的marginLeft不等于零则点击出现上一个图标
        left += 210;
        button.style.marginLeft = left + "px";
    }
}
goNext.onclick = function () {
    goPre.style.boxShadow = "";
    goPre.style.backgroundColor = "";
    goNext.style.boxShadow = "5px 5px 5px 5px  rgb(214,233,249)";
    goNext.style.backgroundColor = "rgb(244,237,255)";
    if (left <= -1890) {//如果最后一个图标已经出现则再次点击回到最初始状态
        left = 0;
        button.style.marginLeft = left + "px";
    } else {//如果最后一个图标未出现则点击出现下一个图标
        left -= 210;
        button.style.marginLeft = left + "px";
    }
}
$('.ed').mouseenter(function(){
    $('.mu').slideDown();
});
$('.ed').mouseleave(function(){
    $('.mu').slideUp();
});
var l = 0;
$('#press2').click(function(){
    l--;
    if(l<0){
        l=3;
    }
    $('.contain>div').eq(l).css('display','block').siblings().css('display','none');
});
$('#press3').click(function(){
    l++;
    if(l>3){
        l=0;
    }
    $('.contain>div').eq(l).css('display','block').siblings().css('display','none');
});
var lf = 0;
$('#press4').click(function(){
    lf--;
    if(lf<0){
        lf=2;
    }
    $('.contain1>div').eq(lf).css('display','block').siblings().css('display','none');
});
$('#press5').click(function(){
    lf++;
    if(lf>2){
        lf=0;
    }
    $('.contain1>div').eq(lf).css('display','block').siblings().css('display','none');
});
//语言改变
var languages = document.querySelectorAll(".language p");
var tranformations = document.getElementById("tranformation");
var make = "false";
for (let i = 0; i < languages.length; i++) {
    languages[i].onclick = function () {

        console.log(make);
        if (make == "false") {
            tranformations.style.height = "272px";
            tranformations.style.border = "1px solid rgb(160,160,160)";
            make = "true";
            console.log(make);
        } else {
            tranformations.style.height = "0px";
            tranformations.style.border = "0px solid rgb(160,160,160)";
            make = "false";
            console.log(make);
        }
    }
}
//jQuery
$(function () {
    $('.parallel>span').click(function () {
        $('#topIn').show();
        $('.search').css({
            border: '1px dashed black',
        })
    });

    $('.cancel').click(function () {
        $('#topIn').hide();
    });
    $('#box').click(function () {
        $('.search').css({
            border: '1px dashed transparent',
        })
    });
    console.log($('.gif>img'));
    $('.gif>img').mouseenter(function () {
        $('.go').css('display', 'block');
    });
    $('.gif>img').mouseleave(function () {
        $('.go').css('display', 'none');
    });

    $('.go').click(function () {
        $(this).css('display', 'none');
        $('.sto').css('display', 'block');
        $('.gif>img:eq(0)').addClass('stan');
        $('.gif>img:eq(1)').removeClass('stan');
        $('.pos>span').stop(true, false);//.animate({width:'1205px',},30000),'linear',function(){$('.pos>span').css('width','0px');
        // };
        console.log($('.pos>sapn'));
    });
    $('.sto').click(function () {
        $(this).css('display', 'none');
        $('.go').css('display', 'block');
        $('.gif>img:eq(1)').addClass('stan');
        $('.gif>img:eq(0)').removeClass('stan');

        $('.pos>span').stop(false, false).animate({ width: '1205px' }, 60000, 'linear', function () {
            for (var i = 0; i < 99; i++) {
                $('.pos>span').css('width', '0px');
                $('.pos>span').animate({ width: '1205px' }, 60000, 'linear');
            }
        });

    });
    $('.frame>li>img').mouseenter(function () {
        $('.goes').css('display', 'block');
    });
    $('.frame>li>img').mouseleave(function () {
        $('.goes').css('display', 'none');
    });
    $('.goes').mouseenter(function () {
        $('.goes').css('display', 'block');
    });
    $('.goes').mouseleave(function () {
        $('.goes').css('display', 'none');
    });
    $('.goes').click(function () {
        $('.goes').css('display', 'none');
        $('.sts').css('display', 'block');
        $('.stoes').css('display', 'block');
        $('.frame>li>img').css('display', 'none');
    });
    $('.stoes').click(function () {
        $('.goes').css('display', 'block');
        $('.sts').css('display', 'none');
        $('.stoes').css('display', 'none');
        $('.frame>li>img').css('display', 'block');
    });
    for (var i = 0; i < 9999; i++) {
        $('.pos>span').animate({
            width: '1205px',
        }, 60000,'linear' ,function () {
            $('.pos>span').css('width', '0px');
            // $('.pos>span').animate({
            // width:'1205px',
            //  },30000);
        });
    };
    $('#fix').click(function(){
        $('#black').css('display','block');
        $('#feedback').css('display','block');
    });
    $('.evaluation>li').on('mouseenter',function(){
        $(this).text('★').prevAll().text('★');
        $(this).nextAll().text('☆');
    }).on('mouseleave',function(){
        $('.evaluation>li').text('☆');
        $('.evaluation>li[exchange]').text('★').prevAll().text('★');
    }).on('click',function(){
        $(this).attr('exchange','current').siblings().removeAttr('exchange');
        $('.advice').css('display','block');
        $('.slid').css('display','none');
        $('.submit').css('display','block');
        $('.privacy').css('display','block');
        $('.links').css('marginLeft','30%');
    });
    $('.shut').click(function(){
        $('.shut').css('border','1px solid transparent');
        $('#feedback').css('display','none');
        $('#black').css('display','none');
        $('.evaluation>li').text('☆');
    });
    $('.submit').click(function(){
        $('.ct').css('display','none');
        $('.slid').css('display','none');
        $('.evaluation>li').css('display','none');
        $('.evaluation').css('display','none');
        $('.links').css('display','none');
        $('#feedback>h3').css('display','none');
        $('#feedback>p').css('display','none');
        $('.reponse').css('display','block');
        $('.advice').css('display','none');
        $('.privacy').css('display','none');
    });
    $('.reponse>a').click(function(){
        $('#feedback').css('display','none');
        $('#black').css('display','none');
    });
})