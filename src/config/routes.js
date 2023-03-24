const routes = {
    home: '/',
    share: '/share',
    profile: '/@:you',
    upload: '/upload',
    search: '/search/:abc',
    highlights: '/highlights',
    blog: '/blog',
    chutiem: '/chu-tiem',
    login: '/login',
    singleBlog: '/singleBlog/:id',
    logout: '/logout',

    about: '/about',
    information: '/information',
    password: '/settings',

    adminHome: '/admin/home',

    adminCreateProduct: '/admin/product/create',
    adminProductManagement: '/admin/product/management',
    adminProduct: '/admin/product',

    adminNotification: '/admin/notification',
    adminOrder: '/admin/order',
    adminUser: '/admin/user',

    adminBlog: '/admin/blog',
    adminCreateBlog: '/admin/blog/create',
    adminBlogManagement: '/admin/blog/management',
};

export default routes;
