const express = require('express');
const UserController = require('./userController');
const userController = new UserController();
const app = express();
app.use(express.json());

app.post('/users', (req, res) => userController.createUser(req, res));
app.get('/users/:id', (req, res) => userController.getUser(req, res));
app.put('/users/:id', (req, res) => userController.updateUser(req, res));
app.delete('/users/:id', (req, res) => userController.deleteUser(req, res));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));