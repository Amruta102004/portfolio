export default function Projects() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 px-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold">Smart Notes App</h3>
          <p className="text-gray-600">CRUD notes app with filters</p>
          <div className="mt-4 flex gap-2">
            <button className="bg-gray-800 text-white px-3 py-1 rounded">GitHub</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Live</button>
          </div>
        </div>
      </div>
    </div>
  );
}
