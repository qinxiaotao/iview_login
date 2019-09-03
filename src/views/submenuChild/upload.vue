<template>
    <div>

        <Card>
               <p>
                   with-credentials：此prop允许携带cookies,那么则可携带
                   session_id,以在服务器端验证是否已经登录
               </p>
               <p>
                   headers:携带csrf，在post中都需要携带csrf以防止跨域提交
               </p>
               <p>
                   on-success:上传成功后执行的程序
               </p>
        </Card>
        <Divider>最基本用法，点击上传，一次选择一个文件</Divider>
        <Upload action="/upload_file/"
                :with-credentials="status"
                :headers="csrfHead"
                :on-success="uploadSuccess">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
    </div>
</template>
<script>
    export default {
    data:function(){
        return {
            status: true,//携带cookie
            csrfHead: {'X-CSRFToken': this.$cookies.get('csrftoken')},
            picData:''
        }
    },

    methods:{
        //上传成功调用的函数
        uploadSuccess:function(res,file,filelist){
             let datas = []
            filelist.forEach((x)=>{
                datas.push(x.name)
            })
            this.picData = [ ...new Set(datas)].join(',');
            //返回所有上传的文件名称

        },
    }
}
</script>