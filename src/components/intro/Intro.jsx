import './intro.scss'

export default function intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="wrapper">
          <h1>Hello 👋🏽</h1>
          <h3>I’m Victoria Olanipekun,  known socially as  <strong>The Code Champ</strong>, I’m a Software Engineer with over 4 years of previous experience in design and marketing. I also enjoy writing and speaking on technical development  & mental health wellness.</h3>
          <a href="https://www.linkedin.com/in/victoria-olanipekun/" rel="noreferrer" target="_blank">VIEW MY LINKEDIN</a>
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
