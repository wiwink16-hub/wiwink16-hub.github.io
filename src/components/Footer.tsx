import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-primary">
              Lumière Jewels
            </h3>
            <p className="text-sm opacity-80">
              Timeless elegance crafted with precision and passion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 transition-opacity">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping" className="opacity-80 hover:opacity-100 transition-opacity">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="opacity-80 hover:opacity-100 transition-opacity">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="opacity-80 hover:opacity-100 transition-opacity">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/care-instructions" className="opacity-80 hover:opacity-100 transition-opacity">
                  Care Instructions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Lumière Jewels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
