import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Artificial Intelligence",
      description:
        "Designing intelligent solutions, applying machine learning techniques and developing anomaly detection systems.",
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
        "Transforming raw data into actionable insights through data analysis, processing and predictive modeling.",
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
        "Developing backend applications and integrating AI models into robust and efficient APIs.",
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
        "Building web interfaces and managing data within full-stack applications.",
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
            Skills developed through my projects in Artificial Intelligence,
            Data Science, backend development and web applications.
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