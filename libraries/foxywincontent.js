document.addEventListener("mousemove", function (e) {
    setTimeout(function () {
        window.parent.document.querySelector(".cur").style.top = `${e.clientY}px`
        // console.log(e)
        window.parent.document.querySelector(".cur").style.left = `${e.clientX}px`
        if (e.srcElement.classList.contains("clickable")) {
            window.parent.document.querySelector(".cur").style.background = "#0000FF";
        }
        else {
            window.parent.document.querySelector(".cur").style.background = "#FFFFFF"
        }
        console.log("hi")
    }, 0)
})