import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AlertEscalationHome from './pages/Alert-escalationHome';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Routes>
        <Route path="/" element={<AlertEscalationHome />} />
       
      </Routes>
    </div>
  );
}

export default App;