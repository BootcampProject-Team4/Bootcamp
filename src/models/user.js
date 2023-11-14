import { DataTypes } from 'sequelize';
import db from '../db.js';

const User = db.sequelize.define('User', {
  
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
});

// Kontrol et ve tabloyu oluştur veya güncelle.
User.sync()
  .then(() => {
    console.log('User modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('User modeli oluşturulurken hata oluştu:', err);
  });

export default User;