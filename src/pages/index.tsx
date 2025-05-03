import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Menu, X, BarChart, Shield, Zap, CheckCircle } from 'lucide-react';

export default function SaasLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-cyan-500 blur-xl"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-0"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav 
          className={`fixed w-full z-50 px-4 md:px-8 py-4 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <motion.div 
                className="text-xl font-bold flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-cyan-400 mr-1">•</span> NAVIDA
              </motion.div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#" 
                className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Why We Serve
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Navida Align
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Services
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Insights
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Career
              </motion.a>
              <motion.button 
                className="bg-cyan-500 text-white px-6 py-2 rounded-full flex items-center text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 pt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
                <a href="#" className="text-lg font-medium border-b border-gray-800 pb-2">Why We Serve</a>
                <a href="#" className="text-lg font-medium border-b border-gray-800 pb-2">Navida Align</a>
                <a href="#" className="text-lg font-medium border-b border-gray-800 pb-2">Services</a>
                <a href="#" className="text-lg font-medium border-b border-gray-800 pb-2">Insights</a>
                <a href="#" className="text-lg font-medium border-b border-gray-800 pb-2">About</a>
                <a href="#" className="text-lg font-medium border-b border-gray-800 pb-2">Career</a>
                <button className="bg-cyan-500 text-white px-6 py-3 rounded-full flex items-center justify-center mt-4 shadow-lg shadow-cyan-500/30">
                  Let's Talk
                </button>
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen pt-20 pb-12 px-4 md:px-8 flex items-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/70 text-xs text-cyan-400 mb-6">
                  <span>The Future Of Banking is Here</span>
                  <div className="bg-cyan-400 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center ml-2">
                    <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Accelerate your B2B
                <br />
                Revenue Generation
              </motion.h1>

              <motion.p 
                className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Ampersand helps organizations with large cash deposits, reduce their risk of loss, 
                secure strong rates and align with banks that help you succeed.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.button 
                  className="bg-cyan-500 text-white px-8 py-3 rounded-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button 
                  className="bg-gray-800/50 backdrop-blur-sm text-white px-8 py-3 rounded-md border border-gray-700 hover:bg-gray-800/70 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <motion.div 
                  className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold mb-1">160<span className="text-cyan-400">+</span></div>
                  <div className="text-sm text-gray-400">Client distribution</div>
                </motion.div>
                <motion.div 
                  className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold mb-1">1M<span className="text-cyan-400">+</span></div>
                  <div className="text-sm text-gray-400">Distributed Customer</div>
                </motion.div>
                <motion.div 
                  className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold mb-1">200<span className="text-cyan-400">+</span></div>
                  <div className="text-sm text-gray-400">Yearly Available</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="pb-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg text-gray-400">Featured In</h3>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-24 md:w-32">
                <div className="text-white font-bold text-lg md:text-xl">FOX<span className="text-sm align-super">®</span> BUSINESS</div>
              </div>
              <div className="w-24 md:w-32">
                <div className="text-white font-bold text-lg md:text-xl">BARRON'S</div>
              </div>
              <div className="w-24 md:w-32">
                <div className="text-white font-bold text-lg md:text-xl">AMERICAN BANKER</div>
              </div>
              <div className="w-24 md:w-32">
                <div className="text-white font-bold text-lg md:text-xl">NewsWeek</div>
              </div>
              <div className="w-24 md:w-32">
                <div className="text-white font-bold text-lg md:text-xl">S&P Global</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-gray-900">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/70 text-xs text-cyan-400 mb-6">
                <span>Our Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative Solutions for Modern Banking</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform combines advanced technology with industry expertise to provide comprehensive solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                  y: -5 
                }}
              >
                <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-6">
                  <BarChart className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
                <p className="text-gray-400 mb-6">
                  Get real-time insights into cash management performance with custom dashboards and reports.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="text-cyan-400 mr-2" size={16} />
                    <span className="text-sm">Custom data visualization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-cyan-400 mr-2" size={16} />
                    <span className="text-sm">Performance benchmarking</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                  y: -5 
                }}
              >
                <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-6">
                  <Shield className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Risk Management</h3>
                <p className="text-gray-400 mb-6">
                  Reduce exposure with our advanced risk assessment tools and diversification strategies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="text-cyan-400 mr-2" size={16} />
                    <span className="text-sm">Automated monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-cyan-400 mr-2" size={16} />
                    <span className="text-sm">Real-time alerts</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                  y: -5 
                }}
              >
                <div className="bg-cyan-500/20 p-3 rounded-full w-fit mb-6">
                  <Zap className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Accelerated Growth</h3>
                <p className="text-gray-400 mb-6">
                  Optimize your banking relationships for improved rates and strategic partnerships.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="text-cyan-400 mr-2" size={16} />
                    <span className="text-sm">Bank relationship scoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-cyan-400 mr-2" size={16} />
                    <span className="text-sm">Rate optimization</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8">
          <motion.div 
            className="container mx-auto max-w-4xl bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your B2B revenue?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations that have optimized their banking relationships and improved financial performance.
              </p>
              <motion.button 
                className="bg-cyan-500 text-white px-8 py-3 rounded-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-8 bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xl font-bold flex items-center mb-6 md:mb-0">
                <span className="text-cyan-400 mr-1">•</span> NAVIDA
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Career</a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Navida. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}