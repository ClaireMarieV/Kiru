import React, { useState } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";

const EditPage = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [matter, setMatter] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const edit = () => {
    setLoading(true);
    setError(null);
    fetch("/api/clothes", {
      method: "post",
      body: JSON.stringify({ image, name, description, price, matter }),
    })
      .then(() => {
        window.location = "/newClothe";
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <Container>
        <div className="form">
          <label for="image">Upload Image</label>
          <input
            type="file"
            id="image"
            onChange={(event) => {
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function () {
                setImage(reader.result);
              };
              reader.onerror = function (error) {
                console.log("Error: ", error);
              };
            }}
          />

          <label htmlFor="name">Nom</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label htmlFor="matter">Matiere</label>
          <input
            type="text"
            value={matter}
            onChange={(event) => setMatter(event.target.value)}
          />
          <label htmlFor="price">Prix</label>
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <div className="button">
            <button onClick={edit}>Added</button>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          align-self: center;
          justify-self: center;
        }
        .div {
          flex-direction: column;
          display: flex;
          width: 18rem;
        }
      `}</style>
    </Layout>
  );
};
export default EditPage;
