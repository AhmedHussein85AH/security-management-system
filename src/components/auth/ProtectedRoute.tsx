import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { usePermissions } from '@/hooks/usePermissions';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredPermission?: string;
}

export const ProtectedRoute = ({ 
  children, 
  requiredPermission 
}: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { checkPermission } = usePermissions();
  
  // If still loading auth state, show nothing or a loading spinner
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // If permission check is required and user doesn't have permission
  if (requiredPermission && !checkPermission(requiredPermission)) {
    return <Navigate to="/unauthorized" />;
  }
  
  // User is authenticated and has permission (if required)
  return <>{children}</>;
};