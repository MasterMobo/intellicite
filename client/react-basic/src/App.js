import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import MainLayout from "./layouts/MainLayout"
import Search from './page/Search';

export default function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/search" element={<MainLayout><Search /></MainLayout>} />
      </Routes>
    </div>
  </Router>
  )
}