require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Berhasil terhubung ke database MySQL (db_kampus). OwO');

        app.listen(PORT, () => {
            console.log(`Server aktif di http://localhost:${PORT}/graphql :D`);
        });
    } catch (error) {
        console.error('Gagal terhubung ke database T-T :', error.message);
    }
};

startServer();