import React, {useState} from 'react';
import { Box, RoutedButton, Button, Text, TextInput, Grid, Image, TextArea, Layer, } from 'grommet'
import { 
     Clock,
     Phone,
     InternetExplorer,
 } from 'grommet-icons'

const Location = () => (

<Box align="center" justify="center" pad="small">
          <Box align="center" justify="center" pad="small" border={{"color":"light-4"}}>
            <Image src="https://lh3.googleusercontent.com/B9TU3m_EjQ1NnAL-aeQOQJmr_Ww5zC2oQbcXGTQKtY9l5oLPmHAmATSPszhL4swJPLIX-vEFwJ2_9Qskb9MupqaGXjLishYEEQXWrQ" />
            <Box align="center" justify="center" pad="small" direction="row" gap="small" border={{"side":"bottom","color":"light-4"}} fill="horizontal">
              <Location  />
              <Text>
                google address
              </Text>
            </Box>
            <Box align="center" justify="center" pad="small" direction="row" gap="small" border={{"side":"bottom","color":"light-4"}} fill="horizontal">
              <Phone  />
              <Text>
                123-123-123
              </Text>
            </Box>
            <Box align="center" justify="center" pad="small" direction="row" gap="small" border={{"side":"bottom","color":"light-4"}} fill="horizontal">
              <Clock  />
              <Text>
                Open until 8:00 PM
              </Text>
            </Box>
            <Box align="center" justify="center" pad="small" direction="row" gap="small" border={{"side":"bottom","color":"light-4"}} background={{"color":"light-2"}} fill="horizontal">
              <Text>
                Mon-Sat 7:00 AM - 8:00 PM
              </Text>
            </Box>
            <Box align="center" justify="center" pad="small" direction="row" gap="small" border={{"side":"bottom","color":"light-4"}} background={{"color":"light-2"}} fill="horizontal">
              <Text>
                Sun 8:00 AM - 5:30 PM
              </Text>
            </Box>
            <Box align="center" justify="center" pad="small" direction="row" gap="small" border={{"side":"bottom","color":"light-4"}} fill="horizontal">
              <InternetExplorer  />
              <Text>
                location.com
              </Text>
            </Box>
          </Box>
        </Box>
        
);

export default Location;