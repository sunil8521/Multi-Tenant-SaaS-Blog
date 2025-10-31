// LoadingPage.tsx
import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="w-15 h-15 dark:text-white text-black animate-spin" />
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
