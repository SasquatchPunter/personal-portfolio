import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";

import { getPosts } from "../../lib/data/blog/query";

export default function BlogHomePage({ posts }) {
  return (
    <Layout pageTitle="Blog">
      <ul className="w-fit p-4 m-auto">
        {posts.map((post) => (
          <li className="[&:not(:last-child)]:mb-4" key={post.slug}>
            <BlogCard post={post}></BlogCard>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts: posts.blogPostCollection.items,
    },
  };
}
