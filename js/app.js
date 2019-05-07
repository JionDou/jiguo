window.onload = function () {
        var topbtn = document.getElementById("back-top");
        var timer = null;
        var pagelookHeight = document.documentElement.clientHeight;

        window.onscroll = function(){
            var backtop = document.body.scrollTop;
            if (backtop >= pagelookHeight){
                topbtn.style.display = "block";
            }else {
                topbtn.style.display = "none";
            }
        };
        topbtn.onclick = function () {
            timer = setInterval(function () {
                var backtop = document.body.scrollTop;
                var speedtop = backtop/5;
                document.body.scrollTop = backtop - speedtop;
                if (backtop == 0){
                    clearInterval(timer);
                }
            },30);
        }
    };
