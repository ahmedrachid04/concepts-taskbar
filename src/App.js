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

  const handleConceptClick = (label, explanation) => {
      setModalContent({ label, explanation });
  };

  const closeModal = () => {
      setModalContent(null);
  };

  return (
      <div className="icon-row">
          {/* Render concepts with dynamic background colors */}
          <IconWithText
              logo={agilityLogo}
              label="Agility"
              backgroundColor="#F26619" // Assign color from palette
              onClick={() =>
                  handleConceptClick(
                      "Agility",
                      "Agility is about being flexible and quick in software development..."
                  )
              }
          />
          <IconWithText
              logo={versionControlLogo}
              label="Version Control"
              backgroundColor="#2F4558" // Assign color from palette
              onClick={() =>
                  handleConceptClick(
                      "Version Control",
                      "Version control helps track and manage code changes in a collaborative environment..."
                  )
              }
          />
          <IconWithText
              logo={testingLogo}
              label="Testing"
              backgroundColor="#55D5E0" // Assign color from palette
              onClick={() =>
                  handleConceptClick(
                      "Testing",
                      "Testing ensures that software is reliable and works as intended..."
                  )
              }
          />
          <IconWithText
              logo={uxLogo}
              label="UX Design"
              backgroundColor="#F4CFDF" // Assign color from palette
              onClick={() =>
                  handleConceptClick(
                      "UX Design",
                      "User Experience (UX) design focuses on creating software that is easy and enjoyable to use..."
                  )
              }
          />

          {/* Modal */}
          {modalContent && (
              <Modal
                  isOpen={!!modalContent}
                  onClose={closeModal}
                  title={modalContent.label}
                  content={<p>{modalContent.explanation}</p>}
              />
          )}
      </div>
  );
};

export default App;