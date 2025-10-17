const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('security_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Worker = sequelize.define('Worker', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'excluded'),
        defaultValue: 'active'
    },
    permitStatus: {
        type: DataTypes.ENUM('valid', 'expired'),
        defaultValue: 'valid'
    },
    permitExpiryDate: {
        type: DataTypes.DATE
    }
});

const Role = sequelize.define('Role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Permission = sequelize.define('Permission', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define relationships
Role.hasMany(User);
User.belongsTo(Role);

Role.belongsToMany(Permission, { through: 'RolePermissions' });
Permission.belongsToMany(Role, { through: 'RolePermissions' });

module.exports = {
    sequelize,
    User,
    Worker,
    Role,
    Permission
};