import { DataTypes } from 'sequelize';
import db from '../db.js';
import Place from './place.js';

const Activity = db.sequelize.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  startdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  enddate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  starttime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endtime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});
Place.hasOne(Activity);

// Kontrol et ve tabloyu oluştur veya güncelle.
Activity.sync()
  .then(() => {
    console.log('Activity modeli oluşturuldu veya güncellendi.');
  })
  .catch((err) => {
    console.error('Activity modeli oluşturulurken hata oluştu:', err);
  });

export default Activity;