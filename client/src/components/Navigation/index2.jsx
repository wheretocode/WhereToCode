
import React, {useState} from 'react';

import * as ROUTES from '../../Routes/routes';

// import { Box, Button, RoutedButton, Heading, Grommet } from 'grommet';
import { Grommet, Box, Button, Text, TextInput, Menu, RoutedButton, Heading} from 'grommet'
import { Search, User } from 'grommet-icons'


const hivestack =     
{
  global: {
    colors: {
      brand: "#F0BE27",
      border: {
        dark: "#ebebeb",
        light: "#444444"
      },
      background: "#F4F4F2",
      placeholder: "rgba(68, 68, 68, 0.5)",
      control: {
        dark: "#F0BE27",
        light: "#0F41D8"
      },
      accent_1: "#ffdd00",
      accent_2: "#b39b00",
      accent_3: "#fff7bf",
      accent_4: "#ffee80",
      neutral_1: "#3c0099",
      neutral_2: "#2a006b",
      neutral_3: "#d8bfff",
      neutral_4: "#b280ff",
      neutral_5: "#ba0098"
    },
    elevation: {
      none: "none",
      xsmall: "0px 1px 2px rgba(68, 68, 68, 0.5)",
      small: "0px 2px 4px rgba(68, 68, 68, 0.5)",
      medium: "0px 3px 8px rgba(68, 68, 68, 0.5)",
      large: "0px 6px 12px rgba(68, 68, 68, 0.5)",
      xlarge: "0px 8px 16px rgba(68, 68, 68, 0.5)"
    },
    drop: {
      background: "rgb(233, 233, 229)",
      shadow: "0px 3px 8px rgba(68, 68, 68, 0.5)",
      border: {
        radius: "3px"
      }
    },
    input: {
      border: {
        radius: "16px"
      }
    },
    font: {
      family: "'Roboto', sans-serif",
    }
  },
  layer: {
    background: "#F4F4F2",
    overlay: {
      background: "rgba(68, 68, 68, 0.5)"
    },
    border: {
      radius: "16px"
    }
  },
  checkBox: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444"
      }
    },
    check: {
      radius: "16px"
    },
    toggle: {
      radius: "4px"
    }
  },
  anchor: {
    color: {
      dark: "#F0BE27",
      light: "#0F41D8"
    }
  },
  heading: {
    font: false
  },
  radioButton: {
    border: {
      color: {
        dark: "#ebebeb",
        light: "#444444"
      }
    }
  },
  button: {
    border: {
      radius: "16px"
    }
  }
}



const Navigation2 = () => {
  const [modal, setModal] = useState(false)
  const [isAuthed, setAuthed] = useState(false)
  return (
    
  <Grommet theme={hivestack}>
    <Box justify="between" direction="row" background={{"color":"brand"}}>
      <Box direction="row">
          <Box align="center" justify="center" pad={{"vertical":"small","horizontal":"medium"}} direction="row" gap="small" fill="vertical">
          <Heading level='3' margin='none' >
            <Button label='HiveStack' path='/' plain='true' weight="bold" size="large" color="white">
            </Button>
            </Heading>
            <TextInput size="small" plain={false} type="text"  />
            <Search color="white"/>
          </Box>
        <Button hoverIndicator={true}>
          <Box align="center" justify="center" pad={{"horizontal":"small","vertical":"medium"}}>
            <Text color="white">
              section
            </Text>
          </Box>
        </Button>        <Button hoverIndicator={true}>
          <Box align="center" justify="center" pad={{"horizontal":"small","vertical":"medium"}}>
            <Text color="white">
              section
            </Text>
          </Box>
        </Button>        <Button hoverIndicator={true}>
          <Box align="center" justify="center" pad={{"horizontal":"small","vertical":"medium"}}>
            <Text color="white">
              section
            </Text>
          </Box>
        </Button>        <Button hoverIndicator={true}>
          <Box align="center" justify="center" pad={{"horizontal":"small","vertical":"medium"}}>
            <Text color="white">
              section
            </Text>
          </Box>
        </Button>        <Button hoverIndicator={true}>
          <Box align="center" justify="center" pad={{"horizontal":"small","vertical":"medium"}}>
            <Text color="white">
              section
            </Text>
          </Box>
        </Button>
      </Box>
      <Box align="center" justify="center" pad={{"horizontal":"large"}}>
        <Menu icon={<User />} open={false} items={[{"label":"Profile"},{"label":"Sign Out"}]} />
      </Box>
    </Box>
    {/* <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer> */}
  </Grommet>
  )
}



const NavigationAuth = () => (
    <Box direction='row' justify='right' gap='small'>
    <ul>
        <RoutedButton label="Home" path={ROUTES.HOME} />
        <RoutedButton label='Sign Out' path={ROUTES.SIGN_OUT_BUTTON} />
    </ul>
    </Box>
  );
  
  const NavigationNonAuth = () => (
    <Box direction='row' justify='right' gap='small'>
    <ul>
        <RoutedButton label="Sign In" path={ROUTES.SIGN_IN} />
        <RoutedButton label="Sign Up" path={ROUTES.SIGN_UP} />
    </ul>
    </Box>
  
  );
  
  export default Navigation2;
