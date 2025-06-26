import { ArrowRight, Star, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">pinterest scraper</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Welcome to pinterest scraper
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock the Power of Pinterest with Our Advanced Scraper
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pinterest Scraper is your go-to solution for extracting and analyzing vast amounts of data from Pinterest with ease and precision. Whether you are a digital marketer, content creator, or data analyst, our innovative scraping tool provides the insights you need to drive your business forward. With user-friendly features and robust data processing capabilities, Pinterest Scraper allows you to effortlessly compile and leverage Pinterest insights to enhance your marketing strategies, track trends, and gain a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center group transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-200 hover:border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose pinterest scraper?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the powerful features that make us the preferred choice for professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Data Extraction: Efficiently scrape pins, boards, and user data to gain in-depth insights into audience behavior and trending topics.</h3>
                <p className="text-gray-600 leading-relaxed">Experience the power of professional-grade solutions designed to elevate your business performance.</p>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-2bd1b4b25c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Comprehensive Data Extraction: Efficiently scrape pins, boards, and user data to gain in-depth insights into audience behavior and trending topics."
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Analytics: Access up-to-date analytics and actionable insights to make informed decisions and optimize your Pinterest marketing strategies.</h3>
                <p className="text-gray-600 leading-relaxed">Experience the power of professional-grade solutions designed to elevate your business performance.</p>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Real-Time Analytics: Access up-to-date analytics and actionable insights to make informed decisions and optimize your Pinterest marketing strategies."
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customizable Scraping Options: Tailor your data extraction process with customizable filters and parameters to meet your specific business needs.</h3>
                <p className="text-gray-600 leading-relaxed">Experience the power of professional-grade solutions designed to elevate your business performance.</p>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Customizable Scraping Options: Tailor your data extraction process with customizable filters and parameters to meet your specific business needs."
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="Jessica Morgan"
                className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-xl"
              />
            </div>
            <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
              "Pinterest Scraper has transformed the way we approach Pinterest marketing. The insights we gather are invaluable for crafting targeted campaigns and staying ahead of the competition."
            </blockquote>
            <div className="text-blue-200">
              <div className="font-semibold text-xl text-white">Jessica Morgan</div>
              <div className="text-lg">Social Media Strategist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Contact us today and discover how pinterest scraper can transform your business
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Email Us</h3>
                <p className="text-blue-700 text-lg">info@pinterestscraper.com</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Call Us</h3>
                <p className="text-purple-700 text-lg">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}