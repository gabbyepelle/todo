import currentProject from "./currentProject";
import displayTodo from "./displayTodo";
import clearPage from "./clearPage";



export default function displayProject(project){
    console.log(`current: ${currentProject.curr}`)
    const projectDiv = document.createElement('div');
    projectDiv. setAttribute('id','projectDiv');
    const h2 = document.createElement('h2')
    h2.innerHTML = `${project.title}`;
    projectDiv.appendChild(h2);
    if(project.myTodos.length > 0){
        for(let i of project.myTodos){
            const todoItem = displayTodo(i);
            projectDiv.appendChild(todoItem); 
        }
    }else{
        const msg = document.createElement('p');
        msg.innerHTML = 'No Tasks';
        projectDiv.appendChild(msg);
    }
    // const deleteProject = document.querySelector('#deleteProject');
    // const renameProject = document.querySelector('#renameProject');
    
    if(project.title!=="Inbox"){
        const del = document.createElement('button');
        del.classList.add('deleteProject');
        del.innerHTML="Delete Project";
        projectDiv.appendChild(del);
        del.addEventListener('click', ()=>{
   
        const list = document.querySelector('#project-list');
        const storage = JSON.parse(localStorage.getItem("myProjects"));
    
        currentProject.folder.deleteProject(currentProject.curr);
        //delete project in localStorage
       
        for(let s of storage.projectList){
            if(s.title === currentProject.curr.title){
                //console.log(s);
                storage.projectList.splice(storage.projectList.indexOf(s), 1)
            }
        }
        //console.log(storage.projectList);
        localStorage.setItem("myProjects", JSON.stringify(storage));
        clearPage(content);
       //set current project to inbox
        currentProject.curr = currentProject.folder.getProject("Inbox")
        const proj = displayProject(currentProject.curr);
        content.appendChild(proj);
        clearPage(list);
        for(let p of currentProject.folder.projectList){
            const btn = populateSidebar(p);
            const li = document.createElement('li');
            list.appendChild(li);
            li.appendChild(btn);
    }
    

})
    const rename = document.createElement('button');
    rename.classList.add('renameProject');
    rename.innerHTML="Rename Project";
    projectDiv.appendChild(rename);
    rename.addEventListener('click', ()=>{
    const renameContainer = document.querySelector('.rename-container');
    renameContainer.classList.toggle('hidden');
})

        
        
    }
   
    
   
    
    

    return projectDiv;
    
}

