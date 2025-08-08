const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const output = document.getElementById('result');

// check input -------------------------------------------------------
function check(input) {
    const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversed = cleaned.split('').reverse().join('');
    return reversed===cleaned;
}

// update results -----------------------------------------------
function updateResult() {
    const inputValue = userInput.value.trim();

    if(!inputValue) {
        output.innerText = 'Please enter some text';
        return;
    }
    if(check(inputValue)) {
        output.innerText = `"${inputValue}" is a palindrome.`;
    }
    else{
        output.innerText = `"${inputValue}" is not a palindrome`;
    }
}

// Event Listener -------------------------------------------
checkButton.addEventListener('click', updateResult);



