import Vue from 'vue'
import App from './App.vue'
import VueSliderComponent from '../Project/index';

Vue.use(VueSliderComponent);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')