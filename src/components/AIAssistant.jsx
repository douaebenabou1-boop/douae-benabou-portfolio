import { useState } from "react";
import "./AIAssistant.css";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! I'm Douae's AI Portfolio Assistant. Ask me about her AI projects, skills, experience or education."
    }
  ]);

  const suggestions = [
    "What are Douae's AI projects?",
    "Tell me about her RAG experience",
    "What are her main technical skills?",
    "Why should I interview Douae?"
  ];

  const getResponse = (question) => {
    const q = question.toLowerCase();

    if (
      q.includes("rag") ||
      q.includes("llama") ||
      q.includes("multi-agent")
    ) {
      return "Douae developed an AI Multi-Agent & RAG Assistant using Python and Django. The project combines Retrieval-Augmented Generation, a local Llama 3.2 model, multi-agent concepts, n8n workflows and prompt engineering.";
    }

    if (
      q.includes("project") ||
      q.includes("projects")
    ) {
      return "Douae has worked on several AI and Data projects, including a Data Lakehouse & Smart Pricing platform, an AI Multi-Agent & RAG Assistant, an Automatic License Plate Recognition system, and Machine Learning solutions for fraud detection.";
    }

    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("technologies")
    ) {
      return "Her technical profile covers Artificial Intelligence, Machine Learning, Data Science, Big Data and software development. Her tools include Python, Scikit-learn, PyTorch, Pandas, NumPy, Django, Flask, Spark, Airflow, Docker, MLflow, SQL and NoSQL.";
    }

    if (
      q.includes("experience") ||
      q.includes("work") ||
      q.includes("professional")
    ) {
      return "Douae has professional experience in Data Science and web development. Her experience includes AI-based banking fraud detection at Banque Populaire, web application development at FOS-MEF, and an observation internship at SNRT.";
    }

    if (
      q.includes("fraud") ||
      q.includes("bank")
    ) {
      return "Douae has worked on fraud detection in both academic and professional contexts, including Machine Learning model comparison, anomaly detection, financial transaction analysis and API integration.";
    }

    if (
      q.includes("computer vision") ||
      q.includes("plate") ||
      q.includes("ocr")
    ) {
      return "Douae developed an Automatic License Plate Recognition system combining Deep Learning, CNN, EasyOCR, OpenCV and Flask.";
    }

    if (
      q.includes("education") ||
      q.includes("degree") ||
      q.includes("study")
    ) {
      return "Douae is pursuing a Master's degree in Artificial Intelligence & Data Science at EMSI in Rabat, Morocco. Her academic background also includes Computer Networks and Physical Sciences.";
    }

    if (
      q.includes("interview") ||
      q.includes("hire") ||
      q.includes("candidate") ||
      q.includes("internship")
    ) {
      return "Douae combines academic training in AI & Data Science with hands-on projects in Machine Learning, RAG, Computer Vision, Big Data and fraud detection, as well as professional experience. She is currently looking for a 6-month PFE internship.";
    }

    return "I can tell you about Douae's AI projects, RAG experience, technical skills, education and professional experience. Try asking me one of the suggested questions.";
  };

  const sendMessage = (question = input) => {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) return;

    const response = getResponse(cleanQuestion);

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        type: "user",
        text: cleanQuestion
      },
      {
        type: "ai",
        text: response
      }
    ]);

    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* FLOATING BUTTON */}

      {!isOpen && (
        <button
          className="ai-floating-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Portfolio Assistant"
        >
          <span className="ai-floating-icon">✦</span>

          <span className="ai-floating-text">
            Ask my AI
          </span>

          <span className="ai-online-dot"></span>
        </button>
      )}


      {/* CHAT WINDOW */}

      {isOpen && (
        <div className="ai-assistant">

          {/* HEADER */}

          <div className="assistant-header">

            <div className="assistant-identity">

              <div className="assistant-logo">
                ✦
              </div>

              <div>
                <strong>
                  Ask Douae AI
                </strong>

                <span>
                  <i></i>
                  Online · Portfolio Assistant
                </span>
              </div>

            </div>


            <button
              className="assistant-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI assistant"
            >
              ×
            </button>

          </div>


          {/* CHAT */}

          <div className="assistant-chat">

            {messages.map((message, index) => (

              <div
                className={`assistant-message ${message.type}`}
                key={index}
              >

                {message.type === "ai" && (
                  <div className="assistant-avatar">
                    ✦
                  </div>
                )}


                <div className="assistant-message-body">

                  <span>
                    {message.type === "ai"
                      ? "DOUAE AI"
                      : "YOU"}
                  </span>

                  <p>
                    {message.text}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* SUGGESTIONS */}

          <div className="assistant-suggestions">

            <span className="suggestions-label">
              TRY ASKING
            </span>

            <div>

              {suggestions.map((suggestion) => (

                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>

              ))}

            </div>

          </div>


          {/* INPUT */}

          <form
            className="assistant-input"
            onSubmit={handleSubmit}
          >

            <span>
              ✦
            </span>

            <input
              type="text"
              placeholder="Ask something about Douae..."
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
            />

            <button
              type="submit"
              aria-label="Send message"
            >
              ↑
            </button>

          </form>


          {/* FOOTER */}

          <div className="assistant-footer">
            AI PORTFOLIO ASSISTANT · DOUAE BENABOU
          </div>

        </div>
      )}
    </>
  );
}

export default AIAssistant;