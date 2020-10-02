// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require("../../lib/db");

export default async (req, res) => {
  if (req.method === "POST") {
    await db.newUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      number: req.body.number,
    });
    res.statusCode = 200;
    res.json({ name: "John Doe" });
  }
};
