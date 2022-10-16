import { renderBlogPost } from "../lib/data/blog/render";

export default function BlogPost({ post }) {
  const publishDate = new Date(post.sys.publishedAt).toDateString();
  return (
    <article>
      <header className="h-screen-1/2 overflow-hidden">
        {post.mainImage && (
          <img alt={post.mainImage.description} src={post.mainImage.url}></img>
        )}
        <h1 className="text-4xl">{post.title}</h1>
        <div>
          <h3>By {post.author ?? "Anonymous"}</h3>
          <h3>{publishDate}</h3>
        </div>
      </header>
      {renderBlogPost(post.body.json)}
    </article>
  );
}
