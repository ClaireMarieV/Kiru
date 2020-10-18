import jsonWebToken from "jsonwebtoken";
import db from "../../lib/db";

export default async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const user = await db.getUser(body.email, body.password);
    if (user) {
      const jwt = jsonWebToken.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFESPAN,
      });
      res.statusCode = 200;
      res.end(JSON.stringify({ jwt }));
    } else {
      res.statusCode = 401;
      res.end();
    }
  }
};
