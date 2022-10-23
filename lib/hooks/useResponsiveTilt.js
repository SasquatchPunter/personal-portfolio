import { useEffect, useRef } from "react";

const defaults = {
  damp: 40,
};

/**
 * @description Applies user-responsive 3d rotation transforms to child elements in the parent element's 3d space. Only compatible with the local tailwind transform3d plugin -- only works with child elements that have the "transform-3d" class
 * @param {{damp: number}} options
 */
export default function useResponsiveTilt({ damp = 40 } = defaults) {
  const tiltParent = useRef(null);
  const tiltChildren = useRef([]);

  useEffect(() => {
    const tParent = tiltParent.current;
    const tChildren = tiltChildren.current;

    const handleTilt = (e) => {
      const xRot = (window.innerWidth / 2 - e.clientX) / damp;
      const yRot = (window.innerHeight / 2 - e.clientY) / damp;
      tChildren.forEach((c) => {
        c.style.setProperty("--tw-rotate-x", `${yRot}deg`);
        c.style.setProperty("--tw-rotate-y", `${-xRot}deg`);
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
