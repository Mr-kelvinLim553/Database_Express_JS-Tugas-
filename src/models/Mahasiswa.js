const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mahasiswa = sequelize.define('Mahasiswa', {
    id_mahasiswa: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nim: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    nama: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_jenis_kelamin: {
        type: DataTypes.UUID,
        allowNull: false
    },
    tempat_lahir: {
        type: DataTypes.STRING(50)
    },
    tanggal_lahir: {
        type: DataTypes.DATEONLY
    },
    alamat: {
        type: DataTypes.TEXT
    },
    no_hp: {
        type: DataTypes.STRING(15)
    },
    email: {
        type: DataTypes.STRING(100)
    },
    id_program_studi: {
        type: DataTypes.UUID
    },
    id_angkatan: {
        type: DataTypes.UUID
    }
}, {
    tableName: 'mahasiswa',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
    deletedAt: 'delete_at',
    paranoid: true
});

module.exports = Mahasiswa;