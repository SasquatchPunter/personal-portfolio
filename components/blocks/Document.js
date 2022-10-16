export default function Document({ children }) {
  return (
    <div className="flex flex-col gap-4 w-5/6 md:w-full m-auto p-2 md:p-4">
      {children}
    </div>
  );
}
