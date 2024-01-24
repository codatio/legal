import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const teamList = [
  {
    title: 'Becca Mckenzie',
    img: '/img/team/Becca.png',
    description: 'Head of Legal'
  },
  {
    title: 'Calum Redhead',
    img: '/img/team/Calum.png',
    description: 'Senior Legal Council'
  },
  {
    title: 'Hayriye Cinar',
    img: '/img/team/Hayriye.png',
    description: 'Information Security Manager'
  },
  {
    title: 'Josephine Robinson',
    img: '/img/team/Josephine.png',
    description: 'Senior Information Security Manager'
  },
  {
    title: 'Andy Ballinger',
    img: '/img/team/Andy.png',
    description: 'Senior Application Security Engineer'
  }
];

const Team = ({img, title, description}) => {
  return (
    <div className={clsx('col col--2')}>
      <div className="text--center">
        <img src={img} className={styles.teamSvg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="team-member-role">{description}</p>
      </div>
    </div>
  );
}

const HomepageTeamBio = () => {
  return (
    <section className={styles.teams}>
      <div className="container">
        <div className="row">
          {teamList.map((props, i) => (
            <Team key={i} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageTeamBio;