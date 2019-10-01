import React, {useState} from 'react';
import { Box, Grid, } from 'grommet'

const Photos = () => (
<Grid columns={{"size":"medium","count":"fit"}} align="center" justify="between" fill="horizontal" gap="medium" margin="medium" alignContent="center">
      <Box align="center" justify="center" pad="small" background={{"dark":false,"image":"url('https://dailycoffeenews.com/wp-content/uploads/2014/07/Colombia_First_Store_Opening4.jpg')"}} height="medium" />
      <Box align="center" justify="center" pad="small" background={{"image":"url('https://cdn.torontolife.com/wp-content/uploads/2018/02/toronto-cafes-coffee-starbucks-reserve-bar-don-mills-interior-1.jpg')"}} height="medium" />
      <Box align="center" justify="center" pad="small" background={{"image":"url('https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2017/05/Vancouver-Reserve-Bar.jpg')"}} height="medium" />
    </Grid>

);

export default Photos;