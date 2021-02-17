const inputBox = document.querySelector('#input-box');
const outputBox = document.querySelector('#output-box');


const convertButton = document.querySelector('#convert-button');
const clearButton = document.querySelector('#clear-button');
const copyButton = document.querySelector('#copy-button');

convertButton.addEventListener('click',()=>{

    var selectedfrom = document.querySelector('input[name="convert-from"]:checked').value
    var selectedto = document.querySelector('input[name="convert-to"]:checked').value
// binary
    if(selectedfrom === "binary" && selectedto === "binary")
    {
    outputBox.value=parseInt(inputBox.value);
    }
    else if(selectedfrom === "binary" && selectedto === "decimal")
    {
    outputBox.value=parseInt(inputBox.value,2);
    }
    else if(selectedfrom === "binary" && selectedto === "hexadeciamal")
    {
    outputBox.value=parseInt(inputBox.value,2).toString(16);;
    }
    else if(selectedfrom === "binary" && selectedto === "octal")
    {
    outputBox.value=parseInt(inputBox.value,2).toString(8);
    }
// decimal
    else if(selectedfrom === "decimal" && selectedto === "binary")
    {
    outputBox.value=parseInt(inputBox.value).toString(2);
    }
    else if(selectedfrom === "decimal" && selectedto === "decimal")
    {
    outputBox.value=parseInt(inputBox.value);
    }
    else if(selectedfrom === "decimal" && selectedto === "hexadeciamal")
    {
    outputBox.value=parseInt(inputBox.value).toString(16);
    }
    else if(selectedfrom === "decimal" && selectedto === "octal")
    {
    outputBox.value=parseInt(inputBox.value).toString(8);
    }
// hexadecimal
    else if(selectedfrom === "hexadecimal" && selectedto === "binary")
    {
    outputBox.value=parseInt(inputBox.value,16).toString(2);
    }
    else if(selectedfrom === "hexadecimal" && selectedto === "decimal")
    {
    outputBox.value=parseInt(inputBox.value,16).toString(10);
    }
    else if(selectedfrom === "hexadecimal" && selectedto === "hexadecimal")
    {
    outputBox.value=inputBox.value;
    }
    else if(selectedfrom === "hexadecimal" && selectedto === "octal")
    {
    outputBox.value=parseInt(inputBox.value,16).toString(8);
    }
// octal
    else if(selectedfrom === "octal" && selectedto === "binary")
    {
    outputBox.value=parseInt(inputBox.value,8).toString(2);
    }
    else if(selectedfrom === "octal" && selectedto === "decimal")
    {
    outputBox.value=parseInt(inputBox.value,8).toString(10);
    }
    else if(selectedfrom === "octal" && selectedto === "hexadecimal")
    {
    outputBox.value=parseInt(inputBox.value,8).toString(16);
    }
    else if(selectedfrom === "octal" && selectedto === "octal")
    {
    outputBox.value=parseInt(inputBox.value);
    }
  });

clearButton.addEventListener('click', () => {
    inputBox.value = '';
    outputBox.value = '';
    document.getElementById("convert-from-binary").checked = false;
    document.getElementById("convert-from-decimal").checked = false;
    document.getElementById("convert-from-hexadecimal").checked = false;
    document.getElementById("convert-from-octal").checked = false;
    document.getElementById("convert-to-binary").checked = false;
    document.getElementById("convert-to-decimal").checked = false;
    document.getElementById("convert-to-hexadecimal").checked = false;
    document.getElementById("convert-to-octal").checked = false;
});

copyButton.addEventListener('click', () => {
    var copyText = document.querySelector('#output-box');
    copyText.select();
    document.execCommand("copy");
    alert("Copied: " + copyText.value);

});
