import foxyWM from './libraries/foxywm.js';
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
    document.querySelector(".cur").style.top = `${e.clientY}px`
    document.querySelector(".cur").style.left = `${e.clientX}px`
})
wm.events.setOnLeave(function(){
    timeout = setTimeout(() => {
        $("#WindowTitle")[0].innerText = "NovaOS";
        $("#wb")[0].setAttribute("class", "noWin")
      }, 1500);
})
$(".message")[0].addEventListener("click", function(){
    appOpen("cvm")
})

window.onbeforeunload = function() {
    var message = 'Do you want to leave this page?';
    return message;
}