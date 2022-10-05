import Layout from "../../components/Layout";
import { getPostBySlug, getPosts } from "../../lib/data/blog/query";
import { renderBlogPost } from "../../lib/data/blog/render";

export default function BlogPostPage({ post }) {
  return (
    <Layout pageTitle={post.title}>
      <h1 className="text-4xl">{post.title}</h1>
      <span>
        <h2>{post.author ?? "Anonymous"}</h2>{" "}
        <h3>- published {post.sys.publishedAt}</h3>
      </span>
      <article>
        {post.mainImage && (
          <img alt={post.mainImage.description} src={post.mainImage.url}></img>
        )}
        {renderBlogPost(post.body.json)}
      </article>
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
