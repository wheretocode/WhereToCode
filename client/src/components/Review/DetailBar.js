import React, {useState} from 'react';
import { Box, Text, Grid, } from 'grommet'
import { 
    Map,
    Anchor,
    Star,
    Aed,
    Share,
     } from 'grommet-icons'

const DetailBar = () => (

<Grid margin="medium" align="center" alignContent="center" columns={{"size":"small","count":"fit"}} rows="xsmall" gap="medium" justify="between" fill="horizontal">
      <Box align="center" justify="center" pad="small" background={{"color":"light-2"}} height="xsmall">
        <Map size="large" />
      </Box>
      <Box align="start" justify="center" pad="large" height="xsmall" width="medium" wrap={false} alignSelf="start" fill="horizontal">
        <Box align="center" justify="start" alignSelf="start" fill="horizontal" direction="row-responsive" wrap={false} pad="small">
          <Text weight="bold" textAlign="start" size="xxlarge">
            Starbucks
          </Text>
        </Box>
        <Box align="start" justify="center" pad="small" alignSelf="start">
          <Anchor label="anchor" />
        </Box>
        <Box align="start" justify="center" pad="small" alignSelf="start" width="large">
          <Text truncate={false} size="small">
            Coffee Shop
          </Text>
        </Box>
      </Box>
      <Box justify="center" background={{"color":"accent-4"}} height="xxsmall" alignSelf="center" basis="auto">
        <Box align="center" justify="center" pad="xsmall" direction="row-responsive" width="medium" height="xxsmall" alignSelf="end" gap="small">
          <Star color="white" />
        </Box>
      </Box>
      <Box justify="center" background={{"color":"light-2"}} height="xxsmall" alignSelf="center">
        <Box align="center" justify="center" pad="xsmall" direction="row-responsive" width="medium" height="xxsmall" alignSelf="end">
          <Aed  />
          <Text textAlign="end" margin="medium">
            Save
          </Text>
        </Box>
      </Box>
      <Box justify="center" pad="xsmall" background={{"color":"light-2"}} height="xxsmall" alignSelf="center">
        <Box align="center" justify="center" pad="xsmall" direction="row-responsive" alignSelf="end" width="medium" height="xxsmall">
          <Share  />
          <Text textAlign="end" margin="medium">
            Share
          </Text>
        </Box>
      </Box>
    </Grid>

);

export default DetailBar;