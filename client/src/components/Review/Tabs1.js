import React, { Component } from "react";
import DetailsPanel from "./DetailsPanel";
import AllReviewsPanel from "./AllReviewsPanel";
import { ReviewPanel } from "./ReviewPanel";
import Landing from "../../views/Landing";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AuthUserContext } from "../Session/index";

class Tabs1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <>

        <Tabs>
          <TabList>
            <Tab>Details</Tab>
            <Tab>All Reviews</Tab>
            <Tab>Leave A Review</Tab>
          </TabList>

          <TabPanel>
            <DetailsPanel details={this.props.details} hours={this.props.hours} />
          </TabPanel>

          <TabPanel>
            <AllReviewsPanel />
          </TabPanel>

          <TabPanel>
            <AuthUserContext.Consumer>
              {authUser => (authUser ? <ReviewPanel /> : <Landing />)}
            </AuthUserContext.Consumer>
          </TabPanel>
        </Tabs>


      </>
    );
  }
}

export default Tabs1;
