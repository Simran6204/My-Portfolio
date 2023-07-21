const typewrite = document.querySelector('.typewrite');
const words = JSON.parse(typewrite.getAttribute('data-words'));
const speed = typewrite.getAttribute('data-speed');
const delay = typewrite.getAttribute('data-delay');
const loop = typewrite.getAttribute('data-loop');

let wordIndex = 0;
let letterIndex = 0;
let direction = 1;

function type() {
    const currentWord = words[wordIndex];
    const letters = currentWord.slice(0, letterIndex);

    typewrite.textContent = letters;

    if (direction === 1) {
        letterIndex++;
    } else {
        letterIndex--;
    }

    if (letterIndex === currentWord.length + 1) {
        direction = -1;
        setTimeout(type, delay);
    } else if (letterIndex === 0) {
        direction = 1;
        wordIndex++;
        if (wordIndex === words.length && loop === "yes") {
            wordIndex = 0;
        }
        setTimeout(type, speed);
    } else {
        setTimeout(type, speed);
    }
}

type();
