import Link from "next/link";

export default function BlogPostCard({
  slug,
  title,
  author,
  publishedAt,
  img,
}) {
  const publishDate = new Date(publishedAt).toDateString();
  return (
    <article className="border-cyan-200 border-2 rounded-xl overflow-clip">
      <Link href={`/blog/${slug}`}>
        <a>
          <img src={img.url} alt={img.description} />
          <div className="p-3 text-cyan-100">
            <h1 className="text-4xl">{title}</h1>
            <h6>by {author}</h6>
            <h6>{publishDate}</h6>
          </div>
        </a>
      </Link>
    </article>
  );
}
