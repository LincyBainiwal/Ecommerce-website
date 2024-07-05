import React from 'react'
import CustomerRoutes from './Routers/CustomerRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  
      <div>
        <BrowserRouter>
        <CustomerRoutes/>
        </BrowserRouter>
        
    
      </div>


    
  );
};

export default App
