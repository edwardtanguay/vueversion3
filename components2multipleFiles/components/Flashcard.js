const flashcardComponent = {
	data: function () {
		return {
			front: 'house',
			back: 'Haus'
		}
	},
	props: ['front', 'back'],
	template: '<div><div>{{front}} / {{back}}</div></div>'
};
