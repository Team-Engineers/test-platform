import React, { useState } from "react";
import "./QuestionPush.css";
import axios from "axios";
// import { API } from "../../utils/constants";

const initialItemOption = {
  ItemOptionID: "",
  ItemID: "",
  Options: "",
  RHSOption: "",
  MarkedIndex: 0,
  OrderNumber: 0,
  OptionIndex: 0,
  IsCorrect: false,
  IsHTML: false,
  RHSIsHTML: false,
};

const initialSectionItem = {
  ItemID: 0,
  ItemType: "",
  SubjectName: "",
  SubjectID: "",
  AreaName: "",
  AreaID: "",
  TopicName: "",
  TopicID: "",
  SubTopicName: "",
  SubTopicID: "",
  ItemOptions: [initialItemOption],
  StarRating: 0,
  ItemBankName: "",
  Direction: "",
  IsApproved: false,
  Items: "",
  ItemPassageID: 0,
  PassageItemIndex: 0,
  Passage: "",
  PassageTitle: "",
  IsLinkedQuestion: false,
  Points: 0,
  NegativePoints: 0,
  SkippedPoints: 0,
  Explanation: "",
  Difficulty: "",
  DifficultyLevel: "",
  IsProofRead: false,
  CorrectIndex: 0,
  IsRequiredQuestion: false,
  ItemOptionResponse: [initialItemOption],
  IsPassageQuestionSplit: false,
};

const initialSection = {
  QuestionPaperSectionID: 0,
  QuestionPaperID: 0,
  SectionTitle: "",
  OrderNumber: 0,
  TotalMarks: 0,
  TotalQuestions: 0,
  NegativeMarks: 0,
  TotalTime: 0,
  ItemResponse: [initialSectionItem],
};

const initialFormData = {
  TestID: 0,
  Name: "",
  Description: "",
  Languages: "",
  Instruction: "",
  IsSectionalTimer: false,
  SectionResponse: [initialSection],
};

const QuestionForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNestedInputChange = (field, index, nestedField, value) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      newData[field][index][nestedField] = value;
      return newData;
    });
  };

  const handleNestedLevel2InputChange = (field, index, nestedField1,index1,nestedField2, value) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      newData[field][index][nestedField1][index1][nestedField2] = value;
      return newData;
    });
  };

  const handleNestedLevel3InputChange = (field, index, nestedField1,index1,nestedField2,index2,nestedField3, value) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      newData[field][index][nestedField1][index1][nestedField2][index2][nestedField3] = value;
      return newData;
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('Access token not found in local storage');
      return;
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    };

    try {
      // Make a POST request using Axios
      const response = await axios.post(`http://localhost:8800/api/test/question`, formData, config);
  
      // Handle the response as needed
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
    // Your form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <section className="question-form">
      <h1>Question Push Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="TestID">Test ID:</label>
            <input
              type="number"
              id="TestID"
              name="TestID"
              value={formData.TestID}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Name">Test Name:</label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Description">Description:</label>
            <input
              type="text"
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Languages">Languages:</label>
            <input
              type="text"
              id="Languages"
              name="Languages"
              value={formData.Languages}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="Instruction">Instruction:</label>
            <input
              type="text"
              id="Instruction"
              name="Instruction"
              value={formData.Instruction}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="IsSectionalTimer">Sectional Timer:</label>
            <input
              type="checkbox"
              id="IsSectionalTimer"
              name="IsSectionalTimer"
              checked={formData.IsSectionalTimer}
              onChange={(e) =>
                setFormData({ ...formData, IsSectionalTimer: e.target.checked })
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="SectionTitle">Section Title:</label>
            <input
              type="text"
              id="SectionTitle"
              name="SectionTitle"
              value={formData.SectionResponse[0].SectionTitle}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "SectionTitle",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="QuestionPaperSectionID">
              Question Paper Section ID
            </label>
            <input
              type="text"
              id="QuestionPaperSectionID"
              name="QuestionPaperSectionID"
              value={formData.SectionResponse[0].QuestionPaperSectionID}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "QuestionPaperSectionID",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="QuestionPaperID">Question Paper ID</label>
            <input
              type="text"
              id="QuestionPaperID"
              name="QuestionPaperID"
              value={formData.SectionResponse[0].QuestionPaperID}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "QuestionPaperID",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="OrderNumber">Order Number</label>
            <input
              type="number"
              id="OrderNumber"
              name="OrderNumber"
              value={formData.SectionResponse[0].OrderNumber}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "OrderNumber",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="TotalMarks">Total Marks</label>
            <input
              type="number"
              id="TotalMarks"
              name="TotalMarks"
              value={formData.SectionResponse[0].TotalMarks}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "TotalMarks",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="TotalQuestions">Total Questions</label>
            <input
              type="number"
              id="TotalQuestions"
              name="TotalQuestions"
              value={formData.SectionResponse[0].TotalQuestions}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "TotalQuestions",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="NegativeMarks">Negative Marks</label>
            <input
              type="number"
              id="NegativeMarks"
              name="NegativeMarks"
              value={formData.SectionResponse[0].NegativeMarks}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "NegativeMarks",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="TotalTime">Total Time </label>
            <input
              type="number"
              id="TotalTime"
              name="TotalTime"
              value={formData.SectionResponse[0].TotalTime}
              onChange={(e) =>
                handleNestedInputChange(
                  "SectionResponse",
                  0,
                  "TotalTime",
                  e.target.value
                )
              }
              required
            />
          </div>
          {/* Add more input fields for other nested structures if needed */}
        </div>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="SubjectName">Subject Name:</label>
            <input
              type="text"
              id="SubjectName"
              name="SubjectName"
              value={formData.SectionResponse[0].ItemResponse[0].SubjectName}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "SubjectName",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="ItemID">Item ID:</label>
            <input
              type="number"
              id="ItemID"
              name="ItemID"
              value={formData.SectionResponse[0].ItemResponse[0].ItemID}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemID",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="ItemType">Item Type:</label>
            <input
              type="text"
              id="ItemType"
              name="ItemType"
              value={formData.SectionResponse[0].ItemResponse[0].ItemType}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemType",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="SubjectID">Subject ID</label>
            <input
              type="number"
              id="SubjectID"
              name="SubjectID"
              value={formData.SectionResponse[0].ItemResponse[0].SubjectID}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "SubjectID",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="AreaName">Area Name</label>
            <input
              type="text"
              id="AreaName"
              name="AreaName"
              value={formData.SectionResponse[0].ItemResponse[0].AreaName}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "AreaName",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="AreaID">Area ID</label>
            <input
              type="text"
              id="AreaID"
              name="AreaID"
              value={formData.SectionResponse[0].ItemResponse[0].AreaID}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "AreaID",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="TopicName">Topic Name</label>
            <input
              type="text"
              id="TopicName"
              name="TopicName"
              value={formData.SectionResponse[0].ItemResponse[0].TopicName}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "TopicName",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="TopicID">Topic ID</label>
            <input
              type="text"
              id="TopicID"
              name="TopicID"
              value={formData.SectionResponse[0].ItemResponse[0].TopicID}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "TopicID",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="SubTopicName">Sub Topic Name</label>
            <input
              type="text"
              id="SubTopicName"
              name="SubTopicName"
              value={formData.SectionResponse[0].ItemResponse[0].SubTopicName}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "SubTopicName",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="SubTopicID">Sub Topic ID</label>
            <input
              type="text"
              id="SubTopicID"
              name="SubTopicID"
              value={formData.SectionResponse[0].ItemResponse[0].SubTopicID}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "SubTopicID",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="StarRating">Star Rating</label>
            <input
              type="text"
              id="StarRating"
              name="StarRating"
              value={formData.SectionResponse[0].ItemResponse[0].StarRating}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "StarRating",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="ItemBankName">Item Bank Name</label>
            <input
              type="text"
              id="ItemBankName"
              name="ItemBankName"
              value={formData.SectionResponse[0].ItemResponse[0].ItemBankName}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemBankName",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="Direction">Direction</label>
            <input
              type="text"
              id="Direction"
              name="Direction"
              value={formData.SectionResponse[0].ItemResponse[0].Direction}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "Direction",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="IsApproved">Is Approved</label>
            <input
              type="text"
              id="IsApproved"
              name="IsApproved"
              value={formData.SectionResponse[0].ItemResponse[0].IsApproved}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "IsApproved",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="Items">Items</label>
            <input
              type="text"
              id="Items"
              name="Items"
              value={formData.SectionResponse[0].ItemResponse[0].Items}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "Items",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="ItemPassageID">Item Passage ID</label>
            <input
              type="text"
              id="ItemPassageID"
              name="ItemPassageID"
              value={formData.SectionResponse[0].ItemResponse[0].ItemPassageID}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemPassageID",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="PassageItemIndex">Passage Item Index</label>
            <input
              type="text"
              id="PassageItemIndex"
              name="PassageItemIndex"
              value={
                formData.SectionResponse[0].ItemResponse[0].PassageItemIndex
              }
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "PassageItemIndex",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="Passage">Passage</label>
            <input
              type="text"
              id="Passage"
              name="Passage"
              value={formData.SectionResponse[0].ItemResponse[0].Passage}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "Passage",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="PassageTitle">Passage Title</label>
            <input
              type="text"
              id="PassageTitle"
              name="PassageTitle"
              value={formData.SectionResponse[0].ItemResponse[0].PassageTitle}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "PassageTitle",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="IsLinkedQuestion">Is Linked Question</label>
            <input
              type="text"
              id="IsLinkedQuestion"
              name="IsLinkedQuestion"
              value={
                formData.SectionResponse[0].ItemResponse[0].IsLinkedQuestion
              }
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "IsLinkedQuestion",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="Points">Points</label>
            <input
              type="number"
              id="Points"
              name="Points"
              value={formData.SectionResponse[0].ItemResponse[0].Points}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "Points",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="NegativePoints">Negative Points</label>
            <input
              type="number"
              id="NegativePoints"
              name="NegativePoints"
              value={formData.SectionResponse[0].ItemResponse[0].NegativePoints}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "NegativePoints",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="SkippedPoints">Skipped Points</label>
            <input
              type="number"
              id="SkippedPoints"
              name="SkippedPoints"
              value={formData.SectionResponse[0].ItemResponse[0].SkippedPoints}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "SkippedPoints",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="Explanation">Explanation</label>
            <input
              type="text"
              id="Explanation"
              name="Explanation"
              value={formData.SectionResponse[0].ItemResponse[0].Explanation}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "Explanation",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Difficulty">Difficulty</label>
            <input
              type="text"
              id="Difficulty"
              name="Difficulty"
              value={formData.SectionResponse[0].ItemResponse[0].Difficulty}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "Difficulty",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="DifficultyLevel">Difficulty Level</label>
            <input
              type="text"
              id="DifficultyLevel"
              name="DifficultyLevel"
              value={
                formData.SectionResponse[0].ItemResponse[0].DifficultyLevel
              }
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "DifficultyLevel",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="IsProofRead">Is Proof Read</label>
            <input
              type="text"
              id="IsProofRead"
              name="IsProofRead"
              value={formData.SectionResponse[0].ItemResponse[0].IsProofRead}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "IsProofRead",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="CorrectIndex">Correct Index</label>
            <input
              type="text"
              id="CorrectIndex"
              name="CorrectIndex"
              value={formData.SectionResponse[0].ItemResponse[0].CorrectIndex}
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "CorrectIndex",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="IsRequiredQuestion">Is Required Question</label>
            <input
              type="text"
              id="IsRequiredQuestion"
              name="IsRequiredQuestion"
              value={
                formData.SectionResponse[0].ItemResponse[0].IsRequiredQuestion
              }
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "IsRequiredQuestion",
                  e.target.value
                )
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="IsPassageQuestionSplit">
              Is Passage Question Split
            </label>
            <input
              type="text"
              id="IsPassageQuestionSplit"
              name="IsPassageQuestionSplit"
              value={
                formData.SectionResponse[0].ItemResponse[0]
                  .IsPassageQuestionSplit
              }
              onChange={(e) =>
                handleNestedLevel2InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "IsPassageQuestionSplit",
                  e.target.value
                )
              }
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label htmlFor="ItemOptionID">Item Option ID:</label>
            <input
              type="text"
              id="ItemOptionID"
              name="ItemOptionID"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .ItemOptionID
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "ItemOptionID",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="ItemID">Item ID:</label>
            <input
              type="text"
              id="ItemID"
              name="ItemID"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .ItemID
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "ItemID",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="Options">Options</label>
            <input
              type="text"
              id="Options"
              name="Options"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .Options
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "Options",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="RHSOption">RHS Option</label>
            <input
              type="text"
              id="RHSOption"
              name="RHSOption"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .RHSOption
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "RHSOption",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="MarkedIndex">Marked Index</label>
            <input
              type="text"
              id="MarkedIndex"
              name="MarkedIndex"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .MarkedIndex
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "MarkedIndex",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="OrderNumber">Order Number</label>
            <input
              type="text"
              id="OrderNumber"
              name="OrderNumber"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .OrderNumber
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "OrderNumber",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="OptionIndex">Option Index</label>
            <input
              type="text"
              id="OptionIndex"
              name="OptionIndex"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .OptionIndex
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "OptionIndex",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="IsCorrect">Is Correct</label>
            <input
              type="text"
              id="IsCorrect"
              name="IsCorrect"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .IsCorrect
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "IsCorrect",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="IsHTML">Is HTML</label>
            <input
              type="text"
              id="IsHTML"
              name="IsHTML"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .IsHTML
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "IsHTML",
                  e.target.value
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="RHSIsHTML">RHS Is HTML</label>
            <input
              type="text"
              id="RHSIsHTML"
              name="RHSIsHTML"
              value={
                formData.SectionResponse[0].ItemResponse[0].ItemOptions[0]
                  .RHSIsHTML
              }
              onChange={(e) =>
                handleNestedLevel3InputChange(
                  "SectionResponse",
                  0,
                  "ItemResponse",
                  0,
                  "ItemOptions",
                  0,
                  "RHSIsHTML",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default QuestionForm;
