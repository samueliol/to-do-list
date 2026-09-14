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

function createList(listName, itemsArr){
    myLists[listName] = itemsArr
    return myLists
}


function addItem(itemObj, arr){
    arr.push(itemObj)
}

let myLists = {}
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

console.log(myLists)

