function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (!taskText) {
      alert("Please enter a task.");
      return;
    }

    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
      <input type="checkbox" onchange="toggleTask(this)">
      <span>${taskText}</span>
      <button onclick="deleteTask(this.parentNode)">Delete</button>
    `;
    taskList.appendChild(task);

    taskInput.value = "";
  }

  function deleteTask(task) {
    task.parentNode.removeChild(task);
  }

  function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }