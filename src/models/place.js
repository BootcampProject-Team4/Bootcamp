import { DataTypes } from 'sequelize';
import db from '../db.js';
import Address from './address.js';

const Place = db.sequelize.define('Place', {
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
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
    references: {
      model: Address, 
      foreignKey: 'id',
    },
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