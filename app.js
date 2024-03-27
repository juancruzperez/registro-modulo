const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const uneteBtn = document.getElementById('unete');
const ingresaBtn = document.getElementById('ingresa');

ingresaBtn.addEventListener("click",(event)=>{
    event.preventDefault();
})

uneteBtn.addEventListener("click",(event)=>{
    event.preventDefault();
})

registerBtn.addEventListener('click',()=>{
    container.classList.add("active");
})

loginBtn.addEventListener('click',()=>{
    container.classList.remove("active");
})
