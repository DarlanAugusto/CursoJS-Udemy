axios('pessoas.json')
  .then(response => loadElementsOnPage(response.data));

function loadElementsOnPage(response) {
  const resultados = document.querySelector(".resultado");
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');

  const thNome = document.createElement('th');
  thNome.innerHTML  = 'Nome';
  const thEmail = document.createElement('th');
  thEmail.innerHTML = 'Email';
  const thCpf = document.createElement('th');
  thCpf.innerHTML = 'CPF';
  const thIdade = document.createElement('th');
  thIdade.innerHTML = 'Idade';


  trHead.setAttribute("align", "left");
  trHead.appendChild(thNome);
  trHead.appendChild(thEmail);
  trHead.appendChild(thCpf);
  trHead.appendChild(thIdade);
  thead.appendChild(trHead);
  table.appendChild(thead);

  response.forEach((pessoa) => {
    const tr = document.createElement('tr');
    
    const tdNome = document.createElement('td');
    tdNome.innerHTML = pessoa.nome;
    
    const tdEmail = document.createElement('td');
    tdEmail.innerHTML = pessoa.email;

    const tdCpf = document.createElement('td');
    tdCpf.innerHTML = pessoa.cpf;
    
    const tdIdade = document.createElement('td');
    tdIdade.innerHTML = pessoa.idade;


    tr.append(tdNome, tdEmail, tdCpf, tdIdade);
    table.appendChild(tr);
  })

  resultados.appendChild(table);

}