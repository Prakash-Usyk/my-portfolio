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
import React, { useEffect } from 'react';
import CustomModal from '../Model';
import { Box, TextField } from '@mui/material';

const About = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <a
                  href="https://github.com/Prakash-Usyk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/prakash-s-9aa531211/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/prakash-s-9aa531211/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </div>
              <Button
                variant="outlined"
                className="btn btn-primary btn-outline"
                onClick={() => {
                  handleOpen();
                }}
              >
                Contact Me!
              </Button>
            </div>
          </div>
        </div>
      </div>
      {console.log(open, 'opennnn')}
      <CustomModal
        open={open}
        handleClose={() => handleClose()}
        title="Conatct Us"
        description="Please Write your message and contact information below. We will respond as soon as Possible"
      >
        {/* <div>
          <TextField
            label="Size"
            id="fullWidth"
            defaultValue="Small"
            size="small"
          />
        </div> */}
        <Box sx={{ Width: '100%' }}>
          <div className="inputfield-margin">
            <TextField fullWidth label="Email" id="fullWidth" />
          </div>
          <div className="inputfield-margin">
            <TextField fullWidth label="Phone Number" id="fullWidth" />
          </div>
          <div className="inputfield-margin">
            <TextField
              fullWidth
              label="Your Message"
              id="message"
              multiline
              rows={4} // You can adjust the number of visible rows
            />
          </div>
          <div className="custom-sbt-cnl-btns">
            <Button
              variant="outlined"
              className="btn btn-primary btn-outline"
              onClick={() => {
                handleClose();
              }}
            >
              Close
            </Button>
            <Button
              variant="outlined"
              className="btn btn-primary btn-outline"
              onClick={() => {
                handleClose();
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </CustomModal>
    </div>
  );
};

export default About;
