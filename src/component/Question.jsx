import React from "react";

const Question = () => {
  return (
    <div>
      <div className="col-12 d-flex clearfix pr-0">
        <div className="col-6 pr-0 common_custom_scroll height-400">
          <div className="testing">
            <b>
              <p
                className="txt-lightgray  mb-3"
                id="QPDirection"
                style={{ display: "none" }}
              ></p>
            </b>
            <div id="PSGQuestion">
              <b>
                The passage below is accompanied by a set of questions. Choose
                the best answer to each question.
              </b>
              <br />
              <br />
              Bureaucracies are forged in the smithy of politics. The decision
              to create such<span style={{ backgroundColor: "white" }}></span>
              structures and maintain them is made by political actors
              <span style={{ backgroundColor: "white" }}> </span>
              involved in governance. The modern democratic
              <span style={{ backgroundColor: "white" }}></span>governance
              requires a supporting bureaucratic apparatus because only an e
              <span style={{ backgroundColor: "white" }}>ffi</span>cient
              bureaucracy can generate the surplus capacity to absorb the high
              <span style={{ backgroundColor: "white" }}> </span>decision and
              transaction costs inherent in democracy.
              <br />
              <br />A nation that cannot feed or educate its citizens is
              unlikely to be able to support a
              <span style={{ backgroundColor: "white" }}></span>functioning
              democracy. This necessity, however, plays out in
              <span style={{ backgroundColor: "white" }}></span>a variety of
              ways.
              <span style={{ backgroundColor: "white" }}></span>The relationship
              of bureaucracy to the electoral—often misnamed the
              political—institutions of government in
              <span style={{ backgroundColor: "white" }}>fl</span>uences
              bureaucratic structures, delimits the scope of&nbsp;its
              activities, and creates pressures to restrict or reduce
              bureaucracy. Different combinations of political institutions
              result in di<span style={{ backgroundColor: "white" }}>ff</span>
              erent
              <span style={{ backgroundColor: "white" }}></span>implicit
              bargains with the bureaucracy, thus de
              <span style={{ backgroundColor: "white" }}>fi</span>ning
              bureaucracy’s responsibilities
              <span style={{ backgroundColor: "white" }}></span>and scope.
              <br />
              <br />
              Political systems vary in their concentration of political power
              <span style={{ backgroundColor: "white" }}></span>and
              decision-making processes; some political systems are centralized
              with
              <span style={{ backgroundColor: "white" }}></span>unitary
              governments; others are decentralized with semi-autonomous
              governments exercising power in a fragmented political system. In
              centralized political
              <span style={{ backgroundColor: "white" }}> </span>systems (e.g,
              UK, France), the role of&nbsp;bureaucracy in establishing and
              maintaining state power is generally recognized. In France, the
              bureaucracy is viewed as the instrument by&nbsp;which
              republicanism seeks equality and other fundamental values. Such
              states provide a clearer ‘‘contract’’ with the bureaucracy by
              being more<span style={{ backgroundColor: "white" }}></span>
              precise in de<span style={{ backgroundColor: "white" }}>fi</span>
              ning political roles and accepting the idea of signi
              <span style={{ backgroundColor: "white" }}>fi</span>cant
              discretion
              <span style={{ backgroundColor: "white" }}> </span>among career
              bureaucrats…
              <br />
              <br />
              In fragmented systems, the bureaucracy itself becomes a
              <span style={{ backgroundColor: "white" }}> </span>more political
              institution. The classic case of a fragmented political system
              <span style={{ backgroundColor: "white" }}> </span>failing to
              provide the political consensus to create a relationship with
              bureaucracy&nbsp;is the United States. Because the formal
              institutions of government
              <span style={{ backgroundColor: "white" }}></span>cannot
              concentrate power and thus de
              <span style={{ backgroundColor: "white" }}>fi</span>
              ne political ends, the bureaucracy is left
              <span style={{ backgroundColor: "white" }}></span>with the task of
              building support for its own mission from the bottom up rather
              <span style={{ backgroundColor: "white" }}> </span>than via a
              principal—agent contract with political branches. In this
              situation<span style={{ backgroundColor: "white" }}>,</span>
              bureaucracy is seen as a competitor for political power, and
              politicians perceive
              <span style={{ backgroundColor: "white" }}> </span>that running
              for election by campaigning against the bureaucracy is a viable
              <span style={{ backgroundColor: "white" }}></span>political
              strategy. The irony of decentralized systems such as the United
              States is that<span style={{ backgroundColor: "white" }}> </span>
              political principals fail to de
              <span style={{ backgroundColor: "white" }}>fi</span>ne political
              goals for the bureaucracy. Such shirking allows political attacks
              on the bureaucracy, but at the same
              <span style={{ backgroundColor: "white" }}> </span>time it creates
              the incentive for bureaucracies to generate their own political
              <span style={{ backgroundColor: "white" }}></span>support. Rather
              than increasing political control over the bureaucracy, the
              process
              <span style={{ backgroundColor: "white" }}> </span>lessens it
              because the bureaucracy supplies its own political legitimacy.
              <span style={{ backgroundColor: "white" }}></span>
              <br />
              <br />
              <span style={{ backgroundColor: "white" }}>…[A]</span>mong the
              nascent democracies
              <span style={{ backgroundColor: "white" }}> </span>in Latin
              America, the argument is made that democracy is enhanced by
              creating
              <span style={{ backgroundColor: "white" }}></span>more authority
              for governments closer to the people (that is local governments).
              Via fragmented local governments, with each developing a unique
              set of services, individual citizens can vote
              <span style={{ backgroundColor: "white" }}></span>with their feet
              to select the community that best meets their preferences for
              taxes
              <span style={{ backgroundColor: "white" }}> </span>
              and services.<span style={{ backgroundColor: "white" }}> </span>
              The argument, however, has implicit in it that local governments
              have the capacity to provide e
              <span style={{ backgroundColor: "white" }}>ff</span>ective
              services or can purchase them from the private sector. Without
              <span style={{ backgroundColor: "white" }}> </span>such capacity,
              decentralization is as likely to bring corruption and
              dissatisfaction,
              <span style={{ backgroundColor: "white" }}> </span>thus
              undercutting support for democracy…
            </div>
            <div className="question-show">
              <p className="txt-lightgray mb-3" id="essayleft"></p>
              <div
                id="alpha-keyboard-review"
                style={{ width: "100% !important", display: "none" }}
              ></div>
              <div
                className="options-lists"
                id="QPOptionsQuantitative"
                style={{ display: "none" }}
              ></div>
              <div
                className="show_in_input_questions"
                style={{ display: "none" }}
              >
                <a
                  className="text-capitalize txt-blue c-pointer"
                  id="see-answer-button-input"
                  data-toggle="modal"
                  onclick="showAnswerInput()"
                >
                  show answer
                </a>
                <a
                  className="text-capitalize txt-blue c-pointer"
                  id="hide-answer-button-input"
                  style={{ cursor: "pointer", display: "none" }}
                  onclick="hideAnswerInput()"
                >
                  hide answer
                </a>
              </div>
              <div id="show_answer_in_input" style={{ display: "none" }}></div>
            </div>
            <div className="solution-show">
              <h3 className="mt-0 mb-3 fnt-18 text-capitalize">solution</h3>
              <div className="txt-lightgray mb-3" id="solution-show">
                <p id="solution-content"></p>
                <p id="solution-video"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 pr-0 common_custom_scroll height-400">
          <div className="testing">
            <p
              className=" mb-3"
              id="PSGTitle"
              style={{ display: "inline-block" }}
            >
              Which of the following describes what the passage is mainly about?
            </p>
            <div
              className="options-lists"
              id="QPOptions_test_review"
              style={{ display: "block" }}
            >
              <div className="ui radio mcq-input-radio checkbox">
                <input
                  className="option-input-color"
                  type="radio"
                  name="q-16946051270240"
                  id="option-169460512702400"
                  value="169460512702400"
                />
                <label
                  id="label-169460512702400"
                  for="option-169460512702400"
                  className="ims-radio-label options-list__item txt-lightgray mb-3"
                >
                  The origins, growth and types of bureaucratic systems.
                </label>
              </div>
              <div className="ui radio mcq-input-radio checkbox">
                <input
                  className="option-input-color"
                  type="radio"
                  name="q-16946051270240"
                  id="option-169460512702401"
                  value="169460512702401"
                  checked=""
                />
                <label
                  id="label-169460512702401"
                  for="option-169460512702401"
                  className="ims-radio-label options-list__item txt-lightgray mb-3"
                >
                  How bureaucracies operate in different political systems.
                </label>
              </div>
              <div className="ui radio mcq-input-radio checkbox">
                <input
                  className="option-input-color"
                  type="radio"
                  name="q-16946051270240"
                  id="option-169460512702402"
                  value="169460512702402"
                />
                <label
                  id="label-169460512702402"
                  for="option-169460512702402"
                  className="ims-radio-label options-list__item txt-lightgray mb-3"
                >
                  Bureaucratic structures in developed and nascent democracies.
                </label>
              </div>
              <div className="ui radio mcq-input-radio checkbox">
                <input
                  className="option-input-color"
                  type="radio"
                  name="q-16946051270240"
                  id="option-169460512702403"
                  value="169460512702403"
                />
                <label
                  id="label-169460512702403"
                  for="option-169460512702403"
                  className="ims-radio-label options-list__item txt-lightgray mb-3"
                >
                  Types of bureaucratic structures and hierarchies.
                </label>
              </div>
            </div>
            <a
              className="text-capitalize txt-blue c-pointer"
              id="see-answer-button1"
              data-toggle="modal"
              onclick="showAnswer()"
              style={{ display: "inline-block" }}
            >
              show answer
            </a>
            <a
              className="text-capitalize txt-blue c-pointer"
              id="hide-answer-button1"
              style={{ cursor: "pointer", display: "none" }}
              onclick="hideAnswer()"
            >
              hide answer
            </a>

            <div
              id="alpha-keyboard-passage"
              style={{ width: "100% !important" }}
            ></div>
            <div
              className="show_in_input_questions_passage"
              style={{ display: "none" }}
            >
              <a
                className="text-capitalize txt-blue c-pointer"
                id="see-answer-button-input-passage"
                data-toggle="modal"
                onclick="showAnswerInputPassage()"
                style={{ display: "none" }}
              >
                show answer
              </a>
              <a
                className="text-capitalize txt-blue c-pointer"
                id="hide-answer-button-input-passage"
                style={{ cursor: "pointer", display: "none" }}
                onclick="hideAnswerInputPassage()"
              >
                hide answer
              </a>
            </div>
            <div
              id="show_answer_in_input_passage"
              style={{ display: "none" }}
            ></div>

            <div className="tab_class mt-2">
              <a
                className="p-3 pull-right text-capitalize txt-blue col-12 test-analyze explanaAnswers"
                href="javascript:void(0);"
                onclick="switchVisible();"
              >
                Answer Explanation{" "}
                <i className="chevron right icon chevron-dropdown pull-right"></i>
              </a>
            </div>
            <div
              className="solution-showss"
              id="show_data_onclick"
              style={{ display: "none" }}
            >
              <div className="txt-lightgray mb-3" id="solution-show">
                <p id="solution-video">
                  <div className="pt--5">
                    <p className="mt-0 mb-3 text-capitalize">
                      <b>Video Explanation</b>
                    </p>
                  </div>
                  <iframe
                    id="test-video"
                    src="https://myims.imsindia.com/myimsnew/test-video-player?videoId=/videos/866355029?h=9ae6cea891&amp;mode=VIMEO&amp;type=test&amp;v=0.45889863193996283"
                    frameborder="0"
                    width="100%"
                    className="iframe-body"
                    allowfullscreen="true"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    style={{ height: "285px" }}
                  ></iframe>
                </p>
                <p id="solution-content">
                  <p className="mt-0 mb-3 text-capitalize">
                    <b>Text Explanation</b>
                  </p>{" "}
                  The passage explains how bureaucracies operate in different
                  political systems, and the impacts of these systems on the
                  roles and functions of bureaucracies.
                  <br />
                  <br />
                  <span>
                    The passage primarily focuses on explaining how bureaucracy
                    functions within different types of political systems -
                    centralized and decentralized, and its role in each. It
                    discusses how the nature of political systems, in terms of
                    power concentration, impacts the roles, functions, and
                    nature of bureaucracies, using examples of the UK, France,
                    the US, and nascent democracies in Latin America. While
                    there is a comparison between these different countries'
                    political systems (option 3), it serves the broader purpose
                    of discussing the interaction between politics and
                    bureaucracy (option 2), making 2 a more comprehensive and
                    accurate description of the passage's content. Option 1 is
                    incorrect as the historical origins of bureaucracy are not
                    discussed, nor its types. Option 4 is also incorrect as the
                    passage does not discuss the types or hierarchies of
                    bureaucratic structures.
                  </span>
                  <br />
                  <span>Hence, [2].</span>
                </p>
              </div>
            </div>

            <div className="tabs pt-2">
              <div className="tab_class_scroll">
                <div className="tab_class">
                  <input type="checkbox" className="input_class" id="chck2" />
                  <label className="tab-label" for="chck2">
                    Answer Explanation
                  </label>
                  <div className="tab-content">
                    <div className="solution-show">
                      <div className="txt-lightgray mb-3" id="solution-show">
                        <p id="solution-video"></p>
                        <p id="solution-content"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
