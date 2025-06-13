import PropTypes from 'prop-types' // in onder to use Proptypes we need to imported, with this line
import React, { useState } from "react";


// props = properties
function Projects () {

    const [isProject1Visible, setIsProject1Visible] = useState(false);
    const [isProject2Visible, setIsProject2Visible] = useState(false);
  
    const toggleProject1 = () => setIsProject1Visible(!isProject1Visible);
    const toggleProject2 = () => setIsProject2Visible(!isProject2Visible);



    return (
        <>
        <div className="project">
        <h2 onClick={toggleProject1}>Project 1: My Cool Project</h2>
        {isProject1Visible && (
          <p>This is the detailed description of Project 1.</p>
        )}
      </div>

      <div className="project">
        <h2 onClick={toggleProject2}>Project 2: Another Awesome Project</h2>
        {isProject2Visible && (
          <p>This is the detailed description of Project 2.</p>
        )}
      </div>
      
      </>

    )
}
// Projects.prototype going to expect that each "variable" needs to be with the right data type. 
// NOTHING GOING TO HAPPENDS BUT Its going to output a error in the console
// number: PropTypes.number = Needs to be a number

Projects.prototype = {
    desc: PropTypes.string,
    number: PropTypes.number, 
    tech: PropTypes.string,
}
// if <project /> is in blank, .DefaultProps going to show the next infor
// number: -
// desc: 404
// tech: -.-
Projects.defaultProps = {
    number: "-",
    desc: "404",
    tech: "-.-"
}
export default Projects 