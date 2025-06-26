export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-900 mb-8 text-center">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            pinterest scraper Management Panel
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Users</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,234</div>
              <p className="text-gray-600">Total registered users</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Revenue</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">$45,678</div>
              <p className="text-gray-600">Monthly revenue</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Orders</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">567</div>
              <p className="text-gray-600">This month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}