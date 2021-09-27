<template>
	<div class="todo-main">
		<p class="heading">Todo</p>
		<div class="inputdiv">
			<input
				type="text"
				class="todo-input"
				placeholder="Enter your Data"
				v-model="newTodo"
				@keyup.enter="addTodo"
			/>
		</div>
		<div class="list">
			<div v-for="(todo, index) in todos" :key="todo" class="todo-item">
				<div class="todo-item-left">
					<div
						v-if="!todo.editing"
						@dblclick="editTodo(todo)"
						class="todo-item-text"
					>
						{{ todo.title }}
					</div>
					<input
						v-else
						class="todo-item-text todo-item-edit"
						type="text"
						name=""
						id=""
						v-model="todo.title"
						@blur="doneEdit"
						@keyup.enter="doneEdit(todo)"
					/>
				</div>
				<button class="remove-item" @click="removeTodo(index)">
					×
				</button>
			</div>
		</div>
		<div class="footer">
			<p class="footertext">You have {{ todos.length }} tasks.</p>
			<button class="clear-all-button" @click="clearAll()">Clear all</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "todo-list",
	data() {
		return {
			newTodo: "",
			idforTodo: 3,
			todos: [
				{
					id: 1,
					title: "C++",
					completed: false,
					editing: false,
				},
				{
					id: 2,
					title: "HTML",
					completed: false,
					editing: false,
				},
			],
		};
	},
	methods: {
		addTodo() {
			if (this.newTodo.trim().length == 0) {
				return;
			}
			this.todos.push({
				id: this.idforTodo,
				title: this.newTodo,
				completed: false,
			});
			this.newTodo = "";
			this.idforTodo++;
		},
		removeTodo(index) {
			this.todos.splice(index, 1);
		},
		editTodo(todo) {
			todo.editing = true;
		},
		doneEdit(todo) {
			todo.editing = false;
		},
		clearAll() {
			this.todos = [];
		},
	},
};
</script>

<style>
html {
	width: 100%;
	height: 100%;
}

body {
	width: 99%;
	height: 98%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fa8bff;
	background-image: linear-gradient(
		45deg,
		#fa8bff 0%,
		#2bd2ff 52%,
		#2bff88 90%
	);
}

.todo-main {
	display: flex;
	padding: 20px;
	border-radius: 10px;
	background-color: white;
	box-shadow: 0 0 50px 0 black;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 500px;
	height: 70%;
	margin: 50px;
}

.heading {
	font-size: 32px;
	font-weight: bold;
	margin: 0;
	width: fit-content;
}

.inputdiv {
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
	background-color: #fa8bff;
	background-image: linear-gradient(
		45deg,
		#fa8bff 0%,
		#2bd2ff 52%,
		#2bff88 90%
	);
	border-radius: 8px;
	padding: 3px;
}

.todo-input {
	background: #f5f5f5;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: 18px;
	border: 0;
	border-radius: 7px;
	width: 100%;
	box-sizing: border-box;
}

*:focus {
	outline: none;
}

.list {
	width: 100%;
	flex: 1;
	overflow-y: scroll;
}

.list::-webkit-scrollbar {
	opacity: 0;
	background: transparent;
	width: 8px;
}

.list::-webkit-scrollbar {
	opacity: 1;
}

.list::-webkit-scrollbar-track {
	background: transparent;
	border-radius: 5px;
}

.list::-webkit-scrollbar-thumb {
	background-color: #21d4fd;
	background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
	border-radius: 5px;
	box-shadow: 2px 2px 5px 0 #00000055;
}

.footer {
	margin-top: 10px;
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.footertext {
	font-weight: bold;
	color: #555555;
	flex: 1;
	margin: 0;
}

.clear-all-button {
	border: 0;
	border-radius: 7px;
	padding: 10px 20px;
	background-color: #21d4fd;
	background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
	height: fit-content;
	color: white;
	font-weight: bold;
}

.todo-item {
	display: flex;
	flex-direction: row;
	background: #dddddd;
	border-radius: 8px;
	margin: 10px 0;
	align-items: center;
	justify-content: space-between;
}

.todo-item:hover {
	background: #eeeeee;
}

.todo-item-text {
	border: 0;
	flex: 1;
	margin: 0 10px;
}

.todo-item-edit {
	border-radius: 5px;
	padding: 5px 10px;
}

.remove-item {
	width: 30px;
	height: 30px;
	color: #fff;
	border-radius: 5px;
	font-size: 24px;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffe53b;
	background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
	box-sizing: border-box;
	margin: 5px;
	border: 0;
}

.remove-item:hover {
	background-color: #fad961;
	background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
}

/* .remove-item {
	display: inline-block;
	content: "\00d7";
	background-color: #ffe53b;
	background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
	font-family: Arial, Helvetica, sans-serif;
	font-size: 24;
	color: white;
} */
</style>
