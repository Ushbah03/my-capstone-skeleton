export default async function HealthPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3", {
    cache: "no-store",
  });
  
  if (!res.ok) throw new Error("Failed to fetch data");
  const users = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🏥 System Status: Operational</h1>
      <div className="space-y-4">
        {users.map((user: any) => (
          <div key={user.id} className="p-4 border border-gray-200 rounded bg-white shadow-sm">
            <h2 className="font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}