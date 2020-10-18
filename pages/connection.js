import React, { useState } from "react";
import Layout from "../components/Layout";
import Cookies from "js-cookie";

const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const connect = () => {
    setLoading(true);
    setError(null);
    fetch("/api/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then(({ jwt }) => {
        Cookies.set("jwt", jwt);
      })
      .then(() => {
        window.location = "/profil";
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="button">
          <button onClick={connect}>Bienvenue</button>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 44rem;
          margin: auto;
        }
        .form {
          display: grid;
          flex-direction: column;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .form div {
          display: flex;
          flex-direction: column;
          margin: 0.5rem;
        }
        .button {
          margin: auto;
        }
      `}</style>
    </Layout>
  );
};
export default ConnectPage;
