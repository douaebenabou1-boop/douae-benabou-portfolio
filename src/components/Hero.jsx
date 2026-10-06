import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="grid"></div>
      </div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="availability">
            <span></span>
            Available for PFE Internship
          </div>

          <p className="hero-label">
            ARTIFICIAL INTELLIGENCE · DATA · SOFTWARE
          </p>

          <h1>
            Douae
            <br />
            <span>Benabou.</span>
          </h1>

          <h2>
            AI & Data Engineering
          </h2>

          <p className="hero-description">
            I design intelligent solutions that transform data into
            meaningful insights, predictive systems and real-world
            applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore my work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's connect
            </a>

          </div>

          <div className="hero-tech">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Data Science</span>
            <span>AI Engineering</span>
          </div>

        </div>


        {/* RIGHT SIDE — PHOTO */}
        <div className="hero-visual">

          <div className="photo-orbit orbit-one"></div>
          <div className="photo-orbit orbit-two"></div>

          <div className="photo-wrapper">

            <div className="photo-glow"></div>

            <div className="photo-frame">

              <img
                src="/images/photo.png"
                alt="Douae Benabou"
              />

            </div>

          </div>

          <div className="floating-card card-ai">
            <span>AI</span>
            <small>Intelligence</small>
          </div>

          <div className="floating-card card-data">
            <span>DATA</span>
            <small>Engineering</small>
          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;