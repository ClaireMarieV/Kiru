const strapi = require("../../lib/strapi");

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const customers = {
    identifier: body.email,
    password: body.password,
  };

  const request = {
    method: "POST",
    body: JSON.stringify(customers),
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (customers) {
    fetch("http://localhost:1337/auth/local", request)
      .then((res) => res.json())
      .then((response) => res.end(JSON.stringify(response)));

    res.statusCode = 200;
  } else {
    res.statusCode = 401;
    res.end();
  }
};
