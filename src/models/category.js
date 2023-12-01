import { DataTypes } from 'sequelize';
import db from '../db.js';



const Category = db.sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Kontrol et ve tabloyu oluştur veya güncelle.


export default Category;