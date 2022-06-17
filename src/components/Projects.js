import React from "react"
import AddNewProject from "./AddNewProject"
import Project from "./Project"

function Projects(){
  return (
    <div className='Projects'>
      <AddNewProject />
      <Projects/>
    </div>
  )
}

export default Projects