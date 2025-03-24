document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registerForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value; // Asegúrate de que el ID sea correcto
    const contrasena = document.getElementById('contrasena').value;

    const userData = {
      name: nombre,
      email: correo,
      password: contrasena
    };

    fetch('http://localhost:3000/api/users', {
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
        console.log('Usuario creado:', data);
        alert('Usuario creado:', data);
      })
      .catch(error => {
        console.error('Error al crear usuario:', error);
        alert('Error al crear usuario:', error);
      });
  });
});
