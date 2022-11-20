import React from 'react';
// eslint-disable-next-line
import { Footer, Blog , Features, WhatGp3, Header , Possibility } from './containers';
import { Cta, Brand, Navbar } from './components';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
        
      </div>
      <Brand/>
      <WhatGp3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App