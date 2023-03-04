import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Test from './Test/Test';
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



      {/* <Footer /> */}
      {/* <Test minh="minh" day="123" />

      <Test minh="toan" day="321" /> */}

    </div>
  );
}

export default Blog;
