import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const {person} = props
  const {setHiredPeople} = props
  const {hiredPeople} = props
  const [wage, setWage] = useState(person.wage? person.wage : 0)
  const Navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const bool = hiredPeople.includes(person)
    person.wage = wage
    if(bool){
      setHiredPeople([...hiredPeople])
    }else{
      setHiredPeople([...hiredPeople, person])
    }
    
    Navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">{person.wage? "Edit" : "Hire"}</button>
    </form>
  )
}

export default HireForm
