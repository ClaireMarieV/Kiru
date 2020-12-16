const strapi = require("../../lib/strapi");

export default async (req, res) => {
  const customers = {
    identifier: "va.mcx@gmail.com",
    password: "AbCdE1234",
  };

  const request = {
    method: "POST",
    body: JSON.stringify(customers),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:1337/auth/local", request)
    .then((res) => res.json())
    .then((response) => res.end(JSON.stringify(response)));
};
