const login = document.querySelector(".container_box");
const cadastro = document.querySelector('.cadastro');

cadastro.addEventListener('click', function () {

    cadastro.classList.add("active");
    if (cadastro.classList.contains('active')) {
        login.style.display = "block";
    }

}
)

let salvarDados = function (){
    let user = document.getElementById('user').value;
    let CPF = document.getElementById('CPF').value;
    localStorage.setItem('Nome do Colaborador:', user);
    localStorage.setItem('CPF:', CPF);
    let CelNumber = document.getElementById('Number-cel').value;
    let ID = document.getElementById('ID').value;
    localStorage.setItem('Número do Colaborador:', CelNumber);
    localStorage.setItem('ID do Crachá:', ID);
    let Cargo = document.getElementById('cargo').value;
    localStorage.setItem('Cargo do Colaborador:', Cargo);
  };
  document.onchange = salvarDados;
