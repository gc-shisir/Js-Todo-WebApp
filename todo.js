// grabing todo input field element 
inputTodo=document.getElementById('addTodoItem');

// grabing ul element
var list=document.querySelector('.list-group');

// grabing p element for notice
var notice=document.getElementById('notice');

function btnAddClick(e){

    // prevent default action of submit button
    e.preventDefault();

    notice.textContent="";
    if(inputTodo.value!==""){   //////////////////// WE CAN ALSO USE (inputTodo.textContent!=="")////////////////
        
        // create list element
        var todoList=document.createElement('li');

        // add class to list
        todoList.className="list-group-item";
        
        // add textNode to list
        todoList.appendChild(document.createTextNode(inputTodo.value));

        // create button element
        var btnDelete=document.createElement('button');

        // add button class
        btnDelete.className="btn btn-danger btn-sm deleteList ";

        // add button style attribute
        btnDelete.style="float:right";

        // append text/name to button
        btnDelete.appendChild(document.createTextNode('Delete'));

        // append button in list item
        todoList.appendChild(btnDelete);

        // append todoList in ul
        list.appendChild(todoList);

        // reset value of inputTodo or input field to null
        inputTodo.value="";
    }
    else{
        notice.textContent="!please enter a todo..";
    }
    
}
function removeTodo(e){

    // check for element with className button in selected list
    if (e.target.classList.contains('deleteList')){  

        // add confirmation popup
        if(confirm("are you sure?")){
            // create variable for parent element of button
            var listItem=e.target.parentElement;

            // remove child element of list
            todoItemList.removeChild(listItem);
            }
    }
    
}

// queryselector for addTodo button
btnAddTodo=document.querySelector('#btnAdd');
// event listener for addTodo button
btnAddTodo.addEventListener('click',btnAddClick);

// queryselector for ul element and its event listener
todoItemList=document.getElementById('list');
todoItemList.addEventListener('click',removeTodo);

