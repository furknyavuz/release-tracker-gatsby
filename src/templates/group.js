import React from "react";

import ReactMarkdown from "react-markdown";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Container, Row, Col
} from "reactstrap";

export default ({ pageContext: { group, releases } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `github`]}/>
    <h3 style={{ padding: "2px", paddingBottom: "10px" }}>{`Latest releases of popular ${group.name} repositories`}</h3>
    <ListGroup>
      {releases.map(release => (
        release.tagName &&
        <ListGroupItem style={{ marginBottom: "20px", borderRadius: "3px" }}>
          <div style={{ position: "relative" }}>
            <ListGroupItemHeading className="text-muted">
              <Container fluid={true}>
                <Row>
                  <Col lg={1}>
                    <img src={release.avatarUrl} height={40} width={40} className="listImage"></img>
                  </Col>
                  <Col className="listHeader">
                    {`${release.owner}/${release.name}`}
                  </Col>
                </Row>
              </Container>
            </ListGroupItemHeading>
            <hr className="rt-hr" style={{ position: "absolute" }}></hr>
          </div>
          <ListGroupItemText style={{ paddingTop: "26px" }}>
            <Container fluid={true}>
              <Row>
                <Col style={{ padding: "2px" }}>
                  <Container fluid={true}>
                    <Row style={{ padding: "4px", paddingTop: "10px" }}>
                      {`${release.description}`}
                    </Row>
                    <Row style={{ padding: "2px", paddingTop: "30px" }}>
                      <a className="listLink"
                         href={`https://www.github.com${release.resourcePath}`}
                         rel="noopener noreferrer" target="_blank">
                        <Button className="linkButton" size="sm" outline
                                color="success">{`Latest release: ${release.tagName}`}</Button>
                      </a>

                      {release.homepageUrl && <a className="listLink"
                                                 href={`${release.homepageUrl}`} rel="noopener noreferrer"
                                                 target="_blank">
                        <Button className="linkButton" size="sm" outline
                                color="secondary">{`${release.homepageUrl}`}</Button>
                      </a>}
                    </Row>
                  </Container>
                </Col>
                <Col lg={3} style={{ padding: "8px" }}>
                  {release.topics.length > 0 && <h6>Topics</h6> }
                  {release.topics.length > 0 && <div className="topicsDiv">
                    {release.topics.map(topicNode => (
                      <Button block className="linkButton" size="sm" outline
                              color="secondary">
                        <a className="listLink"
                           href={`http://github.com/topics/${topicNode.topic.name}`}
                           rel="noopener noreferrer" target="_blank" style={{ textDecoration: "none" }}>

                          {`${topicNode.topic.name}`}
                        </a>
                      </Button>
                    ))}
                  </div>}
                </Col>
              </Row>
              {release.releaseDescription && <Row style={{ padding: "6px", paddingTop: "10px" }}>
                <h2>{`Release notes`}</h2>
              </Row>}

              {release.releaseDescription && <Row style={{ padding: "6px", paddingTop: "10px" }}>

                <ReactMarkdown source={`${release.releaseDescription}`} className="release-description"/>

              </Row>}
            </Container>
          </ListGroupItemText>
        </ListGroupItem>
      ))}
    </ListGroup>
  </Layout>
)
