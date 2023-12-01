import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import categoryRouter from "./routers/categoryRouter.js";
import activityRouter from "./routers/activityRouter.js";
import addressRouter from "./routers/addressRouter.js";
import placeRouter from "./routers/placeRouter.js";
import seatRouter from "./routers/seatRouter.js";
import seatcategoryRouter from "./routers/seatcategoryRouter.js";
import userRouter from "./routers/userRouter.js";
import Address from "./models/address.js";
import Place from "./models/place.js";
import Category from "./models/category.js";
import Activity from "./models/activity.js";
import Seatcategory from "./models/seatcategory.js";
import Seat from "./models/seat.js";
import User from "./models/user.js";
import addressData from "./mockData/addressData.js";
import placeData from "./mockData/placeData.js";
import categoryData from "./mockData/categoryData.js";
import activityData from "./mockData/activityData.js";
import seatcategoryData from "./mockData/seatcategoryData.js";
import seatData from "./mockData/seatData.js";
import userData from "./mockData/userData.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());

app.use("/category", categoryRouter);
app.use("/activity", activityRouter);
app.use("/address", addressRouter);
app.use("/place", placeRouter);
app.use("/seat", seatRouter);
app.use("/seatcategory", seatcategoryRouter);
app.use("/user", userRouter);

async function syncAndCreate(Model, data) {
  await Model.sync();

  const identifier = Model.primaryKeyAttribute; 

  for (const item of data) {
    const instance = await Model.findOne({
      where: { [identifier]: item[identifier] },
    });

    if (!instance) {
      await Model.create(item);
    }
  }

  console.log(`${Model.name} modeli oluşturuldu veya güncellendi.`);
}

(async () => {
  try {
    await syncAndCreate(Address, addressData);
    await syncAndCreate(Place, placeData);
    await syncAndCreate(Category, categoryData);
    await syncAndCreate(Activity, activityData);
    await syncAndCreate(Seatcategory, seatcategoryData);
    await syncAndCreate(Seat, seatData);
    await syncAndCreate(User, userData);

    console.log("Tüm modeller oluşturuldu veya güncellendi.");
  } catch (err) {
    console.error("Model oluşturulurken hata oluştu:", err);
  }
})();



// Veritabanını oluştur veya güncelle.
async function initializeDatabase() {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Veritabanı ve tablolar oluşturuldu!");
  } catch (err) {
    console.error("Veritabanına bağlanırken hata oluştu:", err);
  }
}
initializeDatabase();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
