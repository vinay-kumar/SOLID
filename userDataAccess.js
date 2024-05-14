const pool = require('./database');

class UserDataAccess {
    async createUser(userData) {
        const query = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *;';
        const { rows } = await pool.query(query, [userData.name, userData.email]);
        return rows[0];
    }

    async getUserById(userId) {
        const query = 'SELECT * FROM users WHERE id = $1;';
        const { rows } = await pool.query(query, [userId]);
        return rows[0];
    }

    async updateUser(userId, userData) {
        const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;';
        const { rows } = await pool.query(query, [userData.name, userData.email, userId]);
        return rows[0];
    }

    async deleteUser(userId) {
        const query = 'DELETE FROM users WHERE id = $1;';
        await pool.query(query, [userId]);
    }
}

module.exports = UserDataAccess; 

