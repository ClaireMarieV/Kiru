exports.getClothes = () =>
  fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/clothes").then((response) =>
    response.json()
  );
