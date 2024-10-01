import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Route, Routes, Link } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const notHiredPeople = () => {
    return (
      people.filter(
        (person) =>
          !hiredPeople.some(
            (hiredPerson) => hiredPerson.login.uuid === person.login.uuid
          )
      )
    )
  }
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50").then(Response => {
    if(Response.ok){
      return Response.json()
    }
    throw Response

    }).then(data => {
      setPeople(data.results)
    }).catch(error => {
      console.error("Error fetching data: ", error)
    })
  }, [])

  return (
    <>
      <header>
        <Link to='/'>Dashboard</Link>
        <h1>Hire Your Team</h1>
        <nav>
          <Routes>
            <Route path='/' element={<Dashboard hiredPeople={hiredPeople} people={notHiredPeople()}/>}/>
            <Route path='/view/:id' element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>}/>
          </Routes>
        </nav>
      </header>
    </>
  )
}
