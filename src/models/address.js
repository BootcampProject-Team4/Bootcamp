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
    type: DataTypes.STRING,
  },
  gatenumber: {
    type: DataTypes.INTEGER,
  },
});

// Kontrol et ve tabloyu oluştur veya güncelle.


export default Address;