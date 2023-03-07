import { useContext } from "react";
import { FeedbackContext } from "./FeedbackContext";

export const useFeedback = () =>{

  const context = useContext(FeedbackContext);

  if(context === undefined){
    throw new Error('useFeedback() can only be used inside a Feedback provider!')
  }

  return context
}
