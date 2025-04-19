document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const checkbox = document.getElementById("remember");

    if (!checkbox.checked) {
        alert("Por favor verifica que no eres un robot.");
        return;
    }

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail === null || storedPassword === null) {
        alert("No hay usuario registrado.");
        return;
    }

    if (email === storedEmail && password === storedPassword) {
        alert("Inicio de sesión exitoso 🎉");

        // 🔁 Redirigir a dashboard.html después del mensaje
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 500); // Espera 0.5 segundos para que se vea el mensaje

    } else {
        alert("Correo o contraseña incorrectos ❌");
    }
});
