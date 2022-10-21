import { getPosts } from "../../lib/data/blog/query";
import PageWrapper from "../../components/PageWrapper";
import MainContent from "../../components/MainContent";
import SiteNavWrapper from "../../components/SiteNavWrapper";
import BlogCardList from "../../components/BlogCardList";

export default function BlogHomePage({ posts }) {
  return (
    <PageWrapper title="Blog">
      <SiteNavWrapper>
        <MainContent>
          <BlogCardList posts={posts} />
        </MainContent>
      </SiteNavWrapper>
    </PageWrapper>
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
