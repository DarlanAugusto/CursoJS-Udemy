const elements = [
  {
    tag: 'p',
    content: "Frase 1"
  },
  {
    tag: 'div',
    content: "Frase 2"
  },
  {
    tag: 'section',
    content: "Frase 3"
  },
  {
    tag: 'footer',
    content: "Frase 4"
  }
];

const container = document.querySelector(".container");
const div = document.createElement('div');

for(i = 0; i < elements.length; i++) {

  // desestruturando o obj do elemento
  const { tag, content } = elements[i];
  const element = document.createElement(tag);

  element.innerHTML = content;
  div.appendChild(element);
}

container.appendChild(div);

