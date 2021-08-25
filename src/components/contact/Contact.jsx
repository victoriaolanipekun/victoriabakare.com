import './contact.scss'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Contact</h1>
      <div className="imgContainer">
        <img src={"../../Assets/twitter.svg"} alt=""/>
        <img src={"../../Assets/tiktok.svg"} alt=""/>
        <img src={"../../Assets/linkedin.svg"} alt=""/>
        <img src={"../../Assets/github.svg"} alt=""/>
        <img src={"../../Assets/hasnode.svg"} alt=""/>
      </div>
      <h3>Hey there, thinking of collaborating on a project with me or ask for my resume ? I’d love to hear from you!</h3>
      
      <div className='first-name'>
        <input className='first-name' placeholder="First-name"></input>
      </div>
      <div className='email'>
        <input placeholder="Your email address"></input>
      </div>
      <div className='email'>
        <input placeholder="Write your message"></input>
      </div>
      <button>SEND EMAIL</button>
    </div>
  )
}
