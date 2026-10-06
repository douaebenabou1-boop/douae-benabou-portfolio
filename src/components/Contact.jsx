import "./Contact.css";

function Contact() {
  const email = "douaebenabou1@gmail.com";

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* TOP */}

        <div className="contact-top">

          <p className="contact-label">
            07 — CONTACT
          </p>

          <div className="contact-status">
            <span></span>
            AVAILABLE FOR PFE INTERNSHIP
          </div>

        </div>


        {/* MAIN */}

        <div className="contact-main">

          <p className="contact-small-title">
            HAVE A PROJECT, OPPORTUNITY OR IDEA?
          </p>

          <h2>
            Let's build something
            <br />
            <span>intelligent together.</span>
          </h2>

          <p className="contact-description">
            I'm currently looking for a 6-month PFE internship
            in Artificial Intelligence, Data Science, Machine Learning
            or Data Engineering. I'm always open to discussing
            innovative projects, research opportunities and collaborations.
          </p>


          {/* LET'S TALK BUTTON */}

          <a
            href={`mailto:${email}`}
            className="contact-button"
          >
            <span>Let's talk</span>

            <div className="contact-button-arrow">
              ↗
            </div>
          </a>

        </div>


        {/* CONTACT LINKS */}

        <div className="contact-links">


          {/* EMAIL */}

          <a
            href={`mailto:${email}`}
            className="contact-link"
          >
            <div>

              <span className="contact-link-label">
                EMAIL
              </span>

              <strong>
                {email}
              </strong>

            </div>

            <span className="contact-link-arrow">
              ↗
            </span>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/douae-benabou"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >

            <div>

              <span className="contact-link-label">
                LINKEDIN
              </span>

              <strong>
                Connect with me
              </strong>

            </div>

            <span className="contact-link-arrow">
              ↗
            </span>

          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/douaebenabou1-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >

            <div>

              <span className="contact-link-label">
                GITHUB
              </span>

              <strong>
                Explore my code
              </strong>

            </div>

            <span className="contact-link-arrow">
              ↗
            </span>

          </a>

        </div>


        {/* FOOTER */}

        <footer className="portfolio-footer">

          <div className="footer-brand">

            <span className="footer-dot"></span>

            DOUAE BENABOU

          </div>


          <p>
            AI & Data Engineering
          </p>


          <a href="#home">
            BACK TO TOP ↑
          </a>

        </footer>

      </div>

    </section>
  );
}

export default Contact;