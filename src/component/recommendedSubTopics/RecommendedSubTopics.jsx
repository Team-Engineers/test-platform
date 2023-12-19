import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { subtopicsData } from "../../utils/constants";
const TopicCard = styled.li`
  height: fit-content;
  background-color: rgba(121, 9, 11, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #79090b;
  text-align: center;
  background: ${(props) => (props.isCurrentTopic ? "#79090b" : "inherit")};
  color: ${(props) => (props.isCurrentTopic ? "white" : "black")};
  &:hover {
    background: #79090b;
    color: white;
  }
  &:hover a {
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
  display : flex;
`;

const MarginTop = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  algin-items: center;
  flex-direction: column;
  top: 0;
  position: sticky;
  overflow: hidden;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled.h6`
  white-space: nowrap;
  padding: 10px 5px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.isCurrentTopic ? "bolder" : "normal")};
  overflow-wrap: break-word;
`;

const RecommendedSubTopics = () => {
  const { topic, subTopic } = useParams();

  return (
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
              isCurrentTopic={subTopic.split("_").join(" ") === currentTopic}
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
  );
};

export default RecommendedSubTopics;
