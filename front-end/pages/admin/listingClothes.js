import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";

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
        {clothes.map((clothe) => (
          <>
            <div>{clothe.name}</div>
            <div>{clothe.price}</div>
            <div>
              <img src={clothe.image} />
            </div>
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
        .div {
          flex-direction: column;
          display: flex;
          width: 18rem;
        }
      `}</style>
    </Layout>
  );
};
export default ListingPage;
