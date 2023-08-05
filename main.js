/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createTodo */ \"./src/modules/createTodo.js\");\n/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createProject */ \"./src/modules/createProject.js\");\n/* harmony import */ var _modules_displayProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayProject */ \"./src/modules/displayProject.js\");\n/* harmony import */ var _modules_clearPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearPage */ \"./src/modules/clearPage.js\");\n/* harmony import */ var _modules_displayTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/displayTodo */ \"./src/modules/displayTodo.js\");\n/* harmony import */ var _modules_populateSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/populateSidebar */ \"./src/modules/populateSidebar.js\");\n/* harmony import */ var _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/currentProject */ \"./src/modules/currentProject.js\");\n/* harmony import */ var _modules_userProjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/userProjects */ \"./src/modules/userProjects.js\");\n/* harmony import */ var _modules_converter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/converter */ \"./src/modules/converter.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\nconst add = document.querySelector('#add');\nconst addProject = document.querySelector('#add-project');\nconst formContainer = document.querySelector('.form-container');\nconst projFormContainer = document.querySelector('.project-form-container');\nconst closeTodo = document.querySelector('#close-todo');\nconst closeProj = document.querySelector('#close-project');\nconst closeRename = document.querySelector('#close-rename');\nconst renameForm = document.querySelector('#rename-form');\n\n\n\n\nconst projForm = document.querySelector('#project-form');\nconst projTitle = document.querySelector('#proj-title');\nconst addTodo = document.querySelector('#addTodo');\n\nconst today = document.querySelector('#today');\nconst upcoming = document.querySelector('#upcoming');\nconst closeEdit = document.querySelector('#close-edit');\nconst editTodo = document.querySelector('#editTodo');\nconst hamburger = document.querySelector('#hamburger');\n\nconst Folder = new _modules_userProjects__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].folder=Folder;\n\nif(!localStorage.getItem(\"myProjects\")){\n    const Inbox = new _modules_createProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Inbox\");\n    Folder.addProject(Inbox);\n    localStorage.setItem(\"myProjects\", JSON.stringify(Folder));\n    const proj = (0,_modules_displayProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Inbox);\n    content.appendChild(proj)\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr = Inbox;\n}else{\n    //retrieve data from localStorage\n    const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n    for(let p of storage.projectList){\n       let project = new _modules_createProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](p.title);\n       Folder.addProject(project);\n\n       //populate project\n       for(let item of p.myTodos){\n            let task = new _modules_createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item.title, item.description, item.dueDate, item.priority, project);\n            project.addItem(task);\n       }\n\n        //populate sidebar\n        const btn = (0,_modules_populateSidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(project);\n        const list = document.querySelector('#project-list');\n        const li = document.createElement('li');\n        list.appendChild(li);\n        li.appendChild(btn);\n    }\n   \n    const proj = (0,_modules_displayProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Folder.getProject(\"Inbox\"));\n    content.appendChild(proj);\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr = Folder.getProject(\"Inbox\");\n    }\n\n    \n\n\n\naddTodo.addEventListener(\"submit\", (e)=>{\n    e.preventDefault();\n    \n    const itemTitle = document.querySelector('#title');\n    const itemDate = document.querySelector('#date');\n    const itemDescription = document.querySelector('#description');\n    let itemPriority = document.getElementsByName('priority');\n    let title = itemTitle.value;\n    let dueDate = itemDate.value;\n    let description = itemDescription.value;\n    let priority;\n    for(let p of itemPriority){\n        if(p.checked){\n            priority = p.value;\n        }\n    }\n\n    let newTask = new _modules_createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority,_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr);\n\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr.addItem(newTask); //add item to whatever project the user has selected\n    \n     //add item to localStorage\n    const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n    for(let s of storage.projectList){\n        if(s.title === _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr.title){\n            s.myTodos.push((0,_modules_converter__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(newTask));\n        }\n    }\n   \n    localStorage.setItem(\"myProjects\", JSON.stringify(storage));\n    itemTitle.value = \"\";\n    itemDate.value = \"\";\n    itemDescription.value= \"\";\n    itemPriority.value=\"low\";\n    formContainer.classList.toggle('hidden');\n    (0,_modules_clearPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n    const proj = (0,_modules_displayProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr);\n    content.appendChild(proj);\n})\n\ntoday.addEventListener('click', ()=>{\n    \n    const h2 = document.createElement('h2');\n    h2.innerHTML = \"Today's Tasks\";\n    const tasks = Folder.filterToday();\n    (0,_modules_clearPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n    content.appendChild(h2);\n    if(tasks.length === 0){\n        const p = document.createElement('p');\n        p.innerHTML = 'No tasks for today'\n        content.appendChild(p)\n    }else{\n        for(let task of tasks){\n            let i = (0,_modules_displayTodo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(task);\n            content.appendChild(i);\n        }\n    }\n    \n})\n\nupcoming.addEventListener('click', ()=>{\n    const h2 = document.createElement('h2');\n    h2.innerHTML = \"Upcoming Tasks\";\n    const tasks = Folder.filterUpcoming();\n    (0,_modules_clearPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n    content.appendChild(h2);\n    if(tasks.length === 0){\n        const p = document.createElement('p');\n        p.innerHTML = 'No upcoming tasks';\n        content.appendChild(p)\n    }else{\n        for(let task of tasks){\n            let i = (0,_modules_displayTodo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(task);\n            content.appendChild(i);\n        }\n    }\n})\n\nadd.addEventListener('click', ()=>{\n    formContainer.classList.toggle('hidden');\n})\n\ncloseTodo.addEventListener('click', ()=>{\n    formContainer.classList.toggle('hidden');\n})\n\naddProject.addEventListener('click', ()=>{\n    projFormContainer.classList.toggle('hidden');\n})\n\ncloseProj.addEventListener('click', ()=>{\n    projFormContainer.classList.toggle('hidden');\n})\n\nprojForm.addEventListener('submit', (e)=>{\n    e.preventDefault();\n    projFormContainer.classList.toggle('hidden');\n    let title = projTitle.value;\n    let newProject = new _modules_createProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title);\n    Folder.addProject(newProject);\n    const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n    storage.projectList.push(newProject);\n    localStorage.setItem(\"myProjects\", JSON.stringify(storage));\n    const btn = (0,_modules_populateSidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(newProject);\n    const list = document.querySelector('#project-list');\n    const li = document.createElement('li');\n    list.appendChild(li);\n    li.appendChild(btn);\n    projTitle.value = \"\";\n})\n\ncloseEdit.addEventListener('click', ()=>{\n    const editContainer = document.querySelector('.edit-form-container');\n    editContainer.classList.toggle('hidden');\n\n})\n\neditTodo.addEventListener(\"submit\", (e)=>{\n    e.preventDefault();\n    console.log(_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr.title);\n    //find editItem in localStorage and delete it\n    const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n    for(let s of storage.projectList){\n        for(let i of s.myTodos){\n            if(i.title === _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].editItem.title){\n                s.myTodos.splice(s.myTodos.indexOf(i), 1)\n            }\n        }\n    }\n\n    const editContainer = document.querySelector('.edit-form-container');\n    const newTitle = document.querySelector('#editTitle').value;\n    const newDate = document.querySelector('#editDate').value;\n    const newDescription = document.querySelector('#editDescription').value;\n    const newPriority = document.getElementsByName('editPriority');\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].editItem.setTitle(newTitle);\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].editItem.setDescription(newDescription);\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].editItem.setDueDate(newDate);\n    let priority;\n    for(let p of newPriority){\n        if(p.checked){\n            priority = p.value;\n        }\n    }\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].editItem.setPriority(priority);\n    //add edited todo to localStorage\n    \n    for(let s of storage.projectList){\n        if(s.title === _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].editItem.project.title){\n            s.myTodos.push((0,_modules_converter__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].editItem));\n        }\n    }\n\n    localStorage.setItem(\"myProjects\", JSON.stringify(storage));\n    editContainer.classList.toggle('hidden');\n    (0,_modules_clearPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n    //console.log(currentProject.curr);\n    const proj = (0,_modules_displayProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr);\n    content.appendChild(proj);\n})\n\nhamburger.addEventListener('click', ()=>{\nconst sidebar = document.querySelector('#sidebar');\nsidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';\n})\n\n\n\n// delProject.addEventListener('click', ()=>{\n//     if(currentProject.curr.title!==Inbox){\n//         const list = document.querySelector('#project-list');\n//         const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n//     if(currentProject.curr.title!==\"Inbox\"){\n//         Folder.deleteProject(currentProject.curr);\n//         //delete project in localStorage\n       \n//         for(let s of storage.projectList){\n//             if(s.title === currentProject.curr.title){\n//                 //console.log(s);\n//                 storage.projectList.splice(storage.projectList.indexOf(s), 1)\n//             }\n//         }\n//         //console.log(storage.projectList);\n//         localStorage.setItem(\"myProjects\", JSON.stringify(storage));\n//         clearPage(content);\n//        //set current project to inbox\n//         currentProject.curr = Folder.getProject(\"Inbox\")\n//         const proj = displayProject(currentProject.curr);\n//         content.appendChild(proj);\n//         clearPage(list);\n//         for(let p of Folder.projectList){\n//             const btn = populateSidebar(p);\n//             const li = document.createElement('li');\n//             list.appendChild(li);\n//             li.appendChild(btn);\n//     }\n//     }\n// }\n// })\n\n// renameProject.addEventListener('click', ()=>{\n//     const renameContainer = document.querySelector('.rename-container');\n//     renameContainer.classList.toggle('hidden');\n\n// })\n\ncloseRename.addEventListener('click', ()=>{\n    const renameContainer = document.querySelector('.rename-container');\n    renameContainer.classList.toggle('hidden');\n})\n\nrenameForm.addEventListener('submit', (e)=>{\n    e.preventDefault();\n    const list = document.querySelector('#project-list');\n    const renameContainer = document.querySelector('.rename-container');\n    const newTitle = document.querySelector('#rename-title').value;\n    const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n    for(let s of storage.projectList){\n        if(s.title === _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr.title){\n            storage.projectList.splice(storage.projectList.indexOf(s), 1);\n        }\n    }\n    //update title \n    for(let p of Folder.projectList){\n        if(p.title===_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].title){\n            Folder.projectList.splice(Folder.projectList.indexOf(p), 1, _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr.setTitle(newTitle))\n        }\n    }\n    console.log(Folder.projectList);\n    _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr.setTitle(newTitle);\n\n    (0,_modules_clearPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(list);\n        for(let p of Folder.projectList){\n            const btn = (0,_modules_populateSidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(p);\n            const li = document.createElement('li');\n            list.appendChild(li);\n            li.appendChild(btn);\n    }\n    const update = _modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr;\n    for(let i of update.myTodos){\n        update.myTodos.splice(update.myTodos.indexOf(i), 1, (0,_modules_converter__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(i));\n    }\n    storage.projectList.push(update);\n    localStorage.setItem(\"myProjects\", JSON.stringify(storage));\n    (0,_modules_clearPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n    const proj = (0,_modules_displayProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_currentProject__WEBPACK_IMPORTED_MODULE_6__[\"default\"].curr);\n    content.appendChild(proj);\n    renameContainer.classList.toggle('hidden');\n    \n    \n\n\n})\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/clearPage.js":
/*!**********************************!*\
  !*** ./src/modules/clearPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearPage)\n/* harmony export */ });\nfunction clearPage(parent){\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\n//# sourceURL=webpack://todo/./src/modules/clearPage.js?");

/***/ }),

/***/ "./src/modules/converter.js":
/*!**********************************!*\
  !*** ./src/modules/converter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoConverter)\n/* harmony export */ });\nfunction todoConverter(item){\n    return {\n        \"title\": item.title,\n        \"description\": item.description,\n        \"dueDate\": item.dueDate,\n        \"priority\": item.priority,\n        \"project\": item.project.title\n    }\n}\n\n//# sourceURL=webpack://todo/./src/modules/converter.js?");

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\n    constructor(title){\n        this.title = title;\n        this.myTodos = [];\n    }\n    addItem(item){\n        this.myTodos.push(item);\n    }\n\n    setTitle(newTitle){\n        this.title = newTitle;\n    }\n\n    deleteItem(item){\n        const index = this.myTodos.indexOf(item);\n        this.myTodos.splice(index, 1);\n    }\n\n    getLength(){\n        return this.myTodos.length\n    }\n}\n\n//# sourceURL=webpack://todo/./src/modules/createProject.js?");

/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor(title, description=\"\", dueDate, priority, project){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.project = project;\n    }\n\n    setTitle(newTitle){\n        this.title = newTitle;\n    }\n\n    setDescription(newDescription){\n        this.description = newDescription;\n    }\n\n    setDueDate(newDueDate){\n        this.dueDate = newDueDate;\n    }\n\n    setPriority(newPriority){\n        this.priority = newPriority;\n    }\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/createTodo.js?");

/***/ }),

/***/ "./src/modules/currentProject.js":
/*!***************************************!*\
  !*** ./src/modules/currentProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst currentProject = {\n    curr: \"\",\n    editItem: \"\",\n    folder:\"\"\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentProject);\n\n//# sourceURL=webpack://todo/./src/modules/currentProject.js?");

/***/ }),

/***/ "./src/modules/displayProject.js":
/*!***************************************!*\
  !*** ./src/modules/displayProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentProject */ \"./src/modules/currentProject.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo */ \"./src/modules/displayTodo.js\");\n/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearPage */ \"./src/modules/clearPage.js\");\n\n\n\n\n\n\nfunction displayProject(project){\n    console.log(`current: ${_currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].curr}`)\n    const projectDiv = document.createElement('div');\n    projectDiv. setAttribute('id','projectDiv');\n    const h2 = document.createElement('h2')\n    h2.innerHTML = `${project.title}`;\n    projectDiv.appendChild(h2);\n    if(project.myTodos.length > 0){\n        for(let i of project.myTodos){\n            const todoItem = (0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i);\n            projectDiv.appendChild(todoItem); \n        }\n    }else{\n        const msg = document.createElement('p');\n        msg.innerHTML = 'No Tasks';\n        projectDiv.appendChild(msg);\n    }\n    // const deleteProject = document.querySelector('#deleteProject');\n    // const renameProject = document.querySelector('#renameProject');\n    \n    if(project.title!==\"Inbox\"){\n        const del = document.createElement('button');\n        del.classList.add('deleteProject');\n        del.innerHTML=\"Delete Project\";\n        projectDiv.appendChild(del);\n        del.addEventListener('click', ()=>{\n   \n        const list = document.querySelector('#project-list');\n        const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n    \n        _currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].folder.deleteProject(_currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].curr);\n        //delete project in localStorage\n       \n        for(let s of storage.projectList){\n            if(s.title === _currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].curr.title){\n                //console.log(s);\n                storage.projectList.splice(storage.projectList.indexOf(s), 1)\n            }\n        }\n        //console.log(storage.projectList);\n        localStorage.setItem(\"myProjects\", JSON.stringify(storage));\n        (0,_clearPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n       //set current project to inbox\n        _currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].curr = _currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].folder.getProject(\"Inbox\")\n        const proj = displayProject(_currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].curr);\n        content.appendChild(proj);\n        (0,_clearPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list);\n        for(let p of _currentProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].folder.projectList){\n            const btn = populateSidebar(p);\n            const li = document.createElement('li');\n            list.appendChild(li);\n            li.appendChild(btn);\n    }\n    \n\n})\n    const rename = document.createElement('button');\n    rename.classList.add('renameProject');\n    rename.innerHTML=\"Rename Project\";\n    projectDiv.appendChild(rename);\n    rename.addEventListener('click', ()=>{\n    const renameContainer = document.querySelector('.rename-container');\n    renameContainer.classList.toggle('hidden');\n})\n\n        \n        \n    }\n   \n    \n   \n    \n    \n\n    return projectDiv;\n    \n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/displayProject.js?");

/***/ }),

/***/ "./src/modules/displayTodo.js":
/*!************************************!*\
  !*** ./src/modules/displayTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayTodo)\n/* harmony export */ });\n/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPage */ \"./src/modules/clearPage.js\");\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ \"./src/modules/displayProject.js\");\n/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentProject */ \"./src/modules/currentProject.js\");\n\n\n\n\n\nfunction displayTodo(item){\n    const editContainer = document.querySelector('.edit-form-container');\n    const content =  document.querySelector('#content');\n    const listItem = document.createElement('div');\n    listItem.classList.add('todo');\n    const title = document.createElement('p');\n    title.innerHTML = `${item.title}`;\n    const dueDate = document.createElement('p');\n    dueDate.innerHTML = `${item.dueDate}`;\n    const des = document.createElement('p');\n    des.innerHTML = `${item.description}`;\n    if(item.priority === 'high'){\n        listItem.classList.add('high');\n    }else if(item.priority === 'medium'){\n        listItem.classList.add('medium');\n    }else{\n        listItem.classList.add('low');\n    }\n    const delButton = document.createElement('button');\n    delButton.innerHTML='🗑️';\n    delButton.setAttribute(\"class\", \"todoBtn\");\n    const editButton = document.createElement('button');\n    editButton.setAttribute(\"class\", \"todoBtn\");\n    editButton.innerHTML = '📝';\n    listItem.appendChild(title);\n    listItem.appendChild(dueDate);\n    listItem.appendChild(des);\n    listItem.appendChild(delButton);\n    listItem.appendChild(editButton);\n    delButton.addEventListener(\"click\", ()=>{\n                item.project.deleteItem(item);\n                //find and delete item in localStorage\n                const storage = JSON.parse(localStorage.getItem(\"myProjects\"));\n                for(let s of storage.projectList){\n                    for(let i of s.myTodos){\n                        if(i.title === item.title){\n                            s.myTodos.splice(s.myTodos.indexOf(i), 1)\n                            console.log(i);\n            }\n        }\n    }\n                localStorage.setItem(\"myProjects\", JSON.stringify(storage));\n                (0,_clearPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n                const proj = (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.project);\n                content.appendChild(proj);\n            })\n    editButton.addEventListener('click',()=>{\n        editContainer.classList.toggle('hidden');\n        _currentProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"].editItem = item;\n        console.log(_currentProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"].editItem);\n        document.querySelector('#editTitle').setAttribute('value', `${item.title}`);\n        document.querySelector('#editDate').setAttribute('value', `${item.dueDate}`);\n        document.querySelector('#editDescription').value = `${item.description}`;\n        const priority = document.getElementsByName('editPriority');\n        for(let p of priority){\n            if(p.value === `${item.priority}`){\n                p.checked = true;\n            }\n        }\n    })\n\n    return listItem\n}\n\n//# sourceURL=webpack://todo/./src/modules/displayTodo.js?");

/***/ }),

/***/ "./src/modules/populateSidebar.js":
/*!****************************************!*\
  !*** ./src/modules/populateSidebar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateSidebar)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/modules/displayProject.js\");\n/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearPage */ \"./src/modules/clearPage.js\");\n/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentProject */ \"./src/modules/currentProject.js\");\n\n\n\n\nfunction populateSidebar(project){\n    //create button\n    const btn = document.createElement('button');\n    btn.innerHTML =  `${project.title}`;\n    btn.dataset.name = `${project.title}`;\n    btn.setAttribute('id', `${project.title}`);\n    btn.classList.add('proj-title');\n   const content =  document.querySelector('#content');\n // an event listener that clears the page and loads the project in MAIN\n btn.addEventListener('click', ()=>{\n    (0,_clearPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n    const proj = (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project);\n    _currentProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"].curr = project;\n    //console.log(currentProject.curr);\n    content.appendChild(proj);\n })\n return btn\n}\n\n//# sourceURL=webpack://todo/./src/modules/populateSidebar.js?");

/***/ }),

/***/ "./src/modules/userProjects.js":
/*!*************************************!*\
  !*** ./src/modules/userProjects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserProject)\n/* harmony export */ });\nclass UserProject{\n    constructor(){\n        this.projectList = [];\n    }\n    addProject(item){\n        this.projectList.push(item);\n    }\n    filterToday(){\n        let todaysTasks = []\n        let currDate = new Date().toJSON().slice(0, 10);\n            for(let project of this.projectList){\n                for(let item of project.myTodos){\n                    if(item.dueDate === currDate) {\n                        // Date equals today's date\n                        todaysTasks.push(item)\n                    }\n                }\n            }\n            return todaysTasks\n        }\n    \n    filterUpcoming(){\n        let upcoming = []\n        let currDate = new Date().toJSON().slice(0, 10);\n        for(let project of this.projectList){\n            for(let item of project.myTodos){\n                if(item.dueDate !== currDate) {\n                    upcoming.push(item)\n                }\n            }\n        }\n        return upcoming\n\n    }\n    deleteProject(project){\n        const index = this.projectList.indexOf(project);\n        this.projectList.splice(index, 1);\n    }\n\n    getProject(project){\n        for(let p of this.projectList){\n            if(p.title === project){\n                return p\n            }\n        }\n    }\n\n}\n\n//# sourceURL=webpack://todo/./src/modules/userProjects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;