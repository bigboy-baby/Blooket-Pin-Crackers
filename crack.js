// ==UserScript==
// @name         Blooket Cracker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cracks Blooket Game Pins.
// @author       bigboybigboi#0001
// @match        https://www.blooket.com/play
// @match        https://dashboard.blooket.com/play
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


function menu() {
    var div = document.createElement("div");
    div.setAttribute("id", "menuM");
    div.style="border-radius:10px; background-color:white; border: 2px solid blue; margin: auto; position: fixed; text-align: center; top:10%;  left: 39.5%; width: 400px; height: 450px; bottom:10px;";
    div.innerHTML="<h1>Blooket Cracker</h1><strong>by bigboybigboi#0001</strong>";

    var spc = document.createElement("div");
    spc.innerHTML="&nbsp;";
    div.appendChild(spc);

    var p1 = document.createElement("button");
    p1.style="background-color:grey; color:white; padding:10px; border-radius:10px; border:none; cursor:pointer;";
    p1.innerHTML="Start";
    p1.onclick = function() {
        function json(url) {
            return fetch(url).then(res => res.json());
        }

        let ck = setInterval(function() {
            var game = Math.floor(100000 + Math.random() * 900000);
            json(`https://fb.blooket.com/c/firebase/id?id=${game}`).then(data => {
                if (data.success == true) {
                    console.log(`%c${game} is valid`, "color: green");
                    var pp1 = document.getElementById("tb").value;
                    var full = pp1 + game + "\n"
                    document.getElementById("tb").value = full;
                }
            });
        }, 1)
    }

    div.appendChild(p1);

    var p2 = document.createElement("button");
    p2.style="background-color:grey; color:white; padding:10px; border-radius:10px; border:none; cursor:pointer;";
    p2.innerHTML="Stop";
    p2.onclick = function() {
        (function(w){w = w || window; var i = w.setInterval(function(){},100000); while(i>=0) { w.clearInterval(i--); }})(/*window*/);
    }
    div.appendChild(p2);

    var spc2 = document.createElement("div");
    spc2.innerHTML="&nbsp;";
    div.appendChild(spc2);

    var txt = document.createElement("p");
    txt.innerHTML="Valid Pins";
    div.appendChild(txt)

    var box = document.createElement("textarea");
    box.style="height:180px; resize: none; border:2px solid black;";
    box.setAttribute("readonly", "");
    box.setAttribute("id", "tb");
    div.appendChild(box);

    var icon = document.createElement("div");
    icon.style="filter:none !important; right:5px; top:0px; position:absolute; cursor:pointer;";
    icon.setAttribute("id", "closeM");
    icon.setAttribute("class", "menu");
    icon.innerHTML="<p id='close' style='height:20px;width:30px;'>X</p>";
    div.appendChild(icon);

    document.body.appendChild(div);

    document.getElementById("closeM").addEventListener('click', function() {
        var menuClose = document.getElementById("closeM");
        var menuClose2 = document.getElementById("menuM");
        menuClose.remove();
        menuClose2.remove();
    });
}

document.onkeydown = keydown;

function keydown(event) {
        var code;
        var e;
        if (document.all) {
            if (!event) {
                var e = window.event;
                code = e.keyCode;
            }
        }
        else if (event.which) {
            code = event.which;
            e = event;
        }
        if (code == 27) {
            menu()
        }
};
