import { useFeedback } from "../context/useFeedback";

function FeedbackStats() {

  const {feedback} = useFeedback();
  let avg = feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;
  avg = avg.toFixed(1).replace(/[.,]0$/,'');

  return (
   <div className="feedback-stats">
    <h4>{feedback.length} reviews</h4>
    <h4>Average rating: {isNaN(avg) ? 0 : avg} </h4>
   </div>
  )
}


export default FeedbackStats
