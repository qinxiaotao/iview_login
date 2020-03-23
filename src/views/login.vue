<style scoped>
    .login_back {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        background: #2d5a9e;
        /*url(../images/background.jpg) repeat ;*/
        /* padding-top:200px;*/
    }

    .login_self {
        width: 400px;
        height: 300px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border-radius: 5px;

    }

    .form_center {
        width: 250px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        padding-top: 50px;

    }
</style>

<template>
    <div class="login_back">
        <div class='login_self'>

            <Form :model="loginData" class='form_center'>
                <FormItem style="text-align: center">
                    <h2 style='#17233d;'>Login</h2>
                </FormItem>
                <FormItem>
                    <Input type="text" placeholder="Username" v-model='loginData.user'>
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Input type="password" placeholder="Password" v-model='loginData.password'>
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" long @click='login'>登录</Button>
                </FormItem>
            </Form>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data: function () {
            return {
                loginData: {
                    user: '',
                    password: '',
                },

            }
        },
        methods: {
            login: function () {
              /*  向后端api发送请求
                  this.$http.post('/login',this.loginData)
                    .then((res)=>{
                        let expireDays = 30 * 1 * 1 ;
                        this.$cookies.set('sessionid',res.data.session,,expireDays);
                        this.$router.replace('/home');
                    }).catch((err)=>{
                         this.$Message.error('密码错误');

                })*/
                //模拟登录
                let expireDays = 60 * 60 * 1 ; //设置超时时间为3600秒
                this.$cookies.set('sessionid', '1111',expireDays);
                this.$router.replace('/home');

            }
        }
    }
</script>
