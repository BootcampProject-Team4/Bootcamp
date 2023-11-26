import { DataTypes } from 'sequelize';
import db from '../db.js';

const Address = db.sequelize.define("Address", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.INTEGER,
  },
  gatenumber: {
    type: DataTypes.INTEGER,
  },
});

// Kontrol et ve tabloyu oluştur veya güncelle.
Address.sync()
  .then(() => {
    console.log('Address modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Address modeli oluşturulurken hata oluştu:', err);
  });

export default Address;