<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/style/base.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.6;
}

body, #app, html {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
