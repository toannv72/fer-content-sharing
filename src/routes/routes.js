import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import SanPham from '~/pages/SanPham';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Blog from '~/pages/Blog';
import Tiem from '~/pages/Tiem';
import Login from '~/pages/Login';
import SingleBlog from '~/pages/SingleBlog/SingleBlog';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.sanpham, component: SanPham },
    { path: config.routes.live, component: Live },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.login, component: Login, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.chutiem, component: Tiem },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.singleBlog, component: SingleBlog },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
