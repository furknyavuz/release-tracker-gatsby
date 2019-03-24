import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Container, Row, Col
} from "reactstrap";
import { Link } from "gatsby";
import threeDots from "../images/three-dots.png";

export default ({ pageContext: { groupNodes } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `github`]}/>
    <h3 style={{ padding: "2px", paddingBottom: "10px" }}>Latest releases of popular repositories</h3>
    <ListGroup>
      {groupNodes.map(groupNode => (
        <Link
          to={`/${groupNode.path}`}
          style={{
            textDecoration: `none`
          }}
        >
          <ListGroupItem style={{ marginBottom: "20px", borderRadius: "3px" }}>
            <div style={{ position: "relative" }}>
              <ListGroupItemHeading className="text-muted">
                <Container fluid={true}>
                  <Row>
                    <Col className="listHeader">
                      {`${groupNode.group}`}
                    </Col>
                  </Row>
                </Container>
              </ListGroupItemHeading>
              <hr style={{ position: "absolute" }}></hr>
            </div>
            <ListGroupItemText className="listText">
              <Container fluid={true}>
                <Row>
                  <Col style={{ padding: "2px" }}>
                    <Container fluid={true}>
                      <Row className="text-secondary" style={{ padding: "4px", paddingBottom: "39px", paddingTop: "10px"}}>
                        {`${groupNode.description}`}
                      </Row>
                    </Container>
                  </Col>
                  <Col lg={3} style={{ padding: "2px" }}>
                    <Container fluid={true} className="groupLogosContainer">
                      <Row>
                        {groupNode.releases.slice(0, 8).map(release => (
                          <div style={{ padding: "20px" }}>
                            <img src={release.avatarUrl} height={40} width={40} className="listImage"></img>
                          </div>
                        ))}
                        <div style={{ padding: "20px" }}>
                          <img src={threeDots} height={40} width={40} className="listImage"></img>
                        </div>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </ListGroupItemText>
          </ListGroupItem>
        </Link>
      ))}
    </ListGroup>
  </Layout>
)
