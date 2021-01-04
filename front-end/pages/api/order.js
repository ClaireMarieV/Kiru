// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const strapi = require("../../lib/strapi");

export default async (req, res) => {
  if (req.method === "POST") {
    const clothes = await strapi.createOrder(req.headers.authentication);

    res.statusCode = 200;
    res.end(JSON.stringify(clothes));
  }
};
