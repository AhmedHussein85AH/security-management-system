import { useAuth } from './useAuth';

export const usePermissions = () => {
  const { user } = useAuth();
  
  const rolePermissions = {
    Admin: {
      canCreateUsers: true,
      canDeleteUsers: true,
      canEditUsers: true,
      canViewAllCases: true,
      canCreateCases: true,
      canDeleteCases: true,
      canEditCases: true,
      canAccessReports: true,
      canAccessSettings: true
    },
    Manager: {
      canCreateUsers: false,
      canDeleteUsers: false,
      canEditUsers: true,
      canViewAllCases: true,
      canCreateCases: true,
      canDeleteCases: false,
      canEditCases: true,
      canAccessReports: true,
      canAccessSettings: false
    },
    Operator: {
      canCreateUsers: false,
      canDeleteUsers: false,
      canEditUsers: false,
      canViewAllCases: false,
      canCreateCases: true,
      canDeleteCases: false,
      canEditCases: true,
      canAccessReports: false,
      canAccessSettings: false
    }
  };

  const checkPermission = (permission: string): boolean => {
    if (!user) return false;
    
    const userRole = user.role;
    // @ts-ignore - Dynamic access
    return rolePermissions[userRole]?.[permission] || false;
  };

  return { checkPermission };
};