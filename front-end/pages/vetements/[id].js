import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Picture from "../../components/Picture";
import Loading from "../../components/Loading";

const ClothePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [clothe, setClothe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/clothes/" + id)
      .then((response) => response.json())
      .then((clothe) => {
        setClothe(clothe);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <Container>
        <div>{clothe.name}</div>
        <div>{clothe.price}</div>
        <Picture
          className="img"
          picture={{
            picture:
              process.env.NEXT_PUBLIC_STRAPI_URL +
              clothe.pictures[0].formats.small.url,
          }}
        />
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

export default ClothePage;
