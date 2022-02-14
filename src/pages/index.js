import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import developerImg from "../../static/img/developer.png";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.container}>
        <h1 className="hero__title">Study Refactoring</h1>
        <p className="hero__subtitle">by Shinyeong</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            go to Study Summary
          </Link>
        </div>
      </div>
      <div>
        <img className={styles.heroImg} src={developerImg} />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className={clsx("hero hero--primary", styles.heroBanner)} />
      <main className={clsx("hero hero--primary", styles.heroBanner)} />
    </Layout>
  );
}
