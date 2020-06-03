<template>
  <div id="wrapper" class="tinypng">
  <el-form :inline="true" :model="formInline" class="form-inline">
    <el-form-item label="API KEY:">
      <el-input
        style="width: 500px;"
        v-model="formInline.tinifyKey"
        clearable
        placeholder="请输入TinyPNG API KEY">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">更新</el-button>
    </el-form-item>
  </el-form>
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
          accept=".jpg,.jpeg,.png"
          drag
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop your .png or .jpg files here!</div>
        </el-upload>
        <ul class="upload-files">
          <li v-for="(item, index) in uploadFiles" :key="index" @click="openFolder(item)">
            {{ item.name }}
            <span v-if="item.status === 0">
              Compressing...<i class="el-icon-loading"></i>
            </span>
            <span v-else-if="item.status === 2" class="error">
              error <i class="el-icon-error"></i>
            </span>
            <span v-else class="success">Finished
              <!-- <i class="el-icon-success"></i> -->
              <i class="el-icon-folder-opened" title="打开文件夹"></i>
              </span>
          </li>
        </ul>
        <!-- <el-button
          v-if="uploadFiles.length"
          type="primary"
          @click="openFileHandler">
          打开转换目录
        </el-button> -->
      </section>
    </section>
  </div>
</template>

<script>
// import fs from 'fs'
// import path from 'path'
import tinify from 'tinify'

export default {
  data () {
    return {
      currDir: global.__static,
      formInline: {
        tinifyKey: localStorage.getItem('tinifyKey')
      },
      uploadFiles: []
    }
  },
  created () {
    this.$notify.info({
      title: '提醒',
      message: '请登录TinyPNG查看 APK KEY.'
    })
  },
  methods: {
    openFolder (item) {
      const { shell } = require('electron').remote
      shell.showItemInFolder(item.path)
    },
    onSubmit () {
      localStorage.setItem('tinifyKey', this.formInline.tinifyKey)
      this.$message({
        message: 'API KEY 设置成功。',
        type: 'success'
      })
    },
    rest () {
      window.location.reload()
    },
    openFileHandler () {
      const { shell } = require('electron').remote
      const resPath = this.currDir
      shell.showItemInFolder(resPath)
    },
    beforeUpload (file) {
      if (!this.formInline.tinifyKey) return alert('请先设置API key')
      this.uploadFiles.push({
        name: file.name,
        path: file.path.replace(file.name, ''),
        status: 0
      })
    },
    tinyUpload (obj) {
      if (!this.formInline.tinifyKey) return
      tinify.key = this.formInline.tinifyKey // 设置你的api_key
      const { file } = obj
      const source = tinify.fromFile(file.path)
      const resPath = `${file.path.replace(file.name, '')}/tinypng_${file.name}`
      source.toFile(resPath, (err) => {
        if (err) {
          this.uploadFiles.map(item => {
            if (item.name === file.name) {
              item.status = 2
            }
            return item
          })
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
  .form-inline {
    position: relative;
    z-index: 9999;
  }
  section.upload {
    height: 100%;
    padding-top: 0;
  }
  .target {
    padding: 0 !important;
    border: none !important;
  }
  .tiny-upload {
    width: 100% !important;
    height: 100% !important;
    margin-bottom: 20px;
    .el-upload {
      width: 100% !important;
      height: 100% !important;
      margin-bottom: 20px;
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
  .action-bar {
    margin-bottom: 20px;
  }
  .upload-files {
    margin-top: 20px;
    margin-bottom: 40px;
    list-style: none;
    height: 400px;
    overflow: auto;
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
      .error {
        color: #f56c6c;
      }
      .success {
        color: #92ed14;
      }
    }
  }
  .reset-btn {
    margin-right: 20px;
  }
}
</style>
