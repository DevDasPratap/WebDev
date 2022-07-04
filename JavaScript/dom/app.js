//root
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(document.body.children)
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastChild)
// console.log(document.body.lastElementChild)




//sibling
// console.log(document.body.children[0])
// const ulTag = document.body.children[0]
// console.log(ulTag.nextElementSibling);
// const fistLi =ulTag.children[0]
// const lastLi=ulTag.children[2]
// console.log(ulTag.nextElementSibling)
// console.log(lastLi.previousElementSibling)
// console.log(lastLi.previousElementSibling.textContent)

//table
// const tableTag=document.body.children[1];
// console.log(tableTag.tBodies[0])
// console.log(tableTag.tBodies[0].rows)
// console.log(tableTag.tBodies[0].rows[0].cells[0])
// console.log(tableTag.tBodies[0].rows[0].cells[0].textContent)
// console.log(tableTag.tBodies[0].rows[1].cells[1].textContent)
// console.log(tableTag.rows)
// console.log(tableTag.tBodies[0].rows[0].cells[0].style='background:blue;')

//table color
const tableColor=document.body.children[2]
console.log(tableColor)
tableColor.tBodies[0].rows[0].cells[0].style='background:tomato'
tableColor.tBodies[0].rows[0].cells[1].style='background:red'
tableColor.tBodies[0].rows[0].cells[2].style='background:#d73d3d'
tableColor.tBodies[0].rows[0].cells[3].style='background:#6e0b0b'
tableColor.tBodies[0].rows[0].cells[4].style='background:#913030'
tableColor.tBodies[0].rows[1].cells[0].style='background:blue'
tableColor.tBodies[0].rows[1].cells[1].style='background:skyblue'
tableColor.tBodies[0].rows[1].cells[2].style='background:lightblue'
tableColor.tBodies[0].rows[1].cells[3].style='background:#03038d'
tableColor.tBodies[0].rows[1].cells[4].style='background:#2a2a4c'
tableColor.tBodies[0].rows[2].cells[0].style='background:green'
tableColor.tBodies[0].rows[2].cells[1].style='background:lightgreen'
tableColor.tBodies[0].rows[2].cells[2].style='background:#26d326'
tableColor.tBodies[0].rows[2].cells[3].style='background:#109f10'
tableColor.tBodies[0].rows[2].cells[4].style='background:#065806'
tableColor.tBodies[0].rows[3].cells[0].style='background:#ff4600'
tableColor.tBodies[0].rows[3].cells[1].style='background:orange'
tableColor.tBodies[0].rows[3].cells[2].style='background:#db7c59'
tableColor.tBodies[0].rows[3].cells[3].style='background:#8b9f1c'
tableColor.tBodies[0].rows[3].cells[4].style='background:#99781e'
tableColor.tBodies[0].rows[4].cells[0].style='background:#08b5b5'
tableColor.tBodies[0].rows[4].cells[1].style='background:#086c6c'
tableColor.tBodies[0].rows[4].cells[2].style='background:cyan'
tableColor.tBodies[0].rows[4].cells[3].style='background:#90d7d7'
tableColor.tBodies[0].rows[4].cells[4].style='background:#1d6262'