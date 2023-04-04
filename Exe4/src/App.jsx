import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './data.js';
import getData from './data.js';
import Name from './Components/Name/Name';
import Card from './Components/Card/Card';
import Box1 from './Box1/Box1';
function App() {
  let data = getData()
  const [count, setCount] = useState(0)
  const [people, setPeople] = useState(data);
  function peopleName() {
    const names = people.map((person) => person.name);
    return names;
  }
  function BornBefore(){
    var myDate = new Date('1-1-1990');
    var year = myDate.getFullYear();
    const filtered = people.filter((person) => new Date(person.birthday).getFullYear() < year);
    return filtered;
  }
  const [names,setName]=useState(peopleName);
  const [filtered,setFilter]=useState(BornBefore);
  
  return (
    <div className="App">
      <Box1 />
      {/* <Name arr = {people}/>
      <Card prop={filtered}/> */}
      {/* <h4>Names</h4>
        <ul>
          {names.map((person)=>(
            <li key={person.id} > {person}</li>
          ))}
        </ul>
<h4>Borned before 1990</h4>
      <ul>
        {filtered.map((person)=>(
          <li key={person.id} > {person.name}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default App
