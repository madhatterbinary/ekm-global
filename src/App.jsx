import React, { useState, useEffect } from 'react';
import data from './data.json';
import './App.css';
import ActorsList from './components/ActorsList';
import Actor from './components/Actor';

function App() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    setActors(data.actors);
  }, [actors]);

  return (
    <div className='main-container'>
      <ActorsList actors={actors} />
      <Actor actor={actors[0]} />
    </div>
  );
}

export default App;
