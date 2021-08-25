import './hobbies.scss'

export default function Hobbies() {
  return (
    <div className='hobbies' id='hobbies'>
      <h1>Check out some of the things I enjoy doing</h1>
      <div className='hobbies-one'>
        <div className='right'>
          <div className="wrapper">
            <div className="wrapper-one">
              <h2>Writing ✍🏽</h2>
              <h3>I currently blog on hashnode where I write on technical topics and mental wellbeing in relation to developers. Do stop by and say hello when you do!</h3>
              <div className='button-wrapper'>
                <a href="https://hashnode.com/@TheCodeChamp" rel="noreferrer" target="_blank">READ MY WRITING</a>
              </div>
            </div>
            <div className="line"></div>
            <div className="wrapper-two">
              <h2>Speaking🎙</h2>
              <h3>Speaking is a means of inspiration for me, so  I speak on different social platform on issues related to the tech ecosystem and mental well-being.</h3>
              <div className='button-wrapper'>
                <a href="#contact">CONTACT ME</a>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
