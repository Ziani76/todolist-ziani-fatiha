const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearAllButton = document.getElementById('clearAllButton');

// Ajout d'une tâche
button.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Ajoute le style
        li.classList.add('task-item');

        // Suppression au clic
        li.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        input.value = '';
    } else {
        console.log("Le champ est vide. Aucune tâche ajoutée.");
    }
});

// Effacer toutes les tâches
clearAllButton.addEventListener('click', () => {
    taskList.innerHTML = '';
});






   

