import React, { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { PiDetectiveLight } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";


function Skills () {

    const [isWebDevVisible, setIsWebDevVisible] = useState(false);
    const [isCyberSecVisible, setIsCyberSecVisible] = useState(false);
    const [isLanguagesVisible, setIsLanguagesVisible] = useState(false);

  const toggleWebDev = () => setIsWebDevVisible(!isWebDevVisible);
  const toggleCyberSec = () => setIsCyberSecVisible(!isCyberSecVisible);
  const toggleLanguages = () => setIsLanguagesVisible(!isLanguagesVisible);


    return (
        <>
        <hr></hr>
      <h1>Skills:</h1>
      <div className="web-development">
        <h2 onClick={toggleWebDev}>Web Development {<MdOutlineWeb size={22}/>
        }</h2>
        {isWebDevVisible && (
          <ul>
            <li>SEO</li>
            <li>Web Design</li>
            <li>UI/UX</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        )}
      </div>

      <div className="cybersecurity">
        <h2 onClick={toggleCyberSec}>Cybersecurity {<PiDetectiveLight size={22}/>}</h2>
        {isCyberSecVisible && (
          <ul>
            <li>Network Security</li>
            <li>Ethical Hacking</li>
            <li>Security Engineering</li>
            <li>Web Security</li>
          </ul>
        )}
      </div>

      <div className="languages">
        <h2 onClick={toggleLanguages}>Languages {<IoLanguage size={20}/>}</h2>
        {isLanguagesVisible && (
          <ul>
            <li>Spanish: Native</li>
            <li>English: Fluent</li>
            <li>Chinese: Beginner</li>
          </ul>

        )}
      </div>
      <hr></hr>
    </>
       
    )
}

export default Skills