const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProgramStudi = sequelize.define('ProgramStudi', {
    id_program_studi: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    kode: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    nama: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'program_studi',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
    deletedAt: 'delete_at',
    paranoid: true
});

module.exports = ProgramStudi;