import React, { useRef, useCallback } from "react";

const useScrollbar = () => {
  const scrollbarRef = useRef(undefined);

  const handleScrollbar = useCallback(
    (e) => {
      const scrollOffset = Math.round(
        (e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)) *
          100
      );

      const renderNewPosition = (offset) => {
        scrollbarRef.current.style.top = offset + "%";
        scrollbarRef.current.style.transform = `translateY(-${offset}%)`;
      };

      window.requestAnimationFrame(() => {
        renderNewPosition(scrollOffset);
      });

      console.log(scrollOffset);
    },
    [scrollbarRef]
  );

  return {
    scrollbarRef,
    handleScrollbar,
  };
};

export default useScrollbar;
