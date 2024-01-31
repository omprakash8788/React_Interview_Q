import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './component/ShowList';
import ShowDetails from './component/ShowDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
