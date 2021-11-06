const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://waitqradmin:34pitchRollYaw@clusteradmin.kunmc.gcp.mongodb.net/waitqr",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); //Detener la app
  }
};

module.exports = conectarDB;
