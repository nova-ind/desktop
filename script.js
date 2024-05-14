console.log("%c NovaOS Initialised!!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
import './libraries/foxywm.js';
import './libraries/foxyfs.js';
import './libraries/novaOS.js';
import './libraries/novacast.js'
window.clickSfx = new (Audio)
clickSfx.src = "assets/click.mp3"
var topBar = $(".bar")
function appOpen(app) {
    wm.windows.default(app)
}
let timeout;
document.querySelector("#whalecumLaunch").addEventListener("click", function () { appOpen("whalecum") })
document.querySelector("#wclose").addEventListener("click", function () { wm.windows.close(window.lastWin.id) })
document.querySelector("#wmax").addEventListener("click", function () { wm.windows.maximise(window.lastWin.id) })
document.querySelector("#wclose").addEventListener("click", function () { wm.windows.close(window.lastWin.id) })
wm.events.setOnEnter(
    function () {
        $("#WindowTitle")[0].innerText = wm.windows.getName("fwm.current");
        $("#wb")[0].setAttribute("class", "");
        clearTimeout(timeout);
})
function isScrollable(element) {
    if(element.scrollWidth > element.clientWidth && element.scrollHeight > element.clientHeight){
        return "all"
    } else if(element.scrollWidth > element.clientWidth){
        return "hor"
    } else if(element.scrollHeight > element.clientHeight){
        return "vert"
    } else {
        return "no"
    }
};
wm.events.setOnClose(function () { $("#WindowTitle")[0].innerText = "NovaOS"; $("#wb")[0].setAttribute("class", "noWin") })
document.addEventListener("mousemove", function (e) {
    setTimeout(function () {
        if(isScrollable(e.srcElement) == "vert"){
            e.srcElement.style.cursor = "url ('../assets/vscroll.cur')"
        }  else if(isScrollable(e.srcElement) == "hor"){
            e.srcElement.style.cursor = "url ('../assets/hscroll.cur')"
        } else if(isScrollable(e.srcElement) == "all"){}
        document.querySelector(".cur").style.top = `${e.clientY}px`
        // console.log(e)
        document.querySelector(".cur").style.left = `${e.clientX}px`
        if (e.srcElement.classList.contains("clickable")) {
            document.querySelector(".cur").style.background = "#0000FF";
        }
        else {
            document.querySelector(".cur").style.background = "#FFFFFF"
        }
    }, 0)
})
wm.events.setOnLeave(function () {
    timeout = setTimeout(() => {
        $("#WindowTitle")[0].innerText = "NovaOS";
        $("#wb")[0].setAttribute("class", "noWin")
    }, 2000);
})
$(".message")[0].addEventListener("click", function () {
    appOpen("cvm")
})
document.onclick = function (e) {
    if (e.target.classList.contains("clickable")) {
        clickSfx.play()
    }
}

// window.onbeforeunload = function() {
//     var message = 'Do you want to leave this page?';
//     return message;
// }
wm.config.setWContainer(".bgcover")
setInterval(function () { document.body.scrollTo(0, 0) }, 100)
topBar[0].addEventListener("mouseenter", function () {
    $("#WindowTitle")[0].innerText = wm.windows.getName("fwm.current");
    $("#wb")[0].setAttribute("class", "");
    clearTimeout(timeout);
})
topBar[0].addEventListener("mouseleave", function () {
    timeout = setTimeout(() => {
        $("#WindowTitle")[0].innerText = "NovaOS";
        $("#wb")[0].setAttribute("class", "noWin")
    }, 2000);
})

wm.windows.default("fm")