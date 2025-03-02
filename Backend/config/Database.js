import { Sequelize } from "sequelize";

const db = new Sequelize('catatanku', 'root','',{
    host: 'localhost',
    dialect : 'mysql'
})

export default db;