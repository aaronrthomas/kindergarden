
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gradient-to-r rounded-lg flex items-center justify-center">
              <span><img src="/logo2.png" alt="" /></span>
            </div>
              <span className="ml-3 text-xl font-bold">Kool Kids</span>
            </div>
            <p className="text-gray-400">
              Where tiny steps lead to big dreams!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Why Us?</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Art & Craft</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Early Learning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Music & Movement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Social Skills</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Safe Environment</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Joyful Days</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-200">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <a href="tel:+91 9746095000 / +91 9746606930" className="hover:text-white transition-colors duration-200">
                  +91 9746095000 / +91 9746606930
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DesignCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
