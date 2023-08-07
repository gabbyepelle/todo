import Todo from "./modules/createTodo";
import Project from "./modules/createProject";
import displayProject from "./modules/displayProject";
import clearPage from "./modules/clearPage";
import displayTodo from "./modules/displayTodo";
import populateSidebar from "./modules/populateSidebar";
import currentProject from "./modules/currentProject";
import UserProject from "./modules/userProjects";
import todoConverter from "./modules/converter";


const content = document.querySelector('#content');
const add = document.querySelector('#add');
const addProject = document.querySelector('#add-project');
const formContainer = document.querySelector('.form-container');
const projFormContainer = document.querySelector('.project-form-container');
const closeTodo = document.querySelector('#close-todo');
const closeProj = document.querySelector('#close-project');
const closeRename = document.querySelector('#close-rename');
const renameForm = document.querySelector('#rename-form');




const projForm = document.querySelector('#project-form');
const projTitle = document.querySelector('#proj-title');
const addTodo = document.querySelector('#addTodo');

const today = document.querySelector('#today');
const upcoming = document.querySelector('#upcoming');
const closeEdit = document.querySelector('#close-edit');
const editTodo = document.querySelector('#editTodo');
const hamburger = document.querySelector('#hamburger');

const Folder = new UserProject();
currentProject.folder=Folder;

if(!localStorage.getItem("myProjects")){
    const Inbox = new Project("Inbox");
    Folder.addProject(Inbox);
    localStorage.setItem("myProjects", JSON.stringify(Folder));
    const proj = displayProject(Inbox);
    content.appendChild(proj)
    currentProject.curr = Inbox;
    const btn = populateSidebar(Inbox);
    const list = document.querySelector('#project-list');
    const li = document.createElement('li');
    list.appendChild(li);
    li.appendChild(btn);

}else{
    //retrieve data from localStorage
    const storage = JSON.parse(localStorage.getItem("myProjects"));
    for(let p of storage.projectList){
       let project = new Project(p.title);
       Folder.addProject(project);

       //populate project
       for(let item of p.myTodos){
            let task = new Todo(item.title, item.description, item.dueDate, item.priority, project);
            project.addItem(task);
       }

        //populate sidebar
        const btn = populateSidebar(project);
        const list = document.querySelector('#project-list');
        const li = document.createElement('li');
        list.appendChild(li);
        li.appendChild(btn);
    }
   
    const proj = displayProject(Folder.getProject("Inbox"));
    content.appendChild(proj);
    currentProject.curr = Folder.getProject("Inbox");
    }

    



addTodo.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const itemTitle = document.querySelector('#title');
    const itemDate = document.querySelector('#date');
    const itemDescription = document.querySelector('#description');
    let itemPriority = document.getElementsByName('priority');
    let title = itemTitle.value;
    let dueDate = itemDate.value;
    let description = itemDescription.value;
    let priority;
    for(let p of itemPriority){
        if(p.checked){
            priority = p.value;
        }
    }

    let newTask = new Todo(title, description, dueDate, priority,currentProject.curr);

    currentProject.curr.addItem(newTask); //add item to whatever project the user has selected
    
     //add item to localStorage
    const storage = JSON.parse(localStorage.getItem("myProjects"));
    for(let s of storage.projectList){
        if(s.title === currentProject.curr.title){
            s.myTodos.push(todoConverter(newTask));
        }
    }
   
    localStorage.setItem("myProjects", JSON.stringify(storage));
    itemTitle.value = "";
    itemDate.value = "";
    itemDescription.value= "";
    itemPriority.value="low";
    formContainer.classList.toggle('hidden');
    clearPage(content);
    const proj = displayProject(currentProject.curr);
    content.appendChild(proj);
})

today.addEventListener('click', ()=>{
    
    const h2 = document.createElement('h2');
    h2.innerHTML = "Today's Tasks";
    const tasks = Folder.filterToday();
    clearPage(content);
    content.appendChild(h2);
    if(tasks.length === 0){
        const p = document.createElement('p');
        p.innerHTML = 'No tasks for today'
        content.appendChild(p)
    }else{
        for(let task of tasks){
            let i = displayTodo(task);
            content.appendChild(i);
        }
    }
    
})

upcoming.addEventListener('click', ()=>{
    const h2 = document.createElement('h2');
    h2.innerHTML = "Upcoming Tasks";
    const tasks = Folder.filterUpcoming();
    clearPage(content);
    content.appendChild(h2);
    if(tasks.length === 0){
        const p = document.createElement('p');
        p.innerHTML = 'No upcoming tasks';
        content.appendChild(p)
    }else{
        for(let task of tasks){
            let i = displayTodo(task);
            content.appendChild(i);
        }
    }
})

add.addEventListener('click', ()=>{
    formContainer.classList.toggle('hidden');
})

closeTodo.addEventListener('click', ()=>{
    formContainer.classList.toggle('hidden');
})

addProject.addEventListener('click', ()=>{
    projFormContainer.classList.toggle('hidden');
})

closeProj.addEventListener('click', ()=>{
    projFormContainer.classList.toggle('hidden');
})

projForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    projFormContainer.classList.toggle('hidden');
    let title = projTitle.value;
    let newProject = new Project(title);
    Folder.addProject(newProject);
    const storage = JSON.parse(localStorage.getItem("myProjects"));
    storage.projectList.push(newProject);
    localStorage.setItem("myProjects", JSON.stringify(storage));
    const btn = populateSidebar(newProject);
    const list = document.querySelector('#project-list');
    const li = document.createElement('li');
    list.appendChild(li);
    li.appendChild(btn);
    projTitle.value = "";
})

closeEdit.addEventListener('click', ()=>{
    const editContainer = document.querySelector('.edit-form-container');
    editContainer.classList.toggle('hidden');

})

editTodo.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(currentProject.curr.title);
    //find editItem in localStorage and delete it
    const storage = JSON.parse(localStorage.getItem("myProjects"));
    for(let s of storage.projectList){
        for(let i of s.myTodos){
            if(i.title === currentProject.editItem.title){
                s.myTodos.splice(s.myTodos.indexOf(i), 1)
            }
        }
    }

    const editContainer = document.querySelector('.edit-form-container');
    const newTitle = document.querySelector('#editTitle').value;
    const newDate = document.querySelector('#editDate').value;
    const newDescription = document.querySelector('#editDescription').value;
    const newPriority = document.getElementsByName('editPriority');
    currentProject.editItem.setTitle(newTitle);
    currentProject.editItem.setDescription(newDescription);
    currentProject.editItem.setDueDate(newDate);
    let priority;
    for(let p of newPriority){
        if(p.checked){
            priority = p.value;
        }
    }
    currentProject.editItem.setPriority(priority);
    //add edited todo to localStorage
    
    for(let s of storage.projectList){
        if(s.title === currentProject.editItem.project.title){
            s.myTodos.push(todoConverter(currentProject.editItem));
        }
    }

    localStorage.setItem("myProjects", JSON.stringify(storage));
    editContainer.classList.toggle('hidden');
    clearPage(content);
    //console.log(currentProject.curr);
    const proj = displayProject(currentProject.curr);
    content.appendChild(proj);
})

hamburger.addEventListener('click', ()=>{
const sidebar = document.querySelector('#sidebar');
sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
})



// delProject.addEventListener('click', ()=>{
//     if(currentProject.curr.title!==Inbox){
//         const list = document.querySelector('#project-list');
//         const storage = JSON.parse(localStorage.getItem("myProjects"));
//     if(currentProject.curr.title!=="Inbox"){
//         Folder.deleteProject(currentProject.curr);
//         //delete project in localStorage
       
//         for(let s of storage.projectList){
//             if(s.title === currentProject.curr.title){
//                 //console.log(s);
//                 storage.projectList.splice(storage.projectList.indexOf(s), 1)
//             }
//         }
//         //console.log(storage.projectList);
//         localStorage.setItem("myProjects", JSON.stringify(storage));
//         clearPage(content);
//        //set current project to inbox
//         currentProject.curr = Folder.getProject("Inbox")
//         const proj = displayProject(currentProject.curr);
//         content.appendChild(proj);
//         clearPage(list);
//         for(let p of Folder.projectList){
//             const btn = populateSidebar(p);
//             const li = document.createElement('li');
//             list.appendChild(li);
//             li.appendChild(btn);
//     }
//     }
// }
// })

// renameProject.addEventListener('click', ()=>{
//     const renameContainer = document.querySelector('.rename-container');
//     renameContainer.classList.toggle('hidden');

// })

closeRename.addEventListener('click', ()=>{
    const renameContainer = document.querySelector('.rename-container');
    renameContainer.classList.toggle('hidden');
})

renameForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const list = document.querySelector('#project-list');
    const renameContainer = document.querySelector('.rename-container');
    const newTitle = document.querySelector('#rename-title').value;
    const storage = JSON.parse(localStorage.getItem("myProjects"));
    for(let s of storage.projectList){
        if(s.title === currentProject.curr.title){
            storage.projectList.splice(storage.projectList.indexOf(s), 1);
        }
    }
    //update title 
    for(let p of Folder.projectList){
        if(p.title===currentProject.title){
            Folder.projectList.splice(Folder.projectList.indexOf(p), 1, currentProject.curr.setTitle(newTitle))
        }
    }
    console.log(Folder.projectList);
    currentProject.curr.setTitle(newTitle);

    clearPage(list);
        for(let p of Folder.projectList){
            const btn = populateSidebar(p);
            const li = document.createElement('li');
            list.appendChild(li);
            li.appendChild(btn);
    }
    const update = currentProject.curr;
    for(let i of update.myTodos){
        update.myTodos.splice(update.myTodos.indexOf(i), 1, todoConverter(i));
    }
    storage.projectList.push(update);
    localStorage.setItem("myProjects", JSON.stringify(storage));
    clearPage(content);
    const proj = displayProject(currentProject.curr);
    content.appendChild(proj);
    renameContainer.classList.toggle('hidden');
    
    


})

