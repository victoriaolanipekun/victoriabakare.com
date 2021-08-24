import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <div className='left'>
        <div className="imgContainer">
          <img src={"../../Assets/hanqout.svg"} alt=""/>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hanqout</h2>
          <h3>I love writing clear and readable code while working on interesting products. I have experience building fullstack applications, having worked with various languages like Python, Django, Javascript, Node.js, React.js and more.</h3>
          <div className='button-wrapper'>
            <button className='button'>VIEW IT HERE</button>
            <button className='button'>VIEW GITHUB REPO</button>
          </div>
        </div>
      </div>
    </div>
  )
}
