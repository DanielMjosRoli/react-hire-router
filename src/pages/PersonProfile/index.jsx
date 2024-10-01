import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const {people} = props
  const { setHiredPeople } = props
  const { hiredPeople } = props
  const { id } = useParams()

  useEffect(() => {
    if(people && id){
      setPerson(people.find(p => p.login.uuid === id))
    }
  }, [people, id])
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <img src={person.picture.large} alt="image" />
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>
    </article>
  )
}

export default PersonProfile
