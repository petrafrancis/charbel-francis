import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthorPage } from './pages/AuthorPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LanguageToggle />
        <Routes>
          <Route path="/" element={<AuthorPage />} />
          <Route path="/book/:bookId" element={<BookDetailPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>);

}