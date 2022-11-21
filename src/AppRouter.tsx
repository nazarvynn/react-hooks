import { Route, Routes } from 'react-router-dom';

import { Home, PageTodo, PageUseContext, PageUseEffect, PageUseReducer,PageUseState } from './pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todo" element={<PageTodo />} />
      <Route path="use-state" element={<PageUseState />} />
      <Route path="use-effect" element={<PageUseEffect />} />
      <Route path="use-context" element={<PageUseContext />} />
      <Route path="use-reducer" element={<PageUseReducer />} />
    </Routes>
  );
}
