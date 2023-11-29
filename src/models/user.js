import { DataTypes } from 'sequelize';
import db from '../db.js';
import userData from '../mockData/userData.js'

const User = db.sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Kontrol et ve tabloyu oluştur veya güncelle.
User.sync()
  .then(() => {

    const users = userData;

    users.forEach(async (x) => {

      const user = await User.findOne({ where: { email : x.email } })

      if(!user)   User.create(x);
     
    })

    console.log('User modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('User modeli oluşturulurken hata oluştu:', err);
  });

export default User;