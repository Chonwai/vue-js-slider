import VueSliderComponent from './VueSliderComponent.vue';

const componentName = "VueSlider";

const Plugin = {
    install(Vue) {
        this.event = new Vue();

        Vue.prototype.$VueSlider = {

        }
        Vue.component(componentName, VueSliderComponent);
    }
}

export default Plugin;