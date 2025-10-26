import Link from "next/link";

export const revalidate = 0;

export default async function UserDetail({ params }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const user = await res.json();

  return (
    <main className="max-w-lg mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2 text-black">{user.name}</h1>
        <p className="text-black"><strong>Username:</strong> {user.username}</p>
        <p className="text-black"><strong>Email:</strong> {user.email}</p>
        <p className="text-black">
          <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>
        <p className="text-black"><strong>Company:</strong> {user.company.name}</p>
      <Link
  href="/"
  className="group inline-flex items-center gap-1 text-blue-600 font-medium transition-all duration-300 hover:text-blue-800"
>
  <span className="transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
  <span>Back</span>
</Link>


      </div>
    </main>
  );
}
