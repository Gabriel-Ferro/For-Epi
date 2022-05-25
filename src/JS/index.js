var localStorage = Window.localStorage;
var contador = 0;
var objetos = new Array();
var json = localStorage.getItem("colaborador");
objetos = JSON.parse(json);
contador = objetos.length;

const login = document.querySelector(".container_box");
const mainColab = document.querySelector(".mainColab");
const loginEPI = document.querySelector(".Container_BOXEPI");
const mainEPI = document.querySelector(".mainEPI");
const cadastro = document.querySelector(".cadastro");
const cadastroEPI = document.querySelector(".cadastroEPI");

cadastro.addEventListener("click", function () {
  cadastro.classList.toggle("active");
  if (cadastro.classList.contains("active")) {
    mainColab.style.display = "block";
    login.style.display = "block";
    loginEPI.style.display = "none";
    mainEPI.style.display = "none";
  } else {
    login.style.display = "none";
    mainColab.style.display = "none";
  }
});

cadastroEPI.addEventListener("click", function () {
  cadastroEPI.classList.toggle("active");
  if (cadastroEPI.classList.contains("active")) {
    mainEPI.style.display = "block";
    loginEPI.style.display = "block";
    login.style.display = "none";
    mainColab.style.display = "none";
  } else {
    loginEPI.style.display = "none";
    mainEPI.style.display = "none";
  }
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
  document.getElementById("user").value = "";
  document.getElementById("CPF").value = "";
  document.getElementById("Number-cel").value = "";
  document.getElementById("ID").value = "";
  document.getElementById("cargo").value = "";
  document.getElementById("user").focus();
}
function gravaDados() {
  var json = JSON.stringify(objetos);
  localStorage.setItem("colaborador", json);
}
function buscaDados() {
  //Busca os dados na local storage e armazena em um vetor de objetos
  var json = localStorage.getItem("colaborador");
  objetos = JSON.parse(json);
  contador = objetos.length;
  console.log(objetos[0].nome);
}

const form = document.getElementById("preventdefault");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Deu certo");
});
