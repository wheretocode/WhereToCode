// IMPORTS
  import React, { Component } from "react";
  import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
  import styled from 'styled-components'

// COMPONENTS
  import DetailsPanel from "./DetailsPanel";
  import AllReviewsPanel from "./AllReviewsPanel";
  import ReviewPanel from "./ReviewPanel";

// STYLED COMPONENTS
const STYLED_Tabs = styled(Tabs)`
  display: flex;
  flex-direction: column;

  background-color: #555555;

  border-radius: 10px;
`;
const STYLED_TabList = styled(TabList)`
  display: flex;
  justify-content: space-around;

  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #555555;

  padding: 0;

  list-style: none;
`;

// COMPONENT & EXPORT
export default props => {
  return (
    <STYLED_Tabs>
      <STYLED_TabList>
        <Tab>Details</Tab>
        <Tab>All Reviews</Tab>
        <Tab>Leave A Review</Tab>
      </STYLED_TabList>

      <TabPanel>
        <DetailsPanel details={props.details} hours={props.hours} />
      </TabPanel>
      <TabPanel>
        <AllReviewsPanel />
      </TabPanel>
      <TabPanel>
        <ReviewPanel />
      </TabPanel>
    </STYLED_Tabs>
  );
};
