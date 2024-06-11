import { useEffect } from 'react';

const ScrollToTop = () => {
    useEffect(() => {
      const url = window.location.href;
      if (!url.includes("#")) {
        window.scrollTo(0, 0);
      }
    }, []);
    return null;
  };

export default ScrollToTop;