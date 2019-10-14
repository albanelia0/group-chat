import React from 'react';

import ChatRoom from '../ChatRoom'

import './index.scss';

const baseClass = 'gc-GroupChat'
const titleClass = `${baseClass}-title`

function App() {

  return (
    <div className={baseClass}>
      <h1 className={titleClass}>GroupChat</h1>
      <ChatRoom/>
    </div>
  );
}

export default App;
