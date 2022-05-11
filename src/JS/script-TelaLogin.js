const login=document.querySelector(".form_login");
const register=document.querySelector(".form_register");
const log= document.querySelector('.log');
const reg= document.querySelector('.reg');

reg.addEventListener('click',function(){
  
  reg.classList.add("active");
  log.classList.remove("active");
    if(reg.classList.contains('active')){
      register.style.display="block";
      login.style.display="none";     
    }
    else{
      register.style.display="none";
    }
     
  }
)

log.addEventListener('click',function(){
 
  reg.classList.remove("active");
  log.classList.add('active');
  if(log.classList.contains('active')){
    login.style.display="block";
    register.style.display="none";
   
  }
  else{
    login.style.display="none";
  }
})

let salvarDados = function (){
  let email = document.getElementById('mail').value;
  let username = document.getElementById('username').value;
  localStorage.setItem('Email:', email);
  localStorage.setItem('Nome de Usuário:', username);
};
document.onchange = salvarDados;
