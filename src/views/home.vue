
<style scoped>

   .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav{
    width: 600px;
    margin:0 auto;
    margin-right: 0;
}

.layout-footer-center{
    text-align: center;
}
</style>


<template>
   <div class="layout">
        <Layout>
            <Header>
               <Menu mode="horizontal" theme="dark" :active-name="activename">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1"  to="/home/submenu">
                            <Icon type="ios-navigate"></Icon>
                            submenu
                        </MenuItem>
                        <MenuItem name="2" to='/home/fixedMenu'>
                            <Icon type="ios-keypad"></Icon>
                            fixedMenu
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                         <MenuItem name="5">
                            <Icon type="ios-analytics"></Icon>
                            Item 5
                        </MenuItem>
                          <MenuItem name="4">
                          <Button @click="logout">logout</Button>
                        </MenuItem>
                     
                    </div>
                </Menu>
            </Header>


            <Layout :style="{padding: '0 10px'}">
                <Breadcrumb :style="{margin: '12px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                   <router-view></router-view>
                   
                </Content>
              </Layout>
        


             <Footer class="layout-footer-center">2019 设计基础模板 base</Footer>
       
       </Layout>
   </div>
</template>

<script>
	export default {
		name:'home',
    data:function(){
      return {
             activename:"1",
      }
    },
	
        methods:{
        	logout:function(){
             this.$cookies.remove('sessionid');
        		this.$router.replace('login')
        	}
        },
        created:function(){
              console.log(this.activename);
              console.log(this.$route.path)
              if (this.$route.path == '/home/submenu'){
                     this.activename = "1";
              }else if (this.$route.path == '/home/fixedMenu'){
                    this.activename = "2";
              }
        }
    
	}
</script>
