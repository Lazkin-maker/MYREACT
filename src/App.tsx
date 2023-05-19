import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

import './App.css';
import { ButtonWithSubElements } from './components/ButtonWithSubElements';

function App() {

  return (
    <div>

      <ButtonWithSubElements icon={<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
        aria-describedby="desc" role="img">
        <title>World Globe</title>
        <desc>A line styled icon from Orion Icon Library.</desc>
        <ellipse stroke-width="2"
          stroke-miterlimit="10" stroke="#202020" fill="none" ry="30" rx="16.1" cy="32"
          cx="32" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></ellipse>
        <path d="M4.5 44h55m-55-24h55M32 2v60" stroke-width="2" stroke-miterlimit="10"
          stroke="#202020" fill="none" data-name="layer2" stroke-linejoin="round"
          stroke-linecap="round"></path>
        <circle stroke-width="2" stroke-miterlimit="10" stroke="#202020"
          fill="none" r="30" cy="32" cx="32" data-name="layer1" stroke-linejoin="round"
          stroke-linecap="round"></circle>
      </svg>} />

    </div>
  );
}

export default App;
