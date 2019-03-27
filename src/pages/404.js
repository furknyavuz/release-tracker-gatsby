import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <div style={{ minHeight: "100vh", paddingTop: "30px" }}>
      <h1 style={{ color: `maroon`}}>404 Page Not Found!</h1>
      <hr></hr>
      <Link to="/" style={{ color: `grey`, textDecoration: `none` }}>
        <h2>- Home</h2>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
