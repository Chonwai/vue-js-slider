<template>
  <div id="app">
    <VueSlider :imgWidth="280" :imgHeight="360" :windowSize="4" title="Title 1" :slideImgs="imgs" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      imgs: [
        "https://media.wmagazine.com/photos/5cd33aa1c61fc00ebc7a9d5a/4:3/w_1536/Screen%2520Shot%25202019-05-08%2520at%25204.18.42%2520PM.png",
        "https://cdn.vox-cdn.com/thumbor/81dix4pSzNqGq5Lq0PYmALAtWPc=/0x0:1920x803/1200x800/filters:focal(1140x0:1446x306)/cdn.vox-cdn.com/uploads/chorus_image/image/62934392/detective_pikachu_trailer_25_1920.0.jpg",
        "https://img.youtube.com/vi/1roy4o4tqQM/maxresdefault.jpg",
        "https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/05/aneesh-arts-main-render-image-01-00000-a48a.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1",
        "https://i.ytimg.com/vi/Svil34VCuoE/maxresdefault.jpg",
        "https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2019%2F05%2Fpokemon-go-detective-pikachu-additional-content-news-1.jpg?q=75&w=800&cbr=1&fit=max",
        "https://s5.cdn.memeburn.com/wp-content/uploads/2019/05/1-34-1024x576.jpg"
      ]
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
