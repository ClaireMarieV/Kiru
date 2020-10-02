import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <div className={styles.title}>
      <h1>KIRU</h1>
    </div>
  </Layout>
);
export default IndexPage;
