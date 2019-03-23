import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

export default ({ pageContext: { releases } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `github`]}/>
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h3>Track latest releases of popular github repositories</h3>
      <ListGroup>
        {releases.map(release => (
          release.tagName &&
          <ListGroupItem>
            <ListGroupItemHeading>{`${release.owner}/${release.name}`}</ListGroupItemHeading>
            <ListGroupItemText>
              <a href={`https://www.github.com${release.resourcePath}`} rel="noopener noreferrer" target="_blank">
                <Button size="sm" outline color="success">{`Latest release: ${release.tagName}`}</Button>
              </a>
            </ListGroupItemText>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  </Layout>
)
