
var a = document.querySelectorAll(".wheelPlanting1");
var wheelPlanting = document.getElementById("wheelPlanting");
var knife = true;
var i = 0;
var icon = document.getElementById("icon");
wheelPlanting.onmousewheel = function (event) {
    event = event || window.event;
    if (knife) {
        knife = false;
        var ud = event.wheelDelta;
        if (ud < 0 && i < 5) {
            i++;
            icon.style.width = "100%";
            icon.style.overflow = "";
        }
        if ((ud > 0) && (i > 0)) {
            icon.style.width = "100%";
            icon.style.overflow = "";
            i--;
        }
        if (i == 0) {
            document.getElementById("pic0").src = "img/35.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
        }
        if (i == 1) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/35.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
        }
        if (i == 2) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/35.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
        }
        if (i == 3) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/35.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
        }
        wheelPlanting.style.transition = "0.8s ease";
        if (i == 4) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/35.png";
            document.getElementById("pic5").src = "img/34.png";
        }
        if (i == 5) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/35.png";

            icon.style.width = "0%";
            icon.style.overflow = "hidden";
            icon.style.transition = "0.8s ease";
        }
        setTimeout(function () {
            wheelPlanting.style.top = -i * 100 + "vh";
        }, 0);
        setTimeout(function () {
            knife = true;
        }, 1000);
    }
};
var left = document.querySelectorAll(".left");
console.log(left);
var left_li = document.querySelectorAll(".left>li");
console.log(left_li);
var left_ul = document.querySelectorAll(".left>li>ul");
console.log(left_ul);
var left_ul_li = document.querySelectorAll(".left>li>ul>li");
console.log(left_ul_li);
console.log(left_ul);
var logo = document.querySelectorAll("div>div");
var uls = document.querySelectorAll(".wheelPlanting1>ul");
var wheelPlanting1 = document.querySelectorAll(".wheelPlanting1");
var lastIndex = 0;
var homepage = document.querySelectorAll(".homepage>img");
var about = document.querySelectorAll(".about>img");
var brand = document.querySelectorAll(".brand>img");
var development = document.querySelectorAll(".development>img");
var journalism = document.querySelectorAll(".journalism>img");
var notice = document.querySelectorAll(".notice>img");
var ps = document.querySelectorAll(".left>li>p");
console.log(ps);
console.log(uls);
var sign = 0;
if (sign == 0) {
    wheelPlanting1[0].style.height = "100vh";
    wheelPlanting1[0].style.overflow = "hidden";
}
else {
    wheelPlanting1[0].style.height = "1200px";
}
console.log(logo);
for (let j = 0; j < left_li.length; j++) {
    left_li[j].index = j;
    left_li[j].isClick = false;
    left_li[j].onclick = function () {
        sign = this.index;
        console.log(sign);
        icon.style.overflow = "";
        if (this.isClick == true) {
            logo[this.index].style.display = "block";
            uls[this.index].style.display = "block";
            left_li[this.index].style.opacity = "1";
            this.isClick = false;
            if (this.index == 0) {
                wheelPlanting1[0].style.height = "100vh";
                wheelPlanting1[0].style.overflow = "hidden";
            }
            else {
                wheelPlanting1[0].style.height = "1200px";
                // wheelPlanting1[0].style.overflow = "";
            }
        }
        else {
            left_li[lastIndex].style.opacity = "0.5";
            uls[lastIndex].style.display = "none";
            uls[this.index].style.display = "block";
            logo[lastIndex].style.display = "none";
            logo[this.index].style.display = "block";
            left_li[lastIndex].isClick = false;
            left_li[this.index].isClick = true;
            lastIndex = this.index;
            if (this.index == 0) {
                wheelPlanting1[0].style.height = "100vh";
                wheelPlanting1[0].style.overflow = "hidden";
            }
            else {
                wheelPlanting1[0].style.height = "1200px";
            }
            if (this.index == 0) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[0].style.color = "";
                ps[0].style.color = "black";
                icon.style.width = "100%";
                // icon.style.overflow="hidden";
            }
            if (this.index == 1) {
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                homepage[0].style.height = "0px";
                homepage[0].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[1].style.width = "0px";
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[1].style.color = "black";
                icon.style.width = "0%";
                icon.style.overflow = "hidden";
            }
            if (this.index == 2) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                homepage[0].style.height = "0px";
                homepage[0].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[1].style.width = "0px";
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[2].style.color = "black";
                icon.style.width = "0%";
                icon.style.overflow = "hidden";
            }
            if (this.index == 3) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                homepage[0].style.height = "0px";
                homepage[0].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[1].style.width = "0px";
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[3].style.color = "black";
                icon.style.width = "0%";
                icon.style.overflow = "hidden";
            }
            if (this.index == 4) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                homepage[0].style.height = "0px";
                homepage[0].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[1].style.width = "0px";
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[4].style.color = "black";
                icon.style.width = "0%";
                icon.style.overflow = "hidden";
            }
            if (this.index == 5) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                homepage[0].style.height = "0px";
                homepage[0].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[1].style.width = "0px";
                ps[5].style.color = "black";
                icon.style.width = "0%";
                icon.style.overflow = "hidden";
            }

        }
    }
};
for (let num = 0; num < 12; num++) {
    left_ul_li[num].onmouseover = function () {
        if (num >= 0 && num < 4) {
            left_ul_li[num].style.backgroundColor = "#F6C07E";
        }
        if (num >= 4 && num < 6) {
            left_ul_li[num].style.backgroundColor = "#F19F9A";
        }
        if (num >= 6 && num < 10) {
            left_ul_li[num].style.backgroundColor = "#A3D4EB";
        }
        if (num >= 10 && num < 12) {
            left_ul_li[num].style.backgroundColor = "#73C27F";
        }
    }
    left_ul_li[num].onmouseout = function () {
        if (num >= 0 && num < 4) {
            left_ul_li[num].style.backgroundColor = "";
        }
        if (num >= 4 && num < 6) {
            left_ul_li[num].style.backgroundColor = "";
        }
        if (num >= 6 && num < 10) {
            left_ul_li[num].style.backgroundColor = "";
        }
        if (num >= 10 && num < 12) {
            left_ul_li[num].style.backgroundColor = "";
        }
    }
}
var catalog1 = document.getElementsByClassName("catalog1");
var lastIndex1 = 0;
for (let m = 0; m < left_li.length - 1; m++) {
    left_li[m].indx = m;
    left_li[m].onmouseover = function () {
        console.log(this.indx);
        cd = this.indx;
        switch (this.indx) {
            case 1: {
                left_ul[1].style.backgroundColor = "#F1AA51";
            } break;
            case 2: {
                left_ul[2].style.backgroundColor = "#D67475";
            } break;
            case 3: {
                left_ul[3].style.backgroundColor = "#8DC2D6";
            } break;
            case 4: {
                left_ul[4].style.backgroundColor = "#2A9B38";
            } break;
        }
        logo[sign].style.display = "none";
        logo[lastIndex1].style.display = "none";
        logo[this.indx].style.display = "block";
        // //    left_ul[this.indx].style.width = "75px";
        // //    left_ul[this.indx].style.transition = "0.5s";
        // details[lastIndex1].style.display = "none";
        // details[this.indx].style.display = "block";
        if (sign == 0) {
            if (this.indx == 1) {
                about[0].style.width = "0px";
                about[1].style.width = "44px";
                ps[1].style.color = "#F4A241";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F4A241";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 2) {
                brand[0].style.width = "0px";
                brand[1].style.width = "44px";
                ps[2].style.color = "#ED7C76";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #ED7C76";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 3) {
                development[0].style.width = "0px";
                development[1].style.width = "44px";
                ps[3].style.color = "#73BEE4";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #73BEE4";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "0px";
                journalism[1].style.width = "44px";
                ps[4].style.color = "#68BD75";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #68BD75";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 5) {
                notice[0].style.width = "0px";
                notice[1].style.width = "44px";
                ps[5].style.color = "#F3AA47";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F3AA47";
                left_li[this.indx].style.opacity = "1";
            }
        }
        if (sign == 1) {
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[2].style.width = "0px";
                homepage[2].style.height = "0px";
                homepage[1].style.width = "44px";
                homepage[1].style.height = "58px";
                ps[0].style.color = "#29A23D";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #29A23D";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 2) {
                brand[0].style.width = "0px";
                brand[1].style.width = "44px";
                ps[2].style.color = "#ED7C76";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #ED7C76";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 3) {
                development[0].style.width = "0px";
                development[1].style.width = "44px";
                ps[3].style.color = "#73BEE4";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #73BEE4";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "0px";
                journalism[1].style.width = "44px";
                ps[4].style.color = "#68BD75";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #68BD75";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 5) {
                notice[0].style.width = "0px";
                notice[1].style.width = "44px";
                ps[5].style.color = "#F3AA47";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F3AA47";
                left_li[this.indx].style.opacity = "1";
            }
        }
        if (sign == 2) {
            if (this.indx == 1) {
                about[0].style.width = "0px";
                about[1].style.width = "44px";
                ps[1].style.color = "#F4A241";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F4A241";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "44px";
                homepage[1].style.height = "58px";
                homepage[2].style.width = "0px";
                homepage[2].style.height = "0px";
                ps[0].style.color = "#29A23D";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #29A23D";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 3) {
                development[0].style.width = "0px";
                development[1].style.width = "44px";
                ps[3].style.color = "#73BEE4";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #73BEE4";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "0px";
                journalism[1].style.width = "44px";
                ps[4].style.color = "#68BD75";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #68BD75";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 5) {
                notice[0].style.width = "0px";
                notice[1].style.width = "44px";
                ps[5].style.color = "#F3AA47";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F3AA47";
                left_li[this.indx].style.opacity = "1";
            }
        }
        if (sign == 3) {
            if (this.indx == 1) {
                about[0].style.width = "0px";
                about[1].style.width = "44px";
                ps[1].style.color = "#F4A241";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F4A241";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 2) {
                brand[0].style.width = "0px";
                brand[1].style.width = "44px";
                ps[2].style.color = "#ED7C76";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #ED7C76";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "44px";
                homepage[1].style.height = "58px";
                homepage[2].style.width = "0px";
                homepage[2].style.height = "0px";
                ps[0].style.color = "#29A23D";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #29A23D";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "0px";
                journalism[1].style.width = "44px";
                ps[4].style.color = "#68BD75";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #68BD75";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 5) {
                notice[0].style.width = "0px";
                notice[1].style.width = "44px";
                ps[5].style.color = "#F3AA47";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F3AA47";
                left_li[this.indx].style.opacity = "1";
            }
        }
        if (sign == 4) {
            if (this.indx == 1) {
                about[0].style.width = "0px";
                about[1].style.width = "44px";
                ps[1].style.color = "#F4A241";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F4A241";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 2) {
                brand[0].style.width = "0px";
                brand[1].style.width = "44px";
                ps[2].style.color = "#ED7C76";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #ED7C76";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 3) {
                development[0].style.width = "0px";
                development[1].style.width = "44px";
                ps[3].style.color = "#73BEE4";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #73BEE4";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "44px";
                homepage[1].style.height = "58px";
                homepage[2].style.width = "0px";
                homepage[2].style.height = "0px";
                ps[0].style.color = "#29A23D";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #29A23D";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 5) {
                notice[0].style.width = "0px";
                notice[1].style.width = "44px";
                ps[5].style.color = "#F3AA47";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F3AA47";
                left_li[this.indx].style.opacity = "1";
            }
        }
        if (sign == 5) {
            if (this.indx == 1) {
                about[0].style.width = "0px";
                about[1].style.width = "44px";
                ps[1].style.color = "#F4A241";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #F4A241";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 2) {
                brand[0].style.width = "0px";
                brand[1].style.width = "44px";
                ps[2].style.color = "#ED7C76";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #ED7C76";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 3) {
                development[0].style.width = "0px";
                development[1].style.width = "44px";
                ps[3].style.color = "#73BEE4";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #73BEE4";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "0px";
                journalism[1].style.width = "44px";
                ps[4].style.color = "#68BD75";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #68BD75";
                left_li[this.indx].style.opacity = "1";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "44px";
                homepage[1].style.height = "58px";
                homepage[2].style.width = "0px";
                homepage[2].style.height = "0px";
                ps[0].style.color = "#29A23D";
                left_li[this.indx].style.backgroundColor = "#fff";
                left_li[this.indx].style.borderBottom = "1px solid #29A23D";
                left_li[this.indx].style.opacity = "1";
            }
        }
        console.log(this.indx);
        lastIndex1 = this.indx;
    }
    left_li[m].onmouseout = function () {
        switch (this.indx) {
            case 1: {
                left_ul[1].style.backgroundColor = "";
                left_ul[1].style.opacity = "1";
            } break;
            case 2: {
                left_ul[2].style.backgroundColor = "";
                left_ul[2].style.opacity = "1";
            } break;
            case 3: {
                left_ul[3].style.backgroundColor = "";
                left_ul[3].style.opacity = "1";
            } break;
            case 4: {
                left_ul[4].style.backgroundColor = "";
                left_ul[4].style.opacity = "1";
            } break;
        };
        if (sign == 0) {
            if (this.indx == 1) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                ps[1].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 2) {
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                ps[2].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 3) {
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                ps[3].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                ps[4].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 5) {
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[5].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
        }
        if (sign == 1) {
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                ps[0].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 2) {
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                ps[2].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 3) {
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                ps[3].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                ps[4].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 5) {
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[5].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
        }
        if (sign == 2) {
            if (this.indx == 1) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                ps[1].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                ps[0].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 3) {
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                ps[3].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                ps[4].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 5) {
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[5].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
        }
        if (sign == 3) {
            if (this.indx == 1) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                ps[1].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 2) {
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                ps[2].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                ps[0].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                ps[4].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 5) {
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[5].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
        }
        if (sign == 4) {
            if (this.indx == 1) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                ps[1].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 2) {
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                ps[2].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 3) {
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                ps[3].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                ps[0].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 5) {
                notice[0].style.width = "44px";
                notice[1].style.width = "0px";
                ps[5].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
        }
        if (sign == 5) {
            if (this.indx == 1) {
                about[0].style.width = "44px";
                about[1].style.width = "0px";
                ps[1].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 2) {
                brand[0].style.width = "44px";
                brand[1].style.width = "0px";
                ps[2].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 3) {
                development[0].style.width = "44px";
                development[1].style.width = "0px";
                ps[3].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 4) {
                journalism[0].style.width = "44px";
                journalism[1].style.width = "0px";
                ps[4].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
            if (this.indx == 0) {
                homepage[0].style.width = "0px";
                homepage[0].style.height = "0px";
                homepage[1].style.width = "0px";
                homepage[1].style.height = "0px";
                homepage[2].style.width = "44px";
                homepage[2].style.height = "58px";
                ps[0].style.color = "";
                left_li[this.indx].style.opacity = "0.5";
                left_li[this.indx].style.borderBottom = "";
            }
        }
        //logo[this.indx].style.display = "none";
        logo[lastIndex1].style.display = "none";
        logo[sign].style.display = "block";
        // details[this.indx].style.display = "none";
        // left_ul[this.indx].style.width = "0px";
        // left_ul[this.indx].style.transition = "0.2s";
    }
};
var le = null;
function le1(obj) {
    clearInterval(le);
    le = setInterval(function () {
        if (left_ul[obj].style.width >= 75 + "px") {
            clearInterval(le);
        }
        else {
            console.log(left_ul[obj].style.width);
            left_ul[obj].style.width = left_ul[obj].offsetWidth + 15 + "px";
        }
    }, 30)
}
var le2 = null;
function le3(obj) {
    clearInterval(le2);
    le2 = setInterval(function () {
        if (left_ul[obj].style.width <= 0 + "px") {
            clearInterval(le2);
        }
        else {
            left_ul[obj].style.width = left_ul[obj].offsetWidth - 15 + "px";
        }
    }, 30)
}
for (let fir = 1; fir < 5; fir++) {
    left_li[fir].onmouseenter = function () {
        this.ax = fir;
        console.log(this.ax);
        le1(this.ax);
    }
    left_li[fir].onmouseleave = function () {
        console.log(this.ax);
        le3(this.ax);
    }
}
var abpics = document.querySelectorAll(".abpic li");
var abpic = document.querySelectorAll(".abpic");
var abpicbot1 = document.querySelectorAll(".abpicbot1 div");
var abpicbot2 = document.querySelectorAll(".abpicbot2 div");
var abpicbot3 = document.querySelectorAll(".abpicbot3 div");
var abpicbot4 = document.querySelectorAll(".abpicbot4 div");
var abpicbot1_p = document.querySelectorAll(".abpicbot1 div p");
var abpicbot2_p = document.querySelectorAll(".abpicbot2 div p");
var abpicbot3_p = document.querySelectorAll(".abpicbot3 div p");
var abpicbot4_p = document.querySelectorAll(".abpicbot4 div p");
var abpicbot_1 = document.querySelectorAll(".abpicbot1");
var abpicbot_2 = document.querySelectorAll(".abpicbot2");
var abpicbot_3 = document.querySelectorAll(".abpicbot3");
var abpicbot_4 = document.querySelectorAll(".abpicbot4");
var time3 = null;
function opc3() {
    clearInterval(time3);
    var width3 = 257;
    time3 = setInterval(function () {
        if (width3 >= 277) {
            clearInterval(time3);
        }
        else {
            width3 += 1;
            abpics[0].style.width = (width3 / 10) + "%";
        }
    }, 30)
}
var time4 = null;
function opc4() {
    var width4 = 277;
    clearInterval(time4);
    time4 = setInterval(function () {
        if (width4 <= 257) {
            clearInterval(time4);
        }
        else {
            width4 -= 1;
            abpics[0].style.width = (width4 / 10) + "%";
        }
    }, 30)
}
var time3_1 = null;
function opc3_1() {
    clearInterval(time3_1);
    var width3_1 = 257;
    time3_1 = setInterval(function () {
        if (width3_1 >= 277) {
            clearInterval(time3_1);
        }
        else {
            width3_1 += 1;
            abpics[1].style.width = (width3_1 / 10) + "%";
        }
    }, 30)
}
var time4_1 = null;
function opc4_1() {
    var width4_1 = 277;
    clearInterval(time4_1);
    time4_1 = setInterval(function () {
        if (width4_1 <= 257) {
            clearInterval(time4_1);
        }
        else {
            width4_1 -= 1;
            abpics[1].style.width = (width4_1 / 10) + "%";
        }
    }, 30)
}
var time3_2 = null;
function opc3_2() {
    clearInterval(time3_2);
    var width3_2 = 257;
    time3_2 = setInterval(function () {
        if (width3_2 >= 277) {
            clearInterval(time3_2);
        }
        else {
            width3_2 += 1;
            abpics[2].style.width = (width3_2 / 10) + "%";
        }
    }, 30)
}
var time4_2 = null;
function opc4_2() {
    var width4_2 = 277;
    clearInterval(time4_2);
    time4_2 = setInterval(function () {
        if (width4_2 <= 257) {
            clearInterval(time4_2);
        }
        else {
            width4_2 -= 1;
            abpics[2].style.width = (width4_2 / 10) + "%";
        }
    }, 30)
}
var time3_2 = null;
function opc3_3() {
    clearInterval(time3_2);
    var width3_2 = 257;
    time3_2 = setInterval(function () {
        if (width3_2 >= 277) {
            clearInterval(time3_2);
        }
        else {
            width3_2 += 1;
            abpics[3].style.width = (width3_2 / 10) + "%";
        }
    }, 30)
}
var time4_2 = null;
function opc4_3() {
    var width4_2 = 277;
    clearInterval(time4_2);
    time4_2 = setInterval(function () {
        if (width4_2 <= 257) {
            clearInterval(time4_2);
        }
        else {
            width4_2 -= 1;
            abpics[3].style.width = (width4_2 / 10) + "%";
        }
    }, 30)
}
console.log(abpic);
abpics[0].onmouseenter = function () {
    opc3();
    // abpics[0].style.width = "27.7%";
    // abpics[0].style.transition = "0.5s ease";
    abpicbot1[0].style.backgroundColor = "white";
    abpicbot1_p[0].style.color = "#F39E38";

};
abpics[0].onmouseleave = function () {
    opc4();
    // abpics[0].style.width = "25.7%";
    // abpics[0].style.transition = "0.5s ease";
    abpicbot1[0].style.backgroundColor = "#FFF200";
    abpicbot1_p[0].style.color = "";
}
abpics[1].onmouseenter = function () {
    opc3_1();
    abpicbot2[0].style.backgroundColor = "white";
    abpicbot2_p[0].style.color = "#EB6B64";
};
abpics[1].onmouseleave = function () {
    opc4_1();
    // abpics[1].style.width = "25.7%";
    // abpics[1].style.marginTop = "0px";
    // abpics[1].style.transition = "0.5s ease";
    abpicbot2[0].style.backgroundColor = "#EC1C24";
    abpicbot2_p[0].style.color = "";
}
abpics[2].onmouseenter = function () {
    opc3_2();
    // abpics[2].style.width = "27.7%";
    // abpics[2].style.marginTop = "-25px";
    // abpics[2].style.transition = "0.5s ease";
    abpicbot3[0].style.backgroundColor = "white";
    abpicbot3_p[0].style.color = "#71BDE4";
};
abpics[2].onmouseleave = function () {
    opc4_2();
    // abpics[2].style.width = "25.7%";
    // abpics[2].style.marginTop = "0px";
    // abpics[2].style.transition = "0.5s ease";
    abpicbot3[0].style.backgroundColor = "#008FCE";
    abpicbot3_p[0].style.color = "";
}
abpics[3].onmouseenter = function () {
    opc3_3();
    // abpics[3].style.width = "27.7%";
    // abpics[3].style.marginTop = "-25px";
    // abpics[3].style.transition = "0.5s ease";
    abpicbot4[0].style.backgroundColor = "white";
    abpicbot4_p[0].style.color = "#81C043";
};
abpics[3].onmouseleave = function () {
    opc4_3();
    // abpics[3].style.width = "25.7%";
    // abpics[3].style.marginTop = "0px";
    // abpics[3].style.transition = "0.5s ease";
    abpicbot4[0].style.backgroundColor = "#0ED145";
    abpicbot4_p[0].style.color = "";
}
var symbol = document.querySelectorAll(".symbol li img");
var hid = document.querySelectorAll(".hid");
var symbol_li_p = document.querySelectorAll(".symbol li p");
var symbol1_li_p = document.querySelectorAll(".symbol1 li p");
var symbol2_li_p = document.querySelectorAll(".symbol2 li p");
var symbol3_li_p = document.querySelectorAll(".symbol3 li p");
var symbol4_li_p = document.querySelectorAll(".symbol4 li p");
var connect_li_a = document.querySelectorAll(".connect>li>a");
var connect1_ul_a = document.querySelectorAll(".connect1>ul>a");
var tecnologe_a = document.querySelectorAll(".tecnologe>a");

var connect_1_li_a = document.querySelectorAll(".connect_1>li>a");
var connect1_1_ul_a = document.querySelectorAll(".connect1_1>ul>a");
var tecnologe1_a = document.querySelectorAll(".tecnologe1>a");

var connect_2_li_a = document.querySelectorAll(".connect_2>li>a");
var connect1_2_ul_a = document.querySelectorAll(".connect1_2>ul>a");
var tecnologe2_a = document.querySelectorAll(".tecnologe2>a");

var connect_3_li_a = document.querySelectorAll(".connect_3>li>a");
var connect1_3_ul_a = document.querySelectorAll(".connect1_3>ul>a");
var tecnologe3_a = document.querySelectorAll(".tecnologe3>a");

var connect_4_li_a = document.querySelectorAll(".connect_4>li>a");
var connect1_4_ul_a = document.querySelectorAll(".connect1_4>ul>a");
var tecnologe4_a = document.querySelectorAll(".tecnologe4>a");

var time1_4 = null;
// var opct1;

function opc1_4(opct1) {
    // opct1=1;
    var alpha = 0;
    clearInterval(time1_4);
    time1_4 = setInterval(function () {
        var speed = 0;

        if (alpha > opct1) {
            speed = -1;
        }
        if (alpha < opct1) {
            speed = 1;
        }
        else {
            speed = 1;
        }
        if (alpha == 10) {
            clearInterval(time1_4);
        }
        else {
            alpha += speed;
            console.log(alpha);
            hid[0].style.opacity = (alpha / 10);
        }
    }, 54);
}
var time2_4 = null;
function opc2_4() {
    var alpha1 = 10;
    clearInterval(time2_4);
    time2_4 = setInterval(function () {
        var speed1 = 1;
        if (alpha1 == 0) {
            clearInterval(time2_4);
        }
        else {
            alpha1 -= speed1;
            console.log(alpha1);
            hid[0].style.opacity = alpha1 / 10;
        }
    }, 54)
}
symbol[0].onmouseover = function () {
    console.log("1");
    symbol[0].style.opacity = "1";
    symbol_li_p[0].style.color = "white";
}
symbol[0].onmouseout = function () {
    symbol[0].style.opacity = "0.5";
    symbol_li_p[0].style.color = "#b5b5b6";
}
symbol[1].onmouseover = function () {
    symbol[1].style.opacity = "1";
    opc1_4(10);
    symbol_li_p[1].style.color = "white";
}
symbol[1].onmouseout = function () {
    symbol[1].style.opacity = "0.5";
    opc2_4();
    symbol_li_p[1].style.color = "#b5b5b6";
}
for (let light = 0; light < connect_li_a.length; light++) {
    connect_li_a[light].onmouseover = function () {
        connect_li_a[light].style.opacity = "1";
    }
    connect_li_a[light].onmouseout = function () {
        connect_li_a[light].style.opacity = "0.5";
    }
}
for (let light1 = 0; light1 < connect1_ul_a.length; light1++) {
    connect1_ul_a[light1].onmouseover = function () {
        connect1_ul_a[light1].style.opacity = "1";
    }
    connect1_ul_a[light1].onmouseout = function () {
        connect1_ul_a[light1].style.opacity = "0.5";
    }
}
for (let light2 = 0; light2 < tecnologe_a.length; light2++) {
    tecnologe_a[light2].onmouseover = function () {
        tecnologe_a[light2].style.opacity = "1";
    }
    tecnologe_a[light2].onmouseout = function () {
        tecnologe_a[light2].style.opacity = "0.5";
    }
}
var time1_3 = null;
function opc1_3(opct1) {
    // opct1=1;
    var alpha = 0;
    clearInterval(time1);
    time1_3 = setInterval(function () {
        var speed = 0;

        if (alpha > opct1) {
            speed = -1;
        }
        if (alpha < opct1) {
            speed = 1;
        }
        else {
            speed = 1;
        }
        if (alpha == 10) {
            clearInterval(time1_3);
        }
        else {
            alpha += speed;
            console.log(alpha);
            hid1[0].style.opacity = (alpha / 10);
        }
    }, 54);
}
var time2_3 = null;

function opc2_3() {
    var alpha1 = 10;
    clearInterval(time2_3);
    time2_3 = setInterval(function () {
        var speed1 = 1;
        if (alpha1 == 0) {
            clearInterval(time2_3);
        }
        else {
            alpha1 -= speed1;
            console.log(alpha1);
            hid1[0].style.opacity = alpha1 / 10;
        }
    }, 54)
}
var symbol1 = document.querySelectorAll(".symbol1 li img");
var hid1 = document.querySelectorAll(".hid1");
symbol1[0].onmouseover = function () {
    console.log("1");
    symbol1[0].style.opacity = "1";
    symbol1_li_p[0].style.color = "white";
}
symbol1[0].onmouseout = function () {
    symbol1[0].style.opacity = "0.5";
    symbol1_li_p[0].style.color = "#b5b5b6";
}
symbol1[1].onmouseover = function () {
    symbol1[1].style.opacity = "1";
    opc1_3(10);
    symbol1_li_p[1].style.color = "white";
}
symbol1[1].onmouseout = function () {
    symbol1[1].style.opacity = "0.5";
    opc2_3();
    //hid1[0].style.opacity = "0";
    symbol1_li_p[1].style.color = "#b5b5b6";
}
for (let light_1 = 0; light_1 < connect_1_li_a.length; light_1++) {
    connect_1_li_a[light_1].onmouseover = function () {
        connect_1_li_a[light_1].style.opacity = "1";
    }
    connect_1_li_a[light_1].onmouseout = function () {
        connect_1_li_a[light_1].style.opacity = "0.5";
    }
}
for (let light1_1 = 0; light1_1 < connect1_1_ul_a.length; light1_1++) {
    connect1_1_ul_a[light1_1].onmouseover = function () {
        connect1_1_ul_a[light1_1].style.opacity = "1";
    }
    connect1_1_ul_a[light1_1].onmouseout = function () {
        connect1_1_ul_a[light1_1].style.opacity = "0.5";
    }
}
for (let light2_1 = 0; light2_1 < tecnologe1_a.length; light2_1++) {
    tecnologe1_a[light2_1].onmouseover = function () {
        tecnologe1_a[light2_1].style.opacity = "1";
    }
    tecnologe1_a[light2_1].onmouseout = function () {
        tecnologe1_a[light2_1].style.opacity = "0.5";
    }
}
var time1_2 = null;
// var opct1;

function opc1_2(opct1) {
    // opct1=1;
    var alpha = 0;
    clearInterval(time1_2);
    time1_2 = setInterval(function () {
        var speed = 0;

        if (alpha > opct1) {
            speed = -1;
        }
        if (alpha < opct1) {
            speed = 1;
        }
        else {
            speed = 1;
        }
        if (alpha == 10) {
            clearInterval(time1_2);
        }
        else {
            alpha += speed;
            console.log(alpha);
            hid2[0].style.opacity = (alpha / 10);
        }
    }, 54);
}
var time2_2 = null;

function opc2_2() {
    var alpha1 = 10;
    clearInterval(time2_2);
    time2_2 = setInterval(function () {
        var speed1 = 1;
        if (alpha1 == 0) {
            clearInterval(time2_2);
        }
        else {
            alpha1 -= speed1;
            console.log(alpha1);
            hid2[0].style.opacity = alpha1 / 10;
        }
    }, 54)
}
var symbol2 = document.querySelectorAll(".symbol2 li img");
var hid2 = document.querySelectorAll(".hid2");
symbol2[0].onmouseover = function () {
    console.log("1");
    symbol2[0].style.opacity = "1";
    symbol2_li_p[0].style.color = "white";
}
symbol2[0].onmouseout = function () {
    symbol2[0].style.opacity = "0.5";
    symbol2_li_p[0].style.color = "#b5b5b6";
}
symbol2[1].onmouseover = function () {
    symbol2[1].style.opacity = "1";
    opc1_2(10);
    // hid2[0].style.opacity = "1";
    symbol2_li_p[1].style.color = "white";
}
symbol2[1].onmouseout = function () {
    symbol2[1].style.opacity = "0.5";
    opc2_2();
    // hid2[0].style.opacity = "0";
    symbol2_li_p[1].style.color = "#b5b5b6";
}
for (let light_2 = 0; light_2 < connect_2_li_a.length; light_2++) {
    connect_2_li_a[light_2].onmouseover = function () {
        connect_2_li_a[light_2].style.opacity = "1";
    }
    connect_2_li_a[light_2].onmouseout = function () {
        connect_2_li_a[light_2].style.opacity = "0.5";
    }
}
for (let light1_2 = 0; light1_2 < connect1_2_ul_a.length; light1_2++) {
    connect1_2_ul_a[light1_2].onmouseover = function () {
        connect1_2_ul_a[light1_2].style.opacity = "1";
    }
    connect1_2_ul_a[light1_2].onmouseout = function () {
        connect1_2_ul_a[light1_2].style.opacity = "0.5";
    }
}
for (let light2_2 = 0; light2_2 < tecnologe2_a.length; light2_2++) {
    tecnologe2_a[light2_2].onmouseover = function () {
        tecnologe2_a[light2_2].style.opacity = "1";
    }
    tecnologe2_a[light2_2].onmouseout = function () {
        tecnologe2_a[light2_2].style.opacity = "0.5";
    }
}
var symbol3 = document.querySelectorAll(".symbol3 li img");
var hid3 = document.querySelectorAll(".hid3");
var hid4 = document.querySelectorAll(".hid4");
var time1 = null;
// var opct1;

function opc1(opct1) {
    // opct1=1;
    var alpha = 0;
    clearInterval(time1);
    time1 = setInterval(function () {
        var speed = 0;

        if (alpha > opct1) {
            speed = -1;
        }
        if (alpha < opct1) {
            speed = 1;
        }
        else {
            speed = 1;
        }
        if (alpha == 10) {
            clearInterval(time1);
        }
        else {
            alpha += speed;
            console.log(alpha);
            hid4[0].style.opacity = (alpha / 10);
        }
    }, 54);
}
var time2 = null;

function opc2() {
    var alpha1 = 10;
    clearInterval(time2);
    time2 = setInterval(function () {
        var speed1 = 1;
        if (alpha1 == 0) {
            clearInterval(time2);
        }
        else {
            alpha1 -= speed1;
            console.log(alpha1);
            hid4[0].style.opacity = alpha1 / 10;
        }
    }, 54)
}

var time1_1 = null;
// var opct1;

function opc1_1(opct1) {
    // opct1=1;
    var alpha = 0;
    clearInterval(time1_1);
    time1_1 = setInterval(function () {
        var speed = 0;

        if (alpha > opct1) {
            speed = -1;
        }
        if (alpha < opct1) {
            speed = 1;
        }
        else {
            speed = 1;
        }
        if (alpha == 10) {
            clearInterval(time1_1);
        }
        else {
            alpha += speed;
            console.log(alpha);
            hid3[0].style.opacity = (alpha / 10);
        }
    }, 54);
}
var time2_1 = null;

function opc2_1() {
    var alpha1 = 10;
    clearInterval(time2_1);
    time2_1 = setInterval(function () {
        var speed1 = 1;
        if (alpha1 == 0) {
            clearInterval(time2_1);
        }
        else {
            alpha1 -= speed1;
            console.log(alpha1);
            hid3[0].style.opacity = alpha1 / 10;
        }
    }, 54)
}
symbol3[0].onmouseover = function () {
    console.log("1");
    symbol3[0].style.opacity = "1";
    symbol3_li_p[0].style.color = "white";
}
symbol3[0].onmouseout = function () {
    symbol3[0].style.opacity = "0.5";
    symbol3_li_p[0].style.color = "#b5b5b6";
}
symbol3[1].onmouseover = function () {
    symbol3[1].style.opacity = "1";
    opc1_1(10);
    // hid3[0].style.opacity = "1";
    symbol3_li_p[1].style.color = "white";
}
symbol3[1].onmouseout = function () {
    symbol3[1].style.opacity = "0.5";
    opc2_1();
    // hid3[0].style.opacity = "0";
    symbol3_li_p[1].style.color = "#b5b5b6";
}
for (let light_3 = 0; light_3 < connect_3_li_a.length; light_3++) {
    connect_3_li_a[light_3].onmouseover = function () {
        connect_3_li_a[light_3].style.opacity = "1";
    }
    connect_3_li_a[light_3].onmouseout = function () {
        connect_3_li_a[light_3].style.opacity = "0.5";
    }
}
for (let light1_3 = 0; light1_3 < connect1_3_ul_a.length; light1_3++) {
    connect1_3_ul_a[light1_3].onmouseover = function () {
        connect1_3_ul_a[light1_3].style.opacity = "1";
    }
    connect1_3_ul_a[light1_3].onmouseout = function () {
        connect1_3_ul_a[light1_3].style.opacity = "0.5";
    }
}
for (let light2_3 = 0; light2_3 < tecnologe3_a.length; light2_3++) {
    tecnologe3_a[light2_3].onmouseover = function () {
        tecnologe3_a[light2_3].style.opacity = "1";
    }
    tecnologe3_a[light2_3].onmouseout = function () {
        tecnologe3_a[light2_3].style.opacity = "0.5";
    }
}
var symbol4 = document.querySelectorAll(".symbol4 li img");
symbol4[0].onmouseover = function () {
    console.log("1");
    symbol4[0].style.opacity = "1";
    symbol4_li_p[0].style.color = "white";
}
symbol4[0].onmouseout = function () {
    symbol4[0].style.opacity = "0.5";
    symbol4_li_p[0].style.color = "#b5b5b6";
}
symbol4[1].onmouseenter = function () {
    symbol4[1].style.opacity = "1";
    opc1(10);
    // hid4[0].style.opacity="1";
    symbol4_li_p[1].style.color = "white";
}
symbol4[1].onmouseleave = function () {
    symbol4[1].style.opacity = "0.5";
    // hid4[0].style.display = "none";
    opc2();
    // hid4[0].style.opacity="0";
    symbol4_li_p[1].style.color = "#b5b5b6";
}
for (let light_4 = 0; light_4 < connect_4_li_a.length; light_4++) {
    connect_4_li_a[light_4].onmouseover = function () {
        connect_4_li_a[light_4].style.opacity = "1";
    }
    connect_4_li_a[light_4].onmouseout = function () {
        connect_4_li_a[light_4].style.opacity = "0.5";
    }
}
for (let light1_4 = 0; light1_4 < connect1_4_ul_a.length; light1_4++) {
    connect1_4_ul_a[light1_4].onmouseover = function () {
        connect1_4_ul_a[light1_4].style.opacity = "1";
    }
    connect1_4_ul_a[light1_4].onmouseout = function () {
        connect1_4_ul_a[light1_4].style.opacity = "0.5";
    }
}
for (let light2_4 = 0; light2_4 < tecnologe4_a.length; light2_4++) {
    tecnologe4_a[light2_4].onmouseover = function () {
        tecnologe4_a[light2_4].style.opacity = "1";
    }
    tecnologe4_a[light2_4].onmouseout = function () {
        tecnologe4_a[light2_4].style.opacity = "0.5";
    }
}
var a = window.innerWidth;
var b = window.innerHeight;
console.log(b);
console.log(a);

var lists = document.querySelectorAll(".list>div");
var flats = document.querySelectorAll(".flat>div");
for (var fd = 0; fd < lists.length; fd++) {
    console.log(lists[fd].offsetWidth);
    console.log(flats[fd].offsetLeft);
}
var t0 = null;
function ts0() {
    clearInterval(t0);
    t0 = setInterval(function () {
        if (lists[0].style.width >= 0.28 * a + "px") {
            clearInterval(t0);
        }
        else {
            lists[0].style.width = lists[0].offsetWidth + 8 + "px";//10
            flats[0].style.left = flats[0].offsetLeft + 8 + "px";
            lists[1].style.width = lists[1].offsetWidth - 8 + "px";
        }
    }, 30)
}

l1 = document.getElementById("l1");
l2 = document.getElementById("l2");
l3 = document.getElementById("l3");
l4 = document.getElementById("l4");
l4.style.width = a / 4 + "px";
l3.style.width = a / 4 + "px";
l2.style.width = a / 4 + "px";
l1.style.width = a / 4 + "px";
flats[0].style.left = (a * 0.14) + "px";
flats[1].style.left = (a * 0.39) + "px";
flats[2].style.left = (a * 0.64) + "px";
flats[3].style.left = (a * 0.88) + "px";
var t2 = null;
function start() {
    clearInterval(t2);
    t2 = setInterval(function () {
        if (lists[1].style.width >= 0.31 * a + "px") {
            clearInterval(t2);
        }
        else {
            lists[1].style.width = lists[1].offsetWidth + 16 + "px";//20
            flats[0].style.left = flats[0].offsetLeft - 8 + "px";
            flats[1].style.left = flats[1].offsetLeft + 8 + "px";
            lists[2].style.width = lists[2].offsetWidth - 8 + "px";
            lists[0].style.width = lists[0].offsetWidth - 8 + "px";
        }
    }, 30)
}
var t3 = null;
function end() {
    clearInterval(t3);
    t3 = setInterval(function () {
        if (lists[1].style.width <= 0.25 * a + "px") {
            clearInterval(t3);
        }
        else {
            lists[1].style.width = lists[1].offsetWidth - 16 + "px";
            flats[0].style.left = flats[0].offsetLeft + 8 + "px";
            flats[1].style.left = flats[1].offsetLeft - 8 + "px";
            lists[0].style.width = lists[0].offsetWidth + 8 + "px";
            lists[2].style.width = lists[2].offsetWidth + 8 + "px";
        }
    }, 30)
}

var t1 = null;
function ts1() {
    clearInterval(t1);
    t1 = setInterval(function () {
        if (lists[0].style.width <= 0.25 * a + "px") {
            clearInterval(t1);
        }
        else {
            lists[0].style.width = lists[0].offsetWidth - 8 + "px";
            flats[0].style.left = flats[0].offsetLeft - 8 + "px";
            lists[1].style.width = lists[1].offsetWidth + 8 + "px";
        }
    }, 30)
}
lists[0].onmouseover = function () {
    ts0();
}
lists[0].onmouseout = function () {
    ts1();
}
lists[1].onmouseover = function () {
    start();
}
lists[1].onmouseout = function () {
    end();
}
var t4 = null;
function start1() {
    clearInterval(t4);
    t4 = setInterval(function () {
        if (lists[2].style.width >= 0.31 * a + "px") {
            clearInterval(t4);
        }
        else {
            lists[2].style.width = lists[2].offsetWidth + 16 + "px";
            flats[1].style.left = flats[1].offsetLeft - 8 + "px";
            flats[2].style.left = flats[2].offsetLeft + 8 + "px";
            lists[3].style.width = lists[3].offsetWidth - 8 + "px";
            lists[1].style.width = lists[1].offsetWidth - 8 + "px";
        }
    }, 30)
}
var t5 = null;
function end1() {
    clearInterval(t5);
    t5 = setInterval(function () {
        if (lists[2].style.width <= 0.25 * a + "px") {
            clearInterval(t5);
        }
        else {
            lists[2].style.width = lists[2].offsetWidth - 16 + "px";
            flats[1].style.left = flats[1].offsetLeft + 8 + "px";
            flats[2].style.left = flats[2].offsetLeft - 8 + "px";
            lists[1].style.width = lists[1].offsetWidth + 8 + "px";
            lists[3].style.width = lists[3].offsetWidth + 8 + "px";
        }
    }, 30)
}
lists[2].onmouseenter = function () {
    start1();
}
lists[2].onmouseleave = function () {
    end1();
}
var t7 = null;
function start2() {
    clearInterval(t7);
    t7 = setInterval(function () {
        if (lists[3].style.width >= 0.28 * a + "px") {
            clearInterval(t7);
        }
        else {
            lists[3].style.width = lists[3].offsetWidth + 8 + "px";
            flats[2].style.left = flats[2].offsetLeft - 8 + "px";
            lists[2].style.width = lists[2].offsetWidth - 8 + "px";
        }
    }, 30)
}
var t8 = null;
function end2() {
    clearInterval(t8);
    t8 = setInterval(function () {
        if (lists[3].style.width <= 0.25 * a + "px") {
            clearInterval(t8);
        }
        else {
            lists[3].style.width = lists[3].offsetWidth - 8 + "px";
            flats[2].style.left = flats[2].offsetLeft + 8 + "px";
            lists[2].style.width = lists[2].offsetWidth + 8 + "px";
        }
    }, 30)
}
lists[3].onmouseenter = function () {
    start2();
}
lists[3].onmouseleave = function () {
    end2();
}
var i1 = document.querySelectorAll(".i1");
var i3 = document.querySelectorAll(".i3>img");
var i2 = document.querySelectorAll(".i2");
var i4 = document.querySelectorAll(".i4>img");
var i1_p = document.querySelectorAll(".i1>p");
var i2_p = document.querySelectorAll(".i2>p");
var i3_div = document.querySelectorAll(".i3>div");
var i4_div = document.querySelectorAll(".i4>div");
var i3_div_p_a = document.querySelectorAll(".i3>div>p>a");
var i4_div_p_a = document.querySelectorAll(".i4>div>p>a");
var time5 = null;
function opc5() {
    var width5 = 100;
    var height5 = 100;
    var height6 = 100;
    var width6 = 100;
    var right6 = 290;
    var right7 = 350;
    clearInterval(time5);
    time5 = setInterval(function () {
        if ((width5 >= 110 && height5 >= 110) || (width6 <= 90 && height6 <= 90) || (right6 >= 310) || (right7 >= 400)) {
            clearInterval(time5);
        }
        else {
            height5 += 1;
            width5 += 1;
            height6 -= 1;
            width6 -= 1;
            right6 += 2;
            right7 += 5;
            i1[0].style.width = width5 + "%";//110
            i1[0].style.height = height5 + "%";//110
            i3[0].style.width = width6 + "%";//90
            i3[0].style.height = height6 + "%";//90
            i1_p[0].style.right = (right6 / 10) + "%";//310
            i3_div[0].style.right = (right7 / 10) + "%";//400
        }
    }, 30)
}
i3[0].onmouseover = function () {
    i3_div[0].style.backgroundColor = "white";
    i3_div_p_a[0].style.color = "#C69253";
}
i3[0].onmouseout = function () {
    i3_div[0].style.backgroundColor = "";
    i3_div_p_a[0].style.color = "";
}
var time5_1 = null;
function opc5_1() {
    var width5_1 = 110;
    var height5_1 = 110;
    var height6_1 = 90;
    var width6_1 = 90;
    var right6_1 = 310;
    var right7_1 = 400;
    clearInterval(time5_1);
    time5_1 = setInterval(function () {
        if ((width5_1 <= 100 && height5_1 <= 100) || (width6_1 >= 100 && height6_1 >= 100) || (right6_1 <= 290) || (right7_1 <= 350)) {
            clearInterval(time5_1);
        }
        else {
            height5_1 -= 1;
            width5_1 -= 1;
            height6_1 += 1;
            width6_1 += 1;
            right6_1 -= 2;
            right7_1 -= 5;
            i1[0].style.width = width5_1 + "%";//100
            i1[0].style.height = height5_1 + "%";//100
            i3[0].style.width = width6_1 + "%";//100
            i3[0].style.height = height6_1 + "%";//100
            i1_p[0].style.right = (right6_1 / 10) + "%";//290
            i3_div[0].style.right = (right7_1 / 10) + "%";//350
        }
    }, 30)
}
i1[0].onmouseenter = function () {
    opc5();
}
i1[0].onmouseleave = function () {
    opc5_1();
}
var time6 = null;
function opc6() {
    var width7 = 100;
    var height7 = 100;
    var height8 = 100;
    var width8 = 100;
    var right8 = 315;
    var right9 = 350;
    clearInterval(time6);
    time6 = setInterval(function () {
        if ((width7 >= 110 && height7 >= 110) || (width7 <= 90 && height7 <= 90) || (right8 >= 325) || (right9 >= 400)) {
            clearInterval(time6);
        }
        else {
            height7 += 1;
            width7 += 1;
            height8 -= 1;
            width8 -= 1;
            right8 += 1;
            right9 += 5;
            i2[0].style.width = width7 + "%";//110
            i2[0].style.height = height7 + "%";//110
            i4[0].style.width = width8 + "%";//90
            i4[0].style.height = height8 + "%";//90
            i2_p[0].style.right = (right8 / 10) + "%";//310
            i4_div[0].style.right = (right9 / 10) + "%";//400
        }
    }, 30)
}
var time6_1 = null;
function opc6_1() {
    var width7_1 = 110;
    var height7_1 = 110;
    var height8_1 = 90;
    var width8_1 = 90;
    var right8_1 = 325;
    var right9_1 = 400;
    clearInterval(time6_1);
    time6_1 = setInterval(function () {
        if ((width7_1 <= 100 && height7_1 <= 100) || (width8_1 >= 100 && height8_1 >= 100) || (right8_1 <= 315) || (right9_1 <= 350)) {
            clearInterval(time6_1);
        }
        else {
            height7_1 -= 1;
            width7_1 -= 1;
            height8_1 += 1;
            width8_1 += 1;
            right8_1 -= 1;
            right9_1 -= 5;
            i2[0].style.width = width7_1 + "%";//100
            i2[0].style.height = height7_1 + "%";//100
            i4[0].style.width = width8_1 + "%";//100
            i4[0].style.height = height8_1 + "%";//100
            i2_p[0].style.right = (right8_1 / 10) + "%";//290
            i4_div[0].style.right = (right9_1 / 10) + "%";//350
        }
    }, 30)
}
i2[0].onmouseenter = function () {
    opc6();
}
i2[0].onmouseleave = function () {
    opc6_1();
}
i4[0].onmouseover = function () {
    i4_div[0].style.backgroundColor = "white";
    i4_div_p_a[0].style.color = "#E18582";
}
i4[0].onmouseout = function () {
    i4_div[0].style.backgroundColor = "";
    i4_div_p_a[0].style.color = "";
}
// var act_1=document.querySelectorAll(".act_1");
// var act_2=document.querySelectorAll(".act_2")
var _act1 = document.querySelectorAll(".act1");
var _act2 = document.querySelectorAll(".act2");
var act1 = document.querySelectorAll(".act1>img");
var act2 = document.querySelectorAll(".act2>img");
var water1 = document.querySelectorAll(".water1>img");
var water2 = document.querySelectorAll(".water2>img");
var water1_div = document.querySelectorAll(".water1>div");
var water2_div = document.querySelectorAll(".water2>div");
var water1_div_p_a = document.querySelectorAll(".water1>div>p>a");
var water2_div_p_a = document.querySelectorAll(".water2>div>p>a");
var act1_p = document.querySelectorAll(".act1>p");
var act2_p = document.querySelectorAll(".act2>p");
var water_1 = document.querySelectorAll(".water1");
var water_2 = document.querySelectorAll(".water2");
var s0 = null;
function d0() {
    var f0 = 1000;
    var g0 = 1000;
    var j0 = 400;
    var k0 = 400;
    var f1 = 380;
    var g1 = -47;
    var j1 = 64;
    var k1 = 316;
    s0 = setInterval(function () {
        if (f0 >= 1030) {
            clearInterval(s0);
        }
        else {
            f0 += 1;
            g0 += 1;
            j0 -= 6.7;
            k0 -= 6.7;
            f1 -= 3;
            g1 += 7.6;
            j1 -= 1.5;
            k1 -= 2;
            act1[0].style.width = (f0 / 10) + "%";
            act1[0].style.height = (g0 / 10) + "%";
            water1[0].style.width = j0 + "px";
            water1[0].style.height = k0 + "px";
            water1_div[0].style.left = (f1 / 10) + "%";
            water_1[0].style.top = g1 + "px";
            act1_p[0].style.bottom = j1 + "%";
            act1_p[0].style.left = (k1 / 10) + "%";
        }
    }, 20)
}
function change1() {
    act1[0].style.width = "103%";
    act1[0].style.height = "103%";
    water1[0].style.width = "200px";
    water1[0].style.height = "200px";
    // water1[0].style.top = "200px";
    water1_div[0].style.left = "28.5%";
    water_1[0].style.top = "180px";
    act1_p[0].style.bottom = "18%";
    act1_p[0].style.left = "25.5%";
}
function change2() {
    act1[0].style.width = "100%";
    act1[0].style.height = "100%";
    water1[0].style.width = "400px";
    water1[0].style.height = "400px";
    // water1[0].style.top = "-47px";
    water1_div[0].style.left = "37.5%";
    water_1[0].style.top = "-47px";
    act1_p[0].style.bottom = "62%";
    act1_p[0].style.left = "31.6%";
}
var s1 = null;
function d1() {
    var f0_1 = 1030;
    var g0_1 = 1030;
    var j0_1 = 200;
    var k0_1 = 200;
    var f1_1 = 290;
    var g1_1 = 180;
    var j1_1 = 18;
    var k1_1 = 260;
    s1 = setInterval(function () {
        if (f0_1 <= 1000) {
            clearInterval(s1);
        }
        else {
            f0_1 -= 1;
            g0_1 -= 1;
            j0_1 += 6.7;
            k0_1 += 6.7;
            f1_1 += 3;
            g1_1 -= 7.6;
            j1_1 += 1.5;
            k1_1 += 2;
            act1[0].style.width = (f0_1 / 10) + "%";
            act1[0].style.height = (g0_1 / 10) + "%";
            water1[0].style.width = j0_1 + "px";
            water1[0].style.height = k0_1 + "px";
            water1_div[0].style.left = (f1_1 / 10) + "%";
            water_1[0].style.top = g1_1 + "px";
            act1_p[0].style.bottom = j1_1 + "%";
            act1_p[0].style.left = (k1_1 / 10) + "%";
        }
    }, 20)
}
_act1[0].onmouseenter = function () {
    d0();
}
_act1[0].onmouseleave = function () {
    d1();
}
var s3 = null;
function d3() {
    var f2_1 = 1030;
    var g2_1 = 1030;
    var j2_1 = 200;
    var k2_1 = 200;
    var f3_1 = 290;
    var g3_1 = 140;
    var j3_1 = 30;
    var k3_1 = 210;
    s3 = setInterval(function () {
        if (f2_1 <= 1000) {
            clearInterval(s3);
        }
        else {
            f2_1 -= 1;
            g2_1 -= 1;
            j2_1 += 6.7;
            k2_1 += 6.7;
            f3_1 += 3;
            g3_1 -= 7.6;
            j3_1 += 1.5;
            k3_1 += 2;
            act2[0].style.width = (f2_1 / 10) + "%";
            act2[0].style.height = (g2_1 / 10) + "%";
            water2[0].style.width = j2_1 + "px";
            water2[0].style.height = k2_1 + "px";
            water2_div[0].style.left = (f3_1 / 10) + "%";
            water_2[0].style.top = g3_1 + "px";
            act2_p[0].style.bottom = j3_1 + "%";
            act2_p[0].style.right = (k3_1 / 10) + "%";
        }
    }, 20)
}
var s2 = null;
function d2() {
    var f2 = 1000;
    var g2 = 1000;
    var j2 = 400;
    var k2 = 400;
    var f3 = 380;
    var g3 = -69;
    var j3 = 76;
    var k3 = 263;
    s2 = setInterval(function () {
        if (f2 >= 1030) {
            clearInterval(s2);
        }
        else {
            f2 += 1;
            g2 += 1;
            j2 -= 6.7;
            k2 -= 6.7;
            f3 -= 3;
            g3 += 7.6;
            j3 -= 1.5;
            k3 -= 2;
            act2[0].style.width = (f2 / 10) + "%";
            act2[0].style.height = (g2 / 10) + "%";
            water2[0].style.width = j2 + "px";
            water2[0].style.height = k2 + "px";
            water2_div[0].style.left = (f3 / 10) + "%";
            water_2[0].style.top = g3 + "px";
            act2_p[0].style.bottom = j3 + "%";
            act2_p[0].style.right = (k3 / 10) + "%";
        }
    }, 20)
}
water1[0].onmouseover = function () {
    //     change1();
    water1_div[0].style.backgroundColor = "white";
    water1_div_p_a[0].style.color = "#E76B64";
}
water1[0].onmouseout = function () {
    //     change2();
    water1_div[0].style.backgroundColor = "";
    water1_div_p_a[0].style.color = "white";
}
water1_div[0].onmouseover = function () {
    //     change1();
    water1_div[0].style.backgroundColor = "white";
    water1_div_p_a[0].style.color = "#E76B64";
}
water1_div[0].onmouseout = function () {
    //     change2();
    water1_div[0].style.backgroundColor = "";
    water1_div_p_a[0].style.color = "white";
}
act1_p[0].onmouseover = function () {
    //     change1();
    water1_div[0].style.backgroundColor = "white";
    water1_div_p_a[0].style.color = "#E76B64";
}
act1_p[0].onmouseout = function () {
    //     change2();
    water1_div[0].style.backgroundColor = "";
    water1_div_p_a[0].style.color = "white";
}
function change3() {
    act2[0].style.width = "103%";
    act2[0].style.height = "103%";
    water2[0].style.width = "200px";
    water2[0].style.height = "200px";
    water2_div[0].style.right = "27.5%";
    water_2[0].style.top = "140px";
    act2_p[0].style.bottom = "30%";
    act2_p[0].style.right = "20%";
}
function change4() {
    act2[0].style.width = "100%";
    act2[0].style.height = "100%";
    water2[0].style.width = "400px";
    water2[0].style.height = "400px";
    water2_div[0].style.right = "38%";
    water_2[0].style.top = "-47px";
    act2_p[0].style.bottom = "76%";
    act2_p[0].style.right = "26.5%";
}
_act2[0].onmouseenter = function () {
    d2();
    // change3();
}
_act2[0].onmouseleave = function () {
    d3();
    // change4();
}
water2[0].onmouseenter = function () {
    // change3();
    water2_div[0].style.backgroundColor = "white";
    water2_div_p_a[0].style.color = "#71B9E0";
}
water2[0].onmouseleave = function () {
    // change4();
    water2_div[0].style.backgroundColor = "";
    water2_div_p_a[0].style.color = "white";
}
water2_div[0].onmouseenter = function () {
    // change3();
    water2_div[0].style.backgroundColor = "white";
    water2_div_p_a[0].style.color = "#71B9E0";
}
water2_div[0].onmouseleave = function () {
    // change4();
    water2_div[0].style.backgroundColor = "";
    water2_div_p_a[0].style.color = "white";
}
act2_p[0].onmouseenter = function () {
    // change3();
    water2_div[0].style.backgroundColor = "white";
    water2_div_p_a[0].style.color = "#71B9E0";
}
act2_p[0].onmouseleave = function () {
    // change4();
    water2_div[0].style.backgroundColor = "";
    water2_div_p_a[0].style.color = "white";
}
var cod3_li_a = document.querySelectorAll(".cod3>li>a");
for (let underline = 0; underline < cod3_li_a.length; underline++) {
    cod3_li_a[underline].onmouseover = function () {
        cod3_li_a[underline].style.textDecoration = "underline";
    }
    cod3_li_a[underline].onmouseout = function () {
        cod3_li_a[underline].style.textDecoration = "none";
    }
}
var icon_li = document.querySelectorAll("#icon>li");
var first = 0;
console.log(icon_li);
for (let pic = 0; pic < icon_li.length; pic++) {
    icon_li[pic].onclick = function () {
        first = pic;
        if (pic == 0) {
            document.getElementById("pic0").src = "img/35.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
            wheelPlanting.style.top = -0 * 100 + "vh";
            wheelPlanting.style.transition = "1.5s ease";
        }
        if (pic == 1) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/35.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
            wheelPlanting.style.top = -1 * 100 + "vh";
            wheelPlanting.style.transition = "1.5s ease";
        }
        if (pic == 2) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/35.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
            wheelPlanting.style.top = -2 * 100 + "vh";
            wheelPlanting.style.transition = "1.5s ease";
        }
        if (pic == 3) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/35.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/34.png";
            wheelPlanting.style.top = -3 * 100 + "vh";
            wheelPlanting.style.transition = "1.5s ease";
        }
        if (pic == 4) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/35.png";
            document.getElementById("pic5").src = "img/34.png";
            wheelPlanting.style.top = -4 * 100 + "vh";
            wheelPlanting.style.transition = "1.5s ease";
        }
        if (pic == 5) {
            document.getElementById("pic0").src = "img/34.png";
            document.getElementById("pic1").src = "img/34.png";
            document.getElementById("pic2").src = "img/34.png";
            document.getElementById("pic3").src = "img/34.png";
            document.getElementById("pic4").src = "img/34.png";
            document.getElementById("pic5").src = "img/35.png";
            wheelPlanting.style.top = -5 * 100 + "vh";
            wheelPlanting.style.transition = "1.5s ease";
        }
    }
}
var time1_5 = null;
// var opct1;

function opc1_5(opct1) {
    // opct1=1;
    var alpha = 0;
    clearInterval(time1_5);
    time1_5 = setInterval(function () {
        var speed = 0;

        if (alpha > opct1) {
            speed = -1;
        }
        if (alpha < opct1) {
            speed = 1;
        }
        else {
            speed = 1;
        }
        if (alpha == 10) {
            clearInterval(time1_5);
        }
        else {
            alpha += speed;
            console.log(alpha);
            log2_div[0].style.opacity = (alpha / 10);
        }
    }, 54);
}
var time2_5 = null;

function opc2_5() {
    var alpha1 = 10;
    clearInterval(time2_5);
    time2_5 = setInterval(function () {
        var speed1 = 1;
        if (alpha1 == 0) {
            clearInterval(time2_5);
        }
        else {
            alpha1 -= speed1;
            console.log(alpha1);
            log2_div[0].style.opacity = alpha1 / 10;
        }
    }, 54)
}
var log1_img = document.querySelectorAll(".log1>img");
var log2_img = document.querySelectorAll(".log2>img");
var log2_div = document.querySelectorAll(".log2>div");
var log1_p = document.querySelectorAll(".log1>p");
var log2_p = document.querySelectorAll(".log2>p");
var log1 = document.querySelectorAll(".log1");
var log2 = document.querySelectorAll(".log2");
var join_li_a = document.querySelectorAll(".join>li>a");
var security_p_a = document.querySelectorAll(".security>p>a");
log1[0].onmouseover = function () {
    log1_img[0].style.opacity = "1";
    log1_p[0].style.color = "#fff";
    log1[0].style.cursor = "pointer";
}
log1[0].onmouseout = function () {
    log1_img[0].style.opacity = "0.5";
    log1_p[0].style.color = "#B5B5B6";
    log1[0].style.cursor = "";
}
log2[0].onmouseover = function () {
    log2_img[0].style.opacity = "1";
    log2_p[0].style.color = "#fff";
    opc1_5(10);
    log2[0].style.cursor = "pointer";
}
log2[0].onmouseout = function () {
    log2_img[0].style.opacity = "0.5";
    log2_p[0].style.color = "#B5B5B6";
    opc2_5();
    log2[0].style.cursor = "";
}
for (let mouse = 0; mouse < join_li_a.length; mouse++) {
    join_li_a[mouse].onmouseover = function () {
        join_li_a[mouse].style.color = "#fff";
    }
    join_li_a[mouse].onmouseout = function () {
        join_li_a[mouse].style.color = "#B5B5B6";
    }
}
for (let number1 = 0; number1 < security_p_a.length; number1++) {
    security_p_a[number1].onmouseover = function () {
        security_p_a[number1].style.color = "#fff";
    }
    security_p_a[number1].onmouseout = function () {
        security_p_a[number1].style.color = "#B5B5B6";
    }
}

