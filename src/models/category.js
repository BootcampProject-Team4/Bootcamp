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
Category.sync()
  .then(() => {
    console.log("Category modeli oluşturuldu veya güncellendi.");
  })
  .catch((err) => {
    console.error("Category modeli oluşturulurken hata oluştu:", err);
  });

export default Category;