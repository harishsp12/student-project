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
import Footer from '../components/Footer';
import Header from '../components/Header';




function Home() {

  

  

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
        <Header />

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

      <div className='ser-contain'>
        <div></div>
            <div>
            <span className='service-title'>Service We Provide</span>
            </div>
            <div>
            <h2 className='ser-title'><span className='sec'>Providing Good Qualities </span></h2> 
            <h2 className='ser-title'><span className='sec'>For Your Loving Kids</span> </h2>
            </div>
            <div className='service-container'>
            <div className='service-contain'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={transport} alt="play" class="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Transport</p>
                </div>
               
                </div>
            </div>

            <div className='service-contain1'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={learn} alt="learn" class="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Learn & Play</p>
                </div>
               
                </div>
            </div>

            <div className='service-contain2'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={music} alt="music" class="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Music</p>
                </div>
               
                </div>
            </div>

           <div className='service-contain3'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={teacher} alt="teacher" class="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Teacher</p>
                </div>
               
                </div>
            </div>
        </div>
        <div className='learn-container'>
        <a href='#' className='learn'><span className='learn-More'>Learn More</span></a>
        </div>
      </div>

      {/* ===================== our flyer ========================== */}

      {/* ===================== our gallery ======================== */}

      <div className='gal-container'>
        <div className='our-gal'>
          <p className='txt-gal'>Our Gallery</p>
        </div>
        <div className='gal-contain'>
        <div className='card'>
          <div className='img-gal'>
            <img src='https://www.kridashala.com/assets/img/gallery/photos/7.jpeg' alt='gal1' className='img-siz' />
          </div>
        </div>

        <div className='card'>
          <div className='img-gal'>
            <img src='https://www.kridashala.com/assets/img/gallery/photos/3.jpeg' alt='gal1' className='img-siz' />
          </div>
        </div>

         <div className='card'>
          <div className='img-gal'>
            <img src='https://www.kridashala.com/assets/img/gallery/photos/5.jpeg' alt='gal1' className='img-siz' />
          </div>
        </div>

         <div className='card'>
          <div className='img-gal'>
            <img src='https://www.kridashala.com/assets/img/gallery/photos/9.jpeg' alt='gal1' className='img-siz' />
          </div>
        </div>

      </div>


        <div className='view-container'>
        <a href='#' className='view'><span className='view-more'>View More</span></a>
        </div>
      </div>

      {/* ======================== parent details ========================= */}

      <div className="test-container">
      {/* LEFT CONTENT */}
      <div className="test-left">
        <span className="test-sub">Parent Testimonial</span>
        <h2 className="test-title">
          Parents Review <br /> <span>Of Us</span>
        </h2>
        <p className="test-desc">
          Parents have given their reviews based on their child activities
          and satisfied service towards us.
        </p>
      </div>

      {/* RIGHT CARDS */}
      <div className="test-right">
        <div className="test-card">
          <div className="avatar">
            <span className="quote">“</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="parent"
            />
          </div>

          <p className="review">
            It’s really very good school. Teachers are very well trained to
            create a comfort zone to kids. There is a very good progress in
            my kid after joining this school.
          </p>

          <h4>Rahmathulla Sheik</h4>
          <span className="role">Parent</span>
        </div>

        <div className="test-card">
          <div className="avatar">
            <span className="quote">“</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="parent"
            />
          </div>

          <p className="review">
            It’s a very good school for the kids who want to have fun in
            learning. All the teachers and staffs are kind and focus on
            every kid individually.
          </p>

          <h4>Amrutha Vikky</h4>
          <span className="role">Parent</span>
        </div>
      </div>
    </div>

    <Footer/>

      </div>
    </>
  )
}

export default Home;
