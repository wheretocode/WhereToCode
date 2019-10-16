import React, { Component } from "react";
import DetailsPanel from "./DetailsPanel";
import AllReviewsPanel from "./AllReviewsPanel";
import ReviewPanel from "./ReviewPanel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default props => {
  return (
    <Tabs>
      <TabList>
        <Tab>Details</Tab>
        <Tab>All Reviews</Tab>
        <Tab>Leave A Review</Tab>
      </TabList>

      <TabPanel>
        <DetailsPanel details={props.details} hours={props.hours} />
      </TabPanel>
      <TabPanel>
        <AllReviewsPanel />
      </TabPanel>
      <TabPanel>
        <ReviewPanel />
      </TabPanel>
    </Tabs>
  );
};
