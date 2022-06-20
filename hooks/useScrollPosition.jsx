import React, { useEffect, useRef } from "react";

const useScrollPosition = () => {
  useEffect(() => {
    const scroller = window.addEventListener("scroll", (e) =>
      console.log("e", e)
    );

    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

  const scrollValue = useRef();

  return { scrollValue: scrollValue.current };
};

export default useScrollPosition;
