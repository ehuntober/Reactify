import "./App.css";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="app">
      <h1>Rectify Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;
