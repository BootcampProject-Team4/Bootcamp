import { DataTypes } from 'sequelize';
import db from '../db.js';
import Address from './address.js';
import placeData from "../mockData/placeData.js";


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
Place.sync()
  .then(() => {

        const places = placeData;

        places.forEach(async (x) => {
          const place = await Place.findOne({ where: { name: x.name } });

          if (!place) Place.create(x);
        });

    console.log('Place modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Place modeli oluşturulurken hata oluştu:', err);
  });

export default Place;