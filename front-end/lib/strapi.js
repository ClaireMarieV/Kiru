exports.getClothes = () =>
  fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/clothes").then((response) =>
    response.json()
  );
exports.getClothe = (id) =>
  fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/clothes/" + id
  ).then((response) => response.json());
