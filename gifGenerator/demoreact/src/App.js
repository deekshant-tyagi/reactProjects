import React, { useState } from 'react'
import './App.css';
import Random from './components/Random'
import Tag from './components/Tag';
function App() {
  return (
    <div className="App background w-full h-full relative flex flex-col items-center">
      <h1 className='absolute text-4xl bg-white font-bold w-11/12 text-center rounded-lg mt-7 '>RANDOM GIF'S</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>
     
    </div>
  );
}

export default App;
