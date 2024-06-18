document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registro-form");
    const loginForm = document.getElementById("login-form");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(registroForm);
        
        fetch('registro.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            registroForm.reset() 
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(loginForm);
        
        fetch('login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            window.location.href = "dashboard.html"; // Redirige al usuario al dashboard
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
