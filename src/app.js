import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import db from './db.js';
import categoryRouter from "./routers/categoryRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT;



app.use(bodyParser.json());
app.use(express.json());


app.use('/category',categoryRouter)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// Veritabanını oluştur veya güncelle.
async function initializeDatabase() {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Veritabanı ve tablolar oluşturuldu!');
  } catch (err) {
    console.error('Veritabanına bağlanırken hata oluştu:', err);
  }
}

initializeDatabase();

