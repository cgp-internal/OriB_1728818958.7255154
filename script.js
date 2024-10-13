const enterButton = document.querySelector('input[type="submit"]');
const displayArea = document.querySelector('#display-area');

let flashCount = 0;
let flashing = false;

enterButton.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = document.querySelector('input[type="text"]').value;
  if (userInput !== '') {
    displayArea.innerText = userInput;
    flash();
  }
});

function flash() {
  if (!flashing) {
    flashing = true;
    flashCount = 0;
    const flashInterval = setInterval(() => {
      if (flashCount < 5) {
        displayArea.classList.toggle('flash');
        flashCount++;
      } else {
        displayArea.classList.remove('flash');
        flashing = false;
        clearInterval(flashInterval);
      }
    }, 500);
  }
}