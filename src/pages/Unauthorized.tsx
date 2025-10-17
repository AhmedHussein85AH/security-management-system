import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const Unauthorized = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-red-50 p-8 rounded-lg border border-red-100 max-w-md w-full text-center">
        <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-red-800 mb-2">Access Denied</h1>
        <p className="text-red-600 mb-6">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <Button onClick={() => navigate("/dashboard")} className="w-full">
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;