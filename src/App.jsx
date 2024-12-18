import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

import Main from './Pages/Landing/Main';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
      
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
