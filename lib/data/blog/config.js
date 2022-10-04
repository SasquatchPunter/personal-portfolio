if (
  !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
  !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
) {
  require("dotenv").config();
}

// NEXT_PUBLIC_ prefix exposes this in the browser! Don't use client side

module.exports = {
  BASE_URL: "https://graphql.contentful.com",
  SPACES_ENDPOINT: "/content/v1/spaces/",
  ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
};
