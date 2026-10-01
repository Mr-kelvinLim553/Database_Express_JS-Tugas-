const typeDefs = `#graphql
    type JenisKelamin {
        id_jenis_kelamin: ID!
        kode: String!
        nama: String!
        create_at: String
        update_at: String
    }

    type ProgramStudi {
        id_program_studi: ID!
        kode: String!
        nama: String!
        create_at: String
        update_at: String
    }

    type Angkatan {
        id_angkatan: ID!
        tahun_ajaran: String!
        create_at: String
        update_at: String
    }

    type Mahasiswa {
        id_mahasiswa: ID!
        nim: String!
        nama: String!
        tempat_lahir: String
        tanggal_lahir: String
        alamat: String
        no_hp: String
        email: String
        jenis_kelamin: JenisKelamin
        program_studi: ProgramStudi
        angkatan: Angkatan
        create_at: String
        update_at: String
    }

    type Query {
        getAllJenisKelamin: [JenisKelamin]
        getAllProgramStudi: [ProgramStudi]
        getAllAngkatan: [Angkatan]

        getAllMahasiswa: [Mahasiswa]
        getMahasiswaByNim(nim: String!): Mahasiswa
    }

    type Mutation {
        createJenisKelamin(kode: String!, nama: String!): JenisKelamin
        createProgramStudi(kode: String!, nama: String!): ProgramStudi
        createAngkatan(tahun_ajaran: String!): Angkatan

        createMahasiswa(
            nim: String!
            nama: String!
            id_jenis_kelamin: ID!
            tempat_lahir: String
            tanggal_lahir: String
            alamat: String
            no_hp: String
            email: String
            id_program_studi: ID
            id_angkatan: ID
        ): Mahasiswa

        deleteMahasiswa(id_mahasiswa: ID!): String
    }
`;

module.exports = typeDefs;