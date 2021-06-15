<template>
    <div class="page1">
        <div
            class="page1"
            ref="page1"
            id="sky"
        ></div>
        <div
            class="button"
            @click="goNext"
        >下一页</div>
        <div id="vs">vs</div>
        <div id="fs">fs</div>
    </div>
</template>

<script>
// const THREE = require('../common/three.js');
// import THREE from 'three';
// const THREE = require('three');

export default {
  /* eslint-disable no-undef */
  created() {},
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      geometry: null,
      material: null,
      mouseX: 0,
      mouseY: 0,
      start_time: Date.now(),
      windowHalfX: window.innerWidth / 2,
      windowHalfY: 700 / 2,
    };
  },
  mounted() {
    // this.init2();
  },
  methods: {
    goNext() {
      this.$router.push({ name: 'page4' });
    },
    init() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.page1.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      /* eslint-disable func-names */
      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    },
    init2() {
      console.log(new THREE.Geometry());
      const container = document.createElement('div');
      document.getElementById('sky').appendChild(container);
      // Bg gradient
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 700;
      const context = canvas.getContext('2d');
      const gradient = context.createLinearGradient(
        0,
        0,
        0,
        canvas.height,
      );
      gradient.addColorStop(0, '#1e4877');
      gradient.addColorStop(0.5, '#4584b4');
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      container.style.background = `url(${canvas.toDataURL(
        'image/png',
      )})`;
      container.style.backgroundSize = '32px 100%';
      container.style.height = '700px';
      this.camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / 700,
        1,
        3000,
      );
      this.camera.position.z = 6000;
      this.scene = new THREE.Scene();
      this.geometry = new THREE.Geometry();
      const texture = THREE.ImageUtils.loadTexture(
        'img/cloud10.png',
        null,
        this.animate,
      );
      texture.magFilter = THREE.LinearMipMapLinearFilter;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      const fog = new THREE.Fog(0x4584b4, -100, 3000);
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          map: { type: 't', value: texture },
          fogColor: { type: 'c', value: fog.color },
          fogNear: { type: 'f', value: fog.near },
          fogFar: { type: 'f', value: fog.far },
        },
        vertexShader: document.getElementById('vs').textContent,
        fragmentShader: document.getElementById('fs').textContent,
        depthWrite: false,
        depthTest: false,
        transparent: true,
      });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(64, 64));
      for (let i = 0; i < 8000; i++) {
        plane.position.x = Math.random() * 1000 - 500;
        plane.position.y = -Math.random() * Math.random() * 200 - 15;
        plane.position.z = i;
        plane.rotation.z = Math.random() * Math.PI;
        // eslint-disable-next-line no-multi-assign
        plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
        THREE.GeometryUtils.merge(this.geometry, plane);
      }
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.mesh);
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.position.z = -8000;
      this.scene.add(this.mesh);
      this.renderer = new THREE.WebGLRenderer({ antialias: false });
      this.renderer.setSize(window.innerWidth, 700);
      container.appendChild(this.renderer.domElement);
      document.addEventListener('mousemove', this.onDocumentMouseMove, false);
      window.addEventListener('resize', this.onWindowResize, false);
    },
    onDocumentMouseMove(event) {
      this.mouseX = (event.clientX - this.windowHalfX) * 0.25;
      this.mouseY = (event.clientY - this.windowHalfY) * 0.15;
    },

    onWindowResize() {
      this.camera.aspect = window.innerWidth / 700;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, 700);
    },

    animate() {
      requestAnimationFrame();
      this.position = ((Date.now() - this.start_time) * 0.03) % 8000;
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.01;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.01;
      this.camera.position.z = -this.position + 8000;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
<style lang="scss">
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
