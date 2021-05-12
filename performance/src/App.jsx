import React from 'react';
import './App.css';

import CruiseHeader from './components/CruiseHeader/CruiseHeader.jsx'
import CruiseSider from './components/CruiseSider/CruiseSider.jsx'
import CruiseFooter from './components/CruiseFooter/CruiseFooter.jsx'
import CruiseContent from './components/CruiseContent/CruiseContent.jsx'


function App() {
  return (
    <div className="App">

      <CruiseHeader />
      <div className="layout">
        <CruiseSider />
        <CruiseContent />
      </div>
      <CruiseFooter />

    </div>
  );
}

export default App;
