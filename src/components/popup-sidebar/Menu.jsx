import React from 'react';
import styled from 'styled-components';
import BasicTextFields from '../form_components/InputField';
import './index.css';
import CloseIcon from '@mui/icons-material/Close';

// const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   background: black;
//   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transition: transform 0.3s ease-in-out;
//   @media (max-width: 576px) {
//     width: 100%;
//   }

//   a {
//     display: block;
//     color: white;
//     font-size: 14px;
//     text-transform: uppercase;
//     font-weight: 400;
//     padding: 10px 0px;
//     @media (max-width: 576px) {
//       font-size: 1.5rem;
//       text-align: center;
//     }

//     &:hover {
//       cursor: pointer;
//       color: #ca82f8;
//     }
//   }
// `;
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: black;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9999; /* <-- Add this */

  @media (max-width: 576px) {
    width: 100%;
  }
    a {
    display: block;
   color: white;
    font-size: 14px;
   text-transform: uppercase;
    font-weight: 400;
    padding: 10px 0px;
    @media (max-width: 576px) {
     font-size: 1.5rem;
    text-align: center;
  }
    &:hover {
     cursor: pointer;
     color: #ca82f8;
    }
  }

  ...
`;

const Menu = ({ open, setOpen }) => {
  console.log(setOpen, 'setOpen');
  return (
    <>
      <StyledMenu open={open}>
        <div
          className="popup-close"
          onClick={() => {
            console.log('Clicked');
            setOpen(false);
          }}
        >
          <div className="close-icon">
            <CloseIcon color="white" />
          </div>
        </div>
        <div className="search-bar">
          <BasicTextFields />
        </div>

        <a href="/">
          <span role="img" aria-label="about us"></span>
          Home
        </a>
        <a href="/services">
          <span role="img" aria-label="price"></span>
          Services
        </a>
        <a href="/about">
          <span role="img" aria-label="contact"></span>
          About
        </a>
        <a href="/">
          <span role="img" aria-label="contact"></span>
          Work
        </a>

        <a href="/">
          <span role="img" aria-label="contact"></span>
          Projects
        </a>
      </StyledMenu>
    </>
  );
};

export default Menu;
