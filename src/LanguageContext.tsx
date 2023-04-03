import React, { createContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
};

export const LanguageContext = createContext(defaultLanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? (savedLanguage as Language) : 'en';
  });

  const saveLanguageToStorage = (newLanguage: Language) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage: saveLanguageToStorage,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}
