import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={inter.className}>
          <h1>Contact page</h1>
        </div>

        <div className={styles.card}>
          <Link href="/" className={inter.className}>
            Home
          </Link>
        </div>
      </main>
    </>
  );
}
