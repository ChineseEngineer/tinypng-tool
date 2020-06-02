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
          drag
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </section>
    </section>
  </div>
</template>

<script>
// import fs from 'fs'
import path from 'path'
import tinify from 'tinify'
export default {
  data () {
    return {
      uploadFiles: [],
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
      console.log(`upload.......${file.path} ==== ${file.name}`)
      const source = tinify.fromFile(file.path)
      const optimized = path.join(__dirname, '../assets/optimized')
      source.toFile(`${optimized}/${file.name}`, function () {
        console.log(`${optimized}/${file.name}`)
        console.log('process:::::::::::::::::::completed')
      })
      // fs.readFile(path, function (err, sourceData) {
      //   if (err) { throw err }
      //   tinify.fromBuffer(sourceData).toBuffer(function (err, resultData) {
      //     if (err) { throw err }
      //     console.log(resultData)
      //   })
      // })
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
}
</style>
