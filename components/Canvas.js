import { useEffect, useRef, ReactNode } from "react";
import { resizeToDisplay } from "../lib/utils/canvas";

const PROPS = {
  id: undefined,
  className: undefined,
  resize: undefined,
  renderer: (canvas) => {
    console.log(
      `Canvas element '${canvas.id || "undefined"}' has no renderer attached!`
    );
  },
  children: undefined,
};

/**
 * @param {{
 * id: string;
 * resize?: boolean;
 * className?: string;
 * renderer: (canvas: HTMLCanvasElement) => void;
 * children: ReactNode;
 * }} param0
 */
export default function Canvas({
  id = PROPS.id,
  className = PROPS.className,
  resize = PROPS.resize,
  renderer = PROPS.renderer,
  children = PROPS.children,
}) {
  const canvas = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      resizeToDisplay(canvas.current);
      renderer(canvas.current);
    };

    if (resize) {
      window.addEventListener("resize", handleResize);
    }

    handleResize();
    renderer(canvas.current);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas className={className} ref={canvas} id={id}>
      {children}
    </canvas>
  );
}
