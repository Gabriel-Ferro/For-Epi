//Declarações de variáveis do localstorage
var localStorage = Window.localStorage;
var contador = 0;
var contadorEPI = 0;
var objetos = new Array();
var objetosEPI = new Array();
var json = localStorage.getItem("colaborador") || [];
var jsonEPI = localStorage.getItem("ListaEPI") || [];
objetos = JSON.parse(json);
objetosEPI = JSON.parse(jsonEPI);
contador = objetos.length;
contadorEPI = objetosEPI.length;

//Adiciona dados do colaborador no localstorage
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
  alert("Colaborador Cadastrado");
  gravaDados();
  document.getElementById("user").value = "";
  document.getElementById("CPF").value = "";
  document.getElementById("Number-cel").value = "";
  document.getElementById("ID").value = "";
  document.getElementById("cargo").value = "";
  document.getElementById("user").focus();
}

//Grava dados do colaborador no local storage
function gravaDados() {
  var json = JSON.stringify(objetos);
  localStorage.setItem("colaborador", json);
}

//Busca os dados na local storage e armazena em um vetor de objetos
function buscaDados() {
  var json = localStorage.getItem("colaborador");
  objetos = JSON.parse(json);
  contador = objetos.length;
  console.log(objetos[0].user);
  var ButtonBuscaColab = document.getElementById("ButtonBuscaColab");
  for (var i = 0; i < objetos.length; i++) {
    var li = document.createElement("li");
    li.textContent = objetos[i].user;
    ButtonBuscaColab.appendChild(li);
  }
}

// Adiciona dados do EPI no LocalStorage
function adicionaEPI() {
  var y = new Object();
  y.EPI = document.getElementById("EPIx").value;
  y.CA = document.getElementById("CAx").value;
  y.NumeroLote = document.getElementById("NLx").value;
  y.Fabricante = document.getElementById("Fabricantex").value;
  y.DataValidade = document.getElementById("DataValx").value;
  y.DataEntrada = document.getElementById("DataEnterx").value;
  objetosEPI[contadorEPI] = y;
  contadorEPI++;
  alert("EPI Cadastrado");
  gravaDadosEPI();
  document.getElementById("EPIx").value = "";
  document.getElementById("CAx").value = "";
  document.getElementById("NLx").value = "";
  document.getElementById("Fabricantex").value = "";
  document.getElementById("DataValx").value = "";
  document.getElementById("DataEnterx").value = "";
  document.getElementById("EPIx").focus();
}

//Grava dados do EPI no LocalStorage
function gravaDadosEPI() {
  var jsonEPI = JSON.stringify(objetosEPI);
  localStorage.setItem("ListaEPI", jsonEPI);
}

//BuscaDados do EPI no loalStorage
function buscaDadosEPI() {
  var jsonEPI = localStorage.getItem("ListaEPI");
  objetosEPI = JSON.parse(jsonEPI);
  contadorEPI = objetosEPI.length;
  console.log(objetosEPI[0].EPI);
  var ButtonBuscaEPI = document.getElementById("ButtonBuscaEPI");
  for (var q = 0; q < objetosEPI.length; q++) {
    var liEPI = document.createElement("li");
    liEPI.textContent = objetosEPI[q].EPI;
    ButtonBuscaEPI.appendChild(liEPI);
  }
}

//Definição de constantes para interação com a box de cadastro/busca
const login = document.querySelector(".container_box");
const mainColab = document.querySelector(".mainColab");
const loginEPI = document.querySelector(".Container_BOXEPI");
const mainEPI = document.querySelector(".mainEPI");
const colab = document.querySelector(".container_boxbuscaColab");
const mainbuscaColab = document.querySelector(".buscaColab");
const mainbuscaEPI = document.querySelector(".container_buscaEPI");
const relacaoEPI = document.querySelector(".relacaoEPI");
const relacaoVenc = document.querySelector(".Container_boxAvisoEPI");
const mainAvisoEPI = document.querySelector(".warningEPI");

//Definição de constantes para animação da navBar
const iconCadastro = document.querySelector(".cadcolab");
const iconColab = document.querySelector(".colab");
const linhaVert = document.querySelector(".linha-vertical");
const selecto = document.getElementsByClassName("p-");

//Definição de constante para interação com os icones da navBar
const cadastro = document.querySelector(".cadastro");
const cadastroEPI = document.querySelector(".cadastroEPI");
const buscaColab = document.querySelector(".colaboradores");
const buscaEPI = document.querySelector(".buscaEPI");
const envioAviso = document.querySelector(".alertaEPI");

//Ativa e desativa a box de cadastro do colaborador
cadastro.addEventListener("click", function () {
  cadastro.classList.toggle("active");
  if (cadastro.classList.contains("active")) {
    mainColab.style.display = "block";
    login.style.display = "block";
    loginEPI.style.display = "none";
    mainEPI.style.display = "none";
    colab.style.display = "none";
    mainbuscaColab.style.display = "none";
    mainbuscaEPI.style.display = "none";
    relacaoEPI.style.display = "none";
    // mainAvisoEPI.style.display = "none";
    // relacaoVenc.style.display = "none";
    selecto[0].classList.toggle("show");
    selecto[1].classList.toggle("show");
    selecto[2].classList.toggle("show");
    selecto[3].classList.toggle("show");
    selecto[4].classList.toggle("show");
    selecto[5].classList.toggle("show");
    linhaVert.classList.toggle("teste");
  } else {
    login.style.display = "none";
    mainColab.style.display = "none";
  }
});

//Ativa e desativa a box de cadastro de EPI
cadastroEPI.addEventListener("click", function () {
  cadastroEPI.classList.toggle("active");
  if (cadastroEPI.classList.contains("active")) {
    mainEPI.style.display = "block";
    loginEPI.style.display = "block";
    login.style.display = "none";
    mainColab.style.display = "none";
    colab.style.display = "none";
    mainbuscaColab.style.display = "none";
    mainbuscaEPI.style.display = "none";
    relacaoEPI.style.display = "none";
    // mainAvisoEPI.style.display = "none";
    // relacaoVenc.style.display = "none";
    selecto[0].classList.toggle("show");
    selecto[1].classList.toggle("show");
    selecto[2].classList.toggle("show");
    selecto[3].classList.toggle("show");
    selecto[4].classList.toggle("show");
    selecto[5].classList.toggle("show");
    linhaVert.classList.toggle("teste");
  } else {
    loginEPI.style.display = "none";
    mainEPI.style.display = "none";
  }
});

//Ativa e desativa a box de busca colaboradores
buscaColab.addEventListener("click", function () {
  buscaColab.classList.toggle("active");
  if (buscaColab.classList.contains("active")) {
    colab.style.display = "block";
    mainbuscaColab.style.display = "block";
    mainEPI.style.display = "none";
    loginEPI.style.display = "none";
    login.style.display = "none";
    mainColab.style.display = "none";
    mainbuscaEPI.style.display = "none";
    relacaoEPI.style.display = "none";
    // mainAvisoEPI.style.display = "none";
    // relacaoVenc.style.display = "none";
    selecto[0].classList.toggle("show");
    selecto[1].classList.toggle("show");
    selecto[2].classList.toggle("show");
    selecto[3].classList.toggle("show");
    selecto[4].classList.toggle("show");
    selecto[5].classList.toggle("show");
    linhaVert.classList.toggle("teste");
  } else {
    colab.style.display = "none";
    mainbuscaColab.style.display = "none";
  }
});

// Ativa e desativa a box de relacaoEPI
buscaEPI.addEventListener("click", function () {
  buscaEPI.classList.toggle("active");
  if (buscaEPI.classList.contains("active")) {
    mainbuscaEPI.style.display = "block";
    relacaoEPI.style.display = "block";
    colab.style.display = "none";
    mainbuscaColab.style.display = "none";
    mainEPI.style.display = "none";
    loginEPI.style.display = "none";
    login.style.display = "none";
    mainColab.style.display = "none";
    // mainAvisoEPI.style.display = "none";
    // relacaoVenc.style.display = "none";
    selecto[0].classList.toggle("show");
    selecto[1].classList.toggle("show");
    selecto[2].classList.toggle("show");
    selecto[3].classList.toggle("show");
    selecto[4].classList.toggle("show");
    selecto[5].classList.toggle("show");
    linhaVert.classList.toggle("teste");
  } else {
    mainbuscaEPI.style.display = "none";
    relacaoEPI.style.display = "none";
  }
});

// //Ativa e desativa a box de alarme de EPI
// envioAviso.addEventListener("click", function () {
//   envioAviso.classList.toggle("active");
//   if (envioAviso.classList.contains("active")) {
//     mainAvisoEPI.style.display = "block";
//     relacaoVenc.style.display = "block";
//     mainColab.style.display = "none";
//     login.style.display = "none";
//     loginEPI.style.display = "none";
//     mainEPI.style.display = "none";
//     colab.style.display = "none";
//     mainbuscaColab.style.display = "none";
//     mainbuscaEPI.style.display = "none";
//     relacaoEPI.style.display = "none";
//     selecto[0].classList.toggle("show");
//     selecto[1].classList.toggle("show");
//     selecto[2].classList.toggle("show");
//     selecto[3].classList.toggle("show");
//     selecto[4].classList.toggle("show");
//     selecto[5].classList.toggle("show");
//     linhaVert.classList.toggle("teste");
//   } else {
//     mainAvisoEPI.style.display = "none";
//     relacaoVenc.style.display = "none";
//   }
// });

//Previne que o form não atualize a pagina após o envio do formulário.
const form = document.getElementById("preventdefault");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Deu certo");
});

const form2 = document.getElementById("preventdefault2");
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Deu certo");
});

//Função para criar animação da sidebar
// buscaColab.addEventListener(
//   "mouseenter",
//   function (event) {
//     selecto[0].classList.toggle("show");
//     selecto[1].classList.toggle("show");
//     selecto[2].classList.toggle("show");
//     selecto[3].classList.toggle("show");
//     selecto[4].classList.toggle("show");
//     selecto[5].classList.toggle("show");
//     linhaVert.classList.toggle("teste");
//   },
//   false
// );
// cadastro.addEventListener(
//   "mouseover",
//   function (event) {
//     linhaVert.classList.toggle("teste");
//     selecto[0].classList.toggle("show");
//     selecto[1].classList.toggle("show");
//     selecto[2].classList.toggle("show");
//     selecto[3].classList.toggle("show");
//     selecto[4].classList.toggle("show");
//     selecto[5].classList.toggle("show");
//   },
//   false
// );
// cadastroEPI.addEventListener(
//   "mouseenter",
//   function (event) {
//     linhaVert.classList.toggle("teste");
//     selecto[0].classList.toggle("show");
//     selecto[1].classList.toggle("show");
//     selecto[2].classList.toggle("show");
//     selecto[3].classList.toggle("show");
//     selecto[4].classList.toggle("show");
//     selecto[5].classList.toggle("show");
//   },
//   false
// );
// buscaEPI.addEventListener(
//   "mouseenter",
//   function (event) {
//     linhaVert.classList.toggle("teste");
//     selecto[0].classList.toggle("show");
//     selecto[1].classList.toggle("show");
//     selecto[2].classList.toggle("show");
//     selecto[3].classList.toggle("show");
//     selecto[4].classList.toggle("show");
//     selecto[5].classList.toggle("show");
//   },
//   false
// );
// envioAviso.addEventListener(
//   "mouseenter",
//   function (event) {
//     linhaVert.classList.toggle("teste");
//     selecto[0].classList.toggle("show");
//     selecto[1].classList.toggle("show");
//     selecto[2].classList.toggle("show");
//     selecto[3].classList.toggle("show");
//     selecto[4].classList.toggle("show");
//     selecto[5].classList.toggle("show");
//   },
//   false
// );
