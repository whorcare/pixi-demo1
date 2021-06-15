<template>
    <div class="page1">
        <div class="page1" ref="page1"></div>
        <div class="button" @click="goNext">下一页</div>
    </div>
</template>

<script>
import Matter from 'matter-js';

export default {
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    goNext() {
      this.$router.push({ name: 'page3' });
    },
    init() {
      const { Engine } = Matter;//引擎.引擎模块包含创建和操作引擎的方法
      const { Render } = Matter;//基于HTML5画布的渲染器
      const { World } = Matter;//演出舞台. Matter.js 中任何的物体都需要一个舞台/容器，而存放这些物体的地方，则称之为World(世界)
      const { Bodies } = Matter;//用于创建各种形状的物体，物体必须添加到Wolrd中，然后由引擎运行世界
      const { MouseConstraint, Composites } = Matter; // 鼠标

      const engine = Engine.create();
      const { world } = engine;
      //render(渲染器)将要渲染的物理引擎是上面的engine，而渲染的对象是html网页的body
      const render = Render.create({
        element: this.$refs.page1,
        engine,
        options: {
          width: 375,
          height: 812,
          fillStyle: '#edeeeb',
          background: '#edeeeb', // 全局渲染模式时背景色
          wireframeBackground: '#222', // 线框模式时背景色
          wireframes: false,
        },
      });

      /**
     * Bodies.rectangle = function(x, y, width, height, options)
     * x,y 分别表示矩形中心点的坐标，坐标的原点(0,0)在 Canvas(画布)的左上角
     * width,height 分别表示矩形的宽和高
     * options：描述矩形的参数，是一个 json 对象
     * @type {body}
     */
      const boxA = Bodies.rectangle(200, 0, 80, 80);
      const boxB = Bodies.rectangle(450, 100, 80, 80);
      const circle = Bodies.circle(300, 100, 25, {
        render: {
          fillStyle: '#f0c',
        },
      }); // 圆
      const circle2 = Bodies.circle(300, 100, 25, {
      }); // 圆
      const circle3 = Bodies.circle(100, 100, 25, {
      }); // 圆
      const circle4 = Bodies.circle(300, 100, 25, {
      }); // 圆
      const circle5 = Bodies.circle(300, 100, 25, {
      }); // 圆
      World.add(engine.world, [boxA, boxB, circle, circle3, circle2, circle4, circle5]);// 将所有物体添加到世界中
      Engine.run(engine);//运行引擎
      Render.run(render);//运行渲染器


      setInterval(() => {
        const circle10 = Bodies.circle(Math.floor((Math.random() * 300) + 1), 0, 25, {
        });
        World.add(engine.world, [circle10]);
      }, 2000);
      const mouseConstraint = MouseConstraint.create(engine, {});

      //第一个物体中心在（100,100）坐标处，创造出的球形共6列10行，
      //行间隙和列间隙都为2，球半径为22，为了隐藏这些球，
      //将particleOptions参数的render属性的visible属性设为false。
      //将collisionFilter属性的group属性设为-1，
      //可以避免这些球之间相互碰撞。
      //constraintOptions属性传入空对象，设为默认。
      const cloth = Composites.softBody(100, 100, 6, 10, 2, 2, false, 22, {
        render: {
          visible: false,
        },
        collisionFilter: {
          group: -1,
        },
      }, {});
      //将最上方的6个球固定。
      for (let i = 0; i < 6; i++) {
        cloth.bodies[i].isStatic = true;
      }
      const ground = Bodies.rectangle(400, 710, 810, 4, {
        isStatic: true,
        render: {
          fillStyle: '#999',
        },
      });

      World.add(world, [ground, cloth, mouseConstraint]);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/style/config.scss";

.page1 {
    width: 750px;
    height: 100%;
    background: rgb(237, 238, 235);
    position: relative;
}

.button {
    position: fixed;
    width: 100%;
    bottom: 30px;
    height: 60px;
    text-align: center;
}
</style>
