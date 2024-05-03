const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file
const studentRoutes = require('./StudentRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => {
        console.log(`Error while connecting to DB: ${err}`);
  });


app.use('/allStudents', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
