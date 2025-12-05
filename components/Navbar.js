import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Ensure you put the logo file in public/assets/BhattiEstate.png */}
              <img src="/assets/BhattiEstate.png" alt="Bhatti Estate" className="h-12 w-auto" />
              <div className="hidden md:block">
                <span className="block text-xl font-heading font-bold text-secondary">BHATTI ESTATE</span>
                <span className="block text-xs tracking-widest text-primary font-bold">& BUILDERS</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary hover:text-primary font-medium">Home</Link>
            <Link href="/listings" className="text-secondary hover:text-primary font-medium">Listings</Link>
            <Link href="/blog" className="text-secondary hover:text-primary font-medium">Blog</Link>
            <Link href="/services" className="text-secondary hover:text-primary font-medium">Services</Link>
            <Link href="/about" className="text-secondary hover:text-primary font-medium">About</Link>
            <Link href="/contact" className="text-secondary hover:text-primary font-medium">Contact</Link>
            <a href="tel:03002334448" className="bg-primary text-white px-4 py-2 rounded-md font-bold hover:bg-opacity-90 flex items-center gap-2">
              <Phone size={18} /> 0300 233 4448
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-secondary hover:bg-neutral">Home</Link>
            <Link href="/listings" className="block px-3 py-2 text-secondary hover:bg-neutral">Listings</Link>
            <Link href="/blog" className="block px-3 py-2 text-secondary hover:bg-neutral">Blog</Link>
            <Link href="/contact" className="block px-3 py-2 text-secondary hover:bg-neutral">Contact</Link>
            <a href="tel:03002334448" className="block w-full text-center bg-primary text-white mt-4 py-3 rounded font-bold">Call Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}