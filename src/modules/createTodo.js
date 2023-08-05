export default class Todo{
    constructor(title, description="", dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDescription(newDescription){
        this.description = newDescription;
    }

    setDueDate(newDueDate){
        this.dueDate = newDueDate;
    }

    setPriority(newPriority){
        this.priority = newPriority;
    }
}
