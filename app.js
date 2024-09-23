// onsole.log('hello world')

var input = document.querySelector("#username")
var ul = document.querySelector("ul")



var arr =[]
function render() {
    ul.innerHTML=' '

    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i],i)

        ul.innerHTML +=`<li>${arr[i]}</li><button id="edit " onclick="edit()" >edit</button><button id="delete " onclick="musa()" >delete</button> `


        
    }
}

function hola() {
        // console.log(input.value)
    arr.push(input.value)
    render()
    // console.log(arr)


}

function edit(i) {

    var edit = prompt("enter a valid task   ")
    arr.splice(0,1,edit)
    render()
    
}
function musa(i) {
    arr.splice(0,1)
    render()

}