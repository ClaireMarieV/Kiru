// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require("../../lib/db");

export default async (req, res) => {
  await db.newClothe({ name: "dresses", price: "50" });
  await db.newUser({
    name: "Archo",
    email: "poulos@gmail.com",
    password: "absdefghijk",
  });
  await db.newUser({
    name: "Marc",
    firstname: "Pesto",
    address: "50 bis Roma street",
    country: "Roma",
    number: "0622665526",
  });
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
