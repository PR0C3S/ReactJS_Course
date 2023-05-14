import logo from './logo.svg';
import './App.css';
import AxiosCrudExample from './components/pure/AxiosCrudExample';
 
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
      <OptionalRender></OptionalRender>
      <TaskListComponent></TaskListComponent>

      <LoginFormik></LoginFormik>
      <RegisterFormik></RegisterFormik>
      <AsyncExample></AsyncExample>
      <ObservableExample></ObservableExample>
     <FetchExample></FetchExample>
      <AxiosExample></AxiosExample>

      */}
      <AxiosCrudExample></AxiosCrudExample>
     
    </div>
  );
}

export default App;
