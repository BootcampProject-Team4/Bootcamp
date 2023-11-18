import  Sequelize  from 'sequelize';

const db = {}
//sequelize

const ss = process.env.DB_PASSWORD;
console.log("demeöe",ss)
console.log("demeöe",process.env.PORT)

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: '12345Aa',
  database: 'bootcamp_project',
})
db.sequelize = sequelize;
export default db;