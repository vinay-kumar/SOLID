const UserService = require('./userService');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async createUser(req, res) {
        try {
            const user = await this.userService.addUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    async getUser(req, res) {
        try {
            const user = await this.userService.findUser(req.params.id);
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    async updateUser(req, res) {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

    async deleteUser(req, res) {
        try {
            await this.userService.deleteUser(req.params.id);
            res.send('User deleted successfully');
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }
}

module.exports = UserController;

