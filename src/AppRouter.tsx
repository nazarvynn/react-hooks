import { Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
