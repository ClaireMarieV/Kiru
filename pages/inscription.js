import React from "react";
import Layout from "../components/Layout";

const InscriptionPage = () => (
  <Layout>
    <form method="POST">
      <div>
        <label for="name">Nom</label>
        <input type="name" />
      </div>
      <div>
        <label for="firstname">Prenom</label>
        <input type="firstname" />
      </div>
      <div>
        <label for="address">Adresse</label>
        <input type="address" />
      </div>
      <div>
        <label for="postal">Code Postal </label>
        <input type="postal" />
      </div>
      <div>
        <label for="country">Pays</label>
        <input type="country" />
      </div>
      <div>
        <label for="firstname">Prenom </label>
        <input type="firstname" />
      </div>
      <div>
        <button type="submit" value="Bienvenu!" />
      </div>
    </form>
    <style jsx>{`
      form {
        display: flex;
        flex-direction: column;
        margin: auto;
      }
      form div {
        display: flex;
      }
    `}</style>
  </Layout>
);
export default InscriptionPage;
