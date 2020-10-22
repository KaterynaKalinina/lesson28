import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './shared/List';
import { last, defaultTo } from "lodash";

const myList = [
  {
    id: 1,
    value: 'First'
  },
  {
    id: 2,
    value: 'First'
  }, {
    id: 3,
    value: 'First'
  }, {
    id: 4,
    value: 'First'
  }
]

export default function App() {
  const [list, setList] = useState([...myList]);
  const handleInputKeyDown = e => {

    if (e.key === 'Enter') {
      setList([
        ...list,

        {
          id: defaultTo(last(list), { id: 0 }).id + 1,
          value: e.target.value
        }
      ]);
    }
  };


  return (
    <div className="App">
      <div>
        <input type="text" onKeyDown={handleInputKeyDown} />
      </div>
      <List list={list} />
    </div>
  );
};


