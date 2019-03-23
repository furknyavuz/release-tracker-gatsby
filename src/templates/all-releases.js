import React from "react";

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

export default ({ pageContext: { releases } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `github`]}/>
    <h3 style={{ padding: "2px", paddingBottom: "10px" }}>Latest releases of popular repositories</h3>
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
                  <Col style={{ paddingTop: "9px", paddingBottom: "9px", paddingLeft: "0" }} className="listHeader">
                    {`${release.owner}/${release.name}`}
                  </Col>
                </Row>
              </Container>
            </ListGroupItemHeading>
            <hr style={{ position: "absolute" }}></hr>
          </div>
          <ListGroupItemText style={{ paddingTop: "26px" }}>
            <Container fluid={true}>
              <Row>
                <Col style={{ padding: "2px" }}>
                  <Container fluid={true}>
                    <Row style={{ padding: "4px", paddingBottom: "15px", paddingTop: "10px" }}>
                      {`${release.description}`}
                    </Row>
                    <Row style={{ paddingBottom: "10px" }}>
                      <a style={{ padding: "2px", paddingLeft: "5px", paddingRight: "5px" }}
                         href={`https://www.github.com${release.resourcePath}`}
                         rel="noopener noreferrer" target="_blank">
                        <Button size="sm" outline color="success">{`Latest release: ${release.tagName}`}</Button>
                      </a>
                      <a style={{ padding: "2px", paddingLeft: "5px", paddingRight: "5px" }}
                         href={`${release.homepageUrl}`} rel="noopener noreferrer"
                         target="_blank">
                        <Button size="sm" outline color="secondary">{`${release.homepageUrl}`}</Button>
                      </a>
                    </Row>
                  </Container>
                </Col>
                <Col lg={3} style={{ padding: "2px" }}>
                  <Container fluid={true} className="ghbtnsContainer">
                    <Row>
                      <Col>
                        <iframe
                          src={`https://ghbtns.com/github-btn.html?user=${release.owner}&repo=${release.name}&type=star&count=true&size=large`}
                          frameBorder="0" scrolling="0" width="170px" height="30px">`
                        </iframe>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <iframe
                          src={`https://ghbtns.com/github-btn.html?user=${release.owner}&repo=${release.name}&type=watch&count=true&v=2&size=large`}
                          frameBorder="0" scrolling="0" width="170px" height="30px">

                        </iframe>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <iframe
                          src={`https://ghbtns.com/github-btn.html?user=${release.owner}&repo=${release.name}&type=fork&count=true&size=large`}
                          frameBorder="0" scrolling="0" width="170px" height="30px">

                        </iframe>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </ListGroupItemText>
        </ListGroupItem>
      ))}
    </ListGroup>
  </Layout>
)
