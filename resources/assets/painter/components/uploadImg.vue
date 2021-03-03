<template>
    <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :data='uploadData'
        name='files[]'
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <i class="icon-jiahao_1 iconfont"></i>
    </el-upload>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "uploadImg",
  components: {},
  props: {
    num: {
      type: Number,
      default:0
    },
  },
  mounted(){
    this.uploadData._token = this.configData['_token']
  },
  data() {
    return {
      uploadData:{'_token':'',source:''},
    };
  },
  computed: {
    ...mapState({
      configData: state => state.configData
    }),
    uploadUrl() {
      return this.configData.apiUrl + "/upload/server";
    }
  },
  methods: {
    handleAvatarSuccess(res) {
      let file = res.info[0]
      this.$emit('successFun', {file:file,num:this.num})
    },
    beforeAvatarUpload(file) {
      const isPNG = file.type === "image/png";
      const isJPG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const imgType = !isJPG && !isPNG && !isGIF;
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (imgType) {
        this.$message.error("上传头像图片只能是JPG，PNG，GIF 格式!");
      }
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
      return !imgType && isLt5M;
    }
  }
};
</script>

<style lang="scss">
.avatar-uploader .el-upload {
  width: 100px;
  height:100px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  .iconfont{
    display: none;
  }
}
.icon-jiahao_1{
    color: #eee;
    font-size: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
</style>
