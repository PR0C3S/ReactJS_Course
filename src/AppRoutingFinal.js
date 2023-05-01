import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
function AppRoutingFinal() {

  //TODO Change to value from sessionStorage or something dinammic
  let loggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
      {/* Redirrections to protect our routes */}
        <Route exact path='/' element={ loggedIn ? <Navigate to={'/dashboard'} replace/> : <Navigate to={'/login'} replace/>} />
        {/* Login Route */}
        <Route exact path='/login' element={<LoginPage/>}/>
        {/* Dashboart Route */}
        <Route exact path='/dashboard' element={ loggedIn ? <DashboardPage/> : <Navigate to={'/login'} replace/>} />
      
        <Route path='*' element={ <NotFoundPage></NotFoundPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutingFinal;
