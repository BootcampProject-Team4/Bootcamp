import { DataTypes } from 'sequelize';
import db from '../db.js';

const Seatcategory = db.sequelize.define('Seatcategory', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Kontrol et ve tabloyu oluştur veya güncelle.
Seatcategory.sync()
  .then(() => {
    console.log('Seatcategory modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Seatcategory modeli oluşturulurken hata oluştu:', err);
  });

export default Seatcategory;