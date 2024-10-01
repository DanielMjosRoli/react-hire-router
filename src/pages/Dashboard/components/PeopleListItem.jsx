import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function PeopleListItem(props) {
  const { person } = props
  const Navigate = useNavigate()
  return (
    <li>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>{person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage ? <><p>Wage: £{person.wage}</p><button onClick={() => Navigate(`/view/${person.login.uuid}`)}>Edit wage</button></> : <></>}
    </li>
  )
}

export default PeopleListItem
