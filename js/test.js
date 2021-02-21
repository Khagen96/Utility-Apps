function translateText() {
const inputText = document.querySelector('#languageInput');
const outputText = document.querySelector('#languageOutput');
const inputOption = document.querySelector('#inputType');
const outputOption = document.querySelector('#outputType');
const language = {
    Arabic: 'ar',
    English: 'en',
    French: 'fr',
    Greek: 'el',
    Gujarati: 'gu',
    Hindi: 'hi',
    Indonesian: 'id',
    Italian: 'it',
    Japanese: 'ja-JP',
    Kannada: 'kn',
    Korean: 'ko',
    Latin: 'la',
    Malayalam: 'ml',
    Marathi: 'mr',
    Mongolian: 'mn',
    Nepali: 'ne',
    Spanish: 'es',
    Tamil: 'ta',
    Telugu: 'te',
    Urdu: 'ur',
};

// console.log(inputOption.value);
// console.log(outputOption.value);
const url = new URL('https://api.mymemory.translated.net/get');
const inputPair = {
    q:inputText.value,
    langPair:`${language[inputOption.value]}|${language[outputOption.value]}`
}
Object.keys(inputPair).forEach((key) => {
    url.searchParams.append(key, inputPair[key]);
});

url.search = new URLSearchParams(inputPair).toString()
console.log(url);
















}



const translateButton = document.querySelector('#translate-button');
translateButton.addEventListener('click', () => {
    // if (inputText.value.length === 0 || outputText.value.length === 0) {
    //     alert('please enter text to encode/decode');
    // }
    translateText();

});




// const clearButton = document.querySelector('#clear-button');
// const copyButton = document.querySelector('#copy-button');
// clearButton.addEventListener('click', () => {
//     urlInput.value = '';
//     outputBox.value = '';
// });
// copyButton.addEventListener('click', () => {
//     var copyText = document.querySelector('#urlOutput');
//     copyText.select();
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
// });