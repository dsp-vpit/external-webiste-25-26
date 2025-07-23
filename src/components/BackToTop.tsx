import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BackToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if not navigating to a hash
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default BackToTop;
