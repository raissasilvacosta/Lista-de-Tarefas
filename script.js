function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Marcar como concluída
    li.onclick = () => {
        li.classList.toggle("completed");
    };

    // Botão de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(removeBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}