import Link from 'next/link';
import { Package, Camera, MessageCircle, FileVideo, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-8 text-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-widest text-white mb-6 uppercase">
            ARTICLE<span className="text-[#c05c4b]">.</span>
          </h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Camera className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FileVideo className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 border-b border-[#333333] pb-16">
          
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold mb-2">Help</h3>
            <Link href="#" className="hover:text-white transition-colors">Help Center</Link>
            <Link href="#" className="hover:text-white transition-colors">Shipping</Link>
            <Link href="#" className="hover:text-white transition-colors">Returns</Link>
            <Link href="#" className="hover:text-white transition-colors">Product Recalls</Link>
            <Link href="#" className="hover:text-white transition-colors">Corporate Responsibility</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold mb-2">Explore</h3>
            <Link href="#" className="hover:text-white transition-colors">Ideas & Inspiration</Link>
            <Link href="#" className="hover:text-white transition-colors">Gift Cards</Link>
            <Link href="#" className="hover:text-white transition-colors">Financing</Link>
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Reviews</Link>
            <Link href="#" className="hover:text-white transition-colors">Careers</Link>
            <Link href="#" className="hover:text-white transition-colors">Press</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold mb-2">Account</h3>
            <Link href="#" className="hover:text-white transition-colors">Login / Register</Link>
            <Link href="#" className="hover:text-white transition-colors">My Favorites</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold mb-2">For Professionals</h3>
            <Link href="#" className="hover:text-white transition-colors">Article Pro</Link>
            <Link href="#" className="hover:text-white transition-colors">Content Studio</Link>
            <Link href="#" className="hover:text-white transition-colors">Industries We Serve</Link>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm mt-1">Get new products and promotions in your inbox.</h3>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white text-black px-4 py-2 w-full focus:outline-none rounded-sm"
              />
              <button 
                type="submit" 
                className="bg-[#c05c4b] hover:bg-[#a84d3e] text-white px-6 py-2 w-max transition-colors font-semibold rounded-full mt-2 text-xs tracking-wider"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="flex items-center"><Package className="h-4 w-4 mr-1"/> USA/CA</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center">
            <span>Terms of Use • Privacy Policy • Do Not Sell My Personal Information • Cookie Settings • Accessibility • Sitemap</span>
            <span>Copyright © 2024 Article.com. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
