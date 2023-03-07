import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import { useFeedback } from '../context/useFeedback'
import { useEffect } from 'react'

function FeedbackForm() {

  const {submitFeedback, feedbackEdit, updateEditedFeedback} = useFeedback();

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit])


  const handleTextChange = (e) => { 
    const value = e.target.value;
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (value.trim().length < 10) { 
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const item = {
      text,
      rating,
      id: Math.random(),
    }
    if(feedbackEdit.edit === true){
      updateEditedFeedback(feedbackEdit.item.id, item)
    }else{
    submitFeedback(item)
    }
    setBtnDisabled(true) 
    setRating(10) 
    setText('')
    }


  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <textarea
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
