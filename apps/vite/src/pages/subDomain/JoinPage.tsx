
import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Label } from "@repo/ui/components/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Alert, AlertDescription } from "@repo/ui/components/alert"
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle, Users } from "lucide-react"
import {Link} from "react-router-dom"
import { toast } from "sonner"
import { useSearchParams } from "react-router-dom"

export default function JoinPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [tokenValid, setTokenValid] = useState<boolean | null>(null)
  const [inviteData, setInviteData] = useState<{
    teamName: string
    inviterName: string
    email: string
  } | null>(null)
  const [isExistingUser, setIsExistingUser] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    // Validate token and get invite data
    const validateToken = async () => {
      if (!token) {
        setTokenValid(false)
        return
      }

      try {
        // Simulate API call to validate token
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock invite data
        setInviteData({
          teamName: "Acme Corp",
          inviterName: "John Smith",    
          email: "newuser@example.com",
        })
        setFormData((prev) => ({ ...prev, email: "newuser@example.com" }))
        setTokenValid(true)

        // Check if user already exists
        // setIsExistingUser(true) // Uncomment to test existing user flow
      } catch (error) {
        setTokenValid(false)
      }
    }

    validateToken()
  }, [token])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!isExistingUser) {
      if (!formData.fullName) {
        newErrors.fullName = "Full name is required"
      }
      if (!formData.password) {
        newErrors.password = "Password is required"
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters"
      }
    } else {
      if (!formData.password) {
        newErrors.password = "Password is required"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      toast.success(`Welcome to ${inviteData?.teamName}!`)

      // Simulate confetti animation
      setTimeout(() => {
        // In a real app, redirect to dashboard
        // router.push('/dashboard')
      }, 2000)
    } catch (error) {
      toast.error("Failed to join team. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (tokenValid === null) {
    return (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          </CardContent>
        </Card>
    )
  }

  if (tokenValid === false) {
    return (
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl">Invalid or Expired Invite</CardTitle>
            <CardDescription>This invitation link is no longer valid</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <AlertDescription>
                The invitation link you used is either invalid or has expired. Please contact your team administrator
                for a new invitation.
              </AlertDescription>
            </Alert>

            <Button asChild className="w-full">
              <Link to="/signup">Create New Account</Link>
            </Button>

            <div className="text-center">
              <Link to="/login" className="text-sm text-primary hover:underline">
                Already have an account? Log in
              </Link>
            </div>
          </CardContent>
        </Card>
    )
  }

  if (isSuccess) {
    return (
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl">Welcome to {inviteData?.teamName}!</CardTitle>
            <CardDescription>You've successfully joined the team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl">🎉</div>
              <p className="text-muted-foreground">Redirecting you to your team dashboard...</p>
              <Button asChild className="w-full">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
    )
  }

  return (
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            {isExistingUser ? `Welcome back!` : `Join ${inviteData?.teamName}`}
          </CardTitle>
          <CardDescription>
            {isExistingUser
              ? `Log in to join ${inviteData?.teamName}`
              : `${inviteData?.inviterName} has invited you to join their team blog`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email (readonly) */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} disabled className="bg-muted" />
            </div>

            {/* Full Name (only for new users) */}
            {!isExistingUser && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.fullName}
                  </p>
                )}
              </div>
            )}

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">{isExistingUser ? "Password" : "Create Password"}</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={isExistingUser ? "Enter your password" : "Create a strong password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={errors.password ? "border-destructive pr-10" : "pr-10"}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isExistingUser ? "Joining Team..." : "Creating Account..."}
                </>
              ) : (
                `Join ${inviteData?.teamName}`
              )}
            </Button>
          </form>

          {isExistingUser && (
            <div className="mt-6 text-center">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot your password?
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
  )
}
