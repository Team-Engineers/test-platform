import React, { useState, useEffect, useCallback } from "react";
import "./question.css";
import { MathText } from "../mathJax/MathText";
import { useLocation, useParams } from "react-router-dom";

const QuestionV2 = ({ data }) => {
  let totalPages = 0;

  const generatePageNumbersPara = () => {
    const totalLength = Math.ceil(data.length);
    const pages = [];
    let numberOfQuestions = 0;
    for (let i = 0; i < totalLength; i++) {
      const questionSet = data[i];
      numberOfQuestions += questionSet.questions.length;
    }
    for (let i = 0; i < numberOfQuestions; i++) {
      pages.push(i);
    }

    totalPages = numberOfQuestions;

    return pages;
  };

  const [selectedOptions, setSelectedOptions] = useState(
    Array(data?.length).fill(undefined)
  );
  const [optionsUI, setOptionsUI] = useState(
    Array(data?.length).fill(undefined)
  );
  const [questionStatus, setQuestionStatus] = useState(
    Array(data?.length).fill("not_visited")
  );
  const [selectedOptionsPara, setSelectedOptionsPara] = useState(
    Array(data?.length)
      .fill()
      .map((_, dataIndex) =>
        Array(data[dataIndex]?.questions?.length).fill(undefined)
      )
  );

  const [optionsUIPara, setOptionsUIPara] = useState(
    Array(data?.length)
      .fill()
      .map((_, dataIndex) =>
        Array(data[dataIndex]?.questions?.length).fill(undefined)
      )
  );
  const [questionStatusPara, setQuestionStatusPara] = useState(
    Array(data?.length)
      .fill()
      .map((_, dataIndex) =>
        Array(data[dataIndex]?.questions?.length).fill("not_visited")
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

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);

    const updatedOptionsUI = [...optionsUI];
    updatedOptionsUI[questionIndex] = optionIndex;
    setOptionsUI(updatedOptionsUI);

    const currentStatus = questionStatus[questionIndex];
    if (currentStatus === "not_visited") {
      const updatedStatusArray = [...questionStatus];
      updatedStatusArray[questionIndex] = "not_answered";
      setQuestionStatus(updatedStatusArray);
    }
  };

  const handleClearResponse = () => {
    const questionIndex = currentPage;

    const updatedSelectedOptions = [...selectedOptions];

    updatedSelectedOptions[questionIndex] = undefined;
    setSelectedOptions(updatedSelectedOptions);

    const updatedOptionsUI = [...optionsUI];
    updatedOptionsUI[questionIndex] = undefined;
    setOptionsUI(updatedOptionsUI);

    const updatedStatusArray = [...questionStatus];
    updatedStatusArray[questionIndex] = "not_answered";
    setQuestionStatus(updatedStatusArray);
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

    const currentStatus = questionStatusPara[itemIndex][questionIndex];
    if (currentStatus === "not_visited") {
      const updatedStatusArray = [...questionStatusPara];
      updatedStatusArray[itemIndex] = [...questionStatusPara[itemIndex]];
      updatedStatusArray[itemIndex][questionIndex] = "not_answered";
      setQuestionStatusPara(updatedStatusArray);
    }
  };

  const handleClearResponsePara = () => {
    const itemIndex = Math.floor(currentPage / paraQuestions);
    const questionIndex = currentPage % paraQuestions;

    const updatedSelectedOptionsPara = [...selectedOptionsPara];
    updatedSelectedOptionsPara[itemIndex] = [...selectedOptionsPara[itemIndex]];

    updatedSelectedOptionsPara[itemIndex][questionIndex] = undefined;
    setSelectedOptionsPara(updatedSelectedOptionsPara);

    const updatedOptionsUIPara = [...optionsUIPara];
    updatedOptionsUIPara[itemIndex] = [...optionsUIPara[itemIndex]];
    updatedOptionsUIPara[itemIndex][questionIndex] = undefined;

    setOptionsUIPara(updatedOptionsUIPara);

    const updatedStatusArray = [...questionStatusPara];
    updatedStatusArray[itemIndex] = [...questionStatusPara[itemIndex]];
    updatedStatusArray[itemIndex][questionIndex] = "not_answered";
    setQuestionStatusPara(updatedStatusArray);
  };

  const generatePageNumbers = () => {
    const totalLength = Math.ceil(data.length);
    const pages = [];

    for (let i = 0; i < totalLength; i++) {
      pages.push(i);
    }
    totalPages = totalLength;
    return pages;
  };

  const handleReviewNext = () => {
    const questionIndex = currentPage;

    const updatedStatusArray = [...questionStatus];

    if (optionsUI[questionIndex] !== undefined) {
      updatedStatusArray[questionIndex] = "review_answered";
    } else {
      updatedStatusArray[questionIndex] = "review";
    }
    setQuestionStatus(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
  };

  const handleSaveNext = () => {
    const questionIndex = currentPage;

    const updatedStatusArray = [...questionStatus];
    updatedStatusArray[questionIndex] = "answered";
    setQuestionStatus(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
  };

  const handleReviewNextPara = () => {
    const itemIndex = Math.floor(currentPage / paraQuestions);
    const questionIndex = currentPage % paraQuestions;

    const updatedStatusArray = [...questionStatusPara];
    updatedStatusArray[itemIndex] = [...questionStatusPara[itemIndex]];

    if (optionsUIPara[itemIndex][questionIndex] !== undefined) {
      updatedStatusArray[itemIndex][questionIndex] = "review_answered";
    } else {
      updatedStatusArray[itemIndex][questionIndex] = "review";
    }
    setQuestionStatusPara(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
  };

  const handleSaveNextPara = () => {
    const itemIndex = Math.floor(currentPage / paraQuestions);
    const questionIndex = currentPage % paraQuestions;

    const updatedStatusArray = [...questionStatusPara];
    updatedStatusArray[itemIndex] = [...questionStatusPara[itemIndex]];
    updatedStatusArray[itemIndex][questionIndex] = "answered";
    setQuestionStatusPara(updatedStatusArray);
    const pageIndex = currentPage + 1;
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
  };

  const handlePageChange = (pageIndex) => {
    setSelectedOptions([]);
    setCurrentPage(pageIndex % totalPages);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
  };

  const countStatusOccurrences = useCallback(() => {
    const new_count = {
      not_visited: 0,
      review_answered: 0,
      review: 0,
      answered: 0,
      not_answered: 0,
    };
    if (data?.paragraph) {
      for (let i = 0; i < questionStatusPara.length; i++) {
        for (let j = 0; j < questionStatusPara[i].length; j++) {
          const status = questionStatusPara[i][j];

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
    } else {
      for (let j = 0; j < questionStatus.length; j++) {
        const status = questionStatus[j];

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
  }, [questionStatusPara, questionStatus, data?.paragraph]);

  useEffect(() => {
    if (data?.paragraph) {
      const itemIndex = Math.floor(currentPage / paraQuestions);
      const questionIndex = currentPage % paraQuestions;
      const updatedCounts = countStatusOccurrences();
      setCounts(updatedCounts);
      const currentStatus = questionStatusPara[itemIndex][questionIndex];
      if (currentStatus === "not_visited" && currentPage !== 0) {
        const updatedStatusArray = [...questionStatusPara];
        updatedStatusArray[itemIndex] = [...questionStatusPara[itemIndex]];
        updatedStatusArray[itemIndex][questionIndex] = "not_answered";
        setQuestionStatusPara(updatedStatusArray);
      }
    } else {
      const questionIndex = currentPage;
      const updatedCounts = countStatusOccurrences();
      setCounts(updatedCounts);
      const currentStatus = questionStatus[questionIndex];
      if (currentStatus === "not_visited" && currentPage !== 0) {
        const updatedStatusArray = [...questionStatus];
        updatedStatusArray[questionIndex] = "not_answered";
        setQuestionStatus(updatedStatusArray);
      }
    }
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
                          onClick={handleReviewNextPara}
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
                          onClick={handleSaveNextPara}
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
                        {generatePageNumbersPara().map((pageIndex) => (
                          <span
                            id={pageIndex}
                            key={pageIndex}
                            className={` ${
                              questionStatusPara[
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
                {
                  <div className="question-box">
                    <div className="question-number-container">
                      <span
                        className={`question-number id-${data[currentPage]._id}`}
                      >
                        Question No.
                        {`${1 + currentPage} `}
                      </span>
                    </div>
                    <div className="question-option">
                      <div className="question">
                        <div className="question-text-container">
                          {data[currentPage].text.map((text, textIndex) => (
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
                        {data[currentPage].images &&
                          data[currentPage].images.map((image, imageIndex) => (
                            <img
                              className="question-image"
                              key={imageIndex}
                              src={image}
                              alt={`Img ${imageIndex + 1}`}
                            />
                          ))}
                      </div>
                      {data[currentPage].options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="option-box"
                          onClick={() =>
                            handleOptionSelect(currentPage, optionIndex)
                          }
                        >
                          <div class="optionitem">
                            <input
                              type="radio"
                              name={`option-${currentPage}`}
                              id={optionIndex}
                              checked={optionsUI[currentPage] === optionIndex}
                            />
                          </div>
                          <label for={optionIndex} className="optionLabel">
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
                          <button
                            className="test-button"
                            onClick={handleReviewNext}
                          >
                            Mark for review & next
                          </button>
                          {optionsUI[currentPage] !== undefined ? (
                            <button
                              className="test-button"
                              onClick={handleClearResponse}
                            >
                              Clear Response
                            </button>
                          ) : null}
                        </div>
                        {optionsUI[currentPage] !== undefined ? (
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
                }
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
                        {generatePageNumbers().map((pageIndex) => (
                          <span
                            id={pageIndex}
                            key={pageIndex}
                            className={` ${questionStatus[pageIndex]}`}
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
