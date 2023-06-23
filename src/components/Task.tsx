import { CheckCircle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export interface TaskType {
  id: number;
  isDone: boolean;
  description: string;
}

interface TaskProps {
  task: TaskType;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ task, onToggleTask, onDeleteTask }: TaskProps) {
  function handleToggleTask() {
    onToggleTask(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      <button 
        className={`${styles.toggleButton} ${task.isDone ? styles.isDoneMark :styles.isNotDoneMark}`} onClick={handleToggleTask}
      >
      {task.isDone 
        && <CheckCircle className={styles.isDoneMark} size={18} weight="fill" />
      }
      </button>
      
      <p className={`${styles.description} ${task.isDone ? styles.doneTaskDescription :''}`}>{task.description}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  )
}