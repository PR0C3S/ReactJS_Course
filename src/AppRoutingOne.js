import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
import AboutPage from './pages/about-faqs/AboutPage';
import NotFoundPage from './pages/404/NotFoundPage';
import TasksPage from './pages/tasks/TasksPage';
import TaskComponent from './components/pure/task';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';
import RegisterPage from './pages/auth/RegisterPage';

function AppRoutingOne() {

  let logged = localStorage.getItem('credentials');
  let taskList = [
    {
      id: 1,
      name: 'Task1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task2',
      description: 'My second task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?' ,logged);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/'> || HOME |</Link>
          <Link to='/profile'> | Profile |</Link>  
          <Link to='/about'> | ABOUT |</Link>  
          <Link to='/tasks/1'> | Task1 |</Link>
          <Link to='/tasks/2'> | Task2 |</Link>    
          <Link to='/errorNoExiste'> | Not Existing Route |</Link> 
          <Link to='/login'> | Login ||</Link> 
        </aside>
        <main>
        <Routes>
          <Route exact path='/' element={ <HomePage></HomePage>} />
          <Route exact path='/online-state' element={<StatePage></StatePage>} />
          <Route path="/login" element={logged ? <Navigate to="/" /> : <LoginPage/> }/>
          <Route path="/register" element={logged ? <Navigate to="/" /> : <RegisterPage/> }/>
          <Route path='/about' element={ <AboutPage></AboutPage>} />
          <Route path='/faqs' element={ <AboutPage></AboutPage>} />
          <Route path="/profile" element={logged ? <HomePage/> : <Navigate to="/login" />}/>
          <Route path='/tasks'>
          <Route index element={ <TasksPage></TasksPage> }/>
          <Route path=':id' element={<TaskDetailPage task={taskList[0]}/>}/>
          </Route>
         
          
          {/* 404 - Page No found */}
          <Route  path='*' element={ <NotFoundPage></NotFoundPage>}/>
         
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingOne;
