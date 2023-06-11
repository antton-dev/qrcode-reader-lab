var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250, aspectRatio: 1, formatsToSupport: [9]});
        
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    html5QrcodeScanner.clear();
    let result = document.querySelector('#result')
    result.insertAdjacentText('beforeend', decodedText)
    console.log(decodedResult);
}

html5QrcodeScanner.render(onScanSuccess);