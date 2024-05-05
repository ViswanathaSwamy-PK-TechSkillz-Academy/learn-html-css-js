const container = document.querySelector(".container");
const joinBtn = document.querySelector(".navigation a:nth-child(3)");
const homeBtn = document.querySelector(".navigation a:nth-child(2)");
const loginBtn = document.querySelector(".contact p a");
const loginMsg = document.querySelector(".contact p span");
const contactBtn = document.querySelector(".contact-btn:nth-child(2)");

joinBtn.addEventListener("click", () => {
    container.classList.add("change");
});

homeBtn.addEventListener("click", () => {
    container.classList.remove("change");
});

loginBtn.addEventListener("click", () => {
    container.classList.toggle("hide")
        ? (loginBtn.textContent = "Sign Up") && (contactBtn.textContent = "Log In") && (loginMsg.textContent = "Don't have an account?")
        : (loginBtn.textContent = "Log In") && (contactBtn.textContent = "Create Account") && (loginMsg.textContent = "Already have an account?");
});
