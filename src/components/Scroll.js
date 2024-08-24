import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnMount = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top of the page on component mount or update
    }, [pathname]); // Reset scroll when pathname changes (i.e., when navigating to a new route)

    return null; // No need to render anything
};

export default ScrollToTopOnMount;