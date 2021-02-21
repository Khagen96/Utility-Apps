function translateText() {
const inputText = document.querySelector('#languageInput');
const outputText = document.querySelector('#languageOutput');
const inputOption = document.querySelector('#inputType');
const outputOption = document.querySelector('#outputType');
const language = {

    English: 'en',
    Hindi: 'hi',
    French: 'fr',
    Greek: 'el',
    Indonesian: 'id',
    Italian: 'it',
    Japanese: 'ja-JP',
    Korean: 'ko',
    Latin: 'la',
    Mongolian: 'mn',
    Spanish: 'es',
};

// console.log(inputOption.value);
// console.log(outputOption.value);
const url = new URL('https://api.mymemory.translated.net/get');
const inputPair = {
    q:inputText.value,
    langpair:`${language[inputOption.value]}|${language[outputOption.value]}`,
};
console.log(inputPair.langPair)
Object.keys(inputPair).forEach((key) => {
    url.searchParams.append(key, inputPair[key]);
});

url.search = new URLSearchParams(inputPair).toString()
console.log(url);
const promise = fetch(url);

promise
.then((response)=>response.json())
.then((json)=>{
    // console.log(json.responseData.translatedText);
    outputText.value = json.responseData.translatedText;

})
}



const translateButton = document.querySelector('#translate-button');
translateButton.addEventListener('click', () => {

        translateText();
    
});




const clearButton = document.querySelector('#clear-button');
const copyButton = document.querySelector('#copy-button');
clearButton.addEventListener('click', () => {
    const inputText = document.querySelector('#languageInput');
    const outputText = document.querySelector('#languageOutput');
    inputText.value = '';
    outputText.value = '';
});
copyButton.addEventListener('click', () => {
    var copyText = document.querySelector('#languageOutput');
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
});