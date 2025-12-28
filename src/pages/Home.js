import React, { useEffect, useRef, useState } from 'react'
import "./Home.css";
import child from './img/child.png'
import play from './img/play-ground.jpeg'
import nursery from './img/nursury.jpg'
import junior from './img/junior.jpg'
import senior from './img/senior.jpg'
import transport from './img/transport.png'
import learn from './img/learn.png'
import music from './img/music.png'
import teacher from './img/teacher.png'




function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <>
      <div className='body'>

        {/* ===================== NAV 1 ===================== */}
        <nav className='nav-container'>
          <div className='time-box'>
            <i className="fa-regular fa-clock"></i>
            <p className='time'>9:30 am - 5:30 pm Monday - Friday</p>
          </div>

          <div className='contact'>
            <div className='time-box'>
              <i className="fa-solid fa-phone"></i>
              <p className='con1'>+91 95669 67669 |</p>
            </div>

            <div className='time-box'>
              <i className="fa-solid fa-phone"></i>
              <p className='con1'>+91 93444 76647 |</p>
            </div>

            <div className='time-box'>
              <i className="fa-solid fa-envelope"></i>
              <p className='con1'>vinoth@gmail.com</p>
            </div>
          </div>

          <div className="social-icon">
            <a href="#" className="social-color"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-color"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </nav>

        {/* ===================== NAV 2 ===================== */}
        <nav className='contain-box'>
          <div className='title'>
            <span className='title-name'>Vinoth</span>
          </div>

          {/* ☰ Menu Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </div>

          {/* MENU */}
          <div className={`title-list ${menuOpen ? "active" : ""}`}>
            <ul className="nav-menu">

              <li><a href="#" className="li-color">Home</a></li>
              <li><a href="#" className="li-color">About Us</a></li>

              <li className="dropdown">
                <a href="#" className="li-color">Classes ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="li-color">Play Group</a></li>
                  <li><a href="#" className="li-color">Nursery</a></li>
                  <li><a href="#" className="li-color">Junior KG</a></li>
                  <li><a href="#" className="li-color">Senior KG</a></li>
                </ul>
              </li>

              <li><a href="#" className="li-color">Facilities</a></li>
              <li><a href="#" className="li-color">Admissions</a></li>

              <li className="dropdown">
                <a href="#" className="li-color">Gallery ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="li-color">Photos</a></li>
                  <li><a href="#" className="li-color">Videos</a></li>
                </ul>
              </li>

              <li><a href="#" className="li-color">Curriculum</a></li>

              {/* ✅ LOGIN MENU */}
              <li className="dropdown">
                <a href="#" className="li-color">Login ▾</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="li-color">Admin</a></li>
                  <li><a href="#" className="li-color">Staff</a></li>
                  <li><a href="#" className="li-color">Student</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>

        {/* ===================== BANNER ===================== */}
        <div className="home">
          <img
            src="https://www.kridashala.com/assets/img/bg/hero-1-6.jpg"
            alt="banner"
            className="home-image"
          />
        </div>

        {/* ===================== about start ========================== */}
         <div className='container'>
             <div className='contain'> 
                <div className='left-contain'> 
                    <span className='about-title'>About Vinoth</span> 
                       

        <h1 class="about-titles">
            <span className='special'>Special Care For Your
            Children</span>
        </h1>

        <p class="about-text">
            Vinoth International is an educational establishment situated in
            Perumbakkam, Chennai. It serves as a play school, day care, and activity
            center, offering a range of services for children. The facility boasts
            well-appointed classrooms, a dedicated wall climbing area, a dance
            floor, and an expansive activity area.
        </p>

        <p class="about-text">
            At Vinoth, we believe that every child deserves to embark on their
            educational journey by acquiring foundational knowledge through play.
            Our goal is to nurture and guide each child towards becoming shining
            STARS.
        </p>
        <a href="#" class="learn-contain"><span class="learn" >Learn More</span> </a>
        </div> 
        <div className='right-contain'> 
         <div class="img-order">
        <img src={child} alt="child1" class="img-size" />
      </div>
        </div>
                </div> 
            </div> 


            {/* ========================= classes =========================== */}

        <div className='class-contain'>
            <div>
            <span className='sub-title'>On Going Classes</span>
            </div>
            <div>
            <h2 className='sec-title'>Take The Classes & Start </h2> <h2 className='sec-title'><span className='sec'>Learning From Today</span> </h2>
            </div>
            <div className='img-container'>
            <div className='img-contain'>
                <div className='card sub-card '>
                <div className='img-container-size'>
                <img src={play} alt="play" class="img-size1" />
                </div>
                <div>
                    <p className='head'>Play-Ground</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p>Age:</p>
                        </div>
                        <div>
                        <span className='list'>1.5 - 2.5 Years</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time:</p>
                        </div>
                        <div>
                        <span className='list'>9:30 - 11:30 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Capasity:</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15 Kids</span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
            </div>

            <div className='img-contain'>
                <div className='card sub-card'>
                <div className='img-container-size'>
                <img src={nursery} alt="nursery" class="img-size1" />
                </div>
                <div>
                    <p className='head'>Nursery</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p>Age:</p>
                        </div>
                        <div>
                        <span className='list'>2.5 - 3.5 Years</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time:</p>
                        </div>
                        <div>
                        <span className='list'>9:00 - 11:30 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Capasity:</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15 Kids</span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
            </div>

            <div className='img-contain'>
                <div className='card sub-card'>
                <div className='img-container-size'>
                <img src={junior} alt="junior" class="img-size1" />
                </div>
                <div>
                    <p className='head'>Junior</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p>Age:</p>
                        </div>
                        <div>
                        <span className='list'>3.5 - 4.5 Years</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time:</p>
                        </div>
                        <div>
                        <span className='list'>9:00 - 1:00 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Capasity:</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15 Kids</span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
                
            </div>

            <div className='img-contain'>
                <div className='card sub-card'>
                <div className='img-container-size'>
                <img src={senior} alt="senior" class="img-size1" />
                </div>
                <div>
                    <p className='head'>Senoir</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p>Age:</p>
                        </div>
                        <div>
                        <span className='list'>4.5 - 5.5 Years</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time:</p>
                        </div>
                        <div>
                        <span className='list'>9:00 - 1:00 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Capasity:</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15 Kids</span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
            </div>
        </div>

      </div>

      <div className='service-contain'>
            <div>
            <span className='service-title'>Service We Provide</span>
            </div>
            <div>
            <h2 className='ser-title'>Providing Good Qualities </h2> <h2 className='ser-title'><span className='sec'>For Your Loving Kids</span> </h2>
            </div>
            <div className='service-container'>
            <div className='service-contain'>
                <div className='card '>
                <div className='service-container-size'>
                <img src={transport} alt="play" class="img-size2" />
                </div>
                <div>
                    <p className='head'>Play-Ground</p>
                </div>
               
                </div>
            </div>
{/* 
            <div className='img-contain'>
                <div className='card'>
                <div className='img-container-size'>
                <img src={learn} alt="nursery" class="img-size1" />
                </div>
                <div>
                    <p className='head'>Nursery</p>
                </div>
               
                </div>
            </div>

            <div className='img-contain'>
                <div className='card'>
                <div className='img-container-size'>
                <img src={music} alt="junior" class="img-size1" />
                </div>
                <div>
                    <p className='head'>Junior</p>
                </div>
               
                </div>
                
            </div>

            <div className='img-contain'>
                <div className='card'>
                <div className='img-container-size'>
                <img src={teacher} alt="senior" class="img-size1" />
                </div>
                <div>
                    <p className='head'>Senoir</p>
                </div>
               
                </div>
            </div> */}
        </div>

      </div>

      </div>
    </>
  )
}

export default Home;
