import './App.css';
import React, { useEffect, useState } from 'react';
import NET from 'vanta/src/vanta.net'
import About from "./About"
import Skill from "./professionalSkill"
import Edu from "./Edu"
import Project from "./project"
import Work from "./work"
import Hobby from "./hobby"
import projectData from './projectData';
import Nav from './Nav';


function App() {
  useEffect(() => {
    NET({
      el: '#Background',
      speed: 2,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xe00c0,
      backgroundColor: 0x70722,

    })
  }, [])

  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(prevCount => prevCount + 3); // Show 3 more projects when clicked
  };

  return (
    <div className='bg' id='Background'>
      <Nav />
      <div className='bg2' id='Background2'>
        <About />
        <Skill />
        <Edu />

        <button className='btn'> Projects</button>
        {projectData.slice(0, visibleProjects).map((item, index) => (
          < Project
            key={index}
            img={item.img}
            pLink={item.pLink}
            h2={item.h2}
            p={item.p}
            lang1={item.lang1}
            lang2={item.lang2}
            lang3={item.lang3}
            lang4={item.lang4}
            lang5={item.lang5}
          />
        ))}
        {visibleProjects < projectData.length && (
          <button className='showMoreBtn' onClick={showMoreProjects}>Show More Project</button>
        )}
        <Work />
        <Hobby />
      </div>
    </div>
  );
}

export default App;
