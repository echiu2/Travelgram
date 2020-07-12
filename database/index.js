// Creating connection between the app and the database (Sequelize similar to ORM)
const Sequelize = require('sequelize')
const { UUID, UUIDV4, STRING } = Sequelize;
const connection = new Sequelize('postgres://localhost/game-network')

// Creating table schemas for user
const User = connection.define('user', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false
    },
    firstname: {
        type: STRING, 
        allowNull: false
    },
    lastname: {
        type: STRING,
        allowNull: false
    }
})

// Create a sync function to seed data into the database (kind of like a dummy test)
const sync = async () => {
    // force: true; wipes out data and replaces it with new entry
    await connection.sync({ force: true });
    const [edwin, kalvin, brandon] = await Promise.all([
        User.create({ firstname: 'edwin', lastname: 'chiu'}), 
        User.create({ firstname: 'kalvin', lastname: 'zhao'}),
        User.create({ firstname: 'brandon', lastname: 'lau'})
    ])
}

module.exports = { sync, User }