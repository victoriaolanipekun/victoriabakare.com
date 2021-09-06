import './navbar.scss'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className='wrapper' expand="lg">
        <div className='left-side'>
          <a href='#intro'><img src={"../../Assets/logo.svg"} alt="logo" className='logo'/></a>
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
