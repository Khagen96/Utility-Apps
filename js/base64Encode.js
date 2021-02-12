const urlInput = document.querySelector('#urlInput');
const encodeButton = document.querySelector('#encode-button');
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
clearButton.addEventListener('click', () => {
    urlInput.value = '';
    outputBox.value = '';
});