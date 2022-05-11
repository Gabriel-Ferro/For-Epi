const login = document.querySelector(".container_box");
const cadastro = document.querySelector('.cadastro');

cadastro.addEventListener('click', function () {

    cadastro.classList.add("active");
    if (cadastro.classList.contains('active')) {
        login.style.display = "block";
    }



}
)
