/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

function camalize(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function hyphen(str) {
  return str.toLowerCase().replace(/ /g, "-");
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const axios = require("axios");

const getReleasesByGroupData = async (group) => {
  console.log(process.env.API_URL);
  return axios.get(`${process.env.API_URL}/github-releases?group=${group}`);
};

const getReleaseGroups = async () => {
  console.log(process.env.API_URL);
  return axios.get(`${process.env.API_URL}/github-releases/group`);
};

exports.createPages = async ({ actions: { createPage } }) => {
  let groups = await getReleaseGroups();
  groups = groups.data;

  let groupNodes = [];

  for (let i = 0; i < groups.length; i++) {
    groupNodes[i] = {
      group: groups[i].name,
      description: groups[i].description,
      path: hyphen(groups[i].name),
      releases: {}
    };
  }

  let j = 0;
  await asyncForEach(groupNodes, async (groupNode) => {
    let group =  {
      name: groupNode.group,
      description: groupNode.description
    }
    let releases = await getReleasesByGroupData(group.name);
    releases = releases.data;
    groupNodes[j].releases = releases;
    ++j;

    createPage({
      path: `/${groupNode.path}`,
      component: require.resolve("./src/templates/group.js"),
      context: { group , releases }
    });
  });

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all-groups.js"),
    context: { groupNodes }
  });
};

