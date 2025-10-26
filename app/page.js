"use client"; 
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users by name..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <a
              key={user.id}
              href={`/users/${user.id}`}
              className="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition"
            >
              <h2 className="text-xl font-semibold text-black">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No users found.
          </p>
        )}
      </div>
    </main>
  );
}
