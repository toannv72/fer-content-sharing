import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Share from '~/pages/Share';
import Highlights from '~/pages/Highlights';
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
import About from '~/pages/About';
import Password from '~/pages/Setting/Password';
import DefaultLayout2 from '~/layouts/components/DefaultLayout2';
import Information from '~/pages/Setting/Information';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.share, component: Share },
    { path: config.routes.highlights, component: Highlights },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.login, component: Login, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.chutiem, component: Tiem },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.singleBlog, component: SingleBlog },
    { path: config.routes.logout, component: Logout },
    { path: config.routes.password, component: Password, layout: DefaultLayout2 },
    { path: config.routes.information, component: Information, layout: DefaultLayout2 },
    { path: config.routes.about, component: About },
    { path: config.routes.adminBlog, component: BlogAdmin, layout: AdminLayout },
    { path: config.routes.adminCreateBlog, component: CreateBlogs, layout: AdminLayout },
    { path: config.routes.adminBlogManagement, component: BlogsManagement, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
