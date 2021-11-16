
<!-- AnimatedSprite 动画精灵 -->
<template>
<div>
    <div id="canvas4" />
    <button @click="gotoAndPlay">gotoAndPlay</button>
    <button @click="gotoAndStop">gotoAndStop</button>
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
      Player: null,
    };
  },

  mounted() {
    this.App = new PIXI.Application({
      width: 375,
      height: 667,
      transparent: true, // 设置舞台透明度
    });
    document.getElementById('canvas4').appendChild(this.App.view);

    const file = 'https://qiniustatic.wodidashi.com//basketball/spint/redshot.json';

    const loader = PIXI.Loader.shared;

    loader
      .add(file)
      .load((loaderRe, resources) => {
        console.log(loaderRe, resources);
        const sheet = loader.resources[file].spritesheet;
        this.Player = new PIXI.AnimatedSprite(sheet.animations.animation5);
        this.Player.animationSpeed = 0.8; // 播放速度
        this.Player.loop = true; // 是否循环
        this.App.stage.addChild(this.Player);

        this.onFrameChange();
      });
  },

  methods: {
    // 播放 AnimatedSprite 并转到特定帧
    gotoAndPlay() {
      this.Player.gotoAndPlay(1);
    },
    // 停止 AnimatedSprite 并转到特定帧
    gotoAndStop() {
      this.Player.gotoAndStop(1);
    },
    // onFrameChange AnimatedSprite 变化时触发
    onFrameChange() {
      this.Player.onFrameChange = (number) => {
        // 实时打印多少帧
        console.log(number);
      };
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
