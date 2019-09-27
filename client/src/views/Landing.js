import React from 'react';
import { Box, Image, Heading, Button, RoutedButton, Paragraph, Carousel, Stack, Text, Grid, } from 'grommet';
import { Notification } from 'grommet-icons';
import AppBar from '../components/Styling/AppBar';
import { CardTitle, CardContent } from 'grommet-controls';
import { Facebook, Twitter, Google } from 'grommet-icons';
import { Card } from 'grommet-controls';
import Layout from '../components/Styling/Layout';
import img1 from '../assets/img1.jpg'
import * as ROUTES from '../Routes/routes';


// const Landing = () => (
//     <AppBar>
//     <div>
//         <h1>Landing</h1>
//     </div>
//     <Button icon={<Notification />} onClick={() => {}} />
//     </AppBar>

// );


// export default Landing;
// import NetworkSpeed from '../components/NetworkSpeed/NetworkSpeed'

// const Landing = () => (
//     <div>
//         <h1>Landing</h1>
//         <NetworkSpeed />
//     </div>
// );


const Landing = () => (
    <Layout>
    <Grid
      areas={[
        { name: 'main', start: [0, 0], end: [1, 1] },
        { name: 'side', start: [2, 0], end: [2, 1] },
        { name: 'foot', start: [0, 1], end: [2, 1] },
      ]}
      columns={['small', 'flex', 'medium']}
      rows={['medium', 'small']}
      gap=''
    >
      <Box gridArea='main' background='dark-2' align='start' margin-leftt='1' justify='center'>
      <Heading margin='small' size='medium'>Lorem ipsum dolor sit amet,</Heading>
        <Paragraph margin='small' style={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum eros et blandit egestas. Donec finibus rutrum volutpat. Nunc congue feugiat felis nec pharetra. Morbi at tempor enim. Duis consectetur quam a rhoncus rhoncus. Fusce ac mattis metus. Pellentesque tristique lacus eget ante dapibus, eu aliquam ligula aliquet. Proin vehicula ut dui a lacinia. Nulla egestas commodo neque, vel cursus mi congue eu.
        </Paragraph>

        <Button
          label="Learn More..."
          onClick={() => {}}
          style={{width:'30%', height:'20'}}
          path='/history'
          color='brand'
        />

        </Box> 
        <Box gridArea='side' background='dark-2' align='center' justify='center'>
          <ul>
            <RoutedButton
              label="Sign In"
              path={ROUTES.SIGN_IN}
              color='brand' 
            />
            <RoutedButton
              label="Sign Up"
              path={ROUTES.SIGN_UP}
              color='brand'
            />
          </ul>
        </Box> 
        <Box gridArea='foot' background='dark-2'>
        <Box height="small" width="" overflow="hidden">
          <Carousel fill>
            <Image fit="cover" src="https://www.bunzlcatering.co.uk/wp-content/uploads/2015/06/coffee-shop-1.jpg" />
            <Image fit="cover" src="http://assets.fieldingdesigngroup.com/images/coffeeshop/IMG_3556-min.jpg" />
            <Image fit="cover" src="https://ujg1i3ze1133y9zav35eixy117m-wpengine.netdna-ssl.com/wp-content/uploads/2015/11/coffee-shop_best-location-for-coffee-shop-1.jpg" />
          </Carousel>
</Box>

        </Box>
    </Grid>      



      <Box align='center'>
        <Heading size='medium'>Lorem ipsum dolor sit amet,</Heading>
        <Box direction='row' wrap='true'>

          {/* //card 1 */}
          <Card basis='1/2'>
            <CardContent align='center'>
              <Heading size='small'>Lorem ipsum dolor sit amet, </Heading>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum eros et blandit egestas. Donec finibus rutrum volutpat. Nunc congue feugiat felis nec pharetra. Morbi at tempor enim. Duis consectetur quam a rhoncus rhoncus. Fusce ac mattis metus. Pellentesque tristique lacus eget ante dapibus, eu aliquam ligula aliquet. Proin vehicula ut dui a lacinia. Nulla egestas commodo neque, vel cursus mi congue eu.
              </Paragraph>
            </CardContent>
          </Card>

        {/* card2 */}
          <Card basis='1/2'>
            <CardContent align='center'>
              <Heading size='small'>Lorem ipsum dolor sit amet, </Heading>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum eros et blandit egestas. Donec finibus rutrum volutpat. Nunc congue feugiat felis nec pharetra. Morbi at tempor enim. Duis consectetur quam a rhoncus rhoncus. Fusce ac mattis metus. Pellentesque tristique lacus eget ante dapibus, eu aliquam ligula aliquet. Proin vehicula ut dui a lacinia. Nulla egestas commodo neque, vel cursus mi congue eu.
              </Paragraph>
            </CardContent>
          </Card>


          {/* //card3 */}
          <Card basis=''>
            <CardContent align='center' maxWidth='100%'>
              <Heading size='small'>Lorem ipsum dolor sit amet, </Heading>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum eros et blandit egestas. Donec finibus rutrum volutpat. Nunc congue feugiat felis nec pharetra. Morbi at tempor enim. Duis consectetur quam a rhoncus rhoncus. Fusce ac mattis metus. Pellentesque tristique lacus eget ante dapibus, eu aliquam ligula aliquet. Proin vehicula ut dui a lacinia. Nulla egestas commodo neque, vel cursus mi congue eu.
              </Paragraph>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
  
  export default Landing;