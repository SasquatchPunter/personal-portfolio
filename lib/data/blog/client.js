const { GraphQLClient } = require("graphql-request");
const fetch = require("cross-fetch");
const {
  SPACE_ID,
  ACCESS_TOKEN,
  BASE_URL,
  SPACES_ENDPOINT,
} = require("./config");

const options = {
  headers: {
    Authorization: "Bearer " + ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
  fetch,
};

module.exports = new GraphQLClient(
  BASE_URL + SPACES_ENDPOINT + SPACE_ID,
  options
);
