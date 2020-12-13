exports.getClothes = () =>
  fetch("http://localhost:1337/clothes").then((response) => response.json());
