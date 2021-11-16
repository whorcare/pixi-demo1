
<!-- 加载器与纹理 -->
<template>
  <div id="canvas3" />
</template>

<script>
/* eslint-disable global-require */
// eslint-disable-next-line import/no-unresolved
import * as PIXI from 'pixi.js';

export default {
  data() {
    return {
      App: null,
    };
  },

  mounted() {
    this.App = new PIXI.Application({
      width: 375,
      height: 667,
      transparent: true, // 设置舞台透明度
    });
    document.getElementById('canvas3').appendChild(this.App.view);

    const loader = PIXI.Loader.shared;

    loader
      .add('bg1', require('../assets/image/bg1.png'))
      .add('logo', require('../assets/image/logo.png'))
      .load((loaderRe, resources) => {
        console.log('资源加载成功');
        console.log(loaderRe, resources);
        const sprite = new PIXI.Sprite(resources.bg1.texture);
        this.App.stage.addChild(sprite);
      });
  },

  methods: {
  },
};

</script>
<style lang='scss' scoped>
#canvas {
    position: relative;
    width: 100%;
    height: 100%;
}

canvas {
    width: 100%;
    height: 100%;
}
</style>
