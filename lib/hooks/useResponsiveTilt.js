import { useEffect, useRef } from "react";

const defaults = {
  damp: 40,
  useWindow: false,
  rotateX: true,
  rotateY: true,
};

/**
 * @description Applies user-responsive 3d rotation transforms to child elements in the parent element's 3d space. Only compatible with the local tailwind transform3d plugin -- only works with child elements that have the "transform-3d" class
 * @param {{damp?: number; useWindow?: boolean; rotateX?: boolean; rotateY?: boolean;}} options
 */
export default function useResponsiveTilt(options = defaults) {
  const tiltParent = useRef(null);
  const tiltChildren = useRef([]);

  options.damp = options.damp ?? defaults.damp;
  options.useWindow = options.useWindow ?? defaults.useWindow;
  options.rotateX = options.rotateX ?? defaults.rotateX;
  options.rotateY = options.rotateY ?? defaults.rotateY;

  useEffect(() => {
    if (options.useWindow) {
      tiltParent.current = window;
    }

    const tParent = tiltParent.current;
    const tChildren = tiltChildren.current;

    const handleTilt = (e) => {
      const xRot = (window.innerWidth / 2 - e.clientX) / options.damp;
      const yRot = (window.innerHeight / 2 - e.clientY) / options.damp;
      tChildren.forEach((c) => {
        if (options.rotateX) {
          c.style.setProperty("--tw-rotate-x", `${yRot}deg`);
        }
        if (options.rotateY) {
          c.style.setProperty("--tw-rotate-y", `${-xRot}deg`);
        }
      });
    };

    tParent.addEventListener("mousemove", handleTilt);

    return () => {
      tParent.removeEventListener("mousemove", handleTilt);
    };
  }, []);

  return {
    tiltParent,
    tiltChild: (el) => {
      if (el && !tiltChildren.current.includes(el)) {
        tiltChildren.current.push(el);
      }
    },
  };
}
