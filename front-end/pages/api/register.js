const strapi = require("../../lib/strapi");

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const customers = {
    username: body.lastname + body.firstname,
    email: body.email,
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
    const jwt = fetch("http://localhost:1337/auth/local/register", request)
      .then((res) => res.json())
      .then((response) => res.end(JSON.stringify(response)))
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  } else {
    res.statusCode = 401;
    res.end();
  }
};
