export default class UserProject{
    constructor(){
        this.projectList = [];
    }
    addProject(item){
        this.projectList.push(item);
    }
    filterToday(){
        let todaysTasks = []
        let currDate = new Date().toJSON().slice(0, 10);
            for(let project of this.projectList){
                for(let item of project.myTodos){
                    if(item.dueDate === currDate) {
                        // Date equals today's date
                        todaysTasks.push(item)
                    }
                }
            }
            return todaysTasks
        }
    
    filterUpcoming(){
        let upcoming = []
        let currDate = new Date().toJSON().slice(0, 10);
        for(let project of this.projectList){
            for(let item of project.myTodos){
                if(item.dueDate !== currDate) {
                    upcoming.push(item)
                }
            }
        }
        return upcoming

    }
    deleteProject(project){
        const index = this.projectList.indexOf(project);
        this.projectList.splice(index, 1);
    }

    getProject(project){
        for(let p of this.projectList){
            if(p.title === project){
                return p
            }
        }
    }

}