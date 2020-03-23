# iView-login-project

This project is build for Vue.js 2 + vue-router + webpack2 + iView 3, just install and run.

## Install
```bush
// install dependencies
npm install  --registry https://registry.npm.taobao.org
```
## Run
### Development
```bush
// For the first time, run init to create index.html
npm run init
npm run dev
```
### Production(Build)
```bush
npm run build
```

#要解决的问题
- - - - 
1.如何登录
2.如何记录登录状态,(登录后访问其他页面使用)
3.如何登出


# 登录的原理
- - - -

1.在登录页面向服务器端发送用户名密码
2.服务器端验证是否成功如果成功则跳转到首页
3.如果失败则显示失败信息

## login页面
```
   this.$http.post('/reconcile/logincode/',this.formLine)
                    .then((res)=> { 
                           this.$router.replace({name:'Home'});
                           })
                    .catch( (err)=> {
                          this.$Message.error('验证码错误')
                          })

                         }
                     )
                                 
                    
```

# 记录登录状态原理
- - - -
1.登录成功后,后端会将sessionid写在cookie中,所以检查是否有sessionid就可以知道是否登录成功
## 具体实现
```
 if (Vue.cookies.get('sessionid')) {
            next();
        } else {
            next('/login');
        }

```

# 登出原理
1.删除sessionid
2.跳转到login页面
##　具体实现
```
   logout:function(){
             this.$cookies.remove('sessionid');
        		this.$router.replace('login')
        	}
```
- - - - 



t
