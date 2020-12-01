const app = Vue.createApp({
	data() {
		return {
			message: ''
		}
	},
	methods: {
		initialize() {
			this.message = 'original value';
		},
		changeTheText() {
			this.message = 'you clicked the button';
		}
	}
})
const vm = app.mount('#app');
vm.initialize();

app.component("product", {
	template: `
		<div class="product">This is the product.</div>	
	`,
	data() {
		return {
			
		}
	},
	methods: {},
	computed: {}
})		