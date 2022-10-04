import Layout from "../../components/Layout";
import {
  getPostById,
  getPostBySlug,
  getPosts,
} from "../../lib/data/blog/query";

export default function BlogPostPage({ title }) {
  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug);
  return { props: { ...post } };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.blogPostCollection.items.map((p) => ({
    params: {
      slug: p.slug,
    },
  }));
  return {
    fallback: false,
    paths,
  };
}
