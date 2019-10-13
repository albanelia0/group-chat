import React from 'react';

import RoomChat from '../RoomChat'

import './index.scss';

const baseClass = 'GroupChatClass'
const titleClass = `${baseClass}-title`

function App() {

  return (
    <div className={baseClass}>
      <h1 className={titleClass}>GroupChat</h1>
      <RoomChat/>
    </div>
  );
}

export default App;
