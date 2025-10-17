
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Trash } from "lucide-react";
import { User } from "./UserTypes";

interface UserActionsMenuProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onToast: (title: string, description: string) => void;
}

export function UserActionsMenu({ user, onEdit, onDelete, onToast }: UserActionsMenuProps) {
  // Function to handle viewing a user's profile
  const handleViewProfile = (e: React.MouseEvent, user: User) => {
    e.stopPropagation();
    
    // Get existing users from localStorage to ensure we have the latest data
    const existingUsers = JSON.parse(localStorage.getItem('case-guardian-users') || '[]');
    const currentUser = existingUsers.find((u: User) => u.id === user.id);
    
    if (currentUser) {
      // Here you would typically navigate to a profile page or open a profile dialog
      // For now, we'll show a more detailed toast with user information
      onToast(
        "User Profile: " + currentUser.name,
        `Email: ${currentUser.email}\nRole: ${currentUser.role}\nDepartment: ${currentUser.department}\nStatus: ${currentUser.status}`
      );
    } else {
      onToast("Error", "User profile not found");
    }
  };

  // Function to handle resetting a user's password
  const handleResetPassword = (e: React.MouseEvent, user: User) => {
    e.stopPropagation();
    
    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('case-guardian-users') || '[]');
    const userIndex = existingUsers.findIndex((u: User) => u.id === user.id);
    
    if (userIndex !== -1) {
      // In a real application, you would send a password reset email
      // For this demo, we'll just reset the password in localStorage (simulated)
      const tempPassword = "Reset" + Math.floor(100000 + Math.random() * 900000); // Generate a temporary password
      
      // In a real app, you would store a password reset token, not the actual password
      // This is just for demonstration purposes
      existingUsers[userIndex].passwordResetRequested = true;
      localStorage.setItem('case-guardian-users', JSON.stringify(existingUsers));
      
      // Trigger storage event to update UI
      window.dispatchEvent(new Event('storage'));
      
      onToast(
        "Password Reset Initiated", 
        `A password reset link has been sent to ${user.email}. Temporary password: ${tempPassword}`
      );
    } else {
      onToast("Error", "User not found");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 p-0 focus:ring-2 focus:ring-offset-2"
          onClick={(e) => {
            // Prevent event propagation to avoid conflicts with row click handlers
            e.stopPropagation();
          }}
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={(e) => handleViewProfile(e, user)}
        >
          View profile
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={(e) => {
            e.stopPropagation();
            onEdit(user);
          }}
        >
          Edit user
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={(e) => handleResetPassword(e, user)}
        >
          Reset password
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="text-destructive"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user);
          }}
        >
          <Trash className="h-4 w-4 mr-2" />
          Delete user
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
