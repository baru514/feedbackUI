import FeedbackItem from "./FeedbackItem"
import { useFeedback } from "../context/useFeedback";

function FeedbackList() {

  const {feedback} = useFeedback();
  if(!feedback || feedback.length === 0){
    return 'No feedback yet';
  }

  return (
    <div className="feedback-list">
     {feedback.map((item) => (
      <FeedbackItem key={item.id} item={item} />
     ))}
    </div>
  )
}

export default FeedbackList
