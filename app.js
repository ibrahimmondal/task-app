// selectors
const taskFrom = document.getElementById("task-form");
const submit = document.getElementById("submit");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function createTesk() {
    let inputValue = taskInput.value;
   if (inputValue){

//  create a task lish div 

   const listDiv = document.createElement("div");
   listDiv.classList.add("task");
//    listDiv.innerHTML = "hello";   
   
    // create a input field
   const taskName = document.createElement("input");
   taskName.classList.add("w-[80%]", "p-2");
   taskName.value = inputValue;
   taskName.setAttribute("readonly", "readonly");

     // create a batton group div
     const buttonGroup = document.createElement("div");
     buttonGroup.classList.add("w-[20%]", "flex", "gap-2");
    
     // create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";

    // create a delete button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerText = "Edit";

    buttonGroup.appendChild(deleteBtn)
    buttonGroup.appendChild(editBtn)

// assign the input and button group to list div
listDiv.appendChild(taskName);
   listDiv.appendChild(buttonGroup);

    // assign to tasklist div
   taskList.appendChild(listDiv);

   } else {
    alert("pleace enter a text")
   }

   const deleteBtn = document.querySelectorAll(".delete");
   console.log(deleteBtn);
   deleteBtn.forEach((item) => {
    item.addEventListener("click", (e) =>{
      e.target.parentNode.parentNode.parentNode.remove();
    });
   });
   const editBtn = document.querySelectorAll(".edit");
  console.log(editBtn);

  editBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   console.log(e.target.parentNode.parentNode);
      let task = e.target.parentNode.parentNode.firstElementChild;
      console.log(task);
      if (e.target.innerText === "edit") {
        task.removeAttribute("readonly");
        task.focus();
        item.innerText = "Save";
      } else {
        item.innerText = "edit";
        task.setAttribute("readonly", "readonly");
      }
    });
  });

  taskInput.value = "";
   
}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    createTesk()
});

