import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Artificial Intelligence",
      description:
        "Conception de solutions intelligentes, apprentissage automatique et détection d'anomalies.",
      skills: [
        "Machine Learning",
        "Feature Engineering",
        "Anomaly Detection",
        "Scikit-learn",
        "Isolation Forest",
      ],
    },

    {
      number: "02",
      title: "Data Science",
      description:
        "Transformation des données brutes en informations exploitables et modèles prédictifs.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Data Analysis",
        "Data Processing",
      ],
    },

    {
      number: "03",
      title: "Backend & APIs",
      description:
        "Développement d'applications backend et intégration de modèles IA dans des APIs.",
      skills: [
        "FastAPI",
        "Flask",
        "Django",
        "REST API",
        "Python",
      ],
    },

    {
      number: "04",
      title: "Web & Databases",
      description:
        "Création d'interfaces web et gestion des données dans des applications full-stack.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "SQL",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-header">

          <div>
            <p className="skills-label">
              03 — SKILLS
            </p>

            <h2>
              Technologies
              <br />
              <span>& expertise.</span>
            </h2>
          </div>

          <p className="skills-intro">
            Des compétences développées à travers mes projets
            en Intelligence Artificielle, Data Science,
            développement backend et applications web.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (

            <article
              className="skill-card"
              key={group.number}
            >

              <div className="skill-card-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>

              </div>

              <h3>
                {group.title}
              </h3>

              <p>
                {group.description}
              </p>

              <div className="skill-tags">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;