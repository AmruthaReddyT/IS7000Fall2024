
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUserForm from './CreateUser';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('http://3.218.8.102/api/account');
        const userAuthorities = response.data.authorities || [];
        setIsAdmin(userAuthorities.includes('ROLE_ADMIN'));
      } catch (err) {
        setError('Failed to fetch user details');
      }
    };
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://3.218.8.102/api/admin/users?page=0&size=20&sort=id,asc');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    const init = async () => {
      await fetchCurrentUser();
      fetchUsers();
    };

    init();
  }, []);

  const handleDelete = async (userLogin) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the user: ${userLogin}?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://3.218.8.102/api/admin/users/${userLogin}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.login !== userLogin));
      alert('User deleted successfully.');
    } catch (err) {
      alert('Failed to delete the user: ' + err.message);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  if (!isAdmin) {
    return (
      <div className="text-center mt-10 text-gray-600">
        You do not have permission to view this page.
      </div>
    );
  }

  return (
    <div className="bg-pink-500 min-h-screen flex flex-col items-center py-10">
      <h3 className="text-2xl font-bold text-white mb-6">Registered Users</h3>
      <ul className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 border-b last:border-b-0 border-gray-200 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-lg text-gray-800">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={() => handleDelete(user.login)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>

          </li>
        ))}
      </ul>
      <CreateUserForm />
    </div>
  );
}

export default Users;
