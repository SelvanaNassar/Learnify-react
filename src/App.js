import {Route, Routes } from 'react-router-dom';

import './App.css';

import SignInPage from './allComponents/SignInPage'
import BasicMenu from './allComponents/BasicMenu';
import CourseDetails from './allComponents/CourseDetails'

import PrivateRoute from './privateRoute/PrivateRoute';
import Layout from './layout/Layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    
  return (
    <div className="App">

      <Routes>
        {/*all routes that don't need protection or layout*/}
        <Route path="/" element={<SignInPage />} />
        {/*end of all routes that don't need protection or layout*/}

        {/*protection for pages that need protection(we encapsolate it with protecction) so no one without othorization can enter it*/}
        <Route element={<PrivateRoute/>} >

        {/*layout of all pages so we can show the left bar for all pages(we encapsolate it with layout component)*/}
          <Route element={<Layout />} >
              
              {/*all routes that need protection and layout*/}
              <Route path="/home" element={<BasicMenu />} />
              <Route path="/course/:id" element={<CourseDetails /> } />
              {/*end of all routes that need protection and layout*/}
          
          </Route>
          {/*end of layout of all pages so we can show the left bar for all pages(we encapsolate it with layout component)*/}
        
        </Route> 
        {/*end of protection for pages that need protection(we encapsolate it with protecction) so no one without othorization can enter it*/} 
      
      </Routes>

      <ToastContainer autoClose={4000} closeOnClick={true} />
    </div>
  );
}

export default App;
