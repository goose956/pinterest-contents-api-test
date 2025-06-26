export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-900 mb-8 text-center">
            Unlock the Full Potential of Pinterest with Our Scraper Tool
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">
            Effortlessly Gather, Analyze, and Utilize Pinterest Data Like Never Before
          </p>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed mb-8">
              At Pinterest Scraper, we provide a powerful, easy-to-use tool designed for marketers, researchers, and businesses aiming to gain deeper insights from Pinterest. Our service allows you to scrape and compile valuable data from Pinterest boards, pins, and profiles, enabling you to analyze trends, understand user behavior, and drive your marketing strategies with precision and confidence. With our state-of-the-art scraping technology, you can bypass the tedious manual data collection process and focus on what truly matters—turning insights into action.
            </p>
            <div className="grid md:grid-cols-3 gap-8 my-16">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Comprehensive Data Extraction: Seamlessly scrape data from Pinterest, including images, descriptions, and metadata, with just a few clicks.</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Real-Time Analytics: Get immediate access to data insights and analytics, helping you stay ahead of trends and adapt to market changes swiftly.</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">User-Friendly Interface: Designed for both tech-savvy professionals and beginners, our intuitive interface makes data scraping accessible to everyone.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}