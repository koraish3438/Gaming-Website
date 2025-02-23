document.querySelector('.search-box').addEventListener('focus', function() {
    this.style.boxShadow = "0 0 10px #ff4081";
});

// Open Modal Function
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Close Modal Function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Form Validation
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    
    if (email === "admin@example.com" && password === "123456") {
        alert("Login Successful!");
        closeModal("login-modal");
    } else {
        alert("Invalid Credentials!");
    }
});

document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    
    if (name && email && password.length >= 6) {
        alert("Signup Successful!");
        closeModal("signup-modal");
    } else {
        alert("Please fill all fields correctly!");
    }
});
