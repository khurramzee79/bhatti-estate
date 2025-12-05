import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/assets/BhattiEstate.png" alt="Bhatti Estate" className="h-10 w-auto bg-white rounded p-1" />
              <div>
                <span className="block text-lg font-heading font-bold text-white">BHATTI ESTATE</span>
                <span className="block text-xs tracking-widest text-primary font-bold">& BUILDERS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner for buying, selling, and constructing properties in Malir Cantt and Askari sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/listings" className="hover:text-primary transition-colors">Properties</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & News</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Construction Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>Malir Cantonment,<br/>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:03002334448" className="hover:text-white">0300 233 4448</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:03352334448" className="hover:text-white">0335 233 4448</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@bhattiestate.com" className="hover:text-white">info@bhattiestate.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe for the latest property rates and investment tips.</p>
            <form name="newsletter" method="POST" data-netlify="true" className="flex flex-col gap-2">
              <input type="hidden" name="form-name" value="newsletter" />
              <input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                className="bg-gray-700 text-white border-none rounded px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                required 
              />
              <button type="submit" className="bg-primary text-white font-bold py-2 rounded text-sm hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bhatti Estate & Builders. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}