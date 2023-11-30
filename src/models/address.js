import { DataTypes } from 'sequelize';
import db from '../db.js';
import addressData from "../mockData/addressData.js";

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
Address.sync()
  .then(() => {

        const addresses = addressData;

        addresses.forEach(async (x) => {
          const address = await Address.findOne({ where: { city: x.city } });

          if (!address) Address.create(x);
        });

    console.log('Address modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Address modeli oluşturulurken hata oluştu:', err);
  });

export default Address;