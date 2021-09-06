import './skills.scss'

export default function Skills() {
  return (
    <div className='col-md-12 skills' id='skills'>
      <h3>With experience in design, software development. Some of my skillset include:</h3>

      <div className='tools'>
        <img className="img img-responsive" src={"../../Assets/tech.svg"} alt=""/>
      </div>
      <div className='services'>
        <h1>My Skills & Services <br/> Span through</h1>
        <div className='service-list'></div>
        <div className='service-list-layer'>
          <img className="img img-responsive" src={"../../Assets/design.svg"} alt=""/>
          <h3>UI/UX <br/> Design</h3>
          <h4> Figma, Adobe Suite, Survey Monkey, Google Analytics </h4>
        </div>
        <div className='service-list-two'></div>
        <div className='service-list-two-layer'>
          <img className="img img-responsive" src={"../../Assets/backend.svg"} alt=""/>
          <h3>Backend<br/>Development</h3>
          <h4> Node.JS, Python, MongoDB, PostgreSQL, RESTfulAPIs. </h4>
        </div>
        <div className='service-list-three'></div>
        <div className='service-list-three-layer'>
          <img className="img img-responsive" src={"../../Assets/frontend.svg"} alt=""/>
          <h3>Frontend<br/>Development</h3>
          <h4> HTML5, CSS3, Sass, Bulma, Bootstrap, React.JS, JS. </h4>
        </div>
        <div className='service-list-four'></div>
        <div className='service-list-four-layer'>
          <img className="img img-responsive" src={"../../Assets/testing.svg"} alt=""/>
          <h3>Testing &<br/>Deployment</h3>
          <h4> Jest, Git, Github, Insomnia, Heroku, Netlify. </h4>
        </div>
      </div>
    </div>
  )
}
