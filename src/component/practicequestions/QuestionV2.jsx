import React, { useState, useEffect } from "react";
import "./question.css";
import { MathText } from "../mathJax/MathText";
import { useLocation, useParams } from "react-router-dom";

const QuestionV2 = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [questionStatus, setQuestionStatus] = useState("not_visited");
  const [currentPage, setCurrentPage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const { topic } = useParams();
  useEffect(() => {
    setQuestionStatus("not_visited");
    if (isMounted) {
      localStorage.removeItem("currentPage");
    }
  }, [location.pathname, isMounted]);

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

  const handlePageChange = (pageIndex) => {
    setSelectedOption([]);
    setCurrentPage(pageIndex);
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", pageIndex);
  };

  const generatePageNumbers = () => {
    const totalPages = Math.ceil(data.length);
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  const generatePageNumbers2 = () => {
    const totalPages = Math.ceil(data.length);
    const pages = [];
    let numberOfQuestions = 0;
    for (let i = 0; i < totalPages; i++) {
      const questionSet = data[i];
      numberOfQuestions += questionSet.questions.length;
      //  console.log("this para has, this number of quesitos",i,questionSet.questions.length)
    }
    for (let i = 0; i < numberOfQuestions; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <section className="question-practice-v2">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column">
        {data.paragraph || data[0].paragraph ? (
          data.paragraph ? (
            data
          ) : (
            <div className="row">
              <div className="col-md-10">
                <div className="question-box paragraph">
                  <div className="question-number-container">
                    <span
                      className={`question-number id-${data[currentPage]._id}`}
                    >
                      Question No. {`${currentPage + 1} `}
                    </span>
                  </div>

                  <div className="question-option para-type">
                    <div className="question item-passage">
                      <h6 className="mb-2 ">
                        <strong>Direction:</strong> Read the following passage
                        carefully and answer the questions that follow.
                      </h6>
                      <div className="d-flex justify-content-start align-items-center gap-3">
                        <div className="question-text ">
                          {data[currentPage].paragraph.map(
                            (paragraph, paraindex) => (
                              <MathText
                                className="mb-2"
                                key={paraindex}
                                text={paragraph}
                                textTag="h6"
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-3">
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
                    </div>
                    <div className="item-content ">
                      <div className="options-container">
                        <div className="options-grid">
                          <div className="question-box">
                            <div className="question-option">
                              <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                                <div>
                                  {data[currentPage].questions[
                                    currentPage
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
                                {data[currentPage].questions[currentPage]
                                  .images &&
                                  data[currentPage].questions[
                                    currentPage
                                  ].images.map((image, imageIndex) => (
                                    <img
                                      className="question-image"
                                      key={imageIndex}
                                      src={image}
                                      alt={`Img ${imageIndex + 1}`}
                                    />
                                  ))}
                              </div>
                              {data[currentPage].questions[
                                currentPage
                              ].options.map((option, optionIndex) => (
                                <div key={optionIndex} className={`option-box`}>
                                  <div class="optionitem">
                                    <input
                                      type="radio"
                                      name={option}
                                      id={optionIndex}
                                    />
                                  </div>
                                  <label for={optionIndex} class="optionLabel">
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
                </div>
              </div>
              <div className="col-md-2 position-relative">
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
                        {generatePageNumbers2().map((pageIndex) => (
                          <span
                            id={pageIndex}
                            key={pageIndex}
                            className={` ${questionStatus} ${
                              currentPage === pageIndex ? "active" : ""
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
            <div className="row">
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
                          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
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
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-2 position-relative">
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
                            className={` ${questionStatus} ${
                              currentPage === pageIndex ? "active" : ""
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
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionV2;
