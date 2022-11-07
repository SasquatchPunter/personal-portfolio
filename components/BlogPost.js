import { renderBlogPost } from "../lib/data/blog/render";
import BlogPostHeader from "./BlogPostHeader";

export default function BlogPost({ post }) {
  const publishDate = new Date(post.sys.publishedAt).toDateString();
  return (
    <article className="flex flex-col gap-4">
      <BlogPostHeader
        title={post.title}
        author={post.author}
        image={post.mainImage}
        publishDate={publishDate}
      />
      {renderBlogPost(post.body.json, post.body.links)}
    </article>
  );
}
