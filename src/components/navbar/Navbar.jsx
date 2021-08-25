import './navbar.scss'
// import logo from '../../Assets/logo.svg'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left-side'>
          <div className='column-one'>
            <div className='left'>
              {/* <span>Home</span> */}
            </div>
            <div className='left'>
              {/* <span>Portfolio</span> */}
            </div>
          </div>
          <div className='mid'>
            <a href='#intro' className='logo'><img src={"../../Assets/logo.svg"} alt="logo"/></a>
          </div>
          <div className='column-three'>
            <div className='right'>
              {/* <span>Blog</span> */}
            </div>
            <div className='right'>
              {/* <span>Contact</span> */}
            </div>
          </div>
        </div>
        <div className='right-side'>
          <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line-1'></span>
            <span className='line-2'></span>
            <span className='line-3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
