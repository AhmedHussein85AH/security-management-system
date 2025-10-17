import React from 'react';
import AppShell from "@/components/layouts/AppShell";
import UsersTable from "@/components/users/UsersTable";

const Users = () => {
  return (
    <AppShell>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">
          View and manage system users and their permissions.
        </p>
        <UsersTable />
      </div>
    </AppShell>
  );
};

export default Users;