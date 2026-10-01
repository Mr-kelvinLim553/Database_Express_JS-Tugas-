const { JenisKelamin, ProgramStudi, Angkatan, Mahasiswa } = require('../models');

const resolvers = {
    Query: {
        getAllJenisKelamin: async () => await JenisKelamin.findAll(),
        getAllProgramStudi: async () => await ProgramStudi.findAll(),
        getAllAngkatan: async () => await Angkatan.findAll(),

        getAllMahasiswa: async () => {
            return await Mahasiswa.findAll({
                include: ['jenis_kelamin', 'program_studi', 'angkatan']
            });
        },
        getMahasiswaByNim: async (_, { nim }) => {
            return await Mahasiswa.findOne({
                where: { nim },
                include: ['jenis_kelamin', 'program_studi', 'angkatan']
            });
        }
    },

    Mutation: {
        createJenisKelamin: async (_, { kode, nama }) => {
            return await JenisKelamin.create({ kode, nama });
        },
        createProgramStudi: async (_, { kode, nama }) => {
            return await ProgramStudi.create({ kode, nama });
        },
        createAngkatan: async (_, { tahun_ajaran }) => {
            return await Angkatan.create({ tahun_ajaran });
        },
        createMahasiswa: async (_, args) => {
            return await Mahasiswa.create(args);
        },
        deleteMahasiswa: async (_, { id_mahasiswa }) => {
            const result = await Mahasiswa.destroy({ where: { id_mahasiswa } });
            if (result) {
                return `Mahasiswa dengan ID ${id_mahasiswa} berhasil dihapus (Soft Delete).`;
            }
            return `Mahasiswa tidak ditemukan.`;
        }
    }
};

module.exports = resolvers;