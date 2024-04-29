const mongoose = require('mongoose');
require('dotenv').config();

const dbName = process.env.dbName;
const dbUrl = process.env.dbUrl;

console.log(`${dbUrl}/${dbName}`)


const mongoConnect=() =>{
    mongoose
    .connect("mongodb+srv://bibinambro011:tHgNVV3LZjObGANU@ushort.mw6nech.mongodb.net/", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { mongoConnect };
