import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  CheckCircle,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useVerifyInviteMutation } from "../../state/api/userApi";
import { Checkbox } from "@/components/ui/checkbox";

export default function JoinPage() {
  const [verifyInvite, { isLoading, data, isError }] =
    useVerifyInviteMutation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("c");
  const [showPassword, setShowPassword] = useState(false);
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  interface JoinFormValues {
    email: string;
    fullName: string;
    jobTitle?: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JoinFormValues>({});

  const password = watch("password");

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setTokenValid(false);
        return;
      }

      try {
        await verifyInvite({ token }).unwrap();
        setTokenValid(true);
      } catch (error) {
        setTokenValid(false);
      }
    };

    validateToken();
  }, [token]);

  const onSubmit = async (formData: JoinFormValues): Promise<void> => {
    console.log(formData);
  };

  const handleJoinTeam = async () => {
    console.log("join");
  };

  if (tokenValid === false) {
    return <InvalidTokenAlert />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isError ? (
            <InvalidTokenAlert />
          ) : (
            <>
              {data?.signup ? (
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Join the Team</CardTitle>
                    <CardDescription>
                      You’re signing up with{" "}
                      <span className="font-medium text-foreground">
                        {data?.data.email}
                      </span>{" "}
                      to join this team as{" "}
                      <span className="font-semibold text-primary">
                        {data?.data.role || "member"}
                      </span>
                      .
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      {/* Email (readonly) */}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          value={data?.data.email}
                          id="email"
                          type="email"
                          disabled
                          {...register("email")}
                          className="bg-muted"
                        />
                      </div>

                      {/* Full Name */}
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          placeholder="John Doe"
                          {...register("fullName", {
                            required: "Full name is required",
                          })}
                        />
                        {errors.fullName && (
                          <p className="text-sm text-destructive flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.fullName.message as string}
                          </p>
                        )}
                      </div>

                      {/* Optional Job Title */}
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title (optional)</Label>
                        <Input
                          id="jobTitle"
                          placeholder="e.g. Developer, Writer"
                          {...register("jobTitle")}
                        />
                      </div>

                      {/* Password */}
                      <div className="space-y-2">
                        <Label htmlFor="password">Create Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Password must be at least 6 characters",
                              },
                            })}
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
                        {errors.password && (
                          <p className="text-sm text-destructive flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.password.message as string}
                          </p>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Re-enter your password"
                          {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                              value === password || "Passwords do not match",
                          })}
                        />
                        {errors.confirmPassword && (
                          <p className="text-sm text-destructive flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.confirmPassword.message as string}
                          </p>
                        )}
                      </div>

                      {/* Terms and Conditions */}
                      <div className="mt-5  flex  gap-2">
                        <input
                          id="terms"
                          type="checkbox"
                          {...register("terms", { required: true })}
                        />

                        <Label
                          htmlFor="terms"
                          className="text-sm font-normal text-muted-foreground"
                        >
                          I agree to the Terms & Conditions
                        </Label>
                      </div>
                      {errors.terms && (
                        <p className="text-sm text-destructive flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          You must accept the terms to continue
                        </p>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating Account...
                          </>
                        ) : (
                          "Create Account & Join Team"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <JoinTeam
                  email={data?.data.email as string}
                  role={data?.data.role as string}
                  teamId={data?.data.teamId as string}
                  handleJoinTeam={handleJoinTeam}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

const InvalidTokenAlert = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
          <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
        </div>
        <CardTitle className="text-2xl">Invalid or Expired Invite</CardTitle>
        <CardDescription>
          This invitation link is no longer valid
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert variant="destructive">
          <AlertDescription>
            The invitation link you used is either invalid or has expired.
            Please contact your team administrator for a new invitation.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};
const Loader = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </CardContent>
    </Card>
  );
};

const JoinTeam = ({
  email,
  role,
  teamId,
  handleJoinTeam,
}: {
  email: string;
  role: string;
  teamId: string;
  handleJoinTeam: () => Promise<void>;
}) => {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <CardTitle className="text-2xl">Welcome to the Team!</CardTitle>
        <CardDescription>
          You already have an account on this website
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="text-center space-y-4">
          <div className="text-6xl">👋</div>

          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{email}</span>
            <br />
            invited as <span className="font-semibold">{role}</span>
          </p>

          <Button
            asChild
            className="w-full"
            onClick={() => {
              handleJoinTeam;
            }}
          >
            Join the Team
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
