import logo from './logo.svg';
import './App.css';
import Gretting from './components/pure/gretting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender.jsx'
 
function App() {
  return (
    <div className="App">
    {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         Componente propio Greeting.jsx
        <Gretting name="John Pena"></Gretting>
        
        <GreetingF name="Harold Pena"></GreetingF>
        
       
        Ejemplo de uso de HOOKS
        <Ejemplo1></Ejemplo1>
        <Ejemplo2></Ejemplo2>
        <MiComponenteConContexto></MiComponenteConContexto>
        */}
        
        
       {/* <Ejemplo4 nombre='John'>}
           Todo lo que esta aqui adentro es tratado como props.children*/ }
          {/*<h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
       
       <GreetingStyled name='John'></GreetingStyled>
      
      </header>
       
       <Father></Father>
      <TaskListComponent></TaskListComponent>

      */}

      <OptionalRender></OptionalRender>

     


    </div>
  );
}

export default App;
