const form = document.querySelector("form");
const inputElement = document.getElementById("addItem");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const containerList = document.getElementById("container-list")
  
  const list = document.querySelector("ul"); 

  const itemList = document.createElement("li"); 
  itemList.classList.add("item")
  
  const text = document.createElement("h2")
  text.textContent = inputElement.value

  
  itemList.append(text)
  list.append(itemList)
  inputElement.value = ""

  containerList.append(itemList)  

  console.log(itemList)
});
