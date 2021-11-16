
<!-- 操控精灵 -->
<template>
<div>
    <div id="canvas5" />
    <button @click="moveSprite">向左下移动</button>
    <button @click="sizeSprite">改变大小</button>
    <button @click="scaleSprite">缩放</button>
    <button @click="rotationSprite">旋转</button>
    <button @click="rotationCenterSprite">中心旋转</button>
</div>

</template>

<script>
/* eslint-disable global-require */
// eslint-disable-next-line import/no-unresolved
import * as PIXI from 'pixi.js';

export default {
  data() {
    return {
      App: null,
      sprite: null,
    };
  },

  mounted() {
    this.App = new PIXI.Application({
      width: 375,
      height: 667,
      transparent: true, // 设置舞台透明度
    });
    document.getElementById('canvas5').appendChild(this.App.view);

    const loader = PIXI.Loader.shared;

    loader
      .add('logo', require('../assets/image/logo.png'))
      .load((loaderRe, resources) => {
        this.sprite = new PIXI.Sprite(resources.logo.texture);
        this.App.stage.addChild(this.sprite);
      });
  },

  methods: {
    moveSprite() {
      this.sprite.x = 90;
      this.sprite.y = 90;
    },
    sizeSprite() {
      this.sprite.width = 375;
      this.sprite.height = 90;
    },
    scaleSprite() {
      this.sprite.scale.x = 0.5;
      this.sprite.scale.y = 0.5;
    },
    rotationSprite() {
      this.sprite.rotation = 0.5;
    },
    rotationCenterSprite() {
      this.sprite.anchor.x = 0.5;
      this.sprite.anchor.y = 0.5;
    },
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
