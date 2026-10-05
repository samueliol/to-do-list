// CRIAR TASK
function createItem(title, description, dueDate, priority, notes, check){
    return{
        title,
        description,
        dueDate,
        priority,
        notes,
        check

    }

}
// ADICIONAR TEMAS ARRAY A LISTA DE TEMAS OBJETO
function createList(listName, itemsArr){
    myLists[listName] = itemsArr
    return myLists
}

// ADICIONAR TASK OBJ AO TEMA ARRAY
function addItem(itemObj, arr){
    arr.push(itemObj)
}
// LISTA DE TEMAS PARA ADICIONAR TASKS
let myLists = {}

// TEMA PARA ADICIONAR TASK
let studyArr = []
let todayArr = []



let itemCss = createItem("study css","read freecodecamp and pratice with vs code","17/08/2026","high","i might have watch videos too", false )

let itemJs = createItem("study JS", "do odin project exercises", "14/08/2026", "medium", "", false)

addItem(itemCss,studyArr)
addItem(itemJs,studyArr)

let itemGym = createItem("go to gym","make a 2h exercise","","medium","", false )
let itemClean = createItem("clean the house", "", "", "low", "", false)

addItem(itemGym,todayArr)
addItem(itemClean,todayArr)

createList("Study", studyArr)
createList("To do Today", todayArr)

//------------------------------------------------------------

let addingListBtn = document.querySelector("#addList")
let myListsContainer = document.querySelector(".lists-content")
let listContentItens = document.querySelector("#listContentItens")

let idNum = 0
function addingList(listName){

   let listNameContainer = document.createElement("div")
   listNameContainer.id = "listName" + idNum
   idNum++
   let para = document.createElement("p")
   para.textContent = listName
   listNameContainer.appendChild(para)
   listContentItens.appendChild(listNameContainer)
   myListsContainer.appendChild(listContentItens)
}
let toggle = true
let inputBtnContainer = document.createElement("div")
addingListBtn.addEventListener("click", () =>{


    if (toggle){
        toggle = false
        let input = document.createElement("input")
        let btn = document.createElement("button")
        let h2 = document.querySelector("#myListTitle")
        btn.textContent = "Submit"
        inputBtnContainer.append(input, btn)
        h2.after(inputBtnContainer)
        btn.addEventListener('click', ()=>{
            addingList(input.value)
            input.value = ""
    })}
    else{
        toggle = true
        inputBtnContainer.innerHTML = ""
        
    }

})

let backlogContainer = document.querySelector(".itens-content")
let innerBacklogContainer = document.createElement("div")
innerBacklogContainer.className = "inner-itens-content"

listContentItens.addEventListener('click', (e)=>{
    console.log(e)
    if (e.target.localName === "p"){
        innerBacklogContainer.innerHTML = ""
        let h3 = document.createElement("h3")
        h3.textContent = e.target.innerText
        console.log(h3, e.target.innerText)
        innerBacklogContainer.appendChild(h3)
        // addTodoForm()
        backlogContainer.appendChild(innerBacklogContainer)
    }
    // for (let item of listContentItens){
    // console.log(item)}
})

function addTodoForm(){
    let title = document.createElement("input")
    title.type = "txt"
    let description = document.createElement("input")
    description.type = "txt"    
    let dueDate = document.createElement("input")
    dueDate.type = "txt"
    let priority = document.createElement("input")
    priority.type = "radio"
    let notes = document.createElement("input")
    notes.type = "txt"
    let check = document.createElement("input")
    check.type = "checkbox"

    backlogContainer.append(title, description, dueDate, priority, notes, check)
}


console.log(myLists)

let taskInput = document.querySelector("#titleTask")
let taskBtn = document.querySelector("#addTaskBtn")

taskBtn.addEventListener('click',(e)=>{
    console.log("teste")
    
})