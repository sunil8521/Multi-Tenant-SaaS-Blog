import type React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, LogOut, User as UserIcon,UserStar } from "lucide-react";
import { useAppSelector } from "../state/hook";
import { authClient } from "../lib/authClient";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {removeUser} from "../state/slices/authSlice";
import { useAppDispatch } from "../state/hook";
function PublicLayout() {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const isAdmin = user?.role === "ADMIN";
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          dispatch(removeUser());

        },
      },
    });
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TL</span>
              </div>
              <span className="font-bold text-xl">TeamLog</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {/* <Link
                to="/"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Explore
              </Link> */}
              {/* {user && (
                <Link
                  to="/write"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  Write
                </Link>
              )} */}
              {/* {isAdmin && (
                <Link
                  to="/admin"
                  className="text-sm font-medium text-blue-600 border border-blue-600 rounded-md px-2 py-1 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Admin Panel
                </Link>
              )} */}
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-3">
              {!user ? (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                </>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer flex items-center space-x-2">
                      <Avatar className="h-10 w-10">
                        {user.image ? (
                          <AvatarImage
                            src={`https://d1egxlljzt31im.cloudfront.net/${user.image}`}
                            alt={user.name || "User"}
                          />
                        ) : (
                          <AvatarFallback>
                            {user.name?.[0]?.toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                      <Link
                        to="/admin/dashboard"
                        className="flex items-center space-x-2"
                      >
                        <UserStar  className="h-4 w-4" />
                        <span>Admin panel</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2"
                      >
                        <UserIcon className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-600"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              {user && (
                <div className="flex items-center pr-0">
                  {/* Name + Role */}
                  <div className="flex items-center pr-0">
                    <span className="font-medium text-sm text-foreground">
                      {user.name.split(" ")[0]}
                    </span>
                    {isAdmin && (
                      <span className="ml-1 inline-flex items-center rounded-full bg-red-100 text-red-800 text-[10px] px-2 py-0.5 font-semibold uppercase tracking-wide">
                        Admin
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Drawer Trigger */}
            <div className="md:hidden">
              <Drawer direction="right">
                {" "}
                {/* ✅ opens from right */}
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="h-full w-72 sm:w-80 right-0 fixed bg-background shadow-lg rounded-l-2xl p-5 flex flex-col justify-between">
                  {/* Header Links */}
                  <DrawerHeader className=" text-center border-b pb-4 mb-4">
                    <DrawerTitle className="text-lg font-semibold">Menu</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                  </DrawerHeader>

                  <div className="flex text-center flex-col flex-grow space-y-4">
                    <Link
                      to="/"
                      className="text-sm  font-medium hover:text-blue-600 transition-colors"
                    >
                      Explore
                    </Link>

                   

                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="text-sm font-medium text-blue-600 border border-blue-600 rounded-md px-2 py-1 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        Admin Panel
                      </Link>
                    )}

                    <div className="border-t pt-4 mt-auto">
                      {!user ? (
                        <div className="flex flex-col space-y-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to="/login">Sign In</Link>
                          </Button>
                     
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-2">
                          <Link
                            to="/profile"
                            className="text-sm font-medium hover:text-blue-600 transition-colors"
                          >
                            Profile
                          </Link>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={handleLogout}
                            className="flex items-center space-x-2 justify-center"
                          >
                            <LogOut className="h-4 w-4" />
                            <span>Logout</span>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TB</span>
                </div>
                <span className="font-bold text-xl">TeamBlog</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The collaborative blogging platform for teams and individuals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/write"
                    className="hover:text-foreground transition-colors"
                  >
                    Write
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-foreground transition-colors"
                  >
                    Join
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 TeamBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default PublicLayout;
