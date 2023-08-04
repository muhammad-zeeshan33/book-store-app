import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
