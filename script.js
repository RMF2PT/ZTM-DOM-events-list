var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liArray = document.querySelectorAll("li");

function deleteItem() {
	this.parentNode.parentNode.removeChild(this.parentNode);
}

function addDeleteButton() {
	var deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.addEventListener("click", deleteItem);
	return deleteButton;
}

function initialState() {
	liArray.forEach(li => {
		li.appendChild(addDeleteButton());	
		li.addEventListener("click", function() {
			this.classList.toggle("done");
		})
	});
}

initialState();

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", function() {
		this.classList.toggle("done");
	})
	li.appendChild(addDeleteButton());	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
