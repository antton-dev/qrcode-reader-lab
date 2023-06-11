var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
        
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    html5QrcodeScanner.clear();
    let result = document.querySelector('#result')
    result.insertAdjacentText('beforeend', decodedText)
}

html5QrcodeScanner.render(onScanSuccess);