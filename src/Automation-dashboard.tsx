import React from 'react';

export default function Automation-dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b h-16 fixed top-0 right-0 left-0 z-50">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Automation Dashboard Builder
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">AI Automation Agency</span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Build Your Dashboard
            </h2>
            
            <nav className="space-y-2">
              <div className="w-full text-left p-4 rounded-lg bg-blue-50 border-2 border-blue-200 text-blue-700 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 bg-blue-600 text-white">
                    1
                  </div>
                  <div>
                    <div className="font-medium">Dashboard Setup</div>
                    <div className="text-sm text-gray-500">Configure layout and charts</div>
                  </div>
                </div>
              </div>

              <div className="w-full text-left p-4 rounded-lg hover:bg-gray-50 border-2 border-transparent text-gray-700 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 bg-gray-200 text-gray-600">
                    2
                  </div>
                  <div>
                    <div className="font-medium">Data Sources</div>
                    <div className="text-sm text-gray-500">Connect webhooks and APIs</div>
                  </div>
                </div>
              </div>

              <div className="w-full text-left p-4 rounded-lg hover:bg-gray-50 border-2 border-transparent text-gray-700 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 bg-gray-200 text-gray-600">
                    3
                  </div>
                  <div>
                    <div className="font-medium">Access & Launch</div>
                    <div className="text-sm text-gray-500">Deploy and share dashboard</div>
                  </div>
                </div>
              </div>
            </nav>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Quick Stats</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Active Dashboards</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Clients</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Webhooks Active</span>
                  <span className="font-medium">24</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 ml-64 p-8 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Setup</h1>
              <p className="text-gray-600">Configure your automation dashboard layout and choose chart types</p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dashboard Name</label>
                    <input
                      type="text"
                      placeholder="Client A - Content Automation Dashboard"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Choose Dashboard Template</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">Content Marketing</h3>
                      <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Track blog posts, social media, and content performance</p>
                    
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="bg-white p-2 rounded">
                        <div className="h-8 flex items-end">
                          <div className="bg-blue-400 w-3 h-6 rounded-t mr-1"></div>
                          <div className="bg-blue-500 w-3 h-4 rounded-t mr-1"></div>
                          <div className="bg-blue-600 w-3 h-8 rounded-t"></div>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">Posts</div>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <svg width="32" height="32" className="transform -rotate-90">
                          <circle cx="16" cy="16" r="12" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                          <circle cx="16" cy="16" r="12" fill="none" stroke="#10b981" strokeWidth="4"
                            strokeDasharray="45 75" strokeDashoffset="0" />
                        </svg>
                        <div className="text-xs text-gray-600 mt-1">Engagement</div>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <div className="space-y-1">
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-green-500 h-1 rounded-full w-8"></div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-orange-500 h-1 rounded-full w-6"></div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">Traffic</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-2 border-gray-200 hover:border-gray-300 rounded-lg cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">Lead Generation</h3>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Monitor form submissions and conversion funnels</p>
                    
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="bg-white p-2 rounded">
                        <div className="h-8 flex items-end">
                          <div className="bg-emerald-400 w-3 h-5 rounded-t mr-1"></div>
                          <div className="bg-emerald-500 w-3 h-7 rounded-t mr-1"></div>
                          <div className="bg-emerald-600 w-3 h-6 rounded-t"></div>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">Forms</div>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <svg width="32" height="32" className="transform -rotate-90">
                          <circle cx="16" cy="16" r="12" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                          <circle cx="16" cy="16" r="12" fill="none" stroke="#f59e0b" strokeWidth="4"
                            strokeDasharray="56 75" strokeDashoffset="0" />
                        </svg>
                        <div className="text-xs text-gray-600 mt-1">Qualified</div>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <div className="space-y-1">
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-purple-500 h-1 rounded-full w-10"></div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-purple-400 h-1 rounded-full w-7"></div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">Funnel</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Data Sources & Webhooks</h2>
                <p className="text-sm text-gray-600 mb-4">Generated webhook URLs for your automation tools</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                    <div>
                      <div className="font-medium text-gray-900">Content Posts</div>
                      <div className="text-sm text-gray-600 font-mono">https://api.yoursite.com/webhook/content-posts-abc123</div>
                    </div>
                    <div className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
                      Copy
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                    <div>
                      <div className="font-medium text-gray-900">Lead Forms</div>
                      <div className="text-sm text-gray-600 font-mono">https://api.yoursite.com/webhook/lead-forms-def456</div>
                    </div>
                    <div className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
                      Copy
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Dashboard Preview</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-900">Sample Dashboard</h3>
                    <p className="text-sm text-gray-600">Client: Sample Client</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">127</div>
                      <div className="text-sm text-gray-600">Actions Completed</div>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                      <div className="text-2xl font-bold text-green-600">98.5%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                      <div className="text-2xl font-bold text-orange-600">24/7</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium text-gray-900 mb-3">Monthly Actions</h4>
                      <div className="h-24 flex items-end space-x-2">
                        <div className="bg-blue-400 w-6 h-16 rounded-t"></div>
                        <div className="bg-blue-500 w-6 h-20 rounded-t"></div>
                        <div className="bg-blue-600 w-6 h-24 rounded-t"></div>
                        <div className="bg-blue-700 w-6 h-18 rounded-t"></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">Jan - Apr 2024</div>
                    </div>

                    <div className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium text-gray-900 mb-3">Success Rate</h4>
                      <div className="h-24 flex justify-center items-center">
                        <div className="relative">
                          <svg width="60" height="60" className="transform -rotate-90">
                            <circle cx="30" cy="30" r="22" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                            <circle cx="30" cy="30" r="22" fill="none" stroke="#10b981" strokeWidth="6"
                              strokeDasharray="136 138" strokeDashoffset="0" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-sm font-bold text-emerald-600">98%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium text-gray-900 mb-3">Performance</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Speed</span>
                            <span>95%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-20"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Reliability</span>
                            <span>98%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full w-22"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer text-center font-medium">
                  Launch Dashboard
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}