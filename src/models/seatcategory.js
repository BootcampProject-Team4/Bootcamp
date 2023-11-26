import { DataTypes } from 'sequelize';
import db from '../db.js';
import Seat from './seat.js';

const Seatcategory = db.sequelize.define("Seatcategory", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Seatcategory.hasMany(Seat);

// Kontrol et ve tabloyu oluştur veya güncelle.
Seatcategory.sync()
  .then(() => {
    console.log('Seatcategory modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Seatcategory modeli oluşturulurken hata oluştu:', err);
  });

export default Seatcategory;