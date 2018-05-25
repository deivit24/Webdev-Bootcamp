var todos = [];

var input = prompt('What would  you like to do?');

while(input !== "quit"){
  if (input === "view") {
    viewTodo();

  }else if (input === "add") {
    addTodo();

} else if (input === 'delete') {
  deleteTodo();
}
  input = prompt('What would  you like to do?');
}
console.log("ok you quit the app");


// use the functions

function viewTodo() {
  console.log('**********');
  todos.forEach(function(todo, i){
    console.log(i + ': ' + todo);
  });
  console.log('**********');

}

function addTodo() {
  var newTodo = prompt('Enter New Todo');

  todos.push(newTodo);
  console.log('Added Todo');

}

function deleteTodo() {
  var index = prompt('Enter index of todo to delete');
  todos.splice(index, 1);
  console.log('Deleted Todo');
}
