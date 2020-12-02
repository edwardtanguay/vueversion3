const app = new Vue({
	el: '#app',
	components: {
		'flashcard-component': flashcardComponent
	},
	data: {
		message: 'hello'
	},
	methods: {
		initialize() {
			setTimeout(() => {
				this.message = 'changed';
			}, 2000);
		}
	}
});
app.initialize();
