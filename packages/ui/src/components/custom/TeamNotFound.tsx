import { Card, CardContent, CardHeader, CardTitle } from "../card.js";

// Assuming this is your NotFound component (pages/NotFound.tsx or similar)
 function TeamNotFound() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-black bg-white shadow-none">
        <CardHeader className="border-b border-black">
          <CardTitle className="text-2xl font-bold text-center">BlogApp</CardTitle> {/* Replace "BlogApp" with your main website name */}
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <h1 className="text-6xl font-extrabold mb-4">404</h1>
          <p className="text-xl mb-2">Team Not Found</p>
          <p className="text-sm">The subdomain you entered does not exist. Please check the URL or create a new team on the main site.</p>
        </CardContent>
      </Card>
    </div>
  );
}
export default TeamNotFound;