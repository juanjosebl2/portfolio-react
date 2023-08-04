import './ProjectCard.css';

const ProjectCard = (props) => {
  
  return(
  <div className="project-card">

    <img src={props.image} alt="" />
    
    <div className="card-description">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="stacks">
        {
            props.stacks.map((stack, id) => (
              <button className="tech-stack" key={id}>
                {stack}
              </button>
            ))
          }
      </div>
      <div className='pos-button'>
        <button class="button-29" type="button">View Source</button>
        <button class="button-29" type="button">View Live</button>
      </div>
    </div>
  </div>
)};

export default ProjectCard;
