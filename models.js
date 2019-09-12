const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'mentalhealth_db',
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
        underscored: true
    }
});

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password_digest: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Mood = sequelize.define('mood', {
    type: Sequelize.STRING
})

Mood.belongsTo(User);
User.hasMany(Mood, {onDelete: 'cascade'})

module.exports = {
    sequelize,
    User,
    Mood
}