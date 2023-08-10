let to_do_input = document.querySelector(".input_toDo") ;
let list_ul = document.querySelector(".ul_to_do");
// console.log(to_do_input)
to_do_input.addEventListener(
    "keyup", 
    // console.log(this.value);
    function(event){
        if(event.key == "Enter"){
            addItem(this.value)
            this.value = ""
        }
    }  
)

function addItem(item){
    const listItem = document.createElement("li");
    console.log(listItem)
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times cut_icon"></i> `

    listItem.addEventListener("click",
 
    function(){
        this.classList.toggle("done")
    }
    )
    listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove()
    })
    list_ul.appendChild(listItem)

}
