import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Define the validation schema for the form using Zod
const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

// Infer the TypeScript type from the Zod schema
type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize react-hook-form with the Zod resolver
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // Define the submit handler function
  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login attempt with:', data);

    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
      // In a real application, you would handle success/error states here,
      // such as redirecting the user or showing a toast notification.
      // form.reset(); // Optionally reset form on success
    }, 1500);
  };

  return (
    <Card className="w-[400px] bg-card shadow-lg rounded-lg">
      <CardHeader className="p-6">
        <CardTitle className="text-center text-3xl font-bold text-card-foreground">Log in</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username" {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full !mt-6 bg-accent text-accent-foreground hover:bg-accent/90" 
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>
        </Form>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          or,{' '}
          <a href="#" className="underline hover:text-primary">
            sign up
          </a>
        </p>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
