
<!-- 精灵分组 -->
<template>
<div>
    <div id="canvas5" />
    <button @click="moveSprite">moveSprite</button>
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
      logo: null,
      pkq: null,
      hunter: null,
      container: null,
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
      .add('pkq', require('../assets/image/pkq.png'))
      .add('hunter', require('../assets/image/hunter.png'))
      .load((loaderRe, resources) => {
        this.logo = new PIXI.Sprite(resources.logo.texture);
        this.logo.x = 0;
        this.logo.y = 0;
        this.pkq = new PIXI.Sprite(resources.pkq.texture);
        this.pkq.x = 50;
        this.pkq.y = 50;
        this.hunter = new PIXI.Sprite(resources.hunter.texture);
        this.hunter.x = 100;
        this.hunter.y = 100;

        // 创建容器
        this.container = new PIXI.Container();
        this.container.addChild(this.logo);
        this.container.addChild(this.pkq);
        this.container.addChild(this.hunter);

        this.App.stage.addChild(this.container);
      });
  },

  methods: {
    moveSprite() {
      this.container.x = 90;
      this.container.y = 90;
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
