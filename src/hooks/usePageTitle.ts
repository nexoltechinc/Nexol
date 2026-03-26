import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Nexol Tech Solutions - Senior Technical Architects`;
    window.scrollTo(0, 0);
  }, [title]);
};

export default usePageTitle;
