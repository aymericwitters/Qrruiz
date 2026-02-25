const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modalTitle");

loginBtn.onclick = () => {
    modal.style.display = "block";
    modalTitle.innerText = "Sign In";
}

registerBtn.onclick = () => {
    modal.style.display = "block";
    modalTitle.innerText = "Register";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
