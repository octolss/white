import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/header.jsx';
import './header/header.css';
import About from './about/about.jsx';
import './about/about.css';
import Offers from './offers/offers.jsx';
import './offers/offers.css';
import Team from './team/team.jsx';
import './team/team.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="all">
      <Header/>
      <About/>
      <Offers/>
      <Team/>
    </div>
  </React.StrictMode>
  
);


