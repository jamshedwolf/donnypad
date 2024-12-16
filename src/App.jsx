import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Hero from './Pages/Hero';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define the Hero route */}
          <Route path="/" element={<Hero />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
