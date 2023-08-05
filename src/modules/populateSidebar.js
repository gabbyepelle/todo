import displayProject from "./displayProject";
import clearPage from "./clearPage"
import currentProject from "./currentProject";

export default function populateSidebar(project){
    //create button
    const btn = document.createElement('button');
    btn.innerHTML =  `${project.title}`;
    btn.dataset.name = `${project.title}`;
    btn.setAttribute('id', `${project.title}`);
    btn.classList.add('proj-title');
   const content =  document.querySelector('#content');
 // an event listener that clears the page and loads the project in MAIN
 btn.addEventListener('click', ()=>{
    clearPage(content);
    const proj = displayProject(project);
    currentProject.curr = project;
    //console.log(currentProject.curr);
    content.appendChild(proj);
 })
 return btn
}