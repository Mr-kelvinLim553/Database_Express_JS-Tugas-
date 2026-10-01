const JenisKelamin = require('./JenisKelamin');
const ProgramStudi = require('./ProgramStudi');
const Angkatan = require('./Angkatan');
const Mahasiswa = require('./Mahasiswa');

JenisKelamin.hasMany(Mahasiswa, { foreignKey: 'id_jenis_kelamin' });
Mahasiswa.belongsTo(JenisKelamin, { foreignKey: 'id_jenis_kelamin', as: 'jenis_kelamin' });

ProgramStudi.hasMany(Mahasiswa, { foreignKey: 'id_program_studi' });
Mahasiswa.belongsTo(ProgramStudi, { foreignKey: 'id_program_studi', as: 'program_studi' });

Angkatan.hasMany(Mahasiswa, { foreignKey: 'id_angkatan' });
Mahasiswa.belongsTo(Angkatan, { foreignKey: 'id_angkatan', as: 'angkatan' });

module.exports = { JenisKelamin, ProgramStudi, Angkatan, Mahasiswa };