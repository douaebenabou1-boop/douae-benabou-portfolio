import "./Experience.css";

function Experience() {

  const experiences = [
    {
      number: "01",
      period: "JULY  — August 2026 ",
      company: "Banque Populaire",
      location: "Rabat, Morocco",
      role: "Data Scientist",

      description:
        "Design and deployment of an intelligent API for bank card fraud detection using Artificial Intelligence.",

      missions: [
        "Developed an anomaly detection solution for banking transactions.",
        "Analyzed and prepared financial transaction data for Machine Learning.",
        "Designed an API to integrate the fraud detection model into an operational application.",
        "Deployed and integrated the Machine Learning model into a usable solution."
      ],

      technologies: [
        "Machine Learning",
        "Anomaly Detection",
        "Python",
        "API",
        "Financial Data"
      ],

      status: "2026"
    },

    {
      number: "02",
      period: "JULY — AUGUST 2025",
      company:
        "Foundation for Social Works of the Ministry of Economy and Finance",
      location: "Rabat, Morocco",
      role: "Web Developer",

      description:
        "Development of a web application for managing complaints within the Foundation for Social Works of the Ministry of Economy and Finance.",

      missions: [
        "Developed a web application dedicated to complaint management.",
        "Contributed to Full-Stack application development.",
        "Participated in software architecture design and data modeling.",
        "Performed testing, debugging, and application improvements."
      ],

      technologies: [
        "Full-Stack Development",
        "Web Development",
        "Software Architecture",
        "Data Modeling",
        "Testing"
      ],

      status: "2025"
    },

    {
      number: "03",
      period: "SEPTEMBER — NOVEMBER 2024",
      company:
        "National Broadcasting and Television Company (SNRT)",
      location: "Rabat, Morocco",
      role: "Observation Intern",

      description:
        "Introduction to the management, indexing, digitization, and use of audiovisual archives in a professional broadcasting environment.",

      missions: [
        "Observed audiovisual content indexing processes.",
        "Learned about archive digitization workflows.",
        "Explored methods used to manage and retrieve audiovisual archives.",
        "Gained first-hand exposure to a professional broadcasting environment."
      ],

      technologies: [
        "Digital Archives",
        "Indexing",
        "Digitization",
        "Audiovisual Data"
      ],

      status: "2024"
    }
  ];


  return (

    <section className="experience" id="experience">

      <div className="experience-container">

        {/* HEADER */}

        <div className="experience-header">

          <div>

            <p className="experience-label">
              05 — EXPERIENCE
            </p>

            <h2>
              Learning by
              <br />
              <span>building.</span>
            </h2>

          </div>

          <p className="experience-intro">
            Professional experiences that allowed me to explore
            Artificial Intelligence, Data Science, software development,
            and real-world professional environments.
          </p>

        </div>


        {/* TIMELINE */}

        <div className="experience-timeline">

          {experiences.map((experience) => (

            <article
              className="experience-item"
              key={experience.number}
            >

              {/* TIMELINE */}

              <div className="timeline-column">

                <div className="timeline-number">
                  {experience.number}
                </div>

                <div className="timeline-line"></div>

              </div>


              {/* CONTENT */}

              <div className="experience-content">

                <div className="experience-top">

                  <div>

                    <span className="experience-period">
                      {experience.period}
                    </span>

                    <span className="experience-status">
                      {experience.status}
                    </span>

                  </div>

                  <span className="experience-arrow">
                    ↗
                  </span>

                </div>


                <h3>
                  {experience.role}
                </h3>


                <div className="experience-company">

                  <strong>
                    {experience.company}
                  </strong>

                  <span>
                    {experience.location}
                  </span>

                </div>


                <p className="experience-description">
                  {experience.description}
                </p>


                {/* MISSIONS */}

                <div className="experience-missions">

                  {experience.missions.map((mission) => (

                    <div
                      className="mission"
                      key={mission}
                    >

                      <span className="mission-dot"></span>

                      <p>
                        {mission}
                      </p>

                    </div>

                  ))}

                </div>


                {/* TECHNOLOGIES */}

                <div className="experience-technologies">

                  {experience.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Experience;