import { DataTypes } from 'sequelize';
import db from '../db.js';

const Place = db.sequelize.define('Place', {
  
  mekanid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  outdoor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  interior: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  seatcapacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  standcapacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },

});

// Kontrol et ve tabloyu oluştur veya güncelle.
Place.sync()
  .then(() => {
    console.log('Place modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Place modeli oluşturulurken hata oluştu:', err);
  });

export default Place;