import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Here are some projects in my Portfolio</h1>
      <div className='portfolio-one'>
        <div className='left'>
          <div className="imgContainer">
            <img src={"../../Assets/hanqout.svg"} alt=""/>
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Hanqout😃</h2>
            <h3>I love writing clear and readable code while working on interesting products. I have experience building fullstack applications, having worked with various languages like Python, Django, Javascript, Node.js, React.js and more.</h3>
            <div className='button-wrapper'>
              <button className='button'>VIEW IT HERE</button>
              <button className='button'>VIEW GITHUB REPO</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='portfolio-two'>
        <div className='left'>
          <div className="imgContainer">
            <img src={"../../Assets/hanqout.svg"} alt=""/>
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Heiss☕️</h2>
            <h3>I love writing clear and readable code while working on interesting products. I have experience building fullstack applications, having worked with various languages like Python, Django, Javascript, Node.js, React.js and more.</h3>
            <div className='button-wrapper'>
              <button className='button'>VIEW IT HERE</button>
              <button className='button'>VIEW GITHUB REPO</button>
            </div>
          </div>
        </div>
      </div>

      <div className='portfolio-three'>
        <div className='left'>
          <div className="imgContainer">
            <img src={"../../Assets/hanqout.svg"} alt=""/>
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Drinkard🍸</h2>
            <h3>I love writing clear and readable code while working on interesting products. I have experience building fullstack applications, having worked with various languages like Python, Django, Javascript, Node.js, React.js and more.</h3>
            <div className='button-wrapper'>
              <button className='button'>VIEW IT HERE</button>
              <button className='button'>VIEW GITHUB REPO</button>
            </div>
          </div>
        </div>
      </div>

      <div className='portfolio-four'>
        <div className='left'>
          <div className="imgContainer">
            <img src={"../../Assets/hanqout.svg"} alt=""/>
          </div>
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2>Snake Game🐍</h2>
            <h3>I love writing clear and readable code while working on interesting products. I have experience building fullstack applications, having worked with various languages like Python, Django, Javascript, Node.js, React.js and more.</h3>
            <div className='button-wrapper'>
              <button className='button'>VIEW IT HERE</button>
              <button className='button'>VIEW GITHUB REPO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
