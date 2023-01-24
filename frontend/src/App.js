import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {
  Banner,
  NavbarMenu,
  MainContent
} from './components'


function App() {
  return (
    <div className="main-page container-fluid">
      <NavbarMenu></NavbarMenu>
      <MainContent></MainContent>
      {/* <Banner></Banner> */}
      </div>
  );
}

export default App;
