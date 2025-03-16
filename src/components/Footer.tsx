
import React from 'react';
import { MicIcon, Twitter, Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-5">
              <MicIcon className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-display font-semibold text-xl">Shiv AI</span>
            </div>
            <p className="text-gray-600 mb-6">
              The most advanced AI voice assistant for business, providing seamless customer interactions through natural conversation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">hello@tryshiv.ai</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-600">123 AI Boulevard, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shiv AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
