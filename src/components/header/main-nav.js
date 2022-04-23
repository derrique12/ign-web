import React ,{useState}from 'react'
import logo from '../../assets/search.png'
import profile from '../../assets/profile.jpeg'


function MainNav() {
  const [isActive, setActive] = useState("false");
  const toggleClass = () => {
    setActive(!isActive);  };
  return (
    <div  className={isActive ? 'main-nav ': 'main-nav show'}>
      <nav>
        <ul>
          <li><a href="#">News</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Shows</a></li>
          <li><a href="#">Wikis</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </nav>
      <div className="search-profile">
        <img src={logo} id='search' alt="Search"/>
        <div className="profile">
          <div className="notify">
            12
          </div>
          <img src={profile} alt="profile"/>
        </div>
      </div>
      <div className="menu-close  " 
      onClick={toggleClass} >
       
      </div>
    </div>
  )
}

export default MainNav