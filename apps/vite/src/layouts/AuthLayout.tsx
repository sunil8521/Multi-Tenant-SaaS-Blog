import type React from "react"
import {Link, Outlet} from "react-router-dom"
import { FileText } from "lucide-react"


 function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/10 via-primary/5 to-background items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
              <FileText className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold">TeamLog</span>
          </div>
          <h1 className="text-4xl font-bold text-balance mb-4">Create Team Blogs Like Medium</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Secure, multi-tenant spaces for your company's stories. Collaborate & publish effortlessly.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">TeamLog</span>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout