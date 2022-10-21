export default function Quote({ children }) {
  return (
    <blockquote className='w-4/5 m-auto italic before:content-["\201C"] after:content-["\201D"] before:text-4xl after:text-4xl'>
      {children}
    </blockquote>
  );
}
