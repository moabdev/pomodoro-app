export interface Task {
  id: string;
  title: string;
  completed: boolean;
  pomodoros: number;
  estimatedPomodoros: number;
}

export type TaskContextType = {
  tasks: Task[];
  addTask: (title: string, estimatedPomodoros: number) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  incrementTaskPomodoros: (id: string) => void;
  currentTaskId: string | null;
  setCurrentTaskId: (id: string | null) => void;
};
