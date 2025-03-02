import { Sequelize } from "sequelize";

const db = new Sequelize('catatanku', 'rafly','nyawforlife',{
    host: 'localhost',
    dialect : 'mysql'
})

export default db;