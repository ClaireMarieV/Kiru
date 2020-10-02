const mongoose = require("mongoose");

//INITIALISATION
const clotheSchema = new mongoose.Schema({
  name: String,
  desciption: String,
  price: Number,
});
const Clothe = mongoose.model("Clothe", clotheSchema);

const userSchema = new mongoose.Schema({
  name: String,
  firstname: String,
  address: String,
  country: String,
  number: Number,
});
const User = mongoose.model("User", userSchema);

//CONNECTION
const getDb = () =>
  new Promise((resolve, reject) => {
    const db = mongoose.connect(
      "mongodb://localhost/kiru",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      function (error, db) {
        resolve(mongoose.connection);
      }
    );
  });

//EXPORTS
exports.newClothe = async (clothe) => {
  try {
    const db = await getDb();
    const clotheEntity = new Clothe(clothe);
    await clotheEntity.save();
    await db.close();
  } catch (error) {
    console.error(error);
  }
};

exports.newUser = async (user) => {
  try {
    const db = await getDb();
    const userEntity = new User(user);
    await userEntity.save();
    await db.close();
  } catch (error) {
    console.error(error);
  }
};
