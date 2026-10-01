const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JenisKelamin = sequelize.define('JenisKelamin', {
    id_jenis_kelamin: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    kode: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        unique: true
    },
    nama: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'jenis_kelamin',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
    deletedAt: 'delete_at',
    paranoid: true
});

module.exports = JenisKelamin;