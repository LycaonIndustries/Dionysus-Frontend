import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial value
    setMatches(mediaQueryList.matches);

    // Add listener
    mediaQueryList.addListener(documentChangeHandler);

    // Cleanup listener on component unmount
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
}
