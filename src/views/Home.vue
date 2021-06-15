<template>
    <div class="home" @click.stop="canvasTranstion">
        <div
            class="f-fcc f-prafll _23qNjYCS"
            @click="goNext"
        >
            <div class="_3VBMOwlt">进入</div>
            <div class="_2oBBbcbu">第一个demo</div>
        </div>
        <canvas
            id="canvas"
            class="canvas-class"
            :width="canvasWidth"
            :height="canvasHeight"
        ></canvas>
    </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      move: 900, // 初始值
      bezierX1: 650, // 贝塞尔x值
      bezierX2: 650, // 贝塞尔x值
      canvasWidth: 750, // canvas宽度
      canvasHeight: 1334, // canvas高度
    };
  },
  methods: {
    goNext() {
      this.$router.push({ name: 'page1' });
    },

    canvasTranstion() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      this.runAnimate(ctx);
    },

    runAnimate(ctx) {
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      ctx.beginPath();
      ctx.moveTo(this.canvasWidth + 250, 0);
      ctx.lineTo(this.move, 0);
      ctx.bezierCurveTo(this.bezierX1, 500, this.bezierX2, 900, this.move, 1334);
      ctx.lineTo(this.canvasWidth + 250, this.canvasHeight);
      ctx.closePath();
      ctx.fillStyle = 'rgb(237, 238, 235)';
      ctx.strokeStyle = 'rgb(237, 238, 235)';
      ctx.stroke();
      ctx.fill();

      this.move -= 5;

      if (this.move === 50) {
        this.bezierXFlag = true;
        this.bezierX1 = 0;
        this.bezierX2 = 0;
      }

      if (!this.bezierXFlag) {
        this.bezierX1 -= 4;
        this.bezierX2 -= 4;
      } else if (this.move < -20) {
        this.bezierX1 -= 6;
        this.bezierX2 -= 6;
        this.goNext();
      } else {
        this.bezierX1 += 6;
        this.bezierX2 += 6;
      }

      if (this.move < -100) {
        return;
      }
      setTimeout(() => {
        this.runAnimate(ctx);
      }, 4);
    },
  },
};
</script>
<style lang="scss">
@import "../assets/style/config.scss";

body,
#app,
html {
    width: 100%;
    height: 100%;
}

.home {
    width: 750px;
    height: 100vh;
    background: url('../assets/image/bg1.jpg');
    background-size: 100% 100%;
    position: relative;
    background-color: #f1f1f1;
    display: flex!important;
}

._23qNjYCS {
    // position: absolute;
    margin: auto;
    bottom: 1rem;
    width: 5.77rem;
    height: 5.77rem;
    display: flex!important;
    display: inline-block;
    background-image: url('../assets/image/loading.96b03f2.svg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    color: #191b18;
    flex-direction: column;
    justify-content: center;
}

._23qNjYCS ._3VBMOwlt {
    font-size: .62rem;
    margin-left: .05rem;
    letter-spacing: .05rem;
    text-align: center;
}

._23qNjYCS ._2oBBbcbu {
    font-size: .26rem;
    opacity: .4;
    text-align: center;
}


.canvas-class {
    width: 750px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
