import MenuIcon from '@mui/icons-material/Menu';
import './index.css';
import Menu from '../popup-sidebar/Menu';
import React, { useEffect } from 'react';

const Header = ({ renderbackground = true }) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  console.log(open, 'opennn');
  return (
    <>
      {renderbackground && (
        <div className="row text-center">
          <h2 className="header add-on-background-txt">About</h2>
        </div>
      )}

      <div className="header">
        <div className="container">
          <div>
            <a className="header-name-box">
              <span>Prak</span>
              <span>ash</span>
            </a>
          </div>
          <div className="menu-hamburger">
            <MenuIcon onClick={() => setOpen(!open)} />
          </div>
        </div>
      </div>

      {open && (
        <div ref={node}>
          {/* <Burger open={open} setOpen={setOpen} /> */}
          <Menu open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
};

export default Header;
