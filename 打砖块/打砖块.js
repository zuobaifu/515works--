var start = document.getElementById("start");
var n = 0;
var score = document.getElementById("score");
window.onload = function () {
    var speedX = 0;
    var speedY = 0;
    var ball = document.getElementById("ball");
    if (n >= 0 && n <= 25) {
        speedX = 7/*parseInt(Math.random() * 4) + 3*/;
        speedY = -7/*(parseInt(Math.random() * 4) + 3)*/;
    }

    function changeColor() {
        var str = "rgb(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ")";
        return str;
    }
    console.log(changeColor());
    //小球弹动
    start.onclick = function () {
        let timer1 = setInterval(function level() {
            // console.log(ball.offsetLeft);
            if (ball.offsetLeft >= 580) {
                speedX *= -1;
            }
            if (ball.offsetLeft < 0) {
                speedX *= -1;
            }
            if (konck(ball, baffle)) {
                speedX *= 1.05;
                baffle.style.backgroundColor = changeColor();
                ball.style.backgroundColor = changeColor();
                for (var i = 0; i < bricks.length; i++) {
                    bricks[i].style.backgroundColor = changeColor();
                }
            }
            ball.style.left = ball.offsetLeft + speedX + "px";

        }, 30);
        setInterval(function vertical() {
            // console.log(ball.offsetTop);
            if (ball.offsetTop >= 580) {
                speedY *= -1;
            }
            if (ball.offsetTop < 0) {
                speedY *= -1;
            }
            if (konck(ball, baffle)) {
                speedY *= -1.05;
            }
            for (var i = 0; i < bricks.length; i++) {
                if (konck(ball, bricks[i])) {
                    speedY *= -1;
                    brick.removeChild(bricks[i]);
                    n++;
                    break;
                }
            }
            score.innerHTML = "得分:" + n;
            if (ball.offsetTop >= 580) {
                alert("GAME OVER" + "\n" + "您的" + score.innerHTML);

                clearInterval(timer1);
                window.location.reload();
            }
            ball.style.top = ball.offsetTop + speedY + "px";

        }, 30);
        let timer = setInterval(function test() {
            if (n == 63) {
                alert("恭喜你完成挑战" + "\n" + "点击确定继续");
                clearInterval(timer);
                window.location.reload();

            }
        });
        //实现拖拽
        var baffle = document.getElementById("baffle");
        var screen = document.getElementById("screen");
        baffle.onmousedown = function (ev) {
            var ev = ev || window.event;
            var x = ev.clientX - baffle.offsetLeft;
            document.onmousemove = function (ev) {
                var l = ev.clientX - x;
                if (l <= 0) {
                    l = 0;
                }
                if (l >= 500) {
                    l = 500;
                }
                baffle.style.left = l + "px";
                return false;
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }
        }
        start.onclick = null;
    }
    score.innerHTML = "得分:" + n;
    //创造砖块
    var brick = document.getElementById("brick");
    var bricks = brick.getElementsByTagName('div');
    for (var i = 1; i < 11; i++) {
        for (var j = 0; j < i; j++) {
            var tag1 = document.createElement("div");
            tag1.style.left = 270 - (i - 1) * 30 + j * 60 + "px";
            tag1.style.top = 30 * i + "px";
            brick.appendChild(tag1);
            tag1.style.backgroundColor = "red";
        }
    }
    for (var i = 0; i < 2; i++) {
        var tag2 = this.document.createElement("div");
        tag2.style.left = i * 60 + "px";
        brick.appendChild(tag2);
        tag2.style.backgroundColor = "red";
    }
    for (var i = 0; i < 2; i++) {
        var tag3 = this.document.createElement("div");
        tag3.style.left = 480 + i * 60 + "px";
        brick.appendChild(tag3);
        tag3.style.backgroundColor = "red";
    }
    for (var i = 1; i < 3; i++) {
        var tag4 = this.document.createElement("div");
        tag4.style.left = 0 + "px";
        tag4.style.top = 22 * i + "px";
        brick.appendChild(tag4);
        tag4.style.backgroundColor = "red";
    }
    for (var i = 1; i < 3; i++) {
        var tag5 = this.document.createElement("div");
        tag5.style.left = 540 + "px";
        tag5.style.top = 22 * i + "px";
        brick.appendChild(tag5);
        tag5.style.backgroundColor = "red";
    }
    for (var i = 0; i < bricks.length; i++) {
        bricks[i].style.position = "absolute";
    }
    //碰撞
    function konck(node1, node2) {
        var l1 = node1.offsetLeft;
        var r1 = node1.offsetLeft + node1.offsetWidth;
        var t1 = node1.offsetTop;
        var b1 = node1.offsetTop + node1.offsetHeight;

        var l2 = node2.offsetLeft;
        var r2 = node2.offsetLeft + node2.offsetWidth;
        var t2 = node2.offsetTop;
        var b2 = node2.offsetTop + node2.offsetHeight;

        if (l1 > r2 || r1 < l2 || t1 > b2 || b1 < t2) {
            return false;
        } else {
            return true;
        }
    }
}
