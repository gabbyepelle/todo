export default function todoConverter(item){
    return {
        "title": item.title,
        "description": item.description,
        "dueDate": item.dueDate,
        "priority": item.priority,
        "project": item.project.title
    }
}