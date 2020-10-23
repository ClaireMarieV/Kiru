const mongoose = require("mongoose");

//INITIALISATION
const clotheSchema = new mongoose.Schema({
  name: String,
  description: String,
  matter: String,
  price: Number,
});
const Clothe = mongoose.models.Clothe || mongoose.model("Clothe", clotheSchema);

const userSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,
  password: String,
  phone: Number,
  address: String,
  postal: Number,
  town: String,
  country: String,
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

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

//EXPORTS CLOTHE
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
exports.getClothe = async (name, price) => {
  try {
    const db = await getDb();
    const user = await User.findOne({
      name,
      description,
      matter,
      price,
    }).exec();
    await db.close();
    return user;
  } catch (error) {
    console.error(error);
  }
};

//EXPORTS USER
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
exports.getUser = async (email, password) => {
  try {
    const db = await getDb();
    const user = await User.findOne({
      email: email,
      password: password,
    }).exec();
    await db.close();
    return user;
  } catch (error) {
    console.error(error);
  }
};
