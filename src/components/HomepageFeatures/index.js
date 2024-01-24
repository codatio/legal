import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Frequently Asked Questions',
    Svg: require('@site/static/img/Speech bubble.svg').default,
    description: (
      <>
        A single resource written for legal and procurement teams to answer common questions.
      </>
    ),
    target: 'faqs'
  },
  {
    title: 'Master Services Agreement',
    Svg: require('@site/static/img/Sheet.svg').default,
    description: (
      <>
        Access our MSA, DPA, privacy policy and other legal documents.
      </>
    ),
    target: 'master_services_agreement'
  },
  {
    title: 'Codat Product Descriptions',
    Svg: require('@site/static/img/List.svg').default,
    description: (
      <>
        Access the detailed descriptions for the Codat products listed in your order form.
      </>
    ),
    target: 'product_descriptions'
  },
];

function Feature({Svg, title, description, target}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={target}>Find Out More</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
