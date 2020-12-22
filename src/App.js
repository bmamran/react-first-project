import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setPeople(data))
  }, [])

  return (
    <div className="App">
    <h1>People's Data: {people.length}</h1>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
