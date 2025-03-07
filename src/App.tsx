import React from 'react';
import './App.css';
import Story from './ui/Story';

function App() {
  return (
    <div className="App">
      <div className='mobile'>
        <section className='stories'>
          <div>
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
          </div>
        </section>
        <section className='posts'></section>

      </div>
    </div>
  );
}

export default App;
