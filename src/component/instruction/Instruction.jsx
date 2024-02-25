import React, { useState } from "react";
import "./Instruction.css";
import TestProfile from "../../assets/images/test-profile.jpg";
import questionSymbol from "../../assets/images/question_symbol.jpeg";
import forward from "../../assets/images/forward.png";
import backward from "../../assets/images/backward.png";
import PracticeQuestions from "../practicequestions/PracticeQuestions";
const Instruction = () => {
  const [ready, setReady] = useState(false);
  const candidateName = JSON.parse(localStorage.getItem("user"));
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [begin, setBegin] = useState(false);
  return (
    <>
      {isButtonClicked === false ? (
        <section className="instruction">
          <div class="ct-inst-container">
            <div class="ct-ins-topbar"></div>
            <div class="ct-ins-main">
              <div class="ct-ins-left">
                <div class="ct-ins-content">Instructions</div>
                {ready ? (
                  <>
                    <div class="ct-ins-wrapper">
                      <div class="ct-ins-page">
                        <p>
                          <p></p>
                          <p>
                            <br />
                            <strong>
                              Other Important Instructions for Candidate:
                            </strong>
                            <br />
                            &nbsp;
                          </p>
                          <p>
                            1. Go through the various symbols used in the test
                            and understand their meaning before you start the
                            test.
                          </p>
                          <p>2. This question paper consists of 3 sections:</p>
                          <table border="1" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td width="133">
                                  <p align="center">
                                    <strong>Section</strong>
                                  </p>
                                </td>
                                <td valign="top" width="354">
                                  <p>
                                    <strong>Test</strong>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="133">
                                  <p align="center">I</p>
                                </td>
                                <td width="354">
                                  <p>
                                    Verbal Ability &amp; Reading Comprehension
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="133">
                                  <p align="center">II</p>
                                </td>
                                <td width="354">
                                  <p>
                                    Data Interpretation &amp; Logical Reasoning
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="133">
                                  <p align="center">III</p>
                                </td>
                                <td width="354">
                                  <p>Quantitative Ability</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p>&nbsp;</p>
                          <p>
                            3. For Data Interpretation &amp; Logical Reasoning,
                            each situation/scenario may consist of a block of
                            multiple questions. Similarly for Reading
                            Comprehension, each passage may consist of a block
                            of multiple questions.
                          </p>
                          <p>
                            4. In MCQ-type questions, candidates will be given 3
                            (three) marks for each correct answer, -1 (minus
                            one) mark for each wrong answer and 0 (zero) marks
                            for each un-attempted question
                          </p>
                          <p>
                            5.In Non- MCQ type questions, candidates will be
                            given 3 (three) marks for each correct answer, and 0
                            (zero) marks for each&nbsp;wrong&nbsp;and
                            un-attempted question. There will be&nbsp;no
                            negative mark&nbsp;for Non-MCQ type questions.
                          </p>
                          <p>
                            6.MCQ-type questions will have choices out of which
                            only one will be the correct answer. The computer
                            allotted to you at the test centre runs on a
                            specialized software that permits you to select only
                            one answer for MCQ-type questions. The candidate has
                            to choose the correct answer by clicking on the
                            radio button (o) placed just before the option. For
                            Non-MCQ type questions, type in the answer in the
                            space provided on the screen using the on-screen
                            keyboard.
                          </p>
                          <p>
                            7. No external/ physical calculator is allowed,
                            however an on-screen calculator in the system will
                            be provided
                          </p>
                        </p>
                      </div>
                    </div>
                    <div class="ct-inst-footer">
                      <div class="ct-inst-agree">
                        <input
                          type="checkbox"
                          id="ct-inst"
                          onChange={(e) => setBegin(e.target.checked)}
                        />
                        <label for="ct-inst">
                          I have read and understood all the above instructions.
                          I have also read and understood clearly the
                          instructions given on the admit card and shall follow
                          the same. I also understand that in case I am found to
                          violate any of these instructions, my candidature is
                          liable to be cancelled. I also confirm that at the
                          start of the test all the computer hardware allotted
                          to me are in proper working condition.
                          <br />
                          <br />I will not disclose, publish, reproduce,
                          transmit, store, or facilitate transmission and
                          storage of the contents of the Test or any information
                          therein in whole or part thereof in any form or by any
                          means, verbal or written, electronically or
                          mechanically for any purpose. I agree to this
                          Non-Disclosure Agreement.
                        </label>
                      </div>
                      <div class="ct-inst-button">
                        <button
                          class="btn btn-mark btn-left"
                          type="button"
                          onClick={() => setReady(false)}
                        >
                          <img src={backward} alt=">" width="25" height="18" />
                          <strong>Previous</strong>
                        </button>
                        <button
                          class="btn btn-submit-side"
                          type="button"
                          onClick={() => setIsButtonClicked(true)}
                          disabled={!begin}
                        >
                          I am ready to begin
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div class="ct-ins-wrapper">
                      <div class="ct-ins-page">
                        <p>
                          <p>
                            <strong>General Instructions for Candidate:</strong>
                          </p>
                          <p>
                            1.Total duration of the test is 120 minutes and the
                            test has three sections.
                          </p>
                          <p>
                            <br />
                            2. The time allotted to each Section is 40 minutes
                            As soon as you start answering a section the clock
                            (displayed on the top right corner of the screen)
                            will start ticking. On completion of 40 minutes, the
                            clock will stop, the particular section will be
                            locked, and the section will be auto-submitted. You
                            can then move to the next Section and start
                            answering. The same process will be repeated for all
                            three Sections. On submission of all three sections
                            a summary of your answers will be displayed on the
                            screen
                          </p>
                          <p>
                            <br />
                            3. The question paper will have a mix of Multiple
                            Choice Question (MCQ) type with options and non-MCQ
                            type
                            <br />
                            <br />
                            4. Your clock will be set at the server. The
                            countdown timer at the top right corner of screen
                            will display the remaining time available for you to
                            complete the Section.&nbsp;When the timer reaches
                            zero, the test for the Section will end by itself.
                            <br />
                            <br />
                            5.You will&nbsp;not be allowed&nbsp;to use any
                            calculator or any other computing machine or device.
                            An on-screen calculator will be provided, which can
                            be used for computing..
                            <br />
                            <br clear="all" />
                            6. The Question Palette displayed on the right side
                            of screen will show the status of each question
                            using one of the following symbol.
                          </p>
                          <p>
                            &nbsp;
                            <img
                              src={questionSymbol}
                              alt=""
                              width="609"
                              height="316"
                            />
                          </p>
                          <p>
                            *If a question is&nbsp;answered&nbsp;and ‘Marked for
                            Review’&nbsp;(Serial No. E), then the answer will be
                            considered for evaluation unless the status is
                            modified by the candidate.
                            <br />
                            <br />
                            7. You can click on the "&lt;&nbsp;" arrow which
                            appears to the left of question palette to collapse
                            the question palette thereby maximizing the question
                            window. To view the question palette again, you can
                            click on "&nbsp;&gt;" which appears on the right
                            side of question window.
                            <br />
                            <br />
                            8.&nbsp;To answer a question, do the following:
                            <br />
                            <br />
                            a. Click on the question number in the Question
                            Palette to go to that question directly.
                            <br />
                            <br />
                            b. Select an answer for a multiple choice type
                            question by clicking on the bubble placed before the
                            choices in the form of radio buttons (o). For
                            Non-MCQ questions, type in the answer in the space
                            provided on the screen using the on-screen keyboard.
                            <br />
                            <br />
                            c. Click on ‘Save &amp; Next’&nbsp;to save your
                            answer for the current question and then go to the
                            next question.
                            <br />
                            <br />
                            Alternatively you may click on&nbsp;Mark for Review
                            &amp; Next&nbsp;to save your answer for the current
                            question and also to mark it for review, and then go
                            to the next question.
                          </p>
                          <p>
                            <br />
                            Caution:&nbsp;Your answer for the current question
                            will not be saved, if you navigate directly to
                            another question by clicking on a question number
                            and not click ‘Save &amp; Next’ or ‘Mark for Review
                            &amp; Next’ button.
                          </p>
                          <p>
                            d. You will be able to view all the questions of a
                            section by clicking on the ‘Question
                            Paper’&nbsp;button.&nbsp;This feature is provided
                            for you to see the entire question paper by
                            respective section
                            <br />
                            <br />
                            <br />
                            <br />
                            Changing the response:
                            <br />
                            <br />
                            9.&nbsp;Procedure for changing the response of a
                            question:
                            <br />
                            <br />
                            a. To deselect your chosen answer, click on
                            the&nbsp;question number&nbsp;on the palette and
                            click on the&nbsp;‘Clear Response’&nbsp;button.
                          </p>
                          <p>
                            b. To change your chosen answer, click on the radio
                            button corresponding to another option.
                          </p>
                          <p>
                            c. To save your changed answer, you MUST click on
                            the ‘Save &amp; Next’ or ‘Mark for Review &amp;
                            Next’&nbsp;button.
                            <br />
                            <br />
                            10 Navigating through sections:
                            <br />
                            <br />
                            The test has three Sections: I. Verbal Ability and
                            Reading Comprehension (VARC), II. Data
                            Interpretation &amp; Logical Reasoning (DILR) and
                            III. Quantitative Ability (QA), which will be
                            administered in the same order as above.The section
                            you are currently viewing is highlighted.
                          </p>
                          <p>
                            11.
                            <strong>
                              Only those students who appear for the test in the
                              specified Proctored Window period and&nbsp; submit
                              the test within 2 hours after the launch will be
                              eligible for a rank. The Test Engine captures the
                              Start and End time for this purpose.
                            </strong>
                          </p>
                          <p>&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>&nbsp;</p>
                          <p></p>
                        </p>
                      </div>
                    </div>
                    <div class="ct-inst-footer">
                      <div class="ct-inst-button">
                        <button
                          class="btn btn-mark btn-right"
                          type="button"
                          onClick={() => setReady(true)}
                        >
                          <strong>Next</strong>
                          <img src={forward} alt=">" width="25" height="18" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div class="ct-ins-right">
                <div class="ct-inst-profileimage">
                  <img src={TestProfile} alt="profile" />
                </div>
                <div class="ct-inst-profilename">{candidateName.name}</div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <PracticeQuestions />
      )}
    </>
  );
};

export default Instruction;
