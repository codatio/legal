import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageTeamBio from '@site/src/components/HomepageTeamBio';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">legal.codat.com</p>
        <Heading as="h1" className="hero__title">
          {siteConfig.tagline}
        </Heading>
        <p>
          Onboarding a new vendor should be easy. At Codat, we’re committed to helping legal and procurement teams by helping streamline your onboarding process, providing clear, concise information, and offering dedicated support every step of the way. Simplifying your journey is our priority.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="faqs">
            Codat Legal Docs 📜
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageTeam() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">About us</p>
        <Heading as="h1" className="hero__title">
          Meet the team
        </Heading>
        <p>
        Codat’s dedicated Legal and Trust team work to ensure the highest standards in every aspect of our service. We prioritize building a foundation of trust through transparency. With us, you're in safe, knowledgeable hands.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // title={`Hello from ${siteConfig.title}`}
    <Layout
      title={`Codat_legal | Build powerful applications with financial data`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageTeam />
      <main>
        <HomepageTeamBio />
      </main>
    </Layout>
  );
}
