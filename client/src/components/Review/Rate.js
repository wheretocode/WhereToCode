import React, {useState} from 'react';
import * as ROUTES from '../../Routes/routes';

import { Box, RoutedButton, Button, Text, TextInput, TextArea, Layer, } from 'grommet'
import { 
     Anchor,
} from 'grommet-icons'

const Rate = () => {
    const [modal, setModal] = useState(false)
      const [isAuthed, setAuthed] = useState(false)
    return (

<Box align="center" justify="center" pad="small" border={{"color":"light-4"}}>
          <Box align="start" justify="center" pad="small" alignSelf="start" fill="horizontal">
            <Text size="xxlarge" weight="bold" textAlign="start">
              Rate and Write a Review
            </Text>
          </Box>
          <Box align="center" justify="center" direction="column" fill="horizontal">
            <Box align="center" justify="start" pad="small" fill="horizontal" direction="row-responsive">
              <Box align="start" justify="start" pad="small" direction="row" gap="medium">
                <Anchor label="anchor" />
                <Text>
                  Select Your Rating
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="start" pad="small" fill="horizontal" direction="row-responsive" gap="medium">
              <Box align="start" justify="start" pad="small" border={{"color":"light-4"}} basis="1/2" fill="horizontal">
                <TextInput placeholder="Email Address" plain={true} />
              </Box>
              <Box align="start" justify="start" pad="small" border={{"color":"light-4"}} basis="1/2">
                <TextInput placeholder="Your Name" plain={true} />
              </Box>
            </Box>
            <Box align="start" justify="start" pad="large" border={{"color":"light-4"}} direction="row-responsive" fill="horizontal" alignSelf="center">
              <TextArea placeholder="Help others choose the perfect remote working location" plain={true} resize="vertical" />
            </Box>
          </Box>
          <Button label="Submit Review" id="write_review" type="submit" color="accent-4" primary={true} plain={false} gap="small" margin="medium" hoverIndicator={true} onClick={() => setModal(modal ? false : true)}/>
          {modal === true && (
              <Layer modal={false} animate={true} responsive={true} position="center" plain={true}>
          <RoutedButton label="Sign In" primary={true} color="accent-4" hoverIndicator={true} disabled={false} reverse={false} plain={false} path={ROUTES.SIGN_IN} onClick={() => setModal(modal ? false : true)} />
        </Layer>
    )}
        </Box>

)}
export default Rate;        