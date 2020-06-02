<template>
  <div id="wrapper" class="tinypng">
    <section class="upload">
      <figure class="cloud-one"></figure>
      <figure class="cloud-two"></figure>
      <figure class="bamboo"></figure>
      <figure class="panda"></figure>
      <figure class="grass"></figure>
      <section class="target">
        <el-button type="primary">开始压缩</el-button>
        <el-upload
          class="tiny-upload"
          action=""
          :http-request="tinyUpload"
          :before-upload="beforeUpload"
          :show-file-list="false"
          drag
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <ul class="upload-files">
          <li v-for="(item, index) in uploadFiles" :key="index">
            {{ item.name }}
            <span v-if="!item.status" v-loading="!item.status"></span>
            <span v-else>压缩完成<i class="el-icon-success"></i></span>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
// import fs from 'fs'
import path from 'path'
import tinify from 'tinify'
tinify.key = 'xScMlb6Fh0lRx66VHsMQHm8rY8b170RW' // 设置你的api_key

export default {
  data () {
    return {
      uploadFiles: [{
        name: 'aaaaaaaa.jpg',
        status: 0
      }],
      fileList: []
    }
  },
  methods: {
    beforeUpload (file) {
      this.uploadFiles.push({
        name: file.name,
        path: file.path,
        status: 0
      })
    },
    tinyUpload (obj) {
      const { file } = obj
      const source = tinify.fromFile(file.path)
      const resPath = path.resolve(__dirname, `../assets/optimized/${file.name}`)
      console.log(resPath)
      source.toFile(resPath, function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('process:::::::::::::::::::completed')
      })
    }
  }
}
</script>

<style lang="scss">
@import url("../assets/css/tinypng-main.css");
#wrapper {
  background: linear-gradient(to bottom, #c6dde4, #fefeff);
  height: 100vh;
  padding: 60px 80px 0;
  width: 100vw;
  overflow: hidden;
}

.tinypng {
  section.upload {
    height: 100%;
  }
  .target {
    padding: 0 !important;
    border: none !important;
  }
  .tiny-upload {
    width: 100% !important;
    height: 100% !important;
    .el-upload {
      width: 100% !important;
      height: 100% !important;
      .el-upload-dragger {
        width: 100% !important;
        height: 100% !important;
        border-width: 3px;
        background: transparent;
      }
    }
    
  }
  .upload-files {
    margin-top: 40px;
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      background: #ffffff;
      padding: 10px;
      border: 1px solid lightcoral;
      border-radius: 4px;
    }
  }
}
</style>
