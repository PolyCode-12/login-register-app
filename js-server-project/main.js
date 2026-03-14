import { showLogin, showRegister } from './ui.js';

const toLoginBtn = document.getElementById("to-login");
const toRegisterBtn = document.getElementById("to-register");

toLoginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Səhifənin yenilənməsinin qarşısını alır
    showLogin();
});

toRegisterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showRegister();
});

import { api } from './api.js';

const regForm = document.getElementById("register-form")

regForm.addEventListener("submit",async(e)=>{

    e.preventDefault()
    const username = document.getElementById("reg-username").value
    const email = document.getElementById("reg-email").value
    const password = document.getElementById("reg-password").value

    const users = await api.getAllUsers()

    const isEmailExist = users.find(user=>user.email === email)
    if(isEmailExist){
        alert("Bu email artıq qeydiyyatdan keçib! Zəhmət olmasa başqa email istifadə edin.");
        return
    }
// main.js daxilində submit zamanı
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    alert("Zəhmət olmasa düzgün bir email ünvanı daxil edin!");
    return;
}
// 1. Boşluq yoxlaması
if (password.includes(" ")) {
    alert("Şifrədə boşluq (space) istifadə etmək olmaz!");
    return;
}

// 2. Uzunluq yoxlaması (Minimum 8 simvol - sən 7-dən çox dediyin üçün)
if (password.length <= 7) {
    alert("Şifrə 7 simvoldan çox olmalıdır!");
    return;
}

    const newUser = {
        username,email,password
    }

    await api.registerUser(newUser)
})

const logForm = document.getElementById("login-form")

logForm.addEventListener("submit",async(e)=>{
    e.preventDefault()
const logEmail = document.getElementById("login-email").value
const logPassword = document.getElementById("login-password").value
const users = await api.getAllUsers()
const findAllUser = users.find(user=>user.email===logEmail&&user.password===logPassword)

if(findAllUser){
alert(`Xoş gəldin, ${findAllUser.username}!`);
}
else {
        // Əgər tapılmasa
        alert("Email və ya şifrə yanlışdır!");
    }
})