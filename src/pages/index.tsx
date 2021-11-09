import type { NextPage } from "next";
import Link from 'next/link'
import styles from "../styles/Home.module.css";

const Home: NextPage = ({}) => {
  return <div className={styles.container}>
    <h1>Home page</h1>
    <Link href="/cameras">
      <a className={styles.link}>Link to cameras</a>
    </Link>
  </div>;
};

export default Home;
