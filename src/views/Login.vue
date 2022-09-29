<template>
    <div class="box">
       <div class="login">
           <h2>系统登录</h2>
 <el-form ref="loginForm" :model="loginForm">
  <el-form-item>
    <el-input v-model="loginForm.username"></el-input>
  </el-form-item>
    <el-form-item>
    <el-input v-model="loginForm.password"></el-input>
  </el-form-item>
    <el-form-item>
    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:250px"></el-input>
    <img :src="imgSrcUrl" alt="" @click="onImg">
  </el-form-item>
    <el-form-item>
    <el-button type="primary" style="width:48%" @click="onSubmit">登录</el-button>
    <el-button style="width:48%">重置</el-button>
  </el-form-item>
</el-form>
       </div>
    </div>
</template>

<script>
import { getImage } from "../request/login";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code:''
      },
      imgSrcUrl: "",
      setState: ""
    };
  },
  methods: {
   async onSubmit() {
        console.log(123);
      let token = await this.$store.dispatch('getUserToken',this.loginForm)
      if (token) this.$router.push('/')
    },
    onImg() {
        this.getImg()
    },
    getImg() {
      getImage().then(res => {
        this.imgSrcUrl = window.URL.createObjectURL(res.data);
      });
    }
  },
  created() {
    this.getImg()
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .login {
    width: 400px;
    height: 300px;
    margin: 200px auto;
    overflow: hidden;
    padding: 40px;
    box-shadow: 0 0 8px #cccccc;
    border-radius: 10px;
    h2 {
      text-align: center;
      margin: 15px 0;
    }
  }
}
img {
  width: 120px;
  height: 40px;
  vertical-align: middle;
}
</style>

