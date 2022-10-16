import Link from "next/link";

export default function BlogPostCard({ post }) {
  const publishDate = new Date(post.sys.publishedAt).toDateString();
  return (
    <article className="border-cyan-200 border-2 rounded-xl overflow-clip">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <img src={post.mainImage.url} alt={post.mainImage.description} />
          <div className="p-3">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <h6>by {post.author ?? "Anonymous"}</h6>
            <h6>{publishDate}</h6>
          </div>
        </a>
      </Link>
    </article>
  );
}
