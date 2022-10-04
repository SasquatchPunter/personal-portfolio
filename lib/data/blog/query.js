const client = require("./client");
const { gql } = require("graphql-request");

const BLOG_POST_MIN_FRAG = gql`
  fragment MinimizedBlogPost on BlogPost {
    title
    slug
    sys {
      id
      publishedAt
    }
    mainImage {
      description
      contentType
    }
  }
`;

const BLOG_POST_MAX_FRAG = gql`
  fragment MaximizedBlogPost on BlogPost {
    title
    slug
    sys {
      id
      publishedAt
    }
    mainImage {
      description
      contentType
      title
      url
    }
    body {
      json
    }
  }
`;

/**
 * @param {{limit: number, skip: number, order: BlogPostOrder}} vars
 */
function getPosts(vars) {
  const query = gql`
    ${BLOG_POST_MIN_FRAG}
    query GetPosts($limit: Int, $skip: Int, $order: [BlogPostOrder]) {
      blogPostCollection(limit: $limit, skip: $skip, order: $order) {
        items {
          ...MinimizedBlogPost
        }
      }
    }
  `;
  return client.request(query, vars);
}

/**
 * @param {string} id post id
 */
function getPostById(id) {
  const query = gql`
    ${BLOG_POST_MAX_FRAG}
    query GetPostById($id: String!) {
      blogPost(id: $id) {
        ...MaximizedBlogPost
      }
    }
  `;
  return client.request(query, { id }).then((r) => r.blogPost);
}

/**
 * @param {string} slug - post slug
 */
function getPostBySlug(slug) {
  const query = gql`
    ${BLOG_POST_MAX_FRAG}
    query GetPostBySlug($slug: String!) {
      blogPostCollection(where: { slug: $slug }) {
        items {
          ...MaximizedBlogPost
        }
      }
    }
  `;
  return client
    .request(query, { slug })
    .then((r) => r.blogPostCollection.items[0]);
}

// getPosts()
//   .then((r) => r.blogPostCollection.items)
//   .then(console.log)
//   .catch(console.error);
// getPostById("6igXeAsX1MW5v4W4nDsvXd").then(console.log).catch(console.error);
// getPostBySlug("im-blogging-now").then(console.log).catch(console.error);

module.exports = { getPosts, getPostById, getPostBySlug };