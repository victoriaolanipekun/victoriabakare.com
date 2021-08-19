import './navbar.scss'


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left-side'>
          <div className='column-one'>
            <div className='left'>
              <span>Home</span>
            </div>
            <div className='left'>
              <span>Portfolio</span>
            </div>
          </div>
          <div className='mid'>
            <a href='#intro' className='logo'>Victoria Olanipekun </a>
          </div>
          <div className='column-three'>
            <div className='right'>
              <span>Blog</span>
            </div>
            <div className='right'>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className='right-side'>
          <div></div>
        </div>
      </div>
    </div>
  )
}
