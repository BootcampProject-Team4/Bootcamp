import { DataTypes } from "sequelize";
import db from "../db.js";


const Seatcategory = db.sequelize.define("Seatcategory", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Kontrol et ve tabloyu oluştur veya güncelle.


export default Seatcategory;
