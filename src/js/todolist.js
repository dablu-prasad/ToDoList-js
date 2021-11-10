addlist1=document.getElementById('addlist');
  addlist1.addEventListener("click",addToDoList1);
  update();
  //alert('addToDoList1');
function deleted(itemIndex)
{
  console.log("Delete",itemIndex);
  itemJsonArrayStr=localStorage.getItem('itemsJson')
  itemJsonArray=JSON.parse(itemJsonArrayStr);
  //Delete itemIndex element from the array
  itemJsonArray.splice(itemIndex,1);
  localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
  update();
}
var itmidx=0;
function edit(itemIndex) {
    itmidx=itemIndex;
    const addTaskButton = document.getElementById("addlist");
    // let todo1 = document.getElementById("hidtodo");
    // let desc1 = document.getElementById("hiddesc");
    let todoArrStr = localStorage.getItem("itemsJson");
    todoArray = JSON.parse(todoArrStr);

    todoJson= todoArray[itemIndex];
    todo.value=todoJson[0];
    description.value=todoJson[1];
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";    
}
saveTaskButton = document.getElementById("editlist");
saveTaskButton.addEventListener("click",editToDoList1);
function editToDoList1() {
   // alert('....'+itemIndex);
    console.log("edit section")
    let addTaskButton = document.getElementById("addlist");
    let todoStr = localStorage.getItem("itemsJson");
    todoArray = JSON.parse(todoStr);
    let todoold = document.getElementById("todo").value;
    let descold = document.getElementById("description").value;
   //let todo1 = document.getElementById("hidtodo").value;
// let desc1 = document.getElementById("hiddesc").value;
 //console.log(todo1)
 //console.log(desc1)
 console.log(todo.value)
console.log(description.value)
 todoArray[itmidx][0] = todoold;
 todoArray[itmidx][1] = descold;
 itmidx=null;
console.log(todoArray[todoold])
console.log(todoArray[descold])
addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    todo.value = "";
    description.value = "";
    //alert('on edit..');
 localStorage.setItem("itemsJson", JSON.stringify(todoArray));
 update();
}

  
  function addToDoList1() 
  {
      //alert('addToDoList1');
    console.log(addlist1);
       console.log("Hello");
       title=document.getElementById('todo').value;
       desc=document.getElementById('description').value;
       console.log(title);
       console.log(desc);
      if( localStorage.getItem('itemsJson')==null)
      {
        console.log("if");
       arr=[];
       arr.push([title,desc]);
       localStorage.setItem('itemsJson',JSON.stringify(arr));
      }
      else
      {
        console.log("else");
       let  storageArrStr= localStorage.getItem('itemsJson');
         
       let  storageArr=JSON.parse(storageArrStr);
         storageArr.push([title,desc]);
         console.log(storageArr);
         localStorage.setItem('itemsJson',JSON.stringify(storageArr))
      }
      ddlist1=document.getElementById('addlist');
    addlist1.addEventListener("click",addToDoList1);
    update();
    document.getElementById('todo').value='';
    document.getElementById('description').value='';
    //clearStorage();
     
}
function update(){
    //alert('update..');
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    // Populate the table
    let tableBody = document.getElementById("showdetail");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button><button class="btn btn-sm btn-primary" onclick="edit(${index})">Edit</button></td> 
        </tr>`; 
    });
    showdetail.innerHTML = str;
}

function clearStorage()
{
if(confirm("Do you want to clear list"))
{
console.log("Clear Data");
localStorage.clear();
update();
}
}