let post = document.getElementById("ButtonPost");
let mark = document.getElementById("ButtonMark");
let clear = document.getElementById("ButtonClear");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e){
	e.preventDefault();

	var todo = document.getElementById("todoText").value;
	var list = document.getElementById("todoList");

	let currentList = list.innerHTML;
	list.innerHTML = currentList + ` <input type = "checkbox" name = "todo" /> ${todo} <br> `
}
function TodoMark(e){
	e.preventDefault();
	let todoss = document.getElementsByName("todo");
	for (i = 0; i<todoss.length; i++){
		todoss[i].checked = true;
	}
	
}
function TodoClear(e){
	e.preventDefault();
	let todoss = document.getElementsByName("todo");
	for (i = 0; i<todoss.length; i++){
		todoss[i].checked = false;
	}

}
function TodoDel(e){
	e.preventDefault();
	document.getElementById("todoList").innerHTML = "";
}