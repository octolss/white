import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/header.jsx';
import './header/header.css';
import About from './about/about.jsx';
import './about/about.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="all">
      <Header/>
      <About/>
    </div>
  </React.StrictMode>
  
);


