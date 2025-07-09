document.addEventListener('DOMContentLoaded', (event) => {
    let text = ["Tejaarka Piridi", "a Full Stack Developer", "a mentor at GeeksForGeeks"];

    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count == text.length) {
            count = 0;
        }
        
        // pick the first word
        currentText = text[count];
        // slice it into letter by letter
        letter = currentText.slice(0, ++index);
        console.log(letter);
        
        // select the class h1
        const h1 = document.querySelector('.home .left h1');
        h1.textContent = letter;

        if (letter.length == currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        }
        else {
            setTimeout(type, 100);
        }

    }())
})
