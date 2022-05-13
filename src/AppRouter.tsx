import { Route, Routes } from 'react-router-dom';
import { Home, PageUseState, PageUseEffect, PageUseContext, PageUseReducer } from './pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="use-state" element={<PageUseState />} />
      <Route path="use-effect" element={<PageUseEffect />} />
      <Route path="use-context" element={<PageUseContext />} />
      <Route path="use-reducer" element={<PageUseReducer />} />
    </Routes>
  );
}
