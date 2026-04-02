import { useEffect } from 'react';

const defaultTitle = 'Dental & Medical Clinic Automation Services | Nexol Tech';

const usePageTitle = (title?: string) => {
  useEffect(() => {
    if (!title) {
      document.title = defaultTitle;
    } else {
      document.title = title.includes('Nexol') ? title : `${title} | Nexol Tech`;
    }

    window.scrollTo(0, 0);
  }, [title]);
};

export default usePageTitle;
