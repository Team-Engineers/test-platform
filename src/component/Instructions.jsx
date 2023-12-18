import React from "react";

const Instructions = () => {
  return (
    <div className="cat2layout-ins">
      <div className="inst-container">
        <div className="inst-top-bar">
          <h4 className="text-center">GENERAL INSTRUCTIONS</h4>
        </div>
        <div className="inst-body">
          <div className="col-md-8 col-sm-12 col-xs-12 mx-auto">
            <div className="ins-content">
              <p>
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <strong style={{textAlign: "center"}}>
                    GENERAL&nbsp; INSTRUCTIONS
                  </strong>
                </p>
                <p>&nbsp;</p>
                <p>
                  – This is a 3-section test comprising a total of 50 questions.
                  The total duration of the test is 90 minutes.
                </p>
                <p>– The sections are as follows:</p>
                <p>
                  Section I - Verbal and Reading Comprehension - 17 questions
                </p>
                <p>
                  Section II - Data Interpretation &amp; Logical Reasoning - 16
                  questions
                </p>
                <p>Section III - Quantitative Aptitude - 17 questions</p>
                <p>
                  – The time available for each section is 30 minutes. You
                  cannot move from one section to the next/another section till
                  the entire 30 minutes allotted to the section run out. Once a
                  section has ended, the next section will automatically start
                  and you cannot return to the previous section/s.
                </p>
                <p>
                  – Most questions in this test will have 4 options, out of
                  which only 1 answer option is correct. However, some questions
                  in each section are such that there are no options and the
                  answers will have to be typed on the screen.
                </p>
                <p>
                  – All questions carry three marks each. For Multiple Choice
                  Questions (MCQ), each wrong answer will attract a penalty of
                  one mark. For questions other than MCQ, there is no negative
                  marking for wrong answers. There is no negative marking for
                  skipped/unanswered questions.
                </p>
                <p>
                  – Keep in mind that you are to demonstrate competence in all
                  the 3 sections.
                </p>
                <p>
                  – Click on the Save &amp; Next button to save your
                  answers.Else your answers will not be saved
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="inst-footer">
          <div className="start-btn-block text-center">
            <button type="button" className="btn btn-sm btn-primary">
              START TEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
