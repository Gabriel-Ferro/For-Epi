var localStorage = Window.localStorage;
var contador = 0;
var objetos = new Array();

const login = document.querySelector(".container_box");
const cadastro = document.querySelector(".cadastro");

cadastro.addEventListener("click", function () {
  cadastro.classList.toggle("active");
  if (cadastro.classList.contains("active")) {
    login.style.display = "block";
  } else login.style.display = "none";
});

function adiciona() {
  var x = new Object();
  x.user = document.getElementById("user").value;
  x.cpf = document.getElementById("CPF").value;
  x.celnumber = document.getElementById("Number-cel").value;
  x.cracha = document.getElementById("ID").value;
  x.cargo = document.getElementById("cargo").value;
  objetos[contador] = x;
  contador++;
  console.log(objetos);
  gravaDados();
}
function gravaDados() {
  var json = JSON.stringify(objetos);
  localStorage.setItem("clientes", json);
}
function buscaDados() {
  //Busca os dados na local storage e armazena em um vetor de objetos

  var json = localStorage.getItem("clientes");

  objetos = JSON.parse(json);
  contador = objetos.length;
  console.log(objetos[0].nome);
}

const form = document.getElementById("preventdefault");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Deu certo");
});
