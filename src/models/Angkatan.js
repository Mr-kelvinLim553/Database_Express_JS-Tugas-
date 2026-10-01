const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Angkatan = sequelize.define('Angkatan', {
    id_angkatan: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    tahun_ajaran: {
        type: DataTypes.CHAR(9),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'angkatan',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
    deletedAt: 'delete_at',
    paranoid: true
});

module.exports = Angkatan;