import AddTask from "./components/AddTask";
import Task from "./components/Tasks";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Task />
      <AddTask />
    </div>
  );
}

export default App;