import { PomodoroTimer } from "./components/PomodoroTimer";

const App: React.FC = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen py-8">
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  );
};

export default App;