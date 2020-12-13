// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require("../../lib/db");

export default async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    await db.newUser({
      lastname: body.lastname,
      firstname: body.firstname,
      email: body.email,
      password: body.password,
      number: body.number,
    });

    res.statusCode = 200;
    res.end();
  }
};
