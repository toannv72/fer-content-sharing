import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Blog from '../Blog';
import Home2 from './Home2';

import Home from './Home';
import 

function ControlledCarousel() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Home />
            <Home2 />

            {/* <h2 class="">Xem gì hôm nay</h2>
            BLOG <Blog />
            <h3 class="suggest-blog">Có thể bạn thích</h3>
            BLOG <Blog /> */}
        </div>
    );
}
export default ControlledCarousel;
