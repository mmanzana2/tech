export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind Test Page</h1>
        <p className="text-gray-700 mb-6">
          This is a minimal test page to verify that Tailwind CSS is working correctly.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Blue Button
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
            Green Button
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
            Red Button
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
            Purple Button
          </button>
        </div>
      </div>
    </div>
  );
} 