
const input = document.querySelector("input");
const btn = document.getElementById("btn");

let todos = [];

btn.addEventListener("click", addList);

function addList() {
    const newLi = document.createElement("li");
    const checkBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const listItems = document.querySelector(".list-items"); 
    
    todos.push(input.value);
    console.log(todos);
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !== "") {
        newLi.textContent = input.value;
        input.value = "";
        listItems.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener("click", function() {
        const parent = this.parentNode;
        parent.style.textDecoration = "line-through";
    });
    
    delBtn.addEventListener("click", function () {
        const parent = this.parentNode;
        parent.remove();
    });
}


    
