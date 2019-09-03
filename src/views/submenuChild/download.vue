<template>
    <div>
        <card>
            <p>下载原理:通过windows.location.href链接下载地址</p>
            <p>下载原理:向后端传输时间和文件名</p>
            <p>即可下载</p>
        </card>
        <Divider>以下是示例</Divider>
        <Button @click="downloadFile(1,2)">下载</Button>
    </div>
</template>
<script>
export default {
       methods :{

          downloadFile:function(thisDate,thisName){
          //注意中文在此会自动编码不需要转码了
          window.location.href ='http://12.12.12.12:8001/reconcile/download_file/?thisDate='
            + thisDate + '&thisName='+thisName

        },

       }
       }
</script>