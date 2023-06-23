import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { TasksList } from "./components/TasksList"
import { TaskType } from "./components/Task"

import styles from "./App.module.css"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      isDone: false,
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
      id: 2,
      isDone: true,
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
  ])

  return (
    <>
      <Header/>
      <div className={styles.tasksContainer}>
        <NewTask setTasks={setTasks} />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}

export default App
