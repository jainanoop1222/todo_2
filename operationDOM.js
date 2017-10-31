/**
 * Created by anoopjain on 10/27/2017.
 */
window.onload=function () {
    //console.log("first");
    var input=document.getElementById('active_todos');
    var button=document.getElementById('button');
    var id=0;
    button.onclick=function () {
        var input1=input.value;
        document.getElementById('active_todos').value = "";
        addTodos(id,input1,"ACTIVE");
        var count=id;
        display(id,count);
        id++;
    }
    display(0,id-1);
}
function display(id,count) {
    var parent1 = document.getElementById('active_list');
    parent1.innerHTML = "";
    var parent2 = document.getElementById('completed_list');
    parent2.innerHTML = "";
    var parent3 = document.getElementById('deleted_list');
    parent3.innerHTML = "";
    for(var i=0;i<=count;i++)
    {
        //    console.log("first");
        var todo_element = createTodoElement(i,count);
        //console.log("second");
        if(list.list1[i].status=="ACTIVE")
        {
            parent1.appendChild(todo_element);
        }
        if(list.list1[i].status=="COMPLETED")
        {
            parent2.appendChild(todo_element);
        }
        if(list.list1[i].status=="DELETED")
        {
            parent3.appendChild(todo_element);
        }
    }
    return;
}
function createTodoElement(id,count)
{

//    console.log(list.list1[id].status);
    var todo_element = document.createElement("div");
    if(list.list1[id].status=="ACTIVE")
    {
        todo_element.setAttribute("class", "act");
        var label = document.createElement('label');
        label.setAttribute("class","marginal");
        label.appendChild(document.createTextNode(list.list1[id].title));
        todo_element.appendChild(label);

        var complete_button = document.createElement("button");
        complete_button.innerText = "Completed";
        complete_button.setAttribute("class","marginal");
        complete_button.setAttribute("onclick", "completedAdd("+id+","+count+")");
        todo_element.appendChild(complete_button);

        var delete_button = document.createElement("button");
        delete_button.innerText = "Delete";
        delete_button.setAttribute("class","marginal");
        delete_button.setAttribute("onclick", "deletedAdd("+id+","+count+")");
        todo_element.appendChild(delete_button);


        var update_button = document.createElement("button");
        update_button.innerText = "update";
        update_button.setAttribute("class","marginal");
        update_button.setAttribute("onclick", "myFunction("+id+","+count+")");
        todo_element.appendChild(update_button);
    }
    if(list.list1[id].status=="COMPLETED")
    {
        todo_element.setAttribute("class", "comp");
  //      console.log("fourth");
        var label = document.createElement('label');
        label.setAttribute("class","marginal");
        label.appendChild(document.createTextNode(list.list1[id].title));
        todo_element.appendChild(label);

        var complete_button = document.createElement("button");
        complete_button.innerText = "deleted";
        complete_button.setAttribute("class","marginal");
        complete_button.setAttribute("onclick", "deletedAdd("+id+","+count+")");
        todo_element.appendChild(complete_button);
    }
    if(list.list1[id].status=="DELETED")
    {
        todo_element.setAttribute("class", "del");
    //    console.log("fourth");
        var label = document.createElement('label');
        label.setAttribute("class","marginal");
        label.appendChild(document.createTextNode(list.list1[id].title));
        todo_element.appendChild(label);
    }
    return todo_element;
}
function  completedAdd(id,count) {
    //console.log("my app 2");
    list.list1[id].status="COMPLETED";
    display(0,count);
    return ;
}
function  deletedAdd(id,count) {
    //console.log("my app 2");
    list.list1[id].status="DELETED";
    display(0,count);
    return ;
}
function myFunction(id,count) {
    var person = prompt("Please re-enter your title", list.list1[id].title);
    if (person != null) {
        list.list1[id].title=person;
    }
    display(0,count);
}