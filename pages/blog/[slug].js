import BlogPost from "../../components/BlogPost";
import { getPostBySlug, getPosts } from "../../lib/data/blog/query";
import PageWrapper from "../../components/PageWrapper";
import MainContent from "../../components/MainContent";
import SiteNavWrapper from "../../components/SiteNavWrapper";

export default function BlogPostPage({ post }) {
  return (
    <PageWrapper title={post.title}>
      <SiteNavWrapper>
        <MainContent>
          <BlogPost post={post}></BlogPost>
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug);
  // console.log(post.body.json.content);
  // console.log(post.body.links.entries.inline);
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
