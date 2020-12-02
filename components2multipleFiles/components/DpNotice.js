Vue.component('dp-notice', {
	props: ['message'],
	template: '<div>This is the notice: {{message || "(no message)"}}</div>'
});

