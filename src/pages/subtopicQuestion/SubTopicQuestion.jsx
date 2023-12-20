import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Nopage from "../nopage/Nopage";
import PracticeQuestions from "../../component/practicequestions/PracticeQuestions";
import Instruction from "../../component/instruction/Instruction";

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
      {/* <PracticeQuestions /> */}
      <Instruction/>
    </div>
  );
};

export default SubTopicQuestion;
