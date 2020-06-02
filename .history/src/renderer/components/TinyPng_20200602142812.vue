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
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
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
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/css/tinypng-main.css");
#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
  overflow: hidden;
}

.tinypng {
  .tiny-upload {
    width: 100%;
    height: 100%;
  }
}
</style>
