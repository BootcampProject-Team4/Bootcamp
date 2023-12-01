import { DataTypes } from 'sequelize';
import db from '../db.js';
import Address from './address.js';



const Place = db.sequelize.define("Place", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
});
Address.hasOne(Place);


// Kontrol et ve tabloyu oluştur veya güncelle.


export default Place;