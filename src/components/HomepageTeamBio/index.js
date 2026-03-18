import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const teamList = [
  {
    title: "Becca Mckenzie",
    img: "/img/team/Becca.png",
    description: "Chief Legal and Business Officer",
  },
  {
    title: "Jess Tang",
    img: "/img/team/Jess.png",
    description: "Senior Legal Counsel",
  },
  {
    title: "Josephine Robinson",
    img: "/img/team/Josephine.png",
    description: "Information Security Director",
  },
  {
    title: "Hazem Elhusseiny",
    img: "/img/team/Hazem.png",
    description: "Senior Security Engineer",
  },
  {
    title: "Anushree Gopal",
    img: "/img/team/Anushree.png",
    description: "Information Security Analyst",
  },
];

const Team = ({ img, title, description }) => {
  return (
    <div className={clsx("col col--2")}>
      <div className="text--center">
        <img src={img} className={styles.teamSvg} alt={`${title} Headshot`} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="team-member-role">{description}</p>
      </div>
    </div>
  );
};

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
};

export default HomepageTeamBio;
