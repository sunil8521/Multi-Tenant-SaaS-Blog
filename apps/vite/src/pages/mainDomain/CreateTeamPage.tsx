import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@repo/ui/components/select";
import { Textarea } from "@repo/ui/components/textarea";
import { Checkbox } from "@repo/ui/components/checkbox";
import { cn } from "@repo/ui/lib/utils";
import { toast } from "sonner";

type FormValues = {
  teamName: string;
  subdomain?: string;
  description?: string;
  industry?: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  jobTitle?: string;
  terms?: boolean;
};

export default function TeamSignupForm({ className }: { className?: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      teamName: "",
      subdomain: "",
      description: "",
      industry: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      jobTitle: "",
      terms: false,
    },
  });

  const onNext = async () => {
    const valid = await trigger([
      "teamName",
      "subdomain",
      "description",
      "industry",
    ]);
    if (valid) setStep(2);
  };

  const onBack = () => setStep(1);

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/team/create-team`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      toast.success(data.message);
    // const data = { subdomain: "hulhal" }; // mock data
      const currentHost = window.location.hostname;
      const currentPort = window.location.port
        ? `:${window.location.port}`
        : "";
      const protocol = window.location.protocol;
      const teamUrl = `${protocol}//${data.subdomain}.${currentHost}${currentPort}`;
      // Redirect to the new subdomain
      window.location.href = teamUrl;
    } catch (err) {
      console.log("Error creating team:", err);
    }
  };

  const FieldError = ({ message }: { message?: string }) => {
    if (!message) return null;
    return (
      <div className="mt-1 flex items-start gap-1.5 text-sm text-destructive">
        <AlertCircle className="mt-0.5 h-4 w-4" />
        <span>{message}</span>
      </div>
    );
  };

  const Stepper = () => (
    <div className="mb-2 flex items-center justify-center gap-3 text-sm text-muted-foreground">
      <div
        className={cn("flex items-center gap-2", step === 1 && "text-primary")}
      >
        <div
          className={cn(
            "grid h-6 w-6 place-items-center rounded-full border",
            step >= 1
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-muted"
          )}
        >
          {step > 1 ? (
            <Check className="h-4 w-4" />
          ) : (
            <span className="text-[10px]">1</span>
          )}
        </div>
        <span className="font-medium">Team Info</span>
      </div>
      <ChevronRight className="h-4 w-4 opacity-60" />
      <div
        className={cn("flex items-center gap-2", step === 2 && "text-primary")}
      >
        <div
          className={cn(
            "grid h-6 w-6 place-items-center rounded-full border",
            step === 2
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-muted"
          )}
        >
          <span className="text-[10px]">2</span>
        </div>
        <span className="font-medium">Owner Info</span>
      </div>
    </div>
  );

  return (
    <main
      className={cn(
        "relative mx-auto flex min-h-[80vh] w-full max-w-2xl items-center justify-center px-4 py-10",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-muted to-transparent" />
      <div className="pointer-events-none absolute -top-24 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <Card className="w-full border-border/60 bg-card/95 shadow-sm backdrop-blur">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold text-primary">
            Create Team & Sign Up
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Set up your team space and owner account in two quick steps.
          </p>
          <Stepper />
        </CardHeader>

        <CardContent>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {step === 1 ? (
              <section aria-label="Team information">
                {/* Team Name */}
                <div className="grid gap-2">
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input
                    {...register("teamName", {
                      required: "Team name is required",
                    })}
                    placeholder="Acme Marketing"
                  />
                  <FieldError message={errors.teamName?.message} />
                </div>

                {/* Subdomain */}
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="subdomain">Subdomain</Label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-muted-foreground">
                      https://
                    </div>
                    <Input
                      {...register("subdomain", {
                        required: "Subdomain is required",
                        pattern: {
                          value: /^[a-z0-9-]+$/,
                          message:
                            "Only lowercase letters, numbers, and hyphens are allowed",
                        },
                      })}
                      placeholder="your-team"
                      className="pl-20 pr-32"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-3 hidden items-center text-sm text-muted-foreground sm:flex">
                      .sunilspace.me
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground sm:hidden">
                    Your team URL will be https://
                    {watch("subdomain") || "<your-team>"}.sunilspace.me
                  </p>
                  <FieldError message={errors.subdomain?.message} />
                </div>

                {/* Description */}
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="description">
                    Team Description (optional)
                  </Label>
                  <Textarea
                    {...register("description", {
                      maxLength: {
                        value: 500,
                        message: "Maximum 500 characters",
                      },
                    })}
                    placeholder="Tell us about your team..."
                    className="min-h-24 resize-y"
                  />
                  <FieldError message={errors.description?.message} />
                </div>

                {/* Industry & Team Size */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="industry" className="text-sm font-medium">
                      Industry / Category
                    </Label>

                    {/* register a hidden input so react-hook-form can validate this custom Select */}
                    <input
                      type="hidden"
                      {...register("industry", {
                        required: "Industry is required",
                      })}
                    />

                    <Select
                      onValueChange={(v) =>
                        setValue("industry", v, { shouldValidate: true })
                      }
                      value={watch("industry") || ""}
                    >
                      <SelectTrigger
                        id="industry"
                        aria-required="true"
                        className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <FieldError message={errors.industry?.message} />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button type="button" onClick={onNext} className="gap-2">
                    Continue <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </section>
            ) : (
              <section aria-label="Owner information">
                {/* Full Name */}
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    placeholder="Jane Doe"
                  />
                  <FieldError message={errors.fullName?.message} />
                </div>

                {/* Email */}
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="you@example.com"
                  />
                  <FieldError message={errors.email?.message} />
                </div>

                {/* Password */}
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "At least 8 characters" },
                      validate: (v) =>
                        (/[A-Z]/.test(v) &&
                          /[a-z]/.test(v) &&
                          /[0-9]/.test(v)) ||
                        "Include uppercase, lowercase, and number",
                    })}
                    placeholder="••••••••"
                  />
                  <FieldError message={errors.password?.message} />
                </div>

                {/* Confirm Password */}
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (v) =>
                        v === watch("password") || "Passwords do not match",
                    })}
                    placeholder="••••••••"
                  />
                  <FieldError message={errors.confirmPassword?.message} />
                </div>

                {/* Job Title */}
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="jobTitle">Job Title (optional)</Label>
                  <Input
                    {...register("jobTitle")}
                    placeholder="Head of Operations"
                  />
                </div>

                {/* Terms */}
                <div className="mt-5 flex items-start gap-2">
                  <Checkbox
                    checked={!!watch("terms")}
                    onCheckedChange={(v) => setValue("terms", Boolean(v))}
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    I agree to the Terms & Conditions (optional)
                  </Label>
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={onBack}
                    className="gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Team & Sign Up"}
                  </Button>
                </div>
              </section>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
