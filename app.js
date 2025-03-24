// Importar el módulo Express
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes'); // Importar las rutas de usuario

// const User = require('./models/User');
//const CR = require('./controllers/postController')
const userController = require('./controllers/userController')
// var nuevoItem = {};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Middleware para servir archivos estáticos desde la carpeta 'views'
app.use(express.static(path.join(__dirname, 'views')));

// conexion mongodb
mongoose.connect('mongodb://localhost:27017/ACTIVIDAD9_DAW')
.then(() => console.log(' Conexion a MongoDB establecida '))
.catch((error) => console.error("Error de conexion", error))

// Usar las rutas de usuario
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views','login.html'));
});
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views','dashboard.html'));
});

// Endpoints de Post
//app.post('/api/datos', CR.createUser);nop
//app.get('/api/datos', CR.getUsers);
//app.put('/api/datos/:id', CR.updatePost);
//app.delete('/api/datos/:id', CR.deletePost);

// Endpoints de User
app.post('/api/users', userController.createUser);
app.post('/api/users/:id', userController.getUsers);
app.post('/api/users/:id', userController.updateUser);
app.post('/api/users/:id', userController.deleteUser);
app.post('/api/users/login', userController.loginUser);

// // Metodo HTTP GET - Provee data al cliente
// app.get('/mensaje_bienvenida', (req, res) => {
//   res.send('¡Bienvenido al backend con Express.js!');
// });

// app.get('/mensaje_despedida', (req, res) => {
//     res.send('Gracias por participar');
// });


// app.post('/api/crear_juego', (req, res) => {
//     nuevoItem = req.body;
    
//     res.status(201).json({
//         mensaje: 'El elemento ha sido creado con exito',
//         item: nuevoItem
//     });
// });

// // METHOD - DELETE
// app.delete('/api/juegos/:id', (req, res) => {
//     const { id } = req.params.id;

//     nuevoItem['nombre'] = "";

//     res.json({
//         mensaje: `Listo, ya se actualizo el item ${id}`,
//         item: nuevoItem
//     })
// });

// app.get('/api/juegos', (req, res) => {
//     res.json(nuevoItem);
// });

// app.put('/api/juegos/:id', (req, res) => {
//     const { id } = req.params.id;
//     const { nombre } = req.body;

//     nuevoItem['nombre'] = nombre;

//     res.json({
//         mensaje: `Listo, ya se actualizo el item ${id}`,
//         item: nuevoItem
//     })
// });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  // Usar import() dinámico para importar el módulo 'open'
  import('open').then(open => {
    open.default(`http://localhost:${port}`);
  }).catch(err => {
    console.error('Error al abrir el navegador:', err);
  });
});
