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
            <h3>This was a solo project, a fullstack application using my own RESTful API with Python(Django) as the backend language and JavaScript(React.js) for the frontend.</h3>
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
            <h3>I love writing clear and readable code while working on interesting products. I have experience building fullstack applications, having worked with various languages like Python, Django, Javascript, Node.js, React.js and more.</h3>
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
            <img src={"../../Assets/snake.svg"} alt=""/>
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Snake Game🐍</h2>
            <h3>I love writing clear and readable code while working on interesting products. I have experience building fullstack applications, having worked with various languages like Python, Django, Javascript, Node.js, React.js and more.</h3>
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
