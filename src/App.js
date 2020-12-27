import logo from './logo.svg';
import './App.css';
import {
  useEffect,
  useState
} from 'react';
import Team from './Components/Team/Team';
import Member from './Components/Team/Member/Member';

function App() {
  const [people, setPeople] = useState([]);
  const [member, setMember] = useState([]);
  console.log(member);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setPeople(data))
        }, [])

        const handleAddTeam = (name, id) => {
                  const newMember = [...member, name, id];
                  setMember(newMember);
                  console.log('added');

        }
  return ( 
    <div className = "App" >
      <h1 > People 's Data: {people.length}</h1>
      <h2>Team Member: {member.length} </h2>
      <Member member={member}></Member>
      {
        people.map(team => <Team team = {team} handleAddTeam={handleAddTeam}></Team>)
        } 

      <header className = "App-header" > 
    </header> 
    </div>
  );
}

export default App;