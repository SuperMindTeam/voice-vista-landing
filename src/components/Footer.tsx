
import React from 'react';
import { MicIcon, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-5">
              <MicIcon className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-display font-semibold text-xl">SuperMind</span>
            </div>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              The most advanced AI voice assistant for business, providing seamless customer interactions through natural conversation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-medium text-lg mb-5">Connect With Us</h3>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex flex-col items-start">
            <h3 className="font-medium text-lg mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-600">hello@getsupermind.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SuperMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
