// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Winter Donation Campaigns</h2>
          <p className="text-gray-400 text-sm">
            Join us in spreading warmth this winter. Donate clothing and essentials 
            to bring comfort to those in need.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/datacollection" className="hover:text-blue-400 transition-colors">
                My Collection
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">📞 +880 1234-567890</p>
          <p className="text-gray-400 text-sm">📧 winterhelp@donations.org</p>
          <p className="text-gray-400 text-sm">📍 Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Winter Donation Campaigns. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
