import ViIcon from './vi-icon'
import Vue from 'vue'
import ViButton from './ViButton'
////
const Components = {
	ViButton,
	ViIcon
}

Vue.component('vi-button', ViButton)
Vue.component('vi-icon', ViIcon)

export default Components
