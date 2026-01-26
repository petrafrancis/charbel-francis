import React from 'react';
import { AuthorPortfolio } from './pages/AuthorPortfolio';
import { LanguageProvider } from './context/LanguageContext';
function App() {
  return (
    <LanguageProvider>
      <AuthorPortfolio />
    </LanguageProvider>);

}
export { App };