import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
       

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-500"
        >
          <p>
            &copy; {currentYear} DevStack. All rights reserved. | Designed with{' '}
            <HeartIcon className="w-4 h-4 inline text-rose-500" /> by Sachin Thorat
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;