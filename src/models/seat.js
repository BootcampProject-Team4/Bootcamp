import { DataTypes } from 'sequelize';
import db from '../db.js';
import Seatcategory from './seatcategory.js';
import Place from './place.js';

const Seat = db.sequelize.define('Seat', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    unique: true,
  },
  benchseat: {
    type: DataTypes.STRING,
    unique: true,
  },
  number: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  seatcategory_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Seatcategory, 
      foreignKey: 'id',
    },
  },
  place_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Place, 
      foreignKey: 'id',
    },
  },
  pay: {
    type: DataTypes.INTEGER,
    unique: true,
  },

});


// Kontrol et ve tabloyu oluştur veya güncelle.
Seat.sync()
  .then(() => {
    console.log('Seat modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Seat modeli oluşturulurken hata oluştu:', err);
  });

export default Seat;