// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require("../../lib/db");

export default async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    await db.newClothe({
      name: body.name,
      description: body.description,
      matter: body.matter,
      price: body.price,
    });

    res.statusCode = 200;
    res.end();
  }
};
