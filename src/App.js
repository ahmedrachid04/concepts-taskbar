import React, { useState } from "react";
import IconWithText from "./Components/IconWithText";
import Modal from "./Components/Modal";
import "./Assets/styles/styles.css";
import agilityLogo from "./Assets/Logos/agile.png"
import versionControlLogo from "./Assets/Logos/git.png"
import testingLogo from "./Assets/Logos/test.png"
import uxLogo from "./Assets/Logos/ux.png"

const App = () => {
  const [modalContent, setModalContent] = useState(null);
  const [startPosition, setStartPosition] = useState(null);

  const handleConceptClick = (label, explanation, element) => {
      const rect = element.getBoundingClientRect();
      setStartPosition({
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
      });
      setModalContent({ label, explanation });
  };

  const closeModal = () => {
      setModalContent(null);
  };

  return (
      <div className="screen-container">
          <div
              className="section"
              style={{ backgroundColor: "#F26619" }}
              onClick={(e) =>
                  handleConceptClick(
                      "Agility",
                      "Agility is about being flexible and quick in software development...",
                      e.currentTarget
                  )
              }
          >
              <IconWithText logo={agilityLogo} label="Agility" />
          </div>
          <div
              className="section"
              style={{ backgroundColor: "#2F4558" }}
              onClick={(e) =>
                  handleConceptClick(
                      "Version Control",
                      "Version control helps track and manage code changes...",
                      e.currentTarget
                  )
              }
          >
              <IconWithText logo={versionControlLogo} label="Version Control" />
          </div>
          <div
              className="section"
              style={{ backgroundColor: "#55D5E0" }}
              onClick={(e) =>
                  handleConceptClick(
                      "Testing",
                      "Testing ensures that software is reliable and works as intended...",
                      e.currentTarget
                  )
              }
          >
              <IconWithText logo={testingLogo} label="Testing" />
          </div>
          <div
              className="section"
              style={{ backgroundColor: "#F4CFDF" }}
              onClick={(e) =>
                  handleConceptClick(
                      "UX Design",
                      "UX Design focuses on creating software that is easy and enjoyable to use...",
                      e.currentTarget
                  )
              }
          >
              <IconWithText logo={uxLogo} label="UX Design" />
          </div>

          {/* Modal */}
          {modalContent && startPosition && (
              <Modal
                  isOpen={!!modalContent}
                  onClose={closeModal}
                  title={modalContent.label}
                  content={<p>{modalContent.explanation}</p>}
                  startPosition={startPosition}
              />
          )}
      </div>
  );
};

export default App;