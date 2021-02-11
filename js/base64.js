const urlInput = document.querySelector('#urlInput');
const encodeButton = document.querySelector('#encode-button');
const decodeButton = document.querySelector('#decode-button');
const outputBox = document.querySelector('#urlOutput');
const clearButton = document.querySelector('#clear-button');

encodeButton.addEventListener('click', () => {
    if (urlInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to encode');
    }
    const base64 = btoa(urlInput.value);
    outputBox.value = base64;
});

decodeButton.addEventListener('click', () => {
    if (urlInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to decode');
    }
    const base64Decode = atob(urlInput.value);
    outputBox.value = base64Decode;
});

clearButton.addEventListener('click', () => {
    urlInput.value = '';
    outputBox.value = '';
});