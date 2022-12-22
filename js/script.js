//função para adicionar tarefas.
const addTask = () => {

    //adicionando tarefa ao elemento.
    const taskTitle = document.querySelector(".task-title").value;

    if(taskTitle){

        //Colocando conteudo no elemento.
        const resultContent = document.querySelector("#result-content");
        resultContent.textContent = `${taskTitle}`; 

        //clonando template.
        const addedTask = document.querySelector("#added-task");
        const newTask = addedTask.cloneNode(true); //clona o html selecionado e implementa em uma nova variável.

        //adicionando conteudo da nova tarefa.
        newTask.querySelector("#result-content").textContent = `${taskTitle}`;

        //removendo classe desnecessária.
        newTask.removeAttribute("style");

        //Adicionando nova tarefa.
        const tasksListContainer = document.querySelector("#tasks-list-container");
        tasksListContainer.appendChild(newTask);

        //Adicionando evento de remoção de tarefas.
        const removeBtn = newTask.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
            removeTask(removeBtn);
        });

        //limpando input após adicionar tarefa.
        document.querySelector(".task-title").value = ""; 

    }else{
        alert("Preencha o campo vazio.");
    };

}
//função para remover tarefas.
const removeTask = (removeBtn) => {
    const fatherBtn = removeBtn.parentNode;
    const removeNewTask = fatherBtn.parentNode;
    removeNewTask.remove();
};

//função para finalizar e "desfinalizar" tarefas.


//selecionando elementos.
const addBtn = document.querySelector("#add-btn");

//adicionando tarefas.
addBtn.addEventListener("click", (e) => {

    e.preventDefault();
    addTask();

});
