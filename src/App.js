import logo from './logo.svg';
import './App.css';
import Gretting from './components/pure/gretting';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx
        <Gretting name="John Pena"></Gretting>
        */}
        <GreetingF name="Harold Pena"></GreetingF>
      </header>


    </div>
  );
}

export default App;
