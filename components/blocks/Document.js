export default function Document({ children }) {
  return (
    <div className="flex flex-col gap-4 w-5/6 md:w-3/5 m-auto p-2 md:p-4">
      {children}
    </div>
  );
}
