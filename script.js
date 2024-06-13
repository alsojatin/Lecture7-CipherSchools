const headingEl = document.getElementById('h1'); // Assuming you renamed the heading tag to 'h1'
const messageEl = document.getElementById('message');
const changeButton = document.getElementById('change-button');

function changeContent() {
  headingEl.textContent = "Title Changed!";
  messageEl.textContent = "This text has been updated using DOM manipulation.";
}

changeButton.addEventListener('click', changeContent);
