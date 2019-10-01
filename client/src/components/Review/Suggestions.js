import React, {useState} from 'react';
import { Box, Text, Image } from 'grommet'
import { 
    Anchor,
     } from 'grommet-icons'

const Suggestions = () => (

<Box align="center" justify="center" pad="xsmall">
          <Text weight="bold" size="large">
            You May Also Like...
          </Text>
          <Box align="center" justify="center" pad="xsmall">
            <Box align="center" justify="center" pad="small">
              <Image src="hhttps://lh3.googleusercontent.com/B9TU3m_EjQ1NnAL-aeQOQJmr_Ww5zC2oQbcXGTQKtY9l5oLPmHAmATSPszhL4swJPLIX-vEFwJ2_9Qskb9MupqaGXjLishYEEQXWrQ" />
              <Box align="center" justify="start" pad="xsmall" direction="row" gap="small" fill="horizontal">
                <Anchor label="Carabou Coffee" href="https://www.cariboucoffee.com/" />
              </Box>
              <Box align="center" justify="start" pad="xsmall" direction="row" gap="small" fill="horizontal">
                <Text>
                  4.5 Rating
                </Text>
              </Box>
              <Box align="center" justify="start" pad="xsmall" direction="row" gap="small" fill="horizontal">
                <Text>
                  Coffee Shop
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="center" pad="small">
              <Image src="https://lh3.googleusercontent.com/B9TU3m_EjQ1NnAL-aeQOQJmr_Ww5zC2oQbcXGTQKtY9l5oLPmHAmATSPszhL4swJPLIX-vEFwJ2_9Qskb9MupqaGXjLishYEEQXWrQ" />
              <Box align="center" justify="start" pad="small" direction="row" gap="small" fill="horizontal">
                <Anchor label="Carabou Coffee" href="https://www.cariboucoffee.com/" />
              </Box>
              <Box align="center" justify="start" pad="small" direction="row" gap="small" fill="horizontal">
                <Text>
                  4.5 Rating
                </Text>
              </Box>
              <Box align="center" justify="start" pad="small" direction="row" gap="small" fill="horizontal">
                <Text>
                  Coffee Shop
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
);

export default Suggestions;