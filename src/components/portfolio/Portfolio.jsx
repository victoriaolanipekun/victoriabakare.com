import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Some projects in my Portfolio</h1>
      <div className='portfolio-one'>
        <div className='left'>
          <div className="imgContainer">
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Hanqout😃</h2>
            <h3>This was a solo project, a fullstack application using my own RESTful API with Python(Django) as the backend language and JavaScript(React.js) for the frontend. A project to help developer's mental health.</h3>
            <div className='button-wrapper'>
              <a href="https://github.com/victoriaolanipekun/HANQOUT#readme" rel="noreferrer" target="_blank">VIEW IT HERE</a>
              <a href="https://github.com/victoriaolanipekun/HANQOUT#readme" rel="noreferrer" target="_blank">VIEW GITHUB REPO</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className='portfolio-two'>
        <div className='left'>
          <div className="imgContainer">
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Heiss☕️</h2>
            <h3>This was a team project, a fullstack MERN application using my own RESTful API with Node.JS(Express) as the backend language and JavaScript(React.js) for the frontend. Version control using Git.</h3>
            <div className='button-wrapper'>
              <a href="https://heissapp.herokuapp.com/" rel="noreferrer" target="_blank">VIEW IT HERE</a>
              <a href="https://github.com/victoriaolanipekun/SEI56-Project-3#readme" rel="noreferrer" target="_blank">VIEW GITHUB REPO</a>
            </div>
          </div>
        </div>
      </div>

      <div className='portfolio-three'>
        <div className='left'>
          <div className="imgContainer">
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Drinkard🍸</h2>
            <h3>This was a pair-coded project that was built using HTML5, CSS3, React.js and also integrated a 3rd party public API. It is an application which hosts a variety of 25 cocktails.</h3>
            <div className='button-wrapper'>
              <a href="https://drinkard-app.netlify.app" rel="noreferrer" target="_blank">VIEW IT HERE</a>
              <a href="https://github.com/victoriaolanipekun/DRINKARD#readme" rel="noreferrer" target="_blank">VIEW GITHUB REPO</a>
            </div>
          </div>
        </div>
      </div>

      <div className='portfolio-four'>
        <div className='left'>
          <div className="imgContainer">
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Snake Game🐍</h2>
            <h3>This is a solo project, it is a grid-based game using HTML, CSS, and JavaScript. Snake is a game where the player maneuvers a line (that is the snake) which grows in length, with the line itself being a primary obstacle.</h3>
            <div className='button-wrapper'>
              <a href="https://victoriaolanipekun.github.io/PROJECT-1/" rel="noreferrer" target="_blank">VIEW IT HERE</a>
              <a href="https://github.com/victoriaolanipekun/PROJECT-1#readme" rel="noreferrer" target="_blank">VIEW GITHUB REPO</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
