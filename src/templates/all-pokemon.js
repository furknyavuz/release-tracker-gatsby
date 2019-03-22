import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default ({ pageContext: { allPokemon } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ width: 960, margin: '4rem auto' }}>
      <h2>Track latest releases of popular github repositories.</h2>
      <ul style={{ padding: 0 }}>
        {allPokemon.map(pokemon => (
          <li
            key={pokemon.id}
            style={{
              textAlign: 'center',
              listStyle: 'none',
              display: 'inline-block'
            }}
          >
            <Link to={`/pokemon/${pokemon.name}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)
