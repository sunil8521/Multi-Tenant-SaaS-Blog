import type React from "react"
import { useState } from "react"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Label } from "@repo/ui/components/label"
import { Textarea } from "@repo/ui/components/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/tabs"
import { Switch } from "@repo/ui/components/switch"
import { Separator } from "@repo/ui/components/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/components/alert-dialog"
import { Upload, Save, Trash2, AlertTriangle, Loader2, Palette } from "lucide-react"
import { toast } from "sonner"

export default function TeamSettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [settings, setSettings] = useState({
    // General
    teamName: "Acme Corp",
    subdomain: "acme",
    description: "Building the future of technology, one blog post at a time.",
    logo: "/placeholder.svg?key=logo",

    // Branding
    primaryColor: "#3B82F6",
    customCSS: `/* Custom styles for your blog */
.post-content {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`,

    // Billing
    currentPlan: "pro",
    billingEmail: "billing@acmecorp.com",

    // Features
    allowComments: true,
    moderateComments: true,
    enableAnalytics: true,
    enableSEO: true,
    enableNewsletter: false,
  })

  const handleInputChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    setIsSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success("Settings saved successfully!")
    } catch (error) {
      toast.error("Failed to save settings. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setSettings((prev) => ({ ...prev, logo: url }))
      toast.success("Logo uploaded successfully!")
    }
  }

  const handleDeleteTeam = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Team deleted successfully")
      // In a real app, redirect to signup or home
    } catch (error) {
      toast.error("Failed to delete team")
    }
  }

  const plans = [
    { id: "free", name: "Free", price: "$0", features: ["Up to 3 members", "10 posts/month", "Basic analytics"] },
    {
      id: "pro",
      name: "Pro",
      price: "$10",
      features: ["Unlimited members", "Unlimited posts", "Advanced analytics", "Custom domain"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$50",
      features: ["Everything in Pro", "SSO", "Priority support", "Custom integrations"],
    },
  ]

  return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Team Settings</h1>
          <p className="text-muted-foreground">Manage your team's blog configuration and preferences</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="danger">Danger Zone</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Update your team's basic information and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="teamName">Team Name</Label>
                    <Input
                      id="teamName"
                      value={settings.teamName}
                      onChange={(e) => handleInputChange("teamName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subdomain">Subdomain</Label>
                    <div className="flex">
                      <Input
                        id="subdomain"
                        value={settings.subdomain}
                        onChange={(e) => handleInputChange("subdomain", e.target.value)}
                        className="rounded-r-none"
                      />
                      <div className="flex items-center px-3 bg-muted border border-l-0 rounded-r-md text-sm text-muted-foreground">
                        .teamblog.com
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={settings.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Team Logo</Label>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="w-16 h-16 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center overflow-hidden">
                      {settings.logo ? (
                        <img
                          src={settings.logo || "/placeholder.svg"}
                          alt="Team logo"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                        id="logo-upload"
                      />
                      <Button variant="outline" size="sm" asChild>
                        <label htmlFor="logo-upload" className="cursor-pointer">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Logo
                        </label>
                      </Button>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>Configure your blog's features and functionality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Comments</Label>
                    <p className="text-sm text-muted-foreground">Allow readers to comment on posts</p>
                  </div>
                  <Switch
                    checked={settings.allowComments}
                    onCheckedChange={(checked) => handleInputChange("allowComments", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Comment Moderation</Label>
                    <p className="text-sm text-muted-foreground">Require approval before comments are published</p>
                  </div>
                  <Switch
                    checked={settings.moderateComments}
                    onCheckedChange={(checked) => handleInputChange("moderateComments", checked)}
                    disabled={!settings.allowComments}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Analytics</Label>
                    <p className="text-sm text-muted-foreground">Track page views and engagement metrics</p>
                  </div>
                  <Switch
                    checked={settings.enableAnalytics}
                    onCheckedChange={(checked) => handleInputChange("enableAnalytics", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SEO Optimization</Label>
                    <p className="text-sm text-muted-foreground">Optimize posts for search engines</p>
                  </div>
                  <Switch
                    checked={settings.enableSEO}
                    onCheckedChange={(checked) => handleInputChange("enableSEO", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Newsletter</Label>
                    <p className="text-sm text-muted-foreground">Allow readers to subscribe to updates</p>
                  </div>
                  <Switch
                    checked={settings.enableNewsletter}
                    onCheckedChange={(checked) => handleInputChange("enableNewsletter", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Branding Settings */}
          <TabsContent value="branding" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Brand Customization
                </CardTitle>
                <CardDescription>Customize the look and feel of your blog</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex items-center space-x-4 mt-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange("primaryColor", e.target.value)}
                      className="w-16 h-10 p-1 border rounded"
                    />
                    <Input
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange("primaryColor", e.target.value)}
                      placeholder="#3B82F6"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="customCSS">Custom CSS</Label>
                  <Textarea
                    id="customCSS"
                    value={settings.customCSS}
                    onChange={(e) => handleInputChange("customCSS", e.target.value)}
                    rows={10}
                    className="font-mono text-sm"
                    placeholder="/* Add your custom CSS here */"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Add custom CSS to further customize your blog's appearance
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Settings */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Manage your subscription and billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {plans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`relative ${settings.currentPlan === plan.id ? "border-primary" : ""}`}
                    >
                      {settings.currentPlan === plan.id && (
                        <div className="absolute -top-2 left-4">
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">Current</span>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                        <div className="text-2xl font-bold">
                          {plan.price}
                          <span className="text-sm font-normal">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="w-full mt-4"
                          variant={settings.currentPlan === plan.id ? "outline" : "default"}
                          disabled={settings.currentPlan === plan.id}
                        >
                          {settings.currentPlan === plan.id ? "Current Plan" : "Upgrade"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator />

                <div>
                  <Label htmlFor="billingEmail">Billing Email</Label>
                  <Input
                    id="billingEmail"
                    type="email"
                    value={settings.billingEmail}
                    onChange={(e) => handleInputChange("billingEmail", e.target.value)}
                  />
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Invoice History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { date: "Jan 1, 2024", amount: "$10.00", status: "Paid" },
                        { date: "Dec 1, 2023", amount: "$10.00", status: "Paid" },
                        { date: "Nov 1, 2023", amount: "$10.00", status: "Paid" },
                      ].map((invoice, index) => (
                        <div key={index} className="flex items-center justify-between py-2">
                          <div>
                            <div className="font-medium">{invoice.date}</div>
                            <div className="text-sm text-muted-foreground">Pro Plan</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{invoice.amount}</div>
                            <div className="text-sm text-green-600">{invoice.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Danger Zone */}
          <TabsContent value="danger" className="space-y-6">
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="flex items-center text-destructive">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Danger Zone
                </CardTitle>
                <CardDescription>Irreversible and destructive actions. Please proceed with caution.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                  <h3 className="font-semibold text-destructive mb-2">Delete Team</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Once you delete your team, there is no going back. This will permanently delete your team, all
                    posts, comments, and remove all team members.
                  </p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Team
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your team "{settings.teamName}" and
                          remove all associated data including posts, comments, and team members.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDeleteTeam}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Yes, delete team
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>
  )
}
