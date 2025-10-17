import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { UserPermissions } from '@/components/users/UserTypes';
import { loginUser, logoutUser, getCurrentUser } from '@/services/authService';

interface User {
  id: string;
  email: string;
  role: string;
  name: string;
  organization?: string;
  permissions?: UserPermissions;
  token?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: keyof UserPermissions) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock login - in a real app, we'd make an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Add your specific user credentials
      if (email === "AhmedHusseinElsayed@outlook.com" && password === "Cas@135$") {
        const user = {
          id: "2",
          email,
          role: "Admin",
          name: "Ahmed Hussein Elsayed",
          permissions: {
            viewCases: true,
            manageCases: true,
            viewReports: true,
            generateReports: true,
            viewUsers: true,
            manageUsers: true,
            viewMessages: true,
            manageSettings: true,
          }
        };
        
        localStorage.setItem("caseGuardianUser", JSON.stringify(user));
        setUser(user);
        
        toast({
          title: "Login successful",
          description: "Welcome to CCTV Case Guardian, Ahmed",
        });
        
        navigate("/dashboard");
      }
      else if (email === "admin@demo.local" && password === "admin123") {
        const user = {
          id: "admin-demo",
          email,
          role: "Admin",
          name: "Demo Admin",
          permissions: {
            viewCases: true,
            manageCases: true,
            viewReports: true,
            generateReports: true,
            viewUsers: true,
            manageUsers: true,
            viewMessages: true,
            manageSettings: true,
          }
        };
        localStorage.setItem("caseGuardianUser", JSON.stringify(user));
        setUser(user);
        toast({ title: "Login successful", description: "Welcome to CCTV Case Guardian, Demo Admin" });
        navigate("/dashboard");
      }
      else if (email === "user@demo.local" && password === "user123") {
        const user = {
          id: "user-demo",
          email,
          role: "User",
          name: "Demo User",
          permissions: {
            viewCases: true,
            manageCases: false,
            viewReports: true,
            generateReports: false,
            viewUsers: false,
            manageUsers: false,
            viewMessages: true,
            manageSettings: false,
          }
        };
        localStorage.setItem("caseGuardianUser", JSON.stringify(user));
        setUser(user);
        toast({ title: "Login successful", description: "Welcome to CCTV Case Guardian, Demo User" });
        navigate("/dashboard");
      }
      else {
        // Allow any email/password combination for testing
        const userData = await loginUser(email, password);
        
        setUser(userData);
        
        toast({
          title: "Login successful",
          description: `Welcome to CCTV Case Guardian${userData.name ? ', ' + userData.name : ''}`,
        });
        
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Login error",
        description: error.response?.data?.message || "Failed to log in. Please try again.",
        variant: "destructive",
      });
      console.error("Login error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    navigate('/login');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const hasPermission = (permission: keyof UserPermissions): boolean => {
    if (!user || !user.permissions) return false;
    return user.permissions[permission] === true;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading,
      login,
      logout,
      hasPermission,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
