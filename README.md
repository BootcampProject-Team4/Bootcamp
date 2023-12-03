#Bootcamp Project
Projede kullanılan teknolojiler : nodejs,expressjs,nodemon,sequelize,joi,jsonwebtoken,postgresql,bcrypt.
API'a bağlanmak için Postman kullanıldı.

#For Run
.env dosyasına gerekli bilgileri ekleyiniz.
PORT = 'your port'
SECRET_KEY = "EdaKabay8943759834659850984943750lksdfhlsh"
EXPIRATION_DATE = "1h"
DEVELOPMENT = "TRUE"

db.js dosyasına PostgreSql'e bağlanmak için gerekli bilgileri ekleyiniz.
  dialect: 'your dialect',
  host: 'localhost',
  port: 'your db port',
  username: 'your username',
  password: 'your password',
  database: 'create database',

To run this api on your localhost first install dependencies with npm i code and then use npm start code to run.
