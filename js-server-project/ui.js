const regSection = document.getElementById("register-section");
const loginSection = document.getElementById("login-section");

export const showLogin = () => {
    regSection.classList.add("hidden");    // Qeydiyyatı gizlə
    loginSection.classList.remove("hidden"); // Girişi göstər
};

export const showRegister = () => {
    loginSection.classList.add("hidden");    // Girişi gizlə
    regSection.classList.remove("hidden"); // Qeydiyyatı göstər
};