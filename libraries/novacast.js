import './ht2canvas.js'
window.novacast = {
    test: function(){
        html2canvas(document.body).then(canvas => {
            let canvasUrl = canvas.toDataURL();
            console.log(canvasUrl);
            let createEl = document.createElement('a');
            createEl.href = canvasUrl;
        
            // This is the name of our downloaded file
            createEl.download = "download-this-canvas";
        
            // Click the download button, causing a download, and then remove it
            createEl.click();
            createEl.remove();
        });
    }
}