import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
const Support = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant={'h6'}
              fontWeight={700}
              align={'center'}
              gutterBottom
            >
              Need a support?
            </Typography>
            <Typography align={'center'}>
              We Are Always Available to Answer any Query
            </Typography>
            <Box marginTop={2} display={'flex'} justifyContent={'center'}>
              <Button
                size={'large'}
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                <Link underline="none" href="/contact" component="a">
                  {' '}
                  Contact us
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderLeft: {
              xs: 'none',
              md: `1px solid ${theme.palette.divider}`,
            },
          }}
        >
          <Box>
            <Typography
              variant={'h6'}
              fontWeight={700}
              align={'center'}
              gutterBottom
            >
              Customize plan
            </Typography>
            <Typography align={'center'}>
              Looking for something else? Request a Consultation to customize a
              plan.
            </Typography>
            <Box marginTop={2} display={'flex'} justifyContent={'center'}>
              <Button
                size={'large'}
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                <Link underline="none" href="/hire-us" component="a">
                  {' '}
                  Get In Touch{' '}
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Support;
