import MenuIcon from '@mui/icons-material/Menu';
import './index.css';
import profile from '../../assets/prakash.webp';
import profile_2 from '../../assets/prakash_hover.webp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={profile} alt="Profile" className="profile-pic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={profile_2} alt="Profile" className="profile-pic" />
          </SwiperSlide>
        </Swiper>
        <div className="about-content">
          <h2 className="about-name-box">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <span>Prakash</span>
                <span>Sekar</span>
              </SwiperSlide>
              <SwiperSlide>
                <span>I'm a</span>
                <span>Developer</span>
              </SwiperSlide>
              {/* <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
          </h2>

          <div className="about-desc">
            <div>
              <p>
                A small river named Duden <a href="#">flows by their place</a>{' '}
                and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. Even the all-powerful Pointing has no control
                about the blind texts it is an almost unorthographic life.
              </p>
              <div className="social-media-icons">
                <GitHubIcon />
                <LinkedInIcon />
                <TwitterIcon />
              </div>
              {/* <p>
                <a href="#" className="btn btn-primary btn-outline">
                  Contact Me!
                </a>
              </p> */}
              <Button
                variant="outlined"
                className="btn btn-primary btn-outline"
              >
                Contact Me!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
