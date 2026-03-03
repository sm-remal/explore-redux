import './App.css'
import ProductsList from './components/ProductsList/ProductsList'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Premium Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
                Redux
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-indigo-600 transition-colors">Collections</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">New Arrivals</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Offers</a>
            </div>

            <div className="flex items-center gap-4">
               <button className="p-2 text-gray-400 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
               </button>
               <div className="relative">
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 12H4l1-12z" />
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-16 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Discover Future <span className="text-indigo-600">Technology.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Experience the next generation of smartphones and accessories with our curated premium collection.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto pb-20">
        <ProductsList />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Gemini E-Commerce. Built with Passion & Redux.</p>
        </div>
      </footer>
    </div>
  )
}

export default App