export default function Document({ children }) {
  return (
    <div className="flex flex-col gap-4 w-4/5 md:w-3/5 m-auto p-4">
      {children}
    </div>
  );
}
