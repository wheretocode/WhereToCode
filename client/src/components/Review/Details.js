import React, {useState} from 'react';
import Description from '../Review/Description'
import DescriptionBar from '../Review/DescriptionBar'
import Reviews from '../Review/Reviews'
import Rate from '../Review/Rate'
import Suggestions from '../Review/Suggestions'
import { Box, Text, Grid, Image, } from 'grommet'
import { 
     Location,
     Clock,
     Phone,
     InternetExplorer, } from 'grommet-icons'

const Details = () => {
    const [modal, setModal] = useState(false)
      const [isAuthed, setAuthed] = useState(false)
    return (

<Grid align="start" alignContent="start" columns={["xxlarge","small"]} rows="small" fill="horizontal" margin="medium" gap="small">
      <Grid columns={[""]} gap="small">
        <Description/>
        <DescriptionBar/>
        <Reviews/>
        <Rate/>
      </Grid>
      <Grid fill="horizontal" columns="medium" align="center" alignContent="center" justify="between">
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
        <Suggestions />
      </Grid>
    </Grid>
)}
export default Details;