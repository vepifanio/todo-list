import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { TaskType } from "./Task";
import { ChangeEvent, FormEvent, useState } from "react";

interface NewTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export function NewTask({ setTasks }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("")

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks(tasks => {
      const newTask: TaskType = {
        id: tasks[tasks.length - 1]?.id + 1 || 0,
        description: newTaskText,
        isDone: false
      }

      return [ ...tasks, newTask ];
    });
    setNewTaskText("")
  }

  function handleChangeNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleAddNewTask}>
      <input 
        className={styles.textInput} 
        value={newTaskText}
        onChange={handleChangeNewTaskText}
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        required 
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  );
}