import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { subtopicsData } from "../../utils/constants";
import Calculator from "../practicequestions/Calculator";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const TopicCard = styled.li`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(props) => (props.isCurrentTopic ? "#2f72b7" : "white")};
  color: ${(props) => (props.isCurrentTopic ? "white" : "black")};

  &:hover {
    background: #2f72b7;
    color: white;
  }
  &:focus {
    outline: none;
  }
  img {
    height: 20px;
    width: 20px;
  }
`;

const Wrapper = styled.ul`
  gap: 1rem;
  padding: 0px;
  flex-wrap: wrap;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 0px;
`;

const MarginTop = styled.div`
  top: 0;
  position: sticky;
  display: block;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
  height: 7vh;
  width: 85%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled.h6`
  white-space: nowrap;
  padding: 4px 8px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.isCurrentTopic ? "bolder" : "normal")};
  overflow-wrap: break-word;
`;

const RecommendedSubTopics = () => {
  const { topic, subTopic } = useParams();
  const [showCalculator, setShowCalculator] = useState(false);

  const [timeLeft, setTimeLeft] = useState(1800);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    // Check if time left is 0
    if (timeLeft === 0) {
      setTimerExpired(true);
      alert("Timer is over!");
    }
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const submit = () => {
    !timerExpired
      ? confirmAlert({
          title: "Confirm",
          message: `You have ${hours
            .toString()
            .padStart(2, "0")} : ${minutes
            .toString()
            .padStart(2, "0")} : ${seconds
            .toString()
            .padStart(
              2,
              "0"
            )} left. Clicking SUBMIT will end test, and you will not be allowed to attempt any more questions. Are you sure you want to End the test?`,
          buttons: [
            {
              label: "Submit",
              // onClick: () => alert("Click Yes"),
            },
            {
              label: "Cancel",
              // onClick: () => alert("Click No"),
            },
          ],
        })
      : alert("mock test completed");
  };

  return (
    <section className=" ">
      <div
        className="topic d-flex align-items-center justify-content-between"
        style={{ background: "#eee" }}
      >
        <MarginTop>
          <Wrapper>
            {subtopicsData[topic].map((currentTopic, subIndex) => (
              <Link
                to={`/${topic.split(" ").join("_")}/${currentTopic
                  .split(" ")
                  .join("_")}`}
                key={subIndex}
              >
                <TopicCard
                  isCurrentTopic={
                    subTopic.split("_").join(" ") === currentTopic
                  }
                >
                  <Box>
                    <Box2
                      isCurrentTopic={
                        currentTopic === subTopic.split("_").join(" ")
                      }
                    >
                      {currentTopic}
                    </Box2>
                  </Box>
                </TopicCard>
              </Link>
            ))}
          </Wrapper>
        </MarginTop>
        <div class="ct-icons pe-3">
          <span
            class="calc-icon"
            role="presentation"
            onClick={() => setShowCalculator(!showCalculator)}
          ></span>
          {showCalculator ? (
            <Calculator setShowCalculator={setShowCalculator} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div class="ct-timer-block">
        <div class="ct-timer-left">Section</div>
        <div class="ct-timer-right">
          <span class="mr-1"> Time Left :</span>
          <span id="timer">
            <span>{hours.toString().padStart(2, "0")}</span>:
            <span>{minutes.toString().padStart(2, "0")}</span>:
            <span>{seconds.toString().padStart(2, "0")}</span>
          </span>
        </div>
        <button
          className="ms-2 btn btn-success"
          style={{ position: "absolute", bottom: "3%", right: "50%" }}
          onClick={() => submit()}
        >
          Submit Test
        </button>

        {/* <button onClick={submit()}>Confirm dialog</button> */}
      </div>
      <div class="ct-marks-sections">
        <span class="ct-mark-right">
          Marks for correct answer <span class="text-success">3</span>
        </span>
        <span class="ms-1 me-1">|</span>
        <span>
          Negative Marks <span class="text-danger"> 0</span>
        </span>
      </div>
    </section>
  );
};

export default RecommendedSubTopics;
