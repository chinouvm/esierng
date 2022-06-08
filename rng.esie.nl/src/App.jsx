import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
