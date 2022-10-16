export default function UL_List({ children }) {
  return (
    <ul className="bg-red-600 p-2 rounded-xl list-disc list-inside">
      {children}
    </ul>
  );
}
