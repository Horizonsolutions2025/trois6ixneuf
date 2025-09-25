import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

interface PageWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, description, children }) => {
  usePageTitle(title, description);

  return (
    <div>
      {children}
    </div>
  );
};

export default PageWrapper;