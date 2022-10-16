import Layout from "../../components/Layout";
import BlogPost from "../../components/BlogPost";
import { getPostBySlug, getPosts } from "../../lib/data/blog/query";

export default function BlogPostPage({ post }) {
  return (
    <Layout pageTitle={post.title}>
      <BlogPost post={post}></BlogPost>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug);
  return { props: { post } };
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
