import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";

const ProfilPage = () => {
  return (
    <Layout>
      <Container>
        <div className="form">
          <h2>Bienvenue sur votre profil</h2>

          <div className="div">
            <label>Nom</label>
            <input></input>
          </div>
          <div className="div">
            <label>Prénom</label>
            <input></input>
          </div>
          <div className="div">
            <label>Adresse</label>
            <input></input>
          </div>
          <div className="div">
            <label>Ville</label>
            <input></input>
          </div>
          <div className="div">
            <label>Code Postal</label>
            <input></input>
          </div>
          <div className="div">
            <label>Email</label>
            <input />
          </div>
          <div className="div">
            <label>Numéro de téléphone</label>
            <input />
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
export default ProfilPage;
