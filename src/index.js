import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
// css
import "./css/index.css"
import "./css/grid.css"
// images
import profilePicture from "./images/Profile Picture.jpg"
import controllerIcon from "./images/skills/controller-icon.png"
import frontEnd from "./images/skills/front-end-icon.png"

import unrealEngineLogo from "./images/skills/logos/UnrealEngineLogo.png"
import unityLogo from "./images/skills/logos/UnityLogo.png"
import blenderEngineLogo from "./images/skills/logos/BlenderLogo.png"
import visualStudioCodeLogo from "./images/skills/logos/VisualStudioCodeLogo.png"
import githubProficiencyLogo from "./images/skills/logos/GithubLogo.png"
import htmlLogo from "./images/skills/logos/HTMLLogo.png"
import cssLogo from "./images/skills/logos/CSSLogo.png"
import javascriptLogo from "./images/skills/logos/JavascriptLogo.png"
import cppLogo from "./images/skills/logos/C++Logo.png"
import pythonLogo from "./images/skills/logos/PythonLogo.png"
import javaLogo from "./images/skills/logos/JavaLogo.png"
import csLogo from "./images/skills/logos/CSharpLogo.png"
import nodejsLogo from "./images/skills/logos/NodeJSLogo.png"
import reactLogo from "./images/skills/logos/ReactLogo.png"

import missionReadyLogo from "./images/qualifications/Mission Ready logo.png"
import eitLogo from "./images/qualifications/EIT logo.jpg"
import udemyLogo from "./images/qualifications/Udemy Logo.png"
import hfuLogo from "./images/qualifications/HFU logo.jpg"
import gameDevLogo from "./images/qualifications/GameDevLogo.jpg"

import whiteCircle from "./images/footer/White Circle.png"
import githubLogo from "./images/footer/Github logo.png"
import LinkedInLogo from "./images/footer/LinkedIn logo.png"
// components
import Proficiency from "./components/proficiency.js"
import Qualification from "./components/qualification.js"

import UnrealShowcase from "./components/UE4showcase.js"
import BlenderShowcase from "./components/3DblenderShowcase.js"
import ThrillCapitalShowcase from "./components/ThrillCapitalShowcase.js";
// downloads
import CV from "./downloads/Rowan Craik CV.pdf"
import Transcript from "./downloads/Transcript of Records.pdf"
import HFUCertificate from "./downloads/Furtwangen Participation Certificate.pdf"
import UdemyCertificate from "./downloads/Udemy Certificate.PNG"
import BlenderBeginnerCertificate from "./downloads/GameDevTVBlenderCertificate.pdf"
import GitHubCertificate from "./downloads/GameDevTVGithubCertificate.pdf"
import BlenderCharacterCertificate from "./downloads/GameDevTVBlenderCharacterCertificate.pdf"

function App()
{
  const section5 = useRef(null);
  const scrollToSection5 = () => section5.current.scrollIntoView({behavior: 'smooth'});
  const section3 = useRef(null);
  const scrollToSection3 = () => section3.current.scrollIntoView({behavior: 'smooth'});

  const [showcase, setShowcase] = useState(<UnrealShowcase/>);

  function UpdateShowcase(component, activeButton) {
    const unrealButton = document.getElementById("unreal-button");
    const blenderButton = document.getElementById("blender-button");
    const thrillCapitalButton = document.getElementById("thrill-capital-button");

    unrealButton.classList = (activeButton == "unreal") ? "showcase-button active-showcase-button" : "showcase-button";
    blenderButton.classList = (activeButton == "blender") ? "showcase-button active-showcase-button" : "showcase-button";
    thrillCapitalButton.classList = (activeButton == "thrill-capital") ? "showcase-button active-showcase-button" : "showcase-button";

    setShowcase(component)
  }

  return (
    <>
      <div className="main-grid">
        <div className="grid-item" id="navigation">
          <div className="nav-container">
            <div className="nav-item">
              <p className="nav-title">Rowan Craik</p>
              <p className="nav-subtitle">Portfolio</p>
            </div>
            <div className="nav-item right-nav-item right-nav-button">
              <a href={CV} download><button className="nav-download">DOWNLOAD CV</button></a>
            </div>
            <div className="nav-item right-nav-item">
              <p onClick={scrollToSection5}>MY PROJECTS</p>
            </div>
            <div className="nav-item right-nav-item nav-about">
              <p onClick={scrollToSection3}>ABOUT ME</p>
            </div>
          </div>
        </div>
        <div className="grid-item" id="title">
          <p className="main-title">Rowan Craik Portfolio</p>
          <p className="main-subtitle">Bachelor of Computing Systems Graduate</p>
          <img className="profile-picture" src={profilePicture} />
        </div>
        <div className="grid-item" id="about" ref={section3}>
          <p className="about-title">Who am I?</p>
          <p className="about-paragraph">
            My name is Rowan and I am a Bachelor of Computing systems graduate looking for an entry level programming opportunity as a video game or front end software developer.
          </p>
          <div className="skills-div">
            <div>
              <img className="skills-icon" src={controllerIcon} />
              <p className="skills-title">Video game Development</p>
              <p className="skills-subtitle">My biggest passion is video games. I enjoy playing video games, creating video games, and enriching myself in video game culture. So much so that I have dedicated a large amount of my time towards learning various softwares that are used to make video games.</p>
              <p className="skills-section-title">Softwares</p>
              {Proficiency(unrealEngineLogo, "Unreal Engine", 4, false)}
              {Proficiency(unityLogo, "Unity", 3, false)}
              {Proficiency(blenderEngineLogo, "Blender", 5, false)}
              {Proficiency(visualStudioCodeLogo, "Visual Studio Code", 5, false)}
              {Proficiency(githubProficiencyLogo, "Github", 4, false)}
            </div>
            <div>
              <img className="skills-icon" src={frontEnd} />
              <p className="skills-title">Programming</p>
              <p className="skills-subtitle">I've learned various programming languages which make use of my critical thinking and problem solving skills. I enjoy constantly learning new things and facing challenges which require using my mind. Programming allows me to acomplish this on a daily basis.</p>
              <p className="skills-section-title">Languages</p>
              {Proficiency(htmlLogo, "HTML", 5, true)}
              {Proficiency(cssLogo, "CSS", 5, true)}
              {Proficiency(javascriptLogo, "Javascript", 5, true)}
              {Proficiency(cppLogo, "C++", 4, true)}
              {Proficiency(pythonLogo, "Python", 3, true)}
              {Proficiency(javaLogo, "Java", 1, true)}
              {Proficiency(csLogo, "C#", 4, true)}
              {Proficiency(nodejsLogo, "Node.js", 2, true)}
              {Proficiency(reactLogo, "React", 5, true)}
            </div>
          </div>
        </div>
        <div className="grid-item" id="qualifications">
          <p className="qualifications-title">Qualifications</p>
          <div className="qualifications-grid">
            <div id="mission-ready-qualification">
              {Qualification(missionReadyLogo, "Certificate in Software Development (AI & Cloud)", "MISSION READY", "FEB 2022 - APR 2022", 350)}
              <a href="https://www.credential.net/92ad771d-e7c9-4927-97bb-a776766c6521#gs.3jteix"><button className="qualification-button">CERTIFICATE</button></a>
            </div>
            <div id="eit-qualification">
              {Qualification(eitLogo, "Bachelor of Computing Systems", "EASTERN INSTITUTE OF TECHNOLOGY", "2018 - 2021", 278)}
              <a href={Transcript} download><button className="qualification-button">CERTIFICATE</button></a>
            </div>
            <div id="udemy-qualification">
              {Qualification(udemyLogo, "Unreal Engine C++ and Make Video Games", "UDEMY", "2021", 319)}
              <a href={UdemyCertificate} download><button className="qualification-button">CERTIFICATE</button></a>
            </div>
            <div id="hfu-qualification">
              {Qualification(hfuLogo, "Student Exchange Programme in Germany", "HOCHSCHULE FURTWANGEN UNIVERSITY", "2020 - 2021", 410)}
              <a href={HFUCertificate} download><button className="qualification-button">CERTIFICATE</button></a>
            </div>
            <div id="gamedev-qualification">
              {Qualification(gameDevLogo, "Blender Creator 2.8: Learn 3D Modelling for Beginners", "GameDev.tv", "FEB 2022 - JUN 2022", 400)}
              <a href={BlenderBeginnerCertificate} download><button className="qualification-button">CERTIFICATE</button></a>
            </div>
            <div id="gamedev-qualification">
              {Qualification(gameDevLogo, "Get Git Smart Course: Learn Git in Unity, SourceTree, GitHub", "GameDev.tv", "JUN 2022 - JUN 2022", 450)}
              <a href={GitHubCertificate} download><button className="qualification-button">CERTIFICATE</button></a>
            </div>
            <div id="gamedev-qualification">
              {Qualification(gameDevLogo, "Blender Character Creator x2.0 for Video Games Design Course", "GameDev.tv", "JUN 2022 - JUN 2022", 450)}
              <a href={BlenderCharacterCertificate} download><button className="qualification-button">CERTIFICATE</button></a>
            </div>
          </div>
        </div>
        <div className="grid-item" id="my-work" ref={section5}>
          <p className="my-work-title">Experience</p>
          <div className="showcase-buttons-div">
            <button className="showcase-button active-showcase-button" id="unreal-button" onClick={() => UpdateShowcase(<UnrealShowcase/>, "unreal")}>UNREAL ENGINE</button>
            <button className="showcase-button" id="blender-button" onClick={() => UpdateShowcase(<BlenderShowcase/>, "blender")}>3D BLENDER</button>
            <button className="showcase-button" id="thrill-capital-button" onClick={() => UpdateShowcase(<ThrillCapitalShowcase/>, "thrill-capital")}>THRILL CAPITAL</button>
          </div>
          <div>
            {showcase}
          </div>
        </div>
        <div className="grid-item" id="footer">
          <img className="white-circle" src={whiteCircle} />
          <p className="footer-message">Look out for my newest projects. Stay in touch!</p>
          <div>
            <a href="https://github.com/Rowan5654"><img className="footer-link" src={githubLogo} /></a>
            <a href="https://www.linkedin.com/in/rowan-craik-56a85721b/"><img className="footer-link" src={LinkedInLogo} /></a>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));
