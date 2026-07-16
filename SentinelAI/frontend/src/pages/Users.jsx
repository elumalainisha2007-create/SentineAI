import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import UserProfile from "../components/UserProfile";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users Management</h1>
      <div>
        {users.map((user) => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;