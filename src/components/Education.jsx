import "./Education.css";

function Education() {

  const education = [
    {
      year: "2024 — 2027",
      degree: "Master's Degree",
      field: "Artificial Intelligence & Data Science",
      school: "EMSI",
      location: "Rabat, Morocco"
    },

    {
      year: "2023 — 2024",
      degree: "Bachelor's Degree",
      field: "Computer Networks",
      school: "EMSI",
      location: "Rabat, Morocco"
    },

    {
      year: "2021 — 2022",
      degree: "Baccalaureate",
      field: "Physical Sciences",
      school: "",
      location: "Morocco"
    }
  ];


  const certifications = [
    {
      number: "01",
      title: "Introduction to Big Data",
      issuer: "Coursera",
      category: "BIG DATA"
    },

    {
      number: "02",
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      category: "PYTHON · AI"
    },

    {
      number: "03",
      title: "Software Design & Project Management",
      issuer: "Coursera",
      category: "SOFTWARE ENGINEERING"
    },

    {
      number: "04",
      title: "JavaScript",
      issuer: "Coursera",
      category: "WEB DEVELOPMENT"
    },

    {
      number: "05",
      title: "Object-Oriented Programming in C++",
      issuer: "Coursera",
      category: "PROGRAMMING"
    }
  ];


  return (

    <section className="education" id="education">

      <div className="education-container">


        {/* HEADER */}

        <div className="education-header">

          <div>

            <p className="education-label">
              06 — EDUCATION & CERTIFICATIONS
            </p>

            <h2>
              Knowledge that
              <br />
              <span>keeps evolving.</span>
            </h2>

          </div>

          <p className="education-intro">
            My academic journey combines Artificial Intelligence,
            Data Science, computer networks and continuous learning
            through specialized certifications.
          </p>

        </div>


        {/* TWO COLUMNS */}

        <div className="education-grid">


          {/* EDUCATION */}

          <div className="education-column">

            <div className="column-heading">

              <span>01</span>

              <h3>
                Education
              </h3>

            </div>


            <div className="education-list">

              {education.map((item) => (

                <article
                  className="education-item"
                  key={item.year + item.field}
                >

                  <span className="education-year">
                    {item.year}
                  </span>

                  <h4>
                    {item.degree}
                  </h4>

                  <p className="education-field">
                    {item.field}
                  </p>

                  <div className="education-school">

                    {item.school && (
                      <strong>
                        {item.school}
                      </strong>
                    )}

                    <span>
                      {item.location}
                    </span>

                  </div>

                </article>

              ))}

            </div>

          </div>



          {/* CERTIFICATIONS */}

          <div
            className="certifications-column"
            id="certifications"
          >

            <div className="column-heading">

              <span>02</span>

              <h3>
                Certifications
              </h3>

            </div>


            <div className="certifications-list">

              {certifications.map((certification) => (

                <article
                  className="certification-item"
                  key={certification.number}
                >

                  <div className="certification-number">
                    {certification.number}
                  </div>


                  <div className="certification-content">

                    <span className="certification-category">
                      {certification.category}
                    </span>

                    <h4>
                      {certification.title}
                    </h4>

                    <p>
                      {certification.issuer}
                    </p>

                  </div>


                  <div className="certification-arrow">
                    ↗
                  </div>

                </article>

              ))}

            </div>

          </div>


        </div>

      </div>

    </section>

  );
}

export default Education;