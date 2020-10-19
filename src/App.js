import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const myList = [
  {
    value: 'First'
  },
  {
    value: 'First'
  },  {
    value: 'First'
  },  {
    value: 'First'
  }
]

function App() {
  const [list, setList] = useState([myList]);
  return (
    <div className="App">
      <ul>
        {myList.map(listElement => (
           <li>{listElement.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
