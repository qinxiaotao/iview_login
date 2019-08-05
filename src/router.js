const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        //component: (resolve) => require(['./views/index.vue'], resolve)
        redirect:'/login'
    },
    {
    	path:'/login',
    	component:(resolve)=>require(['./views/login.vue'],resolve)
    },
     //顶级入口
    {
    	path:'/home', //此页为所有页的基本页
    	component:(resolve)=>require(['./views/home.vue'],resolve),
        children:[
            {
              path:'fixedMenu',
              component:(resolve)=>require(['./views/fixedMenu.vue'],resolve)
            },
            {
               path:'submenu',
               component:(resolve)=>require(['./views/submenu.vue'],resolve)
            }
        ]
    }

];
export default routers;