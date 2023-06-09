import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Do you develop websites?',
    subtitle:
      'Yes, we develop websites. We can also help you with your website development needs.',
  },
  {
    title: 'Do you develop apps?',
    subtitle:
      'Yes, we develop apps. We can also help you with your app development needs.',
  },
  {
    title: 'What platforms do you develop for?',
    subtitle:
      'We develop for all major platforms, including iOS, Android, Windows, and Mac.',
  },
  {
    title: 'Can I pay in installments?',
    subtitle:
      'Yes, we offer installment payment plans for our services. Contact us for more details.',
  },
  {
    title: 'How can I get status updates on my project?',
    subtitle:
      'We provide regular status updates to our clients so that they can track the progress of their project. Contact us for more details.',
  },
  {
    title: 'What is unique about SOFTLIX  Inc?',
    subtitle:
      'We offer a unique combination of website development, app development, and digital marketing services. Contact us',
  },
  {
    title: 'What is your turnaround time?',
    subtitle:
      'Our typical turnaround time is 2-3 weeks, depending on the project scope.',
  },
  {
    title: 'Do you have experience with eCommerce?',
    subtitle:
      'Yes, we have experience with eCommerce development. We can help you build an online store or integrate eCommerce into your existing website.',
  },
  {
    title: 'Do you offer support and maintenance?',
    subtitle:
      'Yes, we offer support and maintenance for all of our websites and apps. We can help you with updates, security, and bug fixes.',
  },
  {
    title: 'Do you provide refunds for website or app development services?',
    subtitle:
      'We do not offer refunds for our website or app development services. Once a project has been initiated, we require full payment for the agreed-upon scope of work. If you are unsatisfied with the progress of your project, we will be happy to make changes and revisions as needed. However, we cannot offer refunds for services that have already been rendered. Thank you for your understanding',
  },
  {
    title: 'What is your turnaround time?',
    subtitle:
      'Our typical turnaround time is 2-3 weeks, depending on the project scope.',
  },
  {
    title: 'Do you offer discounts?',
    subtitle:
      'We offer discounts for bulk orders and repeat clients. Contact us for more details.',
  },
  {
    title: 'What are your payment methods?',
    subtitle:
      'We accept all major credit cards and PayPal. Contact us for more details.',
  },
  {
    title: 'What is your privacy policy?',
    subtitle:
      'We take your privacy seriously and will never share your personal information with third parties. Contact us for more details.',
  },
  {
    title: 'What is your refund policy?',
    subtitle:
      'We offer a full refund if you are not satisfied with our services. Contact us for more details.',
  },
  {
    title: 'What is your customer service policy?',
    subtitle:
      'We offer 24/7 customer support via phone, email, and live chat. Contact us for more details.',
  },
  {
    title: 'What is your satisfaction guarantee?',
    subtitle:
      'We offer a 100% satisfaction guarantee on all of our services. Contact us for more details.',
  },
  {
    title: 'What is your cancellation policy?',
    subtitle:
      'We offer a full refund if you cancel your project within the first 24 hours. Contact us for more details.',
  },
  {
    title: 'What is your pricing policy?',
    subtitle:
      'We offer competitive rates for all of our services. Contact us for a free quote.',
  },
];

const Faq = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Frequently asked questions
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Typography variant={'h6'} fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;
