import BlogCard from "./BlogCard";

export default function BlogCardList({ posts }) {
  const populate = () => {
    return posts.map((post) => (
      <BlogCard key={post.slug} post={post}></BlogCard>
    ));
  };

  return (
    <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {populate()}
    </section>
  );
}
