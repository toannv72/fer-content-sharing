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
import Logout from '~/pages/Logout';
import AdminLayout from '~/layouts/Admin/AdminLayout';

import BlogAdmin from '~/admin/Blog/Blog';
import { CreateBlogs } from '~/admin/Blog/CreateBlogs';
import { BlogsManagement } from '~/admin/Blog/BlogsManagement';

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
    { path: config.routes.search, component: Search},
    { path: config.routes.singleBlog, component: SingleBlog },
    { path: config.routes.logout, component: Logout },

    { path: config.routes.adminBlog, component: BlogAdmin, layout: AdminLayout },
    { path: config.routes.adminCreateBlog, component: CreateBlogs, layout: AdminLayout },
    { path: config.routes.adminBlogManagement, component: BlogsManagement, layout: AdminLayout },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
