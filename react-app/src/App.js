import './App.css';
import React, { useEffect, useState } from 'react';
import NET from 'vanta/src/vanta.net'
import About from "./About"
import Skill from "./professionalSkill"
import Edu from "./Edu"
import Project from "./project"
import Work from "./work"
import Hobby from "./hobby"
import Nav from './Nav';
import useProjectData from './projectData';


function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const { projectData, loading } = useProjectData();

  console.log(projectData)


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
       {/* Show loading message while fetching data */}
       {loading ? (
          <div className="LoadingMsg">
          <i className="fa fa-spinner fa-spin"></i> {/* Font Awesome spinner */}
          Loading...
        </div>
      
        ) : (
          projectData && projectData.slice(0, visibleProjects).map((item, index) => (
            <Project
              key={index}
              img={item['Project Image ']}
              pLink={item['Project Link']}
              h2={item['Portfolio Website']}
              p={item['Project Description']}
              lang1={item['Language 1']}
              lang2={item['Language 2']}
              lang3={item['Language 3']}
              lang4={item['Language 4']}
              lang5={item['Language 5']}
            />
          ))
        )}

        {visibleProjects < projectData.length && (
          <button className='showMoreBtn' onClick={showMoreProjects}>
            Show More Projects
          </button>
        )}
       
        <Work />
        <Hobby />
      </div>
    </div>
  );
}

export default App;
