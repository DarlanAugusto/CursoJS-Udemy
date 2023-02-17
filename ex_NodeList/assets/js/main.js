const elements = document.querySelector(".elements");
const paragraphs = elements.querySelectorAll("p");

const bodyStyles = getComputedStyle(document.body);
const backgroundColorBody = bodyStyles.backgroundColor;

for(paragraph of paragraphs) {
    paragraph.style.backgroundColor = backgroundColorBody;
    paragraph.style.color = '#fff';
}