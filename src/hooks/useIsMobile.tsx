import React, { useState, useEffect } from 'react';

export function getIsMobile() {
  const { innerWidth: width } = window;
  return {
    isMobile: width < 1000,
  };
}
export default function useIsMobile() {
  const [windowDimensions, setWindowDimensions] = useState(getIsMobile());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getIsMobile());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
