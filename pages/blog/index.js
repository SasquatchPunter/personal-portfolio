import Layout from "../../components/Layout";
import BlogPostCard from "../../components/BlogPostCard";

import Link from "next/link";
import { getPosts } from "../../lib/data/blog/query";

export default function BlogHomePage({ posts }) {
  return (
    <Layout pageTitle="Blog Welcome Page">
      <ul className="w-fit p-4 m-auto">
        {posts.map((p) => (
          <li className="[&:not(:last-child)]:mb-4" key={p.slug}>
            <BlogPostCard
              slug={p.slug}
              title={p.title}
              author={p.author ?? "Anonymous"}
              publishedAt={p.sys.publishedAt}
              img={p.mainImage}
            ></BlogPostCard>
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
