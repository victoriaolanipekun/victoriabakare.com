import './contact.scss'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Contact</h1>
      <div className="imgContainer">
      <a href="https://twitter.com/thecodechamp" rel="noreferrer" target="_blank"><img src={"../../Assets/twitter.svg"} alt=""/></a>
      <a href="https://tiktok.com/@thecodechamp" rel="noreferrer" target="_blank"><img src={"../../Assets/tiktok.svg"} alt=""/></a>
      <a href="https://www.linkedin.com/in/victoria-olanipekun/" rel="noreferrer" target="_blank"><img src={"../../Assets/linkedin.svg"} alt=""/></a>
      <a href="https://github.com/victoriaolanipekun" rel="noreferrer" target="_blank"><img src={"../../Assets/github.svg"} alt=""/></a>
      <a href="https://hashnode.com/@TheCodeChamp" rel="noreferrer" target="_blank"><img src={"../../Assets/hashnode.svg"} alt=""/></a>
      </div>
      <h3>Hey there, thinking of collaborating on a project with me or ask for my resume? I’d love to hear from you!</h3>
      
      <div className='first-name'>
        <input className='first-name' placeholder="      Your first-name"></input>
      </div>
      <div className='email'>
        <input placeholder="      Your email address"></input>
      </div>
      <div className='message'>
        <input placeholder="      Write your message"></input>
      </div>
      <a className='send' href="mailto:queentoria1@gmail.com">SEND EMAIL</a>
    </div>
  )
}
