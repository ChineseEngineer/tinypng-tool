<template>
  <div id="wrapper" class="tinypng">
    <section class="upload">
      <figure class="cloud-one"></figure>
      <figure class="cloud-two"></figure>
      <figure class="bamboo"></figure>
      <figure class="panda"></figure>
      <figure class="grass"></figure>
      <section class="target">
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
          <div class="el-upload__text">Drop your .png or .jpg files here!</div>
        </el-upload>
        <ul class="upload-files">
          <li v-for="(item, index) in uploadFiles" :key="index">
            {{ item.name }}
            <span v-if="!item.status">
              Compressing...<i class="el-icon-loading"></i>
            </span>
            <span v-else class="success">Finished <i class="el-icon-success"></i></span>
          </li>
        </ul>
        <el-button type="primay" @click="openFileHandler">打开转换目录</el-button>
      </section>
    </section>
  </div>
</template>

<script>
// import fs from 'fs'
import path from 'path'
import tinify from 'tinify'
tinify.key = 'xScMlb6Fh0lRx66VHsMQHm8rY8b170RW' // 设置你的api_key
// const ipcRenderer = require("electron").ipcRenderer

export default {
  data () {
    return {
      uploadFiles: [],
      fileList: []
    }
  },
  methods: {
    openFileHandler () {
      const { shell } = require('electron').remote
      const resPath = path.resolve(__dirname, `../assets/optimized`)
      shell.showItemInFolder(resPath)
    },
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
      source.toFile(resPath, (err) => {
        if (err) {
          return alert(err)
        }
        this.uploadFiles.map(item => {
          if (item.name === file.name) {
            item.status = 1
          }
          return item
        })
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
        .el-upload__text {
          font-size: 36px !important;
          font-weight: bold;
        }
      }
      
    }
    
  }
  .upload-files {
    margin-top: 40px;
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      padding: 10px;
      border: 1px dashed lightcoral;
      border-radius: 4px;
      margin-bottom: 5px;
      span {
        display: flex;
        align-items: center;
        color:darkgreen;
        i {
          margin-left: 5px;
        }
      }
      .success {
        color: #92ed14;
      }
    }
  }
}
</style>
