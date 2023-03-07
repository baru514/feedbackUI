import { useState } from "react";
import { createContext } from "react";
import FeedbackData from "../data/FeedbackData";

export const FeedbackContext = createContext();

export default function FeedbackProvider({ children }) {

  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item : {},
    edit: false
  })

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this?')){
    setFeedback(feedback.filter((item) => {
      return item.id !== id;
    }))};
  }

  const submitFeedback = (item) => {
    setFeedback((prevItem)=>{
      return [...prevItem, item]
    });
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateEditedFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item)=>
        item.id === id ? {...item, ...updItem}: item
      ))
  }


  return (
    <FeedbackContext.Provider value={{feedback, setFeedback, deleteFeedback, submitFeedback, editFeedback, feedbackEdit, updateEditedFeedback}}>
      {children}
    </FeedbackContext.Provider>
  )
}

