
<!-- 加载器与纹理 -->
<template>
<div>
    <div id="canvas5" />
    <button @click="run">run</button>
</div>

</template>

<script>
/* eslint-disable global-require */
// eslint-disable-next-line import/no-unresolved
import * as PIXI from 'pixi.js';
import Bump from '../common/bump';

export default {
  data() {
    return {
      App: null,
      pkq: null,
      hunter: null,
      Bump: null,
    };
  },

  mounted() {
    this.Bump = new Bump(PIXI);
    this.App = new PIXI.Application({
      width: 375,
      height: 667,
      autoDensity: true,
      antialias: true,
      transparent: true, // 设置舞台透明度
    });
    document.getElementById('canvas5').appendChild(this.App.view);

    const loader = PIXI.Loader.shared;

    loader
      .add('pkq', require('../assets/image/pkq.png'))
      .add('hunter', require('../assets/image/hunter.png'))
      .load((loaderRe, resources) => {
        this.hunter = new PIXI.Sprite(resources.hunter.texture);
        this.pkq = new PIXI.Sprite(resources.pkq.texture);

        this.pkq.width = 100;
        this.pkq.height = 100;
        this.pkq.x = 0;
        this.pkq.y = 0;
        this.hunter.width = 100;
        this.hunter.height = 100;
        this.hunter.x = 200;
        this.hunter.y = 200;

        this.App.stage.addChild(this.hunter);
        this.App.stage.addChild(this.pkq);
      });
  },

  methods: {
    run() {
      const ticker = PIXI.Ticker.shared;
      ticker.add(() => {
        if (this.Bump.hitTestRectangle(this.pkq, this.hunter)) {
          console.log('撞击了');
        } else {
          this.pkq.x += 2;
          this.pkq.y += 2;
        }
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
