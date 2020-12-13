// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const strapi = require("../../lib/strapi");

export default async (req, res) => {
  if (req.method === "GET") {
    const clothes = await strapi.getClothes();

    res.statusCode = 200;
    res.end(JSON.stringify(clothes));
  }
};
