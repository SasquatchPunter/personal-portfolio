export default function PageTitleHeader({ children }) {
  return (
    <header className="flex items-center p-4 mt-12 perspective-800">
      <h1 className="text-6xl md:text-9xl font-bold w-max text-amber-400 drop-shadow-text-title transform-3d">
        {children}
      </h1>
    </header>
  );
}
