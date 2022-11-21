import FormPage from 'pages/FormPage';
import Home from 'pages/Home';
import MainLayout from 'pages/MainLayout';
import PageA from 'pages/PageA';
import PageUseContext from 'pages/PageUseContext';
import PageUseReducer from 'pages/PageUseReducer';
import PageTodo from 'pages/Todo/PageTodo';
import UseCallbackPage from 'pages/UseCallbackPage';
import UseMemoPage from 'pages/UseMemoPage';
import UseRefPage from 'pages/UseRefPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route index element={<Home />} />
        <Route path="todo" element={<PageTodo />} />
        <Route path="form-page" element={<FormPage />} />
        <Route path="use-memo" element={<UseMemoPage />} />
        <Route path="use-callback" element={<UseCallbackPage />} />
        <Route path="use-ref" element={<UseRefPage />} />
        <Route path="page-a" element={<PageA />} />
        <Route path="use-reducer" element={<PageUseReducer />} />
        <Route path="use-context" element={<PageUseContext />} />
      </Routes>
    </BrowserRouter>
  );
}
