import Layout from "../../components/Layout";
import Link from "next/link";
import { getPosts } from "../../lib/data/blog/query";

export default function BlogHomePage({ posts }) {
  return (
    <Layout pageTitle="Blog Welcome Page">
      <h1>Blog Home</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
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
