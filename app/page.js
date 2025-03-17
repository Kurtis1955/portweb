import React from 'react';
import HomePage from './pages/homepage/page';
import About_me from './pages/about/page';
import Projects_build from './pages/project-build/page';

export default function Home() {
  
  return (
     <div className='mainContainer'>
        <HomePage/>
        <About_me/>
        <Projects_build/>
     </div>
  )
}

