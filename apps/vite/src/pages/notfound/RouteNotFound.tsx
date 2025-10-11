import { Button } from "@repo/ui/components/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/card";
import { useNavigate } from "react-router-dom";

// Assuming this is your RouteNotFound component (pages/RouteNotFound.tsx or similar)
// For invalid paths within the app (e.g., /invalid-route)
export default function RouteNotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to home/landing
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-black bg-white shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Oops!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">Page Not Found</h1>
          <p className="text-lg mb-2">The path you entered does not exist.</p>
          <p className="text-sm">Please check the URL or return to the home page.</p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button 
            onClick={handleGoHome} 
            className="bg-black text-white hover:bg-gray-800"
          >
            Go to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
