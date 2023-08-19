module.exports = (connection, Sequelize) => {
    const Users = connection.define('users', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
        },
    },
        {
            indexes: [
                {
                    using: 'BTREE',
                    fields: ['id']
                },
                {
                    using: 'BTREE',
                    fields: ['mobile']
                },
                {
                    using: 'BTREE',
                    fields: ['email']
                },
            ]
        }
    )
    return Users
}