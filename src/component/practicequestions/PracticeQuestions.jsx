import React, { useEffect, useState } from "react";
import "./question.css";
import { useParams } from "react-router-dom";
import { API } from "../../utils/constants";
import QuestionV2 from "./QuestionV2";
import axios from "axios";
import RecommendedSubTopics from "../recommendedSubTopics/RecommendedSubTopics";
import TietLoader from "../Loader/Loader";
import NoData from "../Loader/NoData";

const PracticeQuestions = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [calcMinimize, setCalcMinimize] = useState(false);
  const { topic, subTopic } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let route = "";
      let subTopicRoute = subTopic;
      if (subTopic === "S.I_AND_C.I")
        subTopicRoute = "simple_interest_and_compound_interest";
      if (subTopic === "NUMBER_OR_ALPHABET_SERIES")
        subTopicRoute = "number_alphabet_series";
      if (topic === "QUANTITATIVE_APTITUDE") route = "math";
      if (topic === "DATA_INTERPRETATION") route = "di";
      if (topic === "VERBAL_ABILITY_AND_READING_COMPREHENSION") route = "varc";
      if (topic === "LOGICAL_REASONING") route = "lr";
      let version = "v2";
      if (
        topic === "VERBAL_ABILITY_AND_READING_COMPREHENSION" &&
        subTopic === "READING_COMPREHENSION"
      ) {
        version = "v1";
        subTopicRoute = "";
      }

      if (
        topic === "VERBAL_ABILITY_AND_READING_COMPREHENSION" &&
        (subTopic === "IDIOMS_AND_PHRASES" ||
          subTopic === "SYNONYMS" ||
          subTopic === "ANTONYMS" ||
          subTopic === "ONE_WORD_SUBSTITUTION")
      ) {
        subTopicRoute = `sub/vocabulary/${subTopic.toLowerCase()}`;
      }
      if (topic === "DATA_INTERPRETATION") {
        version = "v1";
      }
      if (
        topic === "LOGICAL_REASONING" &&
        (subTopic === "MISCELLANEOUS" || subTopic === "ARRANGEMENTS")
      ) {
        version = "v1";
      }
      const lastSubTopic = localStorage.getItem("currentSubTopic");
      if (lastSubTopic && lastSubTopic !== subTopic) {
        localStorage.removeItem("currentPage");
      }
      localStorage.setItem("currentSubTopic", subTopic);
      try {
        const response = await axios.get(
          `${API}/${route}/question/${version}/${subTopicRoute.toLowerCase()}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [topic, subTopic]);

  if (isLoading) {
    return <TietLoader />;
  }

  return (
    <section className="question-practice">
      {data.length > 0 ? (
        <section className="testknock-mock-test">
          <div className="d-flex justify-content-center align-items-center">
            <div className="testknock-left">
              <div className="text-center test-title">
                TESTKNOCK TEST PLATFORM
              </div>
            </div>
            <div className="ps-2 testknock-right">
              <div className=" d-flex justify-content-center align-items-center gap-3">
                <div className="text-nowrap">Question Paper</div>
                <div>Instructions</div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="testknock-left pe-0">
              <RecommendedSubTopics />
            </div>
            <div className="ps-0 testknock-right">
              <div className="ct-right">
                <div className="ct-profile-image">
                  <img
                    src="https://kananprep-assets.s3.ap-south-1.amazonaws.com/testengine/testengine-items/catlayout/NewCandidateImage.jpg"
                    alt="profile"
                  />
                </div>
                <div className="ct-profile-details">
                  <div className="ct-username">{user.name}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100">
            <QuestionV2 data={data} />
          </div>
        </section>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default PracticeQuestions;
