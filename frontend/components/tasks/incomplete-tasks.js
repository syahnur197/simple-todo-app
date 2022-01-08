import { mutateTasks, useGetTasks } from "../../hooks/tasks.hooks";
import { completeTask } from "../../services/tasks.service";
import { TaskContainer } from "./task-container";
import { TasksListContainer } from "./tasks-list-container";

export const IncompleteTasks = () => {
  const { data, isLoading } = useGetTasks('incompleted');

  const markTaskAsCompleted = async (taskId) => {
    await completeTask(taskId);
    mutateTasks();
  }

  return (
    <TasksListContainer>
      <h2 className='text-xl font-semibold text-blue-600'>Incomplete Tasks</h2>

      {isLoading && <div>Loading</div>}

      {data && data.data.map(task => (
        <TaskContainer task={task} onClick={() => markTaskAsCompleted(task.id)} />
      ))}
    </TasksListContainer>
  )
}