import  Sequelize  from 'sequelize';

const db = {}
//sequelize

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345Aa',
  database: 'your_table',
})
db.sequelize = sequelize;
export default db;