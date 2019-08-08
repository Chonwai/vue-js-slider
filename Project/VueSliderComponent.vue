<template>
  <div class="slider-component">
    <h2 class="slider-title">{{title}}</h2>
    <div class="slider-container overflow-hidden flex flex-row">
      <div
        class="slider-imgs overflow-hidden flex flex-row"
        :style="{width: (imgWidth * windowSize) + 'px'}"
      >
        <div class="img-element" v-for="img in slideImgs" :key="img">
          <img
            :style="{width: imgWidth + 'px', height: imgHeight + 'px', transform: 'translateX' + '(' + currentOffset + 'px' + ')', transition: '0.3s'}"
            :src="img"
          />
        </div>
        <button class="left-btn" :style="{width: buttonWidth + 'px', height: buttonHeight + 'px'}" @click="moveSlider(-1)">&#10094;</button>
        <button class="right-btn" :style="{width: buttonWidth + 'px', height: buttonHeight + 'px'}" @click="moveSlider(1)">&#10095;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Plugin from "./index";
export default {
  name: "VueSliderComponent",
  props: {
    title: {
      type: String,
      default: "This is a VueSliderComponent title"
    },
    slideImgs: Array,
    imgWidth: {
      type: Number,
      default: 360
    },
    imgHeight: {
      type: Number,
      default: 480
    },
    windowSize: {
      type: Number,
      default: 3
    },
    buttonWidth: {
      type: Number,
      default: 36
    },
    buttonHeight: {
      type: Number,
      default: 36
    }
  },
  data() {
    return {
      count: 0,
      currentOffset: 0
    };
  },
  methods: {
    moveSlider(direction) {
      if (direction < 0 && this.currentOffset < 0) {
        this.currentOffset = this.currentOffset + this.imgWidth;
      } else if (
        direction > 0 &&
        this.currentOffset > (this.count - this.windowSize) * this.imgWidth * -1
      ) {
        this.currentOffset = this.currentOffset - this.imgWidth;
      }
    }
  },
  created() {
    this.count = this.slideImgs.length;
  },
  mounted() {
    this.count = this.slideImgs.length;
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.slider-container {
  justify-content: center;
}

.slider-imgs {
  position: relative;
  align-items: center;

  button {
    position: absolute;
    border-radius: 100%;
    background-color: white;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-btn {
    left: 0px;
  }

  .right-btn {
    right: 0px;
  }
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-scroll {
  overflow: scroll;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.img-element {
  transition: 0.3s;

  img {
    object-fit: cover;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 6px;
    padding-right: 6px;
  }
}
</style>
