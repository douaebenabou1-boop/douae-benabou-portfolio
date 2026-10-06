import "./Projects.css";

function Projects() {

  const projects = [

    {
      number: "01",
      type: "BIG DATA · AI · MLOPS",

      title: "Data Lakehouse & Smart Pricing",

      description:
        "Design and development of a complete e-commerce Big Data platform combining a Lakehouse architecture, distributed data processing, and Artificial Intelligence.",

      details:
        "Built a scalable data architecture using Docker and MinIO, implemented distributed data processing with Apache Spark, and orchestrated data pipelines with Apache Airflow. Integrated an AI-driven Smart Pricing system, tracked machine learning experiments with MLflow, and delivered insights through an interactive Streamlit dashboard.",

      technologies: [
        "Python",
        "Apache Spark",
        "Airflow",
        "Docker",
        "MinIO",
        "MLflow",
        "Streamlit",
        "MLOps"
      ],

      result: "BIG DATA · AI · MLOPS",
      link: "#"
    },

    {
      number: "02",
      type: "GENERATIVE AI · RAG · MULTI-AGENT",

      title: "AI Multi-Agent & RAG Assistant",

      description:
        "Development of an intelligent contextual assistant based on a multi-agent architecture and Retrieval-Augmented Generation (RAG).",

      details:
        "Designed an intelligent assistant using Python and Django with a locally deployed Llama 3.2 model. Implemented a RAG architecture for contextual information retrieval, automated workflows with n8n, and improved interactions through prompt engineering techniques.",

      technologies: [
        "Python",
        "Django",
        "RAG",
        "Llama 3.2",
        "Multi-Agent",
        "n8n",
        "Prompt Engineering"
      ],

      result: "GENERATIVE AI · INTELLIGENT ASSISTANT",
      link: "#"
    },

    {
      number: "03",
      type: "COMPUTER VISION · DEEP LEARNING",

      title: "Automatic License Plate Recognition",

      description:
        "Design and development of an intelligent automatic license plate recognition system using Deep Learning and Computer Vision.",

      details:
        "Developed a complete computer vision pipeline combining a CNN-based approach for license plate detection with EasyOCR for text extraction. Processed images and video streams using OpenCV and integrated the solution into a Flask-based visualization interface.",

      technologies: [
        "Python",
        "Deep Learning",
        "CNN",
        "EasyOCR",
        "OpenCV",
        "Flask",
        "Computer Vision"
      ],

      result: "COMPUTER VISION PIPELINE",
      link: "#"
    },

    {
      number: "04",
      type: "MACHINE LEARNING · FRAUD DETECTION",

      title: "Machine Learning Fraud Detection",

      description:
        "Design and evaluation of a Machine Learning system for detecting potentially fraudulent transactions.",

      details:
        "Compared multiple supervised Machine Learning algorithms including K-Nearest Neighbors, Support Vector Machines, and Decision Trees using Python and Scikit-learn. Performed hyperparameter optimization and model evaluation to identify the most suitable approaches for fraud detection.",

      technologies: [
        "Python",
        "Scikit-learn",
        "KNN",
        "SVM",
        "Decision Tree",
        "Machine Learning"
      ],

      result: "MODEL COMPARISON · OPTIMIZATION",
      link: "#"
    }

  ];


  return (

    <section className="projects" id="projects">

      <div className="projects-container">

        {/* HEADER */}

        <div className="projects-header">

          <div>

            <p className="projects-label">
              04 — SELECTED PROJECTS
            </p>

            <h2>
              From ideas
              <br />
              <span>to intelligent systems.</span>
            </h2>

          </div>

          <p className="projects-intro">
            A selection of projects exploring Artificial Intelligence,
            Machine Learning, Big Data, Computer Vision,
            and Generative AI.
          </p>

        </div>


        {/* PROJECTS */}

        <div className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">

                <div className="project-top">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <span className="project-arrow">
                    ↗
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-details">
                  {project.details}
                </p>

                <div className="project-technologies">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

                <div className="project-bottom">

                  <span className="project-result">
                    {project.result}
                  </span>

                  <a
                    href={project.link}
                    className="project-link"
                  >
                    View Project ↗
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;