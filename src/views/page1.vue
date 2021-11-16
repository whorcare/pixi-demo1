
<!-- sprites（精灵）与stage（舞台） -->
<template>
  <div id="canvas2" />
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

  computed: {},

  mounted() {
    this.App = new PIXI.Application({
      width: 375,
      height: 667,
      transparent: true, // 设置舞台透明度
    });
    document.getElementById('canvas2').appendChild(this.App.view);

    // 这里就是我的舞台
    console.log(this.App.stage, '我的舞台');

    // 创建我的精灵
    const sprite = PIXI.Sprite.from(require('../assets/image/logo.png'));

    // 一些常见的属性
    sprite.width = 200;
    sprite.height = 200;
    sprite.x = 20;
    sprite.y = 20;
    sprite.alpha = 0.9;
    sprite.visible = true;

    this.App.stage.addChild(sprite);
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
