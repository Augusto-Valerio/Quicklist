const form = document.querySelector("form");
const inputElement = document.getElementById("addItem");
const removeItem = document.querySelector("#removeItem")
removeItem.style.display = "none"

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const containerList = document.getElementById("container-list")
  
  const list = document.querySelector("ul"); 

  const itemList = document.createElement("li"); 
  itemList.classList.add("item")

  // Creating the checkbox
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.id = "check"
  
  // Creating the text (h2) with the input value
  const text = document.createElement("h2")
  text.textContent = inputElement.value

  // Creating the trash icon
  const trashIcon = document.createElement("img")
  trashIcon.src = "assets/svg/trash.svg"
  trashIcon.alt = "trash ícon"

  // Adding in <li>
  itemList.append(checkbox, text, trashIcon)
  
  // Adding the <li> to the <ul>
  list.append(itemList)
  
  // Adding the <ul> to the container-list div
  containerList.append(itemList)
  
  // Clearing the input
  inputElement.value = ""


  // function of when clicking on the trash can, removing the item from the list
  trashIcon.addEventListener("click", () => {
    removeItem.style.display = "flex"
    itemList.remove()
  })

  // function to close the message
  const closeWarning =  document.querySelector("#removeItem img")
  closeWarning.addEventListener("click", () =>{
    removeItem.style.display = "none"
  })

});
