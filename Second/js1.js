        //  轮播图图片数组
        var imgs = document.getElementById("imglist").getElementsByTagName("li");
        //  对应的logo数组
        var indx = document.getElementById("index11").getElementsByTagName("li");
        //  初始化偏移量
        var left = 0;
        imglist.style.marginLeft = left + "px";
        //  定时器
        var timer;
        walk();

        //  轮播函数
        function walk() {
            //  重置轮播下标index
            if (left <= -4545) {
                imglist.style.marginLeft = "0px";
                left = 0;
            }
            var n = (left % 1515 == 0) ? 3000 : 0;
            changeimg();
            var m = Math.floor(-left / 1515);
            changeindx(m);
            left -= 5;
            timer = setTimeout(walk, n);
        }

        //  轮播图滚动函数
        function changeimg() {
            imglist.style.marginLeft = left + "px";
        }

        //  logo选中样式函数
        function changeindx(m) {
            for (var i = 0; i < indx.length; i++) {
                indx[i].style.backgroundColor = "";
            }
            indx[m].style.backgroundColor = "rgb(44,151,232)";
        }

        //  初始化函数
        function init(){
            for (var i = 0; i < indx.length; i++) {
                (function (i) {
                    indx[i].onmousedown = function () {
                        clearTimeout(timer);
                        left = -i * 1515;
                        changeimg();
                        changeindx(i);
                    }
                    indx[i].onmouseup = function () {
                        walk();
                    }
                })(i)
            }
        }

        init();
        

        var picturesroll = document.getElementById("pictureroll").getElementsByTagName("li");
        var logo = document.getElementById("logos").getElementsByTagName("li");
        var l = 0;
        pictureroll.style.marginLeft = l + "px";
        var timers;
        run();

        var q;
        function run() {
            var r = (l % 1345 == 0) ? 5000 : 0;
            if (l <= -4035) {
                pictureroll.style.marginLeft = l + "0px";
                l = 0;
            }
            l -= 5;
            timers = setTimeout(run, r);
            e();
            q = Math.floor(-l / 1345);
            console.log(q);
            // ne();
            cp(q);
        }

        function e() {
            pictureroll.style.marginLeft = l + "px";
        }

        // function ne() {
        //     for (var i = 0; i < logo.length; i++) {
        //         logo[i].style.background = "";
        //     }
        //     cp(q);
        // }

        //  使用es6 let 局部定义  可以解决闭包传值问题
        for (let i = 0; i < logo.length; i++) {
            // (function (i) {
                logo[i].onmouseenter = function () {
                    clearTimeout(timers);
                    // l = -i * 1345;
                    // e();

                    //  轮播背景更改
                    cp(i);  
                    //  根据鼠标指向下标 更改轮播顺序
                    q=i;
                    l = -i * 1345;
                }
                logo[i].onmouseout = function () {
                    run();
                }
            // })(i)
        }

        function cp(q) {
            var initImg = ["url(img/22.png)", "url(img/24.png)", "url(img/26.png)"];
            initImg.forEach((item, index) => {
                logo[index].style.backgroundImage =  item;
            })

            if (q == 0) {
                logo[0].style.backgroundImage = "url(img/21.png)";
            } else if (q == 1) {
                logo[1].style.backgroundImage = "url(img/23.png)";
            } else if (q == 2) {
                logo[2].style.backgroundImage = "url(img/25.png)";
            }

        }
