import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from './components/Register/Login'
import PrivateRoute from './components/Private/PrivateRoute'
import Main from "./components/Main/Main";
import './index.css'


function App() {
  return (
    <>
    <Router>
      <Provider store={store}>
      <Header />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
       
          <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<PrivateRoute />}>
            <Route path="/main" element={<Main />} />
        </Route>
        </Routes>
      <Footer />
      </Provider>
    </Router>
   </>
  );
}

export default App;
