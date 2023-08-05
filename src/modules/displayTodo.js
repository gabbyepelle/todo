import clearPage from "./clearPage";
import displayProject from "./displayProject";
import currentProject from "./currentProject";


export default function displayTodo(item){
    const editContainer = document.querySelector('.edit-form-container');
    const content =  document.querySelector('#content');
    const listItem = document.createElement('div');
    listItem.classList.add('todo');
    const title = document.createElement('p');
    title.innerHTML = `${item.title}`;
    const dueDate = document.createElement('p');
    dueDate.innerHTML = `${item.dueDate}`;
    const des = document.createElement('p');
    des.innerHTML = `${item.description}`;
    if(item.priority === 'high'){
        listItem.classList.add('high');
    }else if(item.priority === 'medium'){
        listItem.classList.add('medium');
    }else{
        listItem.classList.add('low');
    }
    const delButton = document.createElement('button');
    delButton.innerHTML='🗑️';
    delButton.setAttribute("class", "todoBtn");
    const editButton = document.createElement('button');
    editButton.setAttribute("class", "todoBtn");
    editButton.innerHTML = '📝';
    listItem.appendChild(title);
    listItem.appendChild(dueDate);
    listItem.appendChild(des);
    listItem.appendChild(delButton);
    listItem.appendChild(editButton);
    delButton.addEventListener("click", ()=>{
                item.project.deleteItem(item);
                //find and delete item in localStorage
                const storage = JSON.parse(localStorage.getItem("myProjects"));
                for(let s of storage.projectList){
                    for(let i of s.myTodos){
                        if(i.title === item.title){
                            s.myTodos.splice(s.myTodos.indexOf(i), 1)
                            console.log(i);
            }
        }
    }
                localStorage.setItem("myProjects", JSON.stringify(storage));
                clearPage(content);
                const proj = displayProject(item.project);
                content.appendChild(proj);
            })
    editButton.addEventListener('click',()=>{
        editContainer.classList.toggle('hidden');
        currentProject.editItem = item;
        console.log(currentProject.editItem);
        document.querySelector('#editTitle').setAttribute('value', `${item.title}`);
        document.querySelector('#editDate').setAttribute('value', `${item.dueDate}`);
        document.querySelector('#editDescription').value = `${item.description}`;
        const priority = document.getElementsByName('editPriority');
        for(let p of priority){
            if(p.value === `${item.priority}`){
                p.checked = true;
            }
        }
    })

    return listItem
}