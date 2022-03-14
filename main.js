const itemInput = document.querySelector('input[type="text"]');
const itemList = document.querySelector("#items");
const form = document.querySelector("form");

function myFunction() {
  const myobj = document.getElementById("item");
  myobj.remove() 
}

form.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  let newItem = itemInput.value;

  let li = document.createElement("li");
  let div = document.createElement("div");
  li.className = "box__item";
  div.className = "box___mark";
  li.appendChild(div);
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  
  let crashBtn = document.createElement("button");
  crashBtn.className = "box__crash bx bx-trash";
  crashBtn.onclick = ()=>{
    li.remove()
  }
  li.onclick = ()=>{
    div.style.backgroundColor = "green"
    crash.className = ""
    
  }
  li.appendChild(crashBtn);


  itemInput.value = "";
}

