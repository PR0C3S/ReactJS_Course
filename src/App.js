import logo from './logo.svg';
import './App.css';
import Gretting from './components/pure/gretting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx
        <Gretting name="John Pena"></Gretting>
        
        <GreetingF name="Harold Pena"></GreetingF>
        
        <TaskListComponent></TaskListComponent>*/}
        <ContactListComponent></ContactListComponent>
      </header>


    </div>
  );
}

export default App;
