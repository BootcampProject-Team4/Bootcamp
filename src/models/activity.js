import { DataTypes } from 'sequelize';
import db from '../db.js';
import Place from './place.js';
import Category from './category.js'


const Activity = db.sequelize.define("Activity", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,    
  },
  startdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  enddate: {
    type: DataTypes.DATEONLY,
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
  },

});
Place.hasMany(Activity);
Category.hasMany(Activity);

// Kontrol et ve tabloyu oluştur veya güncelle.


export default Activity;