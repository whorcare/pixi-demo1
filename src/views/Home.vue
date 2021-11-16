<!-- 创建pixi -->
<template>
  <div style="background: #f1d5d5">
    <div id="canvas1" />
    <canvas id="nowCanvas"></canvas>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import * as PIXI from 'pixi.js';

export default {
  data() {
    return {
    };
  },

  computed: {},

  mounted() {
    const app = new PIXI.Application({ width: 256, height: 256 });
    document.getElementById('canvas1').appendChild(app.view);

    console.log(app);

    this.init2();
  },

  methods: {
    init2() {
      const view = document.getElementById('nowCanvas');
      const app = new PIXI.Application({
        width: 256, // 宽度
        height: 256, // 高度
        view, // canvas dom实体
        transparent: true, // default: false 透明度
        backgroundColor: 0xfffff, // 背景色
        autoDensity: true, // 以 CSS 像素调整渲染器视图的大小，以允许使用 1 以外的分辨率。
        antialias: true, // default: false 反锯齿 这个让页面文字图案变得更平滑
        /**
         * 因为WebGL非常快，所以Pixi的renderer对象将默认为WebGL。如果您想使用canvas绘图API，可以将forceCanvas选项设置为true，如下所示：
         */
        forceCanvas: false, // 是否启用基础的canvas 而不使用webgl
      });
      console.log(app);
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
