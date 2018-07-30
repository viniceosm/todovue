Vue.use(VueMask.VueMaskPlugin);

var demo = new Vue({
	el: '#app',
	data: {
		todoText: '',
		filterText: '',
		todos: [
			{ text: 'Drink water', id: 0 },
			{ text: 'Listen to podcast', id: 1 },
			{ text: 'Build something!', id: 2 }
		],
		rdTypeFilter: 'any'
	},
	methods: {
		add() {
			if (this.todoText.trim() !== '') {
				this.todos.push({
					text: this.todoText,
					id: new Date().valueOf()
				});
				this.todoText = ''
			}
		},
		deleteTodo(index) {
			this.todos.splice(index, 1);
		},
		deleteAll() {
			this.todos = []
		}
	},

	computed: {
		filteredTodo() {
			var self = this;
			return this.todos.filter(function (item) {
				return item.text.toLowerCase().indexOf(self.filterText.toLowerCase()) > -1;
			});
		},
		typeFilter() {
			return this.rdTypeFilter;
		}
	}
});