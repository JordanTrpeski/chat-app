import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom'

import Login from "./routes/login";
import Register from "./routes/register";
import Index from "./routes";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="/" element={<Index/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
