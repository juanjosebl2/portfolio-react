import React from 'react'
import './About.css';
import HTML from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import Ruby from '../assets/ruby.png';
import Flutter from '../assets/flutter.png';
import VSCode from '../assets/vscode.png';
import ReactIcon from '../assets/react.png'
import NPMlogo from '../assets/npm.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import PostGres from '../assets/postgres.png'
import CDT from '../assets/cdt.png'
import CSS from '../assets/css.png'
import BootStrap from '../assets/bootstrap.png'
import NextJS from '../assets/next.webp'
import JavaScript from '../assets/javascript.png'
import Sass from '../assets/sass.png'
import PostMan from '../assets/postman.png'
import TailwindCss from '../assets/tailwindcss.png'
import Laravel from '../assets/laravel.png'
import MongoBD from '../assets/mongoBD.png'
import SpringBoot from '../assets/springboot.png'
import MySql from '../assets/mysql.png'
import Django from '../assets/django.png'
import SqLite from '../assets/sqlite.png'
import IntellIj from '../assets/intellij.png'
import AndroidStudio from '../assets/androidstudio.png'
import Vite from '../assets/vite.png'
import Kotlin from '../assets/kotlin.png'
import C from '../assets/c.png'
import Java from '../assets/java.png'
import Python from '../assets/python.png'

export const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-me">
                <h2 className="title about-title">ABOUT ME</h2>
                <p className="paragraph about-para">
                    I am passionate about full stack development, covering both the backend and the frontend of applications. If I had to choose, I'd lean towards the backend, as I love the logic behind the features and the data structure.
                    <br/>
                    <br/>                
                    I am constantly looking for new technologies and opportunities in the field of development, be it backend, frontend or other areas. I am excited about what the future may bring and how I can continue to expand my abilities to create innovative and functional solutions.
                </p>
                <button className="hire-me">
                    <a href="https://drive.google.com/file/d/1SRs68hq0a2XkNNynU-gg8oJAKICVtkxF/view?usp=drive_link" target="_blank" rel="noreferrer">
                        GET MY CV
                    </a>
                </button>
            </div>
            <div className="about-skills">
                <h2 className="skill-title">Front-End</h2>
                <div className="skills">
                    <div className="skill">
                        <img
                            src={ReactIcon}
                            alt=""
                        />
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <img
                            src={JavaScript}
                            alt=""
                        />
                        <p>JavaScript</p>
                    </div> 
                    <div className="skill">
                        <img
                            src={HTML}
                            alt=""
                        />
                        <p>HTML5</p>
                    </div>
                    <div className="skill">
                        <img
                            src={CSS}
                            alt=""
                        />
                        <p>CSS3</p>
                    </div>
                    <div className="skill">
                        <img
                            src={TailwindCss}
                            alt=""
                        />
                        <p>TailwindCss</p>
                    </div>
                    <div className="skill">
                        <img
                            src={jQuery}
                            alt=""
                        />
                        <p>jQuery</p>
                    </div>
                    <div className="skill">
                        <img
                            src={Sass}
                            alt=""
                        />
                        <p>SASS</p>
                    </div>
                    <div className="skill">
                        <img
                            src={BootStrap}
                            alt=""
                        />
                        <p>Bootstrap</p>
                    </div>
                    <div className="skill">
                        <img
                            src={NextJS}
                            alt=""
                        />
                        <p>Next.js</p>
                    </div>
                </div>
                <h2 className="skill-title">Back-End</h2>
                <div className="skills">
                    <div className="skill">
                        <img
                            src={Laravel}
                            alt=""
                        />
                        <p>Laravel</p>
                    </div>
                    <div className="skill">
                        <img
                            src={SpringBoot}
                            alt=""
                        />
                        <p>SpringBoot</p>
                    </div>
                    <div className="skill">
                        <img
                            src={Django}
                            alt=""
                        />
                        <p>Django</p>
                    </div>
                    <div className="skill">
                        <img
                            src={MongoBD}
                            alt=""
                        />
                        <p>MongoBD</p>
                    </div>
                    <div className="skill">
                        <img
                            src={MySql}
                            alt=""
                        />
                        <p>MySql</p>
                    </div>
                    <div className="skill">
                        <img
                            src={PostGres}
                            alt=""
                        />
                        <p>PostgreSQL</p>
                    </div>
                    <div className="skill">
                        <img
                            src={SqLite}
                            alt=""
                        />
                        <p>SqLite</p>
                    </div>
                </div>
                <h2 className="skill-title">Mobile</h2>
                <div className="skills">
                    <div className="skill">
                        <img
                            src={ReactIcon}
                            alt=""
                        />
                        <p>React Native</p>
                    </div>
                    <div className="skill">
                        <img 
                            src={Flutter} 
                            alt="" 
                        />
                        <p>Flutter</p>
                    </div>
                    <div className="skill">
                        <img 
                            src={Kotlin} 
                            alt="" 
                        />
                        <p>Kotlin</p>
                    </div>
                </div>
                <h2 className="skill-title">Tools</h2>
                <div className="skills">
                    <div className="skill">
                        <img src={GitLogo} alt="" />
                        <p>Git</p>
                    </div>
                    <div className="skill">
                        <img src={GitHublogo} alt="" />
                        <p>GitHub</p>
                    </div>
                    <div className="skill">
                        <img src={CDT} alt="" />
                        <p>Chrome Dev Tools</p>
                    </div>
                    <div className="skill">
                        <img src={VSCode} alt="" />
                        <p>VS Code</p>
                    </div>
                    <div className="skill">
                        <img src={IntellIj} alt="" />
                        <p>IntellIj</p>
                    </div>
                    <div className="skill">
                        <img src={AndroidStudio} alt="" />
                        <p>AndroidStudio</p>
                    </div>
                    <div className="skill">
                        <img src={PostMan} alt="" />
                        <p>Postman</p>
                    </div>
                    <div className="skill">
                        <img src={NPMlogo} alt="" />
                        <p>npm</p>
                    </div>
                    <div className="skill">
                        <img src={Vite} alt="" />
                        <p>Vite</p>
                    </div>
                </div>
                <h2 className="skill-title">Lenguage Programming</h2>
                <div className="skills">
                    <div className="skill">
                        <img
                            src={Ruby}
                            alt=""
                        />
                        <p>Ruby</p>
                    </div>
                    <div className="skill">
                        <img
                            src={C}
                            alt=""
                        />
                        <p>C++ C# C</p>
                    </div>
                    <div className="skill">
                        <img
                            src={Java}
                            alt=""
                        />
                        <p>Java</p>
                    </div>
                    <div className="skill">
                        <img
                            src={Python}
                            alt=""
                        />
                        <p>Python</p>
                    </div>
                </div>
                <h2 className="skill-title">Soft Skills</h2>
                <div className="skills">
                    <p className="soft-skill">Remote Pair-Programming</p>
                    <p className="soft-skill">Communication</p>
                    <p className="soft-skill">Mentoring</p>
                    <p className="soft-skill">Collaboration</p>
                    <p className="soft-skill">Leadership</p>
                    <p className="soft-skill">Problem Solving</p>
                    <p className="soft-skill">Time Management</p>
                    <p className="soft-skill">Decision Making</p>
                    <p className="soft-skill">Critical Thinking</p>
                </div>
            </div>

        </section>
    )
}
