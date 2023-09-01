import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Legal</h1>
        <p>
          Our website is offered subject to your acceptance of our website terms, software terms and conditions (as applicable) and any other operating rules, policies (including, without limitation, our privacy and cookie policy) and procedures that may be published from time to time on our website (together, our "online terms").
        </p>
        <p>
          Please read our online terms before accessing our site, forum or using our services - by accessing or using any part of our site or service, you agree to be bound by these online terms.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
