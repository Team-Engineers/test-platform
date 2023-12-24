import React, { useState, useEffect, useCallback } from "react";
import "./question.css";
import { MathText } from "../mathJax/MathText";
import { useLocation, useParams } from "react-router-dom";

const QuestionV2 = ({ data }) => {
  let totalPages = 0;

  const generatePageNumbers2 = () => {
    const totalLength = Math.ceil(data.length);
    const pages = [];
    let numberOfQuestions = 0;
    for (let i = 0; i < totalLength; i++) {
      const questionSet = data[i];
      numberOfQuestions += questionSet.questions.length;
      //  console.log("this para has, this number of quesitos",i,questionSet.questions.length)
    }
    for (let i = 0; i < numberOfQuestions; i++) {
      pages.push(i);
    }

    totalPages = numberOfQuestions;

    return pages;
  };

  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOptionsPara, setSelectedOptionsPara] = useState(
    Array(data?.length)
      .fill()
      .map((_, dataIndex) =>
        Array(data[dataIndex].questions?.length).fill(undefined)
      )
  );

  const [optionsUIPara, setOptionsUIPara] = useState(
    Array(data?.length)
      .fill()
      .map((_, dataIndex) =>
        Array(data[dataIndex].questions.length).fill(undefined)
      )
  );
  const [questionStatus, setQuestionStatus] = useState(
    Array(data?.length)
      .fill()
      .map((_, dataIndex) =>
        Array(data[dataIndex].questions.length).fill("not_visited")
      )
  );

  const [counts, setCounts] = useState({
    not_visited: 0,
    review_answered: 0,
    review: 0,
    answered: 0,
    not_answered: 0,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const { topic } = useParams();
  useEffect(() => {
    if (isMounted) {
      localStorage.removeItem("currentPage");
    }
  }, [location.pathname, isMounted]);

  const paraQuestions = data[0]?.paragraph ? data[0]?.questions?.length : 0;

  useEffect(() => {
    setIsMounted(true);
    const storedPage = localStorage.getItem("currentPage");
    const parsedPage = parseInt(storedPage, 10);
    if (!isNaN(parsedPage) && parsedPage >= 0) {
      setCurrentPage(parsedPage);
    } else {
      setCurrentPage(0);
    }
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedSelectedOption = [...selectedOption];
    updatedSelectedOption[questionIndex] = optionIndex;
    setSelectedOption(updatedSelectedOption);
  };

  const handleOptionSelectPara = (itemIndex, questionIndex, optionIndex) => {
    const updatedSelectedOptionsPara = [...selectedOptionsPara];
    updatedSelectedOptionsPara[itemIndex] = [...selectedOptionsPara[itemIndex]];
    updatedSelectedOptionsPara[itemIndex][questionIndex] = optionIndex;
    setSelectedOptionsPara(updatedSelectedOptionsPara);

    const updatedOptionsUIPara = [...optionsUIPara];
    updatedOptionsUIPara[itemIndex] = [...optionsUIPara[itemIndex]];
    updatedOptionsUIPara[itemIndex][questionIndex] = optionIndex;
    setOptionsUIPara(updatedOptionsUIPara);

    const currentStatus = questionStatus[itemIndex][questionIndex];
    // console.log("what is current status", currentStatus);
    if (currentStatus === "not_visited") {
      const updatedStatusArray = [...questionStatus];
      updatedStatusArray[itemIndex] = [...questionStatus[itemIndex]];
      updatedStatusArray[itemIndex][questionIndex] = "not_answered";
      setQuestionStatus(updatedStatusArray);
    }
  };

  const handleClearResponsePara = () => {
    const itemIndex = Math.floor(currentPage / paraQuestions);
    const questionIndex = currentPage % paraQuestions;

    const updatedSelectedOptionsPara = [...selectedOptionsPara];
    updatedSelectedOptionsPara[itemIndex] = [...selectedOptionsPara[itemIndex]];
    // console.log(
    //   "what im trying to chnage",
    //   updatedSelectedOptionsPara[itemIndex][questionIndex]
    // );
    updatedSelectedOptionsPara[itemIndex][questionIndex] = undefined;
    setSelectedOptionsPara(updatedSelectedOptionsPara);

    const updatedOptionsUIPara = [...optionsUIPara];
    updatedOptionsUIPara[itemIndex] = [...optionsUIPara[itemIndex]];
    updatedOptionsUIPara[itemIndex][questionIndex] = undefined;

    setOptionsUIPara(updatedOptionsUIPara);

    const updatedStatusArray = [...questionStatus];
    updatedStatusArray[itemIndex] = [...questionStatus[itemIndex]];
    updatedStatusArray[itemIndex][questionIndex] = "not_answered";
    setQuestionStatus(updatedStatusArray);
  };

  // useEffect(() => {
  //   console.log("seleected option oara is changed", selectedOptionsPara);
  // }, [selectedOptionsPara]);

  // const handleClearResponse = () => {
  //   const currentQuestionIndex = currentPage % paraQuestions;
  //   const updatedSelectedOption = [...selectedOption];
  //   updatedSelectedOption[currentQuestionIndex] = undefined;
  //   setSelectedOption(updatedSelectedOption);
  // };

  // console.log("status array what is happeingin with it outside", questionStatus);

  // const handleSaveNextPara = () => {
  //   const itemIndex = Math.floor(currentPage / paraQuestions);
  //   const questionIndex = currentPage % paraQuestions;
  //   let updatedQuestionStatus = [...questionStatus];
  //   updatedQuestionStatus[itemIndex] = questionStatus[itemIndex];
  //   updatedQuestionStatus[itemIndex][questionIndex] = "answered";

  //   setQuestionStatus(updatedQuestionStatus);
  // };

  const generatePageNumbers = () => {
    const totalPages = Math.ceil(data.length);
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleReviewNext = () => {
    const itemIndex = Math.floor(currentPage / paraQuestions);
    const questionIndex = currentPage % paraQuestions;
    // console.log("what is current status", currentStatus);

    const updatedStatusArray = [...questionStatus];
    updatedStatusArray[itemIndex] = [...questionStatus[itemIndex]];

    if (optionsUIPara[itemIndex][questionIndex] !== undefined) {
      updatedStatusArray[itemIndex][questionIndex] = "review_answered";
    } else {
      updatedStatusArray[itemIndex][questionIndex] = "review";
    }
    setQuestionStatus(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOption([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);

    // console.log(
    //   "status array what is happeingin with it inside function",
    //   questionStatus
    // );
  };

  const handleSaveNext = () => {
    const itemIndex = Math.floor(currentPage / paraQuestions);
    const questionIndex = currentPage % paraQuestions;
    // console.log("what is current status", currentStatus);

    const updatedStatusArray = [...questionStatus];
    updatedStatusArray[itemIndex] = [...questionStatus[itemIndex]];
    updatedStatusArray[itemIndex][questionIndex] = "answered";
    setQuestionStatus(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOption([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
    // console.log(
    //   "status array what is happeingin with it inside function",
    //   questionStatus
    // );
  };

  const handlePageChange = (pageIndex) => {
    const itemIndex = Math.floor(pageIndex / paraQuestions);
    const questionIndex = pageIndex % paraQuestions;
    setSelectedOption([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
    const currentStatus = questionStatus[itemIndex][questionIndex];
    // console.log("what is current status", currentStatus);
    if (currentStatus === "not_visited") {
      const updatedStatusArray = [...questionStatus];
      updatedStatusArray[itemIndex] = [...questionStatus[itemIndex]];
      updatedStatusArray[itemIndex][questionIndex] = "not_answered";
      setQuestionStatus(updatedStatusArray);
    }
    // console.log(
    //   "status array what is happeingin with it inside function",
    //   questionStatus
    // );
  };

  // console.log("paraquestions", paraQuestions);

  const countStatusOccurrences = useCallback(() => {
    const new_count = {
      not_visited: 0,
      review_answered: 0,
      review: 0,
      answered: 0,
      not_answered: 0,
    };
    for (let i = 0; i < questionStatus.length; i++) {
      for (let j = 0; j < questionStatus[i].length; j++) {
        const status = questionStatus[i][j];

        switch (status) {
          case "not_visited":
            new_count.not_visited++;
            break;
          case "review_answered":
            new_count.review_answered++;
            break;
          case "review":
            new_count.review++;
            break;
          case "answered":
            new_count.answered++;
            break;
          case "not_answered":
            new_count.not_answered++;
            break;
          default:
            break;
        }
      }
    }
    return new_count;
  }, [questionStatus]);
  useEffect(() => {
    const updatedCounts = countStatusOccurrences();
    setCounts(updatedCounts);
  }, [currentPage, countStatusOccurrences]);

  return (
    <section className="question-practice-v2">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column">
        {data.paragraph || data[0].paragraph ? (
          data.paragraph ? (
            data
          ) : (
            <div className="row w-100">
              <div className="col-md-10">
                <div className="question-box paragraph">
                  <div className="question-number-container">
                    <span
                      className={`question-number id-${
                        data[Math.floor(currentPage / paraQuestions)]._id
                      }`}
                    >
                      Question No. {`${currentPage + 1} `}
                    </span>
                  </div>

                  <div className="question-option para-type">
                    <div className="question item-passage">
                      <h6 className="mb-3 ">
                        <strong>Direction:</strong> Read the following passage
                        carefully and answer the questions that follow.
                      </h6>
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <div className="question-text ">
                          {data[
                            Math.floor(currentPage / paraQuestions)
                          ].paragraph.map((paragraph, paraindex) => (
                            <MathText
                              className="mb-2"
                              key={paraindex}
                              text={paragraph}
                              textTag="h6"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                        {data[Math.floor(currentPage / paraQuestions)].images &&
                          data[
                            Math.floor(currentPage / paraQuestions)
                          ].images.map((image, imageIndex) => (
                            <img
                              className="question-image"
                              key={imageIndex}
                              src={image}
                              alt={`Img ${imageIndex + 1}`}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="item-content ">
                      <div className="options-container">
                        <div className="options-grid">
                          <div className="question-box">
                            <div className="question-option">
                              <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                                <div>
                                  {data[
                                    Math.floor(currentPage / paraQuestions)
                                  ].questions[
                                    currentPage % paraQuestions
                                  ].text.map((text, textIndex) => (
                                    <MathText
                                      className="question-text mb-2"
                                      key={textIndex}
                                      text={text}
                                      textTag="h6"
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                                {data[Math.floor(currentPage / paraQuestions)]
                                  .questions[currentPage % paraQuestions]
                                  .images &&
                                  data[
                                    Math.floor(currentPage / paraQuestions)
                                  ].questions[
                                    currentPage % paraQuestions
                                  ].images.map((image, imageIndex) => (
                                    <img
                                      className="question-image"
                                      key={imageIndex}
                                      src={image}
                                      alt={`Img ${imageIndex + 1}`}
                                    />
                                  ))}
                              </div>
                              {data[
                                Math.floor(currentPage / paraQuestions)
                              ].questions[
                                currentPage % paraQuestions
                              ].options.map((option, optionIndex) => (
                                <div
                                  key={optionIndex}
                                  onClick={() =>
                                    handleOptionSelectPara(
                                      Math.floor(currentPage / paraQuestions),
                                      currentPage % paraQuestions,
                                      optionIndex
                                    )
                                  }
                                  className={`option-box`}
                                >
                                  <div class="optionitem">
                                    <input
                                      type="radio"
                                      name={`question-${Math.floor(
                                        currentPage / paraQuestions
                                      )}`}
                                      id={optionIndex}
                                      checked={
                                        optionsUIPara[
                                          Math.floor(
                                            currentPage / paraQuestions
                                          )
                                        ][currentPage % paraQuestions] ===
                                        optionIndex
                                      }
                                    />
                                  </div>
                                  <label
                                    for={optionIndex}
                                    className="optionLabel"
                                  >
                                    <div className="d-flex justify-content-start gap-3 w-100 align-items-center">
                                      <h6>{option.text}</h6>
                                      {option.image ? (
                                        <img
                                          className="question-image"
                                          src={option.image}
                                          alt={`Img ${optionIndex + 1}`}
                                        />
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-container">
                    <div className="d-flex justify-content-between align-items-center mx-2">
                      <div className="d-flex align-center gap-3 p-2">
                        <button
                          className="test-button"
                          onClick={handleReviewNext}
                        >
                          Mark for review & next
                        </button>
                        {optionsUIPara[Math.floor(currentPage / paraQuestions)][
                          currentPage % paraQuestions
                        ] !== undefined ? (
                          <button
                            className="test-button"
                            onClick={handleClearResponsePara}
                          >
                            Clear Response
                          </button>
                        ) : null}
                      </div>
                      {optionsUIPara[Math.floor(currentPage / paraQuestions)][
                        currentPage % paraQuestions
                      ] !== undefined ? (
                        <button
                          className="next-button test-button"
                          onClick={handleSaveNext}
                        >
                          Save & Next
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 ">
                <div class="LeftBlock ">
                  <button class="toggle-side-bar-btn" type="button">
                    &gt;
                  </button>
                  <div class="question-pallet">
                    <div class="Legend">
                      <div class="legend-block">
                        <div class="legend-item lg-answered">
                          <span>{counts.answered}</span> Answered
                        </div>
                        <div class="legend-item lg-not_answered">
                          <span>{counts.not_answered}</span> Not Answered
                        </div>
                        <div class="legend-item lg-not_visited">
                          <span>{counts.not_visited}</span> Not Visited
                        </div>
                        <div class="legend-item lg-review">
                          <span>{counts.review}</span> Marked for Review
                        </div>
                        <div class="legend-item lg-review_answered">
                          <span>{counts.review_answered}</span> Answered &amp;
                          Marked for Review (will be considered for evaluation)
                        </div>
                      </div>
                    </div>
                    <div class="pallet-section-title">
                      <div class="qp-title">{topic.split("_").join(" ")}</div>
                      <div class="qp-label">Choose a Question</div>
                    </div>
                    <div class="pallet-list-body">
                      <div role="presentation" class="pallet-item">
                        {generatePageNumbers2().map((pageIndex) => (
                          <span
                            id={pageIndex}
                            key={pageIndex}
                            className={` ${
                              questionStatus[
                                Math.floor(pageIndex / paraQuestions)
                              ][pageIndex % paraQuestions]
                            }`}
                            onClick={() => handlePageChange(pageIndex)}
                          >
                            {pageIndex + 1}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="options-container">
            <div className="row w-100">
              <div className="col-md-10">
                {data
                  .slice(currentPage * 1, (currentPage + 1) * 1)
                  .map((question, questionIndex) => (
                    <div key={questionIndex} className="options-grid">
                      <div className="question-box">
                        <div className="question-number-container">
                          <span
                            className={`question-number id-${question._id}`}
                          >
                            Question No.
                            {`${questionIndex + 1 + currentPage} `}
                          </span>
                        </div>
                        <div className="question-option">
                          <div className="question">
                            <div className="question-text-container">
                              {question.text.map((text, textIndex) => (
                                <MathText
                                  className="question-text mb-2"
                                  key={textIndex}
                                  text={text}
                                  textTag="h6"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-center gap-3 mt-3 mb-3">
                            {question.images &&
                              question.images.map((image, imageIndex) => (
                                <img
                                  className="question-image"
                                  key={imageIndex}
                                  src={image}
                                  alt={`Img ${imageIndex + 1}`}
                                />
                              ))}
                          </div>
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className="option-box"
                              onClick={() =>
                                handleOptionClick(questionIndex, optionIndex)
                              }
                            >
                              <div class="optionitem">
                                <input
                                  type="radio"
                                  name={option}
                                  id={optionIndex}
                                />
                              </div>
                              <label for={optionIndex} class="optionLabel">
                                <div className="d-flex align-items-center justify-content-start gap-3 w-100 align-items-center ">
                                  <MathText text={option.text} textTag="h6" />
                                  {option.image ? (
                                    <img
                                      className="question-image"
                                      src={option.image}
                                      alt={`Img ${optionIndex + 1}`}
                                    />
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </label>
                            </div>
                          ))}
                        </div>
                        <div className="button-container">
                          <div className="d-flex justify-content-between align-items-center mx-2">
                            <div className="d-flex align-center gap-3 p-2">
                              <button className="test-button">
                                Mark for review & next
                              </button>
                              <button className="test-button">
                                Clear Response
                              </button>
                            </div>
                            <button className="next-button test-button">
                              Save & Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-2 ">
                <div class="LeftBlock ">
                  <button class="toggle-side-bar-btn" type="button">
                    &gt;
                  </button>
                  <div class="question-pallet">
                    <div class="Legend">
                      <div class="legend-block">
                        <div class="legend-item lg-answered">
                          <span>0</span> Answered
                        </div>
                        <div class="legend-item lg-not_answered">
                          <span>1</span> Not Answered
                        </div>
                        <div class="legend-item lg-not_visited">
                          <span>23</span> Not Visited
                        </div>
                        <div class="legend-item lg-review">
                          <span>0</span> Marked for Review
                        </div>
                        <div class="legend-item lg-review_answered">
                          <span>0</span> Answered &amp; Marked for Review (will
                          be considered for evaluation)
                        </div>
                      </div>
                    </div>
                    <div class="pallet-section-title">
                      <div class="qp-title">{topic.split("_").join(" ")}</div>
                      <div class="qp-label">Choose a Question</div>
                    </div>
                    <div class="pallet-list-body">
                      <div role="presentation" class="pallet-item">
                        {generatePageNumbers().map((pageIndex) => (
                          <span
                            id={pageIndex}
                            key={pageIndex}
                            className={` ${questionStatus}`}
                            onClick={() => handlePageChange(pageIndex)}
                          >
                            {pageIndex + 1}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionV2;
