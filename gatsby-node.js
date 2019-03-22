/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const axios = require("axios");

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        })
      );

      return { ...pokemon, abilities };
    })
  );

const getReleasesData = async () => {
  console.log(process.env.API_URL);
  return axios.get(`${process.env.API_URL}/github-releases`);
}

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"]);

  let releases = await getReleasesData();
  releases = releases.data;

  // Create a page that lists all Pokémon.
  createPage({
    path: `/list`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon }
  });

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all-releases.js"),
    context: { releases }
  });

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve("./src/templates/pokemon.js"),
      context: { pokemon }
    });

    // Create a page for each ability of the current Pokémon.
    pokemon.abilities.forEach(ability => {
      createPage({
        path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
        component: require.resolve("./src/templates/ability.js"),
        context: { pokemon, ability }
      });
    });
  });
};
