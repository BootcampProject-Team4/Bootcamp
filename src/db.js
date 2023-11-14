import  Sequelize  from 'sequelize';

const db = {}
//sequelize

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: process.env.DB_PORT,
  username: 'postgres',
  password: '12345Aa',
  database: 'bootcamp_project',
})
db.sequelize = sequelize;
export default db;