import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default ({ pageContext: { releases } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h2>Track latest releases of popular github repositories.</h2>
      <p>{releases.length}</p>
      <ListGroup>
      </ListGroup>
      {releases.map(release => (
        release.tagName &&
        <a href={`https://www.github.com${release.resourcePath}`} rel="noopener noreferrer" target="_blank">
          <ListGroupItem>
            <ListGroupItemHeading>{`${release.owner}/${release.name}`}</ListGroupItemHeading>
            <ListGroupItemText>
              {`Latest release: ${release.tagName}`}
            </ListGroupItemText>
          </ListGroupItem>
        </a>
      ))}
    </div>
  </Layout>
)
