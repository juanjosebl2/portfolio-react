import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import {projects as projectsDB} from '../data/projectsData' 

const Projects = () => {
  const projects = projectsDB;

  return (
    <div className="projects" id="projects">
        <h1 className="title projects-title">Featured projects</h1>
        <p className="projects-para">
        I present to you a diverse collection of development projects spanning the entire technological spectrum. Through these examples, you will be able to explore the source code and, in some cases, also experiment with the working versions of the pages.
        I invite you to explore and discover the world behind each line of code!
        </p>
        <div className="projects-container">
          {
            projects.map((project) => (
              <ProjectCard
                key={project.image_url}
                image={project.image_url}
                title={project.project_name}
                description={project.description}
                stacks={project.tech_stack}
                source_link={project.source_link}
                live_link={project.live_link}

              />
            ))
          }
        </div>
    </div>
  );
};

export default Projects;
