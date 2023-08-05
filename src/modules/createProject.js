export default class Project{
    constructor(title){
        this.title = title;
        this.myTodos = [];
    }
    addItem(item){
        this.myTodos.push(item);
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    deleteItem(item){
        const index = this.myTodos.indexOf(item);
        this.myTodos.splice(index, 1);
    }

    getLength(){
        return this.myTodos.length
    }
}