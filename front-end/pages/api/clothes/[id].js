const strapi = require("../../../lib/strapi");

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;
  if (req.method === "GET") {
    const clothe = await strapi.getClothe(id);
    res.end(JSON.stringify(clothe));
  }
}
