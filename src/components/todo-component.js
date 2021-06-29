export class TodoComponent {
    todo = '';

    todos = [
        { text: 'Build something with Aurelia 2' },
        { text: 'Buy milk' },
        { text: 'Joes birthday present for this Saturday' },
        { text: 'Take out the garbage' }
    ];

    newTodo() {
        this.todos.push({ text: this.todo });
        this.todo = '';
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}