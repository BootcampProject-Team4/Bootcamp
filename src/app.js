import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import db from './db.js';
import categoryRouter from "./routers/categoryRouter.js";
import activityRouter from "./routers/activityRouter.js";
import addressRouter from "./routers/addressRouter.js";
import placeRouter from "./routers/placeRouter.js";
import seatRouter from "./routers/seatRouter.js";
import seatcategoryRouter from "./routers/seatcategoryRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());

app.use('/category',categoryRouter);
app.use('/activity', activityRouter);
app.use('/address', addressRouter);
app.use('/place', placeRouter);
app.use('/seat', seatRouter);
app.use('/seatcategory', seatcategoryRouter);
app.use('/user', userRouter);

// Veritabanını oluştur veya güncelle.
async function initializeDatabase() {
  try {
    await db.sequelize.sync({ force: false });
    console.log('Veritabanı ve tablolar oluşturuldu!');
  } catch (err) {
    console.error('Veritabanına bağlanırken hata oluştu:', err);
  }
}
initializeDatabase();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

