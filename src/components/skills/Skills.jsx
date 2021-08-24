import './skills.scss'

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <h3>With experience in design, software development. Some of my skillset include:</h3>

      <div className='tools'>
        <img src={"../../Assets/tech.svg"} alt=""/>
        {/* <div className="imgContainer">
          <img src={"../../Assets/python.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/django.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/node.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/bootstrap.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/react.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/CSS3.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/HTML.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/sass.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/js.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/git.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/postgreSQL.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/bulma.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/github.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/mongoDB.svg"} alt=""/>
        </div>
        <div className="imgContainer">
          <img src={"../../Assets/figma.svg"} alt=""/>
        </div> */}
      </div>
      <div className='services'>
        <h1>My Skills & Services <br/> Span through</h1>
        <div className='service-list'></div>
        <div className='service-list-layer'>
          <img src={"../../Assets/design.svg"} alt=""/>
          <h3>UI/UX <br/> Design</h3>
          <h4> Figma, Adobe Suite, Survey Monkey, Google Analytics </h4>
        </div>
        <div className='service-list-two'></div>
        <div className='service-list-two-layer'>
          <img src={"../../Assets/backend.svg"} alt=""/>
          <h3>Backend<br/>Development</h3>
          <h4> Node.JS, Python, MongoDB, PostgreSQL, RESTfulAPIs. </h4>
        </div>
        <div className='service-list-three'></div>
        <div className='service-list-three-layer'>
          <img src={"../../Assets/frontend.svg"} alt=""/>
          <h3>Frontend<br/>Development</h3>
          <h4> HTML5, CSS3, Sass, Bulma, Bootstrap, React.JS, JS. </h4>
        </div>
        <div className='service-list-four'></div>
        <div className='service-list-four-layer'>
          <img src={"../../Assets/testing.svg"} alt=""/>
          <h3>Testing &<br/>Deployment</h3>
          <h4> Jest, Git, Github, Insomnia, Heroku, Netlify. </h4>
        </div>
      </div>
    </div>
  )
}
