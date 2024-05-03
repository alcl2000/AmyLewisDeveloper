import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Routes>
          <Route exact path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
