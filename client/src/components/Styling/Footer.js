import React from 'react';
import { Box, Paragraph, Heading, Image } from 'grommet';

const Footer = () => (
  <Box>
    <Box align='center' pad='xsmall' background='dark-2'>
      <Heading margin='small' level='3'>www.thehivestack.com</Heading>
      <Paragraph style={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet,
      </Paragraph>
      <Box direction='row'>
        <a style={{ maxWidth: '50%' }} href='/'>
          <img style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/email.png' alt='Email' />
        </a>
        <a href='/'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/facebook.png' alt='Facebook' />
        </a>
        <a href='/'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/reddit.png' alt='reddit' />
        </a>
        <a href='/'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/twitter.png' alt='twuitter' />
        </a>
      </Box>
    </Box>
    <Box align='center' background='dark-1'>
      <Paragraph>Copyright (c) 2019 HiveStack.</Paragraph>
    </Box>
  </Box>
  
);

export default Footer;