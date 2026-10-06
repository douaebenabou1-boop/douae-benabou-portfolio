import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* HEADER */}
        <div className="section-heading">

          <span className="section-number">01</span>

          <div>
            <p className="section-label">ABOUT ME</p>

            <h2>
              Turning curiosity
              <br />
              into <span>intelligent systems.</span>
            </h2>
          </div>

        </div>


        {/* MAIN CONTENT */}
        <div className="about-grid">

          <div className="about-intro">

            <p className="about-lead">
              I am Douae Benabou, an Artificial Intelligence
              & Data Engineering student passionate about
              building intelligent and meaningful digital solutions.
            </p>

            <p>
              My journey combines data science, machine learning
              and software engineering. I enjoy transforming
              raw data into useful insights, predictive models
              and practical applications.
            </p>

            <p>
              From data preparation and feature engineering
              to model development and API integration, I am
              interested in understanding the complete lifecycle
              of an AI solution.
            </p>

            <p>
              I am currently looking for a challenging
              <strong> 6-month PFE internship</strong> where
              I can contribute to real-world projects in
              Artificial Intelligence, Machine Learning,
              Data Science or Data Engineering.
            </p>

          </div>


          {/* FOCUS */}
          <div className="focus-card">

            <div className="focus-top">
              <span>MY FOCUS</span>
              <span className="focus-icon">↗</span>
            </div>

            <div className="focus-list">

              <div className="focus-item">
                <span className="focus-index">01</span>

                <div>
                  <h3>Artificial Intelligence</h3>
                  <p>
                    Machine Learning · Deep Learning ·
                    Intelligent Systems
                  </p>
                </div>
              </div>

              <div className="focus-item">
                <span className="focus-index">02</span>

                <div>
                  <h3>Data Science</h3>
                  <p>
                    Data Analysis · Feature Engineering ·
                    Predictive Modeling
                  </p>
                </div>
              </div>

              <div className="focus-item">
                <span className="focus-index">03</span>

                <div>
                  <h3>AI Engineering</h3>
                  <p>
                    APIs · Backend · Model Integration ·
                    Deployment
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="about-stats">

          <div className="stat">
            <span className="stat-number">AI</span>
            <span className="stat-label">
              Main specialization
            </span>
          </div>

          <div className="stat">
            <span className="stat-number">DATA</span>
            <span className="stat-label">
              Engineering & Analytics
            </span>
          </div>

          <div className="stat">
            <span className="stat-number">PFE</span>
            <span className="stat-label">
              6-month internship
            </span>
          </div>

          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">
              Curiosity & learning
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;