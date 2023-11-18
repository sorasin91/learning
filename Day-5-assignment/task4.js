
const Button = document.getElementById('myButton');
const Paragraph = document.getElementById('Paragraph');


function changeParagraphContent() {
  Paragraph.textContent = 'message displayed';
}


Button.addEventListener('click', changeParagraphContent);
