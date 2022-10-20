import { useEffect, useState } from "react";

export default function useBodySize() {
  const [bodySize, setBodySize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setBodySize({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      });
    };

    document.body.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      document.body.removeEventListener("resize", handleResize);
    };
  }, []);

  return bodySize;
}
