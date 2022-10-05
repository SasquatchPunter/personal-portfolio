export default function OL_List({ children }) {
  return (
    <ol className="list-decimal list-inside bg-green-500 p-2 rounded-xl">
      {children}
    </ol>
  );
}
