import logo from './images/logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app-todoapp">
      <div className='app-logo-container'>
        <img src={logo} className='app-logo' />
      </div>
      <div className='app-todolist'>
        <h1>Mis Tareas</h1>
        <TaskList />
        
      </div>
    </div>
  );
}

export default App;
