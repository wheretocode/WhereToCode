import React, {useState} from 'react';
import { Box, RoutedButton, Button, Text, TextInput, Grid, Image, TextArea, Layer, } from 'grommet'
import { 
    CreditCard, 
    Wifi,
    Baby,
    Car,
    Cafeteria,
    Tag } from 'grommet-icons'

const Description = () =>(

<Box align="center" justify="center" pad="small" border={{"color":"light-4"}} gap="large" direction="row-responsive">
          <Box align="center" justify="center" pad="small" direction="row" gap="small">
            <CreditCard  />
            <Text>
              Accepts Card
            </Text>
          </Box>
          <Box align="center" justify="center" pad="small" direction="row" gap="small">
            <Tag  />
            <Text>
              Offering a Deal
            </Text>
          </Box>
          <Box align="center" justify="center" pad="small" direction="row" gap="small">
            <Wifi  />
            <Text>
              Free Wifi
            </Text>
          </Box>
          <Box align="center" justify="center" pad="small" direction="row" gap="small">
            <Baby  />
            <Text>
              Family Friendly
            </Text>
          </Box>
          <Box align="center" justify="center" pad="small" direction="row" gap="small">
            <Car  />
            <Text>
              Parking Available
            </Text>
          </Box>
          <Box align="center" justify="center" pad="small" direction="row" gap="small">
            <Cafeteria  />
            <Text>
              Food for Purchase
            </Text>
          </Box>
        </Box>
);
export default Description;        
