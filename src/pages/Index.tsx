import React from 'react';

import LoginForm from '@/components/Login/LoginForm';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * The primary index page of the application, which serves the login functionality.
 * It utilizes a centered layout (`MainAppLayout`) to present the `LoginForm` component.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
