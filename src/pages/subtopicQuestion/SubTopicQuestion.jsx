import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Nopage from "../nopage/Nopage";
import Instruction from "../../component/instruction/Instruction";

const DisableCopyPaste = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [tabSwitchCount, setTabSwitchCount] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((prevCount) => prevCount + 1);

        if (tabSwitchCount >= 2) {
          alert("You switched tabs twice. Redirecting to home page.");
          navigate("/");
        } else {
          alert("Don't switch tabs, after this your test will be submitted");
        }
      }
    };

    const handleResize = () => {
      // Check window size and navigate to home page if it crosses a threshold
      if (window.innerWidth < 800 || window.innerHeight < 600) {
        alert(
          "Don't resize the window, after this your test will be submitted"
        );
        navigate("/");
      }
    };

    document.body.style.userSelect = "none";
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("paste", handlePaste);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.userSelect = "auto";
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("paste", handlePaste);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate, topic, tabSwitchCount]);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const handleCut = (e) => {
    e.preventDefault();
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  return null;
};

const SubTopicQuestion = () => {
  const { topic } = useParams();
  const notAllowed = ["login", "register", "forgotpassword", "signup"];
  if (topic.includes(notAllowed)) {
    return <Navigate to="/" />;
  }
  const allowedTopics = [
    "QUANTITATIVE_APTITUDE",
    "DATA_INTERPRETATION",
    "LOGICAL_REASONING",
    "VERBAL_ABILITY_AND_READING_COMPREHENSION",
  ];

  if (!allowedTopics.includes(topic)) {
    return <Nopage />;
  }

  return (
    <div>
      <DisableCopyPaste />
      <Instruction />
    </div>
  );
};

export default SubTopicQuestion;
