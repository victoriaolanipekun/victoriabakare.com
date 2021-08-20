import './intro.scss'

export default function intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="wrapper">
          <h1>Hello 👋🏽</h1>
          <h3>I’m Victoria Olanipekun,  known socially as The Code Champ, I’m a <strong>Software Engineer</strong> with over 4 years experience in design and marketing, I currently build products, write and speak on technical development & mental health wellness for developers.  and<span></span></h3>
        </div>
      </div>
      <div className='right'>
        <div className="imgContainer">
          <img src={"../../Assets/interest.svg"} alt=""/>
        </div>
      </div>
    </div>
  )
}
