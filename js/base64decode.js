const urlInput = document.querySelector('#urlInput');
const decodeButton = document.querySelector('#decode-button');
const outputBox = document.querySelector('#urlOutput');
const clearButton = document.querySelector('#clear-button');

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