document.addEventListener("click", (event) => {
  event.preventDefault()

  const aElement = event.target;
  const href = aElement.getAttribute("href");

  if(!href) return;
  loadPage(href);
})

async function loadPage(url) {

  try {
    const response = await fetch(url);
    
    if(response.status !== 200) throw new Error("404 Not Found Brother!");

    const html = await response.text();
    
    loadResult(html);
  } 
  catch(error) {
    console.error(error);
  }

}

// carrega o conteúdo recebido na tela
function loadResult(response) {
  const result = document.querySelector(".resultado");
  result.innerHTML = response;
}