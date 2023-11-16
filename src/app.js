import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import db from './db.js';
import User from './models/user.js';
import Category from './models/category.js';
import Activity from "./models/activity.js";
import Place from "./models/place.js";
import Address from "./models/address.js";
import Seat from "./models/seat.js";
import Seatcategory from "./models/seatcategory.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());



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

app.use(express.json());


// Örnek bir kullanıcı oluştur
app.post('/createUser', async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Örnek bir kullanıcı oluştur
app.post('/createCategories', async (req, res) => {
  try {
    const { id, name } = req.body;
    const category = await Category.create({ id, name });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/Categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Örnek bir kullanıcı oluştur
app.post('/createActivities', async (req, res) => {
  try {
    const { name, startdate, enddate, starttime, endtime, description, capacity, category_id, place_id } = req.body;
    const activity = await Activity.create({ name, startdate, enddate, starttime, endtime, description, capacity, category_id, place_id });
    res.status(201).json(activity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Örnek bir kullanıcı oluştur
app.post('/createPlace', async (req, res) => {
  try {
    const { id, name, interior, seatcapacity, standcapacity, address_id } = req.body;
    const place = await Place.create({ id, name, interior, seatcapacity, standcapacity, address_id });
    res.status(201).json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/places', async (req, res) => {
  try {
    const places = await Place.findAll();
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Örnek bir kullanıcı oluştur
app.post('/createAddress', async (req, res) => {
  try {
    const { id, city, district, neighborhood, street, gatenumber } = req.body;
    const address = await Address.create({ id, city, district, neighborhood, street, gatenumber });
    res.status(201).json(address);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/addresses', async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Örnek bir kullanıcı oluştur
app.post('/createSeats', async (req, res) => {
  try {
    const { id, benchseat, number, seatcategory_id, place_id, pay  } = req.body;
    const seat = await Seat.create({ id, benchseat, number, seatcategory_id, place_id, pay });
    res.status(201).json(seat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/seats', async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.status(200).json(seats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Örnek bir kullanıcı oluştur
app.post('/createSeatcategories', async (req, res) => {
  try {
    const { id, name  } = req.body;
    const seatcategory = await Seatcategory.create({ id, name  });
    res.status(201).json(seatcategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tüm kullanıcıları getir
app.get('/seatcategories', async (req, res) => {
  try {
    const seatcategories = await Seatcategory.findAll();
    res.status(200).json(seatcategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



