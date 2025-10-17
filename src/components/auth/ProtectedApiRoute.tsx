import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedApiRouteProps {
  children: ReactNode;
  requiredPermission?: string;
}

export const ProtectedApiRoute = ({ 
  children, 
  requiredPermission 
}: ProtectedApiRouteProps) => {
  const { isAuthenticated, isLoading, hasPermission } = useAuth();
  const location = useLocation();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check if user has required permission
    if (!isLoading && requiredPermission) {
      setIsAuthorized(hasPermission(requiredPermission as any));
    } else if (!isLoading && !requiredPermission) {
      setIsAuthorized(true);
    }
  }, [isLoading, requiredPermission, hasPermission]);
  
  // If still loading auth state, show loading indicator
  if (isLoading || isAuthorized === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse-gentle">
          <div className="h-12 w-12 rounded-full bg-primary/30"></div>
          <p className="mt-4 text-sm text-muted-foreground">Verifying access...</p>
        </div>
      </div>
    );
  }
  
  // If not authenticated, redirect to login with return URL
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If permission check is required and user doesn't have permission
  if (requiredPermission && !isAuthorized) {
    return <Navigate to="/unauthorized" />;
  }
  
  // User is authenticated and has permission (if required)
  return <>{children}</>;
};