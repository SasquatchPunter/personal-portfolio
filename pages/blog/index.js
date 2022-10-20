import BlogCard from "../../components/BlogCard";

import { getPosts } from "../../lib/data/blog/query";
import PageWrapper from "../../components/PageWrapper";
import MainContent from "../../components/MainContent";
import SiteNavWrapper from "../../components/SiteNavWrapper";

export default function BlogHomePage({ posts }) {
  return (
    <PageWrapper title="Blog">
      <SiteNavWrapper>
        <MainContent>
          <ul className="w-fit p-4 m-auto">
            {posts.map((post) => (
              <li className="[&:not(:last-child)]:mb-4" key={post.slug}>
                <BlogCard post={post}></BlogCard>
              </li>
            ))}
          </ul>
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
