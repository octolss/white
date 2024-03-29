import './header.css';


function Header() {
  return (
    <header>
            <nav className='navbar'>
                <div className='container'>
                    <a href='#' className='nav-name'>White Web Works</a>
                    <div className='nav-wrap'>
                        <ul className='nav-menu'>
                            <li><a href = '#'>Home</a></li>
                            <li><a href = '#'>About</a></li>
                            <li><a href = '#'>Services</a></li>
                            <li><a href = '#'>Portfolio</a></li>
                            <li><a href = '#'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
  );
}

export default Header;