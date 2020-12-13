import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Picture from "../components/Picture";

const ListingPage = () => {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [matter, setMatter] = useState("");
  // const [price, setPrice] = useState("");
  const [clothes, setClothes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/clothes")
      .then((response) => response.json())
      .then((clothes) => {
        setLoading(false);
        setClothes(clothes);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Container>
        {clothes
          .filter((clothe) => clothe.pictures.length)
          .map((clothe) => (
            <>
              <div>{clothe.name}</div>
              <div>{clothe.price}</div>
              <Picture
                className="img"
                picture={{
                  picture:
                    "http://localhost:1337" +
                    clothe.pictures[0].formats.small.url,
                }}
              />
            </>
          ))}
      </Container>
      <style jsx>{`
        .form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          align-self: center;
          justify-self: center;
        }
        .img {
          flex-direction: column;
          display: flex;
          width: 100%;
        }
      `}</style>
    </Layout>
  );
};
export default ListingPage;
