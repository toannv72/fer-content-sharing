import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Test from './Test/Test';
import Home2 from './Home2';

// import Footer from '~/layouts/Footer';
// import Posts from './posts/Posts';
// import App from './New';

function Blog() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            {/* <Posts /> */}
            <Home2 />
            {/* <Footer /> */}
      
        </div>
    );
}

export default Blog;
