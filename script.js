document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById("add-task-btn");
      const taskInput = document.getElementById("task-input");
        const taskList = document.getElementById("task-list");

        function loadTasks() {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.forEach(taskText => {
                createTaskElement(taskText, false); // 'false' indicates not to save again to Local Storage
        });
    }

 function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            // Remove the "Remove" button text from the task
            const text = li.firstChild.textContent;
            tasks.push(text);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create and append a task element
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            saveTasks();
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

        function addTask(){
            const taskText = taskInput.value.trim();

            if (taskText === ""){
                alert("Please enter a task.")
        
            } else {
            createTaskElement(taskText);
            saveTasks();
            taskInput.value = "";
        }
    }
              addButton.addEventListener('click', addTask);
                taskInput.addEventListener('keypress', function(event){
                    if (event.key === 'Enter'){
                        addTask();
                    }

            });
        
    loadTasks();
   
});





