import React, { useState } from "react";
import Layout from "../components/Layout";

const InscriptionPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true);
    setError(null);
    fetch("/api/register", { method: "post" })
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="form">
        <div>
          <label htmlFor="name">Prénom</label>
          <input type="name" />
        </div>
        <div>
          <div>
            <label htmlFor="number">Numéro de téléphone</label>
            <input type="number" />
          </div>
          <label htmlFor="name">Email</label>
          <input type="name" />
        </div>
        <div>
          <label htmlFor="firstname">Password</label>
          <input type="firstname" />
        </div>
        <div>
          <button onClick={register}>Bienvenue</button>
        </div>
      </div>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          margin: auto;
        }
        .form div {
          display: flex;
        }
      `}</style>
    </Layout>
  );
};
export default InscriptionPage;
