import { Button } from "@repo/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar"
import { FileText, Users, BarChart3, Globe, Check, Star, ArrowRight, Zap } from "lucide-react"
import {Link} from "react-router-dom"
const features = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite team members, assign roles, and collaborate seamlessly on your company blog.",
  },
  {
    icon: FileText,
    title: "Rich Editor",
    description: "Beautiful, intuitive editor with all the formatting tools you need to create engaging content.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track views, engagement, and performance with detailed analytics and insights.",
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Use your own domain or get a custom subdomain to match your brand perfectly.",
  },
]

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for small teams getting started",
    features: ["Up to 3 team members", "10 posts per month", "Basic analytics", "Community support"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$10",
    period: "per month",
    description: "For growing teams that need more",
    features: [
      "Unlimited team members",
      "Unlimited posts",
      "Advanced analytics",
      "Custom subdomain",
      "Priority support",
      "Custom branding",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$50",
    period: "per month",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "SSO integration",
      "Advanced permissions",
      "Custom domain",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const testimonials = [
  {
    quote: "TeamBlog transformed how we share knowledge internally. Our team engagement has increased 300%.",
    author: "Sarah Chen",
    role: "Head of Content",
    company: "TechCorp",
    avatar: "/sarah-chen-avatar.jpg",
  },
  {
    quote: "The analytics help us understand what content resonates. It's like Medium but built for teams.",
    author: "Marcus Johnson",
    role: "Marketing Director",
    company: "StartupXYZ",
    avatar: "/marcus-johnson-avatar.jpg",
  },
  {
    quote: "Setup was incredibly easy. We had our team blog running in minutes, not hours.",
    author: "Emily Rodriguez",
    role: "Operations Manager",
    company: "GrowthCo",
    avatar: "/emily-rodriguez-avatar.jpg",
  },
]

 function LandingPage() {
  return (
<div className="min-h-screen bg-background">
  {/* Header */}
  <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <FileText className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold">TeamBlog</span>
      </Link>

      <div className="flex items-center space-x-4">
        {/* Primary CTA: Create Team */}
        <Button asChild>
          <Link to="/create-team">Create Your Team</Link>
        </Button>
      </div>
    </div>
  </header>

  {/* Hero Section */}
  <section className="py-20 px-4">
    <div className="container mx-auto text-center max-w-4xl">
      <Badge variant="secondary" className="mb-4">
        <Zap className="w-3 h-3 mr-1" />
        Now with AI-powered writing assistance
      </Badge>
      <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
        Create Team Blogs Like Medium –<span className="text-primary"> Collaborate & Publish</span> Effortlessly
      </h1>
      <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
        Secure, multi-tenant spaces for your company's stories. Build your brand, share knowledge, and engage your
        audience with beautiful team blogs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild className="text-lg px-8">
          <Link to="/create-team">
            Create Your Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-4">No credit card required • 14-day free trial</p>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need for team blogging</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful features designed specifically for teams who want to create, collaborate, and publish amazing
          content together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Pricing Section */}
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-xl text-muted-foreground">Choose the plan that's right for your team</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className={`relative ${tier.popular ? "border-primary shadow-lg scale-105" : ""}`}>
            {tier.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/{tier.period}</span>
              </div>
              <CardDescription className="mt-2">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                <Link to="/create-team">{tier.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by teams worldwide</h2>
        <p className="text-xl text-muted-foreground">See what our customers have to say about TeamBlog</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your team blog?</h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join thousands of teams already using TeamBlog to share their stories and build their brand.
      </p>
      <Button size="lg" asChild className="text-lg px-8">
        <Link to="/create-team">
          Create Your Team
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t bg-card/50 py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TeamBlog</span>
          </Link>
          <p className="text-muted-foreground">
            Create team blogs like Medium. Collaborate & publish effortlessly.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="#" className="hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Templates
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Integrations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="#" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="#" className="hover:text-foreground">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-foreground">
                Status
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
        <p>&copy; 2024 TeamBlog. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>

  )
}
export default LandingPage;