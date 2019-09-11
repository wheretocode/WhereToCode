import React from 'react';
import { withAuthorization } from '../components/Session';
import {Gremlin} from 'grommet-icons';
import { Box, Heading, Markdown, Paragraph } from "grommet";
import RoutedAnchor from "../components/RoutedAnchor";
import Layout from '../components/Styling/Layout'

import Map from '../components/Map/Map.jsx'

const Home = () => (
    <Layout>
    <Box align="center" pad={{ top: "large", horizontal: "small" }} fill>
    <Box flex align="center" overflow="auto">
      <Heading textAlign="center" level="2">
      Lorem ipsum
      </Heading>
      <Paragraph textAlign="center" color="dark-5">
        <Markdown>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        </Markdown>
      </Paragraph>
      <Paragraph textAlign="center" color="dark-5">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco <RoutedAnchor path="/www" label="here" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </Paragraph>
    </Box>
  <Map />
    <Gremlin />
  </Box>
  </Layout>


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);