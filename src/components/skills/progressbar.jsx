import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  console.log(props, 'propsss');
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ]),
};

export default function CircularWithValueLabel({ value, color }) {
  const [progress, setProgress] = React.useState(0);
  const target = value;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const next = prevProgress + 1;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 20); // Smooth and fast

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgressWithLabel
      value={progress}
      //   sx={{ width: 130, height: 130 }}
      size="130px"
      color={color || 'success'}
    />
  );
}
