document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Guardar en localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registro exitoso ✅");
    window.location.href = "index.html"; // Redirigir al login
});
