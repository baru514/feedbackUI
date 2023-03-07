import { useFeedback } from "../context/useFeedback"
import Card from "./shared/Card"
import editBtn from '/src/images/edit.png'

function FeedbackItem({ item }) {

  const {deleteFeedback, editFeedback, feedbackEdit} = useFeedback();

  return (
   <Card key={item.id}>
    <div className="num-display">{item.rating}</div>
    <button onClick={()=>deleteFeedback(item.id)} 
      style={{pointerEvents: feedbackEdit && feedbackEdit.item.id === item.id ? 'none' : 'all' }}
      className="close">&#x2716;</button>
    <div className='edit-btn'>
      <img 
        onClick={()=>(editFeedback(item), console.log(item.rating))}
        src={editBtn} 
        alt="edit button"
         />
    </div>
    <div className="text-display">{item.text}</div>
   </Card>
  )
}

export default FeedbackItem
