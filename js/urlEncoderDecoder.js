const urlInput = document.querySelector('#urlInput');
const encodeButton = document.querySelector('#encode-button');
const decodeButton = document.querySelector('#decode-button');
const outputBox = document.querySelector('#urlOutput');
const clearButton = document.querySelector('#clear-button');
const copyButton = document.querySelector('#copy-button');

encodeButton.addEventListener('click', () => {
    if (urlInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to encode/decode');
    }
    outputBox.value = encodeURIComponent(urlInput.value);
});

decodeButton.addEventListener('click', () => {
    if (urlInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to encode/decode');
    }
    outputBox.value = decodeURIComponent(urlInput.value);
});

clearButton.addEventListener('click', () => {
    urlInput.value = '';
    outputBox.value = '';
});

copyButton.addEventListener('click', () => {
    var copyText = document.querySelector('#urlOutput');
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);

});
