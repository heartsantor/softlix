import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2} sx={{ textAlign: 'center' }}>
        <Typography
          fontWeight={600}
          variant={'h2'}
          gutterBottom
          align={'center'}
        >
          Web Development
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          gutterBottom
        ></Typography>
        <Typography variant="h6" color={'text.secondary'} align={'center'}>
          We offer web development services that can help you create a website
          that is both visually appealing and user-friendly. Our team of web
          developers are experts in various programming languages and can create
          a custom website that meets your specific needs.
        </Typography>
        {/*<Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginTop: '30px' }}
              endIcon={
                <svg
                  width={16}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              }
            >
           Get a free quote
            </Button>*/}
      </Box>
    </Box>
  );
};

export default Headline;
