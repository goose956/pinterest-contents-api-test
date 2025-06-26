import React from 'react';

export default function Client-portal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b h-16 sticky top-0 z-50">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Client Portal
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Client</span>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Dashboard</h1>
          <p className="text-gray-600">Access your reports, project updates, and communication tools</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Reports</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded border">
                  <div>
                    <h3 className="font-medium text-gray-900">Monthly Performance Report</h3>
                    <p className="text-sm text-gray-600">Generated on March 15, 2024</p>
                  </div>
                  <div className="px-4 py-2 bg-blue-600 text-white rounded text-sm cursor-pointer">
                    Download
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded border">
                  <div>
                    <h3 className="font-medium text-gray-900">Analytics Summary</h3>
                    <p className="text-sm text-gray-600">Generated on March 10, 2024</p>
                  </div>
                  <div className="px-4 py-2 bg-blue-600 text-white rounded text-sm cursor-pointer">
                    Download
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Project Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Website Redesign</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Completed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">SEO Optimization</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Content Strategy</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Planning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Projects</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-medium text-green-600">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">In Progress</span>
                  <span className="font-medium text-yellow-600">3</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Messages</h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                  <p className="text-sm text-gray-700">New report is ready for review</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
                <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                  <p className="text-sm text-gray-700">Project milestone completed</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}