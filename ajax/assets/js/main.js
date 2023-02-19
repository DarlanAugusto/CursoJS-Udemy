const request = (request) => {

  // instanciando nova Promise, para aguardar a requisição
  return new Promise((resolve, reject) => {
    // pegando método e URL
    const method = request.method;
    const url = request.url;
    
    // instanciando AJAX
    const xhr = new XMLHttpRequest();
    
    // Setando método e URL
    xhr.open(method, url, true);
    xhr.send();
  
    // Chamando evento ao carregar a requisição
    xhr.addEventListener("load", () => {
      
      if(xhr.status >= 200 && xhr.status < 300) {
        // Sucesso na requisição
        const response = xhr.responseText;
        resolve(response);
      }
      else {
        // Erro na requisição
        const error = {
          code: xhr.status,
          errorMessage: xhr.statusText
        }
        reject(error);
      }
  
    });
  })
}

document.addEventListener("click", (event) => {
  event.preventDefault()

  const aElement = event.target;
  const href = aElement.getAttribute("href");

  if(!href) return;
  loadPage(href);
})

// função assincrona
async function loadPage(url) {
  const requestBody = {
    method: 'GET',
    url: url
  }

  try {
    // esperando a resposta do ajax
    const response = await request(requestBody);
    loadResult(response);
    
  } catch (error) {
    console.log(error.errorMessage);
  }

}

// carrega o conteúdo recebido na tela
function loadResult(response) {
  const result = document.querySelector(".resultado");
  result.innerHTML = response;
}