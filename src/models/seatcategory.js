import { DataTypes } from "sequelize";
import db from "../db.js";
import seatcategoryData from "../mockData/seatcategoryData.js";

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
Seatcategory.sync()

  .then(() => {
    const seatcategories = seatcategoryData;

    seatcategories.forEach(async (x) => {
      const seatcategory = await Seatcategory.findOne({ where: { name: x.name } });

      if (!seatcategory) Seatcategory.create(x);
    });

    console.log("Seatcategory modeli oluşturuldu veya güncellendi.");
  })
  .catch((err) => {
    console.error("Seatcategory modeli oluşturulurken hata oluştu:", err);
  });

export default Seatcategory;
