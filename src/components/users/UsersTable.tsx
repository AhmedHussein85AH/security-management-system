
import { User } from "./UserTypes";
import { UserActionsMenu } from "./UserActionsMenu";

interface UsersTableProps {
  users: User[];
  expandedUsers: { [key: number]: boolean };
  onToggleExpand: (userId: number) => void;
  onEditUser: (user: User) => void;
  onDeleteUser: (user: User) => void;
  onToast: (title: string, description: string) => void;
}

export function UsersTable({ 
  users, 
  expandedUsers, 
  onToggleExpand,
  onEditUser, 
  onDeleteUser,
  onToast
}: UsersTableProps) {
  return (
    <div className="rounded-md border">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="p-4 text-left font-medium">Name</th>
            <th className="p-4 text-left font-medium">Email</th>
            <th className="p-4 text-left font-medium">Role</th>
            <th className="p-4 text-left font-medium">Department</th>
            <th className="p-4 text-left font-medium">Status</th>
            <th className="p-4 text-left font-medium">Permissions</th>
            <th className="p-4 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 
                  user.role === 'Manager' ? 'bg-blue-100 text-blue-800' : 
                  'bg-green-100 text-green-800'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="p-4">{user.department || '-'}</td>
              <td className="p-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.status || 'Active'}
                </span>
              </td>
              <td className="p-4">
                {user.permissions ? (
                  <button className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                    View
                  </button>
                ) : '-'}
              </td>
              <td className="p-4 text-right">
                <UserActionsMenu 
                  user={user} 
                  onEdit={onEditUser} 
                  onDelete={onDeleteUser}
                  onToast={onToast}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
