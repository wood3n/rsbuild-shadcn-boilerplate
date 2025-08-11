import { useEffect, useRef } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center">
      <div className="flex w-full justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Rsbuild Shadcn Boilerplate</h1>
        <ThemeToggle />
      </div>
      <div className="flex min-h-0 flex-[1] items-center justify-center overflow-auto">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input ref={inputRef} id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </Button>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" variant="default" className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Home;
