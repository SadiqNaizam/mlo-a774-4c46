import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // This handler would be connected to the MSAL instance to trigger the login flow.
  const handleLogin = () => {
    setIsLoading(true);
    console.log('Initiating MSAL login...');

    // In a real application with @azure/msal-react, you would use the hook:
    // const { instance } = useMsal();
    // And then call:
    // instance.loginRedirect().catch(e => console.error(e));

    // Simulate a network redirect
    setTimeout(() => {
      console.log('MSAL login simulation finished.');
      setIsLoading(false);
      // After a real login redirect, the app re-renders in an authenticated state.
    }, 1500);
  };

  return (
    <Card className="w-[400px] bg-card shadow-lg rounded-lg">
      <CardHeader className="p-6 text-center">
        <CardTitle className="text-3xl font-bold text-card-foreground">Sign In</CardTitle>
        <CardDescription className="pt-2 text-muted-foreground">
          Use your organization's account to sign in.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex flex-col items-center space-y-4">
          <Button 
            onClick={handleLogin}
            className="w-full !mt-6" 
            disabled={isLoading}
          >
            {isLoading ? 'Redirecting...' : 'Sign in with Microsoft'}
          </Button>
          <p className="px-8 pt-4 text-center text-sm text-muted-foreground">
            By clicking continue, you will be redirected to the Microsoft login page to authenticate.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;