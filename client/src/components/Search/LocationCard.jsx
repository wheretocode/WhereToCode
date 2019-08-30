import React from 'react';

import { Box, Text } from 'grommet';
import placeholder from '../../assets/placeholder.png'

import styled from 'styled-components';

const Placeholder = styled.img`
    width: 45%
    padding-right: 20px;
`

const LocationCard = () => (
    <Box>
    <Box 
        background={{color: "#DFE7ED"}}
        width = "30%"
        margin = "medium"
        border = {{color: "#ACB4BA"}}
        pad = "small"
        direction = "row"
    >
            <Placeholder src={placeholder} />
        
        <Box>
            <h3>Name: Joe's Coffee Shop</h3>
            <Text>24th ave, Chicago, IL</Text>
            <Text>Noise:</Text>
            <Text>Wifi</Text>
            <Text>More...</Text>
        </Box>
    </Box>
    <Box 
    background={{color: "#DFE7ED"}}
    width = "30%"
    margin = "medium"
    border = {{color: "#ACB4BA"}}
    pad = "small"
    direction = "row"
>
        <Placeholder src={placeholder} />
    
    <Box>
        <h3>Name: Joe's Coffee Shop</h3>
        <Text>24th ave, Chicago, IL</Text>
        <Text>Noise:</Text>
        <Text>Wifi</Text>
        <Text>More...</Text>
    </Box>
</Box>
<Box 
        background={{color: "#DFE7ED"}}
        width = "30%"
        margin = "medium"
        border = {{color: "#ACB4BA"}}
        pad = "small"
        direction = "row"
    >
            <Placeholder src={placeholder} />
        
        <Box>
            <h3>Name: Joe's Coffee Shop</h3>
            <Text>24th ave, Chicago, IL</Text>
            <Text>Noise:</Text>
            <Text>Wifi</Text>
            <Text>More...</Text>
        </Box>
    </Box>
    <Box 
    background={{color: "#DFE7ED"}}
    width = "30%"
    margin = "medium"
    border = {{color: "#ACB4BA"}}
    pad = "small"
    direction = "row"
>
        <Placeholder src={placeholder} />
    
    <Box>
        <h3>Name: Joe's Coffee Shop</h3>
        <Text>24th ave, Chicago, IL</Text>
        <Text>Noise:</Text>
        <Text>Wifi</Text>
        <Text>More...</Text>
    </Box>
</Box>
<Box 
        background={{color: "#DFE7ED"}}
        width = "30%"
        margin = "medium"
        border = {{color: "#ACB4BA"}}
        pad = "small"
        direction = "row"
    >
            <Placeholder src={placeholder} />
        
        <Box>
            <h3>Name: Joe's Coffee Shop</h3>
            <Text>24th ave, Chicago, IL</Text>
            <Text>Noise:</Text>
            <Text>Wifi</Text>
            <Text>More...</Text>
        </Box>
    </Box>
    <Box 
    background={{color: "#DFE7ED"}}
    width = "30%"
    margin = "medium"
    border = {{color: "#ACB4BA"}}
    pad = "small"
    direction = "row"
>
        <Placeholder src={placeholder} />
    
    <Box>
        <h3>Name: Joe's Coffee Shop</h3>
        <Text>24th ave, Chicago, IL</Text>
        <Text>Noise:</Text>
        <Text>Wifi</Text>
        <Text>More...</Text>
    </Box>
</Box>
</Box>
)

export default LocationCard;