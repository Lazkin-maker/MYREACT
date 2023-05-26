import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

import './App.css';
import { ButtonWithSubElements } from './components/ButtonWithSubElements';
import Timer from './components/Timer';

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
      </svg>} name={"btn1"} />

      <ButtonWithSubElements icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
        aria-describedby="desc" role="img">
        <title>Recycle</title>
        <desc>A line styled icon from Orion Icon Library.</desc>
        <path data-name="layer2"
          d="M62 34L51.833 23.23l-8.83 10.88 4.66 3.782 1.856-2.288a20.918 20.918 0 0 1-19.072 18.417l.458 5.983A26.956 26.956 0 0 0 55.55 35.713l2.293 2.372z"
          fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"
          stroke-linecap="round"></path>
        <path data-name="layer1" d="M14.086 46.16l.935 2.667A20.82 20.82 0 0 1 10.4 23.53l-5.303-2.805a26.814 26.814 0 0 0 7.692 34.01L8.947 56.07 10 62l14.533-4.172-4.785-13.653zm31.17-25.94l4.725-3.802A26.787 26.787 0 0 0 28.834 6h-.003a26.95 26.95 0 0 0-8.805 1.681l1.51-3.671L16 1.948l-5.947 14.697 14.503 3.03 1.221-5.868-2.737-.775A21.03 21.03 0 0 1 28.83 12h.002a20.926 20.926 0 0 1 16.423 8.22z"
          fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"
          stroke-linecap="round"></path>
      </svg>} name={"btn2"} />

      <div className="flex justify-center items-center h-screen">
        <Timer initialTime={30} />
      </div>
    </div>
  );
}

export default App;
