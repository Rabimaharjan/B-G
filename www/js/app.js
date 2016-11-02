var taskList = [];

function displayList(){
    
    //Display Dynamic HTML Lists
    // UL & LI tags
    // Remove Button Displays
    
    var taskListContent = "<ul>";
    
    var length = taskList.lenth;
    //create LI tags and Loop through the array
    for (var i=0;i < length; i++ ){
       taskListContent +="<li>"+taskList[i]+"<button>X</button></li>";
    }

    
    taskListContent += "</ul>";
    
    document.getElementById("TaskListValue").value = taskListContent;
    
}

function addTask(){
    
    //Add in the tasks from input field in our HTML file
    var task = document.getElementById("inputValue").value;
    
    //clear off input value after saving it 
    document.getElementById("inputValue").value = "";
    
    //add the task into our array
    taskList.push(task);
    
    //Display the latest list of tasks
    displayList();
    
}

function removeTask(){
    //Remove Tasks from the array
}

displayList();

document.getElementById("Add").addEventListener("click",addTask);

