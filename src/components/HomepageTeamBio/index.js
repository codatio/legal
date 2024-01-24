import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const TeamList = [
  {
    title: 'Calum Redhead',
    Svg: require('@site/static/img/Calum.svg').default,
    description: (
      <>
        Senior Legal Council
      </>
    )
  },
  {
    title: 'Becca Mckenzie',
    Svg: require('@site/static/img/Becca.svg').default,
    description: (
      <>
        Head of Legal
      </>
    )
  },
  {
    title: 'Hayriye Cinar',
    Svg: require('@site/static/img/Hayriye.svg').default,
    description: (
      <>
        Information Security Manager
      </>
    )
  },
  {
    title: 'Josephine Robinson',
    Svg: require('@site/static/img/Josephine.svg').default,
    description: (
      <>
        Senior Information Security Manager
      </>
    )
  },
  {
    title: 'Andy Ballinger',
    Svg: require('@site/static/img/Andy.svg').default,
    description: (
      <>
        Senior Application Security Engineer
      </>
    )
  }
];

function Team({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.teamSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="team-member-role">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageTeamBio() {
  return (
    <section className={styles.teams}>
      <div className="container">
        <div className="row">
          {TeamList.map((props, idx) => (
            <Team key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
