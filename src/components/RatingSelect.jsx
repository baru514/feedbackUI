
function RatingSelect({ select, selected }) {

  const handleChange = (e) => {
    select(Number(e.target.value));
  }
  
  return (
    <div className="rating-wrapper">
      <label>Your rating:</label><select value={selected} onChange={handleChange}>
        <option>{1}</option>
        <option>{2}</option>
        <option>{3}</option>
        <option>{4}</option>
        <option>{5}</option>
        <option>{6}</option>
        <option>{7}</option>
        <option>{8}</option>
        <option>{9}</option>
        <option>{10}</option>
      </select>
    </div>
  )
}

export default RatingSelect