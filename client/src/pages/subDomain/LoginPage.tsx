import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {  useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authApi from "../../state/api/userApi";
// import  AuthLayout from "../layouts/AuthLayout"
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { authClient } from "../../lib/authClient";
import { useAppDispatch } from "../../state/hook";
import { addUser } from "../../state/slices/authSlice";
type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

function LoginPage() {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password
    , rememberMe }) => {
    const res = await authClient.signIn.email({ email, password,   rememberMe: rememberMe });

    if (res.error) {
      toast.error(res.error.message);
      return;
    }
    
    if (res.data) {
      toast.success("Login successful!");

      // Optionally fetch and store user profile here — import your API slice and user actions.
      // Example:
      const userProfile = await dispatch(
        authApi.endpoints.fetchProfile.initiate()
      ).unwrap();
      dispatch(addUser(userProfile.data));

      navigate("/");
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Sign in to your TeamBlog account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pr-10"
                {...register("password", { required: "Password is required" })}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            
              <input
                id="rememberMe"
                type="checkbox"
                {...register("rememberMe", { required: false })}
              />

              <Label htmlFor="rememberMe" className="text-sm">
                Remember me{" "}
              </Label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              "Log In"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link to="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </div>

        {/* Demo Credentials */}
      
      </CardContent>
    </Card>
  );
}

export default LoginPage;
