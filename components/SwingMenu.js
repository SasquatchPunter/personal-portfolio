export default {
  Menu({ children }) {
    return (
      <menu className="perspective-300 m-4 flex flex-col gap-4">
        {children}
      </menu>
    );
  },

  Item({ children }) {
    return (
      <div className="transform-3d origin-right -rotate-y-20 hover:-rotate-y-15 duration-300">
        {children}
      </div>
    );
  },
};
