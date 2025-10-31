import { Loader2 } from "lucide-react";

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export default function Loading({ message = "Loading...", fullScreen = false }: LoadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 text-muted-foreground ${
        fullScreen ? "h-screen w-full" : "py-8"
      }`}
    >
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}

// Usage:
// {isLoading && <Loading message="Fetching posts..." fullScreen />}
