
import './App.css';
import Home from './pages/Home'
import Header from './components/Header'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Credentials from './pages/Credentials';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRUOBpTvXdWIH-kV74AWH5HbwDIOrIqrU",
  authDomain: "fir-shop2.firebaseapp.com",
  projectId: "fir-shop2",
  storageBucket: "fir-shop2.appspot.com",
  messagingSenderId: "497377316312",
  appId: "1:497377316312:web:53f9adb6df590ac83f36ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function useapp() {
  console.log(app)
}
useapp();

function App() {
  return (
   
    <>
   <Header />
     <Router>
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Aboutme' element={<Aboutme />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Credentials' element={<Credentials />}/>
      </Routes>
    </Router>
 
    
    </>
  );
}

export default App;
