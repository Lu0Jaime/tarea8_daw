document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    const nombre = document.getElementById('name').value;
    const contrasena = document.getElementById('password').value;

    const userData = {
      name: nombre,
      password: contrasena
    };

    fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        console.log('Login exitoso:', data);
        alert('Login exitoso');
        window.location.href = 'http://localhost:3000/dashboard';
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión');
      });
  });
});
