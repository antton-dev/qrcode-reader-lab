var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250, aspectRatio: 1, formatsToSupport: [9]});
        
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    html5QrcodeScanner.clear();
    let result = document.querySelector('#result')
    console.log(decodedResult);

    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + decodedText + "&key=AIzaSyDpS7bVi263xStL7x0dlAN_Hr7iToQZsH8")
    .then(res => res.json())
    .then(data => {
        console.log(data.items);
        data.items.forEach(item => {
            console.log(item.volumeInfo.title)
            result.insertAdjacentHTML('beforeend', item.volumeInfo.title + ' - ' + item.volumeInfo.authors + '<br>')

        });
    })
}

html5QrcodeScanner.render(onScanSuccess);


