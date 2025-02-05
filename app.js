
let amigos = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nome = inputAmigo.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);

  inputAmigo.value = "";

  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultadoElemento = document.getElementById("resultado");

  resultadoElemento.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `O amigo secreto é: ${amigoSorteado}`;
  resultadoElemento.appendChild(li);
}
