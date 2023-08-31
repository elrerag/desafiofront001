import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function DataList(props) {
  return (
    <ul>
      {props.data.map((person, index) => (
        <li key={index}>
          <span>{person.name}</span> <span>{person.age}</span>
        </li>
      ))}
    </ul>
  );
}

const data = [
  { name: 'Peter', age: 25 },
  { name: 'Jenna', age: 24 },
  { name: 'Sandra', age: 31 },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataList data={data} />
  </React.StrictMode>
);
