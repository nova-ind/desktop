import './libraries/foxywm.js';
import './libraries/foxyfs.js';
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
wm.events.setOnClose(function () { $("#WindowTitle")[0].innerText = "NovaOS"; $("#wb")[0].setAttribute("class", "noWin") })
document.addEventListener("mousemove", function (e) {
    setTimeout(function () {
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