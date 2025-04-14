import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import './index.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({
  open,
  handleClose,
  title,
  description,
  children,
}) {
  return (
    <Modal
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
      open={open}
      onClose={() => handleClose()}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {title && (
            <Typography
              id="custom-modal-title"
              variant="h6"
              component="h2"
              className="model-title"
            >
              <h2>{title}</h2>
            </Typography>
          )}
          {description && (
            <Typography id="custom-modal-description" sx={{ mt: 2 }}>
              <div className="model-desc">{description}</div>
            </Typography>
          )}
          <div className="model-content">{children}</div>
        </Box>
      </Fade>
    </Modal>
  );
}
