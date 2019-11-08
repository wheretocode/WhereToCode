// IMPORTS
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

// COMPONENTS

import NonAuthDetailsPanel from './NonAuthDetailsPanel';
import { NonAuthAllReviewsPanel } from "./NonAuthAllReviews";
import { ReviewPanel } from "./ReviewPanel";
import { AuthUserContext } from "../Session/index";

// STYLED COMPONENTS
const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  background-color: #555555;
  border-radius: 10px;
`;
const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: flex;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #555555;
  p:hover {
    opacity: 0.35;
  }
  cursor: pointer;
  padding: 0;
  list-style: none;
`;
const StyledTab = styled(Tab)`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 20%;
  outline: none;
`;

const Header = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fbd702;
  width: 100%;
  margin-bottom: 15px;
`;
// COMPONENT & EXPORT

export default props => {
  return (
    <StyledTabs>
      <StyledTabList>
        <StyledTab>
          {" "}
          <p>Details</p>
        </StyledTab>
        <StyledTab>
          {" "}
          <p>All Reviews</p>
        </StyledTab>
        <StyledTab>
          <p>Leave a Review</p>
        </StyledTab>
      </StyledTabList>

      <TabPanel>
        <NonAuthDetailsPanel
          details={props.details}
          hours={props.hours}
          locationId={props.locationId}
          icon={props.icon}
        />

      </TabPanel>
      <TabPanel>

        <NonAuthAllReviewsPanel locationId={props.locationId} />

      </TabPanel>
      <TabPanel>
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? (
              <ReviewPanel
                details={props.details}
                address={props.address}
                locationId={props.locationId}
              />
            ) : (
                <Header>You Must Be Registered To Leave A Review</Header>

              )
          }
        </AuthUserContext.Consumer>
      </TabPanel>
    </StyledTabs>
  );
};
