
<!-- 游戏循环 -->
<template>
<div>
    <div id="canvas10" />
    <button @click="run">run</button>
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
      autoDensity: true,
      antialias: true,
      transparent: true, // 设置舞台透明度
    });
    document.getElementById('canvas10').appendChild(this.App.view);

    const loader = PIXI.Loader.shared;

    loader
      .add('logo', require('../assets/image/logo.png'))
      .load((loaderRe, resources) => {
        this.sprite = new PIXI.Sprite(resources.logo.texture);
        this.App.stage.addChild(this.sprite);
      });

    // this.initTicker();
  },

  methods: {
    initTicker() {
      const ticker = PIXI.Ticker.shared;
      ticker.add((delta) => {
        console.log(delta);
        // delta = (当前帧的时间 - 上一帧的时间) 帧时间间隔
      });
    },
    run() {
      const ticker = PIXI.Ticker.shared;
      ticker.add(() => {
        this.sprite.y += 10;
      });
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
