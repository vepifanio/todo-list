import { ClipboardText } from "phosphor-react";
import styles from "./TasksList.module.css"
import { Task, TaskType } from "./Task";

interface TaskListProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export function TasksList({ tasks, setTasks }: TaskListProps) {
  const doneTasksCount = tasks.reduce((acc, task) => {
    if (task.isDone) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const doneTaskInfoCount = doneTasksCount > 0 
  ? `${doneTasksCount} de ${tasks.length}` 
  : doneTasksCount;

  function handleToggleTask(id: number) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }

      return task;
    }))
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className={styles.tasksListContainer}>
      <header className={styles.header}>
        <div>
          <span className={styles.allTasksInfo}>Tarefas criadas</span>
          <span className={styles.infoCount}>{tasks.length}</span>
        </div>

        <div>
        <span className={styles.doneTasksInfo}>Concluídas</span>
          <span className={styles.infoCount}>
            {doneTaskInfoCount}
          </span>
        </div>
      </header>

      {tasks.length === 0 
        ? 
          <div className={styles.noTasksInfo}>
            <ClipboardText size={56} />
            <p className={styles.highlighted}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>  
        : 
          <div className={styles.list}>
            {tasks.map(task => (
              <Task 
                key={task.id} 
                task={task} 
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}/>
            ))}
          </div>
      }

      
    </div>
  )
}