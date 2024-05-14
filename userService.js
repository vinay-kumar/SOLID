const UserDataAccess = require('./userDataAccess');
const userDao = new UserDataAccess();

class UserService {
    async addUser(userData) {
        // Add business logic here if necessary
        return await userDao.createUser(userData);
    }

    async findUser(userId) {
        return await userDao.getUserById(userId);
    }

    async updateUser(userId, userData) {
        // Additional logic before updating
        return await userDao.updateUser(userId, userData);
    }

    async deleteUser(userId) {
        // Additional checks before deletion
        return await userDao.deleteUser(userId);
    }
}

module.exports = UserService;

