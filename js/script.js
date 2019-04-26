/**
 * These variables contain the text that needs to be changed and 
 * the button that executes the changes.
 *  */
let verb = document.getElementById('verb');
let adjective = document.getElementById('adjective');
const generateButton = document.getElementById('generate-btn');

/**
 * This array contains all the verbs, that can be applied to the t-shirt.
 *  */ 
let verbList = ["Be", "Go", "Do"];
console.log(verbList);

generateButton.addEventListener('click', generateText);

/**
 * This function is triggered when the generateButton is clicked.
 */
function generateText() {
    setVerb();
}

function setVerb() {
    let randomVerbNumber = Math.floor((Math.random() * verbList.length) + 0);
    verb.textContent = verbList[randomVerbNumber];
}
