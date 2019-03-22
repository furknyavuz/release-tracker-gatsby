import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ pageContext: { releases } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h2>Track latest releases of popular github repositories.</h2>
      {releases.map(release => (
        release.tagName &&
        <a href={`https://www.github.com${release.resourcePath}`} target="_blank">
          <p>{`${release.owner}/${release.name} latest release: ${release.tagName}`}</p>
        </a>
      ))}
    </div>
  </Layout>
)
