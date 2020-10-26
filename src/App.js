import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './shared/List';
import { last, defaultTo, uniq, includes, filter } from "lodash";

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
  const [selectedList, setSelectedList] = useState([]);
  const inputRef = useRef(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  const handleInputKeyDown = e => {

    if (e.key === 'Enter') {
      setList([
        ...list,

        {
          id: defaultTo(last(list), { id: 0 }).id + 1,
          value: e.target.value
        }
      ]);

      clearInput();
    }

  };

  const handleSelect = e => {
    if (includes(selectedList, e)) {
      setSelectedList(filter(selectedList, selectedEelement => selectedEelement !== e));
    } else {
      setSelectedList(uniq([...selectedList, e]));
    }
  };

  const handleDelete = e => {
    setList(filter(list, selectedEelement => selectedEelement !== e));
    setSelectedList(
      filter(selectedList, selectedEelement => selectedEelement !==e)
    );
  }

  return (
    <div className="App">
      <div>
        <input ref={inputRef}
          type="text"
          onKeyDown={handleInputKeyDown} />
      </div>
      <List
        list={list} 
        selected={selectedList} 
        onSelect={handleSelect}
        onDelete={handleDelete} 
        />
    </div>
  );
};


