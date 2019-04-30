/**
 * These variables contain the text that needs to be changed and 
 * the button that executes the changes.
 *  */
let verb = document.getElementById('verb');
let adjective = document.getElementById('adjective');
const generateButton = document.getElementById('generate_btn');

/**
 * This array contains all the verbs.
 *  */ 
let verbList = ["Be", "Go", "Do", "Feel", "Have", "Get", "Bring", "RUN", "Please like"];

/**
 * This array contains all the adjectives.
 *  */ 
let adjectiveList = ["funny!", "crazy!", "it!", "awesome!", "fun!", "away!", "the noize!", "lucky!", "my work!", "free!"];

/**
 * This array contains all fontstyles.
 *  */
let fontList = ["fontstyle-1", "fontstyle-2", "fontstyle-3"];

generateButton.addEventListener('click', generateText);

/**
 * This function is triggered when the generateButton is clicked.
 */
function generateText() {
    // Generate random number for verbList and apply to verb
    let randomVerbNumber = Math.floor((Math.random() * verbList.length));
    verb.textContent = verbList[randomVerbNumber];
    // Generate random number for fontList and apply to verb
    let randomFontNumberVerb = Math.floor((Math.random() * fontList.length));
    verb.className = fontList[randomFontNumberVerb];

    // Generate random number for adjectiveList and apply to adjective
    let randomAdjectiveNumber = Math.floor((Math.random() * adjectiveList.length));
    adjective.textContent = adjectiveList[randomAdjectiveNumber];
    // Generate random number for fontList and apply to adjective
    let randomFontNumberAdjective = Math.floor((Math.random() * fontList.length));
    adjective.className = fontList[randomFontNumberAdjective];
}
