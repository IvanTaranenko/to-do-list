import component from "lodash/core";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faPlusSquare ,faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//
// library.add(faPlusSquare,faTrash)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

window.Vue = require('vue').default;
import {createApp} from "vue";
const app = createApp({});

component.forEach(component => {
    app.component(component.name, component)
})
app.component('app', require('./vue/app').default);
app.mount('#app')

