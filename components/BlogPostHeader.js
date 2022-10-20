export default function BlogPostHeader({ title, author, image, publishDate }) {
  return (
    <header className="h-screen-1/2 md:h-screen-3/4 relative flex justify-center items-end">
      {image && (
        <img
          className="object-cover object-center w-full h-full absolute"
          alt={image.description}
          src={image.url}
        ></img>
      )}
      <div className="relative bg-black/60 w-full p-4">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div>
          <h3>
            By <i>{author ?? "Anonymous"}</i>
          </h3>
          <h3>{publishDate}</h3>
        </div>
      </div>
    </header>
  );
}
