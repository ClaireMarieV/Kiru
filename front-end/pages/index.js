import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <div className="logo">
      <img src="/logo/kiru.svg" />
      <style jsx>{`
        .logo {
          margin: auto;
          max-width: 25rem;
        }
        .logo img {
          width: 100%;
        }
      `}</style>
    </div>
  </Layout>
);
export default IndexPage;
